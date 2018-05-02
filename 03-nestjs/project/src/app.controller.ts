import {Get, Controller} from '@nestjs/common';

const fs = require('fs');
let contador = 0;

@Controller()
export class AppController {
    @Get()
    root(): string {
        console.log('Entró al método');
        contador++;
        let datosArchivo;
        let html =  fs.readFileSync(
            __dirname + '/html/index.html',
            'utf8',
        );
        html = html.replace('{{variable}}', contador);
        return html;
    }
}
