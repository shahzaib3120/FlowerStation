import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import { Category } from '../DummyData';
import { theme } from '../Theme';

type CategoriesDisplayProps = {
  data: Category;
};

export const CategoriesDisplay: React.FC<CategoriesDisplayProps> = ({
  data,
}) => {
  return (
    <View style={styles.container}>
      <Image source={{ uri: data.imgurl }} style={styles.image} />
      <View style={styles.text}>
        <Text style={[theme.gray]}>{data.name}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 150,
    height: 50,
    justifyContent: 'space-between',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'lightgray',
    margin: 5,
    borderRadius: 5,
    flexDirection: 'row',
    padding: 5,
  },
  image: {
    width: 40,
    height: 40,
  },
  text: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
