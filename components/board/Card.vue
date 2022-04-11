<template>
  <div v-show="isActive">
    <div ref="background"
         class="fixed top-0 left-0 w-full h-full bg-black/50 z-40"
         @click="close"></div>
    <div ref="card"
         class="card-wrapper fixed w-full h-full z-50 flex items-center justify-center pointer-events-none origin-top-left">
      <div
        class="card font-josefin p-3 2xl:p-4 portrait:h-[90vh] portrait:w-[90vw] w-[60vh] h-[90vh] rounded-lg bg-white shadow-card pointer-events-auto">
        <div class="relative flex flex-col p-4 2xl:p-5 border-2 border-black h-full">
          <div :class="'font-bold border-2 border-black mb-8 relative bg-mge-' + card.color">
            <span v-if="card.duration"
                  class="absolute flex items-center border-2 border-black text-center text-sm !leading-none w-12 h-12 lg:text-xs 2xl:text-base -top-4 -left-4 rounded-full bg-white">
              {{ card.duration }}
            </span>
            <h2 v-html="card.title" class="font-bold uppercase py-3 2xl:py-4 px-8 2xl:px-12 text-center text-lg"></h2>
            <span v-if="card.location"
                  class="absolute border-2 border-black text-center text-sm lg:text-xs 2xl:text-base !leading-none -bottom-4 right-4 bg-white uppercase p-1 2xl:p-2">
              {{ card.location }}
            </span>
          </div>
          <div v-if="details" class="flex-grow leading-normal max-h-full overflow-y-auto text-base 2xl:text-lg">
            <h3 v-if="details.title" class="text-center text-lg mb-3 lg:text-xl lg:mb-6">
              <slot name="title"></slot>
            </h3>
            <slot/>
          </div>
          <div class="absolute -bottom-[0.9rem] bg-white px-2 left-1/2 -translate-x-1/2 text-sm 2xl:text-base">
            <slot name="footer"></slot>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {gsap} from 'gsap';

export default {
  props: {
    card: Object
  },
  data() {
    return {
      isActive: false,
      details: null,
      animation: null
    }
  },
  async fetch() {
    if (this.card.details) {
      this.details = await this.$content('cards/' + this.card.details).fetch();
      console.log(this.details);
    }
  },
  methods: {
    open(event) {
      this.isActive = true;
      this.animation = gsap.timeline({delay: 0.1});
      this.animation.from(this.$refs.background, {opacity: 0});
      this.animation.fromTo(
        this.$refs.card,
        {scale: 0, left: event.clientX, top: event.clientY, rotateX: -120, rotateY: 50},
        {scale: 1, left: 0, top: 0, rotateX: 0, rotateY: 0, onReverseComplete: () => this.isActive = false},
        '<'
      );
    },
    close() {
      this.animation.reverse();
    }
  }
}
</script>

<style>
.card-wrapper {
  transform-style: preserve-3d;
  perspective: 1500px;
}

.card-content p {
  @apply mb-2;
}

.card-content ul {
  @apply font-light list-disc pl-10;
}
</style>
