<script setup>
import FormControl from "@/components/form/FormControl.vue";
import Input from "@/components/form/Input.vue";
import Button from "@/components/form/Button.vue";

defineProps({
    form: Object,
});

const emit = defineEmits(["addPost", "updatePost"]);
</script>

<template>
    <div class="w-full mb-2">
        <form @submit.prevent="emit('addPost')">
            <FormControl label="Title" id="title">
                <Input
                    placeholder="Input title"
                    id="title"
                    name="title"
                    v-model="form.title"
                />
            </FormControl>

            <FormControl label="Content" id="content">
                <Input
                    placeholder="Input content"
                    id="content"
                    name="content"
                    v-model="form.content"
                />
            </FormControl>

            <FormControl label="Headline" id="headline">
                <Input
                    placeholder="Input headline"
                    id="headline"
                    name="headline"
                    v-model="form.headline"
                />
            </FormControl>

            <FormControl label="Thumbnail" id="thumbnail">
                <Input
                    placeholder="Input thumbnail"
                    id="thumbnail"
                    name="thumbnail"
                    v-model="form.thumbnail"
                />
            </FormControl>

            <div class="mb-4">
                <label
                    class="text-sm font-bold text-gray-700 form-check"
                    for="featured"
                >
                    Featured
                </label>
                <input
                    id="featured"
                    name="featured"
                    type="checkbox"
                    class="float-left w-4 h-4 mt-1 mr-2 align-top transition duration-200 bg-white bg-center bg-no-repeat bg-contain border border-gray-300 rounded-sm appearance-none cursor-pointer form-check-input checked:bg-blue-600 checked:border-blue-600 focus:outline-none"
                    v-model="form.featured"
                    :checked="form.featured"
                />
            </div>

            <FormControl label="Category" id="category_id">
                <Input
                    placeholder="Input category"
                    id="category_id"
                    name="category_id"
                    v-model="form.category_id"
                />
            </FormControl>

            <FormControl label="User" id="user_id">
                <Input
                    placeholder="Input user"
                    id="user_id"
                    name="user_id"
                    v-model="form.user_id"
                />
            </FormControl>

            <div v-if="form.id === ''">
                <Button type="submit">Submit</Button>
            </div>
            <div v-else-if="form.id !== ''">
                <Button @click="emit('updatePost')">Update</Button>
            </div>
        </form>
    </div>
</template>
