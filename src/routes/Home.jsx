import ribbon from '../assets/ribbon.jpg'

const Home = () => {
  return (
    <div className="home">
      <div className='hero'>
        <img src={ribbon}/>
        <div>
          <h1>Welcome Fellow Engineers!</h1>
          <p>
            This club will help you develop your professional engineering skills to land a great internship and a dream job in hardware, software, and robotics.
            You will learn invaluable skills including printed circuit board (PCB) design, Altium, soldering, digital multimeter, power supply, programming, troubleshooting, oscilloscope, 3D printing, computer-aided design (CAD), and simulation.
            The Institute of Electronics and Electrical Engineering is a professional association headquartered in New York City, dedicated to advancing technological innovation and excellence.
            Design Electronics and join the team that makes it happen!
          </p>
        </div>
      </div>
    </div>
  )}
  

export default Home