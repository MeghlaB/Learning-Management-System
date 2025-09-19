
import useAxiosSecuire from '../../../Hooks/AxiosSecuire';
import { Trash2Icon, TrashIcon, UsersRound } from 'lucide-react';
import Swal from 'sweetalert2';
import { useQuery } from '@tanstack/react-query';

function AllUser() {
    // const [users, setUsers] = useState([]);
    const axiosSecuire = useAxiosSecuire();


    const { data: users = [], refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await axiosSecuire.get('/users')
            return res.data
        }
    })

    // users delate
    const handleDelateUser = (user) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecuire.delete(`/users/${user._id}`)
                    .then(res => {
                        if (res.data.deletedCount > 0) {
                            refetch()
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                        }
                    })

            }
        });
    }

    // user role added with admin

    const handleMakeAdmin = user => {
        axiosSecuire.patch(`/users/admin/${user._id}`)
            .then(res => {
                console.log(res.data)
                if (res.data.modifiedCount > 0) {
                    refetch()
                    Swal.fire({
                        title: `${user.name} is an Admin Now!`,
                        icon: "success",
                        draggable: true
                    });
                }
            })
    }





    return (
        <div className="max-w-6xl mx-auto mt-10">
            <div className="overflow-x-auto">
                <table className="table table-zebra">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Role</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user, index) => (
                            <tr key={user._id}>
                                <th>{index + 1}</th>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>
                                   {
                                    user.role==='admin'?'admin'
                                    :
                                     <button
                                        className='bg-blue-800 p-2 rounded-2xl'
                                        onClick={() => handleMakeAdmin(user)}
                                    >
                                        <UsersRound className='text-white text-2xl'></UsersRound>
                                    </button>
                                   }

                                </td>
                                <td>
                                    <button
                                        className='text-red-600'
                                        onClick={() => handleDelateUser(user)}
                                    >
                                        <Trash2Icon></Trash2Icon>
                                    </button>
                                </td>

                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default AllUser;
