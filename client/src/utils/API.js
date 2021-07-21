import axios from "axios";

export default {
    // USER ROUTES
    fetchUser: function(id) {
        return axios.get("/api/users/" + id)
    },
    createUser: function(newUser) {
        return axios.post("/api/users/", newUser)
    },
    // needs login & logout
    //   logoutUser: function() {
    //       return axios.post("/api/users/logout")
    //   }

    // COLLECTION ROUTES
    fetchCollections: function() {
        return axios.get("/api/collection")
    },
    fetchCollection: function(id) {
        return axios.get("/api/collection" + id)
    },

    // SNIPPET ROUTES
    fetchSnippets: function() {
        return axios.get("/api/snippet")
    },
    fetchSnippet: function(id) {
        return axios.get("/api/snippet" + id)
    },

};