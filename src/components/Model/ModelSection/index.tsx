import { ReactNode } from 'react';

import { Container } from './styles';

interface ModelSectionProps {
  children: ReactNode;
}

function ModelSection({ children }: ModelSectionProps) {
  return (
    <Container>
      <h1>ModelSection</h1>
      {children}
    </Container>
  );
};

export default ModelSection;
