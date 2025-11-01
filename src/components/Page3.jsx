import React from 'react';
import Navbar from './Navbar';
import Avatars from './Avatars';
import '../styles/Page3.css';

const Page3 = () => {
  return (
    <div className="transport-request-page-3">
      <Navbar />

      <div style={{ maxWidth: 1100, margin: '24px auto', padding: '0 16px' }}>
        {/* avatars / header */}
        <Avatars pageType="page3" />
      </div>
    </div>
  );
};

export default Page3;
