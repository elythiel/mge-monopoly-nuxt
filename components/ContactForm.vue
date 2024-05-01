<script lang="ts" setup>
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { onMounted, ref } from 'vue'
import { useToast } from 'vue-toast-notification'
import 'vue-toast-notification/dist/theme-sugar.css'

gsap.registerPlugin(ScrollTrigger)

const mainElement = ref<HTMLDivElement>()
const formElement = ref<HTMLFormElement>()
const email = ref<string | null>(null)
const name = ref<string | null>(null)
const subject = ref<string | null>(null)
const message = ref<string | null>(null)

const tl = gsap.timeline({ defaults: { duration: 0.5, opacity: 0 } })
onMounted(() => {
  tl.from(mainElement.value as HTMLElement, { 'background-position-x': '-90%' })
  tl.from(formElement.value as HTMLElement, { scaleY: 0.2 }, '<')
  ScrollTrigger.create({ trigger: mainElement.value, onEnter: () => tl.restart(), onEnterBack: () => tl.restart() })
})

function send(event) {
  event.preventDefault()
  const $toast = useToast()

  $fetch('/', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams(new FormData(formElement.value)).toString(),
  })
    .then(() => {
      $toast.success('Message envoyé')
      email.value = null
      name.value = null
      subject.value = null
      message.value = null
      scrollTo(0, 0)
    })
    .catch(() => $toast.error('Une erreur s\'est produite'))
}
</script>

<template>
  <div
    ref="mainElement"
    class="relative shadow-3 bg-white pt-20 pb-12 mb-4 lg:pt-24 lg:pb-28 lg:mb-12 2xl:pt-28 2xl:pb-28 lg:bg-contact lg:bg-no-repeat"
  >
    <div class="relative z-10">
      <h2 class="font-avante-titul-inline text-center text-4xl lg:text-6xl mb-8 2xl:text-7xl 2xl:mb-12">
        Contact
      </h2>
      <div class="m-auto w-4/5 text-base lg:text-xl lg:w-2/5 2xl:w-1/3 2xl:text-2xl">
        <form
          ref="formElement"
          name="contact"
          method="POST"
          class="origin-top"
          data-netlify-recaptcha="true"
          @submit="send"
        >
          <input
            type="hidden"
            name="form-name"
            value="contact"
          >
          <p class="hidden">
            <label>Don’t fill this out: <input name="bot-field"></label>
          </p>

          <label class="block ">
            Email
            <input
              v-model="email"
              type="email"
              class="w-full border-2 border-gray-300 p-3 mt-1 2xl:mt-2"
              name="email"
              required
            >
          </label>
          <span class="text-red-500" />

          <label class="block mt-5">
            Nom
            <input
              v-model="name"
              type="text"
              class="w-full border-2 border-gray-300 p-3 mt-1 2xl:mt-2"
              name="name"
              required
            >
          </label>
          <span class="text-red-500" />

          <label class="block mt-5">
            Objet
            <input
              v-model="subject"
              type="text"
              class="w-full border-2 border-gray-300 p-3 mt-1 2xl:mt-2"
              name="subject"
              required
            >
          </label>
          <span class="text-red-500 " />

          <label class="block mt-5">
            Message
            <textarea
              v-model="message"
              class="w-full border-2 border-gray-300 p-3 mt-1 2xl:mt-2"
              name="message"
              rows="8"
              required
            />
          </label>
          <span class="text-red-500" />

          <div class="flex flex-col lg:flex-row items-center">
            <div data-netlify-recaptcha="true" />
            <button
              type="submit"
              class="transition-all outline-none mt-4 lg:mt-0 lg:ml-auto p-2 2xl:p-3"
              title="Envoyer"
            >
              <img
                src="/images/ico-plane.svg"
                alt="Pictogramme avion en papier"
                class="h-12 2xl:h-16 rotate-8"
              >
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<style scoped>
button:hover {
  animation: rotateBounce 100ms cubic-bezier(0.62, -0.31, 0.29, 1.45);
  transform: scale(1.20);
}

@keyframes rotateBounce {
  0% {
    transform: rotateZ(0deg) scale(1);
  }
  25% {
    transform: rotateZ(-10deg) scale(1.1);
  }
  50% {
    transform: rotateZ(0deg) scale(1.1);
  }
  100% {
    transform: rotateZ(10deg) scale(1.2);
  }
}
</style>
