import { useRouter } from "next/router";
import Meta from "@/components/Meta";
import PageHeader from "@/components/PageHeader";
import Budget from "@/components/projects/budget/Budget";

export default function Project() {
  const router = useRouter();
  const { projectName } = router.query;

  return (
    <>
      <Meta title={projectName} description="A project page" />
      <PageHeader title={projectName} />
      <Budget />
    </>
  );
}
