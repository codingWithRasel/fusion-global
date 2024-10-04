import React, { useState, useEffect } from "react";
import { TextInput } from "react-native-paper";

const SelectDate = ({ getDate }) => {
  const [selectDate, setSelectDate] = useState(
    new Date().toLocaleDateString("en-GB").replace(/\//g, "-")
  );

  useEffect(() => getDate(selectDate), [selectDate]);

  return (
    <TextInput
      label="Date"
      mode="outlined"
      keyboardType="numeric"
      textColor="black"
      style={{ backgroundColor: "white" }}
      value={selectDate}
      onChangeText={setSelectDate}
    />
  );
};

export default SelectDate;
