import { MarkdownInstance } from "astro";
import type { PostMetada } from "../utils/interfaces";

export const sortPostByDate = (
  current: MarkdownInstance<PostMetada>,
  prev: MarkdownInstance<PostMetada>
) => {
  const dateA = new Date(current.frontmatter.date).getTime();
  const dateB = new Date(prev.frontmatter.date).getTime();

  return dateB - dateA;
};

export const formatDate = (date: string) => {
  const _date = new Date(date);
  return new Intl.DateTimeFormat("es", { dateStyle: "medium" }).format(_date);
};
