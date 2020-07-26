import React from 'react';
import { FiChevronRight, FiArrowRight } from 'react-icons/fi';

import logoImg from '../../assets/logo.svg';

import { Title, Form, Repositories } from './styles';

// function Dashboard (){}
const Dashboard: React.FC = () => {
  return (
    <>
      <img src={logoImg} alt="Github Explorer" />
      <Title>Explore repositórios no Github</Title>

      <Form>
        <input placeholder="Digite o nome do Repositorio" />
        <button type="submit">Pesquisar</button>
      </Form>

      <Repositories>
        <a href="teste">
          <img
            src="https://avatars0.githubusercontent.com/u/28929274?s=200&v=4"
            alt="Diego Fernandes"
          />

          <div>
            <strong>Rocketseat/uniform</strong>
            <p>Easy peasy highly scalable ReactJS & React Native forms!</p>
          </div>
          <FiArrowRight size={20} />
        </a>
        <a href="teste">
          <img
            src="https://avatars0.githubusercontent.com/u/28929274?s=200&v=4"
            alt="Diego Fernandes"
          />

          <div>
            <strong>Rocketseat/uniform</strong>
            <p>Easy peasy highly scalable ReactJS & React Native forms!</p>
          </div>
          <FiArrowRight size={20} />
        </a>
        <a href="teste">
          <img
            src="https://avatars0.githubusercontent.com/u/28929274?s=200&v=4"
            alt="Diego Fernandes"
          />

          <div>
            <strong>Rocketseat/uniform</strong>
            <p>Easy peasy highly scalable ReactJS & React Native forms!</p>
          </div>
          <FiArrowRight size={20} />
        </a>
      </Repositories>
    </>
  );
};

export default Dashboard;
