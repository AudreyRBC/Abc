import { SplitText } from "../gsap/SplitText";
import {getRandomIntInclusive} from '../Helpers/utils'
export function Links(){
    const colors = [
        "yellow",
        "blue",
        "red",
        "mediumblue",
        "purple",
        "pink",
    ]
   this.links =  new SplitText(".link", {type:"chars"})
   this.links.chars.forEach( char => {
       const random = getRandomIntInclusive(0, colors.length - 1)
       char.classList.add(colors[random])
   })
}

document.addEventListener('DOMContentLoaded', () => new Links() )