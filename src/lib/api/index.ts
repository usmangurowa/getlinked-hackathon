// initialize axios

import Axios, { AxiosError, AxiosResponse } from "axios";

const api = Axios.create({
    baseURL: "https://backend.getlinked.ai",
});

export default api;

export type TContactFormMessage = {
    email: string;
    phone_number?: string;
    first_name: string;
    message: string;
};

export const sendContactMessage = async (data: TContactFormMessage) => {
    try {
        const res = await api.post("/hackathon/contact-form", data);
        return res.data;
    } catch (error: any) {
        return error.response.data;
    }
};

export type THackathonRegistration = {
    email: string;
    phone_number?: string;
    team_name: string;
    group_size: number;
    project_topic: string;
    category: number;
    privacy_poclicy_accepted: boolean;
};

export const registerHackathon = async (data: THackathonRegistration) => {
    try {
        const res = await api.post("/hackathon/registration", data);
        return res.data;
    } catch (error: any) {
        return error?.response?.data;
    }
};

export const getCategoryList = async () => {
    try {
        const res = await api.get("/hackathon/categories-list");
        return res.data;
    } catch (error: any) {
        return error?.response?.data;
    }
};
