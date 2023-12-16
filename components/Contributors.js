import React, { useState } from "react";

import Slider from "react-slick";
import Image from "next/image";
import ArrowBack from "../public/assets/Icon/eva_arrow-back-fill.svg";
import ArrowNext from "../public/assets/Icon/eva_arrow-next-fill.svg";

const Contributors = ({
  listContributor = [
    {
      name: "Hector Silva",
      image: "/assets/founder.jpg",
      office: "CEO & Fundador",
    },
    {
      name: "Ingrid Matuques",
      image: "/assets/cto.png",
      office: "(CTO) Diretora de Tecnologia",
    },
    {
      name: "Maycon Moreira",
      image: "/assets/contributor_2.jpeg",
      office: "Cofundador",
    },
    {
      name: "Yara Leodoro",
      image: "/assets/contributor_3.jpg",
      office: "Cofundadora",
    },
  ],
}) => {
  const settings = {
    dots: true,
    customPaging: function (i) {
      return (
        <a className="">
          <span className="mx-2 rounded-l-full rounded-r-full h-4 w-4 block cursor-pointer transition-all "></span>
        </a>
      );
    },
    dotsClass: "slick-dots w-max absolute mt-20  ",
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 770,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const [sliderRef, setSliderRef] = useState(null);

  return (
    <>
      <Slider
        {...settings}
        arrows={false}
        ref={setSliderRef}
        className="flex items-stretch justify-items-stretch"
      >
        {listContributor.map((listContributors, index) => (
          <div className="px-3 flex items-stretch" key={index}>
            <div className="border-2 border-gray-500 hover:border-blue-500 transition-all rounded-lg p-8 flex flex-col">
              <div className="flex flex-col xl:flex-row w-full items-stretch xl:items-center">
                <div className="flex flex-row justify-start items-center gap-5">
                  <Image
                    src={listContributors.image}
                    height={50}
                    width={50}
                    alt="Icon People"
                    className="rounded-full"
                  />
                  <div className="flex flex-col text-left">
                    <p className="text-lg text-black-600">
                      {listContributors.name}
                    </p>
                    <p className="text-sm text-black-500">
                      {listContributors.office}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
      <div className="flex w-full items-center justify-end">
        <div className="flex flex-none justify-between w-auto mt-14">
          <div
            className="mx-4 flex items-center justify-center h-14 w-14 rounded-full bg-white border-blue-500 border hover:bg-blue-500 hover:text-white transition-all text-blue-500 cursor-pointer"
            onClick={sliderRef?.slickPrev}
          >
            <ArrowBack className="h-6 w-6 " />
          </div>
          <div
            className="flex items-center justify-center h-14 w-14 rounded-full bg-white border-blue-500 border hover:bg-blue-500 hover:text-white transition-all text-blue-500 cursor-pointer"
            onClick={sliderRef?.slickNext}
          >
            <ArrowNext className="h-6 w-6" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Contributors;
