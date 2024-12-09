<script setup>
// import { useIdle } from '@vueuse/core';
import { useDisplay } from "vuetify";
// import Chat from '@/Components/Chat.vue';
import VerticalNavLayout from "~/layouts/components/VerticalNavLayout.vue";
// import UserProfile from '@/Layouts/Components/UserProfile.vue';
import ToolSelect from "~/layouts/components/ToolSelect.vue";
import ProfitFirstLogo from "~/components/ProfitFirstLogo.vue";
// const { idle } = useIdle(1000 * 60 * 32);
const { smAndDown } = useDisplay();

const handleLogoClick = () => {
  navigateTo('/dashboard')
};

// watch(idle, (idleValue) => {
//   if(idleValue){
//     router.post(route('logout'));
//   }
// });
const theme = useTheme()
console.log(theme)
</script>

<template>
  <VApp :theme="theme.light">
    <VerticalNavLayout>
      <!-- 👉 navbar -->
      <template #navbar-prepend>
        <ProfitFirstLogo
          class="cursor-pointer"
          height="60"
          width="60"
          @click="handleLogoClick"
        />
      </template>
      <template #navbar-append>
        <template
          v-if="smAndDown"
        >
          <VMenu
            transition="scale-transition"
            location="bottom center"
            width="100%"
          >
            <template v-slot:activator="{ props }">
              <VBtn
                v-bind="props"
                class="mr-5"
                color="primary"
                icon="mdi-menu"
                variant="text"
              />
            </template>
            <VCard
              class="d-flex flex-column gap-1 mt-4 pa-2"
            >
              <slot name="navbar-append" />
              <ToolSelect />
            </VCard>
          </VMenu>
        </template>
        <template
          v-else
        >
          <slot name="navbar-append" />
          <ToolSelect
            class="mx-10"
          />
        </template>
<!--        <UserProfile />-->
      </template>
      <div class="bg-grey-200 pa-4 content">
        <slot />
      </div>
    </VerticalNavLayout>
  </VApp>
</template>
<style>
.content {
  min-height: 100vh;
  max-height: fit-content;
}
</style>
