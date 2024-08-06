import React from 'react';
import { SvgProps, SvgXml } from 'react-native-svg';

const xml = `<svg width="22" height="19" viewBox="0 0 22 19" fill="none" xmlns="http://www.w3.org/2000/svg">
<g filter="url(#filter0_d_588_44151)">
<path d="M5.72126 10.0332L10.0679 5.68655C10.5813 5.17322 11.4213 5.17322 11.9346 5.68655L16.2812 10.0332" stroke="white" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<defs>
<filter id="filter0_d_588_44151" x="-1" y="0" width="24" height="24" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="4"/>
<feGaussianBlur stdDeviation="2"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_588_44151"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_588_44151" result="shape"/>
</filter>
</defs>
</svg>
`;
export default (props: SvgProps) => <SvgXml xml={xml} {...props} />;
