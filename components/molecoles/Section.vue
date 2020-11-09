<template>
  <div
    class="hero"
    :class="section.type ? `is-${section.type}` : null"
    :id="section.id"
  >
    <div class="hero-body">
      <div class="container">
        <div class="section">
          <div
            :class="{
              'columns is-vcentered': isHorizontal,
              'is-reversed': reversed || section.reversed,
            }"
          >
            <div :class="{ column: isHorizontal }" v-if="section.image">
              <img
                :src="require(`~/assets/img/${section.image}`)"
                alt
                class="is-block is-centered"
                :class="{'is-rounded has-shadow': !(section.title || section.snippet)}"
              />
            </div>

            <div class="column is-two-thirds-fullhd" v-if="hasContent">
              <p class="title is-3 has-text-centered-mobile" v-if="section.title">{{ section.title }}</p>
              <p class="subtitle is-4-desktop" v-if="section.snippet">
                {{ section.snippet }}
              </p>

              <div
                v-if="section.links"
                :class="{'columns': isHorizontal}"
                class="is-vcentered is-centered"
              >
                <CoolLink
                  class="column"
                  v-for="link in section.links"
                  :key="link.href"
                  :to="link.href"
                  :icon="link.icon.name"
                  :pack="link.icon.pack"
                  :size="2"
                >
                  {{ link.name }}
                </CoolLink>
              </div>

              <div class="is-content" v-if="section.content">
                <span
                  v-for="(paragraph, index) in section.content.paragraphs"
                  :key="index"
                >
                  <p v-if="paragraph">{{ paragraph }}</p>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CoolLink from '@/components/molecoles/CoolLink'
export default {
  components: {
    CoolLink,
  },
  props: {
    section: {
      type: Object,
      required: true,
    },
    reversed: {
      type: Boolean,
      default: false,
    },
    horizontal: {
      type: Boolean,
      default: true,
    },
  },
  computed: {
    isHorizontal() {
      return this.section.horizontal === false ||
        this.section.horizontal === true
        ? this.section.horizontal
        : this.horizontal
    },
    hasContent() {
      return (
        this.section.title ||
        this.section.snippet ||
        this.section.links ||
        this.section.content
      )
    },
  },
}
</script>

<style scoped>
.title {
  word-wrap: none;
}

.thumbnail {
  /**/
}
</style>
