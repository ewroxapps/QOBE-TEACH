import React from 'react';
import { SvgProps, SvgXml } from 'react-native-svg';

const xml = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.4" d="M17 18.4297H13L8.54999 21.3897C7.88999 21.8297 7 21.3597 7 20.5597V18.4297C4 18.4297 2 16.4297 2 13.4297V7.42969C2 4.42969 4 2.42969 7 2.42969H17C20 2.42969 22 4.42969 22 7.42969V13.4297C22 16.4297 20 18.4297 17 18.4297Z" fill="white"/>
<path d="M11.9998 12.1094C11.5898 12.1094 11.2498 11.7694 11.2498 11.3594V11.1494C11.2498 9.98941 12.0998 9.4194 12.4198 9.1994C12.7898 8.9494 12.9098 8.77941 12.9098 8.51941C12.9098 8.01941 12.4998 7.60938 11.9998 7.60938C11.4998 7.60938 11.0898 8.01941 11.0898 8.51941C11.0898 8.92941 10.7498 9.26941 10.3398 9.26941C9.92984 9.26941 9.58984 8.92941 9.58984 8.51941C9.58984 7.18941 10.6698 6.10938 11.9998 6.10938C13.3298 6.10938 14.4098 7.18941 14.4098 8.51941C14.4098 9.65941 13.5698 10.2294 13.2598 10.4394C12.8698 10.6994 12.7498 10.8694 12.7498 11.1494V11.3594C12.7498 11.7794 12.4098 12.1094 11.9998 12.1094Z" fill="white"/>
<path d="M12 14.6016C11.58 14.6016 11.25 14.2616 11.25 13.8516C11.25 13.4416 11.59 13.1016 12 13.1016C12.41 13.1016 12.75 13.4416 12.75 13.8516C12.75 14.2616 12.42 14.6016 12 14.6016Z" fill="white"/>
</svg>

`;
export default (props: SvgProps) => <SvgXml xml={xml} {...props} />;
