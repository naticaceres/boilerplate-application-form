import * as React from 'react';
import { colors } from '../../theme';
//import { colors as newColors } from '../../theme/colors';
import styled from 'styled-components';
import { Text } from '@/ui/components/text';
import { NewfrontLogo } from '@/ui/components/icons';

interface Props {
  children: React.ReactNode;
}

export function Header(props: Props): JSX.Element {
  const { children } = props;

  return (
    <StyledDiv className="header">
      <NewfrontLogo></NewfrontLogo>
      <Text weight={600} color="#262D46" display="inline">
        {children}
      </Text>
    </StyledDiv>
  );
}

const StyledDiv = styled.div`
  width: 100vw;
  background-color: ${colors.pure_white};
  height: 68px;
  padding: 10px;
  box-shadow: 0px 1px 0px #dbdbdb;

  > * {
    display: inline;
    vertical-align: middle;
    margin: 10px;
  }
`;
