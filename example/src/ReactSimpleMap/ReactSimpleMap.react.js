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
import { Component } from "react";
function value(p,k)
  {
   if (k == 'end_date')
   {
      if ((p['start_date'].getTime()) == (new Date().getTime()))
      {
        return parseInt((p[k]-p['optimum_start'])/(1000*60*60*24)).toLocaleString(navigator.language, { minimumFractionDigits: 0 })

      }
       return parseInt((p[k]-p['start_date'])/(1000*60*60*24)).toLocaleString(navigator.language, { minimumFractionDigits: 0 })
   } 
   else if ( k == 'start_date')
   {  console.log("inside if "+((p['start_date']-(new Date()))/(1000*60*60*24)))
       if (((p['start_date']-(new Date()))/(1000*60*60*24)) < 2)
       {console.log("inside if "+((p['start_date']-(new Date()))/(1000*60*60*24)))
         return p['optimum_start'].getDate()+"/"+(p['optimum_start'].getMonth()+1)
        }
       
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
{/*}
function calc(p) {
  return (
    ((((p['end_date']-p['start_date'])/(1000*60*60*24))*p['daily']*0.85)+(((p['optimum_end']-p['optimum_start'])/(1000*60*60*24))*p['daily']*0.4))
  );
}
//const values = []
function change() {
  this.props.data.map(s => (s.Total_Saved = calc(s)));
}

function range() {
  this.props.data.forEach(function(o) {
    min = Math.min(min, calc(o) == 0 ? Number.MAX_VALUE : calc(o));
    max = Math.max(max, calc(o));
  });
  //console.log("max" + max);
  //console.log("min" + min);
}*/}
class ReactSimpleMap extends Component {
  constructor(props)
  {
    super(props)
    this.state = {
      origin: { x: 0, y: 0 },
      content: "",

    }
    this.range();
    this.popScale = scaleLinear()
    .domain([min, (max + min) / 30, max])
    .range(["#87f50b", "#1b8800", "#1E5631"]);
    
    this.handleClick = this.handleClick.bind(this)
    this.sendData = this.sendData.bind(this)
    this.calc = this.calc.bind(this)
    this.change = this.change.bind(this)
    this.range = this.range.bind(this)
    //var this.props.data = this.props.data
  }
  sendData(e){
    this.props.parentCallback(e);}

  calc(p){
        if (typeof p == 'undefined' )
        { console.log("p is undefined")
            return 0
          }
        return ((((p['end_date']-p['start_date'])/(1000*60*60*24))*p['daily']*1)+(((p['optimum_end']-p['optimum_start'])/(1000*60*60*24))*p['daily']*0.5))
      
    }
  range(){
      this.props.data.forEach(function(o) {
        min = Math.min(min, o['Total_Saved'] == 0 ? Number.MAX_VALUE : o['Total_Saved']);
        max = Math.max(max, o['Total_Saved']);
        console.log(o['Total_Saved'] != 0? o['Total_Saved']: "zeroooooo") 
      });
      console.log("max" + max);
      console.log("min" + min);

    }
    //const values = []
  change(){
      this.props.data.map(s => (s.Total_Saved = this.calc(s)));
    }
    

  handleClick = (
    geography: { properties: { name: string, pop_est: string } },
    evt: SyntheticMouseEvent<>
  ): void => {
    const x = evt.clientX;
    const y = evt.clientY + window.pageYOffset;
    this.sendData(geography.properties.name)
    //console.log(geography.properties.ISO_A3);
    this.setState({
      country : geography.properties.name,
      origin: { x, y },
      content:
        geography.properties.name +
        ": " +
        (this.props.data.find(s => s.country == geography.properties.name)
          ? this.props.data.find(s => s.country == geography.properties.name)['Total_Saved'].toLocaleString(navigator.language, { minimumFractionDigits: 0 })+" Million MT"
          : "NA"),
    });
  };

  
  handleMove = (
    geography: { properties: { name: string, pop_est: string } },
    evt: SyntheticMouseEvent<>
  ): void => {
    const x = evt.clientX;
    const y = evt.clientY + window.pageYOffset;
    //console.log(geography.properties.ISO_A3);
    this.setState({
      country : geography.properties.name,
      origin: { x, y },
      content:
        geography.properties.name +
        ": " +
        (this.props.data.find(s => s.country == geography.properties.name)
          ? this.props.data.find(s => s.country == geography.properties.name)['Total_Saved'].toLocaleString(navigator.language, { minimumFractionDigits: 0 })+" Million MT"
          : "NA"),
    });
  };

  handleLeave = ():void => {
    this.setState({ content: "" });
  };


  render(){
    //this.change();
    //this.range();
    
    const popScale = scaleLinear()
      .domain([min, (max + min) / 2, max])
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
                  const country = this.props.data.find(
                    s => s.country == geography.properties.name
                  );
                  return (
                    <Geography
                      key={geography.properties.ISO_A3 + i}
                      geography={geography}
                      onMouseMove={this.handleMove}
                      onMouseDown = {this.handleClick}
                      onMouseLeave={this.handleLeave}
                      projection={projection}
                      style={{
                        default: {
                          fill: country ? this.popScale(country['Total_Saved']) : "#e8f4f8",
                          stroke: "#607D8B",
                          strokeWidth: 0.75,
                          outline: "none",
                        },
                        hover: {
                          fill:"#d1fe04",
                          stroke: "#607D8B",
                          strokeWidth: 0.75,
                          outline: "none",
                        },
                        pressed: {
                          fill: "#263238",
                          stroke: "#",
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
