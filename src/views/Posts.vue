<script setup>
import AppLayout from "../components/AppLayout.vue";

import usePost from "../components/post/service";
import PostForm from "../components/post/Form.vue";
import ListForm from "../components/post/List.vue";

const {
    form,
    posts,
    getPost,
    handleAddPost,
    handleUpdatePosts,
    handleDeletePost,
} = usePost();
</script>

<template>
    <AppLayout>
        <div class="py-12">
            <div class="mx-auto max-w-7xl sm:px-6 lg:px-8">
                <div class="overflow-hidden bg-white shadow-sm sm:rounded-lg">
                    <div class="p-6 bg-white border-b border-gray-200">
                        <PostForm
                            :form="form"
                            @addPost="handleAddPost"
                            @updatePost="handleUpdatePosts"
                        />
                        <ListForm
                            :post="post"
                            :index="index"
                            v-for="(post, index) of posts"
                            @deletePost="handleDeletePost"
                            @getPost="getPost"
                            :key="post.id"
                        />
                    </div>
                </div>
            </div>
        </div>
    </AppLayout>
</template>
