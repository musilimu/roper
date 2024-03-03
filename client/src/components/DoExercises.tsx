import { useExercises } from "../hooks/exercises"

export const DoExercises = () => {
    const { isLoading, questions } = useExercises()

    if (isLoading) return <p>loading ...</p>
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