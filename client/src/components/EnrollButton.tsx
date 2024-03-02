import { Web3Button } from "@thirdweb-dev/react";
import { useParams } from "react-router-dom";

export const EnrollButton = () => {
    const { id } = useParams();

    return (
        <Web3Button
            contractAddress="0xF2F64A8932c42A2E57D100fAE1aFB60528c9b800"
            action={async (contract) => { contract.call("enroll", [id]) }}
        >
            enroll
        </Web3Button>
    )
}