import React from 'react'
import style from './quizapp.module.css'

export default function Quizapp(props:{
    q:string;
    opt:string[];
    click:(e:any)=>void
}) {
    const { q, opt,click } = props;
    return (
        <>
            <div className={`${style.maindiv} text-center container`}>
                <div className='row'>
                    <div className="col-8 mx-auto">

                        <textarea className={`${style.qinpt}`} rows={4} readOnly value={q}></textarea>
                    </div>
                    <div className='col-8 mx-auto d-flex align-items-center justify-content-around flex-wrap'>
                        {opt.map((val, index) => (
                            <button key={index} className={`col-5 mt-lg-3 ${style.radi}`} onClick={click} value={val}>{val}</button>
                        ))}
                    </div>

                </div>
            </div>
        </>
    )
}
