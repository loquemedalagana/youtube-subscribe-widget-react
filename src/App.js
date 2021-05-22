import "./styles.css";
import YoutubeSubscribe from "./YoutubeSubscribe";

export default function App() {
  const channelId = "UChNtl7wRLF6x4B4fp7KCyhQ";

  return (
    <div className="App">
      <h1>Hello Youtube Channel Widget!</h1>
      <h2>Please subscribe this channel😙</h2>
      <YoutubeSubscribe channelId={channelId} />
    </div>
  );
}
