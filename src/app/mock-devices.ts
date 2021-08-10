import { Device } from './device';
import { CATEGORIES } from './mock-categories';

export const DEVICES: Device[] = [
  {
    id: 1,
    CategoryId: 1,
    color: 'pink',
    partNumber: 4286,
    Category: CATEGORIES[0],
  },
  {
    id: 2,
    CategoryId: 1,
    color: 'brown',
    partNumber: 6434,
    Category: CATEGORIES[0],
  },
  {
    id: 3,
    CategoryId: 3,
    color: 'black',
    partNumber: 2345,
    Category: CATEGORIES[2],
  },
  {
    id: 4,
    CategoryId: 4,
    color: 'opal',
    partNumber: 8678,
    Category: CATEGORIES[3],
  },
];
