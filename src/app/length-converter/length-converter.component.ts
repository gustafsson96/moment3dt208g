import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-length-converter',
  imports: [FormsModule],
  templateUrl: './length-converter.component.html',
  styleUrl: './length-converter.component.css'
})
export class LengthConverterComponent {
  feet: number = 0;
  meter: number = 0;
  conversionType: string = 'feetToMeter'; // Default conversion direction

  // Method to convert feet to meter
  convertToMeter() {
    this.meter = this.feet * 0.3048;
  }

  // Method to convert meter to feet
  convertToFeet() {
    this.feet = this.meter / 0.3048;
  }

  // Switch conversion direction based on user choice
  toggleConversionType(type: string) {
    this.conversionType = type;
    if (this.conversionType === 'meterToFeet') {
      this.convertToFeet();
    } else {
      this.convertToMeter();
    }
  }
}
