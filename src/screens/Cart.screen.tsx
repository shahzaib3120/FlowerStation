import React from 'react';
import { Text, View, StyleSheet, FlatList, Image } from 'react-native';
import { theme } from '../Theme';
import { useAppContext } from '../App.provider';
import { ItemDisplay } from '../components/ItemDisplay';
import { GradientButton } from '../components/Button';
type Props = {
  navigation: any;
};

export const Cart: React.FC<Props> = ({}) => {
  const appConext = useAppContext();
  const btnText = appConext.cart.length > 0 ? 'Checkout' : 'Cart is empty';
  return (
    <View style={styles.container}>
      {appConext.cart.length > 0 ? (
        <FlatList
          data={appConext.cart}
          renderItem={({ item }) => <ItemDisplay item={item} />}
          keyExtractor={item => item.id}
        />
      ) : (
        <Image
          source={{ uri: 'https://www.no-fea.com/front/images/empty-cart.png' }}
          style={styles.emptyCart}
        />
      )}
      <GradientButton text={btnText} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: 'rgba(25, 39, 52,0.01)',
    backgroundColor: 'rgba(255,255,255,0.01)',
    padding: 10,
  },
  emptyCart: {
    width: '100%',
    height: '90%',
    resizeMode: 'contain',
  },
});
