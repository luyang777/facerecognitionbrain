
import React from 'react';

const Search = (props) => {

    return(
    <div>
      <p className='f3'>
        {'This Magic Brain will detect faces in your pictures. Git it a try.'}
      </p>
      <div className='center'>
        <div className='form center pa4 br3 shadow-5'>
          <input className='f4 pa2 w-70 center' type='tex' onChange = {props.inputChange}/>
          <button
            className='w-30 grow f4 link ph3 pv2 dib blue bg-washed-green'
          >Detect</button>
        </div>
      </div>
    </div>
    );
}

export default Search;