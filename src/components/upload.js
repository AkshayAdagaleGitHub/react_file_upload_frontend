// import { hot }  from 'react-hot-loader';
import React,{useState} from 'react';
import { Button, Col, Form } from 'react-bootstrap';
// import { Viewer } from '@react-pdf-viewer/core';
import { Document, Page } from "react-pdf";
import { pdfjs } from 'react-pdf';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;
import axios from 'axios';
import {Container, Row} from 'react-bootstrap'

const Upload = () => {
    const [uploadedFile, setUploadedFile] = useState('')
    const [uploadProfilePic, setUploadProfilePic] = useState('')
    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);
  
    const onClickUploadProfilePic = e => {
        setUploadProfilePic(e.target.files[0])
    };

    const onUpdateEmail = e => {
        // setUploadProfilePic(e.target.files[0])
    };
    const onUpdateFirstName = e => {
        // setUploadProfilePic(e.target.files[0])
    };
    const onUpdateLasttName = e => {
        // setUploadProfilePic(e.target.files[0])
    };
    const onUpdateAge = e => {
        // setUploadProfilePic(e.target.files[0])
    };
    const onUpdatePhoneNumber = e => {
        // setUploadProfilePic(e.target.files[0])
    };
    const onUpdateReligion = e => {
        // setUploadProfilePic(e.target.files[0])
    };
    const onUpdateCaste = e => {
        // setUploadProfilePic(e.target.files[0])
    };
    const onUpdateSubCaste = e => {
        // setUploadProfilePic(e.target.files[0])
    };
    const onUpdateCountry = e => {
        // setUploadProfilePic(e.target.files[0])
    };
    const onUpdateState = e => {
        // setUploadProfilePic(e.target.files[0])
    };
    const onUpdateCity = e => {
        // setUploadProfilePic(e.target.files[0])
    };

    const onClick = e => {
        setUploadedFile(e.target.files[0]);
    }

    function onDocumentLoadSuccess({ numPages }) {
      setNumPages(numPages);
      setPageNumber(1);
    }
  
    function changePage(offset) {
      setPageNumber(prevPageNumber => prevPageNumber + offset);
    }
  
    function previousPage() {
      changePage(-1);
    }
  
    function nextPage() {
      changePage(1);
    }
    const submitForm = (e) => {
        e.preventDefault();
        const formData = new FormData()
        formData.append('file',uploadProfilePic)
        formData.append('file',uploadedFile)
        console.log(formData)
        let url = "http://localhost:8080/uploadImages"
        axios.post(url,formData)
    }
    return (
        <div className="container-sm">
         
        <Form id="formid" encType="multipart/form-data" action="#" method="post" onSubmit={submitForm}>
        <h4>Enter Contact Details</h4>
        <hr/>
        <Container>
        <Row >
  
              <Col>
              <Form.Group className="mb-3" >
                <Form.Label>Upload Picture </Form.Label><br/>
                <input id="uploadProfilePic" type="file"  onChange={onClickUploadProfilePic}  className="btn btn-outline-primary" /><br/><br/>
            </Form.Group>
              </Col>
              <Col>
          <Form.Group className="mb-3" >
            {
                uploadProfilePic ?
                <img src={URL.createObjectURL(uploadProfilePic) } width="140" height="120"  className="btn btn-outline-primary" ></img> : <></>
                }
            </Form.Group>
          </Col>
              <Col>
              <Form.Group className="mb-3" >
                <Form.Label>Upload Biodata </Form.Label><br/>
            <input id="uploadFile" type="file"  onChange={onClick}  className="btn btn-outline-primary" /> 
            <br/>
            {/* <div>
                { uploadedFile ?
                // ( <Viewer fileUrl={uploadedFile} />)
                ( <>
                    <Document
                      file={URL.createObjectURL(uploadedFile)}
                      onLoadSuccess={onDocumentLoadSuccess}
                      className="btn btn-outline-primary"
                    >
                      <Page pageNumber={pageNumber} />
                    </Document>
                    <div>
                      <p>
                        Page {pageNumber || (numPages ? 1 : '--')} of {numPages || '--'}
                      </p>
                      <button
                        type="button"
                        disabled={pageNumber <= 1}
                        onClick={previousPage}
                        className="btn btn-outline-primary"
                      >
                        Previous
                      </button>
                      <button
                        type="button"
                        disabled={pageNumber >= numPages}
                        onClick={nextPage}
                        className="btn btn-outline-primary"
                      >
                        Next
                      </button>
                    </div>
                  </>)
                : ( <><br/>Please upload biodata</> ) }
            </div> */}
            <hr/>
            </Form.Group>
              </Col>
            </Row>
          {/* <Row>
          <Col>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Enter Contact Details</Form.Label>
                </Form.Group>
              </Col>
          </Row> */}
            <Row>
              <Col>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control type="email" placeholder="Enter email" onChange={onUpdateEmail}/>
                </Form.Group>
              </Col>
              <Col>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Telephone number</Form.Label>
                  <Form.Control type="text" placeholder="Enter telephone number" onChange={onUpdatePhoneNumber}/>
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>First Name</Form.Label>
                <Form.Control type="password" placeholder="First Name" onChange={onUpdateFirstName}/>
              </Form.Group>    
              </Col>
              <Col>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Last Name</Form.Label>
                  <Form.Control type="text" placeholder="Last Name" onChange={onUpdateLasttName} />
                </Form.Group>   
              </Col>
              <Col>
               <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Age </Form.Label>
                  <Form.Control type="text" placeholder="Enter Age" onChange={onUpdateAge}/>
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Country </Form.Label>
                <Form.Control type="text" placeholder="Enter country" onChange={onUpdateCountry}/>
              </Form.Group>           
              </Col>
              <Col>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>State </Form.Label>
                <Form.Control type="text" placeholder="Enter state" onChange={onUpdateState}/>
              </Form.Group>
              </Col>
              <Col>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>City </Form.Label>
                <Form.Control type="text" placeholder="Enter city" onChange={onUpdateCity}/>
              </Form.Group>   
              </Col>
            </Row>
            <Row>
              <Col>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Religion </Form.Label>
                <Form.Control type="text" placeholder="Enter religion" onChange={onUpdateReligion}/>
              </Form.Group>           
              </Col>
              <Col>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Caste </Form.Label>
                <Form.Control type="text" placeholder="Enter caste" onChange={onUpdateCaste}/>
              </Form.Group>
              </Col>
              <Col>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>sub-caste </Form.Label>
                <Form.Control type="text" placeholder="Enter sub-caste" onChange={onUpdateSubCaste}/>
              </Form.Group>   
              </Col>
            </Row>
            <Col xs="auto">
              <Button type="submit" className="mb-2">
                Submit
              </Button>
            </Col>
          </Container> 
        </Form>
        </div>
    );  
};

export default Upload;
// export default Registration;

