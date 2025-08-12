import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import { useNavigate } from 'react-router';
import Swal from 'sweetalert2';
import Footer from '../Component/Footer';
import Header from '../Component/Header';
import Spinner from '../Component/Spinner/Spinner';

const MyPostedTasks = () => {
  const { user ,loading:authLoading } = useContext(AuthContext);
  const [myTasks, setMyTasks] = useState([]);
  const[taskLoading,setTaskLoading]=useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    if (user && user.email) {
      setTaskLoading(true)
      fetch(`https://frelancer-service.vercel.app/tasks?email=${user.email}`)
        .then(res => res.json())
        .then(data =>
          {
            setMyTasks(data);
          setTaskLoading(false)})
      
    }
  }, [user]);

  const handleDelete = id => {
    Swal.fire({
      title: 'Are you sure?',
      text: 'This task will be deleted permanently!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6',
      confirmButtonText: 'Yes, delete it!'
    }).then(result => {
      if (result.isConfirmed) {
        fetch(`https://frelancer-service.vercel.app/tasks/${id}`, {
          method: 'DELETE'
        })
          .then(res => res.json())
          .then(data => {
            if (data.deletedCount > 0) {
              Swal.fire('Deleted!', 'Your task has been deleted.', 'success');
              setMyTasks(prev => prev.filter(task => task._id !== id));
            }
          });
      }
    });
  };



  const handleUpdate = id => {
    navigate(`/update-task/${id}`);
  };

  const handleViewBids = id => {
    navigate(`/view-bids/${id}`);
  };

 if (authLoading || taskLoading){
  return<Spinner></Spinner>
 }

  return (

    <>
    <Header></Header>
    <div className="w-11/12 mx-auto my-12">
      <h2 className="text-3xl font-bold text-center mb-6 text-purple-600">My Posted Tasks</h2>
      <div className="overflow-x-auto">
        <table className="table table-zebra w-full text-sm">
          <thead>
            <tr>
              <th>Title</th>
              <th>Category</th>
              <th>Budget</th>
              <th>Deadline</th>
              {/* <th >User Name</th> */}
             <th>User Name</th>
              <th>Actions</th>
             
            </tr>
          </thead>
          <tbody>
            {myTasks.map(task => (
              <tr key={task._id}>
                <td>{task.title}</td>
                <td>{task.category}</td>
                <td>${task.budget}</td>
                {/* <td>{task.userName}</td> */}
                <td>{task.deadline}</td>
                <td>{task.userName}</td>
                <td className="flex flex-col md:flex-row gap-2">
                  <button onClick={() => handleUpdate(task._id)} className="btn btn-xs btn-info">Update</button>
                  <button onClick={() => handleDelete(task._id)} className="btn btn-xs btn-error">Delete</button>
                  <button onClick={() => handleViewBids(task._id)} className="btn btn-xs btn-success">Bids</button>
                </td>
                
              </tr>
            ))}
          </tbody>
        </table>
        {myTasks.length === 0 && <p className="text-center mt-6">You haven't posted any tasks yet.</p>}
      </div>
    </div>
   
   <Footer/>
    </>
  );
};

export default MyPostedTasks;
