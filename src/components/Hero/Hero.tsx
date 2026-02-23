import "./Hero.css";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero__video-container">
        <div className="video-oval">
          <video autoPlay loop muted playsInline className="hero__video">
            <source src="/videoPortada.mp4" type="video/mp4" />
            Tu navegador no soporta el elemento de video.
          </video>
        </div>

        <div className="hero__text">
          <h1 className="hero__title">PISTACHO</h1>
          <p className="hero__subtitle">PRODUCTION COMPANY</p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
