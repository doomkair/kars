import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { NativeBaseProvider, Box } from "native-base";
import { Platform, SafeAreaView, StatusBar, StyleSheet } from "react-native";
import { HomeScreen, LoginScreen } from "./app/screens";

const { Navigator, Screen } = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <SafeAreaView style={styles.safeContainer}>
        <NativeBaseProvider>
          <Navigator
            screenOptions={{
              headerShown: false,
              contentStyle: styles.screen,
            }}
            initialRouteName="login"
          >
            <Screen name="home" component={HomeScreen} />
            <Screen name="login" component={LoginScreen} />
          </Navigator>
        </NativeBaseProvider>

        <ExpoStatusBar style="auto" />
      </SafeAreaView>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  safeContainer: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  screen: {
    backgroundColor: "white",
  },
});
