import React from 'react'
import { FormContent } from './validationData'
import "./validationContent.css"
const ValidationContent = ({inputValues}) => {
    const {username,email,password}=inputValues;
  return (
    <div className="validation-content">
        {
            FormContent.map((content,index)=>{
                if(content.regex && content.name==="username"){
                    return <p key={index}
                     className={username.match(content.regex)?"checked":""}>{content.text}</p>
                }
                if(content.regex && content.name==="email"){
                    return <p key={index}
                    className={email.match(content.regex)?"checked":""}>{content.text}</p>
                }
                if(content.regex && content.name==="password"){
                    return <p key={index}
                    className={password.match(content.regex)?"checked":""}>{content.text}</p>
                }
                return <h2 key={index}>{content.text}</h2>
            })
        }
    </div>
  )
}

export default ValidationContent