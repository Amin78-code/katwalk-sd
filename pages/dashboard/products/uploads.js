import React, { useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import Layout from "../../../components/layout/layout";
import AdminPanelLayout from "../../../components/dashboard/admin-panel-layout/AdminPanelLayout";
import TitleAndTableCard from "../../../components/dashboard/title-and-table-card/TitleAndTableCard";
import TableHeader from "../../../components/dashboard/table-header/TableHeader";
import TwoColTableWithHeading from "../../../components/dashboard/two-col-table-with-heading/TwoColTableWithHeading";
import CardBody from "../../../components/dashboard/card-body/CardBody";
import TwoColTable from "../../../components/dashboard/two-col-table/TwoColTable";
import HeadingBar from "../../../components/heading-bar/HeadingBar";
import verified from "../../../assets/images/icons/verified.png";
import styles from "../../../components/uploads.module.css";

const ordersData = [
  { title: "Total orders", value: "0" },
  { title: "Pending orders", value: "0" },
  { title: "Cancelled orders", value: "0" },
  { title: "Successful orders", value: "0" },
];
const productCategories = ["Abaya", "Kaftan", "Dress", "Farwa", "Kimono"];
const productTypes = [
  "Choose Type",
  "Made-to-Measure,Made in Bahrain",
  "Bespoke",
  "Made-to-Measure (MTM)",
  "Ready-to-Wear (RTW)",
];

const productDescription = [
  {
    name: "type",
    placeholder: "Choose Type",
    options: [
      "Made-to-Measure,Made in Bahrain",
      "Bespoke",
      "Made-to-Measure (MTM)",
      "Ready-to-Wear (RTW)",
    ],
  },
  {
    name: "size & fit",
    placeholder: "Choose size & fit",
    options: ["oversized fit", "relaxed fit", "regular fit", "stretchy"],
  },
  {
    name: "fabric type",
    placeholder: "nothing selected",
    options: [
      "Pure Silk Organza",
      "Jerse",
      "Natural Silk",
      "Viscose",
      "Georgette",
      "Teddy",
      "Gabardine",
      "Plisse",
      "Silk Cotton",
      "Chamois",
      "Jacquard",
      "Velvet",
      "Organza",
      "Shantung",
      "Twill",
      "Denim",
      "Tulle",
      "Tweed",
      "Taffeta",
      "Polyester",
      "Satin",
      "Cotton",
      "Wool",
      "Lace",
      "Chiffon",
      "Japanese Silk",
      "Brocade",
      "Silk",
      "Washed Silk",
      "Crepe",
      "Linen  ",
    ],
  },
  {
    name: "fabric weight",
    placeholder: "Choose fabric weight",
    options: [
      "very warm",
      "warm",
      "midweight",
      "lightweight",
      "cool lightweight",
    ],
  },
  {
    name: "care instructions",
    placeholder: "Choose fabric weight",
    options: [
      "Steam Iron",
      "Specialist Clean",
      "Machine Wash",
      "Machine Wash Cold",
      "Non-iron",
      "Iron",
      "Hand Wash",
      "Steam Wash",
      "Dry Clean",
    ],
  },
  {
    name: "shipping & returns",
    placeholder: "Choose fabric weight",
    options: [
      "very warm",
      "warm",
      "midweight",
      "lightweight",
      "cool lightweight",
    ],
  },
];

const productVariations = {
  colors: [
    { name: "AliceBlue", code: "before:bg-[#f0f8ff]" },
    { name: "AntiqueWhite", code: "before:bg-[#faebd7]" },
    { name: "Aqua", code: "before:bg-[#00ffff]" },
    { name: "Beige", code: "before:bg-[#f5f5dc]" },
    { name: "Bisque", code: "before:bg-[#ffe4c4]" },
    { name: "BlanchedAlmond", code: "before:bg-[#ffebcd]" },
  ],
  sheilaColors: [
    { name: "AliceBlue", code: "before:bg-[#f0f8ff]" },
    { name: "AntiqueWhite", code: "before:bg-[#faebd7]" },
    { name: "Aqua", code: "before:bg-[#00ffff]" },
    { name: "Beige", code: "before:bg-[#f5f5dc]" },
    { name: "Bisque", code: "before:bg-[#ffe4c4]" },
    { name: "BlanchedAlmond", code: "before:bg-[#ffebcd]" },
  ],
  sheilaLength: ["180 cm", "200 cm", "170 cm", "150 cm"],
};

function AddNewProduct() {
  const [selectedCategory, setSelectedCategory] = useState("Abaya");
  const [selectedType, setSelectedType] = useState("Choose Type");
  const [selectedSizeAndFit, setSelectedSizeAndFit] =
    useState("Choose Size & Fit");
  const [selectedFabricType, setSelectedFabricType] =
    useState("nothing selected");
  const [selectedFabricWeight, setSelectedFabricWeight] = useState(
    "Choose Fabric Weight"
  );
  const [selectedCareInstructions, setSelectedCareInstructions] =
    useState("nothing selected");
  const [selectedShippingAndReturns, setSelectedShippingAndReturns] = useState(
    "Choose Shipping & Returns"
  );

  const [selectedColors, setSelectedColors] = useState([]);
  const [selectedSheilaColor, setSelectedSheilaColor] = useState([]);
  const [selectedSheilaLength, setSelectedSheilaLength] =
    useState("nothing selected");

  const [colorTitle, setColorTitle] = useState("nothing selected");
  const [sheilacolorTitle, setSheilaColorTitle] = useState("nothing selected");

  const categorySelect = useRef("");
  const typeSelect = useRef("");
  const colorSelect = useRef("");
  const sheilaColorSelect = useRef("");
  const sheilaLengthSelect = useRef("");

  const openCategorySelect = () => {
    categorySelect.current.classList.toggle("dblock");
    document
      .getElementById("categorySelect")
      .classList.toggle("border-[#c53a24]");
  };

  const setCategory = (selectedOption) => {
    setSelectedCategory(selectedOption);
  };

  const openSelect = (dropdownName, index) => {
    let allOptions = [];
    for (let i = 0; i < productDescription.length; i++) {
      allOptions.push("options" + i);
    }

    for (let i = 0; i < productDescription.length; i++) {
      if (dropdownName !== allOptions[i]) {
        document.getElementById(allOptions[i]).classList.remove("dblock");
      }
    }
    let dropdown = document.getElementById(dropdownName);
    dropdown.classList.toggle("dblock");

    if ("optionMainDiv" + index == "optionMainDiv0") {
      document
        .getElementById("optionMainDiv0")
        .classList.toggle("border-[#c53a24]");
    } else if ("optionMainDiv" + index == "optionMainDiv1") {
      document
        .getElementById("optionMainDiv1")
        .classList.toggle("border-[#c53a24]");
    } else if ("optionMainDiv" + index == "optionMainDiv2") {
      document
        .getElementById("optionMainDiv2")
        .classList.toggle("border-[#c53a24]");
    } else if ("optionMainDiv" + index == "optionMainDiv3") {
      document
        .getElementById("optionMainDiv3")
        .classList.toggle("border-[#c53a24]");
    } else if ("optionMainDiv" + index == "optionMainDiv4") {
      document
        .getElementById("optionMainDiv4")
        .classList.toggle("border-[#c53a24]");
    } else if ("optionMainDiv" + index == "optionMainDiv5") {
      document
        .getElementById("optionMainDiv5")
        .classList.toggle("border-[#c53a24]");
    }
  };

  const setOption = (selectedOption, optionsIndex) => {
    console.log("selectedOption", selectedOption);
    console.log("optionsIndex", optionsIndex);
    if (optionsIndex == 0) {
      setSelectedType(selectedOption);
    } else if (optionsIndex == 1) {
      setSelectedSizeAndFit(selectedOption);
    } else if (optionsIndex == 2) {
      setSelectedFabricType(selectedOption);
    } else if (optionsIndex == 3) {
      setSelectedFabricWeight(selectedOption);
    } else if (optionsIndex == 4) {
      setSelectedCareInstructions(selectedOption);
    } else if (optionsIndex == 5) {
      setSelectedShippingAndReturns(selectedOption);
    }
  };

  const openProductVariationSelect = (productionVaraitionName) => {
    if (productionVaraitionName == "colorSelect") {
      colorSelect.current.classList.toggle("dblock");
    } else if (productionVaraitionName == "sheilaColorSelect") {
      sheilaColorSelect.current.classList.toggle("dblock");
    } else if (productionVaraitionName == "sheilaLengthSelect") {
      sheilaLengthSelect.current.classList.toggle("dblock");
    }
  };

  const settingSelectedColor = (selected, index) => {
    let allSelectedColors = selectedColors;
    let notInArray = true;

    for (let i = 0; i < productVariations.colors.length; i++) {
      if (allSelectedColors[i] == selected) {
        allSelectedColors.splice(i, 1);
        notInArray = false;
      }
    }

    if (notInArray == true) {
      allSelectedColors.push(selected);
    }

    setSelectedColors(allSelectedColors);

    for (let i = 0; i < productVariations.colors.length; i++) {
      if (productVariations.colors[i] == selected) {
        document.getElementById("colorOptions" + i).classList.toggle("dblock");
      }
    }

    if (selectedColors.length == 1) {
      setColorTitle(
        <li
          className={`
                  block relative text-[#b7b7b7] fwl text-[1rem] tracking-0 mt-[-2px] py-[0.15rem] px-[1rem] overflow-hidden overflow-ellipsis whitespace-nowrap taPoint3 pl-[25px] before:w-[17px] before:h-[17px] ${selectedColors[0].code} before:border-[1px] before:border-[#dee2e6] before:rounded-[.25rem] before:absolute before:left-[0px] before:top-[5px]`}
        >
          {selectedColors[0].name}
        </li>
      );
    } else if (selectedColors == "") {
      setColorTitle("nothing selected");
    } else {
      setColorTitle(selectedColors.length + " " + "items selected");
    }
  };

  const settingSelectedSheilaColor = (selected, index) => {
    let allSelectedSheilaColors = selectedSheilaColor;
    let notInArray = true;

    for (let i = 0; i < productVariations.sheilaColors.length; i++) {
      if (allSelectedSheilaColors[i] == selected) {
        allSelectedSheilaColors.splice(i, 1);
        notInArray = false;
      }
    }

    if (notInArray == true) {
      allSelectedSheilaColors.push(selected);
    }

    setSelectedSheilaColor(allSelectedSheilaColors);

    // console.log("selectedSheilaColor",selectedSheilaColor)

    //   console.log("productVariations.sheilaColors.length",productVariations.sheilaColors.length);
    for (let v = 0; v < productVariations.sheilaColors.length; v++) {
    //   console.log("selected", selected);
    //   console.log(
    //     "productVariations.sheilaColors[v]",
    //     productVariations.sheilaColors[v]
    //   );
      if (productVariations.sheilaColors[v] == selected) {
        //   console.log("productVariations.sheilaColors[v]",productVariations.sheilaColors[v]);
        // console.log("ysssss");
        document.getElementById("sheilaColorOptions" + v).classList.toggle("dblock");
      }
    }

    if (selectedSheilaColor.length == 1) {
      setSheilaColorTitle(
        <li
          className={`
                  block relative text-[#b7b7b7] fwl text-[1rem] tracking-0 mt-[-2px] py-[0.15rem] px-[1rem] overflow-hidden overflow-ellipsis whitespace-nowrap taPoint3 pl-[25px] before:w-[17px] before:h-[17px] ${selectedSheilaColor[0].code} before:border-[1px] before:border-[#dee2e6] before:rounded-[.25rem] before:absolute before:left-[0px] before:top-[5px]`}
        >
          {selectedSheilaColor[0].name}
        </li>
      );
    } else if (selectedSheilaColor == "") {
      setSheilaColorTitle("nothing selected");
    } else {
      setSheilaColorTitle(selectedSheilaColor.length + " " + "items selected");
    }
  };

  //   const settingSelectedSheilaColor = (selected) => {
  //     setSelectedSheilaColor(selected);
  //   };

  const settingSelectedSheilaLength = (selected) => {
    setSelectedSheilaLength(selected);
  };

  return (
    <>
      <Layout>
        <div className="w-[100%] min-h-[100vh] h-[auto]">
          <AdminPanelLayout active={"Products"}>
            <HeadingBar heading={"add your product"} />

            <div className="w-[100%] flex gap-x-[.9%]">
              <div className="w-[62.6%] h-[100%]">
                <TitleAndTableCard width={"w-[100% mb-[20px]"}>
                  <TableHeader>Product Information</TableHeader>
                  <CardBody>
                    <div className="fwr flex mb-[1rem]">
                      <p className="w-[24.4%] text-[#1b1b28] text-[13px] px-[5px] capitalize">
                        <span className="text-[#ff0032]">*</span>product name
                      </p>
                      <div className="w-[68.75%] px-[15px]">
                        <input
                          className="admin-input w-[100%] h-[44px] text-[#495057] text-[1rem] bg-[#fff] border-[1px] border-[#ced4da] rounded-[.25rem] py-[0.375rem] px-[0.75rem]"
                          placeholder="Product Name"
                        />
                      </div>
                    </div>
                    <div className="fwr flex mb-[1rem]">
                      <p className="w-[24.4%] text-[#1b1b28] text-[13px] px-[5px] capitalize">
                        <span className="text-[#ff0032]">*</span>category
                      </p>
                      <div className="w-[68.75%] px-[15px]">
                        <div
                          onClick={() => openCategorySelect()}
                          className="admin-input relative w-[100%] h-[44px] leading-[30px] text-[#495057] text-[1rem] bg-[#fff] border-[1px]  rounded-[.25rem] py-[0.375rem] px-[0.75rem] border-[#ced4da]"
                          id="categorySelect"
                        >
                          {selectedCategory ? selectedCategory : ""}
                          <div
                            ref={categorySelect}
                            className="absolute w-[100%] left-0 top-[43px] dnone"
                          >
                            <div className="w-[100%] mt-[0px] py-[10px] bg-[#fff] border-[1px] border-[#00000026] drop-shadow-[0_0px_50px_rgba(82,63,105,15%)]">
                              <div className="py-[4px] px-[8px]">
                                <input className="admin-input w-[100%] h-[44px] text-[#495057] text-[1rem] bg-[#fff] border-[1px] border-[#ced4da] rounded-[.25rem] py-[0.375rem] px-[0.75rem]" />
                              </div>
                              <ul>
                                {productCategories.map((value) => {
                                  return (
                                    <li
                                      onClick={() => setCategory(value)}
                                      key={value + 1}
                                      className={`${
                                        value == selectedCategory
                                          ? styles.active_option
                                          : ""
                                      } block text-[#212529] text-[1rem] py-[0.25rem] px-[1rem] hover:bg-[#c53a24] hover:text-[#fff] taPoint3`}
                                    >
                                      {value}
                                    </li>
                                  );
                                })}
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="fwr flex mb-[1rem]">
                      <p className="w-[24.4%] text-[#1b1b28] text-[13px] px-[5px] capitalize">
                        SKU Code
                      </p>
                      <div className="w-[68.75%] px-[15px]">
                        <input
                          className="admin-input w-[100%] h-[44px] text-[#495057] text-[1rem] bg-[#fff] border-[1px] border-[#ced4da] rounded-[.25rem] py-[0.375rem] px-[0.75rem]"
                          placeholder="SKU Code"
                        />
                      </div>
                    </div>
                  </CardBody>
                </TitleAndTableCard>

                <TitleAndTableCard width={"w-[100% mb-[20px]"}>
                  <TableHeader>Product Images</TableHeader>
                  <CardBody>
                    <div className="fwr flex mb-[1rem]">
                      <p className="w-[24.4%] text-[#1b1b28] text-[13px] px-[5px] capitalize">
                        <span className="text-[#ff0032]">*</span>Gallery Images{" "}
                        <small>(900x1200)</small>
                      </p>
                      <div className="w-[68.75%] px-[15px]">
                        <input
                          className="admin-input w-[100%] h-[44px] text-[#495057] text-[1rem] bg-[#fff] border-[1px] border-[#ced4da] rounded-[.25rem] py-[0.375rem] px-[0.75rem]"
                          placeholder="Product Name"
                        />
                      </div>
                    </div>
                  </CardBody>
                </TitleAndTableCard>

                <TitleAndTableCard width={"w-[100% mb-[20px]"}>
                  <TableHeader>Product Variation</TableHeader>
                  <CardBody>
                    {/* colors */}
                    <div className="fwl flex mb-[1rem]">
                      <input
                        className="w-[25%] h-[44px] leading-[34px] capitalize bg-[#e9ecef] fwl text-[#495057] text-[1rem] rounded-[.25rem] py-[.375rem] px-[.75rem] not-allowed"
                        value="color"
                      />
                      <div className="fwl w-[62.5%] pl-[15px] pr-[5px]">
                        <div className="admin-input relative w-[100%] h-[44px] leading-[30px] text-[#495057] text-[1rem] bg-[#fff] border-[1px] border-[#e2e5ec] rounded-[.25rem] py-[0.375rem] px-[0.75rem]">
                          <span
                            onClick={() =>
                              openProductVariationSelect("colorSelect")
                            }
                            className="w-[100%] text-[#b7b7b7] text-[15px] tracking-0 uppercase h-[40px] overflow-hidden block"
                          >
                            {colorTitle}
                          </span>
                          <div
                            ref={colorSelect}
                            className="absolute w-[100%] left-0 top-[43px] z-[2] dnone"
                          >
                            <div className="w-[100%] mt-[0px] py-[10px] bg-[#fff] border-[1px] border-[#00000026] drop-shadow-[0_0px_50px_rgba(82,63,105,15%)]">
                              <div className="py-[4px] px-[8px]">
                                <input className="admin-input w-[100%] h-[44px] text-[#495057] text-[1rem] bg-[#fff] border-[1px] border-[#ced4da] rounded-[.25rem] py-[0.375rem] px-[0.75rem]" />
                              </div>
                              <ul className="max-h-[160px] overflow-auto">
                                {productVariations.colors.map(
                                  (value, index) => {
                                    return (
                                      <li
                                        onClick={() =>
                                          settingSelectedColor(value, index)
                                        }
                                        key={value + 1}
                                        className={`
                                              block relative text-[#212529] fwr text-[1rem] py-[0.15rem] px-[1rem] hover:bg-[#c53a24] hover:text-[#fff] overflow-hidden overflow-ellipsis whitespace-nowrap taPoint3 pl-[40px] before:w-[17px] before:h-[17px] ${value.code} before:border-[1px] before:border-[#dee2e6] before:rounded-[.25rem] before:absolute before:left-[15px] before:top-[5px]`}
                                      >
                                        <div className="flex justify-between">
                                          {value.name}
                                          <div
                                            className="dnone"
                                            id={"colorOptions" + index}
                                          >
                                            tick
                                          </div>
                                        </div>
                                      </li>
                                    );
                                  }
                                )}
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                      <p className="fwr w-[12.5%] text-[10px] text-[#6C767D] leading-[2] tracking-[0.5px] pr-[10px] pl-[20px]">
                        Multiple Select
                      </p>
                    </div>

                    {/* sheila colors */}
                    <div className="fwl flex mb-[1rem]">
                      <input
                        className="w-[25%] h-[44px] leading-[34px] capitalize bg-[#e9ecef] fwl text-[#495057] text-[1rem] rounded-[.25rem] py-[.375rem] px-[.75rem] not-allowed"
                        value="color"
                      />
                      <div className="fwl w-[62.5%] pl-[15px] pr-[5px]">
                        <div className="admin-input relative w-[100%] h-[44px] leading-[30px] text-[#495057] text-[1rem] bg-[#fff] border-[1px] border-[#e2e5ec] rounded-[.25rem] py-[0.375rem] px-[0.75rem]">
                          <span
                            onClick={() =>
                              openProductVariationSelect("sheilaColorSelect")
                            }
                            className="w-[100%] text-[#b7b7b7] text-[15px] tracking-0 uppercase h-[40px] overflow-hidden block"
                          >
                            {sheilacolorTitle}
                          </span>
                          <div
                            ref={sheilaColorSelect}
                            className="absolute w-[100%] left-0 top-[43px] z-[2] dnone"
                          >
                            <div className="w-[100%] mt-[0px] py-[10px] bg-[#fff] border-[1px] border-[#00000026] drop-shadow-[0_0px_50px_rgba(82,63,105,15%)]">
                              <div className="py-[4px] px-[8px]">
                                <input className="admin-input w-[100%] h-[44px] text-[#495057] text-[1rem] bg-[#fff] border-[1px] border-[#ced4da] rounded-[.25rem] py-[0.375rem] px-[0.75rem]" />
                              </div>
                              <ul className="max-h-[160px] overflow-auto">
                                {productVariations.colors.map(
                                  (value, index) => {
                                    return (
                                      <li
                                        onClick={() =>
                                          settingSelectedSheilaColor(
                                            value,
                                            index
                                          )
                                        }
                                        key={value + 1}
                                        className={`
                                              block relative text-[#212529] fwr text-[1rem] py-[0.15rem] px-[1rem] hover:bg-[#c53a24] hover:text-[#fff] overflow-hidden overflow-ellipsis whitespace-nowrap taPoint3 pl-[40px] before:w-[17px] before:h-[17px] ${value.code} before:border-[1px] before:border-[#dee2e6] before:rounded-[.25rem] before:absolute before:left-[15px] before:top-[5px]`}
                                      >
                                        <div className="flex justify-between">
                                          {value.name}
                                          <div
                                            className="dnone"
                                            id={"sheilaColorOptions" + index}
                                          >
                                            tick
                                          </div>
                                        </div>
                                      </li>
                                    );
                                  }
                                )}
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                      <p className="fwr w-[12.5%] text-[10px] text-[#6C767D] leading-[2] tracking-[0.5px] pr-[10px] pl-[20px]">
                        Multiple Select
                      </p>
                    </div>

                    {/* sheila length */}
                    {/* <div className="fwl flex mb-[1rem]">
                      <input
                        className="w-[25%] h-[44px] leading-[34px] capitalize bg-[#e9ecef] fwl text-[#495057] text-[1rem] rounded-[.25rem] py-[.375rem] px-[.75rem] not-allowed"
                        value="Sheila Length"
                      />
                      <div className="fwl w-[62.5%] pl-[15px] pr-[5px]">
                        <div
                          onClick={() =>
                            openProductVariationSelect("sheilaLengthSelect")
                          }
                          className="admin-input relative w-[100%] h-[44px] leading-[30px] text-[#495057] text-[1rem] bg-[#fff] border-[1px] border-[#e2e5ec] rounded-[.25rem] py-[0.375rem] px-[0.75rem]"
                        >
                          <span className="text-[#b7b7b7] text-[15px] tracking-0 uppercase h-[40px] overflow-hidden block">
                            {selectedSheilaLength &&
                            selectedSheilaLength == "nothing selected" ? (
                              <span className="text-[#b7b7b7] text-[15px] tracking-0 uppercase h-[40px] overflow-hidden block">
                                {selectedSheilaLength}
                              </span>
                            ) : (
                              <p
                                className={`
                                      block text-[#b7b7b7] fwl text-[1rem] tracking-0 mt-[-2px] py-[0.15rem] overflow-hidden overflow-ellipsis whitespace-nowrap taPoint3`}
                              >
                                {selectedSheilaLength}
                              </p>
                            )}
                          </span>
                          <div
                            ref={sheilaLengthSelect}
                            className="absolute w-[100%] left-0 top-[43px] z-[2] dnone"
                          >
                            <div className="w-[100%] mt-[0px] py-[10px] bg-[#fff] border-[1px] border-[#00000026] drop-shadow-[0_0px_50px_rgba(82,63,105,15%)]">
                              <div className="py-[4px] px-[8px]">
                                <input className="admin-input w-[100%] h-[44px] text-[#495057] text-[1rem] bg-[#fff] border-[1px] border-[#ced4da] rounded-[.25rem] py-[0.375rem] px-[0.75rem]" />
                              </div>
                              <ul className="max-h-[160px] overflow-auto">
                                {productVariations.sheilaLength.map((value) => {
                                  return (
                                    <li
                                      onClick={() =>
                                        settingSelectedSheilaLength(value)
                                      }
                                      key={value + 1}
                                      className={`
                                              block relative text-[#212529] fwr text-[1rem] py-[0.15rem] px-[1rem] hover:bg-[#c53a24] hover:text-[#fff] overflow-hidden overflow-ellipsis whitespace-nowrap taPoint3`}
                                    >
                                      {value}
                                    </li>
                                  );
                                })}
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                      <p className="fwr w-[12.5%] text-[10px] text-[#6C767D] leading-[2] tracking-[0.5px] pr-[10px] pl-[20px]">
                        Multiple Select
                      </p>
                    </div> */}
                  </CardBody>
                </TitleAndTableCard>

                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
              </div>
              <TitleAndTableCard width={"w-[37.5%]"}>
                <TableHeader>Product Description</TableHeader>
                <CardBody>
                  {productDescription.map((value, index) => {
                    return (
                      <div key={value + 1} className="fwr flex mb-[1rem]">
                        <p className="w-[37.5%] text-[#1b1b28] text-[13px] pl-[5px] capitalize pr-[5%]">
                          <span className="text-[#ff0032]">*</span>
                          {value.name}
                        </p>

                        <div className="fwl w-[62.5%] pl-[15px] pr-[5px]">
                          <div
                            onClick={() => openSelect("options" + index, index)}
                            className="admin-input relative w-[100%] h-[44px] leading-[30px] text-[#495057] text-[1rem] bg-[#fff] border-[1px] border-[#e2e5ec] rounded-[.25rem] py-[0.375rem] px-[0.75rem]"
                            id={"optionMainDiv" + index}
                          >
                            <span className="text-[#b7b7b7] text-[15px] tracking-0 uppercase h-[40px] overflow-hidden block">
                              {index == 0
                                ? selectedType
                                  ? selectedType
                                  : ""
                                : ""}
                              {index == 1
                                ? selectedSizeAndFit
                                  ? selectedSizeAndFit
                                  : ""
                                : ""}
                              {index == 2
                                ? selectedFabricType
                                  ? selectedFabricType
                                  : ""
                                : ""}
                              {index == 3
                                ? selectedFabricWeight
                                  ? selectedFabricWeight
                                  : ""
                                : ""}
                              {index == 4
                                ? selectedCareInstructions
                                  ? selectedCareInstructions
                                  : ""
                                : ""}
                              {index == 5
                                ? selectedShippingAndReturns
                                  ? selectedShippingAndReturns
                                  : ""
                                : ""}
                            </span>
                            <div
                              ref={typeSelect}
                              className="absolute w-[100%] left-0 top-[43px] z-[2] dnone"
                              id={"options" + index}
                            >
                              <div className="w-[100%] mt-[0px] py-[10px] bg-[#fff] border-[1px] border-[#00000026] drop-shadow-[0_0px_50px_rgba(82,63,105,15%)]">
                                <div className="py-[4px] px-[8px]">
                                  <input className="admin-input w-[100%] h-[44px] text-[#495057] text-[1rem] bg-[#fff] border-[1px] border-[#ced4da] rounded-[.25rem] py-[0.375rem] px-[0.75rem]" />
                                </div>
                                <ul>
                                  {value.options.map((valu) => {
                                    return (
                                      <li
                                        onClick={() => setOption(valu, index)}
                                        key={valu + 1}
                                        className={`
                                        
                                        ${
                                          index == 0
                                            ? valu == selectedType
                                              ? styles.active_option
                                              : ""
                                            : ""
                                        }
                                        ${
                                          index == 1
                                            ? valu == selectedSizeAndFit
                                              ? styles.active_option
                                              : ""
                                            : ""
                                        }
                                          ${
                                            index == 2
                                              ? valu == selectedFabricType
                                                ? styles.active_option
                                                : ""
                                              : ""
                                          }
                                            ${
                                              index == 3
                                                ? valu == selectedFabricWeight
                                                  ? styles.active_option
                                                  : ""
                                                : ""
                                            }
                                              ${
                                                index == 4
                                                  ? valu ==
                                                    selectedCareInstructions
                                                    ? styles.active_option
                                                    : ""
                                                  : ""
                                              }
                                                ${
                                                  index == 5
                                                    ? valu ==
                                                      selectedShippingAndReturns
                                                      ? styles.active_option
                                                      : ""
                                                    : ""
                                                }
                                        block text-[#212529] text-[1rem] py-[0.25rem] px-[1rem] hover:bg-[#c53a24] hover:text-[#fff] overflow-hidden overflow-ellipsis whitespace-nowrap taPoint3`}
                                      >
                                        {valu}
                                      </li>
                                    );
                                  })}
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </CardBody>
              </TitleAndTableCard>
            </div>
          </AdminPanelLayout>
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
        </div>
      </Layout>
    </>
  );
}

export default AddNewProduct;
