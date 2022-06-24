import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import FastImage from 'react-native-fast-image';
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
      <FastImage
        style={styles.image}
        source={{
          uri: data.imgurl,
          priority: FastImage.priority.normal,
        }}
        resizeMode={FastImage.resizeMode.contain}
      />
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
