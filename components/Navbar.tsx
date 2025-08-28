'use client';

export default function Navbar() {
  return (
    <>
      <div className="navbar-container">
        <div className="navbar-content">
          {/* Logo/Brand */}
          <div style={{
            fontSize: '24px',
            fontWeight: 'bold',
            color: '#000',
            letterSpacing: '1px'
          }}>
            PIXEL PANIC
          </div>

          {/* User Icon */}
          <div style={{
            width: '40px',
            height: '40px',
            borderRadius: '50%',
            backgroundColor: '#f0f0f0',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            border: '2px solid #e0e0e0'
          }}>
            <svg 
              width="20" 
              height="20" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="#666" 
              strokeWidth="2"
            >
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
              <circle cx="12" cy="7" r="4"></circle>
            </svg>
          </div>
        </div>
      </div>

      <style jsx>{`
        .navbar-container {
          position: absolute;
          top: 20px;
          left: 0;
          right: 0;
          z-index: 1000;
          padding: 0 20px;
        }

        .navbar-content {
          background-color: rgba(255, 255, 255, 0.9);
          backdrop-filter: blur(10px);
          border-radius: 20px;
          padding: 10px 20px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          border: 1px solid rgba(0, 0, 0, 0.1);
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
          margin: 0 auto;
          max-width: calc(100vw - 40px);
        }

        @media (min-width: 1080px) {
          .navbar-container {
            padding: 0 120px;
          }
          .navbar-content {
            max-width: 1000px;
            padding: 15px 30px;
          }
        }
        
        @media (max-width: 1079px) {
          .navbar-container {
            padding: 0 10px;
          }
        }
      `}</style>
    </>
  );
}
