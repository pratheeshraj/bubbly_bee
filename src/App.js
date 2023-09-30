import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import close from "./image/x-circle (1) 1 (1).png"
import { motion } from 'framer-motion';
import { AiFillCloseCircle } from "react-icons/ai"
import { IoIosArrowForward } from "react-icons/io"
function App() {
  useEffect(() => {
    setPopup(true)
  }, [])
  const [marketing, setMarketing] = useState(false)
  const [wellcome, setWellcome] = useState(true)
  const [popup, setPopup] = useState(true)
  const [finance, setFinance] = useState(false)
  const [business, setBusiness] = useState(false)
  const [creativity, setCreativity] = useState(false)
  const [leadership, setLeadership] = useState(false)
  const [train, setTrain] = useState(false)


  const marketingcontent = () => {
    setMarketing(true)
    setWellcome(false)
    setFinance(false)
    setBusiness(false)
    setCreativity(false)
    setLeadership(false)
    setTrain(false)
  }
  const financecontent = () => {
    setMarketing(false)
    setWellcome(false)
    setFinance(true)
    setBusiness(false)
    setCreativity(false)
    setLeadership(false)
    setTrain(false)
  }
  const businesscontent = () => {
    setMarketing(false)
    setWellcome(false)
    setFinance(false)
    setBusiness(true)
    setCreativity(false)
    setLeadership(false)
    setTrain(false)
  }
  const creativitycontent = () => {
    setMarketing(false)
    setWellcome(false)
    setFinance(false)
    setBusiness(false)
    setCreativity(true)
    setLeadership(false)
    setTrain(false)
  }
  const leadershipcontent = () => {
    setMarketing(false)
    setWellcome(false)
    setFinance(false)
    setBusiness(false)
    setCreativity(false)
    setLeadership(true)
    setTrain(false)
  }
  const traincontent = () => {
    setMarketing(false)
    setWellcome(false)
    setFinance(false)
    setBusiness(false)
    setCreativity(false)
    setLeadership(false)
    setTrain(true)
  }
  console.log(marketing);
  return (
    <div className="App">
      {
        popup ? <div className='home_popup_background'>
          <motion.div initial={{ x: "-190%", y: "-10%" }} animate={{ x: "50%", y: "-10%" }} transition={{ type: "spring", damping: 12, duration: 2, }} className='home_popup'>
            <div className='home_popup_container' style={{ display: wellcome ? "flex" : "none" }}>
              <div className='home_popup_top'>
                <div className='home_popup_top_content'>
                  <AiFillCloseCircle className='icon' onClick={() => setPopup(false)} />
                </div>
              </div>
              <h3>Welcome to <span>BUBBLY BEE!
              </span></h3>
              <p>Our end-to-end virtual solution hub have 6 streams to begin with! You can also scroll down to see the solutions we provide in here! Let’s begin your earning journey!.</p>
              <div className='popup_btn'>
                <button onClick={marketingcontent}>Next <motion.div initial={{ x: 0 }} animate={{ x: "10px" }} transition={{ duration: .9, repeat: Infinity }} >
                  <IoIosArrowForward className='btn_icon'></IoIosArrowForward>
                </motion.div></button>
              </div>
            </div>
            {/* Marketing Stream*/}
            <div className='home_popup_container' style={{ display: marketing ? "flex" : "none" }}>
              <div className='home_popup_top'>
                <div className='home_popup_top_content'>
                  <AiFillCloseCircle className='icon' onClick={() => setPopup(false)} />
                </div>
              </div>
              <h3>Marketing Stream</h3>
              <p>Unlock the secrets of digital marketing success. From SEO to social media strategies, our comprehensive courses cover it all. Elevate your brand presence and conversion rates.</p>
              <div className='popup_btn'>
              <a href="#">Explore</a>
                <button onClick={financecontent}>Next <motion.div initial={{ x: 0 }} animate={{ x: "10px" }} transition={{ duration: .9, repeat: Infinity }}>
                  <IoIosArrowForward className='btn_icon'></IoIosArrowForward>
                </motion.div></button>
              </div>
            </div>
{/* Finance Stream: */}
            <div className='home_popup_container' style={{ display: finance ? "flex" : "none" }}>
              <div className='home_popup_top'>
                <div className='home_popup_top_content'>
                  <AiFillCloseCircle className='icon' onClick={() => setPopup(false)} />
                </div>
              </div>
              <h3>Finance Stream</h3>
              <p>Master financial management with expert guidance. Learn investment strategies, budgeting, and financial planning. Secure your financial future with our tailored courses.</p>
              <div className='popup_btn'>
              <a href="#">Explore</a>
                <button onClick={businesscontent}>Next <motion.div initial={{ x: 0 }} animate={{ x: "10px" }} transition={{ duration: .9, repeat: Infinity }}>
                  <IoIosArrowForward className='btn_icon'></IoIosArrowForward>
                </motion.div></button>
              </div>
            </div> 
{/* Business & Entrepreneurship Stream */}
            <div className='home_popup_container' style={{ display: business ? "flex" : "none" }}>
              <div className='home_popup_top'>
                <div className='home_popup_top_content'>
                  <AiFillCloseCircle className='icon' onClick={() => business(false)} />
                </div>
              </div>
              <h3>Business & Entrepreneurship Stream</h3>
              <p>Turn your ideas into thriving businesses. Explore entrepreneurship essentials, from startup to scaling. Empower yourself to lead with innovation and resilience.</p>
              <div className='popup_btn'>
              <a href="#">Explore</a>
                <button onClick={creativitycontent}>Next <motion.div initial={{ x: 0 }} animate={{ x: "10px" }} transition={{ duration: .9, repeat: Infinity }}>
                  <IoIosArrowForward className='btn_icon'></IoIosArrowForward>
                </motion.div></button>
              </div>
            </div>
{/* Creativity & Innovation Stream */}
            <div className='home_popup_container' style={{ display: creativity ? "flex" : "none" }}>
              <div className='home_popup_top'>
                <div className='home_popup_top_content'>
                  <AiFillCloseCircle className='icon' onClick={() => setPopup(false)} />
                </div>
              </div>
              <h3>Creativity & Innovation Stream</h3>
              <p>Foster creativity and innovation within your organization. Discover tools and techniques to spark creative thinking and drive innovation from concept to execution.</p>
              <div className='popup_btn'>
              <a href="#">Explore</a>
                <button onClick={leadershipcontent}>Next <motion.div initial={{ x: 0 }} animate={{ x: "10px" }} transition={{ duration: .9, repeat: Infinity }}>
                  <IoIosArrowForward className='btn_icon'></IoIosArrowForward>
                </motion.div></button>
              </div>
            </div>
{/* Leadership Stream */}
            <div className='home_popup_container' style={{ display: leadership ? "flex" : "none" }}>
              <div className='home_popup_top'>
                <div className='home_popup_top_content'>
                  <AiFillCloseCircle className='icon' onClick={() => setPopup(false)} />
                </div>
              </div>
              <h3>Leadership Stream</h3>
              <p>Forge effective leaders. Develop leadership skills, communication, and team management. Lead confidently in any industry with our leadership training.</p>
              <div className='popup_btn'>
              <a href="#">Explore</a>
                <button onClick={traincontent}>Next <motion.div initial={{ x: 0 }} animate={{ x: "10px" }} transition={{ duration: .9, repeat: Infinity }}>
                  <IoIosArrowForward className='btn_icon'></IoIosArrowForward>
                </motion.div></button>
              </div>
            </div>
{/* Train the Trainer Stream */}
            <div className='home_popup_container' style={{ display: train ? "flex" : "none" }}>
              <div className='home_popup_top'>
                <div className='home_popup_top_content'>
                  <AiFillCloseCircle className='icon' onClick={() => setPopup(false)} />
                </div>
              </div>
              <h3>Train the Trainer Stream</h3>
              <p>Become a master educator. Learn the art of training, coaching, and mentoring others. Equip yourself to inspire and empower future leaders.</p>
              <div className='popup_btn'>
              <a href="#">Explore</a>
                <button onClick={()=>setPopup(false)}>Ok<motion.div initial={{ x: 0 }} animate={{ x: "10px" }} transition={{ duration: .9, repeat: Infinity }}>
                  <IoIosArrowForward className='btn_icon'></IoIosArrowForward>
                </motion.div></button>
              </div>
            </div>
          </motion.div>
        </div>

          : ""
      }
      hi
    </div>
  );
}

export default App;
