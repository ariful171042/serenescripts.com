import { cookies } from "next/headers";

const BlogPage = () => {
  const getCokkie = cookies().getAll();
  console.log(getCokkie);

  return <div>BlogPage</div>;
};

export default BlogPage;
