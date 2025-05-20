import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    color: {
      main: {
        primary: {
          light: string;
          medium: string;
          dark: string;
        };
        secondary: {
          light: string;
          medium: string;
          dark: string;
        };
        complementar: {
          medium: string;
          dark: string;
          darkest: string;
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
      bgCheckout: string;
      gray: string;
      lightGray: string;
      slightLightGray: string;
      informationalGray: string;
      darkGray: string;
      matteGray: string;
      xgray: string;
      blueGray: string;
      bluishGray: string;
      red: string;
      washedRed: string;
      lossRed: string;
      logoutRed: string;
      navyBlue: string;
      aquaBlue: string;
      blue: string;
      cobaltBlue: string;
      lightBlue: string;
      darkBlue: string;
      fullDarkBlue: string;
      white: string;
      emeraldGreen: string;
      orange: string;
      black: string;
      black_black: string;
      green: string;
      success: string;
      error: string;
      alert: string;
      purple: string;
    };
    font: {
      family: {
        JosefinSans: string;
        Inter: string;
        Montserrat: string;
        BlinkMacSystemFont: string;
        Roboto: string;
        Oxygen: string;
        Cantarell: string;
        OpenSans: string;
        SansSerif: string;
        HelveticaNeue: string;
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
