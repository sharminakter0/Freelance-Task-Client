import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import { useParams } from 'react-router';
import Swal from 'sweetalert2';
import Footer from './Footer';
import Header from './Header';

const UpdateTask = () => {

    const {id}=useParams();
    const navigate=useNavigate();
    const [task,setTask]=useState({});


    useEffect(()=>{
        fetch(`https://frelancer-service.vercel.app/tasks/${id}`)
        .then(res =>res.json())
        .then(data =>setTask(data));

    },[id]);

    const handleUpdate=e=>{
        e.preventDefault();
        const form =e.target;
         const updatedTask = {
      title: form.title.value,
      category: form.category.value,
      description: form.description.value,
      deadline: form.deadline.value,
      budget: form.budget.value,
    };
      fetch(`https://frelancer-service.vercel.app/tasks/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(updatedTask),
    })
    .then(res => res.json())
    .then(data => {
      if (data.modifiedCount > 0) {
        Swal.fire('Success', 'Task Updated Successfully', 'success');
        navigate('/my-posted-tasks');
      }
    });

    }
    return (

       <>
       <Header></Header>
        <div className="py-13">
           <form onSubmit={handleUpdate} className="p-6 max-w-xl mx-auto bg-white shadow">
      <h2 className="text-4xl text-purple-500 text-center font-bold mb-4">Update Task</h2>
      <input name="title" defaultValue={task.title} className="input w-full mb-3" required />
      <input name="category" defaultValue={task.category} className="input w-full mb-3" required />
      <input name="description" defaultValue={task.description} className="input w-full mb-3" />
      <input type="date" name="deadline" defaultValue={task.deadline} className="input w-full mb-3" required />
      <input type="number" name="budget" defaultValue={task.budget} className="input w-full mb-3" />
      <button type="submit" className="btn btn-primary w-full">Update Task</button>
    </form>
        </div>
        <Footer></Footer>
        </>
    );
};

export default UpdateTask;