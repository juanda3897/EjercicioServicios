import{Injectable} from '@angular/core';

@Injectable()

export class CiudadesService{
    getCiudades(): string[]{
        return[ 
            
            'Bogotá',
            'Buenos aires',
            'Lima',
            'Rio de Janeiro'
        ]
    }


}