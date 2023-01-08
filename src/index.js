import React from 'react'

const button = {
  primary: {
    backgroundColor: "#008CBA",
    border: "none",
    color: "white",
    padding: "15px 32px",
    textAlign: "center",
    textDecoration: "none",
    display: "inline-block",
    fontSize: "16px",
    margin: "4px 2px",
    cursor: "pointer",
  },
  dashed: {
    backgroundColor: "white",
    color: "black",
    border: "3px dashed green",
    padding: "15px 32px",
    textAlign: "center",
    textDecoration: "none",
    display: "inline-block",
    fontSize: "16px",
    margin: "4px 2px",
    cursor: "pointer",
  },
  link: {
    backgroundColor: "white",
    color: "black",
    border: "2px solid #4CAF50",
    padding: "16px 32px",
    textAlign: "center",
    textDecoration: "none",
    display: "inline-block",
    fontSize: "16px",
    margin: "4px 2px",
    transitionDuration: "0.4s",
    cursor: "pointer",
  },
  text: {
    backgroundColor: "black",
    border: "none",
    color: "white",
    padding: "15px 32px",
    textAlign: "center",
    textDecoration: "none",
    display: "inline-block",
    fontSize: "16px",
    margin: "4px 2px",
    cursor: "pointer",
    opacity: "0.8",
    cursor: "not - allowed",
  }
}

export const Button = ({ type, text }) => {
  if (type === 'primary') {
    return <button style={button.primary}>{text}</button>
  } else if (type === 'dashed') {
    return <button style={button.dashed}>{text}</button>
  } else if (type === 'link') {
    return <button style={button.link}>{text}</button>
  } else if (type === 'text') {
    return <button style={button.text}>{text}</button>
  }
}
