import React from 'react';
import { SvgProps, SvgXml } from 'react-native-svg';

const xml = `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10.6391 14.2124C10.5124 14.2124 10.3858 14.1658 10.2858 14.0658L9.27244 13.0524C9.07911 12.8591 9.07911 12.5392 9.27244 12.3458C9.46577 12.1525 9.78577 12.1525 9.97911 12.3458L10.6391 13.0058L12.3124 11.3325C12.5058 11.1392 12.8258 11.1392 13.0191 11.3325C13.2124 11.5258 13.2124 11.8458 13.0191 12.0391L10.9924 14.0658C10.8924 14.1658 10.7658 14.2124 10.6391 14.2124Z" fill="#64748B"/>
<path d="M8.1058 7.74732C8.0858 7.74732 8.07247 7.74732 8.05247 7.74732C8.01913 7.74065 7.97247 7.74065 7.93247 7.74732C5.99915 7.68732 4.53915 6.16732 4.53915 4.29398C4.53249 3.37398 4.89249 2.50732 5.54582 1.85398C6.19915 1.20065 7.0658 0.833984 7.99247 0.833984C9.89913 0.833984 11.4525 2.38732 11.4525 4.29398C11.4525 6.16732 9.99247 7.68065 8.1258 7.74732C8.11913 7.74732 8.11247 7.74732 8.1058 7.74732ZM7.99247 1.83398C7.33247 1.83398 6.71913 2.09398 6.25249 2.55398C5.79249 3.02065 5.53915 3.63398 5.53915 4.28732C5.53915 5.62065 6.57915 6.70065 7.9058 6.74065C7.9458 6.73398 8.03247 6.73398 8.11913 6.74065C9.43247 6.68065 10.4525 5.60732 10.4525 4.28732C10.4525 2.94065 9.3458 1.83398 7.99247 1.83398Z" fill="#64748B"/>
<path d="M7.9933 15.0404C6.63327 15.0404 5.34661 14.6871 4.37327 14.0338C3.44661 13.4138 2.93994 12.5671 2.93994 11.6538C2.93994 10.7404 3.45327 9.90044 4.37327 9.28711C6.36661 7.95378 9.60663 7.95378 11.6 9.28711C11.8266 9.44044 11.8933 9.75378 11.74 9.98044C11.5866 10.2138 11.2733 10.2738 11.0466 10.1204C9.38663 9.01378 6.58661 9.01378 4.92661 10.1204C4.28661 10.5471 3.93994 11.0871 3.93994 11.6538C3.93994 12.2204 4.28661 12.7738 4.92661 13.2004C5.73327 13.7404 6.81997 14.0338 7.98663 14.0338C8.25997 14.0338 8.48663 14.2604 8.48663 14.5338C8.48663 14.8071 8.26663 15.0404 7.9933 15.0404Z" fill="#64748B"/>
</svg>
`;
export default (props: SvgProps) => <SvgXml xml={xml} {...props} />;