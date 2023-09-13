import React from "react";
import { View, Text } from "react-native"
import styles from "./styles";

export default function Screen(props){
  return(
    <View>  
      {(props.name).length < 7 ?
      <View style={styles.boxValue} >
        <Text style={styles.value} >Parabens {props.name}, você acertou</Text>
      </View>
      :
      <View style={styles.boxValue} >
      <Text style={styles.value} >{props.valor}</Text>
      <Text style={styles.feedback} >Super Hit: {props.superHit}</Text>
      <Text style={styles.feedback} >Hit: {props.hit}</Text>
      <Text style={styles.feedback} >Miss: {props.miss}</Text>
    </View>
    }
    </View>
  )
}