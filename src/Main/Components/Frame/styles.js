import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  boxFrame:{
    flex: 2,
    backgroundColor: "white",
    marginBottom: 2,
  },
  bomb:{
    width: "100%",
    height: 225,
    backgroundColor: "gray",
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