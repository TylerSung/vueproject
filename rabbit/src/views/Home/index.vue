<template>
  <div class="container">
    <HomeCategory />
    <HomeBanner />
  </div>
  <HomeNewGoods />
  <Hot />
  <HomeProduct />

  <HomePaneL title="新鲜好物"></HomePaneL>
  <HomePaneL title="人气推荐"></HomePaneL>
</template>

<script setup lang="ts">
import HomeCategory from "./components/HomeCategory.vue";
import HomeBanner from "./components/HomeBanner.vue";
import HomeNewGoods from "./components/HomeNewGoods.vue";
import HomeProduct from "./components/HomeProduct.vue";
import Hot from "./components/Hot.vue";
import HomePaneL from "./components/HomePanel.vue";
</script>

<style scoped></style>
