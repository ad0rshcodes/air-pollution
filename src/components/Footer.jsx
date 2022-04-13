import React from "react";
import "../App.css";

export default function Footer() {
  return (
    <>
    
    <footer class="text-center lg:text-left text-gray-600">
      <hr></hr>
      <div class="py-3.5 text-left md:text-left ">
        <div class="grid grid-1 md:grid-cols-2 lg:grid-cols-2 gap-50">
          <div class="">
            <h6 class="uppercase font-semibold mb-4 flex justify-center md:justify-start">
              Useful links
            </h6>
            <p class="mb-4">
              <a href="/" class="text-gray-600">
                Home
              </a>
            </p>
            <p class="mb-4">
              <a href="/preventionpage" class="text-gray-600">
                Preventions
              </a>
            </p>
            <p class="mb-4">
              <a href="/sources" class="text-gray-600">
                Sources
              </a>
            </p>
            <p class="mb-4">
              <a href="#!" class="text-gray-600">
                Team
              </a>
            </p>
          </div>
          <div class="justify-end">
            <h6 class="uppercase font-semibold mb-4 flex justify-center md:justify-end">
              Contact
            </h6>

            <p class="flex items-center justify-center md:justify-end mb-4">
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="fas"
                data-icon="envelope"
                class="w-4 mr-4"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <path
                  fill="currentColor"
                  d="M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z"
                ></path>
              </svg>
              info@example.com
            </p>
          </div>
        </div>
      </div>
    </footer>
    </>
  );
}
