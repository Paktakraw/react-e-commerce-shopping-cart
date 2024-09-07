import React from "react";
import { HiChevronLeft, HiTrash } from "react-icons/hi";
import { open } from "./State/Slice/CheckOutSlice";
import { useDispatch, useSelector } from "react-redux";
import CheckOutItem from "./CheckOutItem";
import { clear } from "./State/Slice/CartSlice";

// สร้างแถบ feature ด้านซ้าย ให้ดูจำนวนสินค้า เมื่อเรากดที่ cart
const CheckOut = () => {
  // ส่งaction open ไป redux store เมื่อคลิกไอคอน HiChevronLeft ทำให้ state ใน Redux store ถูกอัปเดตตาม reducer ที่กำหนดไว้ในไฟล์ CheckOutSlice
  const dispatch = useDispatch();
  // amount ใส่เข้ามาเพื่อให้เห็นยอดรวมจำนวนสินค้าในหน้า Checkout
  const { cartItem, total, amount } = useSelector((state) => state.cart);
  return (
    <div className="bg-transparentBlack fixed z-30 top-0 left-0 w-full h-screen">
      <div className="h-full bg-grey sm:w-[40rem] min-w-[15rem] overflow-y-auto">
        <div className="p-6">
          <div className="flex items-center justify-between">
            <div
              className="flex items-center cursor-pointer"
              onClick={() => {
                dispatch(open());
              }}
            >
              <HiChevronLeft />
              <span className="uppercase text-[0.95rem] select-none">
                Container Shopping
              </span>
            </div>
            <div>Shopping Bag ({amount})</div>
          </div>
          <div className="mt-8">
            {cartItem.length === 0 ? (
              <div className="uppercase text-center text-3xl">
                Your cart is empty
              </div>
            ) : (
              <>
                {/* ตรวจสอบว่า cart ว่างหรือไม่ ถ้าว่างจะแสดงข้อความ "Your cart is empty" และถ้ามีสินค้าจะแสดงรายการสินค้าโดยใช้ CheckOutItem component */}
                {cartItem.map((cartItem) => (
                  <CheckOutItem key={cartItem.id} cartItem={cartItem} />
                ))}
                {/* แสดงราคารวมของสินค้าใน checkout */}
                <div className="flex justify-between mt-12 items-center">
                  {/* toFixed(จำนวนจุดทศนิยมที่ต้องการ) */}
                  Total Cost: ${total.toFixed(2)}
                  <HiTrash
                    className="cursor-pointer text-3xl"
                    onClick={() => dispatch(clear())}
                  />
                </div>
                <div className="text-center cursor-pointer bg-black text-white p-3 mt-8">
                  CheckOut
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckOut;
