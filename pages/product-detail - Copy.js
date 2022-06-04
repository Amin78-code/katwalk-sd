import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Layout from "../components/layout/layout";
import productImg1 from "../assets/images/products/orange-1/img3.jpg";
import productImg2 from "../assets/images/products/product2.jpg";
import productImg3 from "../assets/images/products/product3.jpg";
import productImg4 from "../assets/images/products/product4.jpg";
import img1 from "../assets/images/products/orange-1/img1.jpg";
import img2 from "../assets/images/products/orange-1/img2.jpg";
import img3 from "../assets/images/products/orange-1/img3.jpg";
import img4 from "../assets/images/products/orange-1/img4.jpg";
import Features from "../components/features/features";
import HeadingAndText from "../components/heading-and-text/headingAndText";
import ColorBox from "../components/color-box/colorBox";
import { BsPlusLg, BsRulers, BsChevronDown } from "react-icons/bs";
import { IoShareSocialOutline } from "react-icons/io5";
import { AiOutlinePlus } from "react-icons/ai";
import ProductSlider from "../components/product-slider/product-slider";
import OtherProducts from "../components/other-products/otherProducts";
import styles from "../components/productDetails.module.css";
import SizeGuideModal from "../components/size-guide-modal/SizeGuideModal";
import MessageModal from "../components/message-modal/messageModal";

