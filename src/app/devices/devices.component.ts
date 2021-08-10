import { Component, OnInit } from '@angular/core';
import { Category } from '../category';
import { Device } from '../device';
import { MessageService } from '../message.service';
import { ServerApiService } from '../server-api.service';

@Component({
  selector: 'app-devices',
  templateUrl: './devices.component.html',
  styleUrls: ['./devices.component.css'],
})
export class DevicesComponent implements OnInit {
  constructor(
    private serverApiService: ServerApiService,
    public messageService: MessageService
  ) {}
  ngOnInit(): void {
    this.getDevices();
    this.getCategories();
  }

  categoryOf(device: Device): Category {
    let thisCategory = null;
    for (let category of this.categories) {
      if (category.id === device.id) {
        thisCategory = category;
      }
    }
    return thisCategory ? thisCategory : this.categories[0];
  }

  devices: Device[] = [];
  categories: Category[] = [];

  getDevices(): void {
    this.serverApiService
      .getDevices()
      .subscribe((devices) => (this.devices = devices));
  }

  getCategories(): void {
    this.serverApiService
      .getCategories()
      .subscribe((categories) => (this.categories = categories));
  }

  create(newDevice: Device): void {
    // VALIDATE COLOR FIELD
    if (
      !newDevice.color ||
      newDevice.color.length > 16 ||
      /[^a-z]/i.test(newDevice.color)
    ) {
      this.messageService.add(
        `Device color cannot be empty and should have less than 16 characters with only letters`
      );
      return;
    }
    // VALIDATE PART NUMBER FIELD
    if (!newDevice.partNumber || newDevice.partNumber <= 0) {
      this.messageService.add(
        `Device partNumber cannot be empty and should be a positive integer`
      );
      return;
    }
    // VALIDATE CATEGORY FIELD
    if (!newDevice.CategoryId) {
      this.messageService.add(`Device category cannot be empty`);
      return;
    }
    this.serverApiService
      .createDevice(newDevice)
      .subscribe(() => this.getDevices());
  }
}
