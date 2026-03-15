import { faker } from "@faker-js/faker";
import { Bath, Bed, Maximize } from "lucide-react";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Post } from "@/types";

export const title = "Image Card";

const price = faker.commerce.price({ min: 100_000, max: 500_000, dec: 0 });
const beds = faker.number.int({ min: 2, max: 5 });
const baths = faker.number.int({ min: 1, max: 3 });
const area = faker.number.int({ min: 200, max: 500 });

export default function BlogCard({ post }: { post: Post }) {
  return (
    <Card className="w-full max-w-md overflow-hidden p-4">
      <CardHeader>
        <CardTitle>3-Bedroom House</CardTitle>
        <CardDescription>
          A luxurious 3-bedroom house with a modern design.
        </CardDescription>
      </CardHeader>
      <CardContent className="p-0">
        {/** biome-ignore lint/performance/noImgElement: "Kibo UI is framework agnostic" */}
        <img alt={post?.thumbnail} src={post?.thumbnail} />
      </CardContent>
      <CardFooter className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-2 rounded-full border px-4 py-2">
            <Bed className="h-4 w-4" />
            <span className="text-sm font-medium">{beds}</span>
          </div>
          <div className="flex items-center gap-2 rounded-full border px-4 py-2">
            <Bath className="h-4 w-4" />
            <span className="text-sm font-medium">{baths}</span>
          </div>
          <div className="flex items-center gap-2 rounded-full border px-4 py-2">
            <Maximize className="h-4 w-4" />
            <span className="text-sm font-medium">{area}m²</span>
          </div>
        </div>
        <p className="text-2xl font-bold">${Number(price).toLocaleString()}</p>
      </CardFooter>
    </Card>
  );
}
