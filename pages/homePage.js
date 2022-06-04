import React from "react";
import Hero from "../components/hero/hero";
import Layout from "../components/layout/layout";
import ShopByCategory from "../components/shop-by-category/shopByCategory";
import TextImgSection from "../components/text-img-section/textImgSection";
import katwalkBag from "../assets/images/designers/katwalk-bag.jpg";
import bestSellingProduct from "../assets/images/best-selling/best-selling-product.jpg";
import Features from "../components/features/features";
import allIcons from "../assets/images/icons/all-icons.svg";

function HomePage() {
  const designerData = {
    title: "designers",
    text: "Explore our talented and independent designers.",
    img: katwalkBag,
  }; 
  const bestSellingData = {
    title: "Best Selling",
    text: "Our customers' favorite picks",
    img: bestSellingProduct,
  }
  return (
    <>
      <Layout>
        <Hero />
        <ShopByCategory />
        <TextImgSection data={designerData} />
        <TextImgSection data={bestSellingData} />
        <Features />
      </Layout>
    </>
  );
}

export default HomePage;
