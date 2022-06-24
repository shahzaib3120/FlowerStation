import 'react-native-gesture-handler';
import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { Home } from './screens/Home.screen';
import { Categories } from './screens/Categories.screen';
import { ProductDetail } from './screens/ProductDetail.screen';
import { Cart } from './screens/Cart.screen';
import CustomSidebarMenu from './components/CustomSidebarMenu';
import { AppProvider } from './App.provider';

export const App = () => {
  const Drawer = createDrawerNavigator();
  const Stack = createStackNavigator();

  const HomeStackNavigator = () => {
    return (
      <Stack.Navigator>
        <Stack.Screen
          name="HomeStack"
          component={Home}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="ProductDetail"
          component={ProductDetail}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Cart"
          component={Cart}
          options={{ headerShown: true }}
        />
      </Stack.Navigator>
    );
  };

  return (
    <AppProvider>
      <NavigationContainer>
        <Drawer.Navigator
          drawerContent={props => <CustomSidebarMenu {...props} />}>
          <Drawer.Screen
            name="Home"
            component={HomeStackNavigator}
            options={{ headerShown: false }}
          />
          <Drawer.Screen name="Categories" component={Categories} />
        </Drawer.Navigator>
      </NavigationContainer>
    </AppProvider>
  );
};
