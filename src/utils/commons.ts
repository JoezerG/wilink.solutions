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
  const formated = new Intl.DateTimeFormat("es", { dateStyle: "medium" });
  return formated.format(_date);
};
