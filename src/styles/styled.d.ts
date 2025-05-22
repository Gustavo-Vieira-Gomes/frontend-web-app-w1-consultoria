import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    color: {
      main: {
        primary: {
          default: string;
          light: string;
          dark: string;
        };
        secondary: {
          default: string;
          light: string;
          dark: string;
        };
        complementar: {
          light: string;
          medium: string;
          dark: string;
        };
        alternative: {
          light: string;
          medium: string;
          dark: string;
        };
        gradient: string;
      };
      foreground: string;
      background: string;
      white: string;
      error: string;

    };
    font: {
      family: {
        Montserrat: string;
      };
      weight: {
        light: number;
        normal: number;
        bold: number;
        xbold: number;
        xxbold: number;
      };
      sizes: {
        smaller: string;
        small: string;
        medium: string;
        large: string;
        larger: string;
        extraLarge: string;
        huge: string;
      };
    };
  }
}
