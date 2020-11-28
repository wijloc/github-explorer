import React from 'react';
import { FiChevronRight } from 'react-icons/fi';

import logoImg from '../../assets/logo.svg';

import { Title, Form, Repositories } from './styles';

const Dashboard: React.FC = () => {
  return (
    <>
      <img src={logoImg} alt="Github Explorer" />
      <Title>Explore repositórios no Github</Title>

      <Form action="">
        <input placeholder="Digite o nome do repositório" />
        <button type="submit">Pesquisar</button>
      </Form>

      <Repositories>
        <a href="teste">
          <img
            src="https://avatars2.githubusercontent.com/u/16838209?s=460&u=ee1a5b2999e614213112d9d7919d8603d3f9dcc2&v=4"
            alt="Willian Oliveira"
          />
          <div>
            <strong>wijloc/gostack</strong>
            <p>Short description</p>
          </div>
          <FiChevronRight />
        </a>
        <a href="teste">
          <img
            src="https://avatars2.githubusercontent.com/u/16838209?s=460&u=ee1a5b2999e614213112d9d7919d8603d3f9dcc2&v=4"
            alt="Willian Oliveira"
          />
          <div>
            <strong>wijloc/gostack</strong>
            <p>Short description</p>
          </div>
          <FiChevronRight />
        </a>
        <a href="teste">
          <img
            src="https://avatars2.githubusercontent.com/u/16838209?s=460&u=ee1a5b2999e614213112d9d7919d8603d3f9dcc2&v=4"
            alt="Willian Oliveira"
          />
          <div>
            <strong>wijloc/gostack</strong>
            <p>Short description</p>
          </div>
          <FiChevronRight />
        </a>
      </Repositories>
    </>
  );
};

export default Dashboard;
