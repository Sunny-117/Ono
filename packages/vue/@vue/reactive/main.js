import { reactive, watchEffect, watch, computed } from './core'

const oBtnA = document.querySelector('#aBtn')
const oBtnC = document.querySelector('#cBtn')

const state = reactive({
  a: 1,
  b: {
    c: 2
  }
})
const res = computed(() => {
  console.log('计算属性执行了')
  return state.a + state.b.c
})
oBtnA.addEventListener('click', () => {
  state.a = 100
  console.log('computed=>', res.value)
}, false)
oBtnC.addEventListener('click', () => {
  state.b.c = 20
  console.log('computed=>', res.value)
}, false)

watchEffect(() => {
  console.log('warchEffect => state.a', state.a)
})
watchEffect(() => {
  console.log('warchEffect => state.b.c', state.b.c)
})
watch(() => state.a, (cur, prev) => {
  console.log(cur, prev)
  console.log('watch=>state.a', state.a)
})
watch(() => state.b.c, (cur, prev) => {
  console.log(cur, prev)
  console.log('watch=>state.b.c', state.b.c)
})
