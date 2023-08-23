import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import axios from 'axios'
import { BASE_URL } from '../../constants'


export const useGetEnrollments = () => {
    return useQuery(['enrollments'], async () => {
        return await axios.get(`${BASE_URL}/enrollments`)
        .then((res) => {
          console.log(res)
          return res.data.data
        })
      })
}

export const useGetEnrollment = (userId: string, courseId: string) => {
  return useQuery(['enrollments', userId, courseId],{ 
    queryFn: async () => {
      return await axios.get(`${BASE_URL}/enrollments/users/${userId}/courses/${courseId}`)
      .then((res) => {
        return res.data.data
      })
    }
  })
    
}

export const useAddEnrollment = () => {
  const queryClient = useQueryClient()
  
  return useMutation({
    mutationFn: async (enrollment: { userId: string, courseId: string}) => {
      return await axios.post(`${BASE_URL}/enrollments`, enrollment)
      .then((res) => {
        return res.data.data
      })
    },
    onSuccess: () => {
      queryClient.invalidateQueries(["enrollments"])
    }
    
  })
}

export const useDeleteEnrollment = () => {
  const queryClient = useQueryClient()
  
  return useMutation({
    mutationFn: async (enrollmentId: string) => {
      return await axios.delete(`${BASE_URL}/enrollments/${enrollmentId}`)
      .then((res) => {
        return res.data.data
      })
    },
    onSuccess: () => {
      queryClient.invalidateQueries(["enrollments"])
    }
    
  })
}