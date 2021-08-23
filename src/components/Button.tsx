import React from 'react';
import { 
  TouchableOpacity,
  TouchableOpacityProps,
  Text,
  StyleSheet
} from 'react-native';

//type ButtonProps = TouchableOpacityProps;

interface ButtonProps extends TouchableOpacityProps {
  title: string;
}

export function Button({ title,...rest }: ButtonProps){
  return (
    <TouchableOpacity
      style={styles.button}
      activeOpacity={0.5}
      {...rest}
    >
    <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  )
}


const styles = StyleSheet.create({
  button: {
      marginTop: 15,
      padding: 12,
      backgroundColor: '#841584',
      borderRadius: 5,
      alignItems: 'center',
    },
  buttonText : {
      alignItems: 'center',
      justifyContent: 'center',
      fontWeight: 'bold',
      fontSize: 15,
      color: '#fff',
  }
})