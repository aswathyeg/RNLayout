import { StyleSheet, View } from "react-native";
import Box from "./components/Box";

export default function App() {
  return (
    <View style={styles.container}>
      <Box style={{ backgroundColor: "#8e0b00" }}>Box1</Box>
      <Box style={{ backgroundColor: "#b65d1f" }}>Box2</Box>
      <Box style={{ backgroundColor: "#1c4c56" }}>Box3</Box>
      <Box style={{ backgroundColor: "#91b543" }}>Box4</Box>
      <Box style={{ backgroundColor: "#b95f21" }}>Box5</Box>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 64,
    borderWidth: 6,
    borderBlockColor: "black",
    flex: 1,
    justifyContent: "center",
    gap: 10,
  },
});
