import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider as PaperProvider, Badge } from 'react-native-paper';

export default function App() {
  return (
    <PaperProvider>
    <View style={styles.container}>
      {/* <Text>test1</Text>
      <StatusBar style="auto" /> */}
      <Badge visible>3</Badge>
    </View>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
