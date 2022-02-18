import React from "react";
import "./styles.css";
import { useEffect } from "react";
import { useState } from "react";

function PlayGameContainer() {
  //score
  const [score, setScore] = useState(null);

  //stats
  const [wins, setWins] = useState(0);
  const [losses, setLosses] = useState(0);
  const [games, setGames] = useState(0);
  const [careerWins, setcareerWins] = useState(0);
  const [careerLosses, setcareerLosses] = useState(0);
  const [careerPlayoffWins, setcareerPlayoffWins] = useState(0);
  const [careerPlayoffLosses, setcareerPlayoffLosses] = useState(0);

  const [careerWCWins, setcareerWCWins] = useState(0);
  const [careerWCLosses, setcareerWCLosses] = useState(0);
  const [careerDivisionalWins, setcareerDivisionalWins] = useState(0);
  const [careerDivisionalLosses, setcareerDivisionalLosses] = useState(0);
  const [careerConfChampWins, setcareerConfChampWins] = useState(0);
  const [careerConfChampLosses, setcareerConfChampLosses] = useState(0);

  //Super Bowl Host Array cycle through and record by city
  const [count, setCount] = useState(0);
  const [superBowlChamp, setsuperBowlChamp] = useState(false);
  const [superBowlLoser, setsuperBowlLoser] = useState(false);

  const [LABowlWin, setLABowlWin] = useState(0);
  const [LABowlLoss, setLABowlLoss] = useState(0);

  const [PHXBowlWin, setPHXBowlWin] = useState(0);
  const [PHXBowlLoss, setPHXBowlLoss] = useState(0);

  const [NOBowlWin, setNOBowlWin] = useState(0);
  const [NOBowlLoss, setNOBowlLoss] = useState(0);

  const [ATLBowlWin, setATLBowlWin] = useState(0);
  const [ATLBowlLoss, setATLBowlLoss] = useState(0);

  const [TPABowlWin, setTPABowlWin] = useState(0);
  const [TPABowlLoss, setTPABowlLoss] = useState(0);

  const [MIABowlWin, setMIABowlWin] = useState(0);
  const [MIABowlLoss, setMIABowlLoss] = useState(0);

  const [HOUBowlWin, setHOUBowlWin] = useState(0);
  const [HOUBowlLoss, setHOUBowlLoss] = useState(0);

  const [DALBowlWin, setDALBowlWin] = useState(0);
  const [DALBowlLoss, setDALBowlLoss] = useState(0);

  const [INDBowlWin, setINDBowlWin] = useState(0);
  const [INDBowlLoss, setINDBowlLoss] = useState(0);

  const [superBowlWins, setsuperBowlWins] = useState(0);
  const [superBowlLosses, setsuperBowlLosses] = useState(0);

  const [seasons, setSeasons] = useState(1);
  const [playoffBerths, setplayoffBerths] = useState(0);

  //toggle status
  const [inSeason, setinSeason] = useState(true);
  const [playoffs, setPlayoffs] = useState(false);
  const [wildCard, setwildCard] = useState(false);
  const [divisional, setdivisional] = useState(false);
  const [confChamp, setconfChamp] = useState(false);
  const [superBowl, setsuperBowl] = useState(false);
  const [newSeason, setnewSeason] = useState(false);

  //super bowl host cities
  let cities = [
    "Los Angeles",
    "Phoenix",
    "New Orleans",
    "Atlanta",
    "Tampa",
    "Miami",
    "Houston",
    "Dallas",
    "Indianapolis"
  ];

  //season message
  const [seasonBlurb, setseasonBlurb] = useState(null);

  //get each game score
  function getScore() {
    setScore(Math.floor(Math.random() * 100));
  }

  //get super bowl host city
  function superBowlHostCity() {
    let city = cities[count];

    if (count === cities.length) {
      setCount(0);
    }

    return <p>The Super Bowl this year is in {city}.</p>;
  }

  //add wins and losses
  useEffect(() => {
    if (score === null) {
    } else if (score >= 40 && !playoffs) {
      setWins(wins + 1);
      setcareerWins(careerWins + 1);
      setGames(games + 1);
    } else if (score < 40 && !playoffs) {
      setLosses(losses + 1);
      setcareerLosses(careerLosses + 1);
      setGames(games + 1);
    } else if (score > 40 && wildCard) {
      setGames(games + 1);
      setcareerWins(careerWins + 1);
      setcareerPlayoffWins(careerPlayoffWins + 1);
      setcareerWCWins(careerWCWins + 1);
      setseasonBlurb("Wild Card Winner! Play Divisional Round:");
      setdivisional(true);
      setwildCard(false);
    } else if (score < 40 && wildCard) {
      setGames(games + 1);
      setcareerLosses(careerLosses + 1);
      setcareerPlayoffLosses(careerPlayoffLosses + 1);
      setcareerWCLosses(careerWCLosses + 1);
      setseasonBlurb("wild Card loser! Better luck next year!");
      setinSeason(false);
      setnewSeason(true);
    } else if (score > 40 && divisional) {
      setGames(games + 1);
      setcareerWins(careerWins + 1);
      setcareerPlayoffWins(careerPlayoffWins + 1);
      setcareerDivisionalWins(careerDivisionalWins + 1);
      setconfChamp(true);
      setdivisional(false);
      setseasonBlurb("Divisonal round winner! Play Conference Championship!");
    } else if (score < 40 && divisional) {
      setGames(games + 1);
      setcareerLosses(careerLosses + 1);
      setcareerPlayoffLosses(careerPlayoffLosses + 1);
      setcareerDivisionalLosses(careerDivisionalLosses + 1);
      setseasonBlurb("Divisional loser! Better luck next year!");
      setinSeason(false);
      setnewSeason(true);
    } else if (score > 40 && confChamp) {
      setGames(games + 1);
      setcareerWins(careerWins + 1);
      setcareerPlayoffWins(careerPlayoffWins + 1);
      setcareerConfChampWins(careerConfChampWins + 1);
      setsuperBowl(true);
      setconfChamp(false);
      setseasonBlurb("Conf Champs! Play Super Bowl!");
    } else if (score < 40 && confChamp) {
      setGames(games + 1);
      setcareerLosses(careerLosses + 1);
      setcareerPlayoffLosses(careerPlayoffLosses + 1);
      setcareerConfChampLosses(careerConfChampLosses + 1);
      setinSeason(false);
      setnewSeason(true);
      setseasonBlurb("Conf champs loser! Better luck next year!");
    } else if (score > 40 && superBowl) {
      setcareerWins(careerWins + 1);
      setcareerPlayoffWins(careerPlayoffWins + 1);
      setseasonBlurb("Super Bowl Champs!");
      setsuperBowlChamp(true);
      setinSeason(false);
      setnewSeason(true);
      setsuperBowlWins(superBowlWins + 1);
    } else if (score < 40 && superBowl) {
      setcareerLosses(careerLosses + 1);
      setcareerPlayoffLosses(careerPlayoffLosses + 1);
      setsuperBowlLoser(true);
      setseasonBlurb("Super Bowl loser, better luck next year!");
      setsuperBowlLosses(superBowlLosses + 1);
      setinSeason(false);
      setnewSeason(true);
    }
  }, [score]);

  ///end of regular season roundup
  useEffect(() => {
    if (games === 17 && wins >= 14) {
      setdivisional(true);
      setPlayoffs(true);
      setplayoffBerths(playoffBerths + 1);
      setseasonBlurb("Playoff Bound! Play Divisional Round:");
    } else if (games === 17 && wins >= 9 && wins < 14) {
      setwildCard(true);
      setPlayoffs(true);
      setplayoffBerths(playoffBerths + 1);
      setseasonBlurb("Playoff Bound! \n Play Wild Card Round:");
    } else if (games === 17 && wins < 9) {
      setinSeason(false);
      setnewSeason(true);
      setseasonBlurb("Better luck next year!");
    }
  }, [games]);

  //super bowl record by city
  useEffect(() => {
    if (count === 0 && superBowlChamp) {
      setLABowlWin(LABowlWin + 1);
    } else if (count === 0 && superBowlLoser) {
      setLABowlLoss(LABowlLoss + 1);
    } else if (count === 1 && superBowlChamp) {
      setPHXBowlWin(PHXBowlWin + 1);
    } else if (count === 1 && superBowlLoser) {
      setPHXBowlLoss(PHXBowlLoss + 1);
    } else if (count === 2 && superBowlChamp) {
      setNOBowlWin(NOBowlWin + 1);
    } else if (count === 2 && superBowlLoser) {
      setNOBowlLoss(NOBowlLoss + 1);
    } else if (count === 3 && superBowlChamp) {
      setATLBowlWin(ATLBowlWin + 1);
    } else if (count === 3 && superBowlLoser) {
      setATLBowlLoss(ATLBowlLoss + 1);
    } else if (count === 4 && superBowlChamp) {
      setTPABowlWin(TPABowlWin + 1);
    } else if (count === 4 && superBowlLoser) {
      setTPABowlLoss(TPABowlLoss + 1);
    } else if (count === 5 && superBowlChamp) {
      setMIABowlWin(MIABowlWin + 1);
    } else if (count === 5 && superBowlLoser) {
      setMIABowlLoss(MIABowlLoss + 1);
    } else if (count === 6 && superBowlChamp) {
      setHOUBowlWin(HOUBowlWin + 1);
    } else if (count === 6 && superBowlLoser) {
      setHOUBowlLoss(HOUBowlLoss + 1);
    } else if (count === 7 && superBowlChamp) {
      setDALBowlWin(DALBowlWin + 1);
    } else if (count === 7 && superBowlLoser) {
      setDALBowlLoss(DALBowlLoss + 1);
    } else if (count === 8 && superBowlChamp) {
      setINDBowlWin(INDBowlWin + 1);
    } else if (count === 8 && superBowlLoser) {
      setINDBowlLoss(INDBowlLoss + 1);
    }
  }, [superBowlWins, superBowlLosses]);

  function handleClick() {
    getScore();
  }

  function startOverButton() {
    if (newSeason) {
      return <button onClick={startOver}>Start next season</button>;
    } else {
    }
  }

  function playGame() {
    if (inSeason) {
      return <button onClick={handleClick}>Play Game</button>;
    }
  }

  function startOver() {
    setWins(0);
    setLosses(0);
    setGames(0);
    setSeasons(seasons + 1);
    setPlayoffs(false);
    setnewSeason(false);
    setScore(null);
    setinSeason(true);
    setwildCard(false);
    setdivisional(false);
    setconfChamp(false);
    setsuperBowl(false);
    setseasonBlurb(null);
    setsuperBowlChamp(false);
    setsuperBowlLoser(false);
    setCount(count + 1);
  }

  return (
    <div class="App">
      <h3 class="Title">
        Coin Toss Football...where every game is a...flip of the coin...
      </h3>

      {/*play single game//*/}
      <div class="RegularSeason">
        <p style={{ fontWeight: "bold" }}>Season: {seasons}</p>

        <p>{seasonBlurb}</p>
        <p>{playGame()}</p>
        <p>Week: {games}</p>
        <p>Wins: {wins}</p>
        <p>Losses: {losses}</p>
        <p>{superBowlHostCity()}</p>
        <p>{startOverButton()}</p>
      </div>

      <p class="CareerStatsHead">
        <h4>Career Stats:</h4>
      </p>

      <div class="CareerStats">
        <h5>Career Record:</h5>
        <p>Career Wins: {careerWins}</p>
        <p>Career Losses: {careerLosses}</p>
        <p>Playoff Berths: {playoffBerths}</p>

        <h5>Career Playoff Record: </h5>
        <p>Playoff Wins: {careerPlayoffWins}</p>
        <p>Playoff Losses: {careerPlayoffLosses}</p>
        <p>Super Bowl Titles: {superBowlWins}</p>
        <p>Super Bowl Losses: {superBowlLosses}</p>
      </div>

      <div class="AddtlCareerStats">
        <h4>Additional Playoff Stats:</h4>
        <h5>Conference Championship Round: </h5>
        <p>Wins: {careerConfChampWins} </p>
        <p>Losses: {careerConfChampLosses} </p>

        <h5>Divisional Round: </h5>
        <p>Wins: {careerDivisionalWins} </p>
        <p>Losses: {careerDivisionalLosses} </p>

        <h5>Wild Card Round: </h5>
        <p>Wins: {careerWCWins} </p>
        <p>Losses: {careerWCLosses} </p>
      </div>

      <div class="SuperBowlCityRecord">
        <h5>Super Bowl record by host city</h5>
        <p>
          Los Angeles: {LABowlWin} : {LABowlLoss}
        </p>
        <p>
          Phoenix: {PHXBowlWin} : {PHXBowlLoss}
        </p>
        <p>
          New Orleans: {NOBowlWin} : {NOBowlLoss}
        </p>
        <p>
          Atlanta: {ATLBowlWin} : {ATLBowlLoss}
        </p>
        <p>
          Tampa: {TPABowlWin} : {TPABowlLoss}
        </p>
        <p>
          Miami: {MIABowlWin} : {MIABowlLoss}
        </p>
        <p>
          Houston: {HOUBowlWin} : {HOUBowlLoss}
        </p>
        <p>
          Dallas: {DALBowlWin} : {DALBowlLoss}
        </p>
        <p>
          Indianapolis: {INDBowlWin} : {INDBowlLoss}
        </p>
      </div>
    </div>
  );
}

export default class Game extends React.Component {
  render() {
    return <PlayGameContainer />;
  }
}
