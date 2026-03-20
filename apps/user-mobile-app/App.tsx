import React from "react";
import { View, Text } from "react-native";

export default function App() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#0f172a",
      }}
    >
      <Text style={{ color: "#22c55e", fontSize: 24 }}>
        PinolApp 🇳🇮
      </Text>
      <Text style={{ color: "#fff", marginTop: 10 }}>
        Delivery Nicaragüense
      </Text>
    </View>
  );
}
