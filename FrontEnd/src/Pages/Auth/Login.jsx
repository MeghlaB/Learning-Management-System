import React, { useContext } from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import { AuthContext } from '../../Provider/AuthProvider'
import Swal from 'sweetalert2'

export default function Login() {
    const { signIn } = useContext(AuthContext)
    const naviagte = useNavigate()


    const hanldeSubmit = (e) => {
        e.preventDefault()
        const form = e.target
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password)
        signIn(email, password)
            .then(result => {
                const user = result.user
                console.log(user)

                
                if (user) {
                    Swal.fire({
                        title: "User SuccessFully Login!",
                        icon: "success",
                        draggable: true
                    });
                    naviagte('/')
                }

            })

    }








    return (
        <div className="w-full mx-auto my-28 px-6 max-w-md space-y-4 rounded-lg border bg-white p-7 shadow-lg sm:p-10 dark:border-zinc-700 dark:bg-zinc-900">
            <h1 className="text-3xl font-semibold tracking-tight">Sign In</h1>

            <form onSubmit={hanldeSubmit} action="#" className="space-y-6">
                <div className="space-y-2 text-sm">
                    <label htmlFor="username" className="block font-medium text-zinc-700 dark:text-zinc-300">
                        Email
                    </label>
                    <input
                        className="flex h-10 w-full rounded-md border px-3 py-2 text-sm focus:ring-1 focus-visible:outline-none dark:border-zinc-700"
                        id="email"
                        placeholder="Enter email"
                        name="email"
                        type="text"
                        required
                    />
                </div>
                <div className="space-y-2 text-sm">
                    <label htmlFor="password" className="block font-medium text-zinc-700 dark:text-zinc-300">
                        Password
                    </label>
                    <input
                        className="flex h-10 w-full rounded-md border px-3 py-2 text-sm focus:ring-1 focus-visible:outline-none dark:border-zinc-700"
                        id="password"
                        placeholder="Enter password"
                        name="password"
                        type="password"
                        required
                    />
                    <div className="flex justify-end text-xs">
                        <a href="#" className="text-zinc-700 hover:underline dark:text-zinc-300">
                            Forgot Password?
                        </a>
                    </div>
                </div>
                <button className="rounded-md bg-sky-500 px-4 py-2 text-white transition-colors hover:bg-sky-600 dark:bg-sky-700">Submit</button>
            </form>
            <Link to={'/auth/register'}>
                <p className="text-center text-sm text-zinc-700 dark:text-zinc-300">
                    Don&apos;t have an account?
                    <a href="#" className="font-semibold underline">
                        Signup
                    </a>
                </p>
            </Link>
        </div>
    )
}
