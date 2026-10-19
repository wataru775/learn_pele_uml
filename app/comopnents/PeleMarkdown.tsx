'use client';

import { useEffect, useState } from "react";
import { PeleError, render } from 'pele';

interface Props {
    src: string;
    className: string;
}

export function PeleMarkdown({ src, className }: Props) {
    const [svg, setSvg] = useState("");

    useEffect(() => {
        if (src) {
            try{
                const {svg} = render(src);
                setSvg(svg);
            } catch (e) {
                if (e instanceof PeleError) {
                    setSvg(`<pre>${e.message}</pre>`);
                } else {
                    setSvg(`<pre>${e}</pre>`);
                }
            }
        }
    }, [src]);
    return <div className={className} dangerouslySetInnerHTML={{ __html: svg }} />;
}