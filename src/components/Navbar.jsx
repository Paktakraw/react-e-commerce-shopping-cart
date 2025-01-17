import React, { useEffect, useState } from "react";
import { BiShoppingBag } from "react-icons/bi";
import { open } from "./State/Slice/CheckOutSlice";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Navbar = () => {
  // ส่งaction open ไป redux store เมื่อคลิกไอคอน cart ทำให้ state ใน Redux store ถูกอัปเดตตาม reducer ที่กำหนดไว้ในไฟล์ CheckOutSlice
  const dispatch = useDispatch();
  // อัปเดตstateจำนวนรวมในcart จากการกดปุ่ม add to cart
  const { amount } = useSelector((state) => state.cart);
  // สร้างstateสำหรับการเปลี่ยนแปลงที่แถบnavbarเวลา scroll ลง
  const [scroll, setScroll] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 20);
    });
  }, []);

  return (
    <div
      className={`${
        scroll ? "bg-grey shadow-lg" : ""
      } fixed top-0 left-0 w-full z-20`}
    >
      <div className="flex items-center justify-between relative container py-4 px-2 mx-auto">
        <Link to="/">
          <div className="font-bold text-xl">MangoShop</div>
        </Link>
        <div
          className="relative cursor-pointer"
          onClick={() => dispatch(open())}
        >
          <BiShoppingBag className="text-3xl opacity-80" />
          {/* ตกแต่งstyleจุดแสดงตัวเลขของสินค้าในcart */}
          <div className="absolute w-4 h-4 rounded-full z-10 right-[-3px] bottom-[-3px] flex items-center justify-center text-[10px] bg-black text-white">
            {amount}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
