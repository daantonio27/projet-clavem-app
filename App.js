import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.innerText}>
        cl
        <Text style={styles.baseText}>
          a
          <Text style={styles.innerText}>
            vem{"\n"}
            {"\n"}
          </Text>
        </Text>
      </Text>
      <TextInput style={styles.input} placeholder="Email address" />
      <TextInput style={styles.input} placeholder="Password" />
      <Text>
        Pas de compte ?
        <Text style={styles.innerText}>
          {" "}
          Créer un compte{"\n"}
          {"\n"}
          {"\n"}
          {"\n"}
        </Text>
      </Text>
      <View style={styles.btnContainer}>
        <TouchableOpacity style={styles.userBtn}>
          <Text style={styles.btnTxt}>Facebook</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.userBtn}>
          <Text style={styles.btnTxt}>Google</Text>
        </TouchableOpacity>
        <Text>
          {"\n"}En créant votre compte vous accepter les
          <Text style={styles.baseText}>
            {" "}
            termes d'utilisation and Politique de sécurité
          </Text>
        </Text>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#7b7b7b",
    alignItems: "center",
    justifyContent: "center",
  },

  baseText: {
    color: "#FFC412",
  },

  innerText: {
    color: "blue",
  },

  input: {
    width: "90%",
    backgroundColor: "#fff",
    padding: 15,
    marginBottom: 10,
  },

  btnContainer: {
    flexDirection: "column",
    justifyContent: "space-between",
    width: "90%",
  },

  userBtn: {
    backgroundColor: "#F2F2FA",
    padding: 15,
    width: "90%",
    margin: 10,
  },

  btnTxt: {
    fontSize: 18,
    textAlign: "center",
  },
});
