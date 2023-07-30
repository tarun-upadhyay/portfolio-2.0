"use client";
import { LineSvg } from "@/app/utils/Icons/AllIcon";
import { allSocialMediaLink } from "@/app/utils/projects_data";
import React, { useRef } from "react";
import ContactButtons from "./ContactButtons";
import emailjs from "@emailjs/browser";
const Contact = () => {
  const formData: any = useRef();

  const handleFormData = (e: any) => {
    e.preventDefault();
    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_SERVICEID as string,
        process.env.NEXT_PUBLIC_TEMPLATEID as string,
        formData.current,
        process.env.NEXT_PUBLIC_PASSWORD
      )
      .then((res) => console.log(res.text))
      .catch((err) => console.log(err.text));
  };
  return (
    <div className="flex flex-col items-center justify-center w-full">
      <div className="flex items-center justify-center mt-10 space-x-5">
        <LineSvg className="relative w-20 h-1 md:w-60" />
        <h2 className="text-xl text-text md:text-4xl whitespace-nowrap">
          Get in Touch
        </h2>
        <LineSvg className="relative w-20 h-1 md:w-60" />
      </div>
      <div className="mt-10 md:w-[25%]">
        <h1 className="text-2xl text-center font-fira font-bold text-neon">
          Feel free to ask anything
        </h1>
        <div
          className="border rounded-xl border-neon px-5 py-8 mt-10"
          id="contact"
        >
          <form
            ref={formData}
            onSubmit={handleFormData}
            className="flex flex-col"
          >
            <input
              type="text"
              className="h-[50px] rounded font-bold px-5 bg-text  enabled:hover:border-neon drop-shadow-md placeholder-[#164B60] text-[#071952]"
              name="user_name"
              required
              placeholder="Name"
            />
            <br />
            <input
              type="text"
              placeholder="Subject"
              className="h-[50px] rounded font-bold px-5 bg-text placeholder-[#071952] text-[#001C30] enabled:hover:border-neon drop-shadow-md"
              name="user_subject"
              required
            />
            <br />
            <input
              type="text"
              placeholder="Email"
              className="h-[50px] rounded font-bold px-5 bg-text placeholder-[#071952] text-[#001C30] enabled:hover:border-neon drop-shadow-md"
              name="user_email"
              required
            />
            <br />
            <textarea
              placeholder="Message"
              name="message"
              rows={5}
              required
              className="px-5 py-3 text-lg  placeholder-[#071952] text-[#001C30]  rounded-lg font-bold bg-text drop-shadow-md"
            ></textarea>
            <br />
            <button className="border border-neon text-text text-2xl rounded-xl py-2 font-bold">
              Submit
            </button>
          </form>
        </div>
      </div>

      <div className="flex flex-wrap items-center justify-center mx-auto">
        {allSocialMediaLink.map(({ icon, link, name }, i) => (
          <div key={i}>
            <ContactButtons
              icon={icon}
              link={link}
              marginLeft={i === 0 ? "ml-0" : "ml-6 md:ml-10"}
              name={name}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Contact;
