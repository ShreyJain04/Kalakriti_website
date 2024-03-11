import React from "react";
import Footer from "../footer";
import { ValidationError, useForm } from "@formspree/react";
import img from "../images/bl.jpg";

const Contact = () => {
  const [state, handleSubmit] = useForm("xayrbngb");
  if (state.succeeded) {
    return <p>Message sent successfully!</p>;
  }

  return (
    <>
    
      <section class="bg-gradient-to-r from-pink-100 via-pink-200 via-slate-200 via-purple-200 to-purple-100">
        <div class="pt-24 md:pt-28">
          <div class="flex items-center justify-center my-2">
            <div class="flex-col space-y-4 text-center">
              <h2 class="mb-4 text-4xl tracking-tight font-my_font1 text-gray-900 ">
                Contact Us
              </h2>
              <div class="text-black  text-2xl font-my_font1">
                Got a question? We'd love to hear from you. Send us a message
                and we'll respond as soon as possible.
              </div>
              <div class="flex items-center justify-center"></div>
            </div>
          </div>

          {/* FORM */}
          <form
            class="max-w-sm mx-auto px-4 font-my_font3 text-2xl font-bold"
            onSubmit={handleSubmit}
          >
            <div class="mb-5 ">
              <label
                for="Name"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                class="bg-gray-50  border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Your Name"
                required
              />
            </div>
            <div class="mb-5">
              <label
                for="email"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Your email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="name@email.com"
                required
              />
              <ValidationError
                field="email"
                prefix="Email"
                errors={state.errors}
              />
            </div>

            <div class="mb-5">
              <label
                for="message"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Message
              </label>
              <textarea
                name="message"
                id="message"
                rows="4"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Message"
                required
              />
              <ValidationError
                prefix="Message"
                field="message"
                errors={state.errors}
              />
            </div>

            <button
              class=" text-white bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
              type="submit"
              disabled={state.submitting}
            >
              Submit
            </button>
          </form>
        </div>

        <Footer />
      </section>
    </>
  );
};

export default Contact;
