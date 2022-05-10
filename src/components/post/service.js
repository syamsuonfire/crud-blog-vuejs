import axios from "@/lib/axios";
import { reactive, ref, onMounted } from "vue";

const usePost = () => {
    const form = reactive({
        id: "",
        title: "",
        content: "",
        headline: "",
        thumbnail: "",
        featured: false,
        category_id: "",
        user_id: "",
    });

    const posts = ref([]);

    onMounted(() => {
        fetchData();
    });

    const fetchData = async () => {
        const { data } = await axios.get(`/api/posts`);
        posts.value = data.data.data;
    };

    const getPost = async (id) => {
        const { data } = await axios.get(`/api/posts/${id}`);
        const post = data.data;

        form.id = post.id;
        form.title = post.title;
        form.content = post.content;
        form.headline = post.headline;
        form.thumbnail = post.thumbnail;
        form.featured = post.featured;
        form.category_id = post.category_id;
        form.user_id = post.user_id;
    };

    const handleAddPost = async () => {
        const { data } = await axios.post(`/api/posts`, form);
        const post = data.data;

        // Choose One
        posts.value.push(post);
        // posts.value = [...posts.value, post];

        // fetchData();

        form.id = "";
        form.title = "";
        form.content = "";
        form.headline = "";
        form.thumbnail = "";
        form.featured = false;
        form.category_id = "";
        form.user_id = "";
    };

    const handleUpdatePosts = async () => {
        const { data } = await axios.put(`/api/posts/${form.id}`, form);

        const post = data.data;
        const updatedPosts = posts.value.map((item) =>
            item.id === post.id ? post : item
        );

        posts.value = updatedPosts;
        // fetchData();

        form.id = "";
        form.title = "";
        form.content = "";
        form.headline = "";
        form.thumbnail = "";
        form.featured = false;
        form.category_id = "";
        form.user_id = "";
    };

    const handleDeletePost = async (id) => {
        const isOK = confirm("Are you sure want to delete this data?");

        if (isOK) {
            await axios.delete(`/api/posts/${id}`);

            const filteredPosts = posts.value.filter((item) => item.id != id);
            posts.value = filteredPosts;
            // fetchData();
        }
    };

    return {
        form,
        posts,
        getPost,
        handleAddPost,
        handleUpdatePosts,
        handleDeletePost,
    };
};

export default usePost;
