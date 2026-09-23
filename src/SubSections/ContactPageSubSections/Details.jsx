import React from "react";
import { FiPhoneCall } from "react-icons/fi";
import { MdOutlineSpeakerNotes } from "react-icons/md";

const Details = () => {
  return (
    <div className="flex flex-col pb-24 gap-4 lg:gap-1 min-h-[72vh] mt-6 pt-3 lg:mt-0 lg:h-[100%] lg:p-0 ">
      <div className="  flex flex-col gap-4 min-h-[30vh] md:min-h-fit mt-6 lg:mt-0 pt-3 lg:p-0">
        <div className=" w-[95%] min-h-[40vh] sm:min-h-fit flex flex-col gap-5 sm:flex-row mx-auto sm:gap-3 lg:w-[100%] ">
          <div className="w-[100%] flex flex-col gap-3 sm:w-[49%] pr-6 pl-2 pt-2 pb-2 rounded-xl border-[1px] border-[#4C4220] shadow-md hover:-translate-y-1 duration-300 transition-all ease-in-out bg-[#131313] lg:w-[50%] lg:pb-3">
            <div className="w-fit rounded-[40px] bg-[#262318] border-[1px] border-[#262318] p-4">
              <FiPhoneCall className="w-fit text-[20px] text-[#D4AF37]" />
            </div>
            <p className="text-2xl font-medium text-[#D4AF37]">Call Us</p>
            <p className="text-[#555F6F]">Available 24/7 for VIP members</p>
            <a href="tellto:+2347065796923" className="">
              <p className="text-[#D4AF37]">+2347065796923</p>
            </a>
          </div>

          <div className="w-[100%] flex flex-col gap-3 sm:w-[49%] pr-7 pl-2 pt-2 pb-2 rounded-xl border-[1px] border-[#4C4220] shadow-md hover:-translate-y-1 duration-300 transition-all ease-in-out bg-[#131313] lg:w-[50%] lg:pb-3">
            <div className="w-fit rounded-[40px] bg-[#262318] border-[1px] border-[#262318] p-4">
              <MdOutlineSpeakerNotes className="w-fit text-[20px] text-[#D4AF37]" />
            </div>
            <p className="text-2xl text-[#D4AF37] font-medium">Email Support</p>
            <p className="text-[#555F6F]">Expect a reply within 1 hour.</p>
            <a href="mailto:ririLuxeEats@luxeeats.com" className="">
              <p className="text-[#D4AF37]">ririLuxeEats@luxeeats.com</p>
            </a>
          </div>
        </div>
      </div>

      <div className="mx-auto w-[95%] bg-white rounded-lg shadow-lg overflow-hidden lg:mt-4 lg:w-full">
        <div className="w-full p-3 lg:h-[67px] border-b border-[#4C4220] bg-[#131313]">
          <p className="text-2xl font-semibold my-auto text-[#D4AF37]">Corporate Headquarters</p>
        </div>

        <div className="w-full h-52 lg:h-[21.1rem]">
          <iframe
            src="https://www.google.com/maps?q=30.0000,30.0000&z=6&output=embed"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Location Map"
            className="w-full h-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Details;
