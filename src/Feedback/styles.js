import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  //Background
  boxFeedback:{
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0
  },
  notepad:{
    alignItems: "center",
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    paddingTop: 150
  },
  //Tentativas
  buttonOk: {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 230,
    right: 0,
    width: 40
  },
  try:{
    //backgroundColor: "red",
    width: 260
  },
  palpite:{
    //backgroundColor: "red",
    flexDirection: "row",
  },
  number:{
    fontSize: 40,
    fontFamily: "Caveat-Bold",
    //backgroundColor: "lime",
  },
  //feedbacks
  feedbackSymbol: {
    fontFamily: "Caveat-Bold",
    fontSize: 20
  },
  feedbackNumber: {
    fontFamily: "Caveat-Bold",
    fontSize: 20,
    paddingRight: 65
  },
  //Congratulations
  congratulationsBox: {
    width: 260,
    height: "100%"
  },
  congratulationsText: {
    textAlign: "center",
    fontFamily: 'Caveat-Bold',
    fontSize: 35,
  },
  choicesBox:{
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 30
  },
  choicesText: {
    fontFamily: 'Caveat-Bold',
    fontSize: 25,
    padding: 10
  },
  buttonNextGame:{
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    padding: 10,
    marginTop: 550
  }
})

export default styles