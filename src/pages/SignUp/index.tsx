/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useCallback, useRef } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import * as Yup from 'yup';

import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';

import Input from '../../components/Input';
import Select from '../../components/Select';
import Button from '../../components/Button';

import {
  formatDateOnInput,
  formatPhoneNumberOnInput,
  formatCPFOnInput,
  formatCEPOnInput,
} from '../../helpers/inputFormatters';
import getValidationErrors from '../../helpers/getValidationErrors';

import { Container, Content, InputBox } from './styles';
import validateCPF from '../../helpers/validateCPF';
import api from '../../services/api';

interface SignInFormData {
  email: string;
  password: string;
}

const SignUp: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

  const history = useHistory();

  const handleSubmit = useCallback(
    async (data: SignInFormData) => {
      try {
        formRef.current?.setErrors({});

        const schema = Yup.object().shape({
          name: Yup.string().required('Nome é um campo obrigatório.'),
          surname: Yup.string().required('Sobrenome é um campo obrigatório.'),
          dob: Yup.string().min(
            10,
            'Data de nascimento é um campo obrigatório.',
          ),
          phone: Yup.string().min(
            15,
            'Número de celular é um campo obrigatório.',
          ),
          cpf: Yup.string().min(14, 'CPF é um campo obrigatório.'),
          zipCode: Yup.string().min(9, 'CPF é um campo obrigatório.'),
          email: Yup.string()
            .required('Email é um campo obrigatório.')
            .email('Digite um email válido.'),
          password: Yup.string().min(8, 'Senha é um campo obrigatório.'),
          repeatedPassword: Yup.string().min(
            8,
            'Senha é um campo obrigatório.',
          ),
        });

        await schema.validate(data, {
          abortEarly: false,
        });

        const response = await api.post('/clients.json', JSON.stringify(data));

        if (response.status === 200) {
          history.push('/dashboard');
        }
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErrors(err);

          formRef.current?.setErrors(errors);
        }
      }
    },
    [history],
  );

  const handleZipCodeSearch = useCallback(async (): Promise<void> => {
    if (formRef.current !== null) {
      const cep = formRef.current.getFieldRef('zipCode').value;
      const formatedCEP = formatCEPOnInput(cep);
      formRef.current.setFieldValue('zipCode', formatedCEP);

      if (cep.length === 8) {
        try {
          const response = await axios.get(
            `https://viacep.com.br/ws/${cep}/json/`,
          );

          const streetName = response.data.logradouro;

          formRef.current.setFieldValue('address', streetName);
        } catch (err) {
          console.log('Digite um CEP válido.');
        }
      }
    }
  }, []);

  const handleDOBFormat = useCallback(() => {
    if (formRef.current !== null) {
      const dob = formRef.current.getFieldRef('dob').value;

      const formatedDOB = formatDateOnInput(dob);
      formRef.current.setFieldValue('dob', formatedDOB);
    }
  }, []);

  const handlePhoneFormat = useCallback(() => {
    if (formRef.current !== null) {
      const phone = formRef.current.getFieldRef('phone').value;

      const formatedPhone = formatPhoneNumberOnInput(phone);
      formRef.current.setFieldValue('phone', formatedPhone);
    }
  }, []);

  const handleCPFFormat = useCallback(() => {
    if (formRef.current !== null) {
      const cpf = formRef.current.getFieldRef('cpf').value;

      const formatedCPF = formatCPFOnInput(cpf);

      if (!validateCPF(formatedCPF)) {
        console.log('CPF não é válido.');
      }

      formRef.current.setFieldValue('cpf', formatedCPF);
    }
  }, []);

  return (
    <Container>
      <Content>
        <header>
          <h1>cadastro</h1>
          <h3>
            preenchendo seu cadastro, você pode agendar seus horários conosco
            através do site ou do aplicativo
          </h3>
        </header>

        <Form ref={formRef} onSubmit={handleSubmit}>
          <InputBox>
            <div>
              <Input
                name="name"
                label="nome"
                placeholder="nome"
                width="23rem"
              />
              <Input
                name="surname"
                label="sobrenome"
                placeholder="sobrenome"
                width="23rem"
              />
              <Input
                name="dob"
                label="data de nascimento"
                placeholder="DD/MM/AAAA"
                width="15.375rem"
                maxLength={10}
                onBlurCapture={handleDOBFormat}
              />
            </div>
            <div>
              <Input
                name="phone"
                label="celular"
                placeholder="(xx) xxxx-xxxxx"
                width="15.375rem"
                maxLength={15}
                onBlurCapture={handlePhoneFormat}
              />
              <Input
                name="cpf"
                label="C.P.F."
                placeholder="xxx.xxx.xxx-xx"
                width="20.3125rem"
                maxLength={12}
                onBlurCapture={handleCPFFormat}
              />
              <Select
                options={['feminino', 'masculino', 'outro']}
                name="gender"
                label="gênero"
                width="10rem"
              />
              <Input
                name="zipCode"
                label="CEP"
                placeholder="00.000-000"
                maxLength={8}
                onBlurCapture={handleZipCodeSearch}
              />
            </div>
            <div>
              <Input
                name="address"
                label="endereço"
                placeholder="endereço"
                width="28rem"
              />
              <Input
                name="houseNumber"
                label="número"
                placeholder="número"
                width="14rem"
              />
              <Input
                name="addressComplement"
                label="complemento"
                placeholder="complemento"
                width="19rem"
              />
            </div>

            <div>
              <Input
                name="email"
                label="email"
                placeholder="email"
                width="28rem"
              />
              <Input
                name="password"
                type="password"
                label="senha"
                placeholder="senha"
                width="16.25rem"
              />
              <Input
                name="repeatedPassword"
                type="password"
                label="repita sua senha"
                placeholder="senha"
                width="16.25rem"
              />
            </div>

            <Button type="submit">cadastrar</Button>
          </InputBox>
        </Form>
      </Content>
    </Container>
  );
};

export default SignUp;
