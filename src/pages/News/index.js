import BathsIcon from "../../assets/image/Group (1).svg";
import GaraIcon from "../../assets/image/Group (2).svg";
import KitchenIcon from "../../assets/image/Group 3465059.svg";
import ArrowLeftDis from "../../assets/image/ArrowLeft (1).svg";
import ArrowRight from "../../assets/image/ArrowRight.svg";
import BedroomIcon from "../../assets/image/Group.svg";
import BedroomImage from "../../assets/image/bedroom.png";
import Hero from "../../components/Hero";
import HighlightImage from "../../assets/image/skyhaus-highlights-img1-scaled.png";
import "./News.css";
import BuildingNews from "../../components/BuildingNews";

function News() {
  const title = "Modern\nLuxury Villa";
  const price = "Price:\n$2,999,99";
  const componentMini = [
    {
      icon: BedroomIcon,
      number: 5,
      title: "Beds",
    },
    {
      icon: BathsIcon,
      number: 7,
      title: "Baths",
    },
    {
      icon: GaraIcon,
      number: 4,
      title: "Garages",
    },
    {
      icon: KitchenIcon,
      number: 2,
      title: "Kitchens",
    },
  ];

  const listBuilding = [
    {
        title: "Amazing View",
        detail: "the view is spectaclar from deck tub or through the floor.",
        image: HighlightImage,
    },
    {
        title: "Quiet Neghbour",
        detail: "the view is spectaclar from deck tub or through the floor.",
        image: HighlightImage,
    },
    {
        title: "Housing Security",
        detail: "the view is spectaclar from deck tub or through the floor.",
        image: HighlightImage,
    },
  ];
  return (
    <>
      <Hero title="TIN TỨC" content="Home/Tin tức" />
      <section className="hero-two">
        <div className="frame-news">
          <pre className="title-news">{title}</pre>
          <pre className="price-news">{price}</pre>
          <button className="schedule-btn-news">SCHEDULE A VISIT</button>
        </div>
      </section>
      <section className="resident-news">
        <div className="content-news">
          <h3 className="title-news">SkyHaus Residence</h3>
          <p className="text-news">
            A property description is made up of 2 parts: key features and
            property description. The key features section is your opportunity
            to tell potential tenants about the key selling points of your
            property, in a bullet point format. The property description section
            allows you to go in to more depth.
          </p>
          <div className="detail-news">
            {componentMini.map((item, index) => (
              <div className="component-detail">
                <div className="icon-component">
                  <img src={item.icon} alt="" />
                </div>
                <div className="content-component">
                  <h6 className={"title-component cpn-" + (index + 1)}>{item.title}</h6>
                  <p className="value-component">{item.number}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="img-news">
          <img src={BedroomImage} alt="BedroomImage" />
          <p className="text-of-img">
            A property description is made up of 2 parts: key features and
            property description. The key features section is your opportunity
            to tell potential tenants.
          </p>
        </div>
      </section>
      <h2 className="highlight-title">Property Highlights</h2>
      <section className="highlight-news">
        {listBuilding.map((item) => (
            <>
                <BuildingNews item={item}/>
            </>
        ))}
      </section>
      <section className="navigation-intro">
        <div className="btn-nav">
          <img src={ArrowLeftDis} alt="ArrowLeft" />
        </div>
        {listBuilding.map((_, index) => (
          <>
            {index < 5 ? (
              <div className={"btn-nav" + (index === 0 ? " active-ar" : "")}>
                {index + 1}
              </div>
            ) : (
              <></>
            )}
          </>
        ))}
        <div className="btn-nav active-ar">
          <img src={ArrowRight} alt="ArrowRight" />
        </div>
      </section>
    </>
  );
}

export default News;
