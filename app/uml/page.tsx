'use client';

import { useState } from "react";
import { MermaidMermaid } from "../comopnents/MermaidMermaid";
import { PeleMarkdown } from "../comopnents/PeleMarkdown";

export default function page(){
  const src=`flowchart TD
    A[Christmas] -->|Get money| B(Go shopping)
    B --> C{Let me think}
    C -->|One| D[Laptop]
    C -->|Two| E[iPhone]
    C -->|Three| F[fa:fa-car Car]`

  const [content, setContent] = useState(src);
  return (
    <main>
      <div>入力</div>
      <textarea rows={10} cols={100} value={content} onChange={(e) => setContent(e.target.value)}></textarea>
      <hr></hr>
      <h1>source</h1>
      <pre>{content}</pre>
      <hr></hr>
      <table width="100%">
        <thead>
          <tr>
            <th>Mermaid</th>
            <th>pele</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td width="50%"><MermaidMermaid src={content} className="mermaid" /></td>
            <td width="50%"><PeleMarkdown src={content} className="pele" /></td>
          </tr>
        </tbody>
      </table>
    </main>
  )
}
