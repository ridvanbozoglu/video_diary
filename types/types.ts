export interface ICroppedVideo {
    uri: string;    
    name: string;   
    description: string;
  }

export interface ICropVideo {
    uri: string;
    name: string;   
    description: string;
    start: number;
    end: number;
}