import getUsers from "../db/getUsers.js"

const homeController = async (req, res) => {

    // fetch all users data
    const allUsers = await getUsers()

    res.render("index", {users: allUsers})
}

export default homeController

