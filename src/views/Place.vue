<template>
  <div class="content">
    <h1>{{place.name}}</h1>
    <p>{{place.description}}</p>
  </div>
</template>
<script>
export default {
  data(){
    return {
      place : {
        name : '',
        description : '',
      },
      isTabVisible : false, 
    }
  },
  created()
  {
    axios.get('http://api.kekinian.test/api/v1/places/'+this.$route.params.id).then(response => this.place = response.data);
  }
}
</script>

