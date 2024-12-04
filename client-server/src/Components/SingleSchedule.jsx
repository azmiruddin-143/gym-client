
import { Link } from 'react-router-dom';

const SingleSchedule = ({ schedule, index, clearData, setClearData }) => {
    const { title, selecteddate, selectedday, selectedtime, _id, isComplete } = schedule


    const diletSchedule = (_id) => {
        console.log("dilet", _id);
        fetch(`http://localhost:5000/schedule/${_id}`, {
            method: "DELETE",
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                const reming = clearData.filter(clr => clr._id !== _id)
                setClearData(reming)
            })
    }

    const statusSchedule = (_id) => {
        console.log("dilet", _id);
        fetch(`http://localhost:5000/status/${_id}`, {
            method: "PUT",
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                const newData= clearData.map((schedule) => schedule._id === _id ? {...schedule,isComplete: true } : schedule)
                setClearData(newData)
            })
    }
    return (

        <tbody>
            <tr>
                <th>{index + 1}</th>
                <td>{title}</td>
                <td>{selecteddate} </td>
                <td>{selectedday}</td>
                <td>{selectedtime}</td>
                <td className='flex gap-2'>
                    <Link to={`/update/${_id}`} ><button className='bg-[#341c9e] py-2 px-5 rounded-md text-white'>Edid</button></Link>
                    <button onClick={() => diletSchedule(_id)} className='bg-[#c81d1d] py-2 px-5 rounded-md text-white'>Dilet</button>

                    <div onClick={() => statusSchedule(_id)} >
                        {
                            isComplete ? <button  className='bg-[#1dc834] py-2 px-5 rounded-md text-white'>AllDone</button> :<button  className='bg-[#1dc834] py-2 px-5 rounded-md text-white'>Done</button>
                        }
                    </div>
                    
                </td>
            </tr>
        </tbody>

    );
};

export default SingleSchedule;