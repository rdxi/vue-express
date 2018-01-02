<template>
  <div class="some-component">
    {{ someData }}
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      someData: 'Some data from some vue component.'
    }
  }
}
</script>

