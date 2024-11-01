import { useEffect, useState } from "react";
import Search from "../../components/Search";
import Table from "../../components/Table";
import api from "../../components/api";

import "./BuildingManagement.css";

function BuildingManagement() {
  const buildings = {
    name: "",
    floorArea: null,
    district: null,
    ward: "",
    street: "",
    numberOfBasement: null,
    direction: "",
    level: "",
    areaFrom: null,
    areaTo: null,
    rentPriceFrom: null,
    rentPriceTo: null,
    managerName: "",
    managerPhoneNumber: "",
    userId: null,
    rentTypes: null,
  };

  const [dataTables, setDataTables] = useState([]);
  async function getBuilding() {
    try {
      const response = await api.post("buildings/search", buildings);
      setDataTables(response.data.content);
    } catch (e) {
      console.error(e);
    }
  }
  useEffect(() => {
    getBuilding();
  }, []);

  const headTables = [
    { field: "Name building", name: "name" },
    { field: "Address", name: "address" },
    { field: "Number of basement", name: "numberOfBasement" },
    { field: "Floor area", name: "floorArea" },
    { field: "Empty space", name: "emptySpace" },
    { field: "Leased area", name: "leasedArea" },
    { field: "Rent price", name: "rentPrice" },
    { field: "Service fee", name: "serviceFee" },
    { field: "Brokerage fee", name: "brokerageFee" },
    { field: "Manager name", name: "managerName" },
    { field: "Manager phone number", name: "managerPhoneNumber" },
    { field: "Action", name: "action" },
  ];

  const [districts, setDistricts] = useState({});

  useEffect(() => {
    async function getAllDistrict() {
      try {
        const response = await api.get("util/district-code");
        setDistricts(response.data);
      } catch (e) {
        console.error(e);
      }
    }
    getAllDistrict();
  }, []);

  const [listStaff, setListStaff] = useState([]);

  useEffect(() => {
    async function getAllStaff(){
      try{
        const response = await api.get("admin/staffs");
        setListStaff(response.data.content);
      }catch(e){
        console.error(e);
      }
    }

    getAllStaff();
  }, [])

  const listFilter = [
    {
      field: "Tên tòa nhà",
      placeHolder: "Nhập tên tòa nhà",
      type: "text",
      option: null,
    },
    {
      field: "Diện tích sàn",
      placeHolder: "Nhập diện tích sàn",
      type: "number",
      option: null,
    },
    {
      field: "Quận",
      placeHolder: "Chọn quận",
      type: "select",
      option: Object.values(districts),
    },
    {
      field: "Phường",
      placeHolder: "Nhập phường",
      type: "text",
      option: null,
    },
    {
      field: "Đường",
      placeHolder: "Nhập đường",
      type: "text",
      option: null,
    },
    {
      field: "Số tầng hầm",
      placeHolder: "Nhập số tầng hầm",
      type: "number",
      option: null,
    },
    {
      field: "Hướng",
      placeHolder: "Nhập hướng tòa nhà",
      type: "text",
      option: null,
    },
    {
      field: "Hạng",
      placeHolder: "Nhập hạng",
      type: "text",
      option: null,
    },
    {
      field: "Diện tích từ",
      placeHolder: "Nhập diện tích bắt đầu tìm kiếm",
      type: "number",
      option: null,
    },
    {
      field: "Diện tích đến",
      placeHolder: "Nhập diện tích kết thúc tìm kiếm",
      type: "number",
      option: null,
    },
    {
      field: "Giá thuê từ",
      placeHolder: "Nhập giá thuê bắt đầu tìm kiếm",
      type: "number",
      option: null,
    },
    {
      field: "Giá thuê đến",
      placeHolder: "Nhập giá thuê kết thúc tìm kiếm",
      type: "number",
      option: null,
    },
    {
      field: "Tên quản lý",
      placeHolder: "Nhập tên quản lý",
      type: "text",
      option: null,
    },
    {
      field: "SDT quản lý",
      placeHolder: "Nhập số điện thoại quản lý",
      type: "text",
      option: null,
    },
    {
      field: "Nhân viên quản lý",
      placeHolder: "Chọn nhân viên đang quản lý",
      type: "select",
      option: listStaff.map((item) => item.name),
    },
    {
      field: "Loại tòa nhà",
      placeHolder: null,
      type: "checkbox",
      option: null,
    },
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
