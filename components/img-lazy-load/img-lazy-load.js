import React from "react";
import Image from "next/image";
import blurImg from "../../assets/images/blurimg-min.jpg";

function ImgLazyLoad({ src, alt, classes }) {
  return (
    <>
      <Image
        src={src}
        alt={alt}
        className={classes}
        placeholder="blur"
        blurDataURL={blurImg}
      />
    </>
  );
}

export default ImgLazyLoad;
