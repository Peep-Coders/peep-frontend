// import { useState, useEffect } from 'react';
import { Form, Button, Alert, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import API_URL from '../../apiConfig';

const PostDetails = ({
    handleSubmit,
    formData,
    handleChange,
    handleFileUpload,
    error,
}) => {
    return (
        <div>
            <Form onSubmit={handleSubmit} encType='multipart/form-data'>
                <Form.Group controlId='Description'>
                    <Form.Label>Post Description</Form.Label>
                    <Form.Control required autoFocus type='text' name='name'/>
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