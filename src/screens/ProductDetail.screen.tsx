import React from 'react';
import { View, Text, StyleSheet, Image, Pressable } from 'react-native';
import { theme } from '../Theme';
import { Path, Svg, Polygon } from 'react-native-svg';
import { ScrollView } from 'react-native-gesture-handler';
import LinearGradient from 'react-native-linear-gradient';
import { useAppContext } from '../App.provider';
type Props = {
    navigation: any;
    route: any;
};

export const ProductDetail: React.FC<Props> = ({ navigation, route }) => {
    const appConext = useAppContext();
    const item = route.params.product;
    const StarSvg: React.FC = () => {
        let stars = [];
        for (let i = 0; i < item.reviews; i++) {
            stars.push(1);
        }
        return (
            <View style={{ flexDirection: 'row' }}>
                {stars.map(a => {
                    return (
                        <Svg height="25" width="25">
                            <Polygon
                                points="9.9, 1.1, 3.3, 21.78, 19.8, 8.58, 0, 8.58, 16.5, 21.78"
                                // stroke={theme.gray.color}
                                fill={theme.color1.color}
                            />
                        </Svg>
                    );
                })}
            </View>
        );
    };
    return (
        <View style={styles.container}>
            <View style={styles.imageContainer}>
                <Image source={{ uri: item.imgurl }} style={styles.image} />
            </View>
            <View style={styles.descriptionContainer}>
                <Text style={styles.description}>{item.description}</Text>
                <View style={styles.priceContainer}>
                    <Text style={styles.price}>{item.price}$</Text>
                    <Text style={styles.reviews}>({item.reviews})</Text>
                    {item.discount ? (
                        <Text style={styles.discountTag}>
                            {item.discount}% off
                        </Text>
                    ) : null}
                </View>
                <StarSvg />
            </View>
            <View style={styles.comments}>
                <ScrollView>
                    <Text style={styles.detail}>{item.details}</Text>
                </ScrollView>
            </View>
            <View style={styles.cartBtnContainer}>
                <Pressable
                    onPress={() => {
                        appConext.addToCart(item);
                    }}
                    style={styles.btn}>
                    <LinearGradient
                        start={{ x: 0.0, y: 0.0 }}
                        end={{ x: 1.0, y: 1.0 }}
                        colors={[
                            theme.color1.color,
                            theme.color2.color,
                            theme.color3.color,
                        ]}
                        style={styles.btn}>
                        <Text style={styles.btnTxt}>+ Add to Cart</Text>
                    </LinearGradient>
                </Pressable>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    imageContainer: {
        width: '100%',
        flex: 4,
    },
    image: {
        width: '100%',
        height: '100%',
    },
    descriptionContainer: {
        borderTopWidth: 1,
        borderTopColor: theme.gray.color,
        padding: 10,
        width: '100%',
        flex: 1.2,
        justifyContent: 'space-between',
    },
    description: {
        color: 'gray',
        fontSize: 20,
        fontWeight: 'bold',
        fontFamily: 'poppins',
        flexWrap: 'wrap',
    },
    priceContainer: {
        flexDirection: 'row',
        // justifyContent: 'flex-start',
        alignItems: 'center',
        flex: 1,
    },
    price: {
        fontSize: 20,
        fontWeight: 'bold',
        fontFamily: 'poppins',
        color: theme.color1.color,
    },
    reviews: {
        fontSize: 16,
        fontWeight: 'bold',
        fontFamily: 'poppins',
        marginHorizontal: 10,
        color: 'gray',
    },
    comments: {
        width: '100%',
        flex: 3,
        padding: 10,
    },
    detail: {
        fontSize: 16,
        textAlign: 'justify',
        paddingHorizontal: 10,
        color: 'gray',
    },
    cartBtnContainer: {
        flex: 1,
        width: '100%',
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    btn: {
        width: '100%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 50,
    },
    btnTxt: {
        fontSize: 20,
        fontWeight: 'bold',
        fontFamily: 'poppins',
        color: 'white',
    },
    discountTag: {
        position: 'absolute',
        top: 5,
        right: 15,
        backgroundColor: theme.color1.color,
        color: 'white',
        // padding: 5,
        fontSize: 14,
        borderRadius: 50,
        width: 80,
        height: 30,
        textAlign: 'center',
        textAlignVertical: 'center',
        fontWeight: 'bold',
    },
});
