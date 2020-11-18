console.log("hej");

componentDidMount()

function componentDidMount() {
    console.log("fetch init")
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(data => {
            console.log(data)
            console.log("fetch done")
        })
}