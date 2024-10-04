import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  Button,
} from "react-native";
import { Divider } from "react-native-paper";
import CustomInput from "../components/CustomInput";

export default function CashInHand() {
  const denominationImages = {
    1000: require("../assets/1000.jpg"),
    500: require("../assets/500.jpg"),
    200: require("../assets/200.jpg"),
    100: require("../assets/100.jpg"),
    50: require("../assets/50.jpg"),
    20: require("../assets/20.jpg"),
    10: require("../assets/10.jpg"),
  };

  // Denomination states
  const [denominations, setDenominations] = useState({
    10: "",
    20: "",
    1000: "",
    500: "",
    200: "",
    100: "",
    50: "",
  });

  // Function to handle input changes
  const handleInputChange = (value, denomination) => {
    const parsedValue = parseInt(value) || 0; // Handle NaN and empty strings
    setDenominations((prev) => ({
      ...prev,
      [denomination]: parsedValue,
    }));
  };

  // Calculate total for all denominations
  const calculateTotal = () => {
    const total = Object.keys(denominations).reduce((sum, denomination) => {
      return sum + denomination * denominations[denomination];
    }, 0);
    return total.toLocaleString();
  };

  // Function to reset input values
  const handleReset = () => {
    setDenominations({
      10: "",
      20: "",
      1000: "",
      500: "",
      200: "",
      100: "",
      50: "",
    });
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.total}>Total: {calculateTotal()}</Text>
      <View style={styles.table}>
        {/* Table Headers */}
        <View style={styles.tableHeader}>
          <Text style={styles.headerText}>Denomination</Text>
          <Text style={styles.headerText}>Quantity</Text>
          <Text style={styles.headerText}>Total</Text>
        </View>

        <Divider style={styles.divider} />

        {/* Table Rows */}
        {Object.keys(denominations)
          .sort((a, b) => b - a)
          .map((denom) => (
            <View key={denom} style={styles.tableRow}>
              <Image
                source={denominationImages[denom]}
                style={styles.noteImage}
              />
              <View style={{ flex: 1, marginLeft: 2 }}>
                <CustomInput
                  label={denom}
                  keyboardType="numeric"
                  onChangeText={(value) => handleInputChange(value, denom)}
                  value={denominations[denom].toString()}
                />
              </View>
              <Text style={styles.denomTotal}>
                {(denom * denominations[denom]).toLocaleString()}
              </Text>
            </View>
          ))}
      </View>

      <Divider style={styles.divider} />

      {/* Reset Button */}
      <View style={styles.buttonContainer}>
        <View style={{ width: "40%" }}>
          <Button title="Reset" onPress={handleReset} color="#6200ea" />
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 2,
    backgroundColor: "#f7f7f7",
  },
  total: {
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
    color: "#6200ea",
    marginBottom: 8,
  },
  table: {
    borderWidth: 1,
    borderColor: "transparent",
    borderRadius: 8,
  },
  tableHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 10,
    backgroundColor: "#6200ea",
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
  },
  headerText: {
    flex: 1,
    textAlign: "center",
    fontWeight: "bold",
    color: "#fff",
  },
  tableRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 7,
    borderBottomWidth: 1,
    borderBottomColor: "#e0e0e0",
  },
  denomTotal: {
    flex: 1,
    textAlign: "center",
    fontSize: 18,
  },
  divider: {
    height: 1,
    backgroundColor: "#cccccc",
  },
  noteImage: {
    width: 70,
    height: 50,
    flex: 1,
    resizeMode: "contain",
  },
  buttonContainer: {
    marginTop: 10,
    alignItems: "center",
  },
});
