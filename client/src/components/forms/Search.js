import React, {useState} from 'react'
import {DatePicker, Select, Input } from 'antd'
import {SearchOutlined} from '@ant-design/icons'
import moment from 'moment'
import {useHistory} from 'react-router-dom'

// destructure values from ant compenents
const {RangePicker} = DatePicker
const {Option} = Select;
// route


const Search = () => {
    const history = useHistory();
    // state
  //  const [location, setLocation] = useState('')
   const [title, setTitle] = useState('')
    const [date, setDate] = useState('')
   const [bed, setBed] = useState('')

 

    const handleSubmit = () => {
        history.push(`/search-result?title=${title}&date=${date}&bed=${bed}`);
    };

    return (
        <div className='d-flex pb-4'>
            
                 <Input placeholder="Name Hotel" 
                  onChange={ e => setTitle(e.target.value)}
                 />
        

                 <RangePicker onChange={(value, dateString) => setDate(dateString)} 
                 disabledDate={(current) => current && current.valueOf() < moment().subtract(1, 'days')}
                 className='w-100'
                />


                 <Select onChange={(value) => setBed(value)} 
                 className='w-100' size='large' placeholder='Number of beds' >
                    <Option key={1} >{1}</Option>
                    <Option key={2} >{2}</Option>
                    <Option key={3} >{3}</Option>
                    <Option key={4} >{4}</Option>
                 </Select>

                 <SearchOutlined onClick={handleSubmit} 
                 className='btn btn-primary p-3 btn-square'
                 />
                 
            
        </div>
    )
}

export default Search;

