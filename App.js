import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import PlayScreen from './src/PlaySreen';
import { useState } from 'react';

export default function App() {
  const [play, setPlay] = useState(false)
  return (
    <>
      {play ? (
        <PlayScreen/>
      ) : (
        <View style={styles.container}>
          <Text style={styles.header}>Pedra Papel ou Tesoura</Text>
          <Text style={styles.emonjis}>✊✋✌️</Text>
          <View  style={styles.button}>
            <Button onPress={() => setPlay(true)} title="Jogar"/>
          </View>
        </View>
      ) }
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header:{
    fontSize: 30,
    marginBottom: 10,
  },
  emonjis:{
    fontSize: 60,
  },
  button:{
    marginTop: 30,
    width: 250,
  }

});
