const inputEl = document.getElementById("input-el")
const convertBtn = document.getElementById("convert-btn")
const resultMF = document.getElementById("result-mf")
const resultLG = document.getElementById("result-lg")
const resultKP = document.getElementById("result-kp")

convertBtn.addEventListener('click', function() {
    let inputValue = Number(inputEl.value)
    const meterToFeet = inputValue * 3.281
    const feetToMeter = inputValue * 0.304
    const literToGallon = inputValue * 0.264
    const gallonToLiter = inputValue * 3.785
    const kgToPound = inputValue * 2.204
    const poundToKg = inputValue * 0.453
    
    resultMF.innerHTML = `${inputValue} meters = ${meterToFeet.toFixed(2)} feet | ${inputValue} feet = ${feetToMeter.toFixed(2)} meters`
    resultLG.innerHTML = `${inputValue} liters = ${literToGallon.toFixed(2)} gallons | ${inputValue} gallons = ${gallonToLiter.toFixed(2)} liters`
    resultKP.innerHTML = `${inputValue} kilogram = ${kgToPound.toFixed(2)} pounds | ${inputValue} pounds = ${poundToKg.toFixed(2)} kilograms`
})