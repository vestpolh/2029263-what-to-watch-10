import React, { useState } from 'react';


function Details(d: {fn: string, ln: string, mn: string, c: string}){
  return (
    <>
      <h2>Проверка:</h2>
      <p>
        <b>fn: </b>{d.fn}<br/>
        <b>ln: </b>{d.ln}<br/>
        <b>mn: </b>{d.mn}<br/>
        <b>c: </b>{d.c}<br/>
      </p>
    </>
  );
}

function Test(): JSX.Element {
  const [formData, setFormData] = useState({
    fn: '',
    ln: '',
    mn: '',
    c: ''
  });

  const [isHideDetails, setIsHideDetails] = useState(true);

  const fieldChangeHandle = (evt: any) => {
    const {id, value} = evt.target;
    setFormData({...formData, [id]: value});
  };

  const showDetailsHandle = (evt: any) => {
    evt.preventDefault();
    setIsHideDetails((currentState)=> !currentState);
  };

  return (
    <>
      <form>
        <label>Имя:</label>
        <input onChange={fieldChangeHandle} id='fn' value={formData.fn}/>
        <br/>
        <label>Фамилия:</label>
        <input onChange={fieldChangeHandle} id='ln' value={formData.ln}/>
        <br/>
        <label>Отчество:</label>
        <input onChange={fieldChangeHandle} id='mn' value={formData.mn}/>
        <br/>
        <label>Комментарий:</label>
        <textarea onChange={fieldChangeHandle} id='c' value={formData.c}/>
        <br/>
        <button type='submit' onClick={showDetailsHandle}>{isHideDetails ? 'Показать' : 'Спрятать'}</button>
      </form>
      <hr/>
      {!isHideDetails && <Details {...formData}/>}
    </>
  );
}

export default Test;


