// @flow

import * as React from "react";
import ReactSimpleMap from "./ReactSimpleMap";
import table from "./table";
import logo from "./Picture5.png";
import Header from "./Header/Header.react";


import {
  Page,
  Avatar,
  Icon,
  Grid,
  Card,
  Text,
  Table,
  Alert,
  Progress,
  colors,
  Dropdown,
  Button,
  StampCard,
  StatsCard,
  ProgressCard,
  Badge,
  TabbedCard,
  PricingCard
} from "tabler-react";

import C3Chart from "react-c3js";
//import DownloadLink from "react-download-link";
//import c3 from "react-c3js";
import SiteWrapper from "./SiteWrapper.react";
import { list } from "postcss";
import reactC3js from "react-c3js";

//import CardFooter from "../../src/components/Card/CardFooter.react";
//import CardBody from "../../src/components/Card/CardBody.react";
const  mydata = [
  {country : "China", daily : 5731496, start_date : new Date(2020,0,20),end_date : new Date(2020,2,20),Total_Saved : 0,optimum_start:new Date(2020,2,20),optimum_end:new Date()},
  {country : "India", daily : 1823594, start_date : new Date(2020,2,22),end_date : new Date(),Total_Saved : 0,optimum_start:new Date(),optimum_end:new Date()},
  {country : "USA", daily : 12898866, start_date : new Date(),end_date : new Date(),Total_Saved : 0,optimum_start:new Date(2020,2,20),optimum_end:new Date()},
  {country : "Japan", daily : 981746, start_date : new Date(),end_date : new Date(),Total_Saved : 0,optimum_start:new Date(2020,2,20),optimum_end:new Date()},
  {country : "Italy", daily : 309127/0.85, start_date : new Date(2020,2,9),end_date : new Date(),Total_Saved : 0,optimum_start:new Date(),optimum_end:new Date()},
  {country : "Spain", daily : 239046/0.85, start_date : new Date(2020,2,14),end_date : new Date(),Total_Saved : 0,optimum_start:new Date(),optimum_end:new Date()},
  {country : "France", daily : 333728/0.85, start_date : new Date(2020,2,17),end_date : new Date(),Total_Saved : 0,optimum_start:new Date(),optimum_end:new Date()},
  {country : "Germany", daily : 428368/0.85, start_date : new Date(2020,2,22),end_date : new Date(),Total_Saved : 0,optimum_start:new Date(),optimum_end:new Date()},
  {country : "UK", daily : 340751/0.85, start_date : new Date(2020,2,23),end_date : new Date(),Total_Saved : 0,optimum_start:new Date(),optimum_end:new Date()},
  {country : "Belgium", daily :59255/0.85, start_date : new Date(2020,2,18),end_date : new Date(),Total_Saved : 0,optimum_start:new Date(),optimum_end:new Date()},
  {country : "Rest OF Europe", daily : 993706/0.4, start_date : new Date(),end_date : new Date(),Total_Saved : 0,optimum_start:new Date(2020,2,22),optimum_end:new Date()}
]

