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
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, cumque. Non a laborum quos reprehenderit sint fuga libero nostrum omnis aut suscipit, corrupti ab ducimus modi ea rem porro ullam?
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, cumque. Non a laborum quos reprehenderit sint fuga libero nostrum omnis aut suscipit, corrupti ab ducimus modi ea rem porro ullam?
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, cumque. Non a laborum quos reprehenderit sint fuga libero nostrum omnis aut suscipit, corrupti ab ducimus modi ea rem porro ullam?
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni soluta porro praesentium non ducimus enim nobis, tempora in maxime commodi cupiditate ipsa aut saepe! Dolorem commodi sit architecto molestiae quasi.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, cumque. Non a laborum quos reprehenderit sint fuga libero nostrum omnis aut suscipit, corrupti ab ducimus modi ea rem porro ullam?
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, cumque. Non a laborum quos reprehenderit sint fuga libero nostrum omnis aut suscipit, corrupti ab ducimus modi ea rem porro ullam?
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, cumque. Non a laborum quos reprehenderit sint fuga libero nostrum omnis aut suscipit, corrupti ab ducimus modi ea rem porro ullam?
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni soluta porro praesentium non ducimus enim nobis, tempora in maxime commodi cupiditate ipsa aut saepe! Dolorem commodi sit architecto molestiae quasi.
            </p>
          </div>
          <div>
            <h1>Active Projects</h1>
            <a href="https://ieeesoutheastcon.org/student-competitions/">Mining Mayhem</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About