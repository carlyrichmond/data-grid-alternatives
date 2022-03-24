import { CustomerPurchase, ProductType } from "./CustomerModel";

export const CUSTOMERS: string[] = ['W. E. Coyote', 'R. Runner', 'P. Le Pew', 'B. Bunny', 'D. Duck', 'M. Martian'];

export const PRODUCTS: ProductType[] = ['Anvil', 'Super Giant Rubber Band', 'Giant Rubber Band', 'Gift Card'];

export function generateCustomerPurchaseHistory(purchaseCount: number): CustomerPurchase[] {
    const customerPurchases: CustomerPurchase[] = [];

    for (let i = 0; i < purchaseCount; i++) {
        const orderDate: Date = new Date();
        orderDate.setDate(orderDate.getDate() - Math.random()*365*3);

        const customerName: string = getRandomValueFromList(CUSTOMERS);
        const product: ProductType = getRandomValueFromList(PRODUCTS) as ProductType;

        const purchase: CustomerPurchase = {
            customerName: customerName,
            product: product,
            orderId: (Math.random()*1920394657).toFixed(0).toString(),
            date: orderDate,
            orderStatus: i % 3 ? 'Shipped' : 'Delivered',
            price: +(Math.random() * (150 - 2.5) + 1).toFixed(2),
            recipient: generateRecipient(customerName, product)
        }

        customerPurchases.push(purchase);
    }

    function generateRecipient(customerName: string, productSent: ProductType): string | undefined {
        if (productSent != 'Gift Card') {
            return undefined;
        }

        const otherCustomers: string[] = CUSTOMERS.filter((value: string) => value !== customerName);
        return getRandomValueFromList(otherCustomers); 
    }

    function getRandomValueFromList(list: string[]): string {
        return list[Math.floor(Math.random()*list.length)]
    }

    return customerPurchases;
}