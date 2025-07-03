const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar__menu');

menu.addEventListener('click', function() {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
});

document.addEventListener("DOMContentLoaded", function() {

    var audio = document.getElementById('backgroundMusic');
        
    // Check if the audio element is found
    if (audio) {
        // Set the volume to the desired level (e.g., 0.1 for lowest volume)
        audio.volume = 1;
    } else {
        console.error('Audio element not found.');
    }

    var instructionPopup = document.getElementById("instructionPopup");
    var instructionBtn = document.querySelector(".navbar__btn .button");
    var closeBtn = document.querySelector(".close");

    if (instructionBtn && instructionPopup && closeBtn) {
        instructionBtn.addEventListener("click", function(event) {
            event.preventDefault(); 
            instructionPopup.style.display = "block";
        });
        closeBtn.addEventListener("click", function() {
            instructionPopup.style.display = "none";
        });
        window.addEventListener("click", function(event) {
            if (event.target === instructionPopup) {
                instructionPopup.style.display = "none";
            }
        });
    }
/*Dito yung scrolling ng click here*/

     /*Scroll to Convert Section*/
     var convertSection = document.getElementById("cal__convert");
     var convertButton = document.getElementById("goto__conversion");
     var convertLink = document.querySelector(".navbar__links[href='/convert.html']");
     if (convertButton && convertSection) {
         convertButton.addEventListener("click", function()
         {
             convertSection.scrollIntoView({ behavior: "smooth" });
         });
     }
     if (convertLink && convertSection) {
         convertLink.addEventListener("click", function(event) {
             event.preventDefault();
             convertSection.scrollIntoView({ behavior: "smooth" });
         });
     }
 
     /*Scroll to DBW Section */
     var wbButton = document.getElementById("goto__wb");
     var wbSection = document.getElementById("cal__wb");
     var wbLink = document.querySelector(".navbar__links[href='/weightbody.html']");
     if (wbButton && wbSection) {
         wbButton.addEventListener("click", function() 
         {
             wbSection.scrollIntoView({ behavior: "smooth" });
         });
     }
     if (wbLink && wbSection) {
         wbLink.addEventListener("click", function(event) {
              event.preventDefault();
              wbSection.scrollIntoView({ behavior: "smooth" });
         });
     }
 
     /*Scroll to TER Section */
     var terSection = document.getElementById("cal__en");
     var terButton = document.getElementById("goto__en");
     var terLink = document.querySelector(".navbar__links[href='/energynutri.html']");
 
     if (terButton && terSection) {
         terButton.addEventListener("click", function()
         {
             terSection.scrollIntoView({ behavior: "smooth" });
         });
     }
     if (terLink && terSection) {
         terLink.addEventListener("click", function(event) {
             event.preventDefault();
             terSection.scrollIntoView({ behavior: "smooth" });
         });
     }

 
    /*Dito yung formula for height convertion)*/

    var heightFTInput = document.getElementById("con-feet");
    var heightCMInput = document.getElementById("con-heightCM");
    var heightMInput = document.getElementById("con-meter");
    var heightINInput = document.getElementById("con-inch");
    var computeHeightButton = document.getElementById("compute-height");
    var resetButton = document.getElementById("compute-height-reset");
    
    if (computeHeightButton && resetButton && heightFTInput && heightCMInput && heightMInput && heightINInput) {
        computeHeightButton.addEventListener("click", function() {
            // Try to parse all fields
            var heightStr = heightFTInput.value.trim();
            var feet = NaN, inches = NaN;
            if (heightStr.includes("'")) {
                var heightParts = heightStr.split("'");
                feet = parseFloat(heightParts[0]);
                inches = parseFloat(heightParts[1]);
            } else if (heightStr.length > 0) {
                feet = parseFloat(heightStr);
                inches = 0;
            }
            var inchesTXT = parseFloat(heightINInput.value);
            var cm = parseFloat(heightCMInput.value);
            var m = parseFloat(heightMInput.value);
            // Priority: FT'IN, then IN, then CM, then M
            if (!isNaN(feet)) {
                var FTInches = feet * 12 + (isNaN(inches) ? 0 : inches);
                var cmFromFeet = FTInches * 2.54;
                var mFromFeet = cmFromFeet / 100;
                heightCMInput.value = cmFromFeet.toFixed(2);
                heightMInput.value = mFromFeet.toFixed(2);
                heightINInput.value = FTInches.toFixed(2);
            } else if (!isNaN(inchesTXT)) {
                var cmFromInch = inchesTXT * 2.54;
                var feetInches = Math.floor(inchesTXT / 12);
                var remainingInches = inchesTXT % 12;
                var mFromInch = cmFromInch / 100;
                heightFTInput.value = feetInches + "'" + remainingInches.toFixed(2);
                heightMInput.value = mFromInch.toFixed(2);
                heightCMInput.value = cmFromInch.toFixed(2);
            } else if (!isNaN(cm)) {
                var inchesFromCm = cm / 2.54;
                var feetInches = Math.floor(inchesFromCm / 12);
                var remainingInches = inchesFromCm % 12;
                var mFromCm = cm / 100;
                heightFTInput.value = feetInches + "'" + remainingInches.toFixed(2);
                heightMInput.value = mFromCm.toFixed(2);
                heightINInput.value = inchesFromCm.toFixed(2);
            } else if (!isNaN(m)) {
                var cmFromM = m * 100;
                var inchesFromCm = cmFromM / 2.54;
                var feetInches = Math.floor(inchesFromCm / 12);
                var remainingInches = inchesFromCm % 12;
                heightFTInput.value = feetInches + "'" + remainingInches.toFixed(2);
                heightCMInput.value = cmFromM.toFixed(2);
                heightINInput.value = inchesFromCm.toFixed(2);
            } else {
                alert("Please enter a value in at least one of the input fields.");
            }
        });
        resetButton.addEventListener("click", function() {
            heightFTInput.value = "";
            heightCMInput.value = "";
            heightMInput.value = "";
            heightINInput.value = "";
        });
    }

/* WEIGHT CONVERSION SECTION */

    var weightKGInput = document.getElementById("con-kg");
    var weightLBInput = document.getElementById("con-lb");
    var weightGInput = document.getElementById("con-g");
    var computeWeightButton = document.getElementById("compute-weight");
    var resetWeightButton = document.getElementById("reset-weight");

    if (computeWeightButton && resetWeightButton) {
        computeWeightButton.addEventListener("click", function() {
            var kg = parseFloat(weightKGInput.value);
            var lb = parseFloat(weightLBInput.value);
            var g = parseFloat(weightGInput.value);
            if (!isNaN(kg)) {
                var lbFromKg = kg * 2.20462;
                var gFromKg = kg * 1000;
                weightLBInput.value = lbFromKg.toFixed(2);
                weightGInput.value = gFromKg.toFixed(0);
            } else if (!isNaN(lb)) {
                var kgFromLb = lb / 2.20462;
                var gFromLb = kgFromLb * 1000;
                weightKGInput.value = kgFromLb.toFixed(2);
                weightGInput.value = gFromLb.toFixed(0);
            } else if (!isNaN(g)) {
                var kgFromG = g / 1000;
                var lbFromG = kgFromG * 2.20462;
                weightKGInput.value = kgFromG.toFixed(2);
                weightLBInput.value = lbFromG.toFixed(2);
            } else {
                alert("Please enter a value in at least one of the input fields.");
            }
        });
        resetWeightButton.addEventListener("click", function() {
            weightKGInput.value = "";
            weightLBInput.value = "";
            weightGInput.value = "";
        });
    }

/* TEASPOON CONVERTER SECTION */

        var teaspoonInput = document.getElementById("con-tsp");
        var tspTbspInput = document.getElementById("tsp-tbsp");
        var tspCupInput = document.getElementById("tsp-cup");
        var tspOzInput = document.getElementById("tsp-ounce");
        var tspMlInput = document.getElementById("tsp-ml");
        var tspLInput = document.getElementById("tsp-l");
        var computeTspButton = document.getElementById("compute-tsp");
        var resetTspButton = document.getElementById("reset-tsp");

        if (computeTspButton && resetTspButton) {
            tspTbspInput.disabled = true;
            tspCupInput.disabled = true;
            tspOzInput.disabled = true;
            tspMlInput.disabled = true;
            tspLInput.disabled = true;
            computeTspButton.addEventListener("click", function() {
                var tsp = parseFloat(teaspoonInput.value);
                if (!isNaN(tsp)) {
                    var tbspFromTsp = tsp / 3;
                    var cupFromTsp = tsp / 48;
                    var ozFromTsp = cupFromTsp * 8;
                    var mlFromTsp = tsp * 4.92892;
                    var lFromTsp = mlFromTsp / 1000;
                    tspTbspInput.value = tbspFromTsp.toFixed(2);
                    tspCupInput.value = cupFromTsp.toFixed(2);
                    tspOzInput.value = ozFromTsp.toFixed(2);
                    tspMlInput.value = mlFromTsp.toFixed(2);
                    tspLInput.value = lFromTsp.toFixed(3);
                } else {
                    alert("Please enter a value in Teaspoon field.");
                }
            });
            resetTspButton.addEventListener("click", function() {
                teaspoonInput.value = "";
                tspTbspInput.value = "";
                tspCupInput.value = "";
                tspOzInput.value = "";
                tspMlInput.value = "";
                tspLInput.value = "";
            });
        }
/* TABLESPOON CONVERTER SECTION */
        var tablespoonInput = document.getElementById("con-tbsp");
        var tbspTspInput = document.getElementById("tbsp-tsp");
        var tbspCupInput = document.getElementById("tbsp-cup");
        var tbspOzInput = document.getElementById("tbsp-ounce");
        var tbspMlInput = document.getElementById("tbsp-ml");
        var tbspLInput = document.getElementById("tbsp-l");
        var computeTbspButton = document.getElementById("compute-tbsp");
        var resetTbspButton = document.getElementById("reset-tbsp");

        if (computeTbspButton && resetTbspButton) {
            tbspTspInput.disabled = true;
            tbspCupInput.disabled = true;
            tbspOzInput.disabled = true;
            tbspMlInput.disabled = true;
            tbspLInput.disabled = true;
            computeTbspButton.addEventListener("click", function() {
                var tbsp = parseFloat(tablespoonInput.value);
                if (!isNaN(tbsp)) {
                    var tspFromTbsp = tbsp * 3;
                    var cupFromTbsp = tbsp / 16;
                    var ozFromTbsp = cupFromTbsp * 8;
                    var mlFromTbsp = tbsp * 14.7868;
                    var lFromTbsp = mlFromTbsp / 1000;
                    tbspTspInput.value = tspFromTbsp.toFixed(2);
                    tbspCupInput.value = cupFromTbsp.toFixed(2);
                    tbspOzInput.value = ozFromTbsp.toFixed(2);
                    tbspMlInput.value = mlFromTbsp.toFixed(2);
                    tbspLInput.value = lFromTbsp.toFixed(3);
                } else {
                    alert("Please enter a value in Tablespoon field.");
                }
            });
            resetTbspButton.addEventListener("click", function() {
                tablespoonInput.value = "";
                tbspTspInput.value = "";
                tbspCupInput.value = "";
                tbspOzInput.value = "";
                tbspMlInput.value = "";
                tbspLInput.value = "";
            });
        }

/* CUP CONVERTER SECTION */
        var cupInput = document.getElementById("con-cup");
        var cupTspInput = document.getElementById("cup-tsp");
        var cupTbspInput = document.getElementById("cup-tbsp");
        var cupOzInput = document.getElementById("cup-ounce");
        var cupMlInput = document.getElementById("cup-ml");
        var cupLInput = document.getElementById("cup-l");
        var cupGallonInput = document.getElementById("cup-gallon");
        var cupQuartInput = document.getElementById("cup-quart");
        var cupPintInput = document.getElementById("cup-pint");
        var computeCupButton = document.getElementById("compute-cup");
        var resetCupButton = document.getElementById("reset-cup");

        if (computeCupButton && resetCupButton) {
            cupTspInput.disabled = true;
            cupTbspInput.disabled = true;
            cupOzInput.disabled = true;
            cupMlInput.disabled = true;
            cupLInput.disabled = true;
            cupGallonInput.disabled = true;
            cupQuartInput.disabled = true;
            cupPintInput.disabled = true;
            computeCupButton.addEventListener("click", function() {
                var cup = parseFloat(cupInput.value);
                if (!isNaN(cup)) {
                    var tspFromCup = cup * 48;
                    var tbspFromCup = cup * 16;
                    var ozFromCup = cup * 8;
                    var mlFromCup = cup * 236.588;
                    var lFromCup = mlFromCup / 1000;
                    var gallonFromCup = cup / 16;
                    var quartFromCup = cup / 4;
                    var pintFromCup = cup * 2;
                    cupTspInput.value = tspFromCup.toFixed(2);
                    cupTbspInput.value = tbspFromCup.toFixed(2);
                    cupOzInput.value = ozFromCup.toFixed(2);
                    cupMlInput.value = mlFromCup.toFixed(2);
                    cupLInput.value = lFromCup.toFixed(3);
                    cupGallonInput.value = gallonFromCup.toFixed(3);
                    cupQuartInput.value = quartFromCup.toFixed(3);
                    cupPintInput.value = pintFromCup.toFixed(2);
                } else {
                    alert("Please enter a value in Cup field.");
                }
            });
            resetCupButton.addEventListener("click", function() {
                cupInput.value = "";
                cupTspInput.value = "";
                cupTbspInput.value = "";
                cupOzInput.value = "";
                cupMlInput.value = "";
                cupLInput.value = "";
                cupGallonInput.value = "";
                cupQuartInput.value = "";
                cupPintInput.value = "";
            });
        }
/* END OF MEASUREMENT CONVERSION SECTION */

/* START OF WEIGHT/BODY CALCULATOR SECTION */
/* DBW ORIGINAL COMPUTATION SECTION */
var dbwBirthInput = document.getElementById("dbw-birth");
var dbwMonthsInput = document.getElementById("dbw-months");
var dbwYearInput = document.getElementById("dbw-years");
var computeDBWOriginalButton = document.getElementById("compute-dbw-orig");
var resetDBWOriginalButton = document.getElementById("reset-dbw-orig");
var dbwOriginalInput = document.getElementById("dbw-orig");
var dbwStages = document.getElementById("dbw-stages");

dbwOriginalInput.disabled = true;
dbwBirthInput.disabled = false;
dbwMonthsInput.disabled = false;
dbwYearInput.disabled = true;

dbwStages.addEventListener("change", function() {
    var dbwStage = dbwStages.value;

    if (dbwStage === "infant1" || dbwStage === "infant2") {
        dbwBirthInput.disabled = false;
        dbwMonthsInput.disabled = false;
        dbwYearInput.disabled = true;
    } else if (dbwStage === "child") {
        dbwBirthInput.disabled = true;
        dbwMonthsInput.disabled = true;
        dbwYearInput.disabled = false;
    } else {
        dbwBirthInput.disabled = true;
        dbwMonthsInput.disabled = true;
        dbwYearInput.disabled = true;
    }
});

computeDBWOriginalButton.addEventListener("click", function() {
    var dbwStage = dbwStages.value;

    if (dbwStage === "infant1" || dbwStage === "infant2") {
        var birth = parseFloat(dbwBirthInput.value);
        var months = parseFloat(dbwMonthsInput.value);

        if (isNaN(birth) || isNaN(months)) {
            dbwOriginalInput.value = "Invalid";
            return;
        } else {
            var dbwOrig = (birth + (months * 600)) / 1000;
            dbwOriginalInput.value = dbwOrig.toFixed(2) + "kg"; 
        }
    } else if(dbwStage === "child") {
        var year = parseFloat(dbwYearInput.value);

        if (isNaN(year)) {
            dbwOriginalInput.value = "Invalid";
            return;
        } else {
            var dbwOrig = (2 * year) + 8;
            dbwOriginalInput.value = dbwOrig.toFixed(2) + "kg"; 
        }
    } else {
        dbwOriginalInput.value = "Invalid";
    }
});

resetDBWOriginalButton.addEventListener("click", function() {
    dbwBirthInput.value = "";
    dbwMonthsInput.value = "";
    dbwYearInput.value = "";
    dbwOriginalInput.value = "";
    
    dbwBirthInput.disabled = false;
    dbwMonthsInput.disabled = false;
    dbwYearInput.disabled = true;
})




/* DBW TANHAUSSER'S METHOD SECTION */
        var computeDBWButton = document.getElementById("compute-dbw");
        var resetButton = document.getElementById("reset-dbw");
        var dbwHeightInput = document.getElementById("dbw-height");
        var dbwDBWInput = document.getElementById("dbw-dbw");
        dbwDBWInput.disabled = true;
        var dbwResult = document.getElementById("dbw-result");
        

        computeDBWButton.addEventListener("click", function() {
            var heightDBW = parseFloat(dbwHeightInput.value);

            if (isNaN(heightDBW)) {
                dbwResult.textContent = "Please enter a value in the height input field.";
                dbwDBWInput.value = "";
                return;
            }

            if (!isNaN(heightDBW)) {
                if (heightDBW <= 100) {
                    dbwResult.textContent = "height should be greater than 100 cm";
                    dbwDBWInput.value = "Invalid input for height";
                    return;
                } else {
                    var dbw = (heightDBW - 100) * 0.9;
                    dbwDBWInput.value = dbw.toFixed(2) + " kg";
                    dbwResult.textContent = "";
                }
            }
        });

        resetButton.addEventListener("click", function() {
            dbwHeightInput.value = "";
            dbwDBWInput.value = "";
            dbwResult.textContent = "";
        });

/* IBW COMPUTATION SECTION */
        var computeIBWButton = document.getElementById("compute-ibw");
        var resetIBWButton = document.getElementById("reset-ibw");
        var ibwHeightInput = document.getElementById("ibw-ft");
        var ibwWeightInput = document.getElementById("ibw-lb");
        var ibwResultInput = document.getElementById("ibw-ibw");
        ibwResultInput.disabled = true;

        computeIBWButton.addEventListener("click", function() {
            var heightIBW = ibwHeightInput.value.trim();
            var heightIBWParts = heightIBW.split("'");
            var ibwFT = parseFloat(heightIBWParts[0]);
            var ibwInch = parseFloat(heightIBWParts[1]);
            var ibwLB = parseFloat(ibwWeightInput.value);

            if (isNaN(ibwFT) || isNaN(ibwInch)) {
                ibwResultInput.value = "Invalid input for height";
                return;
            }
            else if(!isNaN(ibwFT) && !isNaN(ibwInch)){
                if(ibwFT < 5)
                    {
                        var inchesIBW = (12 - ibwInch) * 4;
                        var totalIBW = (ibwLB + inchesIBW) / 2.2
                        ibwResultInput.value = totalIBW.toFixed(3) + " kg";
                    }
                else if(ibwFT >= 5)
                    {
                        var inchesIBW = ibwInch * 4;
                        var totalIBW = (ibwLB + inchesIBW) / 2.2
                        ibwResultInput.value = totalIBW.toFixed(3) + " kg";
                    }
                else if(ibwFT > 5)
                    {
                        var inchesIBW = (12+ ibwInch) * 4;
                        var totalIBW = (ibwLB + inchesIBW) / 2.2
                        ibwResultInput.value = totalIBW.toFixed(3) + " kg";
                    }
                else{
                    ibwResultInput.value = "Invalid input";
                }
            }
        });

        resetIBWButton.addEventListener("click", function() {
            ibwHeightInput.value = "";
            ibwWeightInput.value = "";
            ibwResultInput.value = "";
        });

/* CURRENT WEIGHT (LOWER LIMIT AND UPPER LIMIT) CALCULATOR*/
        var computeWeightButton = document.getElementById("compute-cw");
        var resetWeightButton = document.getElementById("reset-cw");
        var cwKGInput = document.getElementById("cw-kg");
        var cwLBInput = document.getElementById("cw-lb");
        var cwLLInput = document.getElementById("cw-ll");
        var cwULInput = document.getElementById("cw-ul");
        cwLLInput.disabled = true;
        cwULInput.disabled = true;

        computeWeightButton.addEventListener("click", function() {
            var weightKG = parseFloat(cwKGInput.value);
            var weightLB = parseFloat(cwLBInput.value);
            
            if (!isNaN(weightKG) && !isNaN(weightLB)) {
                cwLLInput.value = "Choose One";
                cwULInput.value = "Weight Only";
            }
            else if (isNaN(weightKG) && isNaN(weightLB)) {
                cwLLInput.value = "Input Atleast 1";
                cwULInput.value = "Weight";
            }
            else if (!isNaN(weightKG) || !isNaN(weightLB)) {
                if (!isNaN(weightKG)) {
                    var ll = weightKG * 0.9;
                    var ul = weightKG * 1.1;
                    cwLLInput.value = ll.toFixed(2) + " kg";
                    cwULInput.value = ul.toFixed(2) + " kg";
                } else if (!isNaN(weightLB)){
                    var ll = (weightLB * 0.9) / 2.2;
                    var ul = (weightLB * 1.1) / 2.2;
                    cwLLInput.value = ll.toFixed(2) + " kg";
                    cwULInput.value = ul.toFixed(2) + " kg";
                } else {
                    cwLLInput.value = "Invalid";
                    cwULInput.value = "Invalid";
                }
            }
        });
        resetWeightButton.addEventListener("click", function() {
            cwKGInput.value = "";
            cwLBInput.value = "";
            cwLLInput.value = "";
            cwULInput.value = "";
        });

/* BMI COMPUTATION SECTION */

   var computeButton = document.getElementById("compute-bmi");
   var resetBMI = document.getElementById("reset-bmi");
   var weightInput = document.getElementById("bmi-weight");
   var heightInput = document.getElementById("bmi-height");
   var bmiResult = document.getElementById("bmi-result");
   var bmiStatus = document.getElementById("bmi-status");

    bmiResult.disabled = true;
    bmiStatus.disabled = true;


   computeButton.addEventListener("click", function() 
   {
       var weight = parseFloat(weightInput.value);
       var height = parseFloat(heightInput.value);
   
       if (isNaN(weight) || isNaN(height) || weight <= 0 || height <= 0) {
           bmiResult.textContent = "Invalid input. Please enter valid weight and height.";
           return;
       }
   
       var bmi;
       if (height >= 100) {
           bmi = weight / ((height/100)*(height/100));
       } else {
           bmi = weight / (height * height);
       }
       
       if (bmi < 16) {
            bmiResult.value = bmi.toFixed(2);
            bmiStatus.value = "Sever Thinness";
       } 
       else if (bmi >= 16 && bmi < 17) 
       {
            bmiStatus.value = "Moderate Thinness";
            bmiResult.value = bmi.toFixed(2);
       }
       else if (bmi >= 17 && bmi < 18.5)
       {
            bmiStatus.value = "Mild Thinness";
            bmiResult.value = bmi.toFixed(2);
       }
       else if (bmi >= 18.5 && bmi < 25)
       {
            bmiStatus.value = "Normal";
            bmiResult.value = bmi.toFixed(2);
       }
       else if (bmi >= 25 && bmi < 30)
       {
            bmiStatus.value = "Overweight";
            bmiResult.value = bmi.toFixed(2);
       }
       else if (bmi >= 30 && bmi < 35)
       {
            bmiStatus.value = "Obese Grade 1";
            bmiResult.value = bmi.toFixed(2);
       }
       else if (bmi >= 35 && bmi < 40)
       {
            bmiStatus.value = "Obese Grade 2";
            bmiResult.value = bmi.toFixed(2);
       }
       else if (bmi >= 40)
       {
            bmiResult.value = bmi.toFixed(2);
            bmiStatus.value = "Obese Grade 3";
       }
   });

    resetBMI.addEventListener("click", function() {
        weightInput.value = "";
        heightInput.value = "";
        bmiResult.value = "";
        bmiStatus.value = "";
    });



/*BODY FRAME COMPUTATION SECTION */

    var computeBFButton = document.getElementById("compute-body-frame");
    var bfResult = document.getElementById("body-frame-result");
    var bfStatus = document.getElementById("body-frame-status");
    var resetBF = document.getElementById("reset-body-frame");

    bfResult.disabled = true;
    bfStatus.disabled = true;

    computeBFButton.addEventListener("click", function() {
        var height = parseFloat(document.getElementById("bodyframe-height").value);
        var wrist = parseFloat(document.getElementById("bodyframe-wrist").value); 
        var gender = document.getElementById("body-frame-gender").value;



        if (isNaN(height) || isNaN(wrist) || height <= 0 || wrist <= 0) {
            bfResult.textContent = "Invalid input. Please enter valid height and wrist measurements.";
            return;
        }

        var bodyFrame;
        if (height < 3) {
            bodyFrame = (height * 100) / wrist;
        } else {
            bodyFrame = height / wrist;
        }

        if (gender === "male") {
            if (bodyFrame < 9.6) {
                bfStatus.value = "Large Body Frame";
                bfResult.value = bodyFrame.toFixed(2);
            } else if (bodyFrame >= 9.6 && bodyFrame < 10.4) {
                bfStatus.value = "Medium Body Frame";
                bfResult.value = bodyFrame.toFixed(2);
            } else if (bodyFrame >= 10.4) {
                bfStatus.value = "Small Body Frame";
                bfResult.value = bodyFrame.toFixed(2);
            }
        } else if (gender === "female") {
            if (bodyFrame < 10.1) {
                bfStatus.value = "Large Body Frame";
                bfResult.value = bodyFrame.toFixed(2);
            } else if (bodyFrame >= 10.1 && bodyFrame <= 11) {
                bfStatus.value = "Medium Body Frame";
                bfResult.value = bodyFrame.toFixed(2);
            } else if (bodyFrame > 11) {
                bfStatus.value = "Small Body Frame";
                bfResult.value = bodyFrame.toFixed(2);
            }
        } else {
            bfStatus.value = "Unknown Gender";
        }
    });

    resetBF.addEventListener("click", function() {
        document.getElementById("bodyframe-height").value = "";
        document.getElementById("bodyframe-wrist").value = "";
        bfResult.value = "";
        bfStatus.value = "";
    });



/*WAIST-HIP RATIO COMPUTATION SECTION */

    var computeWHRButton = document.getElementById("compute-waist-hip");
    var resetWHR = document.getElementById("reset-waist-hip");
    var whrResult = document.getElementById("waist-hip-result");
    var whrStatusInput = document.getElementById("waist-hip-status");
    var appleShape = document.getElementById("apple-shape")

    whrResult.disabled = true;
    whrStatusInput.disabled = true;
    appleShape.disabled = true;

    computeWHRButton.addEventListener("click", function() {
        var waist = parseFloat(document.getElementById("waist-hip-waist").value);
        var hip = parseFloat(document.getElementById("waist-hip-hip").value);
        var gender = document.getElementById("waist-hip-gender").value;
        var race = document.getElementById("waist-hip-race").value;


        if (isNaN(waist) || isNaN(hip) || waist <= 0 || hip <= 0) {
            whrResult.textContent = "Invalid input. Please enter valid waist and hip measurements.";
            return;
        }

        var whr = waist / hip;
        
        if (gender === "male") 
        {
            if(race === "europid" || race ==="eastern-mediterranean"|| 
            race ==="mid-eastern"||race ==="sub-saharan-african")
            {
                if (whr < 0.94) {
                    whrResult.value = whr.toFixed(2);
                    whrStatusInput.value = "Normal";
                    appleShape.value = "NO"
                } else if (whr <= 0.94){
                    whrResult.value = whr.toFixed(2);
                    whrStatusInput.value = "Normal";
                    appleShape.value = "YES"
                } else if (whr >= 0.95) {
                    whrResult.value = whr.toFixed(2);
                    whrStatusInput.value = "At-Risk";
                    appleShape.value = "YES"
                } else {
                    whrResult.value = "Invalid";
                    whrStatusInput.value = "Invalid";
                    appleShape.value = "Invalid";
                }
            } 
            else if (race === "south-asian" || race === "chinese" 
            || race === "japanese" || race === "asian")
            {
                if (whr < 0.90) {
                    whrResult.value = whr.toFixed(2);
                    whrStatusInput.value = "Normal";
                    appleShape.value = "NO"
                } else if (whr >= 0.90){
                    whrResult.value = whr.toFixed(2);
                    whrStatusInput.value = "Normal";
                    appleShape.value = "YES"
                } else if (whr <= 0.94){
                    whrResult.value = whr.toFixed(2);
                    whrStatusInput.value = "Normal";
                    appleShape.value = "YES"
                } else if (whr >= 0.95) {
                    whrResult.value = whr.toFixed(2);
                    whrStatusInput.value = "At-Risk";
                    appleShape.value = "YES"
                } else {
                    whrResult.value = "Invalid";
                    whrStatusInput.value = "Invalid";
                    appleShape.value = "Invalid";
                }
            }
            else if (race === "not-necessary")
            {
                if (whr < 0.90) {
                    whrResult.value = whr.toFixed(2);
                    whrStatusInput.value = "Normal";
                    appleShape.value = "Not Necessary"
                } else if (whr >= 0.90){
                    whrResult.value = whr.toFixed(2);
                    whrStatusInput.value = "Normal";
                    appleShape.value = "Not Necessary"
                } else if (whr <= 0.94){
                    whrResult.value = whr.toFixed(2);
                    whrStatusInput.value = "Normal";
                    appleShape.value = "Not Necessary"
                } else if (whr >= 0.95) {
                    whrResult.value = whr.toFixed(2);
                    whrStatusInput.value = "At-Risk";
                    appleShape = "Not Necessary"
                } else {
                    whrResult.value = "Invalid";
                    whrStatusInput.value = "Invalid";
                    appleShape = "Not Necessary";
                }                  
            }
            
        }
        else if (gender === "female") 
        {
            if(race === "europid" || race ==="eastern-mediterranean"|| 
            race ==="mid-eastern"||race ==="sub-saharan-african"|| "asian")
            {
                if (whr < 0.80) {
                    whrResult.value = whr.toFixed(2);
                    whrStatusInput.value = "Normal";
                    appleShape.value = "NO";
                } else if (whr >= 0.80) {
                    whrResult.value = whr.toFixed(2);
                    whrStatusInput.value = "At-Risk";
                    appleShape.value = "YES";
                } else {
                    whrResult.value = "Invalid";
                    whrStatusInput.value = "Invalid";
                    appleShape.value = "Invalid";
                }
            }
            else if(race === "not-necessary")
                {
                    if (whr < 0.80) {
                        whrResult.value = whr.toFixed(2);
                        whrStatusInput.value = "Normal";
                        appleShape.value = "Not Necessary";
                    } else if (whr >= 0.80) {
                        whrResult.value = whr.toFixed(2);
                        whrStatusInput.value = "At-Risk";
                        appleShape.value = "Not Necessary";
                    } else {
                        whrResult.value = "Invalid";
                        whrStatusInput.value = "Invalid";
                        appleShape.value = "Invalid";
                    }
                }
        }
    });
    resetWHR.addEventListener("click", function() {
        document.getElementById("waist-hip-waist").value = "";
        document.getElementById("waist-hip-hip").value = "";
        whrResult.value = "";
        whrStatusInput.value = "";
        appleShape.value = "";
    });

    /* WEIGHT INTERPRETATION */
    var weightInterpretationButton = document.getElementById("compute-wi");
    var weightInterpretationReset = document.getElementById("reset-wi");
    var weightWIInput = document.getElementById("weight-wi");
    var dbwWIInput = document.getElementById("dbw-wi");
    var weightWIResult = document.getElementById("weight-interp");
    weightWIResult.disabled = true;

    weightInterpretationButton.addEventListener("click", function() {
        var weight = parseFloat(weightWIInput.value);
        var dbw = parseFloat(dbwWIInput.value);

        if (isNaN(weight) || isNaN(dbw)) {
            weightWIResult.textContent = "Please enter a value in both input fields.";
            return;
        }

        var weightInterpret;

        weightInterpret = (dbw/weight) * 100;

        weightWIResult.value = weightInterpret.toFixed(2) + "%";
    });
    weightInterpretationReset.addEventListener("click", function() {
        weightWIInput.value = "";
        dbwWIInput.value = "";
        weightWIResult.value = "";
    });
    

    // --- ENERGY/NUTRITION CALCULATOR SECTION ---
    // TER Calculator
    var computeTERButton = document.getElementById("compute-ter");
    var resetTERButton = document.getElementById("reset-ter");
    var terDBWInput = document.getElementById("ter-dbw");
    var terAgeInput = document.getElementById("ter-age");
    var terResult = document.getElementById("ter-ter");
    var terStageLife = document.getElementById("ter-stages");
    var terIntensity = document.getElementById("ter-intensity");

    function updateTERFields() {
        var stage = terStageLife.value;
        // Always allow typing in all fields, but visually indicate which are relevant
        terDBWInput.readOnly = false;
        terAgeInput.readOnly = false;
        terIntensity.disabled = true;
        terDBWInput.classList.remove("readonly-field");
        terAgeInput.classList.remove("readonly-field");
        terIntensity.classList.remove("readonly-field");
        if (stage === "infant1" || stage === "infant2" || stage === "adolescent") {
            terDBWInput.readOnly = false;
            terAgeInput.readOnly = true;
            terAgeInput.value = "";
            terIntensity.disabled = true;
            terDBWInput.placeholder = "65";
            terAgeInput.placeholder = "-";
            terAgeInput.classList.add("readonly-field");
        } else if (stage === "child") {
            terDBWInput.readOnly = true;
            terDBWInput.value = "";
            terAgeInput.readOnly = false;
            terIntensity.disabled = true;
            terDBWInput.placeholder = "-";
            terAgeInput.placeholder = "5";
            terDBWInput.classList.add("readonly-field");
        } else if (stage === "adult") {
            terDBWInput.readOnly = false;
            terAgeInput.readOnly = true;
            terAgeInput.value = "";
            terIntensity.disabled = false;
            terDBWInput.placeholder = "65";
            terAgeInput.placeholder = "-";
            terAgeInput.classList.add("readonly-field");
        } else {
            terDBWInput.readOnly = true;
            terAgeInput.readOnly = true;
            terDBWInput.value = "";
            terAgeInput.value = "";
            terIntensity.disabled = true;
            terDBWInput.placeholder = "-";
            terAgeInput.placeholder = "-";
            terDBWInput.classList.add("readonly-field");
            terAgeInput.classList.add("readonly-field");
        }
        terResult.readOnly = true;
    }
    updateTERFields();
    terStageLife.addEventListener("change", updateTERFields);

    computeTERButton.addEventListener("click", function() {
        var stage = terStageLife.value;
        var ter = 0;
        terResult.classList.remove("error-message");
        if (stage === "infant1") {
            var dbw = parseFloat(terDBWInput.value);
            if (isNaN(dbw)) { terResult.value = "Please enter DBW (kg)"; terResult.classList.add("error-message"); return; }
            ter = dbw * 120;
        } else if (stage === "infant2") {
            var dbw = parseFloat(terDBWInput.value);
            if (isNaN(dbw)) { terResult.value = "Please enter DBW (kg)"; terResult.classList.add("error-message"); return; }
            ter = dbw * 110;
        } else if (stage === "adolescent") {
            var dbw = parseFloat(terDBWInput.value);
            if (isNaN(dbw)) { terResult.value = "Please enter DBW (kg)"; terResult.classList.add("error-message"); return; }
            ter = dbw * 45;
        } else if (stage === "child") {
            var age = parseFloat(terAgeInput.value);
            if (isNaN(age)) { terResult.value = "Please enter Age (years)"; terResult.classList.add("error-message"); return; }
            ter = (age * 100) + 1000;
        } else if (stage === "adult") {
            var dbw = parseFloat(terDBWInput.value);
            var intensity = terIntensity.value;
            if (isNaN(dbw)) { terResult.value = "Please enter DBW (kg)"; terResult.classList.add("error-message"); return; }
            if (intensity === "sedentary") ter = dbw * 30;
            else if (intensity === "light") ter = dbw * 35;
            else if (intensity === "moderate") ter = dbw * 40;
            else if (intensity === "vigorous") ter = dbw * 45;
            else { terResult.value = "Please select Intensity"; terResult.classList.add("error-message"); return; }
        } else {
            terResult.value = "Invalid.";
            terResult.classList.add("error-message");
            return;
        }
        terResult.value = ter.toFixed(2) + " kcal/day";
    });
    resetTERButton.addEventListener("click", function() {
        terDBWInput.value = "";
        terAgeInput.value = "";
        terResult.value = "";
        terIntensity.value = "sedentary";
        terStageLife.value = "infant1";
        updateTERFields();
    });

    // Nutritional Distribution Calculator
    var computeNDButton = document.getElementById("compute-nd");
    var resetNDButton = document.getElementById("reset-nd");
    var ndChoInput = document.getElementById("nd-cho");
    var ndChonInput = document.getElementById("nd-chon");
    var ndFatInput = document.getElementById("nd-fat");
    var ndDBWInput = document.getElementById("nd-dbw");
    var ndTERInput = document.getElementById("nd-ter");
    var ndC1Input = document.getElementById("nd-c1");
    var ndC2Input = document.getElementById("nd-c2");
    var ndP1Input = document.getElementById("nd-p1");
    var ndP2Input = document.getElementById("nd-p2");
    var ndF1Input = document.getElementById("nd-f1");
    var ndF2Input = document.getElementById("nd-f2");
    var ndKcalInput = document.getElementById("nd-kcal");
    var ndGramsInput = document.getElementById("nd-grams");
    if (computeNDButton && resetNDButton) {
        ndC1Input.readOnly = true;
        ndC2Input.readOnly = true;
        ndP1Input.readOnly = true;
        ndP2Input.readOnly = true;
        ndF1Input.readOnly = true;
        ndF2Input.readOnly = true;
        ndKcalInput.readOnly = true;
        ndGramsInput.readOnly = true;
        computeNDButton.addEventListener("click", function() {
            ndKcalInput.classList.remove("error-message");
            var cho = parseFloat(ndChoInput.value);
            var chon = parseFloat(ndChonInput.value);
            var fat = parseFloat(ndFatInput.value);
            var ter = parseFloat(ndTERInput.value);
            if (isNaN(cho) || isNaN(chon) || isNaN(fat) || isNaN(ter)) {
                ndKcalInput.value = "Please enter all required fields";
                ndKcalInput.classList.add("error-message");
                return;
            }
            if (cho + chon + fat !== 100) {
                ndKcalInput.value = "Percentages must add to 100%";
                ndKcalInput.classList.add("error-message");
                return;
            }
            var c1 = ter * (cho / 100);
            var c2 = c1 / 4;
            var p1 = ter * (chon / 100);
            var p2 = p1 / 4;
            var f1 = ter * (fat / 100);
            var f2 = f1 / 9;
            var kcal = c1 + p1 + f1;
            var grams = c2 + p2 + f2;
            ndC1Input.value = c1.toFixed(2) + " kcal/day";
            ndC2Input.value = c2.toFixed(3) + " grams/day";
            ndP1Input.value = p1.toFixed(2) + " kcal/day";
            ndP2Input.value = p2.toFixed(3) + " grams/day";
            ndF1Input.value = f1.toFixed(2) + " kcal/day";
            ndF2Input.value = f2.toFixed(3) + " grams/day";
            ndKcalInput.value = kcal.toFixed(2) + " kcal/day";
            ndGramsInput.value = grams.toFixed(2) + " grams/day";
        });
        resetNDButton.addEventListener("click", function() {
            ndChoInput.value = "";
            ndChonInput.value = "";
            ndFatInput.value = "";
            ndDBWInput.value = "";
            ndTERInput.value = "";
            ndC1Input.value = "";
            ndC2Input.value = "";
            ndP1Input.value = "";
            ndP2Input.value = "";
            ndF1Input.value = "";
            ndF2Input.value = "";
            ndKcalInput.value = "";
            ndGramsInput.value = "";
        });
    }
});