import axios from "axios";

const instance = axios.create({
    baseURL: "http://3.35.8.163/",
    headers: {
        "content-type": "application/json;charset=UTF-8",
        accept: "application/json",
        "Access-Control-Allow-Origin": "*",
    },
});

export default instance;