import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import axios from 'axios'
import { IApiError } from '../../types'
import { BASE_URL } from '../../constants'


export const useCoursesData = () => {
    return useQuery({
      queryKey: ['courses'], 
      queryFn:  async () => {
        return await axios.get(`${BASE_URL}/courses`)
        .then((res) => {
          return res.data.data
        })
      },
      onError: (err: IApiError) => err
    })
}

export const useCourseDataWithId = (courseId: string) => {
  return useQuery(['courses', courseId], { 
    queryFn: async () => {
      if(courseId === '' || courseId === undefined) return null
      return await axios.get(`${BASE_URL}/courses/${courseId}`)
      .then((res) => {
        return res.data.data
      })
    },
    onError: (err: IApiError) => err
    })
}

export const useAddCourse = () => {
  const queryClient = useQueryClient()
  
  return useMutation({
    mutationFn: async (course) => {
      return await axios.post(`${BASE_URL}/courses`, course)
      .then((res) => {
        return res.data.data
      })
    },
    onSuccess: () => {
      queryClient.invalidateQueries(["courses"])
    }
    
  })
}

export const useUpdateCourse = () => {
  const queryClient = useQueryClient()
  
  return useMutation({
    mutationFn: async (course) => {
      return await axios.put(`${BASE_URL}/courses`, course)
      .then((res) => {
        return res.data.data
      })
    },
    onSuccess: () => {
      queryClient.invalidateQueries(["courses"])
    }
    
  })
}

export const useDeleteCourse = () => {
  const queryClient = useQueryClient()
  
  return useMutation({
    mutationFn: async (courseId) => {
      return await axios.delete(`${BASE_URL}/courses/${courseId}`)
      .then((res) => {
        return res.data.data
      })
    },
    onSuccess: () => {
      queryClient.invalidateQueries(["courses"])
    }
    
  })
}