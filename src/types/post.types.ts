export interface Post {
  post_id: string;
  title: string;
  content: string;
  authorId: string;
  thumbnail: string;
  isFeatured: boolean;
  tags: string[];
  views: number | string;
  status: PostStatus;
  createdAt: string;
  updatedAt: string;
}

enum PostStatus {
  DRAFT,
  PUBLISHED,
  ARCHIVED,
}

// {
//     "post_id": "95068225-c4e2-48b2-b113-550fac456796",
//     "title": "post number four",
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
//     "createdAt": "2026-03-15T17:11:42.814Z",
//     "updatedAt": "2026-03-15T17:11:42.814Z"
// }
