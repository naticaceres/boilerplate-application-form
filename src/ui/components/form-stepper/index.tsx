/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import styled from 'styled-components';
import { Card } from '@/ui/components/card';
import { Divider } from '@/ui/components/divider';
import { Button } from '@/ui/components/button';

// import classnames from 'classnames';
// import { Stack } from '../stack';
// import { colors } from '../../theme/colors';
// import { fontFamilies } from '../../theme';
// import { Padding } from '../padding';
// import { Text } from '../text';

interface Props {
  children: React.ReactNode;
}

export function FormStepper(props: Props): JSX.Element {
  const { children } = props;
  return (
    <StyledDiv>
      <div className="centered card">
        <Card>
          {children}
          <Divider></Divider>
          <Button style={{ float: 'right', margin: '29px 49px' }}>Next</Button>
        </Card>
      </div>
    </StyledDiv>
  );
}

const StyledDiv = styled.div`
  position: relative;

  &.centered {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;
