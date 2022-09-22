// https://www.omnicalculator.com/health/protein-cr-ratio

const v1 =  document.getElementById('v1');
const v2 = document.getElementById('v2');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// radio buttons
const proteincreatinineratioRadio = document.getElementById('proteincreatinineratioRadio');
const urineproteinRadio = document.getElementById('urineproteinRadio');
const urinecreatinineRadio = document.getElementById('urinecreatinineRadio');

let proteincreatinineratio;
let urineprotein = v1;
let urinecreatinine = v2;

// labels of the inpust
const variable1 = document.getElementById('variable1');
const variable2 = document.getElementById('variable2');

proteincreatinineratioRadio.addEventListener('click', function() {
  variable1.textContent = 'Urine protein';
  variable2.textContent = 'Urine creatinine';
  urineprotein = v1;
  urinecreatinine = v2;
  result.textContent = '';
});

urineproteinRadio.addEventListener('click', function() {
  variable1.textContent = 'Protein creatinine ratio';
  variable2.textContent = 'Urine creatinine';
  proteincreatinineratio = v1;
  urinecreatinine = v2;
  result.textContent = '';
});

urinecreatinineRadio.addEventListener('click', function() {
  variable1.textContent = 'Protein creatinine ratio';
  variable2.textContent = 'Urine protein';
  proteincreatinineratio = v1;
  urineprotein = v2;
  result.textContent = '';
});

btn.addEventListener('click', function() {
  
  if(proteincreatinineratioRadio.checked)
    result.textContent = `Protein creatinine ratio = ${computeproteincreatinineratio().toFixed(2)}`;

  else if(urineproteinRadio.checked)
    result.textContent = `Urine protein = ${computeurineprotein().toFixed(2)}`;

  else if(urinecreatinineRadio.checked)
    result.textContent = `Urine creatinine = ${computeurinecreatinine().toFixed(2)}`;
})

// calculation

function computeproteincreatinineratio() {
  return Number(urineprotein.value) / Number(urinecreatinine.value);
}

function computeurineprotein() {
  return Number(proteincreatinineratio.value) * Number(urinecreatinine.value);
}

function computeurinecreatinine() {
  return Number(urineprotein.value) / Number(proteincreatinineratio.value);
}