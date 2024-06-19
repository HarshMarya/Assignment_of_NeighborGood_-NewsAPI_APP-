import React from 'react'

function NewsItem({title,summary,src,url,titleWords}) {

    // Function for to keep title words limited
    const limitedTitle = (title, titleWords) => {
        const words = title.split(' ');
        return words.slice(0, titleWords).join(' ') + (words.length > titleWords ? '...' : '');

    }
    const displayTitle = limitedTitle(title,titleWords)
    
    return (
        <div className="card">
            <img src={src==null?'https://answers-afd.microsoft.com/static/images/image-not-found.jpg':src} alt="News Image" className="news-image" />
            {/* <span className='text-sm text-gray-500 block text-right px-8 py-2'>{newsTime}</span> */}
            <div className="card-content">
                <h2 className="card-title text-xl">{displayTitle}</h2>
                <p className="card-description">{summary?`${summary.slice(0,200)}...`:"We sincerely apologize for the inconvenience you experienced. Unfortunately, due to technical issues, our site was temporarily unavailable during that time."}</p>
                <a href={url} className="read-more text-blue-600 underline cursor-pointer" target='_blank'>Read More</a>
            </div>
        </div>
    )
}

export default NewsItem
