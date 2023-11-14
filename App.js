import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import CoachOnboarding from "./OnboardingFiles/CoachOnboarding";
import LearnerOnboarding from "./OnboardingFiles/LearnerOnboarding";
import SignIn from "./OnboardingFiles/SignIn";
import SignUp from "./OnboardingFiles/SignUp";
import TermsConditions from "./OnboardingFiles/TermsConditions";
import TrackSelection from "./OnboardingFiles/TrackSelection";
import LearnedOnboarding from "./OnboardingFiles/LearnerOnboarding";
import MainScreen from "./MainScreenFiles/MainScreen";
import { NavigationContainer } from "@react-navigation/native";
import Amplify from "@aws-amplify/core";
import config from "./src/aws-exports";
import ProfileScreen from "./MainScreenFiles/ProfileScreen";

Amplify.configure(config);
const Stack = createStackNavigator();
function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
        <Stack.Screen name="SignIn" component={SignIn} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="Terms" component={TermsConditions} />
        <Stack.Screen name="TrackSelection" component={TrackSelection} />
        <Stack.Screen name="LearnedOnboarding" component={LearnedOnboarding} />
        <Stack.Screen name="CoachOnboarding" component={CoachOnboarding} />
        <Stack.Screen name="MainScreen" component={MainScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
