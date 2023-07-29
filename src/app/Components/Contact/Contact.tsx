import { LineSvg } from "@/app/utils/Icons/AllIcon";
import { allSocialMediaLink } from "@/app/utils/projects_data";
import React from "react";
import ContactButtons from "./ContactButtons";

const Contact = () => {
  return (
    <div
      className="z-50 flex flex-col items-center justify-center w-full"
      id="contact"
    >
      <div className="flex items-center justify-center mt-10 space-x-5">
        <LineSvg className="relative w-20 h-1 md:w-60" />
        <h2 className="text-xl text-text md:text-4xl whitespace-nowrap">
          Get in Touch
        </h2>
        <LineSvg className="relative w-20 h-1 md:w-60" />
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

      <div className="flex flex-col md:flex-row flex-wrap justify-center mx-auto mt-8 space-x-5">
        <div>
          <h1 className="text-2xl font-fira font-bold">Contact Details:</h1>
        </div>
        <div>
          <h1 className="text-2xl font-fira font-bold text-neon">
            Feel free to ask anything
          </h1>
          <div className="border rounded-xl border-neon px-5 py-8 mt-10">
            <form action="" className="flex flex-col">
              <input type="text" className="h-[50px] rounded font-bold px-5 bg-text  enabled:hover:border-neon drop-shadow-md" placeholder="Name" />
              <br />
              <input type="text" placeholder="Subject" className="h-[50px] rounded font-bold px-5 bg-text text-black-1000 enabled:hover:border-neon drop-shadow-md" />
              <br />
              <input type="text" placeholder="Email" className="h-[50px] rounded font-bold px-5 bg-text enabled:hover:border-neon drop-shadow-md" />
              <br />
              <textarea
                placeholder="Message"
                name="message"
                rows={5}
                required
                className="px-5 py-3 text-lg  placeholder-black rounded-lg font-bold bg-text drop-shadow-md"
              ></textarea>
              <br />
              <button className="border border-neon text-text">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
