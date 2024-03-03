import { useParams } from "react-router-dom";
import { W3Button } from "./W3Button";

export const EnrollButton = () => {
    const { id } = useParams();

    return (
        <W3Button action={async (contract) => { contract.call("enroll", [id]) }}>
            enroll
        </W3Button>
    )
}