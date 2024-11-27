import Card from "@/components/Card";
import ListItem from "@/components/ListItem";
import TopicList from "@/components/TopicList";
import { promises as fs } from "fs";
export default async function HomePage() {
  const filePath = process.cwd() + "/public/data.json";
  const file = await fs.readFile(filePath, "utf8");
  const context = JSON.parse(file);
  return (
    <div className="w-full h-full flex justify-center">
      <div className="container">
        {context.topics.map((topic, index) => (
          <div key={index}>
            <Card topic={topic} />
            <ListItem lessons={topic.lessons} />
          </div>
        ))}
      </div>
    </div>
  );
}
