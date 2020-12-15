AOS.init();

// MOOCs Cards

const moocs = document.querySelector(".moocs");
const moocscards = [
  {
    title: "Introduction to Cybersecurity",
    cardImage: "assets/images/education-page/1596573038658.jpg",
    moocLink: "https://www.youracclaim.com/badges/50ae7ab6-8e2b-4fdb-bb47-67ccc6160390?source=linked_in_profile",
  },
  {
    title: "Introduction to IoT",
    cardImage: "assets/images/education-page/1596573038658.jpg",
    moocLink: "https://www.youracclaim.com/badges/6935f109-d443-4b40-b504-05ff19b282b8?source=linked_in_profile",
  },
  {
    title: "C++ For C Programmers",
    cardImage: "assets/images/education-page/coursera1.png",
    moocLink: "https://www.coursera.org/account/accomplishments/verify/7YBR52J5G5VW",
  },
  {
    title: "Introduction to HTML5",
    cardImage: "assets/images/education-page/coursera1.png",
    moocLink: "https://www.coursera.org/account/accomplishments/verify/EZLE5QHHH7T3",
  },
  {
    title: "Programming for Everybody",
    cardImage: "assets/images/education-page/coursera1.png",
    moocLink: "https://www.coursera.org/account/accomplishments/verify/J8XBSU5D9EDD",
  },
  {
    title: "Create Your First Python Program",
    cardImage: "assets/images/education-page/coursera1.png",
    moocLink: "https://www.coursera.org/account/accomplishments/verify/UBWEMT35SYNF",
  },
  {
    title: "Python Data Structures",
    cardImage: "assets/images/education-page/coursera1.png",
    moocLink: "https://www.coursera.org/account/accomplishments/verify/S2LBWGZYZ2NF",
  },
  {
    title: "Capstone: Retrieving Data with Python",
    cardImage: "assets/images/education-page/coursera1.png",
    moocLink: "https://www.coursera.org/account/accomplishments/verify/7TJR3NP7HWTG",
  },
  {
    title: "AI For Everyone",
    cardImage: "assets/images/education-page/coursera1.png",
    moocLink: "https://www.coursera.org/account/accomplishments/verify/LYD36RH9C7T9",
  },
  {
    title: "Intro and Programming with IoT Boards",
    cardImage: "assets/images/education-page/coursera1.png",
    moocLink: "https://www.coursera.org/account/accomplishments/verify/44CF6GLAMWGV",
  },
  {
    title: "Fundamentals of digital marketing",
    cardImage: "assets/images/education-page/google.png",
    moocLink: "https://learndigital.withgoogle.com/digitalunlocked/course/digital-marketing",
  },
  {
    title: "Google Analytics for Beginners",
    cardImage: "assets/images/education-page/images.png",
    moocLink: "https://analytics.google.com/analytics/academy/certificate/WR1R6TsDQ4S1Q4ttSTAPZQ",
  },
  {
    title: "Advanced Google Analytics",
    cardImage: "assets/images/education-page/images.png",
    moocLink: "https://analytics.google.com/analytics/academy/certificate/N3ksX265QIumD_XTkKjJzg",
  },
  {
    title: "Introduction to JavaScipt",
    cardImage: "assets/images/education-page/udacity_logo.png",
    moocLink: "https://www.udacity.com/course/intro-to-javascript--ud803",
  },
    
  {

    title: "Introduction to CSS 3",
    cardImage: "assets/images/education-page/udacity_logo.png",
    moocLink: "https://www.udacity.com/course/intro-to-html-and-css--ud001",
  },
  {
    title: "Javascript",
    cardImage: "assets/images/education-page/udacity_logo.png",
    moocLink: "https://www.udacity.com/course/intro-to-javascript--ud803",
  },
  {
    title: "Bootstrap 4",
    cardImage: "assets/images/education-page/udemy.png",
    moocLink: "https://www.udemy.com/course/bootstrap-4-tutorials/",
  },
  {
    title: "Intro to React",
    cardImage: "assets/images/education-page/EdX.png",
    moocLink: "https://www.edx.org/learn/reactjs",
  },
  {
    title: "Intro to React Native",
    cardImage: "assets/images/education-page/coursera1.png",
    moocLink: "https://www.coursera.org/lecture/react-native/introduction-to-react-native-Eax0D",
  },
  {
    title: "NodeJS, Express and MongoDB",
    cardImage: "assets/images/education-page/coursera1.png",
    moocLink: "https://www.coursera.org/learn/server-side-nodejs",
  },
  {
    title: "XML-AJAX",
    cardImage: "assets/images/education-page/udemy.png",
    moocLink: "https://www.udemy.com/course/xml-from-beginner-to-expert/",
  },
  {
    title: "Data Structures & Algorithms",
    cardImage: "assets/images/education-page/udacity_logo.png",
    moocLink: "https://www.udacity.com/course/data-structures-and-algorithms-nanodegree--nd256",
  },
  
];


