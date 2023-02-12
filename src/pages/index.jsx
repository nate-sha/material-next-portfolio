import Meta from "@/components/Meta";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import Budget from "@/components/projects/budget/Budget";

export default function Home() {
  return (
    <>
      <Meta title="Welcome" description="A welcome page" />
      <PageHeader title="Welcome" />
      <Link href="/projects">Projects</Link>
    </>
  );
}
