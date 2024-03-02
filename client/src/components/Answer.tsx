import { Text } from "@radix-ui/themes";
import { TAnswer } from "./Exercises";

type AnswerProps = {
    answer: TAnswer, updateAnswer: ({ id, isCorrect }: Omit<Required<TAnswer>, 'text'>) => void
}
export const Answer: React.FC<AnswerProps> = ({ answer, updateAnswer }) => {
    return <Text as="p">
        <label>
            <input type='checkbox' onChange={e => {
                updateAnswer({ id: answer.id!, isCorrect: e.target.checked })

            }} checked={answer.isCorrect} /> {answer.text}
        </label>
    </Text>;
}
