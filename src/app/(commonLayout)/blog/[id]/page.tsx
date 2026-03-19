import React from "react";
import { string } from "zod";

const Page = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;
  return <div>This is dynamic route blog id: {id}</div>;
};

export default Page;
