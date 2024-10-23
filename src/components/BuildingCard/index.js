import ArrowsOutIcon from "../../assets/image/ArrowsOut.svg";
import BathroomIcon from "../../assets/image/Bathtub.svg";
import CarIcon from "../../assets/image/Car.svg";
import HeartIcon from "../../assets/image/Heart.svg";
import PlusIcon from "../../assets/image/Plus.svg";
import ShareIcon from "../../assets/image/ShareNetwork.svg";
import "./BuildingCard.css";

function BuildingCard(props) {
  const { item } = props;
  return (
    <>
      <div className="container-building-card">
        <img src={item.image} alt="Building" />
        <div className="content-card">
          <div className="address-card">{item.address}</div>
          <div className="price-card">{item.price}</div>
          <div className="detail-card">
            <div className="item-detail-card">
              <img src={CarIcon} alt="" />
              <p>{item.cars}</p>
            </div>
            <div className="item-detail-card">
              <img src={BathroomIcon} alt="" />
              <p>{item.bathrooms}</p>
            </div>
            <div className="item-detail-card">
              <img src={ArrowsOutIcon} alt="" />
              <p>{item.rent}</p>
            </div>
          </div>
          <div className="user-card">
            <div className="detail-user-card">
              <img src={item.avatar} alt="avatar" />
              <p>{item.name}</p>
            </div>
            <div className="icon-action">
              <div className="ic">
                <img src={ShareIcon} alt="icon-action" />
              </div>
              <div className="ic">
                <img src={HeartIcon} alt="icon-action" />
              </div>
              <div className="ic">
                <img src={PlusIcon} alt="icon-action" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default BuildingCard;
