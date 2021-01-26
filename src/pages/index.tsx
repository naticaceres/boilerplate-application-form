import React from 'react';
import { Button } from '@/ui';
import Link from 'next/link';
import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}`;

export default function IndexPage(): JSX.Element {
  return (
    <StyledDiv>
      <GlobalStyle></GlobalStyle>
      <div className="center">
        <Link href="/forms/workers-compensation-application">
          <Button>Click me</Button>
        </Link>
      </div>
    </StyledDiv>
  );
}

const StyledDiv = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;

  .center {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;
