import { ItemStatus } from './item-status.enum';

export interface Item {
  id: string;
  name : string;
  price: number;
  description: string;
  status?: ItemStatus; // enum型で定義
}