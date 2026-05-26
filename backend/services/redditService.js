// LIVE REDDIT API IMPLEMENTATION

// const fetchRedditPosts = async () => {

//   try {

//     const response = await fetch(
//       "https://www.reddit.com/search.json?q=passport&limit=20"
//     );

//     const data = await response.json();

//     const posts = data.data.children;

//     return posts.map((item) => {

//       const text =
//         item.data.title.toLowerCase();

//CATEGORY DETECTION

//       let category = "General";

//       if (
//         text.includes("renew")
//       ) {
//         category = "Renewal";
//       }

//       else if (
//         text.includes("tatkal")
//       ) {
//         category = "Tatkal";
//       }

//       else if (
//         text.includes("visa")
//       ) {
//         category = "Visa";
//       }

//       else if (
//         text.includes("appointment")
//       ) {
//         category = "Appointments";
//       }

//       else if (
//         text.includes("travel")
//       ) {
//         category = "Travel";
//       }

//SENTIMENT DETECTION

//       let sentiment = "Neutral";

//       if (
//         text.includes("delay") ||
//         text.includes("problem") ||
//         text.includes("issue") ||
//         text.includes("unavailable")
//       ) {
//         sentiment = "Negative";
//       }

//       else if (
//         text.includes("fast") ||
//         text.includes("smooth") ||
//         text.includes("easy") ||
//         text.includes("success")
//       ) {
//         sentiment = "Positive";
//       }

//       return {

//         id: item.data.id,

//         platform: "Reddit",

//         text: item.data.title,

//         category,

//         sentiment,

//         engagement:
//           item.data.score,

//         author:
//           item.data.author,

//         language: "eng",

//         summary:
//           item.data.title
//             .split(" ")
//             .slice(0, 10)
//             .join(" "),
//       };
//     });

//   } catch (error) {

//     console.log(error);

//     return [];
//   }
// };

// export default fetchRedditPosts;

// FINAL DEMO DATA

const fetchRedditPosts = async () => {
  return [
    {
      id: 1,

      platform: "Reddit",

      text: "Passport renewal taking too long",

      category: "Renewal",

      sentiment: "Negative",

      engagement: 120,

      author: "lakshay",

      language: "eng",

      summary: "Passport renewal taking too long",
    },

    {
      id: 2,

      platform: "Reddit",

      text: "Tatkal passport process was very fast",

      category: "Tatkal",

      sentiment: "Positive",

      engagement: 340,

      author: "rohit",

      language: "eng",

      summary: "Tatkal passport process was very fast",
    },

    {
      id: 3,

      platform: "Reddit",

      text: "Visa appointment slots unavailable",

      category: "Visa",

      sentiment: "Negative",

      engagement: 210,

      author: "aman",

      language: "eng",

      summary: "Visa appointment slots unavailable",
    },

    {
      id: 4,

      platform: "Reddit",

      text: "Travel experience with Indian passport",

      category: "Travel",

      sentiment: "Neutral",

      engagement: 500,

      author: "sneha",

      language: "eng",

      summary: "Travel experience with Indian passport",
    },

    {
      id: 5,

      platform: "Reddit",

      text: "Passport appointment process smooth",

      category: "Appointments",

      sentiment: "Positive",

      engagement: 150,

      author: "karan",

      language: "eng",

      summary: "Passport appointment process smooth",
    },
  ];
};

export default fetchRedditPosts;
