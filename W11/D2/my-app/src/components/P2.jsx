// Dynamic Params with useParams hook
// Dynamic Params are values that are taken from the URL. 
// usePramas hook hepls us read those values inside a component

import { useParams } from "react-router";
export function DynamicParamsUseParams(){
    const {id}=useParams();
    return(
        <div>
            <h2>Dynamic Params with useParams</h2>
            <p>Product ID from URL: {id}</p>
        </div>
    );
}