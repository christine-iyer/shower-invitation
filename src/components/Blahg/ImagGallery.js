function getImageUrl(person) {
     return (
       "https://res.cloudinary.com/dqjhgnivi/image/upload/" +
       person.imageId +
       ".jpg"
     );
   }
   
   const people = [
     {
       id: 0,
       name: "Creola Katherine Johnson",
       profession: "mathematician",
       accomplishment: "spaceflight calculations",
       imageId: "v1698790273/ifq6zm74vytf2nkirsl0"
     },
     {
       id: 1,
       name: "Mario José Molina-Pasquel Henríquez",
       profession: "chemist",
       accomplishment: "discovery of Arctic ozone hole",
       imageId: "v1698958230/xfmtreyehfrdvs368wec"
     },
     {
       id: 2,
       name: "Mohammad Abdus Salam",
       profession: "physicist",
       accomplishment: "electromagnetism theory",
       imageId: "v1699141437/tmfucpikxtsxfwzjabyl"
     },
     {
       id: 3,
       name: "Percy Lavon Julian",
       profession: "chemist",
       accomplishment:
         "pioneering cortisone drugs, steroids and birth control pills",
       imageId: "v1699046125/n72cesmh7aqncobkke5z"
     },
     {
       id: 4,
       name: "Subrahmanyan Chandrasekhar",
       profession: "astrophysicist",
       accomplishment: "white dwarf star mass calculations",
       imageId: "v1699230124/lcjgrixswbiykblauqtx"
     }
   ];
   
   export default function List() {
     const listItems = people.map((person) => (
       <li key={person.id}>
         <img src={getImageUrl(person)} alt={person.name} />
       </li>
     ));
     return <ul>{listItems}</ul>;
   }
   