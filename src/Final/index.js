import React from "react"
import { View, Text, Button } from "react-native"
import { useVideoPlayer, VideoView } from 'expo-video';
import styles from "./styles"

const videoSource = require('../../assets/videos/fireworks.mp4');

export default function Feedback({ navigation, route }) {
  const player = useVideoPlayer(videoSource, (player) => {
    player.loop = true;
    player.play();
  });

  return(
    <View style={styles.finalBox}>
      <VideoView
        player={player}
        style={styles.video}
        nativeControls={false}
        contentFit="cover"
      />
      <View style={styles.finalResult}>
        <Text style={styles.theBest}>No fim o melhor venceu!</Text>
        <Text style={styles.theBest}>Parabéns {route.params.nome}</Text>
        <View style={styles.boxPoints}>
          <Text style={styles.points}>Holmes: {route.params.holmes}</Text>
          <Text style={styles.points}>Watson: {route.params.watson}</Text>
        </View>
      </View>
      <Button 
        style={styles.button}
        title="Inicio"
        onPress={() => navigation.navigate("Main")}
      />
    </View>
  )
}