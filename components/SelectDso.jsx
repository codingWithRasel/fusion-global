import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import { Picker } from "@react-native-picker/picker";

const DropdownMenu = ({ getDso }) => {
  const [selectedValue, setSelectedValue] = useState(null);
  const phoneNumbers = [
    "01322872341",
    "01322872342",
    "01322872343",
    "01322872344",
    "01322872345",
    "01322872346",
    "01322872347",
    "01322872348",
    "01322872349",
    "01322872350",
    "01322872351",
    "01322872352",
    "01322872353",
    "01322872354",
    "01322872355",
    "01322872357",
    "01322872358",
    "01322872359",
    "01322872360",
    "01322872361",
    "01322872362",
    "01322872363",
    "01322872364",
    "01322872365",
    "01322872366",
    "01322872368",
    "01322872369",
    "01322872370",
    "01322872372",
    "01322872373",
    "01322872374",
    "01322872375",
    "01322872376",
    "01322872377",
    "01322872378",
    "01322872379",
    "01322872380",
    "01322872381",
    "01322872382",
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
        <Picker.Item label="Select DSO number" value={null} />
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
    marginVertical: 10,
    backgroundColor: "#fff",
  },
});

export default DropdownMenu;
