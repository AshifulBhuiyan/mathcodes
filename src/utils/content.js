export async function getEntryBySlug(subject, slug) {
    try {
      const post = await import(`../content/${subject}/${slug}.mdx`);
      return {
        frontmatter: post.frontmatter,
        Content: post.default
      };
    } catch (err) {
      console.error('Failed to load post:', err);
      throw new Error('Post not found');
    }
  }
  