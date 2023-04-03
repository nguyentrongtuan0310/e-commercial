import axiosClient from "../axiosClient"

const productApi = {
    getAll(params){
        const url = '/user'
        return axiosClient.get(url,{params})
    },
    getById(id){
        const url= `/user/${id}`
        return axiosClient.get(url)
    },
    deleteProduct(id){
        const url= `/user/${id}`
        return axiosClient.delete(url)
    },
    putProduct(id,data){
        const url= `/user/${id}`
        return axiosClient.put(url,data)

    },

    addProduct(data){
        const url = '/user'
        return axiosClient.post(url,data)
    }
}
export default productApi