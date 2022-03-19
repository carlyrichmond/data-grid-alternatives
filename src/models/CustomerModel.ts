export interface CustomerSummary {
    name: string;
    net_purchases_gbp: number;
    item_purchase_count: number;
}
  
export interface CustomerSummaries {
    customers: CustomerSummary[];
}