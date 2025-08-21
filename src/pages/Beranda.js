import { View,  Text, StyleSheet, TouchableOpacity, Image, ScrollView } from 'react-native'
import { useNavigation } from '@react-navigation/native';

import image1 from './image/burger1.png'
import image2 from './image/burger2.png'
import image3 from './image/burger3.png'
import image4 from './image/burger4.png'
import image5 from './image/gambarmakanan.png'
import image6 from './image/back_icon.png';
import image7 from './image/logolist.png';
import image8 from './image/logocari.png';
import image9 from './image/menu.png';
import image10 from './image/star.png';
import image11 from './image/truc.png';
import image12 from './image/time.png';

const Beranda = () => {
  const navigation = useNavigation();
  return(
    <ScrollView>
      <View style={styles.Container}>
        <View style={styles.Header}>
          <TouchableOpacity onPress={() => navigation.navigate('Login')}>
            <View style={styles.Tombolback}>
                <Image source={image6} style={styles.Iconback}/>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={styles.List}>
              <Text style={{
                marginLeft: 25,
                fontWeight: 600,
                fontSize: 15,
              }}>BURGER</Text>
              <Image source={image7} style={{width: 12, height: 12, marginLeft: 10}}/>
            </View>
          </TouchableOpacity>
          <View style={{flexDirection: 'row'}}>
            <TouchableOpacity>
              <View style={styles.Containericoncari}>
                <Image source={image8} style={styles.Gambarcari}/>
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View style={styles.Containericoncari2}>
                <Image source={image9} style={styles.Gambarcari}/>
              </View>
            </TouchableOpacity>
          </View>
        </View>
        <Text style={{ fontSize: 25,fontWeight: 600 }}>Popular Burger</Text>
        <View style={styles.Menubarissatu}>
          <View style={styles.Menusatu}>
              <Image source={image2} style={styles.Gambar1}/>
                <Text style={styles.Teks1image1}>Burger Bistro</Text>

                <Text style={{
                  bottom: 33,
                  marginLeft: 15,
                  fontSize: 13
                }}>Rose Garden</Text>

                <Text style={{
                  bottom: 26, 
                  marginLeft: 15,
                  fontWeight: 600,
                  fontSize: 16,
                }}>$12</Text>

                <View style={styles.Containertomboltambah}>
                  <TouchableOpacity onPress={()=> navigation.navigate('Pagedetail')}>
                    <Text style={styles.Tekstambahimage1}>+</Text>
                  </TouchableOpacity>
                </View>
          </View>
          <View style={styles.Menudua}>
            <Image source={image1} style={styles.Gambar1}/>
                <Text style={styles.Teks1image2}>Smokin' Burger</Text>

                <Text style={{
                  bottom: 33,
                  marginLeft: 15,
                  fontSize: 13
                }}>Cafenio Restaurant</Text>

                <Text style={{
                  bottom: 26, 
                  marginLeft: 15,
                  fontWeight: 600,
                  fontSize: 16,
                }}>$34</Text>

                <View style={styles.Containertomboltambah}>
                  <TouchableOpacity onPress={()=> navigation.navigate('Pagedetail2')}>
                    <Text style={styles.Tekstambahimage1}>+</Text>
                  </TouchableOpacity>
                </View>
          </View>
        </View>
        <View style={styles.Menubarisdua}>
          <View style={styles.Menusatu}>
              <Image source={image3} style={styles.Gambar3}/>
                <Text style={{
                  bottom: 30,
                  marginLeft: 15,
                  fontWeight: 600,
                  fontSize: 16,
                }}>Buffalo Burgers</Text>

                <Text style={{
                  bottom: 25,
                  marginLeft: 15,
                  fontSize: 13
                }}>Kaji Firm Kitchen</Text>

                <Text style={{
                  bottom: 16, 
                  marginLeft: 15,
                  fontWeight: 600,
                  fontSize: 16,
                }}>$28</Text>
                <View style={styles.Containertomboltambah}>
                  <TouchableOpacity onPress={()=> navigation.navigate('Pagedetail3')}>
                    <Text style={styles.Tekstambahimage1}>+</Text>
                  </TouchableOpacity>
                </View>
          </View>
          <View style={styles.Menudua}>
            <Image source={image4} style={styles.Gambar1}/>
                <Text style={styles.Teks1image2}>Burger Bistro</Text>

                <Text style={{
                  bottom: 33,
                  marginLeft: 15,
                  fontSize: 13
                }}>Bullseye Burgers</Text>

                <Text style={{
                  bottom: 26, 
                  marginLeft: 15,
                  fontWeight: 600,
                  fontSize: 16,
                }}>$53</Text>

                <View style={styles.Containertomboltambah}>
                  <TouchableOpacity onPress={()=> navigation.navigate('Pagedetail4')}>
                    <Text style={styles.Tekstambahimage1}>+</Text>
                  </TouchableOpacity>
                </View>
          </View>
        </View>
        <View style={{ marginTop: 40 }}>
          <Text style={{ fontWeight: 600, fontSize: 20 }}>Open Resturants</Text>
          <Image source={image5} style={styles.Gambar5}/>
          <Text style={{ 
            fontWeight: 600, 
            fontSize: 20,
            marginTop: 20
             }}>Tasty Treat Gallery</Text>

              <View style={{flexDirection: 'row', marginTop: 10}}>
                <View style={{ flexDirection: 'row'}}>
                    <Image source={image10} style={styles.Gambarstar}/>
                    <Text style={{marginTop: 5, fontWeight: 600, marginLeft: 10}}>4.7</Text>
                </View>
                <View style={{flexDirection: 'row', marginLeft: 75}}>
                    <Image source={image11} style={styles.Gambarstar}/>
                    <Text style={{marginTop: 5, fontWeight: 600, marginLeft: 10}}>Free</Text>
                </View>
                <View style={{flexDirection: 'row', marginLeft: 58}}>
                    <Image source={image12} style={styles.Gambarstar}/>
                    <Text style={{marginTop: 5, fontWeight: 600, marginLeft: 10}}>20 menit</Text>
                </View>
                </View>
        </View>
        
      </View>
    </ScrollView>
  )
}

