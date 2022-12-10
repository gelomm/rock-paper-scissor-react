import React from 'react'
import Wave from 'react-wavify';

const WaveBg = () => {
return (
    <>
<Wave className='wave'
    fill='#f9bc60'
    options={{
        height: 1,
        amplitude: 40,
        points: 4
    }}
    />
    <Wave className='wave2'
    fill='#f7a72f'
    />
    <Wave className='wave3'
    fill='#ea9009'
    />
    <Wave className='wave4'
    fill='#b97207'
    />
    </>
)
}

export default WaveBg;