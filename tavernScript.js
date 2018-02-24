var buttonSayings = [
'Hit Another Bar','Check Out the Next Inn','Head to the Next Pub','Continue the Crawl','Time for Another Drink','One More!','And Another!','Maybe You\'ve Had Enough','I\'m Gonna Have to Cut You Off','Eh, One More Couldn\'t Hurt','You Feeling Okay?','Maybe Sleep It Off','Maybe Rent a Room','A New Day, a New Bar','Visit a Tavern'
]

var clickCount = 0;

var prefixes = [
'Red','Orange','Yellow','Green','Blue','Purple','Violet','White','Black','Grey','Brown','Teal','Turquoise','Indigo','Marroon','Puce','Lavender','Fuchsia','Pink','Crimson','Mauve',
'Blackened','Bloodstained','Bloody','Bony','Broken','Burnt','Dark','Dirty','Dull','Forged','Frightening','Gilded','Hammered','Horrific','Jagged','Keen','Lovely','Moldy','Mossy','Musty','Old','Overweight','Polished','Priceless','Rusty','Sculpted','Shining','Sickly','Skinny','Soiled','Spotless','Spotted','Stuffy','Toasted','Unsoiled','Wicked','Winged',
'Angry','Brave','Cowardly','Drunken','Fevered','Flirty','Happy','Hungry','Impatient','Lonely','Lucky','Nervous','Rested','Restless','Rogue','Sultry','Surly','Thirsty','Tranquil','Unlucky','Wise',
'Babbling','Charging','Charming','Crying','Dancing','Fighting','Flying','Laughing','Raging','Screaming','Sleeping','Smiling','Stumbling','Stunning','Struggling',
'Flaming','Icy','Acidic','Psychic','Electric','Necrotic','Radiant','Forceful','Poisonous','Concussive','Piercing','Slashing','Bludgeoning',
'Blind','Charmed','Deaf','Frightened','Grappled','Incapacitated','Invisible','Paralyzed','Petrified','Exhausted','Poisoned','Prone','Restrained','Stunned','Unconscious',
'Bear and','Bell and','Blade and','Block and','Book and','Boot and','Bull and','Cat and','Dog and','Fish and','Goat and','Hawk and','Hook and','Horse and','Moose and','Mug and','Rose and','Staff and','Stick and','Tooth and','Wand and','Wolf and',
'Bronze','Carnelian','Chalk','Cloth','Copper','Crystal','Diamond','Electrum','Emerald','Glass','Gold','Golden','Jade','Metal','Platinum','Ruby','Sapphire','Silk','Silver','Steel','Velvet','Wooden',
'Abyssal','Arcane','Celestial','Demonic','Devilish','Draconic','Dragon\'s','Fiendish','Holy','Infernal','Monstrous','Pious','Unholy','Vampiric','Zombified',
'Meady','Hoppy','Bubbly','Sour','Sweet','Tangy','Bitter',
'Woodland','Hidden','Verdant',
'Little','Dire','Giant','Miniature','Smallest'
]
var suffixes = [
'Apple','Artichoke','Carrot','Cherry','Grape','Lemon','Melon','Pear','Pomegranate',
'Alligator','Ape','Baboon','Badger','Bat','Bear','Boar','Bull','Camel','Cat','Cow','Crab','Crocodile','Crow','Deer','Dog','Donkey','Eagle','Elephant','Elk','Fish','Frog','Goat','Hawk','Horse','Hyena','Jackal','Lion','Lizard','Mammoth','Mare','Moose','Mule','Octopus','Owl','Panther','Pony','Ram','Rat','Raven','Rhinoceros','Scorpion','Serpent','Shark','Snake','Spider','Squirrel','Stallion','Tiger','Turtle','Vulture','Weasel','Whale','Wolf',
'Boot','Coat','Cloak','Gauntlet','Glove','Jacket','Robe',
'Rest','Beacon','Slumber','Respite','Reprieve',
'Circle','Cube','Hex','Polyhedral','Sphere','Square','Triangle',
'Abacus','Anvil','Barrel','Basket','Bell','Blanket','Boat','Book','Bottle','Bucket','Candle','Cart','Chain','Chest','Coin','Crowbar','Crown','Crystal','Cup','Door','Edge','Flask','Glass','Hammer','Hoard','Hourglass','Jug','Ladder','Lamp','Lantern','Line','Lock','Map','Mug','Nail','Orb','Pen','Pitcher','Plate','Pot','Pouch','Ring','Rope','Sack','Scroll','Ship','Shovel','Sledge','Spellbook','Tackle','Tankard','Tent','Tome','Torch','Totem','Trap','Wagon','Whistle',
'Forest','Grove','Pit','Sanctuary','Sanctum','Sea',
'Barbarian','Bard','Cleric','Druid','Fighter','King','Mage','Monk','Mystic','Paladin','Ranger','Rogue','Queen','Sailor','Sorcerer','Warlock','Warrior','Wizard',
'Clover','Oak','Rose','Tree','Birch','Maple','Beech',
'Arrow','Axe','Battleaxe','Blade','Blowgun','Bolt','Bow','Club','Crossbow','Dagger','Dart','Flail','Glaive','Halberd','Handaxe','Javelin','Lance','Mace','Maul','Morningstar','Net','Pick','Pike','Quiver','Rapier','Scimitar','Sickle','Sling','Spear','Staff','Sword','Trident','Wand','Warhammer','Whip',
'Heart','Claw','Fist','Foot','Head','Maw','Mouth','Tail','Tooth','Eye',
'Drum','Dulcimer','Flute','Lute','Lyre','Horn','Shawm','Trombone','Trumpet',
'Aboleth','Angel','Ankheg','Archon','Balor','Banshee','Basilisk','Behir','Bugbear','Bulette','Centaur','Chimera','Cloaker','Cockatrice','Couatl','Cyclops','Demon','Devil','Doppelganger','Dragon','Drider','Dryad','Duergar','Drow','Dwarf','Elemental','Elf','Ettercap','Ettin','Fiend','Fungus','Gargoyle','Genie','Ghost','Ghoul','Giant','Gnoll','Gnome','Goblin','Goliath','Golem','Gorgon','Grick','Griffon','Hag','Halfling','Harpy','Hound','Hippogriff','Hobgoblin','Homunculus','Human','Hydra','Imp','Jelly','Kobold','Kraken','Lamia','Lich','Lizardfolk','Lycanthrope','Magmin','Manticore','Medusa','Mephit','Mermaid','Mimic','Minotaur','Mummy','Naga','Nightmare','Ogre','Ooze','Orc','Otyugh','Owlbear','Pegasus','Pseudodragon','Pixie','Pudding','Rakshasa','Remorhaz','Revenant','Roc','Rust Monster','Sahuagin','Salamander','Satyr','Shadow','Specter','Sphinx','Sprite','Stirge','Succubus','Incubus','Tarrasque','Tiefling','Treant','Troll','Unicorn','Vampire','Werewolf','Wight','Will-o\'-Wisp','Worm','Wraith','Wyvern','Wyrm','Zombie'
]

var maritalStatuses = [
'n unmarried',' widowed',' divorced',' married'
]

var ownerOneType = [
'man','woman','androgynous person','nonbinary person'
]

var tenderAges = [
' nearly adult',' young',' young adult','n adult',' weathered',' young-looking',' mature',' middle-aged','n older','n elderly']

var tenderGenders = [
'male','female','androgynous','nonbinary'
]

var tenderRaces = [
'dwarf','elf','halfling','human','dragonborn','gnome','half-elf','half-orc','tiefling'
]

var tenderDispositions = [
'humorous','flamboyant','approachable','flirtatious','jovial','friendly','loud','light-hearted','energetic','ostentatious','surly','affable','approachable','friendly','curmudgeonly','stubborn','soft-spoken','obnoxious','boastful','lazy','reserved','devious','humorless','quiet'
]

var tenderLooks = [
'ugly','attractive','average looking'
]

var tenderPhysiques = [
'overweight','skinny','underweight','obese','stocky','muscular','scrawny','average','athletic','fit','curvy','blocky','svelte','willowy','meaty','chubby','chunky','in shape','big-boned','tall','short']

var tenderDegrees = [
'unmistably','somewhat','absolutely','acutely','almost','astonishingly','awfully','certainly','considerably','conspicuously','decidedly','disturbingly','eminently','excessively','extremely','impressively','incredibly','kind of','not quite','notably','noticeably','particularly','positively','powerfully','pretty','profoundly','quite','rather','remarkably','sort of','surprisingly','terribly','truly','uncommonly','unsettlingly','unusually','very','wonderfully','','','','','','','','','','','','','','','','','','',''
]

