import React from "react"
import { View, Text, Button } from "react-native"
import styles from "./styles"

export default function Feedback({ navigation, route }) {
  return(
    <View style={styles.finalBox}>
      <Text>No fim o melhor venceu, parabéns {route.params.nome}</Text>
      <View style={styles.finalResult}>
        <Text>Holmes</Text>
        <Text>Watson</Text>
      </View>
      <View style={styles.finalResult}>
        <Text>Pontos: {route.params.holmes}</Text>
        <Text>Pontos: {route.params.watson}</Text>
      </View>
      <Button
        title="Inicio"
        onPress={() => navigation.navigate("Main")}
      />
    </View>
  )
}