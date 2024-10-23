import Search from "../../components/Search";
import Table from "../../components/Table";

import "./BuildingManagement.css";

function BuildingManagement() {
  const headTables = [{ field: "Tên" }, { field: "Họ" }];
  const dataTables = [
    ["Quý", "Đào"],
    ["Long", "Nguuuuuuuu"],
    ["Long", "Nguuuuuuuu"],
    ["Long", "Nguuuuuuuu"],
    ["Long", "Nguuuuuuuu"],
    ["Long", "Nguuuuuuuu"],
    ["Long", "Nguuuuuuuu"],
    ["Long", "Nguuuuuuuu"],
    ["Long", "Nguuuuuuuu"],
    ["Long", "Nguuuuuuuu"],
    ["Long", "Nguuuuuuuu"],
    ["Long", "Nguuuuuuuu"],
    ["Long", "Nguuuuuuuu"],
    ["Long", "Nguuuuuuuu"],
    ["Long", "Nguuuuuuuu"],
    ["Long", "Nguuuuuuuu"],
    ["Long", "Nguuuuuuuu"],
    ["Long", "Nguuuuuuuu"],
    ["Long", "Nguuuuuuuu"],
    ["Long", "Nguuuuuuuu"],
    ["Long", "Nguuuuuuuu"],
    ["Long", "Nguuuuuuuu"],
    ["Long", "Nguuuuuuuu"],
    ["Long", "Nguuuuuuuu"],
    ["Long", "Nguuuuuuuu"],
    ["Long", "Nguuuuuuuu"],
    ["Long", "Nguuuuuuuu"],
    ["Long", "Nguuuuuuuu"],
    ["Long", "Nguuuuuuuu"],
    ["Long", "Nguuuuuuuu"],
    ["Long", "Nguuuuuuuu"],
    ["Long", "Nguuuuuuuu"],
    ["Long", "Nguuuuuuuu"],
    ["Long", "Nguuuuuuuu"],
    ["Long", "Nguuuuuuuu"],
    ["Long", "Nguuuuuuuu"],
    ["Long", "Nguuuuuuuu"],
    ["Long", "Nguuuuuuuu"],
    ["Long", "Nguuuuuuuu"],
    ["Long", "Nguuuuuuuu"],
    ["Long", "Nguuuuuuuu"],
    ["Long", "Nguuuuuuuu"],
    ["Long", "Nguuuuuuuu"],
    ["Long", "Nguuuuuuuu"],
    ["Long", "Nguuuuuuuu"],
    ["Long", "Nguuuuuuuu"],
    ["Long", "Nguuuuuuuu"],
  ];
  return (
    <>
      <div className="main-container">
        <Search sty />
        <Table headTables={headTables} dataTables={dataTables} />
      </div>
    </>
  );
}

export default BuildingManagement;
