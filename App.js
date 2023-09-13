import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, useState } from 'react-native';
import Main from './src/Main'

export default function App() {

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Main></Main>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'wheat',
    alignItems: 'center',
    justifyContent: 'center',
  },
});