import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView} from 'react-native';
import { useNavigation } from '@react-navigation/native';

import image1 from './image/back_icon.png';
import image2 from './image/burgersatu.png'
import image3 from './image/hat.png';
import image4 from './image/star.png';
import image5 from './image/truc.png';
import image6 from './image/time.png';
import image7 from './image/bawang.png';
import image8 from './image/minus.png';
import image9 from './image/plus.png';

const Pagedetail = () => {
    const navigation = useNavigation();
    
    // State untuk jumlah item
    const [jumlah, setJumlah] = useState(1);
    const hargaPerItem = 32; // harga satuan

    const tambah = () => {
        setJumlah(prev => prev + 1);
    }

    const kurang = () => {
        setJumlah(prev => (prev > 1 ? prev - 1 : 1)); // minimal 1
    }

    return (
        
            <View style={styles.Conatiner}>
                <View style={styles.Header}>
                    <TouchableOpacity onPress={() => navigation.navigate('Beranda')}>
                        <View style={styles.Tombolback}>
                            <Image source={image1} style={styles.Iconback}/>
                        </View>
                    </TouchableOpacity>
                    <Text style={styles.Teksdetail}>Detail</Text>
                </View>
                <View style={styles.Content}>
                    <View style={styles.Containergambarmenu}>
                        <Image style={styles.Gambarmenu} source={image2}/>
                    </View>
                    <View style={styles.Containerohat}>
                        <Image source={image3} style={styles.Gambarhat}/>
                        <Text style={{
                            marginTop: 5,
                            marginLeft: 15,
                            fontWeight: 600
                        }}>Uttora Coffe House</Text>
                    </View>
                    <View style={{ marginTop: 15 }}>
                        <Text style={{
                            fontSize: 25,
                            fontWeight: 600,
                            marginBottom: 10
                        }}>Burger Calzone European</Text>
                        <Text style={{
                            fontSize: 17,
                            color: '#c0c0c0'
                        }}>Prosciutto e funghi is a Burger variety that is topped with tomato sauce</Text>
                    </View>
                    <View style={{flexDirection: 'row', marginTop: 10}}>
                        <View style={{ flexDirection: 'row'}}>
                            <Image source={image4} style={styles.Gambarstar}/>
                            <Text style={{marginTop: 5, fontWeight: 600, marginLeft: 10}}>4.7</Text>
                        </View>
                        <View style={{flexDirection: 'row', marginLeft: 75}}>
                            <Image source={image5} style={styles.Gambarstar}/>
                            <Text style={{marginTop: 5, fontWeight: 600, marginLeft: 10}}>Free</Text>
                        </View>
                        <View style={{flexDirection: 'row', marginLeft: 58}}>
                            <Image source={image6} style={styles.Gambarstar}/>
                            <Text style={{marginTop: 5, fontWeight: 600, marginLeft: 10}}>20 menit</Text>
                        </View>
                    </View>
                    <View style={{flexDirection: 'row', marginTop: 20,}}>
                        <Text style={{
                            textAlignVertical: 'center',
                            fontWeight: 600,
                            marginRight: 15,
                            fontSize: 16,
                            }}>SIZE:</Text>
                        <TouchableOpacity>
                            <Text style={styles.Teksnomorsize}>10"</Text>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Text style={styles.Teksnomorsize}>14"</Text>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Text style={styles.Teksnomorsize}>16"</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{marginTop: 20,}}>
                        <Text style={{fontSize: 15, fontWeight: 600}}>INGRIDENTS</Text>
                    </View>
                    <View style={{flexDirection: 'row', marginTop: 20, justifyContent: 'space-between'}}>
                        <TouchableOpacity>
                            <View style={styles.Empattombol}>
                                <Image source={image7} style={{width: 25, height: 25, alignSelf: 'center'}}/>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <View style={styles.Empattombol}>
                                <Image source={image7} style={{width: 25, height: 25, alignSelf: 'center'}}/>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <View style={styles.Empattombol}>
                                <Image source={image7} style={{width: 25, height: 25, alignSelf: 'center'}}/>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <View style={styles.Empattombol}>
                                <Image source={image7} style={{width: 25, height: 25, alignSelf: 'center'}}/>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <View style={styles.Empattombol}>
                                <Image source={image7} style={{width: 25, height: 25, alignSelf: 'center'}}/>
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.Conatinerdeskripsibottom}>
                        <View style={{flexDirection: 'row', padding: 18, justifyContent: 'space-between'}}>
                            <Text style={{
                                fontWeight: 600,
                                fontSize: 20
                            }}>${hargaPerItem * jumlah} </Text>

                            <View style={styles.Conatinertambahbarang}>
                                <TouchableOpacity onPress={kurang}>
                                    <View style={styles.Containerminus}>
                                        <Image source={image8} style={{width: 17, height: 17, alignSelf: 'center'}}/>
                                    </View>
                                </TouchableOpacity>
                                <Text style={{color: 'white', textAlignVertical: 'center'}}>{jumlah}</Text>
                                <TouchableOpacity onPress={tambah}>
                                    <View style={styles.Containerminus}>
                                        <Image source={image9} style={{width: 17, height: 17, alignSelf: 'center'}}/>
                                    </View>
                                </TouchableOpacity>
                            </View>
                        </View>
                        <TouchableOpacity>
                            <View style={styles.Tomboladd}>
                                <Text style={styles.Tekstomboladd}>ADD TO CART</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        
    )
}

