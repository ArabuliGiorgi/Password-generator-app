const length_input = document.getElementById("length-input");

function updateInputBackground(){
    const value = length_input.value;
    length_input.style.background = `linear-gradient(to right, #A4FFAF ${value * 5}%, #18171F ${value * 5}%)`;
}

length_input.addEventListener('input', updateInputBackground);