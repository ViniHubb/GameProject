import React from "react"
import { View, Button } from "react-native"
import styles from "./styles"

export default function Keyboard(props) {
  return (
    <View style={styles.boxButtons}>
      <View style={styles.line}>
        <Button       // 1
          title="Clcik 1"
          onPress={() => {
            props.bota(1)
          }}
          disabled={props.ver(1)}
        />
        <Button       // 2
          title="Clcik 2"
          onPress={() => {
            props.bota(2)
          }}
          disabled={props.ver(2)}
        />
        <Button       // 3
          title="Clcik 3"
          onPress={() => {
            props.bota(3)
          }}
          disabled={props.ver(3)}
        />
      </View>
      <View style={styles.line}>
        <Button       // 4
          title="Clcik 4"
          onPress={() => {
            props.bota(4)
          }}
          disabled={props.ver(4)}
        />
        <Button       // 5
          title="Clcik 5"
          onPress={() => {
            props.bota(5)
          }}
          disabled={props.ver(5)}
        />
        <Button       // 6
          title="Clcik 6"
          onPress={() => {
            props.bota(6)
          }}
          disabled={props.ver(6)}
        />
      </View>
      <View style={styles.line}>
        <Button       // 7
          title="Clcik 7"
          onPress={() => {
            props.bota(7)
          }}
          disabled={props.ver(7)}
        />
        <Button       // 8
          title="Clcik 8"
          onPress={() => {
            props.bota(8)
          }}
          disabled={props.ver(8)}
        />
        <Button       // 9
          title="Clcik 9"
          onPress={() => {
            props.bota(9)
          }}
          disabled={props.ver(9)}
        />
      </View>
      <View style={styles.line}>
        <Button       // Delet
          title="Clcik Del"
          onPress={() => {
            props.dell()
          }}
        />
        <Button       // Clear
          title="CLear"
          onPress={() => {
            props.limpa()
          }}
        />
        <Button       // Go!
          title="Clcik Go"
          onPress={() => {
            props.save()
          }}
          disabled={!props.ver(-1)}
        />
      </View>
    </View>
  )
}