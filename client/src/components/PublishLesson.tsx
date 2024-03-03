
import { useParams } from "react-router-dom";
import { W3Button } from "./W3Button";

export const PublishLesson = ({ isPublished }: { isPublished: boolean }) => {
    const { id } = useParams();

    return <W3Button
        action={async (contract) => { contract.call("publishUnpublishLesson", [id]) }}
    >
        {isPublished ? 'un publish' : 'publish'}
    </W3Button>
}