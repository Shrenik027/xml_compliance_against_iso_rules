import React from "react";

function Main(props) {
  return (
    <main className=" w-full mb-64  h-fit mt-32 rounded-xl p-11 flex flex-col items-center">
      <img
        src="https://ciriai-multipage.up2client.com/static/media/blue-gardient1.2a72581e28a4e289d36a.png"
        alt=""
        srcset=""
        className="absolute -top-10 -left-48 -z-20"
      />
      <img
        src="https://ciriai-multipage.up2client.com/static/media/blue-gardient2.15a72b5211f09e3b6df3.png"
        alt=""
        srcset=""
        className="absolute top-9 -right-52 -z-10"
      />
      <div className="flex flex-col justify-center items-center">
        <h2 className="text-5xl font-bold">AI-Powered Compliance Checker</h2>
        <h3 className="text-4xl mt-9 bg-gradient-to-r from-[#5c33ff] via-[#19c9c6] to-[#03f9b3] text-transparent bg-clip-text">
          Analyze Palo Alto XML Configs Against ISO Controls
        </h3>
        <p className="text-3xl mt-9">
          Get Instant Compliance Results with Evidence & Insights
        </p>
      </div>

      <div className=" w-full bg-zinc-900 mx-96 border border-zinc-50 h-24 mt-20  rounded-xl  flex justify-between items-center  p-9">
        <input
          className="cursor-pointer rounded-md hover:opacity-90"
          type="file"
          name=""
          id=""
        />
        <button className="h-8 w-40 bg-gradient-to-r from-[#5c33ff] to-[#03f9b3] rounded-md">
          {" "}
          Upload and Analyze
        </button>
      </div>
    </main>
  );
}

export default Main;
