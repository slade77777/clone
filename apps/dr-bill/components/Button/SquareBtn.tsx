import {Button, Text} from '@nextui-org/react';
import {ReactNode} from 'react';

type Props = {
  children: ReactNode;
  css?: Object;
}

export default function SquareBtn({children, css}: Props) {
  return (
    <Button css={{
      minWidth: 0,
      borderRadius: 0,
      background: 'transparent',
      border: '1px solid $primary',
      '&:hover': {
        border: '2px solid $primary',
      },
      ...css
    }}>
      <Text
        css={{
          fontSize: '$xs',
          lineHeight: '$xs',
          fontWeight: 600,
          '&:active': {
            borderBottom: '1px solid $primary',
          },
          '@sm': {
            fontSize: 'base',
            lineHeight: '$sm',
          }
        }}
      >
        {children}
      </Text>
    </Button>
  )
}
