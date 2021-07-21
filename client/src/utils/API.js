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
        return axios.get("/api/collection/" + id)
    },

    // SNIPPET ROUTES
    fetchSnippet: function(id) {
        return axios.get("/api/snippet/" + id)
    },
    fetchCollectionSnippets: function(id) {
        return axios.get("/api/snippet/collection/" + id)
    },
    fetchUserSnippets: function(id) {
        return axios.get("/api/snippet/user/" + id)
    },
    createSnippet: function(newSnippet) {
        return axios.post("/api/snippet", newSnippet)
    },
    deleteSnippet: function(id) {
        return axios.delete("/api/snippet/" + id)
    },
    
    // SCORE ROUTES
    fetchSnippetScores: function(id) {
        return axios.get("/api/score/snippet/" + id)
    },
    saveScore: function() {
        return axios.post("/api/score")
    },
    // need fetchUserScore
    fetchUserScores: function(id) {
        return axios.get("/api/score/user/" + id)
    }

};