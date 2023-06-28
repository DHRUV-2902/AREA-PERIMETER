import React, { useState } from 'react'
import {useFormik} from "formik";
export default function AreaPeri() {
    

    const initialValues={le:"",br:""}
    const validate=(values)=>{
        const errors={};

        if(values.le=="")
        errors.le="empty length not allowed";
        formik.setStatus("");
        if(parseFloat(values.le)<=0.0)
        errors.le="invalid input";
        formik.setStatus("");

        if(values.br=="") 
        errors.br="empty breadth not allowed";
        formik.setStatus("");
        if(parseFloat(values.br)<=0.0)
        errors.br="invalid input";
        formik.setStatus("");


        return errors;
    }

    const onSubmit=(values,{setStatus})=>{
        let l = parseInt(values.le);
        let b = parseInt(values.br);

        let a = l*b;
        let p = 2*(l+b);
        let msg ="area"+a.toFixed(2)+" " +"perimeter"+p.toFixed(2);
        setStatus(msg);

        
       

    }
    
    const formik = useFormik({initialValues,validate,onSubmit});

    
  return (
    <>
    <h1>Area and perimeter  </h1>
    <form onSubmit={formik.handleSubmit}>
        <input type="number" step="any" placeholder='enter number length' name="le" onChange={formik.handleChange} onBlur={formik.handleBlur}/>
        {formik.touched.le && formik.errors.le ?<div class="err">{formik.errors.le}</div> : null}
        <br/><br/>
        <input type="number"step="any" placeholder='enter number breadth' name="br" onChange={formik.handleChange} onBlur={formik.handleBlur}/>
        {formik.touched.br && formik.errors.br ?<div class="err">{formik.errors.br}</div> : null}
        <br/><br/>
        <input type="submit" value="find area and perimeter"/>
    </form>
    <h1>{formik.status}</h1>
    
    </>
  )
}





