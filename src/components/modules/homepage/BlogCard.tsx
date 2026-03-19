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
import Link from "next/link";

export const title = "Image Card";

const price = faker.commerce.price({ min: 100_000, max: 500_000, dec: 0 });
const beds = faker.number.int({ min: 2, max: 5 });
const baths = faker.number.int({ min: 1, max: 3 });
const area = faker.number.int({ min: 200, max: 500 });

// {
//     "post_id": "249f2d5e-60c1-4bfc-b5df-0893486f6dbe",
//     "title": "post number one",
//     "content": "hello bangladeshi fullstach developers",
//     "authorId": "8mybP3o5lIysCCqh4K7YUEbEBMJeuFFl",
//     "thumbnail": null,
//     "isFeatured": false,
//     "tags": [
//         "developer",
//         "fullstack",
//         "mern"
//     ],
//     "views": 0,
//     "status": "PUBLISHED",
//     "createdAt": "2026-03-14T03:14:09.748Z",
//     "updatedAt": "2026-03-14T03:14:09.748Z",
//     "_count": {
//         "comments": 0
//     }
// }

export default function BlogCard({ post }: { post: Post }) {
  return (
    <Card className="w-full max-w-md overflow-hidden p-4">
      <CardHeader>
        <CardTitle>{post.title}</CardTitle>
        <CardDescription>{post.content}</CardDescription>
      </CardHeader>
      <CardContent className="p-0">
        {/** biome-ignore lint/performance/noImgElement: "Kibo UI is framework agnostic" */}
        <img alt={post?.thumbnail} src={post?.thumbnail} />
      </CardContent>
      <CardFooter className="flex items-center justify-between">
        <div className="flex items-center gap-2"></div>
        <Link href={`/blog/${post.post_id}`} className="outline p-2 rounded-xl">
          read..
        </Link>
      </CardFooter>
    </Card>
  );
}