var tenderSkinColors = [
'pale','tan','bronzed','mid-toned','dark','brown','coppery','light','sun-kissed','freckled'
]

var dragonBornColors = [
'black','blue','brass','bronze','copper','gold','green','red','silver','white'
]

var tieflingColors = [
'red','cobalt blue','light blue','crimson','lavender','light red','pinkish','dark red','purplish','dark blue','vibrant red'
]

var tieflingHorns = [
'goat-like','large, curved','small, pointed','spiraled','bull-like','short, blunt','long, thin'
]

var horcColors = [
'greenish','greyish','light green','brownish','deep green','mottled green','light grey','tan'
]

var horcTusks = [
'pronounced','subdued','barely noticeable','large','small','uneven','broken','cracked','yellowed','sharpened','dulled'
]

var tenderHairColors = [
'light','dark','bright','shiny','black','red','brown','blond','grey','white','blue','purple','green','pink','turquoise','amber','chestnut','light brown','dark brown'
]

var tenderHairStyles = [
'close-cut','long, wavy','shoulder length','short, messy','ponytail','slicked-back','mohawk','curly','clean, short','long, straight','braided','drawn-up','long and loose','tight bun','top-knot','short, spiky','long, tangled',
]

var heSheThey = [
'He','She','They','They'
]

var heshethey = [
'he','she','they','they'
]

var hisHerTheir = [
'His','Her','Their','Their'
]

var hishertheir = [
'his','her','their','their'
]

var himherthem = [
'him','her','them','them']

var ownerTwoMale = [
'son','brother','grandson','boyfriend','male business partner','male friend'
]

var ownerTwoFemale = [
'daughter','sister','granddaughter','girlfriend','female business partner','female friend'
]

var ownerTwoNeutral = [
'androgynous child','androgynous sibling','androgynous grandchild','androgynous lover','androgynous business partner','androgynous friend'
]

var ownerTwoNonbinary = [
'nonbinary child','nonbinary sibling','nonbinary grandchild','nonbinary lover','nonbinary business partner','nonbinary friend'
]

var raceTypes = [
'exotic','common','uncommon','distrusted'
]

var ownerSecrets = [
'is openly involved in criminal activities',
'is secretly involved in local organized crime',
'is a cannibal who preys on the lonely travelers passing through the inn',
'used to perform in the circus and doesn\'t like talking about what happened there',
'is secretly cursed with lycanthropy',
'secretly worships an evil deity',
'secretly runs an underground fight club in the basement of the tavern',
'suffers from an old injury',
'has a fear of spiders',
'is secretly a vampire who feeds on the patrons of the inn during the night',
'keeps a collection of stolen trinkets from previous guests',
'has a rare medical condition',
'suffers from mental illness',
'is extremely racist/classist/sexist',
'is in hiding here due to being wanted for murder in a neighboring community',
'is actually a doppelganger',
'dabbles in dark magic',
'is being mind-controlled by a powerful entity',
'is secretly the head of the local crime syndicate',
'is actually an ancient dragon in disguise',
'is secretly a powerful archfey'
]

var ownerJointSecret = [
'are openly involved in criminal activities',
'are secretly involved in local organized crime',
'are cannibals who prey on the lonely travelers passing through their inn',
'used to perform in the circus, and don\'t like talking about what happened there',
'are secretly cursed with lycanthropy',
'secretly worship an evil deity',
'play a part in the operation of a secret underground fight club run out of the basement of the tavern',
'have problems that stem from old injuries',
'are deathly afraid of spiders',
'are secretly vampires who feed on the patrons of the inn during the night',
'steal small items and trinkets from the tavern patrons to add to their collections',
'suffer from a rare medical condition',
'suffer from a mental illness',
'are extremely racist/classist/sexist',
'are hiding out here due to being wanted for murder in a neighboring community',
'are really doppelgangers',
'are practitioners of the dark arts',
'are under the mental command of a powerful entity',
'are involved at the top level of organized crime in the region',
'are actually ancient dragons in disguise',
'are secretly powerful archfey'
]

var singleBackgrounds = [
'led a life of adventure',
'fought as a gladiator in a famous arena',
'had a job as an entertainer',
'studied religion at a monastery',
'pored over tomes at the library',
'lived a life of crime',
'was born into poverty and saved up enough money to buy into a tavern',
'lived as a noble in a faraway land',
'traveled the countryside as a merchant\'s guard',
'studied to be a wizard, but couldn\'t make it',
'lived a boring life',
'yearned for a life of adventure, but wasn\'t cut out for it',
'gambled compulsively and won the deed to the tavern in a bet',
'enjoyed fame as a world-renowned adventurer',
'made a living as a common thug',
'sailed around the world',
'performed minor magic tricks for fun and profit',
'trained to become a crafter of some sort',
'lived a life of seclusion far away from civilization',
'grew up in the wilds as part of a tribe of hunter-gatherers',
'served as a soldier in service to the nation',
'grew up on the streets, alone and poor',
'tried to earn a living as an artist',
'tried to make money as a writer'
]

var jointBackgrounds = [
'adventured together',
'fought as gladiators in a famous arena',
'were employed as entertainers',
'studied religion at a monastery',
'pored over tomes at the library',
'made their livings on the wrong side of the law',
'started with nothing and worked their way up',
'lived as nobles in a faraway land',
'traveled the countryside as a merchant\'s guards',
'studied to be wizards, but couldn\'t make it',
'lived boring lives',
'yearned for lives of adventure, but weren\'t cut out for it',
'went in together on a bet and won the deed to the tavern',
'were world-renowned adventurers',
'were common thugs',
'sailed around the world',
'worked together doing street magic',
'were in training to become crafters',
'lived together in the woods, far away from the city',
'grew up together in the same tribe in the wilds',
'served together in the same army',
'grew up together on the streets, fighting over scraps',
'were starving artists',
'wrote a book together'
]

var inspirations = [
'an attempt at humor or irony',
'a local legend',
'a story from the owner\'s past',
'an inside joke',
'free association. It was the first thing the owner thought of when asked for a name',
'the owner\'s nickname',
'a misinterpretation of another famous tavern\'s name'
]

var gimmicks = [
'nothing. This isn\'t a very popular tavern',
'its comfortable seating',
'the cheap booze',
'a nautical theme regardless of the tavern\'s proximity to any body of water',
'the extensive adventuring paraphernalia adorning the walls',
'the fact that it\'s one of the only bars in town',
'the surprisingly good quality of the food',
'its rough-and-tumble anything goes atmosphere',
'the hilarious bartender',
'the generous portions of food',
'the quality of the drinks',
'its warm and welcoming atmosphere',
'its surprisingly clandestine atmosphere',
'the band that plays every other night',
'its spacious seating area',
'the attractive waitstaff',
'an eating challenge—if you can eat it all, you don\'t have to pay',
'a local legend that says the ground the tavern was built on is holy/unholy/magical',
'its connection to the criminal underworld',
'its famously rude and abrasive waitstaff',
'the statue of its namesake out front',
'their selection of wines imported from several far away places',
'a petting zoo out back for the kids',
'its extensive drink menu',
'the bartender who remembers every regular\'s drink order',
'its amateur open-stage night',
'the varied cuisine prepared by a talented chef',
'the fact that it\'s always a comfortable temperature inside no matter what the weather is like outside',
'a fountain that flows freely with alcohol',
'the dedicated hookah area',
'an enchanted bandstand that plays music at all times',
'the owner\'s exotic pet'
]

var lifestyles = [
'squalid','poor','modest','comfortable','wealthy','aristocratic'
]

var clienteles = [
'violent','raucous','boisterous','loud','rambunctious','obnoxious','unfriendly','rude','clandestine','friendly','amicable','welcoming','secretive','subdued','peaceful','elitist','snobbish'
]

var shadyQuests = [
'They are running a scam to trick adventurers out of their hard-earned treasure.',
'They are looking for a group to help recover an artifact.',
'They are in search of able-bodied adventurers to assist in the recovery of a kidnapped relative.',
'They have a lead on the location of a priceless treasure, but they can\'t get there on their own',
'They are selling discounted magical items and potions—around a third of which actually work.',
'They are on the run from the law for a crime they didn\'t commit and they need help clearing their name.',
'They recently lost their home in a fire and are trying to find the arsonist responsible.',
'They lost their prize-winning pet, and need help recovering it from a dangerous location.',
'They know of a dragon who is currently away from its hoard, but they don\'t know for how long the dragon will be gone.',
'Their family was murdered by bandits/goblins/kobolds or some CR-appropriate threat, and they need help getting their revenge.',
'Their child/parent/spouse has gone missing without any signs of dissatisfaction or foul play. They need help figuring out what happened.',
'They were cursed by a hag many years ago to always be approached by random people in taverns and quite frankly they\'re getting sick of it.',
'They are suffering from a strange illness, hence why they were situated in an area away from other people. They are highly contagious.',
'They just like to be left alone to their drink.'
]

