import * as React from 'react';
import Layout from '../components/layout';
import { graphql, useStaticQuery } from 'gatsby';
import ProjectPreview from '../components/project-preview';


// markup
const IndexPage = () => {
  const data = useStaticQuery(graphql`
  {
    allSanityProject {
      edges {
        node {
          title
          description
          slug {
            current
          }
          url
          image {
            asset {
              fluid {
                ...GatsbySanityImageFluid
              }
            }
          }
        }
      }
    }
  }
`);
  const projects = data.allProjectsJson.edges;
  return (
    <Layout>
      {projects.map(({ node: project }) => {
        const title = project.title;
        const description = project.description;
        const slug = project.slug;
        const imageData = project.image.childImageSharp.fluid;

        return (
          <ProjectPreview
            // key={`preview-${project.slug}`}
            // key={`preview-${project.slug.current}`}
            title={title}
            description={description}
            slug={slug}
            imageData={imageData}
            // slug={project.slug.current}
            // imageData={project.image.asset.fluid}
          />
        )
      })}
    </Layout>
    // <main style={pageStyles}>
    //   <title>Home Page</title>
    //   <h1 style={headingStyles}>
    //     Hello World!
    //     <br />
    //     <span style={headingAccentStyles}>— you just made a Gatsby site! </span>
    //   </h1>
    //   <p style={paragraphStyles}>
    //     Edit <code style={codeStyles}>src/pages/index.js</code> to see this page
    //     update in real-time.{" "}
    //   </p>

    //   {/* <ul style={listStyles}>
    //     <li style={docLinkStyle}>
    //     </li>
    //     {links.map(link => (
    //       <li style={{ ...listItemStyles, color: link.color }}>
    //         <span>
    //           <p style={descriptionStyle}>{link.description}</p>
    //         </span>
    //       </li>
    //     ))}
    //   </ul> */}
    // </main>
  )
}

export default IndexPage
