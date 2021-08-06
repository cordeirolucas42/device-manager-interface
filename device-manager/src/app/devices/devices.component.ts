import { Component, OnInit } from '@angular/core';
import { Category } from '../category';
import { Device } from '../device';
import { CATEGORIES } from '../mock-categories';
import { DEVICES } from '../mock-devices';

@Component({
  selector: 'app-devices',
  templateUrl: './devices.component.html',
  styleUrls: ['./devices.component.css'],
})
export class DevicesComponent implements OnInit {
  constructor() {}
  ngOnInit(): void {}

  onSelect(device: Device): void {
    this.selectedDevice = device;
  }

  categoryOf(device: Device): Category {
    let thisCategory = null;
    for (let category of CATEGORIES) {
      if (category.id === device.id) {
        thisCategory = category;
      }
    }
    return thisCategory ? thisCategory : CATEGORIES[0];
  }

  selectedDevice?: Device;
  devices = DEVICES;
  categories = CATEGORIES;
}
