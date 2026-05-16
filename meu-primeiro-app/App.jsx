import { Pressable, StyleSheet, Text, View } from "react-native";

export default function App() {
  let name = "João"; // Exemplo de variável
  name = 'Maria'

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Olá, React Native!</Text>
      <Text style={styles.texto}>Meu primeiro app está funcionando.</Text>
      <Pressable style={styles.botao} onPress={() => alert(`Olá, ${name}!`)}>
        <Text style={{ color: "#fff", fontSize: 18 }}>Pressione-me</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0e0eaf",
    alignItems: "center",
    justifyContent: "center",
  },
  titulo: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
    textAlign: "center",
  },
  texto: {
    fontSize: 16,
    textAlign: "center",
  },
  botao: {
    marginTop: 20,
    backgroundColor: "#007AFF",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
});
