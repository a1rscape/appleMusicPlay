import React, { useRef } from 'react'
import store from './store'
import Preview from './Preview';
import Garniture from './Garniture';
import Name from './Name';
import Author from './Author';
import PlayerSlider from './PlayerSlider';
import src from '../audio/Macan Shazam.mp3';
import { FaPlay } from "react-icons/fa";
import { FaPause } from "react-icons/fa6";
import { BsFillSkipBackwardFill } from "react-icons/bs";
import { BsFillSkipForwardFill } from "react-icons/bs";
import { TbDeviceAirpods } from "react-icons/tb";

export default function Player() {

    let [value, setValue] = React.useState(0)
    let [isPlaying, setIsPlaying] = React.useState(false)

    const handleDurationTonumber = (duration) => {
        let minutes = parseInt(duration.split(':')[0])
        let seconds = parseInt(duration.split(':')[1])
        return [
            {
                minutes: minutes,
                seconds: seconds
            }
        ]
    }

    const handleChange = (e) => {
        setValue(e.target.value)
    }

    const fillStyle = {
        background: `linear-gradient(to right, rgb(171, 171, 176) 0%, rgb(171, 171, 176) ${value}%, rgb(68, 68, 69) ${value}%, rgb(68, 68, 69) 100%)`
    };

    const percentage = (duration) => {
        return 100 / (parseInt(duration.split(':')[0]) * 60 + parseInt(duration.split(':')[1]))
    }

    const audioRef = useRef(null);

    const handleButtonClick = () => {
        if (audioRef.current) {
            audioRef.current.play();
        }
    };

    return (
        <div className='player__wrapper'>
            <Preview store={store} />
            <Garniture />
            <Name store={store} />
            <Author store={store} />

            <PlayerSlider store={store} value={value} handleChange={handleChange} fillStyle={fillStyle} handleDurationTonumber={handleDurationTonumber} start={isPlaying} />

            <div className='control__panel'>
                <audio ref={audioRef}>
                    <source src={src} type="audio/mpeg" />
                    Your browser does not support the audio element.
                </audio>
                <div className='control__panel__item'>
                    <BsFillSkipBackwardFill className='control__panel__item__icon' onClick={() => {
                        console.log("clicked")
                    }}></BsFillSkipBackwardFill>
                </div>
                <div className='control__panel__item'>
                    {isPlaying ? <FaPause className='control__panel__item__icon' onClick={() => {
                        console.log("playing");
                        setIsPlaying(!isPlaying)
                    }}></FaPause> : <FaPlay className='control__panel__item__icon' onClick={() => {
                        handleButtonClick();
                        setIsPlaying(!isPlaying)
                    }} />}

                    {isPlaying && setTimeout(() => {
                        if (value < 100) setValue(value += percentage(store.durations[0].duration));
                    }, 1000)}
                </div>
                <div className='control__panel__item'>
                    <BsFillSkipForwardFill className='control__panel__item__icon' onClick={() => {
                        console.log("clicked")
                    }}></BsFillSkipForwardFill>
                </div>
                <div className='control__panel__item'>
                    <TbDeviceAirpods className='control__panel__item__icon' onClick={() => {
                        console.log("clicked")
                    }}></TbDeviceAirpods>
                </div>
            </div>
        </div>
    )
}
