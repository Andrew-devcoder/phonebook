import axios from "axios";

const UserService = {
    async getAll() {
        const response = await axios.get(
            "https://jsonplaceholder.typicode.com/users"
        );

        return response.data;
    },
};

export default UserService;
