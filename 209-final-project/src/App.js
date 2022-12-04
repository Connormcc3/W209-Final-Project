import './App.css';
import React from 'react';
import { VegaLite } from 'react-vega'
import GridLayout from "react-grid-layout";
import projectHeader from './project-header.svg';


// FFA (Final Four Appearances)
const FFASpec = require('./specs/final-four-appearances.json')

// APS (Average Player Stats)
const APSSpec = require('./specs/average-player-stats.json')

// TSA (Team Skill Attributes)
const plot1 = require('./specs/plot1.json')

// TSR (Team Skill Ratings)
const TSRSpec = require('./specs/team-skill-ratings.json')

const coffee = require('./specs/coffee.json')
const espresso = require('./specs/espresso.json')
const flat = require('./specs/flat.json')
const latte = require('./specs/latte.json')
const mocha = require('./specs/mocha.json')
const all = require('./specs/all.json')
const all2 = require('./specs/all2.json')
const win_probability = require('./specs/win_probability.json')
const fifa_rank = require('./specs/fifa_rank.json')
const score_rank = require('./specs/score_rank.json')
const general_chart = require('./specs/fifa_rank_n_avg_score.json')
const forecasts = require('./specs/forecasts.json')

function App() {
  return (
    <>
    <img src={projectHeader}/>
      <div className="Title">
        <figure className="TOC">
            <h2> Table of Contents </h2>
              <ul>
                <li><a href="#PWP">Predicted Win Probability</a></li>
                <li><a href="#FFA">Final Four Appearances vs. Championships by Country</a></li>
                <li><a href="#SS">Squad Statistics</a></li>
                <li><a href="#SASRP">Squad Average Skill Rating by Position</a></li>
                <li><a href="#AGC">Age vs. Goals Correlation</a></li>
                <li><a href="#CGNGP">Career Goals vs. National Games Played</a></li>
                <li><a href="#PGCGI">Player Game Count vs. Goals Identifier</a></li>
                <li><a href="#FRAPS">FIFA Rank & Average Position Score</a></li>
                <li><a href="#SAP">Squad Appearance Probabilities</a></li>
              </ul>
              <h3></h3>
        </figure>
        <figure className="Intro">
            <p>
            Welcome! Here you can dive into various plots that give information at the tournament, team, and player level.
            <br></br>
            <br></br>
            Our goal is to allow you to analyze your team selections to make data backed predictions for who will 
            win each round and be crowned the 2022 World Cup champions.
            </p>
        </figure>
      </div>
      <div className="Plot">
          <a id="PWP"></a>
          <figure>
              <h1>Predicted Win Probability</h1>
              <VegaLite spec={win_probability} data={win_probability.datasets} />
              <figcaption>  
              Statistics for the winning probabilities of 32 teams attending 2022 FIFA World Cup in Qatar. They are calculated
              based on the historical data of matches that teams played. The teams having largest winning probabilities are 
              displayed on top. Hover the mouse on each team to see its name and rank. Scroll to zoom in/out.
              </figcaption>
          </figure>
      </div>
      <div className="Plot">
        <a id="FFA"></a>
        <figure>
            <h1>Final Four Appearances vs. Championships by Country</h1>
            <VegaLite spec={FFASpec} data={FFASpec.datasets} />
            <figcaption>
               This plot shows the number of final four appearances in orange against the number of world championships actually won in blue. 
               Consequently, only the teams who have made a final four appearance will be shown here in the graph. You can see specific counts
               by hovering over the bars themselves!
            </figcaption>
        </figure>
      </div>
      <div className="Plot">
          <a id="SS"></a>
          <figure>
              <h1>Squad Statistics</h1>
              <VegaLite spec={all2} data={mocha.datasets} />
              <figcaption> 
                This plot shows squad statistics for goals scored, age, national games played, skill ratings, international ranking, player values 
                and league levels played in. These are calculated averages based on the squad data publicly available. To select a specific squad(s), 
                hold Shift+Click on the individual country’s boxes above the chart.
              </figcaption>
          </figure>
      </div>
      <div className="Plot">
          <a id="SASRP"></a>
          <figure>
              <h1>Squad Average Skill Rating by Position</h1>
              <VegaLite spec={coffee} data={coffee.datasets} />
              <figcaption>  
                  Here you can view the Overall Skill Rating for all 32 squads faceted by the four player positions: Goal Keeping, Forward, Midfield, 
                  and Defender. To select a specific squad(s), hold Shift+Click on the individual country’s boxes above the chart.
              </figcaption>
          </figure>
      </div>
      <div className="Plot">
          <a id="AGC"></a>
          <figure>
              <h1>Age vs. Goals Correlation</h1>
              <VegaLite spec={espresso} data={espresso.datasets} />
              <figcaption>  
                This visualization allows you to compare players’ overall skill rating and total career goals per national games. Use your cursor to 
                select areas or points of interest on the scatterplot to filter individual player information on the histogram.
              </figcaption>
          </figure>
      </div>
      <div className="Plot">
          <a id="CGNGP"></a>
          <figure>
              <h1>Career Goals vs. National Games Played</h1>
              <VegaLite spec={flat} data={flat.datasets} />
              <figcaption> Flat </figcaption>
          </figure>
      </div>
      <div className="Plot">
          <a id="PGCGI"></a>
          <figure>
              <h1>Player Game Count vs. Goals Identifier</h1>
              <VegaLite spec={mocha} data={mocha.datasets} />
              <figcaption> 
              This visualization shows the total career goals plotted against the total number of national games played for each player participating in the 2022 
              FIFA World Cup. Selecting intervals on the scatterplot will filter the below table to identify players within the selection.
              </figcaption>
          </figure>
      </div>
      <div className="Plot">
          <a id="FRAPS"></a>
          <figure>
              <h1>FIFA Rank & Average Position Score</h1>
              <VegaLite spec={general_chart} data={general_chart.datasets} />
              <figcaption> 
                  Here we have the squads' FIFA ranks displayed on the left. On the right we have the squads' average position scores calculated from goalkeeper_score,
                   defense_score, offense_score, and midfield_score.
              </figcaption>
          </figure>
      </div>
      <div className="Plot">
          <a id="SAP"></a>
          <figure>
              <h1>Squad Appearance Probabilities</h1>
              <VegaLite spec={forecasts} data={forecasts.datasets} />
              <figcaption>  
                  This plot shows the 2022 FIFA World Cup Predictions with the probability that a particular team will appear in the corresponding round 
                  of the tournament. The probabilities are extracted from <a href="https://projects.fivethirtyeight.com/2022-world-cup-predictions/bracket/"> this dataset</a>.
              </figcaption>
          </figure>
      </div>
    </>
  );
}

export default App;
