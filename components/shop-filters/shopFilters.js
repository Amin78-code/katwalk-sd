import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import logoSquare from "../../assets/images/logo/logo-square.png";
import vat from "../../assets/images/logo/vat.png";
import styles from "./shopFilters.module.css";
import heroImage from "../../assets/images/hero-image.jpg";
import {
  IoBagOutline,
  IoSearchOutline,
  IoHeartOutline,
  IoPersonOutline,
  IoChevronDown,
  IoCloseOutline,
} from "react-icons/io5";
import DesignerFilter from "../designer-filter/designerFilter";
import SizeFilter from "../size-filter/sizeFilter";
import ColorFilter from "../color-filter/colorFilter";
import PriceFilter from "../price-filter/priceFilter";
import SortByFilter from "../sort-by-filter/sortByFilter";

const allDesigners = [
  {
    alphabet: "C",
    designers: ["Clue"],
  },
  {
    alphabet: "E",
    designers: ["Estilo Designs"],
  },
  {
    alphabet: "F",
    designers: ["Fouz Couture", "Fourteen Ten"],
  },
  {
    alphabet: "G",
    designers: ["Gmash"],
  },

  {
    alphabet: "K",
    designers: ["Kaf By Kaf"],
  },

  {
    alphabet: "M",
    designers: ["Maliha", "Muna Mattar"],
  },

  {
    alphabet: "N",
    designers: ["Nada Line", "Nakhlah"],
  },

  {
    alphabet: "R",
    designers: ["Raw Mestika"],
  },

  {
    alphabet: "Z",
    designers: ["Zahra Line"],
  },

  {
    alphabet: "",
    designers: ["ثمانية", "ولاء كاظم"],
  },
];
const allSizes = [
  "50",
  "52",
  "54",
  "56",
  "58",
  "60",
  "14 UK size",
  "Free size",
];
const allPriceRanges = [
  "SAR 500 - 1000",
  "SAR 10000 - 1500",
  "SAR 1500 - 2000",
  "> SAR 2000",
];
const allColors = {
  group1: [
    {
      name: "gray",
      colorCode: "bg-[#808080]",
    },
    {
      name: "black",
      colorCode: "bg-[#000000]",
    },
    {
      name: "pink",
      colorCode: "bg-[#FFC0CB]",
    },
  ],
  group2: [
    {
      name: "Dark Green",
      colorCode: "bg-[#006400]",
    },
    {
      name: "BurlyWood",
      colorCode: "bg-[#DEB887]",
    },
    {
      name: "DardkGolderod",
      colorCode: "bg-[#B8860B]",
    },
  ],
};
const sortByMethods = [
  "What's New",
  "Best Seller",
  "Price from high to low",
  "Price from low to hight",
];

