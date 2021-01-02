import React from 'react';
import { Provider as PaperProvider } from 'react-native-paper';

import Navigation from './component/shared/Navigation'

export default function App() {
  return (
    <PaperProvider>
      <Navigation />
    </PaperProvider>
  );
}