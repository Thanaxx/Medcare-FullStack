import React, {useState} from 'react';
import { NewsContainer, NewsFilter, NewsBox, NewsList} from './NewsStyle';
import { data } from './data';

function Mednews() {

    const [state, setState] = useState(data);

    const HandleBtns = (e) => {
        let word = e.target.value;

        if(word === 'All'){
            setState(data)
        }
        else if(word === 'Covid'){
            const filtered = data.filter(item=>item.news === 'Covid');
            setState(filtered);
        }
        else if(word === 'Vaccine'){
            const filtered = data.filter(item=>item.news === 'Vaccine');
            setState(filtered);
        }
        else if(word === 'Health'){
            const filtered = data.filter(item=>item.news === 'Health');
            setState(filtered);
        }
        else if(word === 'Food'){
            const filtered = data.filter(item=>item.news === 'Food');
            setState(filtered);
        }
        else if(word === 'Death'){
            const filtered = data.filter(item=>item.news === 'Death');
            setState(filtered);
        }
    }


    return (
        <>
           <NewsContainer data-aos='zoom-out'>

                <NewsFilter>
                    <button value="All" onClick={HandleBtns}>All</button>
                    <button value="Covid" onClick={HandleBtns}>Covid</button>
                    <button value="Vaccine" onClick={HandleBtns}>Vaccine</button>
                    <button value="Health" onClick={HandleBtns}>Health</button>
                    <button value="Food" onClick={HandleBtns}>Food</button>
                    <button value="Death" onClick={HandleBtns}>Death</button>
                </NewsFilter>

                <NewsBox>
                    {state.map((item)=> (

                        <NewsList key={item.id} >
                            <img src={item.image} alt="news" />
                            <h4>{item.title}</h4>
                            <h3>{item.date}.</h3>
                            <p>{item.description}</p>
                            <a href={item.path}>{item.link}</a>
                        </NewsList>

                    ))}


                </NewsBox>

            </NewsContainer>
        </>
    )
}

export default Mednews;
