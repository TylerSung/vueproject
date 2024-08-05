import http from "@/utils/http";

function getCategory() {
  return http({
    url: "home/category/head",
  });
}

export default getCategory;
