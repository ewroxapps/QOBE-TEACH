import React from 'react';
import { SvgProps, SvgXml } from 'react-native-svg';

const xml = `<svg width="28" height="30" viewBox="0 0 28 30" fill="none" xmlns="http://www.w3.org/2000/svg">
<g filter="url(#filter0_d_619_46479)">
<path opacity="0.4" d="M18.1898 2H9.81976C6.17976 2 4.00977 4.17 4.00977 7.81V16.18C4.00977 19.82 6.17976 21.99 9.81976 21.99H18.1898C21.8298 21.99 23.9998 19.82 23.9998 16.18V7.81C23.9998 4.17 21.8298 2 18.1898 2Z" fill="white"/>
<path d="M13.4991 8.08902V17.249C13.4991 17.609 13.1391 17.849 12.8091 17.709C11.5991 17.189 10.0191 16.709 8.91913 16.569L8.72913 16.549C8.11913 16.469 7.61914 15.899 7.61914 15.279V7.57901C7.61914 6.81901 8.23915 6.24902 8.99915 6.30902C10.2492 6.40902 12.0992 7.00904 13.2592 7.66904C13.4092 7.73904 13.4991 7.90902 13.4991 8.08902Z" fill="white"/>
<path d="M20.38 7.70081V15.2708C20.38 15.8908 19.88 16.4608 19.27 16.5408L19.06 16.5608C17.97 16.7108 16.4 17.1808 15.19 17.6908C14.86 17.8308 14.5 17.5908 14.5 17.2308V8.08078C14.5 7.90078 14.59 7.73081 14.75 7.64081C15.91 6.99081 17.72 6.41078 18.95 6.30078H18.99C19.76 6.31078 20.38 6.93081 20.38 7.70081Z" fill="white"/>
</g>
<defs>
<filter id="filter0_d_619_46479" x="-2" y="0" width="32" height="32" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="4"/>
<feGaussianBlur stdDeviation="2"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_619_46479"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_619_46479" result="shape"/>
</filter>
</defs>
</svg>

`;
export default (props: SvgProps) => <SvgXml xml={xml} {...props} />;
