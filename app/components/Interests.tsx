import { animeRecommendations, interests, manhwaRecommendations } from "../content";
import SectionHeading from "./SectionHeading";
import { RevealGroup, RevealItem, Reveal } from "./Reveal";
import RecommendationPicker from "./RecommendationPicker";

export default function Interests() {
  return (
    <section id="interests" className="section container">
      <SectionHeading
        eyebrow="Interests"
        title="Outside code, I follow visual stories and imaginative worlds."
      />
      <RevealGroup className="interests-grid">
        {interests.map((item) => (
          <RevealItem as="article" className="card interest" key={item.name}>
            <span className="tag">{item.tag}</span>
            <h3>{item.name}</h3>
            <p>{item.summary}</p>
          </RevealItem>
        ))}
      </RevealGroup>
      <Reveal>
        <div className="recommenders">
          <RecommendationPicker
            label="Manhwa roulette"
            items={manhwaRecommendations}
            prompt="Get a manhwa pick"
            title="manhwa"
          />
          <RecommendationPicker
            label="Anime roulette"
            items={animeRecommendations}
            prompt="Get an anime pick"
            title="anime"
          />
        </div>
      </Reveal>
    </section>
  );
}
