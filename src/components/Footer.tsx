import { Flag, Star } from "lucide-react";
import { QuadComponent } from "./QuadComponent";

type Props = {};

const Footer = (props: Props) => {
  return (
    <div className="fixed bottom-0 text-gray-900 grid  gap-[20px] grid-cols-12  items-end  text-sm">
      <div className=" sm:col-[2/5] col-[2/10]  flex items-start w-full text-white absolute bottom-0 downAnimate">
        <QuadComponent double color="bg-primary">
          <div className="flex items-center">
            &#40;
            <span>
              <Star size={16} />
            </span>
            &#41;
            <span className="ml-1">05&#47;11</span>
          </div>
        </QuadComponent>
        <QuadComponent double color="bg-gray-900">
          <div className="flex gap-2 items-center">
            <Flag fill="white" size={16} />
            <span>38&#47;50</span>
          </div>
        </QuadComponent>
      </div>
      <div className="sm:col-[7/11] hidden absolute bottom-0 downAnimate">
        <div className="min-[800px]:w-[350px] min-[800px]:h-[40px] h-[30px] w-[250px] ">
          <div className="bg-gray-500 progress h-2 w-full">
            <div className="bg-white h-full w-[70px] "></div>
          </div>
        </div>
      </div>
      <div className="rTriangle  right-0 flex items-end justify-end justify-self-end min-[800px]:size-[100px] size-[60px]  scale-y-150 bg-primary col-[12/13]">
        <div className="min-[800px]:p-4 p-[10px] text-sm font-bold  text-white min-[800px]:text-2xl absolute bottom-0 downAnimate ">
          02
        </div>
      </div>
    </div>
  );
};

export default Footer;
