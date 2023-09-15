import React from "react";
import { View, Text } from "react-native"
import styles from "./styles";

export default function Frame(props) {
  return (
    <View style={styles.boxValue} >
      <Text style={styles.value} >{props.valor}</Text>
    </View>
  )
}