import { useEffect, useState } from "react";

export default function Editor({ code, setCode }) {
  return (
    <textarea
      value={code}
      onChange={(e) => setCode(e.target.value)}
      className="z-20 flex-1 w-full max-w-4xl p-6 m-auto text-lg text-black bg-white rounded-lg shadow-xl resize-none h-1/2 bg-opacity-80 md:text-xl"
    />
  );
}

