import React,{useRef} from "react";
import { studentSliceActions } from "../../../../Store/Student-Slice";
import { useDispatch, useSelector } from "react-redux";
import './InputDetails.css'
import {AiOutlineSend} from 'react-icons/ai'


export const NameInput = (props) => {
    const nameIp = useRef();
    const dispatch = useDispatch();

    const handleForm = (e) => {
        e.preventDefault();
        const id = "id" + Math.random().toString(16).slice(2);
        const name = nameIp.current.value;
        const data = {id:id, name:name};

        dispatch(studentSliceActions.addStudentInfo(data));
        props.actionProvider.studentInfoText(name);
        setTimeout(()=>{
            props.actionProvider.handleGreetWithName();
        },1000);
    }

    return(
        <div>
            <p className="ipdetail-head">Enter your name</p>
            <form className="ip-form" onSubmit={handleForm}>
                <input type="text" placeholder="name" ref={nameIp}/>
                <button type="submit"><AiOutlineSend className="ip-sendbtn"/></button>
            </form>
        </div>
    );
}


export const AgeInput = (props) => {
    const ageIp = useRef();
    const dispatch = useDispatch();
    const student = useSelector(state=>state.studentStore.studentData);
    
    const handleClick = () => {
        const age = ageIp.current.value;
        dispatch(studentSliceActions.addStudentInfo({...student, age:age}));
        props.actionProvider.studentInfoText(age);
        setTimeout(()=>{
            props.actionProvider.handleEnd();
        },1000)
    }

    return(
        <div>
            <p className="ipdetail-head">Enter your age</p>
            <div className="box">
                <select ref={ageIp} onChange={handleClick}>
                    <option value='select age'>select age</option>
                    <option value='18-25'>18-25</option>
                    <option value='26-35'>26-35</option>
                    <option value='36-45'>36-45</option>
                </select>
            </div>
        </div>
    );
}


export const UserName = () => {
    const student = useSelector(state=>state.studentStore.studentData);
    return(
        <div>
            <p>{`Hey ${student.name}!, one more question for you.`}</p>    
        </div>
    );
}