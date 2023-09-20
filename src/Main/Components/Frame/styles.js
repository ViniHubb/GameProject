import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  boxFrame:{
    flex: 2,
    backgroundColor: "white",
    marginBottom: 2,
  },
  bomb:{
    height: "80%",
    width: "100%",
    backgroundColor: "lightgray",
    alignItems: "center",
    justifyContent: "center",
  },
  boxWires:{
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around"
  },
  wire:{
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "lightgray",
  }
})

export default styles