import React, { useEffect, useState } from "react"
import { View, Text, TouchableOpacity, Button, Image } from "react-native"
import styles from "./styles"

export default function Keyboard(props) {

  const [botao, setBotao] = useState(require('C:/Users/Vinicius/Documents/Projects/GameProject/src/Images/sombra.png'))

  function verifica(number) {        // Funcao para garantir que o numero so seja apertado uma vez
    if (props.tenta.includes(number)) {
      return require('C:/Users/Vinicius/Documents/Projects/GameProject/src/Images/sombraPress.png')
    }
    return require('C:/Users/Vinicius/Documents/Projects/GameProject/src/Images/sombra.png')
  }

  return (
    <View style={styles.boxButtons}>
      <View style={styles.line}>
      <TouchableOpacity       // 0
          onPress={() => {
            props.bota(0)
          }}
          disabled={props.ver(0)}
          style={[styles.testes]}
          activeOpacity={1}
        >
          <Image resizeMode="stretch" source={require('C:/Users/Vinicius/Documents/Projects/GameProject/src/Images/sombra.png')}
          style={{width:30, height: 20, backgroundColor: "white"}}/>
        </TouchableOpacity>
        <TouchableOpacity       // 1
          onPress={() => {
            props.bota(1)
          }}
          activeOpacity={1}
          disabled={props.ver(1)}
          style={[styles.testes]}       
        >
          <Image resizeMode="stretch" source={require('C:/Users/Vinicius/Documents/Projects/GameProject/src/Images/sombraPress.png')} 
          style={{width:30, height: 20, backgroundColor: "blue"}}/>
        </TouchableOpacity>
        <TouchableOpacity       // 2
          onPress={() => {
            props.bota(2)
          }}
          disabled={props.ver(2)}
          style={[styles.testes]}     
        >
          <Image resizeMode="stretch" source={require('C:/Users/Vinicius/Documents/Projects/GameProject/src/Images/sombra2.png')} 
            style={{width:30, height: 25, backgroundColor: "red"}}/>
        </TouchableOpacity>
        <TouchableOpacity     // 3
          onPress={() => {
            props.bota(3)
          }}
          disabled={props.ver(3)}
          style={[styles.testes]}        
        >
          <Image resizeMode="stretch" source={require('C:/Users/Vinicius/Documents/Projects/GameProject/src/Images/sombraPress2.png')} 
            style={{width:30, height: 25, backgroundColor: "green"}}/>
        </TouchableOpacity>
      </View>
      <View style={styles.line}>
        <TouchableOpacity       // 4
          onPress={() => {
            props.bota(4)
          }}
          disabled={props.ver(4)}
          style={[styles.testes]}
        >
          <Image resizeMode="stretch" source={botao} 
            style={{width:30, height: 25, backgroundColor: "yellow"}}/>
          </TouchableOpacity>
        <TouchableOpacity       // 5
          onPress={() => {
            props.bota(5)
            verifica(5)
          }}
          disabled={props.ver(5)}
          style={[styles.testes]}        
        >
          <Image resizeMode="stretch" source={botao} 
            style={{width:30, height: 25, backgroundColor: "brown"}}/>
        </TouchableOpacity>
        <TouchableOpacity       // 6
          onPress={() => {
            props.bota(6)
          }}
          disabled={props.ver(6)}
          style={[styles.testes]}      
        >
          <Image resizeMode="stretch" source={botao} 
            style={{width:30, height: 20, backgroundColor: "gray"}}/>
        </TouchableOpacity>
        <TouchableOpacity       // 7
          onPress={() => {
            props.bota(7)
          }}
          disabled={props.ver(7)}
          style={[styles.testes]}
        >
          <Image resizeMode="stretch" source={botao} 
            style={{width:30, height: 20, backgroundColor: "purple"}}/>
        </TouchableOpacity>
      </View>
      <View style={styles.line}>
        <TouchableOpacity       // Delet
          onPress={() => {
            props.dell()
          }}
          style={[styles.testes]}
        >
          <Image resizeMode="stretch" source={botao} 
            style={{width:30, height: 20, backgroundColor: "darkslategrey"}}/>
        </TouchableOpacity>
        <TouchableOpacity       // 8
          onPress={() => {
            props.bota(8)
          }}
          disabled={props.ver(8)}
          style={[styles.testes]}
        >
          <Image resizeMode="stretch" source={botao} 
            style={{width:30, height: 20, backgroundColor: "violet"}}/>
        </TouchableOpacity>
        <TouchableOpacity       // 9
          onPress={() => {
            props.bota(9)
          }}
          disabled={props.ver(9)}
          style={[styles.testes]}
        >
          <Image resizeMode="stretch" source={botao} 
            style={{width:30, height: 20, backgroundColor: "aqua"}}/>
        </TouchableOpacity>
        <TouchableOpacity       // Go!
          onPress={() => {
              props.save()
            }}
          disabled={!props.ver(-1)}
          style={[styles.testes]}
        >
          <Image resizeMode="stretch" source={botao} 
            style={{width:30, height: 20, backgroundColor: "lightgreen"}}/>
        </TouchableOpacity>
      </View>
      <View style={styles.line}>
        <TouchableOpacity       // Clear
          onPress={() => {
            props.limpa()
          }}
          style={styles.buttons}
        >
          <Image resizeMode="stretch" source={botao} 
            style={{width:50, height: 20, backgroundColor: "white"}}/>
        </TouchableOpacity>
      </View>
    </View>
  )
}