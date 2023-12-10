import { useCallback, useState } from "react";

import CodeMirror from "@uiw/react-codemirror";
import { python } from "@codemirror/lang-python";
import { tokyoNightStorm } from "@uiw/codemirror-theme-tokyo-night-storm";

const extensions = [python()];

export default function Editor() {
  const [value, setValue] = useState(`
print("hello world")
`);
  const onChange = useCallback((val) => {
    setValue(val);
  }, []);
  return (
    <CodeMirror
      basicSetup={{
        lineNumbers: true,
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
  );
}
