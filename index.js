document.addEventListener("DOMContentLoaded", function() 
{
    const rInput = document.getElementById("rInput");
    const gInput = document.getElementById("gInput");
    const bInput = document.getElementById("bInput");
    
    const preciseness = document.getElementById("preciseness");

    const rOutput = document.getElementById("rOutput");
    const gOutput = document.getElementById("gOutput");
    const bOutput = document.getElementById("bOutput");

    function updateFromRGB() 
    {
        let rValue = parseInt(rInput.value) || 0;
        let gValue = parseInt(gInput.value) || 0;
        let bValue = parseInt(bInput.value) || 0;

        if (rValue > 255) rValue = 255;
        if (gValue > 255) gValue = 255;
        if (bValue > 255) bValue = 255;
        
        rOutput.value = (rValue / 255).toFixed(preciseness.value);
        gOutput.value = (gValue / 255).toFixed(preciseness.value);
        bOutput.value = (bValue / 255).toFixed(preciseness.value);
    }

    function updateFromNormalized() 
    {
        let rValue = parseFloat(rOutput.value) || 0;
        let gValue = parseFloat(gOutput.value) || 0;
        let bValue = parseFloat(bOutput.value) || 0;

        if (rValue > 1) rValue = 1;
        if (gValue > 1) gValue = 1;
        if (bValue > 1) bValue = 1;

        rInput.value = Math.round(rValue * 255);
        gInput.value = Math.round(gValue * 255);
        bInput.value = Math.round(bValue * 255);
    }

    rInput.addEventListener("input", updateFromRGB);
    gInput.addEventListener("input", updateFromRGB);
    bInput.addEventListener("input", updateFromRGB);

    preciseness.addEventListener("input", updateFromRGB);

    rOutput.addEventListener("input", updateFromNormalized);
    gOutput.addEventListener("input", updateFromNormalized);
    bOutput.addEventListener("input", updateFromNormalized);
});
