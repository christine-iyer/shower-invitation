import React, { useEffect, useState } from "react";
import * as d3 from "d3";

const MapsPage = () => {
  const statePopulation = {
  'Alabama': 4903185,
  'Alaska': 731545,
  'Arizona': 7278717,
  'Arkansas': 3017804,
  'California': 39512223,
  'Colorado': 5758736,
  'Connecticut': 3565287,
  'Delaware': 973764,
  'District of Columbia': 705749,
  'Florida': 21477737,
  'Georgia': 10617423,
  'Hawaii': 1415872,
  'Idaho': 1787065,
  'Illinois': 12671821,
  'Indiana': 6732219,
  'Iowa': 3155070,
  'Kansas': 2913314,
  'Kentucky': 4467673,
  'Louisiana': 4648794,
  'Maine': 1344212,
  'Maryland': 6045680,
  'Massachusetts': 6892503,
  'Michigan': 9986857,
  'Minnesota': 5639632,
  'Mississippi': 2976149,
  'Missouri': 6137428,
  'Montana': 1068778,
  'Nebraska': 1934408,
  'Nevada': 3080156,
  'New Hampshire': 1359711,
  'New Jersey': 8882190,
  'New Mexico': 2096829,
  'New York': 19453561,
  'North Carolina': 10488084,
  'North Dakota': 762062,
  'Ohio': 11689100,
  'Oklahoma': 3956971,
  'Oregon': 4217737,
  'Pennsylvania': 12801989,
  'Rhode Island': 1059361,
  'South Carolina': 5148714,
  'South Dakota': 884659,
  'Tennessee': 6829174,
  'Texas': 28995881,
  'Utah': 3205958,
  'Vermont': 623989,
  'Virginia': 8535519,
  'Washington': 7614893,
  'West Virginia': 1792147,
  'Wisconsin': 5822434,
  'Wyoming': 578759}
  const stateClosingTimes = [
    {
      "State": "Alabama",
      "ClosingTime": "8:00:00 PM",
      "ElectoralVotes": 9,
      "TimeSixteen": "8:26:00 PM",
      "DaySixteen": "11/8/2016",
      "WinnerSixteen": "Trump R",
      "TimeTwenty": "8:00:00 PM",
      "DayTwenty": "11/3/2020",
      "WinnerTwenty": "Trump R",
      "Zone": "Central Time Zone", 
      "Abbreviation": "AL",
      "HouseNotes": "D-2 Shomari Figures(D) and Caroleene Dobson(R) The fight to represent Alabama’s second congressional district is particularly interesting. The district has been dominated by Republicans for the past six decades - but the US Supreme Court ordered it to be redrawn last year. In its ruling, the nation’s top court concluded that the southern state’s congressional map had likely been drawn in a discriminatory manner, concentrating black voters into just one of its seven districts. The redrawn district is now majority black and it has set the stage for a highly competitive race between two lawyers and political newcomers. ",
      "SenateNotes": " ",
      "AbortionOnBallot": "No",
      "Anticipated Call": "11/05/2024 08:00:00 PM"
    },
    {
      "State": "Alaska",
      "ClosingTime": "1:00:00 AM",
      "ElectoralVotes": 3,
      "TimeSixteen": "11:58:00 PM",
      "DaySixteen": "11/9/2016",
      "WinnerSixteen": "Trump R",
      "TimeTwenty": "11:59:00 PM",
      "DayTwenty": "11/11/2020",
      "WinnerTwenty": "Trump R",
      "Zone": "Hawaii-Aleutian Time Zone",
      "Abbreviation": "AK",
      "HouseNotes": "AK at-large 	Mary Peltola(D) Eric Hafner(D) Nicholas Begich(R) John Howe(Alaskan Independence Party) Lady Donna Dutchess(Nonpartisan)(Write-in). Can't wait for this one.",
      "SenateNotes": " ",
      "AbortionOnBallot": "No",
      "Anticipated Call": "11/06/2024 12:00:00 AM"
    },
    {
      "State": "Arizona",
      "ClosingTime": "9:00:00 PM",
      "ElectoralVotes": 11,
      "TimeSixteen": "11/9/2016",
      "DaySixteen": "3:43:00 AM",
      "WinnerSixteen": "Trump R",
      "TimeTwenty": "2:51:00 AM",
      "DayTwenty": "11/4/2020",
      "WinnerTwenty": "Biden D",
      "Zone": "Mountain Time Zone", 
      "Abbreviation": "AZ",
      "HouseNotes": "D-1 Amish Shah(D) David Schweikert(R) D-6 Kirsten Engel(D) Juan Ciscomani(R)",
      "SenateNotes": "Ruben Gallego(D) Kari Lake (R), Democratic Rep. Ruben Gallego and Republican Kari Lake are duking it out for Sen. Kyrsten Sinema's seat in the upper chamber, after the first-term independent opted not to seek reelection, facing an uphill climb in the battleground state. Gallego, 44, is a former Marine who was first elected to the House in 2014 and represents a district that includes parts of Phoenix and Glendale. The progressive lawmaker has worked to court voters in the middle, while Lake, who narrowly lost a hard-right campaign for governor in 2022, has worked to do the same. Lake, 55, is a former news anchor and close ally of former President Donald Trump. She has been a vocal election denier regarding the outcome of  both her gubernatorial race and Trump's 2020 matchup against President Biden. But Lake has tried to reel in her message during the Senate campaign, albeit inconsistently, earning the backing of the party's reluctant establishment along the way. The Cook Political Report ranks the race as leaning toward Democrats. Before Sen. Kyrsten Sinema won her Senate race in 2018, a Democrat hadn't won a Senate seat in Arizona in three decades. Sinema left the Democratic Party in 2022.",
      "AbortionOnBallot": "Yes. Proposition 139.",
      "Anticipated Call": "11/06/2024 03:00:00 AM"
    },
    {
      "State": "Arkansas",
      "ClosingTime": "8:30:00 PM",
      "ElectoralVotes": 6,
      "TimeSixteen": "9:08:00 PM",
      "DaySixteen": "11/8/2016",
      "WinnerSixteen": "Trump R",
      "TimeTwenty": "8:30:00 PM",
      "DayTwenty": "11/3/2020",
      "WinnerTwenty": "Trump R",
      "Zone": "Central Time Zone", 
      "Abbreviation": "AR",
      "HouseNotes": " ",
      "SenateNotes": " ",
      "AbortionOnBallot": "No",
      "Anticipated Call": "11/05/2024 09:00:00 PM"
    },
    {
      "State": "California",
      "ClosingTime": "11:00:00 PM",
      "ElectoralVotes": 54,
      "TimeSixteen": "11:00:00 PM",
      "DaySixteen": "11/8/2016",
      "WinnerSixteen": "Clinton D",
      "TimeTwenty": "11:00:00 PM",
      "DayTwenty": "11/3/2020",
      "WinnerTwenty": "Biden D",
      "Zone": "Pacific Time Zone", 
      "Abbreviation": "CA",
      "HouseNotes": "D-45 Derek Tran(D) Michelle Steel(R), The other big prize on Tuesday is California, which is home to at least a half dozen highly competitive races, four of them GOP-held seats that Biden would have carried with relative ease in 2020 and another he would have lost by only a single point. Harris’ ascension to the top of the Democratic ticket could give her party a home-state boost, though Republicans, as noted above, see Trump improving his standing in states such as California and New York, which are not competitive at the presidential level despite the former president’s pronouncements to the contrary. One of the best barometers of the political environment in California is the 45th District, based in Orange and Los Angeles counties, with a constituency that is nearly 40% Asian American and more than 30% Latino. The seat is currently held by GOP Rep. Michelle Steel, a Korean immigrant first elected in 2020, who is facing off against Democrat Derek Tran, a US Army veteran and first-generation Vietnamese American. Orange County has signaled the political shifts of the Trump era, with Democrats making gains there during the 2018 midterms but losing ground two years later as the GOP clawed back House seats despite the president’s loss. Another point to keep in mind: If the majority comes down to California, the country could be waiting a while as the state takes time to count ballots.",
      "SenateNotes": "Adam Schiff(D) Steve Garvey(R)",
      "AbortionOnBallot": "No",
      "Anticipated Call": "11/05/2024 11:00:00PM"
    },
    {
      "State": "Colorado",
      "ClosingTime": "9:00:00 PM",
      "ElectoralVotes": 10,
      "TimeSixteen": "10:43:00 PM",
      "DaySixteen": "11/8/2016",
      "WinnerSixteen": "Clinton D",
      "TimeTwenty": "9:37:00 PM",
      "DayTwenty": "11/3/2020",
      "WinnerTwenty": "Biden D",
      "Zone": "Mountain Time Zone", 
      "Abbreviation": "CO",
      "HouseNotes": "D-8 Both parties have vulnerable freshman members running for the first time in a presidential cycle, bringing a fresh set of dynamics from the 2022 midterms with a more intense mix of national political crosscurrents. Yadira Caraveo (D), a pediatrician and former state legislator, won a newly created seat in the northern suburbs and exurbs of Denver after Colorado gained a seat following the once-in-a-decade census count – becoming the first Latina elected to Congress from the state. This year she faces a challenge from GOP state Rep. Gabe Evans, a fellow Mexican American and a former Army helicopter pilot and police officer. Immigration and border security have been front and center in this race, with Trump shining a national spotlight on the Denver suburb of Aurora in the neighboring 6th District during a recent visit, where Evans also spoke. The 8th District, where nearly 40% of the residents are Latino, could be a place where Trump’s gains with that group of voters might have some down-ballot impact. In a sign of its competitiveness, nearly $32 million has been poured into the race since early September, with Democrats outpacing Republicans by $6 million. ",
      "SenateNotes": " ",
      "AbortionOnBallot": "Yes. Amendment 79. Coloradans are voting on a proposed constitutional amendment that would repeal the state’s ban on public funding for abortions, which bars state employees or residents on Medicaid from having abortions covered by insurance. It’s on the ballot as Amendment 79. Constitutional amendments require a 55 percent supermajority to pass in Colorado.",
      "Anticipated Call": "11/05/2024 10:00:00 PM"
    },
    {
      "State": "Connecticut",
      "ClosingTime": "8:00:00 PM",
      "ElectoralVotes": 7,
      "TimeSixteen": "9:26:00 PM",
      "DaySixteen": "11/8/2016",
      "WinnerSixteen": "Clinton D",
      "TimeTwenty": "8:00:00 PM",
      "DayTwenty": "11/3/2020",
      "WinnerTwenty": "Biden D",
      "Zone": "Eastern Time Zone", 
      "Abbreviation": "CT",
      "HouseNotes": " ",
      "SenateNotes": "Chris Murphy(D) Matt Corey(R)",
      "AbortionOnBallot": "No",
      "Anticipated Call": "11/05/2024 08:00:00 PM"
    },
    {
      "State": "Delaware",
      "ClosingTime": "8:00:00 PM",
      "ElectoralVotes": 3,
      "TimeSixteen": "8:00:00 PM",
      "DaySixteen": "11/8/2016",
      "WinnerSixteen": "Clinton D",
      "TimeTwenty": "8:00:00 PM",
      "DayTwenty": "11/3/2020",
      "WinnerTwenty": "Biden D",
      "Zone": "Eastern Time Zone", 
      "Abbreviation": "DE",
      "HouseNotes": " ",
      "SenateNotes": "Lisa Blunt Rochester(D) Eric Hansen(R)",
      "AbortionOnBallot": "No",
      "Anticipated Call": "11/05/2024 08:00:00 PM"
    },
    {
      "State": "District of Columbia",
      "ClosingTime": "8:00:00 PM",
      "ElectoralVotes": 3,
      "TimeSixteen": "8:00:00 PM",
      "DaySixteen": "11/8/2016",
      "WinnerSixteen": "Clinton D",
      "TimeTwenty": "9:27:00 PM",
      "DayTwenty": "11/3/2020",
      "WinnerTwenty": "Biden D",
      "Zone": "Eastern Time Zone", 
      "Abbreviation": "DC",
      "HouseNotes": " ",
      "SenateNotes": " ",
      "AbortionOnBallot": "No",
      "Anticipated Call": "11/05/2024 09:00:00 PM"
    },
    {
      "State": "Florida",
      "ClosingTime": "8:00:00 PM",
      "ElectoralVotes": 30,
      "TimeSixteen": "10:50:00 PM",
      "DaySixteen": "11/8/2016",
      "WinnerSixteen": "Trump R",
      "TimeTwenty": "12:35:00 AM",
      "DayTwenty": "11/4/2020",
      "WinnerTwenty": "Trump R",
      "Zone": "Central Time Zone", 
      "Abbreviation": "FL",
      "HouseNotes": " ",
      "SenateNotes": "Debbie Mucarsel-Powell(D) Rick Scott(R)",
      "AbortionOnBallot": "Yes. Amendment 4.",
      "Anticipated Call": "11/06/2024 12:00:00 AM"
    },
    {
      "State": "Georgia",
      "ClosingTime": "7:00:00 PM",
      "ElectoralVotes": 16,
      "TimeSixteen": "11:33:00 PM",
      "DaySixteen": "11/8/2016",
      "WinnerSixteen": "Trump R",
      "TimeTwenty": "11:59:00 PM",
      "DayTwenty": "11/19/2020",
      "WinnerTwenty": "Biden D",
      "Zone": "Eastern Time Zone", 
      "Abbreviation": "GA",
      "HouseNotes": " ",
      "SenateNotes": " ",
      "AbortionOnBallot": "No",
      "Anticipated Call": "11/05/2024 08:00:00 PM"
    },
    {
      "State": "Hawaii",
      "ClosingTime": "12:00:00 AM",
      "ElectoralVotes": 4,
      "TimeSixteen": "11:00:00 PM",
      "DaySixteen": "11/8/2016",
      "WinnerSixteen": "Clinton D",
      "TimeTwenty": "12:06:00 AM",
      "DayTwenty": "11/4/2020",
      "WinnerTwenty": "Biden D",
      "Zone": "Hawaii-Aleutian Time Zone", 
      "Abbreviation": "HI",
      "HouseNotes": " ",
      "SenateNotes": "Mazie Horono(D) Bob McDermott(R)",
      "AbortionOnBallot": "No",
      "Anticipated Call": "11/06/2024 12:00:00 AM"
    },
    {
      "State": "Idaho",
      "ClosingTime": "11:00:00 PM",
      "ElectoralVotes": 4,
      "TimeSixteen": "11:00:00 PM",
      "DaySixteen": "11/8/2016",
      "WinnerSixteen": "Trump R",
      "TimeTwenty": "11:00:00 PM",
      "DayTwenty": "11/3/2020",
      "WinnerTwenty": "Trump R",
      "Zone": "Pacific Time Zone", 
      "Abbreviation": "ID",
      "HouseNotes": " ",
      "SenateNotes": " ",
      "AbortionOnBallot": "No",
      "Anticipated Call": "11/05/2024 10:00:00 PM"
    },
    {
      "State": "Illinois",
      "ClosingTime": "8:00:00 PM",
      "ElectoralVotes": 19,
      "TimeSixteen": "8:58:00 PM",
      "DaySixteen": "11/8/2016",
      "WinnerSixteen": "Clinton D",
      "TimeTwenty": "8:00:00 PM",
      "DayTwenty": "11/3/2020",
      "WinnerTwenty": "Biden D",
      "Zone": "Central Time Zone", 
      "Abbreviation": "IL",
      "HouseNotes": " ",
      "SenateNotes": " ",
      "AbortionOnBallot": "No",
      "Anticipated Call": "11/05/2024 09:00:00 PM"
    },
    {
      "State": "Indiana",
      "ClosingTime": "7:00:00 PM",
      "ElectoralVotes": 11,
      "TimeSixteen": "7:00:00 PM",
      "DaySixteen": "11/8/2016",
      "WinnerSixteen": "Trump R",
      "TimeTwenty": "8:52:00 PM",
      "DayTwenty": "11/3/2020",
      "WinnerTwenty": "Trump R",
      "Zone": "Central Time Zone", 
      "Abbreviation": "IN",
      "HouseNotes": " ",
      "SenateNotes": "Valerie McCray(D) Jim Banks(R)",
      "AbortionOnBallot": "No",
      "Anticipated Call": "11/05/2024 09:00:00 PM"
    },
    {
      "State": "Iowa",
      "ClosingTime": "9:00:00 PM",
      "ElectoralVotes": 6,
      "TimeSixteen": "12:00:00 AM",
      "DaySixteen": "11/9/2016",
      "WinnerSixteen": "Trump R",
      "TimeTwenty": "12:21:00 AM",
      "DayTwenty": "11/4/2020",
      "WinnerTwenty": "Trump R",
      "Zone": "Central Time Zone", 
      "Abbreviation": "IA",
      "HouseNotes": "D-3, Since Trump’s emergence as the leader of the GOP almost a decade ago, the suburbs have been sliding away from Republicans. One of the key questions animating the 2024 election is whether that erosion has stopped – or at the very least been slowed. The answer could be a determining factor in several House races, where Republican incumbents are hoping to avoid headwinds stirred by the former president among suburban voters. Iowa’s 3rd District – home to Des Moines and its suburbs – is one place to keep an eye on for signs of how Trump is faring and the potential impact on down-ballot contests. In 2016, Trump won Dallas County, west of Des Moines, by nearly 10 points. His margin there shrunk to just 2 points against Biden. GOP Rep. Zach Nunn, an Air Force officer, was first elected in 2022 – defeating Democratic Rep. Cindy Axne by about 2,000 votes. He’s running against Lanon Baccam, the son of refugees from Laos who is also a combat veteran and former official in the US Department of Agriculture. If Harris can expand the Democratic Party’s sway in the suburbs, this is a “reach” seat that could be in play for the party on Tuesday.",
      "SenateNotes": " ",
      "AbortionOnBallot": "No",
      "Anticipated Call": "11/06/2024 12:00:00 AM"
    },
    {
      "State": "Kansas",
      "ClosingTime": "9:00:00 PM",
      "ElectoralVotes": 6,
      "TimeSixteen": "9:00:00 PM",
      "DaySixteen": "11/8/2016",
      "WinnerSixteen": "Trump R",
      "TimeTwenty": "9:59:00 PM",
      "DayTwenty": "11/3/2020",
      "WinnerTwenty": "Trump R",
      "Zone": "Mountain Time Zone", 
      "Abbreviation": "KS",
      "HouseNotes": " ",
      "SenateNotes": " ",
      "AbortionOnBallot": "No",
      "Anticipated Call": "11/05/2024 09:00:00 PM"
    },
    {
      "State": "Kentucky",
      "ClosingTime": "7:00:00 PM",
      "ElectoralVotes": 8,
      "TimeSixteen": "7:00:00 PM",
      "DaySixteen": "11/8/2016",
      "WinnerSixteen": "Trump R",
      "TimeTwenty": "7:00:00 PM",
      "DayTwenty": "11/3/2020",
      "WinnerTwenty": "Trump R",
      "Zone": "Central Time Zone", 
      "Abbreviation": "KY",
      "HouseNotes": " ",
      "SenateNotes": " ",
      "AbortionOnBallot": "No",
      "Anticipated Call": "11/05/2024 07:00:00 PM"
    },
    {
      "State": "Louisiana",
      "ClosingTime": "9:00:00 PM",
      "ElectoralVotes": 8,
      "TimeSixteen": "9:28:00 PM",
      "DaySixteen": "11/8/2016",
      "WinnerSixteen": "Trump R",
      "TimeTwenty": "9:00:00 PM",
      "DayTwenty": "11/3/2020",
      "WinnerTwenty": "Trump R",
      "Zone": "Central Time Zone", 
      "Abbreviation": "LA",
      "HouseNotes": " ",
      "SenateNotes": " ",
      "AbortionOnBallot": "No",
      "Anticipated Call": "11/05/2024 09:00:00 PM"
    },
    {
      "State": "Maine",
      "ClosingTime": "8:00:00 PM",
      "ElectoralVotes": 4,
      "TimeSixteen": "1:56:00 AM",
      "DaySixteen": "11/8/2016",
      "WinnerSixteen": "Clinton D3/Trump R1",
      "TimeTwenty": "3:06:00 AM",
      "DayTwenty": "11/4/2020",
      "WinnerTwenty": "Biden D",
      "Zone": "Eastern Time Zone", 
      "Abbreviation": "ME",
      "HouseNotes": "D2-The Trump crossover seat,  Jared Golden (D)Democratic Rep. Jared Golden has crafted a moderate profile by challenging his party on issues ranging from spending to immigration. The tattooed 42-year-old Marine Corps veteran has distanced himself from Harris, declining to endorse the Democratic nominee, an acknowledgement that he will need to appeal to Trump voters in a district the GOP nominee would have won by 6 points four years ago and is favored to carry again. Golden’s opponent is the Trump-endorsed Austin Theriault, a 30-year-old state representative and former NASCAR driver, who Republicans hope will be able to appeal across the massive, mostly rural district, which stretches from rocky shorelines in the south all the way north to the state’s border with Canada. Gun control has emerged as a key issue in the race after Golden reversed his opposition to an assault weapons ban following the 2023 mass shooting in Lewiston – the district’s biggest city – that killed 18 people. Theriault has accused his Democratic rival of having “flip-flopped on the Second Amendment. Another potential wild card is Maine’s use of ranked-choice voting, which could come into play if neither candidate receives a majority of votes on Election Day with an independent candidate running a write-in campaign. More than $34 million has been poured into the race since early September, with Democrats outpacing Republicans by nearly $3 million, according to data from AdImpact. ",
      "SenateNotes": "Angus King(I) Demi Kouzounas(R). I am Demi Kouzounas and I approve this message beCause I'M RUN-NING Feh YYOOUU!",
      "AbortionOnBallot": "No",
      "Anticipated Call": "11/06/2024 02:00:00 AM"
    },
    {
      "State": "Maryland",
      "ClosingTime": "8:00:00 PM",
      "ElectoralVotes": 10,
      "TimeSixteen": "8:00:00 PM",
      "DaySixteen": "11/8/2016",
      "WinnerSixteen": "Clinton D",
      "TimeTwenty": "8:00:00 PM",
      "DayTwenty": "11/3/2020",
      "WinnerTwenty": "Biden D",
      "Zone": "Eastern Time Zone", 
      "Abbreviation": "MD",
      "HouseNotes": " ",
      "SenateNotes": "Angela Alsobrooks(D) Gov. Larry Hogan(R) are facing off in a race that's grown unexpectedly competitive in deep-blue Maryland. The race kicked off after Sen. Ben Cardin announced last year that he would retire, teeing up what was expected to be an easy Democratic victory in the state. But Hogan's late entrance into the race cast that victory into question, making a GOP flip of the seat possible. The popular Republican governor, who served from 2015 to 2023, has widespread name recognition in the state and left office with high approval ratings. He's often set himself apart from his party, being known to criticize former President Donald Trump. And he's campaigned on working across the aisle for Marylanders, while pledging to be a pro-choice Republican. Meanwhile, Democratic groups have highlighted across the airwaves Hogan's past statements personally opposing abortion and his decision to veto legislation as governor that would have expanded abortion access in Maryland. A victory by Hogan, 68, would mark the first time a Republican has won a Maryland Senate seat in nearly four decades. Alsobrooks, a former prosecutor, and her campaign have emphasized that despite Hogan's bipartisan framing, the seat could dictate control of the Senate, and with it, the ability to spearhead any Democratic priorities. Alsobrooks, 53, would be the first Black woman to represent the state in the Senate, and the fourth Black woman to serve in the Senate in its history. The Cook Political Report has rated the race as a likely win for Democrats.",
      "AbortionOnBallot": "Yes. Question 1.",
      "Anticipated Call": "11/05/2024 08:00:00 PM"
    },
    {
      "State": "Massachusetts",
      "ClosingTime": "8:00:00 PM",
      "ElectoralVotes": 11,
      "TimeSixteen": "8:00:00 PM",
      "DaySixteen": "11/8/2016",
      "WinnerSixteen": "Clinton D",
      "TimeTwenty": "8:00:00 PM",
      "DayTwenty": "11/3/2020",
      "WinnerTwenty": "Biden D",
      "Zone": "Eastern Time Zone", 
      "Abbreviation": "MA",
      "HouseNotes": " ",
      "SenateNotes": "Elizabeth Warren(D) John Deaton(R)",
      "AbortionOnBallot": "No",
      "Anticipated Call": "11/05/2024 08:00:00 PM"
    },
    {
      "State": "Michigan",
      "ClosingTime": "9:00:00 PM",
      "ElectoralVotes": 15,
      "TimeSixteen": "2:00:00 PM",
      "DaySixteen": "11/28/2016",
      "WinnerSixteen": "Trump R",
      "TimeTwenty": "5:58:00 PM",
      "DayTwenty": "11/4/2020",
      "WinnerTwenty": "Biden D",
      "Zone": "Central Time Zone", 
      "Abbreviation": "MI",
      "HouseNotes": "Rep. Elissa Slotkin's (D) decision to run for the US Senate in Michigan opened up this Lansing-based seat as a prime pickup opportunity for Republicans in a district Biden would have carried by less than a point in 2020. The race between Curtis Hertel (D) and Tom Barrett (R)– two former state senators – has drawn nearly $37 million in ad spending since early September, the second most of any House race in the country, according to AdImpact data. Barrett, a retired Army helicopter pilot, ran against Slotkin in 2022, losing to the well-known and well-financed incumbent by more than 5 points. While Hertel offers a different resume than Slotkin, a former CIA officer, he has ties to Gretchen Whitmer, Michigan’s popular Democratic governor, and comes from a family with political roots in the state. The neighboring 8th district, where longtime Democratic Rep. Dan Kildee is retiring, is another open-seat target for Republicans, with the party eyeing both Central Michigan races as opportunities to possibly expand its slim majority or offset losses by GOP incumbents elsewhere on the map. Michigan hasn't elected a Republican to the Senate in three decades. But this year's contest is considered among the most competitive of the cycle, with the Cook Political Report rating the race as a toss-up. A CBS News poll showed Slotkin leading in September.",
      "SenateNotes": "Elissa Slotkin (D) Mike Rogers (R), In Michigan, former Republican Rep. Mike Rogers and Democratic Rep. Elissa Slotkin are vying for Sen. Debbie Stabenow's long-held seat in the upper chamber. Slotkin, 48, has represented Michigan's 7th District in the House since 2019. The former CIA officer worked in national security-focused posts in both the Bush and Obama administrations and has touted her work across the aisle as a moderate Democrat. The Republican nominee, Rogers, is an Army veteran who represented Michigan's 8th District in the House from 2001 to 2015, and he led the House Intelligence Committee during his last four years in the lower chamber. The 61-year-old also previously worked as an FBI agent and has campaigned on returning to Washington to fix what he sees as the shortcomings of the current administration.   ",
      "AbortionOnBallot": "No",
      "Anticipated Call": "11/06/2024 06:00:00 PM"
    },
    {
      "State": "Minnesota",
      "ClosingTime": "9:00:00 PM",
      "ElectoralVotes": 10,
      "TimeSixteen": "11:09:00 AM",
      "DaySixteen": "11/9/2016",
      "WinnerSixteen": "Clinton D",
      "TimeTwenty": "12:13:00 AM",
      "DayTwenty": "11/4/2020",
      "WinnerTwenty": "Biden D",
      "Zone": "Central Time Zone", 
      "Abbreviation": "MI",
      "HouseNotes": "No.",
      "SenateNotes": "Amy Klobuchar(D) Royce White(R)",
      "AbortionOnBallot": "No",
      "Anticipated Call": "11/06/2024 12:00:00 AM"
    },
    {
      "State": "Mississippi",
      "ClosingTime": "8:00:00 PM",
      "ElectoralVotes": 6,
      "TimeSixteen": "8:11:00 PM",
      "DaySixteen": "11/8/2016",
      "WinnerSixteen": "Trump R",
      "TimeTwenty": "8:00:00 PM",
      "DayTwenty": "11/3/2020",
      "WinnerTwenty": "Trump R",
      "Zone": "Central Time Zone", 
      "Abbreviation": "MS",
      "HouseNotes": "No.",
      "SenateNotes": "Ty Pinkins(D) Roger Wicker(R)",
      "AbortionOnBallot": "No",
      "Anticipated Call": "11/05/2024 08:00:00 PM"
    },
    {
      "State": "Missouri",
      "ClosingTime": "8:00:00 PM",
      "ElectoralVotes": 10,
      "TimeSixteen": "10:25:00 PM",
      "DaySixteen": "11/8/2016",
      "WinnerSixteen": "Trump R",
      "TimeTwenty": "10:31:00 PM",
      "DayTwenty": "11/3/2020",
      "WinnerTwenty": "Trump R",
      "Zone": "Central Time Zone", 
      "Abbreviation": "MO",
      "HouseNotes": "Amendment 3",
      "SenateNotes": "Lucas Kunce(D) Josh Hawley(R-Faggot)",
      "AbortionOnBallot": "Yes",
      "Anticipated Call": "11/05/2024 10:00:00 PM"
    },
    {
      "State": "Montana",
      "ClosingTime": "10:00:00 PM",
      "ElectoralVotes": 4,
      "TimeSixteen": "10:00:00 PM",
      "DaySixteen": "11/8/2016",
      "WinnerSixteen": "Trump R",
      "TimeTwenty": "12:20:00 AM",
      "DayTwenty": "11/4/2020",
      "WinnerTwenty": "Trump R",
      "Zone": "Mountain Time Zone", 
      "Abbreviation": "MT",
      "HouseNotes": " ",
      "SenateNotes": "Jon Tester(D) Tim Sheehy(R), Considered among the most endangered Democrats this cycle, Sen. Jon Tester is fighting to keep the Senate seat he's held for nearly two decades. And although he's fended off previous challenges as a moderate in deep-red Montana, the state's shifting demographic has Republicans feeling optimistic about their pickup opportunity in the Big Sky State. Tim Sheehy, a former Navy SEAL and founder of an aerial firefighting company, is facing off against Tester and has tried to draw a contrast as an outsider, while painting Tester as an establishment candidate with deep ties to Washington. But Sheehy, 38, has faced criticism for lacking the roots that Tester has in the state, along with discrepancies in his story of how he sustained a gunshot wound. For Tester, 68, the influx of new residents in the state, made up largely of Republicans, has posed trouble for the only Democrat serving in statewide office in Montana, and adds to a dominant showing by the GOP in the state in the last two elections, where Tester bucked trends by hanging onto his seat. But whether he can withstand the GOP headwinds this year remains to be seen, with the Cook Political Report ranking the race as lean Republican.",
      "AbortionOnBallot": "Yes. CI-128.",
      "Anticipated Call": "11/05/2024 11:00:00 PM"
    },
    {
      "State": "Nebraska",
      "ClosingTime": "9:00:00 PM",
      "ElectoralVotes": 5,
      "TimeSixteen": "9:00:00 PM",
      "DaySixteen": "11/8/2016",
      "WinnerSixteen": "Trump R",
      "TimeTwenty": "9:00:00 PM",
      "DayTwenty": "11/3/2020",
      "WinnerTwenty": "Trump R",
      "Zone": "Mountain Time Zone", 
      "Abbreviation": "NE",
      "HouseNotes": "D-2, Tony Vargas (D) Don Bacon(R) the Biden crossover seat. to GOP Rep. Don Bacon(R), a centrist retired Air Force officer who has been a top target for Democrats ever since he flipped the district in 2016, defeating Rep. Brad Ashford by a little more than a percentage point. He faces a rematch with Democrat Tony Vargas, a 40-year-old state senator vying to be Nebraska’s first Latino member of Congress. In 2022, Bacon defeated Vargas by less than 3 points. While the district known as Nebraska’s “blue dot” appears to be leaning toward Harris in the race for Electoral College votes, the contest at the House level looks more competitive. That means to survive his latest challenge, Bacon will likely need to draw a decent slice of support from Harris voters to punch his ticket back to Capitol Hill for a fifth term.",
      "SenateNotes": "2 Senate races. Preston Love(D) Pete Ricketts(R, incumbent) Deb Fischer(D) Dan Osborn(I) Sen. Deb Fischer's reelection appeared guaranteed until just weeks before the election, when a string of polls revealed a surprisingly competitive race between the incumbent and independent Dan Osborn. Osborn, a Navy veteran, mechanic and union leader, has received an onslaught of outside funding, forcing Republicans to redouble their efforts in a race that was thought to be an easy win. The 49-year-old independent is a political newcomer who's leaned into a populist message, while billing his opponent as an establishment politician controlled by corporate interests. Fischer is seeking a third term in the Senate, where she served on the powerful armed services and appropriations committees. The 73-year-old, who has a background as a cattle rancher, has leaned on an endorsement from Trump in recent weeks, while painting her independent opponent as a Democrat in disguise. Osborn has pledged not to caucus with either Democrats or Republicans in the Senate. The Cornhusker State is home to nearly twice as many registered Republicans as Democrats, and Trump won Nebraska by nearly 20 points in 2020. But Nebraska is also home to nearly as many nonpartisan voters as Democrats. And with no Democrat in the race, the two voting groups could come together to launch a formidable challenge against the Republican incumbent. The Cook Political Report rates the race as lean Republican, moving it from likely Republican on Oct. 21. ",
      "AbortionOnBallot": "Yes. Initiative 434 and Initiative 439, two competing abortion ballot measures in 2024. Initiative 439, the measure backed by Protect Our Rights coalition, would guarantee a constitutional right to abortion up to the point of fetal viability. The other amendment, Initiative 434, backed by anti-abortion groups, would ban most abortions after about 12 weeks of pregnancy with exceptions for threats to the life of the pregnant patient, rape and incest — similar to current law. The measure that gains the most votes will pass. ",
      "Anticipated Call": "11/05/2024 09:00:00 PM"
    },
    {
      "State": "Nevada",
      "ClosingTime": "10:00:00 PM",
      "ElectoralVotes": 6,
      "TimeSixteen": "12:02:00 AM",
      "DaySixteen": "11/9/2016",
      "WinnerSixteen": "Clinton D",
      "TimeTwenty": "12:13:00 PM",
      "DayTwenty": "11/7/2020",
      "WinnerTwenty": "Biden D",
      "Zone": "Mountain Time Zone", 
      "Abbreviation": "NV",
      "HouseNotes": " ",
      "SenateNotes": "Jacky Rosen(D) Sam Brown(R) Sen. Jacky Rosen is looking to hold onto her seat in the Silver State, facing her first reelection bid in the state that was home to among the closest Senate races in the country in 2022. Rosen is facing off against Sam Brown, a 40-year-old businessman and former Army captain. And although Republicans haven't won a Senate race in the Silver State since 2012, they flipped the governor's mansion in the last election, suggesting that the state's races could be in play for the GOP. But Rosen, 67, has appeared to have a significant edge over Brown since Vice President Kamala Harris entered the presidential race, after President Biden had struggled to garner support in the state. The Cook Political Report in August changed its rating of the Nevada Senate race from a toss-up to lean Democrat after Harris entered the race, noting that the margin that Senate candidates in battleground states now have to outperform the top of the ticket has shrunk, and has been especially pronounced in Nevada. ",
      "AbortionOnBallot": "Yes. Question 6.",
      "Anticipated Call": "11/06/2024 12:00:00 AM"
    },
    {
      "State": "New Hampshire",
      "ClosingTime": "8:00:00 PM",
      "ElectoralVotes": 4,
      "TimeSixteen": "6:04:00 PM",
      "DaySixteen": "11/14/2016",
      "WinnerSixteen": "Clinton D",
      "TimeTwenty": "10:51:00 PM",
      "DayTwenty": "11/3/2020",
      "WinnerTwenty": "Biden D",
      "Zone": "Eastern Time Zone", 
      "Abbreviation": "NH",
      "HouseNotes": " ",
      "SenateNotes": " ",
      "AbortionOnBallot": "No",
      "Anticipated Call": "11/05/2024 11:00:00 PM"
    },
    {
      "State": "New Jersey",
      "ClosingTime": "8:00:00 PM",
      "ElectoralVotes": 14,
      "TimeSixteen": "8:00:00 PM",
      "DaySixteen": "11/8/2016",
      "WinnerSixteen": "Clinton D",
      "TimeTwenty": "8:00:00 PM",
      "DayTwenty": "11/3/2020",
      "WinnerTwenty": "Biden D",
      "Zone": "Eastern Time Zone", 
      "Abbreviation": "NJ",
      "HouseNotes": " ",
      "SenateNotes": "Andy Kim(D) Curtis Bashaw(R) are running to replace the Menendez seat.",
      "AbortionOnBallot": "No",
      "Anticipated Call": "11/05/2024 08:00:00 PM"
    },
    {
      "State": "New Mexico",
      "ClosingTime": "9:00:00 PM",
      "ElectoralVotes": 5,
      "TimeSixteen": "9:21:00 PM",
      "DaySixteen": "11/8/2016",
      "WinnerSixteen": "Clinton D",
      "TimeTwenty": "9:00:00 PM",
      "DayTwenty": "11/3/2020",
      "WinnerTwenty": "Biden D",
      "Zone": "Mountain Time Zone", 
      "Abbreviation": "NM",
      "HouseNotes": " ",
      "SenateNotes": "Martin Heinrich(D) Nella Domenici(R)",
      "AbortionOnBallot": "No",
      "Anticipated Call": "11/05/2024 09:00:00 PM"
    },
    {
      "State": "New York",
      "ClosingTime": "9:00:00 PM",
      "ElectoralVotes": 28,
      "TimeSixteen": "9:00:00 PM",
      "DaySixteen": "11/8/2016",
      "WinnerSixteen": "Clinton D",
      "TimeTwenty": "9:00:00 PM",
      "DayTwenty": "11/3/2020",
      "WinnerTwenty": "Biden D",
      "Zone": "Eastern Time Zone", 
      "Abbreviation": "AL",
      "HouseNotes": "D-19 The lackluster showing by Democrats in New York during the 2022 midterm elections cost the party any chance it had at keeping control of the House. Democrats are hoping the state will lay the groundwork this year for the party’s return to the majority. Thanks in part to a slightly more favorable map after state lawmakers approved new lines, Democrats are looking to pick up at least two seats in the Empire State, with the potential for more. A top target is the 19th District, which stretches from the Hudson Valley to the Finger Lakes. It’s currently represented by GOP Rep. Marc Molinaro, who won the seat by less than 2 points in 2022 and faces a rematch with Democrat Josh Riley, a lawyer who served as counsel to former. Sen. Al Franken on the Senate Judiciary Committee. The contest has seen the most spending of any House race over the past two months – $38.5 million – with Democrats outspending Republicans by more than $5 million. The presidential race is also poised to play a factor in the 19th District, where voters would have backed Biden by more than 4 points in 2020. But Republicans also believe that Trump is running stronger in blue states than he did four years ago. ",
      "SenateNotes": "Kirsten Gillibrand(D) Mike Sapraicone(R)",
      "AbortionOnBallot": "Yes. Proposition 1 will appear on the ballot. Though abortion isn't explicitly mentioned in the ballot measure, supporters say it would safeguard abortion protections by defining pregnancy, pregnancy outcomes, and reproductive healthcare and autonomy as protected classes under the state constitution.  The state's constitution currently protects against discrimination on the basis of race, color, creed or religion. The proposal, known as the Equal Rights Amendment, would add ethnicity, national origin, age, disability, sex, sexual orientation, gender identity and gender expression, to that list, in addition to the reproductive rights-related language. In the Empire State, abortion is legal until 24 weeks of pregnancy.",
      "Anticipated Call": "11/05/2024 08:00:00 PM"
    },
    {
      "State": "North Carolina",
      "ClosingTime": "7:30:00 PM",
      "ElectoralVotes": 16,
      "TimeSixteen": "11:11:00 PM",
      "DaySixteen": "11/8/2016",
      "WinnerSixteen": "Trump R",
      "TimeTwenty": "11:59:00 PM",
      "DayTwenty": "11/13/2020",
      "WinnerTwenty": "Trump R",
      "Zone": "Eastern Time Zone", 
      "Abbreviation": "NC",
      "HouseNotes": "D-1, Redistricting in three Southern states is set to provide House Republicans a small dose of relief heading into Election Day. The GOP is poised to pick up three seats thanks to a new map in North Carolina, while fresh lines in Louisiana and Alabama are expected to deliver Democrats a pair of seats – effectively giving Republicans one more seat to start the evening. There is a fourth seat in North Carolina – the 1st District in the northeast corner of the state, bordering Virginia – that became more favorable for Republicans under the redrawn lines, going from one that Biden would have carried by nearly 7 points in 2020 to one with a margin of victory of less than 2 points. That has Republicans sensing an opportunity to unseat first-term Democratic Rep. Don Davis, an Air Force veteran who won his 2022 race under the old lines by a little less than 5 points. Davis’ opponent is Laurie Buckhout, a retired Army colonel and political newcomer. Both candidates have aligned themselves with the nominees of their parties, appearing at campaign events with them in the Tar Heel State, though Davis’ endorsement of Harris in July came a day after he voted for a GOP resolution that criticized the vice president over her handling of the southern border.",
      "SenateNotes": " ",
      "AbortionOnBallot": "No",
      "Anticipated Call": "11/09/2024 08:00:00 PM"
    },
    {
      "State": "North Dakota",
      "ClosingTime": "9:00:00 PM",
      "ElectoralVotes": 3,
      "TimeSixteen": "9:00:00 PM",
      "DaySixteen": "11/8/2016",
      "WinnerSixteen": "Trump R",
      "TimeTwenty": "9:00:00 PM",
      "DayTwenty": "11/3/2020",
      "WinnerTwenty": "Trump R",
      "Zone": "Mountain Time Zone", 
      "Abbreviation": "ND",
      "HouseNotes": "No",
      "SenateNotes": "Katrina Christiansen(D) Kevin Cramer(R)",
      "AbortionOnBallot": "No",
      "Anticipated Call": "11/05/2024 09:00:00 PM"
    },
    {
      "State": "Ohio",
      "ClosingTime": "7:30:00 PM",
      "ElectoralVotes": 17,
      "TimeSixteen": "10:36:00 PM",
      "DaySixteen": "11/8/2016",
      "WinnerSixteen": "Trump R",
      "TimeTwenty": "12:19:00 AM",
      "DayTwenty": "11/4/2020",
      "WinnerTwenty": "Trump R",
      "Zone": "Eastern Time Zone", 
      "Abbreviation": "OH",
      "HouseNotes": " ",
      "SenateNotes": "Sherrod Brown(D) Bernie Moreno(R) The race for the Ohio Senate seat was essentially a dead heat ahead of the election and widely considered to be one of the tightest of toss-ups races in the country. Incumbent Democratic Sen. Sherrod Brown (18 year incumbent) is facing Republican Bernie Moreno in this critical state. Both parties poured hundreds of millions of dollars into the state that was considered the nexus of the battle for control of the Senate. But Brown has never before been on the ballot alongside former President Donald Trump, who handily won Ohio twice. Moreno, a former car dealership owner, tried throughout the campaign to tie Brown to national Democrat figures, including Harris. Moreno, whose family immigrated from Colombia to Florida when he was a young child, spoke frequently on the trail about immigration issues. In one ad, Trump, who endorsed Moreno, appears on video talking about how Moreno will secure our border and that Brown is a radical left politician. Ohio has grown increasingly Republican in recent years and Brown's campaign hinged on convincing hundreds of thousands of Trump voters to split their ticket and send Brown back to Washington. To do that, Brown worked on building up margins in cities and suburbs that lean Democratic while also showcasing his work with Republicans. Brown and Democrat allies pointed to Moreno’s stance on abortion, including a comment about why abortion would be an issue for women over the age of 50. Ohioans voted last year to enshrine abortion rights into their state constitution.  ",
      "AbortionOnBallot": "No",
      "Anticipated Call": "11/06/2024 12:00:00 AM"
    },
    {
      "State": "Oklahoma",
      "ClosingTime": "8:00:00 PM",
      "ElectoralVotes": 7,
      "TimeSixteen": "8:00:00 PM",
      "DaySixteen": "11/8/2016",
      "WinnerSixteen": "Trump R",
      "TimeTwenty": "8:00:00 PM",
      "DayTwenty": "11/3/2020",
      "WinnerTwenty": "Trump R",
      "Zone": "Central Time Zone", 
      "Abbreviation": "OK",
      "HouseNotes": " ",
      "SenateNotes": " ",
      "AbortionOnBallot": "No",
      "Anticipated Call": "11/05/2024 08:00:00 PM"
    },
    {
      "State": "Oregon",
      "ClosingTime": "11:00:00 PM",
      "ElectoralVotes": 8,
      "TimeSixteen": "11:05:00 PM",
      "DaySixteen": "11/8/2016",
      "WinnerSixteen": "Clinton D",
      "TimeTwenty": "11:00:00 PM",
      "DayTwenty": "11/3/2020",
      "WinnerTwenty": "Biden D",
      "Zone": "Mountain Time Zone", 
      "Abbreviation": "OR",
      "HouseNotes": " ",
      "SenateNotes": " ",
      "AbortionOnBallot": "No",
      "Anticipated Call": "11/05/2024 11:00:00 PM"
    },
    {
      "State": "Pennsylvania",
      "ClosingTime": "8:00:00 PM",
      "ElectoralVotes": 19,
      "TimeSixteen": "1:35:00 AM",
      "DaySixteen": "11/9/2016",
      "WinnerSixteen": "Trump R",
      "TimeTwenty": "11:25:00 AM",
      "DayTwenty": "11/7/2020",
      "WinnerTwenty": "Biden D",
      "Zone": "Eastern Time Zone", 
      "Abbreviation": "PA",
      "HouseNotes": "D-10, GOP Rep. Scott Perry has not shied away from controversy during his six terms in the US House, including his support for Trump’s efforts to overturn the 2020 election results, which led to the FBI seizing the congressman’s cell phone. Even as the former chair of the House Freedom Caucus embraces his firebrand status, he has managed to fend off Democratic challengers with relative ease, winning his most recent race in 2022 by nearly 8 points despite the swirl of scrutiny around his actions. That strategy is facing its toughest test this year in the form of a challenge from Democrat Janelle Stelson, a political newcomer but familiar face to many Central Pennsylvania residents. Stelson spent decades as a news anchor and reporter in the region and is now trying to turn onetime viewers into voters. Democrats see Stelson’s profile, combined with her prolific fundraising and the changing politics of the district – Trump would have won it by 4 points in 2020, but Democrat Josh Shapiro carried it by a double digits during his 2022 run for governor – as signs that Perry is potentially vulnerable. Stelson also scored the endorsement of five former GOP members of Congress who served with Perry as she seeks to appeal to moderate voters. Both parties have ramped up their spending here in the final weeks, signaling a tight race that could offer a glimpse about the level of support for MAGA-aligned candidates in districts that appear to be trending toward the political middle. ",
      "SenateNotes": "Bob Casey(D) Dave McCormick(R),Dave McCormick is working to unseat Democratic Sen. Bob Casey, who's been in the Senate since 2007, in battleground Pennsylvania. McCormick, 59, is a combat veteran and former chief executive of a major hedge fund who also sought the Republican nomination to represent Pennsylvania in the Senate in 2022, when he lost to Mehmet Oz. He's campaigned on being a change agent to the status quo, billing Casey as an establishment politician. And he's drawn a line between his position on abortion and Casey's, which he calls extreme. McCormick opposes abortion except in the case of rape, incest or to save the life of the mother, while also arguing that the issue should be left up to states and opposing a national abortion ban. Casey — who once called himself a pro-life Democrat — now supports the protections under Roe v. Wade, which guaranteed a right to abortion prior to fetal viability. Seeking a fourth term in the upper chamber, Casey, 64, is a former state auditor general and treasurer. The son of former Pennsylvania Gov. Bob Casey Sr., he's an institution in the Keystone State and has a reputation as a moderate Democrat. Casey has billed his opponent as an out-of-touch carpetbagger, hammering McCormick over his previous Connecticut residency. The Cook Political Report rates the race as a toss-up, changing it from lean Democrat on Oct. 21. CBS News poll showed Casey leading in September.",
      "AbortionOnBallot": "No",
      "Anticipated Call": "11/06/2024 12:00:00 AM"
    },
    {
      "State": "Rhode Island",
      "ClosingTime": "8:00:00 PM",
      "ElectoralVotes": 4,
      "TimeSixteen": "8:39:00 PM",
      "DaySixteen": "11/8/2016",
      "WinnerSixteen": "Clinton D",
      "TimeTwenty": "8:00:00 PM",
      "DayTwenty": "11/3/2020",
      "WinnerTwenty": "Biden D",
      "Zone": "Eastern Time Zone", 
      "Abbreviation": "RI",
      "HouseNotes": " ",
      "SenateNotes": "Sheldon Whitehouse(D) Patricia Morgan(R)",
      "AbortionOnBallot": "No",
      "Anticipated Call": "11/05/2024 08:00:00 PM"
    },
    {
      "State": "South Carolina",
      "ClosingTime": "7:00:00 PM",
      "ElectoralVotes": 9,
      "TimeSixteen": "8:09:00 PM",
      "DaySixteen": "11/8/2016",
      "WinnerSixteen": "Trump R",
      "TimeTwenty": "7:56:00 PM",
      "DayTwenty": "11/3/2020",
      "WinnerTwenty": "Trump R",
      "Zone": "Eastern Time Zone", 
      "Abbreviation": "SC",
      "HouseNotes": " ",
      "SenateNotes": " ",
      "AbortionOnBallot": "No",
      "Anticipated Call": "11/05/2024 08:00:00 PM"
    },
    {
      "State": "South Dakota",
      "ClosingTime": "9:00:00 PM",
      "ElectoralVotes": 3,
      "TimeSixteen": "9:00:00 PM",
      "DaySixteen": "11/8/2016",
      "WinnerSixteen": "Trump R",
      "TimeTwenty": "9:00:00 PM",
      "DayTwenty": "11/3/2020",
      "WinnerTwenty": "Trump R",
      "Zone": "Mountain Time Zone", 
      "Abbreviation": "SD",
      "HouseNotes": " ",
      "SenateNotes": " ",
      "AbortionOnBallot": "Yes. Constitutional Amendment G.",
      "Anticipated Call": "11/05/2024 09:00:00 PM"
    },
    {
      "State": "Tennessee",
      "ClosingTime": "8:00:00 PM",
      "ElectoralVotes": 11,
      "TimeSixteen": "8:13:00 PM",
      "DaySixteen": "11/8/2016",
      "WinnerSixteen": "Trump R",
      "TimeTwenty": "8:00:00 PM",
      "DayTwenty": "11/3/2020",
      "WinnerTwenty": "Trump R",
      "Zone": "Central Time Zone", 
      "Abbreviation": "TN",
      "HouseNotes": " ",
      "SenateNotes": "Gloria Johnson(D) Marsha Blackburn(R)",
      "AbortionOnBallot": "No",
      "Anticipated Call": "11/05/2024 08:00:00 PM"
    },
    {
      "State": "Texas",
      "ClosingTime": "9:00:00 PM",
      "ElectoralVotes": 40,
      "TimeSixteen": "9:00:00 PM",
      "DaySixteen": "11/8/2016",
      "WinnerSixteen": "Trump R",
      "TimeTwenty": "1:06:00 AM",
      "DayTwenty": "11/4/2020",
      "WinnerTwenty": "Trump R",
      "Zone": "Mountain Time Zone", 
      "Abbreviation": "TX",
      "HouseNotes": " ",
      "SenateNotes": "Ted Cruz (R) Colin Allred. Once considered a long-shot Democratic bid in the red state, Rep. Colin Allred has launched a formidable challenge against Sen. Ted Cruz for his seat in the upper chamber. Cruz, 53, has been in the Senate since 2013 and has widespread name recognition in the Lone Star State and nationally, having launched a bid for the White House in 2016. He's worked to tie Allred to national Democrats and paint his positions as extreme. Allred, 41, has represented Texas in the House since 2018, when he flipped a long-held GOP district in the Dallas area. Once a linebacker for the Tennessee Titans, the former football player came to Congress after working as a civil rights attorney. Allred has criticized Cruz' record and argued he doesn't pull through for Texans. No Democrat has won a statewide election in Texas since 1994, and the Cook Political Report rates the race as lean-Republican. But Texas remains among Democrats' best pickup opportunities in the upper chamber.",
      "AbortionOnBallot": "No",
      "Anticipated Call": "11/05/2024 10:00:00 PM"
    },
    {
      "State": "Utah",
      "ClosingTime": "10:00:00 PM",
      "ElectoralVotes": 6,
      "TimeSixteen": "11:52:00 PM",
      "DaySixteen": "11/8/2016",
      "WinnerSixteen": "Trump R",
      "TimeTwenty": "11:08:00 PM",
      "DayTwenty": "11/3/2020",
      "WinnerTwenty": "Trump R",
      "Zone": "Mountain Time Zone", 
      "Abbreviation": "UT",
      "HouseNotes": " ",
      "SenateNotes": "Caroline Gleich(D) John Curtis(R) are competing for Romney's seat.",
      "AbortionOnBallot": "No",
      "Anticipated Call": "11/05/2024 11:00:00 PM"
    },
    {
      "State": "Vermont",
      "ClosingTime": "7:00:00 PM",
      "ElectoralVotes": 3,
      "TimeSixteen": "7:00:00 PM",
      "DaySixteen": "11/8/2016",
      "WinnerSixteen": "Clinton D",
      "TimeTwenty": "7:00:00 PM",
      "DayTwenty": "11/3/2020",
      "WinnerTwenty": "Biden D",
      "Zone": "Eastern Time Zone", 
      "Abbreviation": "VT",
      "HouseNotes": " ",
      "SenateNotes": "Bernie Sanders(D) Gerald Malloy(R)",
      "AbortionOnBallot": "No",
      "Anticipated Call": "11/05/2024 07:00:00 PM"
    },
    {
      "State": "Virginia",
      "ClosingTime": "7:00:00 PM",
      "ElectoralVotes": 13,
      "TimeSixteen": "10:40:00 PM",
      "DaySixteen": "11/8/2016",
      "WinnerSixteen": "Clinton D",
      "TimeTwenty": "7:36:00 PM",
      "DayTwenty": "11/3/2020",
      "WinnerTwenty": "Biden D",
      "Zone": "Eastern Time Zone", 
      "Abbreviation": "VA",
      "HouseNotes": "D1- Vindman(D) and Anderson(R) are both Army veterans and lawyers. In 2019, Vindman found himself at the center of Trump’s first impeachment when the then-ethics lawyer for the National Security Council and his twin brother, Alexander – a director on the NSC – sounded the alarm about a phone call between the president and his Ukrainian counterpart, Volodymyr Zelensky. D2-anchored by Virginia Beach, where GOP Rep. Jen Kiggans is facing off against fellow Navy veteran Missy Cotter Smasal(D). If either party were to capture both races, that could foreshadow a favorable environment.",
      "SenateNotes": "Tim Kaine(D) Hung Cao(R)",
      "AbortionOnBallot": "No",
      "Anticipated Call": "11/05/2024 08:00:00 PM"
    },
    {
      "State": "Washington",
      "ClosingTime": "11:00:00 PM",
      "ElectoralVotes": 12,
      "TimeSixteen": "11:28:00 PM",
      "DaySixteen": "11/8/2016",
      "WinnerSixteen": "Clinton D",
      "TimeTwenty": "11:00:00 PM",
      "DayTwenty": "11/3/2020",
      "WinnerTwenty": "Biden D",
      "Zone": "Pacific Time Zone", 
      "Abbreviation": "WA",
      "HouseNotes": " ",
      "SenateNotes": "Maria Cantwell(D) Raul Garcia(R)",
      "AbortionOnBallot": "No",
      "Anticipated Call": "11/05/2024 11:00:00 PM"
    },
    {
      "State": "West Virginia",
      "ClosingTime": "7:30:00 PM",
      "ElectoralVotes": 4,
      "TimeSixteen": "7:30:00 PM",
      "DaySixteen": "11/8/2016",
      "WinnerSixteen": "Trump R",
      "TimeTwenty": "7:30:00 PM",
      "DayTwenty": "11/3/2020",
      "WinnerTwenty": "Trump R",
      "Zone": "Eastern Time Zone", 
      "Abbreviation": "WV",
      "HouseNotes": " ",
      "SenateNotes": "Glenn Elliott(D) Gov.Jim Justice(R). Joe Manchin's seat. Senate Democrats have all but ceded Sen. Joe Manchin's seat to Republicans after he announced he wouldn't seek reelection in the red state. Democrat Glenn Elliott, a former mayor of Wheeling, West Virginia, is facing off against current Republican Gov. Jim Justice, who is almost guaranteed a win in the Mountain State. Even before Manchin left the race, the seat was expected to pose a challenge for Democrats once the popular GOP governor entered the race. Senate Minority Leader Mitch McConnell himself encouraged Justice to run and seize the opportunity to unseat Manchin, who formerly served as governor and has represented West Virginia in the Senate since 2010. Manchin, a moderate who has often been a thorn in the side of Democratic leadership, opted to leave the party and register as an independent in May.",
      "AbortionOnBallot": "No",
      "Anticipated Call": "11/05/2024 07:30 PM"
    },
    {
      "State": "Wisconsin",
      "ClosingTime": "9:00:00 PM",
      "ElectoralVotes": 10,
      "TimeSixteen": "2:29:00 AM",
      "DaySixteen": "11/8/2016",
      "WinnerSixteen": "Trump R",
      "TimeTwenty": "2:16:00 PM",
      "DayTwenty": "11/4/2020",
      "WinnerTwenty": "Biden D",
      "Zone": "Central Time Zone", 
      "Abbreviation": "WI",
      "HouseNotes": " ",
      "SenateNotes": "Tammy Baldwin(D) vs. Eric Hovde(R) Democratic Sen. Tammy Baldwin is seeking a third term in the Senate, facing a challenge from  Republican Eric Hovde in the Badger State. Baldwin, 62, was first elected to the Senate in 2012 after representing Wisconsin in the House for more than a decade. Baldwin, the first openly LGBTQ+ Senator in history, has a long history of courting rural voters in the state, winning counties that Trump previously won in the 2018 election, despite her progressive politics. Hovde, 60, also sought the GOP nomination in 2012. His bid fell short to former Wisconsin Gov. Tommy Thompson, who went on to lose the election to Baldwin. The businessman with deep pockets is one of a number of Republican Senate candidates recruited in part for their ability to fund their own campaigns this cycle. Hovde has campaigned on issues like immigration, while criticizing Baldwin for her record in Washington. Meanwhile, Baldwin has billed Hovde as an out-of-touch wealthy businessman as the two spar over the seat in the battleground state. The Cook Political Report rates the race as a toss-up, shifting its rating from lean-Democrat on Oct. 8. A CBS News poll showed Baldwin leading in September.",
      "AbortionOnBallot": "No",
      "Anticipated Call": "11/06/2024 02:00:00 AM"
    },
    {
      "State": "Wyoming",
      "ClosingTime": "9:00:00 PM",
      "ElectoralVotes": 3,
      "TimeSixteen": "9:00:00 PM",
      "DaySixteen": "11/8/2016",
      "WinnerSixteen": "Trump R",
      "TimeTwenty": "9:00:00 PM",
      "DayTwenty": "11/3/2020",
      "WinnerTwenty": "Trump R",
      "Zone": "Mountain Time Zone", 
      "Abbreviation": "WY",
      "HouseNotes": " ",
      "SenateNotes": "Scott Morrow(D) John Barrasso(R)",
      "AbortionOnBallot": "No",
      "Anticipated Call": "11/05/2024 09:00:00 PM"
    }
  ]
  const combinedData = stateClosingTimes.map(stateInfo => {
    const population = statePopulation[stateInfo.State];
    return { ...stateInfo, Population: population };
  });
  
  console.log(combinedData[3]);
  

  const [usStates, setUsStates] = useState(null);
  

  useEffect(() => {
    d3.json("/us-states.geojson").then(data => {
      setUsStates(data);
    }).catch(error => {
      console.error("Error loading geojson data:", error);
    });
  }, []);

  useEffect(() => {
    if (!usStates || !usStates.features) return; // Wait until `usStates` and `features` are available

    // Clear any previous SVG if present
    d3.select("#map").select("svg").remove();
    const width = 960;
    const height = 600;

    const svg = d3.select("#map")
      .append("svg")
      .attr("width", width)
      .attr("height", height);

    const projection = d3.geoAlbersUsa().scale(1000).translate([width / 2, height / 2]);
    const path = d3.geoPath().projection(projection);
   
    // Create a mapping for the states from combinedData for quick lookup
    const stateDataMap = new Map(combinedData.map(d => [d.State, d]));

        // Parse each state’s `TimeSixteen` and `DaySixteen` into a Date object and sort them chronologically
        combinedData.forEach(d => {
          d.announcementTime = new Date(`${d.DayTwenty}T${d.TimeTwenty}`);
        });
    
        combinedData.sort((a, b) => a.announcementTime - b.announcementTime);  // Sort states by announcement time
    
        // Calculate total duration (in milliseconds) for the entire animation

    // Tooltip element
    const tooltip = d3.select("body")
      .append("div")
      .attr("class", "tooltip")
      .style("position", "absolute")
      .style("padding", "8px")
      .style("background", "rgba(0, 0, 0, 0.7)")
      .style("color", "#a45b8e")
      .style("border-radius", "4px")
      .style("pointer-events", "none")
      .style("opacity", 0);

    // Draw the map
    svg.selectAll("path")
      .data(usStates.features)
      .enter()
      .append("path")
      .attr("d", path)
      .attr("fill", (d) => {
        const stateName = d.properties.NAME;
        const stateData = stateDataMap.get(stateName);

        // Determine color based on WinnerSixteen and WinnerTwenty
        if (stateData) {
          const WinnerTwenty = stateData.WinnerTwenty.slice(-1);  // Get last character
    // Get last character
          return (WinnerTwenty === "R" ) ? "red" : 
          (WinnerTwenty === "D" ) ? "blue" : "white";
        }
        return "#ccc"; // Default color if no data
      })
      .attr("stroke", "#a45b8e")
      .attr("stroke-width", 1.5)
      .on("mouseover", function (event, d) {
        const stateName = d.properties.NAME;
        const stateData = stateDataMap.get(stateName);

        if (stateData) {
          tooltip
            .transition()
            .duration(200)
            .style("opacity", 1);
          tooltip
            .html(`
              <strong>${stateName}</strong><br>
              Population: ${stateData.Population.toLocaleString()}<br>
              Electoral Votes: ${stateData.ElectoralVotes}<br>
              Winner: ${stateData.WinnerTwenty}
            `)
            .style("left", (event.pageX + 10) + "px")
            .style("top", (event.pageY - 28) + "px");

          d3.select(this)
            .attr("stroke", "#333")
            .attr("stroke-width", 3);  
        }
      })
      .on("mousemove", (event) => {
        tooltip
          .style("left", (event.pageX + 10) + "px")
          .style("top", (event.pageY - 28) + "px");
      })
      .on("mouseout", function () {
        tooltip
          .transition()
          .duration(500)
          .style("opacity", 0);

        d3.select(this)
          .attr("stroke", "#a45b8e")
          .attr("stroke-width", 1.5);  // Reset the state boundary style
      });
   
  }, [usStates]);

  return<div>
    <h1>Historical Electoral Map Here (2020)</h1>
    <div id="map" style={{ width: "100%", height: "100%" }}></div>;
  </div>
  
};

export default MapsPage;