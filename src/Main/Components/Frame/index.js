import React, { useEffect, useState } from "react";
import { View, Text, Image, ImageBackground, Button } from "react-native"
import styles from "./styles";

export default function Frame(props) {

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

  // const clear = () => {  //Limpa o palpite
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

  useEffect(() => { // Função que troca os relogios
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
      <ImageBackground resizeMode="stretch" source={require('C:/Users/Vinicius/Documents/Projects/GameProject/src/Images/bomba.png')}
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
