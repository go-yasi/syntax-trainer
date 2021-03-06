const router = require('express').Router();
const { Snippet, User, Score } = require('../../models');

// GET snippet by collection_id
router.get('/collection/:id', async (req, res) => {
    try {
      const snippetData = await Snippet.findAll({
        where: {collection_id: req.params.id},
      });
      res.status(200).json(snippetData);
    } catch (err) {
      res.status(500).json(err);
    }
});

// GET snippet by id
router.get('/:id', async (req, res) => {
    try {
      const snippetData = await Snippet.findByPk(req.params.id, {
          include: [{ model: User}]
      });
      res.status(200).json(snippetData);
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
});

// POST snippet by user
router.post('/', async (req, res) => {
    try {
      const snippetData = await Snippet.create(req.body);
      res.status(200).json(snippetData);
    } catch (err) {
      res.status(500).json(err);
    }
});

// DELETE snippet created by user
router.delete('/:id', async (req, res) => {
    try {
      const snippetData = await Snippet.destroy({
        where: { id: req.params.id }
      });
      if (!snippetData) {
        res.status(404).json({ message: 'No snippet with this id!' });
        return;
      }
      res.status(200).json(snippetData);
    } catch (err) {
      res.status(500).json(err);
    }
  });

// GET all snippets by user id
router.get('/user/:id', async (req, res) => {
    try {
      const snippetData = await Snippet.findAll({
          //include: [{ model: User}],
          where: {user_id: req.params.id}
      });
      res.status(200).json(snippetData);
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
});

// SEED our snippets
router.post('/seed', (req, res) => {
  Snippet.bulkCreate([
    {
      title: "Forms",
      description: "A form with simple input fields",
code: 
`<form action="/action_page.php" method="get">
      <label for="fname">First name:</label>
      <input type="text" id="fname" name="fname"><br><br>
      <label for="lname">Last name:</label>
      <input type="text" id="lname" name="lname"><br><br>
      <input type="submit" value="Submit">
</form>`,
     language: "html",
     collection_id: 1,
     user_id: 1
    },
    {
      title: "Forms",
      description: "A form with checkboxes",
      code: 
`<form action="/action_page.php" method="get">
      <input type="checkbox" name="vehicle1" value="Bike">
      <label for="vehicle1"> I have a bike</label><br>
      <input type="checkbox" name="vehicle2" value="Car">
      <label for="vehicle2"> I have a car</label><br>
      <input type="checkbox" name="vehicle3" value="Boat" checked>
      <label for="vehicle3"> I have a boat</label><br><br>
      <input type="submit" value="Submit">
</form>`,
     language: "html",
     collection_id: 1,
     user_id: 2
    },
    {
      title: "Forms",
      description: "A form with menu choices",
      code: 
`<form name=???selectForm???>
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
</form>`,
     language: "html",
     collection_id: 1,
     user_id: 3
    },
    {
      title: "Lists",
      description: "A numbered ordered list",
      code: 
`<ol type="1">
      <li>Coffee</li>
      <li>Tea</li>
      <li>Milk</li>
</ol>`,
     language: "html",
     collection_id: 1,
     user_id: 4
    },
    {
      title: "Lists",
      description: "An ordered list with links",
      code: 
`<section>
      <h2>Contact Info</h2>
      <ul>
            <li><strong>Email:</strong> <a href="#">someplace@gmail.com</a></li>
            <li><strong>Github:</strong> <a href="#">sampleName</a></li>
            <li><strong>Portfolio:</strong> <a href="#">coming soon</a></li>
      </ul>
</section>`,
     language: "html",
     collection_id: 1,
     user_id: 5
    },
    {
      title: "Lists",
      description: "An unordered list",
      code: 
`<section>
      <p>This is a paragraph.</p>
      <p>This is a paragraph with <strong>BOLDED TEXT</strong>.</p>
      <ul>
            <li>This is list item one</li>
            <li>This is list item two</li>
            <li>This is list item three</li>
      </ul>
</section>`,
     language: "html",
     collection_id: 1,
     user_id: 6
    },
    {
      title: "CSS Styling",
      description: "CSS styling with selection elements for the entire page, classes and id's",
      code: 
`*{
      font-family: "Lucida Sans Unicode", "Lucida Grande", sans-serif;
}
body{
      background-color: lemonchiffon;
}
section{
      height: 200px;
      width: 300px;
}
p{
      font-size: 60px;
      line-height: 200px;
}
.box-blue{
      color: white;
      background-color: blue;
}
#box-orange{
      color: blue;
      background-color: orange;
}`,
     language: "css",
     collection_id: 2,
     user_id: 7
    },
    {
      title: "Switch Case",
      description: "A switch case that evalutes whether to use a dark or light background",
      code: 
`var color = "yellow";
var darkOrLight = "";
switch(color){
      case "yellow": case "pink": case "orange":
            darkOrLight = "Light";
            break;
      case "blue": case "purple": case "brown":
            darkOrLight = "Dark";
            break;
      default:
            darkOrLight = "Unknown";
}`,
     language: "javascript",
     collection_id: 3,
     user_id: 1
    },
    {
      title: "Switch Case",
      description: "A switch case to display the day of the week",
      code: 
`switch (new Date().getDay()) {
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
     language: "javascript",
     collection_id: 3,
     user_id: 2
    },
    {
      title: "For In",
      description: "A For In statement to loop over properties of an array",
      code: 
`const numbers = [45, 4, 9, 16, 25];
let txt = "";
numbers.forEach(myFunction);

function myFunction(value) {
      txt += value;
}`,
     language: "javascript",
     collection_id: 3,
     user_id: 3
    },
    {
      title: "For Loop",
      description: "A For Loop to initiate the value of a text",
      code: 
`const cars = ["BMW", "Volvo", "Saab", "Ford"];
let i = 0;
let text = "";

while (cars[i]) {
      text =+ cars[i];
      i++;
}`,
     language: "javascript",
     collection_id: 3,
     user_id: 4
    },
    {
      title: "For Loop",
      description: "A For Loop to initiate the value of a text",
      code: 
`function calculateTotalEarnings(rate, days) {
      var dailyTotal = rate*8;
      var total = dailyTotal*days;
      return total;
}`,
     language: "javascript",
     collection_id: 3,
     user_id: 5
    },
    {
      title: "Media Queries",
      description: "CSS styling for different screen sizes",
      code: 
`@media screen and (max-width: 992px) {
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
      sample-img {
            background-color: #8ac4ff;
      }
}`,
     language: "css",
     collection_id: 2,
     user_id: 1
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