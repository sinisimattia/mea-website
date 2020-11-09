<template>
  <div>
    <div>
      <div class="hero is-fullheight banner" :style="'background-image: url(' + bannerBackground + ')'">
        <div class="hero-body">
          <div class="container section">
            <div class="columns is-vcentered">
              <div class="column" v-if="logo">
                <img :src="logo" alt="Logo" class="is-block is-centered" />
              </div>

              <div class="column" v-if="title || subtitle">
                <h1 class="title is-0-desktop is-light is-still">
                  <span>{{ title }}</span>
                </h1>
                <h2 class="subtitle is-4">{{ subtitle }}</h2>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div v-if="sections">
        <SectionContainer v-for="(s, i) in sections" :key="i" v-bind="s" />
      </div>
    </div>
  </div>
</template>

<script>
import { identity, components } from '~/snisni.config.json'
import SectionContainer from '@/components/organisms/SectionContainer'
import sections from '~/config/content'
import bannerBackground from '@/assets/img/backgrounds/topography.svg'

export default {
  components: {
    SectionContainer,
  },
  data() {
    return {
      title: identity.name,
      subtitle: identity.slogan,
      sections,
      logo: components.banner.image,
      bannerBackground,
    }
  },
}
</script>

<style scoped>
.banner {
  background-attachment: fixed;
}
</style>
