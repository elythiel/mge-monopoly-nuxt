<script lang="ts" setup>
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { onMounted, reactive, useTemplateRef } from 'vue'
import { useToast } from 'vue-toast-notification'
import 'vue-toast-notification/dist/theme-sugar.css'

const mainElement = useTemplateRef('mainElement')
const formElement = useTemplateRef('formElement')
const data = reactive({
  email: '',
  name: '',
  subject: '',
  message: '',
})

onMounted(() => {
  const tl = gsap.timeline({ defaults: { duration: 0.5, opacity: 0 } })
  tl.from(mainElement.value, { 'background-position-x': '-90%' })
  tl.from(formElement.value, { scaleY: 0.2 }, '<')
  ScrollTrigger.create({
    trigger: mainElement.value,
    onEnter: () => tl.restart(),
    onEnterBack: () => tl.restart(),
  })
})

function send({ target }: SubmitEvent) {
  const $toast = useToast()

  const formData = new FormData(target as HTMLFormElement)

  const submittedData: Record<string, string> = {}

  formData.forEach((value, key) => {
    submittedData[key] = value.toString()
  })

  $fetch('/', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams(submittedData).toString(),
  })
    .then(() => {
      $toast.success('Message envoyé')
      data.email = ''
      data.name = ''
      data.subject = ''
      data.message = ''
      scrollTo(0, 0)
    })
    .catch(() => $toast.error("Une erreur s'est produite"))
}
</script>

<template>
  <div
    ref="mainElement"
    class="shadow-3 relative mb-4 bg-white pb-12 pt-20 lg:mb-12 lg:bg-contact lg:bg-no-repeat lg:pb-28 lg:pt-24 2xl:pb-28 2xl:pt-28"
  >
    <div class="relative z-10">
      <h2
        class="mb-8 text-center font-avante-titul-inline text-4xl lg:text-6xl 2xl:mb-12 2xl:text-7xl"
      >
        Contact
      </h2>
      <div
        class="m-auto w-4/5 text-base lg:w-2/5 lg:text-xl 2xl:w-1/3 2xl:text-2xl"
      >
        <form
          ref="formElement"
          name="contact"
          method="POST"
          class="flex origin-top flex-col gap-5"
          netlify-honeypot="bot-field"
          data-netlify="true"
          data-netlify-recaptcha="true"
          @submit.prevent="send"
        >
          <input type="hidden" name="form-name" value="contact" />
          <p class="hidden">
            <label>
              Don’t fill this out:
              <input name="bot-field" type="text" />
            </label>
          </p>

          <ContactFormInput
            v-model="data.email"
            name="email"
            label="Email"
            type="email"
          />
          <ContactFormInput
            v-model="data.name"
            name="name"
            label="Nom"
            type="text"
          />
          <ContactFormInput
            v-model="data.subject"
            name="subject"
            label="Objet"
            type="text"
          />
          <ContactFormInput
            v-model="data.message"
            name="message"
            label="Message"
            type="textarea"
          />

          <div class="flex flex-col items-center lg:flex-row">
            <div data-netlify-recaptcha="true" />
            <ContactFormSubmit class="self-end" />
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
