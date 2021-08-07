import { Component, OnInit } from '@angular/core';
import { Category } from '../category';
import { CATEGORIES } from '../mock-categories';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css'],
})
export class CategoryComponent implements OnInit {
  constructor() {}
  ngOnInit(): void {}

  onSelect(category: Category): void {
    this.selectedCategory = category;
  }

  selectedCategory?: Category;
  categories = CATEGORIES;
}
