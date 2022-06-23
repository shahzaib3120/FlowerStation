import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import { Product } from '../DummyData';
import { theme } from '../Theme';
type Props = {
    data: Product;
};
export const BestPicksDisplay: React.FC<Props> = ({ data }) => {
    const discount = data.discount;
    return (
        <View style={styles.container}>
            {discount ? (
                <Text style={styles.discountTag}>{data.discount}%</Text>
            ) : null}
            <Image source={{ uri: data.imgurl }} style={styles.image} />
            <Text style={styles.descriptionText}>{data.description}</Text>
            <Text style={styles.priceText}>{data.price} $</Text>
            {/* <Text>{data.description}</Text> */}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginTop: 5,
        flex: 1,
        backgroundColor: 'white',
        padding: 10,
        borderRadius: 10,
        width: 170,
        marginRight: 10,
        justifyContent: 'flex-start',
    },
    image: {
        width: 120,
        height: 120,
        // borderWidth: 1,
        borderColor: 'lightgray',
        alignSelf: 'center',
    },
    discountTag: {
        position: 'absolute',
        top: 10,
        right: 10,
        backgroundColor: theme.color1.color,
        color: 'white',
        // padding: 5,
        fontSize: 12,
        borderRadius: 5,
        width: 50,
        height: 20,
        textAlign: 'center',
        textAlignVertical: 'center',
        fontWeight: 'bold',
    },
    descriptionText: {
        fontSize: 14,
        fontWeight: 'bold',
        color: 'rgba(0,0,0,0.8)',
    },
    priceText: {
        fontSize: 14,
        fontWeight: 'bold',
        color: theme.color1.color,
    },
});
