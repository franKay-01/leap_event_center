import './App.css';
import image1 from './dist/images/feature-icon-01.svg';
import image2 from './dist/images/feature-icon-02.svg';
import image3 from './dist/images/feature-icon-03.svg';
import image4 from './dist/images/feature-icon-04.svg';
import image5 from './dist/images/feature-icon-05.svg';
import image6 from './dist/images/feature-icon-06.svg';
import barcode from './dist/images/barcode_img.svg';
import meetingImg from './dist/images/meeting.png';
import shoppingImg from './dist/images/shopping.png';
import work_teamImg from './dist/images/work_team.png';
import winter_tree from './dist/images/winter_tree.png';

function App() {
  return (
  <div class="is-boxed has-animations">
    <div class="body-wrap">
        <header class="site-header">
            <div class="container">
                <div class="site-header-inner">
                    <div class="brand header-brand">
                        <h1 class="m-0">
                          <a href="#"><img class="header-logo-image" src="" alt="Logo"/></a>
                        </h1>
                    </div>
                </div>
            </div>
        </header>
        <main>
          <section class="hero">
            <div class="container">
              <div class="hero-inner">
                <div class="hero-copy">
                  <h1 class="hero-title mt-0 text-left">Leap Events Center</h1>
                  <p class="hero-paragraph text-left">Coming to Hagerstown soon.</p>

                  <div class="flex flex-row space-x-3">
                    <a target="_blank" href="https://www.instagram.com/Leap_eventscenter/">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-instagram w-12 h-12 fas" viewBox="0 0 16 16">
                        <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"/>
                      </svg>
                    </a>
                    <a href='#'>
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-envelope w-12 h-12 fas" viewBox="0 0 16 16">
                        <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z"/>
                      </svg>
                      {/* <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-envelope-paper w-12 h-12 fas" viewBox="0 0 16 16">
                        <path d="M4 0a2 2 0 0 0-2 2v1.133l-.941.502A2 2 0 0 0 0 5.4V14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V5.4a2 2 0 0 0-1.059-1.765L14 3.133V2a2 2 0 0 0-2-2H4Zm10 4.267.47.25A1 1 0 0 1 15 5.4v.817l-1 .6v-2.55Zm-1 3.15-3.75 2.25L8 8.917l-1.25.75L3 7.417V2a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v5.417Zm-11-.6-1-.6V5.4a1 1 0 0 1 .53-.882L2 4.267v2.55Zm13 .566v5.734l-4.778-2.867L15 7.383Zm-.035 6.88A1 1 0 0 1 14 15H2a1 1 0 0 1-.965-.738L8 10.083l6.965 4.18ZM1 13.116V7.383l4.778 2.867L1 13.117Z"/>
                      </svg> */}
                    </a>
                  </div>
                </div>
                <div class="hero-figure anime-element">
                  <svg class="placeholder" width="528" height="396" viewBox="0 0 528 396">
                    <rect width="528" height="396" style={{ fill:'transparent'}} />
                  </svg>
                  <div class="hero-figure-box hero-figure-box-01" data-rotation="45deg" style={{ transform: 'rotate(45deg) scale(1)', opacity: 1}}></div>
                  <div class="hero-figure-box hero-figure-box-02" data-rotation="-45deg"></div>
                  <div class="hero-figure-box hero-figure-box-03" data-rotation="0deg"></div>
                  <div class="hero-figure-box hero-figure-box-04" data-rotation="-135deg"></div>
                  <div class="hero-figure-box hero-figure-box-05"></div>
                  <div class="hero-figure-box hero-figure-box-06"></div>
                  <div class="hero-figure-box hero-figure-box-07"></div>
                  <div class="hero-figure-box hero-figure-box-08" data-rotation="-22deg"></div>
                  <div class="hero-figure-box hero-figure-box-09" data-rotation="-52deg"></div>
                  <div class="hero-figure-box hero-figure-box-10" data-rotation="-50deg"></div>
                </div>
              </div>
            </div>
          </section>
          <section class="features section">
            <div class="container">
              <div class="features-inner section-inner has-bottom-divider grid lg:grid-cols-2 md:grid-cols-2 xl:grid-cols-2 sm:grid-cols-1 lg:space-x-36 md:space-x-36 xl:space-x-36">
                <div class="feature text-left is-revealing">
                  <div class="feature-inner">
                    
                    <h1 class="hero-title mt-20 w-80">Let us host your Special events:</h1>
                    <h4 class="text-sm mb-0">Celebrations, Art expositions, Meetings, Fundraisers, Promotional events, Birthdays, Weddings, Proms, Team buildings, Workshops, Popup shops.</h4>
                   
                  </div>
                </div>
                <div class="text-left is-revealing grid justify-center mt-12">
                  <img src={barcode}/>
                </div>
              </div> 
            </div>
            <div class="has-bottom-divider grid mb-60 lg:grid-cols-2 md:grid-cols-2 xl:grid-cols-2 sm:grid-cols-1 lg:space-x-28 md:space-x-28 xl:space-x-28">
              <div className='winter_figure'>
                <img src={winter_tree}/>
              </div>
              <div class="feature text-left is-revealing">
                  <div class="feature-inner mt-4 lg:mt-20 md:mt-20 xl:mt-20">
                    
                    <h1 class="hero-title mt-24 w-80">Contact us for Booking:</h1>
                    <span class="flex flex-col">
                      <a href="tel:2403109795"><span class="text-lg mb-0">tel:: 240-310-9795</span></a>
                      <a href="mailto:Info@leapeventscenter.com" className='w-max'><span class="text-lg mb-0">email:: Info@leapeventscenter.com</span></a>

                    </span>
                   
                  </div>
                </div>
            </div>
            {/* <div class="container">
              <div class="features-inner section-inner has-bottom-divider">
                <div class="features-wrap">
                  <div class="feature text-center is-revealing">
                    <div class="feature-inner">
                      <div class="feature-icon">
                        <img src={image1} alt="Feature 01"/>
                      </div>
                      <h4 class="feature-title mt-24">Be Productive</h4>
                      <img src={meetingImg} />
                    </div>
                  </div>
                  <div class="feature text-center is-revealing">
                    <div class="feature-inner">
                      <div class="feature-icon">
                        <img src={image2} alt="Feature 02"/>
                      </div>
                      <h4 class="feature-title mt-24">Be Productive</h4>
                      <img src={shoppingImg} />
                    </div>
                  </div>
                  <div class="feature text-center is-revealing">
                    <div class="feature-inner">
                      <div class="feature-icon">
                        <img src={image3} alt="Feature 03"/>
                      </div>
                      <h4 class="feature-title mt-24">Be Productive</h4>
                      <img src={work_teamImg} />
                    </div>
                  </div>
                </div>
              </div>
            </div> */}
            <div className='relative'>
              <div class="footer_bg">
                <div class="footer_bg_one"></div>
                <div class="footer_bg_two"></div>
              </div>
              
            </div>
            <div class="footer_bottom">
                <div class="container">
                  <div class="flex space-x-11">
                    <span class="flex flex-row">
                      <p class="mb-0 f_400">© Leap Events Center 2023.</p>
                    </span>
                    <span class=" right-0">
                      <p>By <a href="#" target="_blank">Leap Events Center</a></p>
                    </span>
                  </div>
                </div>
              </div>
            
          </section>
        </main>
      </div>
    </div>
  );
}

export default App;
