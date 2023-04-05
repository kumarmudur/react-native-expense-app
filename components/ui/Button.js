import React from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';

const Button = ({children, onPress}) => {
  return (
    <View>
      <Pressable onPress={onPress}>
        <View>
          <Text>{children}</Text>
        </View>
      </Pressable>
    </View>
  );
};

export default Button;


