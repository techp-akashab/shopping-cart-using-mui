interface Rating {
  readonly rate: number;
  readonly count: number;
}
export interface Product {
  readonly id: number;
  readonly title: string;
  readonly price: string;
  readonly description: string;
  readonly category: string;
  readonly image: string;
  readonly rating: Rating;
}