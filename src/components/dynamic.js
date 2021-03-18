import React from "react"
import { StaticQuery, graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const PostList = ({ data }) => (
	<StaticQuery
		query = {graphql`
			query PostItemsQuery{
			  	allPostItemsJson{
			  		edges{
			  			node{
			  				label
			  				link {
							    childImageSharp {
							    	gatsbyImageData(
							        	width: 200
							       	)
							    }
							}
			  			}
			  		}
			  	}    
  			}
		`}

		render = { data =>(
			<>
				<ul>{ getPostLabels(data)}</ul>
			</>
		)}
	/>
);

function getPostLabels( data ){

	console.log( data )
	const PostItemsArray = [];
	data.allPostItemsJson.edges.forEach( (item) => {
			const image = getImage(item.node.link)
			PostItemsArray.push( 
				<li key={item.node.label}>{item.node.label}
					<GatsbyImage image={image} alt={item.node.label} />
				</li>)
		}
	);

	return PostItemsArray;
}

export default PostList;
