import {
  Bolt,
  CarFront,
  ChevronLast,
  ChevronLeft,
  ChevronsUp,
  CircleDollarSign,
} from "lucide-react";
import React, { ReactNode } from "react";
import { QuadComponent } from "./QuadComponent";
import { toast } from "sonner";

const Navbar = () => {
  return (
    <main>
      <nav className="flex  items-start text-sm">
        <div
          onClick={() => toast.info("you clicked the back button")}
          className="z-10 cursor-pointer w-fit moverighta fixed top-0 left-0"
        >
          <QuadComponent
            color="bg-primary "
            className=" w-fit h-[60px]"
            double={false}
            height="h-[60px]"
          >
            <div className=" flex items-center gap-1 px-3">
              <ChevronLeft size={16} /> Back
            </div>
          </QuadComponent>
        </div>
        <div className="w-fit upAnimate fixed top-0 left-[120px]">
          <QuadComponent
            className=" upAnimate min-[800px]:text-sm h-[50px]  w-fit "
            double
            color="bg-gray-900 "
          >
            <div className=" flex items-center gap-16 ">
              <div className=" flex items-center gap-1   ">
                <CarFront fill="white" size={16} /> Lvl06
              </div>
              <div className=" flex items-center gap-1">
                <CircleDollarSign size={16} /> 48098
              </div>
              <div className=" flex items-center gap-1">
                <ChevronsUp size={16} /> 120
              </div>
              <div className=" flex items-center gap-2">
                <Bolt size={16} />
              </div>
            </div>
          </QuadComponent>
        </div>
      </nav>
    </main>
  );
};

export default Navbar;
