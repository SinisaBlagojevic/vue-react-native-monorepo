<script setup>
// import { usePlaid } from '@/Composables/usePlaid.js';
import NavLink from "~/layouts/components/NavLink.vue";
const userLinks = [
  {
    title: 'Dashboard',
    component: 'Dashboard',
    route: '/dashboard',
    icon: 'mdi-home-outline',
  },
  {
    title: 'Allocation Calculator',
    component: 'Calculator',
    route: 'calculator.index',
    icon: 'mdi-calculator-variant-outline',
  },
  {
    title: 'Profit Allocator',
    component: 'ProfitAllocator',
    route: 'profit-allocator.index',
    icon: 'mdi-chart-bar',
  },
  {
    title: 'Tax Allocator',
    component: 'TaxAllocator',
    route: 'tax-allocator.index',
    icon: 'mdi-chart-pie-outline',
  },
  {
    title: 'Full Assessment',
    component: 'InstantAssessment',
    route: 'instant-assessment.index',
    icon: 'mdi-finance',
  },
  {
    title: 'Rollout Plan',
    component: 'RolloutPlan',
    route: 'rollout-plan.index',
    icon: 'mdi-location-enter',
  },
  {
    title: 'Meetings',
    component: 'Meetings',
    route: 'meeting.index',
    icon: 'mdi-account-group-outline',
  },
  {
    title: 'Vision',
    component: 'Vision',
    route: 'vision.index',
    icon: 'mdi-account-group-outline',
    disabled: false,
    visible: true,
  },
  {
    title: 'Debt Crusher',
    component: 'DebtCrusher',
    route: 'debt-crusher.index',
    icon: 'mdi-currency-usd',
    disabled: false,
    visible: true,
  },
  {
    title: 'Settings',
    component: 'Settings',
    route: 'settings.index',
    icon: 'mdi-cog-outline',
    disabled: false,
  },
];

const adminLinks = [
  {
    title: 'Users',
    component: 'Users',
    route: 'admin.users.index',
    icon: 'mdi-account-multiple-outline',
  },
  {
    title: 'Companies',
    component: 'Companies',
    route: 'admin.company.index',
    icon: 'mdi-office-building-outline',
  },
  {
    title: 'Activity Logs',
    component: 'ActivityLog',
    route: 'admin.activity-log.index',
    icon: 'mdi-math-log',
  },
  {
    title: 'Chat Bot Settings',
    component: 'ChatBot',
    route: 'admin.chat-bot.index',
    icon: 'mdi-chat-outline',
  },
];
//TODO: add logic
const isSuperAdmin = ref(false);
const isOnboardingCompleted = ref(true)
</script>

<template>
  <VBtn
    class="px-10 nav-action-button"
    color="secondary"
    variant="elevated"
  >
    More Actions
    <template #append>
      <VIcon icon="mdi-chevron-down" />
    </template>
    <VMenu
      activator="parent"
      transition="slide-y-transition"
    >
      <VList>
<!--        <VListItem-->
<!--          class="bg-blue"-->
<!--          @click="handleSyncAll"-->
<!--        >-->
<!--          <VListItemTitle class="d-flex align-center gap-2">-->
<!--            <VIcon-->
<!--              icon="mdi-sync"-->
<!--              class="mr-0"-->
<!--            />-->
<!--            Sync Now-->
<!--          </VListItemTitle>-->
<!--        </VListItem>-->
        
        <template v-if="!isOnboardingCompleted && !isSuperAdmin">
          <NavLink
            :item="{
              title: 'Onboarding',
              component: 'Onboarding',
              to: '/onboarding',
              icon: { icon: 'mdi-account' },
            }"
          />
        </template>
        
        <template v-if="!isSuperAdmin">
          <template
            v-for="(link, index) in userLinks"
          >
            <NavLink
              v-if="link.visible"
              :key="index"
              :item="{
                title: link.title,
                component: link.component,
                to: link.route,
                icon: { icon: link.icon },
                disable: link.disabled,
              }"
            />
          </template>
        </template>
        
        <template v-if="isSuperAdmin">
          <NavLink
            v-for="(link, index) in adminLinks"
            :key="index"
            :item="{
              title: link.title,
              component: link.component,
              to: link.route,
              icon: { icon: link.icon },
            }"
          />
        </template>
      </VList>
    </VMenu>
  </VBtn>
</template>
