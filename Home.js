import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Button, Dimensions, FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import car from './cars.js';

export default function Home(props) {
    const renderCarItem = (item) => {
        return (
            <TouchableOpacity
                style={styles.carItem}
                onPress={() => props.navigation.navigate("CarItem", { item })}
            >
                <View style={styles.carBackground}>
                <Image style={styles.carImage} source={{ uri: item.image }} />
                <Text style={styles.carText} >{item.name}</Text>
                <Text style={styles.carText} >{item.price}€</Text>
                </View>
            </TouchableOpacity>
        )
    }

    return (
        <View style={styles.container}>

            <Image style={styles.header} source={require("./assets/hero.jpg")} />

            <FlatList
                keyExtractor={item => item.id}
                data={car}
                renderItem={({ item }) => renderCarItem(item)}
                numColumns={1}
            />
        </View>
    );
}

const largeur = Dimensions.get("screen").width;
const hauteur = Dimensions.get("screen").height;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        border: "2, solid, #000"
    },
    header: {
        marginTop: 10,
        marginBottom: 10,
        
        marginRight: 20,
        borderRadius: 100,
        width: largeur ,
        height: hauteur / 7
    },
    title: {
        color: "green",
        fontSize: 24
    },
    carItem: {
        padding: 10,
        flex: 1
    },
    carImage: {
        width: 300,
        height: 150,
        alignContent: 'center',
        transform: [{rotateY: '0deg'}, {rotateZ: '180deg'}]
    },
    carImage: {
        width: 300,
        height: 150,
        alignContent: 'center',
        transform: [{rotateY: '0deg'}, {rotateZ: '0deg'}],
        border: "10px solid green"
    },
    carText: {
        textAlign: 'center',
        transform: [{rotateY: '0deg'}, {rotateZ: '0deg'}],
        borderRadius: 20,
        padding: 10,
        
    },
    carBackground: {
        backgroundColor: "gold",
        borderRadius: 20
    }

});

