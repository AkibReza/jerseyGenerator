import React from "react";

const SecondaryColor = ({ setSecondaryColor }) => {
  return (
    <div>
      <p className="text-xl my-8 text-center font-bold">
        Choose Secondary Color:
      </p>
      <ul className="grid grid-cols-2 md:grid-cols-6 gap-y-4 text-center">
        <li>
          <button
            onClick={() => setSecondaryColor("#FF0000")}
            class="w-10 h-10 bg-[#FF0000] border-2 border-black rounded-md"
          ></button>
        </li>
        <li>
          <button
            onClick={() => setSecondaryColor("#00FF00")}
            class="w-10 h-10 bg-[#00FF00] border-2 border-black rounded-md"
          ></button>
        </li>
        <li>
          <button
            onClick={() => setSecondaryColor("#0000FF")}
            class="w-10 h-10 bg-[#0000FF] border-2 border-black rounded-md"
          ></button>
        </li>
        <li>
          <button
            onClick={() => setSecondaryColor("#990000")}
            class="w-10 h-10 bg-[#990000] border-2 border-black rounded-md"
          ></button>
        </li>
        <li>
          <button
            onClick={() => setSecondaryColor("#009900")}
            class="w-10 h-10 bg-[#009900] border-2 border-black rounded-md"
          ></button>
        </li>
        <li>
          <button
            onClick={() => setSecondaryColor("#000099")}
            class="w-10 h-10 bg-[#000099] border-2 border-black rounded-md"
          ></button>
        </li>
        <li>
          <button
            onClick={() => setSecondaryColor("#CCCCCC")}
            class="w-10 h-10 bg-[#CCCCCC] border-2 border-black rounded-md"
          ></button>
        </li>
        <li>
          <button
            onClick={() => setSecondaryColor("#111111")}
            class="w-10 h-10 bg-[#111111] border-2 border-black rounded-md"
          ></button>
        </li>
        <li>
          <button
            onClick={() => setSecondaryColor("#FFC0CB")}
            class="w-10 h-10 bg-[#FFC0CB] border-2 border-black rounded-md"
          ></button>
        </li>
        <li>
          <button
            onClick={() => setSecondaryColor("#800080")}
            class="w-10 h-10 bg-[#800080] border-2 border-black rounded-md"
          ></button>
        </li>
        <li>
          <button
            onClick={() => setSecondaryColor("#87CEEB")}
            class="w-10 h-10 bg-[#87CEEB] border-2 border-black rounded-md"
          ></button>
        </li>
        <li>
          <button
            onClick={() => setSecondaryColor("#FFFF00")}
            class="w-10 h-10 bg-[#FFFF00] border-2 border-black rounded-md"
          ></button>
        </li>
      </ul>
    </div>
  );
};

export default SecondaryColor;
