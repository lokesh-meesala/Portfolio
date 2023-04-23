import React from 'react'
import Typewriter from "typewriter-effect";

function Text() {
  return (
    <Typewriter
      options={{
        strings: [
          "Software Engineer",
          "Full Stack Web Developer",
          "Python Developer"
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 40,
        wrapperClassName:"typeWriterText",
      }}
    />
  )
}

export default Text