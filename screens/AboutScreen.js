import React from "react";
import { View, Text, StyleSheet, Image, ScrollView } from "react-native";

const About = () => (
  <ScrollView>
    <View style={styles.container}>
      <Image source={require("../assets/Rasel.jpeg")} style={styles.image} />
      <Text style={styles.header}>About Developer</Text>
      <Text style={styles.content}>
        I am Rasel Hossain, a passionate React Developer with experience in
        building websites, web apps, and mobile apps using React and React
        Native. Thanks for visiting!
      </Text>
      <View style={{ marginTop: 40 }}>
        <Text
          style={{
            textAlign: "center",
            fontSize: 18,
            fontWeight: "bold",
            marginBottom: 20,
            fontStyle: "italic",
          }}
        >
          Courtesy of
        </Text>
        <View style={{ flexDirection: "row", gap: 40 }}>
          <View>
            <Image
              source={require("../assets/dm.jpeg")}
              style={{
                width: 110,
                height: 110,
                borderRadius: 100,
                borderWidth: 2,
                borderColor: "black",
              }}
            />
            <Text
              style={{
                textAlign: "center",
                marginLeft: -20,
                fontWeight: "bold",
                fontStyle: "italic",
              }}
            >
              {`Asaduzzaman Asad`}
            </Text>
          </View>
          <View>
            <Image
              source={require("../assets/sharif.jpg")}
              style={{
                width: 110,
                height: 110,
                borderRadius: 100,
                borderWidth: 2,
                borderColor: "black",
              }}
            />
            <Text
              style={{
                textAlign: "center",
                marginLeft: -10,
                fontWeight: "bold",
                fontStyle: "italic",
              }}
            >
              {`Sharif Hasan`}
            </Text>
          </View>
        </View>
      </View>
    </View>
  </ScrollView>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 30,
    paddingTop: 20,
    alignItems: "center",
    backgroundColor: "#f0f4f8",
  },
  image: {
    width: 120,
    height: 120,
    borderRadius: 100,
    marginBottom: 10,
    borderWidth: 4,
    borderColor: "#ddd",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 10,
    elevation: 8,
  },
  header: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 10,
    textAlign: "center",
  },
  content: {
    fontSize: 14,
    lineHeight: 26,
    textAlign: "justify",
    color: "#555",
    paddingHorizontal: 20,
  },
});

export default About;
