import ArrowLeftDis from "../../assets/image/ArrowLeft (1).svg";
import ArrowRight from "../../assets/image/ArrowRight.svg";
import Avatar1 from "../../assets/image/Ellipse 1 (3).svg";
import Avatar2 from "../../assets/image/Ellipse 1 (4).svg";
import Avatar3 from "../../assets/image/Ellipse 1 (5).svg";
import PolygonIcon from "../../assets/image/Polygon 1.svg";
import Building2 from "../../assets/image/Rectangle 18 (1).png";
import Building3 from "../../assets/image/Rectangle 18 (2).png";
import Building4 from "../../assets/image/Rectangle 18 (3).png";
import Building5 from "../../assets/image/Rectangle 18 (4).png";
import Building6 from "../../assets/image/Rectangle 18 (5).png";
import Building1 from "../../assets/image/Rectangle 18.png";
import BuildingCard from "../../components/BuildingCard";
import FilterProject from "../../components/FilterProject";
import Hero from "../../components/Hero";
import "./Project.css";

function Project() {
  const filter = [
    {
      field: "Vị Trí",
      placeHolder: "Select your city",
      arrayOption: ["HCM", "HN", "TTH"],
    },
    {
      field: "Diện Tích Thuê",
      placeHolder: "Select property type",
      arrayOption: ["100", "200", "300", "400"],
    },
    {
      field: "Giá Thuê",
      placeHolder: "Select rent range",
      arrayOption: ["30", "50", "100"],
    },
  ];

  const address = "92 ALLIUM PLACE, ORLANDO FL 32827";
  const price = "$ 590,693";
  const cars = "4";
  const bathrooms = "4";
  const rent = "2,096.00 ft";
  const name = "Jenny Wilson";

  const projects = [
    {
      image: Building1,
      address: address,
      price: price,
      cars: cars,
      bathrooms: bathrooms,
      rent: rent,
      avatar: Avatar1,
      name: name,
    },
    {
      image: Building2,
      address: address,
      price: price,
      cars: cars,
      bathrooms: bathrooms,
      rent: rent,
      avatar: Avatar2,
      name: name,
    },
    {
      image: Building3,
      address: address,
      price: price,
      cars: cars,
      bathrooms: bathrooms,
      rent: rent,
      avatar: Avatar3,
      name: name,
    },
    {
      image: Building4,
      address: address,
      price: price,
      cars: cars,
      bathrooms: bathrooms,
      rent: rent,
      avatar: Avatar1,
      name: name,
    },
    {
      image: Building5,
      address: address,
      price: price,
      cars: cars,
      bathrooms: bathrooms,
      rent: rent,
      avatar: Avatar2,
      name: name,
    },
    {
      image: Building6,
      address: address,
      price: price,
      cars: cars,
      bathrooms: bathrooms,
      rent: rent,
      avatar: Avatar3,
      name: name,
    },
    {
      image: Building1,
      address: address,
      price: price,
      cars: cars,
      bathrooms: bathrooms,
      rent: rent,
      avatar: Avatar1,
      name: name,
    },
    {
      image: Building3,
      address: address,
      price: price,
      cars: cars,
      bathrooms: bathrooms,
      rent: rent,
      avatar: Avatar2,
      name: name,
    },
    {
      image: Building5,
      address: address,
      price: price,
      cars: cars,
      bathrooms: bathrooms,
      rent: rent,
      avatar: Avatar3,
      name: name,
    },
  ];
  return (
    <>
      <Hero title="DỰ ÁN BẤT ĐỘNG SẢN" content="Home/Dự án bất động sản" />
      <div className="main-container-project">
        <div className="nav-tag">
          <div className="rent">
            <p>Rent</p>
            <img src={PolygonIcon} alt="PolygonIcon" />
          </div>
          <div className="sale">Sale</div>
        </div>
        <div className="search-bar">
            <div className="shadow"></div>
          {filter.map((item) => (
            <FilterProject
              field={item.field}
              placeHolder={item.placeHolder}
              arrayOption={item.arrayOption}
            />
          ))}
          <button className="search-btn">Search</button>
        </div>
        <div className="list-component-3">
          {projects.map((item, index) =>
            index < 9? (
              <>
                <BuildingCard item={item} />
              </>
            ) : (
              <></>
            )
          )}
        </div>
        <section className="navigation-intro">
          <div className="btn-nav">
            <img src={ArrowLeftDis} alt="ArrowLeft" />
          </div>
          {projects.map((_, index) => (
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
      </div>
    </>
  );
}

export default Project;
