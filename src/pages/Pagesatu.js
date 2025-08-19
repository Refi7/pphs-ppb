import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import imagesatu from './image/gmasak.png'

const Pagesatu = () => {
  const navigation = useNavigation();
  
  return (
    <View style={styles.Container}>
      <View style={styles.Containerimage}>
        <Image style={styles.gambar1} source={imagesatu}/>
      </View>
      <View>
        <Text style={styles.Teks}>Order from choosen chef</Text>
        <Text style={{ textAlign: 'center' }}>Get all your loved foods in one once place.</Text>
        <Text style={{ textAlign: 'center' }}>you just place the orer we do the rest</Text>
      </View>

      <View style={{ alignSelf: 'center', flexDirection: 'row', marginTop: 30 }}>
        <View style={styles.Bulatsatu}/>
        <View style={styles.Bulatdua}/>
      </View>

      <View style={{ alignSelf: 'center', marginTop: 100,  }}>
        <TouchableOpacity style={styles.Tombolnext} onPress={()=> navigation.navigate('Pagedua')}>
          <Text style={styles.Tekstombolnext}>NEXT</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.Tombolskip} onPress={()=> navigation.navigate('Login')}>
          <Text style={styles.Tekstombolskip}>Skip</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default Pagesatu;

const styles = StyleSheet.create ({

  Container: {
    padding: 10
  },

  Containerimage: {
    alignSelf: 'center',
    
  },

  gambar1: {
    width: 250,
    height: 250,
    marginTop: 150,
    marginBottom: 35
  },

  Teks: {
    fontWeight: '600',
    fontSize: 20,
    textAlign: 'center',
    marginBottom: 15,
    
  },

  Tekstombolnext: {
    color: 'white',
    textAlign: 'center',
    fontWeight: 600,
    fontSize: 12,
    
  },

  Tekstombolskip: {
    textAlign: 'center',
    fontWeight: 600,
    fontSize: 13
  },

  Tombolnext: {
    width: 260, 
    height: 40,
    backgroundColor: '#ff7733',
    justifyContent: 'center',
    borderRadius: 8,
  },

  Tombolskip: {
    width: 260, 
    height: 40,
    marginTop: 10,
    justifyContent: 'center',
  },

  Bulatsatu: {
    width: 8, 
    height: 8,
    backgroundColor: '#ff7733',
    borderRadius: 10,
    marginRight: 4
  },

  Bulatdua: {
    width: 8, 
    height: 8,
    backgroundColor: '#d3d3d3',
    borderRadius: 10,
    marginLeft: 4
  }

});