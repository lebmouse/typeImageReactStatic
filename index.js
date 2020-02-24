const foo = 50;
const bar = 100;

// function h(elem)

function Button() {
  const button = document.createElement("button");
  button.innerText = `${foo + bar}`;
  return button;
}

const Button2 = () => {
  const button = document.createElement("button");
  button.innerText = `${foo2() + bar2()}`;
  return button;
};

const foo2 = () => 24;
const bar2 = () => 34;

document.getElementById("app").appendChild(Button());
document.getElementById("app").appendChild(Button2());