var shadyLocations = [
'Seated alone near the bar,',
'At a table almost hidden in shadow,',
'Sitting at a secluded table,',
'Leaning against the far wall,',
'Nearly hidden in the corner,'
]

var shadyDescriptions = [
' jittery',
' paranoid',
'n anxious',
' nervous',
' deceptively calm',
' tough',
' depressed',
' upset',
'n imposing'
]

var patronActivities = [
'trying to start a fight',
'throwing things at another table',
'harrassing the waitstaff',
'arguing with the bartender',
'engaged in a heated debate',
'drinking heavily',
'participating in a drinking contest',
'arguing over how to split the bill',
'discussing religious or political matters',
'singing a drinking song',
'playing a game of dice',
'playing a card game',
'sharing tales of past adventures—successes and failures',
'playing a game of darts',
'consumed in a philosophical conversation',
'playing some kind of guessing game',
'entranced by a dancer on the stage',
'listening to a singer',
'laughing in response to a joke',
'playing chess',
'dancing to music',
'watching some performers',
'listening to the band'
]

var roomSizes = [
'tiny',
'cramped',
'small',
'average sized',
'comfortably sized',
'spacious',
'large',
'huge'
]

var roomConditions = [
'disgusting',
'filthy',
'dirty',
'dingy',
'hygenic',
'taken care of',
'clean',
'spotless',
'well-cleaned',
'immaculate',
'pristine'
]

var wineDescriptors = [
'astringent',
'musty',
'vinegary',
'sour',
'cloying',
'corked',
'tart',
'dirty',
'raisiny',
'rough',
'bitter',
'flat',
'smokey',
'leathery',
'green',
'lean',
'dry',
'full',
'powerful',
'earthy',
'sweet',
'oaky',
'mellow',
'spicy',
'herbaceous',
'deep',
'toasty',
'vibrant',
'crisp',
'soft',
'buttery',
'aromatic',
'expressive',
'fruity',
'smooth',
'complex',
'rich'
]

var whiteVarieties = [
'Reisling',
'Gewürztraminer',
'Chardonnay',
'Sauvignon Blanc'
]

var redVarieties = [
'Shiraz',
'Merlot',
'Cabernet Sauvignon',
'Pinot Noir'
]

var wineOrigins = [
' bottom-shelf',
' poorly made',
' house-made',
' locally produced',
'n imported',
' finely made',
' famous vintage of'
]

var bouquetPhrases = [
'with a bouquet that is ',
'with a taste that is ',
'that is described as ',
'with flavors that are '
]

var beerVarieties = [
'lager',
'fruit ale',
'ale',
'pilsner',
'malt',
'porter',
'stout'
]

var beerVarietiesCapped = [
'Lager',
'Fruit Ale',
'Ale',
'Pilsner',
'Malt',
'Porter',
'Stout'
]

var beerColors = [
' light',
' pale',
' light amber',
' golden',
'n amber',
' reddish',
' light brown',
' copper',
' dark amber',
' medium brown',
' brown',
' chestnut brown',
' dark brown',
' blackish'
]

var beerOrigins = [
' poorly brewed',
' house-brewed',
' microbrewed',
' locally brewed',
'n imported',
' masterfully brewed'
]

var aleTypes = [
'',
'blonde ',
'brown ',
'cream ',
'dark ',
'golden ',
'honey ',
'light ',
'red '
]

var beerDescriptors = [
'n astringent',
' bitter',
' dry',
' sour',
' mild',
' sweet',
' spicy',
' pleasantly bitter',
' hoppy',
' complex',
' malty',
' nutty',
' full-bodied',
' refreshing',
' fruity',
' robust',
' crisp',
]

var beerNoteText = [
' with notes of ',
' with a hint of ',
' with an aftertaste of ',
' with a touch of '
]

var beerNotes = [
'vanilla',
'honey',
'barley',
'toffee',
'chocolate',
'caramel',
'citrus',
'malt',
'coffee'
]

var beerFinishes = [
'sour',
'rough',
'creamy',
'smooth',
'pleasant',
'rich'
]

var doublePrefix = 0;
var randomPrefix1 = '';
var randomPrefix2 = '';
var randomSuffix = '';
var tavernName = 'The Double Entendre';
var ownerOneGender = 0;
var ownerOne = ownerOneType[ownerOneGender];
var ownerOneHeSheThey = heSheThey[ownerOneGender];
var ownerOneheshethey = heshethey[ownerOneGender];
var ownerOneHisHerTheir = hisHerTheir[ownerOneGender];
var ownerOnehishertheir = hishertheir[ownerOneGender];
var ownerOnehimherthem = himherthem[ownerOneGender];
var secondOwnerDecider = 0;

var inspiration = 'nothing';
var gimmick = 'nothing';
var lifestyle = 'decent';
var lifestyleDecider = 0;
var drinkQuality = (lifestyleDecider)*2;
var drinkVariety = lifestyles.length*2;
var priceModifier = 1;
var wineOfferingCount = Math.floor((Math.random() * lifestyleDecider) + 2);
var beerOfferingCount = Math.round(Math.random() * lifestyleDecider + 3);
var theyNeverListen = 0;
var allRan = 0;

function boast(){
	document.getElementById('boastBox').innerHTML = 'With ' + numberWithCommas((prefixes.length * prefixes.length * suffixes.length) + (prefixes.length * suffixes.length)) + ' possible tavern names, over ' + numberToRounded(maritalStatuses.length * ownerOneType.length * heSheThey.length * ownerTwoNeutral.length * inspirations.length * gimmicks.length * (ownerSecrets.length+1) * (singleBackgrounds.length+1) * raceTypes.length * lifestyles.length) + ' story combinations, over ' + numberToRounded(tenderGenders.length * tenderRaces.length * tenderDispositions.length * tenderLooks.length * tenderDegrees.length * tenderSkinColors.length * tenderHairColors.length * tenderHairStyles.length) + ' possible bartenders, over ' + numberToRounded(clienteles.length * shadyQuests.length * shadyLocations.length * shadyDescriptions.length * patronActivities.length * patronActivities.length * patronActivities.length * tenderDegrees.length) + ' different clientele descriptions, and a whole lot of alcohol!';
}

