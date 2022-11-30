import './App.css';
import React from 'react';
import { VegaLite } from 'react-vega'
import GridLayout from "react-grid-layout";


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
const latte = require('./specs/mocha.json')
const mocha = require('./specs/latte.json')

const layout = [
  { i: "FFA", x: 0, y: 0, w: 12, h: 14, minW: 10, static: true},
  { i: "APS", x: 0, y: 1, w: 26, h: 20, minW: 10, static: true},
  { i: "plot1", x: 0, y: 2, w: 26, h: 14, minW: 10, static: true},
  { i: "TSR", x: 0, y: 3, w: 26, h: 20, minW: 10, static: true},
  {i: "coffee", x: 0, y: 4, w:12, h: 14, minW:10, static: true},
  {i: "espresso", x: 0, y: 5, w:12, h: 20, minW:10, static: true},
  {i: "flat", x: 0, y: 6, w:12, h: 10, minW:10, static: true},
  {i: "latte", x: 0, y: 7, w:12, h: 22, minW:10, static: true},
  {i: "mocha", x: 0, y: 8, w:12, h: 20, minW:10, static: true}
];

// function App() {
//   return (
//     <>
//       <GridLayout
//         className="layout"
//         layout={layout}
//         cols={12}
//         rowHeight={30}
//         width={1200}
//       >
//         <div key="FFA">
//           <VegaLite spec={FFASpec} data={FFASpec.datasets} />
//         </div>
//         <div key="APS">
//           <VegaLite spec={APSSpec} data={APSSpec.datasets} />
//         </div>
//         <div key="TSR">
//           <VegaLite spec={TSRSpec} data={TSRSpec.datasets} />
//         </div>
//         <div key="plot1">
//           <VegaLite spec={plot1} data={plot1.datasets} />
//         </div>
//         <div key="coffee">
//           <VegaLite spec={coffee} data={coffee.datasets} />
//         </div>
//         <div key="espresso">
//           <VegaLite spec={espresso} data={espresso.datasets} />
//         </div>
//         <div key="flat">
//           <VegaLite spec={flat} data={flat.datasets} />
//         </div>
//         <div key="latte">
//           <VegaLite spec={latte} data={latte.datasets} />
//         </div>
//         <div key="mocha">
//           <VegaLite spec={mocha} data={mocha.datasets} />
//         </div>
//
//       </GridLayout>
//     </>
//   );
// }

function App() {
  return (
    <>
        {/*<div className="graph_wrapper">*/}
      <div className="Title">
        <h1>2022 FIFA World Cup Breakdown</h1>
          <div className="subtitle">
              <h3> Connor McCormick, Samantha Williams, Alexa Coughlin, Julie Lee, Queen Tran</h3>
          </div>
      </div>
      <div className="Plot" key="FFA">
        <figure>
            <VegaLite spec={FFASpec} data={FFASpec.datasets} />
            <figcaption> This is a plot about soccer </figcaption>
        </figure>
      </div>
      <div className="Plot" key="APS">
          <figure>
            <VegaLite spec={APSSpec} data={APSSpec.datasets} />
            <figcaption> This is a plot about soccer </figcaption>
          </figure>
      </div>
      <div className="Plot" key="TSR">
        <figure>
          <VegaLite spec={TSRSpec} data={TSRSpec.datasets} />
          <figcaption> This is a plot about soccer </figcaption>
        </figure>
      </div>
      <div className="Plot" key="plot1">
          <figure>
              <VegaLite spec={plot1} data={plot1.datasets} />
              <figcaption> This is a plot about soccer </figcaption>
          </figure>
      </div>
      <div className="Plot" key="coffee">
          <figure>
              <VegaLite spec={coffee} data={coffee.datasets} />
              <figcaption> This is a plot about soccer </figcaption>
          </figure>
      </div>
      <div className="Plot" key="espresso">
          <figure>
              <VegaLite spec={espresso} data={espresso.datasets} />
              <figcaption> This is a plot about soccer </figcaption>
          </figure>
      </div>
      <div className="Plot" key="flat">
          <figure>
              <VegaLite spec={flat} data={flat.datasets} />
              <figcaption> This is a plot about soccer </figcaption>
          </figure>
      </div>
      <div className="Plot" key="latte">
          <figure>
              <VegaLite spec={latte} data={latte.datasets} />
              <figcaption> This is a plot about soccer </figcaption>
          </figure>
      </div>
      <div className="Plot" key="mocha">
          <figure>
              <VegaLite spec={mocha} data={mocha.datasets} />
              <figcaption> This is a plot about soccer </figcaption>
          </figure>
      </div>
        {/*</div>*/}
    </>
  );
}

export default App;
