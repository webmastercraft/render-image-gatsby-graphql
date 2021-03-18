import React from "react";

import { StaticImage } from "gatsby-plugin-image";

export default function StaticImg() {
 return (
   <StaticImage
     src="https://placekitten.com/400/300"
     alt="A dinosaur"
     placeholder="blurred"
     layout="fixed"
     width={300}
     height={200}
   />
 )
}