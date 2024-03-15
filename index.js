import { authors } from './utils/authors.js';
import Header from './components/Header/Header.js';
import Card from './components/Card/Card.js';

// Voluntary todo: Create a "Button.js" component and use the component inside "Card.js" and "Header.js"

/** Authors ✅ */

/** * Cipher ✅

/** Get root element */

const root = document.querySelector('#root');

/** Header ✅ */

const headerElement = Header();

root.append(headerElement);

/** Main: Author Cards ✅ */

authors.forEach((author) => {
  const cardElement = Card(author);
  root.append(cardElement);
});