function ProductDetail() {
  const productImages = [
    { image: img1 },
    { image: img2 },
    { image: img3 },
    { image: img4 },
  ];
  const [togglerColorsDiv, settogglerColorsDiv] = useState([]);
  const [togglerColorsDivPlusIcon, settogglerColorsDivPlusIcon] = useState([]);

  const [togglerAlterationDiv, setTogglerAlterationDiv] = useState([]);
  const [togglerSizeGuideModal, setTogglerSizeGuideModal] = useState([]);

  const [togglerSheilaColorsDiv, settogglerSheilaColorsDiv] = useState([]);
  const [togglerSheilaColorsDivPlusIcon, settogglerSheilaColorsDivPlusIcon] =
    useState([]);

  const [togglerSize, settogglerSize] = useState([]);
  const [togglerSizePlusIcon, settogglerSizePlusIcon] = useState([]);

  const [togglerLength, setTogglerLength] = useState([]);
  const [togglerLengthPlusIcon, setTogglerLengthPlusIcon] = useState([]);

  const [togglerBust, setTogglerBust] = useState([]);
  const [togglerBustPlusIcon, setTogglerBustPlusIcon] = useState([]);

  const [togglerSleeve, setTogglerSleeve] = useState([]);
  const [togglerSleevePlusIcon, setTogglerSleevePlusIcon] = useState([]);

  const [togglerSheilaLength, settogglerSheilaLength] = useState([]);
  const [togglerSheilaLengthPlusIcon, settogglerSheilaLengthPlusIcon] =
    useState([]);

  const [togglerTab1, settogglerTab1] = useState([]);
  const [togglerTab1PlusIcon, settogglerTab1PlusIcon] = useState([]);

  const [togglerTab2, settogglerTab2] = useState([]);
  const [togglerTab2PlusIcon, settogglerTab2PlusIcon] = useState([]);

  const [togglerTab3, settogglerTab3] = useState([]);
  const [togglerTab3PlusIcon, settogglerTab3PlusIcon] = useState([]);

  const [togglerTab4, settogglerTab4] = useState([]);
  const [togglerTab4PlusIcon, settogglerTab4PlusIcon] = useState([]);

  const basicColor = [
    {
      name: "Orange",
      colorCode: "bg-[#FFA500]",
    },
  ];
  const sheilaColor = [
    {
      name: "Dodger Blue",
      colorCode: "bg-[#1E90FF]",
    },
    {
      name: "Orange",
      colorCode: "bg-[#FFA500]",
    },
    {
      name: "red",
      colorCode: "bg-[#ff0000]",
    },
  ];

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
  ];

  const colorsDivToggler = () => {
    if (!togglerColorsDiv.includes("show-colors")) {
      settogglerColorsDiv(["show-colors"]);
    } else {
      settogglerColorsDiv([]);
    }
    if (!togglerColorsDivPlusIcon.includes("rotate45")) {
      settogglerColorsDivPlusIcon(["rotate45"]);
    } else {
      settogglerColorsDivPlusIcon([]);
    }
  };
  const sheilaColorsDivToggler = () => {
    if (!togglerSheilaColorsDiv.includes("show-colors")) {
      settogglerSheilaColorsDiv(["show-colors"]);
    } else {
      settogglerSheilaColorsDiv([]);
    }
    if (!togglerSheilaColorsDivPlusIcon.includes("rotate45")) {
      settogglerSheilaColorsDivPlusIcon(["rotate45"]);
    } else {
      settogglerSheilaColorsDivPlusIcon([]);
    }
  };

  const tab1Toggler = () => {
    if (!togglerTab1.includes("slide-tab")) {
      settogglerTab1(["slide-tab"]);
    } else {
      settogglerTab1([]);
    }
    if (!togglerTab1PlusIcon.includes("rotate180")) {
      settogglerTab1PlusIcon(["rotate180"]);
    } else {
      settogglerTab1PlusIcon([]);
    }
  };

  const tab2Toggler = () => {
    if (!togglerTab2.includes("slide-tab")) {
      settogglerTab2(["slide-tab"]);
    } else {
      settogglerTab2([]);
    }
    if (!togglerTab2PlusIcon.includes("rotate180")) {
      settogglerTab2PlusIcon(["rotate180"]);
    } else {
      settogglerTab2PlusIcon([]);
    }
  };

  const tab3Toggler = () => {
    if (!togglerTab3.includes("slide-tab")) {
      settogglerTab3(["slide-tab"]);
    } else {
      settogglerTab3([]);
    }
    if (!togglerTab3PlusIcon.includes("rotate180")) {
      settogglerTab3PlusIcon(["rotate180"]);
    } else {
      settogglerTab3PlusIcon([]);
    }
  };

  const tab4Toggler = () => {
    if (!togglerTab4.includes("slide-tab")) {
      settogglerTab4(["slide-tab"]);
    } else {
      settogglerTab4([]);
    }
    if (!togglerTab4PlusIcon.includes("rotate180")) {
      settogglerTab4PlusIcon(["rotate180"]);
    } else {
      settogglerTab4PlusIcon([]);
    }
  };

  const alterationDivToggler = () => {
    if (!togglerAlterationDiv.includes("show-alteration-div")) {
      setTogglerAlterationDiv(["show-alteration-div"]);
    } else {
      setTogglerAlterationDiv([]);
    }
  };
  const toggleSizeGuideModal = () => {
    console.log("called");
    if (!togglerSizeGuideModal.includes("fading-in")) {
      setTogglerSizeGuideModal(["fading-in"]);
    } else {
      setTogglerSizeGuideModal(["fading-out"]);
    }
  };

  togglerSizeGuideModal;

  const sizeToggler = () => {
    // closing others
    if (togglerSheilaLength.includes("dblock")) {
      settogglerSheilaLength([]);
    }
    if (togglerSheilaLengthPlusIcon.includes("rotate180")) {
      settogglerSheilaLengthPlusIcon([]);
    }

    if (togglerLength.includes("dblock")) {
      setTogglerLength([]);
    }
    if (togglerLengthPlusIcon.includes("rotate180")) {
      setTogglerLengthPlusIcon([]);
    }

    if (togglerBust.includes("dblock")) {
      setTogglerBust([]);
    }
    if (togglerBustPlusIcon.includes("rotate180")) {
      setTogglerBustPlusIcon([]);
    }

    if (togglerSleeve.includes("dblock")) {
      setTogglerSleeve([]);
    }
    if (togglerSleevePlusIcon.includes("rotate180")) {
      setTogglerSleevePlusIcon([]);
    }

    // opening this one
    if (!togglerSize.includes("dblock")) {
      settogglerSize(["dblock"]);
    } else {
      settogglerSize([]);
    }
    if (!togglerSizePlusIcon.includes("rotate180")) {
      settogglerSizePlusIcon(["rotate180"]);
    } else {
      settogglerSizePlusIcon([]);
    }
  };

  const sheilaLengthToggler = () => {
    // closing others
    if (togglerSize.includes("dblock")) {
      settogglerSize([]);
    }
    if (togglerSizePlusIcon.includes("rotate180")) {
      settogglerSizePlusIcon([]);
    }

    if (togglerLength.includes("dblock")) {
      setTogglerLength([]);
    }
    if (togglerLengthPlusIcon.includes("rotate180")) {
      setTogglerLengthPlusIcon([]);
    }

    if (togglerBust.includes("dblock")) {
      setTogglerBust([]);
    }
    if (togglerBustPlusIcon.includes("rotate180")) {
      setTogglerBustPlusIcon([]);
    }

    if (togglerSleeve.includes("dblock")) {
      setTogglerSleeve([]);
    }
    if (togglerSleevePlusIcon.includes("rotate180")) {
      setTogglerSleevePlusIcon([]);
    }

    // opening  this one
    if (!togglerSheilaLength.includes("dblock")) {
      settogglerSheilaLength(["dblock"]);
    } else {
      settogglerSheilaLength([]);
    }
    if (!togglerSheilaLengthPlusIcon.includes("rotate180")) {
      settogglerSheilaLengthPlusIcon(["rotate180"]);
    } else {
      settogglerSheilaLengthPlusIcon([]);
    }
  };

  const lengthToggler = () => {
    // closing others
    if (togglerSize.includes("dblock")) {
      settogglerSize([]);
    }
    if (togglerSizePlusIcon.includes("rotate180")) {
      settogglerSizePlusIcon([]);
    }

    if (togglerSheilaLength.includes("dblock")) {
      settogglerSheilaLength([]);
    }
    if (togglerSheilaLengthPlusIcon.includes("rotate180")) {
      settogglerSheilaLengthPlusIcon([]);
    }

    if (togglerBust.includes("dblock")) {
      setTogglerBust([]);
    }
    if (togglerBustPlusIcon.includes("rotate180")) {
      setTogglerBustPlusIcon([]);
    }

    if (togglerSleeve.includes("dblock")) {
      setTogglerSleeve([]);
    }
    if (togglerSleevePlusIcon.includes("rotate180")) {
      setTogglerSleevePlusIcon([]);
    }

    if (!togglerLength.includes("dblock")) {
      setTogglerLength(["dblock"]);
    } else {
      setTogglerLength([]);
    }
    if (!togglerLengthPlusIcon.includes("rotate180")) {
      setTogglerLengthPlusIcon(["rotate180"]);
    } else {
      setTogglerLengthPlusIcon([]);
    }
  };

  const bustToggler = () => {
    // sizeToggler
    // sheilaLengthToggler
    // lengthToggler
    // bustToggler
    // sleeveToggler
    // closing others
    if (togglerSize.includes("dblock")) {
      settogglerSize([]);
    }
    if (togglerSizePlusIcon.includes("rotate180")) {
      settogglerSizePlusIcon([]);
    }

    if (togglerSheilaLength.includes("dblock")) {
      settogglerSheilaLength([]);
    }
    if (togglerSheilaLengthPlusIcon.includes("rotate180")) {
      settogglerSheilaLengthPlusIcon([]);
    }

    if (togglerLength.includes("dblock")) {
      setTogglerLength([]);
    }
    if (togglerLengthPlusIcon.includes("rotate180")) {
      setTogglerLengthPlusIcon([]);
    }

    if (togglerSleeve.includes("dblock")) {
      setTogglerSleeve([]);
    }
    if (togglerSleevePlusIcon.includes("rotate180")) {
      setTogglerSleevePlusIcon([]);
    }

    if (!togglerBust.includes("dblock")) {
      setTogglerBust(["dblock"]);
    } else {
      setTogglerBust([]);
    }
    if (!togglerBustPlusIcon.includes("rotate180")) {
      setTogglerBustPlusIcon(["rotate180"]);
    } else {
      setTogglerBustPlusIcon([]);
    }
  };

  const sleeveToggler = () => {
    // sizeToggler
    // sheilaLengthToggler
    // lengthToggler
    // bustToggler
    // sleeveToggler
    // closing others
    if (togglerSize.includes("dblock")) {
      settogglerSize([]);
    }
    if (togglerSizePlusIcon.includes("rotate180")) {
      settogglerSizePlusIcon([]);
    }

    if (togglerSheilaLength.includes("dblock")) {
      settogglerSheilaLength([]);
    }
    if (togglerSheilaLengthPlusIcon.includes("rotate180")) {
      settogglerSheilaLengthPlusIcon([]);
    }

    if (togglerLength.includes("dblock")) {
      setTogglerLength([]);
    }
    if (togglerLengthPlusIcon.includes("rotate180")) {
      setTogglerLengthPlusIcon([]);
    }

    if (togglerBust.includes("dblock")) {
      setTogglerBust([]);
    }
    if (togglerBustPlusIcon.includes("rotate180")) {
      setTogglerBustPlusIcon([]);
    }

    if (!togglerSleeve.includes("dblock")) {
      setTogglerSleeve(["dblock"]);
    } else {
      setTogglerSleeve([]);
    }
    if (!togglerSleevePlusIcon.includes("rotate180")) {
      setTogglerSleevePlusIcon(["rotate180"]);
    } else {
      setTogglerSleevePlusIcon([]);
    }
  };

  const [listColor, setListColor] = useState([1, 2, 3, 4, 5]);
  const ref = useRef(null);

  const handleToggleClassListRef = (ref) => {
    // console.log("handle");
    // if (!ref.current) {
    //   return;
    // }
    // if (!ref.current.classList.contains("color_selected")) {
    //   ref.current.classList.add("color_selected");
    // } else {
    //   ref.current.classList.remove("color_selected");
    //   ref.current = null;
    // }
  };

  return (
    <>
      <Layout>
        <div className="container-for-product-detail mt-[60px] lg:mt-[80px] mx-auto">
          <div className="w-[100%] max-w-[ ] flex flex-col      lg:flex-row">
            <div className="max-w-[1090p x] w-[100%] product-slider-div     lg:w-[68%]">
              <ProductSlider data={productImages} />
            </div>
            <div className="product-detail-content-div min-w-[500p x] w-[100%] pl-[50px] pr-[75px]     lg:w-[32%]">
              <p className="work-regular text-[#1b1b28] text-[12px] tracking-[0.1em] mt-[20px] mb-[10px] hidden      md:block">
                Home / Abaya / Multicolor Printed Abaya with Fringe Detail
              </p>
              <h2 className="fahkwang-regular text-[#1b1b28] text-[18px] tracking-[0.5px] leading-[1.5] mt-[25px]     md:mt-[0]">
                Nada Line
              </h2>
              <p className="work-regular text-[#7e7e7e] text-[12px] leading-[1.1] tracking-[0.5px] mt-[12px] uppercase mb-[10px]">
                MULTICOLOR PRINTED ABAYA WITH FRINGE DETAIL
              </p>
              <p className="work-regular text-[#7e7e7e] text-[20px] leading-[1.1] tracking-[0.5px] mt-[12px] uppercase mb-[10px]      md:text-[12px]">
                SAR 640
              </p>

              {/* color */}
              <div className="w-[100%] mb-[20px]">
                <div
                  className="w-[100%} flex justify-between items-center border-b-[1px] border-[#ededed]"
                  onClick={() => colorsDivToggler()}
                >
                  <div>
                    <h6 className="work-regular text-[12px] mt-[5px] mb-[2px] uppercase">
                      <span className="text-[#ff0032]">*</span>color:
                    </h6>
                    <p className="work-regular text-[11px] text-[#7e7e7e] capitalize py-[2px]">
                      Orange
                    </p>
                  </div>
                  <div>
                    <AiOutlinePlus
                      className={`${togglerColorsDivPlusIcon.join(
                        " "
                      )} taPoint3 text-[22px] text-[#757575]`}
                    ></AiOutlinePlus>
                  </div>
                </div>
                <div
                  className={`${togglerColorsDiv.join(
                    " "
                  )} taPoint3 h-[0] overflow-hidden`}
                >
                  <h6 className="fwb text-[#1b1b28] text-[13px] pt-[10px] pb-[10px]">
                    Color:
                  </h6>
                  <div className="flex gap-x-[3px] pl-[2px]">
                    {basicColor.map((value, index) => {
                      return <ColorBox key={index} data={value} />;
                    })}
                  </div>
                </div>
              </div>

              {/* sheila color */}
              <div className="w-[100%]">
                <div
                  className="w-[100%} flex justify-between items-center border-b-[1px] border-[#ededed] mb-[20px]"
                  onClick={() => sheilaColorsDivToggler()}
                >
                  <div>
                    <h6 className="work-regular text-[12px] mt-[5px] mb-[2px] uppercase">
                      <span className="text-[#ff0032]">*</span>sheila color:
                    </h6>
                    <p className="work-regular text-[11px] text-[#7e7e7e] capitalize py-2px]">
                      select sheila color
                    </p>
                  </div>
                  <div>
                    <AiOutlinePlus
                      className={`${togglerSheilaColorsDivPlusIcon.join(
                        " "
                      )} taPoint3 text-[22px] text-[#757575]`}
                    ></AiOutlinePlus>
                  </div>
                </div>
                <div
                  className={`${togglerSheilaColorsDiv.join(
                    " "
                  )} taPoint3 h-[0] overflow-hidden`}
                >
                  <h6 className="fwb text-[#1b1b28] text-[13px] pt-[10px] pb-[10px]">
                    Color:
                  </h6>
                  <div className="flex gap-x-[3px] pl-[2px]">
                    {sheilaColor.map((value, index) => {
                      return (
                        <>
                          <div key={index} className={`${styles.color_main_div} `}>
                            <div
                              className={` "w-[83px] m-[2px] color-selected "`}
                              onClick={(event) => {
                                handleToggleClassListRef(ref);
                                event.stopPropagation();
                                ref.current = event.target;
                                handleToggleClassListRef(ref);
                              }}
                            >
                              <div
                                className={`w-[75px] h-[75px] ${value.colorCode} m-[3px]`}
                              ></div>
                              <p className="work-regular text-[12px] leading-[1.2] tracking-[0.5px] pt-[3px] pr-[5px] pb-[5px] pl-[5px] max-w-[81px]">
                                {value.name}
                              </p>
                            </div>
                          </div>
                        </>
                      );
                    })}
                  </div>
                </div>
              </div>

              {/* size */}
              <div className="w-[100%]">
                <div className="w-[100%} flex justify-start items-center mb-[20px]">
                  <div className="min-w-[60px] max-w-[60px]">
                    <h6 className="fwl text-[12px] mt-[-13px] mb-[2px] uppercase">
                      <span className="text-[#ff0032]">*</span>size:
                    </h6>
                  </div>

                  <div className="pt-[3px] border-b-[1px] border-[#ededed] w-[100%] max-w-[235px] relative">
                    <div
                      className="flex justify-between items-center"
                      onClick={() => sizeToggler()}
                    >
                      <p className="fwr h-[40px] leading-[40px] text-[11px] text-[#7e7e7e] capitalize">
                        select size
                      </p>

                      <BsChevronDown
                        className={`${togglerSizePlusIcon.join(" ")} taPoint3`}
                      />
                    </div>
                    <div
                      className={`${togglerSize.join(" ")} ${
                        styles.variation_dropdowns
                      } w-[100%] border-[#fbf1e8] border-[1px] border-b-[0] absolute bg-[#fff] z-[10] hidden`}
                    >
                      <div className="fwr text-[13px] text-[#1b1b28] border-b-[1px] border-b-[#fbf1e8] h-[48px] leading-[48px] pl-[7px]">
                        50
                      </div>
                      <div className="fwr text-[13px] text-[#1b1b28] border-b-[1px] border-b-[#fbf1e8] h-[48px] leading-[48px] pl-[7px] active-variation">
                        52
                      </div>
                      <div className="fwr text-[13px] text-[#1b1b28] border-b-[1px] border-b-[#fbf1e8] h-[48px] leading-[48px] pl-[7px]">
                        54
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* sheila length */}
              <div className="w-[100%]">
                <div className="w-[100%} flex justify-start items-center mb-[20px]">
                  <div className="min-w-[60px] max-w-[60px]">
                    <h6 className="fwl text-[12px] mt-[5px] mb-[2px] uppercase">
                      <span className="text-[#ff0032]">*</span>sheila length:
                    </h6>
                  </div>

                  <div className="pt-[3px] border-b-[1px] border-[#ededed] w-[100%] max-w-[235px] relative">
                    <div
                      className="flex justify-between items-center"
                      onClick={() => sheilaLengthToggler()}
                    >
                      <p className="fwr h-[40px] leading-[40px] text-[11px] text-[#7e7e7e] capitalize">
                        select sheila length:
                      </p>

                      <BsChevronDown
                        className={`${togglerSheilaLengthPlusIcon.join(
                          " "
                        )} taPoint3`}
                      />
                    </div>
                    <div
                      className={`${togglerSheilaLength.join(" ")} ${
                        styles.variation_dropdowns
                      } w-[100%] border-[#fbf1e8] border-[1px] border-b-[0] absolute bg-[#fff] z-[10] hidden`}
                    >
                      <div className="fwr text-[13px] text-[#1b1b28] border-b-[1px] border-b-[#fbf1e8] h-[48px] leading-[48px] pl-[7px] active-variation">
                        200cm
                      </div>
                      <div className="fwr text-[13px] text-[#1b1b28] border-b-[1px] border-b-[#fbf1e8] h-[48px] leading-[48px] pl-[7px]">
                        170cm
                      </div>
                      <div className="fwr text-[13px] text-[#1b1b28] border-b-[1px] border-b-[#fbf1e8] h-[48px] leading-[48px] pl-[7px]">
                        150cm
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* any alteration */}
             

              {/* toggle tabs */}
              {/* tab1 */}
              <div className="w-[100%] mt-[5px] mb-[8px] max-w-[100%]      lg:max-w-[400px]">
                <div
                  className="w-[100%} flex justify-between items-center border-b-[1px] border-[#ededed]"
                  onClick={() => tab1Toggler()}
                >
                  <div>
                    <h6 className="fwr text-[#7e7e7e] text-[13px] mt-[5px] mb-[12px] capitalize">
                      description:
                    </h6>
                  </div>
                  <div>
                    <BsChevronDown
                      className={`${togglerTab1PlusIcon.join(" ")} taPoint3`}
                    ></BsChevronDown>
                  </div>
                </div>
                <div
                  className={`${togglerTab1.join(
                    " "
                  )} taPoint3 h-[0] overflow-hidden`}
                >
                  <table className="w-[100%]">
                    <tbody>
                      <tr>
                        <td className="fwr text-[12px] tracking-[0.5px] border-[#ededed] border-t-[1px] py-[.75rem] uppercase">
                          Product Type
                        </td>
                        <td className="fwr text-[12px] tracking-[0.5px] border-[#ededed] border-t-[1px] py-[.75rem] uppercase">
                          Made-to-Measure (MTM)
                        </td>
                      </tr>

                      <tr>
                        <td className="fwr text-[12px] tracking-[0.5px] border-[#ededed] border-t-[1px] py-[.75rem] uppercase">
                          Fabric Type
                        </td>
                        <td className="fwr text-[12px] tracking-[0.5px] border-[#ededed] border-t-[1px] py-[.75rem] uppercase">
                          Silk
                        </td>
                      </tr>
                      <tr>
                        <td className="fwr text-[12px] tracking-[0.5px] border-[#ededed] border-t-[1px] py-[.75rem] uppercase">
                          Fabric Weight
                        </td>
                        <td className="fwr text-[12px] tracking-[0.5px] border-[#ededed] border-t-[1px] py-[.75rem] uppercase">
                          Cool Lightweight
                        </td>
                      </tr>
                      <tr>
                        <td className="fwr text-[12px] tracking-[0.5px] border-[#ededed] border-t-[1px] py-[.75rem] uppercase">
                          Style
                        </td>
                        <td className="fwr text-[12px] tracking-[0.5px] border-[#ededed] border-t-[1px] py-[.75rem] uppercase">
                          {" "}
                          Spring, Print, Multicolor, Floral Print,
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* tab2 */}
              <div className="w-[100%] mt-[5px] mb-[8px] max-w-[100%]      lg:max-w-[400px]">
                <div
                  className="w-[100%} flex justify-between items-center border-b-[1px] border-[#ededed]"
                  onClick={() => tab2Toggler()}
                >
                  <div>
                    <h6 className="fwr text-[#7e7e7e] text-[13px] mt-[5px] mb-[12px] capitalize">
                      save & fit:
                    </h6>
                  </div>
                  <div>
                    <BsChevronDown
                      className={`${togglerTab2PlusIcon.join(" ")} taPoint3`}
                    ></BsChevronDown>
                  </div>
                </div>
                <div
                  className={`${togglerTab2.join(
                    " "
                  )} taPoint3 h-[0] overflow-hidden`}
                >
                  <table className="w-[100%]">
                    <tbody>
                      <tr>
                        <td className="fwr text-[12px] tracking-[0.5px] border-[#ededed] border-t-[1px] py-[.75rem] uppercase">
                          SIZE
                        </td>
                        <td className="fwr text-[12px] tracking-[0.5px] border-[#ededed] border-t-[1px] py-[.75rem] uppercase">
                          OVERSIZED FIT
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* tab3 */}
              <div className="w-[100%] mt-[5px] mb-[8px] max-w-[100%]      lg:max-w-[400px]">
                <div
                  className="w-[100%} flex justify-between items-center border-b-[1px] border-[#ededed]"
                  onClick={() => tab3Toggler()}
                >
                  <div>
                    <h6 className="fwr text-[#7e7e7e] text-[13px] mt-[5px] mb-[12px] capitalize">
                      Care Instructions
                    </h6>
                  </div>
                  <div>
                    <BsChevronDown
                      className={`${togglerTab3PlusIcon.join(" ")} taPoint3`}
                    ></BsChevronDown>
                  </div>
                </div>
                <div
                  className={`${togglerTab3.join(
                    " "
                  )} taPoint3 h-[0] overflow-hidden`}
                >
                  <table className="w-[100%]">
                    <tbody>
                      <tr>
                        <td className="fwr text-[12px] tracking-[0.5px] border-[#ededed] border-t-[1px] py-[.75rem] uppercase">
                          CARE INSTRUCTION:
                        </td>
                        <td className="fwr text-[12px] tracking-[0.5px] border-[#ededed] border-t-[1px] py-[.75rem] uppercase">
                          STEAM IRON,
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* tab4 */}
              <div className="w-[100%] mt-[5px] mb-[8px] max-w-[100%]      lg:max-w-[400px]">
                <div
                  className="w-[100%} flex justify-between items-center border-b-[1px] border-[#ededed]"
                  onClick={() => tab4Toggler()}
                >
                  <div>
                    <h6 className="fwr text-[#7e7e7e] text-[13px] mt-[5px] mb-[12px] capitalize">
                      Shipping & Returns
                    </h6>
                  </div>
                  <div>
                    <BsChevronDown
                      className={`${togglerTab4PlusIcon.join(" ")} taPoint3`}
                    ></BsChevronDown>
                  </div>
                </div>
                <div
                  className={`${togglerTab4.join(
                    " "
                  )} taPoint3 h-[0] overflow-hidden`}
                >
                  <table className="w-[100%]">
                    <tbody>
                      <tr>
                        <td className="fwr text-[12px] tracking-[0.5px] border-[#ededed] border-t-[1px] py-[.75rem] uppercase align-top">
                          SHIPPING & RETURNS
                        </td>
                        <td className="fwr text-[12px] tracking-[0.5px] border-[#ededed] border-t-[1px] py-[.75rem] uppercase">
                          THIS IS A MADE TO MEASURE PRODUCT WHICH TAKES 10 – 14
                          DAYS TO PREPARE BEFORE HANDING TO THE CARRIER.
                          <br />
                          <br />
                          ALL ORDERS ARE SHIPPED BY ARAMEX.
                          <table className="w-[100%] mb-[20px]">
                            <tbody className="text-center border-[#ededed] border-b-[1px]">
                              <tr className="tr-hover-pink">
                                <td className="fwr text-[12px] tracking-[0.5px] border-[#ededed] border-t-[1px] py-[.75rem] uppercase">
                                  SHIPPING COST
                                </td>
                                <td className="fwr text-[12px] tracking-[0.5px] border-[#ededed] border-t-[1px] py-[.75rem] uppercase">
                                  DELIVERY TIME
                                </td>
                              </tr>
                              <tr className="tr-hover-blue">
                                <td className="fwr text-[12px] tracking-[0.5px] border-[#ededed] border-t-[1px] py-[.75rem] uppercase">
                                  PRICE INCLUDES SHIPPING. DETAILS IN CHECKOUT
                                </td>
                                <td className="fwr text-[12px] tracking-[0.5px] border-[#ededed] border-t-[1px] py-[.75rem] uppercase">
                                  6 – 10 BUSINESS DAYS MADE IN BAHRAIN
                                </td>
                              </tr>
                            </tbody>
                          </table>
                          ABOVE TABLE IS JUST AN ESTIMATE DELIVERY TIMESCALE;
                          OUR SELLERS WILL DO THEIR BEST TO DELIVER YOUR ORDER
                          ON TIME.
                          <br />
                          <br />
                          PLEASE NOTE THAT THERE MIGHT BE SOME DELAYS DURING
                          PEAK OR SALE SEASONS, AND HOLIDAYS.
                          <br />
                          <br />
                          MADE-TO-MEASURE AND BESPOKE PRODUCTS ARE UNRETURNABLE
                          UNLESS DAMAGED OR INCORRECT
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="flex justify-end">
                <div className="share-icon-div w-[34px] h-[34px] flex justify-center items-center cursor-pointer border-[1px] border-[#ededed] text-[20px]">
                  <IoShareSocialOutline />
                </div>
              </div>
            </div>
          </div>

          <OtherProducts data={otherProducts} />
        </div>
        {/* <MessageModal purpose={'item-added'} /> */}
        {/* <MessageModal purpose={'secure-checkout'} /> */}
      </Layout>
    </>
  );
}

export default ProductDetail;
