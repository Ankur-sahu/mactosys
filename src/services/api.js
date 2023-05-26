import authInstance from "../config/authInterceptor";

// Example login and register API functions
export async function login(payload) {
    const response = await authInstance.post('api/users/login',payload)
    return response.data
  }
  
  export async function register(payload) {
    const response = await authInstance.post('api/users/register_web',payload)
    return response.data
  }
  