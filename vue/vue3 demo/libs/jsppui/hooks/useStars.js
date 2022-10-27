import { ref } from 'vue';

export function useStars (num, callback) {
  
  const starNum = ref(num);
  
  const setStarNum = (num) => {
    starNum.value = num;
    callback();
  }

  return [
    starNum,
    setStarNum
  ]
}