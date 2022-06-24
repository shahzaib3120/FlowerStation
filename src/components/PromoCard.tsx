import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { theme } from '../Theme';
type Props = {
  height: number;
  width: number;
};
export const PromoCard: React.FC<Props> = ({ height, width }) => {
  const dim = {
    height: height,
    width: width,
  };
  return (
    <LinearGradient
      start={{ x: 0.0, y: 0.0 }}
      end={{ x: 1.0, y: 1.0 }}
      colors={[theme.color1.color, theme.color2.color, theme.color3.color]}
      style={[styles.promo, dim]}>
      <View style={styles.promotext}>
        <Text style={[theme.bold, theme.white]}>See All</Text>
        <Text style={[theme.bold, theme.white]}>Promos</Text>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  promotext: {
    margin: 10,
  },
  promo: {
    borderRadius: 10,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    marginHorizontal: 5,
  },
});
