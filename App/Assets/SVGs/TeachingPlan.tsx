import React from 'react';
import { SvgProps, SvgXml } from 'react-native-svg';

const xml = `<svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.4998 22.0795C12.1998 22.0795 11.8998 22.0095 11.6498 21.8695C9.77978 20.8495 6.49976 19.7695 4.43976 19.4995L4.14978 19.4595C2.83978 19.2995 1.75977 18.0695 1.75977 16.7395V4.6595C1.75977 3.8695 2.06977 3.14953 2.63977 2.62953C3.20977 2.10953 3.94974 1.85952 4.72974 1.92952C6.91974 2.10952 10.2397 3.20953 12.1198 4.37953L12.3597 4.51955C12.4297 4.54955 12.5798 4.55955 12.6398 4.51955L12.7997 4.41951C13.4697 3.99951 14.3097 3.5895 15.2297 3.2195C15.4597 3.1295 15.7197 3.15951 15.9297 3.29951C16.1397 3.43951 16.2598 3.66951 16.2598 3.91951V6.5995L17.0898 6.04951C17.3398 5.87951 17.6697 5.87951 17.9197 6.04951L18.7498 6.5995V2.77956C18.7498 2.41956 19.0097 2.1095 19.3597 2.0395C19.6497 1.9895 19.9398 1.94952 20.1998 1.92952C20.2198 1.92952 20.2998 1.92952 20.3198 1.92952C21.0498 1.86952 21.7997 2.11954 22.3597 2.63954C22.9297 3.15954 23.2397 3.87951 23.2397 4.66951V16.7395C23.2397 18.0795 22.1598 19.2995 20.8398 19.4595L20.5098 19.4995C18.4498 19.7695 15.1498 20.8595 13.3198 21.8695C13.0998 22.0095 12.7998 22.0795 12.4998 22.0795ZM4.47974 3.4095C4.15974 3.4095 3.86977 3.51951 3.63977 3.72951C3.38977 3.95951 3.24976 4.2895 3.24976 4.6595V16.7395C3.24976 17.3295 3.75977 17.8995 4.32977 17.9795L4.62976 18.0195C6.87976 18.3195 10.3298 19.4495 12.3298 20.5495C12.4198 20.5895 12.5497 20.5995 12.5997 20.5795C14.6097 19.4695 18.0698 18.3296 20.3298 18.0296L20.6697 17.9895C21.2397 17.9195 21.7498 17.3395 21.7498 16.7495V4.67952C21.7498 4.30952 21.6097 3.98953 21.3597 3.74953C21.1097 3.51953 20.7598 3.40952 20.3998 3.42952C20.3698 3.42952 20.2798 3.42952 20.2598 3.42952V7.99953C20.2598 8.27953 20.1097 8.5295 19.8597 8.6595C19.6097 8.7895 19.3198 8.77952 19.0898 8.61952L17.5098 7.56953L15.9297 8.61952C15.6997 8.76952 15.4097 8.7895 15.1597 8.6595C14.9197 8.5295 14.7598 8.27953 14.7598 7.99953V5.06953C14.3298 5.27953 13.9397 5.48953 13.5997 5.68953L13.4398 5.7895C12.8898 6.1295 12.1098 6.12951 11.5798 5.79951L11.3398 5.64955C9.64978 4.58955 6.56974 3.5695 4.60974 3.4095C4.55974 3.4095 4.51974 3.4095 4.47974 3.4095Z" fill="#475569"/>
<path d="M12.5 21.2383C12.09 21.2383 11.75 20.8983 11.75 20.4883V5.48828C11.75 5.07828 12.09 4.73828 12.5 4.73828C12.91 4.73828 13.25 5.07828 13.25 5.48828V20.4883C13.25 20.9083 12.91 21.2383 12.5 21.2383Z" fill="#475569"/>
<path d="M19.5 8.74852C19.35 8.74852 19.21 8.70852 19.08 8.61852L17.5 7.56853L15.92 8.61852C15.69 8.76852 15.4 8.7885 15.15 8.6585C14.91 8.5285 14.75 8.27852 14.75 7.99852V3.91851C14.75 3.60851 14.94 3.33849 15.22 3.21849C16.6 2.66849 18.11 2.2385 19.38 2.0385C19.6 1.9985 19.82 2.06855 19.99 2.20855C20.16 2.34855 20.25 2.55855 20.25 2.77855V7.99852C20.25 8.27852 20.1 8.5285 19.85 8.6585C19.74 8.7185 19.62 8.74852 19.5 8.74852ZM17.5 5.91851C17.64 5.91851 17.79 5.95851 17.92 6.04851L18.75 6.5985V3.68853C17.95 3.86853 17.08 4.12853 16.25 4.43853V6.5985L17.08 6.04851C17.21 5.95851 17.36 5.91851 17.5 5.91851Z" fill="#475569"/>
</svg>

`;
export default (props: SvgProps) => <SvgXml xml={xml} {...props} />;
