import axios from "axios";

const axiosSecuire = axios.create({
    baseURL: "http://localhost:5000",
    withCredentials: true,
});

function useAxiosSecuire() {
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

    axios.interceptors.response.use(function (response) {
        return response
    }, (error) => {
        const status = error.response.status
        console.log('status error in the interceptor', status)
        return Promise.reject(error)
    }

    )


    return axiosSecuire;
}

export default useAxiosSecuire;
