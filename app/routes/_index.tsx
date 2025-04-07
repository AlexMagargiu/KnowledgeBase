import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "Knowledge Base" },
    { name: "description", content: "Keep your whole Knowledge here" },
  ];
};

export default function Index() {
  return (
    <div>
      <div></div>
    </div>
  );
}
