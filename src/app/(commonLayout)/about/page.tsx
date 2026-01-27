export const dynamic = "force-dynamic";

const AboutPage = async () => {
  await new Promise((resolve) => setTimeout(resolve, 4000));
  // throw new Error("something went wrong..");
  return <div className="text-3xl">
    <h1 className="text-3xl text-blue-500 font-bold text-center">Hello Prisma Blog This is  about Route.....🙂</h1>
  </div>;
};

export default AboutPage;
