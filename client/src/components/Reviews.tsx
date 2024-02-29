import { useUsers } from "../api/users";
import { useReview } from "../api/review";
import { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Button, Text } from "@radix-ui/themes";
import Loading from "./Loading";
import ErrorEl from "./ErrorEl";
import { Stars } from "./Stars";

export const Reviews = () => {
    const { id } = useParams();
    const [nextUserId, setNextUserId] = useState(0)
    const [reviews, setReviews] = useState<{ text: string; stars: any; }[]>([])
    const { data: users, error: usersError, isLoading: isLoadingUsers } = useUsers()
    const { data: review, error: reviewError, isLoading: isLoadingReview } = useReview(id, users?.[nextUserId]);
    const loadNextReview = useCallback(() => {
        console.log('called')
        if (nextUserId > users?.length || isLoadingUsers || usersError || reviewError) return
        setNextUserId(id => id + 1)

    }, [nextUserId])

    useEffect(() => {
        setReviews(pre => {
            return isLoadingReview ? pre : [...pre, { text: review[0], stars: review[1] }]
        })
    }, [review?.[0]])
    console.log({ data: review, error: reviewError, isLoading: isLoadingReview });
    if (isLoadingUsers || isLoadingReview) return <Loading />;
    if (usersError || reviewError) return <ErrorEl error={usersError || reviewError} />;
    return <div>{
        reviews.map(({ text, stars }) => <Text key={text} mt="2" as="div" size="2" color="gray">
            <Text as="div">{text}</Text>
            <Stars stars={5} filled={stars?.toNumber()} />
        </Text>)
    }
        <Button variant="solid" mt="2" ml="2" onClick={loadNextReview} disabled={isLoadingUsers || !!usersError || !!reviewError}>
            Load next review
        </Button>
    </div>

}
