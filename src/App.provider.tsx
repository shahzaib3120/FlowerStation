import React, { createContext, useState } from 'react';
import { ToastAndroid } from 'react-native';
import { Product } from './DummyData';

type AppContextType = {
  cart: Product[];
  addToCart: (product: Product) => void;
};

const defaultvalue = {
  cart: [],
  addToCart: () => {},
};

const AppContext = createContext<AppContextType>(defaultvalue);
type Props = {
  children: React.ReactNode;
};
export const AppProvider: React.FC<Props> = ({ children }) => {
  const [cart, setCart] = useState<Product[]>([]);
  const addToCart = React.useCallback(
    (product: Product) => {
      if (!cart.find(p => p.id === product.id)) {
        setCart([...cart, product]);
        ToastAndroid.show('Item Added to Cart', ToastAndroid.SHORT);
      } else {
        ToastAndroid.show('Already in cart', ToastAndroid.SHORT);
      }
    },
    [cart],
  );

  return (
    <AppContext.Provider
      value={{
        cart,
        addToCart,
      }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => React.useContext(AppContext);
