import React from "react";

const PrescriptionSVG = ({ active }) => {
  return (
    <svg
      width={19}
      height={21}
      viewBox="0 0 19 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M13.373 19.188L14.869 17.673L12.442 15.246L10.927 16.742C10.5783 17.0907 10.404 17.4983 10.404 17.965C10.404 18.4317 10.5783 18.8393 10.927 19.188C11.2757 19.5373 11.6833 19.712 12.15 19.712C12.6167 19.712 13.0243 19.5373 13.373 19.188ZM15.558 16.985L17.073 15.488C17.4217 15.1393 17.593 14.7317 17.587 14.265C17.5803 13.7983 17.4027 13.3907 17.054 13.042C16.7053 12.706 16.3007 12.535 15.84 12.529C15.38 12.5223 14.9757 12.6933 14.627 13.042L13.131 14.558L15.558 16.985ZM14.068 19.902C13.528 20.442 12.8853 20.7087 12.14 20.702C11.3953 20.6953 10.753 20.4287 10.213 19.902C9.68633 19.362 9.41967 18.7197 9.413 17.975C9.40633 17.2303 9.673 16.588 10.213 16.048L13.933 12.328C14.4597 11.8013 15.102 11.538 15.86 11.538C16.6173 11.538 17.2597 11.8013 17.787 12.328C18.327 12.868 18.597 13.5107 18.597 14.256C18.597 15.0007 18.327 15.643 17.787 16.183L14.068 19.902ZM1.615 18C1.16833 18 0.787333 17.8427 0.472 17.528C0.157333 17.2133 0 16.8323 0 16.385V3.615C0 3.16833 0.157333 2.78733 0.472 2.472C0.786667 2.15733 1.16767 2 1.615 2H6.315C6.22433 1.49 6.34667 1.029 6.682 0.617C7.01733 0.205667 7.45667 0 8 0C8.55667 0 9.00267 0.205667 9.338 0.617C9.67267 1.029 9.78833 1.49 9.685 2H14.385C14.8317 2 15.2127 2.15733 15.528 2.472C15.8427 2.78667 16 3.16767 16 3.615V8.798C15.8333 8.77867 15.6667 8.77533 15.5 8.788C15.3333 8.80133 15.1667 8.82 15 8.844V3.615C15 3.43567 14.9423 3.28833 14.827 3.173C14.7117 3.05767 14.5643 3 14.385 3H1.615C1.43567 3 1.28833 3.05767 1.173 3.173C1.05767 3.28833 1 3.43567 1 3.615V16.385C1 16.5643 1.05767 16.7117 1.173 16.827C1.28833 16.9423 1.43567 17 1.615 17H6.748C6.71067 17.1667 6.68567 17.3333 6.673 17.5C6.65967 17.6667 6.663 17.8333 6.683 18H1.615ZM8 2.442C8.21667 2.442 8.396 2.37133 8.538 2.23C8.68 2.08867 8.75067 1.90933 8.75 1.692C8.75 1.47533 8.679 1.29633 8.537 1.155C8.395 1.01367 8.216 0.942667 8 0.942C7.78333 0.942 7.60433 1.013 7.463 1.155C7.32167 1.297 7.25067 1.476 7.25 1.692C7.25 1.90867 7.321 2.088 7.463 2.23C7.605 2.372 7.784 2.44267 8 2.442ZM3.5 6.731V5.731H12.5V6.731H3.5ZM3.5 10.5V9.5H12.5V9.908C12.4053 9.978 12.318 10.048 12.238 10.118C12.158 10.188 12.0703 10.2703 11.975 10.365L11.84 10.5H3.5ZM3.5 14.27V13.27H9.071L8.788 13.552C8.668 13.672 8.55067 13.7917 8.436 13.911C8.32067 14.029 8.20867 14.1483 8.1 14.269L3.5 14.27Z"
        fill={active ? "#43adaf" : "#009294"}
      />
    </svg>
  );
};

export default PrescriptionSVG;
