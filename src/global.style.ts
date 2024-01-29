import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle<{ theme: any }>`

  @font-face {
    font-family: "Inter" !important;
    src: local("Inter"),
      url('../assets/fonts/Inter/static/Inter-Regular.ttf') format("truetype");
    font-style: normal;
  }



  html, body, #root {
    margin: 0;
    padding: 0;
    display: flex;
    flex: 1;
    min-height: 100%;
    font-family: "Inter" !important;
    color: ${({ theme }) => theme.color.primaryColors.gray["900"]};
    overflow: auto;
  }



`;
export default GlobalStyle;