var today = new Date();
var arr = ["data2"];
var v = ["data1"];
var daily_saving = 0;
var i = 0;
var da_sa = [];
function getDates()
{
  d = new Date();
  return d.getDate()+"/"+(d.getMonth()+1)+"/"+d.getFullYear();
}
var st ;
//console.log(new Date(2020,0,20))
for (var d = new Date(2020, 0, 14); d <= today; d.setDate(d.getDate() + 1)) {
  arr.push(d);
  v.push(i);
  st = 0;
  mydata.forEach(function(p) {
    var lock =0;
    var opt =0;

    if (p['end_date'].getTime() >= d.getTime() && p['start_date'].getTime()<= d.getTime())
    { lock = ((d-p['start_date'])/(1000*60*60*24))*p['daily']*0.85}
    else if (p['end_date'].getTime() < d.getTime())
    {
      lock = ((p['end_date']-p['start_date'])/(1000*60*60*24))*p['daily']*0.85
    }
    else if (p['start_date'].getTime() > d.getTime())
    {
      lock = 0
    }
    if (p['optimum_end'].getTime() >= d.getTime() && p['optimum_start'].getTime()<= d.getTime())
    { opt= ((d-p['optimum_start'])/(1000*60*60*24))*p['daily']*0.4}
    else if (p['end_date'].getTime() < d.getTime())
    {
      opt = ((p['optimum_end']-p['optimum_start'])/(1000*60*60*24))*p['daily']*0.4
    }
    else if (p['optimum_start'].getTime() > d.getTime())
    {
      opt = 0
    }
    p['Total_Saved']+=(lock+opt)
    console.log(p['country']+p['Total_Saved'])
    st += lock+opt 
    
  });
  da_sa.push(st)
  console.log("date"+d+" "+st)
  
  //console.log(d)
  //console.log(d.getTime() == new Date(2020,0,20).getTime())

  if (d.getTime() == new Date(2020, 0, 20).getTime()) {
    //china
    daily_saving += 5731496*0.85;
    //console.log("in side china")
  }
  if (d.getTime() == new Date(2020, 2, 9).getTime()) {
    // Italy
    daily_saving += 309127;
  }
  if (d.getTime() == new Date(2020, 2, 14).getTime()) {
    //spain
    daily_saving += 239046;
  }
  if (d.getTime() == new Date(2020, 2, 17).getTime()) {
    //france
    daily_saving += 333728;
  }
  if (d.getTime() == new Date(2020, 2, 22).getTime()) {
    //germany
    daily_saving += 428368;
  }
  if (d.getTime() == new Date(2020, 2, 23).getTime()) {
    //UK
    daily_saving += 340751;
  }
  if (d.getTime() == new Date(2020, 2, 18).getTime()) {
    //belgium
    daily_saving += 59255;
  }
  if (d.getTime() == new Date(2020, 2, 22).getTime()) {
    //india
    daily_saving += 1823594*0.85;
  }
  if (d.getTime() == new Date(2020, 2, 28).getTime()) {
    //USA
    //console.log("USA joins")
    daily_saving += 12898866*0.40;
  }
  if (d.getTime() == new Date(2020, 2, 20).getTime()) {
    //china leaves
    //console.log("china leaves")
    daily_saving -= 5731496*0.85;
    daily_saving += 5731496*0.40;
  }
  if (d.getTime() == new Date(2020,2,22).getTime())
  {//rest of europe 
    daily_saving += 993706;

  }
  if (d.getTime() == new Date(2020,2,20).getTime())
  {//Japan
    daily_saving += 981746*0.4;

  }
  
  i = i + daily_saving;
}
v.push(i)
{
  /*
renderTableData() {
  return data.map((student, index) => {
     const { country, daily, start_date, end_date} = cpuntry //destructuring
     return (
        <tr>
           <td>{country}</td>
           <td>{daily}</td>
           <td>{start_date}</td>
           <td>{end_date}</td>
           <td>{(end_date-start_date)*daily}</td>
        </tr>
     )
  })
}
*/
}
var estimation = 33990000000;
const style = {
  position: "absolute",
  top: 0, // computed based on child and parent's height
  right: 40,
  fontSize: 28,
  textAlign: "center",
  fontWeight: "bold",
  fontstyle: "italic",
  color : "rgb(50,0,133)"
};
const style1 = {
  fontSize: 25,
  textAlign: "centre",
  fontWeight: "bold",
  color: "rgb(50,0,133)",
  backgroundColor : 'rgba(0,0,0,0)'
};
function Home() {
  return (
    <SiteWrapper>
    <Page.Content title="Carbon Emission Savings during COVID-19">

      <Grid.Row cards={true}>
      <Grid.Col width={6} sm={6} lg={6}>
      <Card>
          <Card.Status />
            <Card.Header>
              <Card.Title>CO2 Emissions Saved</Card.Title>
            </Card.Header>
            <Card.Body>
              <Header.H1 className="mb-1">{((da_sa[da_sa.length - 1])).toLocaleString(navigator.language,{ minimumFractionDigits: 0 }) + " MT"}</Header.H1>
            </Card.Body>
        </Card>
        </Grid.Col>
        <Grid.Col width={6} sm={6} lg={6}>
        <Card>
          <Card.Status />
            <Card.Header>
              <Card.Title>Estimated CO2 emission for the year 2020</Card.Title>
            </Card.Header>
            <Card.Body>
              <Header.H1 className="mb-1">{estimation.toLocaleString(navigator.language,{ minimumFractionDigits: 0 })+" MT"}</Header.H1>
            </Card.Body>
        </Card>
        </Grid.Col>
        <Grid.Col width={6} sm={6} lg={6}>
        <Card>
      <Card.Status />
      <Card.Header>
        <Card.Title>Data Updated On</Card.Title>
      </Card.Header>
      <Card.Body>
      <Header.H1 className="mb-1">{getDates()}</Header.H1>
      </Card.Body>
    </Card>

        </Grid.Col>
        
        <Grid.Col width={6} sm={6} lg={6}>
        <Card>
          <Card.Status />
            <Card.Header>
              <Card.Title>Percentage of Total Estimate Saved</Card.Title>
            </Card.Header>
            <Card.Body>
              <Header.H1 className="mb-1">{(da_sa[da_sa.length - 1]*100/estimation).toFixed(2) + " %"}</Header.H1>
            </Card.Body>
        </Card>
          
        </Grid.Col>
        {/*<Grid.Col width={6} sm={4} lg={2}>
            <StatsCard layout={1} movement={-1} total="621" label="Products" />
  </Grid.Col>*/}
        </Grid.Row>
        <Grid.Row>
            

            <Grid.Col lg={12}>
              <Card title="CO2 Emission Savings" body={<ReactSimpleMap />} />
            </Grid.Col>
          </Grid.Row>
        <Grid.Row>
        <Grid.Col lg={12}>
          <Card>
            <Card.Header>
              <Card.Title>Development Activity</Card.Title>
            </Card.Header>
            <C3Chart
              style={{ height: "10rem" }}
              data={{
                columns: [v],
                type: "area", // default type of chart
                groups: [["data1", "data2", "data3"]],
                colors: {
                  data1: colors["green"],
                },
                names: {
                  // name of each serie
                  data1: "CO2 savings",
                },
                axes: { data1: "y2", data2: "x1" },
              }}
              axis={{
                y: {
                  show: true,
                },
                x: {
                  tick: { format: "%d/%m" },
                  padding: {
                    left: 0,
                    right: 0,
                  },
                  show: true,
                },
              }}
              legend={{
                position: "inset",
                padding: 0,
                inset: {
                  anchor: "top-left",
                  x: 20,
                  y: 8,
                  step: 10,
                },
              }}
              tooltip={{
                format: {
                  title: function(x) {
                    return "";
                  },
                },
              }}
              padding={{
                bottom: 0,
                left: -1,
                right: -1,
              }}
              point={{
                show: false,
              }}
            />

            {table()}
            </Card>
        </Grid.Col>

        {/*
          <Grid.Col md={6}>
          
            <Alert type="primary">
              <Alert.Link
                href={
                  process.env.NODE_ENV === "production"
                    ? "https://tabler.github.io/tabler-react/documentation"
                    : "/documentation"
                }
              >
                Read our documentation
              </Alert.Link>{" "}
              with code samples.
              </Alert>*/}
        {/*<Grid.Row>
              <Grid.Col sm={6}>
                <Card>
                  <Card.Header>
                    <Card.Title>Chart title</Card.Title>
                  </Card.Header>
                  <Card.Body>
                    <C3Chart
                      style={{ height: "12rem" }}
                      data={{
                        columns: [
                          // each columns data
                          ["data1", 63],
                          ["data2", 37],
                        ],
                        type: "donut", // default type of chart
                        colors: {
                          data1: colors["green"],
                          data2: colors["green-light"],
                        },
                        names: {
                          // name of each serie
                          data1: "Maximum",
                          data2: "Minimum",
                        },
                      }}
                      legend={{
                        show: false, //hide legend
                      }}
                      padding={{
                        bottom: 0,
                        top: 0,
                      }}
                    />
                  </Card.Body>
                </Card>
              </Grid.Col>
              <Grid.Col sm={6}>
                <Card>
                  <Card.Header>
                    <Card.Title>Chart title</Card.Title>
                  </Card.Header>
                  <Card.Body>
                    <C3Chart
                      style={{ height: "12rem" }}
                      data={{
                        columns: [
                          // each columns data
                          ["data1", 63],
                          ["data2", 44],
                          ["data3", 12],
                          ["data4", 14],
                        ],
                        type: "pie", // default type of chart
                        colors: {
                          data1: colors["blue-darker"],
                          data2: colors["blue"],
                          data3: colors["blue-light"],
                          data4: colors["blue-lighter"],
                        },
                        names: {
                          // name of each serie
                          data1: "A",
                          data2: "B",
                          data3: "C",
                          data4: "D",
                        },
                      }}
                      legend={{
                        show: false, //hide legend
                      }}
                      padding={{
                        bottom: 0,
                        top: 0,
                      }}
                    />
                  </Card.Body>
                </Card>
              </Grid.Col>
              <Grid.Col sm={6}>
                <ProgressCard
                  header="New feedback"
                  content="62"
                  progressColor="red"
                  progressWidth={28}
                />
              </Grid.Col>
              <Grid.Col sm={6}>
                <ProgressCard
                  header="Today profit"
                  content="$652"
                  progressColor="green"
                  progressWidth={84}
                />
              </Grid.Col>
              <Grid.Col sm={6}>
                <ProgressCard
                  header="Users online"
                  content="76"
                  progressColor="yellow"
                  progressWidth={34}
                />
              </Grid.Col>
                    </Grid.Row> 
          </Grid.Col>
          
          <Grid.Col sm={6} lg={3}>
            <StampCard
              color="blue"
              icon="dollar-sign"
              header={
                <a href="#">
                  132 <small>Sales</small>
                </a>
              }
              footer={"12 waiting payments"}
            />
            </Grid.Col>
          <Grid.Col sm={6} lg={3}>
            <StampCard
              color="green"
              icon="shopping-cart"
              header={
                <a href="#">
                  78 <small>Orders</small>
                </a>
              }
              footer={"32 shipped"}
            />
            </Grid.Col>
          <Grid.Col sm={6} lg={3}>
            <StampCard
              color="red"
              icon="users"
              header={
                <a href="#">
                  1,352 <small>Members</small>
                </a>
              }
              footer={"163 registered today"}
            />
            </Grid.Col>
          <Grid.Col sm={6} lg={3}>
            <StampCard
              color="yellow"
              icon="message-square"
              header={
                <a href="#">
                  132 <small>Comments</small>
                </a>
              }
              footer={"16 waiting"}
            />
            </Grid.Col>*/}
      </Grid.Row>
      {/*
        <Grid.Row cards deck>
          <Grid.Col width={12}>
            <Card>
              <Table
                responsive
                highlightRowOnHover
                hasOutline
                verticalAlign="center"
                cards
                className="text-nowrap"
              >
                <Table.Header>
                  <Table.Row>
                    <Table.ColHeader alignContent="center" className="w-1">
                      <i className="icon-people" />
                    </Table.ColHeader>
                    <Table.ColHeader>User</Table.ColHeader>
                    <Table.ColHeader>Usage</Table.ColHeader>
                    <Table.ColHeader alignContent="center">
                      Payment
                    </Table.ColHeader>
                    <Table.ColHeader>Activity</Table.ColHeader>
                    <Table.ColHeader alignContent="center">
                      Satisfaction
                    </Table.ColHeader>
                    <Table.ColHeader alignContent="center">
                      <i className="icon-settings" />
                    </Table.ColHeader>
                  </Table.Row>
                </Table.Header>
                <Table.Body>
                  <Table.Row>
                    <Table.Col alignContent="center">
                      <Avatar
                        imageURL="demo/faces/female/26.jpg"
                        className="d-block"
                        status="green"
                      />
                    </Table.Col>
                    <Table.Col>
                      <div>Elizabeth Martin</div>
                      <Text size="sm" muted>
                        Registered: Mar 19, 2018
                      </Text>
                    </Table.Col>
                    <Table.Col>
                      <div className="clearfix">
                        <div className="float-left">
                          <strong>42%</strong>
                        </div>
                        <div className="float-right">
                          <Text.Small muted>
                            Jun 11, 2015 - Jul 10, 2015
                          </Text.Small>
                        </div>
                      </div>
                      <Progress size="xs">
                        <Progress.Bar color="yellow" width={42} />
                      </Progress>
                    </Table.Col>
                    <Table.Col alignContent="center">
                      <Icon payment name="visa" />
                    </Table.Col>
                    <Table.Col>
                      <Text size="sm" muted>
                        Last login
                      </Text>
                      <div>4 minutes ago</div>
                    </Table.Col>
                    <Table.Col alignContent="center">42%</Table.Col>
                    <Table.Col alignContent="center">
                      <Dropdown
                        trigger={
                          <Dropdown.Trigger
                            icon="more-vertical"
                            toggle={false}
                          />
                        }
                        position="right"
                        items={
                          <React.Fragment>
                            <Dropdown.Item icon="tag">Action </Dropdown.Item>
                            <Dropdown.Item icon="edit-2">
                              Another action{" "}
                            </Dropdown.Item>
                            <Dropdown.Item icon="message-square">
                              Something else here
                            </Dropdown.Item>
                            <Dropdown.ItemDivider />
                            <Dropdown.Item icon="link">
                              {" "}
                              Separated link
                            </Dropdown.Item>
                          </React.Fragment>
                        }
                      />
                    </Table.Col>
                  </Table.Row>
                </Table.Body>
              </Table>
            </Card>
          </Grid.Col>
        </Grid.Row>
                      */}
      {/*
        <Grid.Row>
          <Grid.Col sm={6} lg={4}>
            <Card title="Browser Stats">
              <Table className="card-table">
                <Table.Row>
                  <Table.Col>
                    <Icon prefix="fa" name="chrome" className="text-muted" />
                  </Table.Col>
                  <Table.Col>Google Chrome</Table.Col>
                  <Table.Col className="text-right">
                    <Text RootComponent="span" muted>
                      23%
                    </Text>
                  </Table.Col>
                </Table.Row>
              </Table>
            </Card>
          </Grid.Col>
          <Grid.Col sm={6} lg={4}>
            <Card title="Projects">
              <Table cards>
                <Table.Row>
                  <Table.Col>Admin Template</Table.Col>
                  <Table.Col alignContent="right">
                    <Badge color="default">65%</Badge>
                  </Table.Col>
                </Table.Row>
              </Table>
            </Card>
          </Grid.Col>
          <Grid.Col md={6} lg={4}>
            <Card title="Members">
              <Card.Body>
                <ul className="list-unstyled list-separated">
                  <li className="list-separated-item">
                    <Grid.Row className="align-items-center">
                      <Grid.Col auto>
                        <Avatar
                          size="md"
                          className="d-block"
                          imageURL="demo/faces/female/12.jpg"
                        />
                      </Grid.Col>
                      <Grid.Col>
                        <div>
                          <a className="text-inherit" href="#">
                            Amanda Hunt
                          </a>
                        </div>
                        <Text.Small muted className="d-block item-except h-1x">
                          amanda_hunt@example.com
                        </Text.Small>
                      </Grid.Col>
                      <Grid.Col auto>
                        <Dropdown
                          trigger={
                            <Dropdown.Trigger
                              icon="more-vertical"
                              toggle={false}
                            />
                          }
                          position="right"
                          items={
                            <React.Fragment>
                              <Dropdown.Item icon="tag">Action </Dropdown.Item>
                              <Dropdown.Item icon="edit-2">
                                {" "}
                                Another action{" "}
                              </Dropdown.Item>
                              <Dropdown.Item icon="message-square">
                                {" "}
                                Something else here
                              </Dropdown.Item>
                              <Dropdown.ItemDivider />
                              <Dropdown.Item icon="link">
                                {" "}
                                Separated link
                              </Dropdown.Item>
                            </React.Fragment>
                          }
                        />
                      </Grid.Col>
                    </Grid.Row>
                  </li>
                </ul>
              </Card.Body>
            </Card>
          </Grid.Col>
          <Grid.Col md={6} lg={12}>
            <Grid.Row>
              <Grid.Col sm={6} lg={3}>
                <StatsCard
                  layout={2}
                  movement={5}
                  total="423"
                  label="Users online"
                  chart={
                    <C3Chart
                      style={{ height: "100%" }}
                      padding={{
                        bottom: -10,
                        left: -1,
                        right: -1,
                      }}
                      data={{
                        names: {
                          data1: "Users online",
                        },
                        columns: [["data1", 30, 40, 10, 40, 12, 22, 40]],
                        type: "area",
                      }}
                      legend={{
                        show: false,
                      }}
                      transition={{
                        duration: 0,
                      }}
                      point={{
                        show: false,
                      }}
                      tooltip={{
                        format: {
                          title: function(x) {
                            return "";
                          },
                        },
                      }}
                      axis={{
                        y: {
                          padding: {
                            bottom: 0,
                          },
                          show: false,
                          tick: {
                            outer: false,
                          },
                        },
                        x: {
                          padding: {
                            left: 0,
                            right: 0,
                          },
                          show: false,
                        },
                      }}
                      color={{
                        pattern: ["#467fcf"],
                      }}
                    />
                  }
                />
              </Grid.Col>
              <Grid.Col sm={6} lg={3}>
                <StatsCard
                  layout={2}
                  movement={-3}
                  total="423"
                  label="Users online"
                  chart={
                    <C3Chart
                      style={{ height: "100%" }}
                      padding={{
                        bottom: -10,
                        left: -1,
                        right: -1,
                      }}
                      data={{
                        names: {
                          data1: "Users online",
                        },
                        columns: [["data1", 30, 40, 10, 40, 12, 22, 40]],
                        type: "area",
                      }}
                      legend={{
                        show: false,
                      }}
                      transition={{
                        duration: 0,
                      }}
                      point={{
                        show: false,
                      }}
                      tooltip={{
                        format: {
                          title: function(x) {
                            return "";
                          },
                        },
                      }}
                      axis={{
                        y: {
                          padding: {
                            bottom: 0,
                          },
                          show: false,
                          tick: {
                            outer: false,
                          },
                        },
                        x: {
                          padding: {
                            left: 0,
                            right: 0,
                          },
                          show: false,
                        },
                      }}
                      color={{
                        pattern: ["#e74c3c"],
                      }}
                    />
                  }
                />
              </Grid.Col>
              <Grid.Col sm={6} lg={3}>
                <StatsCard
                  layout={2}
                  movement={-3}
                  total="423"
                  label="Users online"
                  chart={
                    <C3Chart
                      style={{ height: "100%" }}
                      padding={{
                        bottom: -10,
                        left: -1,
                        right: -1,
                      }}
                      data={{
                        names: {
                          data1: "Users online",
                        },
                        columns: [["data1", 30, 40, 10, 40, 12, 22, 40]],
                        type: "area",
                      }}
                      legend={{
                        show: false,
                      }}
                      transition={{
                        duration: 0,
                      }}
                      point={{
                        show: false,
                      }}
                      tooltip={{
                        format: {
                          title: function(x) {
                            return "";
                          },
                        },
                      }}
                      axis={{
                        y: {
                          padding: {
                            bottom: 0,
                          },
                          show: false,
                          tick: {
                            outer: false,
                          },
                        },
                        x: {
                          padding: {
                            left: 0,
                            right: 0,
                          },
                          show: false,
                        },
                      }}
                      color={{
                        pattern: ["#5eba00"],
                      }}
                    />
                  }
                />
              </Grid.Col>
              <Grid.Col sm={6} lg={3}>
                <StatsCard
                  layout={2}
                  movement={9}
                  total="423"
                  label="Users online"
                  chart={
                    <C3Chart
                      style={{ height: "100%" }}
                      padding={{
                        bottom: -10,
                        left: -1,
                        right: -1,
                      }}
                      data={{
                        names: {
                          data1: "Users online",
                        },
                        columns: [["data1", 30, 40, 10, 40, 12, 22, 40]],
                        type: "area",
                      }}
                      legend={{
                        show: false,
                      }}
                      transition={{
                        duration: 0,
                      }}
                      point={{
                        show: false,
                      }}
                      tooltip={{
                        format: {
                          title: function(x) {
                            return "";
                          },
                        },
                      }}
                      axis={{
                        y: {
                          padding: {
                            bottom: 0,
                          },
                          show: false,
                          tick: {
                            outer: false,
                          },
                        },
                        x: {
                          padding: {
                            left: 0,
                            right: 0,
                          },
                          show: false,
                        },
                      }}
                      color={{
                        pattern: ["#f1c40f"],
                      }}
                    />
                  }
                />
              </Grid.Col>
            </Grid.Row>
          </Grid.Col>
          <Grid.Col width={12}>
            <Card title="Invoices">
              <Table
                responsive
                className="card-table table-vcenter text-nowrap"
                headerItems={[
                  { content: "No.", className: "w-1" },
                  { content: "Invoice Subject" },
                  { content: "Client" },
                  { content: "VAT No." },
                  { content: "Created" },
                  { content: "Status" },
                  { content: "Price" },
                  { content: null },
                  { content: null },
                ]}
                bodyItems={[
                  {
                    key: "1",
                    item: [
                      {
                        content: (
                          <Text RootComponent="span" muted>
                            001401
                          </Text>
                        ),
                      },
                      {
                        content: (
                          <a href="invoice.html" className="text-inherit">
                            Design Works
                          </a>
                        ),
                      },
                      { content: "Carlson Limited" },
                      { content: "87956621" },
                      { content: "15 Dec 2017" },
                      {
                        content: (
                          <React.Fragment>
                            <span className="status-icon bg-success" /> Paid
                          </React.Fragment>
                        ),
                      },
                      { content: "$887" },
                      {
                        alignContent: "right",
                        content: (
                          <React.Fragment>
                            <Button size="sm" color="secondary">
                              Manage
                            </Button>
                            <div className="dropdown">
                              <Button
                                color="secondary"
                                size="sm"
                                isDropdownToggle
                              >
                                Actions
                              </Button>
                            </div>
                          </React.Fragment>
                        ),
                      },
                      { content: <Icon link name="edit" /> },
                    ],
                  },
                ]}
              />
            </Card>
          </Grid.Col>
        </Grid.Row>
              */}
    </Page.Content>
  </SiteWrapper>
  );
}

export default Home;
