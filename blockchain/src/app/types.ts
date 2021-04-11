export interface Poll
{
  id:number, //12
  question:string; //which day of week you like most?
  results: number[], //[0,1,2,3,4]
  options:string[], //["monday","tueday"...]
  thumbnail:string; //https://myimage.png
}
export interface Voter{
  id:string,//0xlaskjdf
  voted:number[]; //[12,15]
}
