import React from 'react';
import { SvgProps, SvgXml } from 'react-native-svg';

const xml = `<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.4" d="M27.3337 9.33329V20H8.46699C6.37366 20 4.66699 21.7066 4.66699 23.8V9.33329C4.66699 3.99996 6.00033 2.66663 11.3337 2.66663H20.667C26.0003 2.66663 27.3337 3.99996 27.3337 9.33329Z" fill="#94A3B8"/>
<path d="M27.3337 20V24.6667C27.3337 27.24 25.2403 29.3333 22.667 29.3333H9.33366C6.76033 29.3333 4.66699 27.24 4.66699 24.6667V23.8C4.66699 21.7067 6.37366 20 8.46699 20H27.3337Z" fill="#94A3B8"/>
<path d="M21.3337 10.3334H10.667C10.1203 10.3334 9.66699 9.88004 9.66699 9.33337C9.66699 8.78671 10.1203 8.33337 10.667 8.33337H21.3337C21.8803 8.33337 22.3337 8.78671 22.3337 9.33337C22.3337 9.88004 21.8803 10.3334 21.3337 10.3334Z" fill="#94A3B8"/>
<path d="M17.3337 15H10.667C10.1203 15 9.66699 14.5467 9.66699 14C9.66699 13.4533 10.1203 13 10.667 13H17.3337C17.8803 13 18.3337 13.4533 18.3337 14C18.3337 14.5467 17.8803 15 17.3337 15Z" fill="#94A3B8"/>
</svg>
`;
export default (props: SvgProps) => <SvgXml xml={xml} {...props} />;
