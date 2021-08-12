import { Component, OnInit } from '@angular/core';
import { Category } from '../category';
import { MessageService } from '../message.service';
import { ServerApiService } from '../server-api.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css'],
})
export class CategoryComponent implements OnInit {
  constructor(
    private serverApiService: ServerApiService,
    public messageService: MessageService
  ) {}
  ngOnInit(): void {
    this.getCategories();
  }

  isToggled: boolean = false;
  categories: Category[] = [];

  getCategories(): void {
    this.isToggled = false;
    this.serverApiService
      .getCategories()
      .subscribe((categories) => (this.categories = categories));
  }

  create(newCategory: Category): void {
    if (!newCategory.name || newCategory.name.length > 128) {
      this.messageService.add(
        `Category cannot be empty and should have less than 128 characters`
      );
      return;
    }
    this.isToggled = false;
    this.serverApiService
      .createCategory({ name: newCategory.name })
      .subscribe(() => this.getCategories());
  }
}
