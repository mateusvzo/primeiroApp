import React from 'react';
import { TouchableOpacity, TouchableOpacityProps , Text, StyleSheet } from 'react-native';

interface SkillCardProps extends TouchableOpacityProps {
  item: string;
}

export function SkillCard({ item, ...rest }: SkillCardProps) {
  return (
    <TouchableOpacity style={styles.buttonSkill}>
      <Text style= {styles.textSkill}>{item}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  buttonSkill: {
    marginVertical: 5,
    backgroundColor: '#1f1e25',
    padding: 15,
    borderRadius: 28,
    alignItems: 'center',
  },
  textSkill: {
    color: '#fff',
    fontWeight: 'bold',
  }
})