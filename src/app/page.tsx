export default function Home() {
  return (
    <>
      {/* preloader */}
      <div id="preloader">
        <div id="loader"></div>
      </div>

      {/* page wrap */}
      <div className="s-pagewrap">
        <div className="circles">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>

        {/* site header */}
        <header className="s-header">
          <div className="header-mobile">
            <span className="mobile-home-link">
              <a href="/">WXY PARK</a>
            </span>
            <a className="mobile-menu-toggle" href="#0">
              <span>Menu</span>
            </a>
          </div>

          <div className="row wide main-nav-wrap">
            <nav className="column lg-12 main-nav">
              <ul>
                <li>
                  <a href="/" className="home-link">
                    WXY PARK
                  </a>
                </li>
                <li className="current">
                  <a href="#intro" className="smoothscroll">
                    Intro
                  </a>
                </li>
                <li>
                  <a href="#about" className="smoothscroll">
                    About
                  </a>
                </li>
                <li>
                  <a href="#works" className="smoothscroll">
                    Works
                  </a>
                </li>
                <li>
                  <a href="#contact" className="smoothscroll">
                    Say Hello
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </header>

        {/* main content */}
        <main className="s-content">
          {/* intro */}
          <section id="intro" className="s-intro target-section">
            <div className="row intro-content wide">
              <div className="column">
                <div className="text-pretitle with-line">Hello!</div>
                <h1 className="text-huge-title">
                  I am <br />
                  Wonyoung Park, <br />
                  a IMC Specialist <br />
                  based in Seoul.
                </h1>
              </div>
              <ul className="intro-social">
                <li>
                  <a href="#0">Github</a>
                </li>
                <li>
                  <a href="#0">Facebook</a>
                </li>
                <li>
                  <a href="#0">Instagram</a>
                </li>
              </ul>
            </div>
            <a href="#about" className="intro-scrolldown smoothscroll">
              <svg width="24" height="24" viewBox="0 0 24 24" fillRule="evenodd" clipRule="evenodd">
                <path d="M11 21.883l-6.235-7.527-.765.644 7.521 9 7.479-9-.764-.645-6.236 7.529v-21.884h-1v21.883z" />
              </svg>
            </a>
          </section>

          {/* about */}
          <section id="about" className="s-about target-section">
            <div className="row about-info wide" data-animate-block>
              <div className="column lg-6 md-12 about-info__pic-block">
                <img
                  src="/images/about-photo.jpg"
                  srcSet="/images/about-photo.jpg 1x, /images/about-photo@2x.jpg 2x"
                  alt=""
                  className="about-info__pic"
                  data-animate-el
                />
              </div>
              <div className="column lg-6 md-12">
                <div className="about-info__text">
                  <h2 className="text-pretitle with-line" data-animate-el>
                    About Me
                  </h2>
                  <p className="attention-getter" data-animate-el>
                    2005년부터 브랜드 커뮤니케이션 분야에서 커리어를 쌓아왔습니다.
                    광고, 이벤트, 브랜드, 콘텐츠 및 홍보물 제작 등 브랜드 커뮤니케이션 전체를
                    경험해왔습니다. 막내 사원부터 팀장, 작은 회사를 운영하며 리더 역할도
                    수행했습니다. 제가 해왔던 업무들이 모두 성공적이였다고는 할 수 없지만
                    경험치만큼은 최고라 자부합니다. 또한 브랜드 커뮤니케이션은 혼자 할 수 있는
                    업무가 아니기 때문에 다양한 사람들과 협력을 통해 성과를 내는 데에 특화되어
                    있습니다. 각종 문서, 편집 프로그램을 기본적으로 다룰 수 있기 때문에
                    실무진과의 전략적 커뮤니케이션이 가능합니다.
                  </p>
                  <a href="/2024_CV_WonyoungPark.pdf" download className="btn btn--medium u-fullwidth" data-animate-el>
                    Download CV
                  </a>
                </div>
              </div>
            </div>

            <div className="row about-expertise" data-animate-block>
              <div className="column lg-12">
                <h2 className="text-pretitle" data-animate-el>
                  Expertise
                </h2>
                <ul className="skills-list h1" data-animate-el>
                  <li>Advertising/BTL Strategy</li>
                  <li>Brand Communication</li>
                  <li>Branding</li>
                  <li>Team Leading</li>
                  <li>Master's in Communicaions</li>
                </ul>
              </div>
            </div>

            <div className="row about-expertise" data-animate-block>
              <div className="column lg-12">
                <h2 className="text-pretitle" data-animate-el>
                  Skills
                </h2>
                <ul className="skills-list h1" data-animate-el>
                  <li>Photoshop & Illustator(Basic)</li>
                  <li>Final Cut</li>
                  <li>MS Office & Keynote</li>
                  <li>HTML & CSS Coding</li>
                </ul>
              </div>
            </div>

            <div className="row about-timelines" data-animate-block>
              <div className="column lg-6 tab-12">
                <h2 className="text-pretitle" data-animate-el>
                  Experience
                </h2>
                <div className="timeline" data-animate-el>
                  <div className="timeline__block">
                    <div className="timeline__bullet"></div>
                    <div className="timeline__header">
                      <h4 className="timeline__title">(주)거상엔터테인먼트</h4>
                      <h5 className="timeline__meta">공동대표이사</h5>
                      <p className="timeline__timeframe">2024 - 현재</p>
                    </div>
                    <div className="timeline__desc">
                      <p>유튜브 기획/운영, 영상 제작, 인플루언서 매니지먼트</p>
                    </div>
                  </div>
                  <div className="timeline__block">
                    <div className="timeline__bullet"></div>
                    <div className="timeline__header">
                      <h4 className="timeline__title">(주)루시퍼</h4>
                      <h5 className="timeline__meta">대표이사</h5>
                      <p className="timeline__timeframe">2017 - 현재</p>
                    </div>
                    <div className="timeline__desc">
                      <p>브랜드 런칭, IMC 캠페인, 콘텐츠 제작</p>
                    </div>
                  </div>
                  <div className="timeline__block">
                    <div className="timeline__bullet"></div>
                    <div className="timeline__header">
                      <h4 className="timeline__title">(주)골프존</h4>
                      <h5 className="timeline__meta">마케팅,브랜드전략팀</h5>
                      <p className="timeline__timeframe">2011 - 2016</p>
                    </div>
                    <div className="timeline__desc">
                      <p>브랜드 커뮤니케이션, 홍보물 제작, 광고 및 온오프라인 프로모션</p>
                    </div>
                  </div>
                  <div className="timeline__block">
                    <div className="timeline__bullet"></div>
                    <div className="timeline__header">
                      <h4 className="timeline__title">(주)SK마케팅앤컴퍼니</h4>
                      <h5 className="timeline__meta">프로모션사업부</h5>
                      <p className="timeline__timeframe">2008 - 2011</p>
                    </div>
                    <div className="timeline__desc">
                      <p>온오프라인 통합 프로모션</p>
                    </div>
                  </div>
                  <div className="timeline__block">
                    <div className="timeline__bullet"></div>
                    <div className="timeline__header">
                      <h4 className="timeline__title">(주)코래드/연하나로</h4>
                      <h5 className="timeline__meta">IMC본부</h5>
                      <p className="timeline__timeframe">2004 - 2008</p>
                    </div>
                    <div className="timeline__desc">
                      <p>온라인 광고 및 오프라인 프로모션</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="column lg-6 tab-12">
                <h2 className="text-pretitle" data-animate-el>
                  Education
                </h2>
                <div className="timeline" data-animate-el>
                  <div className="timeline__block">
                    <div className="timeline__bullet"></div>
                    <div className="timeline__header">
                      <h4 className="timeline__title">중앙대학교 커뮤니케이션 대학원</h4>
                      <h5 className="timeline__meta">전략/브랜드 커뮤니케이션</h5>
                      <p className="timeline__timeframe">2022 - 2025</p>
                    </div>
                  </div>
                  <div className="timeline__block">
                    <div className="timeline__bullet"></div>
                    <div className="timeline__header">
                      <h4 className="timeline__title">아주대학교 경영대학원</h4>
                      <h5 className="timeline__meta">최고경영자 과정</h5>
                      <p className="timeline__timeframe">2019 - 2021</p>
                    </div>
                  </div>
                  <div className="timeline__block">
                    <div className="timeline__bullet"></div>
                    <div className="timeline__header">
                      <h4 className="timeline__title">경북대학교</h4>
                      <h5 className="timeline__meta">신문방송학과</h5>
                      <p className="timeline__timeframe">1996 - 2004</p>
                    </div>
                  </div>
                  <div className="timeline__block">
                    <div className="timeline__bullet"></div>
                    <div className="timeline__header">
                      <h4 className="timeline__title">경신고등학교</h4>
                      <h5 className="timeline__meta"></h5>
                      <p className="timeline__timeframe">1993 - 1996</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* works */}
          <section id="works" className="s-works target-section">
            <div className="row works-portfolio">
              <div className="column lg-12" data-animate-block>
                <h2 className="text-pretitle" data-animate-el>
                  Recent Works
                </h2>
                <p className="h1" data-animate-el>
                  Here are some of my favorite projects I have done lately. Feel free to check them out.
                </p>

                <ul className="folio-list row block-lg-one-half block-stack-on-1000">
                  <li className="folio-list__item column" data-animate-el>
                    <a className="folio-list__item-link" href="#modal-01">
                      <div className="folio-list__item-pic">
                        <img
                          src="/images/portfolio/OKAYY.jpg"
                          srcSet="/images/portfolio/OKAYY.jpg 1x, /images/portfolio/okayy@2x.jpg 2x"
                          alt=""
                        />
                      </div>
                      <div className="folio-list__item-text">
                        <div className="folio-list__item-cat">Branding.</div>
                        <div className="folio-list__item-title">Cosmetic Brand,OKAYY!</div>
                      </div>
                    </a>
                    <a className="folio-list__proj-link" href="#" title="project link">
                      <svg width="15" height="15" viewBox="0 0 15 15" fill="none">
                        <path
                          d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z"
                          fill="currentColor"
                          fillRule="evenodd"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                    </a>
                  </li>

                  <li className="folio-list__item column" data-animate-el>
                    <a className="folio-list__item-link" href="#modal-02">
                      <div className="folio-list__item-pic">
                        <img
                          src="/images/portfolio/joymaru.jpg"
                          srcSet="/images/portfolio/joymaru.jpg 1x, /images/portfolio/joymaru@2x.jpg 2x"
                          alt=""
                        />
                      </div>
                      <div className="folio-list__item-text">
                        <div className="folio-list__item-cat">IMC.</div>
                        <div className="folio-list__item-title">Golfzon Joumaru Launching</div>
                      </div>
                    </a>
                    <a className="folio-list__proj-link" href="#" title="project link">
                      <svg width="15" height="15" viewBox="0 0 15 15" fill="none">
                        <path
                          d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z"
                          fill="currentColor"
                          fillRule="evenodd"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                    </a>
                  </li>

                  <li className="folio-list__item column" data-animate-el>
                    <a className="folio-list__item-link" href="#modal-03">
                      <div className="folio-list__item-pic">
                        <img
                          src="/images/portfolio/livekorea.jpg"
                          srcSet="/images/portfolio/livekorea.jpg 1x, /images/portfolio/livekorea@2x.jpg 2x"
                          alt=""
                        />
                      </div>
                      <div className="folio-list__item-text">
                        <div className="folio-list__item-cat">Youtube.</div>
                        <div className="folio-list__item-title">@foreignerskorea channel</div>
                      </div>
                    </a>
                    <a className="folio-list__proj-link" href="#" title="project link">
                      <svg width="15" height="15" viewBox="0 0 15 15" fill="none">
                        <path
                          d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z"
                          fill="currentColor"
                          fillRule="evenodd"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                    </a>
                  </li>

                  <li className="folio-list__item column" data-animate-el>
                    <a className="folio-list__item-link" href="#modal-04">
                      <div className="folio-list__item-pic">
                        <img
                          src="/images/portfolio/retail.jpg"
                          srcSet="/images/portfolio/retail.jpg 1x, /images/portfolio/retail@2x.jpg 2x"
                          alt=""
                        />
                      </div>
                      <div className="folio-list__item-text">
                        <div className="folio-list__item-cat">Retail.</div>
                        <div className="folio-list__item-title">Golfzon Park</div>
                      </div>
                    </a>
                    <a className="folio-list__proj-link" href="#" title="project link">
                      <svg width="15" height="15" viewBox="0 0 15 15" fill="none">
                        <path
                          d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z"
                          fill="currentColor"
                          fillRule="evenodd"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                    </a>
                  </li>
                </ul>
              </div>

              {/* Modal Templates Popup */}
              <div id="modal-01" hidden>
                <div className="modal-popup">
                  <img src="/images/portfolio/gallery/g-OKAYY.jpg" alt="" />
                  <div className="modal-popup__desc">
                    <h5>OKAYY!(오케이!)</h5>
                    <p>
                      OKAYY! 는 자체 개발한 야외 스포츠 활동에 최적화된 화장품 브랜드입니다. 선스틱,
                      두피 쿨링 스프레이, 폼클렌징 등의 상품이 있고 브랜딩, 제품 기획, 출시까지 모든
                      과정을 직접 진행하였습니다
                    </p>
                    <ul className="modal-popup__cat">
                      <li>Branding</li>
                      <li>Product Design</li>
                    </ul>
                  </div>
                  <a href="https://smartstore.naver.com/okayy/" target="_blank" className="modal-popup__details">
                    Project link
                  </a>
                </div>
              </div>

              <div id="modal-02" hidden>
                <div className="modal-popup">
                  <img src="/images/portfolio/gallery/g-joymaru.jpg" alt="" />
                  <div className="modal-popup__desc">
                    <h5>골프존 조이마루</h5>
                    <p>
                      골프존 조이마루는 대전 유성구에 건립한 골프 종합 레져공간이자 골프존 본사가 있는
                      복합 콤플렉스입니다. 네이밍, VI 등 브랜드 전략부터 다양한 광고, PR,
                      브랜딩(콘텐츠) 활동을 진행했습니다.
                    </p>
                    <ul className="modal-popup__cat">
                      <li>Branding, Advertising, PR, Event</li>
                    </ul>
                  </div>
                  <a href="https://golfzonzoimaru.co.kr" target="_blank" className="modal-popup__details">
                    Project link
                  </a>
                </div>
              </div>

              <div id="modal-03" hidden>
                <div className="modal-popup">
                  <img src="/images/portfolio/gallery/g-livekorea.jpg" alt="" />
                  <div className="modal-popup__desc">
                    <h5>한국살아 유튜브 채널</h5>
                    <p>
                      외국인들의 생생한 한국살이 체험기를 주제로 다양한 콘텐츠를 제작하고 있습니다.
                      콘텐츠 기획, 촬영, 편집의 일련의 프로세스를 전문가들과 함께 만들어가고 있습니다.
                    </p>
                    <ul className="modal-popup__cat">
                      <li>Planning, Video Production</li>
                    </ul>
                  </div>
                  <a href="https://www.youtube.com/@foreignerskorea/" target="_blank" className="modal-popup__details">
                    Project link
                  </a>
                </div>
              </div>

              <div id="modal-04" hidden>
                <div className="modal-popup">
                  <img src="/images/portfolio/gallery/g-retail.jpg" alt="" />
                  <div className="modal-popup__desc">
                    <h5>골프존파크</h5>
                    <p>
                      골프존파크 런칭 광고, 브랜딩, 매장 홍보제작물, 오프라인 이벤트, 점주 케어
                      프로모션 등 리테일 마케팅을 수행했습니다. 약 5000개 매장을 대상으로 하는
                      커뮤니케이션은 디테일한 전략을 기반이 되어야 합니다.
                    </p>
                    <ul className="modal-popup__cat">
                      <li>IMC, Branding, Contents, Event</li>
                    </ul>
                  </div>
                  <a href="https://www.golfzonpark.com/" target="_blank" className="modal-popup__details">
                    Project link
                  </a>
                </div>
              </div>
            </div>
          </section>

          {/* contact */}
          <section id="contact" className="s-contact target-section">
            <div className="row contact-top">
              <div className="column lg-12">
                <h2 className="text-pretitle">Get In Touch</h2>
                <p className="h1">
                  I love to hear from you. Whether you have a question or just want to chat about
                  communication, advertising & new media — shoot me a message.
                </p>
              </div>
            </div>
            <div className="row contact-bottom">
              <div className="column lg-3 md-5 tab-6 stack-on-550 contact-block">
                <h3 className="text-pretitle">Reach me at</h3>
                <p className="contact-links">
                  <a href="mailto:nextidealab.ai@gmail.com" className="mailtoui">
                    nextidealab.ai@gmail.com
                  </a>
                </p>
              </div>
              <div className="column lg-4 md-5 tab-6 stack-on-550 contact-block">
                <h3 className="text-pretitle">Social</h3>
                <ul className="contact-social">
                  <li>
                    <a href="#0">Facebook</a>
                  </li>
                  <li>
                    <a href="0">Instagram</a>
                  </li>
                  <li>
                    <a href="#0">Github</a>
                  </li>
                </ul>
              </div>
              <div className="column lg-4 md-12 contact-block">
                <a href="mailto:nextidealab.ai@gmail.com" className="mailtoui btn btn--medium u-fullwidth contact-btn">
                  Say Hello.
                </a>
              </div>
            </div>
          </section>
        </main>

        {/* footer */}
        <footer className="s-footer">
          <div className="row">
            <div className="column ss-copyright">
              <span>© Copyright LALAHAHA 2026</span>
              <span>
                Design by <a href="https://www.styleshout.com/">StyleShout</a>
              </span>
            </div>
            <div className="ss-go-top">
              <a className="smoothscroll" title="Back to Top" href="#top">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fillRule="evenodd" clipRule="evenodd">
                  <path d="M11 2.206l-6.235 7.528-.765-.645 7.521-9 7.479 9-.764.646-6.236-7.53v21.884h-1v-21.883z" />
                </svg>
              </a>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
