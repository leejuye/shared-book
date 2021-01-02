import React from 'react';
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';

import Navigation from './component/shared/Navigation'

export default function App() {
  return (
    <PaperProvider theme={theme}>
      <Navigation />
    </PaperProvider>
  );
}

const theme = {
  ...DefaultTheme,
  roundness: 2,
  colors: {
    ...DefaultTheme.colors,
    primary: '#4f3c75',
  },
};
