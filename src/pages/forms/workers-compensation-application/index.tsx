import React from 'react';
import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components';
import { Header } from '@/ui/components/header';

import { FormStepper } from '@/ui/components/form-stepper';
import { Field } from '@/ui/components/field';
import { Input } from '@/ui/components/input';
import { colors } from '@/ui/theme';
import { Text } from '@/ui/components/text';

const GlobalStyle = createGlobalStyle`
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}`;

export default function WorkersCompensationApplication(): JSX.Element {
  const handleChange = (event, field) => {
    this.setState({ [field]: event.target.value });
  };

  return (
    <StyledDiv>
      <GlobalStyle></GlobalStyle>

      <Header>Worker's compensation application</Header>
      <div className="center stepper-wrapper">
        <FormStepper>
          <StyledForm>
            <Text display="block" weight={400} color="#000000" size="large">
              Who is the primary contact for this policy?
            </Text>
            <Text size="small" color="#546A83" style={{ lineHeight: '21px' }} marginBottom={20} marginTop={10}>
              This person will receive all communications from Newfront about this policy. You can change this contact
              information later. If you’re not sure, just add your contact information.
            </Text>
            <Field fieldId="name" label="Full Name">
              <Input fieldId="name" type="text" disabled={false} onChange={(val) => handleChange(val, 'name')}></Input>
            </Field>
            <Field fieldId="role" label="Role">
              <Input fieldId="role" type="text" disabled={false} onChange={(val) => handleChange(val, 'role')}></Input>
            </Field>
            <Field fieldId="phoneNumber" label="Phone number">
              <Input
                fieldId="phoneNumber"
                type="text"
                disabled={false}
                onChange={(val) => handleChange(val, 'phoneNumber')}
              ></Input>
            </Field>
          </StyledForm>
        </FormStepper>
      </div>
    </StyledDiv>
  );
}

const StyledDiv = styled.div`
  height: 100vh;
  width: 100vw;
  position: relative;
  box-sizing: border-box;
  background: ${colors.medium_gray};

  .center {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;

const StyledForm = styled.div`
  width: 95vw;
  max-width: 540px;
  padding: 48px;
`;
