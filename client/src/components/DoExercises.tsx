import { useContract, useContractRead } from "@thirdweb-dev/react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { TAnswer } from "./Exercises";
type TQuestion = { question: string, answers: TAnswer[] }
export const DoExercises = () => {
    const { id } = useParams();
    const { data: contract } = useContract(import.meta.env.VITE_CONTRACTADDRESS, "");
    const [nextExerciseCount, setNextExerciseCount] = useState(0)
    const [questions, setQuestions] = useState<TQuestion[]>([])
    const {
        data,
        isLoading,
    } = useContractRead(contract, "getExercise", [id, nextExerciseCount]);
    const {
        data: exercisesCount,
        isLoading: loadingExercisesCount,
    } = useContractRead(contract, "exercisesCount");

    function* getExercises() {
        if (nextExerciseCount >= exercisesCount?.toNumber()) { yield nextExerciseCount; return }

        if (!(loadingExercisesCount)) {
            setQuestions(isLoading ? questions : data?.map(ex => {
                return {
                    question: ex[0],
                    answers: ex[1].map(([text, isCorrect]) => ({
                        text,
                        isCorrect
                    }))
                }
            }));

            setNextExerciseCount(a => a + 1)
        }
        yield nextExerciseCount
    }

    const rev = getExercises()
    while (rev.next().value !== undefined) { }
    if (isLoading) return <p>loading ...</p>
    // return null
    return <ol><h1>DoExercises</h1>
        {questions.map(({ question, answers }) => {
            return <li key={question}>
                <strong>{question}</strong>
                <ol style={{ listStyleType: 'lower-alpha' }}>

                    {answers.map(answer => <li key={answer.text}> <input type="checkbox" defaultChecked={answer.isCorrect} id="" />{answer.text}</li>)}
                </ol>
            </li>
        })}
    </ol>
}