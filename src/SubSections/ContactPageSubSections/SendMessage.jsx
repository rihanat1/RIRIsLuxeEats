import React, { useState } from "react";
import { FaCheckCircle, FaRegUser, FaUser } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import { MdMailOutline } from "react-icons/md";

const SendMessage = () => {
  const allData = {
    fullname: "",
    email: "",
    message: "",
  };

  const [modal, setModal] = useState(false);
  const [formData, setFormData] = useState(allData);

  function handleForm(e) {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    setModal(true);
  }

  function handleCloseModal() {
    setModal(false);
  }
  if(modal){
    document.body.style.overflow ="hidden"
  }else {
      document.body.style.overflow = "auto"
    }

  console.log(formData);

  return (
    <div className="min-h-[80vh] w-[100%]  bg-black xl:w-[45%] lg:h-fit">
      <div className=" bg-black w-[95%] h-[100%] mx-auto ">
        <div className=" h-[100%] flex flex-col gap-6 p-10 bg-[#131313] border-[1px] border-[#4C4220] shadow-md rounded-lg lg:h-[87%]">
          <p className="font-semibold text-3xl text-[#D4AF37]  ">
            Send a Message
          </p>
          <form
            action=""
            onSubmit={handleSubmit}
            className="flex flex-col gap-4"
          >
            <div className="flex flex-col gap-2">
              <label htmlFor="" className="text-[#C9C6C5] text-md font-semibold">
                Full Name
              </label>
              <div className="flex gap-2 items-center border-[1px] border-[#4C4220] outline-none bg-[#1C1B1B] p-3 shadow-md rounded-lg">
                <FaRegUser className="text-xl text-[#D4AF37]" />
                <input
                  type="text"
                  placeholder="Enter your fullname"
                  className="outline-none w-[90%] bg-[#1C1B1B]"
                  onChange={handleForm}
                  value={formData.fullname}
                  name="fullname"
                  required
                />
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="" className="text-md font-semibold text-[#C9C6C5]">
                Email Address
              </label>
              <div className="flex gap-2 items-center border-[1px] outline-none bg-[#1C1B1B] p-3 shadow-md rounded-lg border-[#4C4220]">
                <MdMailOutline className="text-[23px] text-[#D4AF37]" />
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="outline-none w-[90%] bg-[#1C1B1B]"
                  onChange={handleForm}
                  value={formData.email}
                  name="email"
                  required
                />
              </div>
            </div>

            <div className="flex flex-col ">
              <label htmlFor="" className="text-md font-semibold text-[#C9C6C5]">
                Your Message
              </label>
              <textarea
                name="message"
                required
                id=""
                cols={15}
                rows={9}
                className="border-[1px] border-[#4C4220] rounded-lg outline-none bg-[#1C1B1B] text-white shadow-md"
                onChange={handleForm}
                value={formData.message}
              ></textarea>
            </div>

            <button
              type="submit"
              className="bg-[#D4AF37] text-black font-semibold py-[10px] rounded-xl mt-1 text-[14px] hover:bg-[#9D4300]"
            >
              Send Message
            </button>

            {modal && (
              <div onClick={handleCloseModal} className="w-[100%] h-screen fixed left-0 top-0 inset-0 z-50 bg-black/50 backdrop-blur-sm flex justify-center items-center">
                <div onClick={(e)=>e.stopPropagation()} className="bg-[#b5510a] rounded-2xl w-[50%] sm:w-[47%] md:w-[41%] lg:w-[45%] xl:w-[37%] shadow-2xl p-8 relative">
                  <button
                    onClick={handleCloseModal}
                    className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
                  >
                    <IoMdClose className="text-2xl text-[#151C27]" />
                  </button>

                  <div className="flex justify-center items-center mb-4">
                    <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center">
                       <FaCheckCircle className="text-5xl text-[#151C27]" />
                    </div>
                  </div>
                   <h3 className="text-2xl font-bold text-center mb-2 text-[#151C27] ">Message Sent!</h3>
                   <div className="flex flex-col gap-3">
                    <p className="text-center font-semibold text-[#151C27]">
                    <span>
                      {
                        formData.fullname || "Valued Customer"
                      }
                    </span>, Thank you for reaching out!
                   </p>
                   <p className="text-center w-[90%] sm:w-[100%] lg:w-[95%] mx-auto text-[#151C27] font-semibold">Your message has been recieved and RIRI'sLuxeEats will get back to you via email within 24 hours.</p>
                   </div>
                </div>
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default SendMessage;
