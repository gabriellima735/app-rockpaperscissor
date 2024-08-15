import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Button, Image } from 'react-native';

const rock = require('./signs/rock.png')
const paper = require('./signs/paper.png')
const scissors = require('./signs/scissors.png')

const bgColors = ['#1abc9c', '#3498db', '#9b59b6'] 

const randomImg = () => {
  const emonjis = [rock, paper, scissors]
  const random = Math.floor(Math.random() * 3);
  return emonjis[random];
}

const PlayScreen = () => {

  const [counter, setCounter] = useState(3)
  useEffect(
    () => {
      console.log(counter)

      if(counter < 1)return;

      const timer = setTimeout(()=>{
        setCounter(prv => prv - 1)
      }, 500)
      return () => {
        clearTimeout(timer)
      }
    }, [counter]
  )
  return(
    <View 
      style={StyleSheet.compose({
        backgroundColor: bgColors[counter-1]}, 
        styles.container
      )} 
    >
      {(counter < 1) ? (
        <>
          <Image style={styles.sign} source={randomImg()}></Image>
          <View style={styles.button}>
            <Button onPress={() => setCounter(3)} title="Começar"/>
          </View>
        </>
      ) : <Text style={styles.counter}>{counter}</Text> }
      
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  counter: {
    fontSize: 120,
    color: 'white',
  },
  sign:{
    width: 300,
    height: 300,
  },
  button: {
    width: 250,
    position: 'absolute',
    bottom: 40,
  }
});

export default PlayScreen;

