import { useCallback, useEffect, useState } from "react";

import CodeMirror from "@uiw/react-codemirror";
import { python } from "@codemirror/lang-python";
import { javascript } from "@codemirror/lang-javascript";
import { tokyoNightStorm } from "@uiw/codemirror-theme-tokyo-night-storm";
import extensionToName from "../../utils/ext-to-name";
import { vim } from "@replit/codemirror-vim";

const extensions = [python(), javascript(), vim()];

export default function Editor() {
  const [value, setValue] = useState(``);
  const onChange = useCallback((val) => {
    setValue(val);
  }, []);
  const [file_name, setFileName] = useState("untitled.py");
  const [languae_name, setLanguageName] = useState("python");
  useEffect(() => {
    const file_extension = file_name.split(".").pop();
    const language_name = extensionToName(file_extension);
    setLanguageName(language_name);
  }, [file_name]);
  return (
    <div className="flex flex-col justify-start">
      <div className="flex flex-row items-center justify-start">
        <i className={`devicon-${languae_name}-plain colored text-xl mr-2`}>
        </i>

        <input
          className="p-1 mb-2 bg-[#ffffff00] font-mono text-lg hover:text-xl focus:text-xl transition-all duration-200 opacity-50 hover:opacity-100 focus:opacity-100"
          value={file_name}
          onChange={(e) => setFileName(e.target.value)}
        />
      </div>
      <CodeMirror
        basicSetup={{
          lineNumbers: false,
        }}
        value={value}
        height="fit-content"
        width="fit-content"
        minWidth="500px"
        style={{ float: "left" }}
        theme={tokyoNightStorm}
        extensions={extensions}
        onChange={onChange}
      />
    </div>
  );
}
