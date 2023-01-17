import React from 'react'
import { Link } from 'react-router-dom'
import "./haqqında.css"



export default function Haqqında() {
    return (
        <>
            <main>
            <h1>My informations </h1>
                <div className="body">
                    <div>
                        <div className='listflex'>
                            <ul className='list'>
                                <li>Name: Amil Əlibəyli</li>
                                <li>Yaşı:25</li>
                                <li>Yaşadığı yer: Nasimi</li>
                                <li>İş yeri : Baku Web Center </li>
                                <li>İş sahəsi: Frontend Developer</li>
                                <li>İş təcrübəsi : 1 il</li>
                            </ul>
                            <p><img src="./infoPic.jpg" alt="Pic" /></p>
                        </div>


                    </div>
                </div>
            </main>
            <footer>
                <p className='mainP'>
                    <p>Baku-2023</p>
                </p>


            </footer>
        </>

    )
}
