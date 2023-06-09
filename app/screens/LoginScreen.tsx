import { Button, Divider, HStack, Input, Text, VStack } from "native-base";
import { StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Link } from "@react-navigation/native";

export function LoginScreen() {
  return (
    <VStack
      alignItems="center"
      justifyContent="center"
      height="full"
      paddingX={5}
      space={4}
    >
      <Text style={styles.title}>Login to Your Account</Text>

      <Input
        placeholder="Email"
        variant="filled"
        {...styles.input}
        InputLeftElement={
          <Ionicons
            name="mail"
            size={24}
            color="#6b7280"
            style={{ ...styles.icon, marginRight: 10 }}
          />
        }
      />

      <Input
        placeholder="Password"
        variant="filled"
        {...styles.input}
        type="password"
        InputLeftElement={
          <Ionicons
            name="lock-closed"
            size={24}
            color="#6b7280"
            style={styles.icon}
          />
        }
      />

      <Button {...styles.submitButton}>Sign in</Button>

      <Link to="/forgot-password" style={styles.forgotPassword}>
        Forgot password ?
      </Link>

      <HStack alignItems="center" mt={10}>
        <Divider w="40%" />
        <Text w="10%" textAlign="center">
          Or
        </Text>
        <Divider w="40%" />
      </HStack>

      <HStack space={2}>
        <Text>Don't have an account?</Text>
        <Link to="/sign-up" style={{ fontWeight: "600", color: "#4b5563" }}>
          Sign Up
        </Link>
      </HStack>
    </VStack>
  );
}

const styles = StyleSheet.create({
  title: {
    fontWeight: "700",
    fontSize: 30,
    lineHeight: 45,
    marginBottom: 20,
  },
  icon: {
    marginLeft: 10,
  },
  input: {
    width: "90%",
    borderRadius: 10,
  },
  submitButton: {
    width: "90%",
    marginTop: 30,
    borderRadius: 50,
    backgroundColor: "#4b5563",
  },
  forgotPassword: {
    color: "#2563eb",
    fontWeight: "600",
  },
});
