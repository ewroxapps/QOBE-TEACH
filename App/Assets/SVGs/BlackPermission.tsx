import React from 'react';
import { SvgProps, SvgXml } from 'react-native-svg';

const xml = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12 12.75C8.83 12.75 6.25 10.17 6.25 7C6.25 3.83 8.83 1.25 12 1.25C15.17 1.25 17.75 3.83 17.75 7C17.75 10.17 15.17 12.75 12 12.75ZM12 2.75C9.66 2.75 7.75 4.66 7.75 7C7.75 9.34 9.66 11.25 12 11.25C14.34 11.25 16.25 9.34 16.25 7C16.25 4.66 14.34 2.75 12 2.75Z" fill="#94A3B8"/>
<path d="M3.41016 22.75C3.00016 22.75 2.66016 22.41 2.66016 22C2.66016 17.73 6.85015 14.25 12.0002 14.25C13.0102 14.25 14.0001 14.38 14.9601 14.65C15.3601 14.76 15.5902 15.17 15.4802 15.57C15.3702 15.97 14.9602 16.2 14.5602 16.09C13.7402 15.86 12.8802 15.75 12.0002 15.75C7.68015 15.75 4.16016 18.55 4.16016 22C4.16016 22.41 3.82016 22.75 3.41016 22.75Z" fill="#94A3B8"/>
<path d="M18 22.75C16.34 22.75 14.78 21.87 13.94 20.44C13.49 19.72 13.25 18.87 13.25 18C13.25 16.54 13.9 15.19 15.03 14.29C15.87 13.62 16.93 13.25 18 13.25C20.62 13.25 22.75 15.38 22.75 18C22.75 18.87 22.51 19.72 22.06 20.45C21.81 20.87 21.49 21.25 21.11 21.57C20.28 22.33 19.17 22.75 18 22.75ZM18 14.75C17.26 14.75 16.56 15 15.97 15.47C15.2 16.08 14.75 17.01 14.75 18C14.75 18.59 14.91 19.17 15.22 19.67C15.8 20.65 16.87 21.25 18 21.25C18.79 21.25 19.55 20.96 20.13 20.44C20.39 20.22 20.61 19.96 20.77 19.68C21.09 19.17 21.25 18.59 21.25 18C21.25 16.21 19.79 14.75 18 14.75Z" fill="#94A3B8"/>
<path d="M17.4289 19.7415C17.2389 19.7415 17.0489 19.6715 16.8989 19.5215L15.9089 18.5316C15.6189 18.2416 15.6189 17.7615 15.9089 17.4715C16.1989 17.1815 16.6789 17.1815 16.9689 17.4715L17.4489 17.9515L19.0489 16.4715C19.3489 16.1915 19.8289 16.2115 20.1089 16.5115C20.3889 16.8115 20.3689 17.2915 20.0689 17.5715L17.9389 19.5415C17.7889 19.6715 17.6089 19.7415 17.4289 19.7415Z" fill="#94A3B8"/>
</svg>
`;
export default (props: SvgProps) => <SvgXml xml={xml} {...props} />;
