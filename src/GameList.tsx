import { useState } from "react";
import gameData from "./json/data.json";
import { ApiResponse, Game } from "./types/apiTypes";

const apiResponse = gameData as ApiResponse;

export default function GameList() {
  const gameList = apiResponse.results;

  const [selectedOption, setSelectedOption] = useState("");
  const [hoveredGame, setHoveredGame] = useState<Game | null>(null);
  const [playedGame, setPlayedGame] = useState<Game | null>(null);

  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedOption(event.target.value);
  };

  const handleHover = (gameInfo: Game) => {
    setHoveredGame(gameInfo);
  };

  const handleUnhover = () => {
    setHoveredGame(null);
  };

  const sortOption = selectedOption as "name" | "score";

  gameList.sort((g1, g2) => {
    if (sortOption == "name") {
      if (g1.name > g2.name) return 1;
      if (g1.name < g2.name) return -1;
    }

    if (sortOption == "score") {
      if (g1.rating > g2.rating) return -1;
      if (g1.rating < g2.rating) return 1;
    }

    return 0;
  });

  return (
    <div
      style={{
        overflowY: "auto",
        height: "100%",
        background: "#000000",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          padding: "8px",
          gap: "32px",
        }}
      >
        <h4
          style={{
            color: "white",
            fontWeight: "900",
            padding: "16px 12px",
            textAlign: "center",
            fontSize: "24px",
          }}
        >
          New and trending
        </h4>

        <div
          style={{
            background: "black",
            color: "white",
            textAlign: "left",
            direction: "ltr",
          }}
        >
          sort by:
          <select
            style={{
              background: "black",
              color: "white",
              marginLeft: "24px",
            }}
            value={selectedOption}
            onChange={handleSelectChange}
          >
            <option value="score">Score</option>
            <option value="name">Name</option>
          </select>
        </div>

        {/* //https://media.rawg.io/media/stories-640/a31/a3184b28f9920fc2e69094fdcac75ef7.mp4 */}
        <div
          style={{
            background: "#151515",
            borderRadius: "12px",
            overflow: "hidden",
            boxShadow: "rgba(255, 255, 255, 0.35) 0px 5px 15px",
          }}
          className="game-card-medium discover__content__game-card-medium"
        >
          <video
            style={{
              height: "216px",
              width: "100%",
              objectFit: "cover",
            }}
            controls={true}
            src="https://media.rawg.io/media/stories-640/a31/a3184b28f9920fc2e69094fdcac75ef7.mp4"
          />

          <p
            style={{
              color: "white",
              fontWeight: "900",
              padding: "16px 12px",
              textAlign: "left",
            }}
          >
            قشنگترین
          </p>
        </div>

        {gameList.map((gameInfo) => (
          <div
            style={{
              background: "#151515",
              borderRadius: "12px",
              overflow: "hidden",
              boxShadow:
                hoveredGame === gameInfo
                  ? "rgba(255, 255, 255, 0.35) 0px 5px 15px"
                  : "",
              transition: "all 222ms",
              transform: hoveredGame === gameInfo ? "scale(1.03)" : "",
            }}
            className="game-card-medium discover__content__game-card-medium"
            onClick={() => setPlayedGame(gameInfo)}
            onMouseEnter={() => handleHover(gameInfo)}
            onMouseLeave={handleUnhover}
          >
            {playedGame !== gameInfo && (
              <img
                style={{
                  height: "216px",
                  width: "100%",
                  objectFit: "cover",
                }}
                src={
                  hoveredGame === gameInfo
                    ? gameInfo.short_screenshots[
                        Math.floor(
                          Math.random() * gameInfo.short_screenshots.length
                        )
                      ].image
                    : gameInfo.background_image
                }
              />
            )}

            {playedGame === gameInfo && (
              <video
                style={{
                  height: "216px",
                  width: "100%",
                  objectFit: "cover",
                }}
                controls={true}
                src="https://media.rawg.io/media/stories-640/a31/a3184b28f9920fc2e69094fdcac75ef7.mp4"
              />
            )}

            <p
              style={{
                color: "white",
                fontWeight: "900",
                padding: "16px 12px",
                textAlign: "left",
              }}
            >
              {gameInfo.name}
            </p>

            <div
              style={{
                color: "#f0f0f0",
                fontWeight: "400",
                padding: "16px 12px",
                textAlign: "right",
                fontSize: "12px",
              }}
            >
              <p
                style={{
                  textAlign: "left",
                }}
              >
                score:{gameInfo.rating}
              </p>
              <p>{new Date(gameInfo.updated).toDateString()}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
