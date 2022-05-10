<script setup>
import Button from '@/components/form/Button.vue'

defineProps({
    post: Object,
    index: Number,
})

const emit = defineEmits(['deletePost', 'getPost'])
</script>

<template>
    <div class="w-full px-5 py-5 mb-2 border-2 border-gray-300 rounded-lg">
        <div class="flex items-center justify-between">
            <div class="flex">
                <p class="mr-2">{{ index + 1 }}</p>
                <p>{{ post.title }}</p>
            </div>
            <div>
                <Button class="mr-2" @click="emit('getPost', post.id)">
                    Edit</Button
                >
                <Button class="bg-red-600" @click="emit('deletePost', post.id)"
                    >Delete</Button
                >
            </div>
        </div>
    </div>
</template>
