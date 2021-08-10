import { Component, OnInit } from '@angular/core';
import { Category } from '../category';
import { Device } from '../device';
import { ServerApiService } from '../server-api.service';

@Component({
  selector: 'app-devices',
  templateUrl: './devices.component.html',
  styleUrls: ['./devices.component.css'],
})
export class DevicesComponent implements OnInit {
  constructor(private serverApiService: ServerApiService) {}
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
}
