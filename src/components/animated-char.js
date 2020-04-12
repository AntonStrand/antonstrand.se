import React from "react"
import PropTypes from "prop-types"

const isWhiteSpace = char => /\s/i.test(char)

const AnimatedChar = ({ children, ...props }) => (
  <span {...props}>
    {isWhiteSpace(children) ? (
      <span {...props}>{children}</span>
    ) : (
      <span className='animated-char' {...props}>
        {children}
      </span>
    )}
  </span>
)

AnimatedChar.propTypes = {
  children: PropTypes.string.isRequired,
}

export default AnimatedChar
