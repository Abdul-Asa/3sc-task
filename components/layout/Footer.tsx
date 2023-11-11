import {
  FacebookIcon,
  InstaIcon,
  LinkdelnIcon,
  XIcon,
  YoutubeIcon,
} from "./Icons";
import { FooterLogo } from "./Logo";

export default function Footer() {
  return (
    <footer className="px-[10%] py-6 bg-primary-black lg:m-0 mb-[92px]">
      <div className="flex w-full h-full flex-col justify-between">
        <div className="flex w-full h-full lg:items-start flex-col">
          <FooterLogo />
          <div className="flex h-0.5 my-6 w-full bg-primary-white" />
          <div className="flex justify-between w-full flex-col lg:flex-row items-start">
            <div className="flex justify-between flex-col lg:flex-row gap-2 lg:gap-6">
              <div className="pr-3 ">
                <p className="text-primary-white text-[12px] font-bold font-poppins uppercase">
                  Bournemouth
                </p>
                <p className="text-primary-white text-[12px] font-anonpro ">
                  Telephone House Bournemouth <br /> BH1 3NE
                </p>
              </div>
              <div className="pr-3 ">
                <p className="text-primary-white text-[12px] font-poppins font-bold uppercase">
                  London
                </p>
                <p className="text-primary-white text-[12px] font-anonpro ">
                  51 Eastcheap <br /> London, EC3M 1JP
                </p>
              </div>
              <div className="pr-3 ">
                <p className="text-primary-white text-[12px] font-poppins font-bold uppercase">
                  Washington
                </p>
                <p className="text-primary-white text-[12px] font-anonpro ">
                  80 M Street SE <br /> Washington, D.C 20003
                </p>
              </div>
              <div className="pr-3 ">
                <p className="text-primary-white text-[12px] font-poppins font-bold uppercase">
                  Florida
                </p>
                <p className="text-primary-white text-[12px] font-anonpro ">
                  7901 4th St N, STE 300 <br /> St. Petersburg FL 33702
                </p>
              </div>
            </div>

            <div className="mt-6 lg:m-0">
              <p className="text-primary-white mb-2 text-[12px] font-bold uppercase">
                Get Social
              </p>
              <div className="flex gap-4 justify-between w-full">
                <XIcon />
                <InstaIcon />
                <FacebookIcon />
                <LinkdelnIcon />
                <YoutubeIcon />
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col pt-10 lg:flex-row justify-center lg:justify-between items-center">
          <p className="font-anonpro font-bold text-[12px] ">
            © 2023 3 Sided Cube
          </p>
          <p className="font-anonpro font-bold text-[12px] ">
            Let’s Build Tech For Good
          </p>
        </div>
      </div>
    </footer>
  );
}
