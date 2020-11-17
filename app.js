console.log("hej");

componentDidMount()
// async function componentDidMount() {
//     console.log("fetch init")
//     const response = await fetch('https://callook.info/W1AW/json')
//     const data = await response.json()
//     console.log(data)
//     // const posts = [...this.state.posts, ...data]
//     console.log("fetch done")
//   }

   function componentDidMount() {
      console.log("fetch init")
      fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(data => {
          console.log(data)
          console.log("fetch done")
        })
    }