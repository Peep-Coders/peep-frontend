// import { useState, useEffect } from 'react';
import { Form, Button, Alert, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import API_URL from '../../apiConfig';
import styles from './PostDetails.modules.css'

const PostDetails = ({
    handleSubmit,
    formData,
    handleChange,
    handleFileUpload,
    error,
}) => {
    return (
        <div className="posts_main">
            <Form onSubmit={handleSubmit} encType='multipart/form-data'>
                <Form.Group controlId='Description'>

                    <Form.Control required autoFocus type='text' name='name' placeholder="Say Something"/>
                </Form.Group> 
                <Form.Group controlId='photo'>
                    <Form.Control
                        type='file'
                        name='photo'
                        accept='image/*'
                        onChange={handleFileUpload}></Form.Control>
                </Form.Group>
                <Button className='mt-4' type='submit' disabled={error}>
                    Submit
                </Button>
                {error && (
                    <Alert variant='danger'>
                        Error, Try again! 
                    </Alert>
                )}
            </Form>
        </div>
    );
};

export default PostDetails;