import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export function usePost(id: string) {
    const {data} = useQuery({
        queryKey: ['post', id],
        queryFn: function() {
            return axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
                .then(response => {
                    return response.data
                });
        }
    })

    return {
        data
    }
}
