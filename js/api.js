const BASE_URL = "https://jsonplaceholder.typicode.com";

export const getUsers = async () => {
    const response = await fetch(`${BASE_URL}/users`);
    return response.json();
};

export const getComments = async () => {
    const response = await fetch(`${BASE_URL}/comments`);
    return response.json();
}

export const createPost = async (title) => {
    const response = await fetch(`${BASE_URL}/posts`, {
        method: 'POST',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            title,
            body: " Isi dari post",
            userId: 1
    })
});
    return response.json();
};

export const updatePost = async () => {
    await fetch(`${BASE_URL}/posts/1`, {
        method: 'PUT',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            title: "judul di update",
            body: " Isi dari post yang di update",
            userId: 1
    })
});
}

export const deletePost = async () => {
    await fetch(`${BASE_URL}/posts/1`, {
        method: 'DELETE'
    });
}