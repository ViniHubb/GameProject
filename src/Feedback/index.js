import React, { useEffect, useState, useRef } from "react"
import { View, Text, Button, ImageBackground } from "react-native"
import styles from "./styles"

export default function Feedback({ navigation, route }) { //route.params.palpite -> vetor

  const [palpiteHistory, setPalpiteHistory] = useState([]);
  const [superHitsHistory, setSuperHitsHistory] = useState([]);
  const [hitsHistory, setHitsHistory] = useState([]);
  const [missesHistory, setMissesHistory] = useState([]);

useEffect(() => {
  if (route.params?.palpite) {
    setPalpiteHistory(prev => [...prev, route.params.palpite]);
    setSuperHitsHistory(prev => [...prev, route.params.superHits]);
    setHitsHistory(prev => [...prev, route.params.hits]);
    setMissesHistory(prev => [...prev, route.params.misses]);
  }
}, [route.params.palpite]);

  const [able, setAble] = useState(true)
  useEffect(() => {
    setTimeout(() => {
      setAble(false)
    }, 2000)
  }, [route.params.renome])

  return (
    <View style={styles.boxFeedback}>
      <ImageBackground resizeMode="stretch" source={require('C:/Users/Vinicius/Documents/Projects/GameProject/src/Images/cadernoCortado.png')}
        style={styles.notepad}>

        {route.params.misses || route.params.hits ?
          <View>
            <View style={styles.buttonOk}>
              <Button
                title="OK"
                onPress={() => navigation.navigate("Main")}
                disabled={able}
              />
            </View>
              <View style={styles.try}>
                <View style={styles.palpite}>
                  {route.params.palpite.map((numero) => (
                    <Text style={styles.number}>{numero} </Text>
                  ))}
                </View>
                <View style={[{ flexDirection: "row" }]}>
                  <Text style={[styles.feedbackSymbol, { color: "green" }]}>V= </Text> 
                  <Text style={styles.feedbackNumber}>{route.params.superHits} </Text>
                  <Text style={[styles.feedbackSymbol, { color: "orange" }]}>Z= </Text>
                  <Text style={styles.feedbackNumber}>{route.params.hits} </Text>
                  <Text style={[styles.feedbackSymbol, { color: "red" }]}>X= </Text>
                  <Text style={styles.feedbackNumber}>{route.params.misses} </Text>
                </View>
              </View>
          </View>
          :
          <View>
            {route.params.superHits > route.params.nivel - 1 ?
              <View>
                <Text>A bomba explodiu, parabéns {route.params.renome}, você perdeu</Text>
                <View style={styles.choicesBox}>
                  <Text style={styles.choicesText}>Holmes: {route.params.holmesP}</Text>
                  <Text style={styles.choicesText}>Watson: {route.params.watsonP}</Text>
                </View>
                <View style={styles.choicesBox}>
                  <Text style={styles.choicesText}>Pontos: {route.params.pontosTotaisH}</Text>
                  <Text style={styles.choicesText}>Pontos: {route.params.pontosTotaisW}</Text>
                </View>
                <View style={styles.buttonNextGame}>
                  <Button
                    title="PROXIMO"
                    onPress={() => {
                      if (route.params.nivel < 5) {
                        navigation.navigate("Main")
                      } else {
                        navigation.navigate("Final", {
                          nome: route.params.renome,
                          holmes: route.params.pontosTotaisH,
                          watson: route.params.pontosTotaisW
                        })
                      }
                    }}
                  />
                </View>
              </View>
              :
              <View style={styles.congratulationsBox}>
                <Text style={styles.congratulationsText}>Parabéns {route.params.renome} </Text>
                <Text style={styles.congratulationsText}>Bomba desarmada! </Text>
                <View style={styles.choicesBox}>
                  <Text style={styles.choicesText}>Holmes: {route.params.holmesP} {"\n"}Pontos: {route.params.pontosTotaisH} </Text>
                  <Text style={styles.choicesText}>Watson: {route.params.watsonP} {"\n"}Pontos: {route.params.pontosTotaisW} </Text>
                </View>
                {/* <View style={styles.choicesBox}>
                  <Text style={styles.choicesText}>Pontos: {route.params.pontosTotaisH}</Text>
                  <Text style={styles.choicesText}>Pontos: {route.params.pontosTotaisW}</Text>
                </View> */}
                <View style={styles.buttonNextGame}>
                  <Button
                    title="PROXIMO"
                    onPress={() => {
                      if (route.params.nivel < 5) {
                        navigation.navigate("Main")
                      } else {
                        navigation.navigate("Final", {
                          nome: route.params.renome,
                          holmes: route.params.pontosTotaisH,
                          watson: route.params.pontosTotaisW
                        })
                      }
                    }}
                  />
                </View>
              </View>
            }
          </View>
        }
      </ImageBackground>
    </View>
  )
}