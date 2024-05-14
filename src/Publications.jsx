import React from "react";
import PubCard from "./PubCard";
import "./Publications.css";
import "./Experiences.css";

function Publications() {
  return (
    <>
      <div className="experiences">
        <div className="experiences__heading">
          <h1>PUBLICATIONS</h1>
          <div className="experiences__line"></div>
        </div>
        <div className="experinces__card">
          <PubCard
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
            desc3="Dubey, A.K., Jain, V. An accurate recognition of facial expression by extended wavelet
            deep convolutional neural network. Multimed Tools Appl (2022).
            https://doi.org/10.1007/s11042-022-12871-7 (SCIE)"
            desc4="H. Alaskar, A. Hussain, B. Almaslukh, T. Vaiyapuri, Z. Sbai, and A. K. Dubey, “Deep
            learning approaches for automatic localization in medical images,” Comput. Intell.
            Neurosci., vol. 2022, p. 6347307, 2022-(SCIE )"
            desc5="Arun Kumar Dubey & Vanita Jain (2020) Automatic facial recognition using VGG16
            based transfer learning model, Journal of Information and Optimization
            Sciences, 41:7, 1589-1596, DOI: 10.1080/02522667.2020.1809126 (ESCI )"
            desc6="Vanita Jain, Rishabh Kapoor, Shashwat Gulyani & Arun Kumar
            Dubey (2019) Categorization of spam images and identification of controversial images on
            mobile phones using machine learning and predictive learning, Journal of Discrete
            Mathematical Sciences and Cryptography, 22:2, 293-
            307, DOI: 10.1080/09720529.2019.1582863 (ESCI & SCOPUS)"
            desc7="Arun Kumar Dubey & Vanita Jain (2019) A review of face recognition methods using deep
            learning network, Journal of Information and Optimization Sciences, 40:2, 547-
            558, DOI: 10.1080/02522667.2019.1582875 (ESCI)"
            desc8="Vanita Jain, Arun Kumar Dubey, Achin Jain, Mohit Malhotra & Shikha
            Rastogi (2019) Crime pattern recognition in Chicago city using hadoop multinode
            cluster, Journal of Information and Optimization Sciences, 40:2, 587-
            601, DOI: 10.1080/02522667.2019.1582878. (ESCI)
            "
            desc9="Gupta S, Dhawan A, Gupta A, Dubey AK. Facial Expression Recognition with Gender
            Identification. Fusion: Practice and Applications. 2021 Sep 27;2(2):57-7. (SCOPUS)"
            desc10="Vanita Jain, Aarushi Jain, Achin Jain and Arun Kumar Dubey, “Comparative Study
            between FA, ACO, and PSO Algorithms for Optimizing Quadratic Assignment Problem”,
            International Journal of Scientific Research in Computer Sciences and Engineering, Vol.6,
            Issue.2, pp.76-81, April 2018.( SCOPUS)
            "
            desc11="Arun Kumar Dubey, Ayushi Agrawal,” Effect and future of Artificial Intelligence on
            Indian Agriculture”Vigyan Garima Sindhu ,pp 30-36, ISSN:23207736,2020
            (UGC Care)"
            desc12="Arun Kumar Dubey,Vanita Jain, ”Deep learning techniques for facial expression
            recognition”Vigyan Garima Sindhu ,pp 250-230, ISSN:23207736, 2020(UGC Care)"
            desc13="Gautam Gupta,Prachi Aggarwal,Achin Jain,Puneet Singh Lamba,Arun Kumar Dubey,
            Gopal Chaudhary, Crime Anomaly Detection using CNN and Ensemble Model, Journal of
            Fusion: Practice and Applications, Vol. 11 , No. 1 , (2023) : 89-
            99 (Doi : https://doi.org/10.54216/FPA.110107). (SCOPUS)"
          ></PubCard>
          <PubCard
            tittle="International Conferences            "
            desc="Worked as e-Governance consultant in AICTE-New Delhi. I have coordinated with L&T
            infotech to develop AICTE portal for every year approval process. I was working under
            ADVISOR-I, Prof. S.G.Bhirud from 12th September 2011 to 12th September 2012."
            desc2="G. Gupta, P. Aggarwal, A. Jain, A. K. Dubey, M. Kumar and U. S. Bist, A Novel Framework for Crime Anomaly Detection using Convolution Auto Encoder, 2023 10th International Conference on Computing for Sustainable Global Development (INDIACom), New Delhi, India, 2023, pp. 1456-1460."         
            desc3="Dubey A., Jain V. (2021) Automatic Facial Expression Recognition Based on Deep
            Layered Representation of Convolution Neural Networks. In: Abraham A., Castillo O.,
            Virmani D. (eds) Proceedings of 3rd International Conference on Computing Informatics
            and Networks. Lecture Notes in Networks and Systems, vol 167. Springer, Singapore.
            https://doi.org/10.1007/978-981-15-9712-1_7."
            desc4="P. Gupta, I. Roy, G. Batra and A. K. Dubey, Decoding Emotions in Text Using GloVe
            Embeddings, 2021 International Conference on Computing, Communication, and
            Intelligent Systems (ICCCIS), 2021, pp. 36-40, doi: 10.1109/ICCCIS51004.2021.9397132.
            "
            desc5="Vanita Jain, Achin Jain and Arun Dubey, “Smart and Real-Time Traffic Light control using
            Azure Data Stream Analytics and Raspberry Pi”, International Conference on Smart
            Technologies in Computer and Communication, Amity University Rajasthan, Jaipur,
            March 27- 29, 2017"
            desc6="Dubey A.K., Jain V. (2019) Comparative Study of Convolution Neural Network’s Relu
            and Leaky-Relu Activation Functions. In: Mishra S., Sood Y., Tomar A. (eds) Applications
            of Computing, Automation and Wireless Systems in Electrical Engineering. Lecture Notes
            in Electrical Engineering, vol 553. Springer, Singapore. https://doi.org/10.1007/978-981-
            13-6772-4_76"
            desc7="A. K. Rajput, R. Tewani and A. Dubey, The helping protocol “DHCP”, 2016 3rd
            International Conference on Computing for Sustainable Global Development
            (INDIACom), 2016, pp. 634-637.
            "
            desc8="V. Jain, A. Dubey, A. Gupta and S. Sharma, Comparative analysis of machine learning
            algorithms in OCR, 2016 3rd International Conference on Computing for Sustainable
            Global Development (INDIACom), 2016, pp. 1089-1092"
            desc9="A. K. Dubey, V. Jain and A. P. Mittal, Stock market prediction using Hadoop Map-Reduce
            ecosystem, 2015 2nd International Conference on Computing for Sustainable Global
            Development (INDIACom), 2015, pp. 616-621"
            desc10="N. Jain, A. R. M. and A. K. Dubey, Code Aware Dynamic Source Routing for Distributed
            Sensor Network, 2013 International Conference on Communication Systems and Network
            Technologies, 2013, pp. 272-276, doi: 10.1109/CSNT.2013.64."
            desc11="Arun Kumar Dubey,Sanjeev Sharma, International Journal of Computer Applications
            (0975 – 8887) Volume 25– No.9, July 2011."
          ></PubCard>
        </div>
      </div>
    </>
  );
}

export default Publications;
