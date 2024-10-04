import React, { useState, useRef } from "react";
import { View, Alert, Linking, StyleSheet, ScrollView } from "react-native";
import { Button, TextInput, Text, DefaultTheme } from "react-native-paper";
import SelectDso from "../components/SelectDso";
import SelectDate from "../components/SelectDate";

const inputFields = [
  { name: "lifting", label: "Lifting" },
  { name: "cashLifting", label: "Cash Lifting" },
  { name: "bank", label: "Bank" },
  { name: "crm", label: "CRM" },
  { name: "cash", label: "Cash" },
  { name: "preDue", label: "Pre Due" },
  { name: "cashSupport", label: "Cash Support" },
  { name: "returnVal", label: "Return" },
];

const Home = () => {
  const CustomTheme = {
    ...DefaultTheme,
    colors: { ...DefaultTheme.colors, primary: "red" },
  };

  const [inputs, setInputs] = useState({
    lifting: "",
    cashLifting: "",
    bank: "",
    crm: "",
    cash: "",
    preDue: "",
    cashSupport: "",
    returnVal: "",
    note: "",
    date: "",
    dso: "",
  });

  // Create refs for each input
  const inputRefs = useRef(
    inputFields.reduce((acc, field) => {
      acc[field.name] = React.createRef();
      return acc;
    }, {})
  );

  const handleInputChange = (name, value) => {
    setInputs((prev) => ({ ...prev, [name]: value }));
  };

  const calculateTotal = () => {
    const {
      lifting,
      cashLifting,
      bank,
      crm,
      cash,
      preDue,
      cashSupport,
      returnVal,
    } = inputs;
    const sum1 = +lifting + +cashLifting + +preDue;
    const sum2 = +cash + +cashSupport + +returnVal + +crm + +bank;
    return sum1 - sum2;
  };

  const handleCalculate = () => {
    const { note, cashSupport, ...requiredFields } = inputs;

    if (Object.values(requiredFields).some((val) => !val.trim())) {
      return Alert.alert("😊", "দয়া করে, সব ফিল্ডে শূন্য বা সঠিক সংখ্যা দিন।", [
        { text: "ঠিক আছে", style: "cancel" },
      ]);
    }

    if (cashSupport > 0 && !note.trim()) {
      return Alert.alert(
        "😊",
        "Cash Support গ্রহীতার নাম Note এ উল্লেখ করুন ।",
        [{ text: "ঠিক আছে", style: "cancel" }]
      );
    }

    const total = calculateTotal();
    const message = `Date:- *${inputs.date}*\nDSO:- *${
      inputs.dso
    }*\nLifting:- *${inputs.lifting}*\nCash Lifting:- *${
      inputs.cashLifting
    }*\nTotal Lifting:- *${+inputs.lifting + +inputs.cashLifting}*\nBank:- *${
      inputs.bank
    }*\nCRM:- *${inputs.crm}*\nPre_Due:- *${inputs.preDue}*\nCash Support:- *${
      inputs.cashSupport
    }*\nCash:- *${inputs.cash}*\nReturn:- *${inputs.returnVal}*\n${
      total > 50 ? "Due" : "Adv"
    }:*${Math.abs(total)}*\nNB:- *${inputs.note}*`;

    Alert.alert(
      total < 0 ? "টাকা বেশি আছে!!" : total > 0 ? "টাকা কম আছে!!" : "ধন্যবাদ",
      total > 0
        ? `আপনার হিসাব চেক করুন, আপনার ${total} কম আছে।`
        : total < 0
        ? `আপনার হিসাব চেক করুন, আপনার ${Math.abs(total)} টাকা বেশি আছে।`
        : "আপনার কোন ডিউ/এডভান্স নেই😊",
      [
        { text: "পাঠাবো না❌", style: "cancel" },
        { text: "পাঠাবো✅", onPress: () => openWhatsApp(message) },
      ]
    );
  };

  const openWhatsApp = (message) => {
    const whatsappUrl = `whatsapp://send?text=${encodeURIComponent(message)}`;
    Linking.openURL(whatsappUrl).catch(() =>
      Alert.alert("Error", "Make sure WhatsApp is installed on your device")
    );
  };

  const total = calculateTotal(); // Calculate total for display

  return (
    <ScrollView style={styles.container}>
      <Text variant="titleLarge" style={styles.headerText}>
        Fusion Global Limited
      </Text>
      <SelectDate getDate={(date) => handleInputChange("date", date)} />
      <SelectDso getDso={(dso) => handleInputChange("dso", dso)} />

      <View style={styles.inputContainer}>
        {inputFields.map(({ name, label }) => (
          <CustomInput
            key={name}
            ref={inputRefs.current[name]}
            label={label}
            value={inputs[name]}
            onChange={(value) => handleInputChange(name, value)}
            onSubmitEditing={() => {
              const nextInput = Object.keys(inputRefs.current).find(
                (key, index) => {
                  return (
                    index === Object.keys(inputRefs.current).indexOf(name) + 1
                  );
                }
              );
              if (nextInput) {
                inputRefs.current[nextInput].current.focus();
              }
            }}
            returnKeyType="next"
          />
        ))}
      </View>

      <TextInput
        ref={inputRefs.current.note}
        mode="outlined"
        label="Note"
        textColor="black"
        value={inputs.note}
        onChangeText={(value) => handleInputChange("note", value)}
        returnKeyType="done"
        style={styles.noteInput}
      />
      <Text variant="headlineSmall" style={styles.resultText}>
        {total > 0
          ? `Due ${Math.abs(total)}`
          : total < 0
          ? `Advance ${Math.abs(total)}`
          : "😊"}
      </Text>

      <Button
        mode="contained"
        style={styles.submitButton}
        onPress={handleCalculate}
        icon={"send"}
      />
    </ScrollView>
  );
};

const CustomInput = React.forwardRef(
  ({ label, value, onChange, onSubmitEditing, returnKeyType }, ref) => (
    <TextInput
      mode="outlined"
      keyboardType="numeric"
      textColor="black"
      label={label}
      value={value}
      onChangeText={onChange}
      ref={ref}
      onSubmitEditing={onSubmitEditing}
      returnKeyType={returnKeyType}
      style={styles.box}
    />
  )
);

const styles = StyleSheet.create({
  container: { padding: 10 },
  headerText: {
    textAlign: "center",
    marginBottom: 10,
    fontWeight: "bold",
  },
  inputContainer: { flexDirection: "row", flexWrap: "wrap", gap: 10 },
  box: { width: "48%", backgroundColor: "white" },
  noteInput: { marginVertical: 8, backgroundColor: "white" },
  resultText: {
    textAlign: "center",
    marginVertical: 5,
    borderWidth: 2,
    padding: 10,
    fontWeight: "bold",
    borderColor: "#DBDFEA",
    borderRadius: 20,
  },
  submitButton: {
    backgroundColor: "#6200ea",
    color: "red",
    paddingVertical: 5,
    marginTop: 5,
  },
});

export default Home;
