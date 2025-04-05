const DUST_VALUES = {
    "Original Sin": 1128.89,
    "Headhunter": 891.16,
    "Mageblood": 891.16,
    "Defiance of Destiny": 891.16,
    "Reefbane": 851.24,
    "Replica Shroud of the Lightless": 791.78,
    "Stasis Prison": 791.78,
    "The Squire": 768.72,
    "Rakiata's Dance": 768.72,
    "Angler's Plait": 734.29,
    "Starforge": 703.49,
    "Voidforge": 703.49,
    "Replica Kongor's Undying Rage": 703.49,
    "Echoforge": 703.49,
    "Lioneye's Glare": 683.0,
    "Divinarius": 683.0,
    "Essentia Sanguis": 683.0,
    "Kingmaker": 683.0,
    "Soul Taker": 663.11,
    "Voltaxic Rift": 643.79,
    "Atziri's Disfavour": 643.79,
    "Replica Duskdawn": 643.79,
    "Bloodseeker": 606.84,
    "The Saviour": 606.84,
    "Replica Tukohama's Fortress": 589.16,
    "Kalandra's Touch": 572.0,
    "Bino's Kitchen Knife": 539.17,
    "Marohi Erqi": 523.46,
    "The Winds of Fate": 493.41,
    "Hateforge": 389.5,
    "Uul-Netol's Vow": 367.15,
    "Soul Ascension": 317.64,
    "Nimis": 317.64,
    "Replica Headhunter": 316.7,
    "Yoke of Suffering": 236.36,
    "Manastorm": 210.0,
    "Replica Bated Breath": 206.0,
    "Stranglegasp": 203.28,
    "Replica Farrul's Fur": 186.58,
    "Kitava's Feast": 181.15,
    "Replica Nebulis": 181.15,
    "Malachai's Mark": 175.87,
    "Replica Windripper": 170.75,
    "Tidebreaker": 165.78,
    "Replica Eternity Shroud": 165.78,
    "Annihilation's Approach": 165.78,
    "Eternal Damnation": 165.78,
    "Duskdawn": 160.95,
    "The Brine Crown": 156.26,
    "Replica Atziri's Acuity": 156.26,
    "Garukhan's Flight": 151.71,
    "Tukohama's Fortress": 147.29,
    "Entropic Devastation": 134.79,
    "Cloak of Tawm'r Isley": 127.05,
    "Arakaali's Fang": 116.27,
    "Martyr of Innocence": 112.89,
    "Song of the Sirens": 111.95,
    "Replica Alberon's Warpath": 103.31,
    "Replica Maloney's Mechanism": 91.79,
    "Replica Trypanon": 79.18,
    "Gruthkul's Pelt": 74.63,
    "Dialla's Malefaction": 72.46,
    "Ralakesh's Impatience": 70.35,
    "Skyforth": 69.77,
    "Wraithlord": 66.31,
    "Eyes of the Greatwolf": 65.76,
    "The Dark Seer": 62.5,
    "Ryslatha's Coil": 62.5,
    "Shade of Solaris": 58.91,
    "Void Battery": 56.73,
    "Rigwald's Quills": 56.73,
    "The Brass Dome": 56.73,
    "Light of Lunaris": 55.53,
    "Seven-League Step": 53.47,
    "Warrior's Legacy": 53.47,
    "Astral Projector": 53.47,
    "Aegis Aurora": 50.4,
    "Atziri's Splendour": 48.93,
    "Shroud of the Lightless": 47.51,
    "Voll's Devotion": 46.12,
    "Shavronne's Revelation": 46.12,
    "Windripper": 46.12,
    "Magna Eclipsis": 46.12,
    "Doryani's Fist": 44.78,
    "Indigon": 44.78,
    "Farrul's Fur": 44.78,
    "Farrul's Chase": 44.78,
    "Kaom's Heart": 43.48,
    "Rathpith Globe": 43.48,
    "Prism Guardian": 43.48,
    "Broken Faith": 43.48,
    "Cospri's Malice": 43.48,
    "Inpulsa's Broken Heart": 43.48,
    "Hand of Wisdom and Action": 43.48,
    "The Red Trail": 43.48,
    "Doryani's Delusion": 43.48,
    "The Queen's Hunger": 43.48,
    "Maloney's Mechanism": 43.48,
    "Badge of the Brotherhood": 43.48,
    "The Immortal Will": 43.48,
    "Replica Kaom's Heart": 43.48,
    "Replica Red Trail": 43.48,
    "Viridi's Veil": 43.48,
    "Doppelg\u00e4nger Guise": 43.48,
    "Thunderfist": 42.21,
    "Steppan Eard": 42.21,
    "Heretic's Veil": 42.21,
    "Machina Mitts": 42.21,
    "Sporeguard": 42.21,
    "Doryani's Prototype": 42.21,
    "Paradoxica": 40.98,
    "The Yielding Mortality": 40.98,
    "Replica Paradoxica": 40.98,
    "Replica Allure": 40.98,
    "Hyrri's Ire": 39.79,
    "The Formless Inferno": 39.79,
    "The Perfect Form": 39.79,
    "Doedre's Skin": 39.79,
    "The Eternity Shroud": 39.79,
    "Replica Perfect Form": 39.79,
    "Replica Hyrri's Ire": 39.79,
    "Varunastra": 38.63,
    "Uul-Netol's Embrace": 38.63,
    "The Surrender": 38.63,
    "Disintegrator": 38.63,
    "Loreweave": 38.63,
    "Replica Loreweave": 38.63,
    "Yaomac's Accord": 38.63,
    "Replica Stampede": 37.5,
    "Shavronne's Wrappings": 36.41,
    "Darkscorn": 36.41,
    "Kintsugi": 36.41,
    "Tulfall": 36.41,
    "Esh's Visage": 36.41,
    "Arborix": 36.41,
    "Apep's Supremacy": 36.41,
    "The Surging Thoughts": 36.41,
    "The Admiral": 36.41,
    "Replica Cold Iron Point": 36.41,
    "Replica Tulfall": 36.41,
    "Abberath's Hooves": 34.61,
    "Mj\u00f6lner": 34.32,
    "Replica Abyssus": 34.32,
    "Replica Mistwall": 34.32,
    "The Iron Fortress": 33.32,
    "Farrul's Pounce": 33.32,
    "Fleshcrafter": 33.32,
    "Gravebind": 33.32,
    "Xoph's Nurture": 32.35,
    "Crown of the Tyrant": 32.35,
    "Crest of Desire": 32.35,
    "Farrul's Bite": 31.41,
    "Offering to the Serpent": 31.41,
    "Garb of the Ephemeral": 30.49,
    "Maata's Teaching": 30.49,
    "Corpsewalker": 29.6,
    "The Fourth Vow": 29.6,
    "The Devouring Diadem": 28.74,
    "Qotra's Regulator": 28.74,
    "Atziri's Reflection": 28.74,
    "Sandstorm Visage": 28.74,
    "Utula's Hunger": 27.91,
    "Cloak of Defiance": 27.09,
    "Skin of the Lords": 26.52,
    "Zerphi's Heart": 26.52,
    "Replica Frostbreath": 25.54,
    "The Covenant": 24.79,
    "Anathema": 24.79,
    "Replica Covenant": 24.79,
    "Winds of Change": 23.37,
    "Death Rush": 22.69,
    "Emperor's Vigilance": 22.69,
    "Mahuxotl's Machination": 22.69,
    "The Pariah": 22.03,
    "Abhorrent Interrogation": 22.03,
    "The Tempest's Liberation": 22.03,
    "Perfidy": 21.92,
    "Hand of the Fervent": 20.76,
    "Impresence": 20.66,
    "Assailum": 20.66,
    "Mark of the Elder": 19.48,
    "Mark of the Shaper": 19.48,
    "Polaric Devastation": 19.48,
    "Replica Soul Strike": 19.0,
    "Replica Midnight Bargain": 19.0,
    "Brain Rattler": 18.91,
    "Razor of the Seventh Sun": 18.91,
    "Snakepit": 18.91,
    "The Scourge": 18.91,
    "Memory Vault": 18.91,
    "Grelwood Shank": 18.91,
    "Beltimber Blade": 18.91,
    "Vulconus": 18.91,
    "Augyre": 18.91,
    "Gloomfang": 18.91,
    "The Gull": 17.91,
    "Severed in Sleep": 17.91,
    "United in Dream": 17.91,
    "Blackflame": 17.91,
    "Maligaro's Virtuosity": 17.82,
    "Asenath's Gentle Touch": 17.82,
    "Perandus Signet": 17.82,
    "Nebuloch": 17.82,
    "Hopeshredder": 17.82,
    "Shimmeron": 17.82,
    "Beacon of Madness": 17.82,
    "Sunblast": 17.39,
    "Doon Cuebiyari": 17.3,
    "Death's Door": 17.3,
    "Auxium": 16.8,
    "Flamesight": 16.8,
    "Galesight": 16.8,
    "Thundersight": 16.8,
    "The Ivory Tower": 16.8,
    "Leash of Oblation": 16.8,
    "Mistwall": 16.8,
    "Maw of Mischief": 16.8,
    "The Burden of Truth": 16.8,
    "Shadowstitch": 16.31,
    "Hegemony's Era": 15.84,
    "Replica Restless Ward": 15.84,
    "Lioneye's Remorse": 15.37,
    "Incandescent Heart": 15.37,
    "The Hungry Loop": 15.37,
    "Chains of Command": 15.37,
    "Black Zenith": 15.37,
    "Crown of Eyes": 14.93,
    "Ylfeban's Trickery": 14.93,
    "Voidwalker": 14.93,
    "Bubonic Trail": 14.93,
    "Craiceann's Pincers": 14.93,
    "Usurper's Penance": 14.93,
    "Replica Voidwalker": 14.93,
    "Vorana's March": 14.93,
    "Kaom's Spirit": 14.93,
    "The Shattered Divinity": 14.56,
    "Mon'tregul's Grasp": 14.49,
    "Pledge of Hands": 14.49,
    "Kaom's Roots": 14.49,
    "Voll's Vision": 14.49,
    "Malachai's Vision": 14.49,
    "Cospri's Will": 14.49,
    "Tinkerskin": 14.49,
    "Hand of Thought and Motion": 14.49,
    "The Infinite Pursuit": 14.49,
    "The Unshattered Will": 14.49,
    "Invictus Solaris": 14.49,
    "Cyclopean Coil": 14.49,
    "Blasphemer's Grasp": 14.49,
    "The Grey Spire": 14.49,
    "Bitterbind Point": 14.49,
    "Nebulis": 14.49,
    "Atziri's Rule": 14.49,
    "Cadigan's Crown": 14.49,
    "The Taming": 14.14,
    "The Bringer of Rain": 14.07,
    "Replica Oro's Sacrifice": 14.07,
    "Dawnbreaker": 14.07,
    "Dreamfeather": 13.66,
    "Repentance": 13.66,
    "Shaper's Touch": 13.66,
    "The Enmity Divine": 13.66,
    "Vix Lunaris": 13.66,
    "Voidfletcher": 13.66,
    "Hands of the High Templar": 13.66,
    "Font of Thunder": 13.66,
    "Replica Dreamfeather": 13.66,
    "The Goddess Scorned": 13.33,
    "Rime Gaze": 13.26,
    "Infernal Mantle": 13.26,
    "Ming's Heart": 13.26,
    "Jack, the Axe": 13.26,
    "Doomsower": 13.26,
    "Scold's Bridle": 13.26,
    "The Formless Flame": 13.26,
    "The Snowblind Grace": 13.26,
    "Saqawal's Nest": 13.26,
    "Fenumus' Shroud": 13.26,
    "Hale Negator": 13.26,
    "Echoes of Creation": 13.26,
    "Taryn's Shiver": 12.88,
    "Alpha's Howl": 12.88,
    "Rebuke of the Vaal": 12.88,
    "Hezmana's Bloodlust": 12.88,
    "Reach of the Council": 12.88,
    "Uul-Netol's Kiss": 12.88,
    "The Anticipation": 12.88,
    "Replica Alpha's Howl": 12.88,
    "Daresso's Defiance": 12.5,
    "Atziri's Acuity": 12.5,
    "Fenumus' Spinnerets": 12.5,
    "Crown of the Inward Eye": 12.5,
    "Astramentis": 12.2,
    "Presence of Chayula": 12.2,
    "Aul's Uprising": 12.2,
    "Solstice Vigil": 12.2,
    "Leadership's Price": 12.2,
    "Crystallised Omniscience": 12.2,
    "Ashes of the Stars": 12.2,
    "Stormfire": 12.17,
    "The Searing Touch": 12.14,
    "Carcass Jack": 12.14,
    "Death's Oath": 12.14,
    "The Vertex": 12.14,
    "Tulborn": 12.14,
    "Esh's Mirror": 12.14,
    "Yriel's Fostering": 12.14,
    "The Rippling Thoughts": 12.14,
    "Perepiteia": 12.14,
    "Fractal Thoughts": 12.14,
    "Cold Iron Point": 12.14,
    "Law of the Wilds": 12.14,
    "Blunderbore": 12.14,
    "Replica Wings of Entropy": 12.14,
    "Glimpse of Chaos": 12.14,
    "Dawnstrider": 12.14,
    "Rigwald's Savagery": 11.82,
    "Rigwald's Command": 11.82,
    "Slivertongue": 11.82,
    "Obscurantis": 11.82,
    "Inya's Epiphany": 11.78,
    "Replica Inya's Epiphany": 11.78,
    "Abyssus": 11.44,
    "Lightning Coil": 11.44,
    "Null's Inclination": 11.44,
    "Dyadian Dawn": 11.44,
    "Rigwald's Curse": 11.44,
    "Grip of the Council": 11.44,
    "Saqawal's Flock": 11.44,
    "The Iron Mass": 11.44,
    "The Hidden Blade": 11.44,
    "The Fulcrum": 11.44,
    "Replica Grip of the Council": 11.44,
    "Cameria's Avarice": 11.44,
    "Contract: The Twins": 11.29,
    "Algor Mortis": 11.14,
    "Saffell's Frame": 11.11,
    "Queen of the Forest": 11.11,
    "Saqawal's Talons": 11.11,
    "Breathstealer": 11.11,
    "Expedition's End": 11.11,
    "Wilma's Requital": 11.11,
    "Gamblesprint": 11.11,
    "First Piece of Focus": 10.96,
    "Second Piece of Focus": 10.96,
    "Third Piece of Focus": 10.96,
    "Fourth Piece of Focus": 10.96,
    "First Piece of Storms": 10.96,
    "Second Piece of Storms": 10.96,
    "Third Piece of Storms": 10.96,
    "Contract: Death to Darnaw": 10.96,
    "Unyielding Flame": 10.82,
    "Xoph's Inception": 10.78,
    "Craiceann's Chitin": 10.78,
    "Mask of the Stitched Demon": 10.78,
    "Storm's Gift": 10.78,
    "Mask of the Tribunal": 10.78,
    "Contract: Heart of Glory": 10.64,
    "The Magnate": 10.52,
    "The Torrent's Reclamation": 10.52,
    "Replica Soul Tether": 10.52,
    "Replica Ungil's Gauche": 10.52,
    "Replica Badge of the Brotherhood": 10.52,
    "Perseverance": 10.5,
    "The Black Cane": 10.5,
    "Willowgift": 10.5,
    "Eye of Malice": 10.5,
    "Ancient Skull": 10.5,
    "Mind of the Council": 10.47,
    "The Crimson Storm": 10.47,
    "Kaom's Binding": 10.47,
    "Contract: Breaking the Unbreakable": 10.33,
    "Contract: The Slaver King": 10.33,
    "The Rat Cage": 10.16,
    "Craiceann's Carapace": 10.16,
    "Fate of the Vaal": 10.16,
    "Replica Dragonfang's Flight": 10.16,
    "Lioneye's Vision": 9.9,
    "Brinerot Mark": 9.87,
    "Redblade Band": 9.87,
    "Mutewind Seal": 9.87,
    "Ngamahu's Flame": 9.87,
    "Omeyocan": 9.87,
    "Tavukai": 9.87,
    "Replica Three-step Assault": 9.87,
    "Temptation Step": 9.87,
    "Great Old One's Tentacles": 9.61,
    "Ceaseless Feast": 9.61,
    "Inextricable Fate": 9.61,
    "Chitus' Apex": 9.58,
    "Daresso's Courage": 9.58,
    "Craiceann's Tracks": 9.58,
    "Fenumus' Toxins": 9.58,
    "Eye of Innocence": 9.45,
    "First Piece of Brutality": 9.45,
    "Second Piece of Brutality": 9.45,
    "Third Piece of Brutality": 9.45,
    "First Piece of Directions": 9.45,
    "Second Piece of Directions": 9.45,
    "Third Piece of Directions": 9.45,
    "Leper's Alms": 9.45,
    "Atziri's Foible": 9.35,
    "Ahkeli's Meadow": 9.35,
    "Replica Emberwake": 9.35,
    "Dyadus": 9.33,
    "Atziri's Step": 9.33,
    "Cherrubim's Maleficence": 9.33,
    "Eber's Unification": 9.33,
    "Medved's Challenge": 9.33,
    "Rainbowstride": 9.3,
    "Apep's Rage": 9.3,
    "Lightpoacher": 9.3,
    "Forbidden Shako": 9.3,
    "Replica Infractem": 9.3,
    "The Beast Fur Shawl": 9.06,
    "Touch of Anguish": 9.06,
    "Ahn's Contempt": 9.06,
    "Ahn's Might": 9.06,
    "Gorgon's Gaze": 9.03,
    "Profane Proxy": 9.03,
    "Witchhunter's Judgment": 9.03,
    "Akoya's Gaze": 9.03,
    "The Ephemeral Bond": 8.91,
    "Kongor's Undying Rage": 8.79,
    "Ahn's Heritage": 8.79,
    "Saqawal's Winds": 8.77,
    "Legacy of Fury": 8.77,
    "Devoto's Devotion": 8.65,
    "Bloodgrip": 8.65,
    "Agnerod East": 8.54,
    "Agnerod North": 8.54,
    "Agnerod South": 8.54,
    "Agnerod West": 8.54,
    "Breath of the Council": 8.54,
    "The Poised Prism": 8.54,
    "Andvarius": 8.51,
    "Star of Wraeclast": 8.51,
    "Fenumus' Weave": 8.51,
    "Replica Victario's Charity": 8.51,
    "Replica Heartbreaker": 8.51,
    "Worldcarver": 8.4,
    "Painseeker": 8.4,
    "The Poet's Pen": 8.31,
    "Putembo's Mountain": 8.31,
    "Rise of the Phoenix": 8.29,
    "Darkray Vectors": 8.29,
    "Vis Mortis": 8.29,
    "Ventor's Gamble": 8.29,
    "Malachai's Loop": 8.29,
    "Cane of Kulemak": 8.26,
    "The Scales of Justice": 8.26,
    "Bound Fate": 8.26,
    "Death's Hand": 8.16,
    "Doryani's Catalyst": 8.05,
    "Soul Strike": 8.05,
    "Geofri's Sanctuary": 8.05,
    "Hyrri's Truth": 8.05,
    "Rashkaldor's Patience": 8.02,
    "Maw of Conquest": 8.02,
    "The Jinxed Juju": 8.02,
    "The Restless Ward": 7.92,
    "Replica Siegebreaker": 7.83,
    "Speaker's Wreath": 7.81,
    "The Stampede": 7.81,
    "Actum": 7.81,
    "Cerberus Limb": 7.79,
    "Replica Kalisa's Grace": 7.79,
    "Replica Innsbury Edge": 7.79,
    "Jaws of Agony": 7.69,
    "Rive": 7.69,
    "Mercenary's Lot": 7.69,
    "The Oppressor": 7.69,
    "Hyaon's Fury": 7.59,
    "Singularity": 7.59,
    "Apep's Slumber": 7.59,
    "Belly of the Beast": 7.56,
    "Redblade Tramplers": 7.56,
    "Veruso's Battering Rams": 7.46,
    "Asenath's Mark": 7.38,
    "Uzaza's Valley": 7.38,
    "Scorpion's Call": 7.36,
    "Soulthirst": 7.34,
    "The Tempest's Binding": 7.34,
    "Slavedriver's Hand": 7.34,
    "Vivinsect": 7.34,
    "Replica Malachai's Artifice": 7.34,
    "Replica Voideye": 7.34,
    "Rotblood Promise": 7.34,
    "Triumvirate Authority": 7.34,
    "Izaro's Dilemma": 7.25,
    "Nuro's Harp": 7.25,
    "Xoph's Blood": 7.16,
    "The Pandemonius": 7.16,
    "Choir of the Storm": 7.16,
    "Replica Hyrri's Truth": 7.16,
    "Starkonja's Head": 7.15,
    "Romira's Banquet": 7.15,
    "Scaeva": 7.15,
    "Cane of Unravelling": 7.15,
    "Soulwrest": 7.15,
    "Cowl of the Thermophile": 7.15,
    "Cowl of the Cryophile": 7.15,
    "The Blood Dance": 7.13,
    "Hinekora's Sight": 7.13,
    "Replica Hinekora's Sight": 7.13,
    "Oro's Sacrifice": 7.03,
    "Surgebinders": 7.03,
    "Piscator's Vigil": 6.94,
    "The Dancing Dervish": 6.94,
    "Hiltless": 6.94,
    "Dendrobate": 6.94,
    "Cowl of the Ceraunophile": 6.94,
    "Haemophilia": 6.92,
    "Volkuur's Guidance": 6.92,
    "Replica Volkuur's Guidance": 6.92,
    "Callinellus Malleus": 6.83,
    "The Goddess Unleashed": 6.83,
    "Allure": 6.83,
    "Debeon's Dirge": 6.83,
    "White Wind": 6.83,
    "Kaom's Primacy": 6.74,
    "Snakebite": 6.74,
    "Ichimonji": 6.74,
    "Mask of the Spirit Drinker": 6.74,
    "The Ghastly Theatre": 6.74,
    "The Gluttonous Tide": 6.74,
    "Mutewind Pennant": 6.72,
    "Mutewind Whispersteps": 6.72,
    "Tainted Pact": 6.72,
    "Null and Void": 6.54,
    "Kiloava's Bluster": 6.54,
    "The Supreme Truth": 6.52,
    "Nycta's Lantern": 6.52,
    "Tremor Rod": 6.52,
    "Brinerot Whalers": 6.52,
    "Allelopathy": 6.52,
    "Replica Allelopathy": 6.52,
    "Mark of the Doubting Knight": 6.44,
    "Skin of the Loyal": 6.37,
    "Replica Atziri's Foible": 6.37,
    "Greed's Embrace": 6.35,
    "Story of the Vaal": 6.35,
    "Storm Secret": 6.35,
    "Ahuana's Bite": 6.35,
    "Marylene's Fallacy": 6.33,
    "Call of the Brotherhood": 6.33,
    "Emberwake": 6.33,
    "Trypanon": 6.33,
    "Voice of the Storm": 6.33,
    "Fury Valve": 6.33,
    "Mother's Embrace": 6.33,
    "Blood Price": 6.33,
    "Thousand Teeth Temu": 6.25,
    "The Broken Crown": 6.25,
    "The Retch": 6.18,
    "Voidbringer": 6.17,
    "Dance of the Offered": 6.17,
    "Sin Trek": 6.07,
    "Chin Sol": 6.07,
    "Wings of Entropy": 6.07,
    "Sinvicta's Mettle": 6.07,
    "Voidhome": 5.99,
    "Pyroshock Clasp": 5.99,
    "Circle of Nostalgia": 5.97,
    "Chernobog's Pillar": 5.89,
    "Kingsguard": 5.89,
    "Kondo's Pride": 5.89,
    "Geofri's Crest": 5.81,
    "Bronn's Lithe": 5.81,
    "The Consuming Dark": 5.81,
    "The Coming Calamity": 5.81,
    "Command of the Pit": 5.8,
    "Replica Harvest": 5.8,
    "Cameria's Maul": 5.72,
    "Balefire": 5.72,
    "The Wasp Nest": 5.72,
    "Taproot": 5.72,
    "The Druggery": 5.72,
    "Goblinedge": 5.72,
    "The Redblade": 5.72,
    "Victario's Influence": 5.64,
    "Crown of the Pale King": 5.64,
    "Oskarm": 5.64,
    "Aurseize": 5.63,
    "Tombfist": 5.63,
    "Vixen's Entrapment": 5.63,
    "Moonsorrow": 5.55,
    "Obliteration": 5.55,
    "Replica Soul Taker": 5.55,
    "The Dancing Duo": 5.55,
    "The Fledgling": 5.48,
    "Voll's Protector": 5.46,
    "Meginord's Vise": 5.46,
    "Redblade Banner": 5.46,
    "Xoph's Heart": 5.46,
    "The Halcyon": 5.46,
    "Replica Earendel's Embrace": 5.46,
    "Gang's Momentum": 5.39,
    "Femurs of the Saints": 5.39,
    "March of the Legion": 5.39,
    "Sign of the Sin Eater": 5.39,
    "Rotting Legion": 5.39,
    "The Burden of Shadows": 5.39,
    "Warped Timepiece": 5.32,
    "Heartbound Loop": 5.32,
    "Frostbreath": 5.32,
    "Darkness Enthroned": 5.32,
    "Perquil's Toe": 5.32,
    "Nametaker": 5.32,
    "Soul Mantle": 5.17,
    "Alberon's Warpath": 5.17,
    "Sire of Shards": 5.17,
    "Wyrmsign": 5.17,
    "Venopuncture": 5.17,
    "Icefang Orbit": 5.17,
    "Shattershard": 5.17,
    "Steelworm": 5.17,
    "Tanu Ahi": 5.17,
    "Bloodsoaked Medallion": 5.17,
    "Windscream": 5.15,
    "Deidbell": 5.15,
    "The Whispering Ice": 5.15,
    "Gluttony": 5.01,
    "Nightgrip": 5.01,
    "Olroth's Charge": 5.01,
    "Sudden Dawn": 5.01,
    "Ephemeral Edge": 5.0,
    "Death's Harp": 5.0,
    "Bitterdream": 5.0,
    "Replica Iron Commander": 5.0,
    "Hrimnor's Resolve": 4.93,
    "Rat's Nest": 4.93,
    "Maloney's Nightfall": 4.93,
    "Three-step Assault": 4.93,
    "The Ascetic": 4.93,
    "The Highwayman": 4.93,
    "Innsbury Edge": 4.87,
    "The Fracturing Spinner": 4.85,
    "Atziri's Mirror": 4.79,
    "Great Old One's Ward": 4.73,
    "Replica Advancing Fortress": 4.73,
    "Kahuturoa's Certainty": 4.73,
    "Umbilicus Immortalis": 4.71,
    "Xirgil's Crank": 4.71,
    "Bisco's Collar": 4.71,
    "Bisco's Leash": 4.71,
    "Replica Lioneye's Paws": 4.71,
    "Relic of the Pact": 4.71,
    "Infractem": 4.65,
    "Prismatic Eclipse": 4.65,
    "Empire's Grasp": 4.65,
    "Replica Forbidden Shako": 4.65,
    "Geofri's Legacy": 4.65,
    "Voideye": 4.59,
    "Malachai's Artifice": 4.59,
    "Kongming's Stratagem": 4.59,
    "Essence Worm": 4.59,
    "Architect's Hand": 4.59,
    "The Annihilating Light": 4.59,
    "Stormseeker": 4.59,
    "The Geomantic Gyre": 4.52,
    "Maligaro's Restraint": 4.46,
    "Jorrhast's Blacksteel": 4.46,
    "Natural Hierarchy": 4.46,
    "Ascent From Flesh": 4.46,
    "Kitava's Thirst": 4.46,
    "Soulbound": 4.46,
    "Doomfletch": 4.44,
    "Brutus' Lead Sprinkler": 4.44,
    "Terminus Est": 4.38,
    "Black Sun Crest": 4.38,
    "Southbound": 4.38,
    "Ambu's Charge": 4.33,
    "Replica Ambu's Charge": 4.33,
    "Vaal Caress": 4.31,
    "Heartbreaker": 4.26,
    "Immortal Flesh": 4.26,
    "Victario's Charity": 4.26,
    "The Embalmer": 4.26,
    "Zeel's Amplifier": 4.13,
    "The Eternal Apple": 4.13,
    "Pragmatism": 4.13,
    "Demon Stitcher": 4.08,
    "Eye of Chayula": 4.07,
    "The Eternal Struggle": 4.07,
    "Midnight Bargain": 3.96,
    "Ceinture of Benevolence": 3.96,
    "Dream Fragments": 3.95,
    "Reverberation Rod": 3.95,
    "Winterweave": 3.95,
    "Doedre's Tongue": 3.95,
    "Kalisa's Grace": 3.9,
    "Lightbane Raiment": 3.9,
    "Doedre's Scorn": 3.84,
    "Moonbender's Wing": 3.84,
    "The Flawed Refuge": 3.84,
    "Ungil's Harmony": 3.83,
    "Brinerot Flag": 3.83,
    "Ornament of the East": 3.78,
    "Advancing Fortress": 3.78,
    "Valako's Sign": 3.73,
    "Replica Bones of Ullr": 3.72,
    "The Blood Reaper": 3.67,
    "Sibyl's Lament": 3.67,
    "The Anvil": 3.67,
    "Maligaro's Lens": 3.67,
    "Mark of Submission": 3.67,
    "The Signal Fire": 3.67,
    "Corona Solaris": 3.67,
    "The Harvest": 3.62,
    "Rigwald's Charge": 3.56,
    "Widowmaker": 3.56,
    "Siegebreaker": 3.56,
    "Tawhanuku's Timing": 3.56,
    "Heatshiver": 3.51,
    "Berek's Respite": 3.51,
    "Rigwald's Crest": 3.51,
    "The Flow Untethered": 3.51,
    "Replica Tempestuous Steel": 3.51,
    "Arn's Anguish": 3.51,
    "Olesya's Delight": 3.51,
    "Graven's Secret": 3.51,
    "Ixchel's Temptation": 3.51,
    "Replica Heatshiver": 3.51,
    "Daresso's Passion": 3.46,
    "El'Abin's Visage": 3.46,
    "Bloodbond": 3.41,
    "Wurm's Molt": 3.36,
    "Winterheart": 3.36,
    "Goldwyrm": 3.32,
    "The Primordial Chain": 3.32,
    "Plume of Pursuit": 3.32,
    "Cloak of Flame": 3.31,
    "Clayshaper": 3.26,
    "Sentari's Answer": 3.22,
    "Chober Chaber": 3.17,
    "Eclipse Solaris": 3.17,
    "Chaber Cairn": 3.17,
    "The Aylardex": 3.13,
    "Iron Commander": 3.13,
    "Replica Bitterdream": 3.13,
    "Ahkeli's Valley": 3.12,
    "Precursor's Emblem": 3.12,
    "Circle of Anguish": 3.12,
    "Icetomb": 3.07,
    "Crystal Vault": 3.07,
    "Orbala's Stand": 3.07,
    "Rearguard": 3.03,
    "Shadows and Dust": 3.03,
    "Demigod's Beacon": 3.03,
    "Aukuna's Will": 3.03,
    "Replica Winterheart": 3.03,
    "Valyrium": 2.99,
    "Lioneye's Paws": 2.95,
    "Thief's Torment": 2.95,
    "Lori's Lantern": 2.95,
    "Replica Twyzel": 2.95,
    "Zahndethus' Cassock": 2.9,
    "Mindspiral": 2.9,
    "Cybil's Paw": 2.9,
    "Torchoak Step": 2.9,
    "Chalice of Horrors": 2.86,
    "Ngamahu's Sign": 2.86,
    "Skullhead": 2.81,
    "Skirmish": 2.81,
    "Gifts from Above": 2.78,
    "Blightwell": 2.78,
    "Replica Leer Cast": 2.78,
    "Putembo's Meadow": 2.77,
    "Circle of Regret": 2.77,
    "The Three Dragons": 2.73,
    "Earendel's Embrace": 2.73,
    "Willclash": 2.73,
    "Lycosidae": 2.69,
    "Mortem Morsu": 2.65,
    "Al Dhih": 2.62,
    "The Baron": 2.62,
    "Fairgraves' Tricorne": 2.61,
    "Hyperboreus": 2.61,
    "Survivor's Guilt": 2.61,
    "Reaper's Pursuit": 2.58,
    "Deidbellow": 2.58,
    "Windshriek": 2.58,
    "Drillneck": 2.54,
    "Timeclasp": 2.54,
    "Faithguard": 2.54,
    "Shavronne's Pace": 2.5,
    "Briskwrap": 2.5,
    "Flesh-Eater": 2.5,
    "Triad Grip": 2.5,
    "Shavronne's Gambit": 2.5,
    "Death's Opus": 2.5,
    "Le Heup of All": 2.47,
    "Pyre": 2.46,
    "Uzaza's Mountain": 2.46,
    "Circle of Fear": 2.46,
    "Replica Tasalio's Sign": 2.46,
    "Call of the Void": 2.46,
    "Ikiaho's Promise": 2.43,
    "Matua Tupuna": 2.4,
    "The Trickster's Smile": 2.4,
    "Blood of Corruption": 2.39,
    "Replica Karui Ward": 2.39,
    "Mightflay": 2.36,
    "Titucius' Span": 2.36,
    "Twyzel": 2.36,
    "Chitus' Needle": 2.36,
    "The Warden's Brand": 2.36,
    "Retaliation Charm": 2.36,
    "Elevore": 2.36,
    "Veil of the Night": 2.33,
    "Edge of Madness": 2.33,
    "Replica Veil of the Night": 2.33,
    "Relentless Fury": 2.29,
    "Thirst for Horrors": 2.29,
    "Fated End": 2.25,
    "Replica Doedre's Damning": 2.25,
    "Wake of Destruction": 2.22,
    "Leer Cast": 2.22,
    "Lakishu's Blade": 2.22,
    "The Stormheart": 2.22,
    "Viper's Scales": 2.22,
    "Doomfletch's Prism": 2.22,
    "The Stormwall": 2.22,
    "Meginord's Girdle": 2.19,
    "Berek's Pass": 2.19,
    "Berek's Grip": 2.19,
    "Kikazaru": 2.19,
    "Belt of the Deceiver": 2.19,
    "Tasalio's Sign": 2.19,
    "Maligaro's Cruelty": 2.19,
    "Curtain Call": 2.19,
    "The Felbog Fang": 2.19,
    "Honoured Alliance": 2.19,
    "Geofri's Baptism": 2.16,
    "Sundance": 2.16,
    "Slitherpinch": 2.16,
    "Queen's Decree": 2.16,
    "Glitterdisc": 2.16,
    "Queen's Escape": 2.16,
    "Sunspite": 2.16,
    "Geofri's Devotion": 2.16,
    "Thousand Ribbons": 2.12,
    "Tabula Rasa": 2.12,
    "Ewar's Mirage": 2.09,
    "Mark of the Red Covenant": 2.09,
    "Coward's Legacy": 2.06,
    "Circle of Guilt": 2.06,
    "Chains of Emancipation": 2.06,
    "Carnage Heart": 2.03,
    "Foxshade": 2.03,
    "Prismweave": 2.03,
    "Duskwing": 2.03,
    "Timetwist": 2.03,
    "Fox's Fortune": 2.03,
    "Malachai's Simula": 2.01,
    "Ashrend": 2.01,
    "Solaris Lorica": 2.01,
    "Trolltimber Spire": 2.01,
    "Widowhail": 2.0,
    "Storm Prison": 1.97,
    "Amplification Rod": 1.97,
    "Facebreaker": 1.95,
    "Mokou's Embrace": 1.95,
    "Ahkeli's Mountain": 1.95,
    "The Peregrine": 1.92,
    "Stormcharger": 1.92,
    "Giantsbane": 1.92,
    "Whakatutuki o Matua": 1.92,
    "Flesh and Spirit": 1.89,
    "Replica Bloodplay": 1.89,
    "Bones of Ullr": 1.86,
    "Quecholli": 1.86,
    "Deerstalker": 1.86,
    "Fidelitas' Spike": 1.86,
    "Bated Breath": 1.86,
    "Praxis": 1.86,
    "Panquetzaliztli": 1.86,
    "Perandus Blazon": 1.75,
    "Ungil's Gauche": 1.75,
    "Brightbeak": 1.75,
    "Daresso's Salute": 1.75,
    "Victario's Acuity": 1.75,
    "Asphyxia's Wrath": 1.75,
    "Shaper's Seed": 1.75,
    "The Deep One's Hide": 1.75,
    "Lavianga's Wisdom": 1.75,
    "Spine of the First Claimant": 1.75,
    "Extractor Mentis": 1.75,
    "Demigod's Dominance": 1.75,
    "The Tempestuous Steel": 1.75,
    "Saemus' Gift": 1.75,
    "Frostferno": 1.75,
    "The Tactician": 1.75,
    "The Nomad": 1.75,
    "Victario's Flight": 1.73,
    "Ashcaller": 1.73,
    "Putembo's Valley": 1.73,
    "Ghostwrithe": 1.68,
    "Dusktoe": 1.65,
    "Wideswing": 1.65,
    "Faminebind": 1.65,
    "Roth's Reach": 1.65,
    "Duskblight": 1.65,
    "Thrillsteel": 1.65,
    "Doryani's Invitation": 1.63,
    "Night's Hold": 1.63,
    "String of Servitude": 1.63,
    "Bear's Girdle": 1.63,
    "Hrimnor's Hymn": 1.6,
    "Aurumvorax": 1.6,
    "Hrimnor's Dirge": 1.6,
    "Malachai's Awakening": 1.6,
    "Kaltenhalt": 1.56,
    "Nomic's Storm": 1.56,
    "Dreadarc": 1.56,
    "Kaltensoul": 1.56,
    "Dreadsurge": 1.56,
    "Uzaza's Meadow": 1.54,
    "Wreath of Phrecia": 1.54,
    "Demigod's Presence": 1.51,
    "The Ignomon": 1.51,
    "Bloodplay": 1.51,
    "The Effigon": 1.51,
    "The Untouched Soul": 1.51,
    "The Goddess Bound": 1.49,
    "Shackles of the Wretched": 1.49,
    "Hyrri's Bite": 1.47,
    "Hyrri's Demise": 1.47,
    "Chain of Endurance": 1.47,
    "Limbsplit": 1.43,
    "Pillar of the Caged God": 1.43,
    "Dying Breath": 1.43,
    "Realmshaper": 1.43,
    "The Cauteriser": 1.43,
    "Realm Ender": 1.43,
    "Doedre's Damning": 1.41,
    "Quill Rain": 1.41,
    "Replica Quill Rain": 1.41,
    "Shiversting": 1.38,
    "Honourhome": 1.38,
    "Doedre's Tenure": 1.38,
    "Demigod's Triumph": 1.38,
    "Demigod's Stride": 1.38,
    "Demigod's Touch": 1.38,
    "Demigod's Bounty": 1.38,
    "Demigod's Eye": 1.38,
    "Wildslash": 1.38,
    "Demigod's Immortality": 1.38,
    "Doedre's Malevolence": 1.38,
    "Kaom's Sign": 1.37,
    "Replica Blood Thorn": 1.37,
    "Replica Fencoil": 1.37,
    "Feastbind": 1.34,
    "Sadima's Touch": 1.33,
    "Goldrim": 1.33,
    "Sacrificial Heart": 1.33,
    "Replica Last Resort": 1.33,
    "The Princess": 1.3,
    "Gorebreaker": 1.3,
    "Axiom Perpetuum": 1.3,
    "Coward's Chains": 1.29,
    "Replica Prismweave": 1.29,
    "Wondertrap": 1.27,
    "Hrimsorrow": 1.27,
    "Storm Cloud": 1.27,
    "Hrimburn": 1.27,
    "Greedtrap": 1.27,
    "Wildwrap": 1.27,
    "Bramblejack": 1.25,
    "Crest of Perandus": 1.23,
    "Asenath's Chant": 1.23,
    "Stone of Lazhwar": 1.19,
    "Karui Ward": 1.19,
    "Springleaf": 1.19,
    "Tear of Purity": 1.19,
    "Karui Charge": 1.19,
    "The Oak": 1.19,
    "The Screaming Eagle": 1.16,
    "Abberath's Horn": 1.16,
    "The Gryphon": 1.16,
    "Ondar's Clasp": 1.13,
    "Wheel of the Stormsail": 1.13,
    "Goredrill": 1.13,
    "Sanguine Gambol": 1.13,
    "The Megalomaniac": 1.13,
    "Fencoil": 1.09,
    "Craghead": 1.09,
    "The Blood Thorn": 1.09,
    "Kaom's Way": 1.09,
    "Cragfall": 1.09,
    "Mirebough": 1.09,
    "Sidhebreath": 1.06,
    "Crown of Thorns": 1.06,
    "Araku Tiki": 1.06,
    "Wanderlust": 1.06,
    "Last Resort": 1.06,
    "Ngamahu Tiki": 1.06,
    "Martyr's Crown": 1.06,
    "Blackheart": 1.03,
    "Blackgleam": 1.03,
    "Voidheart": 1.03,
    "Oni-Goroshi": 1.03,
    "Redbeak": 1.0,
    "Silverbranch": 1.0,
    "Ezomyte Peak": 1.0,
    "Lochtonial Caress": 1.0,
    "Lifesprig": 1.0,
    "Talisman of the Victor": 1.0,
    "First Piece of the Arcane": 1.0,
    "Second Piece of the Arcane": 1.0,
    "Third Piece of the Arcane": 1.0,
    "First Piece of Time": 1.0,
    "Second Piece of Time": 1.0,
    "Demigod's Authority": 1.0,
    "Wall of Brambles": 1.0,
    "Ezomyte Hold": 1.0,
    "Silverbough": 1.0,
    "Dreadbeak": 1.0
  };

