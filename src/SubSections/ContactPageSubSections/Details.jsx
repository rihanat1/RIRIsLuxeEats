import React from "react";
import { FiPhoneCall } from "react-icons/fi";
import { MdOutlineSpeakerNotes } from "react-icons/md";

const Details = () => {
  return (
    <div className=" flex flex-col gap-4min-h-[72vh] mt-6 pt-3 lg:mt-0 ">
      <div className="flex flex-col gap-4 min-h-[30vh] md:min-h-fit mt-6 lg:mt-0 pt-3">
        <div className="w-[95%] min-h-[40vh] sm:min-h-fit flex flex-col gap-5 sm:flex-row mx-auto sm:gap-3 lg:w-[100%]">
          <div className="w-[100%] flex flex-col gap-3 sm:w-[49%] p-6 rounded-xl border-[1px] shadow-md hover:-translate-y-1 duration-300 transition-all ease-in-out bg-white lg:w-[50%]">
            <div className="w-fit rounded-[40px] bg-[#F1F3FF] p-4">
              <FiPhoneCall className="w-fit text-[20px] text-[#9D4300]" />
            </div>
            <p className="text-2xl font-medium">Call Us</p>
            <p className="text-[#555F6F]">Available 24/7 for VIP members</p>
            <p className="text-[#984f24]">+2347065796923</p>
          </div>

          <div className="w-[100%] flex flex-col gap-3 sm:w-[49%] p-6 rounded-xl border-[1px] shadow-md hover:-translate-y-1 duration-300 transition-all ease-in-out bg-white lg:w-[50%]">
            <div className="w-fit rounded-[40px] bg-[#F1F3FF] p-4">
              <MdOutlineSpeakerNotes className="w-fit text-[20px] text-[#9D4300]" />
            </div>
            <p className="text-2xl font-medium">Email Support</p>
            <p className="text-[#555F6F]">Expect a reply within 1 hour.</p>
            <p className="text-[#984f24]">ririLuxeEats@luxeeats.com</p>
          </div>
        </div>
      </div>

      <div className="mx-auto w-[95%] bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="w-full p-3 border-b border-gray-200">
          <p className="text-xl font-semibold">Corporate Headquarters</p>
        </div>

        <div className="w-full h-56 lg:h-72">
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
