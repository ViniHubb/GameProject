import React, { useState } from "react"
import { View, Text, Button, Image, Pressable, ImageBackground } from "react-native"
import styles from "./styles"

export default function Keyboard(props) {

  const botoes = "C:/Users/Vinicius/Documents/Projects/GameProject/src/Images/numeros/"

  const colors = ["black", "red", "green"]
  const [num, setNum] = useState([1,1,1,1,1,1,1,1,1,1,1,2])

  const [cores, setCores] = useState([
    ["white", "blue", "red", "green", "yellow", "saddlebrown", "slategray", "indigo", "magenta", "aqua", "darkslategrey", "black"],
    ["white", "blue", "red", "green", "yellow", "saddlebrown", "slategray", "indigo", "magenta", "aqua", "darkslategrey", "black"]
  ])

  function press(number) {
    setNum(prevNum => {
      prevNum[number] = 0
      return prevNum
    })
  }

  function desPress(number) {
    setNum(prevNum => {
      if (number) {
        //prevCores[0][props.tenta[props.tenta.length - 1]] = prevCores[1][props.tenta[props.tenta.length - 1]]
        prevNum[props.tenta[props.tenta.length - 1]] = 1
      } else {
        for (let i = 0; i < 10; i++) {
          prevNum[i] = 1
        }
      }
      return prevNum
    })
  }

  return (
    <View style={styles.boxButtons}>
      <View style={styles.line}>
        <View style={[styles.buttons, { backgroundColor: colors[num[0]] }]}>
          <Pressable       // 0
            onPress={() => {
              props.bota(0)
              press(0)
            }}
            disabled={props.ver(0)}
            style={[styles.testes]}
          ></Pressable>
        </View>
        <View style={[styles.buttons, { backgroundColor: colors[num[1]] }]}>
          <Pressable       // 1
            onPress={() => {
              props.bota(1)
              press(1)
            }}
            disabled={props.ver(1)}
            style={[styles.testes]}
          ></Pressable>
        </View>
        <View style={[styles.buttons, { backgroundColor: colors[num[2]] }]}>
          <Pressable       // 2
            onPress={() => {
              props.bota(2)
              press(2)
            }}
            disabled={props.ver(2)}
            style={[styles.testes]}
          ></Pressable>
        </View>
      </View>
      <View style={styles.line}>
        <View style={[styles.buttons, { backgroundColor: colors[num[3]] }]}>
          <Pressable       // 2
            onPress={() => {
              props.bota(3)
              press(3)
            }}
            disabled={props.ver(3)}
            style={[styles.testes]}
          ></Pressable>
        </View>
        <View style={[styles.buttons, { backgroundColor: colors[num[4]] }]}>
          <Pressable       // 2
            onPress={() => {
              props.bota(4)
              press(4)
            }}
            disabled={props.ver(4)}
            style={[styles.testes]}
          ></Pressable>
        </View>
        <View style={[styles.buttons, { backgroundColor: colors[num[5]] }]}>
          <Pressable       // 2
            onPress={() => {
              props.bota(5)
              press(5)
            }}
            disabled={props.ver(5)}
            style={[styles.testes]}
          ></Pressable>
        </View>
      </View>
      <View style={styles.line}>
        <View style={[styles.buttons, { backgroundColor: colors[num[6]] }]}>
          <Pressable       // 2
            onPress={() => {
              props.bota(6)
              press(6)
            }}
            disabled={props.ver(6)}
            style={[styles.testes]}
          ></Pressable>
        </View>
        <View style={[styles.buttons, { backgroundColor: colors[num[7]] }]}>
          <Pressable       // 2
            onPress={() => {
              props.bota(7)
              press(7)
            }}
            disabled={props.ver(7)}
            style={[styles.testes]}
          ></Pressable>
        </View>
        <View style={[styles.buttons, { backgroundColor: colors[num[8]] }]}>
          <Pressable       // 2
            onPress={() => {
              props.bota(8)
              press(8)
            }}
            disabled={props.ver(8)}
            style={[styles.testes]}
          ></Pressable>
        </View>
      </View>
      <View style={styles.line}>
        <View style={[styles.buttons, { backgroundColor: colors[num[10]] }]}>
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
        </View>
        <View style={[styles.buttons, { backgroundColor: colors[num[9]] }]}>
          <Pressable       // 9
            onPress={() => {
              props.bota(9)
              press(9)
            }}
            disabled={props.ver(9)}
            style={[styles.testes]}
          ></Pressable>
        </View>
        <View style={[styles.buttons, { backgroundColor: colors[num[11]] }]}>
          <Pressable       // OK!
              onPress={() => {
                  props.save()
                  desPress(0)
                }}
              disabled={!props.ver(-1)}
              style={[styles.testes]}
          ></Pressable>
        </View>
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
    </View>
  )
}