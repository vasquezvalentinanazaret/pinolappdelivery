import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";

const HomeScreen = ({ navigation }: any) => {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>🍽️ Restaurantes</Text>

      {/* Restaurante 1 */}
      <View style={styles.card}>
        <Text style={styles.name}>Fritanga Doña Rosa</Text>
        <Text style={styles.description}>Gallo pinto, carne asada, tajadas</Text>
      </View>

      {/* Restaurante 2 */}
      <View style={styles.card}>
        <Text style={styles.name}>Pollos El Buen Sabor</Text>
        <Text style={styles.description}>Pollo frito, papas, refrescos</Text>
      </View>

      {/* Restaurante 3 */}
      <View style={styles.card}>
        <Text style={styles.name}>Comedor Mary</Text>
        <Text style={styles.description}>Almuerzos caseros</Text>
      </View>
    </ScrollView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0f172a",
    padding: 15,
  },
  header: {
    color: "#22c55e",
    fontSize: 24,
    marginBottom: 15,
  },
  card: {
    backgroundColor: "#1e293b",
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
  },
  name: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  description: {
    color: "#aaa",
    marginTop: 5,
  },
});
