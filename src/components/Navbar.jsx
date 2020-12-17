import React from 'react';
import BootstrapNavbar from 'react-bootstrap/Navbar';

export default function Navbar() {
  return (
    <BootstrapNavbar expand='lg' variant='light' bg='light' style={{ marginBottom: 50 }}>
      <BootstrapNavbar.Brand href='/not-build-yet'>Procrastination App</BootstrapNavbar.Brand>
    </BootstrapNavbar>
  );
}
