import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import FastImage from 'react-native-fast-image';
import { stylesList } from '../DummyData';
import { theme } from '../Theme';
export const StyleList: React.FC = () => {
  return (
    <FlatList
      contentContainerStyle={styles.contentContainer}
      style={styles.container}
      data={stylesList}
      renderItem={({ item }) => (
        <View style={styles.box}>
          <FastImage
            style={styles.image}
            source={{
              uri: item.imgurl,
              priority: FastImage.priority.normal,
            }}
            resizeMode={FastImage.resizeMode.contain}
          />
          <Text style={[theme.gray]}>{item.style}</Text>
        </View>
      )}
      keyExtractor={item => item.style}
      horizontal={true}
    />
  );
};
const styles = StyleSheet.create({
  contentContainer: {
    height: 100,
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    paddingHorizontal: 20,
  },
  container: {
    marginTop: 10,
    backgroundColor: 'white',
    borderRadius: 5,
    // borderBottomWidth: 0.5,
    // borderColor: 'lightgray',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.25,
    shadowRadius: 2,

    elevation: 5,
  },
  box: {
    width: 70,
    height: 70,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 50,
    height: 50,
  },
});
