import React, {useState} from 'react'; 
import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native';

import image1 from './image/gpthpth.png'
import image2 from './image/facebook.png'
import image3 from './image/x.png'
import image4 from './image/apple.png'


const Login = () => {
  const navigation = useNavigation();
  const [email,setEmail] = useState ('');
  const [password,setPassword] = useState ('');

  return(
    <View style={styles.Container}>
      <Image style={styles.Gambarsatu} source={image1}/>
      <Text style={styles.Tekslogin}>Log In</Text>
      <Text style={styles.Deskripsi}>Please sign in to your existing account</Text>

      <View style={styles.Containerbottom}>
        <Text style={{ fontSize: 15, fontWeight: 600 }}>EMAIL</Text>
        <TextInput style={styles.Inputemail} value={email} onChangeText={(text) => setEmail(text)} placeholder='Masukkan email Anda...'/>

        <Text style={{ fontSize: 15, fontWeight: 600, marginTop: 30 }}>PASSWORD</Text>
        <TextInput style={styles.Inputemail} value={password} onChangeText={(text) => setPassword(text)} secureTextEntry={true} 
        placeholder='Masukkan password Anda'/>

        <View style={{ flexDirection: 'row', marginTop: 30 }}>
          <Text style={{ marginRight: 146, fontWeight: 600 }}>Remember Me</Text>
            <TouchableOpacity>
             <Text style={{ fontWeight: 600, color: '#ff7733' }}>Forgot Password</Text>
            </TouchableOpacity>
        </View>
        <View style={styles.Tombollogin}>
          <TouchableOpacity onPress={()=> navigation.navigate('Beranda')}>
            <Text style={{ color: 'white', fontWeight: 600, textAlign: 'center', padding: 20 }}>LOG IN</Text>
          </TouchableOpacity>
        </View>
        <View style={{ marginTop: 30, flexDirection: 'row' }}>
          <Text style={{ marginLeft: 69, marginRight: 10 }}>Don't have an account? </Text>
          <TouchableOpacity>
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

