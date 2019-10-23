<template>
  <div>
    <button v-on="$listeners" class="buttons">
      <slot></slot>
    </button>
  </div>
</template>

<script>
export default {
}
</script>

<style scoped></style>
