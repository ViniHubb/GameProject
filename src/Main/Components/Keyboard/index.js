import React, { useState } from "react"
import { View, Text, Button, Image, Pressable, ImageBackground } from "react-native"
import styles from "./styles"

export default function Keyboard(props) {

  const botao = require('C:/Users/Vinicius/Documents/Projects/GameProject/src/Images/newBotaoBorda.png')
  const botaoPress = require('C:/Users/Vinicius/Documents/Projects/GameProject/src/Images/newBotao.png')
  const [botoes, setBotoes] = useState([botao,botao,botao,botao,botao,botao,botao,botao,botao,botao,botao,botao,botao])

  function press(number) {
    let newBotoes = [...botoes]
    newBotoes[number] = botaoPress
    setBotoes(newBotoes)
  }

  function desPress(number) {
    let newBotoes = [...botoes]
    if(number) {
      newBotoes[10] = botao
      newBotoes[props.tenta[props.tenta.length -1]] = botao
      setBotoes(newBotoes)
    } else {
      for(let i=0; i < 10; i++) {
        newBotoes[i] = botao
        setBotoes(newBotoes)
      }
    }
  }

  return (
    <View style={{flex:1}}>
      <ImageBackground resizeMode="stretch" source={require("C:/Users/Vinicius/Documents/Projects/GameProject/src/Images/placa4.png")}
      style={styles.boxButtons}>
        <View style={styles.line}>
          <ImageBackground resizeMode="stretch" source={botoes[0]}
                style={[styles.buttons, {backgroundColor:"white"}]}>
            <Pressable       // 0
              onPress={() => {
                props.bota(0)
                press(0)
              }}
              disabled={props.ver(0)}
              style={[styles.testes]}
            >
              {/* <Text></Text> */}
            </Pressable>
          </ImageBackground>
          <ImageBackground resizeMode="stretch" source={botoes[1]}
                style={[styles.buttons, {backgroundColor:"blue"}]}>
            <Pressable       // 1
              onPress={() => {
                props.bota(1)
                press(1)
              }}
              disabled={props.ver(1)}
              style={[styles.testes]}
            ></Pressable>
          </ImageBackground>
          <ImageBackground resizeMode="stretch" source={botoes[2]}
                style={[styles.buttons, {backgroundColor:"red"}]}>
            <Pressable       // 2
              onPress={() => {
                props.bota(2)
                press(2)
              }}
              disabled={props.ver(2)}
              style={[styles.testes]}
            ></Pressable>
          </ImageBackground>
          <ImageBackground resizeMode="stretch" source={botoes[3]}
                style={[styles.buttons, {backgroundColor:"green"}]}>
            <Pressable       // 3
              onPress={() => {
                props.bota(3)
                press(3)
              }}
              disabled={props.ver(3)}
              style={[styles.testes]}
            ></Pressable>
          </ImageBackground>
        </View>
        <View style={styles.line}>
          <ImageBackground resizeMode="stretch" source={botoes[4]}
          style={styles.buttons}>
            <Pressable       // 4
              onPress={() => {
                props.bota(4)
                press(4)
              }}
              disabled={props.ver(4)}
              style={[styles.buttons]}
            ></Pressable>
          </ImageBackground>
          <ImageBackground resizeMode="stretch" source={botoes[5]}
          style={styles.buttons}>
            <Pressable       // 5
              onPress={() => {
                props.bota(5)
                press(5)
              }}
              disabled={props.ver(5)}
              style={[styles.buttons]}
            ></Pressable>
          </ImageBackground>
          <ImageBackground resizeMode="stretch" source={botoes[6]}
          style={styles.buttons}>
            <Pressable       // 6
              onPress={() => {
                props.bota(6)
                press(6)
              }}
              disabled={props.ver(6)}
              style={[styles.buttons]}
            ></Pressable>
          </ImageBackground>
          <ImageBackground resizeMode="stretch" source={botoes[7]}
          style={styles.buttons}>
            <Pressable       // 7
              onPress={() => {
                props.bota(7)
                press(7)
              }}
              disabled={props.ver(7)}
              style={[styles.buttons]}
            ></Pressable>
          </ImageBackground>
        </View>
        <View style={styles.line}>
          <ImageBackground resizeMode="stretch" source={botoes[10]}  // botoes[10]
            style={styles.buttons}>
              <Pressable       // Delet
                onPressIn={() => {
                  press(10)
                }}
                onPressOut={() => {
                  desPress(1)
                  props.dell()
                }}
                style={[styles.testes]}
              ></Pressable>
            </ImageBackground>
          <ImageBackground resizeMode="stretch" source={botoes[8]}
          style={styles.buttons}>
            <Pressable       // 8
              onPress={() => {
                props.bota(8)
                press(8)
              }}
              disabled={props.ver(8)}
              style={[styles.buttons]}
            ></Pressable>
          </ImageBackground>
          <ImageBackground resizeMode="stretch" source={botoes[9]}
          style={styles.buttons}>
            <Pressable       // 9
              onPress={() => {
                props.bota(9)
                press(9)
              }}
              disabled={props.ver(0)}
              style={[styles.buttons]}
            ></Pressable>
          </ImageBackground>
          <ImageBackground resizeMode="stretch" source={botoes[11]}  // botoes[11]
          style={styles.buttons}>
            <Pressable       // Go!
            onPress={() => {
                props.save()
                desPress(0)
              }}
            disabled={!props.ver(-1)}
            style={[styles.buttons]}
            ></Pressable>
          </ImageBackground>
          <ImageBackground resizeMode="stretch" source={botoes[0]}  // botoes[0]
          style={styles.buttons}>
            <Pressable       // Clear
            onPress={() => {
              props.limpa()
            }}
            style={styles.buttons}
          >
          </Pressable>
          </ImageBackground>
        </View>
      </ImageBackground>
    </View>
  )
}