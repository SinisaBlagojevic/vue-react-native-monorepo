<script setup>
const props = defineProps({
  item: {
    type: null,
    required: true,
  },
});

const handleChangeTool = () => {
  navigateTo(props.item.to);
};

</script>

<template>
  <VListItem
    :disabled="item.disable"
    active-color="primary"
    @click="handleChangeTool"
  >
    <VListItemTitle
      class="d-flex align-baseline gap-2"
    >
      <VIcon
        :icon="item.icon.icon"
      />
      {{ item.title }}
    </VListItemTitle>
  </VListItem>
</template>

<style lang="scss">
.layout-vertical-nav {
  .nav-link a {
    display: flex;
    align-items: center;
    text-decoration: none;
  }
}
</style>
