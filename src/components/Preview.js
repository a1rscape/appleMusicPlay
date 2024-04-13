import React from 'react'

export default function Preview({ store }) {
    return (
        <div className='music__image'>
            <img src={store.images[0].src} />
        </div>
    )
}
