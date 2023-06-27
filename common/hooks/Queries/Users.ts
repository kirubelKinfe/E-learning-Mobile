import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import axios from "axios"
import { BASE_URL } from "../../constants"

export const useStudentsData = () => {
    return useQuery(['students'], async () => {
        return await axios.get(`${BASE_URL}/users`)
        .then((res) => {
          const data = res.data.data
          const students = Array.isArray(data) && data?.filter(item => item.role === "user")
          return students
        })
      })
}

export const useTeachersData = () => {
    return useQuery(['teachers'], async () => {
        return await axios.get(`${BASE_URL}/users`)
        .then((res) => {
          const data = res.data.data
          const students = Array.isArray(data) && data?.filter(item => item.role === "instructor")
          return students
        })
      })
}


export const useGetUserById = (userId: string) => {
  return useQuery(['user'], async () => {
      return await axios.get(`${BASE_URL}/users/${userId}`)
      .then((res) => {
        return res.data.data
      })
    })
}

export const useAddUser = () => {
  const queryClient = useQueryClient()
  
  return useMutation({
    mutationFn: async (user) => {
      return await axios.post(`${BASE_URL}/auth/register`, user)
      .then((res) => {
        return res.data.token
      })
    },
    onSuccess: () => {
      queryClient.invalidateQueries(["students"])
    }
    
  })
}

export const useDeleteUser = () => {
  const queryClient = useQueryClient()
  
  return useMutation({
    mutationFn: async (userId: string) => {
      return await axios.delete(`${BASE_URL}/users/${userId}`)
      .then((res) => {
        return res.data.data
      })
    },
    onSuccess: () => {
      queryClient.invalidateQueries(["users"])
    }
    
  })
}