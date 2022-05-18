import React from 'react'
import placeholderImg from '../../assets/images/placeholderImg.jpg'
import './style.ListPictures.css'
import { motion } from 'framer-motion';
import { listVariants } from '../../utils/motion-anim';


export const ListPictures = ({ list }) => {
  return (
    <div className="paintings">
      {list.map((item, index) => {
        const imageUrl = item?.urls?.small
        // const imageUrl = 'https://test-front.framework.team' + item?.imageUrl
        // const imageUrl = 'https://test-front.framework.team' + item?.imageUrl
        const name = item?.name ?? item?.id ?? null
        const created_at = item?.created ?? item?.created_at ?? null
        const location = item?.location?.title ?? null
        const author = item?.authorName ?? item?.user.username ?? null
        return (
          <motion.div
            variants={listVariants}
            initial='hidden'
            animate='visible'
            transition={{
              duration: .25
            }}
            custom={index}
            className='paintings__item'
            key={index}
          >
            <img
              className="paintings__picture"
              src={imageUrl}
              alt={name}
              width={353}
              height={275}
              onError={({ currentTarget }) => {
                currentTarget.onerror = null
                currentTarget.src = placeholderImg
              }}
            />
            <div className='paintings__titleBlock'>
              <h4 className='paintings__title'> {name} </h4>
              {author && (<p>Author: <span>{author}</span></p>)}
              {created_at && (<p>Created: <span>{created_at}</span></p>)}
              {location && (<p>Location: <span>{location}</span></p>)}
            </div>
          </motion.div>
        )
      })}
    </div>
  )
}
export default ListPictures