var errorMessage = document.getElementById("error")
var submitButton = document.getElementById("submit-button")
var ansX = document.getElementById("xans")
var ansZ = document.getElementById("zans")
errorMessage.style.display = "none";

// converte graus para radianos
function deg2rad(degrees) {
  return degrees * (Math.PI / 180);
}

// obter parametro x da posição da stronghold
function getStronghold_X(x1, z1, angle1, x2, z2, angle2) {
    const r1 = Math.tan(deg2rad(angle1));
    const r2 = Math.tan(deg2rad(angle2));
    
    const c1 = z1 - r1 * x1;
    const c2 = z2 - r2 * x2;
    
    return (c2 - c1) / (r1 - r2);
}

// obter parametro z da posição da stronghold
function getStronghold_Z(x, x1, z1, angle1) {
    const r = Math.tan(deg2rad(angle1));
    return r * (x - x1) + z1;
}

submitButton.onclick = function () {
    errorMessage.style.display = "none";
     
    const regex = /tp @s (-?\d+\.\d+) \d+\.\d+ (-?\d+\.\d+) (-?\d+\.\d+)/; // thanks chatgpt <3
    
    const location1 = document.getElementById("throw1").value;
    const matches1 = location1.match(regex);
    
    if (matches1) {
        throw1 = {
            x: parseFloat(matches1[1]),
            z: parseFloat(matches1[2]),
            angle: parseFloat(matches1[3])
        }
    } else {
        errorMessage.style.display = "block";
        errorMessage.innerHTML = "error : make sure none of the fields are left empty"
        return 0; 
    }
    
    const location2 = document.getElementById("throw2").value;
    const matches2 = location2.match(regex);

    if (matches2) {
        throw2 = {
            x: parseFloat(matches2[1]),
            z: parseFloat(matches2[2]),
            angle: parseFloat(matches2[3])
        } 
    } else {
        errorMessage.style.display = "block";
        errorMessage.innerHTML = "error : make sure none of the fields are left empty"
        return 0; 
    }

    // verificar se está algum field vazio
    if (isNaN(throw1.x) || isNaN(throw1.z) || isNaN(throw1.angle)) {
        errorMessage.style.display = "block";
        errorMessage.innerHTML = "error : make sure none of the fields are left empty"
        return 0; 
    }
    if (isNaN(throw2.x) || isNaN(throw2.z) || isNaN(throw2.angle)) {
        errorMessage.style.display = "block";
        errorMessage.innerHTML = "error : make sure none of the fields are left empty"
        return 0; 
    }
    
    // verificar ângulos inválidos
    if (-180 > throw1.angle || throw1.angle > 180) {
        errorMessage.style.display = "block";
        errorMessage.innerHTML = "error : invalid angle (on first throw)"
        console.log("invalid angle")
        return 0; 
    }
    if (-180 > throw2.angle || throw2.angle > 180) {
        errorMessage.style.display = "block";
        errorMessage.innerHTML = "error : invalid angle (on second throw)"
        console.log("invalid angle")
        return 0; 
    }

    // calcular as coordenadas
    const res_X = getStronghold_X(throw1.x, throw1.z, throw1.angle - 90, throw2.x, throw2.z, throw2.angle - 90);
    const res_Z = getStronghold_Z(res_X, throw1.x, throw1.z, throw1.angle - 90);

    // exibir o resultado
    ansX.innerHTML = res_X.toFixed(1).toString();
    ansZ.innerHTML = res_Z.toFixed(1).toString();
}
