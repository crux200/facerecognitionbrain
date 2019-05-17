import React from 'react';
import './FaceRecognition.css'
const FaceRecognition=({imgURL, box})=>{
	return (
		<div className='center'>
		<div className='absolute mt2'>
		<img id='inputimage' alt='' src={imgURL} width='500px' height='auto' />	
		<div className='bounding-box' style={{top:box.toprow, right:box.rightcol, bottom:box.bottomrow, left:box.leftcol}}> </div>
		</div>
		</div>
		);
}

export default FaceRecognition;