var numberWithCommas = (x) => {
	return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

var numberToRounded = (x) => {
	if (x > 1000000000){
		return Math.floor(x/100000000)/10 + ' billion';
	} else if (x > 1000000){
		return Math.floor(x/100000)/10 + ' million';
	}
}


function saveOrPrint(){
	var printWindow = window.open('','PRINT','height=800,width=1000');
	
	printWindow.document.write('<html><head><title> Not Another Tavern Generator — ' + tavernName +'</title>');
	printWindow.document.write('<link rel="stylesheet" type="text/css" media="print" href="print.css">');
	printWindow.document.write('</head><body>');
	printWindow.document.write('<h1>' + tavernName + '</h1>');
	printWindow.document.write('<h2> The Tavern\'s Tale </h2>');
	printWindow.document.write(document.getElementById('nameDisplay').innerHTML);
	printWindow.document.write(document.getElementById('ownerDisplay').innerHTML);
	printWindow.document.write(document.getElementById('raceDisplay').innerHTML);
	printWindow.document.write(document.getElementById('secretDisplay').innerHTML);
	printWindow.document.write(document.getElementById('backstoryDisplay').innerHTML);
	printWindow.document.write(document.getElementById('inspirationDisplay').innerHTML);
	printWindow.document.write(document.getElementById('qualityDisplay').innerHTML);
	printWindow.document.write(document.getElementById('gimmickDisplay').innerHTML);
	printWindow.document.write('<h2> The Bartender </h2>');
	printWindow.document.write(document.getElementById('bartenderDisplay').innerHTML);
	printWindow.document.write('<h2> The Clientele </h2>');
	printWindow.document.write(document.getElementById('clienteleDisplay').innerHTML);
	printWindow.document.write('<h2> The Accommodations </h2>');
	printWindow.document.write(document.getElementById('roomsDisplay').innerHTML);
	printWindow.document.write('<h2> The Food & Drink </h2><h3> Beverages </h3><h3>Wines</h3>');
	printWindow.document.write(document.getElementById('winesDisplay').innerHTML);
	printWindow.document.write('<h3> Lagers & Ales </h3>');
	printWindow.document.write(document.getElementById('beersDisplay').innerHTML);
	printWindow.document.write('<h3> Liquors </h3>');
	printWindow.document.write(document.getElementById('liquorsDisplay').innerHTML);
	printWindow.document.write('<h2> Food Menu </h2> <h3> Starters </h3>');
	printWindow.document.write(document.getElementById('startersDisplay').innerHTML);
	printWindow.document.write('<h3> Salads </h3>');
	printWindow.document.write(document.getElementById('saladsDisplay').innerHTML);
	printWindow.document.write('<h3> Entrees </h3>');
	printWindow.document.write(document.getElementById('entreesDisplay').innerHTML);
	printWindow.document.write('<p> Created with Not Another Tavern Generator from The Copper Sanctum <br>©2018 Ian F Evans</p>');
	printWindow.document.write('</body></html>');
	
	printWindow.document.close();
	printWindow.focus();
	
	printWindow.print();
	printWindow.close();
}

function newTavern(){
	document.getElementById('descriptionText').style = 'height:65vh;overflow:auto;';
	document.getElementById('tavernButton').innerHTML = buttonSayings[clickCount];
	clickCount++;
	if(clickCount >= buttonSayings.length){
		clickCount = 0;
	}
	newName();
	newStory();
	newBartender();
	newClientele();
	newRooms();
	newFoodAndDrink();
	document.getElementById("saveOrPrintButton").disabled = false;
	document.getElementById("instructions").style = 'display:inline;font-size:.8em';
}

function newName(){
	doublePrefix = Math.floor(Math.random() * 20);
	randomPrefix1 = prefixes[Math.floor(Math.random() * prefixes.length)];
	randomPrefix2 = prefixes[Math.floor(Math.random() * prefixes.length)];
	while (randomPrefix1 == randomPrefix2){
		randomPrefix2 = prefixes[Math.floor(Math.random() * prefixes.length)];
	}
	randomSuffix = suffixes[Math.floor(Math.random() * suffixes.length)];
	
	if (doublePrefix <= 17) {
		tavernName = 'The ' + randomPrefix1 + ' ' + randomSuffix;
	} else {
		tavernName = 'The ' + randomPrefix1 + ' ' + randomPrefix2 + ' ' + randomSuffix;
	}
	
	document.getElementById('nameDisplay').innerHTML = tavernName;
	if (allRan == 1){
		document.getElementById('nameDisplay2').innerHTML = tavernName;
		document.getElementById('nameDisplay3').innerHTML = tavernName;
		document.getElementById('nameDisplay4').innerHTML = tavernName;
	}
	document.getElementById('titleDisplay').innerHTML =  '<h1><button onclick="newName()" class="innerBtn">' + tavernName + '</button></h1><h2><button onclick="newStory()" class="innerBtn"> The Tavern\'s Tale </button></h2>';
}

function newStory() {
	lifestyleDecider = Math.floor(Math.random() * lifestyles.length);
	lifestyle = lifestyles[lifestyleDecider];
	var maritalStatus = maritalStatuses[Math.floor(Math.random() * maritalStatuses.length)];
	var ownerOneGenderDecider = Math.floor(Math.random() * 100);
	
	if (ownerOneGenderDecider > 59) {
		ownerOneGender = 0;
	} else if (ownerOneGenderDecider > 19) {
		ownerOneGender = 1;
	} else if (ownerOneGenderDecider > 9) {
		ownerOneGender = 2;
	} else {
		ownerOneGender = 3;
	}
	
	ownerOne = ownerOneType[ownerOneGender];
	ownerOneHeSheThey = heSheThey[ownerOneGender];
	ownerOneheshethey = heshethey[ownerOneGender];
	ownerOneHisHerTheir = hisHerTheir[ownerOneGender];
	ownerOnehishertheir = hishertheir[ownerOneGender];
	ownerOnehimherthem = himherthem[ownerOneGender];
	ownerOneRaceRarityDecider = Math.floor(Math.random() * 10);
	var ownerOneRaceRarity = 1;
	var ownerOneHasSecret = Math.floor(Math.random() * 5);
	var ownerOneSecretNumber = Math.floor(Math.random() * (ownerSecrets.length-(lifestyles.length/2)) + (lifestyleDecider/2));
	var ownerOneHasOtherBackground = Math.floor(Math.random() * 3);
	var ownerOneBackgroundNumber = Math.floor(Math.random() * singleBackgrounds.length);
	
	secondOwnerDecider = Math.floor(Math.random() * 4);
	var ownerTwoGenderDecider = Math.floor(Math.random() * 100);
	var ownerTwoGender = 0;
	
	if (ownerTwoGenderDecider > 59) {
		ownerTwoGender = 0;
	} else if (ownerTwoGenderDecider > 19) {
		ownerTwoGender = 1;
	} else if (ownerTwoGenderDecider > 9) {
		ownerTwoGender = 2;
	} else {
		ownerTwoGender = 3;
	}
	
	var ownerTwoNumber = Math.floor(Math.random() * ownerTwoNeutral.length);
	var ownerTwo = ownerTwoNeutral[ownerTwoNumber];
	var ownerTwoRaceRarityDecider = Math.floor(Math.random() * 10);
	var ownerTwoRaceRarity = 1;
	var ownerTwoHasSecret = Math.floor(Math.random() * 4);
	var ownerTwoSecretNumber = Math.floor(Math.random() * (ownerSecrets.length-(lifestyles.length/2)) + (lifestyleDecider/2));
	var ownerTwoHasOtherBackground = Math.floor(Math.random() * 3);
	var ownerTwoBackgroundNumber = Math.floor(Math.random() * singleBackgrounds.length);
	
	inspiration = inspirations[Math.floor(Math.random() * inspirations.length)];
	gimmick = gimmicks[Math.floor(Math.random() * (gimmicks.length-lifestyles.length*2) + lifestyleDecider*2)];
	
	if (ownerOneRaceRarityDecider < 1) {
		ownerOneRaceRarity = 0;
	} else if (ownerOneRaceRarityDecider < 7) {
		ownerOneRaceRarity = 1;
	} else if (ownerOneRaceRarityDecider < 9) {
		ownerOneRaceRarity = 2;
	} else {
		ownerOneRaceRarity = 3;
	}
	
	if (secondOwnerDecider < 1) {
		document.getElementById('ownerDisplay').innerHTML = ' is owned by a' + maritalStatus + ' ' + ownerOne;
		document.getElementById('raceDisplay').innerHTML = ' whose race is ' + raceTypes[ownerOneRaceRarity] + ' in the area. ';
		if (ownerOneHasSecret < 2) {
			document.getElementById('secretDisplay').innerHTML = 'The owner is an upstanding citizen with no hidden secrets or unsusual quirks. ';
		} else {
			document.getElementById('secretDisplay').innerHTML = 'The owner ' + ownerSecrets[ownerOneSecretNumber] + '. ';
		}
		if (ownerOneHasOtherBackground < 1) {
			document.getElementById('backstoryDisplay').innerHTML = 'Before owning the tavern, ' + ownerOneheshethey + ' worked there under the previous owner. ';
		} else {
			document.getElementById('backstoryDisplay').innerHTML = 'Before owning the tavern, ' + ownerOneheshethey + ' ' + singleBackgrounds[ownerOneBackgroundNumber] + '. ';
		}
	} else {
		switch (ownerTwoGender){
			case 0:
				ownerTwo = ownerTwoMale[ownerTwoNumber];
				break;
			case 1:
				ownerTwo = ownerTwoFemale[ownerTwoNumber];
				break;
			case 2:
				ownerTwo = ownerTwoNeutral[ownerTwoNumber];
				break;
			case 3:
				ownerTwo = ownerTwoNonbinary[ownerTwoNumber];
		}
		if (maritalStatus == ' married') {
			switch (ownerTwo){
				case 'boyfriend':
					ownerTwo = 'husband';
					break;
				case 'girlfriend':
					ownerTwo = 'wife';
					break;
				case 'androgynous lover':
					ownerTwo = 'androgynous spouse';
					break;
				case 'nonbinary lover':
					ownerTwo = 'nonbinary spouse';
			}
		}
		document.getElementById('ownerDisplay').innerHTML = ' is owned by a' + maritalStatus + ' ' + ownerOne + ' and ' + ownerOnehishertheir + ' ' + ownerTwo;

		if (ownerTwoRaceRarityDecider < 1) {
			ownerTwoRaceRarity = 0;
		} else if (ownerTwoRaceRarityDecider < 7) {
			ownerTwoRaceRarity = 1;
		} else if (ownerTwoRaceRarityDecider < 9) {
			ownerTwoRaceRarity = 2;
		} else {
			ownerTwoRaceRarity = 3;
		}
		
		if (ownerOneRaceRarity == ownerTwoRaceRarity || ownerTwoNumber < 3){
			document.getElementById('raceDisplay').innerHTML = ', both of whom are members of a race that is ' + raceTypes[ownerOneRaceRarity] + ' in the area. ';
		} else {
			document.getElementById('raceDisplay').innerHTML = '. One of the owners is a member of a race that is ' + raceTypes[ownerOneRaceRarity] + ' for the area, while the other owner\'s race is ' + raceTypes[ownerTwoRaceRarity] + ' in the area. ';
		}
		
		if (ownerOneHasSecret < 2 && ownerTwoHasSecret < 2){
			document.getElementById('secretDisplay').innerHTML = 'Both of the owners are law-abiding citizens with no hidden secrets or notable personality quirks. ';
		} else if (ownerOneHasSecret < 2) {
			document.getElementById('secretDisplay').innerHTML = 'One of the owners has no hidden secrets or unusual quirks, but the other ' + ownerSecrets[ownerTwoSecretNumber] + '. ';
		} else if (ownerTwoHasSecret < 2) {
			document.getElementById('secretDisplay').innerHTML = 'One of the owners has no hidden secrets or unusual quirks, but the other ' + ownerSecrets[ownerOneSecretNumber] + '. ';
		} else if (ownerOneSecretNumber == ownerTwoSecretNumber) {
			document.getElementById('secretDisplay').innerHTML = 'Both of the owners ' + ownerJointSecret[ownerOneSecretNumber] + '. ';
		} else {
			document.getElementById('secretDisplay').innerHTML = 'One of the owners ' + ownerSecrets[ownerOneSecretNumber] + ', and the other ' + ownerSecrets[ownerTwoSecretNumber] + '. ';
		}
		
		if (ownerOneHasOtherBackground < 1 && ownerTwoHasOtherBackground < 1){
			document.getElementById('backstoryDisplay').innerHTML = 'Before they owned the tavern, both owners worked there under the previous owner. ';
		} else if (ownerOneHasOtherBackground < 1) {
			document.getElementById('backstoryDisplay').innerHTML = 'Before owning the tavern, one of the owners worked there under the previous owner, while the other ' + singleBackgrounds[ownerTwoBackgroundNumber] + '. ';
		} else if (ownerTwoHasOtherBackground < 1) {
			document.getElementById('backstoryDisplay').innerHTML = 'Before owning the tavern, one of the owners worked there under the previous owner, while the other ' + singleBackgrounds[ownerOneBackgroundNumber] + '. ';
		} else if (ownerOneBackgroundNumber == ownerTwoBackgroundNumber) {
			document.getElementById('backstoryDisplay').innerHTML = 'Before the owned the tavern, both owners ' + jointBackgrounds[ownerOneBackgroundNumber] + '. ';
		} else {
			document.getElementById('backstoryDisplay').innerHTML = 'Before owning the tavern, one of the owners ' + singleBackgrounds[ownerOneBackgroundNumber] + ', while the other ' + singleBackgrounds[ownerTwoBackgroundNumber] + '. ';
		}
	}
	
	document.getElementById('inspirationDisplay').innerHTML = 'The inspiration for the tavern\'s name was ' + inspiration + '. ';
	document.getElementById('qualityDisplay').innerHTML = 'It is a tavern of ' + lifestyle + ' quality, ';	
	document.getElementById('gimmickDisplay').innerHTML = 'and its main draw is ' + gimmick +'. ';
}

function newBartender(){
	var bartenderDecider = Math.floor(Math.random() * 10);
	var ownerTendsBar = true;
	var reasonForOwnerTendingBar = 'blah';
	var addedS = 's';
	var isOrAre = 'is';
	var hasorhave = 'has';
	var tenderAge = tenderAges[Math.floor(Math.random() * tenderAges.length)];
	var tenderGenderDecider = Math.floor(Math.random() * 10);
	var tenderGender = 0;
	var tenderHeSheThey = heSheThey[tenderGender];
	var tenderheshethey = heshethey[tenderGender];
	var tenderHisHerTheir = hisHerTheir[tenderGender];
	var tenderhishertheir = hishertheir[tenderGender];
	var tenderhimherthem = himherthem[tenderGender];
	var tenderRace = tenderRaces[Math.floor(Math.random() * tenderRaces.length)];
	var tenderSkinAndHair = ' words';
	var tenderColor = tenderSkinColors[Math.floor(Math.random() * tenderSkinColors.length)];
	var tenderOther = 'decorated';
	var tenderDispositionNumber = Math.floor(Math.random() * tenderDispositions.length);
	var tenderHairColor = tenderHairColors[Math.floor(Math.random() * tenderHairColors.length)];
	var tenderHairStyle = tenderHairStyles[Math.floor(Math.random() * tenderHairStyles.length)];
	var degree1 = tenderDegrees[Math.floor(Math.random() * tenderDegrees.length)];
	var degree2 = tenderDegrees[Math.floor(Math.random() * tenderDegrees.length)];
	while (degree2 == degree1){
		degree2 = tenderDegrees[Math.floor(Math.random() * tenderDegrees.length)];
	}
	var degree3 = tenderDegrees[Math.floor(Math.random() * tenderDegrees.length)];
	var tenderPhysique = tenderPhysiques[Math.floor(Math.random() * tenderPhysiques.length)];
	var tenderText = 'Ain\'t nobody at the bar!';
	if(gimmick == 'the hilarious bartender'){
		tenderDispositionNumber = Math.floor(Math.random()*11);
	}
	
	switch (lifestyle){
		case 'squalid':
		case 'poor':
			if (bartenderDecider == 10){
				ownerTendsBar = false;
			} else {
				if (ownerOneheshethey == 'they'){
					addedS = '';
					isOrAre = 'are';
				}
				if (bartenderDecider<5){
					reasonForOwnerTendingBar = 'because ' + ownerOneheshethey + ' can\'t afford to hire another person to do the job. ';
				} else if (bartenderDecider<8){
					reasonForOwnerTendingBar = 'to maintain the illusion of the tavern being of ' + lifestyle + ' quality. ';
				} else {
					reasonForOwnerTendingBar = 'because ' + ownerOneheshethey + ' enjoy' + addedS + ' doing the job ' + ownerOnehimherthem + 'self. ';
				}
			}
			break;
		case 'modest':
		case 'comfortable':
			if (bartenderDecider < 8){
				ownerTendsBar = false;
			} else {
				if (ownerOneheshethey == 'they'){
					addedS = '';
					isOrAre = 'are';
				}
				reasonForOwnerTendingBar = 'because ' + ownerOneheshethey + ' enjoy' + addedS + ' doing the job ' + ownerOnehimherthem + 'self. ';
			}
			break;
		case 'wealthy':
		case 'aristocratic':
			ownerTendsBar = false;
	}
	
	if (ownerTendsBar == true){
		if (secondOwnerDecider < 1){
			tenderText = 'The owner of <span id="nameDisplay2">' + tavernName + '</span> tends the bar ' + reasonForOwnerTendingBar + ownerOneHisHerTheir + ' disposition is generally described as ' + degree1 + ' ' + tenderDispositions[tenderDispositionNumber] + '. ' + ownerOneHeSheThey + ' ' + isOrAre + ' ' + degree2 + ' ' + tenderLooks[Math.floor(Math.random() * tenderLooks.length)] + ' with ' + tenderColor + ' skin and ' + tenderHairColor + ' hair in a ' + tenderHairStyle + ' style. Physically, ' + ownerOneheshethey + ' ' + isOrAre + ' ' + degree3 + ' ' + tenderPhysique + '.';
		} else {
			tenderText = 'One of the owners of <span id="nameDisplay2">' + tavernName + '</span> tends the bar ' + reasonForOwnerTendingBar + ownerOneHisHerTheir + ' disposition is generally described as ' + degree1 + ' ' + tenderDispositions[tenderDispositionNumber] + '. ' + ownerOneHeSheThey + ' ' + isOrAre + ' ' + degree2 + ' ' + tenderLooks[Math.floor(Math.random() * tenderLooks.length)] + ' with ' + tenderColor + ' skin and ' + tenderHairColor + ' hair in a ' + tenderHairStyle + ' style. Physically, ' + ownerOneheshethey + ' ' + isOrAre + ' ' + degree3 + ' ' + tenderPhysique + '.';
		}
	} else {
		if (tenderGenderDecider > 5) {
			tenderGender = 0;
		} else if (tenderGenderDecider > 2) {
			tenderGender = 1;
		} else if (tenderGenderDecider > 1) {
			tenderGender = 2;
		} else {
			tenderGender = 3;
		}
		tenderHeSheThey = heSheThey[tenderGender];
		tenderheshethey = heshethey[tenderGender];
		tenderHisHerTheir = hisHerTheir[tenderGender];
		tenderhishertheir = hishertheir[tenderGender];
		tenderhimherthem = himherthem[tenderGender];
		if (tenderheshethey == 'they'){
			addedS = '';
			isOrAre = 'are';
			hasorhave = 'have';
		}
		
		switch (tenderRace){ 
			case 'dragonborn':
				tenderColor = dragonBornColors[Math.floor(Math.random() * dragonBornColors.length)];
				tenderSkinAndHair = ' scales are ' + tenderColor + ' in color.';
				break;
			case 'tiefling':
				tenderColor = tieflingColors[Math.floor(Math.random() * tieflingColors.length)];
				tenderOther = tieflingHorns[Math.floor(Math.random() * tieflingHorns.length)];
				tenderSkinAndHair = ' skin is a ' + tenderColor + ' color, and ' + tenderheshethey + ' ' + hasorhave + ' ' + tenderOther + ' horns. ' + tenderHeSheThey + ' ' + hasorhave + ' ' + tenderHairColor + ' hair, worn in a ' + tenderHairStyle + ' style.';
				break;
			case 'half-orc':
				tenderColor = horcColors[Math.floor(Math.random() * horcColors.length)];
				tenderOther = horcTusks[Math.floor(Math.random() * horcTusks.length)];
				tenderSkinAndHair = ' skin is ' + tenderColor + ' in color, and ' + tenderheshethey + ' ' + hasorhave + ' ' + tenderOther + ' tusks. ' + tenderHeSheThey + ' ' + hasorhave + ' ' + tenderHairColor + ' hair, worn in a ' + tenderHairStyle + ' style.';
				break;
			case 'dwarf':
			case 'elf':
			case 'halfling':
			case 'human':
			case 'gnome':
			case 'half-elf':
				tenderSkinAndHair = ' skin is ' + tenderColor + ', and ' + tenderheshethey + ' ' + hasorhave + ' ' + tenderHairColor + ' hair, kept in a ' + tenderHairStyle + ' style.';		
		}
		tenderText = 'The bartender at <span id="nameDisplay2">' + tavernName + '</span> is a' + tenderAge + ' ' + tenderGenders[tenderGender] + ' ' + tenderRace + ' who is ' + degree1 + ' ' + tenderLooks[Math.floor(Math.random() * tenderLooks.length)] + '. ' + tenderHeSheThey + ' ' + isOrAre + ' often ' + degree2 + ' ' + tenderDispositions[tenderDispositionNumber] + ' in disposition. ' + tenderHisHerTheir + tenderSkinAndHair + ' Physically, ' + tenderheshethey + ' ' + isOrAre + ' ' + degree3 + ' ' + tenderPhysique + '.';
	}
	document.getElementById('bartenderHeading').innerHTML = '<h2><button onclick="newBartender()" class="innerBtn"> The Bartender </button></h2>';
	document.getElementById('bartenderDisplay').innerHTML = tenderText;
}

function newClientele() {
	var clienteleDegree = tenderDegrees[Math.floor(Math.random() * tenderDegrees.length)];
	var clienteleDecider = Math.floor(Math.random() * (clienteles.length-(lifestyles.length-1)) + (lifestyleDecider));
	var clientele = clienteles[clienteleDecider];
	var isOrAre = 'are';
	var howMany = 'some';
	var peopleOrPerson = 'people';
	var patronCount = (Math.floor(Math.random() * 30) + 1) ;
	var thereIsAShadyFigure = Math.floor(Math.random() * 2);
	var itIsLegit = Math.floor(Math.random() * 5);
	var shadyText = '';
	var shadyQuest = shadyQuests[Math.floor(Math.random() * shadyQuests.length)];
	var shadyDescription = shadyDescriptions[Math.floor(Math.random() * shadyDescriptions.length)];
	var shadyLocation = shadyLocations[Math.floor(Math.random() * shadyLocations.length)];
	
	var activityOneNumber = Math.floor(Math.random() * (patronActivities.length-clienteles.length/2) + Math.round(clienteleDecider/2));
	
	var activityTwoArray = patronActivities.slice();
	activityTwoArray.splice(activityOneNumber, 1);
	var activityTwoNumber = Math.floor(Math.random() * (activityTwoArray.length-clienteles.length/2) + Math.round(clienteleDecider/2));
	
	var activityThreeArray = activityTwoArray.slice();
	activityThreeArray.splice(activityTwoNumber, 1);
	var activityThreeNumber = Math.floor(Math.random() * (activityThreeArray.length-clienteles.length/2) + Math.round(clienteleDecider/2));
	
	var activityFourArray = activityThreeArray.slice();
	activityFourArray.splice(activityThreeNumber, 1);
	var activityFourNumber = Math.floor(Math.random() * (activityFourArray.length-clienteles.length/2) + Math.round(clienteleDecider/2));
	
	var activityOne = patronActivities[activityOneNumber];
	var activityTwo = activityTwoArray[activityTwoNumber];
	var activityThree = activityThreeArray[activityThreeNumber];
	var activityFour = activityFourArray[activityFourNumber];
		
	var patronsAreDoing = 'They are drinking alone to drown away their troubles';
	
	patronCount = patronCount + (3 * lifestyleDecider);
	
	if (patronCount == 1){
		isOrAre = 'is';
		peopleOrPerson = 'person';
		howMany = 'one';
		thereIsAShadyFigure = false;
	} else if (patronCount < 4){
		howMany = 'a couple';
		patronsAreDoing = 'They are ' + activityOne;
	} else if (patronCount < 6){
		howMany = 'a few';
		patronsAreDoing = 'A couple of them are ' + activityOne;
	} else if (patronCount < 7){
		howMany = 'several';
		patronsAreDoing = 'A few of the patrons are ' + activityOne;
	} else if (patronCount < 10){
		howMany = 'around ten';
		patronsAreDoing = 'Some of them are ' + activityOne;
	} else if (patronCount < 12){
		howMany = 'nearly a dozen';
		patronsAreDoing = 'A couple of the patrons are ' + activityOne + ', while some others are ' + activityTwo;
	} else if (patronCount < 17){
		howMany = 'over a dozen';
		patronsAreDoing = 'Some of the patrons are ' + activityOne + ', others are ' + activityTwo + ', and a couple others are ' + activityThree;
	} else if (patronCount < 24){
		howMany = 'around twenty';
		patronsAreDoing = 'Several patrons are ' + activityOne + '. A few are ' + activityTwo + ', and some others are ' + activityThree;
	} else if (patronCount < 28){
		howMany = 'over two dozen';
		patronsAreDoing = 'A couple are ' + activityOne + ', while several are ' + activityTwo + '. There are also a few ' + activityThree;
	} else if (patronCount < 32){
		howMany = 'around thirty';
		patronsAreDoing = 'One group of patrons is ' + activityOne + '. Another group is ' + activityTwo + ', while a nearby table is ' + activityThree + '. There are also several patrons ' + activityFour;
	} else if (patronCount < 38){
		howMany = 'around three dozen';
		patronsAreDoing = 'A small group is ' + activityOne + ', while a few others are ' + activityTwo + '. The table nearest the door is ' + activityThree + ', while a group near the bar is ' + activityFour;
	} else if (patronCount < 41){
		howMany = 'around forty';
		patronsAreDoing = 'Several patrons are ' + activityOne + ', others are ' + activityTwo + ', some are ' + activityThree + ', and there are also some ' + activityFour;
	} else {
		howMany = 'over forty';
		patronsAreDoing = 'About a dozen of them are ' + activityOne + '. Another group is ' + activityTwo + '. There are several people ' + activityThree + ', and another small group is ' + activityFour;
	}
	
	if (thereIsAShadyFigure){
		if(itIsLegit){
			shadyText = shadyLocation + ' there is a' + shadyDescription + ' looking figure. ' + shadyQuest;
		} else {
			shadyText = shadyLocation + ' there is a manequin/scarecrow/broom that is dressed up to look like the stereotypical "shady figure in a bar" so frequently talked about in tales of taverns. The bartender has a running tally on a nearby chalkboard to record how many people are tricked by it on a daily basis.';
		}
	}
	
	document.getElementById('clienteleHeading').innerHTML = '<h2><button onclick="newClientele()" class="innerBtn"> The Clientele </button></h2>';
	document.getElementById('clienteleDisplay').innerHTML = 'On a typical night, the clientele at <span id="nameDisplay3">' + tavernName + '</span> can be described as ' + clienteleDegree + ' ' + clientele + '. On this occasion, there ' + isOrAre + ' ' + howMany + ' other ' + peopleOrPerson + ' currently in the tavern. ' + patronsAreDoing + '. ' + shadyText;
}
function newRooms(){
	var roomDegree1 = tenderDegrees[Math.floor(Math.random() * tenderDegrees.length)];
	var roomSizeNumber = Math.floor(Math.random() * roomSizes.length);
	var roomSize = roomSizes[roomSizeNumber];
	var roomDegree2 = tenderDegrees[Math.floor(Math.random() * tenderDegrees.length)];
	var roomHygeineNumber = Math.floor(Math.random() * (roomConditions.length-lifestyles.length))+lifestyleDecider;
	var roomHygeine = roomConditions[roomHygeineNumber];
	var numberOfRooms = Math.floor(Math.random() * lifestyleDecider) + Math.floor(Math.random() * 3) + 1;
	var roomCostModifier = Math.floor((roomSizeNumber + roomHygeineNumber)/2);
	isOrAre = 'are';
	addedS = 's';
	switch (numberOfRooms){
		case 1:
			numberOfRooms = 'one';
			isOrAre = 'is';
			addedS = '';
			break;
		case 2:
			numberOfRooms = 'two';
			break;
		case 3:
			numberOfRooms = 'three';
			break;
		case 4:
			numberOfRooms = 'four';
			break;
		case 5:
			numberOfRooms = 'five';
			break;
		case 6:
			numberOfRooms = 'six';
			break;
		case 7:
			numberOfRooms = 'seven';
	}
	switch (lifestyleDecider){
		case 0:
			roomCost = (1 + Math.floor(Math.random()*5) + roomCostModifier) + 'cp.';
			break;
		case 1:
			roomCost = (5 + Math.floor(Math.random()*5) + roomCostModifier);
			if (roomCost>10){
				roomCost = '1sp and ' + (roomCost-10) + 'cp.';
			} else if (roomCost == 10){
				roomCost = '1sp.'
			} else {
				roomCost = roomCost + 'cp.';
			}
			break;
		case 2:
			roomCost = (1 + Math.floor(Math.random()*4) + roomCostModifier) + 'sp.';
			break;
		case 3:
			roomCost = (3 + Math.floor(Math.random()*8) + roomCostModifier);
			if (roomCost>10){
				roomCost = '1gp and ' + (roomCost-10) + 'sp.';
			} else if(roomCost == 10){
				roomCost = '1gp.'
			} else {
				roomCost = roomCost + 'sp.';
			}
			break;
		case 4:
			roomCost = (5 + Math.floor(Math.random()*21) + roomCostModifier);
			if (roomCost >= 30){
				roomCost = '3gp.';
			} else if (roomCost > 20) {
				roomCost = '2gp and ' + (roomCost-20) + 'sp.';
			} else if (roomCost == 20) {
				roomCost = '2gp.';
			} else if (roomCost >10) {
				roomCost = '1gp and ' + (roomCost-10) + 'sp.';
			} else if (roomCost == 10) {
				roomCost = '1gp.';
			} else {
				roomCost = roomCost + 'sp.';
			}
			break;
		case 5:
			roomCost = Math.round((30 + Math.floor(Math.random()*(40+roomCostModifier)))/10) + ' gp.';
	}
	document.getElementById('roomsHeading').innerHTML = '<h2><button onclick="newRooms()" class = "innerBtn"> The Accommodations </button></h2>';
	document.getElementById('roomsDisplay').innerHTML = 'The rooms for rent at <span id="nameDisplay4">' + tavernName + '</span> are ' + roomDegree1 + ' ' + roomSize + ' and ' + roomDegree2 + ' ' + roomHygeine + '. There ' + isOrAre + ' currently ' + numberOfRooms + ' room' + addedS + ' available for rent. The cost for a night\'s stay is ' + roomCost;
}
function newFoodAndDrink(){
	document.getElementById('foodAndDrinkHeadingArea').innerHTML = '<h2><button onclick="newFoodAndDrink()" class="innerBtn"> The Food & Drink </button></h2>';
	newDrinkList();
	newFoodMenu();
}
function newDrinkList(){
	document.getElementById('drinksDisplay').style = 'display:inline-block';
	document.getElementById('drinkTitle').innerHTML = '<h2><button onclick="newDrinkList()" class="innerBtn"> Beverages </button></h2>';
	drinkQuality = (lifestyleDecider)*2;
	drinkVariety = lifestyles.length*2;
	wineOfferingCount = Math.floor((Math.random() * lifestyleDecider) + 2);
	beerOfferingCount = Math.round(Math.random() * lifestyleDecider + 3);
	
	switch(gimmick){
		case 'the quality of the drinks':
			drinkQuality = drinkQuality + 1;
			drinkVariety = drinkVariety + 3;
			priceModifier = 1.75;
			break;
		case 'its extensive drink menu':
			drinkVariety = drinkVariety - 3;
			priceModifier = 1.6;
			wineOfferingCount = wineOfferingCount + Math.floor(Math.random() * 5);
			beerOfferingCount = beerOfferingCount + Math.floor(Math.random() * 6);
			break;
		case 'their selection of wines imported from several far away places':
			drinkVariety = drinkVariety - 4;
			priceModifier = 1.5;
			wineOfferingCount = wineOfferingCount + Math.floor(Math.random()*4);
			wineOriginModifier = 1;
			break;
		case 'a fountain that flows freely with alcohol':
			drinkQuality = drinkQuality * .75;
			drinkVariety = drinkVariety + 5;
			priceModifier = 1.25;
			wineOfferingCount = wineOfferingCount - Math.floor(Math.random()*2);
			break;
		case 'the cheap booze':
			drinkQuality = drinkQuality * .5;
			drinkVariety = drinkVariety * .5;
			priceModifier = .2;
			wineOriginModifier = .8;
	}
	
	newWines();
	newBeers();
	newLiquors();
}

function newWines(){
	var wineName = '';
	var wineDescription = '';
	var redWine = false;
	var redOrWhite = 'white';
	var wineType = '';
	var wineTypeNumber = 0;
	var flavorOneNumber = 0;
	var flavorOne = 'yucky';
	var flavorTwoNumber = 1;
	var flavorTwo = 'headachey';
	var wineOriginNumber = 0;
	var wineOriginModifier = 0;
	var winePriceTotal = 0;
	var winePrice = '';
	var glassPriceTotal = 0;
	var glassPrice = '';
	var wineList = [];
	
	for (var i=0;i<wineOfferingCount;i++){ 
		redWine = Math.floor(Math.random() * 2);
		wineTypeNumber = Math.floor(Math.random() * 4);
		switch (redWine){
			case 1:
				wineType = redVarieties[wineTypeNumber];
				redOrWhite = 'red';
				break;
			case 0:
				wineType = whiteVarieties[wineTypeNumber];
				redOrWhite = 'white';
		}
		wineOriginNumber=Math.round(Math.random() * (wineOrigins.length-lifestyles.length/2) + Math.round(lifestyleDecider/2));
		if (wineOriginModifier >= 1){
			wineOriginNumber = Math.min(wineOrigins.length-1,wineOriginNumber+wineOriginModifier);
		} else if (wineOriginModifier > 0){
			wineOriginNumber = Math.floor(wineOriginNumber * wineOriginModifier);
		} else {
			wineOriginNumber = Math.min(wineOrigins.length-1,wineOriginNumber);
		}
		if (gimmick == 'their selection of wines imported from several far away places' && Math.floor(Math.random()*3) > 0){
			wineOriginNumber = 4;
		}
		if (wineOriginNumber == 2){
			wineName = 'House';
		} else {
			wineName = prefixes[Math.floor(Math.random() * prefixes.length)] + ' ' + suffixes[Math.floor(Math.random() * suffixes.length)];
		}
		flavorOneNumber = Math.min(Math.floor(Math.random() * (wineDescriptors.length-(drinkVariety)) + drinkQuality + wineOriginNumber),wineDescriptors.length-1);
		flavorOne = wineDescriptors[flavorOneNumber];
		var descriptorTwoArray  = wineDescriptors.slice();
		descriptorTwoArray.splice(flavorOneNumber,1);
		flavorTwoNumber = Math.min(Math.floor(Math.random() * (descriptorTwoArray.length-(drinkVariety+wineOrigins.length)) + drinkQuality + wineOriginNumber),descriptorTwoArray.length-1);
		flavorTwo = descriptorTwoArray[flavorTwoNumber];
		winePriceTotal = priceModifier * ((flavorOneNumber + flavorTwoNumber)/2 + drinkQuality + wineOfferingCount + ((wineOriginNumber+1) * (wineOriginNumber+1) * (wineOriginNumber+1)));
		glassPriceTotal = winePriceTotal/3;
		
		if (glassPriceTotal >= 100){
			glassPrice = Math.floor(glassPriceTotal/100) + 'gp/glass';
		} else if (glassPriceTotal >= 10){
			glassPrice = Math.floor(glassPriceTotal/10) + 'sp/glass';
		} else {
			winePrice = Math.floor(glassPriceTotal) + 'cp/glass';
		}
		
		if (winePriceTotal >= 95){
			winePrice = Math.round(winePriceTotal/100) + 'gp/bottle';
		} else if (winePriceTotal >= 10){
			winePrice = Math.round(winePriceTotal/10) + 'sp/bottle';
		} else {
			winePrice = Math.round(winePriceTotal) + 'cp/bottle';
		}
		
		wineDescription = '<p><strong><i>' + wineName + ' ' + wineType + '</strong></i><br> A' + wineOrigins[wineOriginNumber] + ' ' + redOrWhite + ' wine ' + bouquetPhrases[Math.floor(Math.random()*bouquetPhrases.length)] + flavorOne + ' and ' + flavorTwo + '.<br>' + winePrice + ' ' + glassPrice + '</p>';
		wineList.splice(wineList.length,1,wineDescription);
	}
	var wineListToString = wineList.join(" ");
	document.getElementById('wineTitle').innerHTML = '<h3><button onclick="newWines()" class="innerBtn"> Wine List </button></h3>';
	document.getElementById('winesDisplay').innerHTML = wineListToString;	
}

function newBeers(){
	var beerName ='';
	var beerDescription = '';
	var beerOriginNumber = 0;
	var beerOriginModifier = 0;
	var beerTypeNumber = 0;
	var beerType = '';
	var beerFlavorNumber = 0;
	var beerFlavor = 'hoppy';
	var beerHasNote = 0;
	var beerNoteNumber = 0;
	var beerNote = 'delicious';
	var beerFinishNumber = 0;
	var beerFinish = 'wonderful';
	var beerColorNumber = 0;
	var beerColor = 'amber';
	var beerABV = 5.7;
	var beerPriceTotal = 0;
	var beerPrice = '';
	var pintPriceTotal = 0;
	var pintPrice = '';
	var beerList = [];
	
	for (var j=0;j<beerOfferingCount;j++){
		beerTypeNumber = Math.floor(Math.random() * beerVarieties.length);
		beerType = beerVarieties[beerTypeNumber];
		beerTypeCaps = beerVarietiesCapped[beerTypeNumber];
		if (beerType == 'ale') {
			beerType = aleTypes[Math.floor(Math.random() * aleTypes.length)] + 'ale';
		}
		
		beerOriginNumber  = Math.floor(Math.random() * beerOrigins.length);
		if (beerOriginNumber == 1){
			beerName = 'House';
		} else {
			beerName = prefixes[Math.floor(Math.random() * prefixes.length)] + ' ' + suffixes[Math.floor(Math.random() * suffixes.length)];
		}
		beerColorNumber = Math.floor(Math.random() * 7) + beerTypeNumber;
		beerColor = beerColors[beerColorNumber];
		beerFlavorNumber = Math.floor(Math.random() * beerDescriptors.length);
		beerFlavor = beerDescriptors[beerFlavorNumber];
		beerNoteNumber = Math.floor(Math.random() * beerNotes.length);
		if (beerHasNote == 0){
			beerNote = '';
		} else {
			beerNote = beerNoteText[Math.floor(Math.random() * beerNoteText.length)] + beerNotes[beerNoteNumber];
		}
		beerFinishNumber = Math.floor(Math.random() * beerFinishes.length);
		beerFinish = beerFinishes[beerFinishNumber];
		beerHasNote = Math.floor(Math.random() * 2);
		beerABV = (Math.round(((drinkQuality + beerTypeNumber/2 + beerOriginNumber + beerColorNumber/2 + Math.floor(Math.random() * 3 + 11))/5.5 + beerOriginNumber/2) * 100))/100;
		beerPriceTotal = priceModifier * 2 * ((beerFlavorNumber + (4*beerHasNote*((beerNoteNumber+1)/4)) + beerFinishNumber)/(2+beerHasNote/2) + drinkQuality + beerOfferingCount + beerOriginNumber + beerABV);
		pintPriceTotal = beerPriceTotal/5;
		if (pintPriceTotal >= 10){
			pintPrice = Math.floor(pintPriceTotal/10) + 'sp/pint';
		} else {
			pintPrice = Math.floor(pintPriceTotal) + 'cp/pint';
		}
		
		if (beerPriceTotal >= 10){
			beerPrice = Math.floor(beerPriceTotal/10) + 'sp/gallon';
		} else {
			beerPrice = Math.round(beerPriceTotal) + 'cp/gallon';
		}
		
		beerDescription = '<p><strong><i>' + beerName + ' ' + beerTypeCaps + '</strong></i><br>' +beerABV + '% ABV<br>A' + beerOrigins[beerOriginNumber] + ' ' + beerType + ' with a' + beerColor + ' color. It has a' + beerFlavor + ' flavor' + beerNote + ' and a ' + beerFinish + ' finish.<br>' + beerPrice + ' ' + pintPrice +'</p>';
		beerList.splice(beerList.length,1,beerDescription);
	}
	
	var beerListToString = beerList.join(" ");
	document.getElementById('beerTitle').innerHTML = '<h3><button onclick="newBeers()" class="innerBtn"> Lagers & Ales </button></h3>';
	document.getElementById('beersDisplay').innerHTML = beerListToString;
}

function newLiquors(){
	document.getElementById('liquorTitle').innerHTML = '<h3><button onclick="theyNeverListen++;newLiquors()" class="innerBtn"> Liquors </button></h3>';
	document.getElementById('liquorsDisplay').innerHTML = 'Hard stuff coming soon.';
	if (theyNeverListen >0){
		document.getElementById('liquorsDisplay').innerHTML = 'You had to click it to see, didn\'t you?';
		theyNeverListen = 0;
	}
}

function newFoodMenu(){
	document.getElementById('foodDisplay').style = 'display:inline-block';
	document.getElementById('foodTitle').innerHTML = '<h2><button onclick="newFoodMenu()" class="innerBtn"> Food Menu </button></h2>';
	newStarters();
	newSalads();
	newEntrees();	
	allRan = 1;
}

function newStarters(){
	document.getElementById('starterTitle').innerHTML = '<h3><button onclick="theyNeverListen++;newStarters()" class="innerBtn"> Starters </button></h3>';
	document.getElementById('startersDisplay').innerHTML = 'Food Coming Soon';
	if (theyNeverListen >0){
		document.getElementById('startersDisplay').innerHTML = 'Don\'t do that.';
		theyNeverListen = 0;
	}
}

function newSalads(){
	document.getElementById('saladTitle').innerHTML = '<h3><button onclick="theyNeverListen++;newSalads()" class="innerBtn"> Salads </button></h3>';
	document.getElementById('saladsDisplay').innerHTML = 'I said, Food is Coming Soon';
	if (theyNeverListen >0){
		document.getElementById('saladsDisplay').innerHTML = 'Clicking isn\'t going to magically make a salad.';
		theyNeverListen = 0;
	}
}

function newEntrees(){
	document.getElementById('entreeTitle').innerHTML = '<h3><button onclick="theyNeverListen++;newEntrees()" class="innerBtn"> Entrees </button></h3>';
	document.getElementById('entreesDisplay').innerHTML = 'There\'s still no food, come back later.';
	if (theyNeverListen >0){
		document.getElementById('entreesDisplay').innerHTML = 'Did you click all the other ones too?';
		theyNeverListen = 0;
	}
}