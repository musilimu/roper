import { useParams } from "react-router-dom";
import { W3Button } from "./W3Button";

export const EnrollButton = () => {
    const { id } = useParams();

    return (
        <W3Button
            contractAddress="0xF2F64A8932c42A2E57D100fAE1aFB60528c9b800"
            action={async (contract) => { contract.call("enroll", [id]) }}
        >
            enroll
        </W3Button>
    )
}