<script>
import { ContentLoader } from "vue-content-loader"

export default {
  components: { ContentLoader }
}
</script>

<template>
  <content-loader
      viewBox="0 0 150 150"
      :speed="2"
      primaryColor="#d9d9d9"
      secondaryColor="#ededed"
  >
    <rect x="124" y="38" rx="0" ry="0" width="1" height="0" />
    <rect x="0" y="0" rx="2" ry="2" width="150" height="15" />
    <rect x="0" y="20" rx="2" ry="2" width="150" height="5" />
    <rect x="0" y="30" rx="2" ry="2" width="150" height="5" />
    <rect x="0" y="40" rx="2" ry="2" width="150" height="5" />
    <rect x="0" y="50" rx="2" ry="2" width="150" height="5" />
    <rect x="0" y="60" rx="2" ry="2" width="150" height="5" />
    <rect x="0" y="70" rx="2" ry="2" width="150" height="5" />
    <rect x="10" y="80" rx="2" ry="2" width="130" height="5" />
    <rect x="10" y="90" rx="2" ry="2" width="130" height="5" />
  </content-loader>
</template>
