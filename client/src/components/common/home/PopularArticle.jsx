import React from 'react';
import { Link } from 'react-router-dom';
import Article1 from '../../../assets/images/article1.png';

const PopularArticle = () => {
  return (
    <div className='row'>
      <div className='col-4'>
        <Link to='/' className='image'>
          <img src={Article1} alt='article1' />
        </Link>
      </div>
      <div className='col-8'>
        <div className='title-time'>
          <Link to='/'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas quod
            ipsam aliquam saepe, at totam excepturi exercitationem fugit,
            repellat magnam obcaecati. Consectetur quibusdam dignissimos
            praesentium magnam libero impedit itaque totam?
          </Link>
          <br />
          <span>8 day ago</span>
        </div>
      </div>
    </div>
  );
};

export default PopularArticle;
