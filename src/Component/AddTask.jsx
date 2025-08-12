
import { useContext } from 'react';
import Footer from './Footer';
import Header from './Header';
import { AuthContext } from '../Provider/AuthProvider';
import Swal from 'sweetalert2';




const AddTask = () => {
// ****************************
 
 
 
const {user} =useContext(AuthContext);



const handleAddTask = e => {
    e.preventDefault();
    const form =e.target;
    const formData =new FormData(form);
    const newTask = Object.fromEntries(formData.entries())
    console.log(newTask);



    //  ********************

    // extra
    newTask.email =user?.email||'';
    newTask.userName = user?.displayName||'';
    // ******************

    // send task data to the db
    fetch('https://frelancer-service.vercel.app/tasks',{
        method:'POST',
        headers:{
            'content-type':'application/json'
        },
        body:JSON.stringify(newTask)
    })
    .then(res =>res.json())
    .then (data => {
      if (data.insertedId || data.acknowledged) {
        Swal.fire({
          icon: 'success',
          title: 'Task Added Successfully!',
          text: 'Your task has been posted and is now visible to freelancers.',
          confirmButtonColor: '#3085d6'
        });

        form.reset(); // Optionally reset the form
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: 'Failed to add task. Please try again.',
          confirmButtonColor: '#d33'
        });
      }
    })
    .catch(error => {
      console.error('Add Task Error:', error);
      Swal.fire({
        icon: 'error',
        title: 'Something went wrong!',
        text: 'Could not connect to the server.',
        confirmButtonColor: '#d33'
      });
     
    
    });
};
 
    return (



        <>
     <Header/>

        <div className='w-11/12 mx-auto text-center my-12'>
            <h2 className='text-4xl font-bold mb-5 text-purple-500'>Add New Task</h2>
            <p className='text-sm text-gray-500'>  Need help with a project? Post your task here and connect with skilled freelancers who can get the job done.
    Just fill out the details below — whether it’s a website, a logo, a blog post, or a marketing plan — 
    and start receiving offers from qualified professionals.</p>
   <div className=''>
     <form onSubmit={handleAddTask} action=""  className='bg-amber-50 py-6 px-3 mt-7'>


    <div className='grid grid-cols-1 md:grid-cols-2 gap-6 mb-6 '>  


        {/* Title */}
         <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">
   <label className="label">Title</label>
   <input 
   type="text" 
   className="input w-full" 

   name="title"
 
   placeholder="Task-Title"
   required />
  </fieldset> 

  {/* Category */}

   <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">
   <label className="label ">Category</label>
   <select
           name="category"
           id=""
           className='w-full p-2 border-base-300'
   
        
         required>
          <option value="Web Development">Web Development</option>
          <option value="Design">Design</option>
          <option value="Writing">Writing</option>
          <option value="Marketing">Marketing</option>

   </select>
  </fieldset> 
  {/* Description */}




   <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">
   <label className="label">Description</label>
   <input type="text" className="input w-full" name="description" placeholder="Description" />
  </fieldset> 


  

{/* Deadline */}
   <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">
   <label className="label">Deadline</label>
   <input type="date" className="input w-full" name="deadline" placeholder=""
   required />
  </fieldset> 

  {/* budget */}
   <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">
   <label className="label">Budget</label>
   <input type="number" className="input w-full" name="budget"  />
  </fieldset> 
  {/* email */}

   <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">
   <label className="label">Email</label>
   <input type="email" className="input w-full"  value={user?.email|| ''} 
   name="email"
    readOnly />
  </fieldset> 
  
  {/* userName */}

  <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">
   <label className="label">User Name</label>
   <input type="text" className="input w-full"  value={user?.displayName|| ''} 
   name="userName"
    readOnly />
  </fieldset> 

  {/* PhotoUrl */}

    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">
   <label className="label">Photo URL</label>
   <input 
   type="text" 
   className="input w-full" 

   name="image"
 
   placeholder="Enter image url"
   required />
  </fieldset> 

  </div>  
  
   
    <input type="submit" className='btn btn-primary mt-7 w-full font-bold'
   value="Add Task" />
    </form>
      
   </div>
    
 
        </div>
   <Footer></Footer>     
        </>
    );
};

export default AddTask;