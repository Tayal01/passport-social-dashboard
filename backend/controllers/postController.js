import fetchRedditPosts from "../services/redditService.js";

import analyzePosts from "../services/nlpService.js";

export const getAllPosts = async (req, res) => {
    try {
        const redditPosts = await fetchRedditPosts();

        //NLP ANALYSIS

        const analyzedPosts = analyzePosts(redditPosts);

        //REMOVE SPAM

        const filteredPosts = analyzedPosts.filter((post) => !post.isSpam);

        res.status(200).json(filteredPosts);
    } catch (error) {
        console.log(error);

        res.status(500).json({
            message: "Server Error",
        });
    }
};
