<template>
  <div class="card bg-info align-items-center">
  <div class="card-body">
    {{ infoText }}
  </div>
</div>
</template>

<script>
export default {
  props: {
    infoText: {
      type: String,
      required: true
    }
  }
}
</script>
