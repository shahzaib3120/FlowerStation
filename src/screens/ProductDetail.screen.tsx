import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  Pressable,
  TextInput,
} from 'react-native';
import { theme } from '../Theme';
import { Svg, Polygon } from 'react-native-svg';
import { ScrollView } from 'react-native-gesture-handler';
import LinearGradient from 'react-native-linear-gradient';
import { useAppContext } from '../App.provider';

type Props = {
  navigation: any;
  route: any;
};

export const ProductDetail: React.FC<Props> = ({ navigation, route }) => {
  const appContext = useAppContext();
  const item = route.params.product;
  const [search, setSearch] = React.useState<string>('');
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
      <LinearGradient
        start={{ x: 0.0, y: 0.0 }}
        end={{ x: 1.0, y: 1.0 }}
        colors={[theme.color1.color, theme.color2.color, theme.color3.color]}
        style={styles.header}>
        <View style={styles.searchHeader}>
          <View style={styles.searchContainer}>
            <Pressable
              onPress={() => {
                navigation.goBack();
              }}>
              <Image
                source={{
                  uri: 'https://cdn.iconscout.com/icon/free/png-256/back-arrow-1767515-1502579.png',
                }}
                style={styles.menuIcon}
              />
            </Pressable>
            <TextInput
              style={styles.searchInput}
              onChangeText={text => {
                setSearch(text);
              }}
              placeholder="I'm Looking for"
              placeholderTextColor={'rgba(0,0,0,0.5)'}
            />
          </View>
          <Pressable
            onPress={() => {
              navigation.navigate('Cart');
            }}>
            <Image
              source={{
                uri: 'https://www.iconsdb.com/icons/preview/white/shopping-basket-xxl.png',
              }}
              style={styles.cartIcon}
            />
            {appContext.cart.length ? (
              <Text style={styles.cartTag}>{appContext.cart.length}</Text>
            ) : null}
          </Pressable>
        </View>
      </LinearGradient>
      <View style={styles.imageContainer}>
        <Image source={{ uri: item.imgurl }} style={styles.image} />
      </View>
      <View style={styles.descriptionContainer}>
        <Text style={styles.description}>{item.description}</Text>
        <View style={styles.priceContainer}>
          <Text style={styles.price}>{item.price}$</Text>
          <Text style={styles.reviews}>({item.reviews})</Text>
          {item.discount ? (
            <Text style={styles.discountTag}>{item.discount}% off</Text>
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
            appContext.addToCart(item);
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
  header: {
    flex: 1,
  },
  imageContainer: {
    width: '100%',
    flex: 5,
  },
  image: {
    height: '100%',
    width: '100%',
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
    flex: 3.5,
    paddingHorizontal: 10,
    paddingTop: 5,
  },
  detail: {
    fontSize: 16,
    textAlign: 'justify',
    paddingHorizontal: 10,
    color: 'gray',
  },
  cartBtnContainer: {
    flex: 0.7,
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
  searchHeader: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingTop: 10,
  },
  searchInput: {
    width: '90%',
    height: 40,
    padding: 10,
    borderRadius: 5,
    color: 'gray',
  },
  searchContainer: {
    flex: 0.95,
    height: 40,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: 5,
    backgroundColor: 'white',
  },
  cartIcon: {
    width: 30,
    height: 30,
  },
  menuIcon: {
    alignSelf: 'center',
    marginLeft: 5,
    width: 30,
    height: 30,
  },
  cartTag: {
    position: 'absolute',
    top: 20,
    right: 20,
    backgroundColor: theme.color1.color,
    color: 'white',
    fontSize: 12,
    borderRadius: 10,
    width: 20,
    height: 20,
    textAlign: 'center',
    textAlignVertical: 'center',
    fontWeight: 'bold',
  },
});
