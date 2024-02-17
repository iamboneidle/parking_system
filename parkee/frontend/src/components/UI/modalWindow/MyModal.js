import React, { useState } from 'react';
import { Form, Input, DatePicker, Modal } from 'antd';
import { UserOutlined } from '@ant-design/icons';
const { RangePicker } = DatePicker;


export default function MyModal({ children, open, handleOk, handleCancel, id }) {
    const [time, setTime] = useState(null);
    const [reserveInfo, setReserveInfo] = useState({
        email: '',
        phone_number: '',
        time_start: null,
        time_stop: null,
        id: null,
    })

    const handleOkPressed = () => {
        reserveInfo.time_start = time[0];
        reserveInfo.time_stop = time[1];
        reserveInfo.id = id;
        console.log(reserveInfo)
    }

    const handle = (e) => {
        const newInfo = { ...reserveInfo };
        newInfo[e.target.id] = e.target.value;
        setReserveInfo(newInfo);
    }

    const onChange = (value, dateString) => {
        setTime(dateString);
    };

    const onOk = (dateString) => {
        console.log('onOk: ', dateString);
    };

    const emailValidator = (rules, value) => {
        const emailRegex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        if (value && !value.match(emailRegex)) {
            return Promise.reject('Email is not valid');
        } else {
            return Promise.resolve();
        }
    }

    return (
        <Modal
            title="Reserve a lot"
            open={ open }
            onOk={ handleOk }
            onCancel={ handleCancel }
            okButtonProps={{
                onClick: () => { handleOkPressed(); handleCancel() }
            }}
            cancelButtonProps={{
                onClick: () => { handleCancel() }
            }}
        >
            <Form
            layout="vertical"
            >
                <Form.Item
                    name='email'
                    label='Email'
                    onChange={ (e) => handle(e) } 
                    id='email' 
                    value={ reserveInfo.email }
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
                    id='phone_number' 
                    value={ reserveInfo.phone_number }
                    rules={[{
                        required: true,
                        message: 'Please input your phone number!',
                    }]}
                >
                    <Input
                        placeholder="Your phone number"
                        prefix={ <UserOutlined className="site-form-item-icon" /> }
                    />
                </Form.Item>
                <Form.Item>
                    <RangePicker
                        showTime={{
                            format: 'HH:mm',
                        }}
                        showNow={ true }
                        format="YYYY-MM-DD HH:mm"
                        onChange={ onChange }
                        onOk={ onOk }
                    />
                </Form.Item>
            </Form>
        </Modal>
    );
}
