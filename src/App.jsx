import './index.css';

export default function App() {
  return (
    <>
      <nav className="navbar">
        <div className="logo">Bumi</div>
        <ul className="nav-links">
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </nav>

      <div className="main-grid">
        {/* KOLOM 1: INFO KIRI */}
        <div className="hero-left">
          <h2>About Earth</h2>
          <p>
            Earth, our home planet, is a world unlike any other. The third planet from the sun, 
            Earth is the only place in the known universe confirmed to host life. With a radius 
            of 3,959 miles, Earth is the fifth largest planet in our solar system.
          </p>
        </div>

        {/* KOLOM 2: MODEL 3D TENGAH */}
        <main className="hero">
          <model-viewer
            src="/earth%20(1).glb"
            ar
            ar-modes="webxr scene-viewer quick-look"
            camera-controls
            tone-mapping="neutral"
            poster="/poster.webp"
            auto-rotate
            environment-image="legacy"
            exposure="0.7"
            shadow-intensity="1"
          >
            <div className="progress-bar hide" slot="progress-bar">
              <div className="update-bar"></div>
            </div>
            <button slot="ar-button" id="ar-button">
              View in your space
            </button>
          </model-viewer>
          <h1>Earth</h1>
        </main>

        {/* KOLOM 3: FUN FACTS KANAN */}
        <div className="hero-right">
          <h4>Fun Facts</h4>
          <ul>
            <li>Earth isn't actually round.</li>
            <li>Coral reefs are Earth's largest living structure.</li>
            <li>Earth has a squishy interior.</li>
            <li>Antarctica is home to the largest ice sheet.</li>
            <li>The Moon is drifting away from Earth.</li>
            <li>Atacama is the driest place on Earth.</li>
            <li>Earth's magnetic pole is creeping westward.</li>
          </ul>
        </div>
      </div>
    </>
  );
}