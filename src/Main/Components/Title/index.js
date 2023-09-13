import React from "react"
import { Text, View } from "react-native"
import styles from "./styles"

export default function Title(props){
  return(
    <View style={styles.boxTitle}>
      <Text style={styles.textTitle}>{props.nome}</Text>
    </View>
  )
}