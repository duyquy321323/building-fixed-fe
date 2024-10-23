import ArrowLeftDis from "../../assets/image/ArrowLeft (1).svg";
import ArrowRight from "../../assets/image/ArrowRight.svg";
import Avatar2 from "../../assets/image/Ellipse 1 (1).svg";
import Avatar3 from "../../assets/image/Ellipse 1 (2).svg";
import Avatar1 from "../../assets/image/Ellipse 1.svg";
import ListBulletIcon from "../../assets/image/ListBullets.svg";
import BuildImg1 from "../../assets/image/Rectangle 26.png";
import BuildImg2 from "../../assets/image/Rectangle 27.png";
import BuildImg3 from "../../assets/image/Rectangle 28 (1).png";
import SquareIcon from "../../assets/image/SquaresFour.svg";
import ArrowDownIcon from "../../assets/image/Vector (1).svg";
import BuildingIntro from "../../components/BuildingIntro";
import Hero from "../../components/Hero";
import "./Introduce.css";
function Introduce() {
  const listTab = ["All Properties", "For Buy", "For Sale", "For Rent"];
  const listBuilding = [
    {
      image: BuildImg1,
      avatar: Avatar1,
      nameUser: "Jenny Wilson",
      address: "92 ALLIUM PLACE, ORLANDO FL 32827",
      p1: "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Proin sodales ultrices nulla blandit volutpat.",
      p2: "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Proin sodales ultrices nulla blandit volutpat. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Proin sodales ultrices nulla blandit",
      price: "$ 590,693",
    },
    {
      image: BuildImg2,
      avatar: Avatar2,
      nameUser: "Jenny Wilson",
      address: "92 ALLIUM PLACE, ORLANDO FL 32827",
      p1: "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Proin sodales ultrices nulla blandit volutpat.",
      p2: "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Proin sodales ultrices nulla blandit volutpat. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Proin sodales ultrices nulla blandit",
      price: "$ 590,693",
    },
    {
      image: BuildImg3,
      avatar: Avatar3,
      nameUser: "Jenny Wilson",
      address: "92 ALLIUM PLACE, ORLANDO FL 32827",
      p1: "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Proin sodales ultrices nulla blandit volutpat.",
      p2: "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Proin sodales ultrices nulla blandit volutpat. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Proin sodales ultrices nulla blandit",
      price: "$ 590,693",
    },
    {
      image: BuildImg1,
      avatar: Avatar1,
      nameUser: "Jenny Wilson",
      address: "92 ALLIUM PLACE, ORLANDO FL 32827",
      p1: "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Proin sodales ultrices nulla blandit volutpat.",
      p2: "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Proin sodales ultrices nulla blandit volutpat. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Proin sodales ultrices nulla blandit",
      price: "$ 590,693",
    },
    {
      image: BuildImg2,
      avatar: Avatar2,
      nameUser: "Jenny Wilson",
      address: "92 ALLIUM PLACE, ORLANDO FL 32827",
      p1: "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Proin sodales ultrices nulla blandit volutpat.",
      p2: "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Proin sodales ultrices nulla blandit volutpat. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Proin sodales ultrices nulla blandit",
      price: "$ 590,693",
    },
    {
      image: BuildImg3,
      avatar: Avatar3,
      nameUser: "Jenny Wilson",
      address: "92 ALLIUM PLACE, ORLANDO FL 32827",
      p1: "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Proin sodales ultrices nulla blandit volutpat.",
      p2: "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Proin sodales ultrices nulla blandit volutpat. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Proin sodales ultrices nulla blandit",
      price: "$ 590,693",
    },
    {
      image: BuildImg1,
      avatar: Avatar1,
      nameUser: "Jenny Wilson",
      address: "92 ALLIUM PLACE, ORLANDO FL 32827",
      p1: "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Proin sodales ultrices nulla blandit volutpat.",
      p2: "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Proin sodales ultrices nulla blandit volutpat. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Proin sodales ultrices nulla blandit",
      price: "$ 590,693",
    },
    {
      image: BuildImg1,
      avatar: Avatar1,
      nameUser: "Jenny Wilson",
      address: "92 ALLIUM PLACE, ORLANDO FL 32827",
      p1: "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Proin sodales ultrices nulla blandit volutpat.",
      p2: "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Proin sodales ultrices nulla blandit volutpat. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Proin sodales ultrices nulla blandit",
      price: "$ 590,693",
    },
    {
      image: BuildImg2,
      avatar: Avatar2,
      nameUser: "Jenny Wilson",
      address: "92 ALLIUM PLACE, ORLANDO FL 32827",
      p1: "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Proin sodales ultrices nulla blandit volutpat.",
      p2: "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Proin sodales ultrices nulla blandit volutpat. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Proin sodales ultrices nulla blandit",
      price: "$ 590,693",
    },
  ];

  return (
    <>
      <Hero title="GIỚI THIỆU" content="Home/Giới thiệu" />
      <section className="main-intro">
        <div className="top-intro">
          <div className="left-top-intro">
            <div className="menu-intro">
              <div className="icon-menu">
                <img
                  className="icon icon-list"
                  src={ListBulletIcon}
                  alt="ListBulletIcon"
                />
                <img
                  className="icon icon-square"
                  src={SquareIcon}
                  alt="SquareIcon"
                />
              </div>
              <div className="sort-by">
                Sort by: <pre> Default Order</pre>
              </div>
            </div>
            <img src={ArrowDownIcon} alt="ArrowDownIcon" />
          </div>
          <div className="right-top-intro">
            {listTab.map((item, index) => (
              <div className={"item-tab item-" + (index + 1)}>{item}</div>
            ))}
          </div>
        </div>
        <div className="list-building">
          {listBuilding.map((item, index) =>
            index < 3 ? (
              <div className="container-list-building">
                {index % 2 !== 0 ? (
                  <>
                    <BuildingIntro item={item} />
                    <img src={item.image} alt="building" />
                  </>
                ) : (
                  <>
                    <img src={item.image} alt="building" />
                    <BuildingIntro item={item} />
                  </>
                )}
              </div>
            ) : (
              <></>
            )
          )}
        </div>
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

export default Introduce;
