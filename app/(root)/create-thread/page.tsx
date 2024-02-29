import PostThreads from "@/components/forms/PostThreads";
import { fetchUser } from "@/lib/actions/user.actions";
import { currentUser } from "@clerk/nextjs";

async function Page() {
  const user = await currentUser();
  const userInfo = await fetchUser(user.id);
  if (!user) console.log("current user not exist");
  if (!userInfo) return <h1 className="head-text">Create Threads</h1>;
}

export default Page;
