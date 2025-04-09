import { Link } from "@remix-run/react";

type SubTopic = {
  name: string;
  path: string;
};

type TopicData = {
  icon: string;
  name: string;
  subTopics: SubTopic[];
};

type TopicItemProps = {
  topic: TopicData;
};

export default function TopicItem({ topic }: TopicItemProps) {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "book-open":
        return "📚";
      case "dollar-sign":
        return "💵";
      case "heart":
        return "🙂";
      default:
        return "";
    }
  };

  return (
    <div className="flex flex-col p-2 ">
      <div className="flex gap-3 tracking-wider items-center text-primary-light-text mb-2">
        <span className="text-xl">{getIcon(topic.icon)}</span>
        <span className="text-xl font-bold">{topic.name}</span>
      </div>

      <ul className="ml-6 space-y-2">
        {topic.subTopics.map((subTopic, index) => (
          <li key={index} className="flex items-center">
            <span className="mr-2 text-links">•</span>
            <Link
              to={subTopic.path}
              className="text-links hover:text-hover-links transition-colors underline"
            >
              {subTopic.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
