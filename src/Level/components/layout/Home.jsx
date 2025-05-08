import React from "react";
import Background from "../../assets/img/Background.webp";

const Home = () => {
  return (
    <div className="relative w-full min-h-screen">
      <div
        className="absolute inset-0 w-full min-h-screen bg-fixed bg-center bg-cover"
        style={{ backgroundImage: `url(${Background})` }}
      ></div>

      <div className="relative grid items-start h-auto min-h-screen grid-cols-2 gap-2 p-4 md:grid-cols-3">
        <h1 className="">AAAAA</h1>
      </div>
    </div>
  );
};

export default Home;
