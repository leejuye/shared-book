import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Freind() {
  return (
    <View style={styles.container}>
      <Text>Friend</Text>
    </View>
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
