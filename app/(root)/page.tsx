import Image from "next/image";
import Link from "next/link";

const data = [
  {
    id: "1",
    title: "Why I started blog",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus, modi? It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.",
    author: "Md Ariful Islam",
    CreatedAt: "Feb 12, 2018",
    authorImage:
      "https://images.pexels.com/photos/19004684/pexels-photo-19004684/free-photo-of-model-in-sunglasses-and-leather-jacket.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    images:
      "https://images.pexels.com/photos/1752757/pexels-photo-1752757.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: "2",
    title: "Why I started blog",
    desc: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.",
    author: "Md Ariful Islam",
    CreatedAt: "Feb 12, 2018",
    authorImage:
      "https://images.pexels.com/photos/19004684/pexels-photo-19004684/free-photo-of-model-in-sunglasses-and-leather-jacket.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    images:
      "https://images.pexels.com/photos/1752757/pexels-photo-1752757.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: "2",
    title: "Why I started blog",
    desc: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.",
    author: "Md Ariful Islam",
    CreatedAt: "Feb 12, 2018",
    authorImage:
      "https://images.pexels.com/photos/19004684/pexels-photo-19004684/free-photo-of-model-in-sunglasses-and-leather-jacket.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    images:
      "https://images.pexels.com/photos/1752757/pexels-photo-1752757.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: "2",
    title: "Why I started blog",
    desc: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.",
    author: "Md Ariful Islam",
    CreatedAt: "Feb 12, 2018",
    authorImage:
      "https://images.pexels.com/photos/19004684/pexels-photo-19004684/free-photo-of-model-in-sunglasses-and-leather-jacket.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    images:
      "https://images.pexels.com/photos/1752757/pexels-photo-1752757.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: "2",
    title: "Why I started blog",
    desc: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.",
    author: "Md Ariful Islam",
    CreatedAt: "Feb 12, 2018",
    authorImage:
      "https://images.pexels.com/photos/19004684/pexels-photo-19004684/free-photo-of-model-in-sunglasses-and-leather-jacket.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    images:
      "https://images.pexels.com/photos/1752757/pexels-photo-1752757.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
];

const HomePage = () => {
  return (
    <main>
      <div className="w-full flex flex-col gap-8 px-5">
        {data.map((blog) => (
          <Link
            href={blog.id}
            key={blog.id}
            className=" border xl:flex drop-shadow-2xl rounded-xl border-gray-100 hover:shadow-md ">
            <div className=" w-full h-[300px] relative ">
              <Image
                src={blog.images}
                alt={blog.title}
                width={700}
                height={200}
                priority
                className="w-full h-full object-cover overflow-hidden rounded-xl"
              />
              <div className="absolute -bottom-5 right-5 rounded-full  w-16 h-16 border-2 shadow-lg z-10">
                <Image
                  src={blog.authorImage}
                  alt={blog.author}
                  width={50}
                  height={50}
                  className="object-cover overflow-hidden w-full h-full rounded-full"
                />
              </div>
            </div>
            <article className="p-5 flex flex-col gap-2.5">
              <h3 className="text-2xl font-semibold text-gray-600">
                {blog.title}
              </h3>
              <p className="text-lg text-gray-400">
                {blog.desc.substring(0, 200)}
              </p>
              <div className="mt-1 flex gap-3">
                <h5 className="text-lg font-medium text-gray-500">
                  BY {blog.author}
                </h5>
                <h5 className="text-lg font-medium text-gray-500">
                  BY {blog.CreatedAt}
                </h5>
              </div>
            </article>
          </Link>
        ))}
      </div>
    </main>
  );
};

export default HomePage;
