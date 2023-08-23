import { useMutation, useQuery } from "@tanstack/react-query"
import axios from "axios"
import { BASE_URL } from "../../constants"
  
export const useSignIn = () => {
    return useMutation({
      mutationFn: async (user) => {
        return await axios.post(`${BASE_URL}/auth/login`, user)
        .then((res) => {
            localStorage.setItem("authToken", res.data.token)
            return res.data.token
        })
      }
    })
}
  
export const usePrivate = () => {
    const accessConfig = {
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("authToken")}`
        }
    }
    return useQuery(['private'], async () => {
        return await axios.get(`${BASE_URL}/private`, accessConfig)
        .then((res) => {
          return res.data.data
        })
    })
}