"use client";

import Head from "next/head";
import "@tldraw/tldraw/tldraw.css";
import { Tldraw } from "@tldraw/tldraw";
import uiOverrides from "../tools/ui-overrides.ts";
import { EditorShapeTool } from "../tools/TextEditor/EditorShapeTool.tsx";
import { EditorShapeUtil } from "../tools/TextEditor/EditorShapeUtil.tsx";
// import TextEditor from "../tools/TextEditor/TextEditor";

export default function Home() {
  return (
    <>
      <div style={{ position: "fixed", inset: 0 }}>
        <Tldraw
          overrides={uiOverrides}
          shapeUtils={[EditorShapeUtil]}
          tools={[EditorShapeTool]}
        />
      </div>
    </>
  );
}
