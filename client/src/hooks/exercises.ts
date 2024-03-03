import { useContract, useContractRead } from "@thirdweb-dev/react";
import { useParams } from "react-router-dom";
import { TAnswer } from "../components/Exercises";

type TQuestion = { question: string, answers: TAnswer[] }

const toJson = (data: { map: (arg0: (ex: [string, boolean][][]) => { question: [string, boolean][]; answers: TAnswer[]; }) => TQuestion[]; }): TQuestion[] => {
    return data?.map((ex: [string, boolean][][]) => {
        return {
            question: ex[0],
            answers: ex[1].map(([text, isCorrect]) => ({
                text,
                isCorrect
            }))
        }
    })
}

export const useExercises = () => {
    const { id } = useParams();
    const { data: contract } = useContract(import.meta.env.VITE_CONTRACTADDRESS, "");
    const {
        data: exercisesCount,
        isLoading: loadingExercisesCount,
    } = useContractRead(contract, "exercisesCount");
    const {
        data,
        isLoading,
    } = useContractRead(contract, "getExercise", [id, exercisesCount?.toNumber() - 1]);

    return {
        isLoading: isLoading || loadingExercisesCount,
        questions: toJson(data)
    }
}