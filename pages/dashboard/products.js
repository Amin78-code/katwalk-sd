import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Layout from "../../components/layout/layout";
import AdminPanelLayout from "../../components/dashboard/admin-panel-layout/AdminPanelLayout";
import TitleAndTableCard from "../../components/dashboard/title-and-table-card/TitleAndTableCard";
import TableHeader from "../../components/dashboard/table-header/TableHeader";
import TwoColTableWithHeading from "../../components/dashboard/two-col-table-with-heading/TwoColTableWithHeading";
import CardBody from "../../components/dashboard/card-body/CardBody";
import TwoColTable from "../../components/dashboard/two-col-table/TwoColTable";
import HeadingBar from "../../components/heading-bar/HeadingBar";
import ContrastPipingTrimAbaya from "../../assets/images/products/Contrast Piping Trim Abaya.jpg";
import CurvyFrontLinebuttonAbaya from "../../assets/images/products/Curvy Front Line button Abaya.jpg";
import PearlEmbroideryAbaya from "../../assets/images/products/Pearl Embroidery Abaya.jpg";
import PrintedSleeveAbaya from "../../assets/images/products/Printed Sleeve Abaya.jpg";
import AbayaSetwithSideSlet from "../../assets/images/products/Abaya Set with Side Slet.jpg";
import WishListCard from "../../components/dashboard/wishlist-card/WishListCard";
import BottomShadowCard from "../../components/dashboard/bottom-shadow-card/BottomShadowCard";

const productsData = {
  headings: [
    "#",
    "name",
    "designer name",
    "Category",
    "Current Qty",
    "Base Price",
    "Options",
  ],
  data: [
    {
      value: ["1", "test 2", "Aliya Almusawi", "Abaya", "10", "500.00"],
    },
    {
      value: ["2", "TEST", "Aliya Almusawi", "Abaya", "87", " 1.00"],
    },
  ],
};

function Products() {
  return (
    <>
      <Layout>
        <div className="w-[100%] min-h-[100vh] h-[auto]">
          <AdminPanelLayout active={"Products"}>
            <HeadingBar heading={"products"} />
            <div>
              <AddNewCard />
            </div>
            <div className="w-[100%] pt-[12px]">
              <TitleAndTableCard width={"w-[100%] h-[100%]"}>
                <TableHeader>Products</TableHeader>
                <CardBody>
                  <TwoColTableWithHeading
                    data={productsData}
                    tableType={true}
                  />
                </CardBody>
              </TitleAndTableCard>
            </div>
          </AdminPanelLayout>
        </div>
      </Layout>
    </>
  );
}

function AddNewCard() {
  return (
    <Link href="/dashboard/products/uploads">
      <div className="w-[196px] rounded-[.25rem] bg-[#fff] taPoint3 cursor-pointer drop-shadow-[0_0.15rem_0.25rem_rgba(0,0,0,0.075)] hover:drop-shadow-[0_0.5rem_0.4rem_rgba(0,0,0,0.15)] p-[1rem] mb-[20px]">
        <div className="w-[60px] h-[60px] bg-[#6c757d] rounded-full mx-auto mb-[1rem] flex justify-center items-center text-[#fff] text-[50px]">
          +
        </div>
        <p className="fwr text-[1.125rem] text-[#c53a19] capitalize">
          add new product
        </p>
      </div>
    </Link>
  );
}

export default Products;
