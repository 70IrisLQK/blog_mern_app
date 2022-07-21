import React from 'react';
import Navbar from './Navbar';
import PopularArticle from './PopularArticle';

const Home = () => {
  return (
    <div className='home'>
      <Navbar />
      <div className='main-content'>
        <div className='container'>
          <div className='row'>
            <div className='col-8'>
              <h3>Article</h3>
            </div>
            <div className='col-4'>
              <div className='search-category-tag'>
                <div className='search'>
                  <h2>Search</h2>
                  <div className='form-group'>
                    <input
                      type='text'
                      className='form-control'
                      placeholder='Search'
                    />
                  </div>
                  <div className='form-group'>
                    <button className='btn btn-block'>Search</button>
                  </div>
                </div>
                <div className='popular-article'>
                  <div className='title'>
                    <h3>Popular Article</h3>
                  </div>
                  <PopularArticle />
                  <PopularArticle />
                  <PopularArticle />
                </div>
                <div className='flow-facebook'>
                  <div className='title'>
                    <h3>Following Me</h3>
                  </div>
                  <div className='image'>
                    <iframe
                      title='Flow facebook'
                      src='https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Ffacebook&tabs=timeline&width=340&height=150&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId'
                      style={{
                        width: '340',
                        height: '150',
                        style: 'border:none;overflow:hidden',
                        scrolling: 'no',
                        frameborder: '0',
                        allowFullScreen: 'true',
                        allow:
                          'autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share',
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
