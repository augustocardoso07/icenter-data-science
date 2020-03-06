import React from 'react'
import { Link } from 'gatsby'

const PostThumb = props => {
    return (
        <article className="6u 12u$(xsmall) work-item">
            <Link to={props.slug} className="image fit">
                <img alt="thumb" src={props.image} />
            </Link>
            <Link to={props.slug}>
                <h3>{props.title}</h3>
            </Link>
            <Link to={props.slug}>
                <p>{props.description}</p>
            </Link>
        </article>
    )
}

export default PostThumb
