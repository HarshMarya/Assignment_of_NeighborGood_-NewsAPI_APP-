import React, { useEffect, useState } from 'react'
import NewsItem from './NewsItem'

function NewsBoard({category}) {
    const [article, setArticle] = useState([])

    useEffect(() => {
        let key = "71676931487e4cd1bd152eb118a76756"
        let nowDate ='2024-06-19'
        let prevdate = "2024-06-18"
        let keyword= "bitcoin"
        let source = "techcrunch"
        let sortBy = 'popularity'
        // let months = [0,1,2,3,4,5,6,7,8,9,10,11]
        // let newDate = new Date()
        // console.log(newDate)
        // let url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${key}`
        // let url = `https://newsapi.org/v2/everything?q=tesla&from=${date}&sortBy=publishedAt&category=${category}&apiKey=${key}`
        let url = `https://newsapi.org/v2/everything?source=${source}&q=${keyword}&from=${prevdate}&to=${nowDate}&sortBy=${sortBy}&apiKey=${key}`

         fetch(url)
            .then(response => response.json())
            .then(data => setArticle(data.articles))
            // .then(json => console.log(json.articles))
            .catch(err => console.log(err))
    }, [category])

    return (
        <div>
            <h2 className='text-center text-3xl font-bold my-10'>Latest News</h2>

            <div className='flex flex-row flex-wrap gap-6 justify-center'>
                {
                    article.map((news, index) =>
                        <NewsItem key={index}
                            title={news.title}
                            summary={news.description}
                            src={news.urlToImage}
                            url={news.url}
                            time={news.publishedAt}
                            titleWords={8}
                        />
                    )
                }
            </div>
        </div>
    )
}

export default NewsBoard
