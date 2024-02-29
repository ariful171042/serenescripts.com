import Image from "next/image";
import React from "react";

const blogs = {
  title: "Exploring the Wonders of Machu Picchu",
  sections: [
    {
      sectionName: "Introduction",
      sectionDetails:
        "Embark on a journey through the ancient ruins of Machu Picchu, nestled high in the Andes mountains of Peru. Discover the history, architecture, and mystique of this UNESCO World Heritage site.",
    },
    {
      sectionName: "Unraveling the Mystery",
      sectionDetails:
        "The history of Machu Picchu dates back to the 15th century when it was built by the Inca civilization under the reign of Emperor Pachacuti. However, the purpose of this remarkable site remains shrouded in mystery.",
    },
    {
      sectionName: "Architectural Marvels",
      sectionDetails:
        "What sets Machu Picchu apart is its extraordinary architectural design, seamlessly integrated into the natural contours of the mountain terrain. The site is comprised of well-preserved stone structures, including temples, palaces, terraces, and irrigation systems.",
    },
    {
      sectionName: "Spiritual Significance",
      sectionDetails:
        "For the Incas, Machu Picchu held immense spiritual significance, with its layout and orientation aligned with astronomical phenomena such as solstices and equinoxes. The Intihuatana stone, often referred to as the 'Hitching Post of the Sun,' served as a celestial observatory and ritual site.",
    },
    {
      sectionName: "Preservation Efforts",
      sectionDetails:
        "Despite centuries of exposure to the elements and occasional seismic activity, Machu Picchu has remarkably survived the test of time. However, in recent years, concerns have been raised about the impact of tourism on the site's fragile ecosystem and structures.",
    },
    {
      sectionName: "Conclusion",
      sectionDetails:
        "Visiting Machu Picchu is a truly awe-inspiring experience that allows travelers to immerse themselves in the rich history and natural beauty of the Andes. Whether you're trekking along the Inca Trail or taking the scenic train ride from Cusco, the journey to this ancient citadel is sure to leave a lasting impression.",
    },
  ],
  createdAt: "2024-02-29T08:00:00Z",
  updatedAt: "2024-02-29T10:30:00Z",
  publishedDate: "2024-03-15",
  author: {
    name: "Alexandra Carter",
    description:
      "An avid traveler and historian with a passion for uncovering the world's hidden gems.",
    authorImage: "https://example.com/author-image.jpg",
  },
};

const data = [
  {
    id: "1",
    title:
      "Embark on a journey through the ancient ruins of Machu Picchu, nestled high in the Andes mountains of Peru. Discover the history, architecture, and mystique of this UNESCO World Heritage site.",
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

const BlogDetailsPage = ({ params }: { params: { id: string } }) => {
  return (
    <div className="sp wrapper grid grid-cols-6 gap-10">
      <div className=" col-span-4">
        <div className="w-full h-[400px] overflow-hidden rounded-xl relative ">
          <Image
            src={
              "https://images.pexels.com/photos/5430756/pexels-photo-5430756.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            }
            width={1920}
            height={1080}
            alt="image"
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-5 left-10">
            <h5 className="text-xl ">Newest Blog 4min</h5>
            <h2 className="text-3xl font-semibold">
              The Art of Home Transformation
            </h2>
          </div>
          <div className="absolute bottom-5 right-20 flex gap-5">
            <div className="w-[60px] h-[60px] overflow-hidden rounded-xl border-2">
              <Image
                src={
                  "https://images.pexels.com/photos/19004684/pexels-photo-19004684/free-photo-of-model-in-sunglasses-and-leather-jacket.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                }
                alt="profile Image"
                width={60}
                height={60}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="">
              <h5 className="text-xl">Written By</h5>
              <h3 className="text-2xl font-semibold">MD Ariful Islam</h3>
            </div>
          </div>
        </div>
        <div className="mt-3 flex flex-col gap-5">
          <h2>{blogs.title}</h2>
          {blogs?.sections?.map((section) => (
            <div className="flex flex-col gap-2.5" key={section.sectionName}>
              <h3 className="text-xl font-semibold tracking-wide">
                {section.sectionName}
              </h3>
              <p className="text-lg ">{section.sectionDetails}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="col-span-2">
        <h2 className="text-3xl font-semibold  pb-3">Latest Post</h2>
        <div className=" flex flex-col gap-5 ">
          {data.map((blog) => (
            <div className="grid grid-cols-5 gap-5" key={blog.id}>
              <div className="col-span-2 w-[180px] h-[120px] overflow-hidden rounded-xl">
                <Image
                  src={blog.images}
                  alt={blog.title}
                  width={480}
                  height={320}
                  className="w-full h-full"
                  priority
                />
              </div>
              <div className="col-span-3">
                <h6 className="text-md font-semibold">1 Min Age</h6>
                <h3 className="text-lg">{blog.title.substring(1, 60)}</h3>
                <div className="flex gap-2.5 items-center ">
                  <div className="w-[40px] h-[40px] rounded-full overflow-hidden">
                    <Image
                      src={blog.authorImage}
                      alt={blog.author}
                      width={40}
                      height={40}
                      priority
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-semibold">{blog.author}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogDetailsPage;
