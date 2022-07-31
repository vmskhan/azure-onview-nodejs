# Online-Interview Platform(using Nodejs)

Project demo video [click here]()

Live project link [click here](https://onview.azurewebsites.net/)
 ## Introduction
 In the Ed-Tech industry, hiring of employees, interns from universities takes place frequently and consumes a lot of time of HR team of a company and the company spends a lot of money on it. To make it easier for the company to recruit new employees or interns , an online Interview platform that is accessible over the internet is beneficial. Many tasks can be automated and it provides ease in conducting virtual interviews of candidates.
 ## Brief Description
 In this project Interviewers can create interviews, create a set of questions before hand, schedule interviews for registered candidates. The interview is conducted online using Zoom meetings. The candidate can join the meeting, and the questions are displayed beside the meet window, which the candidate can answer while interacting with the interviewer. After the interview ends all objective questions are evaluated by the backend, and the subjective questions are presented in web page for the interviewer to evaluate. The results of the interview assessment are given to the candidate and reported to the interviewer. This project is a web-app hosted in Azure App service. The frontend of the web-app has been created using React and Bootstrap ,it provides user interface to both Interviewers and candidates. They have to register before using the platform. The backend is written in Nodejs which processes data and performs required functions for the web-app. The data of users and the interviews are stored in Azure Cosmos DB. The data from the database is retrieved by Nodejs and sent to the UI. Further Zoom APIs are used to provide the Meet functionality. The web-app communicates with the Zoom APIs using REST-Endpoints.
 ##Steps
