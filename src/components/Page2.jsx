import React from 'react';
import Navbar from './Navbar';
import Avatars from './Avatars';
import '../styles/Page2.css';

const Page2 = () => {
  return (
    <div className="transport-request-page-2">
      <Navbar />

      <div style={{ maxWidth: 1100, margin: '24px auto', padding: '0 16px' }}>
        {/* avatars / header */}
        <Avatars pageType="page2" />
      </div>
    </div>
  );
};

export default Page2;
