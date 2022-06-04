import React from "react";
import Image from "next/image";
import Layout from "../../components/layout/layout";
import AdminPanelLayout from "../../components/dashboard/admin-panel-layout/AdminPanelLayout";
import TitleAndTableCard from "../../components/dashboard/title-and-table-card/TitleAndTableCard";
import TableHeader from "../../components/dashboard/table-header/TableHeader";
import TwoColTableWithHeading from "../../components/dashboard/two-col-table-with-heading/TwoColTableWithHeading";
import CardBody from "../../components/dashboard/card-body/CardBody";
import TwoColTable from "../../components/dashboard/two-col-table/TwoColTable";
import HeadingBar from "../../components/heading-bar/HeadingBar";
import verified from "../../assets/images/icons/verified.png";

import statusCard1 from "../../assets/images/dashboard/home/status-card1.svg";
import statusCard2 from "../../assets/images/dashboard/home/status-card2.svg";
import statusCard3 from "../../assets/images/dashboard/home/status-card3.svg";

import styles from "../../components/home.module.css";

const statusCardData = [
  {
    number: "2",
    title: "Products",
    svg: statusCard1,
  },
  {
    number: "0",
    title: "Total sale",
    svg: statusCard2,
  },
  {
    number: "0",
    title: "Total earnings",
    svg: statusCard3,
  },
  {
    number: "0",
    title: "Successful orders",
    svg: statusCard1,
  },
];
const ordersData = [
  { title: "Total orders", value: "0" },
  { title: "Pending orders", value: "0" },
  { title: "Cancelled orders", value: "0" },
  { title: "Successful orders", value: "0" },
];
const productsData = {
  headings: ["category", "product"],
  data: [
    {
      value: ["Abaya", 2],
    },
  ],
};

function AdminPanel() {
  return (
    <>
      <Layout>
        <div className="w-[100%] min-h-[100vh] h-[auto]">
          <AdminPanelLayout active={"Dashboard"}>
            <HeadingBar heading={"dashboard"} />
            <div className="flex justify-between gap-x-[20px]">
              {statusCardData.map((value, index) => {
                return (
                  <StatusCard key={value + 1} data={value} index={index} />
                );
              })}
            </div>
            <div className="w-[100%] flex gap-x-[20px]">
              <TitleAndTableCard width={"w-[56.25%]"}>
                <TableHeader>Orders</TableHeader>
                <CardBody>
                  <TwoColTable data={ordersData} />
                </CardBody>
              </TitleAndTableCard>
              <div className="mt-[1.5rem] w-[43.75%]">
                <TitleAndTableCard>
                  {/* <CardBody p={t:"10",r:"20",b:"10",l:"40"}> */}
                  <CardBody broad={true}>
                    <div className="flex justify-center items-center">
                      <div className="max-w-[130px] max-h-[130px] my-[5px]">
                        <span className="image_container">
                          <Image src={verified} alt="image" />
                        </span>
                      </div>
                    </div>
                  </CardBody>
                </TitleAndTableCard>
              </div>
            </div>
            <div className="w-[100%] flex gap-x-[20px] mt-[20px]">
              <TitleAndTableCard width={"w-[62.5%] h-[100%]"}>
                <TableHeader>Products</TableHeader>
                <CardBody>
                  <TwoColTableWithHeading data={productsData} />
                  <button className="light-brown-btn ffr text-[0.875rem] text-[#fff] leading-[40px] tracking-[0.5px] uppercase bg-[#c83e27] block px-[15px] mt-[20px] mx-auto">
                    add new product
                  </button>
                </CardBody>
              </TitleAndTableCard>
              <div className=" w-[37.5%]">
                <div className="mt-[1.5rem]">
                  <TitleAndTableCard>
                    {/* <CardBody p={t:"10",r:"20",b:"10",l:"40"}> */}
                    <CardBody simple={true}>
                      <div className="flex justify-center items-center">
                        <div className="text-center">
                          <h5 className="fwb text-[13px] text-[#1b1b28] leading-[1.5] tracking-[0.5px] capitalize">
                            shop
                          </h5>
                          <p className="fwr text-[#6b6e73] text-[13px] leading-[1.5] tracking-[0.5px] my-[13px]">
                            Manage &#38; organize your shop
                          </p>
                          <button
                            className={`ffr pink-btn h-[40px] text-[#e62e04] text-[0.875rem] text-center uppercase bg-[#e62e0426] tracking-[0.5px] taPoint3 py-[10px] px-[15px] cursor-pointer mx-auto`}
                          >
                            go to setting
                          </button>
                        </div>
                      </div>
                    </CardBody>
                  </TitleAndTableCard>
                </div>
                <div className="mt-[1.5rem]">
                  <TitleAndTableCard>
                    <CardBody simple={true}>
                      <div className="flex justify-center items-center">
                        <div className="text-center">
                          <h5 className="fwb text-[13px] text-[#1b1b28] leading-[1.5] tracking-[0.5px] capitalize">
                            payment
                          </h5>
                          <p className="fwr text-[#6b6e73] text-[13px] leading-[1.5] tracking-[0.5px] my-[13px]">
                            Configure your payment method
                          </p>
                          <button
                            className={`ffr pink-btn h-[40px] text-[#e62e04] text-[0.875rem] text-center uppercase bg-[#e62e0426] tracking-[0.5px] taPoint3 py-[10px] px-[15px] cursor-pointer mx-auto`}
                          >
                            configure now
                          </button>
                        </div>
                      </div>
                    </CardBody>
                  </TitleAndTableCard>
                </div>
              </div>
            </div>
          </AdminPanelLayout>
        </div>
      </Layout>
    </>
  );
}

function StatusCard({ data, index }) {
  console.log("data", data);
  return (
    <div
      className={`w-[100%] h-[125px] ${
        index == 0
          ? "bg-[#609cde]"
          : index == 1
          ? "bg-[#e5488a]"
          : index == 2
          ? "bg-[#624ebc]"
          : index == 3
          ? "bg-[#609cde]"
          : ""
      } mb-[1.5rem] rounded-[0.3rem]`}
    >
      <div
        className={`${
          index == 0
            ? styles.bg_grad_1
            : index == 1
            ? styles.bg_grad_2
            : index == 2
            ? styles.bg_grad_3
            : index == 3
            ? styles.bg_grad_4
            : ""
        } text-white rounded-lg mb-4 overflow-hidden`}
      >
        <div className="px-[1rem] pt-[1rem]">
          <div className="fwb text-[14px]">
            {data.title == "Total earnings" ? "SAR " : ""}
            {data.number}
          </div>
          <div className="fwr opacity-[.5] text-[13px] text-[#fff]">
            {data.title}
          </div>
        </div>
        <span className="image_container">
          <Image src={data.svg} alt="image" />
        </span>
      </div>
    </div>
  );
}

export default AdminPanel;
