import axios from 'axios';

export const apiRequest = async (endpoint, method = "GET", data = null) => {
    
    try {

        const token = localStorage.getItem('authToken');

        const headers = {
            'Content-Type': 'application/json',
            Accept: 'application/json',
            Authorization: `Bearer ${token}`
        };
        
        const response = await axios({
            url: endpoint,   
            method,          
            data,            
            headers,         
        });
        
        return response.data;
    } catch (error) {
        console.error("API request error:", error);

        if (error.response) {
            throw new Error(error.response.data.message || "Something went wrong");
        } else if (error.request) {
            throw new Error("No response received from server");
        } else {
            throw new Error(error.message);
        }
    }

};