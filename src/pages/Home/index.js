import { GrLocation } from "react-icons/gr";
import ArrowLeft from "../../assets/image/ArrowLeft.svg";
import ArrowRight from "../../assets/image/ArrowRight.svg";
import AllowOut from "../../assets/image/arrowsout.svg";
import Background from "../../assets/image/Background.png";
import Prop1 from "../../assets/image/prop1.png";
import Prop2 from "../../assets/image/prop2.png";
import Prop3 from "../../assets/image/prop3.png";
import Prop4 from "../../assets/image/prop4.png";
import Propertice1 from "../../assets/propertice/Propertice1.png";
import Propertice2 from "../../assets/propertice/Propertice2.png";
import Propertice3 from "../../assets/propertice/Propertice3.png";
import Propertice5 from "../../assets/propertice/Propertice5.png";
import BoxHead from "../../components/BoxHead";
import "./Home.css";

const propertice = [
  {
    title: "Washington",
    listings: "25 listings",
    thumbnail: Propertice1,
  },

  {
    title: "Franklin ",
    listings: "25 listings",
    thumbnail: Propertice2,
  },

  {
    title: "Clinton ",
    listings: "25 listings",
    thumbnail: Propertice3,
  },

  {
    title: "Arlington ",
    listings: "25 listings",
    thumbnail: Background,
  },

  {
    title: "Centerville ",
    listings: "25 listings",
    thumbnail: Propertice5,
  },
];

const properticeSlide = [
  {
    title: "Washington",
    listings: "12000",
    thumbnail: Prop1,
    active: true,
  },
  {
    title: "Washington",
    listings: "12000",
    thumbnail: Prop2,
    active: false,
  },
  {
    title: "Washington",
    listings: "12000",
    thumbnail: Prop3,
    active: true,
  },
  {
    title: "Washington",
    listings: "12000",
    thumbnail: Prop4,
    active: false,
  },
];

function Home() {
  return (
    <>
      <div className="home">
        <section className="hero">
          <div className="hero-background"></div>
          <BoxHead>
            <h1 className="title hero-title">Find Your Dream Home</h1>
            <p className="subtitle hero-subtitle">
              Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
              posuere cubilia curae; Proin sodales ultrices nulla blandit
              volutpat.
            </p>
          </BoxHead>
        </section>

        <section className="propertice">
          <div className="container">
            <div className="propertice-top">
              <BoxHead>
                <h2 className="title propertice-title">Propertice by Area</h2>
                <p className="subtitle propertice-subtitle">
                  Vestibulum ante ipsum primis in faucibus orci luctus et
                  ultrices posuere cubilia curae; Proin sodales ultrices nulla
                  blandit volutpat.
                </p>
              </BoxHead>
            </div>

            <div className="propertice-bottom">
              {propertice.map((item, index) => (
                <div
                  className={`propertice-item item-${index + 1}`}
                  key={item.title}
                >
                  <img src={item.thumbnail} alt={item.title} />
                  <div className="propertice-content">
                    <h3 className="propertice-title">{item.title}</h3>
                    <p className="propertice-listing">{item.listings}</p>
                  </div>
                  <GrLocation className="propertice-icon" />
                  <div className="propertice-background">
                    <button className="btn propertice-btn">View Detail</button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="last-propertice">
          <div className="propertice-top">
            <BoxHead>
              <h2 className="title propertice-title">
                Letest Properties of Rent
              </h2>
              <p className="subtitle propertice-subtitle">
                Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
                posuere cubilia curae; Proin sodales ultrices nulla blandit
                volutpat.
              </p>
            </BoxHead>
          </div>
          <div className="propertice-last-bottom">
            {properticeSlide.map((item, index) => (
              <div className="prop-item">
                <img src={item.thumbnail} alt={item.title} />
                <div
                  className={
                    "hot-offer" + (!item.active ? " dis-active-hot" : "")
                  }
                >
                  Hot offer
                </div>
                <div className="propertice-background">
                  <button className="btn propertice-btn">View Detail</button>
                </div>
                <div className="footer-item">
                  <div className="pos">
                    <GrLocation className="propertice-icon-slide" />
                    <p>{item.title}</p>
                  </div>
                  <div className="size">
                    <img
                      src={AllowOut}
                      alt={AllowOut}
                      className="propertice-icon-slide"
                    />
                    <p>{item.listings}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
        <section className="arrow">
          <div className={"ar left-ar disable-slide"}>
            <img src={ArrowLeft} alt={ArrowLeft} />
          </div>
          <div className="ar right-ar">
            <img src={ArrowRight} alt={ArrowRight} />
          </div>
        </section>
      </div>
    </>
  );
}

export default Home;
