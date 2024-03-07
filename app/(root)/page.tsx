import "../globals.css";
import { fetchPosts } from "@/lib/actions/thread.actions";
import { currentUser } from "@clerk/nextjs";

export default async function Home() {
  const result = await fetchPosts(1, 30);
  const user = await currentUser();
  return (
    <>
      <h1 className="head-text text-left">Home</h1>
      <section className="flex flex-col gap-10 mt-9">
        {result.posts.length === 0 ? (
          <p className="no-result">No Threads Found</p>
        ) : (
          <>
            {result.posts.map((post) => (
              <ThreadCard
                key={post._id}
                id={post._id}
                currentUserId={user?.id}
                parentId={post.parentId}
                content={post.content}
                author={post.author}
                community={post.community}
                createAt={post.createAt}
                comments={post.comments}
              ></ThreadCard>
            ))}
          </>
        )}
      </section>
    </>
  );
}
