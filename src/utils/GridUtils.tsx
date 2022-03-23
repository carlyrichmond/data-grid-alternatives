import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ICellRendererParams } from "ag-grid-community";
import { OrderStatus, orderStatusMapping, ProductType, productIconMapping } from "../models/CustomerModel";

export function dateFormatter(params: { data: { date: Date; }; }) {
    const orderDate = params.data.date;
    const options: Intl.DateTimeFormatOptions = { weekday: 'short', year: 'numeric', month: 'long', day: 'numeric' };

    return orderDate.toLocaleDateString('en-GB', options);
}

export function shipmentStatusFormatter(params: ICellRendererParams) {
    const status: OrderStatus = params.data.orderStatus as OrderStatus;
    const icon = orderStatusMapping[status];
    return <span><FontAwesomeIcon className="product-icon" icon={icon}/>{status}</span>
}

export function productFormatter(params: ICellRendererParams) {
    const product: ProductType = params.data.product as ProductType;
    const icon = productIconMapping[product];
    return <span><FontAwesomeIcon className="product-icon" icon={icon}/>{product}</span>
}