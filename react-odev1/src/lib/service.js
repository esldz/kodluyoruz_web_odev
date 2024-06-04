import axios from "axios";

async function getData(userId) {
    const users = await axios.get(`https://jsonplaceholder.typicode.com/users/${userId}`);
    const posts = await axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`);

    console.log(users.data, posts.data);
}

export default getData;
