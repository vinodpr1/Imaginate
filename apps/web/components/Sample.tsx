import React from "react";

const Sample = () => {
  const images = [
    {
      id: 1,
      image:
        "https://photoai.com/cdn-cgi/image/format=jpeg,fit=cover,width=1024,height=1536,quality=85/https://r2-us-west.photoai.com/1726208563-8fa7591e07931c5d2c95a751f8a50cc9-2.png",
    },
    {
      id: 2,
      image:
        "https://photoai.com/cdn-cgi/image/format=jpeg,fit=cover,width=1024,height=1536,quality=85/https://r2-us-west.photoai.com/1726198685-0232d4e95fc2f9d50fc9f2c764914cdd-3.png",
    },
    {
      id: 3,
      image:
        "https://photoai.com/cdn-cgi/image/format=jpeg,fit=cover,width=1024,height=1536,quality=85/https://r2-us-west.photoai.com/1725049333-dfe08305dc5e7c58aa07beafe50c5295-1.png",
    },
    {
      id: 4,
      image:
        "https://photoai.com/cdn-cgi/image/format=jpeg,fit=cover,width=1024,height=1536,quality=85/https://r2-us-west.photoai.com/1726199462-2a216e0f225e161a2badeb14e6c33a0e-1.png",
    },
    {
      id: 5,
      image:
        "https://photoai.com/cdn-cgi/image/format=jpeg,fit=cover,width=1024,height=1536,quality=85/https://r2-us-west.photoai.com/1726186914-19bd7efad6ce2e792ba65444c529c20a-1.png",
    },
    {
      id: 6,
      image:
        "https://photoai.com/cdn-cgi/image/format=jpeg,fit=cover,width=1024,height=1536,quality=85/https://r2-us-west.photoai.com/1726207428-3fb03764175160651857a98b12a9a004-4.png",
    },
    {
      id: 7,
      image:
        "https://photoai.com/cdn-cgi/image/format=jpeg,fit=cover,width=1024,height=1536,quality=85/https://r2-us-west.photoai.com/1726211442-bc70d54197030807e278387bcf76531a-2.png",
    },
    {
      id: 8,
      image:
        "https://photoai.com/cdn-cgi/image/format=jpeg,fit=cover,width=1024,height=1536,quality=85/https://r2-us-west.photoai.com/1726202468-454d107fbd94ee910c48c72e0e53ee74-3.png",
    },
  ];
  return (
    <section id="examples" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          Created with Imaginate
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {images.map((image, index) => (
            <div
              key={image.id}
              className="aspect-square rounded-lg overflow-hidden"
            >
              <img
                src={image.image}
                alt={`AI Generated Image ${index}`}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Sample;
