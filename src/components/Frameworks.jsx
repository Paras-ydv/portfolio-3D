import { OrbitingCircles } from "./OrbitingCircles";
// import {Icon}
export function Frameworks() {
    // const skills = [
    //         "auth0",
    //         "cplusplus",
    //         "css3",
    //         "git",
    //         "github",
    //         "html5",
    //         "javascript",
    //         "microsoft",
    //         "react",
    //         "sqlite",
    //         "tailwindcss",
    //         "vitejs",
    //         "visualstudiocode",
    //         "python", 
    //         "java",
    //         "c-original",
    //         "mysql",
    //         "express",
    //         "nodejs",
    //         "npm",
    //         "postgresql",
    //         "mongodb",
    //         "sql",
    //         "threejs",
    // ];
    const languages = [
            "C",
            "cplusplus",
            "python",
            "javascript",
            "typescript",
            "java",
            "Bash-Dark",
            "matlab",
    ];
    const dev = [
            "css3",
            "sql",
            "html5",
            "vitejs",
            "react",
            "tailwindcss",
            "ThreeJS-Dark",
            "ExpressJS-Dark",
            "nodejs",
            "npm",
            "mongodb-plain",
            "docker",
            "postgresql-plain",
            "NextJS-Dark"
    ];
    const libraries_tools = [
            "icons8-pandas",
            "numpy",
            "streamlit",
            "OpenCV-Dark",
            "TensorFlow-Dark",
            "scikitlearn",
            "matplotlib",
            "visualstudiocode",
            "git",
            "Github-Dark",
            "jupyter",
            "Vercel-Dark",
            "mysql",
            "leetcode",
            "googlecloud-logo",
            "streamlit",
            "postman",
            "notion",
            "netlify",
            "heroku"
    ];
  return (
    <div className="relative flex h-[15rem] w-full flex-col items-center justify-center overflow-hidden">
      <OrbitingCircles iconSize={37} radius={90}>
        {languages.map((lang, index) => (
            <Icons key={index} src={`assets/logos/${lang}.svg`}></Icons>
        ))}
      </OrbitingCircles>    
      <OrbitingCircles iconSize={40} radius={170} reverse speed={2}>
        {dev.reverse().map((d, index) => (
            <Icons key={index} src={`assets/logos/${d}.svg`}/>
        ))}
      </OrbitingCircles>
      <OrbitingCircles iconSize={45} radius={250} speed={3}>
        {libraries_tools.reverse().map((lib, index) => (
            <Icons key={index} src={`assets/logos/${lib}.svg`}/>
        ))}
      </OrbitingCircles>
    </div>
  );
}

const Icons = ({src}) => (
    <img src={src} alt="image" className="duration: 200 rounded-sm hover:scale-110 "/>
)