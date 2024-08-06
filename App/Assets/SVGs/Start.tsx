import React from 'react';
import { SvgProps, SvgXml } from 'react-native-svg';

const xml = `<svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.3333 17.9587H1.49996C0.699959 17.9587 0.041626 17.3003 0.041626 16.5003V5.66699C0.041626 1.98366 1.98329 0.0419922 5.66663 0.0419922H12.3333C16.0166 0.0419922 17.9583 1.98366 17.9583 5.66699V12.3337C17.9583 16.017 16.0166 17.9587 12.3333 17.9587ZM5.66663 1.29199C2.68329 1.29199 1.29163 2.68366 1.29163 5.66699V16.5003C1.29163 16.617 1.38329 16.7087 1.49996 16.7087H12.3333C15.3166 16.7087 16.7083 15.317 16.7083 12.3337V5.66699C16.7083 2.68366 15.3166 1.29199 12.3333 1.29199H5.66663Z" fill="white"/>
</svg>

`;
export default (props: SvgProps) => <SvgXml xml={xml} {...props} />;
