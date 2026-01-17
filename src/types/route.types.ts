//  {
//     title: "User Management",
//     items: [
//       {
//         title: "Analytics",
//         url: "/analytics",
//       },
//     ],
//   },

export type Route = {
  title: string;
  items: {
    title: string;
    url: string;
  }[];
};
