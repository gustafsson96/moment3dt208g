import { Component } from '@angular/core';
import { LengthConverterComponent } from '../../length-converter/length-converter.component';
import { TemperatureConverterComponent } from '../../temperature-converter/temperature-converter.component';

@Component({
  selector: 'app-convert',
  imports: [LengthConverterComponent, TemperatureConverterComponent],
  templateUrl: './convert.component.html',
  styleUrl: './convert.component.css'
})
export class ConvertComponent {

}
