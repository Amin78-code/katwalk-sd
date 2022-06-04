import React from "react";
import springImg from "../../assets/images/categories/spring.jpg";
import printImg from "../../assets/images/categories/print.jpg";
import blackImg from "../../assets/images/categories/black.jpg";
import eveningImg from "../../assets/images/categories/evening.jpg";
import formalImg from "../../assets/images/categories/formal.jpg";
import casualImg from "../../assets/images/categories/casual.jpg";
import ShopByCategorySection from "../shop-by-category-section/shopByCategorySection";
import allIcons from "../../assets/images/icons/all-icons.svg";

function ShopByCategory() {
  const shopByStyle = {
    title: "SHOP BY STYLE",
    text: "Explore what's trending and shop by your favorite style.",
    subCategories: [
      {
        img: springImg,
        name: "spring",
      },
      {
        img: printImg,
        name: "print",
      },
      {
        img: blackImg,
        name: "black",
      },
    ],
  };
  const shopByOccasion = {
    title: "SHOP BY Occasion",
    text: "We've got your look for every occasion!",
    subCategories: [
      {
        img: eveningImg,
        name: "evening",
      },
      {
        img: formalImg,
        name: "formal",
      },
      {
        img: casualImg,
        name: "casual",
      },
    ],
  };
  return (
    <>
      <ShopByCategorySection data={shopByStyle} />
      <ShopByCategorySection data={shopByOccasion} />
    </>
  );
}

export default ShopByCategory;
