import React, { useState, useEffect }  from "react"

function App() {

    const [dogImg, setDogImg] = useState("")

    useEffect(() => {
        fetch("https://dog.ceo/api/breeds/image/random")
        .then(res => res.json())
        .then(data => setDogImg(data.message))
    }, [])

    if (!dogImg) {
        return (
                <p>Loading...</p>
        )
    }

    else {
        return (
            <img src={dogImg} alt={"A Random Dog"}></img>
        )
    }
    
}

export default App;
