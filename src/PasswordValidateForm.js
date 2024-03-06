import React from 'react'

const PasswordValidateForm = () => {

    const [validation,setValidation]=React.useState(false);
    const [value,setValue]=React.useState('');
    
    let rejex1=/[A-Z]/g;
    let rejex2=/[a-z]/g;
    let rejex3=/[0-9]/g;
    let rejex4=/.{8,}/g;
    function validateContent(){
        return (
            <div>
                <h2>password must contain the following:</h2>
                <p style={value.match(rejex1)?{background:"lightgreen"}:{}}>a capital letter</p>
                <p style={value.match(rejex2)?{background:"lightgreen"}:{}}>lowercase letter</p>
                <p style={value.match(rejex3)?{background:"lightgreen"}:{}}>a number</p>
                <p style={value.match(rejex4)?{background:"lightgreen"}:{}}>minimum 8 characters</p>
            </div>
        )
    }
    function handleChange(event){
        setValue(event.target.value);
    }
  return (
    <div>
        <form style={{display:"flex",flexDirection:"column"}}>
        <input type="email" name="email" placeholder="enter email" required/>
        <input type="password" pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" onClick={()=>setValidation(prew=>!prew)} onChange={handleChange} name="password" placeholder="enter password" required />
        <button type="submit">submit</button>
        {validation && validateContent()}
        </form>
    </div>

  )
}


export default PasswordValidateForm