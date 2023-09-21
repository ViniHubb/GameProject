import React from "react"
import { View, Text, TouchableOpacity } from "react-native"
import styles from "./styles"

export default function Keyboard(props) {
  return (
    <View style={styles.boxButtons}>
      <View style={styles.line}>
      <TouchableOpacity       // 0
          onPress={() => {
            props.bota(0)
          }}
          disabled={props.ver(0)}
          style={{backgroundColor:"white", width: 20}}
        >
          <Text></Text></TouchableOpacity>
        <TouchableOpacity       // 1
          onPress={() => {
            props.bota(1)
          }}
          disabled={props.ver(1)}
          style={{backgroundColor:"white", width: 20}}       
        >
          <Text></Text></TouchableOpacity>
        <TouchableOpacity       // 2
          title="       "
          onPress={() => {
            props.bota(2)
          }}
          disabled={props.ver(2)}
          style={{backgroundColor:"white", width: 20}}      
        >
          <Text></Text></TouchableOpacity>
        <TouchableOpacity       // 3
          title="       "
          onPress={() => {
            props.bota(3)
          }}
          disabled={props.ver(3)}
          style={{backgroundColor:"white", width: 20}}        
        >
          <Text></Text></TouchableOpacity>
      </View>
      <View style={styles.line}>
        <TouchableOpacity       // 4
          title="       "
          onPress={() => {
            props.bota(4)
          }}
          disabled={props.ver(4)}
          style={{backgroundColor:"white", width: 20}}
        >
          <Text></Text></TouchableOpacity>
        <TouchableOpacity       // 5
          title="       "
          onPress={() => {
            props.bota(5)
          }}
          disabled={props.ver(5)}
          style={{backgroundColor:"white", width: 20}}        
        >
          <Text></Text></TouchableOpacity>
        <TouchableOpacity       // 6
          title="       "
          onPress={() => {
            props.bota(6)
          }}
          disabled={props.ver(6)}
          style={{backgroundColor:"white", width: 20}}       
        >
          <Text></Text></TouchableOpacity>
        <TouchableOpacity       // 7
          title="       "
          onPress={() => {
            props.bota(7)
          }}
          disabled={props.ver(7)}
          style={{backgroundColor:"white", width: 20}}
        >
          <Text></Text></TouchableOpacity>
      </View>
      <View style={styles.line}>
        <TouchableOpacity       // Delet
          title="Del"
          onPress={() => {
            props.dell()
          }}
          style={{backgroundColor:"white", width: 20}}
        >
          <Text></Text></TouchableOpacity>
        <TouchableOpacity       // 8
          title="       "
          onPress={() => {
            props.bota(8)
          }}
          disabled={props.ver(8)}
          style={{backgroundColor:"white", width: 20}}
        >
          <Text></Text></TouchableOpacity>
        <TouchableOpacity       // 9
          title="       "
          onPress={() => {
            props.bota(9)
          }}
          disabled={props.ver(9)}
          style={{backgroundColor:"white", width: 20}}
        >
          <Text></Text></TouchableOpacity>
        <TouchableOpacity       // Go!
          title=" Go "
          onPress={() => {
            props.save()
          }}
          disabled={props.ver(-1)}
          style={{backgroundColor:"white", width: 20}}
        >
          <Text></Text></TouchableOpacity>
      </View>
      <View style={[styles.line,{marginTop: 15}]}>
        <TouchableOpacity       // Clear
          title="       CLear       "
          onPress={() => {
            props.limpa()
          }}
          style={{backgroundColor:"white", width: 20}}    
        >
          <Text></Text></TouchableOpacity>
      </View>
    </View>
  )
}