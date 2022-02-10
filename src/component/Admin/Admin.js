import React, { useEffect, useState } from 'react';
import './Admin.css'
import { useForm } from 'react-hook-form';
import { ClipLoader } from 'react-spinners';
import Food from './Food/Food';
import { Button, Table } from 'react-bootstrap';


const Admin = () => {
    const [addSuccess,setAddSuccess]=useState(false);
    const [Foods,setFoods]=useState([]);
    const [color,setColor]=useState('#ffffff');
    const { register, handleSubmit } = useForm();
  const onSubmit = data =>{
    setAddSuccess(true);
    fetch('http://localhost:5000/food',{
        method:'POST',
        headers:{
            'content-type':'application/json'
        },
        body:JSON.stringify(data)
    })
    .then(res=>res.JSON())
    .then(data=>{
        if(data.insertedId){
            setAddSuccess(false);
        }
    })
    .finally(
        addSuccess(false)
    )
    
  };
  useEffect(()=>{
      fetch('http://localhost:5000/food')
      .then(res=>res.json())
      .then(data=>setFoods(data));
      
  },[Foods])

  const handleDelete=(id)=>{
      console.log(id);
    fetch(`http://localhost:5000/food/${id}`,{
        method:'DELETE'
    })
    .then(res=>res.json())
    .then(data=>{
        console.log(data)
        if(data.deleteCount>0){
            const remainingFood=Foods.filter(f=>f._id!==id);
            setFoods(remainingFood);
        }
    })

  }
    return (
        <div >
            <div>

            </div>
            <div className='add-food'>
                <h1>Add New Food Item</h1>
            <form style={{
                marginLeft:'42%',
                textAlign:'center'
            }} 
        onSubmit={handleSubmit(onSubmit)}>
      <input className='d-block mt-4' {...register("foodName")} />
      <input className='d-block mt-4' {...register("price")} />
      {
        addSuccess?<ClipLoader color={color} loadng={addSuccess}  size={30}/>:<input className='d-block ms-5 mt-4' type="submit" value='Add' />
      }
    </form>
    <div>
       <Table striped bordered hover variant="dark">
                <thead>
                  <tr>
                    <th>#</th>
                    <th> Food</th>
                    <th>Price</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {
                      Foods.map(food=><tr>
                          <td>{Foods.indexOf(food)}</td>
                          <td>{food.foodName}</td>
                          <td>{food.price}</td>
                          <td><Button variant='success' onClick={()=>handleDelete(food._id)}>delete</Button></td>

                      </tr>)
                  }
                </tbody>
              </Table>
            
            </div>
            </div>
          
        </div>
    );
};

export default Admin;