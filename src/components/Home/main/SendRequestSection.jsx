import { Button, Input, Select } from 'antd'
import React from 'react'

export default function SendRequestSection() {
  const handleChange = (value) => {
    console.log(value);
  };

  return (
    <div className='SendRequestSection'>
      <div className="SendRequestSection__bgColor">
        <div className="sendRequest__texts">
          <p>An easy way to send requests to all suppliers</p>
          <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt.</span>
        </div>
        <div className="sendRequest__post">
          <p>Send quote to suppliers</p>
          <Input placeholder="What item you need?" className='sendRecuest__inputOne' />
          <textarea name="" id="" className='sendRequest__textarea' placeholder='Type more details'></textarea>
          <div className="sentRequestPost__fot">
            <Input placeholder="Quantity" className='sendRecuest__inputTow' />
            <Select
              className='sendRecuest__select'
              defaultValue="Pcs"
              onChange={handleChange}
              options={[
                { value: 'Pcs', label: 'Pcs' },
                { value: 'Yiminghe', label: 'yiminghe' },
                { value: 'lucy', label: 'Lucy' },
                // { value: 'disabled', label: 'Disabled', disabled: true },
              ]}
            />
          </div>
          <Button className='sentRequestPost__btn' type="primary">Send inquiry</Button>

        </div>
      </div>
    </div>
  )
}
