import { faCartFlatbed, faGift, faHouseCircleCheck, faTruckFast, faTruckRampBox, faWandMagic, faWandMagicSparkles, faWeightHanging, IconDefinition } from '@fortawesome/free-solid-svg-icons'

export interface CustomerSummary {
    name: string;
    net_purchases_gbp: number;
    item_purchase_count: number;
}
  
export interface CustomerSummaries {
    customers: CustomerSummary[];
}

export type ProductType = 'Anvil' | 'Super Giant Rubber Band' | 'Giant Rubber Band' | 'Gift Card';

type IconMapping<T extends string> = {
    [key in T]: IconDefinition;
};

export const productIconMapping: IconMapping<ProductType> = {
    'Anvil': faWeightHanging, 
    'Super Giant Rubber Band': faWandMagicSparkles,
    'Giant Rubber Band': faWandMagic,
    'Gift Card': faGift
};

export type OrderStatus = 'Pending' | 'Awaiting Dispatch' | 'Shipped' | 'Delivered';

export const orderStatusMapping: IconMapping<OrderStatus> = {
    'Pending': faCartFlatbed, 
    'Awaiting Dispatch': faTruckRampBox,
    'Shipped': faTruckFast,
    'Delivered': faHouseCircleCheck
};

export interface CustomerPurchase {
    customerName: string;
    recipient?: string;
    date: Date;
    orderId: string;
    product: ProductType;
    orderStatus: OrderStatus;
    price: number;
}

export interface ProductCounts {
    name: string;
    anvilCount: number;
    giantRubberBandCount: number; 
    superGiantRubberBandCount: number;
  }