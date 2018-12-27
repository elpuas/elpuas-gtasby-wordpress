import React, { Component } from "react"
import Link from "gatsby-link"
import PropTypes from "prop-types"
import Layout from '../components/layout'
import SEO from '../components/seo'

const defaultMedia = 'https://www.vietbet.eu/site/wp-content/uploads/2018/08/mondaynight.jpg';

class PostsTemplate extends Component {
    render() {
        const data = this.props.data
        console.log(data)
        return(
            <Layout>
                <SEO title="List Post" keywords={[`gatsby`, `WordPress`, `react`]} />

                <h1>Posts</h1>
                
                {data.allWordpressPost.edges.map(({node}) => (

                    <div key={node.slug} className={"post"} style={{ marginBottom: 50 }}>

                        <img src={ ( node.featured_media === null) ? defaultMedia : node.featured_media.source_url } alt={node.title} />

                        <Link to={'post/' + node.slug}>
                            <h3>{node.title}</h3>
                        </Link>

                        <div className={"post-content"} dangerouslySetInnerHTML={{__html: node.excerpt}} />

                        {node.date}

                    </div>
                ))}

            </Layout>
        )
    }
}

PostsTemplate.propTypes = {
    data: PropTypes.object.isRequired,
    edges: PropTypes.array,
}

export default PostsTemplate

export const pageQuery = graphql`
    query postsQuery{
        allWordpressPost{
            edges{
                node{
                    id
                    title
                    excerpt
                    slug
                    date(formatString: "MMMM DD, YYYY")
                    featured_media {
                        source_url
                    }
                }
            }
        }
    }
`