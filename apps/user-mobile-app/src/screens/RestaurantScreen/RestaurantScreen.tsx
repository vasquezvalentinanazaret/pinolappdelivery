import { TouchableOpacity } from "react-native";
import { View, Text, StyleSheet, ScrollView } from "react-native";

const RestaurantScreen = ({ route }: any) => {
  const { name } = route.params;

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>{name}</Text>

      <Text style={styles.section}>Menú</Text>

      <View style={styles.item}>
  <Text style={styles.itemName}>Gallo Pinto + Carne Asada</Text>
  <Text style={styles.price}>$5</Text>

  <TouchableOpacity
    style={styles.button}
    onPress={() => console.log("Producto agregado")}
  >
    <Text style={styles.buttonText}>Agregar al carrito</Text>
  </TouchableOpacity>
</View>

      <View style={styles.item}>
        <Text style={styles.itemName}>Pollo Frito</Text>
        <Text style={styles.price}>$4</Text>
      </View>

      <View style={styles.item}>
        <Text style={styles.itemName}>Tajadas con Queso</Text>
        <Text style={styles.price}>$3</Text>
      </View>
    </ScrollView>
  );
};

export default RestaurantScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0f172a",
    padding: 15,
  },
  title: {
    color: "#22c55e",
    fontSize: 24,
    marginBottom: 15,
  },
  section: {
    color: "#fff",
    fontSize: 18,
    marginBottom: 10,
  },
  item: {
    backgroundColor: "#1e293b",
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
  },
  itemName: {
    color: "#fff",
    fontSize: 16,
  },
  price: {
    color: "#22c55e",
    marginTop: 5,
  },
});
button: {
  marginTop: 10,
  backgroundColor: "#22c55e",
  padding: 10,
  borderRadius: 8,
  alignItems: "center",
},
buttonText: {
  color: "#fff",
  fontWeight: "bold",
},
