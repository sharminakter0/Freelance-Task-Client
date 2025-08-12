import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Header from './Header';
import Footer from './Footer';


const ViewBids = () => {
  const { taskId } = useParams();
  const [bids, setBids] = useState([]);

  useEffect(() => {
    fetch(`https://frelancer-service.vercel.app/bids?taskId=${taskId}`)
      .then(res => res.json())
      .then(data => setBids(data));
  }, [taskId]);

  return (
    <>
    <Header></Header>
    <div className=" my-10 w-11/12 mx-auto ">
      <h2 className="text-4xl text-purple-600 text-center font-bold mb-4">Bids for Task</h2>
      {bids.length === 0 ? (

     
        <p className=' place-content-center gap-0 text-center'>No bids available for this task.
       </p>
      
      
      ) : (
        <table className="table-auto w-full border">
          <thead>
            <tr>
              <th className="px-4 py-2">Freelancer</th>
              <th className="px-4 py-2">Bid Amount</th>
              <th className="px-4 py-2">Message</th>
            </tr>
          </thead>
          <tbody>
            {bids.map((bid, index) => (
              <tr key={index}>
                <td className="border px-4 py-2">{bid.freelancerName}</td>
                <td className="border px-4 py-2">${bid.amount}</td>
                <td className="border px-4 py-2">{bid.message}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
    <Footer></Footer>
    </>

  );
};

export default ViewBids;
