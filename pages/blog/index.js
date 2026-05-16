import { PostCard, Categories, PostWidget } from '../../components';
import { getPosts } from '../../services';

export default function Blog({ posts }) {
  return (
    <div className="container mx-auto px-6 md:px-12 mb-20 text-carafe dark:text-sand_dollar">
      <div className="flex flex-col items-center mb-20 pt-10">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 relative text-center">
          The Blog
          <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-20 h-1.5 bg-brown rounded-full"></span>
        </h1>
        <p className="text-lg md:text-xl text-carafe/60 dark:text-sand_dollar/60 text-center max-w-2xl leading-relaxed">
          Exploring the intersection of software engineering, design, and technology.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-8 col-span-1">
          <div className="space-y-8">
            {posts.map((post, index) => (
              <PostCard key={index} post={post.node} />
            ))}
          </div>
        </div>
        <div className="lg:col-span-4 col-span-1">
          <div className="lg:sticky relative top-24">
            <PostWidget />
            <Categories />
          </div>
        </div>
      </div>
    </div>
  );
}

// Fetch data at build time
export async function getStaticProps() {
  const posts = (await getPosts()) || [];

  return {
    props: { posts },
  };
}
