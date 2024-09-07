import React from "react";
import { items } from "../CartItem";
import ShoppingItem from "./ShoppingItem";

// mapข้อมูลสินค้ามาแสดงที่หน้าเว็บ
const ShoppingContainer = () => {
  return (
    <div className="section grid lg:grid-cols-3 md:grid-cols-2 gap-6">
      {items.map((item) => {
        return <ShoppingItem key={item.id} item={item} />;
      })}
    </div>
  );
};

export default ShoppingContainer;
