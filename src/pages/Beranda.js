import { View,  Text, StyleSheet, TouchableOpacity, Image, ScrollView } from 'react-native'
import image1 from './image/burgersatu.png'
import image2 from './image/burgerdua.png'
import image3 from './image/burger3.png'
import image4 from './image/burger4.png'
import image5 from './image/gambarmakanan.png'

const Beranda = () => {
  return(
    <ScrollView>
      <View style={styles.Container}>
        <View style={styles.Header}>
          <Text>Header</Text>
        </View>
        <Text style={{ fontSize: 25,fontWeight: 600 }}>Popular Burger</Text>
        <View style={styles.Menubarissatu}>
          <View style={styles.Menusatu}>
              <Image source={image1} style={styles.Gambar1}/>
                <Text style={styles.Teks1image1}>Burger Bistro</Text>

                <Text style={{
                  bottom: 33,
                  marginLeft: 10,
                  fontSize: 13
                }}>Rose Garden</Text>

                <Text style={{
                  bottom: 26, 
                  marginLeft: 10,
                  fontWeight: 600,
                  fontSize: 16,
                }}>$40</Text>

                <View style={styles.Containertomboltambah}>
                  <TouchableOpacity>
                    <Text style={styles.Tekstambahimage1}>+</Text>
                  </TouchableOpacity>
                </View>
          </View>
          <View style={styles.Menudua}>
            <Image source={image2} style={styles.Gambar1}/>
                <Text style={styles.Teks1image2}>Smokin' Burger</Text>

                <Text style={{
                  bottom: 33,
                  marginLeft: 10,
                  fontSize: 13
                }}>Cafenio Restaurant</Text>

                <Text style={{
                  bottom: 26, 
                  marginLeft: 10,
                  fontWeight: 600,
                  fontSize: 16,
                }}>$60</Text>

                <View style={styles.Containertomboltambah}>
                  <TouchableOpacity>
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
                  marginLeft: 10,
                  fontWeight: 600,
                  fontSize: 16,
                }}>Burger Bistro</Text>

                <Text style={{
                  bottom: 25,
                  marginLeft: 10,
                  fontSize: 13
                }}>Rose Garden</Text>

                <Text style={{
                  bottom: 16, 
                  marginLeft: 10,
                  fontWeight: 600,
                  fontSize: 16,
                }}>$40</Text>

                <View style={styles.Containertomboltambah}>
                  <TouchableOpacity>
                    <Text style={styles.Tekstambahimage1}>+</Text>
                  </TouchableOpacity>
                </View>
          </View>
          <View style={styles.Menudua}>
            <Image source={image4} style={styles.Gambar1}/>
                <Text style={styles.Teks1image2}>Burger Bistro</Text>

                <Text style={{
                  bottom: 33,
                  marginLeft: 10,
                  fontSize: 13
                }}>Rose Garden</Text>

                <Text style={{
                  bottom: 26, 
                  marginLeft: 10,
                  fontWeight: 600,
                  fontSize: 16,
                }}>$40</Text>

                <View style={styles.Containertomboltambah}>
                  <TouchableOpacity>
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
        </View>
      </View>
    </ScrollView>
  )
}

export default Beranda

const styles = StyleSheet.create({
  Container: {
    padding: 30, 
    backgroundColor: '#fafafa',
    height: 1000
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
    marginTop: 20
  },

  Menubarisdua: {
    flexDirection: 'row',
    marginTop: 20
  },

  Menusatu: {
    width: 150, 
    height: 130,
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
    width: 150, 
    height: 130,
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


  // STYLE TEKS

  Teks1image1: {
    bottom: 38,
    marginLeft: 10,
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
    marginLeft: 10,
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
    height: '45%',
    borderRadius: 15,
    marginTop: 20
  }
})