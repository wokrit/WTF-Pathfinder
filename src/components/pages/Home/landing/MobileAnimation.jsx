import React, { useState } from 'react'
import mobile from './MobileAnimation.module.css'

export default function () {

    const [count, setCount] = useState(0);
    const [margin, setMargin] = useState('0%');
    const [forward, setForward] = useState(true);

    function shiftImage(count) {
        switch (count) {
            case 0:
                setMargin("0%");
                break;

            case 1:
                setMargin("10%");
                break;

            case 2:
                setMargin("20%");
                break;


            default:
                break;
        }
    }

    if (forward) {
        for (let i = 0; i < 3; i++) {
            setTimeout(() => {
                if (count === 3) {
                    setForward(false)
                } else {
                    setCount(count + 1);
                    shiftImage(count);
                }
            }, 1000)
        console.log(count);
        }
    } else {
        for (let i = 0; i > 0; i--) {
            setTimeout(() => {
                if (count === 3) {
                    setForward(false)
                } else {
                    setCount(count - 1);
                    shiftImage(count);
                }
            }, 1000)
        console.log(count);
        }
    }

  return (
    <div>
        <div className={mobile.container}>
            <div className={mobile.wrapper}>
                <div className={mobile.images} style={{marginLeft: margin}}>
                    <img src="\images\pingirl.png" />
                </div>

                <div className={mobile.images}>
                    <img src="\images\pc.png" />
                </div>

                <div className={mobile.images}>
                    <img src="\images\corporate.png" />
                </div>
            </div>
        </div>
    </div>
  )
}
