import { useParams } from "react-router-dom";
import { useProperty } from "../api/property";
import ErrorEl from "./ErrorEl";
import Loading from "./Loading";
import { Register } from "./Register";

export function EditLesson() {
    const { id } = useParams();

    const {
        error,
        isLoading,
        data,
    } = useProperty(id);

    if (isLoading) return <Loading />;
    if (error) return <ErrorEl error={error} />;
    return <Register name={data.lessons[4]} notes={data.lessons[1]}/>
}