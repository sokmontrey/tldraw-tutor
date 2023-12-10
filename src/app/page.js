"use client";

import "@tldraw/tldraw/tldraw.css";
import { Tldraw } from "@tldraw/tldraw";

export default function Home() {
  return (
    <div style={{ position: "fixed", inset: 0 }}>
      <Tldraw />
    </div>
  );
}
