import { MarkdownInstance } from "astro";
import { DateTime } from "luxon";
import type { PostMetada } from "../utils/interfaces";

export const sortPostByDate = (
  current: MarkdownInstance<PostMetada>,
  prev: MarkdownInstance<PostMetada>
) => {
  const dateA = DateTime.fromFormat(
    current.frontmatter.date,
    "yyyy-MM-dd"
  ).toMillis();
  const dateB = DateTime.fromFormat(
    prev.frontmatter.date,
    "yyyy-MM-dd"
  ).toMillis();

  return dateB - dateA;
};

export const formatDate = (date: string) => {
  return DateTime.fromFormat(date, "yyyy-MM-dd").toLocaleString(
    DateTime.DATE_MED_WITH_WEEKDAY,
    {
      locale: "es",
    }
  );
};
