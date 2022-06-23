import React, { createContext, useState, useEffect } from 'react';
import { Category, Product, CategoriesList, ProductsList } from './DummyData';

type AppContextType = {
    products: Product[];
    categories: Category[];
    cart: Product[];
    addToCart: (product: Product) => void;
};

const defaultvalue = {
    products: ProductsList,
    categories: CategoriesList,
    cart: [],
    addToCart: () => {},
};

const AppContext = createContext<AppContextType>(defaultvalue);

export const AppProvider = ({ children, navigation }) => {
    const [cart, setCart] = useState<Product[]>([]);
    const [products, setProducts] = useState<Product[]>([]);
    const [categories, setCategories] = useState<Category[]>([]);
    useEffect(() => {
        console.log('yo yo ');
        setProducts(ProductsList);
        setCategories(CategoriesList);
    }, []);

    const addToCart = React.useCallback((product: Product) => {
        setCart([...cart, product]);
        navigation.navigate('Cart');
        console.log('working');
    }, []);

    return (
        <AppContext.Provider
            value={{
                products,
                categories,
                cart,
                addToCart,
            }}>
            {children}
        </AppContext.Provider>
    );
};

export const useAppContext = () => React.useContext(AppContext);
