function generarCalendario() {
    const dias = ['Dom', 'Lun', 'Mar', 'Mie', 'Jue', 'Vie', 'Sab'];
    const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
    const calendario = document.getElementById('calendario');
    const year = 2025;

    const colores = {
        13: 'red', // 13 de cada mes en rojo
        7: 'pink', // 7 de octubre en rosa
        6: 'blue', // 6 de noviembre en azul
        weekend: {
            domingo: 'gray', // Domingo en gris
            sabado: 'yellow' // Sábado en amarillo
        }
    };

    // Estilos compactos
    calendario.style.display = 'grid';
    calendario.style.gridTemplateColumns = 'repeat(4, 1fr)'; // Cuatro columnas para que entren todos los meses
    calendario.style.gap = '10px';

    for (let mes = 0; mes < 12; mes++) {
        const mesElemento = document.createElement('div');
        mesElemento.classList.add('mes');
        mesElemento.style.border = '1px solid #ccc';
        mesElemento.style.padding = '10px';
        mesElemento.style.textAlign = 'center';

        const nombreMes = document.createElement('h3');
        nombreMes.textContent = meses[mes];
        mesElemento.appendChild(nombreMes);

        const tabla = document.createElement('table');
        tabla.style.width = '100%';
        tabla.style.tableLayout = 'fixed';

        // Crear encabezado de días
        const thead = document.createElement('thead');
        thead.innerHTML = `<tr>${dias.map(dia => `<th>${dia}</th>`).join('')}</tr>`;
        tabla.appendChild(thead);

        const tbody = document.createElement('tbody');
        let diaContador = 1;
        const primerDia = new Date(year, mes, 1).getDay();
        const diasEnMes = new Date(year, mes + 1, 0).getDate();
        let fila = document.createElement('tr');

        // Rellenar primeros días en blanco
        for (let i = 0; i < primerDia; i++) fila.appendChild(document.createElement('td'));

        // Rellenar los días del mes
        for (let i = primerDia; i < 7 && diaContador <= diasEnMes; i++) {
            const td = document.createElement('td');
            td.textContent = diaContador++;
            aplicarColores(td, diaContador - 1, mes);
            fila.appendChild(td);
        }
        tbody.appendChild(fila);

        // Rellenar el resto de los días
        while (diaContador <= diasEnMes) {
            fila = document.createElement('tr');
            for (let i = 0; i < 7 && diaContador <= diasEnMes; i++) {
                const td = document.createElement('td');
                td.textContent = diaContador++;
                aplicarColores(td, diaContador - 1, mes);
                fila.appendChild(td);
            }
            tbody.appendChild(fila);
        }
        tabla.appendChild(tbody);
        mesElemento.appendChild(tabla);
        calendario.appendChild(mesElemento);
    }
}

function aplicarColores(td, dia, mes) {
    const colores = {
        13: 'red', 
        7: 'pink', 
        6: 'blue', 
        weekend: {
            domingo: 'gray', 
            sabado: 'yellow'
        }
    };

    if (dia === 13) {
        td.style.backgroundColor = colores[13];
    } else if (dia === 7 && mes === 9) { // Octubre
        td.style.backgroundColor = colores[7];
    } else if (dia === 6 && mes === 10) { // Noviembre
        td.style.backgroundColor = colores[6];
    } else if (new Date(2025, mes, dia).getDay() === 0) { // Domingo
        td.style.backgroundColor = colores.weekend.domingo;
    } else if (new Date(2025, mes, dia).getDay() === 6) { // Sábado
        td.style.backgroundColor = colores.weekend.sabado;
    }
}

document.addEventListener('DOMContentLoaded', generarCalendario);
