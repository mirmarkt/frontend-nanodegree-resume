/*
This is empty on purpose! Your code to build the resume will go here.
 */

 var bio = {
     "name": "Laurent Gao",
     "role": "Web Developer",
     "contacts": {
         "mobile": "18240330930",
         "email": "mercurystern@hotmail.com",
         "github": "https://github.com/mirmarkt",
         "twitter": "@mercurystern",
         "location": "Shenyang Liaoning China"
     },
     "biopic": "images/cat.JPG",
     "welcomeMessage": "welcome",
     "skill": ["HTML", "CSS", "JavaScript", "Japanese", "French"]
 };

 bio.display = function() {
     var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
     $("#header").prepend(formattedWelcomeMsg);
     var formattedBioPic = HTMLbioPic.replace("%data%", bio.biopic);
     $("#header").prepend(formattedBioPic);
     var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
     $("#header").prepend(formattedRole);
     var formattedName = HTMLheaderName.replace("%data%", bio.name);
     $("#header").prepend(formattedName);
     var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
     $("#topContacts").append(formattedMobile);
     $("#footerContacts").append(formattedMobile);
     var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
     $("#topContacts").append(formattedEmail);
     $("#footerContacts").append(formattedEmail);
     var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
     $("#topContacts").append(formattedTwitter);
     $("#footerContacts").append(formattedTwitter);
     var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
     $("#topContacts").append(formattedGithub);
     $("#footerContacts").append(formattedGithub);
     var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
     $("#topContacts").append(formattedLocation);
     $("#footerContacts").append(formattedLocation);
     $("#header").append(HTMLskillsStart);
     bio.skill.forEach(function(element) {
         var formattedSkills = HTMLskills.replace("%data%", element);
         $("#skills").append(formattedSkills);
     });
 };

 bio.display();

 var work = {
     "jobs": [{
             "employer": "a",
             "title": "French translator",
             "location": "Guangzhou",
             "dates": "2015.7-2015.10",
             "description": "a"
         },
         {
             "employer": "North computer",
             "title": "Seller",
             "location": "Shenyang",
             "dates": "b",
             "description": "b"
         }
     ]
 };

 work.display = function() {
     work.jobs.forEach(function(element) {
         $("#workExperience").append(HTMLworkStart);
         var formattedWorkEmployer = HTMLworkEmployer.replace("%data%", element.employer);
         $(".work-entry:last").append(formattedWorkEmployer);
         var formattedWorkTitle = HTMLworkTitle.replace("%data%", element.title);
         $(".work-entry:last").append(formattedWorkTitle);
         var formattedWorkDates = HTMLworkDates.replace("%data%", element.dates);
         $(".work-entry:last").append(formattedWorkDates);
         var formattedWorkLocation = HTMLworkLocation.replace("%data%", element.location);
         $(".work-entry:last").append(formattedWorkLocation);
         var formattedWorkDescription = HTMLworkDescription.replace("%data%", element.description);
         $(".work-entry:last").append(formattedWorkDescription);
     });
 };

 work.display();

 var projects = {
     "projects": [{
         "title": "my portfolio",
         "dates": "2017.2",
         "description": "This was my first project in this class. I learned a lot about HTML and CSS.",
         "images": ["images/portfolio.jpg", "images/197x148.gif"]
     }]
 };

 projects.display = function() {
     projects.projects.forEach(function(element) {
         $("#projects").append(HTMLprojectStart);
         var formattedProjectTitle = HTMLprojectTitle.replace("%data%", element.title);
         $(".project-entry:last").append(formattedProjectTitle);
         var formattedProjectDates = HTMLprojectDates.replace("%data%", element.dates);
         $(".project-entry:last").append(formattedProjectDates);
         var formattedProjectDescription = HTMLprojectDescription.replace("%data%", element.description);
         $(".project-entry:last").append(formattedProjectDescription);
         element.images.forEach(function(data) {
             var formattedProjectDescription = HTMLprojectImage.replace("%data%", data);
             $(".project-entry:last").append(formattedProjectDescription);
         });
     });
 };

 projects.display();

 var education = {
     "schools": [{
             "name": "Yunnan Univercity",
             "location": "Kunming",
             "degree": "bachelor",
             "majors": ["French", "literature"],
             "dates": "2011-2015",
             "url": "http://www.ynu.edu.cn"
         },
         {
             "name": "Shenyang No.31 High Middle School",
             "location": "Shenyang",
             "degree": "bachelor",
             "majors": ["French", "literature"],
             "dates": "2008-2011",
             "url": "http://www.ynu.edu.cn"
         }
     ],
     "onlineCourse": [{
         "title": "front-end developer",
         "school": "Udacity",
         "dates": "2017.1-2017.2",
         "url": "https://www.udacity.com"
     }]
 };

 education.display = function() {
     education.schools.forEach(function(element) {
         $("#education").append(HTMLschoolStart);
         var formattedSchoolName = HTMLschoolName.replace("%data%", element.name).replace("#", element.url);
         $(".education-entry:last").append(formattedSchoolName);
         var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", element.degree);
         $(".education-entry:last").append(formattedSchoolDegree);
         var formattedSchoolDates = HTMLschoolDates.replace("%data%", element.dates);
         $(".education-entry:last").append(formattedSchoolDates);
         var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", element.location);
         $(".education-entry:last").append(formattedSchoolLocation);
         element.majors.forEach(function(datas) {
             var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", datas);
             $(".education-entry:last").append(formattedSchoolMajor);
         });
     });
     $("#education").append(HTMLonlineClasses);
     education.onlineCourse.forEach(function(element) {
         $("#education").append(HTMLschoolStart);
         var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", element.title);
         $(".education-entry:last").append(formattedOnlineTitle);
         var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", element.school);
         $(".education-entry:last").append(formattedOnlineSchool);
         var formattedOnlineDates = HTMLonlineDates.replace("%data%", element.dates);
         $(".education-entry:last").append(formattedOnlineDates);
         var formattedOnlineURL = HTMLonlineURL.replace("%data%", element.url);
         $(".education-entry:last").append(formattedOnlineURL);
     });
 };

 education.display();

 $("#mapDiv").append(googleMap);
