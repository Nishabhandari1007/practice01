import React from 'react'

const ColorPicker = () => {
     const [color, setColor] = React.useState('#ffffff');

function handleColorChange(e){
     setColor(e.target.value)
}

  return (
    <div className='color-container'>
      <h1> Color Picker</h1>
      <div className='color-display' style={{backgroundColor: color}}>
          <p> selected color : {color}</p>
      </div>
      <label>select a color:</label>
      <input type='color'
       value={color} 
       onChange={handleColorChange}/>
    </div>
  )
}

export default ColorPicker
