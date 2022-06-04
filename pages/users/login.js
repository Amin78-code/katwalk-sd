import React from "react";
import Image from "next/image";
import Hero from "../../components/hero/hero";
import Layout from "../../components/layout/layout";
import ShopByCategory from "../../components/shop-by-category/shopByCategory";
import TextImgSection from "../../components/text-img-section/textImgSection";
import loginBgImg from "../../assets/images/login-bg.jpg";
import loginBgImgMob from "../../assets/images/login-bg-mob.jpg";
import Features from "../../components/features/features";
import HeadingAndText from "../../components/heading-and-text/headingAndText";
import styles from "../../components/login.module.css";
import ImgLazyLoad from "../../components/img-lazy-load/img-lazy-load";

function Login() {
  return (

    <Layout footer={"none"}> 
      {/* object-position: 'top' */}
      <div
        className={`${styles.login_main_div} overflow-hidden relative w-[100%] pt-[50px] flex justify-end items-start `}
      >
        <div className={`${styles.login_bg_img_div} absolute w-[100%] h-[100%] z-[-1] hidden     sm:block`}>
          <span className="image_container ">
            {/* <Image src={loginBgImg} alt="image" />  */}
            <ImgLazyLoad src={loginBgImg} alt={"image"} classes={''} />
          </span>
        </div>
        <div className={`${styles.login_bg_img_div} absolute w-[100%] h-[100%] z-[-1] block      sm:hidden`}>
          <span className="image_container "> 
            {/* <Image src={loginBgImgMob} alt="image" /> */}
            <ImgLazyLoad src={loginBgImgMob} alt={"image"} classes={''} />
          </span>
        </div>
        <div className="w-[100%] mx-auto h-[210px] bg-[#000000bf] p-[25px] mt-[130px] ml-[15px] mr-[15px]     sm:ml-[50px] sm:mr-[50px] sm:w-[90%] lg:w-[34%] lg:mr-[60px]">
          <h1 className="fwr text-[#fff] text-[24px] text-center">
            Welcome to katwalk
          </h1>
          <div className="w-[100%] mt-[25px]">
            <div className="flex  w-[100%] gap-x-[18px]">
              <select className="fwl w-[100%] bg-[transparent] border-[1px] border-[#fff] text-[#aaa] text-[15px] p-[8px] mb-[8px] outline-none focus:outline-none">
                <option>92</option>
                <option>965</option>
                <option>968</option>
                <option>966</option>
                <option>971</option>
                <option>973</option>
                <option>974</option>
              </select>
              <input
                placeholder="500000000"
                className="fwl w-[100%] bg-[transparent] border-[1px] border-[#fff] text-[#aaa] text-[15px] p-[8px] mb-[8px]  outline-none focus:outline-none"
              />
            </div>
            <button className="red-on-hover-btn relative overflow-hidden ffr w-[100%] bg-[transparent] border-[1px] border-[#fff] text-[#fff] text-[14px] p-[8px] mb-[8px] uppercase">
              <span className="z-[2] relative">continue</span>
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Login;
