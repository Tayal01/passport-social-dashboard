import { useEffect, useMemo, useState } from "react";

import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";

function App() {
  const [posts, setPosts] = useState([]);

  const [loading, setLoading] = useState(true);

  const [search, setSearch] = useState("");

  const [categoryFilter, setCategoryFilter] = useState("All");

  const [sentimentFilter, setSentimentFilter] = useState("All");

  //FETCH POSTS

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch("http://localhost:8000/api/posts");

        const data = await response.json();

        setPosts(data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  //FILTER POSTS

  const filteredPosts = useMemo(() => {
    return posts.filter((post) => {
      const matchesSearch = post.text
        .toLowerCase()
        .includes(search.toLowerCase());

      const matchesCategory =
        categoryFilter === "All" || post.category === categoryFilter;

      const matchesSentiment =
        sentimentFilter === "All" || post.sentiment === sentimentFilter;

      return matchesSearch && matchesCategory && matchesSentiment;
    });
  }, [posts, search, categoryFilter, sentimentFilter]);


  //STATS


  const totalPlatforms = new Set(posts.map((post) => post.platform)).size;

  const totalCategories = new Set(posts.map((post) => post.category)).size;


  //SENTIMENT COLORS


  const sentimentColor = (sentiment) => {
    if (sentiment === "Positive") {
      return "text-green-600";
    }

    if (sentiment === "Negative") {
      return "text-red-600";
    }

    return "text-yellow-600";
  };


  //CHART DATA

  const sentimentData = [
    {
      name: "Positive",

      value: posts.filter((post) => post.sentiment === "Positive").length,
    },

    {
      name: "Neutral",

      value: posts.filter((post) => post.sentiment === "Neutral").length,
    },

    {
      name: "Negative",

      value: posts.filter((post) => post.sentiment === "Negative").length,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      {/* NAVBAR */}

      <div className="bg-black text-white p-5 shadow-lg">
        <h1 className="text-3xl font-bold">Passport Social Dashboard</h1>
      </div>

      {/* CSV BUTTON */}

      <div className="flex justify-end p-8 pb-0">
        <a
          href="http://localhost:8000/api/export/csv"
          target="_blank"
          rel="noreferrer"
          className="bg-black text-white px-6 py-3 rounded-xl shadow hover:bg-gray-800 transition"
        >
          Download CSV Report
        </a>
      </div>

      {/* MAIN */}

      <div className="p-8">
        {/* SEARCH */}

        <div className="mb-6">
          <input
            type="text"
            placeholder="Search passport posts..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full p-4 rounded-xl border border-gray-300 shadow-sm"
          />
        </div>

        {/* FILTERS */}

        <div className="grid md:grid-cols-2 gap-4 mb-8">
          {/* CATEGORY FILTER */}

          <select
            value={categoryFilter}
            onChange={(e) => setCategoryFilter(e.target.value)}
            className="p-4 rounded-xl border border-gray-300"
          >
            <option value="All">All Categories</option>

            <option value="Renewal">Renewal</option>

            <option value="Tatkal">Tatkal</option>

            <option value="Visa">Visa</option>

            <option value="Travel">Travel</option>

            <option value="Appointments">Appointments</option>
          </select>

          {/* SENTIMENT FILTER */}

          <select
            value={sentimentFilter}
            onChange={(e) => setSentimentFilter(e.target.value)}
            className="p-4 rounded-xl border border-gray-300"
          >
            <option value="All">All Sentiments</option>

            <option value="Positive">Positive</option>

            <option value="Neutral">Neutral</option>

            <option value="Negative">Negative</option>
          </select>
        </div>

        {/* STATS */}

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          <div className="bg-white p-6 rounded-2xl shadow">
            <h2 className="text-gray-500">Total Posts</h2>

            <p className="text-4xl font-bold mt-2">{filteredPosts.length}</p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow">
            <h2 className="text-gray-500">Platforms</h2>

            <p className="text-4xl font-bold mt-2">{totalPlatforms}</p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow">
            <h2 className="text-gray-500">Categories</h2>

            <p className="text-4xl font-bold mt-2">{totalCategories}</p>
          </div>
        </div>

        {/* CHART */}

        <div className="bg-white p-6 rounded-2xl shadow mb-10">
          <h2 className="text-2xl font-bold mb-6">Sentiment Analytics</h2>

          <div className="w-full h-87.5 min-w-0">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={sentimentData}
                  dataKey="value"
                  outerRadius={120}
                  label
                >
                  <Cell fill="#22c55e" />
                  <Cell fill="#eab308" />
                  <Cell fill="#ef4444" />
                </Pie>

                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* LOADING */}

        {loading ? (
          <div className="text-center text-2xl font-bold">Loading...</div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPosts.map((post) => (
              <div
                key={post.id}
                className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-2xl transition"
              >
                {/* HEADER */}

                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-xl font-bold">{post.platform}</h2>

                  <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm">
                    {post.category}
                  </span>
                </div>

                {/* POST TEXT */}

                <p className="text-gray-700 leading-7 mb-4">{post.text}</p>

                {/* SUMMARY */}

                <div className="bg-gray-100 p-3 rounded-lg mb-4">
                  <p className="text-sm text-gray-600">{post.summary}</p>
                </div>

                {/* DETAILS */}

                <div className="space-y-2 text-sm">
                  <p>
                    <span className="font-bold">Author:</span> {post.author}
                  </p>

                  <p>
                    <span className="font-bold">Engagement:</span>{" "}
                    {post.engagement}
                  </p>

                  <p>
                    <span className="font-bold">Language:</span> {post.language}
                  </p>

                  <p className={sentimentColor(post.sentiment)}>
                    <span className="font-bold">Sentiment:</span>{" "}
                    {post.sentiment}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
