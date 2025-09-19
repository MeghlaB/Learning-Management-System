import axios from "axios";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";

const axiosSecuire = axios.create({
    baseURL: "http://localhost:5000",
    withCredentials: true,
});

function useAxiosSecuire() {
    const navigate = useNavigate()
    const { signout } = useContext(AuthContext)
    // Add a request interceptor
    axiosSecuire.interceptors.request.use(
        function (config) {
            const token = localStorage.getItem('access_token')
            console.log("stopped by interceptors", token);
            config.headers.authorization = `Bearer ${token}`
            return config;
        },
        function (error) {
            // request error handle
            return Promise.reject(error);
        }
    );

    // Add a response interceptor

    axiosSecuire.interceptors.response.use(function (response) {
        return response
    }, async (error) => {
        const status = error.response.status
        console.log('status error in the interceptor', status)
        if (status === 401 || status === 403) {
          await signout()
            navigate('/auth/login')
        }
        return Promise.reject(error)
    }

    )


    return axiosSecuire;
}

export default useAxiosSecuire;
