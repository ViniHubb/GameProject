import React, { useEffect, useState } from "react"
import { View, Button } from "react-native"
import styles from "./styles"
import Title from "./Components/Title"
import Keyboard from "./Components/Keyboard"
import Frame from "./Components/Frame"

export default function Main({ navigation }) {

  const [palpite, setPalpite] = useState([])      // Variavel para o palpite atual
  const [holmes, setHolmes] = useState([])        // Variavel para o numero escolido pelo jogador 1 
  const [watson, setWatson] = useState([])        // Variavel para o numero escolido pelo jogador 2
  const [round, setRound] = useState(0)           // Variavel para saber de quem é a vez 0 = jogador 1 e  1 = jogador 2
  const [superHit, setSuperHit] = useState(0)   // Variavel para o numero de acertos em cheio
  const [hit, setHit] = useState(0)             // Variavel para o numero de acertos
  const [miss, setMiss] = useState(3)           // Variavel para o numero de erros
  const [nome, setNome] = useState("Escolha um valor Holmes") // Variavel para mostrar na tela de quem e a vez e mostrar quem venceu
  const [level, setLevel] = useState(2)


  function preenche(number) {        // Funcao para preencher a variavel 'palpite'
    let newPlapite = [...palpite]
    newPlapite.push(number)
    setPalpite(newPlapite)
  }

  function delet() {                 // Funcao para deletar um numero
    let newPlapite = [...palpite]
    newPlapite.pop()
    setPalpite(newPlapite)
  }

  function verifica(number) {        // Funcao para garantir que o numero so seja apertado uma vez
    let flag = false
    if (palpite.includes(number) || palpite.length >= level) {
      flag = true
    }
    return flag
  }

  async function salvar() {             // Funcao para salvar o valor escolhido e enviar os palpites
    if (round === 0) {
      setHolmes(palpite)
      setNome("Escolha um valor Watson")
    }
    else if (round === 1) {
      setWatson(palpite)
      setNome("É a vez de Holmes")
    }
    else {

      console.log("Holmes: ", holmes)
      console.log("Watson: ", watson)
      console.log("Palpite:", palpite)
      console.log("Round:", round % 2, round)

      if (round % 2) {
        setNome("É a vez de Holmes")
        tentativa(holmes)  
      } else {
        setNome("É a vez de Watson")
        tentativa(watson)  
      }
      console.log("Nome:", nome)
    }
    setPalpite([])
    setRound(round + 1)
  }

  useEffect(() => {                   // Envia para "Fedback" as informações necessarias, sem delay
    if (round > 2) { 
      navigation.navigate("Feedback", {
        superHits: superHit,
        hits: hit,
        misses: miss,
        renome: nome,
        holmesP: holmes,
        watsonP: watson
      })
    }
  },[round])

  function clear() {       // Funcao para o botao limpar 
    setHolmes([])
    setWatson([])
    setPalpite([])
    setRound(0)
    setLevel(2)
    setNome("Escolha um valor Holmes")
  }

  function tentativa(holmesORwatson) {     // Funcao para calcular a tentativa do jogador atual
    const tentativ = holmesORwatson
    let SH = 0
    let H = 0
    let M = level
    for (let i=0; i<level; i++) {
      if (tentativ.includes(palpite[i])) {
        H += 1
        M -= 1
        if (tentativ[i] === palpite[i]) {
          H -= 1
          SH += 1
        }
      }
    }
    setSuperHit(SH)
    setHit(H)
    setMiss(M)
    if (SH === level) {
      setLevel(level+1)
      if (round % 2 === 0)
        setNome("Holmes")
      else
        setNome("Watson")
    }
  }

  return (
    <View style={styles.boxMain}>
        <Frame
          valor={palpite}
          name={nome}
        />
        <Keyboard
          bota={preenche}
          ve={verifica}
          dell={delet}
          limpa={clear}
          save={salvar}
        />
    </View>
  )
}