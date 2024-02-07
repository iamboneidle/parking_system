import React, { useState } from 'react';
import { Form, Input, Button, Row, Col, Card } from 'antd';
import { UserOutlined, LockOutlined, PhoneOutlined, GlobalOutlined } from '@ant-design/icons';
import { Helmet } from "react-helmet";

export default function MyRegistration({ props }) {
    const [user, setUser] = useState({
        name: '',
        surname: '',
        email: '',
        phone_number: '',
        car_reg_number: '',
        password: '',
    })

    return (
        <div className='reg-wrapper'>
            <Row justify="center" align="middle" style={{ minHeight: '100vh', width: '150vh'}}>
                <Col span={8}>
                    <Card title='Registration' style={{borderRadius: '10px'}}>
                        <Form
                            layout="vertical"
                        >
                            <Form.Item
                                name='Name'
                                label='Name'
                                onMetaChange={(e) => handle(e)} id='name' value={user.name}
                                rules={[{
                                    required: true,
                                    message: 'Please input your name!',
                                }]}
                            >
                                <Input
                                    placeholder="Your name"
                                    prefix={<UserOutlined className="site-form-item-icon" />}
                                />
                            </Form.Item>
                            <Form.Item
                                name='Surname'
                                label='Surname'
                                onMetaChange={(e) => handle(e)} id='surname' value={user.surname}
                                rules={[{
                                    required: true,
                                    message: 'Please input your Surname!',
                                }]}
                            >
                                <Input
                                    placeholder="Your surname"
                                    prefix={<UserOutlined className="site-form-item-icon" />}
                                />
                            </Form.Item>
                            <Form.Item
                                name='Email'
                                label='Email'
                                onMetaChange={(e) => handle(e)} id='email' value={user.email}
                                rules={[{
                                    required: true,
                                    message: 'Please input your Email!',
                                }]}
                            >
                                <Input
                                    placeholder="Your email"
                                    prefix={<UserOutlined className="site-form-item-icon" />}
                                />
                            </Form.Item>
                            <Form.Item
                                name='Phone number'
                                label='Phone number'
                                onMetaChange={(e) => handle(e)} id='phone_num' value={user.phone_number}
                                rules={[{
                                    required: true,
                                    message: 'Please input your Phone number!',
                                }]}
                            >
                                <Input
                                    placeholder="Your phone number"
                                    prefix={<UserOutlined className="site-form-item-icon" />}
                                />
                            </Form.Item>
                            <Form.Item
                                name='Car registration number'
                                label='Car registration number'
                                onMetaChange={(e) => handle(e)} id='car_reg' value={user.car_reg_number}
                                rules={[{
                                    required: true,
                                    message: 'Please input your Car registration number!',
                                }]}
                            >
                                <Input
                                    placeholder="Your car registration number"
                                    prefix={<UserOutlined className="site-form-item-icon" />}
                                />
                            </Form.Item>
                            <Form.Item
                                label="Password"
                                name="password"
                                rules={[{ required: true, message: 'Please input your password!' }]}
                            >
                                <Input.Password 
                                    placeholder="Your password"
                                />
                            </Form.Item>
                            <Form.Item wrapperCol={{ offset: 10, span: 16 }}>
                            <Button type="primary" htmlType="submit">
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
