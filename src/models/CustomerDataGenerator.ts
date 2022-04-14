import { CustomerPurchase, ProductCounts, ProductType } from "./CustomerModel";

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

export function generateProductData(): ProductCounts[] {
    const categories: string[] = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

    return categories.map((category: string) => {
       return {
        name: category,
        anvilCount: +(Math.random() * (15 - 1) + 1).toFixed(1),
        giantRubberBandCount: +(Math.random() * (5 - 1) + 1).toFixed(1), 
        superGiantRubberBandCount: +(Math.random() * (8 - 1) + 1).toFixed(1)
      };
    });
  }