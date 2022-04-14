//imports
import React from "react";
import "../App.css";

//Footer Element Function
export default function Footer() {
  return (
    <>
      <footer className="text-center lg:text-left text-gray-600">
        <hr></hr>
        <div className="py-3.5 text-left md:text-left ">
          <div className="grid grid-1 md:grid-cols-2 lg:grid-cols-2 gap-50">
            <div className="">
              <h6 className="uppercase font-semibold mb-4 flex justify-center md:justify-start">
                Useful links
              </h6>
              <p className="mb-4">
                <a href="/" className="text-gray-600">
                  Home
                </a>
              </p>
              <p className="mb-4">
                <a href="/preventionpage" className="text-gray-600">
                  Preventions
                </a>
              </p>
              <p className="mb-4">
                <a href="/sources" className="text-gray-600">
                  Sources
                </a>
              </p>
            </div>
            <div className="justify-end">
              <h6 className="uppercase font-semibold mb-4 flex justify-center md:justify-end">
                Contact
              </h6>

              <div className="flex items-center justify-center md:justify-end mb-4">
                <svg /* Svg for mail logo */
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fas"
                  data-icon="envelope"
                  className="w-4 mr-4"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <path
                    fill="currentColor"
                    d="M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z"
                  ></path>
                </svg>
                <div>
                  <a href="mailto:hello@divyupmanyu.in">Divy Upmanyu</a>
                </div>
              </div>
              <div className="flex items-center justify-center md:justify-end mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 64 64"
                  aria-labelledby="title"
                  aria-describedby="desc"
                  role="img"
                  className="w-4 mr-4"
                >
                  <title>Linkedin</title>
                  <desc>A color styled icon from Orion Icon Library.</desc>
                  <path
                    data-name="layer1"
                    fill="#0077b7"
                    d="M1.15 21.7h13V61h-13zm46.55-1.3c-5.7 0-9.1 2.1-12.7 6.7v-5.4H22V61h13.1V39.7c0-4.5 2.3-8.9 7.5-8.9s8.3 4.4 8.3 8.8V61H64V38.7c0-15.5-10.5-18.3-16.3-18.3zM7.7 2.6C3.4 2.6 0 5.7 0 9.5s3.4 6.9 7.7 6.9 7.7-3.1 7.7-6.9S12 2.6 7.7 2.6z"
                  ></path>
                </svg>
                <div>
                  <a
                    href="https://www.linkedin.com/in/adarsharma-in"
                    target="_blank"
                  >
                    Adarsh Sharma
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
