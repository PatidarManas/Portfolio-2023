import React, { useEffect, useState } from 'react'
import "./Home.scss"
const Home = () => {
    const [page, setpage] = useState("Welcome")
    const [posx, setposx] = useState()

    const [posy, setposy] = useState()
    const [prex, setprex] = useState(0)
    useEffect(() => {

        var rect = document.getElementById("myRange").getBoundingClientRect();
        setposx(rect.left)
        setposy(rect.top - 50)
        setprex(rect.left)
        console.log(prex)
    },[prex])
    
    var brk = window.screen.width>="1024" ? ((window.screen.width - 500) / 7) : ((window.screen.width - 180) / 7)

    function changefunc(value) {
        setposx(prex + (value * brk))
        if (value < 0.6) {
            setpage("Welcome")
            console.log("welcome")
            document.getElementById("welcome").style.display = "flex"
            document.getElementById("about").style.display = "none"
            document.getElementById("projects").style.display = "none"
            document.getElementById("fine").style.display = "none"
            document.getElementById("newtube").style.display = "none"
            document.getElementById("crevate").style.display = "none"
            document.getElementById("more").style.display = "none"

            document.getElementById("welcome").style.opacity = `${0.6 - value}`
        }
        else if (value >= 0.6 && value < 1.6) {
            setpage("About")
            document.getElementById("welcome").style.display = "none"
            document.getElementById("about").style.display = "flex"
            document.getElementById("projects").style.display = "none"
            document.getElementById("fine").style.display = "none"
            document.getElementById("newtube").style.display = "none"
            document.getElementById("crevate").style.display = "none"
            document.getElementById("more").style.display = "none"
            if (value >= 1) {
                var val = (8 / 3) - value * (1 / 0.6)

                document.getElementById("about").style.opacity = `${val}`
            }
            else {
                 val = -1.5 + value * (2.5)

                document.getElementById("about").style.opacity = `${val}`
            }
        }
        else if (value >= 1.6 && value < 3) {
            setpage("Projects")
            document.getElementById("welcome").style.display = "none"
            document.getElementById("about").style.display = "none"
            document.getElementById("projects").style.display = "flex"
            document.getElementById("fine").style.display = "none"
            document.getElementById("newtube").style.display = "none"
            document.getElementById("crevate").style.display = "none"
            document.getElementById("more").style.display = "none"

            if (value >= 2.3) {
                var x = 4.28571, y = 1.42857
                 val = x - value * (y)

                document.getElementById("projects").style.opacity = `${val}`
            }
            else {
                 x = -2.28571
                 y = -1.42857
                 val = x - value * (y)

                document.getElementById("projects").style.opacity = `${val}`
            }
        }
        else if (value >= 3 && value < 4) {
            setpage("Fine")
            document.getElementById("welcome").style.display = "none"
            document.getElementById("about").style.display = "none"
            document.getElementById("projects").style.display = "none"
            document.getElementById("fine").style.display = "flex"
            document.getElementById("newtube").style.display = "none"
            document.getElementById("crevate").style.display = "none"
            document.getElementById("more").style.display = "none"
            if (value >= 3.5) {
                 x = 8
                  y = 2
                val = x - value * (y)

                document.getElementById("fine").style.opacity = `${val}`
            }
            else {
                 x = -6.0
                y = -2.0
                 val = x - value * (y)

                document.getElementById("fine").style.opacity = `${val}`
            }
        }
        else if (value >= 4 && value < 5.4) {
            setpage("Newtube")
            document.getElementById("welcome").style.display = "none"
            document.getElementById("about").style.display = "none"
            document.getElementById("projects").style.display = "none"
            document.getElementById("fine").style.display = "none"
            document.getElementById("newtube").style.display = "flex"
            document.getElementById("crevate").style.display = "none"
            document.getElementById("more").style.display = "none"
            if (value >= 4.7) {
                x = 7.71429
                 y = 1.42857
                val = x - value * (y)

                document.getElementById("newtube").style.opacity = `${val}`
            }
            else {
                 x = -5.71429
                 y = -1.42857
                val = x - value * (y)

                document.getElementById("newtube").style.opacity = `${val}`
            }
        }
        else if (value >= 5.4 && value < 6.5) {
            setpage("Crevate")
            document.getElementById("welcome").style.display = "none"
            document.getElementById("about").style.display = "none"
            document.getElementById("projects").style.display = "none"
            document.getElementById("fine").style.display = "none"
            document.getElementById("newtube").style.display = "none"
            document.getElementById("crevate").style.display = "flex"
            document.getElementById("more").style.display = "none"
            if (value >= 6) {
                x = 13
                 y = 2
                val = x - value * (y)

                document.getElementById("crevate").style.opacity = `${val}`
            }
            else {
                x = -9.0
                 y = -1.66667
                 val = x - value * (y)

                document.getElementById("crevate").style.opacity = `${val}`
            }
        }
        else if (value >= 6.5 && value <= 7) {
            setpage("More")
            document.getElementById("welcome").style.display = "none"
            document.getElementById("about").style.display = "none"
            document.getElementById("projects").style.display = "none"
            document.getElementById("fine").style.display = "none"
            document.getElementById("newtube").style.display = "none"
            document.getElementById("crevate").style.display = "none"
            document.getElementById("more").style.display = "flex"
             x = -13
              y = -2
             val = x - value * (y)

            document.getElementById("crevate").style.opacity = `${val}`

        }


    }

    function mousedown(value) {
        document.getElementById("pointer").style.display = "none"
        document.getElementById("data").style.display = "flex"
        document.getElementById("myRange").style.opacity = "0.2"
        if (value < 0.6) {
            document.getElementById("welcome").style.scale = "0.8"
            document.getElementById("about").style.scale = "0.8"
            document.getElementById("projects").style.scale = "0.8"
            document.getElementById("fine").style.scale = "0.8"
            document.getElementById("newtube").style.scale = "0.8"
            document.getElementById("crevate").style.scale = "0.8"
            document.getElementById("more").style.scale = "0.8"


        }
        else if (value >= 0.6 && value < 1.6) {

            document.getElementById("welcome").style.scale = "0.8"
            document.getElementById("about").style.scale = "0.8"
            document.getElementById("projects").style.scale = "0.8"
            document.getElementById("fine").style.scale = "0.8"
            document.getElementById("newtube").style.scale = "0.8"
            document.getElementById("crevate").style.scale = "0.8"
            document.getElementById("more").style.scale = "0.8"
        }
        else if (value >= 1.6 && value < 3) {

            document.getElementById("welcome").style.scale = "0.8"
            document.getElementById("about").style.scale = "0.8"
            document.getElementById("projects").style.scale = "0.8"
            document.getElementById("fine").style.scale = "0.8"
            document.getElementById("newtube").style.scale = "0.8"
            document.getElementById("crevate").style.scale = "0.8"
            document.getElementById("more").style.scale = "0.8"
        }
        else if (value >= 3 && value < 4) {
            document.getElementById("welcome").style.scale = "0.8"
            document.getElementById("about").style.scale = "0.8"
            document.getElementById("projects").style.scale = "0.8"
            document.getElementById("fine").style.scale = "0.8"
            document.getElementById("newtube").style.scale = "0.8"
            document.getElementById("crevate").style.scale = "0.8"
            document.getElementById("more").style.scale = "0.8"
        }
        else if (value >= 4 && value < 5.4) {

            document.getElementById("welcome").style.scale = "0.8"
            document.getElementById("about").style.scale = "0.8"
            document.getElementById("projects").style.scale = "0.8"
            document.getElementById("fine").style.scale = "0.8"
            document.getElementById("newtube").style.scale = "0.8"
            document.getElementById("crevate").style.scale = "0.8"
            document.getElementById("more").style.scale = "0.8"
        }
        else if (value >= 5.4 && value < 6.5) {

            document.getElementById("welcome").style.scale = "0.8"
            document.getElementById("about").style.scale = "0.8"
            document.getElementById("projects").style.scale = "0.8"
            document.getElementById("fine").style.scale = "0.8"
            document.getElementById("newtube").style.scale = "0.8"
            document.getElementById("crevate").style.scale = "0.8"
            document.getElementById("more").style.scale = "0.8"
        }
        else if (value >= 6.5 && value <= 7) {
            document.getElementById("welcome").style.scale = "0.8"
            document.getElementById("about").style.scale = "0.8"
            document.getElementById("projects").style.scale = "0.8"
            document.getElementById("fine").style.scale = "0.8"
            document.getElementById("newtube").style.scale = "0.8"
            document.getElementById("crevate").style.scale = "0.8"
            document.getElementById("more").style.scale = "0.8"
        }
    }

    function mouseup(e) {
        document.getElementById("pointer").style.display = "flex"
        document.getElementById("data").style.display = "none"
        document.getElementById("myRange").style.opacity = "0.5"

        document.getElementById("welcome").style.scale = "1"
        document.getElementById("about").style.scale = "1"
        document.getElementById("projects").style.scale = "1"
        document.getElementById("fine").style.scale = "1"
        document.getElementById("newtube").style.scale = "1"
        document.getElementById("crevate").style.scale = "1"
        document.getElementById("more").style.scale = "1"

        document.getElementById("welcome").style.opacity = "1"
        document.getElementById("about").style.opacity = "1"
        document.getElementById("projects").style.opacity = "1"
        document.getElementById("fine").style.opacity = "1"
        document.getElementById("newtube").style.opacity = "1"
        document.getElementById("crevate").style.opacity = "1"
        document.getElementById("more").style.opacity = "1"

    }


    return (
      
        <div className='w-screen text-white sm:static sm:h-max lg:h-screen lg:fixed flex flex-col self-center sm:px-10  lg:px-40 py-0'>
            <div className='relative h-screen px-0 lg:px-10 py-5'>
                <a href='mailto:manaspatidar170@gmail.com' className='fixed rotate-90	-right-28 bottom-32 lg:right-2 text-lg text-teal-300'><a href='http' className='text-gray-400'>@ </a>manaspatidar170@gmail.com </a>
                <div className='flex justify-between align-center'>
                    <a href='#welcome' style={{ fontFamily: "cursive" }} className='text-white text-2xl'>Manas Patidar </a>
                    <div className='flex gap-5'>
                        <ul class="ml-1  flex items-center text-gray-500 " aria-label="Social media">
                            <li class="mr-5 text-xs">
                                <a class="block hover:text-white" href="https://github.com/PatidarManas" target="_blank" rel="noreferrer"><span class="sr-only">GitHub</span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="h-6 w-6" aria-hidden="true"><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path></svg> </a></li>
                            <li class="mr-5 text-xs">
                                <a class="block hover:text-white" href="https://www.instagram.com/_manas_patidar/" target="_blank" rel="noreferrer"><span class="sr-only">Instagram</span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000" fill="currentColor" class="h-6 w-6" aria-hidden="true"><path d="M295.42,6c-53.2,2.51-89.53,11-121.29,23.48-32.87,12.81-60.73,30-88.45,57.82S40.89,143,28.17,175.92c-12.31,31.83-20.65,68.19-23,121.42S2.3,367.68,2.56,503.46,3.42,656.26,6,709.6c2.54,53.19,11,89.51,23.48,121.28,12.83,32.87,30,60.72,57.83,88.45S143,964.09,176,976.83c31.8,12.29,68.17,20.67,121.39,23s70.35,2.87,206.09,2.61,152.83-.86,206.16-3.39S799.1,988,830.88,975.58c32.87-12.86,60.74-30,88.45-57.84S964.1,862,976.81,829.06c12.32-31.8,20.69-68.17,23-121.35,2.33-53.37,2.88-70.41,2.62-206.17s-.87-152.78-3.4-206.1-11-89.53-23.47-121.32c-12.85-32.87-30-60.7-57.82-88.45S862,40.87,829.07,28.19c-31.82-12.31-68.17-20.7-121.39-23S637.33,2.3,501.54,2.56,348.75,3.4,295.42,6m5.84,903.88c-48.75-2.12-75.22-10.22-92.86-17-23.36-9-40-19.88-57.58-37.29s-28.38-34.11-37.5-57.42c-6.85-17.64-15.1-44.08-17.38-92.83-2.48-52.69-3-68.51-3.29-202s.22-149.29,2.53-202c2.08-48.71,10.23-75.21,17-92.84,9-23.39,19.84-40,37.29-57.57s34.1-28.39,57.43-37.51c17.62-6.88,44.06-15.06,92.79-17.38,52.73-2.5,68.53-3,202-3.29s149.31.21,202.06,2.53c48.71,2.12,75.22,10.19,92.83,17,23.37,9,40,19.81,57.57,37.29s28.4,34.07,37.52,57.45c6.89,17.57,15.07,44,17.37,92.76,2.51,52.73,3.08,68.54,3.32,202s-.23,149.31-2.54,202c-2.13,48.75-10.21,75.23-17,92.89-9,23.35-19.85,40-37.31,57.56s-34.09,28.38-57.43,37.5c-17.6,6.87-44.07,15.07-92.76,17.39-52.73,2.48-68.53,3-202.05,3.29s-149.27-.25-202-2.53m407.6-674.61a60,60,0,1,0,59.88-60.1,60,60,0,0,0-59.88,60.1M245.77,503c.28,141.8,115.44,256.49,257.21,256.22S759.52,643.8,759.25,502,643.79,245.48,502,245.76,245.5,361.22,245.77,503m90.06-.18a166.67,166.67,0,1,1,167,166.34,166.65,166.65,0,0,1-167-166.34"></path></svg> </a></li>
                            <li class="mr-5 text-xs">
                                <a class="block hover:text-white" href="https://in.linkedin.com/in/manas-patidar-597b38228?trk=public_profile_samename-profile" target="_blank" rel="noreferrer"><span class="sr-only">LinkedIn</span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="h-6 w-6" aria-hidden="true"><path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"></path></svg> </a></li>
                        </ul>
                    </div>
                </div>
                <div id='demo' className='relative hidden lg:flex mt-12 lg:mt-24 w-full p-0'>
                    <div id='data' className='hidden absolute -top-3 flex w-full justify-between px-5 z-50 text-xl font-gray-400'>
                        <div>Welcome</div>
                        <div>About</div>
                        <div>Projects</div>
                        <div>Fine</div>
                        <div>Newtube</div>
                        <div>Crevate</div>
                        <div>More</div>
                    </div>
                    <div id='pointer' style={{ position: "fixed", left: posx + "px", top: posy + "px", width: "100px", height: "100px", backgroundColor: "transparent", textAlign: "center" }} className='flex m-0 items-center justify-center text-white font-xl border-2 border-slate-400 rounded-full' >{page}</div>
                    <input type="range" defaultValue="0" step="0.001" min="0" max="7" className=' m-0 slider' placeholder='4' id="myRange" onMouseDown={(e) => { mousedown(e.target.value) }} onMouseUp={(e) => { mouseup(e.target.value) }} onChange={(e) => { changefunc(e.target.value) }} /></div>
                <div id='welcome' className='flex flex-col lg:flex-row mt-10 lg:mt-24 mx-4 lg:mx-10'>

                    <div className='flex flex-col   lg:w-4/5'>
                        <div className='font-thin text-5xl lg:text-8xl border-b-2 w-fit p-2 mb-4 	pl-2 border-slate-700'>Welcome</div>
                        <p className='font-light text-base lg:text-xl border-l-2	pl-2 border-slate-300	text-slate-400	'>
                            Manas Patidar, a  passionate Software Engineering student graduating in 2025, excels in web development, programming, data structures, and algorithms. Proficient in HTML, CSS, JavaScript, React, and Node.js, he creates user-friendly web applications. With a track record of participating in hackathons, he has honed teamwork and problem-solving skills. Seeking opportunities to positively impact software development, explore his portfolio for more. Let's connect and collaborate for mutual growth and success!</p>

                    </div>
                    <div className=' h-fit self-end ml-20 mb-10 '>
                        <button className='hidden lg:block text-balance place-self-center bg-transparent hover:bg-teal-300 text-teal-700 font-semibold hover:text-white py-2 px-4 border border-teal-300 hover:border-transparent rounded' onClick={() => {
                            document.getElementById("welcome").style.display = "none"
                            document.getElementById("about").style.display = "flex"
                            document.getElementById("myRange").value = "1"
                            setposx(prex + (1 * brk))
                            setpage("About")
                        }}>About Me-&gt;</button>
                    </div>
                </div>
                <div id='about' className=' lg:hidden flex mt-10 lg:mt-24 mx-4 lg:mx-10'>

                    <div className='flex flex-col h-full overflow-y-auto w-full  lg:w-10/12'>
                        <div className='font-thin text-5xl lg:text-5xl border-b-2 w-fit p-2 mb-4 	pl-2 border-slate-700'>About Me!</div>
                        <p className='font-light text-base lg:text-xl border-l-2	pl-2 border-slate-300	text-slate-400	'>
                            Pursuing B.Tech in Parul University, graduating in 2025. Learning and exploring things. Interested in back-end development and React. Passionate about technology and coding. Open to new challenges and opportunities. Building web applications excites me. Eager to contribute to innovative projects. Always seeking growth and improvement. Let's connect and create something amazing together!</p>
                        <div className='font-light text-xl m-0 pl-2 border-2 mt-4 rounded-lg border-slate-800 text-slate-400 lg:mr-20	'>
                            <div className='font-semibold text-2xl lg:text-3xl w-fit p-2	pl-2'>Skills</div>
                            <div className='flex flex-wrap mt-2 mb-2 gap-2 lg:gap-4'>
                                <a href='http' className='border-2 text-base text-slate-200 border-slate-600 rounded-lg px-4 py-2 cursor-pointer hover:text-lg hover:text-teal-300 hover:border-teal-300'>React js </a>
                                <a href='http' className='border-2 text-base text-slate-200 border-slate-600 rounded-lg px-4 py-2 cursor-pointer hover:text-lg hover:text-teal-300 hover:border-teal-300'>Node </a>
                                <a href='http' className='border-2 text-base text-slate-200 border-slate-600 rounded-lg px-4 py-2 cursor-pointer hover:text-lg hover:text-teal-300 hover:border-teal-300'>Express </a>
                                <a href='http' className='border-2 text-base text-slate-200 border-slate-600 rounded-lg px-4 py-2 cursor-pointer hover:text-lg hover:text-teal-300 hover:border-teal-300'>Javascript </a>
                                <a href='http' className='border-2 text-base text-slate-200 border-slate-600 rounded-lg px-4 py-2 cursor-pointer hover:text-lg hover:text-teal-300 hover:border-teal-300'>Problem Solving </a>
                                <a href='http' className='border-2 text-base text-slate-200 border-slate-600 rounded-lg px-4 py-2 cursor-pointer hover:text-lg hover:text-teal-300 hover:border-teal-300'>HTML </a>
                                <a href='http' className='border-2 text-base text-slate-200 border-slate-600 rounded-lg px-4 py-2 cursor-pointer hover:text-lg hover:text-teal-300 hover:border-teal-300'>Css / Scss </a>
                                <a href='http' className='border-2 text-base text-slate-200 border-slate-600 rounded-lg px-4 py-2 cursor-pointer hover:text-lg hover:text-teal-300 hover:border-teal-300'>Mongoose  </a>
                                <a href='http' className='border-2 text-base text-slate-200 border-slate-600 rounded-lg px-4 py-2 cursor-pointer hover:text-lg hover:text-teal-300 hover:border-teal-300'>Data Structures </a>
                                <a href='http' className='border-2 text-base text-slate-200 border-slate-600 rounded-lg px-4 py-2 cursor-pointer hover:text-lg hover:text-teal-300 hover:border-teal-300'>Algorithm </a>
                                <a href='http' className='border-2 text-base text-slate-200 border-slate-600 rounded-lg px-4 py-2 cursor-pointer hover:text-lg hover:text-teal-300 hover:border-teal-300'>C++ </a>
                                <a href='http' className='border-2 text-base text-slate-200 border-slate-600 rounded-lg px-4 py-2 cursor-pointer hover:text-lg hover:text-teal-300 hover:border-teal-300'>Python </a>
                                <a href='http' className='border-2 text-base text-slate-200 border-slate-600 rounded-lg px-4 py-2 cursor-pointer hover:text-lg hover:text-teal-300 hover:border-teal-300'>Version Control </a>
                                <a href='http' className='border-2 text-base text-slate-200 border-slate-600 rounded-lg px-4 py-2 cursor-pointer hover:text-lg hover:text-teal-300 hover:border-teal-300'>Responsive design </a>
                                <a href='http' className='border-2 text-base text-slate-200 border-slate-600 rounded-lg px-4 py-2 cursor-pointer hover:text-lg hover:text-teal-300 hover:border-teal-300'>Problem Solving </a>
                            </div>
                        </div>


                    </div>
                    <div className=' h-fit self-end lg:ml-10 mb-10 '>
                        <button className='hidden lg:block bg-transparent hover:bg-teal-300 text-teal-700 font-semibold hover:text-white py-2 px-4 border border-teal-300 hover:border-transparent rounded' onClick={() => {
                            document.getElementById("about").style.display = "none"
                            document.getElementById("projects").style.display = "flex"
                            document.getElementById("myRange").value = "2.3"
                            setposx(prex + (2.3 * brk))
                            setpage("Projects")
                        }}>Projects-&gt;</button>
                    </div>

                </div>
                <div id='projects' className='lg:hidden flex mt-10 lg:mt-20 mx-4 lg:mx-10'>

                    <div className='flex flex-col sm:w-full  lg:w-10/12'>
                        <div className='font-thin text-5xl lg:text-5xl border-b-2 w-fit p-2 mb-4 border-slate-700'>Projects</div>
                        <p className='font-light text-base lg:text-xl border-l-2	pl-2 border-slate-300	text-slate-400	'>Transforming Concepts into Reality</p>
                        <div className='hidden lg:block relative font-light sm:text-base lg:text-xl m-0 pl-2 border-2 mt-4 rounded-lg border-slate-800 text-slate-400 mr-20	'>
                            <div className='font-semibold text-3xl w-fit lg:pl-2 pt-2'>Fine</div>
                            <div className='flex flex-wrap mt-2 mb-2 gap-4 lg:pl-2'>
                                Empowering Financial Connections: Fintech Web App Linking Loan Seekers, Providers & Startup Investors
                            </div>
                            <button className='hidden lg:block absolute top-2 right-2 bg-transparent hover:bg-white text-white text-base font-medium hover:text-black py-2 px-4 border border-white hover:border-transparent rounded' onClick={() => {
                            document.getElementById("projects").style.display = "none"
                            document.getElementById("fine").style.display = "flex"
                            document.getElementById("myRange").value = "3.5"
                            setposx(prex + (3.5 * brk))
                            setpage("Fine")
                        }}>Explore</button>

                        </div>
                        <div className='hidden lg:block relative font-light text-xl m-0 pl-2 border-2 mt-4 rounded-lg border-slate-800 text-slate-400 mr-20	'>
                            <div className='font-semibold text-3xl w-fit pl-2 pt-2'>Newtube</div>
                            <div className='flex flex-wrap mt-2 mb-2 gap-4 pl-2'>
                                Seamless Video Streaming: Watch, Upload, and More!
                            </div>
                            <button className='hidden lg:block absolute top-2 right-2 bg-transparent hover:bg-white text-white text-base font-medium hover:text-black py-2 px-4 border border-white hover:border-transparent rounded' onClick={() => {
                            document.getElementById("projects").style.display = "none"
                            document.getElementById("newtube").style.display = "flex"
                            document.getElementById("myRange").value = "4.7"
                            setposx(prex + (4.7 * brk))
                            setpage("Newtube")
                        }}>Explore</button>

                        </div>
                        <div className='hidden lg:block relative font-light text-xl m-0 pl-2 border-2 mt-4 rounded-lg border-slate-800 text-slate-400 mr-20	'>
                            <div className='font-semibold text-3xl w-fit pl-2 pt-2'>Crevate</div>
                            <div className='flex flex-wrap mt-2 mb-2 gap-4 pl-2'>
                                Connect, Post, Like: Your Personal Social Platform
                            </div>
                            <button className='hidden lg:block absolute top-2 right-2 bg-transparent hover:bg-white text-white text-base font-medium hover:text-black py-2 px-4 border border-white hover:border-transparent rounded' onClick={() => {
                            document.getElementById("projects").style.display = "none"
                            document.getElementById("crevate").style.display = "flex"
                            document.getElementById("myRange").value = "6"
                            setposx(prex + (6 * brk))
                            setpage("Crevate")
                        }}>Explore</button>

                        </div>


                    </div>
                    
                </div>
                <div id='fine' className='lg:hidden flex mt-10 lg:mt-24 mx-4 lg:mx-10'>

                    <div className='flex flex-col  w-full lg:w-10/12'>
                        <div className='font-thin text-3xl lg:text-5xl border-b-2 w-fit p-2 mb-4 	pl-2 border-slate-700'>Fine</div>
                        <p className='font-light text-base lg:text-xl border-l-2	pl-2 border-slate-300	text-slate-400	'>Empowering Financial Connections: Our Fintech Web App, built on the MERN stack, revolutionizes the way Loan Seekers, Loan Providers, and Startup Investors interact. With a robust verification feature, we ensure secure and credible connections. Discover funding opportunities with confidence as our platform verifies user profiles, enhancing transparency and trust. Connect, invest, or seek funding hassle-free. Join us today and experience a cutting-edge platform tailored to your financial needs!</p>

                        <div className='flex gap-10 mt-10 pl-20 text-xl font-thin '>
                            <a href='https://fine-frontend.vercel.app/' target="_blank" className='cursor-pointer border-b-2 border-cyan-800	 p-2'>View Site </a>
                            <a href='https://github.com/PatidarManas/Fine-lets-hack-parul' target="_blank" className='cursor-pointer border-b-2 border-cyan-800	 p-2'>Github </a>

                        </div>



                    </div>
                    <div className='hidden lg:block h-fit self-end ml-10 mb-10 '>
                        <button className='hidden lg:block place-self-center bg-transparent hover:bg-teal-300 text-teal-700 font-semibold hover:text-white py-2 px-4 border border-teal-300 hover:border-transparent rounded' onClick={() => {
                            document.getElementById("fine").style.display = "none"
                            document.getElementById("newtube").style.display = "flex"
                            document.getElementById("myRange").value = "4.7"
                            setposx(prex + (4.7 * brk))
                            setpage("Newtube")
                        }}>Next-&gt;</button>
                    </div>
                </div>
                <div id='newtube' className='lg:hidden flex mt-10 lg:mt-24 mx-4 lg:mx-10'>

                    <div className='flex flex-col w-full lg:w-10/12'>
                        <div className='font-thin text-3xl lg:text-5xl border-b-2 w-fit p-2 mb-4 	pl-2 border-slate-700'>Newtube</div>
                        <p className='font-light text-base lg:text-xl border-l-2	pl-2 border-slate-300	text-slate-400	'>Seamless Video Streaming: Our advanced platform, built on the powerful MERN stack, offers an exceptional video streaming experience. With a user-friendly interface, users can effortlessly watch and upload videos. To ensure a safe environment, our platform includes robust user authorization and age restriction features. Engage with content through comments and access insightful video analytics for creators. Moreover, admin routes enable efficient content management and moderation. Enjoy an all-in-one video streaming platform designed to cater to your entertainment needs!</p>

                        <div className='flex gap-10 mt-10 pl-20 text-xl font-thin '>
                            <div className='cursor-pointer border-b-2 border-cyan-800	cursor-pointer p-2'>Coming Soon! </div>
                            {/* <a href='http' className='cursor-pointer border-b-2 border-cyan-800	 p-2'>Github </a> */}

                        </div>



                    </div>
                    <div className='hidden lg:block h-fit self-end ml-10 mb-10 '>
                        <button className='hidden lg:block place-self-center bg-transparent hover:bg-teal-300 text-teal-700 font-semibold hover:text-white py-2 px-4 border border-teal-300 hover:border-transparent rounded' onClick={() => {
                            document.getElementById("newtube").style.display = "none"
                            document.getElementById("crevate").style.display = "flex"
                            document.getElementById("myRange").value = "6"
                            setposx(prex + (6 * brk))
                            setpage("Crevate")
                        }}>Next-&gt;</button>
                    </div>
                </div>
                <div id='crevate' className='lg:hidden flex mt-10 lg:mt-24 mx-4 lg:mx-10'>

                    <div className='flex flex-col w-full lg:w-10/12'>
                        <div className='font-thin text-3xl lg:text-5xl border-b-2 w-fit p-2 mb-4 	pl-2 border-slate-700'>Crevate</div>
                        <p className='font-light text-base lg:text-xl border-l-2	pl-2 border-slate-300	text-slate-400	'>Connect, Post, Like, and More: Welcome to Your Personal Social Platform! Built on the robust MERN stack, our platform offers seamless connectivity and social engagement. Enjoy the freedom to connect with friends, post updates, and share your interests effortlessly. With top-notch user authorization, your privacy is secure. Experience a dynamic timeline tailored to your preferences, keeping you updated with the latest from your network. Join us now and discover a personalized social experience like never before!</p>

                        <div className='flex gap-10 mt-10 pl-20 text-xl font-thin '>
                            {/* <a href='http' className='cursor-pointer border-b-2 border-cyan-800	 p-2'>Coming Soon! </a> */}
                            <a href='https://github.com/PatidarManas/crevate' target="_blank" className='cursor-pointer border-b-2 border-cyan-800	 p-2'>Github </a>

                        </div>



                    </div>
                    <div className='hidden lg:block h-fit self-end ml-10 mb-10 '>
                        <button className='hidden lg:block place-self-center bg-transparent hover:bg-teal-300 text-teal-700 font-semibold hover:text-white py-2 px-4 border border-teal-300 hover:border-transparent rounded' onClick={() => {
                            document.getElementById("crevate").style.display = "none"
                            document.getElementById("more").style.display = "flex"
                            document.getElementById("myRange").value = "7"
                            setposx(prex + (7 * brk))
                            setpage("More")
                        }}>More-&gt;</button>
                    </div>
                </div>
                <div id='more' className='lg:hidden flex mt-10 lg:mt-24 mx-4 lg:mx-10 mb-10 lg:mb-0'>

                    <div className='flex flex-col w-full lg:w-10/12'>
                        <div className='font-thin text-5xl border-b-2 w-fit p-2 mb-4 	pl-2 border-slate-700'>Achievements</div>
                        {/* <p className='font-light text-xl border-l-2	pl-2 border-slate-300	text-slate-400	'>Connect, Post, Like, and More: Welcome to Your Personal Social Platform! Built on the robust MERN stack, our platform offers seamless connectivity and social engagement. Enjoy the freedom to connect with friends, post updates, and share your interests effortlessly. With top-notch user authorization, your privacy is secure. Experience a href='http' dynamic timeline tailored to your preferences, keeping you updated with the latest from your network. Join us now and discover a href='http' personalized social experience like never before!</p> */}
                        <div className='flex flex-col pl-2 text-xl'>✅ Participated In various hackathons
                            <div className='pl-8 text-base mt-1 text-slate-400 cursor-pointer'>↪️ Solving for India Hackathon(GFG and Google Cloud) </div>
                            <div className='pl-8 text-base mt-1 text-slate-400 cursor-pointer'>↪️ Let's hack Parul(Devfolio ,Quine) </div>
                            <div className='pl-8 text-base mt-1 text-slate-400 cursor-pointer'>↪️ More!! </div>
                        </div>
                        <div className='flex flex-col pl-2 text-xl'>✅ Coding Platform Ratings
                            <div className='pl-8 text-base mt-1 text-slate-400 cursor-pointer'>↪️ ★ ★ on Codechef </div>
                            <div className='pl-8 text-base mt-1 text-slate-400 cursor-pointer'>↪️ 75+ Problems solved onGFG(180+ points) </div>
                            <div className='pl-8 text-base mt-1 text-slate-400 cursor-pointer'>↪️ More!! </div>
                        </div>
                        <div className='flex flex-col pl-2 text-xl'>✅ Other Skills
                            <div className='pl-8 text-base mt-1 text-slate-400 cursor-pointer'>↪️ Leaded Team Events </div>
                            <div className='pl-8 text-base mt-1 text-slate-400 cursor-pointer'>↪️ Intelectual </div>
                            <div className='pl-8 text-base mt-1 text-slate-400 cursor-pointer'>↪️ More!! </div>
                        </div>




                    </div>

                </div>


            </div>
        </div>
        
    )
}

export default Home