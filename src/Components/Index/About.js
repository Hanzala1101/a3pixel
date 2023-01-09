import React from 'react'

export default function About(props) {
    var classnames=require('classnames');
  return (
    <li className={classnames(props.Aboutstyle)}><img src={props.Aboutlogo} />
    <p><h3>{props.AboutTitle}</h3>{props.Aboutdec}</p>
</li>
  )
}
