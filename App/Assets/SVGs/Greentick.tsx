import React from 'react';
import { SvgProps, SvgXml } from 'react-native-svg';

const xml = `<svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_686_46934)" filter="url(#filter0_dd_686_46934)">
<path d="M13 17.0625C8.5525 17.0625 4.9375 13.4475 4.9375 9C4.9375 4.5525 8.5525 0.9375 13 0.9375C17.4475 0.9375 21.0625 4.5525 21.0625 9C21.0625 13.4475 17.4475 17.0625 13 17.0625ZM13 2.0625C9.175 2.0625 6.0625 5.175 6.0625 9C6.0625 12.825 9.175 15.9375 13 15.9375C16.825 15.9375 19.9375 12.825 19.9375 9C19.9375 5.175 16.825 2.0625 13 2.0625Z" fill="#16A34A"/>
<path d="M11.9346 11.6862C11.7846 11.6862 11.6421 11.6262 11.5371 11.5212L9.41459 9.3987C9.19709 9.1812 9.19709 8.8212 9.41459 8.6037C9.63209 8.3862 9.99209 8.3862 10.2096 8.6037L11.9346 10.3287L15.7896 6.47367C16.0071 6.25617 16.3671 6.25617 16.5846 6.47367C16.8021 6.69117 16.8021 7.05117 16.5846 7.26867L12.3321 11.5212C12.2271 11.6262 12.0846 11.6862 11.9346 11.6862Z" fill="#16A34A"/>
</g>
<defs>
<filter id="filter0_dd_686_46934" x="0" y="0" width="26" height="26" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="4"/>
<feGaussianBlur stdDeviation="2"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_686_46934"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="4"/>
<feGaussianBlur stdDeviation="2"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
<feBlend mode="normal" in2="effect1_dropShadow_686_46934" result="effect2_dropShadow_686_46934"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow_686_46934" result="shape"/>
</filter>
<clipPath id="clip0_686_46934">
<rect width="18" height="18" fill="white" transform="translate(4)"/>
</clipPath>
</defs>
</svg>
`;
export default (props: SvgProps) => <SvgXml xml={xml} {...props} />;