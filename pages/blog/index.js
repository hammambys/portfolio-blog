import { PostCard, Categories, PostWidget } from '../../components';
import { getPosts } from '../../services';

export default function Blog({ posts }) {
  return (
    <div className="container mx-auto px-10 mb-8 text-carafe">
      {/*<FeaturedPosts />*/}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-8 col-span-1 border-2 border-carafe dark:border-sand_dollar">
          {posts.map((post, index) => (
            <PostCard key={index} post={post.node} />
          ))}
        </div>
        <div className="lg:col-span-4 col-span-1">
          <div className="lg:sticky relative top-8">
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
