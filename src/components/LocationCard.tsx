import { cn } from "@/lib/utils";
import { QuadComponent } from "./QuadComponent";
import Image from "next/image";
import { Star } from "lucide-react";
import { useEffect } from "react";
import { toast } from "sonner";

export type LocationProps = {
  status: "done" | "waiting";
  fromColor: string;
  toColor: string;
  direction: "top" | "left" | "right" | "bottom";
  city: string;
  stars: number;
  tagColor: "bg-gray-900" | "bg-amber-500";
  image: string;
  className?: string;
};

const LocationCard = ({
  status,
  className,
  image,
  stars,
  city,
  tagColor,
  fromGradient,
  toGradient,
  currId,
  currLoc,
  direction,
}: LocationProps & {
  fromGradient: string;
  toGradient: string;
  currId: number;
  currLoc: number;
  direction: "top" | "left" | "right" | "bottom";
}) => {
  const dirArray = {
    left: {
      position: "object-[0%_center] ",
      justify: "justify-self-start",
      animation: "leftWidtha",
    },
    right: {
      position: "object-[100%_center] ",
      justify: "justify-self-end",
      animation: "leftWidtha",
    },
    top: {
      position: "object-[0%_center] ",
      justify: "self-start",
      animation: "topWidtha",
    },
    bottom: {
      position: "object-[100%_center] ",
      justify: "self-end",
      animation: "topWidtha",
    },
  };
  const position = dirArray[direction];
  if (currId == 1) {
    document.querySelectorAll(".aOpacity").forEach((element) => {
      element.classList.remove("aOpacity");
      element.classList.add("w100toa0");
    });
    ["topWidtha", "leftWidtha"].forEach((className) => {
      document.querySelectorAll("." + className).forEach((element) => {
        element.classList.replace(className, "w100to0");
      });
    });
    document
      .querySelectorAll('[data-name = "imageHolder"]')
      .forEach((element) => {
        element.classList.remove("self-end", "self-start", "justify-self-end");
        element.classList.add("justify-self-start");
        element.classList.add("delay-200");
      });
    const overlay = document.querySelectorAll('[data-name = "overlayLoc"]');
    overlay.forEach((element) => {
      element.classList.remove("delay-150");
      element.classList.replace("animation-gen", "animation-gen");
      element.classList.remove("self-end", "self-start", "justify-self-end");
      element.classList.add("justify-self-start");
    });
  }
  if (currLoc == 1) {
    document.querySelectorAll(".w100toa0").forEach((element) => {
      element.classList.remove("w100toa0");
      element.classList.add("aOpacity");
    });
    document
      .querySelectorAll('[data-name = "overlayLoc"]')
      .forEach((element) => {
        element.classList.replace("w100to0", "w0to100");
        element.classList.add("delay-200");
        element.classList.replace("justify-self-start", "justify-self-end");
      });
    document
      .querySelectorAll('[data-name = "imageHolder"]')
      .forEach((element) => {
        element.classList.remove("delay-200");
        element.classList.replace("w100to0", "w0to100");
        element.classList.replace("justify-self-start", "justify-self-end");
      });
  }
  useEffect(() => {
    if (currId == 1) {
      // return () => clearTimeout(timeout);
    }
  }, [currId]);

  return (
    <div
      onClick={() => toast.info(`this goeas to ${city} city `)}
      className={cn("w-full cursor-pointer h-full relative", className)}
    >
      <div className={` relative h-full w-full grid`}>
        <div
          data-name="overlayLoc"
          className={`absolute  ${position.animation} delay-150 opacity-0 animation-gen  h-full w-full bg-gradient-to-t ${fromGradient} ${toGradient}  z-10 ${position.justify} `}
        ></div>
        <div
          data-name="imageHolder"
          className={`${position.animation} animation-gen  flex justify-start h-full w-full overflow-hidden ${position.justify} `}
        >
          <div className="h-[150px] flex">
            <img
              className={`object-cover ${position.position} w-full h-full flex-shrink-0`}
              src={image}
              width={150}
              height={100}
              alt={city}
            />
          </div>
        </div>
      </div>
      <div className="absolute top-1 -left-1 z-20 aOpacity animation-gen overflow-hidden">
        <div
          className={`tag h-[20px] flex text-sm items-center pl-2 ${tagColor} w-fit `}
          color={tagColor}
        >
          {status}
        </div>
      </div>
      <div className="grid overflow-hidden aOpacity grid-rows-5 justify-center font-['inter'] text-lg absolute h-full w-full top-0 left-0 z-20">
        <p className="row-span-3 flex items-end justify-center">{city}</p>
        <div className=" flex items-center gap-[2px] justify-center row-span-2 pb-3">
          {Array.from({ length: stars }).map((star, id) => (
            <div className="flex items-center" key={id}>
              &#40;
              <span>
                <Star fill="white" size={16} className="px-[1px]" />
              </span>
              &#41;
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LocationCard;
