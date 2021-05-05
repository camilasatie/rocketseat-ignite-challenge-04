interface citiesDetails {
  id: string;
  city: string;
  country: string;
  flag: string;
  image: string;
}

export interface continentsProps {
  id: string;
  name: string;
  callToActionImage: string;
  callToActionMessage: string;
  description: string;
  countriesNumber: number;
  languagesNumber: number;
  citiesNumber: number;
  moreCities: string;
  cities: citiesDetails[];
}