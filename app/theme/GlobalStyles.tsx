"use client";
import { createGlobalStyle } from "styled-components";
import { normalize } from "styled-normalize";

const GlobalStyles = createGlobalStyle`
   ${normalize}
   ::-webkit-scrollbar {
      width: 8px;
      height: 8px;
   }
   ::-webkit-scrollbar-button {
      width: 0px;
      height: 0px;
   }
   ::-webkit-scrollbar-thumb {
      background: #e1e1e1;
      border: 1px none #121212;
      border-radius: 59px;
   }
   ::-webkit-scrollbar-thumb:hover {
      transition: 0.5s ease-in-out;
      background: #d1d1d1;
   }
   ::-webkit-scrollbar-thumb:active {
      background: #aeaeae;
   }
   ::-webkit-scrollbar-track {
      background: #888888;
      border: 23px none #ffffff;
      border-radius: 59px;
   }
   ::-webkit-scrollbar-track:hover {
      background: #777777;
   }
   ::-webkit-scrollbar-track:active {
      background: #555555;
   }
   ::-webkit-scrollbar-corner {
      background: transparent;
      border-radius: 59px;
   }
`;

export default GlobalStyles;
