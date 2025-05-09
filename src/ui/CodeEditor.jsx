// CodeEditor
import React, { useState } from "react";
import Editor from "./Editor";
import Preview from "./Preview";

const defaultCode = `
<div class="p-4 bg-blue-500 text-white rounded-lg">
  Editor de código con Tailwind!
</div>
`;

export default function CodeEditor() {
  const [code, setCode] = useState(defaultCode);

  return (
    <div className="grid min-h-screen grid-cols-2 gap-4 p-4 bg-gray-100">
      <Editor />
      <Preview />
    </div>
  );
}
