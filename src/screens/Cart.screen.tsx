import React from 'react';
import { Text, View, StyleSheet, FlatList } from 'react-native';
import { theme } from '../Theme';
import { useAppContext } from '../App.provider';

type Props = {
    navigation: any;
};

export const Cart: React.FC<Props> = ({}) => {
    const appConext = useAppContext();
    return (
        <View style={styles.container}>
            <FlatList
                data={appConext.cart}
                renderItem={({ item }) => <Text>{item.price}</Text>}
                keyExtractor={item => item.id}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});
