import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Image } from 'react-native-web';
import MeuComponente from './Componentes/MeuComponente';

export default function App() {
  return (
    <View style={styles.container}>
    <SafeAreaView>
      <MeuComponente></MeuComponente>
    <Texto> alertei meu jogo</Texto>
    <Texto> hello</Texto>
    <Image
    source={require('./assets/favicon.png',)}/>
    </SafeAreaView>
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
