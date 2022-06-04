import React, { useState, useRef } from "react";
import Image from "next/image";
import Layout from "../components/layout/layout";
import img1 from "../assets/images/products/orange-1/img1.jpg";
import img2 from "../assets/images/products/orange-1/img2.jpg";
import img3 from "../assets/images/products/orange-1/img3.jpg";
import img4 from "../assets/images/products/orange-1/img4.jpg";
import visa from "../assets/images/payment-methods/visa.png";
import mada from "../assets/images/payment-methods/mada.png";
import stcPay from "../assets/images/payment-methods/stc-pay.png";
import Features from "../components/features/features";
import HeadingAndText from "../components/heading-and-text/headingAndText";
import ColorBox from "../components/color-box/colorBox";
import ProductSlider from "../components/product-slider/product-slider";
import { IoCloseOutline } from "react-icons/io5";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import Link from "next/link";

function ProductDetail() {
  const [productToCheckout, setProductToCheckout] = useState([
    {
      name: "Multicolor Printed Abaya with Fringe Detail",
      info: "-",
      brand: "Nada Line",
      colorAndSize: "Orange-50",
      length: "170 cm",
      color: "Orange",
      productLength: "50",
      productBust: "20",
      productSleeves: "25",
      quantity: 1,
    },
  ]);

  // const productToCheckout = [
  //   {
  //     name: "Multicolor Printed Abaya with Fringe Detail",
  //     info: "-",
  //     brand: "Nada Line",
  //     colorAndSize: "Orange-50",
  //     length: "170 cm",
  //     color: "Orange",
  //     productLength: "50",
  //     productBust: "20",
  //     productSleeves: "25",
  //   }
  // ];

  const productImages = [
    { image: img1 },
    { image: img2 },
    { image: img3 },
    { image: img4 },
  ];
  const [togglerColorsDiv, settogglerColorsDiv] = useState([]);
  const [togglerColorsDivPlusIcon, settogglerColorsDivPlusIcon] = useState([]);

  const [togglerSheilaColorsDiv, settogglerSheilaColorsDiv] = useState([]);
  const [togglerSheilaColorsDivPlusIcon, settogglerSheilaColorsDivPlusIcon] =
    useState([]);

  const [togglerSize, settogglerSize] = useState([]);
  const [togglerSizePlusIcon, settogglerSizePlusIcon] = useState([]);

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

  const sizeToggler = () => {
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

  // const [listColor, setListColor] = useState([1, 2, 3, 4, 5]);
  // const ref = useRef(null);

  // const handleToggleClassListRef = (ref) => {
  //   console.log("handle");
  //   if (!ref.current) {
  //     return;
  //   }
  //   if (!ref.current.classList.contains("color_selected")) {
  //     ref.current.classList.add("color_selected");
  //   } else {
  //     ref.current.classList.remove("color_selected");
  //     ref.current = null;
  //   }
  // };

  const deletItem = (index) => {
    var _p = productToCheckout;
    // console.log("_p", _p);

    for (var i = 0; i < _p.length; i++) {
      // console.log("_p[i]", i);
      if (i === index) {
        _p.splice(i, 1);
      }
    }
    // console.log("arr after", _p);

    // setProductToCheckout([]);
    // setProductToCheckout(_p);
    // console.log("productToCheckout", productToCheckout);
  };

  return (
    <>
      <Layout>
        <div className="container-for-checkout mt-[100px] mx-[auto] mb-[50px]     lg:mt-[100px] lg:mb-[90px]">
          <div className="w-[100%]">
            <div className="w-[100%] px-[3px] pb-[15px] hidden      md:block">
              <p className="work-regular text-[#1b1b28] text-[12px] text-[#000] tracking-[0.1em] mt-[20px] mb-[10px]">
                Home / Checkout
              </p>
            </div>

            <div className="w-[100%] flex gap-x-[30px] flex-col      lg:flex-row">
              <div className="w-[100%]      lg:w-[38%]">
                <h3 className="steps steps-first fwl tracking-[0.5px] py-[13px] pr-[12px] pl-[20px] bg-[#c53a19] relative mb-15px] text-[#fff] text-[14px] uppercase">
                  1. user info and billing address
                </h3>

                <div className="w-[100%] flex justify-start border-[#dee2e6] border-b-[2px] mt-[15px] px-[15px]     md:px-0">
                  <div className="form-check min-w-[12px] ml-[10px]">
                    <input
                      className="radio-btn-orange before-37 relative form-check-input appearance-none rounded-full min-w-[12px] w-[12px] h-[12px] bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                      type="radio"
                      name="billing_detail"
                      id="billing_detail1"
                      checked
                    />
                  </div>
                  <ul className="w-[100%] flex justify-center">
                    <li className="fwl text-[12px] text-[#000] tracking-[0.5px] border-[#000] border-b-[1px] uppercase py-[8px] mx-[15px]">
                      billing details
                    </li>
                  </ul>
                </div>

                <div className="pt-[15px] px-[15px]     md:px-0">
                  <div className="w-[100%] flex justify-between gap-x-[20px] mb-[10px] flex-col      lg:flex-row">
                    <label className="block w-[100%]">
                      <input
                        type="text"
                        name="first_name"
                        className=" h-[40px] work-regular mt-1 text-[#898b92] px-[10px] py-[5px] bg-white border-b-[1px]  placeholder-slate-400 focus:outline-none block w-full sm:text-[13px]"
                        placeholder="First Name"
                      />
                    </label>

                    <label className="block w-[100%]">
                      <input
                        type="text"
                        name="last_name"
                        className=" h-[40px] work-regular mt-1 text-[#898b92] px-[10px] py-[5px] bg-white border-b-[1px]  placeholder-slate-400 focus:outline-none block w-full sm:text-[13px]"
                        placeholder="Last Name"
                      />
                    </label>
                  </div>

                  <label className="block w-[100%] mb-[10px]">
                    <input
                      type="email"
                      name="email"
                      className=" h-[40px] work-regular mt-1 text-[#898b92] px-[10px] py-[5px] bg-white border-b-[1px]  placeholder-slate-400 focus:outline-none block w-full sm:text-[13px]"
                      placeholder="Email"
                    />
                  </label>

                  <label className="block w-[100%] mb-[10px]">
                    <input
                      type="text"
                      name="full_address"
                      className=" h-[40px] work-regular mt-1 text-[#898b92] px-[10px] py-[5px] bg-white border-b-[1px]  placeholder-slate-400 focus:outline-none block w-full sm:text-[13px]"
                      placeholder="Full Address"
                    />
                  </label>

                  <select className="work-regular text-[#898b92] mt-1 px-[5px] py-[5px] bg-white border-b-[1px]  placeholder-slate-400 focus:outline-none block w-full sm:text-[13px] h-[40px]">
                    <option>Select Country</option>
                    <option>Saudia Arabia</option>
                  </select>

                  <div className="w-[100%] flex justify-between gap-x-[20px] mb-[10px] flex-col      lg:flex-row">
                    <select className="work-regular text-[#898b92] mt-1 px-[5px] py-[5px] bg-white border-b-[1px]  placeholder-slate-400 focus:outline-none block w-full sm:text-[13px] h-[40px]">
                      <option>Select City</option>
                      <option>1</option>
                      <option>2</option>
                    </select>

                    <label className="block w-[100%]">
                      <input
                        type="text"
                        name="area"
                        className=" h-[40px] work-regular mt-1 text-[#898b92] px-[10px] py-[5px] bg-white border-b-[1px]  placeholder-slate-400 focus:outline-none block w-full sm:text-[13px]"
                        placeholder="Area"
                      />
                    </label>
                  </div>

                  <label className="block w-[100%] mb-[10px]">
                    <input
                      type="text"
                      name="number"
                      className=" h-[40px] work-regular mt-1 text-[#898b92] px-[10px] py-[5px] bg-white border-b-[1px]  placeholder-slate-400 focus:outline-none block w-full sm:text-[13px]"
                      placeholder="Mobile Number"
                    />
                  </label>
                </div>
              </div>
              <div className="w-[100%]      lg:w-[31%] mt-[30px]      lg:mt-[0]">
                <h3 className="steps fwl tracking-[0.5px] py-[13px] pr-[12px] pl-[20px] bg-[#c53a19] relative mb-15px] text-[#fff] text-[14px] uppercase">
                  2. payment and shipping
                </h3>

                <div className="flex justify-start pt-[15px] px-[15px]     md:px-0">
                  <div className="w-[100%] mb-[25px]">
                    <div className="form-check h-[35px] mb-[8px] border-[#ededed] border-b-[1px] w-[100%] pt-[2px]">
                      <input
                        className="radio-btn-orange relative form-check-input appearance-none rounded-full w-[12px] h-[12px] bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                        type="radio"
                        name="flexRadioDefault"
                        id="flexRadioDefault1"
                      />
                      <label
                        className="fwr text-[13px] form-check-label inline-block uppercase flex"
                        htmlFor="flexRadioDefault1"
                      >
                        <div className="max-w-[35px] mr-[5px] ml-[5px]">
                          <span className="">
                            <Image src={visa} alt="image" />
                          </span>
                        </div>
                        <span> visa/master</span>
                      </label>
                    </div>
                    <div className="form-check h-[35px] mb-[8px] border-[#ededed] border-b-[1px] w-[100%] pt-[2px]">
                      <input
                        className="radio-btn-orange relative form-check-input appearance-none rounded-full w-[12px] h-[12px] bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                        type="radio"
                        name="flexRadioDefault"
                        id="flexRadioDefault2"
                      />
                      <label
                        className="fwr text-[13px] form-check-label inline-block uppercase flex"
                        htmlFor="flexRadioDefault2"
                      >
                        <div className="max-w-[35px] mr-[5px] ml-[5px]">
                          <span className="">
                            <Image src={mada} alt="image" />
                          </span>
                        </div>
                        <span> mada</span>
                      </label>
                    </div>
                    <div className="form-check h-[35px] mb-[8px] border-[#ededed] border-b-[1px] w-[100%] pt-[2px]">
                      <input
                        className="radio-btn-orange relative form-check-input appearance-none rounded-full w-[12px] h-[12px] bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                        type="radio"
                        name="flexRadioDefault"
                        id="flexRadioDefault3"
                      />
                      <label
                        className="fwr text-[13px] form-check-label inline-block uppercase flex"
                        htmlFor="flexRadioDefault3"
                      >
                        <div className="max-w-[35px] mr-[5px] ml-[5px]">
                          <span className="">
                            <Image src={stcPay} alt="image" />
                          </span>
                        </div>
                        <span> stc pay</span>
                      </label>
                    </div>
                  </div>
                </div>

                <div className="w-[100%] h-[40px] flex justify-between mb-[10px] px-[15px]     md:px-0">
                  <label className="block w-[100%] h-[40px]">
                    <input
                      type="text"
                      name="coupon"
                      className="work-regular h-[36px] mt-1 px-[10px] py-[5px] bg-white border-b-[1px]  placeholder-slate-400 focus:outline-none block w-full sm:text-[13px]"
                      placeholder="Have coupon code? Enter here"
                    />
                  </label>
                  <button className="btn-orange ffr bg-[#c53a24] text-[14px] text-[#fff] uppercase px-[15px] taPoint3">
                    apply
                  </button>
                </div>
              </div>
              <div className="w-[100%]      lg:w-[31%]">
                <h3 className="steps steps-last fwl tracking-[0.5px] py-[13px] pr-[12px] pl-[20px] bg-[#c53a19] relative mb-15px] text-[#fff] text-[14px] uppercase">
                  3. order summary
                </h3>

                <div className="border-[#ededed] border-[1px] px-[15px] py-[15px] mt-[15px] mx-[15px]     md:mx-0">
                  {/* 1 product */}
                  {productToCheckout.map((value, index) => {
                    return (
                      <ProductInCart
                        key={index}
                        index={index}
                        data={value}
                        deletItem={deletItem}
                      />
                    );
                  })}

                  <div>
                    <div className="border-[#ededed] border-t-[1px] py-[12px] flex justify-between">
                      <p className="fwr text-[13px] capitalize">
                        Included Shipping Cost:
                      </p>
                      <p className="fwr text-[13px] uppercase">SAR 74</p>
                    </div>

                    <div className="border-[#ededed] border-t-[1px] py-[12px] flex justify-between">
                      <p className="fwr text-[13px] capitalize">
                        Included Customs and Import tax:
                      </p>
                      <p className="fwr text-[13px] uppercase">SAR 116</p>
                    </div>

                    <div className="border-[#ededed] border-t-[1px] py-[12px] flex justify-between pb-[20px] border-b-[1px] border-b-[#000]">
                      <p className="fwr text-[13px] uppercase">TOTAL</p>
                      <p className="fwr text-[13px] uppercase">SAR 640</p>
                    </div>
                    <p className="fwr text-center text-[#6b6e73] text-[13px] my-[13px]">
                      By placing an order, you agree to Katwalk’s{" "}
                      <Link href="/privacypolicy">
                        <a>
                          <span className="block text-[#c53a19]">
                            Terms & conditions
                          </span>
                        </a>
                      </Link>
                    </p>
                    <button className="add-to-bag-btn relative ffr overflow-hidden h-[40px] text-[14px] w-full text-[#fff] uppercase bg-[#111723]">
                      <span className="relative z-[5]">place order</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}

export default ProductDetail;

function ProductInCart({ data, index, deletItem }) {
  console.log("k", index);
  return (
    <>
      <div className="pb-[20px]">
        <div className="flex pt-[15px]">
          <div className="max-w-[90px] max-h-[120px]      sm:max-w-[26%] sm:max-h-[240px] xl:max-w-[88px] md:max-h-[100%] xl:max-w-[68px] lg:max-w-[58px] lg:max-h-[80px]">
            <span className="image_container">
              <Image src={img3} alt="image" />
            </span>
          </div>
          <div className="pl-[20px] pt-[20px] relative w-[100%]     lg:w-[82%] ">
            <IoCloseOutline
              className="absolute right-[-10px] top-[5px]"
              onClick={() => deletItem(index)}
            />
            <p className="fwr text-[13px] leading-[1.5] text-[#00] tracking-[0.5px] pt-[3px]">
              {data.name}
            </p>
            <p className="fwr text-[13px] leading-[1.5] text-[#00] tracking-[0.5px] pb-[3px]">
              {data.info}
            </p>
            <p className="fwr text-[13px] leading-[1.5] text-[#00] tracking-[0.5px] py-[3px]">
              {data.brand}
            </p>
            <p className="fwr text-[13px] leading-[1.5] text-[#00] tracking-[0.5px] py-[3px]">
              Color & Size:
              <strong className="pl-[5px]">{data.colorAndSize}</strong>
            </p>
            <p className="fwr text-[13px] leading-[1.5] text-[#00] tracking-[0.5px] py-[3px]">
              Sheila Length:
              <strong className="pl-[5px]">{data.length}</strong>
            </p>
            <p className="fwr text-[13px] leading-[1.5] text-[#00] tracking-[0.5px] py-[3px]">
              Sheila Color:
              <strong className="pl-[5px]">{data.color}</strong>
            </p>
            <p className="fwr text-[13px] leading-[1.5] text-[#00] tracking-[0.5px] py-[3px]">
              Product Length:
              <strong className="pl-[5px]">{data.productLength}</strong>
            </p>
            <p className="fwr text-[13px] leading-[1.5] text-[#00] tracking-[0.5px] py-[3px]">
              Product Bust:
              <strong className="pl-[5px]">{data.productBust}</strong>
            </p>
            <p className="fwr text-[13px] leading-[1.5] text-[#00] tracking-[0.5px] py-[3px]">
              Product Sleeves:
              <strong className="pl-[5px]">{data.productSleeves}</strong>
            </p>
            <div className="flex justify-between w-[100%] mt-[10px]">
              <div className="flex justify-between min-w-[80px]">
                <button>
                  <AiOutlineMinus className="text-[14px] text-[#8c8c8c]" />
                </button>
                <input
                  value={data.quantity}
                  id="product_qty"
                  className="w-[40px] text-center"
                />
                <button>
                  <AiOutlinePlus className="text-[14px] text-[#8c8c8c]" />
                </button>
              </div>
              <p className="fwr text-[13px] text-[#1b1b28] leading-[25px] tracking-[0.5px]">
                SAR 640
              </p>
            </div>
          </div>
        </div>
        <p className="fwr text-[12px] text-[#ef486a] leading-[1.5] tracking-[0.5px]">
          Made in Bahrain
        </p>
      </div>
    </>
  );
}
