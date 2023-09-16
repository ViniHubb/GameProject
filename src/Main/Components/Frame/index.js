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
      {props.nivel > 2 &&
        <Pressable style={styles.area} onPress={() => {
          console.log("3");
        }}>
          <Text style={styles.value} >{props.valor[2]}</Text>
        </Pressable>
      }
      {props.nivel > 3 &&
        <Pressable style={styles.area} onPress={() => {
          console.log("4");
        }}>
          <Text style={styles.value} >{props.valor[3]}</Text>
        </Pressable>
      }
    </View>
  )
}