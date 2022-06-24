import React from 'react';
import { SafeAreaView, StyleSheet, Image, View, Text } from 'react-native';
import { theme } from '../Theme';
import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import LinearGradient from 'react-native-linear-gradient';

const CustomSidebarMenu = props => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      {/*Top Large Image */}
      <LinearGradient
        start={{ x: 0.0, y: 0.0 }}
        end={{ x: 1.0, y: 1.0 }}
        colors={[theme.color1.color, theme.color2.color, theme.color3.color]}
        style={styles.imgContainer}>
        <Image
          source={{
            uri: 'https://icons.veryicon.com/png/o/business/multi-color-financial-and-business-icons/user-139.png',
          }}
          style={styles.sideMenuProfileIcon}
        />
        <View style={styles.userDetails}>
          <Text style={styles.username}>Username</Text>
          <Text style={styles.email}>john@gmail.com</Text>
        </View>
      </LinearGradient>
      <DrawerContentScrollView {...props}>
        <DrawerItemList {...props} />
        {/* <View style={styles.customItem}></View> */}
      </DrawerContentScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sideMenuProfileIcon: {
    resizeMode: 'center',
    width: 100,
    height: 100,
    borderRadius: 100 / 2,
    alignSelf: 'center',
  },
  iconStyle: {
    width: 15,
    height: 15,
    marginHorizontal: 5,
  },
  imgContainer: {
    height: 150,
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    alignItems: 'center',
    flexDirection: 'row',
  },
  userDetails: {
    justifyContent: 'center',
    alignItems: 'flex-start',
    width: '65%',
    padding: 10,
  },
  username: {
    fontSize: 16,
    fontWeight: 'bold',
    fontFamily: 'poppins',
    color: 'white',
    flexWrap: 'wrap',
  },
  email: {
    fontSize: 14,
    color: 'white',
  },
});

export default CustomSidebarMenu;
