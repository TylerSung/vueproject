import http from "@/utils/http";

function getBannerList() {
  return http({
    url: "/home/banner",
  });
}

export default getBannerList;
