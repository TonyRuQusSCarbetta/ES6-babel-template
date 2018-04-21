class User{
  register(){
    console.log('User Registered');
  }
}

const addH1Function = () => {
  let addH1 = document.createElement('h1');
  addH1.textContent = 'This h1 Element was Created with ES6 JavaScript!';
  document.body.appendChild(addH1);
}
addH1Function();
