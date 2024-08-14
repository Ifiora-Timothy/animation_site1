"use client";
import Footer from "@/components/Footer";
import LocationCard, { LocationProps } from "@/components/LocationCard";
import Navbar from "@/components/Navbar";
import { cn } from "@/lib/utils";
import { getImageProps } from "next/image";
import { useEffect, useState } from "react";
import { toast } from "sonner";

export default function Home() {
  const [currId, setCurrId] = useState(0);
  const [currLoc, setCurrLoc] = useState(0);

  const cars = ["car1", "car2"];
  useEffect(() => {
    if (typeof window != "undefined") {
      window.onload = function () {
        window.scrollTo(0, document.body.scrollHeight);
      };
      const mediaQuery = window.matchMedia("(max-width: 767px)");
      if (mediaQuery.matches) {
        alert("This website is best viewed on a desktop");
      }
    }

    const interval = setInterval(() => {
      setCurrId((prev) => (prev + 1) % cars.length);
    }, 4000);
    const locInterval = setInterval(() => {
      setCurrLoc((prev) => (prev + 1) % cars.length);
    }, 7000);
    return () => {
      clearInterval(interval);
      clearInterval(locInterval);
    };
  }, []);

  useEffect(() => {
    if (currLoc == 1) {
      if (typeof document == "undefined") return;
      document.querySelectorAll(".moveLefta").forEach((element) => {
        element.classList.replace("moveLefta", "opacityround");
      });
      document
        .getElementById(cars[0])
        ?.classList.replace("carAnimation", "w100to0");
      document.getElementById("opacClass")?.classList.remove("opacitya");

      document
        .getElementById(cars[1])
        ?.classList.add("carAnimation", "duration-[4000]");
    } else if (currLoc == 0) {
      if (typeof document == "undefined") return;
      document.querySelectorAll(".opacityround").forEach((element) => {
        element.classList.replace("opacityround", "moveLefta");
      });
      document.getElementById("opacClass")?.classList.add("opacitya");
      document
        .getElementById(cars[1])
        ?.classList.remove("carAnimation", "duration-[4000]");
      document;
      document
        .getElementById(cars[0])
        ?.classList.replace("w100to0", "carAnimation");
    }
  }, [currLoc]);
  const getImageSrcSet = (image: string): string => {
    return getImageProps({
      priority: true,
      width: 200,
      sizes: "100vw",
      quality: 100,
      alt: "hero image",
      height: 200,
      src: image,
    }).props.srcSet as string;
  };
  const largeImg1 = getImageSrcSet("/car1.jpg");
  const largeImg2 = getImageSrcSet("/car2.jpg");
  const smallImg1 = getImageSrcSet("/car1sm.jpg");
  const smallImg2 = getImageSrcSet("/car2sm.jpg");

  return (
    <main className="relative w-screen h-screen overflow-hidden text-white">
      <div className="absolute h-full w-full inset-0 z-0">
        <div
          id={cars[0]}
          className="absolute bottom-0 z-[1] animation-gen  h-full w-full carAnimation"
        >
          <div
            id="opacClass"
            className="absolute opacitya h-full w-full top-0 left-0  z-10"
          ></div>
          <picture>
            <source media="(min-width:500px)" srcSet={largeImg1} />
            <source media="(min-width:300px)" srcSet={smallImg1} />
            <img className="carAnimation object-cover sm:object-[0%_center] object-left-bottom  bottom-0  z-10 w-screen h-full" />
          </picture>
        </div>
        <div id={cars[1]} className="absolute bottom-0 h-full w-full ">
          <picture className="">
            <source media="(min-width:500px)" srcSet={largeImg2} />
            <source media="(min-width:300px)" srcSet={smallImg2} />
            <img className="carAnimation  object-cover bottom-0  sm:object-[0%_center]  object-left-bottom   w-screen h-full " />
          </picture>
        </div>
      </div>
      <div className="absolute z-[0] moverighta top-0 left-0 sm:h-[70%] h-[20%]  sm:w-[250px] w-[150px] bg-slate-800/60 rTriangle rotate-180  "></div>
      <div className="absolute top-0  right-0 h-full w-full  ">
        <div className="absolute z-[0] bottom-0 right-0 sm:size-[300px] size-[100px] moveLefta animation-gen   scale-y-150  bg-slate-800/60 rTriangle   "></div>
        <div className="absolute z-[0] bottom-0 right-0  sm:size-[450px] size-[150px] animation-gen   scale-y-150  bg-slate-800/60 rTriangle  moveLefta delay-[200ms] "></div>
        <div className="absolute z-[0] bottom-0 right-0  sm:size-[600px] size-[200px] animation-gen   scale-y-150  bg-slate-800/60 rTriangle  moveLefta delay-[400ms]  "></div>
        <div className="absolute z-[0] bottom-0 right-0  sm:size-[750px] size-[250px]  scale-y-150  bg-slate-800/60 rTriangle  moveLefta delay-[600ms]  animation-gen "></div>
      </div>
      <div className="absolute  h-full w-full">
        <div className="grid grid-rows-12 grid-cols-12  h-full w-full">
          <div className="sm:row-[3/11] row-[3/8] col-[5/13] w-[500px] sm:h-[450px] justify-self-end grid  grid-cols-3 pr-5 grid-rows-3 gap-[25px]">
            {locations1.map((location, id) => (
              <LocationCard
                key={id}
                currId={currId}
                currLoc={currLoc}
                className={cn(location.className, "")}
                fromGradient={`${location.fromColor}`}
                toGradient={`${location.toColor}`}
                {...location}
              />
            ))}
          </div>
          <div className="row-[3/7] hidden sm:flex mt-10 col-[1/7] justify-center relative  ml-8 text-blu-600">
            <div className="w-full flex justify-start">
              <div className="absolute items-center  moverighta h-full w-fit mr-auto  flex flex-col gap-[0px]">
                <p className="text-[70px] font-semibold text-center">01</p>
                <p className="text-[30px] font-semibold">STREET RACING</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="relative z-[1] ">
        <Navbar />
        <Footer />
      </div>
    </main>
  );
}

