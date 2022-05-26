
import Parts from './Parts/Parts';
import useParts from './../../Hooks/useParts';

const Tools = () => {
      const [parts,setPart]=useParts([]);
      
      return (
            <div>
              <h1 className='text-center text-accent font-extrabold '>MotoCycle Parts</h1>
                  
                  <div className=' grid grid-cols-1 lg:grid-cols-3 justify-center items-center m-4 p-2 gap-2 '>
                  {
                   parts.slice(0,6).map(part=><Parts key={part._id} part={part}></Parts>)
                  }
                  </div>
                  

            </div>
      );
};

export default Tools;