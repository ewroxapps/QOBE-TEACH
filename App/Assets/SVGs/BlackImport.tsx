import React from 'react';
import { SvgProps, SvgXml } from 'react-native-svg';

const xml = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M11.4986 9.12616C11.3403 9.12616 11.1819 9.06783 11.0569 8.94283C10.8153 8.70116 10.8153 8.30117 11.0569 8.0595L17.8903 1.22617C18.1319 0.984505 18.5319 0.984505 18.7736 1.22617C19.0153 1.46784 19.0153 1.86784 18.7736 2.10951L11.9403 8.94283C11.8236 9.0595 11.6653 9.12616 11.4986 9.12616Z" fill="#475569"/>
<path d="M14.8583 9.79357H10.8333C10.4917 9.79357 10.2083 9.51024 10.2083 9.16857V5.14355C10.2083 4.80189 10.4917 4.51855 10.8333 4.51855C11.175 4.51855 11.4583 4.80189 11.4583 5.14355V8.54357H14.8583C15.2 8.54357 15.4833 8.8269 15.4833 9.16857C15.4833 9.51024 15.2 9.79357 14.8583 9.79357Z" fill="#475569"/>
<path d="M12.5 18.9587H7.5C2.975 18.9587 1.04167 17.0253 1.04167 12.5003V7.50033C1.04167 2.97533 2.975 1.04199 7.5 1.04199H9.16667C9.50833 1.04199 9.79167 1.32533 9.79167 1.66699C9.79167 2.00866 9.50833 2.29199 9.16667 2.29199H7.5C3.65833 2.29199 2.29167 3.65866 2.29167 7.50033V12.5003C2.29167 16.342 3.65833 17.7087 7.5 17.7087H12.5C16.3417 17.7087 17.7083 16.342 17.7083 12.5003V10.8337C17.7083 10.492 17.9917 10.2087 18.3333 10.2087C18.675 10.2087 18.9583 10.492 18.9583 10.8337V12.5003C18.9583 17.0253 17.025 18.9587 12.5 18.9587Z" fill="#475569"/>
</svg>
`;
export default (props: SvgProps) => <SvgXml xml={xml} {...props} />;
