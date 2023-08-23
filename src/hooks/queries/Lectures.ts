import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import axios from 'axios'
import { IApiError } from '../../types'
import { BASE_URL } from '../../constants'

export const useLecturesData = () => {
    return useQuery(['lectures'], async () => {
        return await axios.get(`${BASE_URL}/lectures`)
        .then((res) => {
          return res.data.data
        })
      })
}

export const useLecturesDataId = (lectureId: string) => {
  return useQuery({
    queryKey: ['lectures', lectureId], 
    queryFn: async () => {
      return await axios.get(`${BASE_URL}/lectures/${lectureId}`)
      .then((res) => {
        return res.data.data
      })
    },
    onError: (err: IApiError) => err
  })
}

export const useAddLecture = () => {
  const queryClient = useQueryClient()
  
  return useMutation({
    mutationFn: async (lecture) => {
      return await axios.post(`${BASE_URL}/lectures`, lecture)
      .then((res) => {
        return res.data.data
      })
    },
    onSuccess: () => {
      queryClient.invalidateQueries(["lectures"])
    }
    
  })
}

export const useUpdateLecture = () => {
  const queryClient = useQueryClient()
  
  return useMutation({
    mutationFn: async (lecture) => {
      return await axios.put(`${BASE_URL}/lectures`, lecture)
      .then((res) => {
        return res.data.data
      })
    },
    onSuccess: () => {
      queryClient.invalidateQueries(["lectures"])
    }
    
  })
}

export const useDeleteLecture = () => {
  const queryClient = useQueryClient()
  
  return useMutation({
    mutationFn: async (lectureId: string) => {
      return await axios.delete(`${BASE_URL}/lectures/${lectureId}`)
      .then((res) => {
        return res.data.data
      })
    },
    onSuccess: () => {
      queryClient.invalidateQueries(["lectures"])
    }
    
  })
}