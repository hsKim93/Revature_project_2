const url = "http://localhost:8080"
let userList = [];

const loadUserList = async () => {
    const response = await fetch(url + "/users", {
        method: "GET",
        mode: "cors"
    });

    if (response.status === 200) {
        const body = await response.json();
        for (user of body) {
            userList.push(user);
        }
    } else {
        /**
         * @todo
         * show error message instead of users
         */
    }
}

const deleteUser = async (userId) => {
    const response = await fetch(url + "/user/" + userId, {
        method: "DELETE",
        mode: "cors"
    });

    if (response.status === 200) {
        /**
         * @todo
         * delete html of this user OR reload the users list
         */
    } else {
        /**
         * @todo
         * show error message (failed to delete user)
         */
    }
}

loadUserList();