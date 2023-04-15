import { Button, Checkbox, Form, Input } from "antd";
import styles from "../ModalApp.module.scss";
import capcha from "../../../img/capcha.png";

import { yupResolver } from "@hookform/resolvers/yup";

import axios from "axios";
import { useEffect } from "react";
import { Controller, useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";
import { getUsers } from "../ModalAppSLice";
import { closeLogin } from "../ModalAppSLice";
import useNotification from "antd/es/notification/useNotification";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [api,contextHolder] = useNotification()
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
      password: '',
    },
    resolver: yupResolver(schema),
  });
 

  const fetchLogin = async (values) => {

    try {
      const res = await axios({
        method: 'post',
        url: 'http://localhost:3000/api/auth/login',
        data: {
          email: values.username,
          password: values.password
        }

      });

      if(res.status === 200){
        api.success({
          message: 'Thông báo',
          description:'Bạn đã đăng nhập thành công',
          duration: 5,
          onClose : () => {
            navigate('/')
            
          }
        })
        dispatch(closeLogin())
       
        dispatch(getUsers(res.data.user))
        localStorage.setItem('users',JSON.stringify(res.data))

      }

    } catch (error) {
      api.error({
        message: 'Thông báo',
        description:'Tài khoản không hợp lệ',
        duration: 5,
        onClose : () => {
          navigate('/register')
          
        }
      })
       
        dispatch(closeLogin())
        reset()


    }

  }

  const onSubmit = (data) => {
    fetchLogin(data)
    reset()
  };

  return (
    <Form
      name="basic"
      labelCol={{
        span: 8,
      }}
      wrapperCol={{
        span: 24,
      }}
      style={{
        maxWidth: 600,
      }}
      initialValues={{
        remember: true,
      }}
      onFinish={handleSubmit(onSubmit)}
    >
      <Form.Item
        name="username"
        hasFeedback={!!errors.username?.message}
        validateStatus={errors.username?.message ? "error" : "success"}
        help={errors.username?.message}
      >
      
        <Controller
          name="username"
          control={control}
          rules={{ required: "Please input your username!" }}
          render={({ field }) => (
            <Input
            
              value={field.value}
              {...field}
              className={styles.form__item}
            />
          )}
        />
      </Form.Item>

      <Form.Item
        name="password"
        hasFeedback={!!errors.password?.message}
        validateStatus={errors.password?.message ? "error" : "success"}
        help={errors.password?.message}
      >
        <Controller
          name="password"
          control={control}
          rules={{ required: "Please input your password!" }}
          render={({ field }) => (
            <Input
              type="password"

              placeholder="Nhập mật khẩu"
              value={field.value}
              {...field}
              className={styles.form__item}
            />
          )}
        />
      </Form.Item>
      <div  className={styles.form__item__text}>
        Quên mật khẩu?
      </div>

      <div className={styles.form__capcha}>
        <div className={styles.form__capcha__content}>
          <span className={styles.form__capcha__content__square}></span>
          <p>Tôi không phải người máy</p>
          <div className={styles.form__capcha__content__logo}>
            <img src={capcha} alt="capcha" />
            <span>reCAPTCHA</span>
          </div>
        </div>
        <div className={styles.form__capcha__term}>
          <a href="">Bảo mật</a>
          <span>-</span>
          <a href="">Điều khoản</a>
        </div>
      </div>

      <Form.Item>
        <button htmltype="submit" className={styles.form__item__btn}>
          ĐĂNG Nhập
        </button>
      </Form.Item>
      {contextHolder}
    </Form>
  );
};

export default Login;
