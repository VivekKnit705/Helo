import React, { useState, useEffect } from 'react'
import axios from 'axios'

function Card() {
    const [posts, setPost] = useState([]);

    useEffect(() => {
        axios
            .get(`https://my-json-server.typicode.com/Codeinwp/front-end-internship-api/posts`)
            .then(res => {
                console.log(res.data)
                setPost(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])


    return (
        <div>
            {/* <input type="text" value={id} onChange={e => setId(e.target.value)} />
			<button type="button" onClick={handleClick}>Fetch Post</button>
			<div>{post.title}</div> */}
            <ol>
                {posts.map(post => (
                    <div className="card">
                        <div className="card__body">
                            <img src={post.thumbnail.large} class="card__image" />
                            <h2 className="card__title">{post.title}</h2>
                            <p className="card__description">{post.content}</p>
                            <p>{post.author.name}</p>
                            <p>{post.author.role}</p>
                            <p>{post.date}</p>

                        </div>
                    </div>
                ))}
            </ol>
        </div>
    )
}

export default Card;