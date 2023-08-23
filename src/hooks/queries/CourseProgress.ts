import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { BASE_URL } from "../../constants";
  
export const useGetCourseProgress = (userId: string, courseId: string, lectureId: string) => {
    const config = {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${localStorage.getItem("authToken")}`
        },
      }
    return useQuery(['courseprogress'], {
      queryFn: async () => {
        return await axios.get(`${BASE_URL}/courseprogress/users/${userId}/courses/${courseId}`, config)
        .then( async (res) => {
            const lectureProgress = res.data.data;
            const progress = lectureProgress.filter((prog: { lectureId: string }) => prog.lectureId === lectureId)
            if(progress[0]) {
              const overallProgress = lectureProgress.reduce((acc: number, curr: { progress: number }) => acc + curr.progress, 0) / lectureProgress.length;
              console.log(`Overall progress: ${overallProgress}%`);
              return res.data.data
            } else {
              return await axios.put(`${BASE_URL}/courseprogress/users/${userId}/courses/${courseId}`,{lectureId, progress: 0}, config)
              .then((res) => {
                return res.data.data
              })
            } 
        })
      },
      refetchInterval: 1000
    })
}

export const useGetCourseProgresses = (userId: string, courseId: string) => {
  const config = {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${localStorage.getItem("authToken")}`
      },
    }
  return useQuery(['courseprogress'], {
    queryFn: async () => {
      return await axios.get(`${BASE_URL}/courseprogress/users/${userId}/courses/${courseId}`, config)
      .then( async (res) => {
          const lectureProgress = res.data.data;
          const overallProgress = lectureProgress.reduce((acc: number, curr: { progress: number}) => acc + curr.progress, 0) / lectureProgress.length;
          console.log(`Overall progress: ${overallProgress}%`);
          return res.data.data
          
      })
    },
    refetchInterval: 1000
  })
}