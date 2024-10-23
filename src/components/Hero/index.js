import "./Hero.css";

function Hero(props) {
    const {title, content} = props;
  return (
    <>
      <section className="hero-intro">
        <div className="intro-title">
          <h2>{title}</h2>
          <p>{content}</p>
        </div>
      </section>
    </>
  );
}
export default Hero;
