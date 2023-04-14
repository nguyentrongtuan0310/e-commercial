import { yupResolver } from "@hookform/resolvers/yup";
import { Button, Checkbox, Col, Form, Input, Row } from "antd";
import axios from "axios";
import { useEffect } from "react";
import { Controller, useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";

import styles from "../Register.module.scss";
import useResize from "../../../hooks/useResize";
import FormItem from "antd/es/form/FormItem";
import { openLogin } from "../../../components/ModalApp/ModalAppSLice";

const FormRegister = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const schema = yup
    .object({
      username: yup
        .string()
        .required("Please input your username!")
        .test("test", "Here not is space ", (value) => {
          return !/\s/.test(value);
        })
        .test("test", "Please enter the correct email format", (value) => {
          return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value);
        }),
      password: yup
        .string()
        .required("Please input your password!")
        .min(6, "Password is too short - should be 6 chars minimum.")
        .matches(/[0-9]/, 'Password requires a number')
        .matches(/[a-z]/, 'Password requires a lowercase letter')
        .matches(/[A-Z]/, 'Password requires an uppercase letter')
        .matches(/[^\w]/, 'Password requires a symbol')
        .test("test", "Here not is space ", (value) => {
          return !/\s/.test(value);
        }),
        passwordConfirmation: yup
        .string()
         .oneOf([yup.ref('password'), null], 'Must match "password" field value'),
      name: yup
        .string()
        .required("Please input your name!")
        .test("test", "Here not is space ", (value) => {
          return !/\s/.test(value);
        }),
    })
    .required();
  const {
    handleSubmit,
    formState: { errors },
    reset,
    control,
  } = useForm({
    defaultValues: {
      username: "",
      password:'' ,
      name: "",
    },
    resolver: yupResolver(schema),
  });

  const fetchRegster = async (values) => {
    const res = await axios({
      method: "post",
      url: "http://localhost:3000/api/auth/register",
      data: {
        name: values.name,
        email: values.username,
        password: values.password,
      },
    });
    if (res.status === 200) {
      navigate("/");
      dispatch(openLogin())
    } else {
      navigate("/register");
    }
  };

  const onSubmit = (data) => {
    fetchRegster(data);
    reset()
  };
  const size = useResize();
  return (
    <Form
      name="basic"
      className={styles.form}
      initialValues={{
        remember: true,
      }}
      onFinish={handleSubmit(onSubmit)}
    >
      <Form.Item
        className={styles.form__item}
        name="name"
        hasFeedback={!!errors.name?.message}
        validateStatus={errors.name?.message ? "error" : "success"}
        help={errors.name?.message}
      >
        <Controller
          name="name"
          control={control}
     
          render={({ field }) => (
            <Input
              value={field.value}
              {...field}
              className={styles.form__item__input}
              placeholder="Vui lòng nhập tên của bạn"
            />
          )}
        />
      </Form.Item>
      <Form.Item
        className={styles.form__item}
        name="username"
        hasFeedback={!!errors.username?.message}
        validateStatus={errors.username?.message ? "error" : "success"}
        help={errors.username?.message}
      >
        <Controller
          name="username"
          control={control}
    
          render={({ field }) => (
            <Input
              value={field.value}
              {...field}
              className={styles.form__item__input}
              placeholder="Vui lòng nhập địa chỉ email của bạn"

            />
          )}
        />
      </Form.Item>

      <Form.Item
        className={styles.form__item}
        name="password"
        hasFeedback={!!errors.password?.message}
        validateStatus={errors.password?.message ? "error" : "success"}
        help={errors.password?.message}
      >
        <Controller
          name="password"
      
          control={control}

          render={({ field }) => (
            <Input
            type="password"
              placeholder="Nhập mật khẩu của bạn"

              value={field.value}
              {...field}
              className={styles.form__item__input}
            />
          )}
        />
      </Form.Item>
      <Form.Item
        className={styles.form__item}
        name="passwordConfirmation"
        hasFeedback={!!errors.passwordConfirmation?.message}
        validateStatus={errors.passwordConfirmation?.message ? "error" : "success"}
        help={errors.passwordConfirmation?.message}
      >
        <Controller
          name="passwordConfirmation"
          type="password"

          control={control}
            
          render={({ field }) => (
            <Input
              placeholder="Xác nhận lại mật khẩu"

              value={field.value}
              {...field}
              className={styles.form__item__input}
            />
          )}
        />
      </Form.Item>

      <FormItem name="term" valuePropName="checked">
        <Checkbox className={styles.form__item__checkbox}>
          Tôi đồng ý với các điều khoản bảo mật cá nhân
        </Checkbox>
      </FormItem>
      <FormItem name="promote" valuePropName="checked">
        <Checkbox className={styles.form__item__checkbox}>
          Đăng ký nhận bản tin khuyến mãi
        </Checkbox>
      </FormItem>

      <FormItem
  
  className={styles.form__item}
      >
        <button className={styles.form__item__btn} htmltype="submit">
          Đăng ký
        </button>
      </FormItem>
    </Form>
  );
};
export default FormRegister;
