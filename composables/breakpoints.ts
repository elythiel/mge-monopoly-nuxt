import { computed, onBeforeUnmount, onMounted, ref } from 'vue'

const BREAKPOINTS = {
  'sm': 640,
  'md': 768,
  'lg': 1024,
  'xl': 1280,
  '2xl': 1536,
}

export function useBreakpoints() {
  const screenX = ref<number>(0)

  function updateWindowWidth() {
    screenX.value = window.screen.width
  }

  onMounted(() => {
    updateWindowWidth()
    window.addEventListener('resize', updateWindowWidth)
  })
  onBeforeUnmount(() => {
    window.removeEventListener('resize', updateWindowWidth)
  })

  const isSm = computed(() => screenX.value < BREAKPOINTS.md)
  const isMd = computed(() => screenX.value >= BREAKPOINTS.md)
  const isLg = computed(() => screenX.value >= BREAKPOINTS.lg)
  const isXl = computed(() => screenX.value >= BREAKPOINTS.xl)
  const is2xl = computed(() => screenX.value >= BREAKPOINTS['2xl'])

  return { isSm, isMd, isLg, isXl, is2xl }
}
