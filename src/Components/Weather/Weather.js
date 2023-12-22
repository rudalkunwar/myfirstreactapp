import React, { useState } from "react";
import { Component } from "react";
import Clear from "../../assets/images/clear.png";
import Clouds from "../../assets/images/clouds.png";
import Drizzle from "../../assets/images/drizzle.png";
import Humidity from "../../assets/images/humidity.png";
import Mist from "../../assets/images/mist.png";
import Rain from "../../assets/images/rain.png";
import Wind from "../../assets/images/wind.png";
const Weather = (props) => {
  const stylee = {
    backgroundColor: "#0093E9",
    backgroundImage: "linear-gradient(160deg, #0093E9 0%, #80D0C7 100%)",
  };
  const images = {
    Clear,
    Clouds,
    Drizzle,
    Humidity,
    Mist,
    Rain,
    Wind,
  };
  const selectedImage = images[props.weth];
  return (
    <div className="h-screen font-mono bg-green-100 flex justify-center items-center">
      <div className="w-96 rounded" style={stylee}>
        <div>
          <form onSubmit={props.SearchCity}>
            <div className="w-full h-14 flex justify-around">
              <input
                className="py-2 px-6 mt-2 rounded outline-green-600 outline-2px border-none"
                type="text"
                name="city"
                placeholder="Search your city here"
                required
              ></input>

              <button type="submit">
                <span className="mr-3 p-1 px-5 flex justify-center items-center">
                  <i className="bg-cyan-400 p-2 text-3xl ri-search-line pr-3 hover:bg-blue-300 hover:text-black rounded text-white"></i>
                </span>
              </button>
            </div>
          </form>
        </div>
        <div className="w-full pt-5 bg-contain flex justify-center items-center">
          <img className="w-40 text-center" src={selectedImage} />
        </div>
        <div className="text-8xl text-center">{Math.round(props.temp)}°C</div>
        <div className="w-full text-center">
          <p className="text-3xl">{props.name}</p>
        </div>

        <div className="mt-8 mb-5 text-xl text-center flex justify-around items-center">
          <div className="flex items-center">
            <img
              className="pl-1 pr-2 h-12 w-12 text-center"
              src={images.Humidity}
            />
            <div>
              <p className="p-2">{props.humi}%</p>
              <p>Humidity</p>
            </div>
          </div>
          <div className="flex items-center">
            <img className="pr-2 h-12 w-12 text-center" src={images.Wind} />
            <div>
              <p className="p-2">{props.wind}km/s</p>
              <p>Wind Speed</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Weather;
