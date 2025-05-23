import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-temperature-converter',
  imports: [FormsModule, CommonModule],
  templateUrl: './temperature-converter.component.html',
  styleUrl: './temperature-converter.component.css'
})
export class TemperatureConverterComponent {
  farenheit: number = 0;
  celsius: number = 0;
  conversionType: string = 'farenheitToCelsius'; // Default conversion direction

  // Method to convert Farenheit to Celsius
  convertToCelsius() {
    this.celsius = (this.farenheit - 32) * 5 / 9;
  }

  // Method to convert Celsius to Farenheit
  convertToFarenheit() {
    this.farenheit = (this.celsius * 9 / 5) + 32;
  }

  // Switch conversion direction based on user choice
  toggleConversionType(type: string) {
    this.conversionType = type;
    this.farenheit = 0;
    this.celsius = 0;
    if (this.conversionType === 'celsiusToFarenheit') {
      this.convertToFarenheit();
    } else {
      this.convertToCelsius();
    }
  }
}
