/* eslint-disable react/prop-types */
const Number=({ value, onChange }) =>{
  return (
    <div>
      <label style={{ marginRight: '10px',marginLeft:'10px'}}>
        Number:
        </label>
        <input type="tel" value={value} onChange={onChange} style={{backgroundColor:'#FFFEC4' ,border:'none'}} />
    </div>
  );
}

export default Number;