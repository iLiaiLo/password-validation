import {useEffect, useState} from 'react'
import Form from '../form/Form';
import ValidationContent from '../validation/ValidationContent';

const ValidationForm = () => {

    const [displayValidationContent,setDisplayValidationContent]=useState(false);
    const [inputValues,setInputValues]=useState({username:"",email:"",password:""});
    
    const handleChange=(e)=>{
        switch(e.target.name){
            case("password"):
                setInputValues({...inputValues,password:e.target.value})
                break;
            case("username"):
                setInputValues({...inputValues,username:e.target.value})
                break;
            case("email"):
                setInputValues({...inputValues,email:e.target.value})
                break;
            default:
                console.log("please enter values inside email password and username filelds")

        }
    }

    useEffect(()=>{
        const toggler=(e)=>{
            const toggleVar=e.target.tagName==="INPUT"?true:false;
            setDisplayValidationContent(toggleVar);
        }
        document.body.addEventListener("click",toggler)

        return ()=>document.body.removeEventListener("click",toggler);
    },[])


  return (
    <div>
        <Form handleChange={handleChange}/>
        {displayValidationContent && <ValidationContent inputValues={inputValues} />}
    </div>
  )
}


export default ValidationForm