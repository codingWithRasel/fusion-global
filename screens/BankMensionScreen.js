import React, { useState } from "react";
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  Linking,
  Alert,
} from "react-native";
import { Button, TextInput } from "react-native-paper";
import SelectDso from "../components/SelectDso2"; // Import your dropdown component

const DynamicSections = () => {
  const initialSection = [{ id: 1, text: "", selectedValue: "" }];
  const [sections, setSections] = useState(initialSection);
  const [total, setTotal] = useState(0); // State for the total

  // Function to add a new section
  const addSection = () => {
    const newId = sections.length + 1;
    setSections([...sections, { id: newId, text: "", selectedValue: "" }]);
  };

  // Function to handle text input change and calculate total
  const handleTextChange = (id, newText) => {
    const updatedSections = sections.map((section) =>
      section.id === id ? { ...section, text: newText } : section
    );
    setSections(updatedSections);

    // Calculate the total of all input fields
    const sum = updatedSections.reduce(
      (acc, section) => acc + (parseFloat(section.text) || 0),
      0
    );
    setTotal(sum);
  };

  // Function to handle dropdown selection
  const handleDropdownChange = (id, newValue) => {
    const updatedSections = sections.map((section) =>
      section.id === id ? { ...section, selectedValue: newValue } : section
    );
    setSections(updatedSections);
  };

  // Function to reset all sections
  const resetSections = () => {
    setSections(initialSection); // Reset sections to the initial state
    setTotal(0); // Reset total to 0
  };

  // Function to send the output to WhatsApp
  const sendToWhatsApp = () => {
    // Check for blank inputs
    const hasBlankInput = sections.some(
      (section) => section.text === "" || section.selectedValue === null
    );
    if (hasBlankInput) {
      Alert.alert("Input Error", "Select DSO & Enter Amount!");
      return;
    }

    let message = sections
      .map((section) =>
        section.selectedValue
          ? `_@${section.selectedValue.slice(-3)}: *${parseFloat(
              section.text
            ).toLocaleString("en-IN")}*৳_` // Add @ and format the amount
          : "DSO Number: Not Selected"
      )
      .join("\n");

    message += `\n\n*Total: ${total.toLocaleString("en-IN")}*৳`; // Format the total with ৳

    const url = `whatsapp://send?text=${encodeURIComponent(message)}`;

    Linking.openURL(url).catch((err) =>
      console.error("An error occurred", err)
    );
  };

  return (
    <ScrollView style={{ flex: 1, padding: 10 }}>
      {sections.map((section) => (
        <View key={section.id} style={styles.sectionContainer}>
          {/* Use the SelectDso component for dropdown */}
          <View style={styles.pickerContainer}>
            <SelectDso
              getDso={(value) => handleDropdownChange(section.id, value)}
            />
          </View>

          {/* Number-only input field */}
          <View style={styles.inputField}>
            <TextInput
              autoFocus
              style={styles.input}
              mode="outlined"
              placeholder="Amount"
              value={section.text}
              onChangeText={(text) => handleTextChange(section.id, text)}
              keyboardType="numeric"
            />
          </View>
        </View>
      ))}

      {/* Add and Reset buttons */}
      <View style={styles.buttonContainer}>
        <Button mode="contained" onPress={addSection} style={styles.addButton}>
          Add DSO
        </Button>

        <Button
          mode="contained"
          onPress={resetSections}
          style={styles.resetButton}
        >
          Reset All
        </Button>
      </View>

      {/* Send button */}
      <Button
        mode="contained"
        onPress={sendToWhatsApp}
        style={styles.sendButton}
      >
        Send to WhatsApp
      </Button>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  pickerContainer: {
    flex: 5,
    marginRight: 10,
  },
  inputField: {
    flex: 5,
    borderColor: "black",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
  },
  addButton: {
    flex: 1,
    marginRight: 10,
  },
  resetButton: {
    flex: 1,
  },
  sendButton: {
    marginTop: 20,
  },
});

export default DynamicSections;
