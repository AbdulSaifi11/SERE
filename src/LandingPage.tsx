import 'bootstrap/dist/css/bootstrap.min.css';
import incubator from '/src/assets/egg_incubator_machine.svg';
import {Navbar,Nav,Button,Container,Image,Card,Col,Row} from 'react-bootstrap';
import './LandingPage.css'
import {useState,useRef} from 'react';
import {RiArrowRightLongLine,RiMapPinLine,RiDice1Line,RiDice2Line,RiDice3Line,RiMailLine,RiPhoneLine} from  '@remixicon/react';
export default function Landingpage(){
    const [btn_color,setColor]=useState("light");
    const [solveBtn_color,setSolveColor]=useState("");
    let ChangeColor = () => {
        setColor("light");
    }
    const ProblemRef = useRef<HTMLDivElement >(null);
    const goToAbout = () => {
    ProblemRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  const FeaturesRef = useRef<HTMLDivElement >(null);
    const Feature = () => {
    FeaturesRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  const clickSolveButton=()=>{
    return(
        setSolveColor("")
    )
  }
    return(
        <>
        <div className="contain">
           <Navbar className=" nav position-fixed w-100" variant='light' expand='lg'>
            <Navbar.Brand className="ms-5 fw-bold font-monospace">Sere Innovations</Navbar.Brand>
            <Navbar.Toggle  aria-controls="basic-navbar-nav"/>
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav style={{width:"30vw",position:"relative",left:"30vw",display:"flex",justifyContent:"space-evenly"}}>
                    <Nav.Link onClick={goToAbout} className="NavLink">The Problem</Nav.Link>
                    <Nav.Link onClick={Feature} className="NavLink">Features</Nav.Link>
                    <Nav.Link className="NavLink">Who It's for</Nav.Link>
                </Nav>
            </Navbar.Collapse>
            <Button className="btn d-none d-lg-block" variant={btn_color} onClick={()=>{ChangeColor(); clickSolveButton()}}><span style={{fontSize:"0.8rem",color:"lightgray"}}>Enquire Now</span></Button>
           </Navbar>
           <section  className="heroSection">
                <Container fluid>
                    <span id="heroTitle">Smart Agri-Tech · Made for Farmers</span>
                    <div className="sloganContainer"><div className="slogan">Helping farmers <br /><span> hatch their own </span></div>
                    <div className="slogan2">future.</div></div>
                    <div id="heroSummary">A simple, affordable smart incubator that gives small poultry  farmers  <br />the independence to hatch their own  eggs — without depending on <br /> anyone else.</div>
                    <Button id="requestButton">Request a Demo <RiArrowRightLongLine /></Button>
                    <Button  variant={solveBtn_color}  onClick={goToAbout}>See the Problem We Solve <RiArrowRightLongLine /></Button>
                    <Image id="incubator" src={incubator} alt="incubator for eggs"/>
                </Container>
           </section>
           <section className="problemSection" ref={ProblemRef}>
            <Container fluid>
                <div className="w-50">
                <p id="challange">-THE CHALLENGE</p><br/>
                <h1 id="ProblemHead">Small farmers are stuck in a cycle of dependence</h1><br />
                <p id="problemSummury">Millions of small poultry farmers across India produce eggs — but remain completely dependent on external hatcheries to get chicks. This one gap drains money, time, and control away from the farmer.</p>
                </div>
                <div className=" cardsForProblem w-50 d-flex gap-4 position-absolute end-0">
                    <div className="d-flex gap-4 flex-column">
                    <Card className="problemCard">
                        <Card.Header>
                        <p className="headerProblemCard">💸 High Cost</p>
                        </Card.Header>
                        <Card.Body className="cardBody">
                            <p>Buying chicks from hatcheries repeatedly adds up to a major recurring expense.</p>
                        </Card.Body>
                    </Card>
                    <Card className="problemCard">
                        <Card.Header>
                        <p className="headerProblemCard">⏳ Delays & Waiting</p>
                        </Card.Header>
                        <Card.Body className="cardBody">
                            <p>Farmers must wait on hatchery schedules, disrupting their own hatching cycles.</p>
                        </Card.Body>
                    </Card></div>
                    <div className="d-flex gap-4 flex-column"><Card className="problemCard">
                        <Card.Header>
                        <p className="headerProblemCard">🔗 Loss of Control</p>
                        </Card.Header>
                         <Card.Body className="cardBody" >
                            <p>Dependency on third parties means no say over quality, timing, or batch size.</p>
                        </Card.Body>
                    </Card>
                    <Card className="problemCard">
                        <Card.Header>
                        <p className="headerProblemCard">📉 Limited Growth</p>
                        </Card.Header>
                         <Card.Body className="cardBody">
                            <p>Without independence at the hatch level, income and scale remain capped.</p>
                        </Card.Body>
                    </Card></div>
                </div>
            </Container>
           </section>
           <section className="solutionSection d-flex   ">
                <div className="w-50">
                    <div className=" solutionQuete">
                        <h6>"We built this for the farmer who already knows how to work hard — and just needed the right tool to work smarter."</h6>
                        <p>-SERE INNOVATIONS TEAM</p>
                    </div>
                </div>
                <div className="w-50 solutionSteps">
                    <p>-OUR SOLUTION</p>
                    <h2>A smart incubator built for <br /> <span>real farms</span></h2>
                    <div>
                        <h6 id="point"><RiDice1Line className="text-warning" />   Hatch your own eggs, on your terms</h6>
                        <p>No more waiting on hatcheries. Set up your Sere incubator and take full control of your chick production cycle.</p>
                        <h6 id="point"><RiDice2Line className="text-warning"/>  Automatic environment management</h6>
                        <p>Temperature, humidity, and egg turning all handled automatically. No technical knowledge required.</p>
                        <h6 id="point"><RiDice3Line className="text-warning" />   Designed around farmer reality</h6>
                        <p>Built from real field needs — simple to operate, reliable to run, and priced to be actually accessible.</p>
                    </div>
                </div>
           </section>
           <section className="featuresSection" ref={FeaturesRef}>
                <p>-WHAT'S INSIDE</p>
                <h6>Everything you need,<span>nothing you don't</span></h6>
                <Row >
                    <Col lg={4} md={4} sm={4}><Card className="featuresCard">
                        <p className="featuresCardHead">🌡️Temperature Control</p>
                        <p className="featuresCardBody">Maintains the precise temperature eggs need throughout the hatching cycle — automatically, without manual intervention.</p>
                        </Card></Col>
                    <Col lg={4} md={4} sm={4}><Card className="featuresCard">
                        <p className="featuresCardHead">💧Humidity Control</p>
                        <p className="featuresCardBody">Keeps the right moisture levels to ensure healthy development from egg to chick.</p>
                        </Card></Col>
                    <Col lg={4} md={4} sm={4}><Card className="featuresCard">
                        <p className="featuresCardHead">🔄Automatic Egg Turning</p>
                        <p className="featuresCardBody">Turns eggs at the right intervals automatically — a critical step that was once entirely manual.</p>
                        </Card></Col>
                </Row>
                  <Row >
                    <Col lg={4} md={4} sm={4}><Card className="featuresCard">
                        <p className="featuresCardHead">👨‍🌾Farmer-Friendly Operation</p>
                        <p className="featuresCardBody">No technical background required. Simple controls, clear indicators, and an intuitive setup that anyone can manage.</p>
                        </Card></Col>
                    <Col lg={4} md={4} sm={4}><Card className="featuresCard">
                        <p className="featuresCardHead">🔦Batch Monitoring Support</p>
                        <p className="featuresCardBody">Includes basic candling/monitoring support so you can track progress and identify issues early.</p>
                        </Card></Col>
                    <Col lg={4} md={4} sm={4}><Card className="featuresCard">
                        <p className="featuresCardHead">₹Affordable Setup</p>
                        <p className="featuresCardBody">Positioned around ₹10,000 — designed to be a realistic investment, not a luxury out of reach.</p>
                        </Card></Col>
                </Row>
           </section>
           <footer>
            <div className="foot">
                <h5>Sere Innovations</h5>
                <p>Helping farmers hatch their own future</p>
                <div id="contact">
                    <p><RiMailLine />adeebsaifi7711@gmail.com</p> 
                    <p><RiPhoneLine />80XXXXXXXX</p> 
                    <p><RiMapPinLine />UP India</p>                                                                                                                                                                                    
                </div>
                <div style={{width:"100%",border:"1px  solid lightgray",position:"relative",top:"10vh"}}></div>
                <p className="copyright">© 2026 Sere Innovations. All rights reserved.</p>
            </div>
           </footer>
        </div>
        </>
         )
        }