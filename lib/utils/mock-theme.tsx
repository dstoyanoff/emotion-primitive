import { makeTheme, ThemeProvider } from "@/theme";

export const mockThemeConfig = {
  breakpoint: {
    xs: 0,
    md: 500,
  },
  spacing: 4,
  palette: {
    primary: {
      normal: "#00659e",
    },
    success: {
      normal: "#20B000",
    },
    warning: {
      normal: "#ffe607",
      dark: "#cbb700",
    },
    neutral: {
      0: "#ffffff",
      1: "#f5f5f5",
      2: "#edecf0",
      3: "#d8d7df",
      4: "#898896",
      5: "#666472",
      6: "#424149",
      7: "#27262c",
      8: "#131316",
      9: "#050505",
    },
  },
  shadow: {
    xl: "0px 48px 80px -32px rgba(55, 56, 74, 0.12), 0px 64px 132px -20px rgba(55, 56, 74, 0.08)",
  },
  radius: {
    xs: 4,
    md: 6,
    xl: 8,
    circle: "50%",
  },
  zIndex: {
    dropdown: 100,
    modal: 200,
  },
  typography: {
    default: {
      fontFamily: "Mulish",
      fontSize: 12,
      fontWeight: 400,
    },
    body: {
      1: {
        fontSize: 14,
      },
      2: {
        fontSize: 12,
      },
      3: {
        fontSize: 11,
      },
    },
    title: {
      1: {
        fontSize: 24,
        fontWeight: 700,
      },
      2: {
        fontSize: 20,
        fontWeight: 600,
      },
      3: {
        fontSize: 16,
        fontWeight: 600,
      },
      4: {
        fontSize: 14,
        fontWeight: 600,
      },
      5: {
        fontSize: 12,
        fontWeight: 600,
      },
    },
    caption: {
      fontSize: 10,
    },
  },
  customThemeProp: 1,
  border: {
    color: "neutral.3" as const,
    width: 1,
  },
};

export const mockTheme = makeTheme(mockThemeConfig);

export const wrapper: React.JSXElementConstructor<{ children: React.ReactElement }> = ({ children }) => (
  <ThemeProvider theme={mockThemeConfig}>{children}</ThemeProvider>
);
