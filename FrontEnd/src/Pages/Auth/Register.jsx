import React, { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { AuthContext } from '../../Provider/AuthProvider'
import Swal from 'sweetalert2'

export default function Register() {


    const { createUser } = useContext(AuthContext)
    const navigate = useNavigate()

  const hanldeSubmit = (e) => {
    e.preventDefault()
    const form = e.target
    const firstName = form.first_name.value;
    const lastName = form.last_name.value;
    const email = form.email.value;
    const password = form.password.value;

    const fullName = `${firstName} ${lastName}`

    createUser(email, password)
        .then(result => {
            const user = result.user
            console.log(user)

            const userInfo = {
                name: fullName,
                email: user.email,
                role: "user"  
            }

            // userInfo database 
            fetch('http://localhost:5000/users', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(userInfo)
            })
                .then(res => res.json())
                .then(data => {
                    console.log('user collection', data)
                })

            if (user) {
                Swal.fire({
                    title: "User Successfully Registered!",
                    icon: "success",
                    draggable: true
                });
                navigate('/')
            }
        })
        .catch(err => {
            console.error(err)
            Swal.fire({
                title: "Registration Failed",
                text: err.message,
                icon: "error"
            })
        })
}










    return (
        <div className="w-full  mx-auto my-28 px-6  max-w-md space-y-6 rounded-lg border bg-white p-10 shadow-lg dark:border-zinc-700 dark:bg-zinc-900">
            <div className="flex flex-col space-y-1">
                <h3 className="text-3xl font-bold tracking-tight">Sign Up</h3>
                <p className="text-sm text-zinc-500 dark:text-zinc-400">Please fill in the form to create an account.</p>
            </div>
            <div>
                <form onSubmit={hanldeSubmit} className="space-y-6">
                    <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2 text-sm">
                            <label className="text-sm font-medium leading-none text-zinc-700 dark:text-zinc-300" htmlFor="first_name">
                                First Name
                            </label>
                            <input
                                className="flex h-10 w-full rounded-md border px-3 py-2 focus-visible:outline-none dark:border-zinc-700"
                                id="first_name"
                                placeholder="Enter first name"
                                name="first_name"
                                type="text"
                            />
                        </div>
                        <div className="space-y-2 text-sm">
                            <label className="text-sm font-medium leading-none text-zinc-700 dark:text-zinc-300" htmlFor="last_name">
                                Last Name
                            </label>
                            <input
                                className="flex h-10 w-full rounded-md border px-3 py-2 focus-visible:outline-none dark:border-zinc-700"
                                id="last_name"
                                placeholder="Enter last name"
                                name="last_name"
                                type="text"
                            />
                        </div>
                    </div>
                    <div className="space-y-2 text-sm">
                        <label className="text-sm font-medium leading-none text-zinc-700 dark:text-zinc-300" htmlFor="email">
                            Email
                        </label>
                        <input
                            className="flex h-10 w-full rounded-md border px-3 py-2 focus-visible:outline-none dark:border-zinc-700"
                            id="email"
                            placeholder="Enter your email"
                            name="email"
                            type="email"
                        />
                    </div>
                    <div className="space-y-2 text-sm">
                        <label className="text-sm font-medium leading-none text-zinc-700 dark:text-zinc-300" htmlFor="password_">
                            Password
                        </label>
                        <input
                            className="flex h-10 w-full rounded-md border px-3 py-2 focus-visible:outline-none dark:border-zinc-700"
                            id="password_"
                            placeholder="password"
                            name="password"
                            type="password"
                        />
                    </div>
                    <button className="rounded-md bg-sky-500 px-4 py-2 text-white transition-colors hover:bg-sky-600 dark:bg-sky-700">Submit</button>
                </form>
            </div>
            <Link to={'/auth/login'}>
                <p className="text-center text-sm text-zinc-700 dark:text-zinc-300">
                    Already have an account?
                    <a href="#" className="font-semibold underline">
                        Signin
                    </a>
                </p>
            </Link>
        </div>
    )
}
