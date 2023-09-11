import React from "react";
import { View, Text } from "react-native"
import styles from "./styles";

export default function Screen(){
  return(
      <View style={styles.boxValue}>
        <Text style={styles.value} >Valor</Text>
      </View>
  )
}