import { useState } from "react";
import "./App.css";

function App() {
    const [count, setCount] = useState(0);

    return (
        <div class="container">
            <div class="post">
                <div class="post-header">
                    <img src="profile-pic.jpg" />
                    <h2>John Doe</h2>
                </div>
                <div class="post-content">
                    <p>
                        Here's my latest post! Lorem ipsum dolor sit amet, consectetur
                        adipiscing elit. Nulla gravida massa ac ipsum blandit, vitae
                        venenatis ex lobortis. Donec id massa enim. Ut dictum urna sit
                        amet posuere ultricies. Sed nec dapibus nulla. Nam rhoncus eros in
                        diam egestas, in aliquam sapien sodales. Integer rutrum, justo id
                        efficitur ullamcorper, turpis magna sollicitudin orci, quis
                        commodo nisl felis vel velit. Sed ultricies quam at sapien
                        lacinia, sed facilisis nisi vulputate. Nulla facilisi. Nam
                        bibendum lorem vel purus rutrum porttitor.
                    </p>
                </div>
                <div class="post-footer">
                    <a href="#">Like</a>
                    <a href="#">Comment</a>
                    <a href="#">Share</a>
                </div>
            </div>
        </div>
    );
}

export default App;
