import rss from "@astrojs/rss";
import type { APIContext } from "astro";
import { BLOG, SITE } from "@consts";
import { getPosts } from "@lib/content";

export async function GET(context: APIContext) {
  const posts = await getPosts();
  return rss({
    title: `${SITE.TITLE} · ${BLOG.TITLE}`,
    description: BLOG.DESCRIPTION,
    site: context.site ?? SITE.SOURCE_URL,
    items: posts.map((post) => ({
      title: post.data.title,
      description: post.data.description,
      pubDate: post.data.date,
      link: `/blog/${post.id}/`,
    })),
  });
}
