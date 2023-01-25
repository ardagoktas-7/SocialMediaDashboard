import React, {useState, useContext, useEffect} from 'react';
import { useCallback } from 'react';
import * as Papa from "papaparse";

const AppContext = React.createContext();

const AppProvider = ({children}) => {
    const [searchTerm, setSearchTerm] = useState("the lost world");
    const [books, setBooks] = useState([]);
    const [loading, setLoading] = useState(true);
    const [resultTitle, setResultTitle] = useState("");

    const fetchBooks = useCallback(async() => {
        setLoading(true);
        try{
            fetch( `../TwitterAccountList.csv` )
            .then( response => response.text() )
            .then( responseText => {
                // -- parse csv
                const {data} = Papa.parse(responseText);
                console.log('data:', data);
                const labels = data.slice(0,1)
                const values = data.slice(1,data.length)
                const jsonData =labels && values.map((item) => {
                    return {
                        "Full_Name":item[0].toUpperCase(),
                        "Political_Party":item[1],
                        "Party_Short":item[2],
                        "Twitter":item[3],
                        "Notes":item[4],
                        "images":item[5],
                    }
                })

                const filteredNames = jsonData.filter(item => {
                    if(item.Full_Name.indexOf(searchTerm.toUpperCase()) > -1 )
                    {
                        return item;
                    }
                })
                const docs = filteredNames;
                
                if(docs){
                    const newNames = docs.slice(0, 20).map((nameSingle) => {
                        const {Full_Name, Political_Party, Party_Short, Twitter, Notes,images} = nameSingle;
    
                        return {
                            Full_Name: Full_Name,
                            Political_Party: Political_Party,
                            Party_Short: Party_Short,
                            Twitter: Twitter,
                            Notes: Notes,
                            images:images
                        }
                    });
                    console.log(newNames);
                    setBooks(newNames);

                    if(newNames.length > 1){
                        setResultTitle("Your Search Result");
                    } else {
                        setResultTitle("No Search Result Found!")
                    }
                
                
                
                }else {
                    setBooks([]);
                    setResultTitle("No Search Result Found!");
                }
                setLoading(false);
                
            });
            
        } catch(error){
            console.log(error);
            setLoading(false);
        }
    }, [searchTerm]);

    useEffect(() => {
        fetchBooks();
    }, [searchTerm, fetchBooks]);

    return (
        <AppContext.Provider value = {{
            loading, books, setSearchTerm, resultTitle, setResultTitle,
        }}>
            {children}
        </AppContext.Provider>
    )
}

export const useGlobalContext = () => {
    return useContext(AppContext);
}

export {AppContext, AppProvider};