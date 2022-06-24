import React from 'react';
import { Text, StyleSheet, Pressable } from 'react-native';
import { theme } from '../Theme';
import LinearGradient from 'react-native-linear-gradient';

type Props = {
  text: string;
  onSelect?: any;
};

export const GradientButton: React.FC<Props> = ({ text }) => {
  return (
    <Pressable style={styles.btn}>
      <LinearGradient
        start={{ x: 0.0, y: 0.0 }}
        end={{ x: 1.0, y: 1.0 }}
        colors={[theme.color1.color, theme.color2.color, theme.color3.color]}
        style={styles.btn}>
        <Text style={styles.btnTxt}>{text}</Text>
      </LinearGradient>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  btn: {
    width: '100%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
  },
  btnTxt: {
    fontSize: 20,
    fontWeight: 'bold',
    fontFamily: 'poppins',
    color: 'white',
  },
});
