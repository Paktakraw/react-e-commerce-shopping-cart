import React from "react";
import { add } from "./State/Slice/CartSlice";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

// styleพื้นหลังและรายการที่ต้องเเสดงบนหน้าเว็บไซต์ รูป ชื่อ ราคา
const ShoppingItem = ({ item }) => {
  const dispatch = useDispatch();
  const { id, image, price, name } = item;
  return (
    <div>
      <Link to={`/ItemDetail/${id}`}>
        <div className="bg-grey h-[400px] flex items-center justify-center">
          <img src={image} alt="" className="w-[200px]" />
        </div>
      </Link>
      <div className="mt-6 flex justify-between items-center px-4">
        <div>
          <div className="text-sm font-bold mb-3">{name}</div>
        </div>
        <div className="text-xl font-bold">${price}</div>
      </div>
      <button
        className="bg-grey p-3"
        onClick={() => {
          dispatch(add(item));
        }}
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ShoppingItem;