export default Pagedetail;

const styles = StyleSheet.create({
    Conatiner: {
        flex: 1,
        backgroundColor: 'white',
        padding: 25
    },

    Header: {
        flexDirection: 'row',
        marginTop: 10
    },

    Containerminus: {
        width: 21,
        height: 21,
        backgroundColor: '#abababff',
        borderRadius: 50,
        justifyContent: 'center',
    },

    Conatinertambahbarang: {
        width: 110,
        height: 40,
        backgroundColor: 'black',
        borderRadius: 50,
        justifyContent: 'space-between',
        flexDirection: 'row',
        padding: 10,
    },

    Conatinerdeskripsibottom: {
        backgroundColor: '#f2f2f2',
        width: '100%',
        height: 155,
        marginTop: 10,
        borderRadius: 25
    },

    Tombolback: {
        backgroundColor: '#dcdcdc',
        padding: 15,
        borderRadius: 100,
    },


    // style untuk teks
    Teksdetail: {
        marginLeft: 20,
        fontSize: 24,
        fontWeight: '600',
        marginTop: 10
    },

    Teksnomorsize: {
        backgroundColor: '#f2f2f2',
        marginLeft: 5,
        marginRight: 10,
        width: 50, 
        height: 50,
        textAlign: 'center',
        borderRadius: 50,
        textAlignVertical: 'center',
        fontWeight: 600
    },

    Tomboladd: {
        width: '90%',
        height: 64,
        backgroundColor: '#e87f15ff',
        alignSelf: 'center',
        borderRadius: 18,
        justifyContent: 'center',
    },

    Tekstomboladd: {
        color: 'white',
        textAlign: 'center',
        fontWeight: 600,
        fontSize: 16,
    },


    // style untuk gambar
    Iconback: {
        width: 15,
        height: 15
    }, 

    Containergambarmenu: {
        width: '100%',
        height: 180,
        marginTop: 30,
        borderRadius: 30,
        backgroundColor: '#ffb973ff'
    },

    Containerohat:{
        borderWidth: 0.5,
        borderColor: '#dcdcdc',
        borderRadius: 50,
        width: '60%',
        height: 50,
        paddingTop: 10,
        paddingLeft: 20,
        flexDirection: 'row',
        marginTop: 25
    },

    Gambarmenu: {
        flexDirection: 'row',
        
        height: '98%',
        alignSelf: 'center',
        bottom: 30,
    },

    Gambarhat: {
        width: 25,
        height: 25
    },

    Gambarstar: {
        width: 25,
        height: 25
    },

    Empattombol: {
        backgroundColor: '#fff5e5ff',
        width: 55,
        height: 55,
        justifyContent: 'center',
        borderRadius: 50,
    }
})