import GridScan from '../../components/GridScan/GridScan';

function Home() {
  return (
    <main>
      <section className="hero">
        <div className="hero__grid" aria-hidden="true">
          <GridScan
            sensitivity={0.55}
            lineThickness={1}
            linesColor="#14532d"
            gridScale={0.1}
            scanColor="#4ade80"
            scanOpacity={0.4}
            enablePost
            bloomIntensity={0.6}
            chromaticAberration={0.002}
            noiseIntensity={0.01}
            lineJitter={0.1}
            scanGlow={0.5}
            scanSoftness={2}
            enableWebcam={false}
            showPreview={false}
          />
        </div>

        <p className="hero__intro">
          Olá, me chamo Luan Fabruzzi!
        </p>
      </section>

      <section id="sobre">
        {/* Futuro componente <About /> */}
      </section>

      <section id="projetos">
        {/* Futuro componente <Projects /> */}
      </section>

      <section id="contato">
        {/* Futuro componente <Contact /> */}
      </section>
    </main>
  );
}

export default Home;