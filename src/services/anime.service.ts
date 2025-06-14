import apiClient from "@/config/api.config";

export const getAnime = async ({}): Promise<any> => {
    try {
        return await apiClient.get(`/anime`);
    } catch (error: any) {
        const message = error.response?.data?.message || 'Failed to fetch anime data';
        throw new Error(message)
    }
};
