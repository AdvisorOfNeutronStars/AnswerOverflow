import { appRouter } from "@answeroverflow/api";
import { createSSGContext } from "@answeroverflow/api/src/router/context";
import { Message } from "@answeroverflow/ui";
import { createProxySSGHelpers } from "@trpc/react-query/ssg";
import Head from "next/head";
import superjson from "superjson";
import { trpc } from "../utils/trpc";

export default function Home() {
  const postQuery = trpc.messages.all.useQuery();
  if (postQuery.status !== "success") {
    // won't happen since we're using `fallback: "blocking"`
    return <>Loading...</>;
  }
  const { data } = postQuery;

  return (
    <>
      <Head>
        <title>Answer Overflow</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex h-screen flex-col items-center bg-gradient-to-b from-[#2e026d] to-[#15162c] text-white">
        <div>
          {data.map((message) => (
            <Message message={message} key={message.id} />
          ))}
        </div>
      </main>
    </>
  );
}

export async function getStaticProps() {
  const ssg = createProxySSGHelpers({
    router: appRouter,
    ctx: await createSSGContext(),
    transformer: superjson, // optional - adds superjson serialization
  });
  // prefetch `post.byId`
  await ssg.messages.all.prefetch();
  return {
    props: {
      trpcState: ssg.dehydrate(),
    },
    revalidate: 1,
  };
}