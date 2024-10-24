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
            Here, you will learn invaluable skills including printed circuit board (PCB) design, Altium, soldering, digital multimeter, power supply, programming, troubleshooting, oscilloscope, 3D printing, computer-aided design (CAD), and simulation.
            This club is a branch of the <a className='text-blue-600 font-bold' href="https://www.ieee.org/">Institute of Electronic & Electrical Engineering (IEEE)</a>. 
            Headquartered in New York City, we are an international organization dedicated to advancing technological innovation and excellence.
            Our mission is to foster a collaborative environment where students can work on cutting-edge projects, participate in competitions, and network with industry professionals. 
            We provide resources, mentorship, and hands-on experience to help you excel in your engineering career. Whether you're interested in hardware design, software development, or robotics, 
            our club offers a platform to explore your interests and develop your skills. Join us for workshops, guest lectures, and team projects that will challenge you and expand your knowledge. 
            By being a part of our club, you'll gain access to a network of like-minded individuals and professionals who share your passion for engineering and technology.
            Here, we learn through the principles of the Dreyfus Learning Model, which emphasizes hands-on experience, mentorship, and collaboration.
            We welcome students from all backgrounds and disciplines to join us in our mission to inspire innovation and creativity in the field of engineering. Become part of the future today!
          </p>
          <div>
            <h2>Active Projects</h2>
            <a className="text-purple-500 text-lg font-bold" href="https://ieeesoutheastcon.org/student-competitions/">Mining Mayhem</a>
          </div>
        </div>
      </div>
    </div>
  )}
  

export default Home