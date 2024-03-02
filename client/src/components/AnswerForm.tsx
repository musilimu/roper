import { Button, TextField } from "@radix-ui/themes";
import { TAnswer } from "./Exercises";

type TAnswerForm = {
    setAnswers: React.Dispatch<React.SetStateAction<TAnswer[]>>, answer: TAnswer, setAnswer: React.Dispatch<React.SetStateAction<TAnswer>>, setIsAddingAnswer: React.Dispatch<React.SetStateAction<boolean>>, isAddingAnswer: boolean
}


export const AnswerForm: React.FC<TAnswerForm> = ({ answer, isAddingAnswer, setAnswer, setAnswers, setIsAddingAnswer }) => {
    return <form onSubmit={(e) => {
        e.preventDefault();
        setAnswers(prev => [...prev, { ...answer, id: crypto.randomUUID() }]);
        setAnswer({ isCorrect: false, text: '' });
        setIsAddingAnswer(!isAddingAnswer);
    }}>
        {isAddingAnswer ? <>
            <label htmlFor="answer">
                Answer
                <br />
                <TextField.Input id="answer" value={answer.text} onChange={e => setAnswer(prev => ({ ...prev, text: e.target.value }))} />
            </label>
            <br />
            <Button variant="solid" type="submit">
                save answer
            </Button>
        </> :
            <Button variant="solid" type='button' onClick={() => {
                setIsAddingAnswer(!isAddingAnswer);
            }}>
                add new answer
            </Button>}
    </form>;
}
