import './App.css';
import React from 'react';
import { VegaLite } from 'react-vega'
import GridLayout from "react-grid-layout";


// FFA (Final Four Appearances)
const FFASpec = require('./specs/final-four-appearances.json')

// APS (Average Player Stats)
const APSSpec = require('./specs/average-player-stats.json')

// TSA (Team Skill Attributes)
const TSASpec = require('./specs/team-skill-attributes.json')

// TSR (Team Skill Ratings)
const TSRSpec = require('./specs/team-skill-ratings.json')

const layout = [
  { i: "FFA", x: 0, y: 0, w: 12, h: 14, minW: 10 },
  { i: "APS", x: 0, y: 2, w: 26, h: 20, minW: 10 },
  { i: "TSA", x: 0, y: 3, w: 26, h: 20, minW: 10 },
  { i: "TSR", x: 0, y: 3, w: 26, h: 20, minW: 10 }
];

function App() {
  return (
    <>
      <GridLayout
        className="layout"
        layout={layout}
        cols={12}
        rowHeight={30}
        width={1200}
      >
        <div key="FFA">
          <VegaLite spec={FFASpec} data={FFASpec.datasets} />
        </div>
        <div key="APS">
          <VegaLite spec={APSSpec} data={APSSpec.datasets} />
        </div>
        <div key="TSA">
          <VegaLite spec={TSASpec} data={TSASpec.datasets} />
        </div>
        <div key="TSR">
          <VegaLite spec={TSRSpec} data={TSRSpec.datasets} />
        </div>
      </GridLayout>
    </>
  );
}

export default App;
