import BedImage from "../../assets/image/Frame 7.png";
import Hero from "../../components/Hero";
import "./Contact.css";

function Contact() {
  function handleSubmit(e) {
    e.preventDefault();
    console.log(e);
  }

  return (
    <>
      <Hero title="LIÊN HỆ" content="Home/Liên hệ" />
      <div className="container-contact">
        <section className="image-contact">
          <h2 className="title-contact">Our Team</h2>
          <img src={BedImage} alt="" />
        </section>
        <section className="form-contact">
          <h2 className="contact-us">Contact Us</h2>
          <form className="form" onSubmit={handleSubmit}>
            <div className="focus">
              <input className="btl-contact name" type="text" placeholder="NAME" />
            </div>
            <div className="focus">
              <input className="btl-contact email" type="text" placeholder="EMAIL" />
            </div>
            <div className="focus">
              <input className="btl-contact telephone" type="text" placeholder="TELEPHONE" />
            </div>
            <div className="focus">
              <input className="btl-contact title-field" type="text" placeholder="TITLE" />
            </div>
            <button className="btl-contact send" type="submit">
              SEND
            </button>
          </form>
        </section>
      </div>
    </>
  );
}

export default Contact;
