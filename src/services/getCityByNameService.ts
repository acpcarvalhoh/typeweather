import { api } from "./api";


export interface CityProps{
  id: string;
  name: string;
  latitude: number;
  longitude: number;
};

export interface cityPropsApiResponse{
  id: string;
  name: string;
  coord: {
    lat: number;
    lon: number;
  }
  sys: {
    country?: string;
  }
};

export async function getCityByNameService(name: string): Promise<CityProps[]> {
  try {
    const { data } = await api.get<cityPropsApiResponse>(`/weather?q=${name}`);

    

    const city = {
      id: data.id,
      name: data.sys.country ? `${data.name}, ${data.sys.country}` : data.name,
      longitude: data.coord.lon,
      latitude: data.coord.lat,
      
    };

    return [city];
  } catch (error) {
    return [];
  }
}