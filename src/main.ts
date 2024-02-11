import './css/style.css'

import squircleWorkletURL from 'css-houdini-squircle/public/squircle.min.js?url'

import { makeItEscape } from './utils/escaper.ts'
import { linkToScreen } from "./utils/navigation.ts";

const noButtonElement = document.getElementById('no-button') as HTMLButtonElement;
const yesButtonElements = [...document.querySelectorAll('.yes-button')] as HTMLButtonElement[];

linkToScreen(yesButtonElements, 'lets-go');
linkToScreen([noButtonElement], 'valentine-plus');
makeItEscape(noButtonElement);

declare namespace CSS {
    namespace paintWorklet {
        export function addModule(url: string): void;
    }
}

if ("paintWorklet" in CSS) {
    CSS.paintWorklet.addModule(squircleWorkletURL);
}