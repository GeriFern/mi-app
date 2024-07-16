import React from 'react';
import { Col } from 'react-bootstrap';

interface MainContentProps {
  isMobile: boolean;
}

function MainContent({ isMobile }: MainContentProps) {
  return (
    <Col xs={12} lg={isMobile ? 12 : 9} style={{ height: '100%', overflowY: 'auto' }}>
      <h1>Contenido Principal</h1>
      {/* Aquí iría el contenido principal de tu aplicación */}
    </Col>
  );
}

export default MainContent;