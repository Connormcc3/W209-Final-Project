import './App.css';
import React from 'react';
import { VegaLite } from 'react-vega'
import GridLayout from "react-grid-layout";
import projectHeader from './project-header.svg';
import bracket from './bracket.pdf'

const FFASpec = require('./specs/final-four-appearances.json')
const APSSpec = require('./specs/average-player-stats.json')
const plot1 = require('./specs/plot1.json')
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
const outliers = require('./specs/outlier_players.json')

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
                <li><a href="#OP">Outlier Players</a></li>
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
            <br></br>
            <br></br>
            * Some country and player data were not available at the time of this project creation. (TODO: Shrink)
            </p>
        </figure>
      </div>
      <div className="Bracket">
        <iframe src={bracket} height="700" width="1200"></iframe>
      </div>
      <div className="Plot">
          <a id="PWP"></a>
          <figure>
              <h1>Predicted Win Probability</h1>
              <VegaLite spec={win_probability} data={win_probability.datasets} />
              <figcaption>  
              Statistics for the winning probabilities of 32 squads attending 2022 FIFA World Cup in Qatar. They are calculated
              based on the historical data of matches won that squads played home and away. Hover the mouse on each bar to see specific counts. Scroll to zoom in/out.
              </figcaption>
          </figure>
      </div>
      <div className="Plot">
        <a id="FFA"></a>
        <figure>
            <h1>Final Four Appearances vs. Championships</h1>
            <VegaLite spec={FFASpec} data={FFASpec.datasets} />
            <figcaption>
               Assess the number of final four appearances against world championships won. Hover the mouse on each bar to see specific counts. Scroll to zoom in/out.
            </figcaption>
        </figure>
      </div>
      <div className="Plot">
          <a id="SS"></a>
          <figure>
              <h1>Squad Statistics</h1>
              <VegaLite spec={all2} data={mocha.datasets} />
              <figcaption> 
                Explore squad statistics for goals scored, age, national games played, skill ratings, international ranking, player values 
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
                  View the overall skill rating for all 32 squads faceted by the four player positions: Goalkeeper, Forward, Midfielder, 
                  and Defender. To select a specific squad(s), hold Shift+Click on the individual country’s boxes above the chart.
              </figcaption>
          </figure>
      </div>
      <div className="Plot">
          <a id="AGC"></a>
          <figure>
              <h1>Overall Skill Rating Relative to Player Performance</h1>
              <VegaLite spec={espresso} data={espresso.datasets} />
              <figcaption>  
                Compare players’ overall skill rating and total career goals per national games. Use your cursor to 
                select areas or points of interest on the scatterplot to filter individual player information on the histogram.
              </figcaption>
          </figure>
      </div>
      <div className="Plot">
          <a id="PGCGI"></a>
          <figure>
              <h1>Player Game Count vs. Goals Identifier</h1>
              <VegaLite spec={mocha} data={mocha.datasets} />
              <figcaption> 
              Analyze total career goals against the total number of national games played for each player participating in the 2022 
              FIFA World Cup. Selecting intervals on the scatterplot will filter the below table to identify players within the selection.
              </figcaption>
          </figure>
      </div>
      <div className="Plot">
          <a id="OP"></a>
          <figure>
              <h1>Outlier Players</h1>
              <VegaLite spec={outliers} data={outliers.datasets} />
              <figcaption> 
                Compare the number of goals-scoring outliers on each World Cup team. An outlier is defined as a player in the 85th percentile of average goals scored 
                per game in World Cup matches. Hover over a country’s bar with your cursor to see a list of the outlier players on that team.
              </figcaption>
          </figure>
      </div>
      <div className="Plot">
          <a id="FRAPS"></a>
          <figure>
              <h1>FIFA Rank & Average Player Position Score</h1>
              <VegaLite spec={general_chart} data={general_chart.datasets} />
              <figcaption> 
                  FIFA ranks are displayed on the left. Squads' average position score on the right (calculated from goalkeeper,
                   defense, offense, and midfield scores). Hover the mouse on each bar to see the specific probabilities. Scroll to zoom in/out.
              </figcaption>
          </figure>
      </div>
      <div className="Plot">
          <a id="SAP"></a>
          <figure>
              <h1>Squad Appearance Probabilities</h1>
              <VegaLite spec={forecasts} data={forecasts.datasets} />
              <figcaption>  
                  2022 FIFA World Cup Predictions with the probability that a particular team will appear in the corresponding round 
                  of the tournament. The probabilities are extracted from <a href="https://projects.fivethirtyeight.com/2022-world-cup-predictions/bracket/"> this dataset</a>.
                  Hover the mouse on each bar to see the specific probabilities.
              </figcaption>
          </figure>
      </div>
    </>
  );
}

export default App;
