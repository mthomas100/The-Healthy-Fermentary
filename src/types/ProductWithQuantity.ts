import { Product } from '../graphql/types';

export type ProductWithQuantity = Product & { quantity: number };
