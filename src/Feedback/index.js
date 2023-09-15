import React from "react"
import { View, Text, Button } from "react-native"

export default function Feedback({ navigation, route }) {
  return (
    <View style={{ alignItems: "center", justifyContent: "center", flex: 1 }}>
      {(route.params.renome).length > 7 ?
        <View>
          <Text>Super Hit: {route.params.superHits}</Text>
          <Text>Hit: {route.params.hits}</Text>
          <Text>Miss: {route.params.misses}</Text>
          <Button
            title="OK"
            onPress={() => navigation.navigate("Main")}
          />
        </View>
        :
        <View>
        <Text>Parabéns {route.params.renome}, você acertou</Text>
        <View style={{ alignContent: "center", justifyContent: "space-between", flexDirection: "row" }}>
          <Text>Holmes{'\n'}{route.params.holmesP}</Text>
          <Text>Watson{'\n'}{route.params.watsonP}</Text>
        </View>
        <Button
          title="PROXIMO"
          onPress={() => navigation.navigate("Main")}
        />
      </View>
      }
    </View>
  )
}