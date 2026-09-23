import * as React from 'react';
import Head from 'next/head';

import Header from '../components/header';
import Footer from '../components/footer';
import LeadForm from 'components/leadForm';

import ScheduleCallButton from '../components/callSchedule/ScheduleCallButton';
import CallScheduleModal from '../components/callSchedule/CallScheduleModal';

import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';


function ORACLE() {

  const [openCallModal, setOpenCallModal] =
    React.useState(false);

  const [activeSection, setActiveSection] =
    React.useState('overview');

  const [openFaq, setOpenFaq] =
    React.useState(0);


  /*
   * =========================================================
   * NAVIGATION
   * =========================================================
   */

  const navigationItems = [
    {
      id: 'overview',
      label: 'Overview',
    },
    {
      id: 'capabilities',
      label: 'Capabilities',
    },
    {
      id: 'business-advantage',
      label: 'Business Advantage',
    },
    {
      id: 'why-infoDrive',
      label: 'Why InfoDrive',
    },
    {
      id: 'faqs',
      label: 'FAQs',
    },
  ];


  /*
   * =========================================================
   * CALL MODAL
   * =========================================================
   */

  const handleOpen = () => {
    setOpenCallModal(true);
  };


  const handleClose = () => {
    setOpenCallModal(false);
  };


  /*
   * =========================================================
   * SCROLL TO SECTION
   * =========================================================
   */

  const scrollToSection = React.useCallback((id) => {

    const element =
      document.getElementById(id);

    if (!element) {
      return;
    }


    setActiveSection(id);


    const headerOffset = 90;

    const elementTop =
      element.getBoundingClientRect().top +
      window.scrollY;

    window.scrollTo({
      top: elementTop - headerOffset,
      behavior: 'smooth',
    });

  }, []);


  /*
   * =========================================================
   * ACTIVE SECTION WHILE SCROLLING
   *
   * This watches the actual content sections.
   * Only ONE navigation box exists.
   * =========================================================
   */

  React.useEffect(() => {

    const sectionElements =
      navigationItems
        .map((item) =>
          document.getElementById(item.id)
        )
        .filter(Boolean);


    if (!sectionElements.length) {
      return;
    }


    const observer =
      new IntersectionObserver(
        (entries) => {

          const visibleSections =
            entries
              .filter(
                (entry) =>
                  entry.isIntersecting
              )
              .sort(
                (a, b) =>
                  b.intersectionRatio -
                  a.intersectionRatio
              );


          if (visibleSections.length) {

            setActiveSection(
              visibleSections[0]
                .target
                .id
            );

          }

        },
        {
          root: null,

          /*
           * Top/bottom margin makes the
           * active state change naturally
           * while scrolling.
           */
          rootMargin:
            '-18% 0px -62% 0px',

          threshold: [
            0.05,
            0.1,
            0.2,
            0.4,
          ],
        }
      );


    sectionElements.forEach(
      (section) =>
        observer.observe(section)
    );


    return () => {
      observer.disconnect();
    };

  }, []);


  /*
   * =========================================================
   * FAQ DATA
   * =========================================================
   */

  const faqData = [

    {
      question:
        'How Can Organizations Maximize The Value Of Their Oracle Investment?',

      answer:
        'Organizations can increase Oracle value by optimizing processes, improving integrations, enabling automation, and continuously enhancing platform performance.',
    },

    {
      question:
        'When Should Businesses Consider Oracle Modernization?',

      answer:
        'Businesses should consider Oracle modernization when existing environments become difficult to scale, costly to maintain, disconnected from other systems, or unable to support changing business requirements.',
    },

    {
      question:
        'How Can Oracle Support Smarter Business Decisions?',

      answer:
        'Oracle connects business processes and enterprise data, helping organizations improve visibility, streamline operations, and support more informed decision-making.',
    },

    {
      question:
        'How Does Oracle Create A Foundation For AI Adoption?',

      answer:
        'A connected Oracle environment provides the data, integrations, automation, and cloud foundation required to introduce AI capabilities across business operations.',
    },

    {
      question:
        'How Does InfoDrive Help Enterprises Get More From Oracle Solutions?',

      answer:
        'InfoDrive helps organizations modernize Oracle environments, integrate enterprise applications, optimize business processes, and continuously improve their technology foundation.',
    },

    {
      question:
        'What Makes Digile’s Oracle Approach Different?',

      answer:
        'InfoDrive combines Oracle expertise, enterprise integration capabilities, modernization experience, and continuous optimization to help organizations achieve lasting business value.',
    },

  ];


  /*
   * =========================================================
   * NAVIGATION COMPONENT
   *
   * IMPORTANT:
   * This component is rendered ONLY ONCE.
   * =========================================================
   */

  const NavigationPanel = () => {

    return (

      <aside className="oracle-sidebar">

        <div className="oracle-nav-card">

          <div className="oracle-nav-pattern">

            <span className="nav-line nav-line-1" />
            <span className="nav-line nav-line-2" />
            <span className="nav-line nav-line-3" />
            <span className="nav-line nav-line-4" />
            <span className="nav-line nav-line-5" />
            <span className="nav-line nav-line-6" />

          </div>


          <div className="oracle-nav-content">

            {navigationItems.map((item) => (

              <button
                key={item.id}
                type="button"
                className={`
                  oracle-nav-button
                  ${
                    activeSection === item.id
                      ? 'active'
                      : ''
                  }
                `}
                onClick={() =>
                  scrollToSection(item.id)
                }
              >

                {item.label}

              </button>

            ))}

          </div>

        </div>

      </aside>

    );

  };


  /*
   * =========================================================
   * CHECK ITEM
   * =========================================================
   */

  const CheckItem = ({ children }) => {

    return (

      <li className="oracle-check-item">

        <span className="oracle-check">
          ✓
        </span>

        <span>
          {children}
        </span>

      </li>

    );

  };


  return (

    <>
      <Head>

        <title>
          Oracle Solutions | InfoDrive
        </title>

        <meta
          name="description"
          content="Oracle cloud modernization, enterprise integration and digital transformation solutions from InfoDrive."
        />

        <link
          rel="icon"
          href="/favicon.png"
        />

      </Head>


      {/* =====================================================
          HEADER
      ====================================================== */}

      <Header />


      {/* =====================================================
          CALL BUTTON
      ====================================================== */}

      <ScheduleCallButton
        text="Schedule a Call"
        onClick={handleOpen}
      />


      <CallScheduleModal
        open={openCallModal}
        handleClose={handleClose}
        setOpen={setOpenCallModal}
      />


      {/* =====================================================
          HERO
      ====================================================== */}

      <section className="oracle-hero">

        <div className="oracle-hero-glow" />


        <div className="oracle-network">

          <span className="network-dot dot-1" />
          <span className="network-dot dot-2" />
          <span className="network-dot dot-3" />
          <span className="network-dot dot-4" />
          <span className="network-dot dot-5" />
          <span className="network-dot dot-6" />
          <span className="network-dot dot-7" />
          <span className="network-dot dot-8" />
          <span className="network-dot dot-9" />
          <span className="network-dot dot-10" />

          <span className="network-ring ring-1" />
          <span className="network-ring ring-2" />
          <span className="network-ring ring-3" />

        </div>


        <div className="oracle-container oracle-hero-inner">

          <div className="oracle-logo">
            ORACLE
          </div>

        </div>

      </section>


      {/* =====================================================
          PAGE BODY
          ONE SIDEBAR + ALL CONTENT
      ====================================================== */}

      <main className="oracle-page">

        <div className="oracle-container oracle-layout">


          {/* =================================================
              ONE SINGLE SIDEBAR
          ================================================== */}

          <NavigationPanel />


          {/* =================================================
              CONTENT
          ================================================== */}

          <div className="oracle-content-area">


            {/* ===============================================
                OVERVIEW
            ================================================ */}

            <section
              id="overview"
              className="oracle-content-section"
            >

              <h1>
                Strengthen Your Core Systems
              </h1>


              <p>
                Legacy ERP environments often become
                difficult to scale, costly to maintain,
                and disconnected from the rest of the
                business. As organizations embrace
                automation and AI, these gaps make it
                harder to move quickly and make
                informed decisions.
              </p>


              <p>
                Oracle brings finance, supply chain,
                HR, and operations together on a
                connected cloud platform.
              </p>


              <p>
                InfoDrive helps organizations modernize
                Oracle environments, integrate
                enterprise applications, and create
                a strong digital foundation for
                continuous innovation and AI adoption.
              </p>


              {/* Expertise */}

              <div className="oracle-expertise">

                <h3>
                  Expertise
                </h3>


                <div className="oracle-stats">


                  <div className="oracle-stat">

                    <strong>
                      30+
                    </strong>

                    <span>
                      Oracle Consultants
                    </span>

                  </div>


                  <div className="oracle-stat">

                    <strong>
                      ~10+
                    </strong>

                    <span>
                      Certified
                    </span>

                  </div>


                  <div className="oracle-stat">

                    <strong>
                      8+
                    </strong>

                    <span>
                      Average years of
                      experience
                    </span>

                  </div>


                  <div className="oracle-stat">

                    <strong>
                      12+
                    </strong>

                    <span>
                      Oracle Engagements
                    </span>

                  </div>


                </div>

              </div>

            </section>


            {/* ===============================================
                CAPABILITIES
            ================================================ */}

            <section
              id="capabilities"
              className="oracle-content-section"
            >

              <h2>
                Oracle Cloud Capabilities
              </h2>


              <p className="oracle-intro">
                From finance to supply chain, Oracle
                Cloud brings your core business
                functions together on a secure,
                scalable platform.
              </p>


              <div className="oracle-capability-list">


                <ul>

                  <CheckItem>
                    Oracle Fusion Cloud
                  </CheckItem>

                  <CheckItem>
                    Oracle CX
                  </CheckItem>

                  <CheckItem>
                    ERP
                  </CheckItem>

                  <CheckItem>
                    EPM
                  </CheckItem>

                  <CheckItem>
                    SCM
                  </CheckItem>

                </ul>


                <ul>

                  <CheckItem>
                    HCM
                  </CheckItem>

                  <CheckItem>
                    Analytics
                  </CheckItem>

                  <CheckItem>
                    Enterprise Integrations
                  </CheckItem>

                  <CheckItem>
                    Managed Services
                  </CheckItem>

                </ul>


              </div>

            </section>


            {/* ===============================================
                BUSINESS ADVANTAGE
            ================================================ */}

            <section
              id="business-advantage"
              className="oracle-content-section"
            >

              <h2>
                Better Decisions Start Here
              </h2>


              <p className="oracle-intro">

                When your systems work together,
                your business moves faster. Digile
                helps you unify data, streamline
                operations, and create the visibility
                needed for confident decision-making
                and AI adoption.

              </p>


              <ul className="oracle-check-list">

                <CheckItem>
                  Connected business processes
                </CheckItem>

                <CheckItem>
                  Trusted enterprise data
                </CheckItem>

                <CheckItem>
                  Intelligent automation
                </CheckItem>

                <CheckItem>
                  Faster decision-making
                </CheckItem>

                <CheckItem>
                  Greater operational efficiency
                </CheckItem>

              </ul>

            </section>


            {/* ===============================================
                WHY DIGILE
            ================================================ */}

            <section
              id="why-infoDrive"
              className="oracle-content-section"
            >

              <h2>
                Beyond Oracle Implementation
              </h2>


              <p className="oracle-intro">

                InfoDrive helps organizations maximize
                Oracle investments through cloud
                modernization, enterprise
                integrations, and continuous
                optimization that delivers lasting
                business value.

              </p>


              <ul className="oracle-check-list">

                <CheckItem>
                  Oracle-certified consultants
                </CheckItem>

                <CheckItem>
                  Oracle Cloud expertise
                </CheckItem>

                <CheckItem>
                  Enterprise integration specialists
                </CheckItem>

                <CheckItem>
                  AI-ready data foundations
                </CheckItem>

                <CheckItem>
                  Industry-focused delivery
                </CheckItem>

                <CheckItem>
                  Continuous optimization
                </CheckItem>

              </ul>

            </section>


            {/* ===============================================
                FAQ
            ================================================ */}

            <section
              id="faqs"
              className="
                oracle-content-section
                oracle-faq-section
              "
            >

              <h2>
                Frequently Asked Questions
              </h2>


              <div className="oracle-faq-list">

                {faqData.map(
                  (faq, index) => {

                    const isOpen =
                      openFaq === index;


                    return (

                      <div
                        key={index}
                        className={`
                          oracle-faq
                          ${
                            isOpen
                              ? 'open'
                              : ''
                          }
                        `}
                      >

                        <button
                          type="button"
                          className="oracle-faq-question"
                          onClick={() =>
                            setOpenFaq(
                              isOpen
                                ? null
                                : index
                            )
                          }
                        >

                          <span>
                            {faq.question}
                          </span>


                          {isOpen ? (
                            <RemoveIcon />
                          ) : (
                            <AddIcon />
                          )}

                        </button>


                        {isOpen && (

                          <div className="oracle-faq-answer">

                            <p>
                              {faq.answer}
                            </p>

                          </div>

                        )}

                      </div>

                    );

                  }
                )}

              </div>


              <button
                type="button"
                className="oracle-dark-button"
                onClick={handleOpen}
              >

                Get More from Oracle

                <ArrowRightAltIcon />

              </button>

            </section>


          </div>

        </div>

      </main>


      {/* =====================================================
          REAL WORLD IMPACT
      ====================================================== */}

      <section className="oracle-impact">

        <div className="oracle-container oracle-impact-grid">


          <div className="oracle-impact-image">

            <img
              src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1400&q=85"
              alt="Modern enterprise buildings"
            />


            <div className="oracle-impact-overlay">

              
              <div>
                Real-World
              </div>

              <em>
                Impact
              </em>

            </div>

          </div>


          <div className="oracle-impact-content">

            <h2>
              Leading Hospitality Company
              Enabling Smarter, Connected HR
              Operations
            </h2>


            <p>
              What happens when traditional,
              paper-based HR processes evolve
              into a connected digital experience?
            </p>


            <p>
              Discover how a leading hospitality
              company partnered with InfoDrive to
              modernize its HR operations with
              Oracle HCM Cloud, simplifying
              workforce management, empowering
              employees through self-service,
              and creating a more efficient,
              integrated HR ecosystem designed
              to support both people and
              business growth.
            </p>


            <button
              type="button"
              className="oracle-dark-button"
              onClick={handleOpen}
            >

              Explore the Impact

              <ArrowRightAltIcon />

            </button>

          </div>

        </div>

      </section>


      {/* =====================================================
          OTHER ENTERPRISE SOLUTIONS
      ====================================================== */}

      <section className="oracle-solutions">

        <div className="oracle-container">


          <div className="oracle-solutions-heading">

            <h2>
              Other Enterprise Solutions
            </h2>

            <p>
              Continue Your Transformation Journey
            </p>

          </div>


          <div className="oracle-solutions-grid">


            {/* SAP */}

            <div className="oracle-solution-card">

              <div className="
                solution-logo
                sap-logo
              ">
                SAP
              </div>


              <h3>
                Enable Agile
                <br />
                Business Operations
              </h3>


              <p>
                Enterprise efficiency with SAP
                solutions that connect processes,
                simplify operations, and support
                business growth.
              </p>


              <button
                type="button"
                onClick={handleOpen}
              >

                Explore More

                <ArrowRightAltIcon />

              </button>

            </div>


            {/* SALESFORCE */}

            <div className="oracle-solution-card">

              <div className="
                solution-logo
                salesforce-logo
              ">

                <span>
                  salesforce
                </span>

              </div>


              <h3>
                Build Smarter
                <br />
                Customer Experiences
              </h3>


              <p>
                Enable connected customer
                journeys with intelligent CRM
                solutions that improve engagement,
                sales, and service performance.
              </p>


              <button
                type="button"
                onClick={handleOpen}
              >

                Explore More

                <ArrowRightAltIcon />

              </button>

            </div>


            {/* SERVICENOW */}

            <div className="oracle-solution-card">

              <div className="
                solution-logo
                servicenow-logo
              ">

                service
                <span>
                  now
                </span>

              </div>


              <h3>
                Simplify Workflows.
                <br />
                Improve Enterprise Productivity.
              </h3>


              <p>
                Connect people, systems, and
                processes through intelligent
                workflows that improve service
                delivery and operational efficiency.
              </p>


              <button
                type="button"
                onClick={handleOpen}
              >

                Explore More

                <ArrowRightAltIcon />

              </button>

            </div>


          </div>

        </div>

      </section>


      {/* =====================================================
          LEAD FORM
      ====================================================== */}

      <LeadForm />


      {/* =====================================================
          FOOTER
      ====================================================== */}

      <Footer />


      {/* =====================================================
          STYLES
      ====================================================== */}

      <style jsx global>{`

        * {
          box-sizing: border-box;
        }


        html {
          scroll-behavior: smooth;
        }


        body {
          margin: 0;
          padding: 0;
        }


        /* =====================================================
           CONTAINER
        ====================================================== */

        .oracle-container {
          width: min(1440px, 92%);
          margin: 0 auto;
        }


        /* =====================================================
           HERO
        ====================================================== */

        .oracle-hero {
          position: relative;
          height: 290px;
          overflow: hidden;
          background: #050505;
          color: #fff;
        }


        .oracle-hero-inner {
          position: relative;
          z-index: 10;
          height: 100%;
          display: flex;
          align-items: flex-start;
          justify-content: center;
          flex-direction: column;
        }


        .oracle-logo {
          font-family:
            Arial,
            Helvetica,
            sans-serif;

          color: #fff;

          font-size: 36px;

          font-weight: 400;

          letter-spacing: -1.5px;

          line-height: 1;
        }


        .oracle-hero-glow {
          position: absolute;

          right: 2%;
          top: -210px;

          width: 650px;
          height: 650px;

          border-radius: 50%;

          background:
            radial-gradient(
              circle,
              rgba(120,55,42,.32),
              rgba(70,35,28,.12) 35%,
              transparent 68%
            );
        }


        /* =====================================================
           HERO NETWORK
        ====================================================== */

        .oracle-network {
          position: absolute;

          right: -60px;
          top: -185px;

          width: 650px;
          height: 650px;

          opacity: .8;
        }


        .network-ring {
          position: absolute;

          border:
            1px solid
            rgba(255,255,255,.16);

          border-radius: 50%;
        }


        .ring-1 {
          width: 230px;
          height: 230px;

          right: 135px;
          top: 170px;
        }


        .ring-2 {
          width: 410px;
          height: 410px;

          right: 45px;
          top: 80px;
        }


        .ring-3 {
          width: 590px;
          height: 590px;

          right: -45px;
          top: -10px;
        }


        .network-dot {
          position: absolute;

          width: 4px;
          height: 4px;

          border-radius: 50%;

          background: #fff;

          box-shadow:
            0 0 10px
            rgba(255,255,255,.7);
        }


        .dot-1 {
          right: 160px;
          top: 160px;
        }


        .dot-2 {
          right: 290px;
          top: 100px;
        }


        .dot-3 {
          right: 410px;
          top: 185px;
        }


        .dot-4 {
          right: 210px;
          top: 260px;
        }


        .dot-5 {
          right: 75px;
          top: 315px;
        }


        .dot-6 {
          right: 340px;
          top: 350px;
        }


        .dot-7 {
          right: 230px;
          top: 430px;
        }


        .dot-8 {
          right: 455px;
          top: 300px;
        }


        .dot-9 {
          right: 480px;
          top: 440px;
        }


        .dot-10 {
          right: 130px;
          top: 455px;
        }


        /* =====================================================
           PAGE
        ====================================================== */

        .oracle-page {
          background: #f4f4f4;
        }


        /*
         * THIS IS THE IMPORTANT STRUCTURE:
         *
         * ONE SIDEBAR
         * +
         * ALL CONTENT
         */

        .oracle-layout {
          display: grid;

          grid-template-columns:
            290px minmax(0, 1fr);

          gap: 42px;

          align-items: start;
        }


        /* =====================================================
           SIDEBAR
        ====================================================== */

        .oracle-sidebar {
          position: sticky;

          top: 105px;

          z-index: 20;

          padding-top: 58px;

          align-self: start;
        }


        .oracle-nav-card {
          position: relative;

          width: 100%;

          min-height: 225px;

          overflow: hidden;

          border-radius: 10px;

          background:
            radial-gradient(
              circle at 15% 0%,
              rgba(255,67,45,.32),
              transparent 38%
            ),
            #050505;

          box-shadow:
            0 9px 24px
            rgba(0,0,0,.12);
        }


        .oracle-nav-pattern {
          position: absolute;

          inset: 0;

          overflow: hidden;

          opacity: .42;
        }


        .nav-line {
          position: absolute;

          width: 390px;

          height: 80px;

          border:
            1px solid
            rgba(255,255,255,.22);

          border-radius: 50%;

          transform:
            rotate(-18deg);
        }


        .nav-line-1 {
          left: -120px;
          bottom: -18px;
        }


        .nav-line-2 {
          left: -105px;
          bottom: 10px;
        }


        .nav-line-3 {
          left: -95px;
          bottom: 38px;
        }


        .nav-line-4 {
          left: -80px;
          bottom: 66px;
        }


        .nav-line-5 {
          left: -65px;
          bottom: 94px;
        }


        .nav-line-6 {
          left: -50px;
          bottom: 122px;
        }


        .oracle-nav-content {
          position: relative;

          z-index: 2;

          padding:
            29px 20px;
        }


        .oracle-nav-button {
          width: 100%;

          min-height: 34px;

          margin-bottom: 9px;

          padding:
            20px 40px 20px 40px;

          border:
            1px solid
            rgba(255,255,255,.8);

          border-radius: 5px;

          background:
            rgba(0,0,0,.2);

          color: #fff;

          cursor: pointer;

          font-family: inherit;

          font-size: 15px;

          font-weight: 600;

          line-height: 1.2;

          text-align: center;

          transition:
            all .2s ease;
        }


        .oracle-nav-button:last-child {
          margin-bottom: 0;
        }


        .oracle-nav-button:hover {
          background:
            rgba(255,255,255,.1);
        }


        .oracle-nav-button.active {
          border-color:
            transparent;

          background:
            linear-gradient(
              90deg,
              #ff4538,
              #ff6350
            );

          box-shadow:
            0 6px 16px
            rgba(255,70,50,.22);
        }


        /* =====================================================
           CONTENT AREA
        ====================================================== */

        .oracle-content-area {
          min-width: 0;
        }


        /*
         * Each section has enough height so that
         * scrolling naturally changes active menu.
         */

        .oracle-content-section {
          min-height: 430px;

          padding:
            65px 0 75px;

          border-bottom:
            1px solid #dedede;

          scroll-margin-top:
            85px;
        }


        .oracle-content-section:first-child {
          padding-top:
            65px;
        }


        .oracle-content-section h1,
        .oracle-content-section h2 {
          margin:
            0 0 19px;

          color:
            #111;

          font-family:
            Arial,
            Helvetica,
            sans-serif;

          font-size:
            clamp(
              34px,
              3.15vw,
              44px
            );

          font-weight:
            600;

          line-height:
            1.06;

          letter-spacing:
            -1px;
        }


        .oracle-content-section > p {
          max-width:
            980px;

          margin:
            0 0 13px;

          color:
            #555;

          font-size:
            16px;

          line-height:
            1.75;
        }


        .oracle-intro {
          max-width:
            900px !important;

          margin-bottom:
            27px !important;
        }


        /* =====================================================
           EXPERTISE
        ====================================================== */

        .oracle-expertise {
          margin-top:
            30px;
        }


        .oracle-expertise h3 {
          margin:
            0 0 17px;

          color:
            #111;

          font-size:
            17px;

          font-weight:
            600;
        }


        .oracle-stats {
          display:
            grid;

          grid-template-columns:
            repeat(
              4,
              minmax(0,1fr)
            );
        }


        .oracle-stat {
          min-height:
            80px;

          padding:
            0 30px;

          border-right:
            1px solid #c8c8c8;
        }


        .oracle-stat:first-child {
          padding-left:
            0;
        }


        .oracle-stat:last-child {
          border-right:
            0;
        }


        .oracle-stat strong {
          display:
            block;

          margin-bottom:
            7px;

          color:
            #ff604a;

          font-size:
            37px;

          font-weight:
            300;

          line-height:
            1;
        }


        .oracle-stat span {
          display:
            block;

          max-width:
            130px;

          color:
            #444;

          font-size:
            13px;

          line-height:
            1.45;
        }


        /* =====================================================
           CAPABILITIES
        ====================================================== */

        .oracle-capability-list {
          display:
            grid;

          grid-template-columns:
            1fr 1fr;

          max-width:
            800px;

          gap:
            90px;

          margin-top:
            22px;
        }


        .oracle-capability-list ul,
        .oracle-check-list {
          margin:
            0;

          padding:
            0;

          list-style:
            none;
        }


        /* =====================================================
           CHECK ITEMS
        ====================================================== */

        .oracle-check-list {
          margin-top:
            25px;
        }


        .oracle-check-item {
          display:
            flex;

          align-items:
            flex-start;

          gap:
            9px;

          margin-bottom:
            11px;

          color:
            #303030;

          font-size:
            15px;

          line-height:
            1.55;

          list-style:
            none;
        }


        .oracle-check {
          flex:
            0 0 auto;

          color:
            #ff604a;

          font-size:
            16px;

          font-weight:
            700;

          line-height:
            1.3;
        }


        /* =====================================================
           FAQ
        ====================================================== */

        .oracle-faq-section {
          min-height:
            600px;
        }


        .oracle-faq-list {
          width:
            100%;

          max-width:
            950px;

          margin-top:
            30px;
        }


        .oracle-faq {
          border-bottom:
            1px solid #d1d1d1;

          background:
            transparent;
        }


        .oracle-faq.open {
          overflow:
            hidden;

          margin:
            8px 0;

          border:
            0;

          border-radius:
            12px;

          background:
            #fff;

          box-shadow:
            0 5px 18px
            rgba(0,0,0,.045);
        }


        .oracle-faq-question {
          width:
            100%;

          display:
            flex;

          align-items:
            center;

          justify-content:
            space-between;

          gap:
            20px;

          padding:
            18px 5px;

          border:
            0;

          background:
            transparent;

          color:
            #222;

          cursor:
            pointer;

          font-family:
            inherit;

          font-size:
            16px;

          font-weight:
            500;

          line-height:
            1.4;

          text-align:
            left;
        }


        .oracle-faq.open
        .oracle-faq-question {
          padding:
            19px 20px;
        }


        .oracle-faq-question svg {
          flex:
            0 0 auto;

          color:
            #456044;

          font-size:
            18px;
        }


        .oracle-faq-answer {
          padding:
            0 20px 21px;
        }


        .oracle-faq-answer p {
          max-width:
            820px;

          margin:
            0;

          color:
            #666;

          font-size:
            14px;

          line-height:
            1.7;
        }


        /* =====================================================
           BUTTON
        ====================================================== */

        .oracle-dark-button {
          display:
            inline-flex;

          align-items:
            center;

          justify-content:
            center;

          gap:
            8px;

          margin-top:
            22px;

          padding:
            10px 18px;

          border:
            0;

          border-radius:
            22px;

          background:
            #050505;

          color:
            #fff;

          cursor:
            pointer;

          font-family:
            inherit;

          font-size:
            15px;

          font-weight:
            600;

          transition:
            all .2s ease;
        }


        .oracle-dark-button:hover {
          background:
            #ff5947;

          transform:
            translateY(-1px);
        }


        .oracle-dark-button svg {
          font-size:
            16px;
        }


        /* =====================================================
           IMPACT
        ====================================================== */

        .oracle-impact {
          padding:
            65px 0;

          background:
            #f4f4f4;
        }


        .oracle-impact-grid {
          display:
            grid;

          grid-template-columns:
            minmax(0,1fr)
            minmax(0,1fr);

          gap:
            48px;

          align-items:
            center;
        }


        .oracle-impact-image {
          position:
            relative;

          height:
            320px;

          overflow:
            hidden;

          border-radius:
            12px;
        }


        .oracle-impact-image img {
          width:
            100%;

          height:
            100%;

          display:
            block;

          object-fit:
            cover;
        }


        .oracle-impact-image::after {
          content:
            "";

          position:
            absolute;

          inset:
            0;

          background:
            linear-gradient(
              135deg,
              rgba(0,35,60,.04),
              rgba(0,20,40,.38)
            );
        }


        .oracle-impact-overlay {
          position:
            absolute;

          z-index:
            2;

          left:
            25px;

          bottom:
            24px;

          color:
            #fff;
        }


        .oracle-impact-overlay span {
          display:
            block;

          margin-bottom:
            8px;

          font-size:
            12px;

          font-weight:
            600;
        }


        .oracle-impact-overlay div {
          font-size:
            28px;

          font-weight:
            700;

          line-height:
            1;
        }


        .oracle-impact-overlay em {
          display:
            block;

          margin-top:
            3px;

          font-family:
            Georgia,
            serif;

          font-size:
            38px;

          font-style:
            italic;

          line-height:
            1;
        }


        .oracle-impact-content h2 {
          margin:
            0 0 20px;

          color:
            #111;

          font-size:
            32px;

          font-weight:
            600;

          line-height:
            1.08;

          letter-spacing:
            -.6px;
        }


        .oracle-impact-content p {
          margin:
            0 0 13px;

          color:
            #555;

          font-size:
            16px;

          line-height:
            1.7;
        }


        /* =====================================================
           ENTERPRISE SOLUTIONS
        ====================================================== */

        .oracle-solutions {
          padding:
            55px 0 65px;

          background:
            #050505;
        }


        .oracle-solutions-heading {
          margin-bottom:
            35px;

          color:
            #fff;

          text-align:
            center;
        }


        .oracle-solutions-heading h2 {
          margin:
            0 0 7px;

          font-size:
            32px;

          font-weight:
            500;

          line-height:
            1.15;
        }


        .oracle-solutions-heading p {
          margin:
            0;

          color:
            rgba(255,255,255,.75);

          font-size:
            12px;
        }


        .oracle-solutions-grid {
          display:
            grid;

          grid-template-columns:
            repeat(
              3,
              minmax(0,1fr)
            );

          gap:
            18px;
        }


        .oracle-solution-card {
          min-height:
            300px;

          padding:
            30px;

          border-radius:
            13px;

          background:
            #fff4f1;

          color:
            #111;

          display:
            flex;

          flex-direction:
            column;
        }


        .solution-logo {
          min-height:
            50px;

          display:
            flex;

          align-items:
            center;

          margin-bottom:
            20px;
        }


        .sap-logo {
          color:
            #0875b9;

          font-size:
            30px;

          font-style:
            italic;

          font-weight:
            700;
        }


        .salesforce-logo span {
          padding:
            8px 14px;

          border-radius:
            50%;

          background:
            #069bd7;

          color:
            #fff;

          font-size:
            10px;

          font-weight:
            600;
        }


        .servicenow-logo {
          color:
            #111;

          font-size:
            25px;

          font-weight:
            700;
        }


        .servicenow-logo span {
          color:
            #55b94b;
        }


        .oracle-solution-card h3 {
          margin:
            0 0 14px;

          font-size:
            20px;

          font-weight:
            600;

          line-height:
            1.25;
        }


        .oracle-solution-card p {
          margin:
            0 0 20px;

          color:
            #555;

          font-size:
            15px;

          line-height:
            1.65;
        }


        .oracle-solution-card button {
          display:
            inline-flex;

          align-items:
            center;

          align-self:
            flex-start;

          gap:
            6px;

          margin-top:
            auto;

          padding:
            10px 16px;

          border:
            0;

          border-radius:
            20px;

          background:
            #050505;

          color:
            #fff;

          cursor:
            pointer;

          font-family:
            inherit;

          font-size:
            12px;

          font-weight:
            600;
        }


        .oracle-solution-card button:hover {
          background:
            #ff5947;
        }


        .oracle-solution-card button svg {
          font-size:
            14px;
        }


        /* =====================================================
           TABLET
        ====================================================== */

        @media (max-width: 1000px) {

          .oracle-container {
            width:
              92%;
          }


          .oracle-layout {
            grid-template-columns:
              195px minmax(0,1fr);

            gap:
              28px;
          }


          .oracle-sidebar {
            top:
              90px;
          }


          .oracle-stat {
            padding:
              0 18px;
          }


          .oracle-capability-list {
            gap:
              40px;
          }

        }


        /* =====================================================
           MOBILE
        ====================================================== */

        @media (max-width: 768px) {

          .oracle-hero {
            height:
              175px;
          }


          .oracle-logo {
            font-size:
              30px;
          }


          .oracle-network {
            right:
              -230px;
          }


          /*
           * On mobile the sidebar becomes
           * a normal navigation block.
           */

          .oracle-layout {
            display:
              block;
          }


          .oracle-sidebar {
            position:
              sticky;

            top:
              0;

            z-index:
              50;

            padding:
              10px 0;

            background:
              rgba(244,244,244,.96);

            backdrop-filter:
              blur(8px);
          }


          .oracle-nav-card {
            min-height:
              auto;
          }


          .oracle-nav-content {
            display:
              grid;

            grid-template-columns:
              repeat(5,1fr);

            gap:
              5px;

            padding:
              10px;
          }


          .oracle-nav-button {
            min-height:
              38px;

            margin:
              0;

            padding:
              5px;

            font-size:
              8px;
          }


          .oracle-content-section {
            min-height:
              0;

            padding:
              55px 0;

            scroll-margin-top:
              85px;
          }


          .oracle-content-section h1,
          .oracle-content-section h2 {
            font-size:
              32px;
          }


          .oracle-stats {
            grid-template-columns:
              repeat(2,1fr);

            row-gap:
              28px;
          }


          .oracle-stat {
            padding:
              0;

            border-right:
              0;
          }


          .oracle-stat strong {
            font-size:
              31px;
          }


          .oracle-capability-list {
            grid-template-columns:
              1fr;

            gap:
              0;
          }


          .oracle-impact-grid {
            grid-template-columns:
              1fr;

            gap:
              30px;
          }


          .oracle-solutions-grid {
            grid-template-columns:
              1fr;
          }

        }


        /* =====================================================
           SMALL MOBILE
        ====================================================== */

        @media (max-width: 520px) {

          .oracle-container {
            width:
              90%;
          }


          .oracle-hero {
            height:
              155px;
          }


          .oracle-logo {
            font-size:
              27px;
          }


          .oracle-nav-content {
            grid-template-columns:
              1fr;
          }


          .oracle-nav-button {
            min-height:
              33px;
          }


          .oracle-content-section h1,
          .oracle-content-section h2 {
            font-size:
              29px;
          }


          .oracle-content-section > p {
            font-size:
              11px;
          }


          .oracle-stats {
            grid-template-columns:
              1fr 1fr;
          }


          .oracle-stat strong {
            font-size:
              27px;
          }


          .oracle-impact-image {
            height:
              240px;
          }


          .oracle-impact-content h2 {
            font-size:
              27px;
          }


          .oracle-solutions-heading h2 {
            font-size:
              27px;
          }


          .oracle-solution-card {
            min-height:
              270px;
          }

        }

      `}</style>

    </>

  );
}


export default ORACLE;