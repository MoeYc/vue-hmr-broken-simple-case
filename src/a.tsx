import { ref, defineComponent } from 'vue'

const v = ref(1)
const v2 = ref(3)

// 1. change the first `v.value` to `v`, web page will lose the value
// 2. change `v` to `v.value`, HMR broken

export const A = defineComponent({
  render() {
    return (
      <div>
        {v.value}

        <button
          onClick={() => {
            v.value++
          }}
        >
          +1
        </button>
      </div>
    )
  },
})
