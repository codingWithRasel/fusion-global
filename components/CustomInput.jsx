import React, { useState, useEffect } from "react";
import {
  View,
  TextInput,
  Animated,
  StyleSheet,
  Text,
  Platform,
} from "react-native";

const OutlinedTextInput = ({
  label,
  value,
  onChangeText,
  errorMessage,
  keyboardType = "default",
  containerStyle,
  inputStyle,
  labelStyleProp,
  errorTextStyle,
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const [isTouched, setIsTouched] = useState(false);
  const animatedLabelPosition = new Animated.Value(value ? 1 : 0);

  useEffect(() => {
    if (value || isFocused) {
      Animated.timing(animatedLabelPosition, {
        toValue: 1,
        duration: 200,
        useNativeDriver: false,
      }).start();
    } else {
      Animated.timing(animatedLabelPosition, {
        toValue: 0,
        duration: 200,
        useNativeDriver: false,
      }).start();
    }
  }, [value, isFocused]);

  const handleFocus = () => {
    setIsFocused(true);
    setIsTouched(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  const animatedLabelStyle = {
    position: "absolute",
    left: 12,
    paddingHorizontal: 6,

    fontSize: animatedLabelPosition.interpolate({
      inputRange: [0, 1],
      outputRange: [16, 14], // Label size transition
    }),
    top: animatedLabelPosition.interpolate({
      inputRange: [0, 1],
      outputRange: [16, -10], // Label position transition
    }),
    color: isFocused || value ? "#6200ea" : "#aaa",
    backgroundColor: isFocused || value ? "white" : "transparent",
    ...labelStyleProp, // Custom label style
  };

  const borderColor = isFocused ? "#6200ea" : "#ccc";
  const showError = errorMessage && isTouched;

  return (
    <View style={[styles.container, containerStyle]}>
      <View
        style={[
          styles.outlinedContainer,
          { borderColor: showError ? "red" : borderColor },
        ]}
      >
        <Animated.Text style={animatedLabelStyle}>{label}</Animated.Text>
        <TextInput
          value={value}
          onChangeText={onChangeText}
          style={[styles.input, inputStyle]} // Custom input style
          onFocus={handleFocus}
          onBlur={handleBlur}
          keyboardType={keyboardType}
          placeholder={isFocused ? "" : label}
          placeholderTextColor="transparent" // Hide placeholder when label is shown
        />
      </View>
      {showError && (
        <Text style={[styles.errorText, errorTextStyle]}>{errorMessage}</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  outlinedContainer: {
    borderWidth: 1,
    borderRadius: 5,
    paddingVertical: Platform.OS === "ios" ? 12 : 10, // Platform-specific adjustments
    paddingHorizontal: 12,
    position: "relative",
  },
  input: {
    height: 35,
    fontSize: 16,
    color: "#333",
    // paddingTop: ,
  },
  errorText: {
    color: "red",
    fontSize: 12,
    marginTop: 5,
  },
});

export default OutlinedTextInput;
