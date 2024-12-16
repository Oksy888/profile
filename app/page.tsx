import Intro from '@/components/intro'
import RecentPosts from '@/components/posts-recent'
import { MDXRemote } from 'next-mdx-remote/rsc'

export default function Home() {
  // const content = `# This is markdown heading`
  return (
    <section className="py-24">
      <div className="container max-w-3xl">
        <Intro />
        <RecentPosts />

        {/* <MDXRemote source={content} /> */}
      </div>
    </section>
  )
}
