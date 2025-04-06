import { View, Text, TextInput, StyleSheet } from "react-native";

export default function CategoriScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Categori</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10
  },
  title: { 
    fontSize: 24, 
    fontWeight: "bold", 
    marginBottom: 10
},
  input: { 
    borderWidth: 1, 
    borderColor: "#ccc", 
    padding: 10, borderRadius: 5 
},
});
