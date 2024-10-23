import "./BuildingIntro.css";
import ShareIcon from "../../assets/image/ShareNetwork.svg";
import HeartIcon from "../../assets/image/Heart.svg";
import PlusIcon from "../../assets/image/Plus.svg";

function BuildingIntro(props) {
    const {item} = props;
  return (
    <>
      <div className="container-content-intro">
        <div className="info-content">
          <div className="info-user">
            <div className="user">
                <img src={item.avatar} alt="avatar"/>
                <p>{item.nameUser}</p>
            </div>
            <div className="icon-action">
                <div className="ic">
                    <img src={ShareIcon} alt="icon-action"/>
                </div>
                <div className="ic">
                    <img src={HeartIcon} alt="icon-action"/>
                </div>
                <div className="ic">
                    <img src={PlusIcon} alt="icon-action"/>
                </div>
            </div>
          </div>
          <div className="content">
            <div className="address">{item.address}</div>
            <div className="lorem1">{item.p1}</div>
            <div className="lorem2">{item.p2} <pre>... readmore.</pre></div>
          </div>
        </div>
        <div className="price-intro-post">{item.price}</div>
      </div>
    </>
  );
}
export default BuildingIntro;
