
import axios from "axios";

const axiosCommon=axios.create({
    baseURL:'https://job-task-server-mauve.vercel.app/'
})
const useAxiosCommon = () => {
    return axiosCommon
};

export default useAxiosCommon;