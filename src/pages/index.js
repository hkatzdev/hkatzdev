import React from 'react';

const NAME = "@hkatzdev"
const OUTSIDE_SITES = [
  ["https://github.com/hkatzdev", "Github"],
  ["https://www.linkedin.com/in/hkatzdev/", "LinkedIn"],
  ["https://repl.it/@CodeK1", "Repl.it"],
  ["https://www.agourahackclub.com/", "Agoura HC"],
  ["https://hackclub.com/community", "Slack"],
];
const PROJECTS = [
  ["Founder of Agoura Hack Club & Honors Society", "Founder and Leader of Agoura Hack Club since Freshman year."],
  ["Organizer of Two Local Hack Days", "Organized 2 Local Hack Days in Agoura - Latest one was hosted at Hub101."],
  ["Retro Game Design Winner", "Won Best Retro Game Design @ Angel Hacks @ Snapchat."],
  ["LVUSD Tech Squad Member", "Fixed computers with both software and hardware issues for Las Virgenes Unified School District from 2014-2017."],
  ["Leading inititive for APCSP classes to publish projects", "A large portion of the nation uses code.org Applab to teach APCSP; what if there was a simple program to publish them to the App Store?"],
  ["Officer of Math Honors Society", "Officer of Agoura High School's Honors Math Society from 2018-19."],
  ["Co-Founder of The Umpire Project", "What if every school had a program that allow students to have hands on experience fixing computers? Currently at the MVP stage."],
  ["Track and Cross Country", "Mid to Long Distance Running is my thing, along with the occational Long Jump event. 17 minute 3 Mile XC PR, 55.82 second 400M T&F PR."],
]
const ABOUT_ME = <>Hello! I am the real <del>robot</del> <ins>Homo Sapien</ins> Harrison Katz. As you may know, I love both programming and running. I have worked on many assorted projects and been apart of various tech groups. I am extreamly active in the Hack Club Community Slack, and you can also reach me at <a href="mailto:harrison@hkatz.dev" className="hover:underline">harrison@hkatz.dev</a>.</>
const LICENSE = ["http://creativecommons.org/licenses/by-sa/4.0/", "Copyleft 2020 under CC 4.0 BY-SA"]

class AnimatedBackground extends React.Component {
  componentDidMount() {
    const canvas = document.getElementById("matrix");
    const context = canvas.getContext("2d");
    const remSize = parseFloat(getComputedStyle(document.querySelector('html'))['font-size']);
    let width = window.innerWidth;
    let height = window.innerHeight-remSize;
    let resizeTimer;
    canvas.width = width;
    canvas.height = height;
    const col = Array.apply(null, Array(Math.floor(width / remSize))).map(function() { return Math.floor(Math.random() *  remSize*50) - remSize*50 });
    let space = width % remSize;
    context.font = "1rem monospace";
    context.textBaseline = "top"
    requestAnimationFrame(draw);
    function draw() {
      context.fillStyle = "rgba(0,0,0,0.04)";
      context.fillRect(0,0,width,height);
      context.fillStyle = "#33FF33";
      for (let i = 0; i < col.length; ++i) {
        const letter = String.fromCharCode(Math.floor(Math.random() * 94) + 33);
        context.fillText(letter, space/2+16*i, col[i]);
        col[i] += remSize/(2);
        if (col[i] > height) {
          col[i] = Math.floor(Math.random() *  remSize*40) - remSize*40;
        }
      }
      requestAnimationFrame(draw);
    }
    function resize() {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(function() {
        const img = new Image();
        img.onload = function(){
          width = window.innerWidth;
          height = window.innerHeight-remSize;
          canvas.width = width;
          canvas.height = height;
          context.drawImage(img,0,0);
          let numCols = Math.floor(width / remSize) - col.length;
          if (numCols <= 0) {
            col.splice(numCols, Math.abs(numCols));
          } else {
            const newCols = Array.apply(null, Array(numCols)).map(function() { return Math.floor(Math.random() *  remSize*50) - remSize*50 });
            col.splice(-1, 0, ...newCols);
          }
        };
        img.src = canvas.toDataURL();
      }, 100);
    }
    window.addEventListener("resize", resize);
  }
  render() {
    return <canvas id="matrix" className="absolute z-10"></canvas>
  }
}

function App() {
  return (
    <React.StrictMode>
      <div className="z-20 relative">
        <Nav />
        <div className="bg-black terminal-green z-0 relative">
          <AnimatedBackground />
          <div className="z-20 relative px-4">
            <Header />
            <WorkSection />
            <SectionBox title="About Me" text={ABOUT_ME} />
          </div>
        </div>
        <Footer />
      </div>
    </React.StrictMode>
  );
}

function Header() {
  return (
    <header className="block font-mono text-center fullMinusNav mt-4">
      <div className="centered">
        <h1 className="font-black text-6xl">HARRISON KATZ</h1>
        <h2 className="font-semibold text-4xl">Programmer, Hardware Builder, Track Runner</h2>
        <h3 className="font-semibold text-3xl">"Oooh, look at me, I looked up a quote!" -Randall Munroe</h3>
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer className="text-center bg-black terminal-green px-1">
      <OutsideSites justify="around"/>
      <a rel="license" className="hover:underline" href={LICENSE[0]}>{LICENSE[1]}</a>.
    </footer>
  );
}

function OutsideSites(props) {
  const links = OUTSIDE_SITES.map((sites) =>
    <li key={sites[1]} className="mx-1 flex-1 border-2 border-green-300 rounded"><a href={sites[0]} className="hover:underline">{sites[1]}</a></li>
  );
  return (<ul className={"flex text-center justify-" + props.justify + (props.ulClass ? " " + props.ulClass : "")}>
      {links}
    </ul>);
}

function Nav() {
  return (
    <nav className="bg-black terminal-green fixed inset-x-0 top-0 z-30 justify-between px-1 leading-none ">
      <div className="flex">
        <h1 className="flex-auto hidden sm:block">{NAME}</h1>
        <OutsideSites ulClass="flex-auto" justify="end"/>
      </div>
    </nav>
  );
}

function WorkSection() {
  const sections = PROJECTS.map((project) =>
    <SectionBox key={project[0]} title={project[0]} text={project[1]} />
  );
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
      {sections}
    </div>
  );
}

function SectionBox(props) {
  return (
    <section className="border-solid border-t-2 border-green-300 rounded terminal box-border px-1 py-4 mt-8">
      <h1 className="text-2xl font-medium font-mono">{"> " + props.title}</h1>
      <p>{props.text}</p>
    </section>
  );
}

export default App;
