import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  boxFrame:{
    flex: 2,
    backgroundColor: "white",
  },
  bombBox:{
    flex: 1
  },
  bomb:{
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  timer:{
    color: "darkgreen",
    fontSize: 50,
    paddingTop: 8
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