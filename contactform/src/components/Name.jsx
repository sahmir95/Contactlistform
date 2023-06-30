/* eslint-disable react/prop-types */
const Name=({ value, onChange }) =>{
  return (
    <div>
      <label style={{ marginRight: '10px' }}>
      Name:
      </label>
        <input type="text"  value={value} onChange={onChange} style={{backgroundColor:'#FFFEC4' ,border:'none'}} />
    </div>
  );
}

export default Name;