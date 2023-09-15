import React from "react";
import { View, Text, Pressable } from "react-native"
import styles from "./styles";

export default function Frame(props) {
  return (
    <View style={styles.boxValue} >
      <Pressable style={styles.area} onPress={() => {
        console.log("1");
      }}>
        <Text style={styles.value} >{props.valor[0]}</Text>
      </Pressable>
      <Pressable style={styles.area} onPress={() => {
        console.log("2");
      }}>
        <Text style={styles.value} >{props.valor[1]}</Text>
      </Pressable>
    </View>
  )
}