import { ReactMarkdown } from 'react-markdown/lib/react-markdown'

export default function MarkdownTemplate({ props }) {
  const { title, tags, draft, summary, content } = props
  return `
    ---
    title: ${title}
    date: ${new Date().toISOString()}
    lastmod: ${new Date().toISOString()}
    tags: ${tags}
    draft: false
    summary: ${summary}
    layout: PostSimple
    bibliography: references-data.bib
    ---
    
    ## Contents
    
    A post on the new features introduced in v1.0. New features:
    
    <TOCInline toc={props.toc} exclude="Contents" toHeading={2} />
    ${content}
    `
}
