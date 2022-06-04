import React from "react";
import Image from "next/image";
import nadaLineLogo from "../../assets/images/logo/nada-line.jpg";
import nadaLineCover from "../../assets/images/designers/nada-line/cover.jpg";
import Layout from "../../components/layout/layout";
import productImg1 from "../../assets/images/products/orange-1/img3.jpg";
import productImg2 from "../../assets/images/products/product2.jpg";
import productImg3 from "../../assets/images/products/product3.jpg";
import productImg4 from "../../assets/images/products/product4.jpg";
import ShopFilters from "../../components/shop-filters/shopFilters";
import ProductCard from "../../components/product-card/productCard";
import ImgLazyLoad from "../../components/img-lazy-load/img-lazy-load";

function DesignerDetail() {
  const otherProducts = [
    {
      img: productImg1,
      companyName: "Nada Line",
      productName: "Metallic Print Abaya",
      price: "760",
    },
    {
      img: productImg2,
      companyName: "Nada Line",
      productName: "Black Beaded Embroidery Abaya",
      price: "1.125",
    },
    {
      img: productImg3,
      companyName: "Nada Line",
      productName: "Crinkled Abaya with Printed Pattern",
      price: "760",
    },
    {
      img: productImg4,
      companyName: "Nada Line",
      productName: "Color Block Crinkled Abaya",
      price: "760",
    },
    {
      img: productImg2,
      companyName: "Nada Line",
      productName: "Black Beaded Embroidery Abaya",
      price: "1.125",
    },
    {
      img: productImg3,
      companyName: "Nada Line",
      productName: "Crinkled Abaya with Printed Pattern",
      price: "760",
    },
    {
      img: productImg1,
      companyName: "Nada Line",
      productName: "Metallic Print Abaya",
      price: "760",
    },
    {
      img: productImg2,
      companyName: "Nada Line",
      productName: "Black Beaded Embroidery Abaya",
      price: "1.125",
    },
  ];

  return (
    <>
      <Layout>
        <div className="w-[100%] mt-[65px]      lg:mt-[80px] sm:mt-[75px]">
          <div className="w-[100%] relative mb-[120px]">
            <div className="w-[100%] h-[495px]">
              <span className="image_container">
                {/* <Image src={nadaLineCover} alt="image" /> */}
                <ImgLazyLoad src={nadaLineCover} alt={"image"} classes={""}  />
              </span>
            </div>

            <div className="absolute w-[220px] h-[220px] border-[1px] border-[#D2CED6] bg-[#fff] rounded-[50%] overflow-hidden bottom-[-100px] left-[50%] translate-x-[-50%]           lg:left-[110px] lg:translate-x-[0]">
              <div className="w-[100%] h-[400px]">
                {/* <Image src={nadaLineLogo} alt="image" /> */}
                <ImgLazyLoad src={nadaLineLogo} alt={"image"} classes={""}  />
              </div>
            </div>
          </div>
        </div>
        <div className="shop-for-designer-page">
          <div className="w-[100%] mt-[80px]">
            <ShopFilters forDesigner={true} />
          </div>
          <div className="flex gap-x-[2px] mb-[60px] justify-center flex-wrap px-[0px]      sm:px-[10px] md:px-0">
            {otherProducts.map((value, index) => {
              return <ProductCard key={index} data={value} newTag={"none"} />;
            })}
          </div>
        </div>
      </Layout>
    </>
  );
}

export default DesignerDetail;
