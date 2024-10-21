import "./Home.css";
import BoxHead from "../../components/BoxHead";
import { GrLocation } from "react-icons/gr";
import Propertice1 from "../../assets/propertice/Propertice1.png";
import Propertice2 from "../../assets/propertice/Propertice2.png";
import Propertice3 from "../../assets/propertice/Propertice3.png";
import Background from "../../assets/image/Background.png";
import Propertice5 from "../../assets/propertice/Propertice5.png";

const propertice = [
    {
        title: "Washington",
        listings: "25 listings",
        thumbnail: Propertice1
    },

    {
        title: "Franklin ",
        listings: "25 listings",
        thumbnail: Propertice2
    },

    {
        title: "Clinton ",
        listings: "25 listings",
        thumbnail: Propertice3
    },

    {
        title: "Arlington ",
        listings: "25 listings",
        thumbnail: Background
    },

    {
        title: "Centerville ",
        listings: "25 listings",
        thumbnail: Propertice5
    }
]

function Home() {

    return (
        <>
            <div className="home">
                <section className="hero">
                    <div className="hero-background"></div>
                    <BoxHead>
                        <h1 className="title hero-title">Find Your Dream Home</h1>
                        <p className="subtitle hero-subtitle">Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Proin sodales ultrices nulla blandit volutpat.</p>
                    </BoxHead>
                </section>

                <section className="propertice">
                    <div className="container">
                        <div className="propertice-top">
                            <BoxHead>
                                <h2 className="title propertice-title">Propertice by Area</h2>
                                <p className="subtitle propertice-subtitle">Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Proin sodales ultrices nulla blandit volutpat.</p>
                            </BoxHead>
                        </div>

                        <div className="propertice-bottom">
                            {propertice.map((item, index) => (
                                <div className={`propertice-item item-${index + 1}`} key={item.title}>
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
            </div>
        </>
    )
}

export default Home;