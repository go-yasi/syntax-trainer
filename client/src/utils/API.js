import axios from "axios";

export default {

    fetchSnippet: function() {
    return axios
        .get("/api/snippet/11")
    }

};