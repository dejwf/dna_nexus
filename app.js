const express = require('express');

const port = process.env.npm_package_config_port ? process.env.npm_package_config_port : 3000;

const app = express();

// mocked return values
app.get("/genes", (req, res, next)=> {
  let response = '';
  // response += `${req.query.begin}, ${req.query.end },`;
  let rng = parseInt(req.query.end) - parseInt(req.query.begin);
  console.log(`generating ${rng} lines of data`);
  let lines = [...Array(rng).keys()];
  for(aLine in lines){
    response += `${req.query.begin + parseInt(aLine)},${req.query.begin + (parseInt(aLine) + 1)},`
    if (aLine % 2){
      response += "TAGCTAACTCGAGATCGC<br />"
    }else{
      response += "ATCGATTGAGCTCTAGCG<br />"
    }
  }
  res.send(response)
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

module.exports = app;