import React from 'react';
import { SvgProps, SvgXml } from 'react-native-svg';

const xml = `<svg width="30" height="31" viewBox="0 0 30 31" fill="none" xmlns="http://www.w3.org/2000/svg">
<g filter="url(#filter0_d_588_41186)">
<path d="M18 22.75H12C6.57 22.75 4.25 20.43 4.25 15V9C4.25 3.57 6.57 1.25 12 1.25H18C23.43 1.25 25.75 3.57 25.75 9V15C25.75 20.43 23.43 22.75 18 22.75ZM12 2.75C7.39 2.75 5.75 4.39 5.75 9V15C5.75 19.61 7.39 21.25 12 21.25H18C22.61 21.25 24.25 19.61 24.25 15V9C24.25 4.39 22.61 2.75 18 2.75H12Z" fill="#475569"/>
<path d="M11.5678 16.0201C11.3778 16.0201 11.1878 15.9501 11.0378 15.8001C10.7478 15.5101 10.7478 15.0301 11.0378 14.7401L17.5878 8.19016C17.8778 7.90016 18.3578 7.90016 18.6478 8.19016C18.9378 8.48016 18.9378 8.96015 18.6478 9.25015L12.0978 15.8001C11.9478 15.9501 11.7578 16.0201 11.5678 16.0201Z" fill="#475569"/>
<path d="M11.98 11.1084C10.89 11.1084 10 10.2184 10 9.12845C10 8.03845 10.89 7.14844 11.98 7.14844C13.07 7.14844 13.96 8.03845 13.96 9.12845C13.96 10.2184 13.07 11.1084 11.98 11.1084ZM11.98 8.65845C11.72 8.65845 11.5 8.86846 11.5 9.13846C11.5 9.40846 11.71 9.61844 11.98 9.61844C12.25 9.61844 12.46 9.40846 12.46 9.13846C12.46 8.86846 12.24 8.65845 11.98 8.65845Z" fill="#475569"/>
<path d="M18.519 16.8389C17.429 16.8389 16.5391 15.9489 16.5391 14.8589C16.5391 13.7689 17.429 12.8789 18.519 12.8789C19.609 12.8789 20.4991 13.7689 20.4991 14.8589C20.4991 15.9489 19.609 16.8389 18.519 16.8389ZM18.519 14.3889C18.259 14.3889 18.0391 14.5989 18.0391 14.8689C18.0391 15.1389 18.249 15.3489 18.519 15.3489C18.789 15.3489 18.9991 15.1389 18.9991 14.8689C18.9991 14.5989 18.789 14.3889 18.519 14.3889Z" fill="#475569"/>
</g>
<defs>
<filter id="filter0_d_588_41186" x="-1" y="0" width="32" height="32" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="4"/>
<feGaussianBlur stdDeviation="2"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_588_41186"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_588_41186" result="shape"/>
</filter>
</defs>
</svg>
`;

export default (props: SvgProps) => <SvgXml xml={xml} {...props} />;
