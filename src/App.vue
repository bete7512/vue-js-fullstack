<template>
  <div class="text-center text-3xl text-neutral-400">
    Hey this is my first graphql in appolo to fetch countries data
  </div>
  <div v-if="error">Something went wrong...</div>
  <div v-if="loading">Loading...</div>
  <div class="flex flex-wrap shadow-lg shadow-green-100 m-2 gap-4">
    <div
      class="
        m m-2
        italic
        capitalize
        h-80
        bg-green-400
        w-64
        overflow-x-auto
        border-8
        rounded-lg
        border-indigo-400
        ml-auto
      "
      v-for="country in result.countries"
      :key="country.name"
    >
      <span class=""><b>name: </b>{{ country.name }} </span><br />
      <span> <b>code: </b>{{ country.code }} </span><br />
      <span> <b>Capital: </b>{{ country.capital }} </span><br />
      <span> <b>Flag: </b>{{ country.emojiU }} </span><br />
      <span> <b>Emoji: </b>{{ country.emoji }} </span><br />
      <span></span><b>States:</b
      ><span v-for="inner in country.states" :key="inner.id">
        <span> {{ inner.name }}, </span> </span
      ><br />
      <span> <b>Currency: </b>{{ country.currency }} </span><br />
      <span> <b>Phone: </b>+{{ country.phone }} </span><br />
      <b>Languages:</b>:<span
        v-for="inner in country.languages"
        :key="inner.id"
      >
        <span> {{ inner.name }}, </span><br />
      </span>
    </div>
  </div>
</template>
<script setup>
import gql from "graphql-tag";
import { useQuery } from "@vue/apollo-composable";
const valu = gql`
  query countries {
    countries {
      code
      name
      capital
      currency
      emoji
      phone
      emojiU
      states {
        name
      }
      languages {
        name
      }
    }
  }
`;

const { result, loading, error } = useQuery(valu);
</script>
<style>
/* .class{
  background-color:rgb(12, 103, 103);

  
 grid-template-columns: repeat(9, minmax(0, 1fr));
 width:384px; 
 height:512px;
} */
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #185491;
}
.m {
  padding: 0.5em;
}
</style>