class PriceUpdater {
    constructor() {
        this.poeNinjaBaseUrl = 'https://poe.ninja/api/data';
        this.corsProxyUrl = 'https://corsproxy.io/?';
        this.priceDataUrl = 'data/price_data.json';
        this.league = 'Phrecia';
        this.priceData = null;
        this.dustValues = null;
    }

    async loadDustValues() {
        try {
            const response = await fetch('data/dust-values.csv');
            const csvText = await response.text();
            
            // Parse CSV
            const lines = csvText.split('\n');
            const headers = lines[0].split(',');
            const nameIndex = headers.indexOf('name');
            const dustValIndex = headers.indexOf('dustVal');
            
            this.dustValues = {};
            for (let i = 1; i < lines.length; i++) {
                const line = lines[i].trim();
                if (!line) continue;
                
                const values = line.split(',');
                const name = values[nameIndex];
                const dustVal = parseFloat(values[dustValIndex]);
                
                if (name && !isNaN(dustVal)) {
                    this.dustValues[name] = dustVal;
                }
            }
            
            console.log(`Loaded ${Object.keys(this.dustValues).length} dust values`);
        } catch (error) {
            console.error('Error loading dust values:', error);
            throw error;
        }
    }

    async fetchWithCors(url) {
        try {
            const response = await fetch(this.corsProxyUrl + encodeURIComponent(url));
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return await response.json();
        } catch (error) {
            console.error('Error fetching data:', error);
            throw error;
        }
    }

