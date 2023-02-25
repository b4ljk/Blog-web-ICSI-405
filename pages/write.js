import { PageSEO } from '@/components/SEO'
import siteMetadata from '@/data/siteMetadata'
import React, { useMemo, useState } from 'react'
import dynamic from 'next/dynamic'
import 'react-quill/dist/quill.snow.css'

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
    </div>
  )
}
