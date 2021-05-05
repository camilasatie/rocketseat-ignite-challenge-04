import { Text, VStack } from "@chakra-ui/layout";
import { Tooltip } from "@chakra-ui/tooltip";
import { ReactElement } from "react";

interface NumbersProps {
  number: number;
  label: string;
  icon?: ReactElement;
  moreCities?: string;
}

export function Numbers({ number, label, icon, moreCities }: NumbersProps) {
  return (
    <VStack>
      <Text
        color='yellow.500'
        fontSize={['1.5rem', '3rem']}
        fontWeight='600'
      >
        { number }
      </Text>
      <Text
        color='gray.500'
        fontSize={['1.125rem', '1.5rem']}
        fontWeight={['400', '600']}
        lineHeight='1'
      >
        { label }
        <Tooltip label={moreCities} aria-label="A tooltip">
          <span>{ !!icon && icon }</span>
        </Tooltip>
      </Text>
    </VStack>
  )
}