const showCards = () => {
  let output = "";
  moocscards.forEach(
    ({ title, cardImage,moocLink }) =>
      (output += `        
        <div class="col-6 col-md-3 col-sm-4 column" data-aos="fade-up" data-aos-easing="linear" data-aos-delay="600" >  
            <div class="card mb-3 mx-auto">
               <div class="content">
                  <div class="content-overlay"></div>
                    <img src=${cardImage} class="card-img-top content-image">     
                  <div class="content-details fadeIn-bottom">
                    <a href="${moocLink}" target="_blank"><i class="fa fa-info-circle fa-2x" aria-hidden="true" style="color: white;"></i></a>                                   
                  </div>
                </div>
                <div class="card-body">
                    <h6 class="mt-0 py-2 text-center font-weight-bold mooc-title" style="font-size:12px;">${title}</h6>
                </div>
            </div>
        </div>        
      `)
  );
  moocs.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards);


const bagdes = document.querySelector(".badges");
const badgesection = [
  {
    title: "Google Developer Essentials",
    image: "assets/images/education-page/badge1.png",
    description: "Earned May 20, 2020",
  },
  {
    title: "VM Migration",
    image: "assets/images/education-page/badge2.png",
    description: "Earned June 20, 2020",
  },
  {
    title: "G Suite Essentials",
    image: "assets/images/education-page/badge3.png",
    description: "Earned July 20, 2020",
  },
];

const showCards1 = () => {
  let output = "";
  badgesection.forEach(
    ({ title, image, description}) =>
      (output += `       
      <div class="col-lg-4 col-md-6 p-2" data-aos="fade-up" data-aos-easing="linear" data-aos-delay="600"> 
        <img class="img-fluid d-block mb-3 mx-auto hvr-grow" src="${image}" alt="Card image cap" width="200">
          <div class="text-center font-weight-bolder" style="font-size: 1.3em;">${title}</div>
          <div class="text-center text-muted font-weight-bolder p-2">${description}</div>
      </div>`)
  );
  bagdes.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards1);


/* Timeline Section*/

const timeline = document.querySelector(".timeline");
const timelinesection = [
  {
    heading: "ABES Engineering College, Ghaziabad",
    image: "./assets/images/education-page/ABES.png",
    subheading:"B.Tech in Electronics and Communication, (2019-2023 )",
    description: "<li>Volleyball Player</li><li>Cricket Player</li><li>Dramatics Society Member</li><li>Photography Club Member</li><li>LDL NGO VOLUNTEER</li>",
  },

  {
    heading: "Mahendra Neelam Janta Inter College, Kannauj",
    image: "./assets/images/education-page/timeline-1.svg",
    subheading:"Senior Secondary (PCM), (2017-2019)",
    description: "<li>Percentage - 76.4%</li><li>Passed with First Division</li><li>Nothing more than that</li>",
  },

  {
    heading: "ST. Xaviers School, Kannauj",
    image: "./assets/images/education-page/timeline-1.svg",
    subheading:"Secondary Education, (2015-2017)",
    description: "<li>Percentage - 10.0 CGPA%</li><li>Passed with First Division</li><li>Nothing more than that</li>",
  },
  {
    heading: "G Suite Essentials",
    image: "assets/images/education-page/badge3.png",
    subheading:"G Suite",
    description: "Earned July 20, 2020",
  },
  {
    heading: "Google Developer Essentials",
    image: "assets/images/education-page/badge1.png",
    subheading:"Google Developer",
    description: "Earned May 20, 2020",
  },
  {
    heading: "Intel Digital Ocean",
    image: "assets/images/education-page/Hack.png",
    subheading:"Hacktoberfest",
    description: "Earned December 3, 2020",
  },

];

const showCards2 = () => {
  let output = "";
  timelinesection.forEach(
    ({ heading, image, subheading, description}) =>
      (output += `       
      <div class="timeline" data-aos="fade-up" data-aos-easing="linear" data-aos-delay="600">
      <div class="timeline-content">
        <h6 class="center-align font-weight-bolder pt-1">${heading}</h6>
        <div class="row">
          <div class="col-lg-4 col-md-4 col-sm-4">
            <img src="${image}" alt="" height="110"
              class=" mt-2 w-100 mx-auto">
          </div>
          <div class="col-lg-8 col-md-8 col-sm-8 px-4">
            <span style="opacity: 0.9; font-size: 15px;">
              ${subheading}
            </span>
            <h6 class="text-muted mt-2" style="font-size: small;">Activities:</h6>
            <ol style="margin-top: -8px; margin-left: -10px; font-size: 12px; list-style: disc;">
              ${description}
            </ol>
          </div>
        </div>
      </div>
    </div>`)
  );
  timeline.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards2);