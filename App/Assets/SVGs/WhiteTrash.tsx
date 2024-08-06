import React from 'react';
import { SvgProps, SvgXml } from 'react-native-svg';

const xml = `<svg width="24" height="26" viewBox="0 0 24 26" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M21 6.72884C17.67 6.38509 14.32 6.20801 10.98 6.20801C9 6.20801 7.02 6.31217 5.04 6.52051L3 6.72884" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M8.5 5.67676L8.72 4.31217C8.88 3.32259 9 2.58301 10.69 2.58301H13.31C15 2.58301 15.13 3.36426 15.28 4.32259L15.5 5.67676" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M18.8499 10.0205L18.1999 20.5101C18.0899 22.1455 17.9999 23.4163 15.2099 23.4163H8.7899C5.9999 23.4163 5.9099 22.1455 5.7999 20.5101L5.1499 10.0205" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M10.33 17.6875H13.66" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M9.5 13.5205H14.5" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`;

export default (props: SvgProps) => <SvgXml xml={xml} {...props} />;
