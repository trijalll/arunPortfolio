import React from "react";
import "./Researches.css";
import Rescard from "./Rescard";

function Researches() {
  return (
    <>
      <div className="experiences">
        <div className="experiences__heading">
          <div className="exp__head">
            <h1>AI RESEARCH GROUP</h1>
            <p>Artificial Intelligence ML, DL, and NLP</p>
          </div>
          <div className="experiences__line"></div>
        </div>
        <div className="experinces__card">
        <Rescard
            tittle="About"
            res__tittle="At AI research group, we are passionate about advancing the frontiers of Artificial Intelligence. We are a dedicated team of researchers, engineers, and enthusiasts, united by our common goal to push the boundaries of Machine Learning (ML), Deep Learning (DL), Natural Language Processing (NLP), and Computer Vision (CV). Our mission is to innovate, collaborate, and contribute to the development of AI technologies that have a profound impact on society."
          ></Rescard>
          <Rescard
            tittle="Our Focus Areas"
            desc__head="Machine Learning (ML) : "
            desc__head2="Deep Learning (DL) : "
            desc__head3="Natural Language Processing (NLP) : "
            desc__head4="Computer Vision (CV) : "
            desc__cont="We explore the depths of ML algorithms and techniques, seeking to develop cutting-edge models and solutions that can learn, adapt, and make intelligent decisions from data. Our work spans supervised, unsupervised, and reinforcement learning, with applications in various domains."
            desc__cont2="DL is at the core of our research. We delve into neural network architectures, optimization algorithms, and novel approaches to tackle complex problems. We believe in harnessing the power of deep learning to solve real-world challenges."
            desc__cont3="Understanding and generating human language is a fascination of ours. We work on projects related to text analysis, sentiment analysis, language generation, chatbots, and more. Our goal is to make interactions between humans and AI as seamless as possible."
            desc__cont4="In the realm of computer vision, we strive to create AI systems that can perceive and interpret visual information like humans. Our projects range from image classification, object detection, and facial recognition to more advanced applications such as autonomous navigation and medical image analysis."
          ></Rescard>
          <Rescard
            tittle="Our Approach"
            desc__head="Interdisciplinary and International Collaboration : "
            desc__head2="Ethical AI : "
            desc__head3="Open Source : "
            desc__head4="Education and Outreach : "
            desc__cont="We believe that AI research benefits from interdisciplinary collaboration. Our group welcomes individuals from diverse backgrounds, including computer science, mathematics, neuroscience, and domain-specific expertise, to foster creativity and innovation."
            desc__cont2="We are committed to the responsible and ethical development of AI. We actively engage in discussions surrounding fairness, bias, transparency, and the societal impact of AI technologies."
            desc__cont3="Sharing knowledge is a cornerstone of our group. We promote open-source research by publishing our code, datasets, and research findings to contribute to the global AI community."
            desc__cont4="We are passionate about education and outreach. We organize workshops, trainings, webinars, and seminars to share our knowledge."
          ></Rescard>
          <Rescard
            tittle="International Collaboration"
            desc__cont="Jasjit S. Suri, PhD, MBA, FIEEE, FAIMBE, FSVM, FAIUM, FAPVS12"
            desc__cont2="Luca Saba, Klaudija Viskovic, MD PhD,Azienda Ospedaliero Universitaria (A.O.U.), di Cagliari – Polo di, Cagliari, ITALY."
            desc__cont3="Mostafa M. Fouda, PhD, Idaho State University, Pocatello, ID 83209, USA"
            desc__cont4="Klaudija Viskovic, MD PhD, University Hospital for Infectious Diseases, 10000 Zagreb, CROATIA"
          ></Rescard>
          <Rescard
            tittle="Publications"
            desc__cont="Dubey, A.K.; Chabert, G.L.; Carriero, A.; Pasche, A.; Danna, P.S.C.; Agarwal, S.; Mohanty, L.; Nillmani; Sharma, N.; Yadav, S.; et al. Ensemble Deep Learning Derived from Transfer Learning for Classification of COVID-19 Patients on Hybrid Deep-Learning-Based Lung Segmentation: A Data Augmentation and Balancing Framework. Diagnostics2023, 13, 1954. https://doi.org/10.3390/diagnostics13111954"
          ></Rescard>
          <Rescard
            tittle="Product"
            desc__cont="COVLIAS3.x"
            desc__cont2="DermAI 1.0"
          ></Rescard>
          <Rescard
            tittle="Contact US"
            desc__cont="Dr. Arun Kumar Dubey"
            desc__cont2="Assistant Professor, IT Department"
            desc__cont3="BVCOE, A4 Paschim Vihar New Delhi"
          ></Rescard>
        </div>
      </div>
    </>
  );
}

export default Researches;
