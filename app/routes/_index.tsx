import type { MetaFunction } from "@remix-run/node";
import Clock from "~/components/dashboard/Clock";
import Topic from "~/components/dashboard/Topic";

export const meta: MetaFunction = () => {
  return [
    { title: "Knowledge Base" },
    { name: "description", content: "Keep your whole Knowledge here" },
  ];
};

export default function Index() {
  return (
    <main className="flex flex-col w-full h-full items-center py-6 px-16">
      <div className="w-full mb-6">
        <Clock />
      </div>
      <Topic />
    </main>
  );
}
