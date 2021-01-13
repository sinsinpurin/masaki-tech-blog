/** Declaration file by https://github.com/system-ui/theme-ui/issues/491 */
declare module "@theme-ui/presets" {
  export = theme_ui__presets;
}

declare const theme_ui__presets: {
  base: {
    colors: {
      background: string;
      muted: string;
      primary: string;
      secondary: string;
      text: string;
    };
    fontSizes: number[];
    fontWeights: {
      body: number;
      bold: number;
      heading: number;
    };
    fonts: {
      body: string;
      heading: string;
      monospace: string;
    };
    lineHeights: {
      body: number;
      heading: number;
    };
    space: number[];
    styles: {
      a: {
        color: string;
      };
      code: {
        fontFamily: string;
        fontSize: string;
      };
      h1: {
        color: string;
        fontFamily: string;
        fontSize: number;
        fontWeight: string;
        lineHeight: string;
      };
      h2: {
        color: string;
        fontFamily: string;
        fontSize: number;
        fontWeight: string;
        lineHeight: string;
      };
      h3: {
        color: string;
        fontFamily: string;
        fontSize: number;
        fontWeight: string;
        lineHeight: string;
      };
      h4: {
        color: string;
        fontFamily: string;
        fontSize: number;
        fontWeight: string;
        lineHeight: string;
      };
      h5: {
        color: string;
        fontFamily: string;
        fontSize: number;
        fontWeight: string;
        lineHeight: string;
      };
      h6: {
        color: string;
        fontFamily: string;
        fontSize: number;
        fontWeight: string;
        lineHeight: string;
      };
      img: {
        maxWidth: string;
      };
      p: {
        color: string;
        fontFamily: string;
        fontWeight: string;
        lineHeight: string;
      };
      pre: {
        code: {
          color: string;
        };
        fontFamily: string;
        overflowX: string;
      };
      root: {
        fontFamily: string;
        fontWeight: string;
        lineHeight: string;
      };
      table: {
        borderCollapse: string;
        borderSpacing: number;
        width: string;
      };
      td: {
        borderBottomStyle: string;
        textAlign: string;
      };
      th: {
        borderBottomStyle: string;
        textAlign: string;
      };
    };
  };
  bootstrap: {
    breakpoints: string[];
    colors: {
      background: string;
      black: string;
      blue: string;
      cyan: string;
      danger: string;
      dark: string;
      gray: string[];
      grayDark: string;
      green: string;
      indigo: string;
      info: string;
      light: string;
      muted: string;
      orange: string;
      pink: string;
      primary: string;
      purple: string;
      red: string;
      secondary: string;
      success: string;
      teal: string;
      text: string;
      textMuted: string;
      warning: string;
      white: string;
      yellow: string;
    };
    fontSizes: string[];
    fontWeights: {
      body: number;
      bold: number;
      display: number;
      heading: number;
      light: number;
      normal: number;
    };
    fonts: {
      body: string;
      heading: string;
      monospace: string;
      sans: string;
    };
    lineHeights: {
      body: number;
      heading: number;
    };
    radii: {
      default: string;
      lg: string;
      pill: string;
      sm: string;
    };
    shadows: {
      default: string;
      lg: string;
      sm: string;
    };
    sizes: {
      lg: number;
      md: number;
      sm: number;
      xl: number;
    };
    space: string[];
    styles: {
      a: {
        ":hover": {
          textDecoration: string;
        };
        color: string;
        textDecoration: string;
      };
      blockquote: {
        fontSize: number;
        mb: number;
      };
      h1: {
        fontFamily: string;
        fontSize: number;
        fontWeight: string;
        lineHeight: string;
        mb: number;
        mt: number;
      };
      h2: {
        fontFamily: string;
        fontSize: number;
        fontWeight: string;
        lineHeight: string;
        mb: number;
        mt: number;
      };
      h3: {
        fontFamily: string;
        fontSize: number;
        fontWeight: string;
        lineHeight: string;
        mb: number;
        mt: number;
      };
      h4: {
        fontFamily: string;
        fontSize: number;
        fontWeight: string;
        lineHeight: string;
        mb: number;
        mt: number;
      };
      h5: {
        fontFamily: string;
        fontSize: number;
        fontWeight: string;
        lineHeight: string;
        mb: number;
        mt: number;
      };
      h6: {
        fontFamily: string;
        fontSize: number;
        fontWeight: string;
        lineHeight: string;
        mb: number;
        mt: number;
      };
      img: {
        height: string;
        maxWidth: string;
      };
      inlineCode: {
        color: string;
      };
      p: {
        lineHeight: string;
        mb: number;
      };
      root: {
        fontFamily: string;
        fontWeight: string;
        lineHeight: string;
      };
      table: {
        borderCollapse: string;
        color: string;
        marginBottom: number;
        width: string;
      };
      td: {
        borderBottomColor: string;
        borderBottomStyle: string;
        borderBottomWidth: number;
        padding: string;
        verticalAlign: string;
      };
      th: {
        borderBottomColor: string;
        borderBottomStyle: string;
        borderBottomWidth: number;
        borderTopColor: string;
        borderTopStyle: string;
        borderTopWidth: number;
        padding: string;
        textAlign: string;
        verticalAlign: string;
      };
    };
    typeStyles: {
      display: {
        fontWeight: string;
        lineHeight: string;
      };
      heading: {
        fontFamily: string;
        fontWeight: string;
        lineHeight: string;
        mb: number;
        mt: number;
      };
    };
  };
  bulma: {
    colors: {
      background: string;
      black: string;
      blackBis: string;
      blackTer: string;
      blue: string;
      cyan: string;
      danger: string;
      dark: string;
      green: string;
      grey: string;
      greyDark: string;
      greyDarker: string;
      greyLight: string;
      greyLighter: string;
      info: string;
      light: string;
      modes: {
        invert: Record<string, unknown>;
      };
      muted: string;
      orange: string;
      primary: string;
      purple: string;
      red: string;
      success: string;
      text: string;
      turquoise: string;
      warning: string;
      white: string;
      whiteBis: string;
      whiteTer: string;
      yellow: string;
    };
    fontSizes: string[];
    fontWeights: {
      body: number;
      bold: number;
      heading: number;
      light: number;
      medium: number;
      semibold: number;
    };
    fonts: {
      body: string;
      heading: string;
      monospace: string;
    };
    space: string[];
    styles: {
      a: {
        ":hover": {
          textDecoration: string;
        };
        color: string;
        textDecoration: string;
      };
      code: Record<string, unknown>;
      h1: {
        fontFamily: string;
        fontSize: number;
        fontWeight: string;
        lineHeight: string;
        m: number;
        mb: number;
        mt: number;
      };
      h2: {
        fontFamily: string;
        fontSize: number;
        fontWeight: string;
        lineHeight: string;
        m: number;
        mb: number;
        mt: number;
      };
      h3: {
        fontFamily: string;
        fontSize: number;
        fontWeight: string;
        lineHeight: string;
        m: number;
        mb: number;
        mt: number;
      };
      h4: {
        fontFamily: string;
        fontSize: number;
        fontWeight: string;
        lineHeight: string;
        m: number;
        mb: number;
      };
      h5: {
        fontFamily: string;
        fontSize: number;
        fontWeight: string;
        lineHeight: string;
        m: number;
        mb: number;
      };
      h6: {
        fontFamily: string;
        fontSize: number;
        fontWeight: string;
        lineHeight: string;
        m: number;
        mb: number;
      };
      hr: {
        bg: string;
        border: number;
        height: string;
        m: number;
      };
      pre: Record<string, unknown>;
      root: {
        fontFamily: string;
        fontWeight: string;
        lineHeight: string;
      };
    };
  };
  dark: {
    colors: {
      background: string;
      gray: string;
      highlight: string;
      muted: string;
      primary: string;
      purple: string;
      secondary: string;
      text: string;
    };
    fontSizes: number[];
    fontWeights: {
      body: number;
      display: number;
      heading: number;
    };
    fonts: {
      body: string;
      heading: string;
      monospace: string;
    };
    lineHeights: {
      body: number;
      heading: number;
    };
    prism: {
      ".atrule,.attr-value,.keyword": {
        color: string;
      };
      ".comment": {
        fontStyle: string;
      };
      ".comment,.prolog,.doctype,.cdata,.punctuation,.operator,.entity,.url": {
        color: string;
      };
      ".property,.tag,.boolean,.number,.constant,.symbol,.deleted,.function,.class-name,.regex,.important,.variable": {
        color: string;
      };
      ".selector,.attr-name,.string,.char,.builtin,.inserted": {
        color: string;
      };
    };
    styles: {
      Container: {
        maxWidth: number;
        p: number;
      };
      a: {
        "&:hover": {
          color: string;
        };
        color: string;
      };
      code: {
        color: string;
        fontFamily: string;
        fontSize: number;
      };
      h1: {
        variant: string;
      };
      h2: {
        fontSize: number;
        variant: string;
      };
      h3: {
        fontSize: number;
        variant: string;
      };
      h4: {
        fontSize: number;
        variant: string;
      };
      h5: {
        fontSize: number;
        variant: string;
      };
      h6: {
        fontSize: number;
        variant: string;
      };
      hr: {
        border: number;
        borderBottom: string;
        borderColor: string;
      };
      img: {
        maxWidth: string;
      };
      inlineCode: {
        bg: string;
        color: string;
        fontFamily: string;
      };
      pre: {
        bg: string;
        code: {
          color: string;
        };
        color: string;
        fontFamily: string;
        fontSize: number;
        overflow: string;
        p: number;
        variant: string;
      };
      root: {
        fontFamily: string;
        fontWeight: string;
        lineHeight: string;
      };
      table: {
        borderCollapse: string;
        borderSpacing: number;
        my: number;
        "th,td": {
          borderBottomStyle: string;
          borderColor: string;
          pl: number;
          pr: string;
          py: string;
          textAlign: string;
        };
        width: string;
      };
      td: {
        borderBottomWidth: string;
        verticalAlign: string;
      };
      th: {
        borderBottomWidth: string;
        verticalAlign: string;
      };
    };
    textStyles: {
      display: {
        fontSize: number[];
        fontWeight: string;
        letterSpacing: string;
        mt: number;
        variant: string;
      };
      heading: {
        fontFamily: string;
        fontWeight: string;
        lineHeight: string;
      };
    };
  };
  deep: {
    colors: {
      background: string;
      gray: string;
      highlight: string;
      muted: string;
      primary: string;
      purple: string;
      secondary: string;
      text: string;
    };
    fontSizes: number[];
    fontWeights: {
      body: number;
      display: number;
      heading: number;
    };
    fonts: {
      body: string;
      heading: string;
      monospace: string;
    };
    lineHeights: {
      body: number;
      heading: number;
    };
    prism: {
      ".atrule,.attr-value,.keyword": {
        color: string;
      };
      ".comment": {
        fontStyle: string;
      };
      ".comment,.prolog,.doctype,.cdata,.punctuation,.operator,.entity,.url": {
        color: string;
      };
      ".property,.tag,.boolean,.number,.constant,.symbol,.deleted,.function,.class-name,.regex,.important,.variable": {
        color: string;
      };
      ".selector,.attr-name,.string,.char,.builtin,.inserted": {
        color: string;
      };
    };
    styles: {
      Container: {
        maxWidth: number;
        p: number;
      };
      a: {
        "&:hover": {
          color: string;
        };
        color: string;
      };
      code: {
        color: string;
        fontFamily: string;
        fontSize: number;
      };
      h1: {
        variant: string;
      };
      h2: {
        fontSize: number;
        variant: string;
      };
      h3: {
        fontSize: number;
        variant: string;
      };
      h4: {
        fontSize: number;
        variant: string;
      };
      h5: {
        fontSize: number;
        variant: string;
      };
      h6: {
        fontSize: number;
        variant: string;
      };
      hr: {
        border: number;
        borderBottom: string;
        borderColor: string;
      };
      img: {
        maxWidth: string;
      };
      inlineCode: {
        bg: string;
        color: string;
        fontFamily: string;
      };
      pre: {
        bg: string;
        code: {
          color: string;
        };
        color: string;
        fontFamily: string;
        fontSize: number;
        overflow: string;
        p: number;
        variant: string;
      };
      root: {
        fontFamily: string;
        fontWeight: string;
        lineHeight: string;
      };
      table: {
        borderCollapse: string;
        borderSpacing: number;
        my: number;
        "th,td": {
          borderBottomStyle: string;
          borderColor: string;
          pl: number;
          pr: string;
          py: string;
          textAlign: string;
        };
        width: string;
      };
      td: {
        borderBottomWidth: string;
        verticalAlign: string;
      };
      th: {
        borderBottomWidth: string;
        verticalAlign: string;
      };
    };
    textStyles: {
      display: {
        fontSize: number[];
        fontWeight: string;
        letterSpacing: string;
        mt: number;
        variant: string;
      };
      heading: {
        fontFamily: string;
        fontWeight: string;
        lineHeight: string;
      };
    };
  };
  funk: {
    colors: {
      background: string;
      muted: string;
      primary: string;
      secondary: string;
      text: string;
    };
    fontSizes: number[];
    fontWeights: {
      body: number;
      bold: number;
      heading: number;
    };
    fonts: {
      body: string;
      heading: string;
      monospace: string;
    };
    lineHeights: {
      body: number;
      heading: number;
    };
    space: number[];
    styles: {
      a: {
        color: string;
      };
      code: {
        fontFamily: string;
        fontSize: string;
      };
      h1: {
        color: string;
        fontFamily: string;
        fontSize: number;
        fontWeight: string;
        lineHeight: string;
      };
      h2: {
        color: string;
        fontFamily: string;
        fontSize: number;
        fontWeight: string;
        lineHeight: string;
      };
      h3: {
        color: string;
        fontFamily: string;
        fontSize: number;
        fontWeight: string;
        lineHeight: string;
      };
      h4: {
        color: string;
        fontFamily: string;
        fontSize: number;
        fontWeight: string;
        lineHeight: string;
      };
      h5: {
        color: string;
        fontFamily: string;
        fontSize: number;
        fontWeight: string;
        lineHeight: string;
      };
      h6: {
        color: string;
        fontFamily: string;
        fontSize: number;
        fontWeight: string;
        lineHeight: string;
      };
      img: {
        maxWidth: string;
      };
      p: {
        color: string;
        fontFamily: string;
        fontWeight: string;
        lineHeight: string;
      };
      pre: {
        code: {
          color: string;
        };
        fontFamily: string;
        overflowX: string;
      };
      root: {
        fontFamily: string;
        fontWeight: string;
        lineHeight: string;
      };
      table: {
        borderCollapse: string;
        borderSpacing: number;
        width: string;
      };
      td: {
        borderBottomStyle: string;
        textAlign: string;
      };
      th: {
        borderBottomStyle: string;
        textAlign: string;
      };
    };
  };
  future: {
    colors: {
      background: string;
      highlight: string;
      modes: {
        dark: {
          background: string;
          highlight: string;
          muted: string;
          primary: string;
          secondary: string;
          text: string;
        };
      };
      muted: string;
      primary: string;
      secondary: string;
      text: string;
    };
    fontSizes: number[];
    fontWeights: {
      body: number;
      bold: number;
      heading: number;
    };
    fonts: {
      body: string;
      heading: string;
      moonospace: string;
    };
    lineHeights: {
      body: number;
      heading: number;
    };
    space: number[];
    styles: {
      a: {
        color: string;
      };
      code: {
        fontFamily: string;
        fontSize: string;
      };
      h1: {
        color: string;
        fontFamily: string;
        fontSize: number;
        fontWeight: string;
        lineHeight: string;
      };
      h2: {
        color: string;
        fontFamily: string;
        fontSize: number;
        fontWeight: string;
        lineHeight: string;
      };
      h3: {
        color: string;
        fontFamily: string;
        fontSize: number;
        fontWeight: string;
        lineHeight: string;
      };
      h4: {
        color: string;
        fontFamily: string;
        fontSize: number;
        fontWeight: string;
        lineHeight: string;
      };
      h5: {
        color: string;
        fontFamily: string;
        fontSize: number;
        fontWeight: string;
        lineHeight: string;
      };
      h6: {
        color: string;
        fontFamily: string;
        fontSize: number;
        fontWeight: string;
        lineHeight: string;
      };
      img: {
        maxWidth: string;
      };
      p: {
        color: string;
        fontFamily: string;
        fontWeight: string;
        lineHeight: string;
      };
      pre: {
        code: {
          color: string;
        };
        fontFamily: string;
        overflowX: string;
      };
      root: {
        fontFamily: string;
        fontWeight: string;
        lineHeight: string;
      };
      table: {
        borderCollapse: string;
        borderSpacing: number;
        width: string;
      };
      td: {
        borderBottomStyle: string;
        textAlign: string;
      };
      th: {
        borderBottomStyle: string;
        textAlign: string;
      };
    };
  };
  roboto: {
    colors: {
      background: string;
      muted: string;
      primary: string;
      secondary: string;
      text: string;
    };
    fontSizes: number[];
    fontWeights: {
      body: number;
      bold: number;
      heading: number;
    };
    fonts: {
      body: string;
      heading: string;
      monospace: string;
    };
    lineHeights: {
      body: number;
      heading: number;
    };
    space: number[];
    styles: {
      a: {
        color: string;
      };
      code: {
        fontFamily: string;
        fontSize: string;
      };
      h1: {
        color: string;
        fontFamily: string;
        fontSize: number;
        fontWeight: string;
        lineHeight: string;
      };
      h2: {
        color: string;
        fontFamily: string;
        fontSize: number;
        fontWeight: string;
        lineHeight: string;
      };
      h3: {
        color: string;
        fontFamily: string;
        fontSize: number;
        fontWeight: string;
        lineHeight: string;
      };
      h4: {
        color: string;
        fontFamily: string;
        fontSize: number;
        fontWeight: string;
        lineHeight: string;
      };
      h5: {
        color: string;
        fontFamily: string;
        fontSize: number;
        fontWeight: string;
        lineHeight: string;
      };
      h6: {
        color: string;
        fontFamily: string;
        fontSize: number;
        fontWeight: string;
        lineHeight: string;
      };
      img: {
        maxWidth: string;
      };
      p: {
        color: string;
        fontFamily: string;
        fontWeight: string;
        lineHeight: string;
      };
      pre: {
        code: {
          color: string;
        };
        fontFamily: string;
        overflowX: string;
      };
      root: {
        fontFamily: string;
        fontWeight: string;
        lineHeight: string;
      };
      table: {
        borderCollapse: string;
        borderSpacing: number;
        width: string;
      };
      td: {
        borderBottomStyle: string;
        textAlign: string;
      };
      th: {
        borderBottomStyle: string;
        textAlign: string;
      };
    };
  };
  swiss: {
    colors: {
      background: string;
      gray: string;
      highlight: string;
      muted: string;
      primary: string;
      purple: string;
      secondary: string;
      text: string;
    };
    fontSizes: number[];
    fontWeights: {
      body: number;
      display: number;
      heading: number;
    };
    fonts: {
      body: string;
      heading: string;
      monospace: string;
    };
    lineHeights: {
      body: number;
      heading: number;
    };
    prism: {
      ".atrule,.attr-value,.keyword": {
        color: string;
      };
      ".comment": {
        fontStyle: string;
      };
      ".comment,.prolog,.doctype,.cdata,.punctuation,.operator,.entity,.url": {
        color: string;
      };
      ".property,.tag,.boolean,.number,.constant,.symbol,.deleted,.function,.class-name,.regex,.important,.variable": {
        color: string;
      };
      ".selector,.attr-name,.string,.char,.builtin,.inserted": {
        color: string;
      };
    };
    styles: {
      Container: {
        maxWidth: number;
        p: number;
      };
      a: {
        "&:hover": {
          color: string;
        };
        color: string;
      };
      code: {
        color: string;
        fontFamily: string;
        fontSize: number;
      };
      h1: {
        variant: string;
      };
      h2: {
        fontSize: number;
        variant: string;
      };
      h3: {
        fontSize: number;
        variant: string;
      };
      h4: {
        fontSize: number;
        variant: string;
      };
      h5: {
        fontSize: number;
        variant: string;
      };
      h6: {
        fontSize: number;
        variant: string;
      };
      hr: {
        border: number;
        borderBottom: string;
        borderColor: string;
      };
      img: {
        maxWidth: string;
      };
      inlineCode: {
        bg: string;
        color: string;
        fontFamily: string;
      };
      pre: {
        bg: string;
        code: {
          color: string;
        };
        color: string;
        fontFamily: string;
        fontSize: number;
        overflow: string;
        p: number;
        variant: string;
      };
      root: {
        fontFamily: string;
        fontWeight: string;
        lineHeight: string;
      };
      table: {
        borderCollapse: string;
        borderSpacing: number;
        my: number;
        "th,td": {
          borderBottomStyle: string;
          borderColor: string;
          pl: number;
          pr: string;
          py: string;
          textAlign: string;
        };
        width: string;
      };
      td: {
        borderBottomWidth: string;
        verticalAlign: string;
      };
      th: {
        borderBottomWidth: string;
        verticalAlign: string;
      };
    };
    textStyles: {
      display: {
        fontSize: number[];
        fontWeight: string;
        letterSpacing: string;
        mt: number;
        variant: string;
      };
      heading: {
        fontFamily: string;
        fontWeight: string;
        lineHeight: string;
      };
    };
  };
  system: {
    colors: {
      accent: string;
      background: string;
      gray: string;
      highlight: string;
      modes: {
        dark: {
          accent: string;
          background: string;
          gray: string;
          highlight: string;
          muted: string;
          primary: string;
          secondary: string;
          text: string;
        };
        deep: {
          accent: string;
          background: string;
          gray: string;
          highlight: string;
          muted: string;
          primary: string;
          secondary: string;
          text: string;
        };
        swiss: {
          accent: string;
          background: string;
          gray: string;
          highlight: string;
          muted: string;
          primary: string;
          secondary: string;
          text: string;
        };
      };
      muted: string;
      primary: string;
      secondary: string;
      text: string;
    };
    fontSizes: number[];
    fontWeights: {
      body: number;
      display: number;
      heading: number;
    };
    fonts: {
      body: string;
      heading: string;
      monospace: string;
    };
    initialColorMode: string;
    lineHeights: {
      body: number;
      heading: number;
    };
    styles: {
      Container: {
        maxWidth: number;
        p: number;
      };
      a: {
        "&:hover": {
          color: string;
        };
        color: string;
      };
      code: {
        fontFamily: string;
        fontSize: number;
      };
      h1: {
        variant: string;
      };
      h2: {
        fontSize: number;
        variant: string;
      };
      h3: {
        fontSize: number;
        variant: string;
      };
      h4: {
        fontSize: number;
        variant: string;
      };
      h5: {
        fontSize: number;
        variant: string;
      };
      h6: {
        fontSize: number;
        variant: string;
      };
      hr: {
        border: number;
        borderBottom: string;
        borderColor: string;
      };
      inlineCode: {
        bg: string;
        color: string;
        fontFamily: string;
      };
      pre: {
        bg: string;
        code: {
          color: string;
        };
        color: string;
        fontFamily: string;
        fontSize: number;
        overflow: string;
        p: number;
      };
      root: {
        fontFamily: string;
        fontWeight: string;
        lineHeight: string;
      };
      table: {
        borderCollapse: string;
        borderSpacing: number;
        my: number;
        "th,td": {
          borderBottomStyle: string;
          borderColor: string;
          pl: number;
          pr: string;
          py: string;
          textAlign: string;
        };
        width: string;
      };
      td: {
        borderBottomWidth: string;
        verticalAlign: string;
      };
      th: {
        borderBottomWidth: string;
        verticalAlign: string;
      };
    };
    textStyles: {
      display: {
        fontSize: number[];
        fontWeight: string;
        letterSpacing: string;
        mt: number;
        variant: string;
      };
      heading: {
        fontFamily: string;
        fontWeight: string;
        lineHeight: string;
      };
    };
    useCustomProperties: boolean;
  };
  tailwind: {
    borderWidths: {
      "0": string;
      "2": string;
      "4": string;
      "8": string;
      px: string;
    };
    breakpoints: string[];
    buttons: {
      "3D": {
        "&:hover": {
          transform: string;
        };
        backgroundColor: string;
        border: string;
        borderBottomColor: string;
        borderBottomStyle: string;
        borderBottomWidth: string;
        borderRadius: string;
        color: string;
        cursor: string;
        fontSize: string;
        fontWeight: string;
        lineHeight: string;
        px: number;
        py: number;
        transition: string;
      };
      bordered: {
        "&:hover": {
          backgroundColor: string;
        };
        backgroundColor: string;
        borderColor: string;
        borderRadius: string;
        borderStyle: string;
        borderWidth: string;
        color: string;
        cursor: string;
        fontSize: string;
        fontWeight: string;
        lineHeight: string;
        px: number;
        py: number;
      };
      disabled: {
        backgroundColor: string;
        border: string;
        borderRadius: string;
        color: string;
        cursor: string;
        fontSize: string;
        fontWeight: string;
        lineHeight: string;
        opacity: number;
        px: number;
        py: number;
      };
      elevated: {
        "&:hover": {
          backgroundColor: string;
        };
        backgroundColor: string;
        borderColor: string;
        borderRadius: string;
        borderStyle: string;
        borderWidth: string;
        boxShadow: string;
        color: string;
        cursor: string;
        fontSize: string;
        fontWeight: string;
        lineHeight: string;
        px: number;
        py: number;
      };
      outline: {
        "&:hover": {
          backgroundColor: string;
          borderColor: string;
          color: string;
        };
        backgroundColor: string;
        borderColor: string;
        borderRadius: string;
        borderStyle: string;
        borderWidth: string;
        color: string;
        cursor: string;
        fontSize: string;
        fontWeight: string;
        lineHeight: string;
        px: number;
        py: number;
      };
      pill: {
        "&:hover": {
          backgroundColor: string;
        };
        backgroundColor: string;
        border: string;
        borderRadius: string;
        color: string;
        cursor: string;
        fontSize: string;
        fontWeight: string;
        lineHeight: string;
        px: number;
        py: number;
      };
      simple: {
        "&:hover": {
          backgroundColor: string;
        };
        backgroundColor: string;
        border: string;
        borderRadius: string;
        color: string;
        cursor: string;
        fontSize: string;
        fontWeight: string;
        lineHeight: string;
        px: number;
        py: number;
      };
    };
    colors: {
      background: string;
      black: string;
      blue: any[];
      danger: string;
      dark: string;
      gray: any[];
      grayDark: string;
      green: any[];
      indigo: any[];
      info: string;
      light: string;
      muted: string;
      orange: any[];
      pink: any[];
      primary: string;
      primaryHover: string;
      purple: any[];
      red: any[];
      secondary: string;
      success: string;
      teal: any[];
      text: string;
      textMuted: string;
      transparent: string;
      warning: string;
      white: string;
      yellow: any[];
    };
    fontSizes: string[];
    fontWeights: {
      black: string;
      body: string;
      bold: string;
      extrabold: string;
      hairline: string;
      heading: string;
      light: string;
      medium: string;
      normal: string;
      semibold: string;
      thin: string;
    };
    fonts: {
      body: string;
      heading: string;
      mono: string;
      monospace: string;
      sans: string;
      serif: string;
    };
    inputs: {
      inline: {
        "&:focus": {
          backgroundColor: string;
          borderColor: string;
          outline: string;
        };
        appearance: string;
        backgroundColor: string;
        borderColor: string;
        borderRadius: string;
        borderStyle: string;
        borderWidth: string;
        color: string;
        fontSize: string;
        lineHeight: string;
        px: number;
        py: number;
      };
      shadow: {
        "&:focus": {
          boxShadow: string;
          outline: string;
        };
        appearance: string;
        border: string;
        borderRadius: string;
        boxShadow: string;
        color: string;
        fontSize: string;
        lineHeight: string;
        px: number;
        py: number;
      };
      underline: {
        "&:focus": {
          backgroundColor: string;
          borderColor: string;
          outline: string;
        };
        appearance: string;
        backgroundColor: string;
        border: string;
        borderBottomColor: string;
        borderBottomStyle: string;
        borderBottomWidth: string;
        borderRadius: string;
        color: string;
        fontSize: string;
        lineHeight: string;
        px: number;
        py: number;
      };
    };
    letterSpacings: {
      normal: string;
      tight: string;
      tighter: string;
      wide: string;
      wider: string;
      widest: string;
    };
    lineHeights: {
      body: string;
      heading: string;
      loose: string;
      none: string;
      normal: string;
      relaxed: string;
      snug: string;
      tight: string;
    };
    radii: {
      default: string;
      full: string;
      lg: string;
      none: string;
      sm: string;
    };
    shadows: {
      "2xl": string;
      default: string;
      inner: string;
      lg: string;
      md: string;
      none: string;
      outline: string;
      xl: string;
    };
    sizes: {
      "0": string;
      "1": string;
      "1/12": string;
      "1/2": string;
      "1/3": string;
      "1/4": string;
      "1/5": string;
      "1/6": string;
      "10": string;
      "10/12": string;
      "11/12": string;
      "12": string;
      "16": string;
      "2": string;
      "2/12": string;
      "2/3": string;
      "2/4": string;
      "2/5": string;
      "2/6": string;
      "20": string;
      "24": string;
      "2xl": string;
      "3": string;
      "3/12": string;
      "3/4": string;
      "3/5": string;
      "3/6": string;
      "32": string;
      "3xl": string;
      "4": string;
      "4/12": string;
      "4/5": string;
      "4/6": string;
      "40": string;
      "48": string;
      "4xl": string;
      "5": string;
      "5/12": string;
      "5/6": string;
      "56": string;
      "5xl": string;
      "6": string;
      "6/12": string;
      "64": string;
      "6xl": string;
      "7/12": string;
      "8": string;
      "8/12": string;
      "9/12": string;
      full: string;
      lg: string;
      md: string;
      px: string;
      screenHeight: string;
      screenWidth: string;
      sm: string;
      xl: string;
      xs: string;
    };
    space: number[];
    styles: {
      a: {
        ":hover": {
          textDecoration: string;
        };
        color: string;
        textDecoration: string;
      };
      code: Record<string, unknown>;
      h1: {
        fontFamily: string;
        fontSize: number;
        fontWeight: string;
        lineHeight: string;
        m: number;
        mb: number;
        mt: number;
      };
      h2: {
        fontFamily: string;
        fontSize: number;
        fontWeight: string;
        lineHeight: string;
        m: number;
        mb: number;
        mt: number;
      };
      h3: {
        fontFamily: string;
        fontSize: number;
        fontWeight: string;
        lineHeight: string;
        m: number;
        mb: number;
        mt: number;
      };
      h4: {
        fontFamily: string;
        fontSize: number;
        fontWeight: string;
        lineHeight: string;
        m: number;
        mb: number;
      };
      h5: {
        fontFamily: string;
        fontSize: number;
        fontWeight: string;
        lineHeight: string;
        m: number;
        mb: number;
      };
      h6: {
        fontFamily: string;
        fontSize: number;
        fontWeight: string;
        lineHeight: string;
        m: number;
        mb: number;
      };
      hr: {
        bg: string;
        border: number;
        height: string;
        m: number;
      };
      pre: Record<string, unknown>;
      root: {
        fontFamily: string;
        fontWeight: string;
        lineHeight: string;
      };
    };
    zIndices: {
      "0": string;
      "10": string;
      "20": string;
      "30": string;
      "40": string;
      "50": string;
      auto: string;
    };
  };
  tosh: {
    colors: {
      accent: string;
      background: string;
      gray: string;
      highlight: string;
      modes: {
        dark: {
          accent: string;
          background: string;
          gray: string;
          highlight: string;
          muted: string;
          primary: string;
          secondary: string;
          text: string;
        };
      };
      muted: string;
      primary: string;
      secondary: string;
      text: string;
    };
    fontSizes: number[];
    fontWeights: {
      body: number;
      display: number;
      heading: number;
    };
    fonts: {
      body: string;
      heading: string;
      monospace: string;
    };
    initialColorMode: string;
    lineHeights: {
      body: number;
      heading: number;
    };
    styles: {
      Container: {
        maxWidth: number;
        p: number;
      };
      a: {
        "&:hover": {
          color: string;
        };
        color: string;
      };
      code: {
        fontFamily: string;
        fontSize: number;
      };
      h1: {
        variant: string;
      };
      h2: {
        fontSize: number;
        variant: string;
      };
      h3: {
        fontSize: number;
        variant: string;
      };
      h4: {
        fontSize: number;
        variant: string;
      };
      h5: {
        fontSize: number;
        variant: string;
      };
      h6: {
        fontSize: number;
        variant: string;
      };
      hr: {
        border: number;
        borderBottom: string;
        borderColor: string;
      };
      inlineCode: {
        bg: string;
        color: string;
        fontFamily: string;
        px: number;
      };
      p: {
        fontSize: number;
      };
      pre: {
        bg: string;
        borderBottomWidth: number;
        borderColor: string;
        borderLeftWidth: number;
        borderRightWidth: number;
        borderStyle: string;
        borderTopWidth: number;
        code: {
          color: string;
        };
        color: string;
        fontFamily: string;
        fontSize: number;
        overflow: string;
        p: number;
      };
      root: {
        fontFamily: string;
        fontWeight: string;
        lineHeight: string;
      };
      table: {
        borderCollapse: string;
        borderSpacing: number;
        my: number;
        "th,td": {
          borderBottomStyle: string;
          borderColor: string;
          pl: number;
          pr: string;
          py: string;
          textAlign: string;
        };
        width: string;
      };
      td: {
        borderBottomWidth: number;
        verticalAlign: string;
      };
      th: {
        backgroundColor: string;
        borderBottomWidth: number;
        verticalAlign: string;
      };
      ul: {
        listStyleType: string;
      };
    };
    textStyles: {
      display: {
        fontSize: number[];
        fontWeight: string;
        letterSpacing: string;
        mt: number;
        variant: string;
      };
      heading: {
        fontFamily: string;
        fontWeight: string;
        lineHeight: string;
      };
    };
    useCustomProperties: boolean;
  };
};