function ShopFilters({ forDesigner }) {
  const category_dropdown = useRef("");
  const size_dropdown = useRef("");
  const designer_dropdown = useRef("");
  const color_dropdown = useRef("");
  const price_dropdown = useRef("");
  const sort_by_dropdown = useRef("");

  const designerChevron = useRef(null);
  const sizeChevron = useRef(null);
  const colorChevron = useRef(null);
  const priceChevron = useRef(null);
  const sortByChevron = useRef(null);
  const categoryChevron = useRef(null);

  const [currectSelectedSize, setCurrectSelectedSize] = useState("");
  const [currectSelectedColor, setCurrectSelectedColor] = useState("");
  const [currectSelectedPrice, setCurrectSelectedPrice] = useState("");
  const [currectSelectedSortBy, setCurrectSelectedSortBy] = useState("");

  const choosingFilterOption = (selectedOption, filterName) => {
    if (filterName == "sizeFilter") {
      setCurrectSelectedSize(selectedOption);
    } else if (filterName == "colorFilter") {
      setCurrectSelectedSize(selectedOption);
    } else if (filterName == "prizeFilter") {
      setCurrectSelectedPrice(selectedOption);
    } else if (filterName == "sortByFilter") {
      setCurrectSelectedSortBy(selectedOption);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", () => {
      category_dropdown.current.classList.remove("f-in");
      size_dropdown.current.classList.remove("f-in");
      designer_dropdown.current.classList.remove("f-in");
      color_dropdown.current.classList.remove("f-in");
      price_dropdown.current.classList.remove("f-in");
      sort_by_dropdown.current.classList.remove("f-in");

      categoryChevron.current.classList.remove("rotate180b");

      sizeChevron.current.classList.remove("rotate180b");

      priceChevron.current.classList.remove("rotate180b");

      designerChevron.current.classList.remove("rotate180b");

      colorChevron.current.classList.remove("rotate180b");

      sortByChevron.current.classList.remove("rotate180b");
    });
  }, "");

  function openDropdown(dropdownName) {
    if (category_dropdown !== dropdownName) {
      if (category_dropdown.current.classList.contains("f-in")) {
        category_dropdown.current.classList.remove("f-in");
        categoryChevron.current.classList.toggle("rotate180b");
      }
    }

    if (size_dropdown !== dropdownName) {
      if (size_dropdown.current.classList.contains("f-in")) {
        size_dropdown.current.classList.remove("f-in");
        sizeChevron.current.classList.toggle("rotate180b");
      }
    }

    if (designer_dropdown !== dropdownName) {
      if (designer_dropdown.current.classList.contains("f-in")) {
        designer_dropdown.current.classList.remove("f-in");
        designerChevron.current.classList.toggle("rotate180b");
      }
    }
    if (color_dropdown !== dropdownName) {
      if (color_dropdown.current.classList.contains("f-in")) {
        color_dropdown.current.classList.remove("f-in");
        colorChevron.current.classList.toggle("rotate180b");
      }
    }
    if (price_dropdown !== dropdownName) {
      if (price_dropdown.current.classList.contains("f-in")) {
        price_dropdown.current.classList.remove("f-in");
        priceChevron.current.classList.toggle("rotate180b");
      }
    }
    if (sort_by_dropdown !== dropdownName) {
      if (sort_by_dropdown.current.classList.contains("f-in")) {
        sort_by_dropdown.current.classList.remove("f-in");

        sortByChevron.current.classList.toggle("rotate180b");
      }
    }
    if (dropdownName.current.classList.contains("f-in") == true) {
      dropdownName.current.classList.remove("f-in");
    } else {
      dropdownName.current.classList.add("f-in");
    }

    if (category_dropdown == dropdownName) {
      categoryChevron.current.classList.toggle("rotate180b");
    }
    if (size_dropdown == dropdownName) {
      sizeChevron.current.classList.toggle("rotate180b");
    }
    if (designer_dropdown == dropdownName) {
      designerChevron.current.classList.toggle("rotate180b");
    }
    if (color_dropdown == dropdownName) {
      colorChevron.current.classList.toggle("rotate180b");
    }
    if (price_dropdown == dropdownName) {
      priceChevron.current.classList.toggle("rotate180b");
    }
    if (sort_by_dropdown == dropdownName) {
      sortByChevron.current.classList.toggle("rotate180b");
    }
  }

  return (
    <>
      <div className="w-[100%] pt-[0px] px-[16px]       lg:pt-[30px]">
        {forDesigner == true ? (
          <>
            <div
              className={`text-center pb-0 mb-[20px] block pt-[30px]      lg:mb-0 lg:text-left lg:pt-0 sm:mb-[30px]`}
            >
              <p className="fwl text-[20px] tracking-[0.5px] uppercase mt-[-10px] pb-[0px]">
                NADA LINE PRODUCTS
              </p>
            </div>
          </>
        ) : (
          <>
            <div
              className={`${styles.center_heading_div} flex text-center main-title`}
            >
              <p className="fwl text-[20px] tracking-[0.5px] uppercase mt-[-10px] pb-[10px]">
                all products
              </p>
            </div>
          </>
        )}

        <div className={`${styles.right_heading_div} flex justify-end`}>
          <p className="fwr self-end text-[13px] text-[#c53a19] tracking-[0.5px] pr-[20px] cursor-pointer">
            {forDesigner == true ? "Reset filters" : "Reset All filters"}
          </p>
        </div>
        <div
          className={`filter-main-div border-[#b1b1b1] border-t-[0px] border-b-[0px]      md:border-t-[1px] md:border-b-[1px]`}
        >
          <div
            className={`${styles.filters_heading} w-[100%] flex flex-start px-[10px]`}
          >
            <h3 className="fwl text-[#000] text-[13px] uppercase h-[40px] leading-[40px]">
              filters
            </h3>
          </div>

          <div className={`${styles.all_filters_div} flex`}>
            <div
              className={`${styles.active} single-filter flex-1 relative cursor-pointer`}
            >
              <div
                className={`flex justify-between items-center`}
                onClick={() => openDropdown(category_dropdown)}
              >
                <p className="fwr capitalize text-[#1b1b28] text-[11px] my-[13px] px-[16px] h-[22px] leading-[22px]">
                  category
                </p>
                <div ref={categoryChevron} className="taPoint3">
                  <IoChevronDown className="mr-[10px]" />
                </div>
              </div>
              <div
                className={`  w-[300px] border-[#fbf1e8] border-[1px] absolute z-[2] bg-[#fff] f-out`}
                ref={category_dropdown}
              >
                <div className="flex px-[15px] w-[100%] max-h-[350px] overflow-auto">
                  <div className="w-[100%]">
                    <div className="form-check taPoint3 cursor-pointer py-[7px] flex items-center relative">
                      <input
                        className="w-[28px] form-check-input appearance-none h-4 w-4 border border-[#fbf1e8] bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer w-[25px] h-[25px]"
                        type="checkbox"
                        value=""
                        id="categ1"
                      />
                      <label
                        className="block w-[100%] fwr text-[11px] leading-[25px] text-[#000] capitalize form-check-label inline-block text-gray-800 pt-[4px] pl-[5px]"
                        htmlFor="categ1"
                      >
                        abaya
                      </label>
                    </div>
                    <div className="form-check taPoint3 cursor-pointer py-[7px] flex items-center relative">
                      <input
                        className="w-[28px] form-check-input appearance-none h-4 w-4 border border-[#fbf1e8] bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer w-[25px] h-[25px]"
                        type="checkbox"
                        value=""
                        id="categ2"
                      />
                      <label
                        className="block w-[100%] fwr text-[11px] leading-[25px] text-[#000] capitalize form-check-label inline-block text-gray-800 pt-[4px] pl-[5px]"
                        htmlFor="categ2"
                      >
                        kaftan
                      </label>
                    </div>
                    <div className="form-check taPoint3 cursor-pointer py-[7px] flex items-center relative">
                      <input
                        className="w-[28px] form-check-input appearance-none h-4 w-4 border border-[#fbf1e8] bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer w-[25px] h-[25px]"
                        type="checkbox"
                        value=""
                        id="categ3"
                      />
                      <label
                        className="block w-[100%] fwr text-[11px] leading-[25px] text-[#000] capitalize form-check-label inline-block text-gray-800 pt-[4px] pl-[5px]"
                        htmlFor="categ3"
                      >
                        dress
                      </label>
                    </div>
                    <div className="form-check taPoint3 cursor-pointer py-[7px] flex items-center relative">
                      <input
                        className="w-[28px] form-check-input appearance-none h-4 w-4 border border-[#fbf1e8] bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer w-[25px] h-[25px]"
                        type="checkbox"
                        value=""
                        id="categ4"
                      />
                      <label
                        className="block w-[100%] fwr text-[11px] leading-[25px] text-[#000] capitalize form-check-label inline-block text-gray-800 pt-[4px] pl-[5px]"
                        htmlFor="categ4"
                      >
                        farwa
                      </label>
                    </div>
                    <div className="form-check taPoint3 cursor-pointer py-[7px] flex items-center relative">
                      <input
                        className="w-[28px] form-check-input appearance-none h-4 w-4 border border-[#fbf1e8] bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer w-[25px] h-[25px]"
                        type="checkbox"
                        value=""
                        id="categ5"
                      />
                      <label
                        className="block w-[100%] fwr text-[11px] leading-[25px] text-[#000] capitalize form-check-label inline-block text-gray-800 pt-[4px] pl-[5px]"
                        htmlFor="categ5"
                      >
                        kimaono
                      </label>
                    </div>

                    <div className="form-check taPoint3 cursor-pointer py-[7px] flex items-center relative">
                      <input
                        className="w-[28px] form-check-input appearance-none h-4 w-4 border border-[#fbf1e8] bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer w-[25px] h-[25px]"
                        type="checkbox"
                        value=""
                        id="categ6"
                      />
                      <label
                        className="block w-[100%] fwr text-[11px] leading-[25px] text-[#000] capitalize form-check-label inline-block text-gray-800 pt-[4px] pl-[5px]"
                        htmlFor="categ6"
                      >
                        embroidery
                      </label>
                    </div>
                    <div className="form-check taPoint3 cursor-pointer py-[7px] flex items-center relative">
                      <input
                        className="w-[28px] form-check-input appearance-none h-4 w-4 border border-[#fbf1e8] bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer w-[25px] h-[25px]"
                        type="checkbox"
                        value=""
                        id="categ7"
                      />
                      <label
                        className="block w-[100%] fwr text-[11px] leading-[25px] text-[#000] capitalize form-check-label inline-block text-gray-800 pt-[4px] pl-[5px]"
                        htmlFor="categ7"
                      >
                        printing bloom
                      </label>
                    </div>
                    <div className="form-check taPoint3 cursor-pointer py-[7px] flex items-center relative">
                      <input
                        className="w-[28px] form-check-input appearance-none h-4 w-4 border border-[#fbf1e8] bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer w-[25px] h-[25px]"
                        type="checkbox"
                        value=""
                        id="categ8"
                      />
                      <label
                        className="block w-[100%] fwr text-[11px] leading-[25px] text-[#000] capitalize form-check-label inline-block text-gray-800 pt-[4px] pl-[5px]"
                        htmlFor="categ8"
                      >
                        casual
                      </label>
                    </div>
                    <div className="form-check taPoint3 cursor-pointer py-[7px] flex items-center relative">
                      <input
                        className="w-[28px] form-check-input appearance-none h-4 w-4 border border-[#fbf1e8] bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer w-[25px] h-[25px]"
                        type="checkbox"
                        value=""
                        id="categ9"
                      />
                      <label
                        className="block w-[100%] fwr text-[11px] leading-[25px] text-[#000] capitalize form-check-label inline-block text-gray-800 pt-[4px] pl-[5px]"
                        htmlFor="categ9"
                      >
                        formal
                      </label>
                    </div>
                    <div className="form-check taPoint3 cursor-pointer py-[7px] flex items-center relative">
                      <input
                        className="w-[28px] form-check-input appearance-none h-4 w-4 border border-[#fbf1e8] bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer w-[25px] h-[25px]"
                        type="checkbox"
                        value=""
                        id="categ10"
                      />
                      <label
                        className="block w-[100%] fwr text-[11px] leading-[25px] text-[#000] capitalize form-check-label inline-block text-gray-800 pt-[4px] pl-[5px]"
                        htmlFor="categ10"
                      >
                        suit
                      </label>
                    </div>
                    <div className="form-check taPoint3 cursor-pointer py-[7px] flex items-center relative">
                      <input
                        className="w-[28px] form-check-input appearance-none h-4 w-4 border border-[#fbf1e8] bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer w-[25px] h-[25px]"
                        type="checkbox"
                        value=""
                        id="categ11"
                      />
                      <label
                        className="block w-[100%] fwr text-[11px] leading-[25px] text-[#000] capitalize form-check-label inline-block text-gray-800 pt-[4px] pl-[5px]"
                        htmlFor="categ11"
                      >
                        lawns
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex-1 single-filter relative cursor-pointer">
              <div
                className={`flex justify-between items-center`}
                onClick={() => openDropdown(designer_dropdown)}
              >
                <p className="fwr capitalize text-[#1b1b28] text-[11px] my-[13px] px-[16px] h-[22px] leading-[22px]">
                  designers
                </p>
                <div ref={designerChevron} className="taPoint3">
                  <IoChevronDown className="mr-[10px]" />
                </div>
              </div>
              <DesignerFilter
                designer_dropdown={designer_dropdown}
                data={allDesigners}
              />
            </div>
            <div
              className="flex-1 single-filter relative cursor-pointer"
              onClick={() => openDropdown(size_dropdown)}
            >
              <div className={`flex justify-between items-center`}>
                <p className="fwr capitalize text-[#1b1b28] text-[11px] my-[13px] px-[16px] h-[22px] leading-[22px]">
                  size
                </p>
                <div ref={sizeChevron} className="taPoint3">
                  <IoChevronDown className="mr-[10px]" />
                </div>
              </div>
              <SizeFilter
                size_dropdown={size_dropdown}
                data={allSizes}
                choosingFilterOption={choosingFilterOption}
                currectSelected={currectSelectedSize}
                filterName={"sizeFilter"}
              />
            </div>
            <div
              className="flex-1 single-filter relative cursor-pointer"
              onClick={() => openDropdown(color_dropdown)}
            >
              <div className={`flex justify-between items-center`}>
                <p className="fwr capitalize text-[#1b1b28] text-[11px] my-[13px] px-[16px] h-[22px] leading-[22px]">
                  color
                </p>
                <div ref={colorChevron} className="taPoint3">
                  <IoChevronDown className="mr-[10px]" />
                </div>
              </div>
              <ColorFilter
                color_dropdown={color_dropdown}
                data={allColors}
                choosingFilterOption={choosingFilterOption}
                currectSelected={currectSelectedColor}
                filterName={"colorFilter"}
              />
            </div>
            <div
              className="flex-1 single-filter relative cursor-pointer"
              onClick={() => openDropdown(price_dropdown)}
            >
              <div className={`flex justify-between items-center`}>
                <p className="fwr capitalize text-[#1b1b28] text-[11px] my-[13px] px-[16px] h-[22px] leading-[22px]">
                  price
                </p>
                <div ref={priceChevron} className="taPoint3">
                  <IoChevronDown className="mr-[10px]" />
                </div>
              </div>
              <PriceFilter
                price_dropdown={price_dropdown}
                data={allPriceRanges}
                choosingFilterOption={choosingFilterOption}
                currectSelected={currectSelectedPrice}
                filterName={"prizeFilter"}
              />
            </div>
            <div
              className="flex-1 single-filter relative cursor-pointer"
              onClick={() => openDropdown(sort_by_dropdown)}
            >
              <div className={`flex justify-between items-center`}>
                <p className="fwr capitalize text-[#1b1b28] text-[11px] my-[13px] px-[16px] h-[22px] leading-[22px]">
                  sorty by
                </p>
                <div ref={sortByChevron} className="taPoint3">
                  <IoChevronDown className={`mr-[10px]`} />
                </div>
              </div>
              <SortByFilter
                sort_by_dropdown={sort_by_dropdown}
                data={sortByMethods}
                choosingFilterOption={choosingFilterOption}
                currectSelected={currectSelectedSortBy}
                filterName={"sortByFilter"}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ShopFilters;