    async fetchDivinePrice() {
        try {
            const data = await this.fetchWithCors(`${this.poeNinjaBaseUrl}/currencyoverview?league=${this.league}&type=Currency`);
            const divineOrb = data.lines.find(currency => currency.currencyTypeName === 'Divine Orb');
            return divineOrb ? divineOrb.chaosEquivalent : 0;
        } catch (error) {
            console.error('Error fetching divine price:', error);
            throw error;
        }
    }

    async fetchUniqueItems() {
        try {
            // Fetch weapons, armour, and accessories separately
            const [weapons, armour, accessories] = await Promise.all([
                this.fetchWithCors(`${this.poeNinjaBaseUrl}/itemoverview?league=${this.league}&type=UniqueWeapon`),
                this.fetchWithCors(`${this.poeNinjaBaseUrl}/itemoverview?league=${this.league}&type=UniqueArmour`),
                this.fetchWithCors(`${this.poeNinjaBaseUrl}/itemoverview?league=${this.league}&type=UniqueAccessory`)
            ]);
            
            // Combine all items
            const allItems = [
                ...(weapons.lines || []),
                ...(armour.lines || []),
                ...(accessories.lines || [])
            ];
            
            return allItems;
        } catch (error) {
            console.error('Error fetching unique items:', error);
            throw error;
        }
    }

