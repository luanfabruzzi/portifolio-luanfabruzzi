import GridScan from "../../components/GridScan/GridScan";
import ProfileCard from "../../components/Profile/ProfileCard";
import Dock from "../../components/Dock/Dock";
import avatar from "../../assets/luan.png";

const socialIcons = {
  github: (
    <path d="M12 .7a11.5 11.5 0 0 0-3.64 22.41c.58.1.79-.25.79-.56v-2.23c-3.22.7-3.9-1.37-3.9-1.37-.53-1.34-1.29-1.7-1.29-1.7-1.05-.72.08-.71.08-.71 1.17.08 1.78 1.2 1.78 1.2 1.04 1.77 2.72 1.26 3.38.96.1-.75.4-1.27.74-1.56-2.57-.29-5.27-1.28-5.27-5.68 0-1.26.45-2.28 1.18-3.09-.12-.29-.51-1.46.11-3.05 0 0 .97-.31 3.16 1.18a10.9 10.9 0 0 1 5.76 0c2.2-1.49 3.16-1.18 3.16-1.18.63 1.59.23 2.76.12 3.05.73.81 1.17 1.83 1.17 3.09 0 4.41-2.71 5.38-5.29 5.67.42.36.79 1.06.79 2.14v3.18c0 .31.21.67.8.56A11.5 11.5 0 0 0 12 .7Z" />
  ),
  linkedin: (
    <path d="M5.34 7.9H1.72V19.5h3.62V7.9ZM3.53 2.12a2.1 2.1 0 1 0 0 4.2 2.1 2.1 0 0 0 0-4.2ZM19.1 7.63c-1.91 0-3.19 1.05-3.72 2.04h-.05V7.9h-3.47v11.6h3.62v-5.74c0-1.51.29-2.98 2.17-2.98 1.86 0 1.88 1.74 1.88 3.08v5.64h3.62v-6.36c0-3.12-.67-5.51-4.05-5.51Z" />
  ),
  instagram: (
    <path d="M12 2.16c3.2 0 3.58.01 4.85.07 3.25.15 4.77 1.69 4.92 4.92.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.15 3.23-1.67 4.77-4.92 4.92-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-3.25-.15-4.77-1.69-4.92-4.92-.06-1.27-.07-1.65-.07-4.85s.01-3.58.07-4.85C2.38 3.92 3.9 2.38 7.15 2.23 8.42 2.17 8.8 2.16 12 2.16ZM12 0C8.74 0 8.33.01 7.05.07 2.7.27.27 2.69.07 7.05.01 8.33 0 8.74 0 12s.01 3.67.07 4.95c.2 4.36 2.63 6.78 6.98 6.98C8.33 23.99 8.74 24 12 24s3.67-.01 4.95-.07c4.35-.2 6.78-2.62 6.98-6.98.06-1.28.07-1.69.07-4.95s-.01-3.67-.07-4.95C23.73 2.69 21.3.27 16.95.07 15.67.01 15.26 0 12 0Zm0 5.84A6.16 6.16 0 1 0 12 18.16 6.16 6.16 0 0 0 12 5.84ZM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8Zm6.41-11.84a1.44 1.44 0 1 0 0 2.88 1.44 1.44 0 0 0 0-2.88Z" />
  ),
  email: (
    <path d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2Zm0 4-8 5-8-5V6l8 5 8-5v2Z" />
  ),
};

function SocialIcon({ name }) {
  return (
    <svg
      className="dock-social-icon"
      viewBox="0 0 24 24"
      aria-hidden="true"
      focusable="false"
    >
      {socialIcons[name]}
    </svg>
  );
}

function Home() {
  const items = [
    {
      icon: <SocialIcon name="github" />,
      label: "GitHub",
      onClick: () => window.open("https://github.com/luanfabruzzi", "_blank"),
    },
    {
      icon: <SocialIcon name="linkedin" />,
      label: "LinkedIn",
      onClick: () =>
        window.open("https://linkedin.com/in/luanfabruzzi", "_blank"),
    },
    {
      icon: <SocialIcon name="instagram" />,
      label: "Instagram",
      onClick: () => window.open("https://instagram.com/fabruzzi.dev", "_blank"),
    },
    {
      icon: <SocialIcon name="email" />,
      label: "E-mail",
      onClick: () => {
        window.location.href = "mailto:luanfabruzzidev@gmail.com";
      },
    },
  ];

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

        <div className="hero__content">
          <p className="hero__intro">Olá, me chamo Luan Fabruzzi!</p>

          <Dock
            items={items}
            panelHeight={68}
            dockHeight={120}
            baseItemSize={50}
            magnification={70}
          />
        </div>
      </section>

      {/* Sobre mim */}
      <section id="sobre">
        <ProfileCard
          name="Luan Fabruzzi"
          title="Software Engineering Intern"
          handle="javicodes"
          status="Online"
          contactText="Contact Me"
          avatarUrl={avatar}
          showUserInfo={false}
          enableTilt={true}
          enableMobileTilt={false}
          onContactClick={() => console.log("Contact clicked")}
          behindGlowColor="rgba(91, 242, 53, 0.58)"
          iconUrl="/assets/demo/iconpattern.png"
          behindGlowEnabled
          innerGradient="linear-gradient(145deg,#14532d 0%,#1e8531 100%)"
        />
        {/* Futuro componente <About /> */}
      </section>

      <section id="projetos">{/* Futuro componente <Projects /> */}</section>

      <section id="contato">{/* Futuro componente <Contact /> */}</section>
    </main>
  );
}

export default Home;
