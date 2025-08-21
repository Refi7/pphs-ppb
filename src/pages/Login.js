import React, {useState} from 'react'; 
import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity, Alert } from 'react-native'
import { useNavigation } from '@react-navigation/native';

import image1 from './image/gpthpth.png'
import image2 from './image/facebook.png'
import image3 from './image/x.png'
import image4 from './image/apple.png'


const Login = () => {
  const navigation = useNavigation();
  const [email,setEmail] = useState ('');
  const [password,setPassword] = useState ('');

  const handleLogin = async () => {
      if (!email || !password) {
        Alert.alert("Error", "Email dan password wajib diisi");
        return;
      }
  
      try {
        const response = await fetch("http://10.10.57.239:5000/login", { // kalau emulator Android
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email: email, password: password })
        });
  
        const data = await response.json();
  
        if (response.ok) {
          Alert.alert("Sukses", "Login berhasil ✅");
          // TODO: simpan token ke AsyncStorage biar bisa dipake di screen lain
          // AsyncStorage.setItem("token", data.token);
          navigation.navigate("Beranda");
        } else {
          Alert.alert("Gagal", data.message || "Login gagal");
        }
      } catch (err) {
        console.error(err);
        Alert.alert("Error", "Tidak bisa konek ke server");
      }
    };

  return(
    <View style={styles.Container}>
      <Image style={styles.Gambarsatu} source={image1}/>
      <Text style={styles.Tekslogin}>LOGIN</Text>
      <Text style={styles.Deskripsi}>Please sign in to your existing account</Text>

      <View style={styles.Containerbottom}>
        <Text style={{ fontSize: 15, fontWeight: "600" }}>EMAIL</Text>
        <TextInput
          style={styles.Inputemail}
          value={email}
          onChangeText={setEmail}
          placeholder='Masukkan email Anda...'
        />

        <Text style={{ fontSize: 15, fontWeight: "600", marginTop: 30 }}>PASSWORD</Text>
        <TextInput
          style={styles.Inputemail}
          value={password}
          onChangeText={setPassword}
          secureTextEntry
          placeholder='Masukkan password Anda'
        />

        <View style={styles.Tombollogin}>
          <TouchableOpacity onPress={handleLogin}>
            <Text style={{ color: 'white', fontWeight: "600", textAlign: 'center', padding: 20 }}>LOG IN</Text>
          </TouchableOpacity>
        </View>
        <View style={{ marginTop: 30, flexDirection: 'row' }}>
          <Text style={{ marginLeft: 69, marginRight: 10 }}>Don't have an account? </Text>
          <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
            <Text style={{ color: '#ff8800', fontWeight: 600, textAlign: 'center' }}>SIGN UP</Text>
          </TouchableOpacity>
        </View>
        <Text style={{ textAlign: 'center', marginTop: 25, fontWeight: 600 }}>Or</Text>
        <View style={{ flexDirection: 'row', alignSelf: 'center', marginTop: 20 }}>
          <TouchableOpacity>
            <View style={{ 
              backgroundColor: '#2277aa', 
              padding: 20,
              width: 60,
              borderRadius: 100,
              justifyContent: 'center',
              marginRight: 10
              }}>
              <Image source={image2} style={styles.Gambardua}/>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={{ 
              backgroundColor: 'black', 
              padding: 20,
              width: 60,
              borderRadius: 100,
              justifyContent: 'center'
              }}>
              <Image source={image3} style={styles.Gambartiga}/>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={{ 
              backgroundColor: 'black', 
              padding: 20,
              width: 60,
              borderRadius: 100,
              justifyContent: 'center',
              marginLeft: 10
              }}>
              <Image source={image4} style={styles.Gambarempat}/>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

export default Login

const styles = StyleSheet.create ({
  Container: {
    width: '100%',
    height: '100%',
    backgroundColor: '#020426',
  },

  Containerbottom: {
    width: '100%',
    height: '69%',
    backgroundColor: 'white',
    position: 'absolute',
    bottom: 0,
    borderTopLeftRadius: 30, 
    borderTopRightRadius: 30, 
    padding: 30
  },

  Tekslogin: {
    color: 'white',
    textAlign: 'center',
    fontSize: 30, 
    fontWeight: 600,
    marginTop: 140
  }, 

  Deskripsi: {
    color: 'white',
    textAlign: 'center',
    marginTop: 8, 
    fontSize: 18
  }, 

  Inputemail: {
    backgroundColor: '#ebebeb',
    padding: 20, 
    marginTop: 10, 
    borderRadius: 10
  },

  Gambarsatu: {
    position: 'absolute',
    width: 300, 
    height: 300
  }, 

  Gambardua: {
    width: 8, 
    height: 19,
    alignSelf: 'center'
    
  },

  Gambartiga: {
    width: 20, 
    height: 18,
    alignSelf: 'center'
    
  },

  Gambarempat: {
    width: 16, 
    height: 20,
    alignSelf: 'center'
    
  }, 

  Tombollogin: {
    backgroundColor: '#ff8800', 
    marginTop: 30,
    borderRadius: 15,
  }
  
})

