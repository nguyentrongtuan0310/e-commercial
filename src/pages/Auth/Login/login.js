import { yupResolver } from '@hookform/resolvers/yup';
import { Button, Checkbox, Col, Form, Input, message, Row } from 'antd';
import axios from 'axios';
import { useEffect } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import * as yup from "yup";
import imgLogin from '../../../img/login.png'
import styles  from './login.module.scss'
import { getUsers } from './loginSlice';

const Login = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
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
      .required('No password provided.') 
      .min(6, 'Password is too short - should be 6 chars minimum.')
        .test("test", "Here not is space ", (value) => {
          return !/\s/.test(value);
        })
   
  
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
      password: 123
    },
    resolver: yupResolver(schema),
  });
  useEffect(() => {
    const users= JSON.parse(localStorage.getItem('users'))
   
    if(users){
      navigate('/home')
     
    }else{
      navigate('/')

    }
  },[])
  
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
          navigate('/home')
        dispatch(getUsers(res.data.user))
        localStorage.setItem('users',JSON.stringify(res.data))
     
      }
      
    } catch (error) {
        navigate('/register')
    }
      
       
  }

  const onSubmit = (data) => {
    fetchLogin(data)

  
  };

  return (
      <Row align={'center'} className={styles.wrapper} justify={'center'} >
        <Col span={12}>
        
           <div className={styles.wrapper__img}> <img   src={imgLogin} alt='imgLogin'/></div >
        </Col>
          <Col span={12}  className={styles.content}>
          <h2 className={styles.wrapper__title}>Welcom back</h2>
           
              <Form
                name="basic"
                labelCol={{
                  span: 8,
                }}
                wrapperCol={{
                  span: 20,
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
                  label="Username"
                  name="username"
                  hasFeedback={!!errors.username?.message}
                  validateStatus={errors.username?.message ? "error" : "success"}
                  help={errors.username?.message}
                 
                >
                  <Controller 
                     name="username"
                     control={control}
                     rules={{ required: "Please input your username!" }}
                     render={({ field }) => <Input value={field.value} {...field} />}
                  
                  />
                
                </Form.Item>
            
                <Form.Item
                  label="Password"
                  name="password"
                  hasFeedback={!!errors.password?.message}
                  validateStatus={errors.password?.message ? "error" : "success"}
                  help={errors.password?.message}
                >
                  <Controller 
                     name="password"
                     control={control}
                     rules={{ required: "Please input your password!" }}
                     render={({ field }) => <Input.Password value={field.value} {...field} />}
                  
                  />
                
                </Form.Item>
            
                <Form.Item
                  name="remember"
                  valuePropName="checked"
                  wrapperCol={{
                    offset: 8,
                    span: 16,
                  }}
                >
                  <Checkbox>Remember password</Checkbox>
                </Form.Item>
            
                <Form.Item
                  wrapperCol={{
                    offset: 8,
                    span: 16,
                  }}
                >
                  <Button type="primary" className={styles.form__btn} htmlType="submit">
                    SIGN IN
                  </Button>
                </Form.Item>
              </Form>
          </Col>
      </Row>
    

  )
} 
export default Login;