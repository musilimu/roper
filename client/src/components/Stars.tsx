import {
    StarIcon,
    StarFilledIcon,
} from "@radix-ui/react-icons";

export const Stars: React.FC<{ stars: number; setFilled?: React.Dispatch<React.SetStateAction<number>>, filled: number }> = ({ stars, filled, setFilled }) => {

    return Array(stars)
        .fill(1)
        .map((_, i) =>
            i < filled ? (
                <StarFilledIcon
                    key={i}
                    onClick={() => setFilled?.(i + 1)}
                />
            ) : (
                <StarIcon key={i} onClick={() => setFilled?.(i + 1)} />
            )
        )

}