    async updatePrices() {
        try {
            // Load dust values first
            await this.loadDustValues();
            
            // Get divine price
            const divinePrice = await this.fetchDivinePrice();
            console.log(`Current Divine price: ${divinePrice} chaos`);

            // Get unique items
            const items = await this.fetchUniqueItems();
            console.log(`Fetched ${items.length} unique items`);

            // Process items
            const uniqueItems = items.map(item => {
                // Convert divine price to chaos if needed
                let priceInChaos = item.chaosValue || 0;
                if (item.divineValue > 0) {
                    priceInChaos = item.divineValue * divinePrice;
                }

                // Get dust value
                const dustValue = this.dustValues[item.name] || 0;

                return {
                    name: item.name,
                    chaosValue: priceInChaos,
                    dustValue: dustValue
                };
            });

            // Create the price data structure
            this.priceData = {
                lastUpdated: new Date().toISOString().split('T')[0],
                divinePrice: divinePrice,
                uniqueItems: uniqueItems
            };

            // Save to localStorage for persistence
            localStorage.setItem('poePriceData', JSON.stringify(this.priceData));
            
            // Update the price data display if it exists
            this.updatePriceDataDisplay();

            console.log('Price data has been updated and saved to localStorage');
            return this.priceData;
        } catch (error) {
            console.error('Error updating prices:', error);
            throw error;
        }
    }

