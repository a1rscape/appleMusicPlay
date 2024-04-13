import React from 'react'

export default function Author({ store }) {
  return (
    <p className='author__name'>{store.authors[0].author}</p>
  )
}
