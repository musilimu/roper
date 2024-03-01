import { Web3Button } from "@thirdweb-dev/react";
import { useParams } from "react-router-dom";

export const EnrollButton = () => {
    const { id } = useParams();

    return (
        <Web3Button
            contractAddress="0xf10bfA953951B2394ab70D4617b97F963f66f0B2"
            action={async (contract) => { contract.call("enroll", [id]) }}
        >
            enroll
        </Web3Button>
    )
}