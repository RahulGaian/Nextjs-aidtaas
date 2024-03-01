import SeeAlso from ".";
import { platformData} from "../../constants/data";

export default {
    title: "Components/SeeAlso",
    component: SeeAlso,
};

export const seeAlso1 = () => (
    <SeeAlso seeAlsoData={platformData[0].SeeAlso}/>
    
)

export const seeAlso2 = () => (
    <SeeAlso seeAlsoData={platformData[1].SeeAlso}/>
)