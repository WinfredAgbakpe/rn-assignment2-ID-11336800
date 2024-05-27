import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>My name is <Text style={styles.bold}>Agbakpe Winfred "ID"11336800"</Text></Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#43f3c2',
    alignItems: 'center',
    justifyContent: 'center',
  },
text: {
  fontSize: 24,
},
bold: {
  fontWeight: 'bold',
},
});