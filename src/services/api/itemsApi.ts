import axios from 'axios';
import { Item, Maybe } from '../../models';
const API_URL = 'http://localhost:3000/api/data';

type ItemResponse = {
  item: Item;
  notFound: boolean;
};

export const getAllItems = async ():Promise<Item[]> => {
    try {
      const response = await axios.get<Item[]>(API_URL);
      return response.data;
    } catch (error) {
      throw new Error('An error occurred while fetching the data.');
    }
  }
  
 export const getItemById = async (id: string | string[] | undefined):Promise<Maybe<Item>> => {
    try {
      const response = await axios.get<Item>(`${API_URL}/${id}`);
      return response.data;
      
    } catch (error: Error | any) {
      
      if (error.response.status === 404) {
        return null;
      }
        
      throw new Error('An error occurred while fetching the data.');
    }
  }