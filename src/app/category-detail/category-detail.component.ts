import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Category } from '../category';
import { ServerApiService } from '../server-api.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-category-detail',
  templateUrl: './category-detail.component.html',
  styleUrls: ['./category-detail.component.css'],
})
export class CategoryDetailComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private serverApiService: ServerApiService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getCategory();
  }

  @Input() category?: Category;

  getCategory(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.serverApiService
      .getCategory(id)
      .subscribe((category) => (this.category = category));
  }

  delete(): void {
    if (this.category) {
      this.serverApiService
        .deleteCategory(this.category.id!)
        .subscribe(() => this.location.back());
    }
  }
}