    updatePriceDataDisplay() {
        const priceDataDisplay = document.getElementById('price-data-display');
        if (!priceDataDisplay) return;
        
        // Clear previous content
        priceDataDisplay.innerHTML = '';
        
        if (!this.priceData) {
            priceDataDisplay.innerHTML = '<p>No price data available.</p>';
            return;
        }
        
        // Create price data card
        const card = document.createElement('div');
        card.className = 'price-data-card';
        
        // Add last updated date
        const lastUpdated = document.createElement('p');
        lastUpdated.textContent = `Last Updated: ${this.priceData.lastUpdated}`;
        card.appendChild(lastUpdated);
        
        // Add divine price
        const divinePrice = document.createElement('p');
        divinePrice.textContent = `Divine Price: ${this.priceData.divinePrice} chaos`;
        card.appendChild(divinePrice);
        
        // Add item count
        const itemCount = document.createElement('p');
        itemCount.textContent = `Items: ${this.priceData.uniqueItems.length}`;
        card.appendChild(itemCount);
        
        // Add download button
        const downloadBtn = document.createElement('a');
        downloadBtn.href = '#';
        downloadBtn.className = 'download-btn';
        downloadBtn.textContent = 'Download Price Data';
        downloadBtn.addEventListener('click', (e) => {
            e.preventDefault();
            this.downloadPriceData();
        });
        card.appendChild(downloadBtn);
        
        priceDataDisplay.appendChild(card);
    }

