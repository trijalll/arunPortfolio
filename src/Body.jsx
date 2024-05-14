import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import {ScrollTrigger} from 'gsap/ScrollTrigger'
import { Link } from "react-router-dom";
import "./Body.css";
import Experiences from "./Experiences";
import NationalExams from "./NationalExams";
import "./Experiences.css";
import Card from "./Card";
import './BodyRespons.css'
import NavbarMenu from "./NavbarMenu";
import Patent from "./Patent";

function Body() {
  const comp = useRef();
  useGSAP(
    () => {
      const t1 = gsap.timeline();
      t1.from(".part1__left__cont", {
        x: 150,
        duration: 1,
        opacity: 0,
        zIndex: 0,
      });
    },
    { scope: comp }
  );

  useGSAP(
    () => {
      const t2 = gsap.timeline();
      t2.from(".part1__right__cont, .part1__right__line", {
        x: -150,
        duration: 1,
        opacity: 0,
        zIndex: 0,
      });
    },
    { scope: comp }
  );
  useGSAP(
    () => {
      const t3 = gsap.timeline({ScrollTrigger:{
        trigger:".about",
        start: "40% 65%",
        end: "90% 65%",
        scrub: true,
        duration: 1,
        markers: true,
      }})
      t3.from(".about__line", {
        width: "0%",
        opacity: 0,
      })
    }
  )

  return (
    <>
      {/* --------part1 landing page start--------- */}
      <div className="part1" ref={comp}>
        <div className="part1__left">
          <div className="part1__left__cont">
            <p>Associate Professor</p>
            <h1 id="tittle__respons">Dr. Arun Kumar Dubey</h1>
            <h1 id="tittle__h1">Dr. Arun Kumar</h1>
            <h1 id="tittle2__h1">Dubey</h1>
          </div>
        </div>
        <div className="part1__photo"></div>
        <div className="part1__right">
          <div className="part1__right__line"></div>
          <div className="part1__right__cont">
            <p>
              Arun Kumar Dubey received his Ph.D. in Computer <br /> Science &
              Engineering at USICT, GGSIPU Delhi, <br /> India. His research
              interests are in the areas of <br /> Medical Computer vision using
              Deep Learning.
            </p>
          </div>
        </div>
      </div>
      {/* --------part1 landing page end--------- */}
      {/* --------part1 about start---------  */}

      <div className="about">
        <div className="about__heading">
          <h1>ABOUT</h1>
          <div className="about__line"></div>
        </div>
        <div className="about__cont">
          <p>
            Dr. Arun Kumar Dubey, a distinguished figure in the academic
            landscape as the Head of the AI Research Group at Bharati Vidyapeeth
            College of Engineering (BVCOE) New Delhi. With an illustrious
            background in Computer Science & Engineering, particularly in the
            niche field of Medical Computer Vision powered by Artificial
            Intelligence, Dr. Dubey brings a wealth of knowledge and experience
            to his leadership role. Having earned his Ph.D. from USICT, GGSIPU
            Delhi, Dr. Dubey has amassed over a decade of teaching experience,
            complemented by invaluable industry and consultancy roles. His
            multifaceted career encompasses significant contributions to
            educational initiatives such as NIOS for vocational courses and
            AICTE's Parakh Project, underscoring his dedication to elevating
            educational standards. In addition to his leadership
            responsibilities, Dr. Dubey is an accomplished author, having
            authored four books and translated three others, showcasing his
            scholarly prowess. His research endeavors are equally remarkable,
            with a robust publication record in esteemed journals indexed in
            SCI, Scopus, and UGC-Care. Dr. Dubey's leadership extends beyond
            BVCOE, as he actively fosters collaborative research efforts with
            renowned institutions worldwide, including Idaho State University,
            Harvard University, and Atheropoint USA, further enriching the AI
            research landscape.
          </p>
        </div>
      </div>

      {/* --------part1 about end---------  */}
      {/* --------part2 landing page start--------- */}

      <div className="part2">
        <Experiences line="experience__line1"></Experiences>
      </div>

      {/* --------part2 landing page end--------- */}
      {/* --------part3 landing page start--------- */}

      <div className="part3">
        <NationalExams
          exams="lineColor"
          examsBackground="examsBackground"
        ></NationalExams>
      </div>
      {/* --------part3 landing page end--------- */}
      {/* -------part4 start----------- */}

      <div className="part4">
        <div className="experiences">
          <div className="experiences__heading">
            <h1>PUBLICATIONS</h1>
            <div className="experiences__line"></div>
          </div>
          <div className="experinces__card">
            <Card
              tittle="Refereed International Journals "
              desc="Dubey, A.K.; Chabert, G.L.; Carriero, A.; Pasche, A.; Danna, P.S.C.; Agarwal, S.;
            Mohanty, L.; Nillmani; Sharma, N.; Yadav, S.; et al. Ensemble Deep Learning Derived
            from Transfer Learning for Classification of COVID-19 Patients on Hybrid DeepLearning-Based Lung Segmentation: A Data Augmentation and Balancing
            Framework. Diagnostics 2023, 13, 1954. https://doi.org/10.3390/diagnostics13111954
            (SCIE)"
              desc2="Sanga, P.; Singh, J.; Dubey, A.K.; Khanna, N.N.; Laird, J.R.; Faa, G.; Singh, I.M.;
            Tsoulfas, G.; Kalra, M.K.; Teji, J.S.; et al. DermAI 1.0: A Robust, Generalized, and Novel
            Attention-Enabled Ensemble-Based Transfer Learning Paradigm for Multiclass
            Classification of Skin Lesion Images. Diagnostics 2023, 13, 3159.
            https://doi.org/10.3390/diagnostics13193159 (SCIE)"
            ></Card>
            <Card
              tittle="International Conferences            "
              desc="Worked as e-Governance consultant in AICTE-New Delhi. I have coordinated with L&T
            infotech to develop AICTE portal for every year approval process. I was working under
            ADVISOR-I, Prof. S.G.Bhirud from 12th September 2011 to 12th September 2012."
              desc2="G. Gupta, P. Aggarwal, A. Jain, A. K. Dubey, M. Kumar and U. S. Bist, A Novel Framework for Crime Anomaly Detection using Convolution Auto Encoder, 2023 10th International Conference on Computing for Sustainable Global Development (INDIACom), New Delhi, India, 2023, pp. 1456-1460."
            ></Card>
          </div>
          <div className="button">
            <Link to={"/publications"}>
              See all publications <i class="ri-arrow-right-s-line"></i>
            </Link>
          </div>
        </div>
      </div>

      {/* -------part4 end----------- */}
      {/* -------part5 start----------- */}

      <div className="part5">
        <div className="experiences__heading">
          <div className="exp__head">
            <h1>AI RESEARCH GROUP</h1>
            <p>Artificial Intelligence ML, DL, and NLP</p>
          </div>
          <div className="experiences__line" id="experiences__line"></div>
        </div>
        <div className="experiences__card">
          <Card
            exams="lineColor"
            tittle="About"
            desc="At AI research group, we are passionate about advancing the frontiers of Artificial Intelligence. We are a dedicated team of researchers, engineers, and enthusiasts, united by our common goal to push the boundaries of Machine Learning (ML), Deep Learning (DL), Natural Language Processing (NLP), and Computer Vision (CV). Our mission is to innovate, collaborate, and contribute to the development of AI technologies that have a profound impact on society."
          ></Card>
        </div>
        <div className="button">
          <Link to={"/researches"}>
            See more about researches <i class="ri-arrow-right-s-line"></i>
          </Link>
        </div>
      </div>

      {/* -------part5 end----------- */}
      {/* -------part6 start----------- */}

      <Patent></Patent>

      {/* -------part6 end----------- */}
    </>
  );
}

export default Body;
