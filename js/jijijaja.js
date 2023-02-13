let nombre = prompt("Ingrese el nombre del estudiante");
let lengua = parseFloat(prompt("Ingrese la nota de Lengua Española"));
let matematica = parseFloat(prompt("ingrese la nota de Matematica"));
let naturales = parseFloat(prompt("Ingrese la nota de Ciencias Naturales"));
let sociales = parseFloat(prompt("Ingrese la nota de Ciencias Sociales"));
let promedio = (lengua+matematica+naturales+sociales)/4;
document.write(`Nombre del estudiante: ${nombre}<br/>`);

if(lengua<70){
document.write(`Nota de Lengua Española: ${lengua} Reprobado<br/>`)
}
else{
document.write(`Nota de Lengua Española: ${lengua} Aprobado<br/>`)
};

if(matematica<70){
document.write(`Nota de matematica: ${matematica} Reprobado<br/>`)
}
else{
document.write(`Nota de matematica: ${matematica} Aprobado<br/>`)
};

if(naturales<70){
document.write(`Nota de ciencias naturales: ${naturales} Reprobado<br/>`)
}
else{
document.write(`Nota de ciencias naturales: ${naturales} Aprobado<br/>`)
};

if(sociales<70){
document.write(`Nota de ciencias sociales: ${sociales} Reprobado<br/>`)
}
else{
document.write(`Nota de ciencias sociales: ${sociales} Aprobado<br/>`)
};

if(promedio<70){
document.write(`Nota promedio: ${promedio}<br/>`)
document.write(`El estudiante ${nombre} ha reprobado el curso`)
}
else{
document.write(`Nota promedio: ${promedio}<br/>`)
document.write(`El estudiante ${nombre} ha aprobado el curso`)
};