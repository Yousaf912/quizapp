import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import style from './score.module.css'
import { IoMdHappy } from "react-icons/io";
import { GrStatusGood } from "react-icons/gr";
import { BsHandThumbsUpFill ,BsHandThumbsDownFill} from "react-icons/bs";

export default function Score(props: {
    scor: number;
    question: any;
    aginbtn: any;
}) {
    const { scor, question, aginbtn } = props;
    let persentage = Math.round((scor / question.length) * 100)
    return (
        <Container>
            <Row>
                <Col lg='6' className='border p-4 text-center mx-auto mt-3 rounded-3'>
                    <h1>Your Result Is</h1>
                     {persentage >= 90?   <div className={` ${style.scordiv} border border-2 py-3 bg-success  rounded-circle `}>< GrStatusGood  className='fs-1' /></div>:
                     persentage >= 70?     <div className={` ${style.scordiv} border border-2 py-3 bg-success  rounded-circle `}><IoMdHappy  className='fs-1' /></div>:
                     persentage>= 50?  <div className={` ${style.scordiv} border border-2 py-3 bg-success  rounded-circle `}><BsHandThumbsUpFill className='fs-1' /></div> :
                    <div className={` ${style.scordiv} border border-2 py-3 bg-danger  rounded-circle `}><BsHandThumbsDownFill className='fs-1' /></div>}
                    <div className='d-flex justify-content-evenly mt-4'>
                        <h3>Numbers:</h3>
                        <h2>{scor}</h2>
                    </div>
                    <div className='d-flex justify-content-evenly mt-4'>
                        <h3>Out Of:</h3>
                        <h2>{question.length}</h2>
                    </div>
                    <div className='d-flex justify-content-evenly mt-4'>
                        <h3>Percentage:</h3>
                        <h2>{persentage}%</h2>
                    </div>
                    <button type="button" className="btn btn-info mt-5 px-3" onClick={aginbtn}>Start Again</button>
                </Col>
            </Row>
        </Container>
    );
}

