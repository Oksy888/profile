import Intro from '@/components/intro'
import NewsletterForm from '@/components/news-letter-form'
import RecentPosts from '@/components/posts-recent'

export default function Home() {
  // const content = `# This is markdown heading`
  return (
    <section className="py-24">
      <div className="container max-w-3xl">
        <Intro />
        <RecentPosts />
        <NewsletterForm />

        {/* <MDXRemote source={content} /> */}
      </div>
    </section>
  )
}
