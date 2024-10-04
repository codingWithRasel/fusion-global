import React from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";

const BankDataList = () => {
  const bankData = [
    {
      bankName: "Premier Bank Limited",
      branchName: "Narayanganj Branch",
      accountNumber: "12013600000001",
      accountsTitle:
        "Bangladesh Post Office Nagad MFS Trust Cum Settlement Account",
    },
    {
      bankName: "IFIC",
      branchName: "Gulshan Branch, Dhaka",
      accountNumber: "0190146504041",
      accountsTitle:
        "Bangladesh Post Office Nagad MFS Trust Cum Settlement Account",
    },
    {
      bankName: "United Commercial Bank Ltd.",
      branchName: "Banani, Dhaka",
      accountNumber: "0901301000000436",
      accountsTitle:
        "Bangladesh Post Office Nagad MFS Trust Cum Settlement Account",
    },
    {
      bankName: "First Security Islami Bank",
      branchName: "Gulshan Branch",
      accountNumber: "13100000637",
      accountsTitle:
        "Bangladesh Post Office Nagad MFS Trust Cum Settlement Account",
    },
    {
      bankName: "Agrani Bank Limited",
      branchName: "Gulshan-1, Dhaka",
      accountNumber: "0200012362377",
      accountsTitle:
        "Bangladesh Post Office Nagad MFS Trust Cum Settlement Account",
    },
    {
      bankName: "Jamuna Bank Limited",
      branchName: "Dilkusha Commercial Area, Dhaka",
      accountNumber: "0060320001881",
      accountsTitle:
        "Bangladesh Post Office Nagad MFS Trust Cum Settlement Account",
    },
    {
      bankName: "One Bank Limited",
      branchName: "Banani, Kemal Ataturk Avenue, Dhaka",
      accountNumber: "0182090000014",
      accountsTitle:
        "Bangladesh Post Office Nagad MFS Trust Cum Settlement Account",
    },
    {
      bankName: "Mercantile Bank Limited",
      branchName: "Banani, Kemal Ataturk Avenue, Dhaka",
      accountNumber: "110613125289042",
      accountsTitle:
        "Bangladesh Post Office Nagad MFS Trust Cum Settlement Account",
    },
    {
      bankName: "Southeast Bank Ltd",
      branchName: "Gulshan-1, Dhaka",
      accountNumber: "001013100001639",
      accountsTitle:
        "Bangladesh Post Office Nagad MFS Trust Cum Settlement Account",
    },
    {
      bankName: "Islami Bank Bangladesh Ltd",
      branchName: "Mohakhali, Dhaka",
      accountNumber: "20501910900003918",
      accountsTitle:
        "Bangladesh Post Office Nagad MFS Trust Cum Settlement Account",
    },
    {
      bankName: "AB Bank Limited",
      branchName: "Kalatiya Branch, Shamshurpur, Dhaka",
      accountNumber: "4043765186430",
      accountsTitle:
        "Bangladesh Post Office Nagad MFS Trust Cum Settlement Account",
    },
    {
      bankName: "Dhaka Bank Limited",
      branchName: "Banani, Kemal Ataturk Avenue, Dhaka",
      accountNumber: "2061500002480",
      accountsTitle:
        "Bangladesh Post Office Nagad MFS Trust Cum Settlement Account",
    },
    {
      bankName: "Eastern Bank Limited",
      branchName: "Banani-11 Branch, Dhaka",
      accountNumber: "1161360280850",
      accountsTitle:
        "Bangladesh Post Office Nagad MFS Trust Cum Settlement Account",
    },
    {
      bankName: "Midland Bank Limited",
      branchName: "Gulshan North Avenue, Dhaka",
      accountNumber: "88011820000015",
      accountsTitle:
        "Bangladesh Post Office Nagad MFS Trust Cum Settlement Account",
    },
    {
      bankName: "Mutual Trust Bank Limited",
      branchName: "Dilkusha C/A, Dhaka",
      accountNumber: "0020320003954",
      accountsTitle:
        "Bangladesh Post Office Nagad MFS Trust Cum Settlement Account",
    },
    {
      bankName: "Sonali Bank Limited",
      branchName: "Banani, Kemal Ataturk Avenue, Dhaka",
      accountNumber: "0106503000023",
      accountsTitle:
        "Bangladesh Post Office Nagad MFS Trust Cum Settlement Account",
    },
    {
      bankName: "The City Bank Ltd.",
      branchName: "Pragati Sarani Branch, Dhaka",
      accountNumber: "3102446132001",
      accountsTitle:
        "Bangladesh Post Office Nagad MFS Trust Cum Settlement Account",
    },
    {
      bankName: "Trust Bank Limited",
      branchName: "Sadhinota Tower, Mohakhali, Dhaka",
      accountNumber: "70220322000160",
      accountsTitle:
        "Bangladesh Post Office Nagad MFS Trust Cum Settlement Account",
    },
    {
      bankName: "Al-Arafah Islami Bank Ltd",
      branchName: "Gulshan-1, Dhaka",
      accountNumber: "0541220000967",
      accountsTitle:
        "Bangladesh Post Office Nagad MFS Trust Cum Settlement Account",
    },
    {
      bankName: "Shahjalal Islami Bank Ltd.",
      branchName: "Gulshan Branch, Dhaka",
      accountNumber: "405713100000020",
      accountsTitle:
        "Bangladesh Post Office Nagad MFS Trust Cum Settlement Account",
    },
    {
      bankName: "Meghna Bank Ltd",
      branchName: "Banani",
      accountNumber: "112013500000014",
      accountsTitle:
        "Bangladesh Post Office Nagad MFS Trust Cum Settlement Account",
    },
    {
      bankName: "NCC Bank Ltd",
      branchName: "Gulshan",
      accountNumber: "00120325001678",
      accountsTitle:
        "Bangladesh Post Office Nagad MFS Trust Cum Settlement Account",
    },
    {
      bankName: "Bank Asia",
      branchName: "Banani",
      accountNumber: "01236050884",
      accountsTitle:
        "Bangladesh Post Office Nagad MFS Trust Cum Settlement Account",
    },
  ];

  return (
    <FlatList
      data={bankData}
      keyExtractor={(item, index) => index.toString()}
      renderItem={({ item, index }) => (
        <View
          style={[
            styles.itemContainer,
            index % 2 !== 0 && styles.oddBackground,
          ]}
        >
          <Text style={styles.bankName}>{item.bankName}</Text>
          <Text style={styles.branchName}>{item.branchName}</Text>
          <Text style={styles.accountDetails}>
            <Text style={styles.label}>Account Number: </Text>
            {item.accountNumber}
          </Text>
          <Text style={styles.accountDetails}>
            <Text style={styles.label}>Accounts Title: </Text>
            {item.accountsTitle}
          </Text>
        </View>
      )}
    />
  );
};

export default BankDataList;

const styles = StyleSheet.create({
  itemContainer: {
    padding: 15,
    marginVertical: 5,
    borderRadius: 8,
    backgroundColor: "#FFA500", // Vibrant orange
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 2, // For Android shadow
  },
  bankName: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 5,
  },
  branchName: {
    fontSize: 16,
    fontStyle: "italic",
    marginBottom: 10,
  },
  accountDetails: {
    fontSize: 16,
    marginBottom: 5,
    textAlign: "justify",
  },
  label: {
    fontWeight: "bold",
  },
  oddBackground: {
    backgroundColor: "#20B2AA", // Soft teal
  },
});
