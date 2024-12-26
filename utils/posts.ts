import type { Category, Post } from '~/types/graphql';

export function getCategories(post: Post) {
  return post.categories?.nodes.filter((category: Category) => category.name !== 'Uncategorized') || [];
}
