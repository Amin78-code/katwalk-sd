import React, { useState, useRef, useEffect } from "react";
import GoToTop from "../../go-to-top/go-to-top";  
import styles from './AdminPanelLayout.module.css'
import SideBar from "./sidebar/sideBar";

const AdminPanelLayout = ({ children, footer, active }) => {
  
  return (
    <>
    <div className={`${styles.admin_main_div} w-[100%] flex justify-start leading-[1.5] tracking-[0.5px] mt-[80px] px-[47px] pb-[3rem] pt-[28px] overflow-y-auto overflow-x-visible`}>
      <SideBar active={active} />
      <div className={`${styles.right_main_div} h-[100%] overflow-y-visible overflow-x-visible pl-[30px]`}>
        {children}
      </div>
    </div>
    </>
  );
};

export default AdminPanelLayout;
