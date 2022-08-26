const API = "https://api.themoviedb.org/3";

export function get(path) {
  return fetch(API + path, {
    headers:{
        Authorization: 
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxMTRjMzdlMGFmYTQ3ZTNlYzY1OTU0ODY0ZGZhM2U3ZCIsInN1YiI6IjYzMDkyMTY5ZmRmOGI3MDA3NmJhOGUyNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.U8oIt_bvxeGSVI8RaEnKjRzofSfjkCjREiBy34q7tEQ",
        "Content-Type": "application/json;charset=utf-8'"
      },
  }).then((result) => result.json());
}