const cities: Array<string> = [
  "san Francisco",
  "Lagos",
  "Nairobi",
  " Tokyo",
  "Florida",
];

const locations1: LocationProps[] = [
  {
    city: cities[0],
    tagColor: "bg-gray-900",
    className: "col-[3/4] row-[1/2]",
    image: "/sanFrancisco.jpeg",
    stars: 2,
    direction: "bottom",
    status: "done",

    fromColor: "from-amber-600/90",
    toColor: "to-amber-600/30",
  },
  {
    city: cities[1],
    direction: "left",
    fromColor: "from-green-600/90",
    toColor: "to-green-600/30",
    className: "col-[2/3] row-[2/3]",
    tagColor: "bg-gray-900",
    image: "/lagos.jpeg",
    stars: 4,
    status: "done",
  },
  {
    city: cities[2],
    direction: "right",
    fromColor: "from-blue-600/90",
    toColor: "to-blue-600/30",
    className: "col-[3/4] row-[2/3]",
    tagColor: "bg-amber-500",
    image: "/nairobi.jpeg",
    stars: 3,
    status: "done",
  },
  {
    city: cities[3],
    className: "col-[3/4] row-[3/4]",

    tagColor: "bg-gray-900",
    image: "/tokyo.jpeg",
    direction: "bottom",
    fromColor: "from-amber-600/90",
    toColor: "to-amber-600/30",
    stars: 2,
    status: "done",
  },
  {
    city: cities[4],
    className: "col-[2/3] row-[3/4]",
    tagColor: "bg-amber-500",
    image: "/sanFrancisco.jpeg",
    direction: "top",
    stars: 1,
    fromColor: "from-blue-600/90",
    toColor: "to-blue-600/30",
    status: "done",
  },
];
