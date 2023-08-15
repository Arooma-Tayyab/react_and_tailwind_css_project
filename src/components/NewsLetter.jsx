import React, { Component } from "react";

class NewsLetter extends Component {
  render() {
    return (
      <div className="bg-[#2699fb] p-4">
        <div className="max-w-[1240px] mx-auto md:flex justify-between py-[50px]">
          <div className="m-2">
            <h1 className="text-white font-bold text-[20px] md:text-[40px]">
              Want to learn latest IT skills?
            </h1>
            <span className="text-white font-bold">
              Signup to our NewsLetter
            </span>
          </div>

          <div className="m-2">
            <input
              type="text"
              className="rounded p-3 mr-2 text-slate-600"
              placeholder="Email"
            />
            <button className="btn bg-black p-3 rounded text-white">
              Get Started
            </button>
            <p className="text-white">
              We care about the protection of your data. Read our{" "}
              <div className="text-black">Privacy Policy</div>
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsLetter;
