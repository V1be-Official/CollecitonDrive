import {useMemo} from 'react';


import axios from "axios";

const DOMAIN_NAME = 'http://remmidemmi.pythonanywhere.com';

class DataManager {

    async login({username, password}) {

        const body = {username, password};

        try {
            const response = await axios.post('http://remmidemmi.pythonanywhere.com/auth/token/', body);

            const data = response.data;

            return data;

        } catch (error) {
            throw error.response;
        }

    }

    async register({username, password, email, language}) {

        const body = {username, password, email, lang: language};

        try {
            const response = await axios.post(`${DOMAIN_NAME}/auth/users/`, body);

            return response.data;
        } catch (error) {
            throw error.response;
        }
    }


    async getUserData({id}) {
        try {
            const response = await axios.get(`${DOMAIN_NAME}/auth/users/${id}/`);

            return response.data;
        } catch (error) {
            throw error.response;
        }
    }

    async getCollectionData({id}) {
        try {
            const response = await axios.get(`${DOMAIN_NAME}/main/collections/${id}/`);

            return response.data;
        } catch (error) {
            throw error.response;
        }
    }

    async addCollection({name, description, type, token}) {

        const body = {
            name,
            description,
            theme_name: type,
            item_text_fields: '[]',
            item_int_fields: '[]',
            item_bool_fields: '[]',
            item_date_fields: '[]',
        };

        try {
            const response = await axios.post(`${DOMAIN_NAME}/main/collections/`, body, {
                headers: { Authorization: "Bearer " + token}
            });

            return response.data;
        } catch (error) {
            throw error.response;
        }
    }

    async getItemData(id) {

        try {
            const response = await axios.get(`${DOMAIN_NAME}/main/items/${id}/`);

            return response.data;
        } catch (error) {
            throw error.response;
        }


    }

    async addComment({id, token, description}) {

        const body = {
            description
        };

        try {
            const response = await axios.post(`${DOMAIN_NAME}/main/items/${id}/add_comment/`, body, {
                headers: { Authorization: "Bearer " + token}
            });

            return response.data;
        } catch (error) {
            throw error.response;
        }

    }

}

export const useDataManager = () => {

    const dataManager = useMemo(() => new DataManager(), []);

    return dataManager;

};
