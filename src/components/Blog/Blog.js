import React from 'react';

const Blog = () => {
      return (
            <div className='grid grid-cols-1 lg:grid-cols-2 m-4 p-2'>
                  <div>
                        <h1>How will you improve the performance of a React Application?</h1>
                        <p>Learning is best done by doing. The best way to improve skills in a web technology, provided me already moderately familiar with the programming language (JavaScript), would be to undertake a substantial project you are passionate about using said technology. This will force me to deal with a variety of design and implementation issues in the technology, and by the time I finish and would have gained significant experience which can be applied to other projects using the technology.</p>
                  </div>
                  <div>
                        <h1>How will you improve the performance of a React Application?</h1>
                        <p>At component level, state is initiased at constructor and to be used in that component only. If that state needs to be used by other component and that component is a parent or child of this component then you can pass state as props. but if there are two separate components then we use redux for this.
                        redux is a store which manages all your state. you need to write some actions and reducers and make components aware of state. if page refreshes, store is gone so you need to consider that scenario also using Router state and sometimes localstorage or api when there are 3rd party redirections like payment page</p>
                  </div>
                  <div>
                        <h1>How will you improve the performance of a React Application?</h1>
                        <p>Learning is best done by doing. The best way to improve skills in a web technology, provided me already moderately familiar with the programming language (JavaScript), would be to undertake a substantial project you are passionate about using said technology. This will force me to deal with a variety of design and implementation issues in the technology, and by the time I finish and would have gained significant experience which can be applied to other projects using the technology.</p>
                  </div>
                  <div>
                        <h1>How will you improve the performance of a React Application?</h1>
                        <p>Learning is best done by doing. The best way to improve skills in a web technology, provided me already moderately familiar with the programming language (JavaScript), would be to undertake a substantial project you are passionate about using said technology. This will force me to deal with a variety of design and implementation issues in the technology, and by the time I finish and would have gained significant experience which can be applied to other projects using the technology.</p>
                  </div>
                  <div>
                        <h1>How will you improve the performance of a React Application?</h1>
                        <p>Learning is best done by doing. The best way to improve skills in a web technology, provided me already moderately familiar with the programming language (JavaScript), would be to undertake a substantial project you are passionate about using said technology. This will force me to deal with a variety of design and implementation issues in the technology, and by the time I finish and would have gained significant experience which can be applied to other projects using the technology.</p>
                  </div>
            </div>
      );
};

export default Blog;