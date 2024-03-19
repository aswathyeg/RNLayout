import { StyleSheet, View, Text, Dimensions } from "react-native";
import Box from "./components/Box";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <Text style={styles.text}>Welcome</Text>
      </View>
    </View>
  );
}
const widthDimension = Dimensions.get("window").width;
const heightDimension = Dimensions.get("window").height;
const styles = StyleSheet.create({
  container: {
    backgroundColor: "plum",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  box: {
    backgroundColor: "lightblue",
    width: widthDimension > 500 ? "70%" : "90%",
    height: heightDimension > 600 ? "60%" : "90%",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 24,
  },
});
