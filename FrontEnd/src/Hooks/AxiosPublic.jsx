import axios from "axios";

const axiosPublic= axios.create({
    baseURL:'http://localhost:5000',
    withCredentials:true
})

function useAxiosPublic(){
    return axiosPublic

}

export default useAxiosPublic