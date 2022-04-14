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
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-telegram" viewBox="0 0 16 16">
                      <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.287 5.906c-.778.324-2.334.994-4.666 2.01-.378.15-.577.298-.595.442-.03.243.275.339.69.47l.175.055c.408.133.958.288 1.243.294.26.006.549-.1.868-.32 2.179-1.471 3.304-2.214 3.374-2.23.05-.012.12-.026.166.016.047.041.042.12.037.141-.03.129-1.227 1.241-1.846 1.817-.193.18-.33.307-.358.336a8.154 8.154 0 0 1-.188.186c-.38.366-.664.64.015 1.088.327.216.589.393.85.571.284.194.568.387.936.629.093.06.183.125.27.187.331.236.63.448.997.414.214-.02.435-.22.547-.82.265-1.417.786-4.486.906-5.751a1.426 1.426 0 0 0-.013-.315.337.337 0 0 0-.114-.217.526.526 0 0 0-.31-.093c-.3.005-.763.166-2.984 1.09z"/>
                  </svg>
                  
                    
                <div >
                  <a className="f-t" href="https://t.me/savyy7" target="_blank">Divy Upmanyu</a>
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
