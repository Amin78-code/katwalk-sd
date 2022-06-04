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
import styles from "../../components/home.module.css";

const statusCardData = [
  {
    number: "2",
    title: "Products",
    svg: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="rgba(255,255,255,0.3)" fill-opacity="1" d="M0,192L26.7,192C53.3,192,107,192,160,202.7C213.3,213,267,235,320,218.7C373.3,203,427,149,480,117.3C533.3,85,587,75,640,90.7C693.3,107,747,149,800,149.3C853.3,149,907,107,960,112C1013.3,117,1067,171,1120,202.7C1173.3,235,1227,245,1280,213.3C1333.3,181,1387,107,1413,69.3L1440,32L1440,320L1413.3,320C1386.7,320,1333,320,1280,320C1226.7,320,1173,320,1120,320C1066.7,320,1013,320,960,320C906.7,320,853,320,800,320C746.7,320,693,320,640,320C586.7,320,533,320,480,320C426.7,320,373,320,320,320C266.7,320,213,320,160,320C106.7,320,53,320,27,320L0,320Z"></path></svg>
  },
  {
    number: "0",
    title: "Total sale",
    svg: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"> <path fill="rgba(255,255,255,0.3)" fill-opacity="1" d="M0,192L30,208C60,224,120,256,180,245.3C240,235,300,181,360,144C420,107,480,85,540,96C600,107,660,149,720,154.7C780,160,840,128,900,117.3C960,107,1020,117,1080,112C1140,107,1200,85,1260,74.7C1320,64,1380,64,1410,64L1440,64L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z"></path> </svg>
  },
  {
    number: "0",
    title: "Total earnings",
    svg: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"> <path fill="rgba(255,255,255,0.3)" fill-opacity="1" d="M0,128L34.3,112C68.6,96,137,64,206,96C274.3,128,343,224,411,250.7C480,277,549,235,617,213.3C685.7,192,754,192,823,181.3C891.4,171,960,149,1029,117.3C1097.1,85,1166,43,1234,58.7C1302.9,75,1371,149,1406,186.7L1440,224L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z"></path> </svg>
  },
  {
    number: "0",
    title: "Successful orders",
    svg: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"> <path fill="rgba(255,255,255,0.3)" fill-opacity="1" d="M0,192L26.7,192C53.3,192,107,192,160,202.7C213.3,213,267,235,320,218.7C373.3,203,427,149,480,117.3C533.3,85,587,75,640,90.7C693.3,107,747,149,800,149.3C853.3,149,907,107,960,112C1013.3,117,1067,171,1120,202.7C1173.3,235,1227,245,1280,213.3C1333.3,181,1387,107,1413,69.3L1440,32L1440,320L1413.3,320C1386.7,320,1333,320,1280,320C1226.7,320,1173,320,1120,320C1066.7,320,1013,320,960,320C906.7,320,853,320,800,320C746.7,320,693,320,640,320C586.7,320,533,320,480,320C426.7,320,373,320,320,320C266.7,320,213,320,160,320C106.7,320,53,320,27,320L0,320Z"></path> </svg>
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
              {statusCardData.map((value,index) => {
                return <StatusCard key={value + 1} data={value} index={index} />;
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
  console.log("data",data)
  return (
    <div className={`w-[100%] h-[125px] ${index == 0? 'bg-[#609cde]' : index == 1? 'bg-[#e5488a]' : index == 2 ? 'bg-[#624ebc]' :  index == 3 ? 'bg-[#609cde]' : ""} mb-[1.5rem] rounded-[0.3rem]`}>
      <div class={`${index == 0? styles.bg_grad_1 : index == 1? styles.bg_grad_2 : index == 2 ? styles.bg_grad_3 :  index == 3 ? styles.bg_grad_4 : ""} text-white rounded-lg mb-4 overflow-hidden`}>
        <div class="px-[1rem] pt-[1rem]">
          <div class="fwb text-[14px]">{data.title == "Total earnings" ? "SAR " : ""}{data.number}</div>
          <div class="fwr opacity-[.5] text-[13px] text-[#fff]">{data.title}</div>
        </div>
        {data.svg}
      </div>
    </div>
  );
}

export default AdminPanel;
