const h1 = document.querySelector("#h1");
const h2 = document.querySelector("#h2");

const form = document.querySelector("#form");
const input1 = document.querySelector("#calculo1");
const input2 = document.querySelector("#calculo2");
const btn = document.querySelector("#btnCalcular");
const pResult = document.querySelector("#result");

//==Escuchando el formulairio y el evento submit==//
// form.addEventListener("submit", btnOnClick);

// function btnOnClick(e) {
  //   e.preventDefault()
  //   const sumaInputs = input1.value + input2.value;
  //   pResult.innerText = "Resultado: " + sumaInputs;
  //   console.log(sumaInputs);
  // }
  
  //==Escuchando directamente el botton || Dentro del formulairio==//
  btn.addEventListener("click", btnOnClick);
  
  function btnOnClick(e.target.value) {
    const sumaInputs = input1.value + input2.value;
    pResult.innerText = "Resultado: " + sumaInputs;
    h2.innerText = "Sucessfull";
    console.log({ sumaInputs });
}  
