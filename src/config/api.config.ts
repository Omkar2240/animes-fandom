import axios from 'axios';
import { toast } from 'sonner';

const apiClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  headers: {
    'Content-Type': 'application/json'
  }
});

// ✅ Request Interceptor (No token logic)
apiClient.interceptors.request.use(
  (config) => {
    // You can modify request headers here if needed in future
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// ✅ Response Interceptor
apiClient.interceptors.response.use(
  (response) => {
    // Normalize and return response
    return response.data?.result ?? response.data;
  },
  (error) => {
    let message = error.response?.data?.message || error.message;

    // Handle structured error responses
    if (error.response?.data?.error) {
      const { errors, error_params } = error.response.data.error;

      if (errors) {
        message = errors.join(', ');
      } else if (error_params) {
        message = error_params.map((e: any) => e.message || e.msg).join(', ');
      }
    }

    toast.error(message, {
      position: 'top-right'
    });

    return Promise.reject({
      statusCode: error.response?.status,
      message: message
    });
  }
);

export default apiClient;
