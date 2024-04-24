import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  boxFeedback:{
    flex: 1,
    marginTop: 30,
    alignItems: "center", 
    justifyContent: "center",
    backgroundColor: "lightgray",
  },

  palpite:{
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    backgroundColor: "aqua",
  },
  numero:{
    fontSize: 60,
    fontWeight: "bold",
    backgroundColor: "lime",
    padding: 10,
  },

  try:{
    display: "flex",
    justifyContent: "space-between",
    backgroundColor: "red",
  },
  escolhas:{
    flexDirection: "row",
    alignItems: "center", 
    justifyContent: "space-between",
  }
})

export default styles