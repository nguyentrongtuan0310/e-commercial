import { Button, Col, Form, Input, Row } from "antd";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import React, { useEffect, useRef, useState } from "react";
import style from "./AddProduct.module.scss";
import classNames from "classnames/bind";
import { useForm, Controller } from "react-hook-form";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTriangleExclamation,
} from "@fortawesome/free-solid-svg-icons";
import { useNavigate, useParams } from "react-router-dom";
import productApi from "../../api/ProductApi/productApi";
import useNotification from "../../components/hooks/useNotification";

const cx = classNames.bind(style);
const AddProduct = () => {
  const [api,contextHolder] = useNotification()

  const { id } = useParams();
  const navigate = useNavigate();

  const schema = yup
    .object({
      name: yup
        .string()
        .required("This field is required"),
        // .test("test", "not is space ", (value) => {
        //   return !/\s/.test(value);
        // }),
    
    })
    .required();
  const {
    handleSubmit,
    getValues,
    setValue,
    formState: { errors },
    reset,
    control,
  } = useForm({
    defaultValues: {
      name: "",
      price: 0,
      priceOld: 0,
      more: "",
      description: "",
      link: "",
    },
    resolver: yupResolver(schema),
  });
  const setValueInput = (dataInput) => {
    setValue("name", dataInput.name);
    setValue("price", dataInput.price);
    setValue("priceOld", dataInput.priceOld);
    setValue("description", dataInput.description);
    setValue("link", dataInput.link);
  };
  useEffect(() => {
   if(id){
    const fetchData = async () => {
      try {
        const data = await productApi.getById(id);
        setValueInput(data);
      } catch (error) {}
    };
    fetchData();
    
   }
  }, []);
  
  const updateProduct = async () => {
    const dataInput = {
      name: getValues("name"),
      price: getValues("price"),
      priceOld: getValues("priceOld"),
      description: getValues("description"),
      link: getValues("link"),
    };
    try {
      const data = await productApi.putProduct(id, dataInput);
      if(data){
        api.success({
          message: 'Notification',
          description:'You have successfully updated',
          duration: 2,
          onClose : () => {
              navigate('/product')
          }
        })
      }
    } catch (error) {
      api.error({
        message: 'Error',
        description:'You have not successfully updated'
      })

    }
  };

  const fetchAddProduct = async (data) => {
    try {
      const res = await productApi.addProduct(data);
      console.log(res);
      if(res){
        api.success({
          message: 'Notification',
          description:'You have successfully added',
          duration: 2,
          onClose : () => {
              navigate('/product')
          }
        })
        
    
      }
    } catch (error) {
      api.error({
        message: 'Error',
        description:'You have not successfully added'
      })
    }
  };
  const onSubmit = (data) => {
    if(id){
      updateProduct();
      reset();
    }else{
      fetchAddProduct(data);
      reset();
    }
  
  };
 
  return (
  
      <div className={cx('wrapper')}>
        <h1 className={cx("title")}>Add Product</h1>
        <Form className={cx("form")} onFinish={handleSubmit(onSubmit)}>
          <Row gutter={16}>
            <Col span={6}>
              <Form.Item
                label="Name"
                hasFeedback={!!errors.name?.message}
                validateStatus={errors.name?.message ? "error" : "success"}
                help={errors.name?.message}
              >
                <Controller
                  name="name"
                  control={control}
                  rules={{ required: "This field is required" }}
                  render={({ field }) => <Input value={field.value} {...field} />}
                />
              </Form.Item>
            </Col>
            <Col span={6}>
              <Form.Item
                label="Price"
                hasFeedback={!!errors.price?.message}
                validateStatus={errors.price?.message ? "error" : "success"}
                help={errors.price?.message}
              >
                <Controller
                  name="price"
                  control={control}
                  rules={{ required: "This field required" }}
                  render={({ field }) => <Input type="text" {...field} />}
                />
              </Form.Item>
            </Col>
            <Col span={6}>
              <Form.Item
                label="PriceOld"
                hasFeedback={!!errors.priceOld?.message}
                validateStatus={errors.priceOld?.message ? "error" : "success"}
                help={errors.priceOld?.message}
              >
                <Controller
                  name="priceOld"
                  value
                  control={control}
                  rules={{ required: "This field is required" }}
                  render={({ field }) => <Input type="text" {...field} />}
                />
              </Form.Item>
            </Col>
            <Col span={6}>
              <Form.Item
                label="Link"
                hasFeedback={!!errors.link?.message}
                validateStatus={errors.link?.message ? "error" : "success"}
                help={errors.link?.message}
              >
                <Controller
                  name="link"
                  control={control}
             
                  render={({ field }) => <Input type="text" {...field} />}
                />
              </Form.Item>
            </Col>
          </Row>
          <Row>
            <Col span={24}>
              <Form.Item
                label="Description"
                hasFeedback={!!errors.description?.message}
                validateStatus={errors.description?.message ? "error" : "success"}
              ></Form.Item>
              <Controller
                name="description"
                control={control}
                rules={{ required: "This field is required" }}
                render={({ field }) => <Input.TextArea type="text" {...field} />}
              />
              {errors.description?.type === "required" && (
                <p className={cx("text-error")}>
                  <FontAwesomeIcon icon={faTriangleExclamation} /> This field is
                  required
                </p>
              )}
            </Col>
          </Row>
          <Row justify="end" mt={2} className={cx("wrap-btn")}>
            <Form.Item>
              <Button type="primary" className={cx("btn-add")} htmlType="submit" >
              {id ? 'Update' : 'Add'}
              </Button>
             
            </Form.Item>
            <Button
              type="text"
              style={{ backgroundColor: "#ccc" }}
              onClick={() => navigate("/product")}
            >
              Back
            </Button>
          </Row>
        </Form>
              {contextHolder}
      </div>
  
  );
};

export default AddProduct;
