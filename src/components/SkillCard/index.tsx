import React from 'react';
import { TouchableOpacityProps } from 'react-native';

import { 
  ButtonSkill,
  TextSkill
 } from './styles';

interface SkillCardProps extends TouchableOpacityProps {
  item: string;
}

export function SkillCard({ item, ...rest }: SkillCardProps) {
  return (
    <ButtonSkill 
      {...rest}
    >
      <TextSkill>{item}</TextSkill>
    </ButtonSkill>
  )
}