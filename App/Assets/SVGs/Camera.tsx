import React from 'react';
import { SvgProps, SvgXml } from 'react-native-svg';

const xml = `<svg width="30" height="31" viewBox="0 0 30 31" fill="none" xmlns="http://www.w3.org/2000/svg">
<g filter="url(#filter0_ddd_588_42687)">
<path d="M9.76017 22H20.2401C23.0001 22 24.1001 20.31 24.2301 18.25L24.7501 9.99C24.8901 7.83 23.1701 6 21.0001 6C20.3901 6 19.8301 5.65 19.5501 5.11L18.8301 3.66C18.3701 2.75 17.1701 2 16.1501 2H13.8601C12.8302 2 11.6302 2.75 11.1702 3.66L10.4502 5.11C10.1702 5.65 9.61017 6 9.00017 6C6.83017 6 5.11017 7.83 5.25017 9.99L5.77017 18.25C5.89017 20.31 7.00017 22 9.76017 22Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M13.5 8H16.5" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M15 18C16.79 18 18.25 16.54 18.25 14.75C18.25 12.96 16.79 11.5 15 11.5C13.21 11.5 11.75 12.96 11.75 14.75C11.75 16.54 13.21 18 15 18Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<defs>
<filter id="filter0_ddd_588_42687" x="-1" y="0" width="32" height="32" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="4"/>
<feGaussianBlur stdDeviation="2"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_588_42687"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="4"/>
<feGaussianBlur stdDeviation="2"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
<feBlend mode="normal" in2="effect1_dropShadow_588_42687" result="effect2_dropShadow_588_42687"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="4"/>
<feGaussianBlur stdDeviation="2"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
<feBlend mode="normal" in2="effect2_dropShadow_588_42687" result="effect3_dropShadow_588_42687"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect3_dropShadow_588_42687" result="shape"/>
</filter>
</defs>
</svg>
`;
export default (props: SvgProps) => <SvgXml xml={xml} {...props} />;
