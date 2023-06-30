/* eslint-disable react/prop-types */
const Email=({ value, onChange })=> {
  return (
    <div>
      <label style={{ marginRight: '10px', marginLeft:'10px'}}>
        Email: 
      </label>
      <input type="email" value={value} onChange={onChange} style={{backgroundColor:'#FFFEC4' ,border:'none'}} />
    </div>
  );
}

export default Email;