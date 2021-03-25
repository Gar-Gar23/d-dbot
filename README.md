# D&D Bot

Using discord.js, we  can build a self driving D&D bot 

Using the 5e D&D rule sets from wizards of the coast and some home brew material
we can creat a bot to serve our table top needs over discord, all started cause i wanted to learn code and i already know the 5th edition Players hand book by near memory.
as a base line project this will be just a simple dice roller containing the standard set of 6 different die, with special rolls for percents and spell attacts  


## Requirements

- `node` [Version 12.0.0 or higher](https://nodejs.org)
- The node-gyp build tools. This is a pre-requisite for Enmap, but also for a **lot** of other modules. See [The Enmap Guide](https://enmap.evie.codes/install#pre-requisites) for details and requirements for your OS. Just follow what's in the tabbed block only, then come back here!

You also need your bot's token. This is obtained by creating an application in
the [Developer section](https://discord.com/developers) of discord.com. Check the [first section of this page](https://anidiots.guide/getting-started/the-long-version.html) 
for more info.

## Intents

d-dbot uses intents which are required as of October 7, 2020. 
You can enable privileged intents in your bot page 
(the one you got your token from) under `Privileged Gateway Intents`.



Intents are loaded from your config, and will get created by the setup scripts.

For more info about intents checkout the [official Discord.js guide page](https://discordjs.guide/popular-topics/intents.html) and the [official Discord docs page](https://discord.com/developers/docs/topics/gateway#gateway-intents).
## Downloading

In a command prompt in your projects folder (wherever that may be) run the following:

D&Dbot clone space

Once finished: 

- In the folder from where you ran the git command, run `cd d-dbot` and then run `npm install`
- **If you get any error about python or msibuild.exe or binding, read the requirements section again!**
- Run `node setup.js` to generate a proper configuration file and settings.

## Starting the bot

To start the bot, in the command prompt, run the following command:
`node index.js`

## Command my bot
D&D bot could contain and number of commmands 
*Dice rolling for d20, d12, d10, d8, d6, d4 , percentile
* advanced rolls i.e advantage/ disadvantage, rolls adding multiple die (same or different)
* codition reminder , brief summary of (blinded, charmed, restrained etc.)
*experiece point calculator
* coin toss
* roll modifier, adding ones to hit or stat modifier to a roll


##ideas big and small

# DM tools 
* loot roller in the book there are tables for this
* encounter tables can get more in depth like region or condions for travel 
* TOD generator ( Time of day)
* simple city generators , features being pulled from a a few tables with  short lists of features ( population, number of key buildings etc.)
* city landmarks and plot ideas
* magic item lists legendary to mundane
* whisper to player


PLayer tools 
*character emotes
*whisper mechanic (for language barriers and private DM questions)
* character sheet and skill manager 
blah blah blah stuff