    downloadPriceData() {
        if (!this.priceData) {
            console.error('No price data available to download');
            return;
        }
        
        // Convert to JSON string with nice formatting
        const jsonString = JSON.stringify(this.priceData, null, 2);

        // Create a download link
        const blob = new Blob([jsonString], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'price_data.json';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
    }

    loadFromLocalStorage() {
        try {
            const savedData = localStorage.getItem('poePriceData');
            if (savedData) {
                this.priceData = JSON.parse(savedData);
                console.log('Loaded price data from localStorage');
                this.updatePriceDataDisplay();
                return true;
            }
        } catch (error) {
            console.error('Error loading from localStorage:', error);
        }
        return false;
    }
}

// Initialize the price updater on page load
document.addEventListener('DOMContentLoaded', async () => {
    try {
        console.log('Initializing price updater...');
        const updater = new PriceUpdater();
        
        // Get status element
        const statusElement = document.getElementById('price-status');
        if (!statusElement) return;
        
        // Try to load from localStorage first
        const loadedFromStorage = updater.loadFromLocalStorage();
        
        if (loadedFromStorage) {
            statusElement.textContent = 'Price data loaded from cache. Updating in background...';
            statusElement.className = 'updating';
            
            // Update in the background
            updater.updatePrices().catch(error => {
                console.error('Background update failed:', error);
                statusElement.textContent = 'Background update failed. Using cached data.';
                statusElement.className = 'error';
            });
        } else {
            // No cached data, update now
            statusElement.textContent = 'Updating price data...';
            statusElement.className = 'updating';
            
            await updater.updatePrices();
            
            statusElement.textContent = 'Price data updated successfully!';
            statusElement.className = 'success';
        }
    } catch (error) {
        console.error('Error initializing price updater:', error);
        
        // Show error status
        const statusElement = document.getElementById('price-status');
        if (statusElement) {
            statusElement.textContent = 'Failed to update price data. Please try again later.';
            statusElement.className = 'error';
        }
    }
}); 