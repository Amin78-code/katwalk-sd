import React from "react";
import Image from "next/image";
import logoSquare from "../../assets/images/logo/logo-square.png";
import vat from "../../assets/images/logo/vat.png";
// import styles from "./sizeGuideModal.module.css";
import sizeGuideModalImage from "../../assets/images/hero-image.jpg";
import sizGuide from "../../assets/images/size-guide.jpg";
import {
  IoCloseOutline
} from "react-icons/io5";
import ImgLazyLoad from "../img-lazy-load/img-lazy-load";

function SizeGuideModal({toggleSizeGuideModal}) {
  return (
    <>
      <div className="fixed top-0 left-0 bottom-0 right-0 bg-[#00000087] w-[100%] h-[100%] z-[30] flex justify-center items-center">
        <div className="max-w-[810px] overflow-hidden px-[20px] pb-[20px] pt-[50px] bg-[#fff] relative z-[60]">
          <IoCloseOutline className="absolute text-[25px] right-[17px] top-[20px] z-[25]" onClick={toggleSizeGuideModal} />
          <div className="overflow-auto max-h-[82vh] pb-[20px]">
            <span className="image_container">
              {/* <Image src={sizGuide} alt="image" /> */}
              <ImgLazyLoad src={sizGuide} alt={"image"} classes={""} />
            </span>
          </div>
        </div>
      </div>
    </>
  );
}

export default SizeGuideModal;
