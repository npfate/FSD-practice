// import ''
import picture from './1.png';
import './style.css';

function component() {
  const element = document.createElement('div');
  const myPicture = new Image();
  myPicture.src = picture;
  element.appendChild(myPicture);
  return element;
}

document.body.appendChild(component());