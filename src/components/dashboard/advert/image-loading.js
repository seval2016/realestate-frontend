"use client"
import "./image-loading.scss"
import SubmitButton from '@/components/common/form-fields/submit-button';
import { FileUpload } from 'primereact/fileupload';
import React, { useRef } from 'react';
import { Toast } from 'primereact/toast';
import { Col, Row } from "react-bootstrap";

const ImageLoading = ({ imageUrl, altText }) => {
    const toast = useRef(null);

    const onUpload = () => {
        toast.current.show({ severity: 'info', summary: 'Success', detail: 'File Uploaded' });
    };
        
    return (
        <Row className=" justify-content-center">
        <h3 className="mb-4">Images</h3>
        <Col className="plus-image-container-wrapper">
        
        <div className="plus-image-container">
            <img src={imageUrl} alt={altText} className="image" />
                <div className=" plus-icon-container card flex justify-content-center">
            <Toast ref={toast}></Toast>
            <FileUpload mode="basic" name="demo[]" url="/api/upload" accept="image/*" maxFileSize={1000000} onUpload={onUpload} auto chooseLabel="Browse" />
        </div>  
            <div className="message-container">Choose and update new images</div>   
            <div className="upload-container">
                <SubmitButton title="UPLOAD" className=" link-light"/>
            </div>   
                
        </div>
        </Col>


        </Row>
    
    );
};

export default ImageLoading;

//<FaPlus className="plus-icon" />
