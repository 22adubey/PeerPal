import { StatusBar } from "expo-status-bar";
import { Image, StyleSheet, Text, View } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";

const DUMMY_DATA = {
  name: "Conrad S.",
  hobby: "Coding",
  biography:
    "Hey there, I'm Liam Mitchell, your friendly coding tutor! 👨‍💻 I'm passionate about all things tech and love helping others dive into the exciting world of coding. With years of experience under my belt, I've mastered various programming languages and can guide you through everything from the basics to more advanced topics.",
};

export default function MainScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>Profile</Text>
      <Image
        style={styles.image}
        source={require("../assets/test-picture.png")}
      />
      <StatusBar style="auto" />
      <View style={styles.infoContainer}>
        <Text
          style={{ color: "#09506D", fontWeight: "bold", fontSize: "40px" }}
        >
          {DUMMY_DATA.name}
        </Text>
        <View style={styles.hobbyContainer}>
          <Text>{DUMMY_DATA.hobby}</Text>
        </View>
        <View>
          <Text style={{ marginVertical: 20 }}>Bio</Text>
          <Text>{DUMMY_DATA.biography}</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "start",
    justifyContent: "center",
  },
  titleText: {
    fontWeight: "bold",
    fontSize: "45px",
    paddingHorizontal: 10,
  },
  image: {
    width: "100%",
    borderRadius: 20,
    marginVertical: 30,
  },
  infoContainer: {
    backgroundColor: "#D6EFFF",
    marginHorizontal: 20,
    padding: 20,
    borderRadius: 10,
  },
  hobbyContainer: {
    backgroundColor: "#D9D9D9",
    paddingHorizontal: 30,
    paddingVertical: 3,
    borderRadius: 300,
    alignSelf: "flex-start",
  },
});
