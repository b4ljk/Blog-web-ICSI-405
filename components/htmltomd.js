import turndown from 'turndown'

const turndownService = new turndown({
  headingStyle: 'atx',
  codeBlockStyle: 'fenced',
  hr: '---',
  bulletListMarker: '-',
  emDelimiter: '*',
  strongDelimiter: '**',
  linkStyle: 'inlined',
  linkReferenceStyle: 'full',
  fence: '```',
  useBR: false,
  blankReplacement: function (content, node) {
    return node.isBlock ? '\n\n' : ''
  },
})

export default function htmlToMarkdown(html) {
  return turndownService.turndown(html)
}
