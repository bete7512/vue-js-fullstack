<script>
import { useQuery } from '@vue/apollo-composable'
import gql from 'graphql-tag'
// export default {
// }
</script>

<template>
  <div v-if="loading">Loading...</div>

  <ul v-else-if="result && result.users">
    <li v-for="user of result.users" :key="user.id">
      {{ user.firstname }} {{ user.lastname }}
    </li>
  </ul>
</template>