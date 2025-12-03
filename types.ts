export type ScenarioType = 'sunny' | 'rainy' | 'windy' | 'normal' | 'custom';

export interface WeatherState {
  temp: number;
  humidity: number;
  soilMoisture: number;
  windSpeed: number;
  status: string;
}

export interface ComponentData {
  id: string;
  title: string;
  icon: string;
  desc: string;
  color: string;
}
