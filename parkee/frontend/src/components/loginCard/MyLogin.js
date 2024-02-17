import React, { useState } from 'react';
import { Form, Input, Button, Row, Col, Card } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { Helmet } from "react-helmet";


export default function MyLogin() {
    const [user, setUser] = useState({
        email: '',
        password: '',
    }) 

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
                email: user.email,
                password: user.password,
            }),
        };
        fetch("backend/login-user", requestOptions)
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            console.log('data', data);
            if (data['error']) {
                alert(data['error']);
            } else {
                alert('ok');
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
        <div>
            <Row justify="center" align="middle" style={{ minHeight: '100vh', width: '150vh' }}>
                <Helmet><title>Login</title></Helmet>
                <Col span={8}>
                    <Card title='Login' style={{ borderRadius: '10px' }}>
                        <Form
                            layout="vertical"
                        >
                            <Form.Item
                                name='email'
                                label='Email'
                                onChange={ (e) => handle(e) }
                                id='email'
                                value={ user.value }
                                rules={[{
                                    required: true,
                                    message: 'Please input your Email',
                                },
                                { validator: emailValidator },
                                ]}
                            >
                                <Input
                                    placeholder='Your email'
                                    prefix={ <UserOutlined className='site-form-item-icon' /> }
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
                                onChange={ (e) => handle(e) } 
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
                                    Login
                                </Button>
                            </Form.Item>
                        </Form>
                    </Card>
                </Col>
            </Row>
        </div>
    )
}
