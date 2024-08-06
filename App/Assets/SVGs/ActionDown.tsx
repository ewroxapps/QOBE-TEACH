import React from 'react';
import { SvgProps, SvgXml } from 'react-native-svg';

const xml = `<svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.446 5.45312H8.2927H4.55268C3.91268 5.45312 3.59268 6.22646 4.04601 6.6798L7.49936 10.1331C8.0527 10.6865 8.9527 10.6865 9.50603 10.1331L10.8194 8.8198L12.9594 6.6798C13.406 6.22646 13.086 5.45312 12.446 5.45312Z" fill="white"/>
</svg>
`;
export default (props: SvgProps) => <SvgXml xml={xml} {...props} />;
