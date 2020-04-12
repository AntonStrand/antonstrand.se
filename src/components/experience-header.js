import React from "react"
import "../style/experience.css"

const ExperienceHeader = ({ title, period, children }) => (
  <div className='experience-header'>
    <span className='logotype'>{children}</span>
    <h3 className='title'>{title}</h3>
    <h4 className='period'>{period}</h4>
  </div>
)

export default ExperienceHeader
