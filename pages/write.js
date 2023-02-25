import { PageSEO } from '@/components/SEO'
import siteMetadata from '@/data/siteMetadata'
import React, { useMemo, useState } from 'react'
import dynamic from 'next/dynamic'
import 'react-quill/dist/quill.snow.css'
import htmlToMarkdown from '@/components/htmltomd'

export default function Write() {
  const ReactQuill = useMemo(() => dynamic(() => import('react-quill'), { ssr: false }), [])
  const [value, setValue] = useState('')
  const modules = {
    toolbar: [
      [{ header: [1, 2, 3, false] }],
      [
        'header',
        'font',
        'size',
        'bold',
        'italic',
        'underline',
        'align',
        'strike',
        'script',
        'blockquote',
        'background',
        'list',
        'bullet',
        'indent',
      ],
      [{ list: 'ordered' }, { list: 'bullet' }, { indent: '-1' }, { indent: '+1' }],
      ['link', 'image', 'code-block'],
      ['clean'],
    ],
  }

  const formats = [
    'font',
    'size',
    'bold',
    'italic',
    'underline',
    'strike',
    'color',
    'background',
    'script',
    'header',
    'blockquote',
    'code-block',
    'indent',
    'list',
    'direction',
    'align',
    'link',
    'image',
    'video',
    'formula',
    'color',
  ]
  // replace value if there is <pre> tag
  const replaceValue = value
    .replace(/<pre class="ql-syntax" spellcheck="false">/g, '<pre><code>')
    .replace(/<\/pre>/g, '</code></pre>')

  const downloadmd = () => {
    const element = document.createElement('a')
    const file = new Blob([htmlToMarkdown(replaceValue)], { type: 'text/plain' })
    element.href = URL.createObjectURL(file)
    element.download = 'file.md'
    document.body.appendChild(element) // Required for this to work in FireFox
    element.click()
  }

  // when leaving page, save to local storage
  React.useEffect(() => {
    const data = localStorage.getItem('content')
    if (data) {
      setValue(data)
    }
  }, [])

  React.useEffect(() => {
    console.count('render')
    localStorage.setItem('content', value)
    return () => {
      console.count('unmount')
      localStorage.removeItem('content')
    }
  }, [value])

  return (
    <div>
      <PageSEO title={siteMetadata.title} description={siteMetadata.description} />
      <ReactQuill
        theme="snow"
        modules={modules}
        formats={formats}
        value={value}
        onChange={setValue}
      />
      <button onClick={downloadmd}>download</button>
    </div>
  )
}