export default Beranda

const styles = StyleSheet.create({
  Container: {

    paddingTop: 15, 
    paddingLeft: 22, 
    paddingRight: 22, 
    paddingBottom: 22, 
    backgroundColor: '#fafafa',
    height: 1030
  },

  Header: {
    marginTop: 40,
    marginBottom: 50,
    flexDirection: 'row',
  },

  Containertomboltambah: {
    backgroundColor: '#ff8800',
    alignSelf: 'flex-end',
    borderRadius: 100,
    width: 30,
    height: 30,
    position: 'absolute',
    justifyContent: 'center',
    bottom: 10,
    right: 10
  },

  Menubarissatu: {
    flexDirection: 'row',
    marginTop: 15,
    justifyContent: 'space-between'
  },

  Menubarisdua: {
    flexDirection: 'row',
    marginTop: 10,
    justifyContent: 'space-between'
  },

  Menusatu: {
    width: 160, 
    height: 135,
    backgroundColor: 'white',
    borderRadius: 13, 
    marginTop: 60, 
    shadowColor: '#000',
    shadowOffset: {
    width: 0,
    height: 3,
    },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 5,
    borderRadius: 20,
  }, 

  Menudua: {
    width: 160, 
    height: 140,
    backgroundColor: 'white',
    marginLeft: 25,
    borderRadius: 13, 
    marginTop: 60, 
    shadowColor: '#000',
    shadowOffset: {
    width: 0,
    height: 3,
    },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 5,
    borderRadius: 20,
  }, 

  Tombolback: {
    backgroundColor: '#dcdcdc',
    padding: 15,
    borderRadius: 100,
  },

  List: {
    width: 125, 
    height: 50,
    borderWidth: 0.5,
    borderColor: '#dcdcdc',
    borderRadius: 30,
    marginLeft: 20,
    alignItems: 'center',
    flexDirection: 'row'
  },

  Containericoncari: {
    backgroundColor: 'black',
    width: 45,
    height: 45,
    justifyContent: 'center',
    borderRadius: 100, 
    marginLeft: 45,
    
  },

  Containericoncari2: {
    backgroundColor: '#dcdcdc',
    width: 45,
    height: 45,
    justifyContent: 'center',
    borderRadius: 100,
    marginLeft: 15,
    
  },


  // STYLE TEKS

  Teks1image1: {
    bottom: 38,
    marginLeft: 15,
    fontWeight: 600,
    fontSize: 16,
  },

  Tekstambahimage1: {
    
    fontSize: 25,
    fontWeight: 600,
    textAlign: 'center',
    color: 'white'
  },

  Teks1image2: {
    bottom: 38,
    marginLeft: 15,
    fontWeight: 600,
    fontSize: 16,
  },


  // STYLE GAMBAR GAMBAR

  Gambar1: {
    width: 95, 
    height: 90, 
    bottom: 45,
    alignSelf: 'center',
    position: 'relative', 
  },

  Gambar3: {
    width: 95, 
    height: 80, 
    bottom: 40,
    alignSelf: 'center',
    position: 'relative', 
  },

  Gambar5: {
    width: '100%',
    height: 200,
    borderRadius: 15,
    marginTop: 20
  },

  Iconback: {
    width: 15,
    height: 15
  }, 

  Gambarcari: {
    width: 25, 
    height: 25,
    alignSelf: 'center'
  },

  Iconbottom: {
    width: 25,
    height: 25
  },

  Gambarstar: {
    width: 25,
    height: 25
  },
})