<script setup>
import { computed } from 'vue'
const props = defineProps({
    modelValue: String,
})

const emit = defineEmits(['update:modelValue'])

const localFormValue = computed({
    get() {
        return props.modelValue
    },
    set(value) {
        emit('update:modelValue', value)
    },
})

// function updateValue(value) {
//     emit('update:modelValue', value)
// }
</script>

<template>
    <input
        class="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
        type="text"
        v-model="localFormValue" />
</template>
