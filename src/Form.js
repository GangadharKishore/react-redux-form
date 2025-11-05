import { useState } from "react"
import { useDispatch } from "react-redux"
import { deposit } from "./action";
import { withdrawal } from "./action";
import { mobileUpdate } from "./action";
import { nameUpdate,reset } from "./action";



function Form() {

    let dispatch = useDispatch();
    const [amount,setAmount] =useState("")
    const [fullName,setFullName]=useState("")
     const [mobile,setMobile]=useState(null)
    return (
        <>
            <div className="container">
                <h2>Form </h2>
                <div className="row">
                    <div className="col-4">
                        <input className="form-contorl" type="number"
                        placeholder="Enter amount"
                        value={amount}
                        onChange={(e)=>{
                            let data = e.target.value;
                            setAmount(data)
                        }}
                        />
                    </div>
                    <button className="btn btn-primary col-2"
                    onClick={()=>{
                        dispatch(deposit(amount))
                        setAmount("")
                    }}
                    >Deposit</button>
                     <button className="btn btn-danger col-2 mx-2"
                    onClick={()=>{
                        dispatch(withdrawal(amount))
                        //dispatch({type:"withdrawal",payload:amount}) action objects
                        setAmount("")
                    }}
                    >Withdraw</button>

                </div>
                 <div className="row mt-2">
                    <div className="col-4">
                        <input className="form-contorl" type="text"
                        placeholder="Enter Fullname"
                        value={fullName}
                        onChange={(e)=>{
                            let data = e.target.value;
                            setFullName(data)
                        }}
                        />
                    </div>
                    <button className="btn btn-primary col-2"
                    onClick={()=>{
                        dispatch(nameUpdate(fullName))
                        //dispatch({type:"nameUpdate",payload:fullName})
                        setFullName("")
                    }}
                    >Update</button>
                     

                </div>
                <div className="row mt-2">
                    <div className="col-4">
                        <input className="form-contorl" type="number"
                        placeholder="Enter Mobile"
                        value={mobile}
                        onChange={(e)=>{
                            let data = e.target.value;
                            setMobile(data)
                        }}
                        />
                    </div>
                    <button className="btn btn-primary col-2"
                    onClick={()=>{
                        dispatch(mobileUpdate(mobile))
                        // dispatch({type:"mobileUpdate",payload:mobile})
                        setMobile("")
                    }}
                    >Update</button>
                     

                </div>
                <button className="btn btn-danger mt-2 col-2"
                    onClick={()=>{
                        dispatch(reset())
                        // dispatch({type:"reset"})
                        setMobile("")
                    }}
                    >Reset</button>
            </div>
        </>
    )
}

export default Form