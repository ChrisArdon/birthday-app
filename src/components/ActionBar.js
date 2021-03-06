import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import firebase from '../utils/firebase';

export default function ActionBar(props){
    const {showList, setShowList} = props;
    return(
        <View style={styles.viewFooter}>
            <View style={styles.viewClose}>
                <Text style={styles.text} onPress={()=>firebase.auth().signOut()}>Cerrar Sesión</Text>
            </View>
            <View style={styles.viewAdd}>
                <Text style={styles.text} onPress={()=>setShowList(!showList)}>
                    {showList?'Nueva Fecha':'Cancelar fecha'}
                </Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    viewFooter:{
        position:'absolute',
        bottom:0,
        flexDirection:'row',
        width:'100%',
        height:50,
        justifyContent:'space-between',
        alignItems:'center',
        paddingHorizontal:30,
        marginBottom:20,
    },
    viewClose:{
        backgroundColor:'#a41686',
        borderRadius:50,
        paddingVertical:10,
        paddingHorizontal:30,
    },
    viewAdd:{
        backgroundColor:'#4c10f6',
        borderRadius:50,
        paddingVertical:10,
        paddingHorizontal:30,
    },
    text:{
        color:'#93781D',
        fontSize:16,
        textAlign:'center',
    },
});
