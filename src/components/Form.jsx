import React from "react";

export default function Form() {
  return (
    <div>
      <div className="leadMagnet flex justify-between content-center py-3 my-5 sm:px-2 ">
        <div className="leadMagnet-text md:mx--5 text-center">
          Wanna know how many people will be effected by Air Pollution?
        </div>

        <form className="flex justify-center leadMagnet-form">
          <div className="form-group mb-2 mx-2">
            <input
              type="text"
              className="form-control"
              placeholder="Your Name"
              name="user_name"
              id="full_name"
            ></input>
            <label htmlFor="full_name" className="sr-only">
              Full Name
            </label>
          </div>
          <div class="form-group mb-2 mx-2">
            <input
              type="tel"
              class="form-control"
              id="mobile_number"
              placeholder="Mobile Number"
              name="mobile_number"
              required
            />
            <label htmlFor="mobile_number" className="sr-only">
              Mobile Number
            </label>
          </div>
          <input
            type="hidden"
            value="LEAD_MAGNET"
            name="submission_source"
          ></input>
          <button
            type="submit"
            className="btn leadmagnet-submit-button mb-2 mx-2"
          >
            Book Assessment Now
          </button>
        </form>
      </div>
    </div>
  );
}
