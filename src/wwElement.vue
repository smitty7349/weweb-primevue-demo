<template>
  <Badge value="3" severity="danger"></Badge>
</template>

<script>
import Badge from 'primevue/badge'
import Primevue from 'primevue/config'
import "primevue/resources/themes/lara-light-indigo/theme.css";

export default {
  beforeCreate: function () {
    this.$.appContext.app.use(Primevue)
    this.$.appContext.app.component('Badge', Badge)
  },
  props: {
    content: { type: Object, required: true },
  },
  computed: {
    badgeLabel() {
      return this.content.badgeText.length ? this.content.badgeText.substring(0, 4) : ""
    }
  },
};
</script>
