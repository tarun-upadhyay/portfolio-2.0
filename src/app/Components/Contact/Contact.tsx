"use client";
import { LineSvg } from "@/app/utils/Icons/AllIcon";
import { allSocialMediaLink } from "@/app/utils/projects_data";
import React, { useRef } from "react";
import ContactButtons from "./ContactButtons";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Contact = () => {
  const formData: any = useRef();
  const notify = () => toast("Thank your response has been submitted!");
  const [loading, setLoading] = React.useState(false);
  const handleFormData = (e: any) => {
    e.preventDefault();
    setLoading(true);
    emailjs
      .sendForm(
        "service_0o7czhb",
        "template_fiu02yo",
        formData.current,
        "tehTXiO25G4RIDYKy"
      )
      .then((res) => {
        notify();
        setLoading(false);

        formData.current[0].value = null;
        formData.current[1].value = null;
        formData.current[2].value = null;
        formData.current[3].value = null;
        return console.log(res.text);
      })
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
              {loading ? (
                <div role="status" className="flex justify-center">
                  <svg
                    aria-hidden="true"
                    className="w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
                    viewBox="0 0 100 101"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                      fill="currentColor"
                    />
                    <path
                      d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                      fill="currentFill"
                    />
                  </svg>
                  <span className="sr-only">Loading...</span>
                </div>
              ) : (
                "Submit"
              )}
            </button>
            <ToastContainer
              position="bottom-right"
              autoClose={2000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
              theme="light"
            />
          </form>
        </div>
      </div>

      <div className="flex flex-wrap items-center justify-center mx-auto w-[90%]">
        {allSocialMediaLink.map(({ icon, link, name }, i) => (
          <div key={i}>
            <ContactButtons
              icon={icon}
              link={link}
              marginLeft={i === 0 ? "ml-0" : "ml-6 md:ml-10 xsm:ml-3"}
              name={name}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Contact;
