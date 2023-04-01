import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
* {
  box-sizing: border-box;
  font-family: Pretendard, -apple-system, BlinkMacSystemFont, system-ui,
        Roboto, 'Helvetica Neue', 'Segoe UI', 'Apple SD Gothic Neo',
        'Noto Sans KR', 'Malgun Gothic', 'Apple Color Emoji', 'Segoe UI Emoji',
        'Segoe UI Symbol', sans-serif !important;
}

#root {
  height: 100%;
}

html, body {
   margin : 0;
   padding : 0;
   width:100%;
   height : 100%;
   background-color: #E26A0E;
   }
`;
