import axios from 'axios';
import Cookies from 'js-cookie';

const API_URL = 'http://localhost:5001/api/product';

const authHeader = () => ({
    headers: { Authorization: `Bearer ${Cookies.get('authToken')}` }
});

export const getAllProducts = async () => {
    return await axios.get(`${API_URL}/getAll`, authHeader());
};

export const createProduct = async (productData) => {
    return await axios.post(`${API_URL}/create`, productData, authHeader());
};

export const updateProduct = async (id, productData) => {
    return await axios.put(`${API_URL}/update/${id}`, productData, authHeader());
};

export const deleteProduct = async (id) => {
    return await axios.delete(`${API_URL}/delete/${id}`, authHeader());
};
