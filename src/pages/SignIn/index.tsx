import React, { useCallback, useRef } from 'react';
import { useHistory } from 'react-router-dom';

import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';

import Input from '../../components/Input';
import Button from '../../components/Button';

import { Container, Content, InputBox } from './styles';

interface SignInFormData {
  email: string;
  password: string;
}

const SignIn: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

  const history = useHistory();

  const handleSubmit = useCallback(
    (data: SignInFormData) => {
      console.log(data);
      history.push('/dashboard');
    },
    [history],
  );

  return (
    <Container>
      <Content>
        <div>
          <h1>login</h1>
          <h3>
            faça seu login abaixo para marcação de horários com nossos
            profissionais
          </h3>
        </div>

        <InputBox>
          <Form ref={formRef} onSubmit={handleSubmit}>
            <Input name="email" label="email" placeholder="email" />
            <Input
              name="password"
              type="password"
              label="senha"
              placeholder="senha"
            />

            <Button type="submit">entrar</Button>
          </Form>
          <a href="forgot">esqueci minha senha</a>
        </InputBox>
      </Content>
    </Container>
  );
};

export default SignIn;
