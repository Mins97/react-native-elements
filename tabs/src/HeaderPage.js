import React from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import { Header } from 'react-native/Libraries/NewAppScreen';
export default function HeaderPage() {
  return (
    <View style={styles.container}>
      <Header />
      <Text>HeaderPage</Text>
      <StatusBar style="auto" />
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
