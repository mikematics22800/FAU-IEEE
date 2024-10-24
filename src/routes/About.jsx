import { useState } from 'react'
import { ArrowForward, ArrowBack } from '@mui/icons-material'
import { IconButton } from '@mui/material'
import club_1 from '../assets/club_1.jpeg'
import club_2 from '../assets/club_2.jpeg'
import club_3 from '../assets/club_3.jpeg'
import club_4 from '../assets/club_4.jpeg'

const About = () => {
  const [i, setI] = useState(0)
  const images = [club_1, club_2, club_3, club_4]
  return (
    <div className="about">
      <div className='hero'>
        <div className='gallery'>
          <img src={images[i]}/>
          <div className='arrows'>
            <IconButton>
              <ArrowBack fontSize='large' onClick={() => setI(i === 0 ? images.length - 1 : i - 1)}/>
            </IconButton>
            <IconButton>
              <ArrowForward fontSize='large' onClick={() => setI(i === images.length - 1 ? 0 : i + 1)}/>
            </IconButton>
          </div>
        </div>
        <div className='text'>
          <div>
            <h1>Meet The Gang!</h1>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, cupiditate id mollitia cumque dolore excepturi culpa, velit tempora inventore totam veniam, exercitationem esse! Eius dicta obcaecati doloremque porro explicabo dolores?
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Soluta, sapiente animi dolore hic adipisci dignissimos earum minima dolorem quasi vitae? Dicta explicabo iste laborum eveniet sunt incidunt quaerat quidem vero!
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum necessitatibus accusamus, sunt omnis ipsum ipsam adipisci distinctio fugit reprehenderit dolorum culpa esse quo perspiciatis similique quisquam! Nobis a ullam quidem.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed blanditiis omnis eum sequi vero dicta totam possimus, temporibus, porro ipsam deserunt odio perferendis consequatur distinctio neque, eos optio quae! Nostrum?
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quod, commodi velit harum exercitationem assumenda praesentium! Aliquid deleniti, molestiae minima minus voluptate excepturi rerum iste debitis facilis cupiditate maiores accusamus!
            <p>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About