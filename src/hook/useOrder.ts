import { useState } from "react";
import { MenuItem, OrderItem } from "../types";

export default function useOrder() {
  const [order, setOrder] = useState<OrderItem[]>([]);
  const [tip, setTip] = useState(0);

  const addItem = (item: MenuItem) => {
    const itemInOrder = order.find(orderItem => orderItem.id === item.id);

    if (itemInOrder) {
      const updatedOrder = order.map(orderItem => orderItem.id === item.id
          ? { ...orderItem, quantity: orderItem.quantity + 1 }
          : orderItem
      );
      setOrder(updatedOrder);
    } else {
      const newItem = { ...item, quantity: 1 };
      setOrder([...order, newItem]);
    }
  };

  const removeItem = (id: number) => {
    const updatedOrder = order.filter(item => item.id !== id);
    setOrder(updatedOrder);
  };

  const changeQuantity = (id: number, delta: number) => {
    const updatedOrder = order
      .map(item => {
        if (item.id === id) {
          const newQuantity = item.quantity + delta;
          return newQuantity > 0 ? { ...item, quantity: newQuantity } : null;
        }
        return item;
      })
      .filter(Boolean) as OrderItem[]; // Filtra los `null`

    setOrder(updatedOrder);
  };

  const placeHorder = () => {
    setOrder([]);
    setTip(0);
  }

  return {
    order,
    addItem,
    removeItem,
    changeQuantity,
    tip,
    setTip,
    placeHorder,
  };
}
