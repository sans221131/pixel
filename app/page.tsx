import Navbar from '../components/Navbar';
import PhoneModel from '@/components/PhoneModel';
import TextScroll from '@/components/textscr';

export default function Home() {
  return (
    <>
      <main>
        {/* First Section - White Background */}
        <section style={{ 
          backgroundColor: '#ffffff', 
          minHeight: '100vh',
          padding: '60px 20px',
          position: 'relative'
        }}>
          <Navbar />
          <div style={{ 
            maxWidth: '1200px', 
            margin: '0 auto', 
            paddingTop: '80px'
          }}>
            {/* Content removed - only navbar and background remain */}

            <PhoneModel />
          </div>
        </section>

        {/* Second Section - Light Beige Background */}
        <section style={{ 
          backgroundColor: '#f9eade', 
          minHeight: '100vh',
          padding: '60px 20px' 
        }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
            <h2>Second Section</h2>
            <p>Content for the second section goes here.</p>
            <TextScroll />
          </div>
        </section>

        {/* Third Section - Light Blue Background */}
        <section style={{ 
          backgroundColor: '#f5f8fc', 
          minHeight: '100vh',
          padding: '60px 20px' 
        }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
            <h2>Third Section</h2>
            <p>Content for the third section goes here.</p>
          </div>
        </section>
      </main>
    </>
  );
}
