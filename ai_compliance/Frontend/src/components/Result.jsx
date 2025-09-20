import React, { useState } from "react";

function Result(props) {
  const [result, setResult] = useState(null);
  return (
    <div>
      <div>
        <h3> excutive summary</h3>

        {/* <div className=" gird gap-2 grid-cols-2">
          <div className="h-14 w-24 bg-yellow-300"></div>

          <div className="h-14 w-24 bg-yellow-300"></div>
          <div className="h-14 w-24 bg-yellow-300"></div>
          <div className="h-14 w-24 bg-yellow-300"></div>
          <div className="h-14 w-24 bg-yellow-300"></div>
        </div> */}
      </div>
      <div className="min-h-96 grid grid-cols-2 gap-3 mt-20 mb-40   ">
        <section className="bg-zinc-900 rounded-2xl border-t-2">
          <div className="p-2 flex items-center border-b-2 h">
            <svg
              data-slot="icon"
              fill="none"
              stroke-width="1.5"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              className="size-6 ml-1   bg-green-900 text-white"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="m4.5 12.75 6 6 9-13.5"
              ></path>
            </svg>
            <h4 className="text-lg ml-2">Complaint Control (0)</h4>
          </div>
          {result ? (
            <div></div>
          ) : (
            <div className="flex justify-center mt-28 ">
              <h4 className="font-thin">
                No Complaint controls found in this configuration
              </h4>
            </div>
          )}
        </section>
        <section className="bg-zinc-900 rounded-2xl border-t-2">
          <div className="p-2 flex items-center border-b-2 h">
            <svg
              data-slot="icon"
              fill="none"
              stroke-width="1.5"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              className="size-7 ml-1    text-red-900"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M6 18 18 6M6 6l12 12"
              ></path>
            </svg>
            <h4 className="text-lg ml-2">Non-Complaint Control (2)</h4>
          </div>
          {!result ? (
            <div></div>
          ) : (
            <div className="flex justify-center mt-28 ">
              <h4 className="font-thin">
                No Complaint controls found in this configuration
              </h4>
            </div>
          )}
        </section>
      </div>
    </div>
  );
}

export default Result;
