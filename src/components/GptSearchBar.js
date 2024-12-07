import React, { useRef } from "react";
import lang from "../utils/languageConstants";
import { useDispatch, useSelector } from "react-redux";
import client from "../utils/openai";
import { API_OPTIONS } from "../utils/constants";
import { addGptMovieResults } from "../utils/gptSlice";
import Groq from "groq-sdk";

const GptSearchBar = () => {
  const dispatch = useDispatch();
  const langKey = useSelector(store => store.config.lang);
  const searchText = useRef(null);

 // search movie in TMDB

  const searchMovieTMDB = async(movie)=>{
    const data = await fetch('https://api.themoviedb.org/3/search/movie?query='+movie+'&include_adult=false&language=en-US&page=1', API_OPTIONS);
    const json = await data.json();
    return json.results;
  };
  const handleGptSearchClick = async()=>{

    // make an api call to gpt api and get movies results 

    const gptQuery = "Act as a movie Recommendation system and suggest some movies for the query" + searchText.current.value + "only give me names of 5 movies in comma seperated like the example result given ahead, don't give any text other other then movie name in comma seperated. Example Gadar, sholay, Don, Golmaal, Koi Mill gaya, Ghatak";
    const groq = new Groq({ apiKey: process.env.REACT_APP_GROQ_GPT_KEY,dangerouslyAllowBrowser: true});
    async function getGroqChatCompletion() {
      return groq.chat.completions.create({
        messages: [
          {
            role: "user",
            content: gptQuery,
          },
        ],
        model: "llama3-8b-8192",
      });
    }
    const gptResults = await getGroqChatCompletion();

    if(!gptResults.choices){
       //TODo : Write Error Handling
    }


    const gptMovies = gptResults.choices?.[0]?.message?.content.split(',');

    const promiseArray = gptMovies.map((movie) => searchMovieTMDB(movie));
    const tmdbResults = await Promise.all(promiseArray);
   

    dispatch(addGptMovieResults({movieNames: gptMovies ,movieResults: tmdbResults}));
  };

  return (
    <div className="pt-[35%] md:pt-[10%] flex justify-center">
      <form className="w-full md:w-1/2 bg-black grid grid-cols-12" onSubmit={(e)=>e.preventDefault()}>
        <input
          ref={searchText}
          type="text"
          className="p-4 m-4 col-span-9"
          placeholder={lang[langKey].gptSearchPlaceholder}
        />
        <button className="col-span-3 m-4 py-2 px-4 bg-red-700 text-white rounded-lg"
        onClick={handleGptSearchClick}>
          {lang[langKey].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
