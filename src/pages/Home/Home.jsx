import GridScan from "../../components/GridScan/GridScan";
import ProfileCard from "../../components/Profile/ProfileCard";
import Dock from "../../components/Dock/Dock";
import OrbitImages from "../../components/OrbitImages/OrbitImages";
import Education from "../../components/Education/Education";
import avatar from "../../assets/luan.png";

const education = [
  {
    course: "Engenharia de Software - UNINTER",
    level: "Bacharelado | 4 anos - valido pelo mec",
    status: "Em andamento previsão de conclusão: 2030",
  },
  {
    course: "Desenvolvimento de Sistemas - Inah de Mello",
    level: "Formação técnica | 2 anos - valido pela sistec/mec",
    status: "Concluído",
  },
];

const complementaryHours = 1139;
const emailAddress = "luanfabruzzidev@gmail.com";
const emailHref = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(
  emailAddress,
)}&su=${encodeURIComponent("Contato via portfólio")}`;

const ambassadorRoles = [
  {
    name: "DIO Campus Expert",
    organization: "Digital Innovation One",
    description:
      "Programa de embaixadores universitários focado no desenvolvimento de liderança, comunicação e protagonismo na comunidade tech. Uma experiência que fortalece minha capacidade de conectar pessoas, compartilhar conhecimento e gerar impacto.",
    logo: "../src/assets/dio.png",
    logoAlt: "Logo da DIO",
  },
  {
    name: "Microsoft Learn Student Ambassadors",
    organization: "MICROSOFT",
    description:
      "Programa de embaixadores universitários da Microsoft que conecta estudantes ao ecossistema de tecnologia, inovação e comunidade. Uma oportunidade de desenvolver liderança, ampliar conexões e representar iniciativas Microsoft no ambiente acadêmico.",
    logo: "../src/assets/microsoft.png",
    logoAlt: "Logo do Microsoft Students",
  },
];

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
  const handleEmailClick = () => {
    window.open(emailHref, "_blank", "noopener,noreferrer");
  };

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
      onClick: () =>
        window.open("https://instagram.com/fabruzzi.dev", "_blank"),
    },
    {
      icon: <SocialIcon name="email" />,
      label: "E-mail",
      onClick: handleEmailClick,
    },
  ];

  const stackImages = [
    {
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/csharp/csharp-original.svg",
      alt: "C#",
    },
    {
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/dotnetcore/dotnetcore-original.svg",
      alt: ".NET",
    },
    {
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/dot-net/dot-net-original.svg",
      alt: "ASP.NET Core",
    },
    {
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/microsoftsqlserver/microsoftsqlserver-original.svg",
      alt: "SQL Server",
    },
    {
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg",
      alt: "PostgreSQL",
    },
    {
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
      alt: "JavaScript",
    },
    {
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg",
      alt: "Node.js",
    },
    {
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
      alt: "React",
    },
    {
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg",
      alt: "CSS",
    },
    {
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg",
      alt: "Docker",
    },
    {
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azure/azure-original.svg",
      alt: "Azure",
    },
    {
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg",
      alt: "Git",
    },
  ];

  return (
    <>
      <a className="skip-link" href="#conteudo">
        Pular para o conteúdo
      </a>

      <main id="conteudo">
      <section id="inicio" className="hero">
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
          <h1 className="hero__intro">Olá, me chamo Luan Fabruzzi!</h1>

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
      <section id="sobre" className="about-section">
        <div className="about-section__content">
          <div className="about-section__profile">
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
              iconUrl="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/dotnetcore/dotnetcore-original.svg"
              behindGlowEnabled
              innerGradient="linear-gradient(145deg,#14532d 0%,#1e8531 100%)"
            />
          </div>

          <article className="about-section__text">
            <span className="about-section__eyebrow">ABOUT</span>
            <p>
              Sou estudante de Engenharia de Software e atualmente atuo como
              estagiário em engenharia de software, trabalhando principalmente com
              .NET, React e React Native. Minha trajetória na tecnologia começou
              com a formação técnica em Desenvolvimento de Sistemas e, desde
              então, venho buscando evoluir tanto na prática quanto nos estudos.
              Também faço parte de comunidades de tecnologia
              como Embaixador Universitário da DIO e da Microsoft, experiências que
              ampliam meu contato com outras pessoas da área. Hoje, meu foco é
              construir uma base sólida como engenheiro de software, ganhar
              experiência em projetos reais e continuar evoluindo até alcançar
              posições de maior responsabilidade técnica, como desenvolvedor
              sênior e Tech Lead.
            </p>
          </article>
        </div>
      </section>

      <section id="stack" className="stack-section section-shell">
          <div className="stack-section__content">
            <div className="section-heading section-heading--centered">
              <span className="section-eyebrow">Minhas habilidades</span>
              <p>Ferramentas que fazem parte da minha rotina de desenvolvimento.</p>
            </div>

            <OrbitImages
              images={stackImages}
              altPrefix="Tecnologias que utilizo"
              className="stack-section__orbit"
              shape="ellipse"
              baseWidth={1000}
              radiusX={390}
              radiusY={105}
              rotation={-8}
              duration={30}
              itemSize={78}
              responsive={true}
              responsiveHeight={320}
              direction="normal"
              fill
              showPath
              pathColor="rgba(74, 222, 128, 0.22)"
              paused={false}
            />
          </div>
      </section>

      <section id="comunidade" className="community-section section-shell">
        <div className="community-section__content">
          <div className="section-heading">
            <span className="section-eyebrow">Comunidade e lideranca</span>
            <p>
              Atuo em comunidades que me aproximam de pessoas, eventos,
              aprendizado continuo e troca real com o ecossistema de tecnologia.
            </p>
          </div>

          <div className="community-grid">
            {ambassadorRoles.map((role) => (
              <article key={role.name} className="community-card">
                <div className="community-card__logo-wrap">
                  <img
                    className="community-card__logo"
                    src={role.logo}
                    alt={role.logoAlt}
                    loading="lazy"
                    decoding="async"
                  />
                </div>

                <div className="community-card__body">
                  <span className="community-card__org">{role.organization}</span>
                  <h3>{role.name}</h3>
                  <p>{role.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <Education
        education={education}
        complementaryHours={complementaryHours}
      />

      <section id="contato" className="contact-section section-shell">
        <div className="contact-section__content">
          <span className="section-eyebrow">Vamos conversar</span>
          <h2>Tem um projeto ou oportunidade?</h2>
          <p>
            Estou disponível para trocar ideias sobre desenvolvimento e novas
            oportunidades profissionais.
          </p>
          <a
            className="button-primary"
            href={emailHref}
            target="_blank"
            rel="noopener noreferrer"
          >
            Enviar e-mail
          </a>
        </div>
      </section>
      </main>
    </>
  );
}

export default Home;
