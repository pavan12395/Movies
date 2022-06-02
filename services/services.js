import axios from 'axios';
export const getMovies = async ()=>
{
       const options = {
             method: 'GET',
             url: 'https://movies-app1.p.rapidapi.com/api/movies',
             headers: {
                        'X-RapidAPI-Host': 'movies-app1.p.rapidapi.com',
                         'X-RapidAPI-Key': '406f437f08mshd7b5f5395356e0ap1183fcjsn72fc38632226'
                      }
          };
     return axios.request(options);
};

export const getTrailer = async (_id)=>
{
     const options = {
          method: 'GET',
          url: 'https://movies-app1.p.rapidapi.com/api/trailers/'+_id,
          headers: {
            'X-RapidAPI-Host': 'movies-app1.p.rapidapi.com',
            'X-RapidAPI-Key': '406f437f08mshd7b5f5395356e0ap1183fcjsn72fc38632226'
          }
        };
        return axios.request(options);
}

export const getActionMovies = (movies)=>
{
      return movies.filter((movie)=>
      {
           const {genres} = movie;
           if(genres.filter(genre=>genre.uuid=='accion').length!=0)
           {
                return true;
           }
           else
           {
                return false;
           }
      })
}

export const getSuspenseMovies = (movies)=>
{
      return movies.filter((movie)=>
      {
           const {genres} = movie;
           if(genres.filter(genre=>genre.uuid=='suspense').length!=0)
           {
                return true;
           }
           else
           {
                return false;
           }
      })
}

export const getRomanticMovies = (movies)=>
{
      return movies.filter((movie)=>
      {
           const {genres} = movie;
           if(genres.filter(genre=>genre.uuid=='romance').length!=0)
           {
                return true;
           }
           else
           {
                return false;
           }
      })
}

export const getAdventureMovies = (movies)=>
{
      return movies.filter((movie)=>
      {
           const {genres} = movie;
           if(genres.filter(genre=>genre.uuid=='aventura').length!=0)
           {
                return true;
           }
           else
           {
                return false;
           }
      })
}