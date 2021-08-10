import { Component, OnInit } from '@angular/core';
import { Category } from '../category';
import { ServerApiService } from '../server-api.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css'],
})
export class CategoryComponent implements OnInit {
  constructor(private serverApiService: ServerApiService) {}
  ngOnInit(): void {
    this.getCategories();
  }

  categories: Category[] = [];

  getCategories(): void {
    this.serverApiService
      .getCategories()
      .subscribe((categories) => (this.categories = categories));
  }
}
