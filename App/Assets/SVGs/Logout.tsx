import React from 'react';
import { SvgProps, SvgXml } from 'react-native-svg';

const xml = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8.90039 7.56023C9.21039 3.96023 11.0604 2.49023 15.1104 2.49023H15.2404C19.7104 2.49023 21.5004 4.28023 21.5004 8.75023V15.2702C21.5004 19.7402 19.7104 21.5302 15.2404 21.5302H15.1104C11.0904 21.5302 9.24039 20.0802 8.91039 16.5402" stroke="#EF4444" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M15.0001 12H3.62012" stroke="#EF4444" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M5.85 8.6499L2.5 11.9999L5.85 15.3499" stroke="#EF4444" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

`;
export default (props: SvgProps) => <SvgXml xml={xml} {...props} />;
