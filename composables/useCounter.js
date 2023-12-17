export default function () {
  const count = ref(0)
  const increment = () => {
    count.value ++
  }
  return {
    count,
    increment
  }
}