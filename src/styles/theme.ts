import { createTheme } from '@mineral/core';
// import gotham_medium_webfont from '../fonts/gotham_medium_webfont.woff';
import '../index.css';
declare module '@mui/material/styles' {
  interface Theme {
    accent: {
      gray10: string;
      gray20: string;
      gray30: string;
      gray40: string;
      red10: string;
      red20: string;
      blue10: string;
      blue20: string;
      black10: string;
      black20: string;
      white10: string;
      gray5: string;
      lightgray10: string;
    };
  }
  interface ThemeOptions {
    accent: {
      gray10?: string;
      gray20?: string;
      gray30?: string;
      gray40?: string;
      red10?: string;
      red20?: string;
      blue10?: string;
      blue20?: string;
      black10?: string;
      black20?: string;
      white10?: string;
      gray5?: string;
      lightgray10?: string;
    };
  }
}

export const theme = createTheme({
  palette: {
    primary: {
      main: '#fff',
      light: '#cc092f',
      dark: '#000',
    },
    secondary: {
      main: '#cc092f',
      light: '#cc092f',
      dark: '#cc092f',
    },
  },
  typography: {
    // allVariants: {
    //   fontFamily: 'gotham_book_webfont',
    // },
    fontSize: 16,
    fontFamily: 'gotham_book_webfont,gotham_medium_webfont,gotham_book_webfont',
    h1: {
      fontFamily: 'gotham_book_webfont',
    },
    h2: {
      fontFamily: 'gotham_bold_webfont',
    },
    body1: {
      fontFamily: 'gotham_book_webfont',
    },
    body2: {
      fontFamily: 'gotham_book_webfont',
    },

    //fontFamily: 'sans-serif',
  },

  accent: {
    gray10: 'rgba(226,227,228,.35)',
    gray20: '#e2e3e4',
    gray30: '#d9dbdc',
    gray40: 'rgb(151, 153, 155)',
    red10: '#79242f',
    blue10: '#0098c7',
    blue20: '#1E90FF',
    black10: 'rgba(208,210,211,.4)',
    black20: 'rgba(238,238,238,.1)',
    white10: '#eee',
    gray5: 'solid 2px rgba(255,255,255,.1)',
    lightgray10: '#97999b',
    red20: '#a6192e',
  },

  components: {
    MuiToolbar: {
      styleOverrides: {
        dense: {
          minHeight: '40px',
          height: '40px',
        },
      },
    },
  },
});
