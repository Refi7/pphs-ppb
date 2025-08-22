import React, { useState } from "react";
import { 
  View, 
  Text, 
  StyleSheet, 
  Image, 
  TextInput, 
  TouchableOpacity, 
  Alert, 
  Dimensions, 
  ScrollView // ⬅️ ini ditambah
} from "react-native";
import { useNavigation } from "@react-navigation/native";

import image1 from './image/gpthpth.png'
import image2 from './image/facebook.png'
import image3 from './image/x.png'
import image4 from './image/apple.png'

const { width, height } = Dimensions.get("window");

const SignUp = () => {
  const navigation = useNavigation();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSignUp = async () => {
  if (!name || !password) {
    alert("Nama dan Password wajib diisi!");
    return;
  }

  try {
    const response = await fetch("http://10.10.57.239:5000/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: name,  // ⬅️ kirim name ke backend
        email: email,
        password: password,
      }),
    });

    const data = await response.json();
    console.log(data);

    if (response.ok) {
      alert("Registrasi berhasil!");
      navigation.replace("Login");
    } else {
      alert(data.message || "Registrasi gagal");
    }
  } catch (error) {
    console.error(error);
    alert("Terjadi error: " + error.message);
  }
};

  return (
    <View style={styles.Container}>
      <Image style={styles.Gambarsatu} source={image1} />
      <Text style={styles.TeksDaftar}>Sign Up</Text>
      <Text style={styles.Deskripsi}>Create a new account to continue</Text>

      <View style={styles.Containerbottom}>
        <ScrollView 
          showsVerticalScrollIndicator={false} 
          contentContainerStyle={{ paddingBottom: 30 }}
        >
          <Text style={styles.Label}>Name</Text>
          <TextInput
            style={styles.Input}
            value={name}
            onChangeText={setName}
            placeholder="Enter Your Full Name..."
          />

          <Text style={[styles.Label, { marginTop: 20 }]}>Email</Text>
          <TextInput
            style={styles.Input}
            value={email}
            onChangeText={setEmail}
            placeholder="Enter Your Email Address..."
          />

          <Text style={[styles.Label, { marginTop: 20 }]}>Password</Text>
          <TextInput
            style={styles.Input}
            value={password}
            onChangeText={setPassword}
            secureTextEntry
            placeholder="Enter Your Password..."
          />

          <Text style={[styles.Label, { marginTop: 20 }]}>Confirm Password</Text>
          <TextInput
            style={styles.Input}
            value={confirmPassword}
            onChangeText={setConfirmPassword}
            secureTextEntry
            placeholder="Re-enter Your Password..."
          />

          <TouchableOpacity style={styles.TombolDaftar} onPress={handleSignUp}>
            <Text style={styles.TextButton}>SIGN UP</Text>
          </TouchableOpacity>

          {/* Login link */}
          <View style={{ marginTop: 20, flexDirection: "row", justifyContent: "center" }}>
            <Text>Already have an account? </Text>
            <TouchableOpacity onPress={() => navigation.navigate("Login")}>
              <Text style={{ color: "#ff8800", fontWeight: "600" }}>LOG IN</Text>
            </TouchableOpacity>
          </View>

          {/* Social Login */}
          <Text style={{ textAlign: "center", marginTop: 25, fontWeight: "600" }}>Or</Text>
          <View style={{ flexDirection: "row", alignSelf: "center", marginTop: 20 }}>
            <TouchableOpacity>
              <View style={styles.SosmedButton}>
                <Image source={image2} style={styles.Icon} />
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View style={[styles.SosmedButton, { backgroundColor: "black" }]}>
                <Image source={image3} style={styles.Icon} />
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View style={[styles.SosmedButton, { backgroundColor: "black" }]}>
                <Image source={image4} style={styles.Icon} />
              </View>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

export default SignUp;


const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: "#020426",
  },
  Containerbottom: {
    width: "100%",
    height: height * 0.7,
    backgroundColor: "white",
    position: "absolute",
    bottom: 0,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    padding: 20,
  },
  TeksDaftar: {
    color: "white",
    textAlign: "center",
    fontSize: width * 0.08,
    fontWeight: "600",
    marginTop: height * 0.18,
  },
  Deskripsi: {
    color: "white",
    textAlign: "center",
    marginTop: 8,
    fontSize: width * 0.045,
  },
  Input: {
    backgroundColor: "#ebebeb",
    padding: 15,
    marginTop: 8,
    borderRadius: 10,
    fontSize: width * 0.04,
  },
  Label: {
    fontSize: width * 0.04,
    fontWeight: "600",
  },
  Gambarsatu: {
    position: "absolute",
    width: width * 0.7,
    height: width * 0.7,
  },
  TombolDaftar: {
    backgroundColor: "#ff8800",
    marginTop: 25,
    borderRadius: 15,
    paddingVertical: 15,
  },
  TextButton: {
    color: "white",
    fontWeight: "600",
    textAlign: "center",
    fontSize: width * 0.045,
  },
  SosmedButton: {
    backgroundColor: "#2277aa",
    padding: 15,
    width: 60,
    height: 60,
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 5,
  },
  Icon: {
    width: 25,
    height: 25,
    resizeMode: "contain",
  },
});