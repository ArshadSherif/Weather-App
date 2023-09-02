import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { WeatherData } from '../Models/weather.model';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  constructor(private http: HttpClient) {}

  // getWeatherData(cityName: string): Observable<WeatherData> {
  //   return this.http.get<WeatherData>(environment.weatherAPIBaseUrl, {
  //     headers: new HttpHeaders()
  //       .set(environment.XRapidAPIHeaderName, environment.XRapidAPIHeaderValue)
  //       .set(
  //         environment.XRapidAPIKeyHeaderName,
  //         environment.XRapidAPIKeyHeaderValue
  //       ),
  //     params: new HttpParams()
  //       .set('q', cityName)
  //       .set('units', 'metric')
  //       .set('mode', 'json'),
  //   });
  // }
 getWeatherData(cityName: string): Observable<WeatherData> {
    return this.http.get<WeatherData>(
     environment.weatherAPIBaseUrl + '/city/' + cityName,
      {
        headers: new HttpHeaders()
          .set(
           environment.XRapidAPIHeaderName,
            environment.XRapidAPIHeaderValue
          )
          .set(
            environment.XRapidAPIKeyHeaderName,
            environment.XRapidAPIKeyHeaderValue
          ),
     }
   );
  }
}
