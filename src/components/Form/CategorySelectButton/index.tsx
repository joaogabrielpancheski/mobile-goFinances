import React from 'react';

import {
  Container,
  Category,
  Icon
} from './styles';

interface Props {
  title: string;
  selected: boolean;
  onPress: () => void;
}

export function CategorySelectButton({
  title,
  selected,
  onPress
}: Props) {
  return (
    <Container onPress={onPress} >
      <Category selected={selected} >
        { title }
      </Category>

      <Icon name='chevron-down' />
    </Container>
  )
}