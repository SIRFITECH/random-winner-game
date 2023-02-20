import { axios } from "axios";

export async function subgraphQuery(query) {
    try { 
        const SUBGRAPH_URL = "https://api.thegraph.com/subgraphs/name/mosnyik/randomwinnergame";
        const response = await axios.post(SUBGRAPH_URL, {
            query,
        });
        if (response.data.errors) {
            console.log(response.data.errors);
            throw new Error(`Error making subgraph query ${response.data.errors}`);

        };
        return response.data.data;
     } catch (error) {
        console.error();
        throw new Error(`Could not queryhe subgraph ${error.message}`);
    }
    
}