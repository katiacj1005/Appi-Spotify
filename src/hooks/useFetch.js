// /* eslint-disable no-unused-expressions */
// import { useState, useEffect } from "react";
// export default function useFetch(url, options){
//     const [loading, setLoading] = useState(true);
//     const [result, serResult] = useState(null);
//     const [error, setError] = useState(null);

//     useEffect(() => {
//         (async () => {
//             try{
//                 const rest = await fetch(url, options);
//                 console.log(rest);
//                 const json = await rest.json();
//                 setLoading(false);
//                 serResult(json);
//             } catch (err){
//                 setError(err);
//                 setLoading(false);
//             }
//         })();
//       }, [options, url]);
    
//       return { loading, result, error };
//     }