// src/types/api.ts

export interface CategoryItem {
  id: number;
  name: string;
  // 添加其他必要的字段
}

export interface CategoryApiResponse {
  code: string;
  msg: string;
  result: CategoryItem[];
}
// In your API file (e.g., @/apis/layout.ts)

import http from "@/utils/http";

export function getCategoryApi(): Promise<CategoryApiResponse> {
  return http({
    url: "home/category/head",
  });
}
