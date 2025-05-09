import { useEffect, useState } from "react";

export default function Preview({ code }) {
  return (
    <div
      className="w-full h-auto p-4 bg-white border rounded shadow"
      dangerouslySetInnerHTML={{ __html: code }}
    />
  );
}
