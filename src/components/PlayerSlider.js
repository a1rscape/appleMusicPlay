import React from 'react'
import TimerUp from './TimerUp'
import TimerDown from './TimerDown'

export default function PlayerSlider(props) {
    return (
        <div className='timer__range__wrapper'>
            <p><TimerUp targetTime={props.store.durations[0].duration} start={props.start}/></p>
            <input
                type='range'
                min='0'
                max='100'
                step='1'
                className='range__slider'
                value={props.value}
                onChange={props.handleChange}
                style={props.fillStyle}
            />
            <p><TimerDown targetTime={props.store.durations[0].duration} start={props.start}/></p>
        </div>
    )
}
