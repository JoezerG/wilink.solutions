import { MarkdownInstance } from "astro";
import type { PostMetada } from "../utils/interfaces";

export function sortPostByDate(
  current: MarkdownInstance<PostMetada>,
  prev: MarkdownInstance<PostMetada>
) {
  const dateA = new Date(current.frontmatter.date).getTime();
  const dateB = new Date(prev.frontmatter.date).getTime();

  return dateB - dateA;
}

export function formatDate(date: string) {
  const _date = new Date(date);
  const formated = new Intl.DateTimeFormat("es", { dateStyle: "medium" });
  return formated.format(_date);
}

export function filterPostByTag(
  post: MarkdownInstance<PostMetada>,
  tag: string
) {
  const tags = post.frontmatter.tags.split(",").map((t) => t.toUpperCase());
  return tags.indexOf(tag.toUpperCase()) >= 0;
}

export function filterCategories(
  category: string,
  index: number,
  self: string[]
) {
  return self.indexOf(category) === index;
}
