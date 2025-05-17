import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  boxFrame: {
    zIndex: 1,
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    pointerEvents: 'none'
  },
  bomb:{
    alignItems: "center",
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    pointerEvents: 'none'
  },
  timer:{
    color: "darkgreen",
    //color: 'rgba(255, 255, 255, 0.7)',
    fontSize: 60,
    marginTop: 135,
    textShadowColor: 'darkgreen',
    textShadowRadius: 3,
  }
})

export default styles