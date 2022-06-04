import React from "react";
import Hero from "../components/hero/hero";
import Layout from "../components/layout/layout";
import ShopByCategory from "../components/shop-by-category/shopByCategory";
import TextImgSection from "../components/text-img-section/textImgSection";
import katwalkBag from "../assets/images/designers/katwalk-bag.jpg";
import Features from "../components/features/features";
import HeadingAndText from "../components/heading-and-text/headingAndText";
import Image from "next/image";
import printImg from "../assets/images/categories/1print.jpg";
import styles from '../components/about.module.css';
import ImgLazyLoad from "../components/img-lazy-load/img-lazy-load";

function About() {
  const privacyPolicyContent = [
    {
      title: "1. Introduction",
      content: [
        {
          type: "paragraph",
          text: [
            "Welcome to Katwalk, an online shopping marketplace that connects sellers with buyers and provides marketing services to create added value for designers in Saudi Arabia particular and in wider GCC. Katwalk provides an unmatched shopping experience for modern Arab women through its website ('Platform', 'katwalk', 'we', 'our', 'us')",
            "'Katwalk' is a registered trademark owned by Fashion Platform Est., commercial registration number: 2062617591, and VAT registration number: 310401691200003",
            "- These Terms of Service (“Terms”, “Terms of Service”) govern your use of our website/app located at  (together or individually “Service”) operated by Katwalk.",
            "- Our Privacy Policy also governs your use of our Service and explains how we collect, safeguard and disclose information that results from your use of our website",
            "- Your agreement with us includes these Terms and our Privacy Policy (“Agreements”). You acknowledge that you have read and understood the Agreements and agreed to be bound of them.",
            "-If you do not agree with (or cannot comply with) the Agreements, then you may not use the Service. In order to find a solution, please let us know by emailing us at customercare@katwalk.sa. These Terms apply to all visitors, users and others who wish to access or use the Service.",
          ],
        },
      ],
    },
  ];

  return (
    <>
      <Layout>
        <div className="w-[100%] max-w-[1530px] h-[auto] mt-[120px] mb-[20px] px-[15px] mx-auto flex flex-col     xl:h-[790px] lg:flex-row md:px-[50px] nd:mt-[120px]">
          <div className={`${styles.left_img_main_div} max-w-[550px] w-[100%] image_container2`}>
            {/* <span className={`${styles.left_img_main_div} max-w-[550px] w-[100%] image_container2 block`}> */}
              {/* <Image src={printImg} alt="image" /> */}
              <ImgLazyLoad src={printImg} alt={"image"} classes={""} />
            {/* </span> */}
          </div>
          <div className="text-center max-w-[762px] px-[0px] mx-auto pt-[40px] pb-[20px]     lg:px-[80px] md:px-[20px] md:pt-[50px] md:pb-[50px]">
            <h1 className=" fahkwang-light text-[28px] text-center leading-[1.5] tracking-[0.5] mb-[13px]    md:mb-[23px]">
              About Katwalk
            </h1>
            <p className="work-light text-[#6b6e73] text-[15px] leading-[28px] tracking-[0.5px] pt-[15px]">
              {" "}
              We live in a time when Arabian fashion has evolved from the
              traditional norm to become a part of womens chic everyday wear.
            </p>
            <p className="work-light text-[#6b6e73] text-[15px] leading-[28px] tracking-[0.5px] pt-[15px]">
              katwalk exists to make sure women have the shopping experience
              they have always wanted. We elevate traditional local shopping to
              a modern and seamless shopping experience.
            </p>
            <p className="work-light text-[#6b6e73] text-[15px] leading-[28px] tracking-[0.5px] pt-[15px]">
              At katwalk, we’re doing shopping differently. katwalk is an
              elegant and sophisticated marketplace that connects creative and
              emerging designers with fashion-forward customers, bringing
              together what’s new in the world of Arabian fashion.
            </p>
            <p className="work-light text-[#6b6e73] text-[15px] leading-[28px] tracking-[0.5px] pt-[15px]">
              katwalk reflects modest fashion with a modern twist by providing
              inclusive services to talented designers to make an impact and
              forge the future of Arabian fashion.
            </p>
            <p className="work-light text-[#6b6e73] text-[15px] leading-[28px] tracking-[0.5px] pt-[15px]">
              Welcome to katwalk
            </p>
          </div>
        </div>
      </Layout>
    </>
  );
}

export default About;
