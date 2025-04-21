export default function setClass(item) {
  if (!item || !item.author) {
    console.warn("Invalid item passed to setClass:", item);
    return 'anon'; // Default to 'anon' if item or author is missing
  }

  if (item.author === 'Laura') {
    return 'styles.laura';
  } else if (item.author === 'Shannon') {
    return 'styles.shannon';
  } else if (item.author === 'Anon') {
    return 'styles.anon';
  } else if (item.author === 'Paul') {
    return 'styles.paul';
  } else if (item.author === 'Chris') {
    return 'styles.chris';
  } else if (item.author === 'Leah') {
    return 'styles.leah';
  } else if (item.author === 'Claire') {
    return 'styles.claire';
  } else if (item.author === 'Lynne') {
    return 'styles.lynne';
  } else if (item.author === 'Mary') {
    return 'styles.mary';
  } else if (item.author === 'Julie') {
    return 'styles.julie';
  } else {
    return 'styles.anon';
  }
}