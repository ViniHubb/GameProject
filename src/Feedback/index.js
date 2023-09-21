import React, { useEffect, useState } from "react"
import { View, Text, Button } from "react-native"
import styles from "./styles"

export default function Feedback({ navigation, route }) {

  const [able, setAble] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setAble(false)
    }, 2000)
  }, [route.params.renome])

  return (
    <View style={styles.boxFeedback}>
      {route.params.misses || route.params.hits ?
        <View style={styles.try}>
          <Text>Super Hit: {route.params.superHits}</Text>
          <Text>Hit: {route.params.hits}</Text>
          <Text>Miss: {route.params.misses}</Text>
          <Button
            title="OK"
            onPress={() => navigation.navigate("Main")}
            disabled={able}
          />
        </View>
        :
        <View>
          {route.params.superHits > route.params.nivel-1 ?
            <View>
              <Text>A bomba explodiu, parabéns {route.params.renome}, você perdeu</Text>
              <View style={styles.escolhas}>
                <Text>Holmes: {route.params.holmesP}</Text>
                <Text>Watson: {route.params.watsonP}</Text>
              </View>
              <View style={styles.escolhas}>
                <Text>Pontos: {route.params.pontosTotaisH}</Text>
                <Text>Pontos: {route.params.pontosTotaisW}</Text>
              </View>
              <Button
                title="PROXIMO"
                onPress={() => {
                  if(route.params.nivel < 5) {
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
            :
            <View>
              <Text>Parabéns {route.params.renome}, você acertou</Text>
              <View style={styles.escolhas}>
                <Text>Holmes: {route.params.holmesP}</Text>
                <Text>Watson: {route.params.watsonP}</Text>
              </View>
              <View style={styles.escolhas}>
                <Text>Pontos: {route.params.pontosTotaisH}</Text>
                <Text>Pontos: {route.params.pontosTotaisW}</Text>
              </View>
              <Button
                title="PROXIMO"
                onPress={() => {
                  if(route.params.nivel < 5) {
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
          }
        </View>
      }
    </View>
  )
}