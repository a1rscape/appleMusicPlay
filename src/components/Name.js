import React from 'react'

export default function Name({ store }) {
  return (
    <p className='music__name'>{store.title[0].title}</p>
  )
}
