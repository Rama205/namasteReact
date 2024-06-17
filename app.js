

const parent = React.createElement(
    "div",{
        id:"parent"
    },[
        React.createElement(
            "div",{
                id:"child"  
            }, [React.createElement("h1",{id:"tag"},"Hello Im nested element"), 
                React.createElement("h2",{id:"tag"},"Hello Im nested 2element")]
        ),
        React.createElement(
            "div",{
                id:"child2"  
            }, [React.createElement("h1",{id:"tag"},"Hello Im nested 3element"), 
                React.createElement("h2",{id:"tag"},"Hello Im nested 4element")]
        )
    ]
)

console.log(parent)
const heading = React.createElement("h1",{id:"heading"},"Hello From React!");
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
