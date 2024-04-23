import React, { useState } from "react"
import { View, Text, Button, Image, Pressable, ImageBackground } from "react-native"
import styles from "./styles"

export default function Keyboard(props) {

  const botoes = "C:/Users/Vinicius/Documents/Projects/GameProject/src/Images/numeros/"

  const [cores, setCores] = useState([
    ["white", "blue", "red", "green", "yellow", "saddlebrown", "slategray", "indigo", "magenta", "aqua", "darkslategrey", "black"],
    ["white", "blue", "red", "green", "yellow", "saddlebrown", "slategray", "indigo", "magenta", "aqua", "darkslategrey", "black"]
  ])

  function press(number) {
    setCores(prevCores => {
      prevCores[0][number] = "black"
      return prevCores
    })
  }

  function desPress(number) {
    setCores(prevCores => {  
      if(number) {
        prevCores[0][props.tenta[props.tenta.length -1]] = prevCores[1][props.tenta[props.tenta.length -1]]
        prevCores[0][10] = "darkslategrey"
        prevCores[0][11] = "black"
      } else {
        for(let i=0; i < 10; i++) {
          prevCores[0][i] = prevCores[1][i]
        }
      }
      return prevCores
    })
  }

  return (
    <View style={{flex:1}}>
      <ImageBackground resizeMode="stretch" source={require("C:/Users/Vinicius/Documents/Projects/GameProject/src/Images/placa4.png")}
      style={styles.boxButtons}>
        <View style={styles.line}>
          <ImageBackground resizeMode="stretch" source={require(botoes+"0.png")}
                style={[styles.buttons, {backgroundColor:cores[0][0]}]}>
            <Pressable       // 0
              onPress={() => {
                props.bota(0)
                press(0)
              }}
              disabled={props.ver(0)}
              style={[styles.testes]}
            ></Pressable>
          </ImageBackground>
          <ImageBackground resizeMode="stretch" source={require(botoes+"1.png")}
                style={[styles.buttons, {backgroundColor:cores[0][1]}]}>
            <Pressable       // 1
              onPress={() => {
                props.bota(1)
                press(1)
              }}
              disabled={props.ver(1)}
              style={[styles.testes]}
            ></Pressable>
          </ImageBackground>
          <ImageBackground resizeMode="stretch" source={require(botoes+"2.png")}
                style={[styles.buttons, {backgroundColor:cores[0][2]}]}>
            <Pressable       // 2
              onPress={() => {
                props.bota(2)
                press(2)
              }}
              disabled={props.ver(2)}
              style={[styles.testes]}
            ></Pressable>
          </ImageBackground>
          <ImageBackground resizeMode="stretch" source={require(botoes+"3.png")}
                style={[styles.buttons, {backgroundColor:cores[0][3]}]}>
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
          <ImageBackground resizeMode="stretch" source={require(botoes+"4.png")}
          style={[styles.buttons, {backgroundColor:cores[0][4]}]}>
            <Pressable       // 4
              onPress={() => {
                props.bota(4)
                press(4)
              }}
              disabled={props.ver(4)}
              style={[styles.testes]}
            ></Pressable>
          </ImageBackground>
          <ImageBackground resizeMode="stretch" source={require(botoes+"5.png")}
          style={[styles.buttons, {backgroundColor:cores[0][5]}]}>
            <Pressable       // 5
              onPress={() => {
                props.bota(5)
                press(5)
              }}
              disabled={props.ver(5)}
              style={[styles.testes]}
            ></Pressable>
          </ImageBackground>
          <ImageBackground resizeMode="stretch" source={require(botoes+"6.png")}
          style={[styles.buttons, {backgroundColor:cores[0][6]}]}>
            <Pressable       // 6
              onPress={() => {
                props.bota(6)
                press(6)
              }}
              disabled={props.ver(6)}
              style={[styles.testes]}
            ></Pressable>
          </ImageBackground>
          <ImageBackground resizeMode="stretch" source={require(botoes+"7.png")}
            style={[styles.buttons, {backgroundColor:cores[0][7]}]}>
            <Pressable       // 7
              onPress={() => {
                props.bota(7)
                press(7)
              }}
              disabled={props.ver(7)}
              style={[styles.testes]}
            ></Pressable>
          </ImageBackground>
        </View>
        <View style={styles.line}>
          <ImageBackground resizeMode="stretch" source={require(botoes+"10.png")}  // botoes[10]
            style={[styles.buttons, {backgroundColor:cores[0][10]}]}>
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
          <ImageBackground resizeMode="stretch" source={require(botoes+"8.png")}
            style={[styles.buttons, {backgroundColor:cores[0][8]}]}>
            <Pressable       // 8
              onPress={() => {
                props.bota(8)
                press(8)
              }}
              disabled={props.ver(8)}
              style={[styles.testes]}
            ></Pressable>
          </ImageBackground>
          <ImageBackground resizeMode="stretch" source={require(botoes+"9.png")}
            style={[styles.buttons, {backgroundColor:cores[0][9]}]}>
            <Pressable       // 9
              onPress={() => {
                props.bota(9)
                press(9)
              }}
              disabled={props.ver(9)}
              style={[styles.testes]}
            ></Pressable>
          </ImageBackground>
          <ImageBackground resizeMode="stretch" source={require(botoes+"11.png")}  // botoes[11]
          style={[styles.buttons,  {backgroundColor:cores[0][11]}]}>
            <Pressable       // Go!
              onPress={() => {
                  props.save()
                  desPress(0)
                }}
              disabled={!props.ver(-1)}
              style={[styles.testes]}
            ></Pressable>
          </ImageBackground>
          {/* <ImageBackground resizeMode="stretch" source={require(botoes+"0.png")}  // botoes[0]
          style={styles.buttons}>
            <Pressable       // Clear
            onPress={() => {
              props.limpa()
            }}
            style={styles.testes}
          >
          </Pressable>
          </ImageBackground> */}
        </View>
      </ImageBackground>
    </View>
  )
}