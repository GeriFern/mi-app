import React, { useState, useEffect } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { Container, Row } from 'react-bootstrap';
import MobileSidebar from './componentes/MobileSidebar';
import MainContent from './componentes/MainContent';
import Sidebar from './componentes/Sidebar';
import Header from './componentes/Header';


function App() {
  const [showSidebar, setShowSidebar] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 992);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 992);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleCloseSidebar = () => setShowSidebar(false);
  const handleShowSidebar = () => {
    if (isMobile) {
      setShowSidebar(true);
    }
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
      <Header isMobile={isMobile} onShowSidebar={handleShowSidebar} />
      <Container fluid style={{ flex: 1, overflow: 'hidden' }}>
        <Row style={{ height: '100%' }}>
          {!isMobile && <Sidebar />}
          <MainContent isMobile={isMobile} />
        </Row>
      </Container>
      <MobileSidebar show={showSidebar} onHide={handleCloseSidebar} />
    </div>
  );
}

export default App;
