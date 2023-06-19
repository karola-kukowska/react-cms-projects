import heroImg from "./assets/hero.svg";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-center">
        <div className="hero-title">
          <h1>Contentful CMS</h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias
            corporis adipisci debitis! Lorem ipsum dolor sit amet consectetur,
            adipisicing elit. Consequatur quisquam sed quia quam aut ut eius
            optio soluta tempore, maiores impedit, molestias nisi dolores amet.
            Unde dolorem aliquid non obcaecati!
          </p>
        </div>
        <div className="img-container">
          <img src={heroImg} alt="woman and the browser" className="img" />
        </div>
      </div>
    </section>
  );
};
export default Hero;
