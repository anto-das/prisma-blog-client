import { Button } from "@/components/ui/button";
import Link from "next/link";

const Analytics = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <Button asChild>
        <Link href={"/dashboard/analytics/monthly"}>monthly</Link>
      </Button>
      <Button asChild>
        <Link href={"/dashboard/analytics/weekly"}>weekly</Link>
      </Button>
      {
        children
      }
    </div>
  );
};

export default Analytics;
