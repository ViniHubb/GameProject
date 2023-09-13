import React, { useState } from "react"
import { View } from "react-native"
import styles from "./styles"
import Screen from "./Components/Screen"
import Title from "./Components/Title"
import Keyboard from "./Components/Keyboard"

export default function Main(){
  const [palpite, setPalpite] = useState([])      // Variavel para o palpite atual
  const [holmes, setHolmes] = useState([])        // Variavel para o numero escolido pelo jogador 1 
  const [watson, setWatson] = useState([])        // Variavel para o numero escolido pelo jogador 2
  const [round, setRound] = useState(0)           // Variavel para saber de quem é a vez 0 = jogador 1 e  1 = jogador 2
  const [superHit, setSuperHit] = useState(0)   // Variavel para o numero de acertos em cheio
  const [hit, setHit] = useState(0)             // Variavel para o numero de acertos
  const [miss, setMiss] = useState(3)           // Variavel para o numero de erros
  const [nome, setNome] = useState("Escolha um valor Holmes") // Variavel para mostrar na tela de quem e a vez e mostrar quem venceu

  function preenche(number){        // Funcao para preencher a variavel 'palpite'
    let newPlapite = [...palpite]
    newPlapite.push(number)
    setPalpite(newPlapite)
  }

  function delet(){                 // Funcao para deletar um numero
    let newPlapite = [...palpite]
    newPlapite.pop()
    setPalpite(newPlapite)
  }

  function verifica(number){        // Funcao para garantir que o numero so seja apertado uma vez
    let flag = false
    if(palpite.includes(number) || palpite.length >= 3){
      flag = true
    }
    return flag
  }

  function salvar(flag){            // Funcao para salvar o valor escolhido e enviar os palpites
    if(flag === 0){
      setHolmes(palpite)
      setNome("Escolha um valor Watson")
    }
    else if(flag === 1){
      setWatson(palpite)
      setNome("É a vez de Holmes")
    }
    else{
      console.log("Holmes: ",holmes)
      console.log("Watson: ",watson)
      console.log("Palpite:",palpite)
      console.log("Round:",  round%2)
      if(flag%2){
        setNome("É a vez de Holmes")
        tentativa(watson)  // A variavel do outro jogador deve ser analisada, nao a de quem e a vez
      }else{
        setNome("É a vez de Watson")
        tentativa(holmes)  // A variavel do outro jogador deve ser analisada, nao a de quem e a vez
      }
    }
    setPalpite([])
  }

  function go(){        // Funcap para o botao enviar
    salvar(round)
    setRound(round + 1)
  }
  
  function clear(){    // Funcao para o botao limpar 
    setHolmes([])
    setWatson([])
    setPalpite([])
    setRound(0)
    setNome("Escolha um valor Holmes")
  }

  function tentativa(holmesORwatson){     // Funcao para calcular a tentativa do jogador atual
    const tentativ = holmesORwatson
    let SH=0
    let H=0
    let M=3
    if(tentativ.includes(palpite[0])){
      H = 1
      M -= 1
      if(tentativ[0] === palpite[0]){
        H -= 1
        SH = 1
      }
    }
    if(tentativ.includes(palpite[1])){
      H += 1
      M -= 1
      if(tentativ[1] === palpite[1]){
        H -= 1
        SH += 1
      }
    }
    if(tentativ.includes(palpite[2])){
      H += 1
      M -= 1
      if(tentativ[2] === palpite[2]){
        H -= 1
        SH += 1
      }
    }
    setSuperHit(SH)
    setHit(H)
    setMiss(M)
    if(SH === 3){
      if(round%2 === 0)
        setNome("Holmes")
      else
        setNome("Watson")
    }
  }

  return(
    <View style={styles.boxMain}>
      <View style={styles.boxScreen}>
        <Title nome={nome}></Title>
      </View>
      <View style={styles.boxScreen}>
        <Screen 
          valor={palpite} 
          superHit={superHit} 
          hit={hit} 
          miss={miss} 
          name={nome}
        />    
      </View>
      <Keyboard
        bota={preenche} 
        ve={verifica} 
        dell={delet}
        limpa={clear}
        save={go}
      />
    </View>
  )
}