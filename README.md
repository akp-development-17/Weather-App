# Weather-App
A weather forecast with the help of HTML , CSS , JavaScript , API , BootStrap and other modules

Project Description:-
A weather application is developed with the help of HTML, CSS, JavaScript, API.
This Project is all about displaying the weather details like

`Temperature ,
Maximum and Minimum Temperature ,
Precipitation percentage ,
Humidity Percentage ,
Wind Speed ,
Wind degrees ,
Sunrise and sunset`

It solves the problem that if someone searches for temperature/ weather details he may/may not get all the details at one place.
The vision of this project is to solve this problem by providing all the details at one place.

Technologies used:
HTML
CSS
Java Script
API
Visual Studio Code

Installation Instructions:-
Visual Studio Code:
Link : https://visualstudio.microsoft.com/downloads/

API:
Link : https://rapidapi.com/apininjas/api/weather-by-api-ninjas/

Extensions:

  Rapid API Client:
  Extension id: RapidAPI.vscode-rapidapi-client
  Prettier Formatter:
  Extension id: esbenp.prettier-vscode
  Live Server:
  Extension Id: ritwickdey.LiveServer
  
Usage Instructions:
  After writing the code , open the HTML code with the live server .
  To get weather details , first enter the name of the city.
  Then there a search button which states "Search".
  Click on the search button and the weather details will be displayed.
  There is also User guide and About in the navigation bar.

Dependencies:
There is dependency on API server and the get and fetch requests.

Technical Details:
  Programming Language used:
    Java Script

  Markup Language Used:
    HTML

  Designing and Styling:
    CSS

  Fetching Weather in Real Time:
    Rapid API

Documentation and references:
  Boot Strap:
    Link : https://getbootstrap.com/
  W3 Schools
    Link : https://www.w3schools.com/
  Stack Overflow
    Link: https://stackoverflow.com/
    
Procedure:

  All the files are created :
    HTML file (.html)
    CSS file (.css )
    Java Script (.js )
  .css and .js files are linked/included/embedded in HTML (.html) file.
  Navigation bar with details like logo, title, About, User Guide, Search button is created
  API in java script is written:
  `const options = { method: 'GET', headers: { 'X-RapidAPI-Key': '********', 'X-RapidAPI-Host': '*******' } }; fetch('https://weather-by-api-                          ninjas.p.rapidapi.com/v1/weather?city=Seattle', options) .then(response => response.json()) .then(response => console.log(response)) .catch(err => console.error(err));`

  Fetch function is used to send request and fetch the result using the API as a source
  An evenListner is created so that when a user writes a city name and presses search then it will be directed to the API request and the data will be fetched like     humidity, temperature, etc.
  Footer is created.
  Designing of background images, fonts, background color is done with the help of CSS
  
Key Contributions and Challenges:

  Key Contribution:
    Flexboxes context is added in card format where details are displayed hence making it responsive.
    Real time weather fetching is monitored.
    Accurate results 99%(same as google).
    
  Challenges:
    While developing sometimes API server error was fetched.
    
  Overcame challenges:
    More hands on experience with HTML , CSS , Java Script
    Clearing Cache will help if there is API server error all the time.
    
Future Work:
  A lot of works can be done with this project in future .
  Using frameworks like React will be useful.
  Backend development can be done which will result in (say weather analysis) and display graphs for understanding the pattern and predicting future.
  Random Weather quotes and jokes can displayed which will be a catchy move for attraction.
  With the help of same concept , and android application can be developed .
