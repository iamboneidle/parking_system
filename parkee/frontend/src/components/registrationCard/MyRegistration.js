import React, { useState } from 'react';
import { Form, Input, Button, Row, Col, Card } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { Helmet } from "react-helmet";
import { useHistory } from "react-router-dom";


export default function MyRegistration({ setIsLoggedIn }) {
    const [user, setUser] = useState({
        name: '',
        surname: '',
        email: '',
        phone_number: '',
        car_reg_number: '',
        password: '',
    })

    const history = useHistory();

    const passwordValidator = (rules, value) => {
        const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{6,}$/;
        if (value && !value.match(passwordRegex)) {
            return Promise.reject('Password should contain at least 6 characters, one lowercase and uppercase character and at least one digit');
        } else {
            return Promise.resolve();
        }
    }

    const emailValidator = (rules, value) => {
        const emailRegex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        if (value && !value.match(emailRegex)) {
            return Promise.reject('Email is not valid');
        } else {
            return Promise.resolve();
        }
    }

    function getCSRFToken() {
        const cookieValue = document.cookie
            .split('; ')
            .find(row => row.startsWith('csrftoken='))
            .split('=')[1];
        return cookieValue;
    }

    const submit = (e) => {
        e.preventDefault();
        const requestOptions = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'X-CSRFToken': getCSRFToken(),
            },
            body: JSON.stringify({
                car_reg_number: user.car_reg_number,
                phone_number: user.phone_number,
                email: user.email,
                name: user.name,
                surname: user.surname,
                password: user.password,
            }),
        };
        fetch("/backend/post-user", requestOptions)
        .then((response) => {
            return response.json();
          })
          .then((data) => {
            // console.log('data', data);
            if (data['error']) {
                alert(data['error']);
            } else {
                setIsLoggedIn(true);
                history.replace('/home')
            }
          })
          .catch(function (error) {
            console.log(error);
        });
    }

    const handle = (e) => {
        const newUser = { ...user };
        newUser[e.target.id] = e.target.value;
        setUser(newUser);
    }

    return (
        <div className='reg-wrapper'>
            <Row justify="center" align="middle" style={{ minHeight: '100vh', width: '150vh' }}>
                <Helmet><title>Registration</title></Helmet>
                <Col span={8}>
                    <Card title='Registration' style={{ borderRadius: '10px' }}>
                        <Form
                            layout="vertical"
                        >
                            <Form.Item
                                name='name'
                                label='Name'
                                onChange={ (e) => handle(e) } 
                                id='name' 
                                value={ user.name }
                                rules={[{
                                    required: true,
                                    message: 'Please input your name!',
                                }]}
                            >
                                <Input
                                    placeholder="Your name"
                                    prefix={ <UserOutlined className="site-form-item-icon" /> }
                                />
                            </Form.Item>
                            <Form.Item
                                name='surname'
                                label='Surname'
                                onChange={ (e) => handle(e) } 
                                id='surname' 
                                value={user.surname}
                                rules={[{
                                    required: true,
                                    message: 'Please input your Surname!',
                                }]}
                            >
                                <Input
                                    placeholder="Your surname"
                                    prefix={ <UserOutlined className="site-form-item-icon" /> }
                                />
                            </Form.Item>
                            <Form.Item
                                name='email'
                                label='Email'
                                onChange={ (e) => handle(e) } 
                                id='email' 
                                value={user.email}
                                rules={[{
                                        required: true,
                                        message: 'Please input your Email!',
                                    },
                                    { validator: emailValidator },
                                ]}
                            >
                                <Input
                                    placeholder="Your email"
                                    prefix={ <UserOutlined className="site-form-item-icon" /> }
                                />
                            </Form.Item>
                            <Form.Item
                                name='phone_number'
                                label='Phone number'
                                onChange={ (e) => handle(e) } 
                                id='phone_num' 
                                value={ user.phone_number }
                                rules={[{
                                    required: true,
                                    message: 'Please input your Phone number!',
                                }]}
                            >
                                <Input
                                    placeholder="Your phone number"
                                    prefix={ <UserOutlined className="site-form-item-icon" /> }
                                />
                            </Form.Item>
                            <Form.Item
                                name='car_reg_number'
                                label='Car registration number'
                                onChange={ (e) => handle(e) } 
                                id='car_reg' 
                                value={ user.car_reg_number  }
                                rules={[{
                                        required: true,
                                        message: 'Please input your Car registration number!',
                                    },
                                ]}
                            >
                                <Input
                                    placeholder="Your car registration number"
                                    prefix={ <UserOutlined className="site-form-item-icon" /> }
                                />
                            </Form.Item>
                            <Form.Item
                                label="Password"
                                name="password"
                                rules={[{
                                        required: true, 
                                        message: 'Please input your password!' 
                                    },
                                    { validator: passwordValidator },
                                ]}
                                onChange={(e) => handle(e)} 
                                id='password'
                                value={ user.password }
                            >
                                <Input.Password 
                                    placeholder="Your password"
                                />
                            </Form.Item>
                            <Form.Item wrapperCol={{ offset: 10, span: 16 }}>
                            <Button 
                                type="primary"
                                htmlType="submit"
                                onClick={ (e) => submit(e) }
                            >
                                Submit
                            </Button>
                            </Form.Item>
                        </Form>
                    </Card>
                </Col>
            </Row>
        </div>
    )
}
