import React from 'react';
import { Spinner } from 'react-bootstrap';
const Loading = () => {
      return (
            <div>
                <div style={{height:'500px'}} className='w-100 flex justify-center items-center'>
                  <Spinner animation="grow" variant="primary" />
                  <Spinner animation="grow" variant="secondary" />
                  <Spinner animation="grow" variant="success" />
                </div>
            </div>
      );
};

export default Loading;