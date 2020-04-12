import React from "react"
import PropTypes from "prop-types"
import AnimatedChar from "./animated-char"

const AnimatedText = props => (
  <span style={{ display: "inline-block" }}>
    {props.children
      .split("")
      .map((children, key) => ({ ...props, children, key }))
      .map(AnimatedChar)}
  </span>
)

AnimatedText.propTypes = {
  children: PropTypes.string.isRequired,
}

export default AnimatedText
