import React from 'react';
import { SvgProps, SvgXml } from 'react-native-svg';

const xml = `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M4.05409 10.5469L8.20742 10.5469L11.9474 10.5469C12.5874 10.5469 12.9074 9.77354 12.4541 9.3202L9.00076 5.86687C8.44742 5.31353 7.54743 5.31353 6.99409 5.86687L5.68076 7.1802L3.54076 9.3202C3.09409 9.77354 3.41409 10.5469 4.05409 10.5469Z" fill="#475569"/>
</svg>
`;

export default (props: SvgProps) => <SvgXml xml={xml} {...props} />;
