import styled, { css } from 'styled-components/native';
import { TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { RFValue } from 'react-native-responsive-fontsize';

interface IconProps {
  type: 'up' | 'down' | 'total';
}

interface ContainerProps {
  isActive: boolean;
  type: 'up' | 'down' | 'total';
}

export const Container = styled(TouchableOpacity)<ContainerProps>`
  width: 49%;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  padding: 16px;

  border-width: ${ ({ isActive }) => isActive ? 0 : 1.5 }px;
  border-style: solid;
  border-color: ${ ({ theme }) => theme.colors.text };

  ${({ isActive, type }) => isActive && type === 'up' && css`
    background-color: ${ ({ theme }) => theme.colors.success_light };
  `};

  ${({ isActive, type }) => isActive && type === 'down' && css`
    background-color: ${ ({ theme }) => theme.colors.attention_light };
  `};
`;

export const Icon = styled(Feather)<IconProps>`
  font-size: ${RFValue(24)}px;
  margin-right: 12px;

  ${({ type }) => type === 'up' && css`
    color: ${ ({ theme }) => theme.colors.success };
  `};

  ${({ type }) => type === 'down' && css`
    color: ${ ({ theme }) => theme.colors.attention };
  `};
`;

export const Title = styled.Text`
  font-family: ${ ({ theme }) => theme.fonts.regular };
  font-size: ${RFValue(14)}px;
`;
