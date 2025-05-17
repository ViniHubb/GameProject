import React, { useEffect, useState } from "react"
import { View, SafeAreaView, StatusBar } from "react-native"
import styles from "./styles"
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
  const [level, setLevel] = useState(2)         // Variavel que indica o nivel atual
  const [pontosH, setPontosH] = useState(0)       // Variavel para os pontos do jogador 1
  const [pontosW, setPontosW] = useState(0)      // Variavel para os pontos do jogador 2

  function preenche(number) { // Funcao para preencher a variavel 'palpite'
    let newPlapite = [...palpite]
    newPlapite.push(number)
    setPalpite(newPlapite)
  }

  function delet() { // Funcao para deletar um numero
    let newPlapite = [...palpite]
    newPlapite.pop()
    setPalpite(newPlapite)
  }

  function verifica(number) { // Funcao para garantir que o numero so seja apertado uma vez
    let flag = false
    if (palpite.includes(number) || palpite.length >= level) {
      flag = true
    }
    return flag
  }

  function salvar() { // Funcao para salvar o valor escolhido e enviar os palpites
    if (round === 0) {
      setHolmes(palpite)
      setRound(round + 1)
      setNome("Watson")
    }
    else if (round === 1) {
      setWatson(palpite)
      setRound(round + 1)
      setNome("Holmes")
    }
    else {

      console.log("Holmes: ", holmes)
      console.log("Watson: ", watson)
      console.log("Palpite:", palpite)
      console.log("Round:", round)
      console.log("Level:", level)

      if (round % 2) {
        setNome("Watson")
        tentativa(holmes)  
      } else {
        setNome("Holmes")
        tentativa(watson)  
      }
    }
  }

  function clear() { // Funcao para o botao limpar 
    setHolmes([])
    setWatson([])
    setPalpite([])
    setRound(0)
    setPontosH(0)
    setPontosW(0)
    setLevel(2)
    setNome("Escolha um valor Holmes")
  }

  function tentativa(holmesORwatson) { // Funcao para calcular a tentativa do jogador atual
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
    if (SH === level && level < 5) {
      pontuacao()
      setLevel(level+1)
      setRound(0)
    } else if (level < 5){
      setRound(round + 1)
    }
  }

  function bomb() {
    pontuacao(1)
    setSuperHit(level+1)
    setHit(0)
    setMiss(0)
    setLevel(level+1)
    setRound(0)
  }

  function pontuacao(bomba=0) {
    let pontos = level*100
    if (!bomba) {
      for (let i = 0; i < round && i < 7+4*level; i++) {
        pontos -= Math.round((i*i)/(3*level))
      }
      if (round % 2 === 0) {
        setPontosH(pontosH+pontos)
        pontos = pontosH+pontos
        if (level > 3 && pontos < pontosW) {
          setNome("Watson")
        }
      } else {
        setPontosW(pontosW+pontos)
        pontos = pontosW+pontos
        if (level > 3 && pontos < pontosH) {
          setNome("Holmes")
        }
      }
    } else {
      pontos -= round*10
      if (round % 2) {
        setPontosH(pontosH+pontos)
        pontos = pontosH+pontos
        if (level > 3 && pontos < pontosW) {
          setNome("Holmes")
        }
      } else {
        setPontosW(pontosW+pontos)
        pontos = pontosW+pontos
        if (level > 3 && pontos < pontosH) {
          setNome("Watson")
        }
      }
    }
  }

  useEffect(() => { // Envia para "Fedback" as informações necessarias, sem delay
    if (round > 2 || superHit >= level-1) {
      navigation.navigate("Feedback", {
        superHits: superHit,
        hits: hit,
        misses: miss,
        renome: nome,
        holmesP: holmes,
        palpite: palpite,
        watsonP: watson,
        nivel: level,
        pontosTotaisH: pontosH,
        pontosTotaisW: pontosW
      })
      setSuperHit(0)
      if(level > 4){
        clear()
      }
    }
    setPalpite([])
  },[round])

  return (
    <SafeAreaView style={styles.boxMain}>
      <StatusBar 
        backgroundColor= "lightgray"
        barStyle= "dark-content"
        showHideTransition= "slide"
        animated={true}
        hidden={false}
        translucent={false}
      />
      <Frame
        valor={palpite}
        name={nome}
        nivel={level}
        rodada={round}
        bomba={bomb}
      />
      <Keyboard
        tenta={palpite}
        bota={preenche}
        ver={verifica}
        dell={delet}
        limpa={clear}
        save={salvar}
      />
    </SafeAreaView>
  )
}