import { Button, Row, Table, Col } from "antd";
import React, { useEffect, useState } from "react";
import { Space } from "antd";
import { useNavigate, useLocation } from "react-router-dom";
import "./ListProduct.scss";
import productApi from "../../api/ProductApi/productApi";
import useNotification from "antd/es/notification/useNotification";
import { LoadingOutlined } from "@ant-design/icons";


const ListProduct = () => {
  const [data, setData] = useState([]);
  const [showLoading, setShowLoading] = useState(true);
  const [stateDelete, setStateDelete] = useState(false);
  const [id, setId] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const [api, contextHolder] = useNotification();
  // Notification
  const key = `open${Date.now()}`;
  const btn = (
    <Space>
      <Button type="link" size="small" onClick={() => api.destroy()}>
        Cancel
      </Button>
      <Button
        type="primary"
        size="small"
        onClick={() => {
          fetchDelete(id);
          api.destroy();
        }}
      >
        Confirm
      </Button>
    </Space>
  );

  const handleDelete = (id) => {
    setId(id);
    openNotification();
  };
  const openNotification = async (id) => {
    api.open({
      message: "Notification ",
      description: "Do you want to delete this product?",
      btn,
    });
  };
  const fetchDelete = async (id) => {
    try {
      const data = await productApi.deleteProduct(id);
      setStateDelete(true);
    } catch (error) {
      api.error({
        message: "Error",
        description: "You have not successfully delete",
      });
    }
  };
  useEffect(() => {
    getAll();
    setStateDelete(false);
  }, [location, stateDelete]);
  const getAll = async () => {
    try {
      setShowLoading(true);
      const res = await productApi.getAll();
      setTimeout(() => {
        setShowLoading(false);

      },500)
      setData(res);
    } catch (error) {
      // setShowLoading(true);
    }
  };
  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Price",
      dataIndex: "price",
      key: "price",
    },
    {
      title: "Description",
      dataIndex: "description",
      key: "description",
    },
    {
      title: "PriceOld",
      dataIndex: "priceOld",
      key: "priceOld",
    },
    {
      title: "Image",
      dataIndex: "image",
      key: "image",
      render: (_, record) => (
        <img
          src={record.link}
          alt=""
          style={{ width: "50px", height: "50px" ,objectFit:'cover',borderRadius: '10px'}}
        />
      ),
    },

    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <Space size="middle">
          <Button type="primary" onClick={() => navigate(`/add/${record.id}`)}>
            Edit
          </Button>
          <Button danger onClick={() => handleDelete(record.id)}>
            Delete
          </Button>
        </Space>
      ),
    },
  ];
  return (
   <div className="wrapper__listProduct">
     
        {!showLoading? (
          <div>
            <div className="wrapper-header">
              <h1 className={"title"}>List Product</h1>
  
              <div className={"btn-add"}>
                {" "}
                <Button type="primary" onClick={() => navigate("/add")}>
                  Add New
                </Button>
              </div>
            </div>
  
            <Table
              columns={columns}
              dataSource={data}
              rowKey={(data) => data.id}
            />
            {contextHolder}
          </div>
        ) : (
          <div className="icon-loading">
            <LoadingOutlined />{" "}
          </div>
        )}
       
     
    
   </div>

  );
};

export default ListProduct;
