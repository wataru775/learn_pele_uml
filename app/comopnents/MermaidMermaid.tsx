'use client'

import mermaid from "mermaid";
import { useRef, useEffect } from "react";

type Props = {
    src: string;
    className: string;
}

export function MermaidMermaid({src, className}: Props) {
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (src) {
            mermaid.init({});
        }
    }, [ref.current, src])

    if(!src) {
        return <div className={className} key={src} />
    }

    return (
        <div className={className} ref={ref} key={src} suppressHydrationWarning>
            {src}
        </div>
    );
}
