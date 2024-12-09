<script setup>
defineProps({
  displayFooter: {
    type: Boolean,
    default: true
  }
});
</script>

<template>
  <div>
    <VAppBar
      app
      flat
      class="px-2"
      style="width: 100vW; margin: 0"
    >
      <template #prepend>
        <slot name="navbar-prepend" />
      </template>
      <template #append>
        <slot name="navbar-append" />
      </template>
    </VAppBar>
    <VMain class="w-100">
      <slot />
    </VMain>
  </div>
</template>

<style lang="scss">
.layout-vertical-nav {
  top: 0 !important;
  height: 100% !important;
  
  .v-navigation-drawer__content {
    display: flex;
    flex-direction: column;
    
    > ul {
      flex-grow: 1;
    }
  }
}

.v-footer {
  padding-left: 24px !important;
  padding-right: 24px !important;
}
</style>
