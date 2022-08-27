import axios from "axios";

export const friendBot = axios.create({
    baseURL: "https://friendbot.stellar.org"
})