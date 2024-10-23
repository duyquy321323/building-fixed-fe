import "./BuildingNews.css";

function BuildingNews(props) {
  const { item } = props;
  return (
    <>
      <div className="container-building-news">
        <img src={item.image} alt="" />
        <div className="box-content-building-news">
          <h5 className="title-building-news">{item.title}</h5>
          <p className="content-building-news">{item.detail}</p>
        </div>
      </div>
    </>
  );
}

export default BuildingNews;
