const router = require('express').Router();
const Snippet = require('../models/Snippet');


router.post('/seed', (req, res) => {
    Snippet.bulkCreate([
      {
        title: "Forms",
        description: "A form with simple input fields",
        code: `<form action="/action_page.php" method="get">
        <label for="fname">First name:</label>
        <input type="text" id="fname" name="fname"><br><br>
        <label for="lname">Last name:</label>
        <input type="text" id="lname" name="lname"><br><br>
        <input type="submit" value="Submit">
        </form>`,
       language: "HTML",
       collection_id: "1",
       user_id: "1"
      },
      {
        title: "Forms",
        description: "A form checkboxes",
        code: `<form action="/action_page.php" method="get">
        <input type="checkbox" name="vehicle1" value="Bike">
        <label for="vehicle1"> I have a bike</label><br>
        <input type="checkbox" name="vehicle2" value="Car">
        <label for="vehicle2"> I have a car</label><br>
        <input type="checkbox" name="vehicle3" value="Boat" checked>
        <label for="vehicle3"> I have a boat</label><br><br>
        <input type="submit" value="Submit">
      </form>`,
       language: "HTML",
       collection_id: "1",
       user_id: "2"
      },
      {
        title: "Forms",
        description: "A form with menu choices",
        code: `<form name="selectForm">
        <p>
          <label for="musicTypes">Choose some music types, then click the button below:</label>
          <select id="musicTypes" name="musicTypes" multiple="multiple">
            <option selected="selected">R&B</option>
            <option>Jazz</option>
            <option>Blues</option>
            <option>New Age</option>
            <option>Classical</option>
            <option>Opera</option>
          </select>
        </p>
        <p><input id="btn" type="button" value="How many are selected?" /></p>
      </form>`,
       language: "HTML",
       collection_id: "1",
       user_id: "3"
      },
      {
        title: "Lists",
        description: "A numbered ordered list",
        code: `<ol type="1">
        <li>Coffee</li>
        <li>Tea</li>
        <li>Milk</li>
      </ol>`,
       language: "HTML",
       collection_id: "1",
       user_id: "4"
      },
      {
        title: "Lists",
        description: "An ordered list with links",
        code: `<section>
        <h2>Contact Info</h2>
        <ul>
          <li><strong>Email:</strong> <a href="#">someplace@gmail.com</a></li>
          <li><strong>Github:</strong> <a href="#">sampleName</a></li>
          <li><strong>Portfolio:</strong> <a href="#">coming soon</a></li>
        </ul>
      </section>
  `,
       language: "HTML",
       collection_id: "1",
       user_id: "5"
      },
      {
        title: "Lists",
        description: "An unordered list",
        code: `<section>
        <p>This is a paragraph.</p>
        <p>This is a paragraph with <strong>BOLDED TEXT</strong>.</p>
             
         <ul>
          <li>This is list item one</li>
          <li>This is list item two</li>
          <li>This is list item three</li>
        </ul>
        <section>`,
       language: "HTML",
       collection_id: "1",
       user_id: "6"
      },
      {
        title: "CSS Styling",
        description: "CSS styling with selection elements for the entire page and specific global elements, classes and id's",
        code: `* {
            font-family: "Lucida Sans Unicode", "Lucida Grande", sans-serif;
          }
          
          body {
            background-color: lemonchiffon;
          }
          
          section {
            height: 200px;
            width: 300px;
          }
          
          p {
            font-size: 60px;
            line-height: 200px;
          }
          
          .box-blue {
            color: white;
            background-color: blue;
          }
          
          #box-orange {
            color: blue;
            background-color: orange;
          }`,
       language: "CSS",
       collection_id: "2",
       user_id: "7"
      },
      {
        title: "Switch Case",
        description: "A switch case that evalutes whether to use a dark or ligh background",
        code: `var color = "yellow";
        var darkOrLight="";
        switch(color) {
            case "yellow":case "pink":case "orange":
                darkOrLight = "Light";
                break;
            case "blue":case "purple":case "brown":
                darkOrLight = "Dark";
                break;
            default:
                darkOrLight = "Unknown";
        }`,
       language: "JAVASCRIPT",
       collection_id: "3",
       user_id: "1"
      },
      {
        title: "Switch Case",
        description: "A switch case to display the day of the week",
        code: `switch (new Date().getDay()) {
            case 0:
              day = "Sunday";
              break;
            case 1:
              day = "Monday";
              break;
            case 2:
               day = "Tuesday";
              break;
            case 3:
              day = "Wednesday";
              break;
            case 4:
              day = "Thursday";
              break;
            case 5:
              day = "Friday";
              break;
            case 6:
              day = "Saturday";
          }`,
       language: "JAVASCRIPT",
       collection_id: "3",
       user_id: "2"
      },
      {
        title: "For In",
        description: "A For In statement to loop over properties of an array",
        code: `const numbers = [45, 4, 9, 16, 25];

        let txt = "";
        numbers.forEach(myFunction);
        
        function myFunction(value) {
          txt += value;`,
       language: "JAVASCRIPT",
       collection_id: "3",
       user_id: "3"
      },
      {
        title: "For Loop",
        description: "A For Loop to initiate the value of a text",
        code: `const cars = ["BMW", "Volvo", "Saab", "Ford"];
        let i = 0;
        let text = "";
        
        while (cars[i]) {
          text += cars[i];
          i++;
        }`,
       language: "JAVASCRIPT",
       collection_id: "3",
       user_id: "4"
      },
      {
        title: "For Loop",
        description: "A For Loop to initiate the value of a text",
        code: `function calculateTotalEarnings(rate, days) {
            var dailyTotal = rate * 8;
            var total = dailyTotal * days;
            return total;
          }`,
       language: "JAVASCRIPT",
       collection_id: "3",
       user_id: "5"
      },
      {
        title: "Media Queries",
        description: "CSS styling for different screen sizes",
        code: `@media screen and (max-width: 992px) {
            header {
              background: #772014;
            }
          }

          @media screen and (max-width: 768px) {
            nav {
              background-color: #bb8588;
            }
          }

          @media screen and (max-width: 576px) {
            .sample-img {
              background-color: #8ac4ff;
            }
          }
          `,
       language: "CSS",
       collection_id: "2",
       user_id: "1"
      },
    ])
      .then(() => {
        res.send('Database seeded!');
      })
      .catch((err) => {
        res.json(err);
      });
  });
  
  module.exports = router;