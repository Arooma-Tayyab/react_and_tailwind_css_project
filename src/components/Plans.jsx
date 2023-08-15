import React, { Component } from "react";
import profile from "../assets/profile.png";

class Plans extends Component {
  render() {
    return (
      <div className="py-[100px] px-2">
        <div className="max-w-[1240px] mx-auto md:grid grid-cols-3 gap-6">
          <div className="shadow-xl h-[550px] bg-white hover:scale-105 duration-500 my-4">
            <div className="grid place-items-center my-2">
              <div className="row-span-1 my-2 h-auto">
                <img src={profile} alt="" className="w-full" />
              </div>
              <div className="row-span-1 my-2 h-auto">
                <h1 className="text-3xl font-bold">Web Development</h1>
              </div>
              <div className="row-span-1 my-4 h-auto">
                <h1 className="text-3xl font-bold">$149</h1>
              </div>
              <div className="row-span-1 my-2 h-auto w-[70%] text-center">
                <p className="my-2">Lorem ipsum dolor sit amet</p>
                <hr />
                <p className="my-2">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </p>
                <hr />
                <p className="my-2">
                  Lorem ipsum dolor sit amet consectetur adipisicing.
                </p>
                <hr />
              </div>
              <button className="btn bg-[#00df9a] p-3 rounded text-black w-[60%] mt-3">
                Start Trial
              </button>
            </div>
          </div>
          <div className="shadow-xl h-[550px] bg-white hover:scale-105 duration-500 my-4">
            <div className="grid place-items-center my-2">
              <div className="row-span-1 my-2 h-auto">
                <img src={profile} alt="" className="w-full" />
              </div>
              <div className="row-span-1 my-2 h-auto">
                <h1 className="text-3xl font-bold">Digital Marketing</h1>
              </div>
              <div className="row-span-1 my-4 h-auto">
                <h1 className="text-3xl font-bold">$149</h1>
              </div>
              <div className="row-span-1 my-2 h-auto w-[70%] text-center">
                <p className="my-2">Lorem ipsum dolor sit amet</p>
                <hr />
                <p className="my-2">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </p>
                <hr />
                <p className="my-2">
                  Lorem ipsum dolor sit amet consectetur adipisicing.
                </p>
                <hr />
              </div>
              <button className="btn bg-[#00df9a] p-3 rounded text-black w-[60%] mt-3">
                Start Trial
              </button>
            </div>
          </div>
          <div className="shadow-xl h-[550px] bg-white hover:scale-105 duration-500 my-4">
            <div className="grid place-items-center my-2">
              <div className="row-span-1 my-2 h-auto">
                <img src={profile} alt="" className="w-full" />
              </div>
              <div className="row-span-1 my-2 h-auto">
                <h1 className="text-3xl font-bold">App Development</h1>
              </div>
              <div className="row-span-1 my-4 h-auto">
                <h1 className="text-3xl font-bold">$149</h1>
              </div>
              <div className="row-span-1 my-2 h-auto w-[70%] text-center">
                <p className="my-2">Lorem ipsum dolor sit amet</p>
                <hr />
                <p className="my-2">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </p>
                <hr />
                <p className="my-2">
                  Lorem ipsum dolor sit amet consectetur adipisicing.
                </p>
                <hr />
              </div>
              <button className="btn bg-[#00df9a] p-3 rounded text-black w-[60%] mt-3">
                Start Trial
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Plans;
