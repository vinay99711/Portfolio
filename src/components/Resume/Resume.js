import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import Resumecontent from "./ResumeContent";
import "../../style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import pdf from "../../Assets/Vinay_Resume_Amazon.pdf";

function Resume() {
  const uri = "https://porfolio-backend.vercel.app/ranks/getRanks";
  const [spojRank, upadteSpojRank] = useState(0);
  const [hackerrank, upadteHackerank] = useState(0);
  const [sem, upadateSem] = useState(0);
  const [cgpa, upadteCgpa] = useState(0);

  useEffect(() => {
    axios
      .get(uri)
      .then((res) => {
        upadteSpojRank(res.data.message[0].spojRank);
        upadteHackerank(res.data.message[1].hackerrank);
        upadteCgpa(res.data.message[2].cgpa);
        upadateSem(res.data.message[3].sem);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <Container fluid className="resume-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button variant="primary" href={pdf} target="_blank">
            <i className="fas fa-download">&nbsp;</i>Download CV
          </Button>
        </Row>
        <Row className="resume">
          <Col md={12} className="resume-left">
            <h3 className="resume-title">Experience</h3>
            <Resumecontent
              title="MACHINE LEARNING ENGINEER [Nordstrom]"
              date="November 2020 - Present"
              content={[
                "Worked on a React components to render recommendations based on swatch color, increasing conversion rate by 5% and genrating ~1 million in profits",
                "Build a data pipeline to fetch ~10 million records on a daily cadence using PySpark to build Text Analytics models for our recommendation engine ",
              ]}
            />
            <Resumecontent
              title="ADVANCED ANALYTICS INTERN [Hallmark Cards]"
              date="May 2019 - Aug 2019"
              content={[
                "Designed metrics and scraped ~1M tweets data for Forecasting seasonal cards sales (Python, Spark Streaming)",
                "Defined/Designed data pipeline and data integration to collect, clean and store large scale, cross functional dataset",
                "Applied advanced Statistical techniques and Mathematical analysis to understand Seasonal card sales Time Series",
                "Performed ARIMA modeling development, validation, implementation and experimentation to predict card sales",
                "Deployed Tableau dashboard sourcing data from the data lake to detect insights and provide actionable recommendation",
                "Reduced the forecast error rate by 70% which lead to reduction in wastage of inventory assets and saved ~$ 1M",
                "Build a data pipeline to fetch ~10 million records on a daily cadence using PySpark to build Text Analytics models for our recommendation engine ",
              ]}
            />
            <Resumecontent
              title="DATA SCIENTIST [Mu Sigma]"
              sub="Health Care Analytics"
              date="Jul 2016 - Jul 2018"
              content={[
                "Investigated and evaluated Machine Learning and Deep Learning Algorithms on multiple Drug sales to perform Predictive modelling the Sales of drugs using RNNs, CNN, LSTM on TensorFlow using Time Series data",
                "Experience in working on Unstructured and Structured database to perform ETL operation of Data integration and migration",
                "Instrumental in researching, prototyping, designing, implementing and evaluating machine learning models using Prescriber Sales rep feedback data for Multi label Classification of the performance of Sales Representative",
                "Digging deep into the millions of data records using distributed computing (Hive/Hadoop) and performing quantitative analysis using Jupyter notebooks with Pandas/NumPy/matplotlib and communicating Text Analytics using Data Visualization",
                "Researchedprototype,builtfeaturesandoptimizedthestate-of-the-artMachineLearningandDeepLearningtechniqueslike SVM, Logistic Regression, Naïve Bayes, LSTM, CNN, RNN in TensorFlow in CPU/GPU environment",
                "Applied various transfer-learning techniques using pre-trained word-embedding like Glove, Word2vec for text similarity",
                "Effective targeting of Sales rep to prescriber lead to increase drug penetration by ~30%",
              ]}
            />
              <Resumecontent
              sub="Retail Analytics"
              date="Oct 2015 - Jul 2016"
              content={[
                "Worked with online email direct marketing team to optimize cost and increase customer penetration (Hive, Apache spark)",
                "Designed Customer segmentation model metrics and created large database through data integration and ETL pipeline",
                "Demonstrated Feature Scaling, Dimensionality reduction and feature transformation using PCA and correlation plot",
                "Performed Exploratory Data Analysis to analyze data by doing Hypothesis testing using Statistical and mathematical models • Used unsupervised algorithms like K-means to segment customer into cluster for effective targeting",
                "Provide insights and actionable recommendation in an Agile environment and identify customer to target",
                "Increased the Return on Investment, Customer acquisition by 40% & 14.5% and decreased customer churn rate by ~10%",
              ]}
            />
            <h3 className="resume-title">Extracurricular Activities</h3>
            <Resumecontent
              title="Business Analyst [Enactus United States]"
              content={[
                "We were working on a project for the Homeless People of the United States. My responsibilities here include building data-set for the Homeless people across United States. Analyzing and Interpreting the data based on parameters and constraints of the data to build a story that cover the length and breadth of this particular problem by designing apt and concise visualization for better story-flow.",
              ]}
            />
            <Resumecontent
              title="Data Scientist [CrowdDoing - Match4Action]"
              content={[
                "Build medicinal foods literacy, citizen science of foods and herbs for stress, sleep, and anxiety.Our team has identified thousands of foods with active ingredients with clinical evidence andscientific evidence of effectiveness for stress, sleep&amp; anxiety. The team is in the process ofreviewing public data on consumer feedback on the effectiveness of medicinal foods and develop tools for increasing access to a functional medicine approach to foods and herbs of relevance to stress, sleep &amp; anxiety goals.",
              ]}
            />
          </Col>
          <Col md={12} className="resume-left">
            <h3 className="resume-title">Education</h3>
            <Resumecontent
              title="BUSINESS ANALYTICS [The University of Texas at Dallas] "
              date="Aug 2018 - May 2020"
              content={[`CGPA: ${cgpa} (Till ${sem}th Sem)`]}
            />
            <Resumecontent
              title="ELECTRONICS AND TELECOMMUNICATIONS [Army Institute of Technology]"
              date="2011 - 2015"
              content={["First Class with Distinction"]}
            />
            <Resumecontent
              title="12TH BOARD [Army Public School- Shanker Vihar] "
              date="2010 - 2011"
              content={["Precentage: 90%"]}
            />
            <Resumecontent
              title="10TH BOARD [Army Public School- RK Puram] "
              date="2008 - 2009"
              content={["Precentage: 87%"]}
            />
            <h3 className="resume-title">Ranks and Achivements</h3>
            <Resumecontent
              title=""
              content={[
                // `Current rank in Spoj ${spojRank}`,
                // `Current rank in HackerRank  ${hackerrank}`,
                "Graduated with Top Scholar award from University of Texas at Dallas",
                "Ranked 3rd in UTD Mentor-Mentee Data Science Project Presenation",
              ]}
            />
          </Col>
        </Row>
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button variant="primary" href={pdf} target="_blank">
            <i className="fas fa-download">&nbsp;</i>Download CV
          </Button>
        </Row>
      </Container>
    </Container>
  );
}

export default Resume;



