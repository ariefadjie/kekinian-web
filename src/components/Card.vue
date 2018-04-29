<template>
  <div class="column is-4-desktop is-6-tablet is-12-mobile">
    <div class="card">
      <div class="card-image">
        <figure class="image">
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
        <a href="#" class="card-footer-item has-text-warning">
            <span v-for="n in place.rate" :key="n"><i class="fa fa-star"></i></span>
        </a>
        <a href="#" class="card-footer-item">{{place.review}} Review</a>
        <router-link :to="{path: 'place/'+place.id}" class="card-footer-item">Detail</router-link>
      </footer>
    </div>
  </div>
</template>
<script>
export default {
  props : ['place']
}
</script>
