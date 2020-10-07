export default {
  useColorSchemeMediaQuery: true,
  colors: {
    text: "#000",
    background: "#fff",
    primary: "#639",
    secondary: "#ff6347",
    cardBackground: "#F7FAFC",
    cardBorder: "#E2E8F0",
    modes: {
      dark: {
        text: "#fff",
        textRreverse: "#000",
        background: "#000000",
        cardBackground: "#101010",
        cardBorder: "#1A202C",
      }
    }
  },
  fonts: {
    body: "system-ui, sans-serif",
    heading: "system-ui, sans-serif",
    monospace: "Menlo, monospace",
  },
  fontWeights: {
    body: 400,
    heading: 700,
    bold: 700,
  },
  lineHeights: {
    body: 1.5,
    heading: 1.125,
  },
  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64, 72],
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
  buttons: {
    selectTheme: {
      color: 'white',
      bg: '#333',
      '&:hover': {
        bg: '#333',
      }
    }
  }
}