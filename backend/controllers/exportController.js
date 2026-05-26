import { Parser } from "json2csv";

import fetchRedditPosts from "../services/redditService.js";

export const exportCSV = async (req, res) => {
    try {
        const posts = await fetchRedditPosts();

        const fields = [
            "platform",

            "text",

            "category",

            "sentiment",

            "language",

            "engagement",

            "author",
        ];

        const json2csv = new Parser({
            fields,
        });

        const csv = json2csv.parse(posts);

        res.header("Content-Type", "text/csv");

        res.attachment("passport-dashboard-report.csv");

        return res.send(csv);
    } catch (error) {
        console.log(error);

        res.status(500).json({
            message: "CSV Export Failed",
        });
    }
};
