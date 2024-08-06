import http from "@/utils/http";

function GetGoodsListAPI() {
  return http({
    url: "/home/new",
  });
}

export default GetGoodsListAPI;
