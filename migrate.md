# Post Migration Discrepancy Log

This file tracks any issues, missing data, or manual adjustments made during the migration from `output/posts/*.md` to `content/news/posts/*.ts`.

| Post Slug                                        | Issue                                                                    | Resolution                                                |
| ------------------------------------------------ | ------------------------------------------------------------------------ | --------------------------------------------------------- |
| 2026-medicare-final-rule-rpm-ccm                 | Contains a table which is not supported by `NewsContentBlock`.           | Converted table to a list format in the `content` array.  |
| the-impact-of-telemonitoring-for-diabetes-type-2 | Metadata and references were overly long and academic for a news format. | Simplified content to focus on key findings and outcomes. |
