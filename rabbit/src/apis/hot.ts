
import http from "@/utils/http"




export const getHotAPI = () => {
  return http({
    url: '/home/hot'
  })
}


