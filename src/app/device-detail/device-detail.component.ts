import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Category } from '../category';
import { Device } from '../device';
import { ServerApiService } from '../server-api.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-device-detail',
  templateUrl: './device-detail.component.html',
  styleUrls: ['./device-detail.component.css'],
})
export class DeviceDetailComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private serverApiService: ServerApiService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getDevice();
    this.getCategories();
  }

  @Input() device?: Device;

  categories: Category[] = [];

  getCategories(): void {
    this.serverApiService
      .getCategories()
      .subscribe((categories) => (this.categories = categories));
  }
  getDevice(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.serverApiService
      .getDevice(id)
      .subscribe((device) => (this.device = device));
  }

  delete(): void {
    if (this.device) {
      this.serverApiService
        .deleteDevice(this.device.id)
        .subscribe(() => this.location.back());
    }
  }
}
