import { useState } from "react";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { StatusBar } from "expo-status-bar";

export default function App() {
  const [contador, setContador] = useState(0);

  function aumentarContador() {
    setContador(contador + 1);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Meu primeiro app React Native</Text>

      <Text style={styles.texto}>
        Você clicou {contador} vezes.
      </Text>

      <Pressable style={styles.botao} onPress={aumentarContador}>
        <Text style={styles.textoBotao}>Clicar</Text>
      </Pressable>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#101014",
    alignItems: "center",
    justifyContent: "center",
    padding: 24,
  },
  titulo: {
    color: "#ffffff",
    fontSize: 26,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
  },
  texto: {
    color: "#d4d4d8",
    fontSize: 18,
    marginBottom: 20,
  },
  botao: {
    backgroundColor: "#7c3aed",
    paddingVertical: 14,
    paddingHorizontal: 28,
    borderRadius: 12,
  },
  textoBotao: {
    color: "#ffffff",
    fontSize: 16,
    fontWeight: "bold",
  },
});