import React, { useState } from "react"
import { View, Button } from "react-native"
import styles from "./styles"
import Screen from "../Screen"

export default function Keyboard(){
  const [palpite, setPalpite] = useState([])
  const [holmes, setHolmes] = useState([])
  const [watson, setWatson] = useState([])
  const [round, setRound] = useState(0)
  const [superHitH, setSuperHitH] = useState(0)
  const [hitH, setHitH] = useState(0)
  const [missH, setMissH] = useState(3)
  const [venceu, setVenceu] = useState(0)

  function preenche(number){
    let newPlapite = [...palpite]
    newPlapite.push(number)
    setPalpite(newPlapite)
  }

  function delet(){
    let newPlapite = [...palpite]
    newPlapite.pop()
    setPalpite(newPlapite)
  }

  function verifica(number){
    let flag = false
    if(palpite.includes(number) || palpite.length >= 3){
      flag = true
    }
    return flag
  }

  function salvar(flag){
    if(flag === 0){
      setHolmes(palpite)
    }
    if(flag === 1){
      setWatson(palpite)
    }
    else{
      console.log("Holmes: ",holmes)
      console.log("Watson: ",watson)
      console.log("Palpite:",palpite)
      console.log("Round:",  round%2)
      if(flag%2){
        tentativaWatson()
      }else{
        tentativaHolmes()
      }
    }
    setPalpite([])
  }

  function tentativaHolmes(){
    let SH=0
    let H=0
    let M=3
    if(holmes.includes(palpite[0])){
      H = 1
      M -= 1
      if(holmes[0] === palpite[0]){
        H -= 1
        SH = 1
      }
    }
    if(holmes.includes(palpite[1])){
      H += 1
      M -= 1
      if(holmes[1] === palpite[1]){
        H -= 1
        SH += 1
      }
    }
    if(holmes.includes(palpite[2])){
      H += 1
      M -= 1
      if(holmes[2] === palpite[2]){
        H -= 1
        SH += 1
      }
    }
    setSuperHitH(SH)
    setHitH(H)
    setMissH(M)
    if(SH === 3){
      setVenceu(1)
    }
  }

  function tentativaWatson(){
    let SH=0
    let H=0
    let M=3
    if(watson.includes(palpite[0])){
      H = 1
      M -= 1
      if(watson[0] === palpite[0]){
        H -= 1
        SH = 1
      }
    }
    if(watson.includes(palpite[1])){
      H += 1
      M -= 1
      if(watson[1] === palpite[1]){
        H -= 1
        SH += 1
      }
    }
    if(watson.includes(palpite[2])){
      H += 1
      M -= 1
      if(watson[2] === palpite[2]){
        H -= 1
        SH += 1
      }
    }
    setSuperHitH(SH)
    setHitH(H)
    setMissH(M)
    if(SH === 3){
      setVenceu(2)
    }
  }

  return(
    <View>
      <View style={styles.boxScreen}>
        <Screen valor={palpite} superHit={superHitH} hit={hitH} miss={missH} venceu={venceu}></Screen>
      </View>
      <View style={styles.boxButtons}>
        <View style={styles.line}>
            <Button       // 1
            title="Clcik 1"
            onPress={() =>{
            preenche(1)
            }}
            disabled={verifica(1)}
            />
            <Button       // 2
            title="Clcik 2"
            onPress={() =>{
            preenche(2)
            }}
            disabled={verifica(2)}
            />
            <Button       // 3
            title="Clcik 3"
            onPress={() =>{
            preenche(3)
            }}
            disabled={verifica(3)}
            />
        </View>
        <View style={styles.line}>
            <Button       // 4
            title="Clcik 4"
            onPress={() =>{
            preenche(4)
            }}
            disabled={verifica(4)}
            />
            <Button       // 5
            title="Clcik 5"
            onPress={() =>{
            preenche(5)
            }}
            disabled={verifica(5)}
            />
            <Button       // 6
            title="Clcik 6"
            onPress={() =>{
            preenche(6)
            }}
            disabled={verifica(6)}
            />
        </View>
        <View style={styles.line}>
            <Button       // 7
            title="Clcik 7"
            onPress={() => {
            preenche(7)
            }}
            disabled={verifica(7)}
            />
            <Button       // 8
            title="Clcik 8"
            onPress={() => {
            preenche(8)
            }}
            disabled={verifica(8)}
            />
            <Button       // 9
            title="Clcik 9"
            onPress={() => {
            preenche(9)
            }}
            disabled={verifica(9)}
            />
        </View>
        <View style={styles.line}>
            <Button       // Delet
            title="Clcik Del"
            onPress={() => {
            delet()
            }}
            />
            <Button       // Delet
            title="CLear"
            onPress={() => {
            setHolmes([])
            setWatson([])
            setPalpite([])
            setRound(0)
            setVenceu(0)
            }}
            />
            <Button       // Go!
            title="Clcik Go"
            onPress={() => {
            salvar(round)
            setRound(round+1)
            }}
            disabled={!verifica(-1)}
            />
        </View>
      </View>  
    </View>
  )
}