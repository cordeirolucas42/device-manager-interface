import { Category } from './category';

export interface Device {
  id?: number;
  CategoryId: number;
  color: string;
  partNumber: number;
  createdAt?: string;
  updatedAt?: string;
  Category?: Category;
}
