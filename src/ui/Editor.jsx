import { useEffect, useState } from "react";

export default function Editor({ code, setCode }) {
  return (
    <textarea
      value={code}
      onChange={(e) => setCode(e.target.value)}
      className="w-full h-64 p-4 font-mono text-sm bg-white border rounded shadow"
    />
  );
}

