// @flow
import * as React from "react";
import {
  ComposableMap,
  ZoomableGroup,
  Geographies,
  Geography,
} from "react-simple-maps";
import data from "./data/world-50m.json";
import { scaleLinear } from "d3-scale";

function value(p,k)
  {
   if (k == 'end_date')
   {
       return parseInt((p[k]-p['start_date'])/(1000*60*60*24)).toLocaleString(navigator.language, { minimumFractionDigits: 0 })
   } 
   else if ( k == 'start_date')
   {  console.log(p['country']+(p['start_date'].getTime()==(new Date().getTime())))
       if ((p['start_date'].getTime()) == (new Date().getTime()))
       {console.log("inside if ")
         return p['optimum_start'].getDate()+"/"+(p['optimum_start'].getMonth()+1)}
       
       return p[k].getDate()+"/"+(p[k].getMonth()+1)
   }
   else if ( k == 'Total_Saved')
   {
       return ((((p['end_date']-p['start_date'])/(1000*60*60*24))*p['daily']*0.85)+(((p['optimum_end']-p['optimum_start'])/(1000*60*60*24))*p['daily']*0.4)).toLocaleString(navigator.language, { minimumFractionDigits: 0 })
   }
   else if (k == 'daily')
   {
     return (p[k]).toLocaleString(navigator.language, { minimumFractionDigits: 0 })
   }
   else if (k == 'optimum_start' || k == 'optimum_end')
   {
     return ""
   }
   else 
   {
       return p[k].toString()
   }
  }
var max = 0;
var min = Number.MAX_VALUE;
const mydata = [

    {name : "China", daily : 5731496, start_date : new Date(2020,0,20),end_date : new Date(2020,2,20),Total_Saved : 0,optimum_start:new Date(2020,2,20),optimum_end:new Date()},
    {name : "India", daily : 1823594, start_date : new Date(2020,2,22),end_date : new Date(),Total_Saved : 0,optimum_start:new Date(),optimum_end:new Date()},
    {name : "United States", daily : 12898866, start_date : new Date(),end_date : new Date(),Total_Saved : 0,optimum_start:new Date(2020,2,20),optimum_end:new Date()},
    {name : "Japan", daily : 981746, start_date : new Date(),end_date : new Date(),Total_Saved : 0,optimum_start:new Date(2020,2,20),optimum_end:new Date()},
    {name : "Italy", daily : 309127/0.85, start_date : new Date(2020,2,9),end_date : new Date(),Total_Saved : 0,optimum_start:new Date(),optimum_end:new Date()},
    {name : "Spain", daily : 239046/0.85, start_date : new Date(2020,2,14),end_date : new Date(),Total_Saved : 0,optimum_start:new Date(),optimum_end:new Date()},
    {name : "France", daily : 333728/0.85, start_date : new Date(2020,2,17),end_date : new Date(),Total_Saved : 0,optimum_start:new Date(),optimum_end:new Date()},
    {name : "Germany", daily : 428368/0.85, start_date : new Date(2020,2,22),end_date : new Date(),Total_Saved : 0,optimum_start:new Date(),optimum_end:new Date()},
    {name : "UK", daily : 340751/0.85, start_date : new Date(2020,2,23),end_date : new Date(),Total_Saved : 0,optimum_start:new Date(),optimum_end:new Date()},
    {name : "Belgium", daily :59255/0.85, start_date : new Date(2020,2,18),end_date : new Date(),Total_Saved : 0,optimum_start:new Date(),optimum_end:new Date()},
    {name : "Rest OF Europe", daily : 993706/0.4, start_date : new Date(),end_date : new Date(),Total_Saved : 0,optimum_start:new Date(2020,2,22),optimum_end:new Date()}
];
const wrapperStyles = {
  width: "100%",
  height: "auto",
  maxWidth: "100%",
  margin: "0 auto",
  fontFamily: "Roboto, sans-serif",
};

type State = {
  origin: { x: number, y: number },
  content: string,
};

function calc(p) {
  return (
    ((((p['end_date']-p['start_date'])/(1000*60*60*24))*p['daily']*0.85)+(((p['optimum_end']-p['optimum_start'])/(1000*60*60*24))*p['daily']*0.4))
  );
}
//const values = []
function change() {
  mydata.map(s => (s.Total_Saved = calc(s)));
}

function range() {
  mydata.forEach(function(o) {
    min = Math.min(min, calc(o) == 0 ? Number.MAX_VALUE : calc(o));
    max = Math.max(max, calc(o));
  });
  console.log("max" + max);
  console.log("min" + min);
}
class ReactSimpleMap extends React.PureComponent<void, State> {
  state = {
    origin: { x: 0, y: 0 },
    content: "",
  };

  handleMove = (
    geography: { properties: { name: string, pop_est: string } },
    evt: SyntheticMouseEvent<>
  ): void => {
    const x = evt.clientX;
    const y = evt.clientY + window.pageYOffset;
    console.log(geography.properties.ISO_A3);
    this.setState({
      origin: { x, y },
      content:
        geography.properties.name +
        ": " +
        (mydata.find(s => s.name == geography.properties.name)
          ? calc(mydata.find(s => s.name == geography.properties.name)).toLocaleString(navigator.language, { minimumFractionDigits: 0 })+" MT"
          : "NA"),
    });
  };

  handleLeave = (): void => {
    this.setState({ content: "" });
  };

  render() {
    change();
    range();
    const popScale = scaleLinear()
      .domain([min, (max + min) / 5, max])
      .range(["#A4DE02", "#76BA1B", "#1E5631"]);

    return (
      <div style={wrapperStyles}>
        {this.state.content && (
          <div
            style={{
              position: "fixed",
              top: this.state.origin.y + 20 - window.scrollY,
              left: this.state.origin.x,
              zIndex: 999999,
              textAlign: "center",
              border: "1px grey solid",
              borderRadius: 3,
              padding: 4,
              backgroundColor: "#fff",
            }}
          >
            {this.state.content}
          </div>
        )}

        <ComposableMap
          projectionConfig={{
            scale: 205,
            rotation: [-11, 0, 0],
          }}
          style={{
            width: "100%",
            height: "auto",
          }}
          width={900}
        >
          <ZoomableGroup center={[0, 20]}>
            <Geographies geography={data}>
              {(geographies, projection) =>
                geographies.map((geography, i) => {
                  const country = mydata.find(
                    s => s.name == geography.properties.name
                  );
                  return (
                    <Geography
                      key={geography.properties.ISO_A3 + i}
                      geography={geography}
                      onMouseMove={this.handleMove}
                      onMouseLeave={this.handleLeave}
                      projection={projection}
                      style={{
                        default: {
                          fill: country ? popScale(calc(country)) : "#e8f4f8",
                          stroke: "#607D8B",
                          strokeWidth: 0.75,
                          outline: "none",
                        },
                        hover: {
                          fill: country
                            ? popScale(calc(country) + 100)
                            : "#e8f4f8",
                          stroke: "#607D8B",
                          strokeWidth: 0.75,
                          outline: "none",
                        },
                        pressed: {
                          fill: "#263238",
                          stroke: "#607D8B",
                          strokeWidth: 0.75,
                          outline: "none",
                        },
                      }}
                    />
                  );
                })
              }
            </Geographies>
          </ZoomableGroup>
        </ComposableMap>
      </div>
    );
  }
}

export default ReactSimpleMap;
