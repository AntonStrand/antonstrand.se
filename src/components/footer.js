import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import "../style/footer.css"

const Footer = () => {
  const { icons, site } = useStaticQuery(graphql`
    query FooterQuery {
      site {
        siteMetadata {
          location
          contact {
            github {
              link
              label
            }
            linkedin {
              link
              label
            }
            mail {
              link
              label
            }
          }
        }
      }
      icons: allFile(filter: { relativePath: { regex: "/icons/" } }) {
        nodes {
          name
          publicURL
        }
      }
    }
  `)

  const { location, contact } = site.siteMetadata

  const contacts = icons.nodes
    .filter(({ name }) => name !== "location")
    .map(icon => ({
      ...contact[icon.name],
      icon: icon.publicURL,
    }))

  const locationIcon = icons.nodes.find(({ name }) => name === "location")
    .publicURL

  return (
    <footer>
      <ul className='contact-list'>
        <li>
          <img className='icon' src={locationIcon} alt='Location icon' />
          <span className='label'>{location}</span>
        </li>
        {contacts.map(({ icon, link, label }) => (
          <li key={link}>
            <a href={link}>
              <img className='icon' src={icon} alt={`Icon for ${link}`} />
              <span className='label'>{label}</span>
            </a>
          </li>
        ))}
        <li>© {new Date().getFullYear()}, Anton Strand</li>
      </ul>
    </footer>
  )
}

export default Footer
