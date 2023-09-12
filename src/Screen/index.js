import React from "react";
import { View, Text } from "react-native"
import styles from "./styles";

export default function Screen(props){
  return(
    <View>  
      {props.venceu ?
      <View style={styles.boxValue} >
        {props.venceu === 1 ?
        <Text style={styles.value} >Parabens Holmes, você acertou</Text>
        :
        <Text style={styles.value} >Parabens Watson, você acertou</Text>
        }
      </View>
      :
      <View style={styles.boxValue} >
      <Text style={styles.value} >{props.valor}</Text>
      <Text style={styles.value} >Super Hit: {props.superHit}</Text>
      <Text style={styles.value} >Hit: {props.hit}</Text>
      <Text style={styles.value} >Miss: {props.miss}</Text>
    </View>
    }
    </View>
  )
}