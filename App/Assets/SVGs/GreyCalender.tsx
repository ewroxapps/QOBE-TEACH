import React from 'react';
import { SvgProps, SvgXml } from 'react-native-svg';

const xml = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6.66675 4.79102C6.32508 4.79102 6.04175 4.50768 6.04175 4.16602V1.66602C6.04175 1.32435 6.32508 1.04102 6.66675 1.04102C7.00841 1.04102 7.29175 1.32435 7.29175 1.66602V4.16602C7.29175 4.50768 7.00841 4.79102 6.66675 4.79102Z" fill="#94A3B8"/>
<path d="M13.3333 4.79102C12.9916 4.79102 12.7083 4.50768 12.7083 4.16602V1.66602C12.7083 1.32435 12.9916 1.04102 13.3333 1.04102C13.6749 1.04102 13.9583 1.32435 13.9583 1.66602V4.16602C13.9583 4.50768 13.6749 4.79102 13.3333 4.79102Z" fill="#94A3B8"/>
<path d="M7.08333 12.082C6.975 12.082 6.86667 12.057 6.76667 12.0154C6.65833 11.9737 6.575 11.9153 6.49167 11.8403C6.34167 11.6819 6.25 11.4737 6.25 11.2487C6.25 11.1404 6.275 11.032 6.31667 10.932C6.35833 10.832 6.41667 10.7404 6.49167 10.657C6.575 10.582 6.65833 10.5236 6.76667 10.4819C7.06667 10.3569 7.44167 10.4237 7.675 10.657C7.825 10.8154 7.91667 11.032 7.91667 11.2487C7.91667 11.2987 7.90833 11.357 7.9 11.4154C7.89167 11.4654 7.875 11.5154 7.85 11.5654C7.83333 11.6154 7.80833 11.6654 7.775 11.7154C7.75 11.757 7.70833 11.7986 7.675 11.8403C7.51667 11.9903 7.3 12.082 7.08333 12.082Z" fill="#94A3B8"/>
<path d="M10.0001 12.0818C9.89175 12.0818 9.78341 12.0568 9.68341 12.0151C9.57508 11.9734 9.49175 11.9151 9.40841 11.8401C9.25841 11.6818 9.16675 11.4734 9.16675 11.2484C9.16675 11.1401 9.19175 11.0318 9.23341 10.9318C9.27508 10.8318 9.33341 10.7401 9.40841 10.6568C9.49175 10.5818 9.57508 10.5234 9.68341 10.4818C9.98341 10.3484 10.3584 10.4234 10.5917 10.6568C10.7417 10.8151 10.8334 11.0318 10.8334 11.2484C10.8334 11.2984 10.8251 11.3568 10.8167 11.4151C10.8084 11.4651 10.7917 11.5151 10.7667 11.5651C10.7501 11.6151 10.7251 11.6651 10.6917 11.7151C10.6667 11.7568 10.6251 11.7984 10.5917 11.8401C10.4334 11.9901 10.2167 12.0818 10.0001 12.0818Z" fill="#94A3B8"/>
<path d="M12.9166 12.0818C12.8083 12.0818 12.6999 12.0568 12.5999 12.0151C12.4916 11.9734 12.4083 11.9151 12.3249 11.8401C12.2916 11.7984 12.2583 11.7568 12.2249 11.7151C12.1916 11.6651 12.1666 11.6151 12.1499 11.5651C12.1249 11.5151 12.1083 11.4651 12.0999 11.4151C12.0916 11.3568 12.0833 11.2984 12.0833 11.2484C12.0833 11.0318 12.1749 10.8151 12.3249 10.6568C12.4083 10.5818 12.4916 10.5234 12.5999 10.4818C12.9083 10.3484 13.2749 10.4234 13.5083 10.6568C13.6583 10.8151 13.7499 11.0318 13.7499 11.2484C13.7499 11.2984 13.7416 11.3568 13.7333 11.4151C13.7249 11.4651 13.7083 11.5151 13.6833 11.5651C13.6666 11.6151 13.6416 11.6651 13.6083 11.7151C13.5833 11.7568 13.5416 11.7984 13.5083 11.8401C13.3499 11.9901 13.1333 12.0818 12.9166 12.0818Z" fill="#94A3B8"/>
<path d="M7.08333 15C6.975 15 6.86667 14.975 6.76667 14.9333C6.66667 14.8917 6.575 14.8333 6.49167 14.7583C6.34167 14.6 6.25 14.3833 6.25 14.1667C6.25 14.0583 6.275 13.95 6.31667 13.85C6.35833 13.7417 6.41667 13.65 6.49167 13.575C6.8 13.2667 7.36667 13.2667 7.675 13.575C7.825 13.7333 7.91667 13.95 7.91667 14.1667C7.91667 14.3833 7.825 14.6 7.675 14.7583C7.51667 14.9083 7.3 15 7.08333 15Z" fill="#94A3B8"/>
<path d="M10.0001 15C9.78341 15 9.56675 14.9083 9.40841 14.7583C9.25841 14.6 9.16675 14.3833 9.16675 14.1667C9.16675 14.0583 9.19175 13.95 9.23341 13.85C9.27508 13.7417 9.33341 13.65 9.40841 13.575C9.71675 13.2667 10.2834 13.2667 10.5917 13.575C10.6667 13.65 10.7251 13.7417 10.7667 13.85C10.8084 13.95 10.8334 14.0583 10.8334 14.1667C10.8334 14.3833 10.7417 14.6 10.5917 14.7583C10.4334 14.9083 10.2167 15 10.0001 15Z" fill="#94A3B8"/>
<path d="M12.9166 15.0014C12.6999 15.0014 12.4833 14.9097 12.3249 14.7597C12.2499 14.6847 12.1916 14.5931 12.1499 14.4847C12.1083 14.3847 12.0833 14.2764 12.0833 14.1681C12.0833 14.0597 12.1083 13.9514 12.1499 13.8514C12.1916 13.7431 12.2499 13.6514 12.3249 13.5764C12.5166 13.3847 12.8083 13.2931 13.0749 13.3514C13.1333 13.3597 13.1833 13.3764 13.2333 13.4014C13.2833 13.4181 13.3333 13.4431 13.3833 13.4764C13.4249 13.5014 13.4666 13.5431 13.5083 13.5764C13.6583 13.7347 13.7499 13.9514 13.7499 14.1681C13.7499 14.3847 13.6583 14.6014 13.5083 14.7597C13.3499 14.9097 13.1333 15.0014 12.9166 15.0014Z" fill="#94A3B8"/>
<path d="M17.0834 8.19922H2.91675C2.57508 8.19922 2.29175 7.91589 2.29175 7.57422C2.29175 7.23255 2.57508 6.94922 2.91675 6.94922H17.0834C17.4251 6.94922 17.7084 7.23255 17.7084 7.57422C17.7084 7.91589 17.4251 8.19922 17.0834 8.19922Z" fill="#94A3B8"/>
<path d="M13.3333 18.9577H6.66667C3.625 18.9577 1.875 17.2077 1.875 14.166V7.08268C1.875 4.04102 3.625 2.29102 6.66667 2.29102H13.3333C16.375 2.29102 18.125 4.04102 18.125 7.08268V14.166C18.125 17.2077 16.375 18.9577 13.3333 18.9577ZM6.66667 3.54102C4.28333 3.54102 3.125 4.69935 3.125 7.08268V14.166C3.125 16.5493 4.28333 17.7077 6.66667 17.7077H13.3333C15.7167 17.7077 16.875 16.5493 16.875 14.166V7.08268C16.875 4.69935 15.7167 3.54102 13.3333 3.54102H6.66667Z" fill="#94A3B8"/>
</svg>
`;
export default (props: SvgProps) => <SvgXml xml={xml} {...props} />;