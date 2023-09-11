import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Screen from './src/Screen';
import Keyboard from './src/keyboard';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Screen></Screen>
      <Keyboard></Keyboard>
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
