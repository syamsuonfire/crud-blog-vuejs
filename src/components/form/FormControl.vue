<script setup>
defineProps({
    label: String,
    id: String,
})
</script>

<template>
    <div class="mb-4">
        <label class="block mb-2 text-sm font-bold text-gray-700" :for="id">
            {{ label }}</label
        >
        <slot></slot>
    </div>
</template>
