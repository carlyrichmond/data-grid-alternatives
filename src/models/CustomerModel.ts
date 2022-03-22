export interface CustomerSummary {
    name: string;
    net_purchases_gbp: number;
    item_purchase_count: number;
}
  
export interface CustomerSummaries {
    customers: CustomerSummary[];
}

export type ProductType = 'Anvil' | 'Super Giant Rubber Band' | 'Giant Rubber Band' | 'Gift Card';

export type OrderStatus = 'Pending' | 'Confirmed' | 'Shipped' | 'Delivered';

export interface CustomerPurchase {
    customerName: string;
    date: Date;
    orderId: string;
    product: ProductType;
    orderStatus: OrderStatus;
}