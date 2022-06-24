import React from 'react';
import { Text, StyleSheet, View } from 'react-native';
import FastImage from 'react-native-fast-image';
// import { Image } from 'react-native-svg';
import { Product } from '../DummyData';
import { theme } from '../Theme';
type Props = {
  item: Product;
};
export const ItemDisplay: React.FC<Props> = ({ item }) => {
  return (
    <View style={styles.container}>
      <View style={styles.description}>
        <Text style={styles.title}>{item.description}</Text>
        <View style={styles.priceContainer}>
          <Text style={styles.price}>{item.price}$</Text>
          {item.discount ? (
            <Text style={styles.discountTag}>{item.discount}% off</Text>
          ) : null}
        </View>
      </View>
      <View style={styles.imageContainer}>
        <FastImage
          style={styles.image}
          source={{
            uri: item.imgurl,
            priority: FastImage.priority.normal,
          }}
          resizeMode={FastImage.resizeMode.contain}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderWidth: 2,
    width: '100%',
    height: 100,
    borderRadius: 10,
    borderColor: theme.color3.color,
    backgroundColor: 'white',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginTop: 10,
  },
  description: {
    flex: 3,
    width: '100%',
    height: '100%',
    justifyContent: 'space-between',
    paddingVertical: 15,
    paddingHorizontal: 10,
  },
  title: {
    color: 'gray',
    fontSize: 18,
    fontWeight: 'bold',
    fontFamily: 'poppins',
    flexWrap: 'wrap',
  },
  imageContainer: {
    flex: 1,
    height: '100%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 70,
    height: 70,
  },
  priceContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
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
  discountTag: {
    backgroundColor: theme.color1.color,
    color: 'white',
    fontSize: 14,
    borderRadius: 50,
    width: 80,
    height: 30,
    textAlign: 'center',
    textAlignVertical: 'center',
    fontWeight: 'bold',
    marginRight: 40,
  },
});
