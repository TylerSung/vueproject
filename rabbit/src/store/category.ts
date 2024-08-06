// 在 useCategoryStore.ts 文件中
import { ref } from "vue";
import { getCategoryApi } from "@/apis/layout";
import { defineStore } from "pinia";

// 定义API响应的接口
interface CategoryApiResponse {
  result: any[]; // 根据实际返回的数据结构调整这里的类型
}

export const useCategoryStore = defineStore("category", () => {
  const categoryList = ref<any[]>([]); // 根据实际数据结构调整类型

  const getCategory = async () => {
    try {
      const res = (await getCategoryApi()) as CategoryApiResponse;
      console.log(res);
      categoryList.value = res.result;
    } catch (error) {
      console.error("Failed to fetch categories:", error);
    }
  };

  return {
    categoryList,
    getCategory,
  };
});
