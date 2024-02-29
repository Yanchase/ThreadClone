import "../globals.css";

export default async function Home() {
  await fetchPosts();
  return (
    <>
      <h1 className="head-text text-left">Home</h1>
    </>
  );
}
