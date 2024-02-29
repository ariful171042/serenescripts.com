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

const  blogs = [
  {
    "title": "Exploring the Wonders of Machu Picchu",
    "description": "Embark on a journey through the ancient ruins of Machu Picchu, nestled high in the Andes mountains of Peru. Discover the history, architecture, and mystique of this UNESCO World Heritage site.",
    "createdAt": "2024-02-29T08:00:00Z",
    "updatedAt": "2024-02-29T10:30:00Z",
    "publishedDate": "2024-03-15",
    "author": {
      "name": "Alexandra Carter",
      "description": "An avid traveler and historian with a passion for uncovering the world's hidden gems.",
      "authorImage": "https://example.com/author-image.jpg"
    }
  },
  {
    "title": "The Art of Bonsai: Cultivating Tranquility in Tiny Trees",
    "description": "Delve into the ancient Japanese art of bonsai cultivation, where miniature trees are meticulously shaped and nurtured to embody nature's beauty and tranquility.",
    "createdAt": "2024-02-15T10:00:00Z",
    "updatedAt": "2024-02-18T14:20:00Z",
    "publishedDate": "2024-03-01",
    "author": {
      "name": "Hiroshi Tanaka",
      "description": "A bonsai master with decades of experience in the art of cultivating miniature trees.",
      "authorImage": "https://example.com/author-image-hiroshi.jpg"
    }
  },
  {
    "title": "The Science of Sleep: Unlocking the Secrets of a Restful Night",
    "description": "Dive into the fascinating world of sleep science, exploring the mechanisms behind restorative sleep and practical tips for improving sleep quality.",
    "createdAt": "2024-01-20T12:00:00Z",
    "updatedAt": "2024-01-22T15:45:00Z",
    "publishedDate": "2024-02-05",
    "author": {
      "name": "Dr. Sarah Johnson, PhD",
      "description": "A sleep researcher and neuroscientist dedicated to unraveling the mysteries of the sleeping brain.",
      "authorImage": "https://example.com/author-image-sarah.jpg"
    }
  }
]


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
