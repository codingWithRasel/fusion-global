import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import { Picker } from "@react-native-picker/picker";

const DropdownMenu = ({ getDso }) => {
  const [selectedValue, setSelectedValue] = useState(null);
  const phoneNumbers = [
    "DSO-341",
    "DSO-342",
    "DSO-343",
    "DSO-344",
    "DSO-345",
    "DSO-346",
    "DSO-347",
    "DSO-348",
    "DSO-349",
    "DSO-350",
    "DSO-351",
    "DSO-352",
    "DSO-353",
    "DSO-354",
    "DSO-355",
    "DSO-357",
    "DSO-358",
    "DSO-359",
    "DSO-360",
    "DSO-361",
    "DSO-362",
    "DSO-363",
    "DSO-364",
    "DSO-365",
    "DSO-366",
    "DSO-368",
    "DSO-369",
    "DSO-370",
    "DSO-372",
    "DSO-373",
    "DSO-374",
    "DSO-375",
    "DSO-376",
    "DSO-377",
    "DSO-378",
    "DSO-379",
    "DSO-380",
    "DSO-381",
    "DSO-382",
  ];

  return (
    <View style={styles.container}>
      <Picker
        selectedValue={selectedValue}
        onValueChange={(itemValue) => {
          setSelectedValue(itemValue);
          getDso(itemValue);
        }}
        mode="dropdown"
        style={styles.picker}
      >
        <Picker.Item label="DSO " value={null} />
        {phoneNumbers.map((number) => (
          <Picker.Item key={number} label={number} value={number} />
        ))}
      </Picker>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 53,
    borderWidth: 1,
    borderRadius: 6,
    marginVertical: 5,
    backgroundColor: "#fff",
  },
});

export default DropdownMenu;
