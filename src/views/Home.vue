<template>
  <div class="columns is-multiline">
    <card class="column is-4-desktop is-6-tablet is-12-mobile" 
      v-for="place in places" 
      :key="place.id" 
      :place="place"
    ></card>
  </div>
</template>
<script>
import Card from '../components/Card';
export default {
  data(){
    return {
      places : [],
    }
  },
  created()
  {
    axios.get('http://api.kekinian.test/api/v1/places').then(response => this.places = response.data);
  },
  components : {
    Card
  }
}
</script>

