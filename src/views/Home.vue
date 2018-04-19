<template>
  <div class="columns">
    <div class="column is-one-third"  v-for="place in places" v-bind:key="place.id">
      <div class="card">
        <div class="card-image">
          <figure class="image is-4by3">
            <img :src="place.img_cover" alt="Placeholder image">
          </figure>
        </div>
        <div class="card-content">
          <div class="media">
            <div class="media-left">
              <figure class="image is-48x48">
                <img :src="place.img_profile" alt="Placeholder image">
              </figure>
            </div>
            <div class="media-content">
              <p class="title is-4">{{place.name}}</p>
              <p class="subtitle is-6">{{place.location}}</p>
            </div>
          </div>
        </div>
        <footer class="card-footer">
          <a href="#" class="card-footer-item">{{place.rate}} Star</a>
          <a href="#" class="card-footer-item">{{place.review}} Review</a>
          <router-link :to="{path: 'place/'+place.id}" class="card-footer-item">Detail</router-link>
        </footer>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data(){
    return {
      places : [],
      isTabVisible : true,
    }
  },
  created()
  {
    axios.get('http://api.kekinian.test/api/v1/places').then(response => this.places = response.data);
  }
}
</script>

