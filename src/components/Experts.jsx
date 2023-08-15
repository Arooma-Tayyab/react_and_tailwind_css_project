import React, { Component } from "react";
import image from "../assets/image.webp";

class Experts extends Component {
  render() {
    return (
      <div className="md:grid md:grid-cols-2 max-w-[1240px] mx-auto p-2">
        <div className="col-span-1 md:w-[80%] text-center">
          <img src={image} alt="" className="inline" />
        </div>
        <div className="col-span-1 flex flex-col justify-center">
          <h1 className="text-[#00df9a] font-bold my-2">LEARN FROM EXPERTS</h1>
          <p className="my-2 text-justify">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Possimus
            quaerat laborum, mollitia sit praesentium atque debitis minima in
            animi porro adipisci error? Cum quae maiores ducimus ipsam. Dolore,
            suscipit vel.
          </p>
          <button className="btn bg-black p-3 rounded text-white w-[30%]">
            Get Started
          </button>
        </div>
      </div>
    );
  }
}

export default Experts;
