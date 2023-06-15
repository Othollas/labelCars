import React, { useState } from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'

const CarItem = (props) => {
    const [item, SetItem] = useState(props.route.params.item);

    return (
        <View>
            <Image style={styles.carImage} source={{ uri: item.image2 }} />
            <Text style={styles.carText}>{item.name}</Text>
            <Text style={styles.carText}>{item.price} € / pour 45 mn</Text>
            <Text style={styles.carText}>{item.options.person} places</Text>
            <Text style={styles.carText}>{item.options.transmission}</Text>
        </View>
    )
}

export default CarItem

const styles = StyleSheet.create({
    carImage: {
        width: 400,
        height: 200,
        borderRadius: 50,
        marginTop: 20
    },
    carText: {
        padding: 10,
        textAlign: 'center'
    }
})