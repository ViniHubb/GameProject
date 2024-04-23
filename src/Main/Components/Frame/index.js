import React, { useEffect, useState } from "react";
import { View, Text, Image, ImageBackground, Button } from "react-native"
import styles from "./styles";

export default function Frame(props) {

  const [fios, setFios] = useState([])
  const [minutesH, setMinutesH] = useState(1)
  const [secondsH, setSecondsH] = useState(0)
  const [minutesW, setMinutesW] = useState(1)
  const [secondsW, setSecondsW] = useState(0)
  const [customIntervalH, setCustomIntervalH] = useState()
  const [customIntervalW, setCustomIntervalW] = useState()

  const startTimer = () => {
    if (!customIntervalW && props.rodada%2) {
      setCustomIntervalW(
        setInterval(() => {
          changeTime()
        }, 1000)
      )
    } else if(!customIntervalH) {
      setCustomIntervalH(
        setInterval(() => {
          changeTime()
        }, 1000)
      )
    }
    console.log(props.rodada%2)
  }

  const stopTimer = () => {
    if (customIntervalH) {
      clearInterval(customIntervalH)
      setCustomIntervalH()
    } if (customIntervalW) {
      clearInterval(customIntervalW)
      setCustomIntervalW()
    }
  }

  const changeTime = () => {
    if (props.rodada%2) {
      setSecondsW((prevState) => {
        if (prevState === 0) {
          if (minutesW > 0) {
            setMinutesW(minutesW - 1)
            return 59
          } else {
            return - 1
          }
        }
        return prevState - 1
      })
    } else {
      setSecondsH((prevState) => {
        if (prevState === 0) {
          if (minutesH > 0) {
            setMinutesH(minutesH - 1)
            return 59
          } else {
            return - 1
          }
        }
        return prevState - 1
      })
    }
  }

  // const clear = () => {
  //   stopTimer()
  //   setSecondsH(0)
  //   setMinutesH(1)
  //   setSecondsW(0)
  //   setMinutesW(1)
  // }

  useEffect(() => {     // Tempo acabou, bomba explodiu
    if (!secondsH && !minutesH) {
      stopTimer()
      props.bomba()
    } else if (!secondsW && !minutesW) {
      stopTimer()
      props.bomba()
    }
    console.log("H:",customIntervalH)
    console.log("W:",customIntervalW)
    console.log(props.rodada)
  }, [secondsH, secondsW])

  useEffect(() => {     // Essa função mostra se o fio esta cortado ou não
    let newFios = [...fios]
    for (let i = 0; i < 10; i++) {
      if (props.valor.includes(i)) {
        newFios[i] = require('C:/Users/Vinicius/Documents/Projects/GameProject/src/Images/fioCorte.png')
        setFios(newFios)
      } else {
        newFios[i] = require('C:/Users/Vinicius/Documents/Projects/GameProject/src/Images/fio.png')
        setFios(newFios)
      }
    }
  }, [props.valor])

  useEffect(() => {       // Função que troca os relogios
    if(props.rodada === 2){
      //startTimer()
    } else if(props.rodada > 2){
      stopTimer()
      setTimeout(() => {
        //startTimer()
      },2000)
    }
  },[props.rodada])

  useEffect(() => {
    stopTimer()
    setMinutesH(props.nivel-1)
    setSecondsH(0)
    setMinutesW(props.nivel-1)
    setSecondsW(0)
  },[props.nivel])

  return (
    <View style={styles.boxFrame} >
      <View style={styles.bombBox}>  
        <ImageBackground resizeMode="stretch" source={require('C:/Users/Vinicius/Documents/Projects/GameProject/src/Images/bomb.png')}
          style={styles.bomb}
        >
          {props.rodada%2 === 1 ?
            <Text style={styles.timer}>
            {"0" + minutesW}:
            {secondsW< 10 ? "0" + secondsW : secondsW}
            </Text>
            :
            <Text style={styles.timer}>
              {"0" + minutesH}:
              {secondsH < 10 ? "0" + secondsH : secondsH}
            </Text>
          }
        </ImageBackground>
      </View>
      <View style={styles.boxWires}>
        <Image source={fios[0]} style={[styles.wire, {backgroundColor:"white"}]} />
        <Image source={fios[1]} style={[styles.wire, {backgroundColor:"blue"}]} />
        <Image source={fios[2]} style={[styles.wire, {backgroundColor:"red"}]} />
        <Image source={fios[3]} style={[styles.wire, {backgroundColor:"green"}]} />
        <Image source={fios[4]} style={[styles.wire, {backgroundColor:"yellow"}]} />
        <Image source={fios[5]} style={[styles.wire, {backgroundColor:"brown"}]} />
        <Image source={fios[6]} style={[styles.wire, {backgroundColor:"gray"}]} />
        <Image source={fios[7]} style={[styles.wire, {backgroundColor:"purple"}]} />
        <Image source={fios[8]} style={[styles.wire, {backgroundColor:"violet"}]} />
        <Image source={fios[9]} style={[styles.wire, {backgroundColor:"aqua"}]} />
      </View>
      {/* <Button
        title="Descontar"
        onPress={() => {
          stopTimer()
          clear()
        }}
      /> */}
    </View>
  )
}
