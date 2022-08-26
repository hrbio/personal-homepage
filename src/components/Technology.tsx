import { tech } from "@/data/works";
import { FC } from "react";

const Technology:FC<{ tech: tech }> = ({ tech }) => {
	return (<>{tech.name}</>);
}
 
export default Technology;