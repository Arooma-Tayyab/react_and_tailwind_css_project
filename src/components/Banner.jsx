import React, { Component } from "react";
import Typed from "react-typed";

class Banner extends Component {
  render() {
    return (
      <div className="bg-[#2699fb] w-full py-[100px]">
        <div className="max-w-[1240px] my-[100px] mx-auto text-center">
          <div className="text-xl md:text-3xl font-bold mt-4 md:p-[24px]">
            Learn with Us
          </div>
          <h2 className="text-white text-5xl md:text-[80px] font-bold mt-4 md:p-[24px]">
            Grow with us
          </h2>
          <div className="text-white text-[20px] md:text-[50px] mt-4 md:p-[24px]">
            Learn
            <Typed
              className="pl-3"
              strings={[
                "Web Development",
                "Digital Marketing",
                "Ethical Hacking",
              ]}
              typeSpeed={100}
              backSpeed={80}
              loop
            />
          </div>
          <button className="btn bg-black p-3 rounded text-white">
            Get Started
          </button>
        </div>
      </div>
    );
  }
}

export default Banner;
