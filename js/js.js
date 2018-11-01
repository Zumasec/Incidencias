var zms = document.getElementById('btnzms');
var fed = document.getElementById('btnfed');
var cns = document.getElementById('btncns');
var mrk = document.getElementById('btnmrk');
var emp = "";

zms.addEventListener('click', function () {
    emp = 'zms';
    $('#exampleModalCenter').modal('show');
}, false)

fed.addEventListener('click', function () {
    emp = 'fed';
    $('#exampleModalCenter').modal('show');
}, false)

cns.addEventListener('click', function () {
    emp = 'cns';
    $('#exampleModalCenter').modal('show');
}, false)

mrk.addEventListener('click', function () {
    emp = 'mrk';
    $('#exampleModalCenter').modal('show');
}, false)

var token = "c52f46bf3aa5c2441847e9fdee3f4583fb77e7aaca0995826d45bc165940fac4";
var appkey = "a358184ea95073f09071d85c1ede7453";

var fecha = new Date();
var fechaTrello = fecha.getFullYear() + '-' + ("0" + (fecha.getMonth() + 1)).slice(-2) + '-' + ("0" + fecha.getDate()).slice(-2);
var hora = fecha.getHours() + ":" + fecha.getMinutes() + ":" + fecha.getSeconds();


function donde() {
    var departamento = document.getElementById('Departamento').value;
    if (departamento == 'ADM' && emp == 'fed') {
        var idtablero = "5bd8a1d81b406d727095a414";
        var idlist = "5bd8a1e2c6b1cc6e94473a06";
        incidencias(idtablero, idlist);
    }

    if (departamento == 'ADM' && emp == 'cns') {
        var idtablero = "5bd8a49da945a73e147703ca";
        var idlist = "5bd8a4e30a1ea80ebe4cea4c";
        incidencias(idtablero, idlist);
    }

    if (departamento == 'ADM' && emp == 'mrk') {
        var idtablero = "5bd96d6bb2304159ca06c3b7";
        var idlist = "5bd96f560f85c765d1cff919";
        incidencias(idtablero, idlist);
    }

    if (departamento == 'ADM' && emp == 'zms') {
        var idtablero = "5bdac8c235762315b08523a4";
        var idlist = "5bdace52ec9cab8a2ecafe2a";
        incidencias(idtablero, idlist);
    }

    if (departamento == 'RRHH') {
        var idtablero = "5bd8a18389f5ec273d08e1a3";
        var idlist = "5bd8a1946143f7197a0aedb2";
        incidencias(idtablero, idlist);
    }

    if (departamento == 'DD') {
        var idtablero = "5bd8a59ba6e4353f71e189ff";
        var idlist = "5bd8a5bf5b9f5c84dad22517";
        incidencias(idtablero, idlist);
    }
}



function incidencias(idtablero, idlist) {
    var departamento = document.getElementById('Departamento').value;
    var nombre = document.getElementById('nombre').value;
    var mcorreo = document.getElementById('mcorreo').value;
    var telefono = document.getElementById('telefono').value;
    var asunto = document.getElementById('asunto').value;
    var comentario = document.getElementById('incidencia').value;
    if (departamento == "RRHH" || departamento == "DD") {
        var desc = 'Empresa '+ emp + '\n' +'Fecha ' + fechaTrello + ' a las ' + hora + '\n' + ' Empresa: ' + emp + '\n' + ' Nombre: ' + nombre + '\n' + ' Correo: ' + mcorreo + '\n' + ' Telefono: ' + telefono + '\n' + ' Asunto: ' + asunto + '\n' + ' Comentario: ' + comentario;
        crearCarta(desc, idtablero, idlist)
    }else{
        var desc = 'Fecha ' + fechaTrello + ' a las ' + hora + '\n' + ' Empresa: ' + emp + '\n' + ' Nombre: ' + nombre + '\n' + ' Correo: ' + mcorreo + '\n' + ' Telefono: ' + telefono + '\n' + ' Asunto: ' + asunto + '\n' + ' Comentario: ' + comentario;
        crearCarta(desc, idtablero, idlist)
    }
    
}

function crearCarta(desc, idtablero, idlist) {
    swal({
        text: "Perfecto nos pondremos en contacto con usted",
        icon: "success",
        button: "Volver",
    }).then((value) => {
        var data = null;
        var name = fechaTrello + ' Notificación ' + emp;
        var xhr = new XMLHttpRequest();
        var url = "https://api.trello.com/1/cards?name=" + encodeURI(name) + "&desc=" + encodeURI(desc) + "&pos=top&idList=" + idlist + "&keepFromSource=all&key=" + appkey + "&token=" + token;
        url = url.replace(/#/g, '%23');
        xhr.open("POST", url);
        xhr.send(data);
        setTimeout(function () { location.reload(); }, 1000);
    });


}
