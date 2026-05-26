import Sentiment from "sentiment";
import { franc } from "franc";

const sentiment = new Sentiment();

const analyzePosts = (posts) => {

    return posts.map((post) => {

        const text =
            post.text.toLowerCase();

        //SENTIMENT

        const sentimentResult =
            sentiment.analyze(text);

        let sentimentLabel = "Neutral";

        if (sentimentResult.score > 0) {
            sentimentLabel = "Positive";
        }

        if (sentimentResult.score < 0) {
            sentimentLabel = "Negative";
        }


        //LANGUAGE


        const language = franc(text);


        //CATEGORY DETECTION


        let category = "General";

        if (
            text.includes("renew")
        ) {
            category = "Renewal";
        }

        else if (
            text.includes("tatkal")
        ) {
            category = "Tatkal";
        }

        else if (
            text.includes("visa")
        ) {
            category = "Visa";
        }

        else if (
            text.includes("appointment")
        ) {
            category = "Appointments";
        }

        else if (
            text.includes("travel")
        ) {
            category = "Travel";
        }


        //SPAM FILTER


        const isSpam =
            text.includes("buy now") ||
            text.includes("free money");


        //SUMMARY


        const summary =
            text.split(" ")
                .slice(0, 12)
                .join(" ");

        return {

            ...post,

            category,

            sentiment: sentimentLabel,

            language,

            summary,

            isSpam,
        };
    });
};

export default analyzePosts;