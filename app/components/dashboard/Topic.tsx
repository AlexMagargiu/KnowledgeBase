import TopicItem from "./TopicItem";

type SubTopic = {
  name: string;
  path: string;
};

type TopicData = {
  icon: string;
  name: string;
  subTopics: SubTopic[];
};

const topics: TopicData[] = [
  {
    icon: "book-open",
    name: "Learning",
    subTopics: [
      { name: "Cybersecurity", path: "/learning/cybersecurity" },
      { name: "Programming", path: "/learning/programming" },
      { name: "Languages", path: "/learning/languages" },
    ],
  },
  {
    icon: "dollar-sign",
    name: "Finances",
    subTopics: [
      { name: "Crypto", path: "/finances/crypto" },
      { name: "Stocks", path: "/finances/stocks" },
      { name: "Options", path: "/finances/options" },
    ],
  },
  {
    icon: "heart",
    name: "Hobbies",
    subTopics: [
      { name: "Gardening", path: "/hobbies/gardening" },
      { name: "Perfumes", path: "/hobbies/perfumes" },
      { name: "Reading", path: "/hobbies/reading" },
    ],
  },
];

export default function Topic() {
  return (
    <nav className="h-full w-full overflow-x-auto">
      <div className="flex justify-around w-full p-2">
        {topics.map((topic, index) => (
          <div key={index} className="flex flex-col relative">
            <div className="absolute left-5 top-10 bottom-0 w-0.5 bg-links"></div>
            <TopicItem topic={topic} />
          </div>
        ))}
      </div>
    </nav>
  );
}
