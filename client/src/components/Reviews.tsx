import { uselessonsReviewCount } from "../api/users";
import { useReview } from "../api/review";
import {  useState } from "react";
import { useParams } from "react-router-dom";
import { Button, Text } from "@radix-ui/themes";
import Loading from "./Loading";
import ErrorEl from "./ErrorEl";
import { Stars } from "./Stars";

export const Reviews = () => {
    const { id } = useParams();
    const [reviews, setReviews] = useState<{ text: string; stars: any; }[]>([])
    const [nextLessonsReviewCount, setNextLessonsReviewCount] = useState(0)
    const { data: lessonsReviewCount, error: usersError, isLoading: isLoadingUsers } = uselessonsReviewCount()
    const { data: review, error: reviewError, isLoading: isLoadingReview } = useReview(id, nextLessonsReviewCount);

    if (isLoadingUsers || isLoadingReview) return <Loading />;
    if (usersError || reviewError) return <ErrorEl error={usersError || reviewError} />;
    function* generateReview() {
        if (nextLessonsReviewCount >= lessonsReviewCount?.toNumber()) { yield nextLessonsReviewCount; return }
        setReviews(pre => {
            return isLoadingReview ? pre : [...pre, { text: review[0], stars: review[1] }]
        })
        setNextLessonsReviewCount(a => a + 1)

        yield nextLessonsReviewCount
    }
    const rev = generateReview()

    return <div>{
        reviews.map(({ text, stars }) => <Text key={text} mt="2" as="div" size="2" color="gray">
            <Text as="div">{text}</Text>
            <Stars stars={5} filled={stars?.toNumber()} />
        </Text>)
    }
        {!(nextLessonsReviewCount >= lessonsReviewCount?.toNumber()) ? <Button variant="solid" mt="2" ml="2" onClick={() => {
            rev.next()
        }} disabled={isLoadingUsers || !!usersError || !!reviewError}>
            Load next review
        </Button> : null}
    </div>

}
