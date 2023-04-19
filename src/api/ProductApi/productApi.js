import axiosClient from '../axiosClient';

const productApi = {
    getAll(params) {
        const url = '/';
        return axiosClient.get(url, { params });
    },
    getPhone(params) {
        const url = '/phone';
        return axiosClient.get(url, { params });
    },
    getLaptop(params) {
        const url = '/laptop';
        return axiosClient.get(url, { params });
    },
    getTablet(params) {
        const url = '/tablet';
        return axiosClient.get(url, { params });
    },
    getSound(params) {
        const url = '/sound';
        return axiosClient.get(url, { params });
    },
    getWatch(params) {
        const url = '/watch';
        return axiosClient.get(url, { params });
    },
    getByIdPhone(id) {
        const url = `/phone/${id}`;
        return axiosClient.get(url);
    },
    getByIdTablet(id) {
        const url = `/tablet/${id}`;
        return axiosClient.get(url);
    },
    getByIdLaptop(id) {
        const url = `/laptop/${id}`;
        return axiosClient.get(url);
    },
    getByIdSound(id) {
        const url = `/sound/${id}`;
        return axiosClient.get(url);
    },
    getByIdWatch(id) {
        const url = `/watch/${id}`;
        return axiosClient.get(url);
    },
};
export default productApi;
