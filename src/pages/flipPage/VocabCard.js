import { useState, useEffect } from 'react';
import Card from './Card';
import confetti from 'canvas-confetti';
import './card.css'

const cardImages = [
     // { "word": "bad", "matched": false },
     // { "word": "bed", "matched": false },
     // { "word": "bag", "matched": false },
     // { "word": "bit", "matched": false },
     // { "word": "bog", "matched": false },
     // { "word": "box", "matched": false },
     // { "word": "bug", "matched": false },
     // { "word": "bun", "matched": false },
     // { "word": "bus", "matched": false },
     // { "word": "cap", "matched": false },
     // { "word": "cup", "matched": false },
     // { "word": "dig", "matched": false },
     // { "word": "dot", "matched": false },
     // { "word": "fix", "matched": false },
     // { "word": "fog", "matched": false },
     // { "word": "fox", "matched": false },
     // { "word": "fun", "matched": false },
     // { "word": "gas", "matched": false },
     // { "word": "got", "matched": false },
     // { "word": "hen", "matched": false },
     // { "word": "hog", "matched": false },
     // { "word": "hip", "matched": false },
     // { "word": "hug", "matched": false },
     // { "word": "hum", "matched": false },
     // { "word": "jet", "matched": false },
     // { "word": "job", "matched": false },
     // { "word": "jog", "matched": false },
     // { "word": "jug", "matched": false },
     // { "word": "kid", "matched": false },
     // { "word": "leg", "matched": false },
     // { "word": "lip", "matched": false },
     // { "word": "man", "matched": false },
     // { "word": "map", "matched": false },
     // { "word": "men", "matched": false },
     // { "word": "mix", "matched": false },
     // { "word": "nap", "matched": false },
     // { "word": "pen", "matched": false },
     // { "word": "rag", "matched": false },
     // { "word": "rob", "matched": false },
     // { "word": "rug", "matched": false },
     // { "word": "six", "matched": false },
     // { "word": "sun", "matched": false },
     // { "word": "tax", "matched": false },
     // { "word": "ten", "matched": false },
     // { "word": "wax", "matched": false },
     // { "word": "web", "matched": false },
     // { "word": "wet", "matched": false },
     // { "word": "wig", "matched": false },
     // { "word": "win", "matched": false },
     // { "word": "yes", "matched": false },
     [
          {
              "matched": false,
              "word": "abase",
              "type": "v.",
              "definition": "To lower in position, estimation, or the like; degrade."
          },
          {
              "matched": false,
              "word": "abbess",
              "type": "n.",
              "definition": "The lady superior of a nunnery."
          },
          {
              "matched": false,
              "word": "abbey",
              "type": "n.",
              "definition": "The group of buildings which collectively form the dwelling-place of a society of        "
          },
          {
              "matched": false,
              "word": "abbot",
              "type": "n.",
              "definition": "The superior of a community of monks."
          },
          {
              "matched": false,
              "word": "abdicate",
              "type": "v.",
              "definition": "To give up (royal power or the like)."
          },
          {
              "matched": false,
              "word": "abdomen",
              "type": "n.",
              "definition": "In mammals, the visceral cavity between the diaphragm and the pelvic floor; the         "
          },
          {
              "matched": false,
              "word": "abdominal",
              "type": "n.",
              "definition": "Of, pertaining to, or situated on the abdomen."
          },
          {
              "matched": false,
              "word": "abduction",
              "type": "n.",
              "definition": "A carrying away of a person against his will, or illegally."
          },
          {
              "matched": false,
              "word": "abed",
              "type": "adv.",
              "definition": "In bed; on a bed."
          },
          {
              "matched": false,
              "word": "aberration",
              "type": "n.",
              "definition": "Deviation from a right, customary, or prescribed course."
          },
          {
              "matched": false,
              "word": "abet",
              "type": "v.",
              "definition": "To aid, promote, or encourage the commission of (an offense)."
          },
          {
              "matched": false,
              "word": "abeyance",
              "type": "n.",
              "definition": "A state of suspension or temporary inaction."
          },
          {
              "matched": false,
              "word": "abhorrence",
              "type": "n.",
              "definition": "The act of detesting extremely."
          },
          {
              "matched": false,
              "word": "abhorrent",
              "type": "adj.",
              "definition": "Very repugnant; hateful."
          },
          {
              "matched": false,
              "word": "abidance",
              "type": "n.",
              "definition": "An abiding."
          },
          {
              "matched": false,
              "word": "abject",
              "type": "adj.",
              "definition": "Sunk to a low condition."
          },
          {
              "matched": false,
              "word": "abjure",
              "type": "v.",
              "definition": "To recant, renounce, repudiate under oath."
          },
          {
              "matched": false,
              "word": "able-bodied",
              "type": "adj.",
              "definition": "Competent for physical service."
          },
          {
              "matched": false,
              "word": "ablution",
              "type": "n.",
              "definition": "A washing or cleansing, especially of the body."
          },
          {
              "matched": false,
              "word": "abnegate",
              "type": "v.",
              "definition": "To renounce (a right or privilege)."
          },
          {
              "matched": false,
              "word": "abnormal",
              "type": "adj.",
              "definition": "Not conformed to the ordinary rule or standard."
          },
          {
              "matched": false,
              "word": "abominable",
              "type": "adj.",
              "definition": "Very hateful."
          },
          {
              "matched": false,
              "word": "abominate",
              "type": "v.",
              "definition": "To hate violently."
          },
          {
              "matched": false,
              "word": "abomination",
              "type": "n.",
              "definition": "A very detestable act or practice."
          },
          {
              "matched": false,
              "word": "aboriginal",
              "type": "adj.",
              "definition": "Primitive; unsophisticated."
          },
          {
              "matched": false,
              "word": "aborigines",
              "type": "n.",
              "definition": "The original of earliest known inhabitants of a country."
          },
          {
              "matched": false,
              "word": "aboveboard",
              "type": "adv.",
              "definition": "& adj. Without concealment, fraud, or trickery."
          },
          {
              "matched": false,
              "word": "abrade",
              "type": "v.",
              "definition": "To wear away the surface or some part of by friction."
          },
          {
              "matched": false,
              "word": "abrasion",
              "type": "n.",
              "definition": "That which is rubbed off."
          },
          {
              "matched": false,
              "word": "abridge",
              "type": "v.",
              "definition": "To make shorter in words, keeping the essential features, leaning out minor          "
          },
          {
              "matched": false,
              "word": "abridgment",
              "type": "n.",
              "definition": "A condensed form as of a book or play."
          },
          {
              "matched": false,
              "word": "abrogate",
              "type": "v.",
              "definition": "To abolish, repeal."
          },
          {
              "matched": false,
              "word": "abrupt",
              "type": "adj.",
              "definition": "Beginning, ending, or changing suddenly or with a break."
          },
          {
              "matched": false,
              "word": "abscess",
              "type": "n.",
              "definition": "A Collection of pus in a cavity formed within some tissue of the body."
          },
          {
              "matched": false,
              "word": "abscission",
              "type": "n.",
              "definition": "The act of cutting off, as in a surgical operation."
          },
          {
              "matched": false,
              "word": "abscond",
              "type": "v.",
              "definition": "To depart suddenly and secretly, as for the purpose of escaping arrest."
          },
          {
              "matched": false,
              "word": "absence",
              "type": "n.",
              "definition": "The fact of not being present or available."
          },
          {
              "matched": false,
              "word": "absent-minded",
              "type": "adj.",
              "definition": "Lacking in attention to immediate surroundings or business."
          },
          {
              "matched": false,
              "word": "absolution",
              "type": "n.",
              "definition": "Forgiveness, or passing over of offenses."
          },
          {
              "matched": false,
              "word": "absolve",
              "type": "v.",
              "definition": "To free from sin or its penalties."
          },
          {
              "matched": false,
              "word": "absorb",
              "type": "v.",
              "definition": "To drink in or suck up, as a sponge absorbs water."
          },
          {
              "matched": false,
              "word": "absorption",
              "type": "n.",
              "definition": "The act or process of absorbing."
          },
          {
              "matched": false,
              "word": "abstain",
              "type": "v.",
              "definition": "To keep oneself back (from doing or using something)."
          },
          {
              "matched": false,
              "word": "abstemious",
              "type": "adj.",
              "definition": "Characterized by self denial or abstinence, as in the use of drink, food."
          },
          {
              "matched": false,
              "word": "abstinence",
              "type": "n.",
              "definition": "Self denial."
          },
          {
              "matched": false,
              "word": "abstruse",
              "type": "adj.",
              "definition": "Dealing with matters difficult to be understood."
          },
          {
              "matched": false,
              "word": "absurd",
              "type": "adj.",
              "definition": "Inconsistent with reason or common sense."
          },
          {
              "matched": false,
              "word": "abundant",
              "type": "adj.",
              "definition": "Plentiful."
          },
          {
              "matched": false,
              "word": "abusive",
              "type": "adj.",
              "definition": "Employing harsh words or ill treatment."
          },
          {
              "matched": false,
              "word": "abut",
              "type": "v.",
              "definition": "To touch at the end or boundary line."
          },
          {
              "matched": false,
              "word": "abyss",
              "type": "n.",
              "definition": "Bottomless gulf."
          },
          {
              "matched": false,
              "word": "academic",
              "type": "adj.",
              "definition": "Of or pertaining to an academy, college, or university."
          },
          {
              "matched": false,
              "word": "academician",
              "type": "n.",
              "definition": "A member of an academy of literature, art, or science."
          },
          {
              "matched": false,
              "word": "academy",
              "type": "n.",
              "definition": "Any institution where the higher branches of learning are taught."
          },
          {
              "matched": false,
              "word": "accede",
              "type": "v.",
              "definition": "To agree."
          },
          {
              "matched": false,
              "word": "accelerate",
              "type": "v.",
              "definition": "To move faster."
          },
          {
              "matched": false,
              "word": "accept",
              "type": "v.",
              "definition": "To take when offered."
          },
          {
              "matched": false,
              "word": "access",
              "type": "n.",
              "definition": "A way of approach or entrance; passage."
          },
          {
              "matched": false,
              "word": "accessible",
              "type": "adj.",
              "definition": "Approachable."
          },
          {
              "matched": false,
              "word": "accession",
              "type": "n.",
              "definition": "Induction or elevation, as to dignity, office, or government."
          },
          {
              "matched": false,
              "word": "accessory",
              "type": "n.",
              "definition": "A person or thing that aids the principal agent."
          },
          {
              "matched": false,
              "word": "acclaim",
              "type": "v.",
              "definition": "To utter with a shout."
          },
          {
              "matched": false,
              "word": "accommodate",
              "type": "v.",
              "definition": "To furnish something as a kindness or favor."
          },
          {
              "matched": false,
              "word": "accompaniment",
              "type": "n.",
              "definition": "A subordinate part or parts, enriching or supporting the leading part."
          },
          {
              "matched": false,
              "word": "accompanist",
              "type": "n.",
              "definition": "One who or that which accompanies."
          },
          {
              "matched": false,
              "word": "accompany",
              "type": "v.",
              "definition": "To go with, or be associated with, as a companion."
          },
          {
              "matched": false,
              "word": "accomplice",
              "type": "n.",
              "definition": "An associate in wrong-doing."
          },
          {
              "matched": false,
              "word": "accomplish",
              "type": "v.",
              "definition": "To bring to pass."
          },
          {
              "matched": false,
              "word": "accordion",
              "type": "n.",
              "definition": "A portable free-reed musical instrument."
          },
          {
              "matched": false,
              "word": "accost",
              "type": "v.",
              "definition": "To speak to."
          },
          {
              "matched": false,
              "word": "account",
              "type": "n.",
              "definition": "A record or statement of receipts and expenditures, or of business          "
          },
          {
              "matched": false,
              "word": "accouter",
              "type": "v.",
              "definition": "To dress."
          },
          {
              "matched": false,
              "word": "accredit",
              "type": "v.",
              "definition": "To give credit or authority to."
          },
          {
              "matched": false,
              "word": "accumulate",
              "type": "v.",
              "definition": "To become greater in quantity or number."
          },
          {
              "matched": false,
              "word": "accuracy",
              "type": "n.",
              "definition": "Exactness."
          },
          {
              "matched": false,
              "word": "accurate",
              "type": "adj.",
              "definition": "Conforming exactly to truth or to a standard."
          },
          {
              "matched": false,
              "word": "accursed",
              "type": "adj.",
              "definition": "Doomed to evil, misery, or misfortune."
          },
          {
              "matched": false,
              "word": "accusation",
              "type": "n.",
              "definition": "A charge of crime, misdemeanor, or error."
          },
          {
              "matched": false,
              "word": "accusatory",
              "type": "adj.",
              "definition": "Of, pertaining to, or involving an accusation."
          },
          {
              "matched": false,
              "word": "accuse",
              "type": "v.",
              "definition": "To charge with wrong doing, misconduct, or error."
          },
          {
              "matched": false,
              "word": "accustom",
              "type": "v.",
              "definition": "To make familiar by use."
          },
          {
              "matched": false,
              "word": "acerbity",
              "type": "n.",
              "definition": "Sourness, with bitterness and astringency."
          },
          {
              "matched": false,
              "word": "acetate",
              "type": "n.",
              "definition": "A salt of acetic acid."
          },
          {
              "matched": false,
              "word": "acetic",
              "type": "adj.",
              "definition": "Of, pertaining to, or of the nature of vinegar."
          },
          {
              "matched": false,
              "word": "ache",
              "type": "v.",
              "definition": "To be in pain or distress."
          },
          {
              "matched": false,
              "word": "Achillean",
              "type": "adj.",
              "definition": "Invulnerable."
          },
          {
              "matched": false,
              "word": "achromatic",
              "type": "adj.",
              "definition": "Colorless,"
          },
          {
              "matched": false,
              "word": "acid",
              "type": "n.",
              "definition": "A sour substance."
          },
          {
              "matched": false,
              "word": "acidify",
              "type": "v.",
              "definition": "To change into acid."
          },
          {
              "matched": false,
              "word": "acknowledge",
              "type": "v.",
              "definition": "To recognize; to admit the genuineness or validity of."
          },
          {
              "matched": false,
              "word": "acknowledgment",
              "type": "n.",
              "definition": "Recognition."
          },
          {
              "matched": false,
              "word": "acme",
              "type": "n.",
              "definition": "The highest point, or summit."
          },
          {
              "matched": false,
              "word": "acoustic",
              "type": "adj.",
              "definition": "Pertaining to the act or sense of hearing."
          },
          {
              "matched": false,
              "word": "acquaint",
              "type": "v.",
              "definition": "To make familiar or conversant."
          },
          {
              "matched": false,
              "word": "acquiesce",
              "type": "v.",
              "definition": "To comply; submit."
          },
          {
              "matched": false,
              "word": "acquiescence",
              "type": "n.",
              "definition": "Passive consent."
          },
          {
              "matched": false,
              "word": "acquire",
              "type": "v.",
              "definition": "To get as one's own."
          },
          {
              "matched": false,
              "word": "acquisition",
              "type": "n.",
              "definition": "Anything gained, or made one's own, usually by effort or labor."
          },
          {
              "matched": false,
              "word": "acquit",
              "type": "v.",
              "definition": "To free or clear, as from accusation."
          },
          {
              "matched": false,
              "word": "acquittal",
              "type": "n.",
              "definition": "A discharge from accusation by judicial action."
          },
          {
              "matched": false,
              "word": "acquittance",
              "type": "n.",
              "definition": "Release or discharge from indebtedness, obligation, or responsibility."
          },
          {
              "matched": false,
              "word": "acreage",
              "type": "n.",
              "definition": "Quantity or extent of land, especially of cultivated land."
          },
          {
              "matched": false,
              "word": "acrid",
              "type": "adj.",
              "definition": "Harshly pungent or bitter."
          },
          {
              "matched": false,
              "word": "acrimonious",
              "type": "adj.",
              "definition": "Full of bitterness."
          },
          {
              "matched": false,
              "word": "acrimony",
              "type": "n.",
              "definition": "Sharpness or bitterness of speech or temper."
          },
          {
              "matched": false,
              "word": "actionable",
              "type": "adj.",
              "definition": "Affording cause for instituting an action, as trespass, slanderous words."
          },
          {
              "matched": false,
              "word": "actuality",
              "type": "n.",
              "definition": "Any reality."
          },
          {
              "matched": false,
              "word": "actuary",
              "type": "n.",
              "definition": "An officer, as of an insurance company, who calculates and states the risks and          "
          },
          {
              "matched": false,
              "word": "actuate",
              "type": "v.",
              "definition": "To move or incite to action."
          },
          {
              "matched": false,
              "word": "acumen",
              "type": "n.",
              "definition": "Quickness of intellectual insight, or discernment; keenness of discrimination."
          },
          {
              "matched": false,
              "word": "acute",
              "type": "adj.",
              "definition": "Having fine and penetrating discernment."
          },
          {
              "matched": false,
              "word": "adamant",
              "type": "n.",
              "definition": "Any substance of exceeding hardness or impenetrability."
          },
          {
              "matched": false,
              "word": "addendum",
              "type": "n.",
              "definition": "Something added, or to be added."
          },
          {
              "matched": false,
              "word": "addle",
              "type": "v.",
              "definition": "To make inefficient or worthless; muddle."
          },
          {
              "matched": false,
              "word": "adduce",
              "type": "v.",
              "definition": "To bring forward or name for consideration."
          },
          {
              "matched": false,
              "word": "adhere",
              "type": "v.",
              "definition": "To stick fast or together."
          },
          {
              "matched": false,
              "word": "adherence",
              "type": "n.",
              "definition": "Attachment."
          },
          {
              "matched": false,
              "word": "adherent",
              "type": "adj.",
              "definition": "Clinging or sticking fast."
          },
          {
              "matched": false,
              "word": "adhesion",
              "type": "n.",
              "definition": "The state of being attached or joined."
          },
          {
              "matched": false,
              "word": "adieu",
              "type": "inter.",
              "definition": "Good-by; farewell."
          },
          {
              "matched": false,
              "word": "adjacency",
              "type": "n.",
              "definition": "The state of being adjacent."
          },
          {
              "matched": false,
              "word": "adjacent",
              "type": "n.",
              "definition": "That which is near or bordering upon."
          },
          {
              "matched": false,
              "word": "adjudge",
              "type": "v.",
              "definition": "To award or bestow by formal decision."
          },
          {
              "matched": false,
              "word": "adjunct",
              "type": "n.",
              "definition": "Something joined to or connected with another thing, but holding a subordinate          "
          },
          {
              "matched": false,
              "word": "adjuration",
              "type": "n.",
              "definition": "A vehement appeal."
          },
          {
              "matched": false,
              "word": "adjutant",
              "type": "adj.",
              "definition": "Auxiliary."
          },
          {
              "matched": false,
              "word": "administrator",
              "type": "n.",
              "definition": "One who manages affairs of any kind."
          },
          {
              "matched": false,
              "word": "admissible",
              "type": "adj.",
              "definition": "Having the right or privilege of entry."
          },
          {
              "matched": false,
              "word": "admittance",
              "type": "n.",
              "definition": "Entrance, or the right or permission to enter."
          },
          {
              "matched": false,
              "word": "admonish",
              "type": "v.",
              "definition": "To warn of a fault."
          },
          {
              "matched": false,
              "word": "admonition",
              "type": "n.",
              "definition": "Gentle reproof."
          },
          {
              "matched": false,
              "word": "ado",
              "type": "n.",
              "definition": "unnecessary activity or ceremony."
          },
          {
              "matched": false,
              "word": "adoration",
              "type": "n.",
              "definition": "Profound devotion."
          },
          {
              "matched": false,
              "word": "adroit",
              "type": "adj.",
              "definition": "Having skill in the use of the bodily or mental powers."
          },
          {
              "matched": false,
              "word": "adulterant",
              "type": "n.",
              "definition": "An adulterating substance."
          },
          {
              "matched": false,
              "word": "adulterate",
              "type": "v.",
              "definition": "To make impure by the admixture of other or baser ingredients."
          },
          {
              "matched": false,
              "word": "adumbrate",
              "type": "v.",
              "definition": "To represent beforehand in outline or by emblem."
          },
          {
              "matched": false,
              "word": "advent",
              "type": "n.",
              "definition": "The coming or arrival, as of any important change, event, state, or personage."
          },
          {
              "matched": false,
              "word": "adverse",
              "type": "adj.",
              "definition": "Opposing or opposed."
          },
          {
              "matched": false,
              "word": "adversity",
              "type": "n.",
              "definition": "Misfortune."
          },
          {
              "matched": false,
              "word": "advert",
              "type": "v.",
              "definition": "To refer incidentally."
          },
          {
              "matched": false,
              "word": "advertiser",
              "type": "n.",
              "definition": "One who advertises, especially in newspapers."
          },
          {
              "matched": false,
              "word": "advisory",
              "type": "adj.",
              "definition": "Not mandatory."
          },
          {
              "matched": false,
              "word": "advocacy",
              "type": "n.",
              "definition": "The act of pleading a cause."
          },
          {
              "matched": false,
              "word": "advocate",
              "type": "n.",
              "definition": "One who pleads the cause of another, as in a legal or ecclesiastical court."
          },
          {
              "matched": false,
              "word": "aerial",
              "type": "adj.",
              "definition": "Of, pertaining to, or like the air."
          },
          {
              "matched": false,
              "word": "aeronaut",
              "type": "n.",
              "definition": "One who navigates the air, a balloonist."
          },
          {
              "matched": false,
              "word": "aeronautics",
              "type": "n.",
              "definition": "the art or practice of flying aircraft"
          },
          {
              "matched": false,
              "word": "aerostat",
              "type": "n.",
              "definition": "A balloon or other apparatus floating in or sustained by the air."
          },
          {
              "matched": false,
              "word": "aerostatics",
              "type": "n.",
              "definition": "The branch of pneumatics that treats of the equilibrium, pressure, and          "
          },
          {
              "matched": false,
              "word": "affable",
              "type": "adj.",
              "definition": "Easy to approach."
          },
          {
              "matched": false,
              "word": "affect",
              "type": "v.",
              "definition": "To act upon"
          },
          {
              "matched": false,
              "word": "affectation",
              "type": "n.",
              "definition": "A studied or ostentatious pretense or attempt."
          },
          {
              "matched": false,
              "word": "affiliate",
              "type": "n.",
              "definition": "Some auxiliary person or thing."
          },
          {
              "matched": false,
              "word": "affirmative",
              "type": "adj.",
              "definition": "Answering yes; to a question at issue."
          },
          {
              "matched": false,
              "word": "affix",
              "type": "v.",
              "definition": "To fasten."
          },
          {
              "matched": false,
              "word": "affluence",
              "type": "n.",
              "definition": "A profuse or abundant supply of riches."
          },
          {
              "matched": false,
              "word": "affront",
              "type": "n.",
              "definition": "An open insult or indignity."
          },
          {
              "matched": false,
              "word": "afire",
              "type": "adv.",
              "definition": "& adj. On fire, literally or figuratively."
          },
          {
              "matched": false,
              "word": "afoot",
              "type": "adv.",
              "definition": "In progress."
          },
          {
              "matched": false,
              "word": "aforesaid",
              "type": "adj.",
              "definition": "Said in a preceding part or before."
          },
          {
              "matched": false,
              "word": "afresh",
              "type": "adv.",
              "definition": "Once more, after rest or interval."
          },
          {
              "matched": false,
              "word": "afterthought",
              "type": "n.",
              "definition": "A thought that comes later than its appropriate or expected time."
          },
          {
              "matched": false,
              "word": "agglomerate",
              "type": "v.",
              "definition": "To pile or heap together."
          },
          {
              "matched": false,
              "word": "aggrandize",
              "type": "v.",
              "definition": "To cause to appear greatly."
          },
          {
              "matched": false,
              "word": "aggravate",
              "type": "v.",
              "definition": "To make heavier, worse, or more burdensome."
          },
          {
              "matched": false,
              "word": "aggravation",
              "type": "n.",
              "definition": "The fact of being made heavier or more heinous, as a crime , offense,          "
          },
          {
              "matched": false,
              "word": "aggregate",
              "type": "n.",
              "definition": "The entire number, sum, mass, or quantity of something."
          },
          {
              "matched": false,
              "word": "aggress",
              "type": "v.",
              "definition": "To make the first attack."
          },
          {
              "matched": false,
              "word": "aggression",
              "type": "n.",
              "definition": "An unprovoked attack."
          },
          {
              "matched": false,
              "word": "aggrieve",
              "type": "v.",
              "definition": "To give grief or sorrow to."
          },
          {
              "matched": false,
              "word": "aghast",
              "type": "adj.",
              "definition": "Struck with terror and amazement."
          },
          {
              "matched": false,
              "word": "agile",
              "type": "adj.",
              "definition": "Able to move or act quickly, physically, or mentally."
          },
          {
              "matched": false,
              "word": "agitate",
              "type": "v.",
              "definition": "To move or excite (the feelings or thoughts)."
          },
          {
              "matched": false,
              "word": "agrarian",
              "type": "adj.",
              "definition": "Pertaining to land, especially agricultural land."
          },
          {
              "matched": false,
              "word": "aide-de-camp",
              "type": "n.",
              "definition": "An officer who receives and transmits the orders of the general."
          },
          {
              "matched": false,
              "word": "ailment",
              "type": "n.",
              "definition": "Slight sickness."
          },
          {
              "matched": false,
              "word": "airy",
              "type": "adj.",
              "definition": "Delicate, ethereal."
          },
          {
              "matched": false,
              "word": "akin",
              "type": "adj.",
              "definition": "Of similar nature or qualities."
          },
          {
              "matched": false,
              "word": "alabaster",
              "type": "n.",
              "definition": "A white or delicately tinted fine-grained gypsum."
          },
          {
              "matched": false,
              "word": "alacrity",
              "type": "n.",
              "definition": "Cheerful willingness."
          },
          {
              "matched": false,
              "word": "albeit",
              "type": "conj.",
              "definition": "Even though."
          },
          {
              "matched": false,
              "word": "albino",
              "type": "n.",
              "definition": "A person with milky white skin and hair, and eyes with bright red pupil and          "
          },
          {
              "matched": false,
              "word": "album",
              "type": "n.",
              "definition": "A book whose leaves are so made to form paper frames for holding photographs or          "
          },
          {
              "matched": false,
              "word": "alchemy",
              "type": "n.",
              "definition": "Chemistry of the middle ages, characterized by the pursuit of changing base          "
          },
          {
              "matched": false,
              "word": "alcohol",
              "type": "n.",
              "definition": "A volatile, inflammable, colorless liquid of a penetrating odor and burning          "
          },
          {
              "matched": false,
              "word": "alcoholism",
              "type": "n.",
              "definition": "A condition resulting from the inordinate or persistent use of alcoholic          "
          },
          {
              "matched": false,
              "word": "alcove",
              "type": "n.",
              "definition": "A covered recess connected with or at the side of a larger room."
          },
          {
              "matched": false,
              "word": "alder",
              "type": "n.",
              "definition": "Any shrub or small tree of the genus Alumnus, of the oak family."
          },
          {
              "matched": false,
              "word": "alderman",
              "type": "n.",
              "definition": "A member of a municipal legislative body, who usually exercises also certain          "
          },
          {
              "matched": false,
              "word": "aldermanship",
              "type": "n.",
              "definition": "The dignity, condition, office, or term of office of an alderman."
          },
          {
              "matched": false,
              "word": "alias",
              "type": "n.",
              "definition": "An assumed name."
          },
          {
              "matched": false,
              "word": "alien",
              "type": "n.",
              "definition": "One who owes allegiance to a foreign government."
          },
          {
              "matched": false,
              "word": "alienable",
              "type": "adj.",
              "definition": "Capable of being aliened or alienated, as lands."
          },
          {
              "matched": false,
              "word": "alienate",
              "type": "v.",
              "definition": "To cause to turn away."
          },
          {
              "matched": false,
              "word": "alienation",
              "type": "n.",
              "definition": "Estrangement."
          },
          {
              "matched": false,
              "word": "aliment",
              "type": "n.",
              "definition": "That which nourishes."
          },
          {
              "matched": false,
              "word": "alkali",
              "type": "n.",
              "definition": "Anything that will neutralize an acid, as lime, magnesia, etc."
          },
          {
              "matched": false,
              "word": "allay",
              "type": "v.",
              "definition": "To calm the violence or reduce the intensity of; mitigate."
          },
          {
              "matched": false,
              "word": "allege",
              "type": "v.",
              "definition": "To assert to be true, especially in a formal manner, as in court."
          },
          {
              "matched": false,
              "word": "allegory",
              "type": "n.",
              "definition": "The setting forth of a subject under the guise of another subject of aptly          "
          },
          {
              "matched": false,
              "word": "alleviate",
              "type": "v.",
              "definition": "To make less burdensome or less hard to bear."
          },
          {
              "matched": false,
              "word": "alley",
              "type": "n.",
              "definition": "A narrow street, garden path, walk, or the like."
          },
          {
              "matched": false,
              "word": "alliance",
              "type": "n.",
              "definition": "Any combination or union for some common purpose."
          },
          {
              "matched": false,
              "word": "allot",
              "type": "v.",
              "definition": "To assign a definite thing or part to a certain person."
          },
          {
              "matched": false,
              "word": "allotment",
              "type": "n.",
              "definition": "Portion."
          },
          {
              "matched": false,
              "word": "allude",
              "type": "v.",
              "definition": "To refer incidentally, or by suggestion."
          },
          {
              "matched": false,
              "word": "allusion",
              "type": "n.",
              "definition": "An indirect and incidental reference to something without definite mention of          "
          },
          {
              "matched": false,
              "word": "alluvion",
              "type": "n.",
              "definition": "Flood."
          },
          {
              "matched": false,
              "word": "ally",
              "type": "n.",
              "definition": "A person or thing connected with another, usually in some relation of helpfulness."
          },
          {
              "matched": false,
              "word": "almanac",
              "type": "n.",
              "definition": "A series of tables giving the days of the week together with certain          "
          },
          {
              "matched": false,
              "word": "aloof",
              "type": "adv.",
              "definition": "Not in sympathy with or desiring to associate with others."
          },
          {
              "matched": false,
              "word": "altar",
              "type": "n.",
              "definition": "Any raised place or structure on which sacrifices may be offered or incense          "
          },
          {
              "matched": false,
              "word": "alter",
              "type": "v.",
              "definition": "To make change in."
          },
          {
              "matched": false,
              "word": "alteration",
              "type": "n.",
              "definition": "Change or modification."
          },
          {
              "matched": false,
              "word": "altercate",
              "type": "v.",
              "definition": "To contend angrily or zealously in words."
          },
          {
              "matched": false,
              "word": "alternate",
              "type": "n.",
              "definition": "One chosen to act in place of another, in case of the absence or incapacity          "
          },
          {
              "matched": false,
              "word": "alternative",
              "type": "n.",
              "definition": "Something that may or must exist, be taken or chosen, or done instead of          "
          },
          {
              "matched": false,
              "word": "altitude",
              "type": "n.",
              "definition": "Vertical distance or elevation above any point or base-level, as the sea."
          },
          {
              "matched": false,
              "word": "alto",
              "type": "n.",
              "definition": "The lowest or deepest female voice or part."
          },
          {
              "matched": false,
              "word": "altruism",
              "type": "n.",
              "definition": "Benevolence to others on subordination to self-interest."
          },
          {
              "matched": false,
              "word": "altruist",
              "type": "n.",
              "definition": "One who advocates or practices altruism."
          },
          {
              "matched": false,
              "word": "amalgam",
              "type": "n.",
              "definition": "An alloy or union of mercury with another metal."
          },
          {
              "matched": false,
              "word": "amalgamate",
              "type": "v.",
              "definition": "To mix or blend together in a homogeneous body."
          },
          {
              "matched": false,
              "word": "amateur",
              "type": "adj.",
              "definition": "Practicing an art or occupation for the love of it, but not as a profession."
          },
          {
              "matched": false,
              "word": "amatory",
              "type": "adj.",
              "definition": "Designed to excite love."
          },
          {
              "matched": false,
              "word": "ambidextrous",
              "type": "adj.",
              "definition": "Having the ability of using both hands with equal skill or ease."
          },
          {
              "matched": false,
              "word": "ambiguous",
              "type": "adj.",
              "definition": "Having a double meaning."
          },
          {
              "matched": false,
              "word": "ambitious",
              "type": "adj.",
              "definition": "Eagerly desirous and aspiring."
          },
          {
              "matched": false,
              "word": "ambrosial",
              "type": "adj.",
              "definition": "Divinely sweet, fragrant, or delicious."
          },
          {
              "matched": false,
              "word": "ambulance",
              "type": "n.",
              "definition": "A vehicle fitted for conveying the sick and wounded."
          },
          {
              "matched": false,
              "word": "ambulate",
              "type": "v.",
              "definition": "To walk about"
          },
          {
              "matched": false,
              "word": "ambush",
              "type": "n.",
              "definition": "The act or state of lying concealed for the purpose of surprising or attacking          "
          },
          {
              "matched": false,
              "word": "ameliorate",
              "type": "v.",
              "definition": "To relieve, as from pain or hardship"
          },
          {
              "matched": false,
              "word": "amenable",
              "type": "adj.",
              "definition": "Willing and ready to submit."
          },
          {
              "matched": false,
              "word": "Americanism",
              "type": "n.",
              "definition": "A peculiar sense in which an English word or phrase is used in the United          "
          },
          {
              "matched": false,
              "word": "amicable",
              "type": "adj.",
              "definition": "Done in a friendly spirit."
          },
          {
              "matched": false,
              "word": "amity",
              "type": "n.",
              "definition": "Friendship."
          },
          {
              "matched": false,
              "word": "amorous",
              "type": "adj.",
              "definition": "Having a propensity for falling in love."
          },
          {
              "matched": false,
              "word": "amorphous",
              "type": "adj.",
              "definition": "Without determinate shape."
          },
          {
              "matched": false,
              "word": "amour",
              "type": "n.",
              "definition": "A love-affair, especially one of an illicit nature."
          },
          {
              "matched": false,
              "word": "ampere",
              "type": "n.",
              "definition": "The practical unit of electric-current strength."
          },
          {
              "matched": false,
              "word": "ampersand",
              "type": "n.",
              "definition": "The character &; and."
          },
          {
              "matched": false,
              "word": "amphibious",
              "type": "adj.",
              "definition": "Living both on land and in water."
          },
          {
              "matched": false,
              "word": "amphitheater",
              "type": "n.",
              "definition": "An edifice of elliptical shape, constructed about a central open space or          "
          },
          {
              "matched": false,
              "word": "amplitude",
              "type": "n.",
              "definition": "Largeness."
          },
          {
              "matched": false,
              "word": "amply",
              "type": "adv.",
              "definition": "Sufficiently."
          },
          {
              "matched": false,
              "word": "amputate",
              "type": "v.",
              "definition": "To remove by cutting, as a limb or some portion of the body."
          },
          {
              "matched": false,
              "word": "amusement",
              "type": "n.",
              "definition": "Diversion."
          },
          {
              "matched": false,
              "word": "anachronism",
              "type": "n.",
              "definition": "Anything occurring or existing out of its proper time."
          },
          {
              "matched": false,
              "word": "anagram",
              "type": "n.",
              "definition": "The letters of a word or phrase so transposed as to make a different word or          "
          },
          {
              "matched": false,
              "word": "analogous",
              "type": "adj.",
              "definition": "Corresponding (to some other) in certain respects, as in form, proportion,          "
          },
          {
              "matched": false,
              "word": "analogy",
              "type": "n.",
              "definition": "Reasoning in which from certain and known relations or resemblance others are          "
          },
          {
              "matched": false,
              "word": "analyst",
              "type": "n.",
              "definition": "One who analyzes or makes use of the analytical method."
          },
          {
              "matched": false,
              "word": "analyze",
              "type": "v.",
              "definition": "To examine minutely or critically."
          },
          {
              "matched": false,
              "word": "anarchy",
              "type": "n.",
              "definition": "Absence or utter disregard of government."
          },
          {
              "matched": false,
              "word": "anathema",
              "type": "n.",
              "definition": "Anything forbidden, as by social usage."
          },
          {
              "matched": false,
              "word": "anatomy",
              "type": "n.",
              "definition": "That branch of morphology which treats of the structure of organisms."
          },
          {
              "matched": false,
              "word": "ancestry",
              "type": "n.",
              "definition": "One's ancestors collectively."
          },
          {
              "matched": false,
              "word": "anecdote",
              "type": "n.",
              "definition": "A brief account of some interesting event or incident."
          },
          {
              "matched": false,
              "word": "anemia",
              "type": "n.",
              "definition": "Deficiency of blood or red corpuscles."
          },
          {
              "matched": false,
              "word": "anemic",
              "type": "adj.",
              "definition": "Affected with anemia."
          },
          {
              "matched": false,
              "word": "anemometer",
              "type": "n.",
              "definition": "An instrument for measuring the force or velocity of wind."
          },
          {
              "matched": false,
              "word": "anesthetic",
              "type": "adj.",
              "definition": "Pertaining to or producing loss of sensation."
          },
          {
              "matched": false,
              "word": "anew",
              "type": "adv.",
              "definition": "Once more."
          },
          {
              "matched": false,
              "word": "angelic",
              "type": "adj.",
              "definition": "Saintly."
          },
          {
              "matched": false,
              "word": "Anglophobia",
              "type": "n.",
              "definition": "Hatred or dread of England or of what is English."
          },
          {
              "matched": false,
              "word": "Anglo-Saxon",
              "type": "n.",
              "definition": "The entire English race wherever found, as in Europe, the United States, or          "
          },
          {
              "matched": false,
              "word": "angular",
              "type": "adj.",
              "definition": "Sharp-cornered."
          },
          {
              "matched": false,
              "word": "anhydrous",
              "type": "adj.",
              "definition": "Withered."
          },
          {
              "matched": false,
              "word": "animadversion",
              "type": "n.",
              "definition": "The utterance of criticism or censure."
          },
          {
              "matched": false,
              "word": "animadvert",
              "type": "v.",
              "definition": "To pass criticism or censure."
          },
          {
              "matched": false,
              "word": "animalcule",
              "type": "n.",
              "definition": "An animal of microscopic smallness."
          },
          {
              "matched": false,
              "word": "animate",
              "type": "v.",
              "definition": "To make alive."
          },
          {
              "matched": false,
              "word": "animosity",
              "type": "n.",
              "definition": "Hatred."
          },
          {
              "matched": false,
              "word": "annalist",
              "type": "n.",
              "definition": "Historian."
          },
          {
              "matched": false,
              "word": "annals",
              "type": "n.",
              "definition": "A record of events in their chronological order, year by year."
          },
          {
              "matched": false,
              "word": "annex",
              "type": "v.",
              "definition": "To add or affix at the end."
          },
          {
              "matched": false,
              "word": "annihilate",
              "type": "v.",
              "definition": "To destroy absolutely."
          },
          {
              "matched": false,
              "word": "annotate",
              "type": "v.",
              "definition": "To make explanatory or critical notes on or upon."
          },
          {
              "matched": false,
              "word": "annual",
              "type": "adj.",
              "definition": "Occurring every year."
          },
          {
              "matched": false,
              "word": "annuity",
              "type": "n.",
              "definition": "An annual allowance, payment, or income."
          },
          {
              "matched": false,
              "word": "annunciation",
              "type": "n.",
              "definition": "Proclamation."
          },
          {
              "matched": false,
              "word": "anode",
              "type": "n.",
              "definition": "The point where or path by which a voltaic current enters an electrolyte or the          "
          },
          {
              "matched": false,
              "word": "anonymous",
              "type": "adj.",
              "definition": "Of unknown authorship."
          },
          {
              "matched": false,
              "word": "antagonism",
              "type": "n.",
              "definition": "Mutual opposition or resistance of counteracting forces, principles, or          "
          },
          {
              "matched": false,
              "word": "Antarctic",
              "type": "adj.",
              "definition": "Pertaining to the south pole or the regions near it."
          },
          {
              "matched": false,
              "word": "ante",
              "type": "v.",
              "definition": "In the game of poker, to put up a stake before the cards are dealt."
          },
          {
              "matched": false,
              "word": "antecede",
              "type": "v.",
              "definition": "To precede."
          },
          {
              "matched": false,
              "word": "antecedent",
              "type": "n.",
              "definition": "One who or that which precedes or goes before, as in time, place, rank,          "
          },
          {
              "matched": false,
              "word": "antechamber",
              "type": "n.",
              "definition": "A waiting room for those who seek audience."
          },
          {
              "matched": false,
              "word": "antedate",
              "type": "v.",
              "definition": "To assign or affix a date to earlier than the actual one."
          },
          {
              "matched": false,
              "word": "antediluvian",
              "type": "adj.",
              "definition": "Of or pertaining to the times, things, events before the great flood in          "
          },
          {
              "matched": false,
              "word": "antemeridian",
              "type": "adj.",
              "definition": "Before noon."
          },
          {
              "matched": false,
              "word": "antemundane",
              "type": "adj.",
              "definition": "Pertaining to time before the world's creation."
          },
          {
              "matched": false,
              "word": "antenatal",
              "type": "adj.",
              "definition": "Occurring or existing before birth."
          },
          {
              "matched": false,
              "word": "anterior",
              "type": "adj.",
              "definition": "Prior."
          },
          {
              "matched": false,
              "word": "anteroom",
              "type": "n.",
              "definition": "A room situated before and opening into another, usually larger."
          },
          {
              "matched": false,
              "word": "anthology",
              "type": "n.",
              "definition": "A collection of extracts from the writings of various authors."
          },
          {
              "matched": false,
              "word": "anthracite",
              "type": "n.",
              "definition": "Hard coal."
          },
          {
              "matched": false,
              "word": "anthropology",
              "type": "n.",
              "definition": "The science of man in general."
          },
          {
              "matched": false,
              "word": "anthropomorphous",
              "type": "adj.",
              "definition": "Having or resembling human form."
          },
          {
              "matched": false,
              "word": "antic",
              "type": "n.",
              "definition": "A grotesque, ludicrous, or fantastic action."
          },
          {
              "matched": false,
              "word": "Antichrist",
              "type": "n.",
              "definition": "Any opponent or enemy of Christ, whether a person or a power."
          },
          {
              "matched": false,
              "word": "anticlimax",
              "type": "n.",
              "definition": "A gradual or sudden decrease in the importance or impressiveness of what is          "
          },
          {
              "matched": false,
              "word": "anticyclone",
              "type": "n.",
              "definition": "An atmospheric condition of high central pressure, with currents flowing          "
          },
          {
              "matched": false,
              "word": "antidote",
              "type": "n.",
              "definition": "Anything that will counteract or remove the effects of poison, disease, or the          "
          },
          {
              "matched": false,
              "word": "antilogy",
              "type": "n.",
              "definition": "Inconsistency or contradiction in terms or ideas."
          },
          {
              "matched": false,
              "word": "antipathize",
              "type": "v.",
              "definition": "To show or feel a feeling of antagonism, aversion, or dislike."
          },
          {
              "matched": false,
              "word": "antiphon",
              "type": "n.",
              "definition": "A response or alteration of responses, generally musical."
          },
          {
              "matched": false,
              "word": "antiphony",
              "type": "n.",
              "definition": "An anthem or other composition sung responsively."
          },
          {
              "matched": false,
              "word": "antipodes",
              "type": "n.",
              "definition": "A place or region on the opposite side of the earth."
          },
          {
              "matched": false,
              "word": "antiquary",
              "type": "n.",
              "definition": "One who collects and examines old things, as coins, books, medals, weapons,          "
          },
          {
              "matched": false,
              "word": "antiquate",
              "type": "v.",
              "definition": "To make old or out of date."
          },
          {
              "matched": false,
              "word": "antique",
              "type": "adj.",
              "definition": "Pertaining to ancient times."
          },
          {
              "matched": false,
              "word": "antiseptic",
              "type": "n.",
              "definition": "Anything that destroys or restrains the growth of putrefactive          "
          },
          {
              "matched": false,
              "word": "antislavery",
              "type": "adj.",
              "definition": "Opposed to human slavery."
          },
          {
              "matched": false,
              "word": "antispasmodic",
              "type": "adj.",
              "definition": "Tending to prevent or relieve non-inflammatory spasmodic affections."
          },
          {
              "matched": false,
              "word": "antistrophe",
              "type": "n.",
              "definition": "The inversion of terms in successive classes, as in \"the home of joy          "
          },
          {
              "matched": false,
              "word": "antitoxin",
              "type": "n.",
              "definition": "A substance which neutralizes the poisonous products of micro-organisms."
          },
          {
              "matched": false,
              "word": "antonym",
              "type": "n.",
              "definition": "A word directly opposed to another in meaning."
          },
          {
              "matched": false,
              "word": "anxious",
              "type": "adj.",
              "definition": "Distressed in mind respecting some uncertain matter."
          },
          {
              "matched": false,
              "word": "apathy",
              "type": "n.",
              "definition": "Insensibility to emotion or passionate feeling."
          },
          {
              "matched": false,
              "word": "aperture",
              "type": "n.",
              "definition": "Hole."
          },
          {
              "matched": false,
              "word": "apex",
              "type": "n.",
              "definition": "The highest point, as of a mountain."
          },
          {
              "matched": false,
              "word": "aphorism",
              "type": "n.",
              "definition": "Proverb."
          },
          {
              "matched": false,
              "word": "apiary",
              "type": "n.",
              "definition": "A place where bees are kept."
          },
          {
              "matched": false,
              "word": "apogee",
              "type": "n.",
              "definition": "The climax."
          },
          {
              "matched": false,
              "word": "apology",
              "type": "n.",
              "definition": "A disclaimer of intentional error or offense."
          },
          {
              "matched": false,
              "word": "apostasy",
              "type": "n.",
              "definition": "A total departure from one's faith or religion."
          },
          {
              "matched": false,
              "word": "apostate",
              "type": "adj.",
              "definition": "False."
          },
          {
              "matched": false,
              "word": "apostle",
              "type": "n.",
              "definition": "Any messenger commissioned by or as by divine authority."
          },
          {
              "matched": false,
              "word": "apothecary",
              "type": "n.",
              "definition": "One who keeps drugs for sale and puts up prescriptions."
          },
          {
              "matched": false,
              "word": "apotheosis",
              "type": "n.",
              "definition": "Deification."
          },
          {
              "matched": false,
              "word": "appall",
              "type": "v.",
              "definition": "To fill with dismay or horror."
          },
          {
              "matched": false,
              "word": "apparent",
              "type": "adj.",
              "definition": "Easily understood."
          },
          {
              "matched": false,
              "word": "apparition",
              "type": "n.",
              "definition": "Ghost."
          },
          {
              "matched": false,
              "word": "appease",
              "type": "v.",
              "definition": "To soothe by quieting anger or indignation."
          },
          {
              "matched": false,
              "word": "appellate",
              "type": "adj.",
              "definition": "Capable of being appealed to."
          },
          {
              "matched": false,
              "word": "appellation",
              "type": "n.",
              "definition": "The name or title by which a particular person, class, or thing is called."
          },
          {
              "matched": false,
              "word": "append",
              "type": "v.",
              "definition": "To add or attach, as something accessory, subordinate, or supplementary."
          },
          {
              "matched": false,
              "word": "appertain",
              "type": "v.",
              "definition": "To belong, as by right, fitness, association, classification, possession, or          "
          },
          {
              "matched": false,
              "word": "apposite",
              "type": "adj.",
              "definition": "Appropriate."
          },
          {
              "matched": false,
              "word": "apposition",
              "type": "n.",
              "definition": "The act of placing side by side, together, or in contact."
          },
          {
              "matched": false,
              "word": "appraise",
              "type": "v.",
              "definition": "To estimate the money value of."
          },
          {
              "matched": false,
              "word": "appreciable",
              "type": "adj.",
              "definition": "Capable of being discerned by the senses or intellect."
          },
          {
              "matched": false,
              "word": "apprehend",
              "type": "v.",
              "definition": "To make a prisoner of (a person) in the name of the law."
          },
          {
              "matched": false,
              "word": "apprehensible",
              "type": "adj.",
              "definition": "Capable of being conceived."
          },
          {
              "matched": false,
              "word": "approbation",
              "type": "n.",
              "definition": "Sanction."
          },
          {
              "matched": false,
              "word": "appropriate",
              "type": "adj.",
              "definition": "Suitable for the purpose and circumstances."
          },
          {
              "matched": false,
              "word": "aqueduct",
              "type": "n.",
              "definition": "A water-conduit, particularly one for supplying a community from a distance."
          },
          {
              "matched": false,
              "word": "aqueous",
              "type": "adj.",
              "definition": "Of, pertaining to, or containing water."
          },
          {
              "matched": false,
              "word": "arbiter",
              "type": "n.",
              "definition": "One chosen or appointed, by mutual consent of parties in dispute, to decide          "
          },
          {
              "matched": false,
              "word": "arbitrary",
              "type": "adj.",
              "definition": "Fixed or done capriciously."
          },
          {
              "matched": false,
              "word": "arbitrate",
              "type": "v.",
              "definition": "To act or give judgment as umpire."
          },
          {
              "matched": false,
              "word": "arbor",
              "type": "n.",
              "definition": "A tree."
          },
          {
              "matched": false,
              "word": "arboreal",
              "type": "adj.",
              "definition": "Of or pertaining to a tree or trees."
          },
          {
              "matched": false,
              "word": "arborescent",
              "type": "adj.",
              "definition": "Having the nature of a tree."
          },
          {
              "matched": false,
              "word": "arboretum",
              "type": "n.",
              "definition": "A botanical garden or place devoted to the cultivation of trees or shrubs."
          },
          {
              "matched": false,
              "word": "arboriculture",
              "type": "n.",
              "definition": "The cultivation of trees or shrubs."
          },
          {
              "matched": false,
              "word": "arcade",
              "type": "n.",
              "definition": "A vaulted passageway or street; a roofed passageway having shops, etc., opening          "
          },
          {
              "matched": false,
              "word": "archaic",
              "type": "adj.",
              "definition": "Antiquated"
          },
          {
              "matched": false,
              "word": "archaism",
              "type": "n.",
              "definition": "Obsolescence."
          },
          {
              "matched": false,
              "word": "archangel",
              "type": "n.",
              "definition": "An angel of high rank."
          },
          {
              "matched": false,
              "word": "archbishop",
              "type": "n.",
              "definition": "The chief of the bishops of an ecclesiastical province in the Greek, Roman,          "
          },
          {
              "matched": false,
              "word": "archdeacon",
              "type": "n.",
              "definition": "A high official administrator of the affairs of a diocese."
          },
          {
              "matched": false,
              "word": "archaeology",
              "type": "n.",
              "definition": "The branch of anthropology concerned with the systematic investigation of          "
          },
          {
              "matched": false,
              "word": "archetype",
              "type": "n.",
              "definition": "A prototype."
          },
          {
              "matched": false,
              "word": "archipelago",
              "type": "n.",
              "definition": "Any large body of water studded with islands, or the islands collectively          "
          },
          {
              "matched": false,
              "word": "ardent",
              "type": "adj.",
              "definition": "Burning with passion."
          },
          {
              "matched": false,
              "word": "ardor",
              "type": "n.",
              "definition": "Intensity of passion or affection."
          },
          {
              "matched": false,
              "word": "arid",
              "type": "adj.",
              "definition": "Very dry."
          },
          {
              "matched": false,
              "word": "aristocracy",
              "type": "n.",
              "definition": "A hereditary nobility"
          },
          {
              "matched": false,
              "word": "aristocrat",
              "type": "n.",
              "definition": "A hereditary noble or one nearly connected with nobility."
          },
          {
              "matched": false,
              "word": "armada",
              "type": "n.",
              "definition": "A fleet of war-vessels."
          },
          {
              "matched": false,
              "word": "armful",
              "type": "n.",
              "definition": "As much as can be held in the arm or arms."
          },
          {
              "matched": false,
              "word": "armory",
              "type": "n.",
              "definition": "An arsenal."
          },
          {
              "matched": false,
              "word": "aroma",
              "type": "n.",
              "definition": "An agreeable odor."
          },
          {
              "matched": false,
              "word": "arraign",
              "type": "v.",
              "definition": "To call into court, as a person indicted for crime, and demand whether he          "
          },
          {
              "matched": false,
              "word": "arrange",
              "type": "v.",
              "definition": "To put in definite or proper order."
          },
          {
              "matched": false,
              "word": "arrangement",
              "type": "n.",
              "definition": "The act of putting in proper order, or the state of being put in order."
          },
          {
              "matched": false,
              "word": "arrant",
              "type": "adj.",
              "definition": "Notoriously bad."
          },
          {
              "matched": false,
              "word": "arrear",
              "type": "n.",
              "definition": "Something overdue and unpaid."
          },
          {
              "matched": false,
              "word": "arrival",
              "type": "n.",
              "definition": "A coming to stopping-place or destination."
          },
          {
              "matched": false,
              "word": "arrogant",
              "type": "adj.",
              "definition": "Unduly or excessively proud, as of wealth, station, learning, etc."
          },
          {
              "matched": false,
              "word": "arrogate",
              "type": "v.",
              "definition": "To take, demand, or claim, especially presumptuously or without reasons or          "
          },
          {
              "matched": false,
              "word": "Artesian well",
              "type": "n.",
              "definition": "A very deep bored well. water rises due to underground pressure"
          },
          {
              "matched": false,
              "word": "artful",
              "type": "adj.",
              "definition": "Characterized by craft or cunning."
          },
          {
              "matched": false,
              "word": "Arthurian",
              "type": "adj.",
              "definition": "Pertaining to King Arthur, the real or legendary hero of British poetic          "
          },
          {
              "matched": false,
              "word": "artifice",
              "type": "n.",
              "definition": "Trickery."
          },
          {
              "matched": false,
              "word": "artless",
              "type": "adj.",
              "definition": "Ingenuous."
          },
          {
              "matched": false,
              "word": "ascendant",
              "type": "adj.",
              "definition": "Dominant."
          },
          {
              "matched": false,
              "word": "ascension",
              "type": "n.",
              "definition": "The act of rising."
          },
          {
              "matched": false,
              "word": "ascent",
              "type": "n.",
              "definition": "A rising, soaring, or climbing."
          },
          {
              "matched": false,
              "word": "ascetic",
              "type": "adj.",
              "definition": "Given to severe self-denial and practicing excessive abstinence and devotion."
          },
          {
              "matched": false,
              "word": "ascribe",
              "type": "v.",
              "definition": "To assign as a quality or attribute."
          },
          {
              "matched": false,
              "word": "asexual",
              "type": "adj.",
              "definition": "Having no distinct sexual organs."
          },
          {
              "matched": false,
              "word": "ashen",
              "type": "adj.",
              "definition": "Pale."
          },
          {
              "matched": false,
              "word": "askance",
              "type": "adv.",
              "definition": "With a side or indirect glance or meaning."
          },
          {
              "matched": false,
              "word": "asperity",
              "type": "n.",
              "definition": "Harshness or roughness of temper."
          },
          {
              "matched": false,
              "word": "aspirant",
              "type": "n.",
              "definition": "One who seeks earnestly, as for advancement, honors, place."
          },
          {
              "matched": false,
              "word": "aspiration",
              "type": "n.",
              "definition": "An earnest wish for that which is above one's present reach."
          },
          {
              "matched": false,
              "word": "aspire",
              "type": "v.",
              "definition": "To have an earnest desire, wish, or longing, as for something high and good, not          "
          },
          {
              "matched": false,
              "word": "assailant",
              "type": "n.",
              "definition": "One who attacks."
          },
          {
              "matched": false,
              "word": "assassin",
              "type": "n.",
              "definition": "One who kills, or tries to kill, treacherously or secretly."
          },
          {
              "matched": false,
              "word": "assassinate",
              "type": "v.",
              "definition": "To kill, as by surprise or secret assault, especially the killing of some          "
          },
          {
              "matched": false,
              "word": "assassination",
              "type": "n.",
              "definition": "Murderer, as by secret assault or treachery."
          },
          {
              "matched": false,
              "word": "assay",
              "type": "n.",
              "definition": "The chemical analysis or testing of an alloy ore."
          },
          {
              "matched": false,
              "word": "assent",
              "type": "v.",
              "definition": "To express agreement with a statement or matter of opinion."
          },
          {
              "matched": false,
              "word": "assess",
              "type": "v.",
              "definition": "To determine the amount of (a tax or other sum to be paid)."
          },
          {
              "matched": false,
              "word": "assessor",
              "type": "n.",
              "definition": "An officer whose duty it is to assess taxes."
          },
          {
              "matched": false,
              "word": "assets",
              "type": "n.",
              "definition": "pl. Property in general, regarded as applicable to the payment of debts."
          },
          {
              "matched": false,
              "word": "assiduous",
              "type": "adj.",
              "definition": "Diligent."
          },
          {
              "matched": false,
              "word": "assignee",
              "type": "n.",
              "definition": "One who is appointed to act for another in the management of certain property          "
          },
          {
              "matched": false,
              "word": "assimilate",
              "type": "v.",
              "definition": "To adapt."
          },
          {
              "matched": false,
              "word": "assonance",
              "type": "n.",
              "definition": "Resemblance or correspondence in sound."
          },
          {
              "matched": false,
              "word": "assonant",
              "type": "adj.",
              "definition": "Having resemblance of sound."
          },
          {
              "matched": false,
              "word": "assonate",
              "type": "v.",
              "definition": "To accord in sound, especially vowel sound."
          },
          {
              "matched": false,
              "word": "assuage",
              "type": "v.",
              "definition": "To cause to be less harsh, violent, or severe, as excitement, appetite, pain,          "
          },
          {
              "matched": false,
              "word": "astringent",
              "type": "adj.",
              "definition": "Harsh in disposition or character."
          },
          {
              "matched": false,
              "word": "astute",
              "type": "adj.",
              "definition": "Keen in discernment."
          },
          {
              "matched": false,
              "word": "atheism",
              "type": "n.",
              "definition": "The denial of the existence of God."
          },
          {
              "matched": false,
              "word": "athirst",
              "type": "adj.",
              "definition": "Wanting water."
          },
          {
              "matched": false,
              "word": "athwart",
              "type": "adv.",
              "definition": "From side to side."
          },
          {
              "matched": false,
              "word": "atomizer",
              "type": "n.",
              "definition": "An apparatus for reducing a liquid to a fine spray, as for disinfection,          "
          },
          {
              "matched": false,
              "word": "atone",
              "type": "v.",
              "definition": "To make amends for."
          },
          {
              "matched": false,
              "word": "atonement",
              "type": "n.",
              "definition": "Amends, reparation, or expiation made from wrong or injury."
          },
          {
              "matched": false,
              "word": "atrocious",
              "type": "adj.",
              "definition": "Outrageously or wantonly wicked, criminal, vile, or cruel."
          },
          {
              "matched": false,
              "word": "atrocity",
              "type": "n.",
              "definition": "Great cruelty or reckless wickedness."
          },
          {
              "matched": false,
              "word": "attache",
              "type": "n.",
              "definition": "A subordinate member of a diplomatic embassy."
          },
          {
              "matched": false,
              "word": "attest",
              "type": "v.",
              "definition": "To certify as accurate, genuine, or true."
          },
          {
              "matched": false,
              "word": "attorney-general",
              "type": "n.",
              "definition": "The chief law-officer of a government."
          },
          {
              "matched": false,
              "word": "auburn",
              "type": "adj.",
              "definition": "Reddish-brown, said usually of the hair."
          },
          {
              "matched": false,
              "word": "audacious",
              "type": "adj.",
              "definition": "Fearless."
          },
          {
              "matched": false,
              "word": "audible",
              "type": "adj.",
              "definition": "Loud enough to be heard."
          },
          {
              "matched": false,
              "word": "audition",
              "type": "n.",
              "definition": "The act or sensation of hearing."
          },
          {
              "matched": false,
              "word": "auditory",
              "type": "adj.",
              "definition": "Of or pertaining to hearing or the organs or sense of hearing."
          },
          {
              "matched": false,
              "word": "augment",
              "type": "v.",
              "definition": "To make bigger."
          },
          {
              "matched": false,
              "word": "augur",
              "type": "v.",
              "definition": "To predict."
          },
          {
              "matched": false,
              "word": "Augustinian",
              "type": "adj.",
              "definition": "Pertaining to St. Augustine, his doctrines, or the religious orders          "
          },
          {
              "matched": false,
              "word": "aura",
              "type": "n.",
              "definition": "Pervasive psychic influence supposed to emanate from persons"
          },
          {
              "matched": false,
              "word": "aural",
              "type": "adj.",
              "definition": "Of or pertaining to the ear."
          },
          {
              "matched": false,
              "word": "auricle",
              "type": "n.",
              "definition": "One of the two chambers of the heart which receives the blood from the veins."
          },
          {
              "matched": false,
              "word": "auricular",
              "type": "adj.",
              "definition": "Of or pertaining to the ear, its auricle, or the sense of hearing."
          },
          {
              "matched": false,
              "word": "auriferous",
              "type": "adj.",
              "definition": "Containing gold."
          },
          {
              "matched": false,
              "word": "aurora",
              "type": "n.",
              "definition": "A luminous phenomenon in the upper regions of the atmosphere."
          },
          {
              "matched": false,
              "word": "auspice",
              "type": "n.",
              "definition": "favoring, protecting, or propitious influence or guidance."
          },
          {
              "matched": false,
              "word": "austere",
              "type": "adj.",
              "definition": "Severely simple; unadorned."
          },
          {
              "matched": false,
              "word": "autarchy",
              "type": "n.",
              "definition": "Unrestricted power."
          },
          {
              "matched": false,
              "word": "authentic",
              "type": "adj.",
              "definition": "Of undisputed origin."
          },
          {
              "matched": false,
              "word": "authenticity",
              "type": "n.",
              "definition": "The state or quality of being genuine, or of the origin and authorship          "
          },
          {
              "matched": false,
              "word": "autobiography",
              "type": "n.",
              "definition": "The story of one's life written by himself."
          },
          {
              "matched": false,
              "word": "autocracy",
              "type": "n.",
              "definition": "Absolute government."
          },
          {
              "matched": false,
              "word": "autocrat",
              "type": "n.",
              "definition": "Any one who claims or wields unrestricted or undisputed authority or          "
          },
          {
              "matched": false,
              "word": "automaton",
              "type": "n.",
              "definition": "Any living being whose actions are or appear to be involuntary or mechanical."
          },
          {
              "matched": false,
              "word": "autonomous",
              "type": "adj.",
              "definition": "Self-governing."
          },
          {
              "matched": false,
              "word": "autonomy",
              "type": "n.",
              "definition": "Self-government."
          },
          {
              "matched": false,
              "word": "autopsy",
              "type": "n.",
              "definition": "The examination of a dead body by dissection to ascertain the cause of death."
          },
          {
              "matched": false,
              "word": "autumnal",
              "type": "adj.",
              "definition": "Of or pertaining to autumn."
          },
          {
              "matched": false,
              "word": "auxiliary",
              "type": "n.",
              "definition": "One who or that which aids or helps, especially when regarded as subsidiary          "
          },
          {
              "matched": false,
              "word": "avalanche",
              "type": "n.",
              "definition": "The fall or sliding of a mass of snow or ice down a mountain-slope, often          "
          },
          {
              "matched": false,
              "word": "avarice",
              "type": "n.",
              "definition": "Passion for getting and keeping riches."
          },
          {
              "matched": false,
              "word": "aver",
              "type": "v.",
              "definition": "To assert as a fact."
          },
          {
              "matched": false,
              "word": "averse",
              "type": "adj.",
              "definition": "Reluctant."
          },
          {
              "matched": false,
              "word": "aversion",
              "type": "n.",
              "definition": "A mental condition of fixed opposition to or dislike of some particular thing."
          },
          {
              "matched": false,
              "word": "avert",
              "type": "v.",
              "definition": "To turn away or aside."
          },
          {
              "matched": false,
              "word": "aviary",
              "type": "n.",
              "definition": "A spacious cage or enclosure in which live birds are kept."
          },
          {
              "matched": false,
              "word": "avidity",
              "type": "n.",
              "definition": "Greediness."
          },
          {
              "matched": false,
              "word": "avocation",
              "type": "n.",
              "definition": "Diversion."
          },
          {
              "matched": false,
              "word": "avow",
              "type": "v.",
              "definition": "To declare openly."
          },
          {
              "matched": false,
              "word": "awaken",
              "type": "v.",
              "definition": "To arouse, as emotion, interest, or the like."
          },
          {
              "matched": false,
              "word": "awry",
              "type": "adv.",
              "definition": "& adj. Out of the proper form, direction, or position."
          },
          {
              "matched": false,
              "word": "aye",
              "type": "adv.",
              "definition": "An expression of assent."
          },
          {
              "matched": false,
              "word": "azalea",
              "type": "n.",
              "definition": "A flowering shrub."
          },
          {
              "matched": false,
              "word": "azure",
              "type": "n.",
              "definition": "The color of the sky."
          },
          {
              "matched": false,
              "word": "Baconian",
              "type": "adj.",
              "definition": "Of or pertaining to Lord Bacon or his system of philosophy."
          },
          {
              "matched": false,
              "word": "bacterium",
              "type": "n.",
              "definition": "A microbe."
          },
          {
              "matched": false,
              "word": "badger",
              "type": "v.",
              "definition": "To pester."
          },
          {
              "matched": false,
              "word": "baffle",
              "type": "v.",
              "definition": "To foil or frustrate."
          },
          {
              "matched": false,
              "word": "bailiff",
              "type": "n.",
              "definition": "An officer of court having custody of prisoners under arraignment."
          },
          {
              "matched": false,
              "word": "baize",
              "type": "n.",
              "definition": "A single-colored napped woolen fabric used for table-covers, curtains, etc."
          },
          {
              "matched": false,
              "word": "bale",
              "type": "n.",
              "definition": "A large package prepared for transportation or storage."
          },
          {
              "matched": false,
              "word": "baleful",
              "type": "adj.",
              "definition": "Malignant."
          },
          {
              "matched": false,
              "word": "ballad",
              "type": "n.",
              "definition": "Any popular narrative poem, often with epic subject and usually in lyric form."
          },
          {
              "matched": false,
              "word": "balsam",
              "type": "n.",
              "definition": "A medical preparation, aromatic and oily, used for healing."
          },
          {
              "matched": false,
              "word": "banal",
              "type": "adj.",
              "definition": "Commonplace."
          },
          {
              "matched": false,
              "word": "barcarole",
              "type": "n.",
              "definition": "A boat-song of Venetian gondoliers."
          },
          {
              "matched": false,
              "word": "barograph",
              "type": "n.",
              "definition": "An instrument that registers graphically and continuously the atmospheric          "
          },
          {
              "matched": false,
              "word": "barometer",
              "type": "n.",
              "definition": "An instrument for indicating the atmospheric pressure per unit of surface."
          },
          {
              "matched": false,
              "word": "barring",
              "type": "prep.",
              "definition": "Apart from."
          },
          {
              "matched": false,
              "word": "baritone",
              "type": "adj.",
              "definition": "Having a register higher than bass and lower than tenor."
          },
          {
              "matched": false,
              "word": "bask",
              "type": "v.",
              "definition": "To make warm by genial heat."
          },
          {
              "matched": false,
              "word": "bass",
              "type": "adj.",
              "definition": "Low in tone or compass."
          },
          {
              "matched": false,
              "word": "baste",
              "type": "v.",
              "definition": "To cover with melted fat, gravy, while cooking."
          },
          {
              "matched": false,
              "word": "baton",
              "type": "n.",
              "definition": "An official staff borne either as a weapon or as an emblem of authority or          "
          },
          {
              "matched": false,
              "word": "battalion",
              "type": "n.",
              "definition": "A body of infantry composed of two or more companies, forming a part of a          "
          },
          {
              "matched": false,
              "word": "batten",
              "type": "n.",
              "definition": "A narrow strip of wood."
          },
          {
              "matched": false,
              "word": "batter",
              "type": "n.",
              "definition": "A thick liquid mixture of two or more materials beaten together, to be used in          "
          },
          {
              "matched": false,
              "word": "bauble",
              "type": "n.",
              "definition": "A trinket."
          },
          {
              "matched": false,
              "word": "bawl",
              "type": "v.",
              "definition": "To proclaim by outcry."
          },
          {
              "matched": false,
              "word": "beatify",
              "type": "v.",
              "definition": "To make supremely happy."
          },
          {
              "matched": false,
              "word": "beatitude",
              "type": "n.",
              "definition": "Any state of great happiness."
          },
          {
              "matched": false,
              "word": "beau",
              "type": "n.",
              "definition": "An escort or lover."
          },
          {
              "matched": false,
              "word": "becalm",
              "type": "v.",
              "definition": "To make quiet."
          },
          {
              "matched": false,
              "word": "beck",
              "type": "v.",
              "definition": "To give a signal to, by nod or gesture."
          },
          {
              "matched": false,
              "word": "bedaub",
              "type": "v.",
              "definition": "To smear over, as with something oily or sticky."
          },
          {
              "matched": false,
              "word": "bedeck",
              "type": "v.",
              "definition": "To cover with ornament."
          },
          {
              "matched": false,
              "word": "bedlam",
              "type": "n.",
              "definition": "Madhouse."
          },
          {
              "matched": false,
              "word": "befog",
              "type": "v.",
              "definition": "To confuse."
          },
          {
              "matched": false,
              "word": "befriend",
              "type": "v.",
              "definition": "To be a friend to, especially when in need."
          },
          {
              "matched": false,
              "word": "beget",
              "type": "v.",
              "definition": "To produce by sexual generation."
          },
          {
              "matched": false,
              "word": "begrudge",
              "type": "v.",
              "definition": "To envy one of the possession of."
          },
          {
              "matched": false,
              "word": "belate",
              "type": "v.",
              "definition": "To delay past the proper hour."
          },
          {
              "matched": false,
              "word": "belay",
              "type": "v.",
              "definition": "To make fast, as a rope, by winding round a cleat."
          },
          {
              "matched": false,
              "word": "belie",
              "type": "v.",
              "definition": "To misrepresent."
          },
          {
              "matched": false,
              "word": "believe",
              "type": "v.",
              "definition": "To accept as true on the testimony or authority of others."
          },
          {
              "matched": false,
              "word": "belittle",
              "type": "v.",
              "definition": "To disparage."
          },
          {
              "matched": false,
              "word": "belle",
              "type": "n.",
              "definition": "A woman who is a center of attraction because of her beauty, accomplishments,          "
          },
          {
              "matched": false,
              "word": "bellicose",
              "type": "adj.",
              "definition": "Warlike."
          },
          {
              "matched": false,
              "word": "belligerent",
              "type": "adj.",
              "definition": "Manifesting a warlike spirit."
          },
          {
              "matched": false,
              "word": "bemoan",
              "type": "v.",
              "definition": "To lament"
          },
          {
              "matched": false,
              "word": "benediction",
              "type": "n.",
              "definition": "a solemn invocation of the divine blessing."
          },
          {
              "matched": false,
              "word": "benefactor",
              "type": "n.",
              "definition": "A doer of kindly and charitable acts."
          },
          {
              "matched": false,
              "word": "benefice",
              "type": "n.",
              "definition": "A church office endowed with funds or property for the maintenance of divine          "
          },
          {
              "matched": false,
              "word": "beneficent",
              "type": "adj.",
              "definition": "Characterized by charity and kindness."
          },
          {
              "matched": false,
              "word": "beneficial",
              "type": "adj.",
              "definition": "Helpful."
          },
          {
              "matched": false,
              "word": "beneficiary",
              "type": "n.",
              "definition": "One who is lawfully entitled to the profits and proceeds of an estate or          "
          },
          {
              "matched": false,
              "word": "benefit",
              "type": "n.",
              "definition": "Helpful result."
          },
          {
              "matched": false,
              "word": "benevolence",
              "type": "n.",
              "definition": "Any act of kindness or well-doing."
          },
          {
              "matched": false,
              "word": "benevolent",
              "type": "adj.",
              "definition": "Loving others and actively desirous of their well-being."
          },
          {
              "matched": false,
              "word": "benign",
              "type": "adj.",
              "definition": "Good and kind of heart."
          },
          {
              "matched": false,
              "word": "benignant",
              "type": "adj.",
              "definition": "Benevolent in feeling, character, or aspect."
          },
          {
              "matched": false,
              "word": "benignity",
              "type": "n.",
              "definition": "Kindness of feeling, disposition, or manner."
          },
          {
              "matched": false,
              "word": "benison",
              "type": "n.",
              "definition": "Blessing."
          },
          {
              "matched": false,
              "word": "bequeath",
              "type": "v.",
              "definition": "To give by will."
          },
          {
              "matched": false,
              "word": "bereave",
              "type": "v.",
              "definition": "To make desolate with loneliness and grief."
          },
          {
              "matched": false,
              "word": "berth",
              "type": "n.",
              "definition": "A bunk or bed in a vessel, sleeping-car, etc."
          },
          {
              "matched": false,
              "word": "beseech",
              "type": "v.",
              "definition": "To implore."
          },
          {
              "matched": false,
              "word": "beset",
              "type": "v.",
              "definition": "To attack on all sides."
          },
          {
              "matched": false,
              "word": "besmear",
              "type": "v.",
              "definition": "To smear over, as with any oily or sticky substance."
          },
          {
              "matched": false,
              "word": "bestial",
              "type": "adj.",
              "definition": "Animal."
          },
          {
              "matched": false,
              "word": "bestrew",
              "type": "v.",
              "definition": "To sprinkle or cover with things strewn."
          },
          {
              "matched": false,
              "word": "bestride",
              "type": "v.",
              "definition": "To get or sit upon astride, as a horse."
          },
          {
              "matched": false,
              "word": "bethink",
              "type": "v.",
              "definition": "To remind oneself."
          },
          {
              "matched": false,
              "word": "betide",
              "type": "v.",
              "definition": "To happen to or befall."
          },
          {
              "matched": false,
              "word": "betimes",
              "type": "adv.",
              "definition": "In good season or time."
          },
          {
              "matched": false,
              "word": "betroth",
              "type": "v.",
              "definition": "To engage to marry."
          },
          {
              "matched": false,
              "word": "betrothal",
              "type": "n.",
              "definition": "Engagement to marry."
          },
          {
              "matched": false,
              "word": "bevel",
              "type": "n.",
              "definition": "Any inclination of two surfaces other than 90 degrees."
          },
          {
              "matched": false,
              "word": "bewilder",
              "type": "v.",
              "definition": "To confuse the perceptions or judgment of."
          },
          {
              "matched": false,
              "word": "bibliomania",
              "type": "n.",
              "definition": "The passion for collecting books."
          },
          {
              "matched": false,
              "word": "bibliography",
              "type": "n.",
              "definition": "A list of the words of an author, or the literature bearing on a          "
          },
          {
              "matched": false,
              "word": "bibliophile",
              "type": "n.",
              "definition": "One who loves books."
          },
          {
              "matched": false,
              "word": "bibulous",
              "type": "adj.",
              "definition": "Fond of drinking."
          },
          {
              "matched": false,
              "word": "bide",
              "type": "v.",
              "definition": "To await."
          },
          {
              "matched": false,
              "word": "biennial",
              "type": "n.",
              "definition": "A plant that produces leaves and roots the first year and flowers and fruit          "
          },
          {
              "matched": false,
              "word": "bier",
              "type": "n.",
              "definition": "A horizontal framework with two handles at each end for carrying a corpse to the          "
          },
          {
              "matched": false,
              "word": "bigamist",
              "type": "n.",
              "definition": "One who has two spouses at the same time."
          },
          {
              "matched": false,
              "word": "bigamy",
              "type": "n.",
              "definition": "The crime of marrying any other person while having a legal spouse living."
          },
          {
              "matched": false,
              "word": "bight",
              "type": "n.",
              "definition": "A slightly receding bay between headlands, formed by a long curve of a          "
          },
          {
              "matched": false,
              "word": "bilateral",
              "type": "adj.",
              "definition": "Two-sided."
          },
          {
              "matched": false,
              "word": "bilingual",
              "type": "adj.",
              "definition": "Speaking two languages."
          },
          {
              "matched": false,
              "word": "biograph",
              "type": "n.",
              "definition": "A bibliographical sketch or notice."
          },
          {
              "matched": false,
              "word": "biography",
              "type": "n.",
              "definition": "A written account of one's life, actions, and character."
          },
          {
              "matched": false,
              "word": "biology",
              "type": "n.",
              "definition": "The science of life or living organisms."
          },
          {
              "matched": false,
              "word": "biped",
              "type": "n.",
              "definition": "An animal having two feet."
          },
          {
              "matched": false,
              "word": "birthright",
              "type": "n.",
              "definition": "A privilege or possession into which one is born."
          },
          {
              "matched": false,
              "word": "bitterness",
              "type": "n.",
              "definition": "Acridity, as to the taste."
          },
          {
              "matched": false,
              "word": "blase",
              "type": "adj.",
              "definition": "Sated with pleasure."
          },
          {
              "matched": false,
              "word": "blaspheme",
              "type": "v.",
              "definition": "To indulge in profane oaths."
          },
          {
              "matched": false,
              "word": "blatant",
              "type": "adj.",
              "definition": "Noisily or offensively loud or clamorous."
          },
          {
              "matched": false,
              "word": "blaze",
              "type": "n.",
              "definition": "A vivid glowing flame."
          },
          {
              "matched": false,
              "word": "blazon",
              "type": "v.",
              "definition": "To make widely or generally known."
          },
          {
              "matched": false,
              "word": "bleak",
              "type": "adj.",
              "definition": "Desolate."
          },
          {
              "matched": false,
              "word": "blemish",
              "type": "n.",
              "definition": "A mark that mars beauty."
          },
          {
              "matched": false,
              "word": "blithe",
              "type": "adj.",
              "definition": "Joyous."
          },
          {
              "matched": false,
              "word": "blithesome",
              "type": "adj.",
              "definition": "Cheerful."
          },
          {
              "matched": false,
              "word": "blockade",
              "type": "n.",
              "definition": "The shutting up of a town, a frontier, or a line of coast by hostile forces."
          },
          {
              "matched": false,
              "word": "boatswain",
              "type": "n.",
              "definition": "A subordinate officer of a vessel, who has general charge of the rigging,          "
          },
          {
              "matched": false,
              "word": "bodice",
              "type": "n.",
              "definition": "A women's ornamental corset-shaped laced waist."
          },
          {
              "matched": false,
              "word": "bodily",
              "type": "adj.",
              "definition": "Corporeal."
          },
          {
              "matched": false,
              "word": "boisterous",
              "type": "adj.",
              "definition": "Unchecked merriment or animal spirits."
          },
          {
              "matched": false,
              "word": "bole",
              "type": "n.",
              "definition": "The trunk or body of a tree."
          },
          {
              "matched": false,
              "word": "bolero",
              "type": "n.",
              "definition": "A Spanish dance, illustrative of the passion of love, accompanied by caste nets          "
          },
          {
              "matched": false,
              "word": "boll",
              "type": "n.",
              "definition": "A round pod or seed-capsule, as a flax or cotton."
          },
          {
              "matched": false,
              "word": "bolster",
              "type": "v.",
              "definition": "To support, as something wrong."
          },
          {
              "matched": false,
              "word": "bomb",
              "type": "n.",
              "definition": "A hollow projectile containing an explosive material."
          },
          {
              "matched": false,
              "word": "bombard",
              "type": "v.",
              "definition": "To assail with any missile or with abusive speech."
          },
          {
              "matched": false,
              "word": "bombardier",
              "type": "n.",
              "definition": "A person who has charge of mortars, bombs, and shells."
          },
          {
              "matched": false,
              "word": "bombast",
              "type": "n.",
              "definition": "Inflated or extravagant language, especially on unimportant subjects."
          },
          {
              "matched": false,
              "word": "boorish",
              "type": "adj.",
              "definition": "Rude."
          },
          {
              "matched": false,
              "word": "bore",
              "type": "v.",
              "definition": "To weary by tediousness or dullness."
          },
          {
              "matched": false,
              "word": "borough",
              "type": "n.",
              "definition": "An incorporated village or town."
          },
          {
              "matched": false,
              "word": "bosom",
              "type": "n.",
              "definition": "The breast or the upper front of the thorax of a human being, especially of a          "
          },
          {
              "matched": false,
              "word": "botanical",
              "type": "adj.",
              "definition": "Connected with the study or cultivation of plants."
          },
          {
              "matched": false,
              "word": "botanize",
              "type": "v.",
              "definition": "To study plant-life."
          },
          {
              "matched": false,
              "word": "botany",
              "type": "n.",
              "definition": "The science that treats of plants."
          },
          {
              "matched": false,
              "word": "bountiful",
              "type": "adj.",
              "definition": "Showing abundance."
          },
          {
              "matched": false,
              "word": "Bowdlerize",
              "type": "v.",
              "definition": "To expurgate in editing (a literary composition) by omitting words or          "
          },
          {
              "matched": false,
              "word": "bowler",
              "type": "n.",
              "definition": "In cricket, the player who delivers the ball."
          },
          {
              "matched": false,
              "word": "boycott",
              "type": "v.",
              "definition": "To place the products or merchandise of under a ban."
          },
          {
              "matched": false,
              "word": "brae",
              "type": "n.",
              "definition": "Hillside."
          },
          {
              "matched": false,
              "word": "braggart",
              "type": "n.",
              "definition": "A vain boaster."
          },
          {
              "matched": false,
              "word": "brandish",
              "type": "v.",
              "definition": "To wave, shake, or flourish triumphantly or defiantly, as a sword or spear."
          },
          {
              "matched": false,
              "word": "bravado",
              "type": "n.",
              "definition": "An aggressive display of boldness."
          },
          {
              "matched": false,
              "word": "bravo",
              "type": "interj.",
              "definition": "Well done."
          },
          {
              "matched": false,
              "word": "bray",
              "type": "n.",
              "definition": "A loud harsh sound, as the cry of an ass or the blast of a horn."
          },
          {
              "matched": false,
              "word": "braze",
              "type": "v.",
              "definition": "To make of or ornament with brass."
          },
          {
              "matched": false,
              "word": "brazier",
              "type": "n.",
              "definition": "An open pan or basin for holding live coals."
          },
          {
              "matched": false,
              "word": "breach",
              "type": "n.",
              "definition": "The violation of official duty, lawful right, or a legal obligation."
          },
          {
              "matched": false,
              "word": "breaker",
              "type": "n.",
              "definition": "One who trains horses, dogs, etc."
          },
          {
              "matched": false,
              "word": "breech",
              "type": "n.",
              "definition": "The buttocks."
          },
          {
              "matched": false,
              "word": "brethren",
              "type": "n.",
              "definition": "pl. Members of a brotherhood, gild, profession, association, or the like."
          },
          {
              "matched": false,
              "word": "brevity",
              "type": "n.",
              "definition": "Shortness of duration."
          },
          {
              "matched": false,
              "word": "bric-a-brac",
              "type": "n.",
              "definition": "Objects of curiosity or for decoration."
          },
          {
              "matched": false,
              "word": "bridle",
              "type": "n.",
              "definition": "The head-harness of a horse consisting of a head-stall, a bit, and the reins."
          },
          {
              "matched": false,
              "word": "brigade",
              "type": "n.",
              "definition": "A body of troops consisting of two or more regiments."
          },
          {
              "matched": false,
              "word": "brigadier",
              "type": "n.",
              "definition": "General officer who commands a brigade, ranking between a colonel and a          "
          },
          {
              "matched": false,
              "word": "brigand",
              "type": "n.",
              "definition": "One who lives by robbery and plunder."
          },
          {
              "matched": false,
              "word": "brimstone",
              "type": "n.",
              "definition": "Sulfur."
          },
          {
              "matched": false,
              "word": "brine",
              "type": "n.",
              "definition": "Water saturated with salt."
          },
          {
              "matched": false,
              "word": "bristle",
              "type": "n.",
              "definition": "One of the coarse, stiff hairs of swine: used in brush-making, etc."
          },
          {
              "matched": false,
              "word": "Britannia",
              "type": "n.",
              "definition": "The United Kingdom of Great Britain."
          },
          {
              "matched": false,
              "word": "Briticism",
              "type": "n.",
              "definition": "A word, idiom, or phrase characteristic of Great Britain or the British."
          },
          {
              "matched": false,
              "word": "brittle",
              "type": "adj.",
              "definition": "Fragile."
          },
          {
              "matched": false,
              "word": "broach",
              "type": "v.",
              "definition": "To mention, for the first time."
          },
          {
              "matched": false,
              "word": "broadcast",
              "type": "adj.",
              "definition": "Disseminated far and wide."
          },
          {
              "matched": false,
              "word": "brogan",
              "type": "n.",
              "definition": "A coarse, heavy shoe."
          },
          {
              "matched": false,
              "word": "brogue",
              "type": "n.",
              "definition": "Any dialectic pronunciation of English, especially that of the Irish people."
          },
          {
              "matched": false,
              "word": "brokerage",
              "type": "n.",
              "definition": "The business of making sales and purchases for a commission; a broker."
          },
          {
              "matched": false,
              "word": "bromine",
              "type": "n.",
              "definition": "A dark reddish-brown, non-metallic liquid element with a suffocating odor."
          },
          {
              "matched": false,
              "word": "bronchitis",
              "type": "n.",
              "definition": "Inflammation of the bronchial tubes."
          },
          {
              "matched": false,
              "word": "bronchus",
              "type": "n.",
              "definition": "Either of the two subdivisions of the trachea conveying air into the lungs."
          },
          {
              "matched": false,
              "word": "brooch",
              "type": "n.",
              "definition": "An article of jewelry fastened by a hinged pin and hook on the underside."
          },
          {
              "matched": false,
              "word": "brotherhood",
              "type": "n.",
              "definition": "Spiritual or social fellowship or solidarity."
          },
          {
              "matched": false,
              "word": "browbeat",
              "type": "v.",
              "definition": "To overwhelm, or attempt to do so, by stern, haughty, or rude address or          "
          },
          {
              "matched": false,
              "word": "brusque",
              "type": "adj.",
              "definition": "Somewhat rough or rude in manner or speech."
          },
          {
              "matched": false,
              "word": "buffoon",
              "type": "n.",
              "definition": "A clown."
          },
          {
              "matched": false,
              "word": "buffoonery",
              "type": "n.",
              "definition": "Low drollery, coarse jokes, etc."
          },
          {
              "matched": false,
              "word": "bulbous",
              "type": "adj.",
              "definition": "Of, or pertaining to, or like a bulb."
          },
          {
              "matched": false,
              "word": "bullock",
              "type": "n.",
              "definition": "An ox."
          },
          {
              "matched": false,
              "word": "bulrush",
              "type": "n.",
              "definition": "Any one of various tall rush-like plants growing in damp ground or water."
          },
          {
              "matched": false,
              "word": "bulwark",
              "type": "n.",
              "definition": "Anything that gives security or defense."
          },
          {
              "matched": false,
              "word": "bumper",
              "type": "n.",
              "definition": "A cup or glass filled to the brim, especially one to be drunk as a toast or          "
          },
          {
              "matched": false,
              "word": "bumptious",
              "type": "adj.",
              "definition": "Full of offensive and aggressive self-conceit."
          },
          {
              "matched": false,
              "word": "bungle",
              "type": "v.",
              "definition": "To execute clumsily."
          },
          {
              "matched": false,
              "word": "buoyancy",
              "type": "n.",
              "definition": "Power or tendency to float on or in a liquid or gas."
          },
          {
              "matched": false,
              "word": "buoyant",
              "type": "adj.",
              "definition": "Having the power or tendency to float or keep afloat."
          },
          {
              "matched": false,
              "word": "bureau",
              "type": "n.",
              "definition": "A chest of drawers for clothing, etc."
          },
          {
              "matched": false,
              "word": "bureaucracy",
              "type": "n.",
              "definition": "Government by departments of men transacting particular branches of public          "
          },
          {
              "matched": false,
              "word": "burgess",
              "type": "n.",
              "definition": "In colonial times, a member of the lower house of the legislature of Maryland          "
          },
          {
              "matched": false,
              "word": "burgher",
              "type": "n.",
              "definition": "An inhabitant, citizen or freeman of a borough burgh, or corporate town."
          },
          {
              "matched": false,
              "word": "burnish",
              "type": "v.",
              "definition": "To make brilliant or shining."
          },
          {
              "matched": false,
              "word": "bursar",
              "type": "n.",
              "definition": "A treasurer."
          },
          {
              "matched": false,
              "word": "bustle",
              "type": "v.",
              "definition": "To hurry."
          },
          {
              "matched": false,
              "word": "butt",
              "type": "v.",
              "definition": "To strike with or as with the head, or horns."
          },
          {
              "matched": false,
              "word": "butte",
              "type": "n.",
              "definition": "A conspicuous hill, low mountain, or natural turret, generally isolated."
          },
          {
              "matched": false,
              "word": "buttress",
              "type": "n.",
              "definition": "Any support or prop."
          },
          {
              "matched": false,
              "word": "by-law",
              "type": "n.",
              "definition": "A rule or law adopted by an association, a corporation, or the like."
          },
          {
              "matched": false,
              "word": "cabal",
              "type": "n.",
              "definition": "A number of persons secretly united for effecting by intrigue some private          "
          },
          {
              "matched": false,
              "word": "cabalism",
              "type": "n.",
              "definition": "Superstitious devotion to one's religion."
          },
          {
              "matched": false,
              "word": "cabinet",
              "type": "n.",
              "definition": "The body of men constituting the official advisors of the executive head of a          "
          },
          {
              "matched": false,
              "word": "cacophony",
              "type": "n.",
              "definition": "A disagreeable, harsh, or discordant sound or combination of sounds or tones."
          },
          {
              "matched": false,
              "word": "cadaverous",
              "type": "adj.",
              "definition": "Resembling a corpse."
          },
          {
              "matched": false,
              "word": "cadence",
              "type": "n.",
              "definition": "Rhythmical or measured flow or movement, as in poetry or the time and pace of          "
          },
          {
              "matched": false,
              "word": "cadenza",
              "type": "n.",
              "definition": "An embellishment or flourish, prepared or improvised, for a solo voice or          "
          },
          {
              "matched": false,
              "word": "caitiff",
              "type": "adj.",
              "definition": "Cowardly."
          },
          {
              "matched": false,
              "word": "cajole",
              "type": "v.",
              "definition": "To impose on or dupe by flattering speech."
          },
          {
              "matched": false,
              "word": "cajolery",
              "type": "n.",
              "definition": "Delusive speech."
          },
          {
              "matched": false,
              "word": "calculable",
              "type": "adj.",
              "definition": "That may be estimated by reckoning."
          },
          {
              "matched": false,
              "word": "calculus",
              "type": "n.",
              "definition": "A concretion formed in various parts of the body resembling a pebble in          "
          },
          {
              "matched": false,
              "word": "callosity",
              "type": "n.",
              "definition": "The state of being hard and insensible."
          },
          {
              "matched": false,
              "word": "callow",
              "type": "adj.",
              "definition": "Without experience of the world."
          },
          {
              "matched": false,
              "word": "calorie",
              "type": "n.",
              "definition": "Amount of heat needed to raise the temperature of 1 kilogram of water 1 degree          "
          },
          {
              "matched": false,
              "word": "calumny",
              "type": "n.",
              "definition": "Slander."
          },
          {
              "matched": false,
              "word": "Calvary",
              "type": "n.",
              "definition": "The place where Christ was crucified."
          },
          {
              "matched": false,
              "word": "Calvinism",
              "type": "n.",
              "definition": "The system of doctrine taught by John Calvin."
          },
          {
              "matched": false,
              "word": "Calvinize",
              "type": "v.",
              "definition": "To teach or imbue with the doctrines of Calvinism."
          },
          {
              "matched": false,
              "word": "came",
              "type": "n.",
              "definition": "A leaden sash-bar or grooved strip for fastening panes in stained-glass windows."
          },
          {
              "matched": false,
              "word": "cameo",
              "type": "n.",
              "definition": "Any small engraved or carved work in relief."
          },
          {
              "matched": false,
              "word": "campaign",
              "type": "n.",
              "definition": "A complete series of connected military operations."
          },
          {
              "matched": false,
              "word": "Canaanite",
              "type": "n.",
              "definition": "A member of one of the three tribes that dwelt in the land of Canaan, or          "
          },
          {
              "matched": false,
              "word": "canary",
              "type": "adj.",
              "definition": "Of a bright but delicate yellow."
          },
          {
              "matched": false,
              "word": "candid",
              "type": "adj.",
              "definition": "Straightforward."
          },
          {
              "matched": false,
              "word": "candor",
              "type": "n.",
              "definition": "The quality of frankness or outspokenness."
          },
          {
              "matched": false,
              "word": "canine",
              "type": "adj.",
              "definition": "Characteristic of a dog."
          },
          {
              "matched": false,
              "word": "canon",
              "type": "n.",
              "definition": "Any rule or law."
          },
          {
              "matched": false,
              "word": "cant",
              "type": "v.",
              "definition": "To talk in a singsong, preaching tone with affected solemnity."
          },
          {
              "matched": false,
              "word": "cantata",
              "type": "n.",
              "definition": "A choral composition."
          },
          {
              "matched": false,
              "word": "canto",
              "type": "n.",
              "definition": "One of the divisions of an extended poem."
          },
          {
              "matched": false,
              "word": "cantonment",
              "type": "n.",
              "definition": "The part of the town or district in which the troops are quartered."
          },
          {
              "matched": false,
              "word": "capacious",
              "type": "adj.",
              "definition": "Roomy."
          },
          {
              "matched": false,
              "word": "capillary",
              "type": "n.",
              "definition": "A minute vessel having walls composed of a single layer of cells."
          },
          {
              "matched": false,
              "word": "capitulate",
              "type": "v.",
              "definition": "To surrender or stipulate terms."
          },
          {
              "matched": false,
              "word": "caprice",
              "type": "n.",
              "definition": "A whim."
          },
          {
              "matched": false,
              "word": "caption",
              "type": "n.",
              "definition": "A heading, as of a chapter, section, document, etc."
          },
          {
              "matched": false,
              "word": "captious",
              "type": "adj.",
              "definition": "Hypercritical."
          },
          {
              "matched": false,
              "word": "captivate",
              "type": "v.",
              "definition": "To fascinate, as by excellence. eloquence, or beauty."
          },
          {
              "matched": false,
              "word": "carcass",
              "type": "n.",
              "definition": "The dead body of an animal."
          },
          {
              "matched": false,
              "word": "cardiac",
              "type": "adj.",
              "definition": "Pertaining to the heart."
          },
          {
              "matched": false,
              "word": "cardinal",
              "type": "adj.",
              "definition": "Of prime or special importance."
          },
          {
              "matched": false,
              "word": "caret",
              "type": "n.",
              "definition": "A sign (^) placed below a line, indicating where omitted words, etc., should be          "
          },
          {
              "matched": false,
              "word": "caricature",
              "type": "n.",
              "definition": "a picture or description in which natural characteristics are exaggerated or          "
          },
          {
              "matched": false,
              "word": "carnage",
              "type": "n.",
              "definition": "Massacre."
          },
          {
              "matched": false,
              "word": "carnal",
              "type": "adj.",
              "definition": "Sensual."
          },
          {
              "matched": false,
              "word": "carnivorous",
              "type": "adj.",
              "definition": "Eating or living on flesh."
          },
          {
              "matched": false,
              "word": "carouse",
              "type": "v.",
              "definition": "To drink deeply and in boisterous or jovial manner."
          },
          {
              "matched": false,
              "word": "carrion",
              "type": "n.",
              "definition": "Dead and putrefying flesh."
          },
          {
              "matched": false,
              "word": "cartilage",
              "type": "n.",
              "definition": "An elastic animal tissue of firm consistence."
          },
          {
              "matched": false,
              "word": "cartridge",
              "type": "n.",
              "definition": "A charge for a firearm, or for blasting."
          },
          {
              "matched": false,
              "word": "caste",
              "type": "n.",
              "definition": "The division of society on artificial grounds."
          },
          {
              "matched": false,
              "word": "castigate",
              "type": "v.",
              "definition": "To punish."
          },
          {
              "matched": false,
              "word": "casual",
              "type": "adj.",
              "definition": "Accidental, by chance."
          },
          {
              "matched": false,
              "word": "casualty",
              "type": "n.",
              "definition": "A fatal or serious accident or disaster."
          },
          {
              "matched": false,
              "word": "cataclysm",
              "type": "n.",
              "definition": "Any overwhelming flood of water."
          },
          {
              "matched": false,
              "word": "cataract",
              "type": "n.",
              "definition": "Opacity of the lens of the eye resulting in complete or partial blindness."
          },
          {
              "matched": false,
              "word": "catastrophe",
              "type": "n.",
              "definition": "Any great and sudden misfortune or calamity."
          },
          {
              "matched": false,
              "word": "cathode",
              "type": "n.",
              "definition": "The negative pole or electrode of a galvanic battery."
          },
          {
              "matched": false,
              "word": "Catholicism",
              "type": "n.",
              "definition": "The system, doctrine, and practice of the Roman Catholic Church."
          },
          {
              "matched": false,
              "word": "catholicity",
              "type": "n.",
              "definition": "Universal prevalence or acceptance."
          },
          {
              "matched": false,
              "word": "cat-o-nine-tails",
              "type": "n.",
              "definition": "An instrument consisting of nine pieces of cord, formerly used for          "
          },
          {
              "matched": false,
              "word": "caucus",
              "type": "n.",
              "definition": "A private meeting of members of a political party to select candidates."
          },
          {
              "matched": false,
              "word": "causal",
              "type": "adj.",
              "definition": "Indicating or expressing a cause."
          },
          {
              "matched": false,
              "word": "caustic",
              "type": "adj.",
              "definition": "Sarcastic and severe."
          },
          {
              "matched": false,
              "word": "cauterize",
              "type": "v.",
              "definition": "To burn or sear as with a heated iron."
          },
          {
              "matched": false,
              "word": "cede",
              "type": "v.",
              "definition": "To pass title to."
          },
          {
              "matched": false,
              "word": "censor",
              "type": "n.",
              "definition": "An official examiner of manuscripts empowered to prohibit their publication."
          },
          {
              "matched": false,
              "word": "censorious",
              "type": "adj.",
              "definition": "Judging severely or harshly."
          },
          {
              "matched": false,
              "word": "census",
              "type": "n.",
              "definition": "An official numbering of the people of a country or district."
          },
          {
              "matched": false,
              "word": "centenary",
              "type": "adj.",
              "definition": "Pertaining to a hundred years or a period of a hundred years."
          },
          {
              "matched": false,
              "word": "centiliter",
              "type": "n.",
              "definition": "A hundredth of a liter."
          },
          {
              "matched": false,
              "word": "centimeter",
              "type": "n.",
              "definition": "A length of one hundredth of a meter."
          },
          {
              "matched": false,
              "word": "centurion",
              "type": "n.",
              "definition": "A captain of a company of one hundred infantry in the ancient Roman army."
          },
          {
              "matched": false,
              "word": "cereal",
              "type": "adj.",
              "definition": "Pertaining to edible grain or farinaceous seeds."
          },
          {
              "matched": false,
              "word": "ceremonial",
              "type": "adj.",
              "definition": "Characterized by outward form or ceremony."
          },
          {
              "matched": false,
              "word": "ceremonious",
              "type": "adj.",
              "definition": "Observant of ritual."
          },
          {
              "matched": false,
              "word": "cessation",
              "type": "n.",
              "definition": "Discontinuance, as of action or motion."
          },
          {
              "matched": false,
              "word": "cession",
              "type": "n.",
              "definition": "Surrender, as of possessions or rights."
          },
          {
              "matched": false,
              "word": "chagrin",
              "type": "n.",
              "definition": "Keen vexation, annoyance, or mortification, as at one's failures or errors."
          },
          {
              "matched": false,
              "word": "chameleon",
              "type": "adj.",
              "definition": "Changeable in appearance."
          },
          {
              "matched": false,
              "word": "chancery",
              "type": "n.",
              "definition": "A court of equity, as distinguished from a common-law court."
          },
          {
              "matched": false,
              "word": "chaos",
              "type": "n.",
              "definition": "Any condition of which the elements or parts are in utter disorder and confusion."
          },
          {
              "matched": false,
              "word": "characteristic",
              "type": "n.",
              "definition": "A distinctive feature."
          },
          {
              "matched": false,
              "word": "characterize",
              "type": "v.",
              "definition": "To describe by distinctive marks or peculiarities."
          },
          {
              "matched": false,
              "word": "charlatan",
              "type": "n.",
              "definition": "A quack."
          },
          {
              "matched": false,
              "word": "chasm",
              "type": "n.",
              "definition": "A yawning hollow, as in the earth's surface."
          },
          {
              "matched": false,
              "word": "chasten",
              "type": "v.",
              "definition": "To purify by affliction."
          },
          {
              "matched": false,
              "word": "chastise",
              "type": "v.",
              "definition": "To subject to punitive measures."
          },
          {
              "matched": false,
              "word": "chastity",
              "type": "n.",
              "definition": "Sexual or moral purity."
          },
          {
              "matched": false,
              "word": "chateau",
              "type": "n.",
              "definition": "A castle or manor-house."
          },
          {
              "matched": false,
              "word": "chattel",
              "type": "n.",
              "definition": "Any article of personal property."
          },
          {
              "matched": false,
              "word": "check",
              "type": "v.",
              "definition": "To hold back."
          },
          {
              "matched": false,
              "word": "chiffon",
              "type": "n.",
              "definition": "A very thin gauze used for trimmings, evening dress, etc."
          },
          {
              "matched": false,
              "word": "chivalry",
              "type": "n.",
              "definition": "The knightly system of feudal times with its code, usages and practices."
          },
          {
              "matched": false,
              "word": "cholera",
              "type": "n.",
              "definition": "An acute epidemic disease."
          },
          {
              "matched": false,
              "word": "choleric",
              "type": "adj.",
              "definition": "Easily provoked to anger."
          },
          {
              "matched": false,
              "word": "choral",
              "type": "adj.",
              "definition": "Pertaining to, intended for, or performed by a chorus or choir."
          },
          {
              "matched": false,
              "word": "Christ",
              "type": "n.",
              "definition": "A title of Jesus"
          },
          {
              "matched": false,
              "word": "christen",
              "type": "v.",
              "definition": "To name in baptism."
          },
          {
              "matched": false,
              "word": "Christendom",
              "type": "n.",
              "definition": "That part of the world where Christianity is generally professed."
          },
          {
              "matched": false,
              "word": "chromatic",
              "type": "adj.",
              "definition": "Belonging, relating to, or abounding in color."
          },
          {
              "matched": false,
              "word": "chronology",
              "type": "n.",
              "definition": "The science that treats of computation of time or of investigation and          "
          },
          {
              "matched": false,
              "word": "chronometer",
              "type": "n.",
              "definition": "A portable timekeeper of the highest attainable precision."
          },
          {
              "matched": false,
              "word": "cipher",
              "type": "v.",
              "definition": "To calculate arithmetically. (also a noun meaning zero or nothing)"
          },
          {
              "matched": false,
              "word": "circulate",
              "type": "v.",
              "definition": "To disseminate."
          },
          {
              "matched": false,
              "word": "circumference",
              "type": "n.",
              "definition": "The boundary-line of a circle."
          },
          {
              "matched": false,
              "word": "circumlocution",
              "type": "n.",
              "definition": "Indirect or roundabout expression."
          },
          {
              "matched": false,
              "word": "circumnavigate",
              "type": "v.",
              "definition": "To sail quite around."
          },
          {
              "matched": false,
              "word": "circumscribe",
              "type": "v.",
              "definition": "To confine within bounds."
          },
          {
              "matched": false,
              "word": "circumspect",
              "type": "adj.",
              "definition": "Showing watchfulness, caution, or careful consideration."
          },
          {
              "matched": false,
              "word": "citadel",
              "type": "n.",
              "definition": "Any strong fortress."
          },
          {
              "matched": false,
              "word": "cite",
              "type": "v.",
              "definition": "To refer to specifically."
          },
          {
              "matched": false,
              "word": "claimant",
              "type": "n.",
              "definition": "One who makes a claim or demand, as of right."
          },
          {
              "matched": false,
              "word": "clairvoyance",
              "type": "n.",
              "definition": "Intuitive sagacity or perception."
          },
          {
              "matched": false,
              "word": "clamorous",
              "type": "adj.",
              "definition": "Urgent in complaint or demand."
          },
          {
              "matched": false,
              "word": "clan",
              "type": "n.",
              "definition": "A tribe."
          },
          {
              "matched": false,
              "word": "clandestine",
              "type": "adj.",
              "definition": "Surreptitious."
          },
          {
              "matched": false,
              "word": "clangor",
              "type": "n.",
              "definition": "Clanking or a ringing, as of arms, chains, or bells; clamor."
          },
          {
              "matched": false,
              "word": "clarify",
              "type": "v.",
              "definition": "To render intelligible."
          },
          {
              "matched": false,
              "word": "clarion",
              "type": "n.",
              "definition": "A small shrill trumpet or bugle."
          },
          {
              "matched": false,
              "word": "classify",
              "type": "v.",
              "definition": "To arrange in a class or classes on the basis of observed resemblance’s          "
          },
          {
              "matched": false,
              "word": "clearance",
              "type": "n.",
              "definition": "A certificate from the proper authorities that a vessel has complied with the          "
          },
          {
              "matched": false,
              "word": "clemency",
              "type": "n.",
              "definition": "Mercy."
          },
          {
              "matched": false,
              "word": "clement",
              "type": "adj.",
              "definition": "Compassionate."
          },
          {
              "matched": false,
              "word": "close-hauled",
              "type": "adj.",
              "definition": "Having the sails set for sailing as close to the wind as possible."
          },
          {
              "matched": false,
              "word": "clothier",
              "type": "n.",
              "definition": "One who makes or sells cloth or clothing."
          },
          {
              "matched": false,
              "word": "clumsy",
              "type": "adj.",
              "definition": "Awkward of movement."
          },
          {
              "matched": false,
              "word": "coagulate",
              "type": "v.",
              "definition": "To change into a clot or a jelly, as by heat, by chemical action, or by a          "
          },
          {
              "matched": false,
              "word": "coagulant",
              "type": "adj.",
              "definition": "Producing coagulation."
          },
          {
              "matched": false,
              "word": "coalescence",
              "type": "n.",
              "definition": "The act or process of coming together so as to form one body, combination,          "
          },
          {
              "matched": false,
              "word": "coalition",
              "type": "n.",
              "definition": "Combination in a body or mass."
          },
          {
              "matched": false,
              "word": "coddle",
              "type": "v.",
              "definition": "To treat as a baby or an invalid."
          },
          {
              "matched": false,
              "word": "codicil",
              "type": "n.",
              "definition": "A supplement adding to, revoking, or explaining in the body of a will."
          },
          {
              "matched": false,
              "word": "coerce",
              "type": "v.",
              "definition": "To force."
          },
          {
              "matched": false,
              "word": "coercion",
              "type": "n.",
              "definition": "Forcible constraint or restraint, moral or physical."
          },
          {
              "matched": false,
              "word": "coercive",
              "type": "adj.",
              "definition": "Serving or tending to force."
          },
          {
              "matched": false,
              "word": "cogent",
              "type": "adj.",
              "definition": "Appealing strongly to the reason or conscience."
          },
          {
              "matched": false,
              "word": "cognate",
              "type": "adj.",
              "definition": "Akin."
          },
          {
              "matched": false,
              "word": "cognizant",
              "type": "adj.",
              "definition": "Taking notice."
          },
          {
              "matched": false,
              "word": "cohere",
              "type": "v.",
              "definition": "To stick together."
          },
          {
              "matched": false,
              "word": "cohesion",
              "type": "n.",
              "definition": "Consistency."
          },
          {
              "matched": false,
              "word": "cohesive",
              "type": "adj.",
              "definition": "Having the property of consistency."
          },
          {
              "matched": false,
              "word": "coincide",
              "type": "v.",
              "definition": "To correspond."
          },
          {
              "matched": false,
              "word": "coincidence",
              "type": "n.",
              "definition": "A circumstance so agreeing with another: often implying accident."
          },
          {
              "matched": false,
              "word": "coincident",
              "type": "adj.",
              "definition": "Taking place at the same time."
          },
          {
              "matched": false,
              "word": "collaborate",
              "type": "v.",
              "definition": "To labor or cooperate with another or others, especially in literary or          "
          },
          {
              "matched": false,
              "word": "collapse",
              "type": "v.",
              "definition": "To cause to shrink, fall in, or fail."
          },
          {
              "matched": false,
              "word": "collapsible",
              "type": "adj.",
              "definition": "That may or can collapse."
          },
          {
              "matched": false,
              "word": "colleague",
              "type": "n.",
              "definition": "An associate in professional employment."
          },
          {
              "matched": false,
              "word": "collective",
              "type": "adj.",
              "definition": "Consisting of a number of persons or objects considered as gathered into a          "
          },
          {
              "matched": false,
              "word": "collector",
              "type": "n.",
              "definition": "One who makes a collection, as of objects of art, books, or the like."
          },
          {
              "matched": false,
              "word": "collegian",
              "type": "n.",
              "definition": "A college student."
          },
          {
              "matched": false,
              "word": "collide",
              "type": "v.",
              "definition": "To meet and strike violently."
          },
          {
              "matched": false,
              "word": "collier",
              "type": "n.",
              "definition": "One who works in a coal-mine."
          },
          {
              "matched": false,
              "word": "collision",
              "type": "n.",
              "definition": "Violent contact."
          },
          {
              "matched": false,
              "word": "colloquial",
              "type": "adj.",
              "definition": "Pertaining or peculiar to common speech as distinguished from literary."
          },
          {
              "matched": false,
              "word": "colloquialism",
              "type": "n.",
              "definition": "Form of speech used only or chiefly in conversation."
          },
          {
              "matched": false,
              "word": "colloquy",
              "type": "n.",
              "definition": "Conversation."
          },
          {
              "matched": false,
              "word": "collusion",
              "type": "n.",
              "definition": "A secret agreement for a wrongful purpose."
          },
          {
              "matched": false,
              "word": "colossus",
              "type": "n.",
              "definition": "Any strikingly great person or object."
          },
          {
              "matched": false,
              "word": "comely",
              "type": "adj.",
              "definition": "Handsome."
          },
          {
              "matched": false,
              "word": "comestible",
              "type": "adj.",
              "definition": "Fit to be eaten."
          },
          {
              "matched": false,
              "word": "comical",
              "type": "adj.",
              "definition": "Funny."
          },
          {
              "matched": false,
              "word": "commemorate",
              "type": "v.",
              "definition": "To serve as a remembrance of."
          },
          {
              "matched": false,
              "word": "commentary",
              "type": "n.",
              "definition": "A series of illustrative or explanatory notes on any important work."
          },
          {
              "matched": false,
              "word": "commingle",
              "type": "v.",
              "definition": "To blend."
          },
          {
              "matched": false,
              "word": "commissariat",
              "type": "n.",
              "definition": "The department of an army charged with the provision of its food and water          "
          },
          {
              "matched": false,
              "word": "commission",
              "type": "v.",
              "definition": "To empower."
          },
          {
              "matched": false,
              "word": "commitment",
              "type": "n.",
              "definition": "The act or process of entrusting or consigning for safe-keeping."
          },
          {
              "matched": false,
              "word": "committal",
              "type": "n.",
              "definition": "The act, fact, or result of committing, or the state of being"
          },
          {
              "matched": false,
              "word": "commodity",
              "type": "n.",
              "definition": "Something that is bought and sold."
          },
          {
              "matched": false,
              "word": "commotion",
              "type": "n.",
              "definition": "A disturbance or violent agitation."
          },
          {
              "matched": false,
              "word": "commute",
              "type": "v.",
              "definition": "To put something, especially something less severe, in place of."
          },
          {
              "matched": false,
              "word": "comparable",
              "type": "adj.",
              "definition": "Fit to be compared."
          },
          {
              "matched": false,
              "word": "comparative",
              "type": "adj.",
              "definition": "Relative."
          },
          {
              "matched": false,
              "word": "comparison",
              "type": "n.",
              "definition": "Examination of two or more objects with reference to their likeness or          "
          },
          {
              "matched": false,
              "word": "compensate",
              "type": "v.",
              "definition": "To remunerate."
          },
          {
              "matched": false,
              "word": "competence",
              "type": "n.",
              "definition": "Adequate qualification or capacity."
          },
          {
              "matched": false,
              "word": "competent",
              "type": "adj.",
              "definition": "Qualified."
          },
          {
              "matched": false,
              "word": "competitive",
              "type": "adj.",
              "definition": "characterized by rivalry."
          },
          {
              "matched": false,
              "word": "competitor",
              "type": "n.",
              "definition": "A rival."
          },
          {
              "matched": false,
              "word": "complacence",
              "type": "n.",
              "definition": "Satisfaction with one's acts or surroundings."
          },
          {
              "matched": false,
              "word": "complacent",
              "type": "adj.",
              "definition": "Pleased or satisfied with oneself."
          },
          {
              "matched": false,
              "word": "complaisance",
              "type": "n.",
              "definition": "Politeness."
          },
          {
              "matched": false,
              "word": "complaisant",
              "type": "adj.",
              "definition": "Agreeable."
          },
          {
              "matched": false,
              "word": "complement",
              "type": "v.",
              "definition": "To make complete."
          },
          {
              "matched": false,
              "word": "complex",
              "type": "adj.",
              "definition": "Complicated."
          },
          {
              "matched": false,
              "word": "compliant",
              "type": "adj.",
              "definition": "Yielding."
          },
          {
              "matched": false,
              "word": "complicate",
              "type": "v.",
              "definition": "To make complex, difficult, or hard to deal with."
          },
          {
              "matched": false,
              "word": "complication",
              "type": "n.",
              "definition": "An intermingling or combination of things or parts, especially in a          "
          },
          {
              "matched": false,
              "word": "complicity",
              "type": "n.",
              "definition": "Participation or partnership, as in wrong-doing or with a wrong-doer."
          },
          {
              "matched": false,
              "word": "compliment",
              "type": "v.",
              "definition": "To address or gratify with expressions of delicate praise."
          },
          {
              "matched": false,
              "word": "component",
              "type": "n.",
              "definition": "A constituent element or part."
          },
          {
              "matched": false,
              "word": "comport",
              "type": "v.",
              "definition": "To conduct or behave (oneself)."
          },
          {
              "matched": false,
              "word": "composure",
              "type": "n.",
              "definition": "Calmness."
          },
          {
              "matched": false,
              "word": "comprehensible",
              "type": "adj.",
              "definition": "Intelligible."
          },
          {
              "matched": false,
              "word": "comprehension",
              "type": "n.",
              "definition": "Ability to know."
          },
          {
              "matched": false,
              "word": "comprehensive",
              "type": "adj.",
              "definition": "Large in scope or content."
          },
          {
              "matched": false,
              "word": "compress",
              "type": "v.",
              "definition": "To press together or into smaller space."
          },
          {
              "matched": false,
              "word": "compressible",
              "type": "adj.",
              "definition": "Capable of being pressed into smaller compass."
          },
          {
              "matched": false,
              "word": "compression",
              "type": "n.",
              "definition": "Constraint, as by force or authority."
          },
          {
              "matched": false,
              "word": "comprise",
              "type": "v.",
              "definition": "To consist of."
          },
          {
              "matched": false,
              "word": "compulsion",
              "type": "n.",
              "definition": "Coercion."
          },
          {
              "matched": false,
              "word": "compulsory",
              "type": "adj.",
              "definition": "Forced."
          },
          {
              "matched": false,
              "word": "compunction",
              "type": "n.",
              "definition": "Remorseful feeling."
          },
          {
              "matched": false,
              "word": "compute",
              "type": "v.",
              "definition": "To ascertain by mathematical calculation."
          },
          {
              "matched": false,
              "word": "concede",
              "type": "v.",
              "definition": "To surrender."
          },
          {
              "matched": false,
              "word": "conceit",
              "type": "n.",
              "definition": "Self-flattering opinion."
          },
          {
              "matched": false,
              "word": "conceive",
              "type": "v.",
              "definition": "To form an idea, mental image or thought of."
          },
          {
              "matched": false,
              "word": "concerto",
              "type": "n.",
              "definition": "A musical composition."
          },
          {
              "matched": false,
              "word": "concession",
              "type": "n.",
              "definition": "Anything granted or yielded, or admitted in response to a demand, petition,          "
          },
          {
              "matched": false,
              "word": "conciliate",
              "type": "v.",
              "definition": "To obtain the friendship of."
          },
          {
              "matched": false,
              "word": "conciliatory",
              "type": "adj.",
              "definition": "Tending to reconcile."
          },
          {
              "matched": false,
              "word": "conclusive",
              "type": "adj.",
              "definition": "Sufficient to convince or decide."
          },
          {
              "matched": false,
              "word": "concord",
              "type": "n.",
              "definition": "Harmony."
          },
          {
              "matched": false,
              "word": "concordance",
              "type": "n.",
              "definition": "Harmony."
          },
          {
              "matched": false,
              "word": "concur",
              "type": "v.",
              "definition": "To agree."
          },
          {
              "matched": false,
              "word": "concurrence",
              "type": "n.",
              "definition": "Agreement."
          },
          {
              "matched": false,
              "word": "concurrent",
              "type": "adj.",
              "definition": "Occurring or acting together."
          },
          {
              "matched": false,
              "word": "concussion",
              "type": "n.",
              "definition": "A violent shock to some organ by a fall or a sudden blow."
          },
          {
              "matched": false,
              "word": "condensation",
              "type": "n.",
              "definition": "The act or process of making dense or denser."
          },
          {
              "matched": false,
              "word": "condense",
              "type": "v.",
              "definition": "To abridge."
          },
          {
              "matched": false,
              "word": "condescend",
              "type": "v.",
              "definition": "To come down voluntarily to equal terms with inferiors."
          },
          {
              "matched": false,
              "word": "condolence",
              "type": "n.",
              "definition": "Expression of sympathy with a person in pain, sorrow, or misfortune."
          },
          {
              "matched": false,
              "word": "conduce",
              "type": "v.",
              "definition": "To bring about."
          },
          {
              "matched": false,
              "word": "conducive",
              "type": "adj.",
              "definition": "Contributing to an end."
          },
          {
              "matched": false,
              "word": "conductible",
              "type": "adj.",
              "definition": "Capable of being conducted or transmitted."
          },
          {
              "matched": false,
              "word": "conduit",
              "type": "n.",
              "definition": "A means for conducting something, particularly a tube, pipe, or passageway for          "
          },
          {
              "matched": false,
              "word": "confectionery",
              "type": "n.",
              "definition": "The candy collectively that a confectioner makes or sells, as candy."
          },
          {
              "matched": false,
              "word": "confederacy",
              "type": "n.",
              "definition": "A number of states or persons in compact or league with each other, as for          "
          },
          {
              "matched": false,
              "word": "confederate",
              "type": "n.",
              "definition": "One who is united with others in a league, compact, or agreement."
          },
          {
              "matched": false,
              "word": "confer",
              "type": "v.",
              "definition": "To bestow."
          },
          {
              "matched": false,
              "word": "conferee",
              "type": "n.",
              "definition": "A person with whom another confers."
          },
          {
              "matched": false,
              "word": "confessor",
              "type": "n.",
              "definition": "A spiritual advisor."
          },
          {
              "matched": false,
              "word": "confidant",
              "type": "n.",
              "definition": "One to whom secrets are entrusted."
          },
          {
              "matched": false,
              "word": "confide",
              "type": "v.",
              "definition": "To reveal in trust or confidence."
          },
          {
              "matched": false,
              "word": "confidence",
              "type": "n.",
              "definition": "The state or feeling of trust in or reliance upon another."
          },
          {
              "matched": false,
              "word": "confident",
              "type": "adj.",
              "definition": "Assured."
          },
          {
              "matched": false,
              "word": "confinement",
              "type": "n.",
              "definition": "Restriction within limits or boundaries."
          },
          {
              "matched": false,
              "word": "confiscate",
              "type": "v.",
              "definition": "To appropriate (private property) as forfeited to the public use or          "
          },
          {
              "matched": false,
              "word": "conflagration",
              "type": "n.",
              "definition": "A great fire, as of many buildings, a forest, or the like."
          },
          {
              "matched": false,
              "word": "confluence",
              "type": "n.",
              "definition": "The place where streams meet."
          },
          {
              "matched": false,
              "word": "confluent",
              "type": "n.",
              "definition": "A stream that unites with another."
          },
          {
              "matched": false,
              "word": "conformance",
              "type": "n.",
              "definition": "The act or state or conforming."
          },
          {
              "matched": false,
              "word": "conformable",
              "type": "adj.",
              "definition": "Harmonious."
          },
          {
              "matched": false,
              "word": "conformation",
              "type": "n.",
              "definition": "General structure, form, or outline."
          },
          {
              "matched": false,
              "word": "conformity",
              "type": "n.",
              "definition": "Correspondence in form, manner, or use."
          },
          {
              "matched": false,
              "word": "confront",
              "type": "v.",
              "definition": "To encounter, as difficulties or obstacles."
          },
          {
              "matched": false,
              "word": "congeal",
              "type": "v.",
              "definition": "To coagulate."
          },
          {
              "matched": false,
              "word": "congenial",
              "type": "adj.",
              "definition": "Having kindred character or tastes."
          },
          {
              "matched": false,
              "word": "congest",
              "type": "v.",
              "definition": "To collect into a mass."
          },
          {
              "matched": false,
              "word": "congregate",
              "type": "v.",
              "definition": "To bring together into a crowd."
          },
          {
              "matched": false,
              "word": "coniferous",
              "type": "adj.",
              "definition": "Cone-bearing trees."
          },
          {
              "matched": false,
              "word": "conjecture",
              "type": "n.",
              "definition": "A guess."
          },
          {
              "matched": false,
              "word": "conjoin",
              "type": "v.",
              "definition": "To unite."
          },
          {
              "matched": false,
              "word": "conjugal",
              "type": "adj.",
              "definition": "Pertaining to marriage, marital rights, or married persons."
          },
          {
              "matched": false,
              "word": "conjugate",
              "type": "adj.",
              "definition": "Joined together in pairs."
          },
          {
              "matched": false,
              "word": "conjugation",
              "type": "n.",
              "definition": "The state or condition of being joined together."
          },
          {
              "matched": false,
              "word": "conjunction",
              "type": "n.",
              "definition": "The state of being joined together, or the things so joined."
          },
          {
              "matched": false,
              "word": "connive",
              "type": "v.",
              "definition": "To be in collusion."
          },
          {
              "matched": false,
              "word": "connoisseur",
              "type": "n.",
              "definition": "A critical judge of art, especially one with thorough knowledge and sound          "
          },
          {
              "matched": false,
              "word": "connote",
              "type": "v.",
              "definition": "To mean; signify."
          },
          {
              "matched": false,
              "word": "connubial",
              "type": "adj.",
              "definition": "Pertaining to marriage or matrimony."
          },
          {
              "matched": false,
              "word": "conquer",
              "type": "v.",
              "definition": "To overcome by force."
          },
          {
              "matched": false,
              "word": "consanguineous",
              "type": "adj.",
              "definition": "Descended from the same parent or ancestor."
          },
          {
              "matched": false,
              "word": "conscience",
              "type": "n.",
              "definition": "The faculty in man by which he distinguishes between right and wrong in          "
          },
          {
              "matched": false,
              "word": "conscientious",
              "type": "adj.",
              "definition": "Governed by moral standard."
          },
          {
              "matched": false,
              "word": "conscious",
              "type": "adj.",
              "definition": "Aware that one lives, feels, and thinks."
          },
          {
              "matched": false,
              "word": "conscript",
              "type": "v.",
              "definition": "To force into military service."
          },
          {
              "matched": false,
              "word": "consecrate",
              "type": "v.",
              "definition": "To set apart as sacred."
          },
          {
              "matched": false,
              "word": "consecutive",
              "type": "adj.",
              "definition": "Following in uninterrupted succession."
          },
          {
              "matched": false,
              "word": "consensus",
              "type": "n.",
              "definition": "A collective unanimous opinion of a number of persons."
          },
          {
              "matched": false,
              "word": "conservatism",
              "type": "n.",
              "definition": "Tendency to adhere to the existing order of things."
          },
          {
              "matched": false,
              "word": "conservative",
              "type": "adj.",
              "definition": "Adhering to the existing order of things."
          },
          {
              "matched": false,
              "word": "conservatory",
              "type": "n.",
              "definition": "An institution for instruction and training in music and declamation."
          },
          {
              "matched": false,
              "word": "consign",
              "type": "v.",
              "definition": "To entrust."
          },
          {
              "matched": false,
              "word": "consignee",
              "type": "n.",
              "definition": "A person to whom goods or other property has been entrusted."
          },
          {
              "matched": false,
              "word": "consignor",
              "type": "n.",
              "definition": "One who entrusts."
          },
          {
              "matched": false,
              "word": "consistency",
              "type": "n.",
              "definition": "A state of permanence."
          },
          {
              "matched": false,
              "word": "console",
              "type": "v.",
              "definition": "To comfort."
          },
          {
              "matched": false,
              "word": "consolidate",
              "type": "v.",
              "definition": "To combine into one body or system."
          },
          {
              "matched": false,
              "word": "consonance",
              "type": "n.",
              "definition": "The state or quality of being in accord with."
          },
          {
              "matched": false,
              "word": "consonant",
              "type": "adj.",
              "definition": "Being in agreement or harmony with."
          },
          {
              "matched": false,
              "word": "consort",
              "type": "n.",
              "definition": "A companion or associate."
          },
          {
              "matched": false,
              "word": "conspicuous",
              "type": "adj.",
              "definition": "Clearly visible."
          },
          {
              "matched": false,
              "word": "conspirator",
              "type": "n.",
              "definition": "One who agrees with others to cooperate in accomplishing some unlawful          "
          },
          {
              "matched": false,
              "word": "conspire",
              "type": "v.",
              "definition": "To plot."
          },
          {
              "matched": false,
              "word": "constable",
              "type": "n.",
              "definition": "An officer whose duty is to maintain the peace."
          },
          {
              "matched": false,
              "word": "constellation",
              "type": "n.",
              "definition": "An arbitrary assemblage or group of stars."
          },
          {
              "matched": false,
              "word": "consternation",
              "type": "n.",
              "definition": "Panic."
          },
          {
              "matched": false,
              "word": "constituency",
              "type": "n.",
              "definition": "The inhabitants or voters in a district represented in a legislative body."
          },
          {
              "matched": false,
              "word": "constituent",
              "type": "n.",
              "definition": "One who has the right to vote at an election."
          },
          {
              "matched": false,
              "word": "constrict",
              "type": "v.",
              "definition": "To bind."
          },
          {
              "matched": false,
              "word": "consul",
              "type": "n.",
              "definition": "An officer appointed to reside in a foreign city, chiefly to represent his          "
          },
          {
              "matched": false,
              "word": "consulate",
              "type": "n.",
              "definition": "The place in which a consul transacts official business."
          },
          {
              "matched": false,
              "word": "consummate",
              "type": "v.",
              "definition": "To bring to completion."
          },
          {
              "matched": false,
              "word": "consumption",
              "type": "n.",
              "definition": "Gradual destruction, as by burning, eating, etc., or by using up, wearing          "
          },
          {
              "matched": false,
              "word": "consumptive",
              "type": "adj.",
              "definition": "Designed for gradual destruction."
          },
          {
              "matched": false,
              "word": "contagion",
              "type": "n.",
              "definition": "The communication of disease from person to person."
          },
          {
              "matched": false,
              "word": "contagious",
              "type": "adj.",
              "definition": "Transmitting disease."
          },
          {
              "matched": false,
              "word": "contaminate",
              "type": "v.",
              "definition": "To pollute."
          },
          {
              "matched": false,
              "word": "contemplate",
              "type": "v.",
              "definition": "To consider thoughtfully."
          },
          {
              "matched": false,
              "word": "contemporaneous",
              "type": "adj.",
              "definition": "Living, occurring, or existing at the same time."
          },
          {
              "matched": false,
              "word": "contemporary",
              "type": "adj.",
              "definition": "Living or existing at the same time."
          },
          {
              "matched": false,
              "word": "contemptible",
              "type": "adj.",
              "definition": "Worthy of scorn or disdain."
          },
          {
              "matched": false,
              "word": "contemptuous",
              "type": "adj.",
              "definition": "Disdainful."
          },
          {
              "matched": false,
              "word": "contender",
              "type": "n.",
              "definition": "One who exerts oneself in opposition or rivalry."
          },
          {
              "matched": false,
              "word": "contiguity",
              "type": "n.",
              "definition": "Proximity."
          },
          {
              "matched": false,
              "word": "contiguous",
              "type": "adj.",
              "definition": "Touching or joining at the edge or boundary."
          },
          {
              "matched": false,
              "word": "continence",
              "type": "n.",
              "definition": "Self-restraint with respect to desires, appetites, and passion."
          },
          {
              "matched": false,
              "word": "contingency",
              "type": "n.",
              "definition": "Possibility of happening."
          },
          {
              "matched": false,
              "word": "contingent",
              "type": "adj.",
              "definition": "Not predictable."
          },
          {
              "matched": false,
              "word": "continuance",
              "type": "n.",
              "definition": "Permanence."
          },
          {
              "matched": false,
              "word": "continuation",
              "type": "n.",
              "definition": "Prolongation."
          },
          {
              "matched": false,
              "word": "continuity",
              "type": "n.",
              "definition": "Uninterrupted connection in space, time, operation, or development."
          },
          {
              "matched": false,
              "word": "continuous",
              "type": "adj.",
              "definition": "Connected, extended, or prolonged without separation or interruption of          "
          },
          {
              "matched": false,
              "word": "contort",
              "type": "v.",
              "definition": "To twist into a misshapen form."
          },
          {
              "matched": false,
              "word": "contraband",
              "type": "n.",
              "definition": "Trade forbidden by law or treaty."
          },
          {
              "matched": false,
              "word": "contradiction",
              "type": "n.",
              "definition": "The assertion of the opposite of that which has been said."
          },
          {
              "matched": false,
              "word": "contradictory",
              "type": "adj.",
              "definition": "Inconsistent with itself."
          },
          {
              "matched": false,
              "word": "contraposition",
              "type": "n.",
              "definition": "A placing opposite."
          },
          {
              "matched": false,
              "word": "contravene",
              "type": "v.",
              "definition": "To prevent or obstruct the operation of."
          },
          {
              "matched": false,
              "word": "contribution",
              "type": "n.",
              "definition": "The act of giving for a common purpose."
          },
          {
              "matched": false,
              "word": "contributor",
              "type": "n.",
              "definition": "One who gives or furnishes, in common with others, for a common purpose."
          },
          {
              "matched": false,
              "word": "contrite",
              "type": "adj.",
              "definition": "Broken in spirit because of a sense of sin."
          },
          {
              "matched": false,
              "word": "contrivance",
              "type": "n.",
              "definition": "The act planning, devising, inventing, or adapting something to or for a          "
          },
          {
              "matched": false,
              "word": "contrive",
              "type": "v.",
              "definition": "To manage or carry through by some device or scheme."
          },
          {
              "matched": false,
              "word": "control",
              "type": "v.",
              "definition": "To exercise a directing, restraining, or governing influence over."
          },
          {
              "matched": false,
              "word": "controller",
              "type": "n.",
              "definition": "One who or that which regulates or directs."
          },
          {
              "matched": false,
              "word": "contumacious",
              "type": "adj.",
              "definition": "Rebellious."
          },
          {
              "matched": false,
              "word": "contumacy",
              "type": "n.",
              "definition": "Contemptuous disregard of the requirements of rightful authority."
          },
          {
              "matched": false,
              "word": "contuse",
              "type": "v.",
              "definition": "To bruise by a blow, either with or without the breaking of the skin."
          },
          {
              "matched": false,
              "word": "contusion",
              "type": "n.",
              "definition": "A bruise."
          },
          {
              "matched": false,
              "word": "convalesce",
              "type": "v.",
              "definition": "To recover after a sickness."
          },
          {
              "matched": false,
              "word": "convalescence",
              "type": "n.",
              "definition": "The state of progressive restoration to health and strength after the          "
          },
          {
              "matched": false,
              "word": "convalescent",
              "type": "adj.",
              "definition": "Recovering health after sickness."
          },
          {
              "matched": false,
              "word": "convene",
              "type": "v.",
              "definition": "To summon or cause to assemble."
          },
          {
              "matched": false,
              "word": "convenience",
              "type": "n.",
              "definition": "Fitness, as of time or place."
          },
          {
              "matched": false,
              "word": "converge",
              "type": "v.",
              "definition": "To cause to incline and approach nearer together."
          },
          {
              "matched": false,
              "word": "convergent",
              "type": "adj.",
              "definition": "Tending to one point."
          },
          {
              "matched": false,
              "word": "conversant",
              "type": "adj.",
              "definition": "Thoroughly informed."
          },
          {
              "matched": false,
              "word": "conversion",
              "type": "n.",
              "definition": "Change from one state or position to another, or from one form to another."
          },
          {
              "matched": false,
              "word": "convertible",
              "type": "adj.",
              "definition": "Interchangeable."
          },
          {
              "matched": false,
              "word": "convex",
              "type": "adj.",
              "definition": "Curving like the segment of the globe or of the surface of a circle."
          },
          {
              "matched": false,
              "word": "conveyance",
              "type": "n.",
              "definition": "That by which anything is transported."
          },
          {
              "matched": false,
              "word": "convivial",
              "type": "adj.",
              "definition": "Devoted to feasting, or to good-fellowship in eating or drinking."
          },
          {
              "matched": false,
              "word": "convolution",
              "type": "n.",
              "definition": "A winding motion."
          },
          {
              "matched": false,
              "word": "convolve",
              "type": "v.",
              "definition": "To move with a circling or winding motion."
          },
          {
              "matched": false,
              "word": "convoy",
              "type": "n.",
              "definition": "A protecting force accompanying property in course of transportation."
          },
          {
              "matched": false,
              "word": "convulse",
              "type": "v.",
              "definition": "To cause spasms in."
          },
          {
              "matched": false,
              "word": "convulsion",
              "type": "n.",
              "definition": "A violent and abnormal muscular contraction of the body."
          },
          {
              "matched": false,
              "word": "copious",
              "type": "adj.",
              "definition": "Plenteous."
          },
          {
              "matched": false,
              "word": "coquette",
              "type": "n.",
              "definition": "A flirt."
          },
          {
              "matched": false,
              "word": "cornice",
              "type": "n.",
              "definition": "An ornamental molding running round the walls of a room close to the ceiling."
          },
          {
              "matched": false,
              "word": "cornucopia",
              "type": "n.",
              "definition": "The horn of plenty, symbolizing peace and prosperity."
          },
          {
              "matched": false,
              "word": "corollary",
              "type": "n.",
              "definition": "A proposition following so obviously from another that it requires little          "
          },
          {
              "matched": false,
              "word": "coronation",
              "type": "n.",
              "definition": "The act or ceremony of crowning a monarch."
          },
          {
              "matched": false,
              "word": "coronet",
              "type": "n.",
              "definition": "Inferior crown denoting, according to its form, various degrees of noble rank          "
          },
          {
              "matched": false,
              "word": "corporal",
              "type": "adj.",
              "definition": "Belonging or relating to the body as opposed to the mind."
          },
          {
              "matched": false,
              "word": "corporate",
              "type": "adj.",
              "definition": "Belonging to a corporation."
          },
          {
              "matched": false,
              "word": "corporeal",
              "type": "adj.",
              "definition": "Of a material nature; physical."
          },
          {
              "matched": false,
              "word": "corps",
              "type": "n.",
              "definition": "A number or body of persons in some way associated or acting together."
          },
          {
              "matched": false,
              "word": "corpse",
              "type": "n.",
              "definition": "A dead body."
          },
          {
              "matched": false,
              "word": "corpulent",
              "type": "adj.",
              "definition": "Obese."
          },
          {
              "matched": false,
              "word": "corpuscle",
              "type": "n.",
              "definition": "A minute particle of matter."
          },
          {
              "matched": false,
              "word": "correlate",
              "type": "v.",
              "definition": "To put in some relation of connection or correspondence."
          },
          {
              "matched": false,
              "word": "correlative",
              "type": "adj.",
              "definition": "Mutually involving or implying one another."
          },
          {
              "matched": false,
              "word": "corrigible",
              "type": "adj.",
              "definition": "Capable of reformation."
          },
          {
              "matched": false,
              "word": "corroborate",
              "type": "v.",
              "definition": "To strengthen, as proof or conviction."
          },
          {
              "matched": false,
              "word": "corroboration",
              "type": "n.",
              "definition": "Confirmation."
          },
          {
              "matched": false,
              "word": "corrode",
              "type": "v.",
              "definition": "To ruin or destroy little by little."
          },
          {
              "matched": false,
              "word": "corrosion",
              "type": "n.",
              "definition": "Gradual decay by crumbling or surface disintegration."
          },
          {
              "matched": false,
              "word": "corrosive",
              "type": "n.",
              "definition": "That which causes gradual decay by crumbling or surface disintegration."
          },
          {
              "matched": false,
              "word": "corruptible",
              "type": "adj.",
              "definition": "Open to bribery."
          },
          {
              "matched": false,
              "word": "corruption",
              "type": "n.",
              "definition": "Loss of purity or integrity."
          },
          {
              "matched": false,
              "word": "cosmetic",
              "type": "adj.",
              "definition": "Pertaining to the art of beautifying, especially the complexion."
          },
          {
              "matched": false,
              "word": "cosmic",
              "type": "adj.",
              "definition": "Pertaining to the universe."
          },
          {
              "matched": false,
              "word": "cosmogony",
              "type": "n.",
              "definition": "A doctrine of creation or of the origin of the universe."
          },
          {
              "matched": false,
              "word": "cosmography",
              "type": "n.",
              "definition": "The science that describes the universe, including astronomy, geography,          "
          },
          {
              "matched": false,
              "word": "cosmology",
              "type": "n.",
              "definition": "The general science of the universe."
          },
          {
              "matched": false,
              "word": "cosmopolitan",
              "type": "adj.",
              "definition": "Common to all the world."
          },
          {
              "matched": false,
              "word": "cosmopolitanism",
              "type": "n.",
              "definition": "A cosmopolitan character."
          },
          {
              "matched": false,
              "word": "cosmos",
              "type": "n.",
              "definition": "The world or universe considered as a system, perfect in order and arrangement."
          },
          {
              "matched": false,
              "word": "counter-claim",
              "type": "n.",
              "definition": "A cross-demand alleged by a defendant in his favor against the plaintiff."
          },
          {
              "matched": false,
              "word": "counteract",
              "type": "v.",
              "definition": "To act in opposition to."
          },
          {
              "matched": false,
              "word": "counterbalance",
              "type": "v.",
              "definition": "To oppose with an equal force."
          },
          {
              "matched": false,
              "word": "countercharge",
              "type": "v.",
              "definition": "To accuse in return."
          },
          {
              "matched": false,
              "word": "counterfeit",
              "type": "adj.",
              "definition": "Made to resemble something else."
          },
          {
              "matched": false,
              "word": "counterpart",
              "type": "n.",
              "definition": "Something taken with another for the completion of either."
          },
          {
              "matched": false,
              "word": "countervail",
              "type": "v.",
              "definition": "To offset."
          },
          {
              "matched": false,
              "word": "counting-house",
              "type": "n.",
              "definition": "A house or office used for transacting business, bookkeeping,          "
          },
          {
              "matched": false,
              "word": "countryman",
              "type": "n.",
              "definition": "A rustic."
          },
          {
              "matched": false,
              "word": "courageous",
              "type": "adj.",
              "definition": "Brave."
          },
          {
              "matched": false,
              "word": "course",
              "type": "n.",
              "definition": "Line of motion or direction."
          },
          {
              "matched": false,
              "word": "courser",
              "type": "n.",
              "definition": "A fleet and spirited horse."
          },
          {
              "matched": false,
              "word": "courtesy",
              "type": "n.",
              "definition": "Politeness originating in kindness and exercised habitually."
          },
          {
              "matched": false,
              "word": "covenant",
              "type": "n.",
              "definition": "An agreement entered into by two or more persons or parties."
          },
          {
              "matched": false,
              "word": "covert",
              "type": "adj.",
              "definition": "Concealed, especially for an evil purpose."
          },
          {
              "matched": false,
              "word": "covey",
              "type": "n.",
              "definition": "A flock of quails or partridges."
          },
          {
              "matched": false,
              "word": "cower",
              "type": "v.",
              "definition": "To crouch down tremblingly, as through fear or shame."
          },
          {
              "matched": false,
              "word": "coxswain",
              "type": "n.",
              "definition": "One who steers a rowboat, or one who has charge of a ship's boat and its crew          "
          },
          {
              "matched": false,
              "word": "crag",
              "type": "n.",
              "definition": "A rugged, rocky projection on a cliff or ledge."
          },
          {
              "matched": false,
              "word": "cranium",
              "type": "n.",
              "definition": "The skull of an animal, especially that part enclosing the brain."
          },
          {
              "matched": false,
              "word": "crass",
              "type": "adj.",
              "definition": "Coarse or thick in nature or structure, as opposed to thin or fine."
          },
          {
              "matched": false,
              "word": "craving",
              "type": "n.",
              "definition": "A vehement desire."
          },
          {
              "matched": false,
              "word": "creak",
              "type": "n.",
              "definition": "A sharp, harsh, squeaking sound."
          },
          {
              "matched": false,
              "word": "creamery",
              "type": "n.",
              "definition": "A butter-making establishment."
          },
          {
              "matched": false,
              "word": "creamy",
              "type": "adj.",
              "definition": "Resembling or containing cream."
          },
          {
              "matched": false,
              "word": "credence",
              "type": "n.",
              "definition": "Belief."
          },
          {
              "matched": false,
              "word": "credible",
              "type": "adj.",
              "definition": "Believable."
          },
          {
              "matched": false,
              "word": "credulous",
              "type": "adj.",
              "definition": "Easily deceived."
          },
          {
              "matched": false,
              "word": "creed",
              "type": "n.",
              "definition": "A formal summary of fundamental points of religious belief."
          },
          {
              "matched": false,
              "word": "crematory",
              "type": "adj.",
              "definition": "A place for cremating dead bodies."
          },
          {
              "matched": false,
              "word": "crevasse",
              "type": "n.",
              "definition": "A deep crack or fissure in the ice of a glacier."
          },
          {
              "matched": false,
              "word": "crevice",
              "type": "n.",
              "definition": "A small fissure, as between two contiguous surfaces."
          },
          {
              "matched": false,
              "word": "criterion",
              "type": "n.",
              "definition": "A standard by which to determine the correctness of a judgment or conclusion."
          },
          {
              "matched": false,
              "word": "critique",
              "type": "n.",
              "definition": "A criticism or critical review."
          },
          {
              "matched": false,
              "word": "crockery",
              "type": "n.",
              "definition": "Earthenware made from baked clay."
          },
          {
              "matched": false,
              "word": "crucible",
              "type": "n.",
              "definition": "A trying and purifying test or agency."
          },
          {
              "matched": false,
              "word": "crusade",
              "type": "n.",
              "definition": "Any concerted movement, vigorously prosecuted, in behalf of an idea or          "
          },
          {
              "matched": false,
              "word": "crustacean",
              "type": "adj.",
              "definition": "Pertaining to a division of arthropods, containing lobsters, crabs,          "
          },
          {
              "matched": false,
              "word": "crustaceous",
              "type": "adj.",
              "definition": "Having a crust-like shell."
          },
          {
              "matched": false,
              "word": "cryptogram",
              "type": "n.",
              "definition": "Anything written in characters that are secret or so arranged as to have          "
          },
          {
              "matched": false,
              "word": "crystallize",
              "type": "v.",
              "definition": "To bring together or give fixed shape to."
          },
          {
              "matched": false,
              "word": "cudgel",
              "type": "n.",
              "definition": "A short thick stick used as a club."
          },
          {
              "matched": false,
              "word": "culinary",
              "type": "adj.",
              "definition": "Of or pertaining to cooking or the kitchen."
          },
          {
              "matched": false,
              "word": "cull",
              "type": "v.",
              "definition": "To pick or sort out from the rest."
          },
          {
              "matched": false,
              "word": "culpable",
              "type": "adj.",
              "definition": "Guilty."
          },
          {
              "matched": false,
              "word": "culprit",
              "type": "n.",
              "definition": "A guilty person."
          },
          {
              "matched": false,
              "word": "culvert",
              "type": "n.",
              "definition": "Any artificial covered channel for the passage of water through a bank or under          "
          },
          {
              "matched": false,
              "word": "cupidity",
              "type": "n.",
              "definition": "Avarice."
          },
          {
              "matched": false,
              "word": "curable",
              "type": "adj.",
              "definition": "Capable of being remedied or corrected."
          },
          {
              "matched": false,
              "word": "curator",
              "type": "n.",
              "definition": "A person having charge as of a library or museum."
          },
          {
              "matched": false,
              "word": "curio",
              "type": "n.",
              "definition": "A piece of bric-a-brac."
          },
          {
              "matched": false,
              "word": "cursive",
              "type": "adj.",
              "definition": "Writing in which the letters are joined together."
          },
          {
              "matched": false,
              "word": "cursory",
              "type": "adj.",
              "definition": "Rapid and superficial."
          },
          {
              "matched": false,
              "word": "curt",
              "type": "adj.",
              "definition": "Concise, compressed, and abrupt in act or expression."
          },
          {
              "matched": false,
              "word": "curtail",
              "type": "v.",
              "definition": "To cut off or cut short."
          },
          {
              "matched": false,
              "word": "curtsy",
              "type": "n.",
              "definition": "A downward movement of the body by bending the knees."
          },
          {
              "matched": false,
              "word": "cycloid",
              "type": "adj.",
              "definition": "Like a circle."
          },
          {
              "matched": false,
              "word": "cygnet",
              "type": "n.",
              "definition": "A young swan."
          },
          {
              "matched": false,
              "word": "cynical",
              "type": "adj.",
              "definition": "Exhibiting moral skepticism."
          },
          {
              "matched": false,
              "word": "cynicism",
              "type": "n.",
              "definition": "Contempt for the opinions of others and of what others value."
          },
          {
              "matched": false,
              "word": "cynosure",
              "type": "n.",
              "definition": "That to which general interest or attention is directed."
          },
          {
              "matched": false,
              "word": "daring",
              "type": "adj.",
              "definition": "Brave."
          },
          {
              "matched": false,
              "word": "darkling",
              "type": "adv.",
              "definition": "Blindly."
          },
          {
              "matched": false,
              "word": "Darwinism",
              "type": "n.",
              "definition": "The doctrine that natural selection has been the prime cause of evolution of          "
          },
          {
              "matched": false,
              "word": "dastard",
              "type": "n.",
              "definition": "A base coward."
          },
          {
              "matched": false,
              "word": "datum",
              "type": "n.",
              "definition": "A premise, starting-point, or given fact."
          },
          {
              "matched": false,
              "word": "dauntless",
              "type": "adj.",
              "definition": "Fearless."
          },
          {
              "matched": false,
              "word": "day-man",
              "type": "n.",
              "definition": "A day-laborer."
          },
          {
              "matched": false,
              "word": "dead-heat",
              "type": "n.",
              "definition": "A race in which two or more competitors come out even, and there is no          "
          },
          {
              "matched": false,
              "word": "dearth",
              "type": "n.",
              "definition": "Scarcity, as of something customary, essential ,or desirable."
          },
          {
              "matched": false,
              "word": "s-head",
              "type": "n.",
              "definition": "A human skull as a symbol of death."
          },
          {
              "matched": false,
              "word": "debase",
              "type": "v.",
              "definition": "To lower in character or virtue."
          },
          {
              "matched": false,
              "word": "debatable",
              "type": "adj.",
              "definition": "Subject to contention or dispute."
          },
          {
              "matched": false,
              "word": "debonair",
              "type": "adj.",
              "definition": "Having gentle or courteous bearing or manner."
          },
          {
              "matched": false,
              "word": "debut",
              "type": "n.",
              "definition": "A first appearance in society or on the stage."
          },
          {
              "matched": false,
              "word": "decagon",
              "type": "n.",
              "definition": "A figure with ten sides and ten angles."
          },
          {
              "matched": false,
              "word": "decagram",
              "type": "n.",
              "definition": "A weight of 10 grams."
          },
          {
              "matched": false,
              "word": "decaliter",
              "type": "n.",
              "definition": "A liquid and dry measure of 10 liters."
          },
          {
              "matched": false,
              "word": "decalogue",
              "type": "n.",
              "definition": "The ten commandments."
          },
          {
              "matched": false,
              "word": "Decameron",
              "type": "n.",
              "definition": "A volume consisting of ten parts or books."
          },
          {
              "matched": false,
              "word": "decameter",
              "type": "n.",
              "definition": "A length of ten meters."
          },
          {
              "matched": false,
              "word": "decamp",
              "type": "v.",
              "definition": "To leave suddenly or unexpectedly."
          },
          {
              "matched": false,
              "word": "decapitate",
              "type": "v.",
              "definition": "To behead."
          },
          {
              "matched": false,
              "word": "decapod",
              "type": "adj.",
              "definition": "Ten-footed or ten-armed."
          },
          {
              "matched": false,
              "word": "decasyllable",
              "type": "n.",
              "definition": "A line of ten syllables."
          },
          {
              "matched": false,
              "word": "deceit",
              "type": "n.",
              "definition": "Falsehood."
          },
          {
              "matched": false,
              "word": "deceitful",
              "type": "adj.",
              "definition": "Fraudulent."
          },
          {
              "matched": false,
              "word": "deceive",
              "type": "v.",
              "definition": "To mislead by or as by falsehood."
          },
          {
              "matched": false,
              "word": "decency",
              "type": "n.",
              "definition": "Moral fitness."
          },
          {
              "matched": false,
              "word": "decent",
              "type": "adj.",
              "definition": "Characterized by propriety of conduct, speech, manners, or dress."
          },
          {
              "matched": false,
              "word": "deciduous",
              "type": "adj.",
              "definition": "Falling off at maturity as petals after flowering, fruit when ripe, etc."
          },
          {
              "matched": false,
              "word": "decimal",
              "type": "adj.",
              "definition": "Founded on the number 10."
          },
          {
              "matched": false,
              "word": "decimate",
              "type": "v.",
              "definition": "To destroy a measurable or large proportion of."
          },
          {
              "matched": false,
              "word": "decipher",
              "type": "v.",
              "definition": "To find out the true words or meaning of, as something hardly legible."
          },
          {
              "matched": false,
              "word": "decisive",
              "type": "ad.",
              "definition": "Conclusive."
          },
          {
              "matched": false,
              "word": "declamation",
              "type": "n.",
              "definition": "A speech recited or intended for recitation from memory in public."
          },
          {
              "matched": false,
              "word": "declamatory",
              "type": "adj.",
              "definition": "A full and formal style of utterance."
          },
          {
              "matched": false,
              "word": "declarative",
              "type": "adj.",
              "definition": "Containing a formal, positive, or explicit statement or affirmation."
          },
          {
              "matched": false,
              "word": "declension",
              "type": "n.",
              "definition": "The change of endings in nouns and adj. to express their different relations          "
          },
          {
              "matched": false,
              "word": "decorate",
              "type": "v.",
              "definition": "To embellish."
          },
          {
              "matched": false,
              "word": "decorous",
              "type": "adj.",
              "definition": "Suitable for the occasion or circumstances."
          },
          {
              "matched": false,
              "word": "decoy",
              "type": "n.",
              "definition": "Anything that allures, or is intended to allures into danger or temptation."
          },
          {
              "matched": false,
              "word": "decrepit",
              "type": "adj.",
              "definition": "Enfeebled, as by old age or some chronic infirmity."
          },
          {
              "matched": false,
              "word": "dedication",
              "type": "n.",
              "definition": "The voluntary consecration or relinquishment of something to an end or          "
          },
          {
              "matched": false,
              "word": "deduce",
              "type": "v.",
              "definition": "To derive or draw as a conclusion by reasoning from given premises or          "
          },
          {
              "matched": false,
              "word": "deface",
              "type": "v.",
              "definition": "To mar or disfigure the face or external surface of."
          },
          {
              "matched": false,
              "word": "defalcate",
              "type": "v.",
              "definition": "To cut off or take away, as a part of something."
          },
          {
              "matched": false,
              "word": "defamation",
              "type": "n.",
              "definition": "Malicious and groundless injury done to the reputation or good name of          "
          },
          {
              "matched": false,
              "word": "defame",
              "type": "v.",
              "definition": "To slander."
          },
          {
              "matched": false,
              "word": "default",
              "type": "n.",
              "definition": "The neglect or omission of a legal requirement."
          },
          {
              "matched": false,
              "word": "defendant",
              "type": "n.",
              "definition": "A person against whom a suit is brought."
          },
          {
              "matched": false,
              "word": "defensible",
              "type": "adj.",
              "definition": "Capable of being maintained or justified."
          },
          {
              "matched": false,
              "word": "defensive",
              "type": "adj.",
              "definition": "Carried on in resistance to aggression."
          },
          {
              "matched": false,
              "word": "defer",
              "type": "v.",
              "definition": "To delay or put off to some other time."
          },
          {
              "matched": false,
              "word": "deference",
              "type": "n.",
              "definition": "Respectful submission or yielding, as to another's opinion, wishes, or          "
          },
          {
              "matched": false,
              "word": "defiant",
              "type": "adj.",
              "definition": "Characterized by bold or insolent opposition."
          },
          {
              "matched": false,
              "word": "deficiency",
              "type": "n.",
              "definition": "Lack or insufficiency."
          },
          {
              "matched": false,
              "word": "deficient",
              "type": "adj.",
              "definition": "Not having an adequate or proper supply or amount."
          },
          {
              "matched": false,
              "word": "definite",
              "type": "adj.",
              "definition": "Having an exact signification or positive meaning."
          },
          {
              "matched": false,
              "word": "deflect",
              "type": "v.",
              "definition": "To cause to turn aside or downward."
          },
          {
              "matched": false,
              "word": "deforest",
              "type": "v.",
              "definition": "To clear of forests."
          },
          {
              "matched": false,
              "word": "deform",
              "type": "v.",
              "definition": "To disfigure."
          },
          {
              "matched": false,
              "word": "deformity",
              "type": "n.",
              "definition": "A disfigurement."
          },
          {
              "matched": false,
              "word": "defraud",
              "type": "v.",
              "definition": "To deprive of something dishonestly."
          },
          {
              "matched": false,
              "word": "defray",
              "type": "v.",
              "definition": "To make payment for."
          },
          {
              "matched": false,
              "word": "degeneracy",
              "type": "n.",
              "definition": "A becoming worse."
          },
          {
              "matched": false,
              "word": "degenerate",
              "type": "v.",
              "definition": "To become worse or inferior."
          },
          {
              "matched": false,
              "word": "degradation",
              "type": "n.",
              "definition": "Diminution, as of strength or magnitude."
          },
          {
              "matched": false,
              "word": "degrade",
              "type": "v.",
              "definition": "To take away honors or position from."
          },
          {
              "matched": false,
              "word": "dehydrate",
              "type": "v.",
              "definition": "To deprive of water."
          },
          {
              "matched": false,
              "word": "deify",
              "type": "v.",
              "definition": "To regard or worship as a god."
          },
          {
              "matched": false,
              "word": "deign",
              "type": "v.",
              "definition": "To deem worthy of notice or account."
          },
          {
              "matched": false,
              "word": "deist",
              "type": "n.",
              "definition": "One who believes in God, but denies supernatural revelation."
          },
          {
              "matched": false,
              "word": "deity",
              "type": "n.",
              "definition": "A god, goddess, or divine person."
          },
          {
              "matched": false,
              "word": "deject",
              "type": "v.",
              "definition": "To dishearten."
          },
          {
              "matched": false,
              "word": "dejection",
              "type": "n.",
              "definition": "Melancholy."
          },
          {
              "matched": false,
              "word": "delectable",
              "type": "adj.",
              "definition": "Delightful to the taste or to the senses."
          },
          {
              "matched": false,
              "word": "delectation",
              "type": "n.",
              "definition": "Delight."
          },
          {
              "matched": false,
              "word": "deleterious",
              "type": "adj.",
              "definition": "Hurtful, morally or physically."
          },
          {
              "matched": false,
              "word": "delicacy",
              "type": "n.",
              "definition": "That which is agreeable to a fine taste."
          },
          {
              "matched": false,
              "word": "delineate",
              "type": "v.",
              "definition": "To represent by sketch or diagram."
          },
          {
              "matched": false,
              "word": "deliquesce",
              "type": "v.",
              "definition": "To dissolve gradually and become liquid by absorption of moisture from the          "
          },
          {
              "matched": false,
              "word": "delirious",
              "type": "adj.",
              "definition": "Raving."
          },
          {
              "matched": false,
              "word": "delude",
              "type": "v.",
              "definition": "To mislead the mind or judgment of."
          },
          {
              "matched": false,
              "word": "deluge",
              "type": "v.",
              "definition": "To overwhelm with a flood of water."
          },
          {
              "matched": false,
              "word": "delusion",
              "type": "n.",
              "definition": "Mistaken conviction, especially when more or less enduring."
          },
          {
              "matched": false,
              "word": "demagnetize",
              "type": "v.",
              "definition": "To deprive (a magnet) of magnetism."
          },
          {
              "matched": false,
              "word": "demagogue",
              "type": "n.",
              "definition": "An unprincipled politician."
          },
          {
              "matched": false,
              "word": "demeanor",
              "type": "n.",
              "definition": "Deportment."
          },
          {
              "matched": false,
              "word": "demented",
              "type": "adj.",
              "definition": "Insane."
          },
          {
              "matched": false,
              "word": "demerit",
              "type": "n.",
              "definition": "A mark for failure or bad conduct."
          },
          {
              "matched": false,
              "word": "demise",
              "type": "n.",
              "definition": "Death."
          },
          {
              "matched": false,
              "word": "demobilize",
              "type": "v.",
              "definition": "To disband, as troops."
          },
          {
              "matched": false,
              "word": "demolish",
              "type": "v.",
              "definition": "To annihilate."
          },
          {
              "matched": false,
              "word": "demonstrable",
              "type": "adj.",
              "definition": "Capable of positive proof."
          },
          {
              "matched": false,
              "word": "demonstrate",
              "type": "v.",
              "definition": "To prove indubitably."
          },
          {
              "matched": false,
              "word": "demonstrative",
              "type": "adj.",
              "definition": "Inclined to strong exhibition or expression of feeling or thoughts."
          },
          {
              "matched": false,
              "word": "demonstrator",
              "type": "n.",
              "definition": "One who proves in a convincing and conclusive manner."
          },
          {
              "matched": false,
              "word": "demulcent",
              "type": "n.",
              "definition": "Any application soothing to an irritable surface"
          },
          {
              "matched": false,
              "word": "demurrage",
              "type": "n.",
              "definition": "the detention of a vessel beyond the specified time of sailing."
          },
          {
              "matched": false,
              "word": "dendroid",
              "type": "adj.",
              "definition": "Like a tree."
          },
          {
              "matched": false,
              "word": "dendrology",
              "type": "n.",
              "definition": "The natural history of trees."
          },
          {
              "matched": false,
              "word": "denizen",
              "type": "n.",
              "definition": "Inhabitant."
          },
          {
              "matched": false,
              "word": "denominate",
              "type": "v.",
              "definition": "To give a name or epithet to."
          },
          {
              "matched": false,
              "word": "denomination",
              "type": "n.",
              "definition": "A body of Christians united by a common faith and form of worship and          "
          },
          {
              "matched": false,
              "word": "denominator",
              "type": "n.",
              "definition": "Part of a fraction which expresses the number of equal parts into which the          "
          },
          {
              "matched": false,
              "word": "denote",
              "type": "v.",
              "definition": "To designate by word or mark."
          },
          {
              "matched": false,
              "word": "denouement",
              "type": "n.",
              "definition": "That part of a play or story in which the mystery is cleared up."
          },
          {
              "matched": false,
              "word": "denounce",
              "type": "v.",
              "definition": "To point out or publicly accuse as deserving of punishment, censure, or odium."
          },
          {
              "matched": false,
              "word": "dentifrice",
              "type": "n.",
              "definition": "Any preparation used for cleaning the teeth."
          },
          {
              "matched": false,
              "word": "denude",
              "type": "v.",
              "definition": "To strip the covering from."
          },
          {
              "matched": false,
              "word": "denunciation",
              "type": "n.",
              "definition": "The act of declaring an action or person worthy of reprobation or          "
          },
          {
              "matched": false,
              "word": "deplete",
              "type": "v.",
              "definition": "To reduce or lessen, as by use, exhaustion, or waste."
          },
          {
              "matched": false,
              "word": "deplorable",
              "type": "adj.",
              "definition": "Contemptible."
          },
          {
              "matched": false,
              "word": "deplore",
              "type": "v.",
              "definition": "To regard with grief or sorrow."
          },
          {
              "matched": false,
              "word": "deponent",
              "type": "adj.",
              "definition": "Laying down."
          },
          {
              "matched": false,
              "word": "depopulate",
              "type": "v.",
              "definition": "To remove the inhabitants from."
          },
          {
              "matched": false,
              "word": "deport",
              "type": "v.",
              "definition": "To take or send away forcibly, as to a penal colony."
          },
          {
              "matched": false,
              "word": "deportment",
              "type": "n.",
              "definition": "Demeanor."
          },
          {
              "matched": false,
              "word": "deposition",
              "type": "n.",
              "definition": "Testimony legally taken on interrogatories and reduced to writing, for use          "
          },
          {
              "matched": false,
              "word": "depositor",
              "type": "n.",
              "definition": "One who makes a deposit, or has an amount deposited."
          },
          {
              "matched": false,
              "word": "depository",
              "type": "n.",
              "definition": "A place where anything is kept in safety."
          },
          {
              "matched": false,
              "word": "deprave",
              "type": "v.",
              "definition": "To render bad, especially morally bad."
          },
          {
              "matched": false,
              "word": "deprecate",
              "type": "v.",
              "definition": "To express disapproval or regret for, with hope for the opposite."
          },
          {
              "matched": false,
              "word": "depreciate",
              "type": "v.",
              "definition": "To lessen the worth of."
          },
          {
              "matched": false,
              "word": "depreciation",
              "type": "n.",
              "definition": "A lowering in value or an underrating in worth."
          },
          {
              "matched": false,
              "word": "depress",
              "type": "v.",
              "definition": "To press down."
          },
          {
              "matched": false,
              "word": "depression",
              "type": "n.",
              "definition": "A falling of the spirits."
          },
          {
              "matched": false,
              "word": "depth",
              "type": "n.",
              "definition": "Deepness."
          },
          {
              "matched": false,
              "word": "derelict",
              "type": "adj.",
              "definition": "Neglectful of obligation."
          },
          {
              "matched": false,
              "word": "deride",
              "type": "v.",
              "definition": "To ridicule."
          },
          {
              "matched": false,
              "word": "derisible",
              "type": "adj.",
              "definition": "Open to ridicule."
          },
          {
              "matched": false,
              "word": "derision",
              "type": "n.",
              "definition": "Ridicule."
          },
          {
              "matched": false,
              "word": "derivation",
              "type": "n.",
              "definition": "That process by which a word is traced from its original root or primitive          "
          },
          {
              "matched": false,
              "word": "derivative",
              "type": "adj.",
              "definition": "Coming or acquired from some origin."
          },
          {
              "matched": false,
              "word": "derive",
              "type": "v.",
              "definition": "To deduce, as from a premise."
          },
          {
              "matched": false,
              "word": "dermatology",
              "type": "n.",
              "definition": "The branch of medical science which relates to the skin and its diseases."
          },
          {
              "matched": false,
              "word": "derrick",
              "type": "n.",
              "definition": "An apparatus for hoisting and swinging great weights."
          },
          {
              "matched": false,
              "word": "descendant",
              "type": "n.",
              "definition": "One who is descended lineally from another, as a child, grandchild, etc."
          },
          {
              "matched": false,
              "word": "descendent",
              "type": "adj.",
              "definition": "Proceeding downward."
          },
          {
              "matched": false,
              "word": "descent",
              "type": "n.",
              "definition": "The act of moving or going downward."
          },
          {
              "matched": false,
              "word": "descry",
              "type": "v.",
              "definition": "To discern."
          },
          {
              "matched": false,
              "word": "desert",
              "type": "v.",
              "definition": "To abandon without regard to the welfare of the abandoned"
          },
          {
              "matched": false,
              "word": "desiccant",
              "type": "n.",
              "definition": "Any remedy which, when applied externally, dries up or absorbs moisture, as          "
          },
          {
              "matched": false,
              "word": "designate",
              "type": "v.",
              "definition": "To select or appoint, as by authority."
          },
          {
              "matched": false,
              "word": "desist",
              "type": "v.",
              "definition": "To cease from action."
          },
          {
              "matched": false,
              "word": "desistance",
              "type": "n.",
              "definition": "Cessation."
          },
          {
              "matched": false,
              "word": "despair",
              "type": "n.",
              "definition": "Utter hopelessness and despondency."
          },
          {
              "matched": false,
              "word": "desperado",
              "type": "n.",
              "definition": "One without regard for law or life."
          },
          {
              "matched": false,
              "word": "desperate",
              "type": "adj.",
              "definition": "Resorted to in a last extremity, or as if prompted by utter despair."
          },
          {
              "matched": false,
              "word": "despicable",
              "type": "adj.",
              "definition": "Contemptible."
          },
          {
              "matched": false,
              "word": "despite",
              "type": "prep.",
              "definition": "In spite of."
          },
          {
              "matched": false,
              "word": "despond",
              "type": "v.",
              "definition": "To lose spirit, courage, or hope."
          },
          {
              "matched": false,
              "word": "despondent",
              "type": "adj.",
              "definition": "Disheartened."
          },
          {
              "matched": false,
              "word": "despot",
              "type": "n.",
              "definition": "An absolute and irresponsible monarch."
          },
          {
              "matched": false,
              "word": "despotism",
              "type": "n.",
              "definition": "Any severe and strict rule in which the judgment of the governed has little          "
          },
          {
              "matched": false,
              "word": "destitute",
              "type": "adj.",
              "definition": "Poverty-stricken."
          },
          {
              "matched": false,
              "word": "desultory",
              "type": "adj.",
              "definition": "Not connected with what precedes."
          },
          {
              "matched": false,
              "word": "deter",
              "type": "v.",
              "definition": "To frighten away."
          },
          {
              "matched": false,
              "word": "deteriorate",
              "type": "v.",
              "definition": "To grow worse."
          },
          {
              "matched": false,
              "word": "determinate",
              "type": "adj.",
              "definition": "Definitely limited or fixed."
          },
          {
              "matched": false,
              "word": "determination",
              "type": "n.",
              "definition": "The act of deciding."
          },
          {
              "matched": false,
              "word": "deterrent",
              "type": "adj.",
              "definition": "Hindering from action through fear."
          },
          {
              "matched": false,
              "word": "detest",
              "type": "v.",
              "definition": "To dislike or hate with intensity."
          },
          {
              "matched": false,
              "word": "detract",
              "type": "v.",
              "definition": "To take away in such manner as to lessen value or estimation."
          },
          {
              "matched": false,
              "word": "detriment",
              "type": "n.",
              "definition": "Something that causes damage, depreciation, or loss."
          },
          {
              "matched": false,
              "word": "detrude",
              "type": "v.",
              "definition": "To push down forcibly."
          },
          {
              "matched": false,
              "word": "deviate",
              "type": "v.",
              "definition": "To take a different course."
          },
          {
              "matched": false,
              "word": "devilry",
              "type": "n.",
              "definition": "Malicious mischief."
          },
          {
              "matched": false,
              "word": "deviltry",
              "type": "n.",
              "definition": "Wanton and malicious mischief."
          },
          {
              "matched": false,
              "word": "devious",
              "type": "adj.",
              "definition": "Out of the common or regular track."
          },
          {
              "matched": false,
              "word": "devise",
              "type": "v.",
              "definition": "To invent."
          },
          {
              "matched": false,
              "word": "devout",
              "type": "adj.",
              "definition": "Religious."
          },
          {
              "matched": false,
              "word": "dexterity",
              "type": "n.",
              "definition": "Readiness, precision, efficiency, and ease in any physical activity or in any          "
          },
          {
              "matched": false,
              "word": "diabolic",
              "type": "adj.",
              "definition": "Characteristic of the devil."
          },
          {
              "matched": false,
              "word": "diacritical",
              "type": "adj.",
              "definition": "Marking a difference."
          },
          {
              "matched": false,
              "word": "diagnose",
              "type": "v.",
              "definition": "To distinguish, as a disease, by its characteristic phenomena."
          },
          {
              "matched": false,
              "word": "diagnosis",
              "type": "n.",
              "definition": "Determination of the distinctive nature of a disease."
          },
          {
              "matched": false,
              "word": "dialect",
              "type": "n.",
              "definition": "Forms of speech collectively that are peculiar to the people of a particular          "
          },
          {
              "matched": false,
              "word": "dialectician",
              "type": "n.",
              "definition": "A logician."
          },
          {
              "matched": false,
              "word": "dialogue",
              "type": "n.",
              "definition": "A formal conversation in which two or more take part."
          },
          {
              "matched": false,
              "word": "diaphanous",
              "type": "adj.",
              "definition": "Transparent."
          },
          {
              "matched": false,
              "word": "diatomic",
              "type": "adj.",
              "definition": "Containing only two atoms."
          },
          {
              "matched": false,
              "word": "diatribe",
              "type": "n.",
              "definition": "A bitter or malicious criticism."
          },
          {
              "matched": false,
              "word": "dictum",
              "type": "n.",
              "definition": "A positive utterance."
          },
          {
              "matched": false,
              "word": "didactic",
              "type": "adj.",
              "definition": "Pertaining to teaching."
          },
          {
              "matched": false,
              "word": "difference",
              "type": "n.",
              "definition": "Dissimilarity in any respect."
          },
          {
              "matched": false,
              "word": "differentia",
              "type": "n.",
              "definition": "Any essential characteristic of a species by reason of which it differs          "
          },
          {
              "matched": false,
              "word": "differential",
              "type": "adj.",
              "definition": "Distinctive."
          },
          {
              "matched": false,
              "word": "differentiate",
              "type": "v.",
              "definition": "To acquire a distinct and separate character."
          },
          {
              "matched": false,
              "word": "diffidence",
              "type": "n.",
              "definition": "Self-distrust."
          },
          {
              "matched": false,
              "word": "diffident",
              "type": "adj.",
              "definition": "Affected or possessed with self-distrust."
          },
          {
              "matched": false,
              "word": "diffusible",
              "type": "adj.",
              "definition": "Spreading rapidly through the system and acting quickly."
          },
          {
              "matched": false,
              "word": "diffusion",
              "type": "n.",
              "definition": "Dispersion."
          },
          {
              "matched": false,
              "word": "dignitary",
              "type": "n.",
              "definition": "One who holds high rank."
          },
          {
              "matched": false,
              "word": "digraph",
              "type": "n.",
              "definition": "A union of two characters representing a single sound."
          },
          {
              "matched": false,
              "word": "digress",
              "type": "v.",
              "definition": "To turn aside from the main subject and for a time dwell on some incidental          "
          },
          {
              "matched": false,
              "word": "dilapidated",
              "type": "pa.",
              "definition": "Fallen into decay or partial ruin."
          },
          {
              "matched": false,
              "word": "dilate",
              "type": "v.",
              "definition": "To enlarge in all directions."
          },
          {
              "matched": false,
              "word": "dilatory",
              "type": "adj.",
              "definition": "Tending to cause delay."
          },
          {
              "matched": false,
              "word": "dilemma",
              "type": "n.",
              "definition": "A situation in which a choice between opposing modes of conduct is necessary."
          },
          {
              "matched": false,
              "word": "dilettante",
              "type": "n.",
              "definition": "A superficial amateur."
          },
          {
              "matched": false,
              "word": "diligence",
              "type": "n.",
              "definition": "Careful and persevering effort to accomplish what is undertaken."
          },
          {
              "matched": false,
              "word": "dilute",
              "type": "v.",
              "definition": "To make more fluid or less concentrated by admixture with something."
          },
          {
              "matched": false,
              "word": "diminution",
              "type": "n.",
              "definition": "Reduction."
          },
          {
              "matched": false,
              "word": "dimly",
              "type": "adv.",
              "definition": "Obscurely."
          },
          {
              "matched": false,
              "word": "diphthong",
              "type": "n.",
              "definition": "The sound produced by combining two vowels in to a single syllable or running          "
          },
          {
              "matched": false,
              "word": "diplomacy",
              "type": "n.",
              "definition": "Tact, shrewdness, or skill in conducting any kind of negotiations or in          "
          },
          {
              "matched": false,
              "word": "diplomat",
              "type": "n.",
              "definition": "A representative of one sovereign state at the capital or court of another."
          },
          {
              "matched": false,
              "word": "diplomatic",
              "type": "adj.",
              "definition": "Characterized by special tact in negotiations."
          },
          {
              "matched": false,
              "word": "diplomatist",
              "type": "n.",
              "definition": "One remarkable for tact and shrewd management."
          },
          {
              "matched": false,
              "word": "disagree",
              "type": "v.",
              "definition": "To be opposite in opinion."
          },
          {
              "matched": false,
              "word": "disallow",
              "type": "v.",
              "definition": "To withhold permission or sanction."
          },
          {
              "matched": false,
              "word": "disappear",
              "type": "v.",
              "definition": "To cease to exist, either actually or for the time being."
          },
          {
              "matched": false,
              "word": "disappoint",
              "type": "v.",
              "definition": "To fail to fulfill the expectation, hope, wish, or desire of."
          },
          {
              "matched": false,
              "word": "disapprove",
              "type": "v.",
              "definition": "To regard with blame."
          },
          {
              "matched": false,
              "word": "disarm",
              "type": "v.",
              "definition": "To deprive of weapons."
          },
          {
              "matched": false,
              "word": "disarrange",
              "type": "v.",
              "definition": "To throw out of order."
          },
          {
              "matched": false,
              "word": "disavow",
              "type": "v.",
              "definition": "To disclaim responsibility for."
          },
          {
              "matched": false,
              "word": "disavowal",
              "type": "n.",
              "definition": "Denial."
          },
          {
              "matched": false,
              "word": "disbeliever",
              "type": "n.",
              "definition": "One who refuses to believe."
          },
          {
              "matched": false,
              "word": "disburden",
              "type": "v.",
              "definition": "To disencumber."
          },
          {
              "matched": false,
              "word": "disburse",
              "type": "v.",
              "definition": "To pay out or expend, as money from a fund."
          },
          {
              "matched": false,
              "word": "discard",
              "type": "v.",
              "definition": "To reject."
          },
          {
              "matched": false,
              "word": "discernible",
              "type": "adj.",
              "definition": "Perceivable."
          },
          {
              "matched": false,
              "word": "disciple",
              "type": "n.",
              "definition": "One who believes the teaching of another, or who adopts and follows some          "
          },
          {
              "matched": false,
              "word": "disciplinary",
              "type": "adj.",
              "definition": "Having the nature of systematic training or subjection to authority."
          },
          {
              "matched": false,
              "word": "discipline",
              "type": "v.",
              "definition": "To train to obedience."
          },
          {
              "matched": false,
              "word": "disclaim",
              "type": "v.",
              "definition": "To disavow any claim to, connection with, or responsibility to."
          },
          {
              "matched": false,
              "word": "discolor",
              "type": "v.",
              "definition": "To stain."
          },
          {
              "matched": false,
              "word": "discomfit",
              "type": "v.",
              "definition": "To put to confusion."
          },
          {
              "matched": false,
              "word": "discomfort",
              "type": "n.",
              "definition": "The state of being positively uncomfortable."
          },
          {
              "matched": false,
              "word": "disconnect",
              "type": "v.",
              "definition": "To undo or dissolve the connection or association of."
          },
          {
              "matched": false,
              "word": "disconsolate",
              "type": "adj.",
              "definition": "Grief-stricken."
          },
          {
              "matched": false,
              "word": "discontinuance",
              "type": "n.",
              "definition": "Interruption or intermission."
          },
          {
              "matched": false,
              "word": "discord",
              "type": "n.",
              "definition": "Absence of harmoniousness."
          },
          {
              "matched": false,
              "word": "discountenance",
              "type": "v.",
              "definition": "To look upon with disfavor."
          },
          {
              "matched": false,
              "word": "discover",
              "type": "v.",
              "definition": "To get first sight or knowledge of, as something previously unknown or          "
          },
          {
              "matched": false,
              "word": "discredit",
              "type": "v.",
              "definition": "To injure the reputation of."
          },
          {
              "matched": false,
              "word": "discreet",
              "type": "adj.",
              "definition": "Judicious."
          },
          {
              "matched": false,
              "word": "discrepant",
              "type": "adj.",
              "definition": "Opposite."
          },
          {
              "matched": false,
              "word": "discriminate",
              "type": "v.",
              "definition": "To draw a distinction."
          },
          {
              "matched": false,
              "word": "discursive",
              "type": "adj.",
              "definition": "Passing from one subject to another."
          },
          {
              "matched": false,
              "word": "discussion",
              "type": "n.",
              "definition": "Debate."
          },
          {
              "matched": false,
              "word": "disenfranchise",
              "type": "v.",
              "definition": "To deprive of any right privilege or power"
          },
          {
              "matched": false,
              "word": "disengage",
              "type": "v.",
              "definition": "To become detached."
          },
          {
              "matched": false,
              "word": "disfavor",
              "type": "n.",
              "definition": "Disregard."
          },
          {
              "matched": false,
              "word": "disfigure",
              "type": "v.",
              "definition": "To impair or injure the beauty, symmetry, or appearance of."
          },
          {
              "matched": false,
              "word": "dishabille",
              "type": "n.",
              "definition": "Undress or negligent attire."
          },
          {
              "matched": false,
              "word": "dishonest",
              "type": "adj.",
              "definition": "Untrustworthy."
          },
          {
              "matched": false,
              "word": "disillusion",
              "type": "v.",
              "definition": "To disenchant."
          },
          {
              "matched": false,
              "word": "disinfect",
              "type": "v.",
              "definition": "To remove or destroy the poison of infectious or contagious diseases."
          },
          {
              "matched": false,
              "word": "disinfectant",
              "type": "n.",
              "definition": "A substance used to destroy the germs of infectious diseases."
          },
          {
              "matched": false,
              "word": "disinherit",
              "type": "v.",
              "definition": "To deprive of an inheritance."
          },
          {
              "matched": false,
              "word": "disinterested",
              "type": "adj.",
              "definition": "Impartial."
          },
          {
              "matched": false,
              "word": "disjunctive",
              "type": "adj.",
              "definition": "Helping or serving to disconnect or separate."
          },
          {
              "matched": false,
              "word": "dislocate",
              "type": "v.",
              "definition": "To put out of proper place or order."
          },
          {
              "matched": false,
              "word": "dismissal",
              "type": "n.",
              "definition": "Displacement by authority from an office or an employment."
          },
          {
              "matched": false,
              "word": "dismount",
              "type": "v.",
              "definition": "To throw down, push off, or otherwise remove from a horse or the like."
          },
          {
              "matched": false,
              "word": "disobedience",
              "type": "n.",
              "definition": "Neglect or refusal to comply with an authoritative injunction."
          },
          {
              "matched": false,
              "word": "disobedient",
              "type": "adj.",
              "definition": "Neglecting or refusing to obey."
          },
          {
              "matched": false,
              "word": "disown",
              "type": "v.",
              "definition": "To refuse to acknowledge as one's own or as connected with oneself."
          },
          {
              "matched": false,
              "word": "disparage",
              "type": "v.",
              "definition": "To regard or speak of slightingly."
          },
          {
              "matched": false,
              "word": "disparity",
              "type": "n.",
              "definition": "Inequality."
          },
          {
              "matched": false,
              "word": "dispel",
              "type": "v.",
              "definition": "To drive away by or as by scattering in different directions."
          },
          {
              "matched": false,
              "word": "dispensation",
              "type": "n.",
              "definition": "That which is bestowed on or appointed to one from a higher power."
          },
          {
              "matched": false,
              "word": "displace",
              "type": "v.",
              "definition": "To put out of the proper or accustomed place."
          },
          {
              "matched": false,
              "word": "dispossess",
              "type": "v.",
              "definition": "To deprive of actual occupancy, especially of real estate."
          },
          {
              "matched": false,
              "word": "disputation",
              "type": "n.",
              "definition": "Verbal controversy."
          },
          {
              "matched": false,
              "word": "disqualify",
              "type": "v.",
              "definition": "To debar."
          },
          {
              "matched": false,
              "word": "disquiet",
              "type": "v.",
              "definition": "To deprive of peace or tranquillity."
          },
          {
              "matched": false,
              "word": "disregard",
              "type": "v.",
              "definition": "To take no notice of."
          },
          {
              "matched": false,
              "word": "disreputable",
              "type": "adj.",
              "definition": "Dishonorable or disgraceful."
          },
          {
              "matched": false,
              "word": "disrepute",
              "type": "n.",
              "definition": "A bad name or character."
          },
          {
              "matched": false,
              "word": "disrobe",
              "type": "v.",
              "definition": "To unclothe."
          },
          {
              "matched": false,
              "word": "disrupt",
              "type": "v.",
              "definition": "To burst or break asunder."
          },
          {
              "matched": false,
              "word": "dissatisfy",
              "type": "v.",
              "definition": "To displease."
          },
          {
              "matched": false,
              "word": "dissect",
              "type": "v.",
              "definition": "To cut apart or to pieces."
          },
          {
              "matched": false,
              "word": "dissection",
              "type": "n.",
              "definition": "The act or operation of cutting in pieces, specifically of a plant or an          "
          },
          {
              "matched": false,
              "word": "dissemble",
              "type": "v.",
              "definition": "To hide by pretending something different."
          },
          {
              "matched": false,
              "word": "disseminate",
              "type": "v.",
              "definition": "To sow or scatter abroad, as seed is sown."
          },
          {
              "matched": false,
              "word": "dissension",
              "type": "n.",
              "definition": "Angry or violent difference of opinion."
          },
          {
              "matched": false,
              "word": "dissent",
              "type": "n.",
              "definition": "Disagreement."
          },
          {
              "matched": false,
              "word": "dissentient",
              "type": "n.",
              "definition": "One who disagrees."
          },
          {
              "matched": false,
              "word": "dissentious",
              "type": "adj.",
              "definition": "Contentious."
          },
          {
              "matched": false,
              "word": "dissertation",
              "type": "n.",
              "definition": "Thesis."
          },
          {
              "matched": false,
              "word": "disservice",
              "type": "n.",
              "definition": "An ill turn."
          },
          {
              "matched": false,
              "word": "dissever",
              "type": "v.",
              "definition": "To divide."
          },
          {
              "matched": false,
              "word": "dissimilar",
              "type": "adj.",
              "definition": "Different."
          },
          {
              "matched": false,
              "word": "dissipate",
              "type": "v.",
              "definition": "To disperse or disappear."
          },
          {
              "matched": false,
              "word": "dissipation",
              "type": "n.",
              "definition": "The state of being dispersed or scattered."
          },
          {
              "matched": false,
              "word": "dissolute",
              "type": "adj.",
              "definition": "Lewd."
          },
          {
              "matched": false,
              "word": "dissolution",
              "type": "n.",
              "definition": "A breaking up of a union of persons."
          },
          {
              "matched": false,
              "word": "dissolve",
              "type": "v.",
              "definition": "To liquefy or soften, as by heat or moisture."
          },
          {
              "matched": false,
              "word": "dissonance",
              "type": "n.",
              "definition": "Discord."
          },
          {
              "matched": false,
              "word": "dissonant",
              "type": "adj.",
              "definition": "Harsh or disagreeable in sound."
          },
          {
              "matched": false,
              "word": "dissuade",
              "type": "v.",
              "definition": "To change the purpose or alter the plans of by persuasion, counsel, or          "
          },
          {
              "matched": false,
              "word": "dissuasion",
              "type": "n.",
              "definition": "The act of changing the purpose of or altering the plans of through          "
          },
          {
              "matched": false,
              "word": "disyllable",
              "type": "n.",
              "definition": "A word of two syllables."
          },
          {
              "matched": false,
              "word": "distemper",
              "type": "n.",
              "definition": "A disease or malady."
          },
          {
              "matched": false,
              "word": "distend",
              "type": "v.",
              "definition": "To stretch out or expand in every direction."
          },
          {
              "matched": false,
              "word": "distensible",
              "type": "adj.",
              "definition": "Capable of being stretched out or expanded in every direction."
          },
          {
              "matched": false,
              "word": "distention",
              "type": "n.",
              "definition": "Expansion."
          },
          {
              "matched": false,
              "word": "distill",
              "type": "v.",
              "definition": "To extract or produce by vaporization and condensation."
          },
          {
              "matched": false,
              "word": "distillation",
              "type": "n.",
              "definition": "Separation of the more volatile parts of a substance from those less          "
          },
          {
              "matched": false,
              "word": "distiller",
              "type": "n.",
              "definition": "One occupied in the business of distilling alcoholic liquors."
          },
          {
              "matched": false,
              "word": "distinction",
              "type": "n.",
              "definition": "A note or designation of honor, officially recognizing superiority or          "
          },
          {
              "matched": false,
              "word": "distort",
              "type": "v.",
              "definition": "To twist into an unnatural or irregular form."
          },
          {
              "matched": false,
              "word": "distrain",
              "type": "v.",
              "definition": "To subject a person to distress."
          },
          {
              "matched": false,
              "word": "distrainor",
              "type": "n.",
              "definition": "One who subjects a person to distress."
          },
          {
              "matched": false,
              "word": "distraught",
              "type": "adj.",
              "definition": "Bewildered."
          },
          {
              "matched": false,
              "word": "distrust",
              "type": "n.",
              "definition": "Lack of confidence in the power, wisdom, or good intent of any person."
          },
          {
              "matched": false,
              "word": "disunion",
              "type": "n.",
              "definition": "Separation of relations or interests."
          },
          {
              "matched": false,
              "word": "diurnal",
              "type": "adj.",
              "definition": "Daily."
          },
          {
              "matched": false,
              "word": "divagation",
              "type": "n.",
              "definition": "Digression."
          },
          {
              "matched": false,
              "word": "divergent",
              "type": "adj.",
              "definition": "Tending in different directions."
          },
          {
              "matched": false,
              "word": "diverse",
              "type": "adj.",
              "definition": "Capable of various forms."
          },
          {
              "matched": false,
              "word": "diversion",
              "type": "n.",
              "definition": "Pastime."
          },
          {
              "matched": false,
              "word": "diversity",
              "type": "n.",
              "definition": "Dissimilitude."
          },
          {
              "matched": false,
              "word": "divert",
              "type": "v.",
              "definition": "To turn from the accustomed course or a line of action already established."
          },
          {
              "matched": false,
              "word": "divertible",
              "type": "adj.",
              "definition": "Able to be turned from the accustomed course or a line of action already          "
          },
          {
              "matched": false,
              "word": "divest",
              "type": "v.",
              "definition": "To strip, specifically of clothes, ornaments, or accouterments or disinvestment."
          },
          {
              "matched": false,
              "word": "divination",
              "type": "n.",
              "definition": "The pretended forecast of future events or discovery of what is lost or          "
          },
          {
              "matched": false,
              "word": "divinity",
              "type": "n.",
              "definition": "The quality or character of being godlike."
          },
          {
              "matched": false,
              "word": "divisible",
              "type": "adj.",
              "definition": "Capable of being separated into parts."
          },
          {
              "matched": false,
              "word": "divisor",
              "type": "n.",
              "definition": "That by which a number or quantity is divided."
          },
          {
              "matched": false,
              "word": "divulge",
              "type": "v.",
              "definition": "To tell or make known, as something previously private or secret."
          },
          {
              "matched": false,
              "word": "divulgence",
              "type": "n.",
              "definition": "A divulging."
          },
          {
              "matched": false,
              "word": "docile",
              "type": "adj.",
              "definition": "Easy to manage."
          },
          {
              "matched": false,
              "word": "docket",
              "type": "n.",
              "definition": "The registry of judgments of a court."
          },
          {
              "matched": false,
              "word": "doe",
              "type": "n.",
              "definition": "The female of the deer."
          },
          {
              "matched": false,
              "word": "dogma",
              "type": "n.",
              "definition": "A statement of religious faith or duty formulated by a body claiming authority."
          },
          {
              "matched": false,
              "word": "dogmatic",
              "type": "adj.",
              "definition": "Making statements without argument or evidence."
          },
          {
              "matched": false,
              "word": "dogmatize",
              "type": "v.",
              "definition": "To make positive assertions without supporting them by argument or evidence."
          },
          {
              "matched": false,
              "word": "doleful",
              "type": "adj.",
              "definition": "Melancholy."
          },
          {
              "matched": false,
              "word": "dolesome",
              "type": "adj.",
              "definition": "Melancholy."
          },
          {
              "matched": false,
              "word": "dolor",
              "type": "n.",
              "definition": "Lamentation."
          },
          {
              "matched": false,
              "word": "dolorous",
              "type": "adj.",
              "definition": "Expressing or causing sorrow or pain."
          },
          {
              "matched": false,
              "word": "domain",
              "type": "n.",
              "definition": "A sphere or field of action or interest."
          },
          {
              "matched": false,
              "word": "domesticity",
              "type": "n.",
              "definition": "Life in or fondness for one's home and family."
          },
          {
              "matched": false,
              "word": "domicile",
              "type": "n.",
              "definition": "The place where one lives."
          },
          {
              "matched": false,
              "word": "dominance",
              "type": "n.",
              "definition": "Ascendancy."
          },
          {
              "matched": false,
              "word": "dominant",
              "type": "adj.",
              "definition": "Conspicuously prominent."
          },
          {
              "matched": false,
              "word": "dominate",
              "type": "v.",
              "definition": "To influence controllingly."
          },
          {
              "matched": false,
              "word": "domination",
              "type": "n.",
              "definition": "Control by the exercise of power or constituted authority."
          },
          {
              "matched": false,
              "word": "domineer",
              "type": "v.",
              "definition": "To rule with insolence or unnecessary annoyance."
          },
          {
              "matched": false,
              "word": "donate",
              "type": "v.",
              "definition": "To bestow as a gift, especially for a worthy cause."
          },
          {
              "matched": false,
              "word": "donator",
              "type": "n.",
              "definition": "One who makes a donation or present."
          },
          {
              "matched": false,
              "word": "donee",
              "type": "n.",
              "definition": "A person to whom a donation is made."
          },
          {
              "matched": false,
              "word": "donor",
              "type": "n.",
              "definition": "One who makes a donation or present."
          },
          {
              "matched": false,
              "word": "dormant",
              "type": "adj.",
              "definition": "Being in a state of or resembling sleep."
          },
          {
              "matched": false,
              "word": "doublet",
              "type": "n.",
              "definition": "One of a pair of like things."
          },
          {
              "matched": false,
              "word": "doubly",
              "type": "adv.",
              "definition": "In twofold degree or extent."
          },
          {
              "matched": false,
              "word": "dowry",
              "type": "n.",
              "definition": "The property which a wife brings to her husband in marriage."
          },
          {
              "matched": false,
              "word": "drachma",
              "type": "n.",
              "definition": "A modern and an ancient Greek coin."
          },
          {
              "matched": false,
              "word": "dragnet",
              "type": "n.",
              "definition": "A net to be drawn along the bottom of the water."
          },
          {
              "matched": false,
              "word": "dragoon",
              "type": "n.",
              "definition": "In the British army, a cavalryman."
          },
          {
              "matched": false,
              "word": "drainage",
              "type": "n.",
              "definition": "The means of draining collectively, as a system of conduits, trenches, pipes,          "
          },
          {
              "matched": false,
              "word": "dramatist",
              "type": "n.",
              "definition": "One who writes plays."
          },
          {
              "matched": false,
              "word": "dramatize",
              "type": "v.",
              "definition": "To relate or represent in a dramatic or theatrical manner."
          },
          {
              "matched": false,
              "word": "drastic",
              "type": "adj.",
              "definition": "Acting vigorously."
          },
          {
              "matched": false,
              "word": "drought",
              "type": "n.",
              "definition": "Dry weather, especially when so long continued as to cause vegetation to          "
          },
          {
              "matched": false,
              "word": "drowsy",
              "type": "adj.",
              "definition": "Heavy with sleepiness."
          },
          {
              "matched": false,
              "word": "drudgery",
              "type": "n.",
              "definition": "Hard and constant work in any menial or dull occupation."
          },
          {
              "matched": false,
              "word": "dubious",
              "type": "adj.",
              "definition": "Doubtful."
          },
          {
              "matched": false,
              "word": "duckling",
              "type": "n.",
              "definition": "A young duck."
          },
          {
              "matched": false,
              "word": "ductile",
              "type": "adj.",
              "definition": "Capable of being drawn out, as into wire or a thread."
          },
          {
              "matched": false,
              "word": "duet",
              "type": "n.",
              "definition": "A composition for two voices or instruments."
          },
          {
              "matched": false,
              "word": "dun",
              "type": "v.",
              "definition": "To make a demand or repeated demands on for payment."
          },
          {
              "matched": false,
              "word": "duplex",
              "type": "adj.",
              "definition": "Having two parts."
          },
          {
              "matched": false,
              "word": "duplicity",
              "type": "n.",
              "definition": "Double-dealing."
          },
          {
              "matched": false,
              "word": "durance",
              "type": "n.",
              "definition": "Confinement."
          },
          {
              "matched": false,
              "word": "duration",
              "type": "n.",
              "definition": "The period of time during which anything lasts."
          },
          {
              "matched": false,
              "word": "duteous",
              "type": "adj.",
              "definition": "Showing submission to natural superiors."
          },
          {
              "matched": false,
              "word": "dutiable",
              "type": "adj.",
              "definition": "Subject to a duty, especially a customs duty."
          },
          {
              "matched": false,
              "word": "dutiful",
              "type": "adj.",
              "definition": "Obedient."
          },
          {
              "matched": false,
              "word": "dwindle",
              "type": "v.",
              "definition": "To diminish or become less."
          },
          {
              "matched": false,
              "word": "dyne",
              "type": "n.",
              "definition": "The force which, applied to a mass of one gram for 1 second, would give it a          "
          },
          {
              "matched": false,
              "word": "earnest",
              "type": "adj.",
              "definition": "Ardent in spirit and speech."
          },
          {
              "matched": false,
              "word": "earthenware",
              "type": "n.",
              "definition": "Anything made of clay and baked in a kiln or dried in the sun."
          },
          {
              "matched": false,
              "word": "eatable",
              "type": "adj.",
              "definition": "Edible."
          },
          {
              "matched": false,
              "word": "ebullient",
              "type": "adj.",
              "definition": "Showing enthusiasm or exhilaration of feeling."
          },
          {
              "matched": false,
              "word": "eccentric",
              "type": "adj.",
              "definition": "Peculiar."
          },
          {
              "matched": false,
              "word": "eccentricity",
              "type": "n.",
              "definition": "Idiosyncrasy."
          },
          {
              "matched": false,
              "word": "eclipse",
              "type": "n.",
              "definition": "The obstruction of a heavenly body by its entering into the shadow of another          "
          },
          {
              "matched": false,
              "word": "economize",
              "type": "v.",
              "definition": "To spend sparingly."
          },
          {
              "matched": false,
              "word": "ecstasy",
              "type": "n.",
              "definition": "Rapturous excitement or exaltation."
          },
          {
              "matched": false,
              "word": "ecstatic",
              "type": "adj.",
              "definition": "Enraptured."
          },
          {
              "matched": false,
              "word": "edible",
              "type": "adj.",
              "definition": "Suitable to be eaten."
          },
          {
              "matched": false,
              "word": "edict",
              "type": "n.",
              "definition": "That which is uttered or proclaimed by authority as a rule of action."
          },
          {
              "matched": false,
              "word": "edify",
              "type": "v.",
              "definition": "To build up, or strengthen, especially in morals or religion."
          },
          {
              "matched": false,
              "word": "editorial",
              "type": "n.",
              "definition": "An article in a periodical written by the editor and published as an official          "
          },
          {
              "matched": false,
              "word": "educe",
              "type": "v.",
              "definition": "To draw out."
          },
          {
              "matched": false,
              "word": "efface",
              "type": "v.",
              "definition": "To obliterate."
          },
          {
              "matched": false,
              "word": "effect",
              "type": "n.",
              "definition": "A consequence."
          },
          {
              "matched": false,
              "word": "effective",
              "type": "adj.",
              "definition": "Fit for a destined purpose."
          },
          {
              "matched": false,
              "word": "effectual",
              "type": "adj.",
              "definition": "Efficient."
          },
          {
              "matched": false,
              "word": "effeminacy",
              "type": "n.",
              "definition": "Womanishness."
          },
          {
              "matched": false,
              "word": "effeminate",
              "type": "adj.",
              "definition": "Having womanish traits or qualities."
          },
          {
              "matched": false,
              "word": "effervesce",
              "type": "v.",
              "definition": "To bubble up."
          },
          {
              "matched": false,
              "word": "effervescent",
              "type": "adj.",
              "definition": "Giving off bubbles of gas."
          },
          {
              "matched": false,
              "word": "effete",
              "type": "adj.",
              "definition": "Exhausted, as having performed its functions."
          },
          {
              "matched": false,
              "word": "efficacious",
              "type": "adj.",
              "definition": "Effective."
          },
          {
              "matched": false,
              "word": "efficacy",
              "type": "n.",
              "definition": "The power to produce an intended effect as shown in the production of it."
          },
          {
              "matched": false,
              "word": "efficiency",
              "type": "n.",
              "definition": "The state of possessing adequate skill or knowledge for the performance of a          "
          },
          {
              "matched": false,
              "word": "efficient",
              "type": "adj.",
              "definition": "Having and exercising the power to produce effects or results."
          },
          {
              "matched": false,
              "word": "efflorescence",
              "type": "n.",
              "definition": "The state of being flowery, or a flowery appearance."
          },
          {
              "matched": false,
              "word": "efflorescent",
              "type": "adj.",
              "definition": "Opening in flower."
          },
          {
              "matched": false,
              "word": "effluvium",
              "type": "n.",
              "definition": "A noxious or ill-smelling exhalation from decaying or putrefying matter."
          },
          {
              "matched": false,
              "word": "effrontery",
              "type": "n.",
              "definition": "Unblushing impudence."
          },
          {
              "matched": false,
              "word": "effulgence",
              "type": "n.",
              "definition": "Splendor."
          },
          {
              "matched": false,
              "word": "effuse",
              "type": "v.",
              "definition": "To pour forth."
          },
          {
              "matched": false,
              "word": "effusion",
              "type": "n.",
              "definition": "an outpouring."
          },
          {
              "matched": false,
              "word": "egoism",
              "type": "n.",
              "definition": "The theory that places man's chief good in the completeness of self."
          },
          {
              "matched": false,
              "word": "egoist",
              "type": "n.",
              "definition": "One who advocates or practices egoism."
          },
          {
              "matched": false,
              "word": "egotism",
              "type": "n.",
              "definition": "Self-conceit."
          },
          {
              "matched": false,
              "word": "egotist",
              "type": "n.",
              "definition": "One given to self-mention or who is constantly telling of his own views and          "
          },
          {
              "matched": false,
              "word": "egregious",
              "type": "adj.",
              "definition": "Extreme."
          },
          {
              "matched": false,
              "word": "egress",
              "type": "n.",
              "definition": "Any place of exit."
          },
          {
              "matched": false,
              "word": "eject",
              "type": "v.",
              "definition": "To expel."
          },
          {
              "matched": false,
              "word": "elapse",
              "type": "v.",
              "definition": "To quietly terminate: said of time."
          },
          {
              "matched": false,
              "word": "elasticity",
              "type": "n.",
              "definition": "That property of matter by which a body tends to return to a former shape          "
          },
          {
              "matched": false,
              "word": "electrolysis",
              "type": "n.",
              "definition": "The process of decomposing a chemical compound by the passage of an          "
          },
          {
              "matched": false,
              "word": "electrotype",
              "type": "n.",
              "definition": "A metallic copy of any surface, as a coin."
          },
          {
              "matched": false,
              "word": "elegy",
              "type": "n.",
              "definition": "A lyric poem lamenting the dead."
          },
          {
              "matched": false,
              "word": "element",
              "type": "n.",
              "definition": "A component or essential part."
          },
          {
              "matched": false,
              "word": "elicit",
              "type": "v.",
              "definition": "To educe or extract gradually or without violence."
          },
          {
              "matched": false,
              "word": "eligible",
              "type": "adj.",
              "definition": "Qualified for selection."
          },
          {
              "matched": false,
              "word": "eliminate",
              "type": "v.",
              "definition": "To separate and cast aside."
          },
          {
              "matched": false,
              "word": "Elizabethan",
              "type": "adj.",
              "definition": "Relating to Elizabeth, queen of England, or to her era."
          },
          {
              "matched": false,
              "word": "elocution",
              "type": "n.",
              "definition": "The art of correct intonation, inflection, and gesture in public speaking or          "
          },
          {
              "matched": false,
              "word": "eloquent",
              "type": "adj.",
              "definition": "Having the ability to express emotion or feeling in lofty and impassioned          "
          },
          {
              "matched": false,
              "word": "elucidate",
              "type": "v.",
              "definition": "To bring out more clearly the facts concerning."
          },
          {
              "matched": false,
              "word": "elude",
              "type": "v.",
              "definition": "To evade the search or pursuit of by dexterity or artifice."
          },
          {
              "matched": false,
              "word": "elusion",
              "type": "n.",
              "definition": "Evasion."
          },
          {
              "matched": false,
              "word": "emaciate",
              "type": "v.",
              "definition": "To waste away in flesh."
          },
          {
              "matched": false,
              "word": "emanate",
              "type": "v.",
              "definition": "To flow forth or proceed, as from some source."
          },
          {
              "matched": false,
              "word": "emancipate",
              "type": "v.",
              "definition": "To release from bondage."
          },
          {
              "matched": false,
              "word": "embargo",
              "type": "n.",
              "definition": "Authoritative stoppage of foreign commerce or of any special trade."
          },
          {
              "matched": false,
              "word": "embark",
              "type": "v.",
              "definition": "To make a beginning in some occupation or scheme."
          },
          {
              "matched": false,
              "word": "embarrass",
              "type": "v.",
              "definition": "To render flustered or agitated."
          },
          {
              "matched": false,
              "word": "embellish",
              "type": "v.",
              "definition": "To make beautiful or elegant by adding attractive or ornamental features."
          },
          {
              "matched": false,
              "word": "embezzle",
              "type": "v.",
              "definition": "To misappropriate secretly."
          },
          {
              "matched": false,
              "word": "emblazon",
              "type": "v.",
              "definition": "To set forth publicly or in glowing terms."
          },
          {
              "matched": false,
              "word": "emblem",
              "type": "n.",
              "definition": "A symbol."
          },
          {
              "matched": false,
              "word": "embody",
              "type": "v.",
              "definition": "To express, formulate, or exemplify in a concrete, compact or visible form."
          },
          {
              "matched": false,
              "word": "embolden",
              "type": "v.",
              "definition": "To give courage to."
          },
          {
              "matched": false,
              "word": "embolism",
              "type": "n.",
              "definition": "An obstruction or plugging up of an artery or other blood-vessel."
          },
          {
              "matched": false,
              "word": "embroil",
              "type": "v.",
              "definition": "To involve in dissension or strife."
          },
          {
              "matched": false,
              "word": "emerge",
              "type": "v.",
              "definition": "To come into view or into existence."
          },
          {
              "matched": false,
              "word": "emergence",
              "type": "n.",
              "definition": "A coming into view."
          },
          {
              "matched": false,
              "word": "emergent",
              "type": "adj.",
              "definition": "Coming into view."
          },
          {
              "matched": false,
              "word": "emeritus",
              "type": "adj.",
              "definition": "Retired from active service but retained to an honorary position."
          },
          {
              "matched": false,
              "word": "emigrant",
              "type": "n.",
              "definition": "One who moves from one place to settle in another."
          },
          {
              "matched": false,
              "word": "emigrate",
              "type": "v.",
              "definition": "To go from one country, state, or region for the purpose of settling or          "
          },
          {
              "matched": false,
              "word": "eminence",
              "type": "n.",
              "definition": "An elevated position with respect to rank, place, character, condition, etc."
          },
          {
              "matched": false,
              "word": "eminent",
              "type": "adj.",
              "definition": "High in station, merit, or esteem."
          },
          {
              "matched": false,
              "word": "emit",
              "type": "v.",
              "definition": "To send or give out."
          },
          {
              "matched": false,
              "word": "emphasis",
              "type": "n.",
              "definition": "Any special impressiveness added to an utterance or act, or stress laid upon          "
          },
          {
              "matched": false,
              "word": "emphasize",
              "type": "v.",
              "definition": "To articulate or enunciate with special impressiveness upon a word, or a          "
          },
          {
              "matched": false,
              "word": "emphatic",
              "type": "adj.",
              "definition": "Spoken with any special impressiveness laid upon an act, word, or set of          "
          },
          {
              "matched": false,
              "word": "employee",
              "type": "n.",
              "definition": "One who works for wages or a salary."
          },
          {
              "matched": false,
              "word": "employer",
              "type": "n.",
              "definition": "One who uses or engages the services of other persons for pay."
          },
          {
              "matched": false,
              "word": "emporium",
              "type": "n.",
              "definition": "A bazaar or shop."
          },
          {
              "matched": false,
              "word": "empower",
              "type": "v.",
              "definition": "To delegate authority to."
          },
          {
              "matched": false,
              "word": "emulate",
              "type": "v.",
              "definition": "To imitate with intent to equal or surpass."
          },
          {
              "matched": false,
              "word": "enact",
              "type": "v.",
              "definition": "To make into law, as by legislative act."
          },
          {
              "matched": false,
              "word": "enamor",
              "type": "v.",
              "definition": "To inspire with ardent love."
          },
          {
              "matched": false,
              "word": "encamp",
              "type": "v.",
              "definition": "To pitch tents for a resting-place."
          },
          {
              "matched": false,
              "word": "encomium",
              "type": "n.",
              "definition": "A formal or discriminating expression of praise."
          },
          {
              "matched": false,
              "word": "encompass",
              "type": "v.",
              "definition": "To encircle."
          },
          {
              "matched": false,
              "word": "encore",
              "type": "n.",
              "definition": "The call for a repetition, as of some part of a play or performance."
          },
          {
              "matched": false,
              "word": "encourage",
              "type": "v.",
              "definition": "To inspire with courage, hope, or strength of mind."
          },
          {
              "matched": false,
              "word": "encroach",
              "type": "v.",
              "definition": "To invade partially or insidiously and appropriate the possessions of another."
          },
          {
              "matched": false,
              "word": "encumber",
              "type": "v.",
              "definition": "To impede with obstacles."
          },
          {
              "matched": false,
              "word": "encyclical",
              "type": "adj.",
              "definition": "Intended for general circulation."
          },
          {
              "matched": false,
              "word": "encyclopedia",
              "type": "n.",
              "definition": "A work containing information on subjects, or exhaustive of one subject."
          },
          {
              "matched": false,
              "word": "endanger",
              "type": "v.",
              "definition": "To expose to peril."
          },
          {
              "matched": false,
              "word": "endear",
              "type": "v.",
              "definition": "To cause to be loved."
          },
          {
              "matched": false,
              "word": "endemic",
              "type": "adj.",
              "definition": "Peculiar to some specified country or people."
          },
          {
              "matched": false,
              "word": "endue",
              "type": "v.",
              "definition": "To endow with some quality, gift, or grace, usually spiritual."
          },
          {
              "matched": false,
              "word": "endurable",
              "type": "adj.",
              "definition": "Tolerable."
          },
          {
              "matched": false,
              "word": "endurance",
              "type": "n.",
              "definition": "The ability to suffer pain, distress, hardship, or stress of any kind without          "
          },
          {
              "matched": false,
              "word": "energetic",
              "type": "adj.",
              "definition": "Working vigorously."
          },
          {
              "matched": false,
              "word": "enervate",
              "type": "v.",
              "definition": "To render ineffective or inoperative."
          },
          {
              "matched": false,
              "word": "enfeeble",
              "type": "v.",
              "definition": "To debilitate."
          },
          {
              "matched": false,
              "word": "enfranchise",
              "type": "v.",
              "definition": "To endow with a privilege, especially with the right to vote."
          },
          {
              "matched": false,
              "word": "engender",
              "type": "v.",
              "definition": "To produce."
          },
          {
              "matched": false,
              "word": "engrave",
              "type": "v.",
              "definition": "To cut or carve in or upon some surface."
          },
          {
              "matched": false,
              "word": "engross",
              "type": "v.",
              "definition": "To occupy completely."
          },
          {
              "matched": false,
              "word": "enhance",
              "type": "v.",
              "definition": "To intensify."
          },
          {
              "matched": false,
              "word": "enigma",
              "type": "n.",
              "definition": "A riddle."
          },
          {
              "matched": false,
              "word": "enjoin",
              "type": "v.",
              "definition": "To command."
          },
          {
              "matched": false,
              "word": "enkindle",
              "type": "v.",
              "definition": "To set on fire."
          },
          {
              "matched": false,
              "word": "enlighten",
              "type": "v.",
              "definition": "To cause to see clearly."
          },
          {
              "matched": false,
              "word": "enlist",
              "type": "v.",
              "definition": "To enter voluntarily the military service by formal enrollment."
          },
          {
              "matched": false,
              "word": "enmity",
              "type": "n.",
              "definition": "Hatred."
          },
          {
              "matched": false,
              "word": "ennoble",
              "type": "v.",
              "definition": "To dignify."
          },
          {
              "matched": false,
              "word": "enormity",
              "type": "n.",
              "definition": "Immensity."
          },
          {
              "matched": false,
              "word": "enormous",
              "type": "adj.",
              "definition": "Gigantic."
          },
          {
              "matched": false,
              "word": "enrage",
              "type": "v.",
              "definition": "To infuriate."
          },
          {
              "matched": false,
              "word": "enrapture",
              "type": "v.",
              "definition": "To delight extravagantly or intensely."
          },
          {
              "matched": false,
              "word": "enshrine",
              "type": "v.",
              "definition": "To keep sacred."
          },
          {
              "matched": false,
              "word": "ensnare",
              "type": "v.",
              "definition": "To entrap."
          },
          {
              "matched": false,
              "word": "entail",
              "type": "v.",
              "definition": "To involve; necessitate."
          },
          {
              "matched": false,
              "word": "entangle",
              "type": "v.",
              "definition": "To involve in difficulties, confusion, or complications."
          },
          {
              "matched": false,
              "word": "enthrall",
              "type": "v.",
              "definition": "To bring or hold under any overmastering influence."
          },
          {
              "matched": false,
              "word": "enthrone",
              "type": "v.",
              "definition": "To invest with sovereign power."
          },
          {
              "matched": false,
              "word": "enthuse",
              "type": "v.",
              "definition": "To yield to or display intense and rapturous feeling."
          },
          {
              "matched": false,
              "word": "enthusiastic",
              "type": "adj.",
              "definition": "Full of zeal and fervor."
          },
          {
              "matched": false,
              "word": "entirety",
              "type": "n.",
              "definition": "A complete thing."
          },
          {
              "matched": false,
              "word": "entomology",
              "type": "n.",
              "definition": "The branch of zoology that treats of insects."
          },
          {
              "matched": false,
              "word": "entrails",
              "type": "n.",
              "definition": "pl. The internal parts of an animal."
          },
          {
              "matched": false,
              "word": "entreaty",
              "type": "n.",
              "definition": "An earnest request."
          },
          {
              "matched": false,
              "word": "entree",
              "type": "n.",
              "definition": "The act of entering."
          },
          {
              "matched": false,
              "word": "entrench",
              "type": "v.",
              "definition": "To fortify or protect, as with a trench or ditch and wall."
          },
          {
              "matched": false,
              "word": "entwine",
              "type": "v.",
              "definition": "To interweave."
          },
          {
              "matched": false,
              "word": "enumerate",
              "type": "v.",
              "definition": "To name one by one."
          },
          {
              "matched": false,
              "word": "epic",
              "type": "n.",
              "definition": "A poem celebrating in formal verse the mythical achievements of great personages,          "
          },
          {
              "matched": false,
              "word": "epicure",
              "type": "n.",
              "definition": "One who cultivates a delicate taste for eating and drinking."
          },
          {
              "matched": false,
              "word": "Epicurean",
              "type": "adj.",
              "definition": "Indulging, ministering, or pertaining to daintiness of appetite."
          },
          {
              "matched": false,
              "word": "epicycle",
              "type": "n.",
              "definition": "A circle that rolls upon the external or internal circumference of another          "
          },
          {
              "matched": false,
              "word": "epicycloid",
              "type": "n.",
              "definition": "A curve traced by a point on the circumference of a circle which rolls upon          "
          },
          {
              "matched": false,
              "word": "epidemic",
              "type": "n.",
              "definition": "Wide-spread occurrence of a disease in a certain region."
          },
          {
              "matched": false,
              "word": "epidermis",
              "type": "n.",
              "definition": "The outer skin."
          },
          {
              "matched": false,
              "word": "epigram",
              "type": "n.",
              "definition": "A pithy phrasing of a shrewd observation."
          },
          {
              "matched": false,
              "word": "epilogue",
              "type": "n.",
              "definition": "The close of a narrative or dramatic poem."
          },
          {
              "matched": false,
              "word": "epiphany",
              "type": "n.",
              "definition": "Any appearance or bodily manifestation of a deity."
          },
          {
              "matched": false,
              "word": "episode",
              "type": "n.",
              "definition": "An incident or story in a literary work, separable from yet growing out of it."
          },
          {
              "matched": false,
              "word": "epitaph",
              "type": "n.",
              "definition": "An inscription on a tomb or monument in honor or in memory of the dead."
          },
          {
              "matched": false,
              "word": "epithet",
              "type": "n.",
              "definition": "Word used adjectivally to describe some quality or attribute of is objects, as          "
          },
          {
              "matched": false,
              "word": "epitome",
              "type": "n.",
              "definition": "A simplified representation."
          },
          {
              "matched": false,
              "word": "epizootic",
              "type": "adj.",
              "definition": "Prevailing among animals."
          },
          {
              "matched": false,
              "word": "epoch",
              "type": "n.",
              "definition": "A interval of time, memorable for extraordinary events."
          },
          {
              "matched": false,
              "word": "epode",
              "type": "n.",
              "definition": "A species of lyric poems."
          },
          {
              "matched": false,
              "word": "equalize",
              "type": "v.",
              "definition": "To render uniform."
          },
          {
              "matched": false,
              "word": "equanimity",
              "type": "n.",
              "definition": "Evenness of mind or temper."
          },
          {
              "matched": false,
              "word": "equestrian",
              "type": "adj.",
              "definition": "Pertaining to horses or horsemanship."
          },
          {
              "matched": false,
              "word": "equilibrium",
              "type": "n.",
              "definition": "A state of balance."
          },
          {
              "matched": false,
              "word": "equitable",
              "type": "adj.",
              "definition": "Characterized by fairness."
          },
          {
              "matched": false,
              "word": "equity",
              "type": "n.",
              "definition": "Fairness or impartiality."
          },
          {
              "matched": false,
              "word": "equivalent",
              "type": "adj.",
              "definition": "Equal in value, force, meaning, or the like."
          },
          {
              "matched": false,
              "word": "equivocal",
              "type": "adj.",
              "definition": "Ambiguous."
          },
          {
              "matched": false,
              "word": "equivocate",
              "type": "v.",
              "definition": "To use words of double meaning."
          },
          {
              "matched": false,
              "word": "eradicate",
              "type": "v.",
              "definition": "To destroy thoroughly."
          },
          {
              "matched": false,
              "word": "errant",
              "type": "adj.",
              "definition": "Roving or wandering, as in search of adventure or opportunity for gallant          "
          },
          {
              "matched": false,
              "word": "erratic",
              "type": "adj.",
              "definition": "Irregular."
          },
          {
              "matched": false,
              "word": "erroneous",
              "type": "adj.",
              "definition": "Incorrect."
          },
          {
              "matched": false,
              "word": "erudite",
              "type": "adj.",
              "definition": "Very-learned."
          },
          {
              "matched": false,
              "word": "erudition",
              "type": "n.",
              "definition": "Extensive knowledge of literature, history, language, etc."
          },
          {
              "matched": false,
              "word": "eschew",
              "type": "v.",
              "definition": "To keep clear of."
          },
          {
              "matched": false,
              "word": "espy",
              "type": "v.",
              "definition": "To keep close watch."
          },
          {
              "matched": false,
              "word": "esquire",
              "type": "n.",
              "definition": "A title of dignity, office, or courtesy."
          },
          {
              "matched": false,
              "word": "essence",
              "type": "n.",
              "definition": "That which makes a thing to be what it is."
          },
          {
              "matched": false,
              "word": "esthetic",
              "type": "adj.",
              "definition": "Pertaining to beauty, taste, or the fine arts."
          },
          {
              "matched": false,
              "word": "estimable",
              "type": "adj.",
              "definition": "Worthy of respect."
          },
          {
              "matched": false,
              "word": "estrange",
              "type": "v.",
              "definition": "To alienate."
          },
          {
              "matched": false,
              "word": "estuary",
              "type": "n.",
              "definition": "A wide lower part of a tidal river."
          },
          {
              "matched": false,
              "word": "et cetera",
              "type": "Latin.",
              "definition": "And so forth."
          },
          {
              "matched": false,
              "word": "eugenic",
              "type": "adj.",
              "definition": "Relating to the development and improvement of race."
          },
          {
              "matched": false,
              "word": "eulogize",
              "type": "v.",
              "definition": "To speak or write a laudation of a person's life or character."
          },
          {
              "matched": false,
              "word": "eulogy",
              "type": "n.",
              "definition": "A spoken or written laudation of a person's life or character."
          },
          {
              "matched": false,
              "word": "euphemism",
              "type": "n.",
              "definition": "A figure of speech by which a phrase less offensive is substituted."
          },
          {
              "matched": false,
              "word": "euphonious",
              "type": "adj.",
              "definition": "Characterized by agreeableness of sound."
          },
          {
              "matched": false,
              "word": "euphony",
              "type": "n.",
              "definition": "Agreeableness of sound."
          },
          {
              "matched": false,
              "word": "eureka",
              "type": "Greek.",
              "definition": "I have found it."
          },
          {
              "matched": false,
              "word": "evade",
              "type": "v.",
              "definition": "To avoid by artifice."
          },
          {
              "matched": false,
              "word": "evanesce",
              "type": "v.",
              "definition": "To vanish gradually."
          },
          {
              "matched": false,
              "word": "evanescent",
              "type": "adj.",
              "definition": "Fleeting."
          },
          {
              "matched": false,
              "word": "evangelical",
              "type": "adj.",
              "definition": "Seeking the conversion of sinners."
          },
          {
              "matched": false,
              "word": "evangelist",
              "type": "n.",
              "definition": "A preacher who goes from place to place holding services."
          },
          {
              "matched": false,
              "word": "evasion",
              "type": "n.",
              "definition": "Escape."
          },
          {
              "matched": false,
              "word": "eventual",
              "type": "adj.",
              "definition": "Ultimate."
          },
          {
              "matched": false,
              "word": "evert",
              "type": "v.",
              "definition": "To turn inside out."
          },
          {
              "matched": false,
              "word": "evict",
              "type": "v.",
              "definition": "To dispossess pursuant to judicial decree."
          },
          {
              "matched": false,
              "word": "evidential",
              "type": "adj.",
              "definition": "Indicative."
          },
          {
              "matched": false,
              "word": "evince",
              "type": "v.",
              "definition": "To make manifest or evident."
          },
          {
              "matched": false,
              "word": "evoke",
              "type": "v.",
              "definition": "To call or summon forth."
          },
          {
              "matched": false,
              "word": "evolution",
              "type": "n.",
              "definition": "Development or growth."
          },
          {
              "matched": false,
              "word": "evolve",
              "type": "v.",
              "definition": "To unfold or expand."
          },
          {
              "matched": false,
              "word": "exacerbate",
              "type": "v.",
              "definition": "To make more sharp, severe, or virulent."
          },
          {
              "matched": false,
              "word": "exaggerate",
              "type": "v.",
              "definition": "To overstate."
          },
          {
              "matched": false,
              "word": "exasperate",
              "type": "v.",
              "definition": "To excite great anger in."
          },
          {
              "matched": false,
              "word": "excavate",
              "type": "v.",
              "definition": "To remove by digging or scooping out."
          },
          {
              "matched": false,
              "word": "exceed",
              "type": "v.",
              "definition": "To go beyond, as in measure, quality, value, action, power, skill, etc."
          },
          {
              "matched": false,
              "word": "excel",
              "type": "v.",
              "definition": "To be superior or distinguished."
          },
          {
              "matched": false,
              "word": "excellence",
              "type": "n.",
              "definition": "Possession of eminently or unusually good qualities."
          },
          {
              "matched": false,
              "word": "excellency",
              "type": "n.",
              "definition": "A title of honor bestowed upon various high officials."
          },
          {
              "matched": false,
              "word": "excellent",
              "type": "adj.",
              "definition": "Possessing distinguished merit."
          },
          {
              "matched": false,
              "word": "excerpt",
              "type": "n.",
              "definition": "An extract or selection from written or printed matter."
          },
          {
              "matched": false,
              "word": "excess",
              "type": "n.",
              "definition": "That which passes the ordinary, proper, or required limit, measure, or          "
          },
          {
              "matched": false,
              "word": "excitable",
              "type": "adj.",
              "definition": "Nervously high-strung."
          },
          {
              "matched": false,
              "word": "excitation",
              "type": "n.",
              "definition": "Intensified emotion or action."
          },
          {
              "matched": false,
              "word": "exclamation",
              "type": "n.",
              "definition": "An abrupt or emphatic expression of thought or of feeling."
          },
          {
              "matched": false,
              "word": "exclude",
              "type": "v.",
              "definition": "To shut out purposely or forcibly."
          },
          {
              "matched": false,
              "word": "exclusion",
              "type": "n.",
              "definition": "Non-admission."
          },
          {
              "matched": false,
              "word": "excrescence",
              "type": "n.",
              "definition": "Any unnatural addition, outgrowth, or development."
          },
          {
              "matched": false,
              "word": "excretion",
              "type": "n.",
              "definition": "The getting rid of waste matter."
          },
          {
              "matched": false,
              "word": "excruciate",
              "type": "v.",
              "definition": "To inflict severe pain or agony upon."
          },
          {
              "matched": false,
              "word": "excursion",
              "type": "n.",
              "definition": "A journey."
          },
          {
              "matched": false,
              "word": "excusable",
              "type": "adj.",
              "definition": "Justifiable."
          },
          {
              "matched": false,
              "word": "execrable",
              "type": "adj.",
              "definition": "Abominable."
          },
          {
              "matched": false,
              "word": "execration",
              "type": "n.",
              "definition": "An accursed thing."
          },
          {
              "matched": false,
              "word": "executor",
              "type": "n.",
              "definition": "A person nominated by the will of another to execute the will."
          },
          {
              "matched": false,
              "word": "exegesis",
              "type": "n.",
              "definition": "Biblical exposition or interpretation."
          },
          {
              "matched": false,
              "word": "exemplar",
              "type": "n.",
              "definition": "A model, pattern, or original to be copied or imitated."
          },
          {
              "matched": false,
              "word": "exemplary",
              "type": "adj.",
              "definition": "Fitted to serve as a model or example worthy of imitation."
          },
          {
              "matched": false,
              "word": "exemplify",
              "type": "v.",
              "definition": "To show by example."
          },
          {
              "matched": false,
              "word": "exempt",
              "type": "adj.",
              "definition": "Free, clear, or released, as from some liability, or restriction affecting          "
          },
          {
              "matched": false,
              "word": "exert",
              "type": "v.",
              "definition": "To make an effort."
          },
          {
              "matched": false,
              "word": "exhale",
              "type": "v.",
              "definition": "To breathe forth."
          },
          {
              "matched": false,
              "word": "exhaust",
              "type": "v.",
              "definition": "To empty by draining off the contents."
          },
          {
              "matched": false,
              "word": "exhaustible",
              "type": "adj.",
              "definition": "Causing or tending to cause exhaustion."
          },
          {
              "matched": false,
              "word": "exhaustion",
              "type": "n.",
              "definition": "Deprivation of strength or energy."
          },
          {
              "matched": false,
              "word": "exhaustive",
              "type": "adj.",
              "definition": "Thorough and complete in execution."
          },
          {
              "matched": false,
              "word": "exhilarate",
              "type": "v.",
              "definition": "To fill with high or cheerful spirits."
          },
          {
              "matched": false,
              "word": "exhume",
              "type": "v.",
              "definition": "To dig out of the earth (what has been buried)."
          },
          {
              "matched": false,
              "word": "exigency",
              "type": "n.",
              "definition": "A critical period or condition."
          },
          {
              "matched": false,
              "word": "exigent",
              "type": "adj.",
              "definition": "Urgent."
          },
          {
              "matched": false,
              "word": "existence",
              "type": "n.",
              "definition": "Possession or continuance of being."
          },
          {
              "matched": false,
              "word": "exit",
              "type": "n.",
              "definition": "A way or passage out."
          },
          {
              "matched": false,
              "word": "exodus",
              "type": "n.",
              "definition": "A going forth or departure from a place or country, especially of many people."
          },
          {
              "matched": false,
              "word": "exonerate",
              "type": "v.",
              "definition": "To relieve or vindicate from accusation, imputation, or blame."
          },
          {
              "matched": false,
              "word": "exorbitance",
              "type": "n.",
              "definition": "Extravagance or enormity."
          },
          {
              "matched": false,
              "word": "exorbitant",
              "type": "adj.",
              "definition": "Going beyond usual and proper limits."
          },
          {
              "matched": false,
              "word": "exorcise",
              "type": "v.",
              "definition": "To cast or drive out by religious or magical means."
          },
          {
              "matched": false,
              "word": "exotic",
              "type": "adj.",
              "definition": "Foreign."
          },
          {
              "matched": false,
              "word": "expand",
              "type": "v.",
              "definition": "To increase in range or scope."
          },
          {
              "matched": false,
              "word": "expanse",
              "type": "n.",
              "definition": "A continuous area or stretch."
          },
          {
              "matched": false,
              "word": "expansion",
              "type": "n.",
              "definition": "Increase of amount, size, scope, or the like."
          },
          {
              "matched": false,
              "word": "expatriate",
              "type": "v.",
              "definition": "To drive from one's own country."
          },
          {
              "matched": false,
              "word": "expect",
              "type": "v.",
              "definition": "To look forward to as certain or probable."
          },
          {
              "matched": false,
              "word": "expectancy",
              "type": "n.",
              "definition": "The act or state of looking forward to as certain or probable."
          },
          {
              "matched": false,
              "word": "expectorate",
              "type": "v.",
              "definition": "To cough up and spit forth."
          },
          {
              "matched": false,
              "word": "expediency",
              "type": "n.",
              "definition": "Fitness to meet the requirements of a particular case."
          },
          {
              "matched": false,
              "word": "expedient",
              "type": "adj.",
              "definition": "Contributing to personal advantage."
          },
          {
              "matched": false,
              "word": "expedite",
              "type": "v.",
              "definition": "To hasten the movement or progress of."
          },
          {
              "matched": false,
              "word": "expeditious",
              "type": "adj.",
              "definition": "Speedy."
          },
          {
              "matched": false,
              "word": "expend",
              "type": "v.",
              "definition": "To spend."
          },
          {
              "matched": false,
              "word": "expense",
              "type": "n.",
              "definition": "The laying out or expending or money or other resources, as time or strength."
          },
          {
              "matched": false,
              "word": "expiate",
              "type": "v.",
              "definition": "To make satisfaction or amends for."
          },
          {
              "matched": false,
              "word": "explicate",
              "type": "v.",
              "definition": "To clear from involvement."
          },
          {
              "matched": false,
              "word": "explicit",
              "type": "adj.",
              "definition": "Definite."
          },
          {
              "matched": false,
              "word": "explode",
              "type": "v.",
              "definition": "To cause to burst in pieces by force from within."
          },
          {
              "matched": false,
              "word": "explosion",
              "type": "n.",
              "definition": "A sudden and violent outbreak."
          },
          {
              "matched": false,
              "word": "explosive",
              "type": "adj.",
              "definition": "Pertaining to a sudden and violent outbreak."
          },
          {
              "matched": false,
              "word": "exposition",
              "type": "n.",
              "definition": "Formal presentation."
          },
          {
              "matched": false,
              "word": "expository",
              "type": "adj.",
              "definition": "Pertaining to a formal presentation."
          },
          {
              "matched": false,
              "word": "expostulate",
              "type": "v.",
              "definition": "To discuss."
          },
          {
              "matched": false,
              "word": "exposure",
              "type": "n.",
              "definition": "An open situation or position in relation to the sun, elements, or points of          "
          },
          {
              "matched": false,
              "word": "expressive",
              "type": "adj.",
              "definition": "Full of meaning."
          },
          {
              "matched": false,
              "word": "expulsion",
              "type": "n.",
              "definition": "Forcible ejection."
          },
          {
              "matched": false,
              "word": "extant",
              "type": "adj.",
              "definition": "Still existing and known."
          },
          {
              "matched": false,
              "word": "extemporaneous",
              "type": "adj.",
              "definition": "Done or made without much or any preparation."
          },
          {
              "matched": false,
              "word": "extempore",
              "type": "adv.",
              "definition": "Without studied or special preparation."
          },
          {
              "matched": false,
              "word": "extensible",
              "type": "adj.",
              "definition": "Capable of being thrust out."
          },
          {
              "matched": false,
              "word": "extension",
              "type": "n.",
              "definition": "A reaching or stretching out, as in space, time or scope."
          },
          {
              "matched": false,
              "word": "extensive",
              "type": "adj.",
              "definition": "Extended widely in space, time, or scope."
          },
          {
              "matched": false,
              "word": "extensor",
              "type": "n.",
              "definition": "A muscle that causes extension."
          },
          {
              "matched": false,
              "word": "extenuate",
              "type": "v.",
              "definition": "To diminish the gravity or importance of."
          },
          {
              "matched": false,
              "word": "exterior",
              "type": "n.",
              "definition": "That which is outside."
          },
          {
              "matched": false,
              "word": "external",
              "type": "n.",
              "definition": "Anything relating or belonging to the outside."
          },
          {
              "matched": false,
              "word": "extinct",
              "type": "adj.",
              "definition": "Being no longer in existence."
          },
          {
              "matched": false,
              "word": "extinguish",
              "type": "v.",
              "definition": "To render extinct."
          },
          {
              "matched": false,
              "word": "extol",
              "type": "v.",
              "definition": "To praise in the highest terms."
          },
          {
              "matched": false,
              "word": "extort",
              "type": "v.",
              "definition": "To obtain by violence, threats, compulsion, or the subjection of another to some          "
          },
          {
              "matched": false,
              "word": "extortion",
              "type": "n.",
              "definition": "The practice of obtaining by violence or compulsion."
          },
          {
              "matched": false,
              "word": "extradite",
              "type": "v.",
              "definition": "To surrender the custody of."
          },
          {
              "matched": false,
              "word": "extradition",
              "type": "n.",
              "definition": "The surrender by a government of a person accused of crime to the justice          "
          },
          {
              "matched": false,
              "word": "extrajudicial",
              "type": "adj.",
              "definition": "Happening out of court."
          },
          {
              "matched": false,
              "word": "extraneous",
              "type": "adj.",
              "definition": "Having no essential relation to a subject."
          },
          {
              "matched": false,
              "word": "extraordinary",
              "type": "adj.",
              "definition": "Unusual."
          },
          {
              "matched": false,
              "word": "extravagance",
              "type": "n.",
              "definition": "Undue expenditure of money."
          },
          {
              "matched": false,
              "word": "extravagant",
              "type": "adj.",
              "definition": "Needlessly free or lavish in expenditure."
          },
          {
              "matched": false,
              "word": "extremist",
              "type": "n.",
              "definition": "One who supports extreme measures or holds extreme views."
          },
          {
              "matched": false,
              "word": "extremity",
              "type": "n.",
              "definition": "The utmost point, side, or border, or that farthest removed from a mean          "
          },
          {
              "matched": false,
              "word": "extricate",
              "type": "v.",
              "definition": "Disentangle."
          },
          {
              "matched": false,
              "word": "extrude",
              "type": "v.",
              "definition": "To drive out or away."
          },
          {
              "matched": false,
              "word": "exuberance",
              "type": "n.",
              "definition": "Rich supply."
          },
          {
              "matched": false,
              "word": "exuberant",
              "type": "adj.",
              "definition": "Marked by great plentifulness."
          },
          {
              "matched": false,
              "word": "fabricate",
              "type": "v.",
              "definition": "To invent fancifully or falsely."
          },
          {
              "matched": false,
              "word": "fabulous",
              "type": "adj.",
              "definition": "Incredible."
          },
          {
              "matched": false,
              "word": "facet",
              "type": "n.",
              "definition": "One of the small triangular plane surfaces of a diamond or other gem."
          },
          {
              "matched": false,
              "word": "facetious",
              "type": "adj.",
              "definition": "Amusing."
          },
          {
              "matched": false,
              "word": "facial",
              "type": "adj.",
              "definition": "Pertaining to the face."
          },
          {
              "matched": false,
              "word": "facile",
              "type": "adj.",
              "definition": "Not difficult to do."
          },
          {
              "matched": false,
              "word": "facilitate",
              "type": "v.",
              "definition": "To make more easy."
          },
          {
              "matched": false,
              "word": "facility",
              "type": "n.",
              "definition": "Ease."
          },
          {
              "matched": false,
              "word": "facsimile",
              "type": "n.",
              "definition": "An exact copy or reproduction."
          },
          {
              "matched": false,
              "word": "faction",
              "type": "n.",
              "definition": "A number of persons combined for a common purpose."
          },
          {
              "matched": false,
              "word": "factious",
              "type": "adj.",
              "definition": "Turbulent."
          },
          {
              "matched": false,
              "word": "fallacious",
              "type": "adj.",
              "definition": "Illogical."
          },
          {
              "matched": false,
              "word": "fallacy",
              "type": "n.",
              "definition": "Any unsound or delusive mode of reasoning, or anything based on such reasoning."
          },
          {
              "matched": false,
              "word": "fallible",
              "type": "adj.",
              "definition": "Capable of erring."
          },
          {
              "matched": false,
              "word": "fallow",
              "type": "n.",
              "definition": "Land broken up and left to become mellow or to rest."
          },
          {
              "matched": false,
              "word": "famish",
              "type": "v.",
              "definition": "To suffer extremity of hunger or thirst."
          },
          {
              "matched": false,
              "word": "fanatic",
              "type": "n.",
              "definition": "A religious zealot."
          },
          {
              "matched": false,
              "word": "fancier",
              "type": "n.",
              "definition": "One having a taste for or interest in special objects."
          },
          {
              "matched": false,
              "word": "fanciless",
              "type": "adj.",
              "definition": "Unimaginative."
          },
          {
              "matched": false,
              "word": "fastidious",
              "type": "adj.",
              "definition": "Hard to please."
          },
          {
              "matched": false,
              "word": "fathom",
              "type": "n.",
              "definition": "A measure of length, 6 feet."
          },
          {
              "matched": false,
              "word": "fatuous",
              "type": "adj.",
              "definition": "Idiotic"
          },
          {
              "matched": false,
              "word": "faulty",
              "type": "adj.",
              "definition": "Imperfect."
          },
          {
              "matched": false,
              "word": "faun",
              "type": "n.",
              "definition": "One of a class of deities of the woods and herds represented as half human, with          "
          },
          {
              "matched": false,
              "word": "fawn",
              "type": "n.",
              "definition": "A young deer."
          },
          {
              "matched": false,
              "word": "fealty",
              "type": "n.",
              "definition": "Loyalty."
          },
          {
              "matched": false,
              "word": "feasible",
              "type": "adj.",
              "definition": "That may be done, performed, or effected; practicable."
          },
          {
              "matched": false,
              "word": "federate",
              "type": "v.",
              "definition": "To league together."
          },
          {
              "matched": false,
              "word": "feint",
              "type": "n.",
              "definition": "Any sham, pretense, or deceptive movement."
          },
          {
              "matched": false,
              "word": "felicitate",
              "type": "v.",
              "definition": "To wish joy or happiness to, especially in view of a coming event."
          },
          {
              "matched": false,
              "word": "felicity",
              "type": "n.",
              "definition": "A state of well-founded happiness."
          },
          {
              "matched": false,
              "word": "felon",
              "type": "n.",
              "definition": "A criminal or depraved person."
          },
          {
              "matched": false,
              "word": "felonious",
              "type": "adj.",
              "definition": "Showing criminal or evil purpose."
          },
          {
              "matched": false,
              "word": "felony",
              "type": "n.",
              "definition": "One of the highest class of offenses, and punishable with death or imprisonment."
          },
          {
              "matched": false,
              "word": "feminine",
              "type": "adj.",
              "definition": "Characteristic of woman or womankind."
          },
          {
              "matched": false,
              "word": "fernery",
              "type": "n.",
              "definition": "A place in which ferns are grown."
          },
          {
              "matched": false,
              "word": "ferocious",
              "type": "adj.",
              "definition": "Of a wild, fierce, and savage nature."
          },
          {
              "matched": false,
              "word": "ferocity",
              "type": "n.",
              "definition": "Savageness."
          },
          {
              "matched": false,
              "word": "fervent",
              "type": "adj.",
              "definition": "Ardent in feeling."
          },
          {
              "matched": false,
              "word": "fervid",
              "type": "adj.",
              "definition": "Intense."
          },
          {
              "matched": false,
              "word": "fervor",
              "type": "n.",
              "definition": "Ardor or intensity of feeling."
          },
          {
              "matched": false,
              "word": "festal",
              "type": "adj.",
              "definition": "Joyous."
          },
          {
              "matched": false,
              "word": "festive",
              "type": "adj.",
              "definition": "Merry."
          },
          {
              "matched": false,
              "word": "fete",
              "type": "n.",
              "definition": "A festival or feast."
          },
          {
              "matched": false,
              "word": "fetus",
              "type": "n.",
              "definition": "The young in the womb or in the egg."
          },
          {
              "matched": false,
              "word": "feudal",
              "type": "adj.",
              "definition": "Pertaining to the relation of lord and vassal."
          },
          {
              "matched": false,
              "word": "feudalism",
              "type": "n.",
              "definition": "The feudal system."
          },
          {
              "matched": false,
              "word": "fez",
              "type": "n.",
              "definition": "A brimless felt cap in the shape of a truncated cone, usually red with a black          "
          },
          {
              "matched": false,
              "word": "fiasco",
              "type": "n.",
              "definition": "A complete or humiliating failure."
          },
          {
              "matched": false,
              "word": "fickle",
              "type": "adj.",
              "definition": "Unduly changeable in feeling, judgment, or purpose."
          },
          {
              "matched": false,
              "word": "fictitious",
              "type": "adj.",
              "definition": "Created or formed by the imagination."
          },
          {
              "matched": false,
              "word": "fidelity",
              "type": "n.",
              "definition": "Loyalty."
          },
          {
              "matched": false,
              "word": "fiducial",
              "type": "adj.",
              "definition": "Indicative of faith or trust."
          },
          {
              "matched": false,
              "word": "fief",
              "type": "n.",
              "definition": "A landed estate held under feudal tenure."
          },
          {
              "matched": false,
              "word": "filibuster",
              "type": "n.",
              "definition": "One who attempts to obstruct legislation."
          },
          {
              "matched": false,
              "word": "finale",
              "type": "n.",
              "definition": "Concluding performance."
          },
          {
              "matched": false,
              "word": "finality",
              "type": "n.",
              "definition": "The state or quality of being final or complete."
          },
          {
              "matched": false,
              "word": "finally",
              "type": "adv.",
              "definition": "At last."
          },
          {
              "matched": false,
              "word": "financial",
              "type": "adj.",
              "definition": "Monetary."
          },
          {
              "matched": false,
              "word": "financier",
              "type": "n.",
              "definition": "One skilled in or occupied with financial affairs or operations."
          },
          {
              "matched": false,
              "word": "finery",
              "type": "n.",
              "definition": "That which is used to decorate the person or dress."
          },
          {
              "matched": false,
              "word": "finesse",
              "type": "n.",
              "definition": "Subtle contrivance used to gain a point."
          },
          {
              "matched": false,
              "word": "finite",
              "type": "adj.",
              "definition": "Limited."
          },
          {
              "matched": false,
              "word": "fiscal",
              "type": "adj.",
              "definition": "Pertaining to the treasury or public finances of a government."
          },
          {
              "matched": false,
              "word": "fishmonger",
              "type": "n.",
              "definition": "One who sells fish."
          },
          {
              "matched": false,
              "word": "fissure",
              "type": "n.",
              "definition": "A crack or crack-like depression."
          },
          {
              "matched": false,
              "word": "fitful",
              "type": "adj.",
              "definition": "Spasmodic."
          },
          {
              "matched": false,
              "word": "fixture",
              "type": "n.",
              "definition": "One who or that which is expected to remain permanently in its position."
          },
          {
              "matched": false,
              "word": "flag-officer",
              "type": "n.",
              "definition": "The captain of a flag-ship."
          },
          {
              "matched": false,
              "word": "flagrant",
              "type": "adj.",
              "definition": "Openly scandalous."
          },
          {
              "matched": false,
              "word": "flamboyant",
              "type": "adj.",
              "definition": "Characterized by extravagance and in general by want of good taste."
          },
          {
              "matched": false,
              "word": "flatulence",
              "type": "n.",
              "definition": "Accumulation of gas in the stomach and bowels."
          },
          {
              "matched": false,
              "word": "flection",
              "type": "n.",
              "definition": "The act of bending."
          },
          {
              "matched": false,
              "word": "fledgling",
              "type": "n.",
              "definition": "A young bird."
          },
          {
              "matched": false,
              "word": "flexible",
              "type": "adj.",
              "definition": "Pliable."
          },
          {
              "matched": false,
              "word": "flimsy",
              "type": "adj.",
              "definition": "Thin and weak."
          },
          {
              "matched": false,
              "word": "flippant",
              "type": "adj.",
              "definition": "Having a light, pert, trifling disposition."
          },
          {
              "matched": false,
              "word": "floe",
              "type": "n.",
              "definition": "A collection of tabular masses of floating polar ice."
          },
          {
              "matched": false,
              "word": "flora",
              "type": "n.",
              "definition": "The aggregate of plants growing without cultivation in a district."
          },
          {
              "matched": false,
              "word": "floral",
              "type": "adj.",
              "definition": "Pertaining to flowers."
          },
          {
              "matched": false,
              "word": "florid",
              "type": "adj.",
              "definition": "Flushed with red."
          },
          {
              "matched": false,
              "word": "florist",
              "type": "n.",
              "definition": "A dealer in flowers."
          },
          {
              "matched": false,
              "word": "fluctuate",
              "type": "v.",
              "definition": "To pass backward and forward irregularly from one state or degree to another."
          },
          {
              "matched": false,
              "word": "fluctuation",
              "type": "n.",
              "definition": "Frequent irregular change back and forth from one state or degree to          "
          },
          {
              "matched": false,
              "word": "flue",
              "type": "n.",
              "definition": "A smoke-duct in a chimney."
          },
          {
              "matched": false,
              "word": "fluent",
              "type": "adj.",
              "definition": "Having a ready or easy flow of words or ideas."
          },
          {
              "matched": false,
              "word": "fluential",
              "type": "adj.",
              "definition": "Pertaining to streams."
          },
          {
              "matched": false,
              "word": "flux",
              "type": "n.",
              "definition": "A state of constant movement, change, or renewal."
          },
          {
              "matched": false,
              "word": "foggy",
              "type": "adj.",
              "definition": "Obscure."
          },
          {
              "matched": false,
              "word": "foible",
              "type": "n.",
              "definition": "A personal weakness or failing."
          },
          {
              "matched": false,
              "word": "foist",
              "type": "v.",
              "definition": "To palm off."
          },
          {
              "matched": false,
              "word": "foliage",
              "type": "n.",
              "definition": "Any growth of leaves."
          },
          {
              "matched": false,
              "word": "folio",
              "type": "n.",
              "definition": "A sheet of paper folded once, or of a size adapted to folding once."
          },
          {
              "matched": false,
              "word": "folk-lore",
              "type": "n.",
              "definition": "The traditions, beliefs, and customs of the common people."
          },
          {
              "matched": false,
              "word": "fondle",
              "type": "v.",
              "definition": "To handle tenderly and lovingly."
          },
          {
              "matched": false,
              "word": "foolery",
              "type": "n.",
              "definition": "Folly."
          },
          {
              "matched": false,
              "word": "foot-note",
              "type": "n.",
              "definition": "A note of explanation or comment at the foot of a page or column."
          },
          {
              "matched": false,
              "word": "foppery",
              "type": "n.",
              "definition": "Dandyism."
          },
          {
              "matched": false,
              "word": "foppish",
              "type": "adj.",
              "definition": "Characteristic of one who is unduly devoted to dress and the niceties of          "
          },
          {
              "matched": false,
              "word": "forbearance",
              "type": "n.",
              "definition": "Patient endurance or toleration of offenses."
          },
          {
              "matched": false,
              "word": "forby",
              "type": "adv.",
              "definition": "Besides."
          },
          {
              "matched": false,
              "word": "forcible",
              "type": "adj.",
              "definition": "Violent."
          },
          {
              "matched": false,
              "word": "forecourt",
              "type": "n.",
              "definition": "A court opening directly from the street."
          },
          {
              "matched": false,
              "word": "forejudge",
              "type": "v.",
              "definition": "To judge of before hearing evidence."
          },
          {
              "matched": false,
              "word": "forepeak",
              "type": "n.",
              "definition": "The extreme forward part of a ship's hold, under the lowest deck."
          },
          {
              "matched": false,
              "word": "foreshore",
              "type": "n.",
              "definition": "That part of a shore uncovered at low tide."
          },
          {
              "matched": false,
              "word": "forebode",
              "type": "v.",
              "definition": "To be an omen or warning sign of, especially of evil."
          },
          {
              "matched": false,
              "word": "forecast",
              "type": "v.",
              "definition": "To predict."
          },
          {
              "matched": false,
              "word": "forecastle",
              "type": "n.",
              "definition": "That part of the upper deck of a ship forward of the after fore-shrouds."
          },
          {
              "matched": false,
              "word": "foreclose",
              "type": "v.",
              "definition": "To bar by judicial proceedings the equitable right of a mortgagor to redeem          "
          },
          {
              "matched": false,
              "word": "forefather",
              "type": "n.",
              "definition": "An ancestor."
          },
          {
              "matched": false,
              "word": "forego",
              "type": "v.",
              "definition": "To deny oneself the pleasure or profit of."
          },
          {
              "matched": false,
              "word": "foreground",
              "type": "n.",
              "definition": "That part of a landscape or picture situated or represented as nearest the          "
          },
          {
              "matched": false,
              "word": "forehead",
              "type": "n.",
              "definition": "The upper part of the face, between the eyes and the hair."
          },
          {
              "matched": false,
              "word": "foreign",
              "type": "adj.",
              "definition": "Belonging to, situated in, or derived from another country."
          },
          {
              "matched": false,
              "word": "foreigner",
              "type": "n.",
              "definition": "A citizen of a foreign country."
          },
          {
              "matched": false,
              "word": "foreknowledge",
              "type": "n.",
              "definition": "Prescience."
          },
          {
              "matched": false,
              "word": "foreman",
              "type": "n.",
              "definition": "The head man."
          },
          {
              "matched": false,
              "word": "foreordain",
              "type": "v.",
              "definition": "To predetermine."
          },
          {
              "matched": false,
              "word": "foreordination",
              "type": "n.",
              "definition": "Predestination."
          },
          {
              "matched": false,
              "word": "forerun",
              "type": "v.",
              "definition": "To go before as introducing or ushering in."
          },
          {
              "matched": false,
              "word": "foresail",
              "type": "n.",
              "definition": "A square sail."
          },
          {
              "matched": false,
              "word": "foresee",
              "type": "v.",
              "definition": "To discern beforehand."
          },
          {
              "matched": false,
              "word": "foresight",
              "type": "n.",
              "definition": "Provision against harm or need."
          },
          {
              "matched": false,
              "word": "foretell",
              "type": "v.",
              "definition": "To predict."
          },
          {
              "matched": false,
              "word": "forethought",
              "type": "n.",
              "definition": "Premeditation."
          },
          {
              "matched": false,
              "word": "forfeit",
              "type": "v.",
              "definition": "To lose possession of through failure to fulfill some obligation."
          },
          {
              "matched": false,
              "word": "forfend",
              "type": "v.",
              "definition": "To ward off."
          },
          {
              "matched": false,
              "word": "forgery",
              "type": "n.",
              "definition": "Counterfeiting."
          },
          {
              "matched": false,
              "word": "forgo",
              "type": "v.",
              "definition": "To deny oneself."
          },
          {
              "matched": false,
              "word": "formation",
              "type": "n.",
              "definition": "Relative disposition of parts."
          },
          {
              "matched": false,
              "word": "formidable",
              "type": "adj.",
              "definition": "Difficult to accomplish."
          },
          {
              "matched": false,
              "word": "formula",
              "type": "n.",
              "definition": "Fixed rule or set form."
          },
          {
              "matched": false,
              "word": "forswear",
              "type": "v.",
              "definition": "To renounce upon oath."
          },
          {
              "matched": false,
              "word": "forte",
              "type": "n.",
              "definition": "A strong point."
          },
          {
              "matched": false,
              "word": "forth",
              "type": "adv.",
              "definition": "Into notice or view."
          },
          {
              "matched": false,
              "word": "forthright",
              "type": "adv.",
              "definition": "With directness."
          },
          {
              "matched": false,
              "word": "fortify",
              "type": "v.",
              "definition": "To provide with defensive works."
          },
          {
              "matched": false,
              "word": "fortitude",
              "type": "n.",
              "definition": "Patient courage."
          },
          {
              "matched": false,
              "word": "foursome",
              "type": "adj.",
              "definition": "Consisting of four."
          },
          {
              "matched": false,
              "word": "fracture",
              "type": "n.",
              "definition": "A break."
          },
          {
              "matched": false,
              "word": "fragile",
              "type": "adj.",
              "definition": "Easily broken."
          },
          {
              "matched": false,
              "word": "frailty",
              "type": "n.",
              "definition": "Liability to be broken or destroyed."
          },
          {
              "matched": false,
              "word": "fragile",
              "type": "adj.",
              "definition": "Capable of being broken."
          },
          {
              "matched": false,
              "word": "frankincense",
              "type": "n.",
              "definition": "A gum or resin which on burning yields aromatic fumes."
          },
          {
              "matched": false,
              "word": "frantic",
              "type": "adj.",
              "definition": "Frenzied."
          },
          {
              "matched": false,
              "word": "fraternal",
              "type": "adj.",
              "definition": "Brotherly."
          },
          {
              "matched": false,
              "word": "fraudulence",
              "type": "n.",
              "definition": "Deceitfulness."
          },
          {
              "matched": false,
              "word": "fraudulent",
              "type": "adj.",
              "definition": "Counterfeit."
          },
          {
              "matched": false,
              "word": "fray",
              "type": "v.",
              "definition": "To fret at the edge so as to loosen or break the threads."
          },
          {
              "matched": false,
              "word": "freemason",
              "type": "n.",
              "definition": "A member of an ancient secret fraternity originally confined to skilled          "
          },
          {
              "matched": false,
              "word": "freethinker",
              "type": "n.",
              "definition": "One who rejects authority or inspiration in religion."
          },
          {
              "matched": false,
              "word": "free trade",
              "type": "n.",
              "definition": "Commerce unrestricted by tariff or customs."
          },
          {
              "matched": false,
              "word": "frequency",
              "type": "n.",
              "definition": "The comparative number of any kind of occurrences within a given time or          "
          },
          {
              "matched": false,
              "word": "fresco",
              "type": "n.",
              "definition": "The art of painting on a surface of plaster, particularly on walls and ceilings."
          },
          {
              "matched": false,
              "word": "freshness",
              "type": "n.",
              "definition": "The state, quality, or degree of being fresh."
          },
          {
              "matched": false,
              "word": "fretful",
              "type": "adj.",
              "definition": "Disposed to peevishness."
          },
          {
              "matched": false,
              "word": "frightful",
              "type": "adj.",
              "definition": "Apt to induce terror or alarm."
          },
          {
              "matched": false,
              "word": "frigid",
              "type": "adj.",
              "definition": "Lacking warmth."
          },
          {
              "matched": false,
              "word": "frigidarium",
              "type": "n.",
              "definition": "A room kept at a low temperature for preserving fruits, meat, etc."
          },
          {
              "matched": false,
              "word": "frivolity",
              "type": "n.",
              "definition": "A trifling act, thought, saying, or practice."
          },
          {
              "matched": false,
              "word": "frivolous",
              "type": "adj.",
              "definition": "Trivial."
          },
          {
              "matched": false,
              "word": "frizz",
              "type": "v.",
              "definition": "To give a crinkled, fluffy appearance to."
          },
          {
              "matched": false,
              "word": "frizzle",
              "type": "v.",
              "definition": "To cause to crinkle or curl, as the hair."
          },
          {
              "matched": false,
              "word": "frolicsome",
              "type": "adj.",
              "definition": "Prankish."
          },
          {
              "matched": false,
              "word": "frontier",
              "type": "n.",
              "definition": "The part of a nation's territory that abuts upon another country."
          },
          {
              "matched": false,
              "word": "frowzy",
              "type": "adj.",
              "definition": "Slovenly in appearance."
          },
          {
              "matched": false,
              "word": "frugal",
              "type": "adj.",
              "definition": "Economical."
          },
          {
              "matched": false,
              "word": "fruition",
              "type": "n.",
              "definition": "Fulfillment."
          },
          {
              "matched": false,
              "word": "fugacious",
              "type": "adj.",
              "definition": "Fleeting."
          },
          {
              "matched": false,
              "word": "fulcrum",
              "type": "n.",
              "definition": "The support on or against which a lever rests, or the point about which it          "
          },
          {
              "matched": false,
              "word": "fulminate",
              "type": "v.",
              "definition": "To cause to explode."
          },
          {
              "matched": false,
              "word": "fulsome",
              "type": "adj.",
              "definition": "Offensive from excess of praise or commendation."
          },
          {
              "matched": false,
              "word": "fumigate",
              "type": "v.",
              "definition": "To subject to the action of smoke or fumes, especially for disinfection."
          },
          {
              "matched": false,
              "word": "functionary",
              "type": "n.",
              "definition": "An official."
          },
          {
              "matched": false,
              "word": "fundamental",
              "type": "adj.",
              "definition": "Basal."
          },
          {
              "matched": false,
              "word": "fungible",
              "type": "adj.",
              "definition": "That may be measured, counted, or weighed."
          },
          {
              "matched": false,
              "word": "fungous",
              "type": "adj.",
              "definition": "Spongy."
          },
          {
              "matched": false,
              "word": "fungus",
              "type": "n.",
              "definition": "A plant destitute of chlorophyll, as a mushroom."
          },
          {
              "matched": false,
              "word": "furbish",
              "type": "v.",
              "definition": "To restore brightness or beauty to."
          },
          {
              "matched": false,
              "word": "furlong",
              "type": "n.",
              "definition": "A measure, one-eighth of a mile."
          },
          {
              "matched": false,
              "word": "furlough",
              "type": "n.",
              "definition": "A temporary absence of a soldier or sailor by permission of the commanding          "
          },
          {
              "matched": false,
              "word": "furrier",
              "type": "n.",
              "definition": "A dealer in or maker of fur goods."
          },
          {
              "matched": false,
              "word": "further",
              "type": "adj.",
              "definition": "More distant or advanced."
          },
          {
              "matched": false,
              "word": "furtherance",
              "type": "n.",
              "definition": "Advancement."
          },
          {
              "matched": false,
              "word": "furtive",
              "type": "adj.",
              "definition": "Stealthy or sly, like the actions of a thief."
          },
          {
              "matched": false,
              "word": "fuse",
              "type": "v.",
              "definition": "To unite or blend as by melting together."
          },
          {
              "matched": false,
              "word": "fusible",
              "type": "adj.",
              "definition": "Capable of being melted by heat."
          },
          {
              "matched": false,
              "word": "futile",
              "type": "adj.",
              "definition": "Of no avail or effect."
          },
          {
              "matched": false,
              "word": "futurist",
              "type": "n.",
              "definition": "A person of expectant temperament."
          },
          {
              "matched": false,
              "word": "gauge",
              "type": "n.",
              "definition": "An instrument for measuring."
          },
          {
              "matched": false,
              "word": "gaiety",
              "type": "n.",
              "definition": "Festivity."
          },
          {
              "matched": false,
              "word": "gaily",
              "type": "adv.",
              "definition": "Merrily."
          },
          {
              "matched": false,
              "word": "gait",
              "type": "n.",
              "definition": "Carriage of the body in going."
          },
          {
              "matched": false,
              "word": "gallant",
              "type": "adj.",
              "definition": "Possessing a brave or chivalrous spirit."
          },
          {
              "matched": false,
              "word": "galore",
              "type": "adj.",
              "definition": "Abundant."
          },
          {
              "matched": false,
              "word": "galvanic",
              "type": "adj.",
              "definition": "Pertaining or relating to electricity produced by chemical action."
          },
          {
              "matched": false,
              "word": "galvanism",
              "type": "n.",
              "definition": "Current electricity, especially that arising from chemical action."
          },
          {
              "matched": false,
              "word": "galvanize",
              "type": "v.",
              "definition": "To imbue with life or animation."
          },
          {
              "matched": false,
              "word": "gamble",
              "type": "v.",
              "definition": "To risk money or other possession on an event, chance, or contingency."
          },
          {
              "matched": false,
              "word": "gambol",
              "type": "n.",
              "definition": "Playful leaping or frisking."
          },
          {
              "matched": false,
              "word": "gamester",
              "type": "n.",
              "definition": "A gambler."
          },
          {
              "matched": false,
              "word": "gamut",
              "type": "n.",
              "definition": "The whole range or sequence."
          },
          {
              "matched": false,
              "word": "garnish",
              "type": "v.",
              "definition": "In cookery, to surround with additions for embellishment."
          },
          {
              "matched": false,
              "word": "garrison",
              "type": "n.",
              "definition": "The military force stationed in a fort, town, or other place for its defense."
          },
          {
              "matched": false,
              "word": "garrote",
              "type": "v.",
              "definition": "To execute by strangling."
          },
          {
              "matched": false,
              "word": "garrulous",
              "type": "adj.",
              "definition": "Given to constant trivial talking."
          },
          {
              "matched": false,
              "word": "gaseous",
              "type": "adj.",
              "definition": "Light and unsubstantial."
          },
          {
              "matched": false,
              "word": "gastric",
              "type": "adj.",
              "definition": "Of, pertaining to, or near the stomach."
          },
          {
              "matched": false,
              "word": "gastritis",
              "type": "n.",
              "definition": "Inflammation of the stomach."
          },
          {
              "matched": false,
              "word": "gastronomy",
              "type": "n.",
              "definition": "The art of preparing and serving appetizing food."
          },
          {
              "matched": false,
              "word": "gendarme",
              "type": "n.",
              "definition": "In continental Europe, particularly in France, a uniformed and armed police          "
          },
          {
              "matched": false,
              "word": "genealogy",
              "type": "n.",
              "definition": "A list, in the order of succession, of ancestors and their descendants."
          },
          {
              "matched": false,
              "word": "genealogist",
              "type": "n.",
              "definition": "A tracer of pedigrees."
          },
          {
              "matched": false,
              "word": "generality",
              "type": "n.",
              "definition": "The principal portion."
          },
          {
              "matched": false,
              "word": "generalize",
              "type": "v.",
              "definition": "To draw general inferences."
          },
          {
              "matched": false,
              "word": "generally",
              "type": "adv.",
              "definition": "Ordinarily."
          },
          {
              "matched": false,
              "word": "generate",
              "type": "v.",
              "definition": "To produce or cause to be."
          },
          {
              "matched": false,
              "word": "generic",
              "type": "adj.",
              "definition": "Noting a genus or kind; opposed to specific."
          },
          {
              "matched": false,
              "word": "generosity",
              "type": "n.",
              "definition": "A disposition to give liberally or to bestow favors heartily."
          },
          {
              "matched": false,
              "word": "genesis",
              "type": "n.",
              "definition": "Creation."
          },
          {
              "matched": false,
              "word": "geniality",
              "type": "n.",
              "definition": "Warmth and kindliness of disposition."
          },
          {
              "matched": false,
              "word": "genital",
              "type": "adj.",
              "definition": "Of or pertaining to the animal reproductive organs."
          },
          {
              "matched": false,
              "word": "genitive",
              "type": "adj.",
              "definition": "Indicating source, origin, possession, or the like."
          },
          {
              "matched": false,
              "word": "genteel",
              "type": "adj.",
              "definition": "Well-bred or refined."
          },
          {
              "matched": false,
              "word": "gentile",
              "type": "adj.",
              "definition": "Belonging to a people not Jewish."
          },
          {
              "matched": false,
              "word": "geology",
              "type": "n.",
              "definition": "The department of natural science that treats of the constitution and structure          "
          },
          {
              "matched": false,
              "word": "germane",
              "type": "adj.",
              "definition": "Relevant."
          },
          {
              "matched": false,
              "word": "germinate",
              "type": "v.",
              "definition": "To begin to develop into an embryo or higher form."
          },
          {
              "matched": false,
              "word": "gestation",
              "type": "n.",
              "definition": "Pregnancy."
          },
          {
              "matched": false,
              "word": "gesticulate",
              "type": "v.",
              "definition": "To make gestures or motions, as in speaking, or in place of speech."
          },
          {
              "matched": false,
              "word": "gesture",
              "type": "n.",
              "definition": "A movement or action of the hands or face, expressive of some idea or emotion."
          },
          {
              "matched": false,
              "word": "ghastly",
              "type": "adj.",
              "definition": "Hideous."
          },
          {
              "matched": false,
              "word": "gibe",
              "type": "v.",
              "definition": "To utter taunts or reproaches."
          },
          {
              "matched": false,
              "word": "giddy",
              "type": "adj.",
              "definition": "Affected with a whirling or swimming sensation in the head."
          },
          {
              "matched": false,
              "word": "gigantic",
              "type": "adj.",
              "definition": "Tremendous."
          },
          {
              "matched": false,
              "word": "giver",
              "type": "n.",
              "definition": "One who gives, in any sense."
          },
          {
              "matched": false,
              "word": "glacial",
              "type": "adj.",
              "definition": "Icy, or icily cold."
          },
          {
              "matched": false,
              "word": "glacier",
              "type": "n.",
              "definition": "A field or stream of ice."
          },
          {
              "matched": false,
              "word": "gladden",
              "type": "v.",
              "definition": "To make joyous."
          },
          {
              "matched": false,
              "word": "glazier",
              "type": "n.",
              "definition": "One who cuts and fits panes of glass, as for windows."
          },
          {
              "matched": false,
              "word": "glimmer",
              "type": "n.",
              "definition": "A faint, wavering, unsteady light."
          },
          {
              "matched": false,
              "word": "glimpse",
              "type": "n.",
              "definition": "A momentary look."
          },
          {
              "matched": false,
              "word": "globose",
              "type": "adj.",
              "definition": "Spherical."
          },
          {
              "matched": false,
              "word": "globular",
              "type": "adj.",
              "definition": "Spherical."
          },
          {
              "matched": false,
              "word": "glorious",
              "type": "adj.",
              "definition": "Of excellence and splendor."
          },
          {
              "matched": false,
              "word": "glutinous",
              "type": "adj.",
              "definition": "Sticky."
          },
          {
              "matched": false,
              "word": "gluttonous",
              "type": "adj.",
              "definition": "Given to excess in eating."
          },
          {
              "matched": false,
              "word": "gnash",
              "type": "v.",
              "definition": "To grind or strike the teeth together, as from rage."
          },
          {
              "matched": false,
              "word": "Gordian knot",
              "type": "n.",
              "definition": "Any difficulty the only issue out of which is by bold or unusual manners."
          },
          {
              "matched": false,
              "word": "gourmand",
              "type": "n.",
              "definition": "A connoisseur in the delicacies of the table."
          },
          {
              "matched": false,
              "word": "gosling",
              "type": "n.",
              "definition": "A young goose."
          },
          {
              "matched": false,
              "word": "gossamer",
              "type": "adj.",
              "definition": "Flimsy."
          },
          {
              "matched": false,
              "word": "gourd",
              "type": "n.",
              "definition": "A melon, pumpkin, squash, or some similar fruit having a hard rind."
          },
          {
              "matched": false,
              "word": "graceless",
              "type": "adj.",
              "definition": "Ungracious."
          },
          {
              "matched": false,
              "word": "gradation",
              "type": "n.",
              "definition": "A step, degree, rank, or relative position in an order or series."
          },
          {
              "matched": false,
              "word": "gradient",
              "type": "adj.",
              "definition": "Moving or advancing by steps."
          },
          {
              "matched": false,
              "word": "granary",
              "type": "n.",
              "definition": "A storehouse for grain after it is thrashed or husked."
          },
          {
              "matched": false,
              "word": "grandeur",
              "type": "n.",
              "definition": "The quality of being grand or admirably great."
          },
          {
              "matched": false,
              "word": "grandiloquent",
              "type": "adj.",
              "definition": "Speaking in or characterized by a pompous or bombastic style."
          },
          {
              "matched": false,
              "word": "grandiose",
              "type": "adj.",
              "definition": "Having an imposing style or effect."
          },
          {
              "matched": false,
              "word": "grantee",
              "type": "n.",
              "definition": "The person to whom property is transferred by deed."
          },
          {
              "matched": false,
              "word": "grantor",
              "type": "n.",
              "definition": "The maker of a deed."
          },
          {
              "matched": false,
              "word": "granular",
              "type": "adj.",
              "definition": "Composed of small grains or particles."
          },
          {
              "matched": false,
              "word": "granulate",
              "type": "v.",
              "definition": "To form into grains or small particles."
          },
          {
              "matched": false,
              "word": "granule",
              "type": "n.",
              "definition": "A small grain or particle."
          },
          {
              "matched": false,
              "word": "grapple",
              "type": "v.",
              "definition": "To take hold of."
          },
          {
              "matched": false,
              "word": "gratification",
              "type": "n.",
              "definition": "Satisfaction."
          },
          {
              "matched": false,
              "word": "gratify",
              "type": "v.",
              "definition": "To please, as by satisfying a physical or mental desire or need."
          },
          {
              "matched": false,
              "word": "gratuitous",
              "type": "adj.",
              "definition": "Voluntarily."
          },
          {
              "matched": false,
              "word": "gratuity",
              "type": "n.",
              "definition": "That which is given without demand or claim. Tip."
          },
          {
              "matched": false,
              "word": "gravity",
              "type": "n.",
              "definition": "Seriousness."
          },
          {
              "matched": false,
              "word": "gregarious",
              "type": "adj.",
              "definition": "Not habitually solitary or living alone."
          },
          {
              "matched": false,
              "word": "grenadier",
              "type": "n.",
              "definition": "A member of a regiment composed of men of great stature."
          },
          {
              "matched": false,
              "word": "grief",
              "type": "n.",
              "definition": "Sorrow."
          },
          {
              "matched": false,
              "word": "grievance",
              "type": "n.",
              "definition": "That which oppresses, injures, or causes grief and at the same time a sense          "
          },
          {
              "matched": false,
              "word": "grievous",
              "type": "adj.",
              "definition": "Creating affliction."
          },
          {
              "matched": false,
              "word": "grimace",
              "type": "n.",
              "definition": "A distortion of the features, occasioned by some feeling of pain, disgust, etc."
          },
          {
              "matched": false,
              "word": "grindstone",
              "type": "n.",
              "definition": "A flat circular stone, used for sharpening tools."
          },
          {
              "matched": false,
              "word": "grisly",
              "type": "adj.",
              "definition": "Fear-inspiring."
          },
          {
              "matched": false,
              "word": "grotesque",
              "type": "adj.",
              "definition": "Incongruously composed or ill-proportioned."
          },
          {
              "matched": false,
              "word": "grotto",
              "type": "n.",
              "definition": "A small cavern."
          },
          {
              "matched": false,
              "word": "ground",
              "type": "n.",
              "definition": "A pavement or floor or any supporting surface on which one may walk."
          },
          {
              "matched": false,
              "word": "guess",
              "type": "n.",
              "definition": "Surmise."
          },
          {
              "matched": false,
              "word": "guile",
              "type": "n.",
              "definition": "Duplicity."
          },
          {
              "matched": false,
              "word": "guileless",
              "type": "adj.",
              "definition": "Frank."
          },
          {
              "matched": false,
              "word": "guinea",
              "type": "n.",
              "definition": "An English monetary unit."
          },
          {
              "matched": false,
              "word": "guise",
              "type": "n.",
              "definition": "The external appearance as produced by garb or costume."
          },
          {
              "matched": false,
              "word": "gullible",
              "type": "adj.",
              "definition": "Credulous."
          },
          {
              "matched": false,
              "word": "gumption",
              "type": "n.",
              "definition": "Common sense."
          },
          {
              "matched": false,
              "word": "gusto",
              "type": "n.",
              "definition": "Keen enjoyment."
          },
          {
              "matched": false,
              "word": "guy",
              "type": "n.",
              "definition": "Stay-rope."
          },
          {
              "matched": false,
              "word": "guzzle",
              "type": "v.",
              "definition": "To swallow greedily or hastily; gulp."
          },
          {
              "matched": false,
              "word": "gynecocracy",
              "type": "n.",
              "definition": "Female supremacy."
          },
          {
              "matched": false,
              "word": "gynecology",
              "type": "n.",
              "definition": "The science that treats of the functions and diseases peculiar to women."
          },
          {
              "matched": false,
              "word": "gyrate",
              "type": "v.",
              "definition": "To revolve."
          },
          {
              "matched": false,
              "word": "gyroscope",
              "type": "n.",
              "definition": "An instrument for illustrating the laws of rotation."
          },
          {
              "matched": false,
              "word": "habitable",
              "type": "adj.",
              "definition": "Fit to be dwelt in."
          },
          {
              "matched": false,
              "word": "habitant",
              "type": "n.",
              "definition": "Dweller."
          },
          {
              "matched": false,
              "word": "habitual",
              "type": "adj.",
              "definition": "According to usual practice."
          },
          {
              "matched": false,
              "word": "habitude",
              "type": "n.",
              "definition": "Customary relation or association."
          },
          {
              "matched": false,
              "word": "hackney",
              "type": "v.",
              "definition": "To make stale or trite by repetition."
          },
          {
              "matched": false,
              "word": "haggard",
              "type": "adj.",
              "definition": "Worn and gaunt in appearance."
          },
          {
              "matched": false,
              "word": "halcyon",
              "type": "adj.",
              "definition": "Calm."
          },
          {
              "matched": false,
              "word": "hale",
              "type": "adj.",
              "definition": "Of sound and vigorous health."
          },
          {
              "matched": false,
              "word": "handwriting",
              "type": "n.",
              "definition": "Penmanship."
          },
          {
              "matched": false,
              "word": "hanger-on",
              "type": "n.",
              "definition": "A parasite."
          },
          {
              "matched": false,
              "word": "happy-go-lucky",
              "type": "adj.",
              "definition": "Improvident."
          },
          {
              "matched": false,
              "word": "harangue",
              "type": "n.",
              "definition": "A tirade."
          },
          {
              "matched": false,
              "word": "harass",
              "type": "v.",
              "definition": "To trouble with importunities, cares, or annoyances."
          },
          {
              "matched": false,
              "word": "harbinger",
              "type": "n.",
              "definition": "One who or that which foreruns and announces the coming of any person or          "
          },
          {
              "matched": false,
              "word": "hard-hearted",
              "type": "adj.",
              "definition": "Lacking pity or sympathy."
          },
          {
              "matched": false,
              "word": "hardihood",
              "type": "n.",
              "definition": "Foolish daring."
          },
          {
              "matched": false,
              "word": "harmonious",
              "type": "adj.",
              "definition": "Concordant in sound."
          },
          {
              "matched": false,
              "word": "havoc",
              "type": "n.",
              "definition": "Devastation."
          },
          {
              "matched": false,
              "word": "hawthorn",
              "type": "n.",
              "definition": "A thorny shrub much used in England for hedges."
          },
          {
              "matched": false,
              "word": "hazard",
              "type": "n.",
              "definition": "Risk."
          },
          {
              "matched": false,
              "word": "head first",
              "type": "adv.",
              "definition": "Precipitately, as in diving."
          },
          {
              "matched": false,
              "word": "head foremost",
              "type": "adv.",
              "definition": "Precipitately, as in diving."
          },
          {
              "matched": false,
              "word": "heartrending",
              "type": "adj.",
              "definition": "Very depressing."
          },
          {
              "matched": false,
              "word": "heathenish",
              "type": "adj.",
              "definition": "Irreligious."
          },
          {
              "matched": false,
              "word": "heedless",
              "type": "adj.",
              "definition": "Thoughtless."
          },
          {
              "matched": false,
              "word": "heifer",
              "type": "n.",
              "definition": "A young cow."
          },
          {
              "matched": false,
              "word": "heinous",
              "type": "adj.",
              "definition": "Odiously sinful."
          },
          {
              "matched": false,
              "word": "hemorrhage",
              "type": "n.",
              "definition": "Discharge of blood from a ruptured or wounded blood-vessel."
          },
          {
              "matched": false,
              "word": "hemorrhoids",
              "type": "n.",
              "definition": "pl. Tumors composed of enlarged and thickened blood-vessels, at the lower          "
          },
          {
              "matched": false,
              "word": "henchman",
              "type": "n.",
              "definition": "A servile assistant and subordinate."
          },
          {
              "matched": false,
              "word": "henpeck",
              "type": "v.",
              "definition": "To worry or harass by ill temper and petty annoyances."
          },
          {
              "matched": false,
              "word": "heptagon",
              "type": "n.",
              "definition": "A figure having seven sides and seven angles."
          },
          {
              "matched": false,
              "word": "heptarchy",
              "type": "n.",
              "definition": "A group of seven governments."
          },
          {
              "matched": false,
              "word": "herbaceous",
              "type": "adj.",
              "definition": "Having the character of a herb."
          },
          {
              "matched": false,
              "word": "herbarium",
              "type": "n.",
              "definition": "A collection of dried plants scientifically arranged for study."
          },
          {
              "matched": false,
              "word": "herbivorous",
              "type": "adj.",
              "definition": "Feeding on herbs or other vegetable matter, as animals."
          },
          {
              "matched": false,
              "word": "hereditary",
              "type": "adj.",
              "definition": "Passing naturally from parent to child."
          },
          {
              "matched": false,
              "word": "heredity",
              "type": "n.",
              "definition": "Transmission of physical or mental qualities, diseases, etc., from parent to          "
          },
          {
              "matched": false,
              "word": "heresy",
              "type": "n.",
              "definition": "An opinion or doctrine subversive of settled beliefs or accepted principles."
          },
          {
              "matched": false,
              "word": "heretic",
              "type": "n.",
              "definition": "One who holds opinions contrary to the recognized standards or tenets of any          "
          },
          {
              "matched": false,
              "word": "heritage",
              "type": "n.",
              "definition": "Birthright."
          },
          {
              "matched": false,
              "word": "hernia",
              "type": "n.",
              "definition": "Protrusion of any internal organ in whole or in part from its normal position."
          },
          {
              "matched": false,
              "word": "hesitancy",
              "type": "n.",
              "definition": "A pausing to consider."
          },
          {
              "matched": false,
              "word": "hesitant",
              "type": "adj.",
              "definition": "Vacillating."
          },
          {
              "matched": false,
              "word": "hesitation",
              "type": "n.",
              "definition": "Vacillation."
          },
          {
              "matched": false,
              "word": "heterodox",
              "type": "adj.",
              "definition": "At variance with any commonly accepted doctrine or opinion."
          },
          {
              "matched": false,
              "word": "heterogeneity",
              "type": "n.",
              "definition": "Unlikeness of constituent parts."
          },
          {
              "matched": false,
              "word": "heterogeneous",
              "type": "adj.",
              "definition": "Consisting of dissimilar elements or ingredients of different kinds."
          },
          {
              "matched": false,
              "word": "heteromorphic",
              "type": "adj.",
              "definition": "Deviating from the normal form or standard type."
          },
          {
              "matched": false,
              "word": "hexangular",
              "type": "adj.",
              "definition": "Having six angles."
          },
          {
              "matched": false,
              "word": "hexapod",
              "type": "adj.",
              "definition": "Having six feet."
          },
          {
              "matched": false,
              "word": "hexagon",
              "type": "n.",
              "definition": "A figure with six angles."
          },
          {
              "matched": false,
              "word": "hiatus",
              "type": "n.",
              "definition": "A break or vacancy where something necessary to supply the connection is          "
          },
          {
              "matched": false,
              "word": "hibernal",
              "type": "adj.",
              "definition": "Pertaining to winter."
          },
          {
              "matched": false,
              "word": "Hibernian",
              "type": "adj.",
              "definition": "Pertaining to Ireland, or its people."
          },
          {
              "matched": false,
              "word": "hideous",
              "type": "adj.",
              "definition": "Appalling."
          },
          {
              "matched": false,
              "word": "hilarious",
              "type": "adj.",
              "definition": "Boisterously merry."
          },
          {
              "matched": false,
              "word": "hillock",
              "type": "n.",
              "definition": "A small hill or mound."
          },
          {
              "matched": false,
              "word": "hinder",
              "type": "v.",
              "definition": "To obstruct."
          },
          {
              "matched": false,
              "word": "hindmost",
              "type": "adj.",
              "definition": "Farthest from the front."
          },
          {
              "matched": false,
              "word": "hindrance",
              "type": "n.",
              "definition": "An obstacle."
          },
          {
              "matched": false,
              "word": "hirsute",
              "type": "adj.",
              "definition": "Having a hairy covering."
          },
          {
              "matched": false,
              "word": "hoard",
              "type": "v.",
              "definition": "To gather and store away for the sake of accumulation."
          },
          {
              "matched": false,
              "word": "hoarse",
              "type": "adj.",
              "definition": "Having the voice harsh or rough, as from a cold or fatigue."
          },
          {
              "matched": false,
              "word": "homage",
              "type": "n.",
              "definition": "Reverential regard or worship."
          },
          {
              "matched": false,
              "word": "homogeneity",
              "type": "n.",
              "definition": "Congruity of the members or elements or parts."
          },
          {
              "matched": false,
              "word": "homogeneous",
              "type": "adj.",
              "definition": "Made up of similar parts or elements."
          },
          {
              "matched": false,
              "word": "homologous",
              "type": "adj.",
              "definition": "Identical in nature, make-up, or relation."
          },
          {
              "matched": false,
              "word": "homonym",
              "type": "n.",
              "definition": "A word agreeing in sound with but different in meaning from another."
          },
          {
              "matched": false,
              "word": "homophone",
              "type": "n.",
              "definition": "A word agreeing in sound with but different in meaning from another."
          },
          {
              "matched": false,
              "word": "honorarium",
              "type": "n.",
              "definition": "A token fee or payment to a professional man for services."
          },
          {
              "matched": false,
              "word": "hoodwink",
              "type": "v.",
              "definition": "To deceive."
          },
          {
              "matched": false,
              "word": "horde",
              "type": "n.",
              "definition": "A gathered multitude of human beings."
          },
          {
              "matched": false,
              "word": "hosiery",
              "type": "n.",
              "definition": "A stocking."
          },
          {
              "matched": false,
              "word": "hospitable",
              "type": "adj.",
              "definition": "Disposed to treat strangers or guests with generous kindness."
          },
          {
              "matched": false,
              "word": "hospitality",
              "type": "n.",
              "definition": "The practice of receiving and entertaining strangers and guests with          "
          },
          {
              "matched": false,
              "word": "hostility",
              "type": "n.",
              "definition": "Enmity."
          },
          {
              "matched": false,
              "word": "huckster",
              "type": "n.",
              "definition": "One who retails small wares."
          },
          {
              "matched": false,
              "word": "humane",
              "type": "adj.",
              "definition": "Compassionate."
          },
          {
              "matched": false,
              "word": "humanitarian",
              "type": "n.",
              "definition": "A philanthropist."
          },
          {
              "matched": false,
              "word": "humanize",
              "type": "v.",
              "definition": "To make gentle or refined."
          },
          {
              "matched": false,
              "word": "humbug",
              "type": "n.",
              "definition": "Anything intended or calculated to deceive or mislead."
          },
          {
              "matched": false,
              "word": "humiliate",
              "type": "v.",
              "definition": "To put to shame."
          },
          {
              "matched": false,
              "word": "hussar",
              "type": "n.",
              "definition": "A light-horse trooper armed with saber and carbine."
          },
          {
              "matched": false,
              "word": "hustle",
              "type": "v.",
              "definition": "To move with haste and promptness."
          },
          {
              "matched": false,
              "word": "hybrid",
              "type": "adj.",
              "definition": "Cross-bred."
          },
          {
              "matched": false,
              "word": "hydra",
              "type": "n.",
              "definition": "The seven- or nine-headed water-serpent slain by Hercules."
          },
          {
              "matched": false,
              "word": "hydraulic",
              "type": "adj.",
              "definition": "Involving the moving of water, of the force exerted by water in motion."
          },
          {
              "matched": false,
              "word": "hydrodynamics",
              "type": "n.",
              "definition": "The branch of mechanics that treats of the dynamics of fluids."
          },
          {
              "matched": false,
              "word": "hydroelectric",
              "type": "adj.",
              "definition": "Pertaining to electricity developed water or steam."
          },
          {
              "matched": false,
              "word": "hydromechanics",
              "type": "n.",
              "definition": "The mechanics of fluids."
          },
          {
              "matched": false,
              "word": "hydrometer",
              "type": "n.",
              "definition": "An instrument for determining the density of solids and liquids by          "
          },
          {
              "matched": false,
              "word": "hydrostatics",
              "type": "n.",
              "definition": "The branch of science that treats of the pressure and equilibrium of          "
          },
          {
              "matched": false,
              "word": "hydrous",
              "type": "adj.",
              "definition": "Watery."
          },
          {
              "matched": false,
              "word": "hygiene",
              "type": "n.",
              "definition": "The branch of medical science that relates to improving health."
          },
          {
              "matched": false,
              "word": "hypercritical",
              "type": "adj.",
              "definition": "Faultfinding."
          },
          {
              "matched": false,
              "word": "hypnosis",
              "type": "n.",
              "definition": "An artificial trance-sleep."
          },
          {
              "matched": false,
              "word": "hypnotic",
              "type": "adj.",
              "definition": "Tending to produce sleep."
          },
          {
              "matched": false,
              "word": "hypnotism",
              "type": "n.",
              "definition": "An artificially induced somnambulistic state in which the mind readily acts          "
          },
          {
              "matched": false,
              "word": "hypnotize",
              "type": "v.",
              "definition": "To produce a somnambulistic state in which the mind readily acts on          "
          },
          {
              "matched": false,
              "word": "hypocrisy",
              "type": "n.",
              "definition": "Extreme insincerity."
          },
          {
              "matched": false,
              "word": "hypocrite",
              "type": "n.",
              "definition": "One who makes false professions of his views or beliefs."
          },
          {
              "matched": false,
              "word": "hypodermic",
              "type": "adj.",
              "definition": "Pertaining to the area under the skin."
          },
          {
              "matched": false,
              "word": "hypotenuse",
              "type": "n.",
              "definition": "The side of a right-angled triangle opposite the right angle."
          },
          {
              "matched": false,
              "word": "hypothesis",
              "type": "n.",
              "definition": "A proposition taken for granted as a premise from which to reach a          "
          },
          {
              "matched": false,
              "word": "hysteria",
              "type": "n.",
              "definition": "A nervous affection occurring typically in paroxysms of laughing and crying."
          },
          {
              "matched": false,
              "word": "ichthyic",
              "type": "adj.",
              "definition": "Fish-like."
          },
          {
              "matched": false,
              "word": "ichthyology",
              "type": "n.",
              "definition": "The branch of zoology that treats of fishes."
          },
          {
              "matched": false,
              "word": "ichthyosaurs",
              "type": "n.",
              "definition": "A fossil reptile."
          },
          {
              "matched": false,
              "word": "icily",
              "type": "adv.",
              "definition": "Frigidly."
          },
          {
              "matched": false,
              "word": "iciness",
              "type": "n.",
              "definition": "The state of being icy."
          },
          {
              "matched": false,
              "word": "icon",
              "type": "n.",
              "definition": "An image or likeness."
          },
          {
              "matched": false,
              "word": "iconoclast",
              "type": "n.",
              "definition": "An image-breaker."
          },
          {
              "matched": false,
              "word": "idealize",
              "type": "v.",
              "definition": "To make to conform to some mental or imaginary standard."
          },
          {
              "matched": false,
              "word": "idiom",
              "type": "n.",
              "definition": "A use of words peculiar to a particular language."
          },
          {
              "matched": false,
              "word": "idiosyncrasy",
              "type": "n.",
              "definition": "A mental quality or habit peculiar to an individual."
          },
          {
              "matched": false,
              "word": "idolize",
              "type": "v.",
              "definition": "To regard with inordinate love or admiration."
          },
          {
              "matched": false,
              "word": "ignoble",
              "type": "adj.",
              "definition": "Low in character or purpose."
          },
          {
              "matched": false,
              "word": "ignominious",
              "type": "adj.",
              "definition": "Shameful."
          },
          {
              "matched": false,
              "word": "Iliad",
              "type": "n.",
              "definition": "A Greek epic poem describing scenes from the siege of Troy."
          },
          {
              "matched": false,
              "word": "illegal",
              "type": "adj.",
              "definition": "Not according to law."
          },
          {
              "matched": false,
              "word": "illegible",
              "type": "adj.",
              "definition": "Undecipherable."
          },
          {
              "matched": false,
              "word": "illegitimate",
              "type": "adj.",
              "definition": "Unlawfully begotten."
          },
          {
              "matched": false,
              "word": "illiberal",
              "type": "adj.",
              "definition": "Stingy."
          },
          {
              "matched": false,
              "word": "illicit",
              "type": "adj.",
              "definition": "Unlawful."
          },
          {
              "matched": false,
              "word": "illimitable",
              "type": "adj.",
              "definition": "Boundless."
          },
          {
              "matched": false,
              "word": "illiterate",
              "type": "adj.",
              "definition": "Having little or no book-learning."
          },
          {
              "matched": false,
              "word": "ill-natured",
              "type": "adj.",
              "definition": "Surly."
          },
          {
              "matched": false,
              "word": "illogical",
              "type": "adj.",
              "definition": "Contrary to the rules of sound thought."
          },
          {
              "matched": false,
              "word": "illuminant",
              "type": "n.",
              "definition": "That which may be used to produce light."
          },
          {
              "matched": false,
              "word": "illuminate",
              "type": "v.",
              "definition": "To supply with light."
          },
          {
              "matched": false,
              "word": "illumine",
              "type": "v.",
              "definition": "To make bright or clear."
          },
          {
              "matched": false,
              "word": "illusion",
              "type": "n.",
              "definition": "An unreal image presented to the senses."
          },
          {
              "matched": false,
              "word": "illusive",
              "type": "adj.",
              "definition": "Deceptive."
          },
          {
              "matched": false,
              "word": "illusory",
              "type": "adj.",
              "definition": "Deceiving or tending to deceive, as by false appearance."
          },
          {
              "matched": false,
              "word": "imaginable",
              "type": "adj.",
              "definition": "That can be imagined or conceived in the mind."
          },
          {
              "matched": false,
              "word": "imaginary",
              "type": "adj.",
              "definition": "Fancied."
          },
          {
              "matched": false,
              "word": "imbibe",
              "type": "v.",
              "definition": "To drink or take in."
          },
          {
              "matched": false,
              "word": "imbroglio",
              "type": "n.",
              "definition": "A misunderstanding attended by ill feeling, perplexity, or strife."
          },
          {
              "matched": false,
              "word": "imbrue",
              "type": "v.",
              "definition": "To wet or moisten."
          },
          {
              "matched": false,
              "word": "imitation",
              "type": "n.",
              "definition": "That which is made as a likeness or copy."
          },
          {
              "matched": false,
              "word": "imitator",
              "type": "n.",
              "definition": "One who makes in imitation."
          },
          {
              "matched": false,
              "word": "immaculate",
              "type": "adj.",
              "definition": "Without spot or blemish."
          },
          {
              "matched": false,
              "word": "immaterial",
              "type": "adj.",
              "definition": "Of no essential consequence."
          },
          {
              "matched": false,
              "word": "immature",
              "type": "adj.",
              "definition": "Not full-grown."
          },
          {
              "matched": false,
              "word": "immeasurable",
              "type": "adj.",
              "definition": "Indefinitely extensive."
          },
          {
              "matched": false,
              "word": "immense",
              "type": "adj.",
              "definition": "Very great in degree, extent, size, or quantity."
          },
          {
              "matched": false,
              "word": "immerse",
              "type": "v.",
              "definition": "To plunge or dip entirely under water or other fluid."
          },
          {
              "matched": false,
              "word": "immersion",
              "type": "n.",
              "definition": "The act of plunging or dipping entirely under water or another fluid."
          },
          {
              "matched": false,
              "word": "immigrant",
              "type": "n.",
              "definition": "A foreigner who enters a country to settle there."
          },
          {
              "matched": false,
              "word": "immigrate",
              "type": "v.",
              "definition": "To come into a country or region from a former habitat."
          },
          {
              "matched": false,
              "word": "imminence",
              "type": "n.",
              "definition": "Impending evil or danger."
          },
          {
              "matched": false,
              "word": "imminent",
              "type": "adj.",
              "definition": "Dangerous and close at hand."
          },
          {
              "matched": false,
              "word": "immiscible",
              "type": "adj.",
              "definition": "Separating, as oil and water."
          },
          {
              "matched": false,
              "word": "immoral",
              "type": "adj.",
              "definition": "Habitually engaged in licentious or lewd practices."
          },
          {
              "matched": false,
              "word": "immortalize",
              "type": "v.",
              "definition": "To cause to last or to be known or remembered throughout a great or          "
          },
          {
              "matched": false,
              "word": "immovable",
              "type": "adj.",
              "definition": "Steadfast."
          },
          {
              "matched": false,
              "word": "immune",
              "type": "adj.",
              "definition": "Exempt, as from disease."
          },
          {
              "matched": false,
              "word": "immutable",
              "type": "adj.",
              "definition": "Unchangeable."
          },
          {
              "matched": false,
              "word": "impair",
              "type": "v.",
              "definition": "To cause to become less or worse."
          },
          {
              "matched": false,
              "word": "impalpable",
              "type": "adj.",
              "definition": "Imperceptible to the touch."
          },
          {
              "matched": false,
              "word": "impartial",
              "type": "adj.",
              "definition": "Unbiased."
          },
          {
              "matched": false,
              "word": "impassable",
              "type": "adj.",
              "definition": "That can not be passed through or over."
          },
          {
              "matched": false,
              "word": "impassible",
              "type": "adj.",
              "definition": "Not moved or affected by feeling."
          },
          {
              "matched": false,
              "word": "impassive",
              "type": "adj.",
              "definition": "Unmoved by or not exhibiting feeling."
          },
          {
              "matched": false,
              "word": "impatience",
              "type": "n.",
              "definition": "Unwillingness to brook delays or wait the natural course of things."
          },
          {
              "matched": false,
              "word": "impeccable",
              "type": "adj.",
              "definition": "Blameless."
          },
          {
              "matched": false,
              "word": "impecunious",
              "type": "adj.",
              "definition": "Having no money."
          },
          {
              "matched": false,
              "word": "impede",
              "type": "v.",
              "definition": "To be an obstacle or to place obstacles in the way of."
          },
          {
              "matched": false,
              "word": "impel",
              "type": "v.",
              "definition": "To drive or urge forward."
          },
          {
              "matched": false,
              "word": "impend",
              "type": "v.",
              "definition": "To be imminent."
          },
          {
              "matched": false,
              "word": "imperative",
              "type": "adj.",
              "definition": "Obligatory."
          },
          {
              "matched": false,
              "word": "imperceptible",
              "type": "adj.",
              "definition": "Indiscernible."
          },
          {
              "matched": false,
              "word": "imperfectible",
              "type": "adj.",
              "definition": "That can not be perfected."
          },
          {
              "matched": false,
              "word": "imperil",
              "type": "v.",
              "definition": "To endanger."
          },
          {
              "matched": false,
              "word": "imperious",
              "type": "adj.",
              "definition": "Insisting on obedience."
          },
          {
              "matched": false,
              "word": "impermissible",
              "type": "adj.",
              "definition": "Not permissible."
          },
          {
              "matched": false,
              "word": "impersonal",
              "type": "adj.",
              "definition": "Not relating to a particular person or thing."
          },
          {
              "matched": false,
              "word": "impersonate",
              "type": "v.",
              "definition": "To appear or act in the character of."
          },
          {
              "matched": false,
              "word": "impersuadable",
              "type": "adj.",
              "definition": "Unyielding."
          },
          {
              "matched": false,
              "word": "impertinence",
              "type": "n.",
              "definition": "Rudeness."
          },
          {
              "matched": false,
              "word": "imperturbable",
              "type": "adj.",
              "definition": "Calm."
          },
          {
              "matched": false,
              "word": "impervious",
              "type": "adj.",
              "definition": "Impenetrable."
          },
          {
              "matched": false,
              "word": "impetuosity",
              "type": "n.",
              "definition": "Rashness."
          },
          {
              "matched": false,
              "word": "impetuous",
              "type": "adj.",
              "definition": "Impulsive."
          },
          {
              "matched": false,
              "word": "impetus",
              "type": "n.",
              "definition": "Any impulse or incentive."
          },
          {
              "matched": false,
              "word": "impiety",
              "type": "n.",
              "definition": "Irreverence toward God."
          },
          {
              "matched": false,
              "word": "impious",
              "type": "adj.",
              "definition": "Characterized by irreverence or irreligion."
          },
          {
              "matched": false,
              "word": "implausible",
              "type": "adj.",
              "definition": "Not plausible."
          },
          {
              "matched": false,
              "word": "impliable",
              "type": "adj.",
              "definition": "Capable of being inferred."
          },
          {
              "matched": false,
              "word": "implicate",
              "type": "v.",
              "definition": "To show or prove to be involved in or concerned"
          },
          {
              "matched": false,
              "word": "implicit",
              "type": "adj.",
              "definition": "Implied."
          },
          {
              "matched": false,
              "word": "imply",
              "type": "v.",
              "definition": "To signify."
          },
          {
              "matched": false,
              "word": "impolitic",
              "type": "adj.",
              "definition": "Inexpedient."
          },
          {
              "matched": false,
              "word": "importation",
              "type": "n.",
              "definition": "The act or practice of bringing from one country into another."
          },
          {
              "matched": false,
              "word": "importunate",
              "type": "adj.",
              "definition": "Urgent in character, request, or demand."
          },
          {
              "matched": false,
              "word": "importune",
              "type": "v.",
              "definition": "To harass with persistent demands or entreaties."
          },
          {
              "matched": false,
              "word": "impotent",
              "type": "adj.",
              "definition": "Destitute of or lacking in power, physical, moral, or intellectual."
          },
          {
              "matched": false,
              "word": "impoverish",
              "type": "v.",
              "definition": "To make indigent or poor."
          },
          {
              "matched": false,
              "word": "impracticable",
              "type": "adj.",
              "definition": "Not feasible."
          },
          {
              "matched": false,
              "word": "impregnable",
              "type": "adj.",
              "definition": "That can not be taken by assault."
          },
          {
              "matched": false,
              "word": "impregnate",
              "type": "v.",
              "definition": "To make pregnant."
          },
          {
              "matched": false,
              "word": "impromptu",
              "type": "n.",
              "definition": "Anything done or said on the impulse of the moment."
          },
          {
              "matched": false,
              "word": "improper",
              "type": "adj.",
              "definition": "Not appropriate, suitable, or becoming."
          },
          {
              "matched": false,
              "word": "impropriety",
              "type": "n.",
              "definition": "The state or quality of being unfit, unseemly, or inappropriate."
          },
          {
              "matched": false,
              "word": "improvident",
              "type": "adj.",
              "definition": "Lacking foresight or thrift."
          },
          {
              "matched": false,
              "word": "improvise",
              "type": "v.",
              "definition": "To do anything extemporaneously or offhand."
          },
          {
              "matched": false,
              "word": "imprudent",
              "type": "adj.",
              "definition": "Heedless."
          },
          {
              "matched": false,
              "word": "impudence",
              "type": "n.",
              "definition": "Insolent disrespect."
          },
          {
              "matched": false,
              "word": "impugn",
              "type": "v.",
              "definition": "To assail with arguments, insinuations, or accusations."
          },
          {
              "matched": false,
              "word": "impulsion",
              "type": "n.",
              "definition": "Impetus."
          },
          {
              "matched": false,
              "word": "impulsive",
              "type": "adj.",
              "definition": "Unpremeditated."
          },
          {
              "matched": false,
              "word": "impunity",
              "type": "n.",
              "definition": "Freedom from punishment."
          },
          {
              "matched": false,
              "word": "impure",
              "type": "adj.",
              "definition": "Tainted."
          },
          {
              "matched": false,
              "word": "impute",
              "type": "v.",
              "definition": "To attribute."
          },
          {
              "matched": false,
              "word": "inaccessible",
              "type": "adj.",
              "definition": "Difficult of approach."
          },
          {
              "matched": false,
              "word": "inaccurate",
              "type": "adj.",
              "definition": "Not exactly according to the facts."
          },
          {
              "matched": false,
              "word": "inactive",
              "type": "adj.",
              "definition": "Inert."
          },
          {
              "matched": false,
              "word": "inadequate",
              "type": "adj.",
              "definition": "Insufficient."
          },
          {
              "matched": false,
              "word": "inadmissible",
              "type": "adj.",
              "definition": "Not to be approved, considered, or allowed, as testimony."
          },
          {
              "matched": false,
              "word": "inadvertent",
              "type": "adj.",
              "definition": "Accidental."
          },
          {
              "matched": false,
              "word": "inadvisable",
              "type": "adj.",
              "definition": "Unadvisable."
          },
          {
              "matched": false,
              "word": "inane",
              "type": "adj.",
              "definition": "Silly."
          },
          {
              "matched": false,
              "word": "inanimate",
              "type": "adj.",
              "definition": "Destitute of animal life."
          },
          {
              "matched": false,
              "word": "inapprehensible",
              "type": "adj.",
              "definition": "Not to be understood."
          },
          {
              "matched": false,
              "word": "inapt",
              "type": "adj.",
              "definition": "Awkward or slow."
          },
          {
              "matched": false,
              "word": "inarticulate",
              "type": "adj.",
              "definition": "Speechless."
          },
          {
              "matched": false,
              "word": "inaudible",
              "type": "adj.",
              "definition": "That can not be heard."
          },
          {
              "matched": false,
              "word": "inborn",
              "type": "adj.",
              "definition": "Implanted by nature."
          },
          {
              "matched": false,
              "word": "inbred",
              "type": "adj.",
              "definition": "Innate."
          },
          {
              "matched": false,
              "word": "incandescence",
              "type": "n.",
              "definition": "The state of being white or glowing with heat."
          },
          {
              "matched": false,
              "word": "incandescent",
              "type": "adj.",
              "definition": "White or glowing with heat."
          },
          {
              "matched": false,
              "word": "incapacitate",
              "type": "v.",
              "definition": "To deprive of power, capacity, competency, or qualification."
          },
          {
              "matched": false,
              "word": "incapacity",
              "type": "n.",
              "definition": "Want of power to apprehend, understand, and manage."
          },
          {
              "matched": false,
              "word": "incarcerate",
              "type": "v.",
              "definition": "To imprison."
          },
          {
              "matched": false,
              "word": "incendiary",
              "type": "n.",
              "definition": "Chemical or person who starts a fire-literally or figuratively."
          },
          {
              "matched": false,
              "word": "incentive",
              "type": "n.",
              "definition": "That which moves the mind or inflames the passions."
          },
          {
              "matched": false,
              "word": "inception",
              "type": "n.",
              "definition": "The beginning."
          },
          {
              "matched": false,
              "word": "inceptive",
              "type": "adj.",
              "definition": "Beginning."
          },
          {
              "matched": false,
              "word": "incessant",
              "type": "adj.",
              "definition": "Unceasing."
          },
          {
              "matched": false,
              "word": "inchmeal",
              "type": "adv.",
              "definition": "Piecemeal."
          },
          {
              "matched": false,
              "word": "inchoate",
              "type": "adj.",
              "definition": "Incipient."
          },
          {
              "matched": false,
              "word": "inchoative",
              "type": "n.",
              "definition": "That which begins, or expresses beginning."
          },
          {
              "matched": false,
              "word": "incidence",
              "type": "n.",
              "definition": "Casual occurrence."
          },
          {
              "matched": false,
              "word": "incident",
              "type": "n.",
              "definition": "A happening in general, especially one of little importance."
          },
          {
              "matched": false,
              "word": "incidentally",
              "type": "adv.",
              "definition": "Without intention."
          },
          {
              "matched": false,
              "word": "incinerate",
              "type": "v.",
              "definition": "To reduce to ashes."
          },
          {
              "matched": false,
              "word": "incipience",
              "type": "n.",
              "definition": "Beginning."
          },
          {
              "matched": false,
              "word": "incipient",
              "type": "adj.",
              "definition": "Initial."
          },
          {
              "matched": false,
              "word": "incisor",
              "type": "n.",
              "definition": "A front or cutting tooth."
          },
          {
              "matched": false,
              "word": "incite",
              "type": "v.",
              "definition": "To rouse to a particular action."
          },
          {
              "matched": false,
              "word": "incitement",
              "type": "n.",
              "definition": "That which moves to action, or serves as an incentive or stimulus."
          },
          {
              "matched": false,
              "word": "incoercible",
              "type": "adj.",
              "definition": "Incapable of being forced, constrained, or compelled."
          },
          {
              "matched": false,
              "word": "incoherence",
              "type": "n.",
              "definition": "Want of connection, or agreement, as of parts or ideas in thought, speech,          "
          },
          {
              "matched": false,
              "word": "incoherent",
              "type": "adj.",
              "definition": "Not logically coordinated, as to parts, elements, or details."
          },
          {
              "matched": false,
              "word": "incombustible",
              "type": "adj.",
              "definition": "That can not be burned."
          },
          {
              "matched": false,
              "word": "incomparable",
              "type": "adj.",
              "definition": "Matchless."
          },
          {
              "matched": false,
              "word": "incompatible",
              "type": "adj.",
              "definition": "Discordant."
          },
          {
              "matched": false,
              "word": "incompetence",
              "type": "n.",
              "definition": "General lack of capacity or fitness."
          },
          {
              "matched": false,
              "word": "incompetent",
              "type": "adj.",
              "definition": "Not having the abilities desired or necessary for any purpose."
          },
          {
              "matched": false,
              "word": "incomplete",
              "type": "adj.",
              "definition": "Lacking some element, part, or adjunct necessary or required."
          },
          {
              "matched": false,
              "word": "incomprehensible",
              "type": "adj.",
              "definition": "Not understandable."
          },
          {
              "matched": false,
              "word": "incompressible",
              "type": "adj.",
              "definition": "Resisting all attempts to reduce volume by pressure."
          },
          {
              "matched": false,
              "word": "inconceivable",
              "type": "adj.",
              "definition": "Incomprehensible."
          },
          {
              "matched": false,
              "word": "incongruous",
              "type": "adj.",
              "definition": "Unsuitable for the time, place, or occasion."
          },
          {
              "matched": false,
              "word": "inconsequential",
              "type": "adj.",
              "definition": "Valueless."
          },
          {
              "matched": false,
              "word": "inconsiderable",
              "type": "adj.",
              "definition": "Small in quantity or importance."
          },
          {
              "matched": false,
              "word": "inconsistent",
              "type": "adj.",
              "definition": "Contradictory."
          },
          {
              "matched": false,
              "word": "inconstant",
              "type": "adj.",
              "definition": "Changeable."
          },
          {
              "matched": false,
              "word": "incontrovertible",
              "type": "adj.",
              "definition": "Indisputable."
          },
          {
              "matched": false,
              "word": "inconvenient",
              "type": "adj.",
              "definition": "Interfering with comfort or progress."
          },
          {
              "matched": false,
              "word": "indefensible",
              "type": "adj.",
              "definition": "Untenable."
          },
          {
              "matched": false,
              "word": "indefinitely",
              "type": "adv.",
              "definition": "In a vague or uncertain way."
          },
          {
              "matched": false,
              "word": "indelible",
              "type": "adj.",
              "definition": "That can not be blotted out, effaced, destroyed, or removed."
          },
          {
              "matched": false,
              "word": "indescribable",
              "type": "adj.",
              "definition": "That can not be described."
          },
          {
              "matched": false,
              "word": "indestructible",
              "type": "adj.",
              "definition": "That can not be destroyed."
          },
          {
              "matched": false,
              "word": "indicant",
              "type": "adj.",
              "definition": "That which points out."
          },
          {
              "matched": false,
              "word": "indicator",
              "type": "n.",
              "definition": "One who or that which points out."
          },
          {
              "matched": false,
              "word": "indict",
              "type": "v.",
              "definition": "To find and declare chargeable with crime."
          },
          {
              "matched": false,
              "word": "indigence",
              "type": "n.",
              "definition": "Poverty."
          },
          {
              "matched": false,
              "word": "indigenous",
              "type": "adj.",
              "definition": "Native."
          },
          {
              "matched": false,
              "word": "indigent",
              "type": "adj.",
              "definition": "Poor."
          },
          {
              "matched": false,
              "word": "indigestible",
              "type": "adj.",
              "definition": "Not digestible, or difficult to digest."
          },
          {
              "matched": false,
              "word": "indigestion",
              "type": "n.",
              "definition": "Difficulty or failure in the alimentary canal in changing food into          "
          },
          {
              "matched": false,
              "word": "indignant",
              "type": "adj.",
              "definition": "Having such anger and scorn as is aroused by meanness or wickedness."
          },
          {
              "matched": false,
              "word": "indignity",
              "type": "n.",
              "definition": "Unmerited contemptuous conduct or treatment."
          },
          {
              "matched": false,
              "word": "indiscernible",
              "type": "adj.",
              "definition": "Not perceptible."
          },
          {
              "matched": false,
              "word": "indiscreet",
              "type": "adj.",
              "definition": "Lacking wise judgment."
          },
          {
              "matched": false,
              "word": "indiscriminate",
              "type": "adj.",
              "definition": "Promiscuous."
          },
          {
              "matched": false,
              "word": "indispensable",
              "type": "adj.",
              "definition": "Necessary or requisite for the purpose."
          },
          {
              "matched": false,
              "word": "indistinct",
              "type": "adj.",
              "definition": "Vague."
          },
          {
              "matched": false,
              "word": "indivertible",
              "type": "adj.",
              "definition": "That can not be turned aside."
          },
          {
              "matched": false,
              "word": "indivisible",
              "type": "adj.",
              "definition": "Not separable into parts."
          },
          {
              "matched": false,
              "word": "indolence",
              "type": "n.",
              "definition": "Laziness."
          },
          {
              "matched": false,
              "word": "indolent",
              "type": "adj.",
              "definition": "Habitually inactive or idle."
          },
          {
              "matched": false,
              "word": "indomitable",
              "type": "adj.",
              "definition": "Unconquerable."
          },
          {
              "matched": false,
              "word": "induct",
              "type": "v.",
              "definition": "To bring in."
          },
          {
              "matched": false,
              "word": "indulgence",
              "type": "n.",
              "definition": "The yielding to inclination, passion, desire, or propensity in oneself or          "
          },
          {
              "matched": false,
              "word": "indulgent",
              "type": "adj.",
              "definition": "Yielding to the desires or humor of oneself or those under one's care."
          },
          {
              "matched": false,
              "word": "inebriate",
              "type": "v.",
              "definition": "To intoxicate."
          },
          {
              "matched": false,
              "word": "inedible",
              "type": "adj.",
              "definition": "Not good for food."
          },
          {
              "matched": false,
              "word": "ineffable",
              "type": "adj.",
              "definition": "Unutterable."
          },
          {
              "matched": false,
              "word": "inefficient",
              "type": "adj.",
              "definition": "Not accomplishing an intended purpose."
          },
          {
              "matched": false,
              "word": "inefficiency",
              "type": "n.",
              "definition": "That which does not accomplish an intended purpose."
          },
          {
              "matched": false,
              "word": "ineligible",
              "type": "adj.",
              "definition": "Not suitable to be selected or chosen."
          },
          {
              "matched": false,
              "word": "inept",
              "type": "adj.",
              "definition": "Not fit or suitable."
          },
          {
              "matched": false,
              "word": "inert",
              "type": "adj.",
              "definition": "Inanimate."
          },
          {
              "matched": false,
              "word": "inestimable",
              "type": "adj.",
              "definition": "Above price."
          },
          {
              "matched": false,
              "word": "inevitable",
              "type": "adj.",
              "definition": "Unavoidable."
          },
          {
              "matched": false,
              "word": "inexcusable",
              "type": "adj.",
              "definition": "Not to be justified."
          },
          {
              "matched": false,
              "word": "inexhaustible",
              "type": "adj.",
              "definition": "So large or furnishing so great a supply as not to be emptied, wasted,          "
          },
          {
              "matched": false,
              "word": "inexorable",
              "type": "adj.",
              "definition": "Unrelenting."
          },
          {
              "matched": false,
              "word": "inexpedient",
              "type": "adj.",
              "definition": "Unadvisable."
          },
          {
              "matched": false,
              "word": "inexpensive",
              "type": "adj.",
              "definition": "Low-priced."
          },
          {
              "matched": false,
              "word": "inexperience",
              "type": "n.",
              "definition": "Lack of or deficiency in experience."
          },
          {
              "matched": false,
              "word": "inexplicable",
              "type": "adj.",
              "definition": "Such as can not be made plain."
          },
          {
              "matched": false,
              "word": "inexpressible",
              "type": "adj.",
              "definition": "Unutterable."
          },
          {
              "matched": false,
              "word": "inextensible",
              "type": "adj.",
              "definition": "Of unchangeable length or area."
          },
          {
              "matched": false,
              "word": "infallible",
              "type": "adj.",
              "definition": "Exempt from error of judgment, as in opinion or statement."
          },
          {
              "matched": false,
              "word": "infamous",
              "type": "adj.",
              "definition": "Publicly branded or notorious, as for vice, or crime."
          },
          {
              "matched": false,
              "word": "infamy",
              "type": "n.",
              "definition": "Total loss or destitution of honor or reputation."
          },
          {
              "matched": false,
              "word": "inference",
              "type": "n.",
              "definition": "The derivation of a judgment from any given material of knowledge on the          "
          },
          {
              "matched": false,
              "word": "infernal",
              "type": "adj.",
              "definition": "Akin to or befitting hell or its occupants."
          },
          {
              "matched": false,
              "word": "infest",
              "type": "v.",
              "definition": "To be present in such numbers as to be a source of annoyance, trouble, or          "
          },
          {
              "matched": false,
              "word": "infidel",
              "type": "n.",
              "definition": "One who denies the existence of God."
          },
          {
              "matched": false,
              "word": "infidelity",
              "type": "n.",
              "definition": "Disloyalty."
          },
          {
              "matched": false,
              "word": "infinite",
              "type": "adj.",
              "definition": "Measureless."
          },
          {
              "matched": false,
              "word": "infinity",
              "type": "n.",
              "definition": "Boundless or immeasurable extension or duration."
          },
          {
              "matched": false,
              "word": "infirm",
              "type": "adj.",
              "definition": "Lacking in bodily or mental strength."
          },
          {
              "matched": false,
              "word": "infirmary",
              "type": "n.",
              "definition": "A place for the reception or treatment of the sick."
          },
          {
              "matched": false,
              "word": "infirmity",
              "type": "n.",
              "definition": "A physical, mental, or moral weakness or flaw."
          },
          {
              "matched": false,
              "word": "inflammable",
              "type": "adj.",
              "definition": "Easily set on fire or excited."
          },
          {
              "matched": false,
              "word": "inflammation",
              "type": "n.",
              "definition": "A morbid process in some part of the body characterized by heat, swelling,          "
          },
          {
              "matched": false,
              "word": "inflexible",
              "type": "adj.",
              "definition": "That can not be altered or varied."
          },
          {
              "matched": false,
              "word": "influence",
              "type": "n.",
              "definition": "Ability to sway the will of another."
          },
          {
              "matched": false,
              "word": "influential",
              "type": "adj.",
              "definition": "Having the power to sway the will of another."
          },
          {
              "matched": false,
              "word": "influx",
              "type": "n.",
              "definition": "Infusion."
          },
          {
              "matched": false,
              "word": "infrequence",
              "type": "n.",
              "definition": "Rareness."
          },
          {
              "matched": false,
              "word": "infrequent",
              "type": "adj.",
              "definition": "Uncommon."
          },
          {
              "matched": false,
              "word": "infringe",
              "type": "v.",
              "definition": "To trespass upon."
          },
          {
              "matched": false,
              "word": "infuse",
              "type": "v.",
              "definition": "To instill, introduce, or inculcate, as principles or qualities."
          },
          {
              "matched": false,
              "word": "infusion",
              "type": "n.",
              "definition": "The act of imbuing, or pouring in."
          },
          {
              "matched": false,
              "word": "ingenious",
              "type": "adj.",
              "definition": "Evincing skill, originality, or cleverness, as in contrivance or          "
          },
          {
              "matched": false,
              "word": "ingenuity",
              "type": "n.",
              "definition": "Cleverness in contriving, combining, or originating."
          },
          {
              "matched": false,
              "word": "ingenuous",
              "type": "adj.",
              "definition": "Candid, frank, or open in character or quality."
          },
          {
              "matched": false,
              "word": "inglorious",
              "type": "adj.",
              "definition": "Shameful."
          },
          {
              "matched": false,
              "word": "ingraft",
              "type": "v.",
              "definition": "To set or implant deeply and firmly."
          },
          {
              "matched": false,
              "word": "ingratiate",
              "type": "v.",
              "definition": "To win confidence or good graces for oneself."
          },
          {
              "matched": false,
              "word": "ingratitude",
              "type": "n.",
              "definition": "Insensibility to kindness."
          },
          {
              "matched": false,
              "word": "ingredient",
              "type": "n.",
              "definition": "Component."
          },
          {
              "matched": false,
              "word": "inherence",
              "type": "n.",
              "definition": "The state of being permanently existing in something."
          },
          {
              "matched": false,
              "word": "inherent",
              "type": "adj.",
              "definition": "Intrinsic."
          },
          {
              "matched": false,
              "word": "inhibit",
              "type": "v.",
              "definition": "To hold back or in."
          },
          {
              "matched": false,
              "word": "inhospitable",
              "type": "adj.",
              "definition": "Not disposed to entertain strangers gratuitously."
          },
          {
              "matched": false,
              "word": "inhuman",
              "type": "adj.",
              "definition": "Savage."
          },
          {
              "matched": false,
              "word": "inhume",
              "type": "v.",
              "definition": "To place in the earth, as a dead body."
          },
          {
              "matched": false,
              "word": "inimical",
              "type": "adj.",
              "definition": "Adverse."
          },
          {
              "matched": false,
              "word": "iniquity",
              "type": "n.",
              "definition": "Gross wrong or injustice."
          },
          {
              "matched": false,
              "word": "initiate",
              "type": "v.",
              "definition": "To perform the first act or rite."
          },
          {
              "matched": false,
              "word": "inject",
              "type": "v.",
              "definition": "To introduce, as a fluid, by injection."
          },
          {
              "matched": false,
              "word": "injunction",
              "type": "n.",
              "definition": "Mandate."
          },
          {
              "matched": false,
              "word": "inkling",
              "type": "n.",
              "definition": "A hint."
          },
          {
              "matched": false,
              "word": "inland",
              "type": "adj.",
              "definition": "Remote from the sea."
          },
          {
              "matched": false,
              "word": "inlet",
              "type": "n.",
              "definition": "A small body of water leading into a larger."
          },
          {
              "matched": false,
              "word": "inmost",
              "type": "adj.",
              "definition": "Deepest within."
          },
          {
              "matched": false,
              "word": "innocuous",
              "type": "adj.",
              "definition": "Harmless."
          },
          {
              "matched": false,
              "word": "innovate",
              "type": "v.",
              "definition": "To introduce or strive to introduce new things."
          },
          {
              "matched": false,
              "word": "innuendo",
              "type": "n.",
              "definition": "Insinuation."
          },
          {
              "matched": false,
              "word": "innumerable",
              "type": "adj.",
              "definition": "Countless."
          },
          {
              "matched": false,
              "word": "inoffensive",
              "type": "adj.",
              "definition": "Causing nothing displeasing or disturbing."
          },
          {
              "matched": false,
              "word": "inopportune",
              "type": "adj.",
              "definition": "Unsuitable or inconvenient, especially as to time."
          },
          {
              "matched": false,
              "word": "inquire",
              "type": "v.",
              "definition": "To ask information about."
          },
          {
              "matched": false,
              "word": "inquisition",
              "type": "n.",
              "definition": "A court or tribunal for examination and punishment of heretics."
          },
          {
              "matched": false,
              "word": "inquisitive",
              "type": "adj.",
              "definition": "Given to questioning, especially out of curiosity."
          },
          {
              "matched": false,
              "word": "inquisitor",
              "type": "n.",
              "definition": "One who makes an investigation."
          },
          {
              "matched": false,
              "word": "inroad",
              "type": "n.",
              "definition": "Forcible encroachment or trespass."
          },
          {
              "matched": false,
              "word": "insatiable",
              "type": "adj.",
              "definition": "That desires or craves immoderately or unappeasably."
          },
          {
              "matched": false,
              "word": "inscribe",
              "type": "v.",
              "definition": "To enter in a book, or on a list, roll, or document, by writing."
          },
          {
              "matched": false,
              "word": "inscrutable",
              "type": "adj.",
              "definition": "Impenetrably mysterious or profound."
          },
          {
              "matched": false,
              "word": "insecure",
              "type": "adj.",
              "definition": "Not assured of safety."
          },
          {
              "matched": false,
              "word": "insensible",
              "type": "adj.",
              "definition": "Imperceptible."
          },
          {
              "matched": false,
              "word": "insentient",
              "type": "adj.",
              "definition": "Lacking the power of feeling or perceiving."
          },
          {
              "matched": false,
              "word": "inseparable",
              "type": "adj.",
              "definition": "That can not be separated."
          },
          {
              "matched": false,
              "word": "insidious",
              "type": "adj.",
              "definition": "Working ill by slow and stealthy means."
          },
          {
              "matched": false,
              "word": "insight",
              "type": "n.",
              "definition": "Intellectual discernment."
          },
          {
              "matched": false,
              "word": "insignificance",
              "type": "n.",
              "definition": "Lack of import or of importance."
          },
          {
              "matched": false,
              "word": "insignificant",
              "type": "adj.",
              "definition": "Without importance, force, or influence."
          },
          {
              "matched": false,
              "word": "insinuate",
              "type": "v.",
              "definition": "To imply."
          },
          {
              "matched": false,
              "word": "insipid",
              "type": "adj.",
              "definition": "Tasteless."
          },
          {
              "matched": false,
              "word": "insistence",
              "type": "n.",
              "definition": "Urgency."
          },
          {
              "matched": false,
              "word": "insistent",
              "type": "adj.",
              "definition": "Urgent."
          },
          {
              "matched": false,
              "word": "insolence",
              "type": "n.",
              "definition": "Pride or haughtiness exhibited in contemptuous and overbearing treatment of          "
          },
          {
              "matched": false,
              "word": "insolent",
              "type": "adj.",
              "definition": "Impudent."
          },
          {
              "matched": false,
              "word": "insomnia",
              "type": "n.",
              "definition": "Sleeplessness."
          },
          {
              "matched": false,
              "word": "inspector",
              "type": "n.",
              "definition": "An official appointed to examine or oversee any matter of public interest or          "
          },
          {
              "matched": false,
              "word": "instance",
              "type": "n.",
              "definition": "A single occurrence or happening of a given kind."
          },
          {
              "matched": false,
              "word": "instant",
              "type": "n.",
              "definition": "A very brief portion of time."
          },
          {
              "matched": false,
              "word": "instantaneous",
              "type": "adj.",
              "definition": "Done without perceptible lapse of time."
          },
          {
              "matched": false,
              "word": "instigate",
              "type": "v.",
              "definition": "To provoke."
          },
          {
              "matched": false,
              "word": "instigator",
              "type": "n.",
              "definition": "One who incites to evil."
          },
          {
              "matched": false,
              "word": "instill",
              "type": "v.",
              "definition": "To infuse."
          },
          {
              "matched": false,
              "word": "instructive",
              "type": "adj.",
              "definition": "Conveying knowledge."
          },
          {
              "matched": false,
              "word": "insufficiency",
              "type": "n.",
              "definition": "Inadequacy."
          },
          {
              "matched": false,
              "word": "insufficient",
              "type": "adj.",
              "definition": "Inadequate for some need, purpose, or use."
          },
          {
              "matched": false,
              "word": "insular",
              "type": "adj.",
              "definition": "Pertaining to an island."
          },
          {
              "matched": false,
              "word": "insulate",
              "type": "v.",
              "definition": "To place in a detached state or situation."
          },
          {
              "matched": false,
              "word": "insuperable",
              "type": "adj.",
              "definition": "Invincible."
          },
          {
              "matched": false,
              "word": "insuppressible",
              "type": "adj.",
              "definition": "Incapable of being concealed."
          },
          {
              "matched": false,
              "word": "insurgence",
              "type": "n.",
              "definition": "Uprising."
          },
          {
              "matched": false,
              "word": "insurgent",
              "type": "n.",
              "definition": "One who takes part in forcible opposition to the constituted authorities of a          "
          },
          {
              "matched": false,
              "word": "insurrection",
              "type": "n.",
              "definition": "The state of being in active resistance to authority."
          },
          {
              "matched": false,
              "word": "intangible",
              "type": "adj.",
              "definition": "Not perceptible to the touch."
          },
          {
              "matched": false,
              "word": "integrity",
              "type": "n.",
              "definition": "Uprightness of character and soundness of moral principle."
          },
          {
              "matched": false,
              "word": "intellect",
              "type": "n.",
              "definition": "The faculty of perception or thought."
          },
          {
              "matched": false,
              "word": "intellectual",
              "type": "adj.",
              "definition": "Characterized by intelligence."
          },
          {
              "matched": false,
              "word": "intelligence",
              "type": "n.",
              "definition": "Capacity to know or understand."
          },
          {
              "matched": false,
              "word": "intelligible",
              "type": "adj.",
              "definition": "Comprehensible."
          },
          {
              "matched": false,
              "word": "intemperance",
              "type": "n.",
              "definition": "Immoderate action or indulgence, as of the appetites."
          },
          {
              "matched": false,
              "word": "intension",
              "type": "n.",
              "definition": "The act of stringing or stretching, or state of being strained."
          },
          {
              "matched": false,
              "word": "intensive",
              "type": "adj.",
              "definition": "Adding emphasis or force."
          },
          {
              "matched": false,
              "word": "intention",
              "type": "n.",
              "definition": "That upon which the mind is set."
          },
          {
              "matched": false,
              "word": "interact",
              "type": "v.",
              "definition": "To act reciprocally."
          },
          {
              "matched": false,
              "word": "intercede",
              "type": "v.",
              "definition": "To mediate between persons."
          },
          {
              "matched": false,
              "word": "intercept",
              "type": "v.",
              "definition": "To interrupt the course of."
          },
          {
              "matched": false,
              "word": "intercession",
              "type": "n.",
              "definition": "Entreaty in behalf of others."
          },
          {
              "matched": false,
              "word": "intercessor",
              "type": "n.",
              "definition": "A mediator."
          },
          {
              "matched": false,
              "word": "interdict",
              "type": "n.",
              "definition": "Authoritative act of prohibition."
          },
          {
              "matched": false,
              "word": "interim",
              "type": "n.",
              "definition": "Time between acts or periods."
          },
          {
              "matched": false,
              "word": "interlocutor",
              "type": "n.",
              "definition": "One who takes part in a conversation or oral discussion."
          },
          {
              "matched": false,
              "word": "interlude",
              "type": "n.",
              "definition": "An action or event considered as coming between others of greater length."
          },
          {
              "matched": false,
              "word": "intermediate",
              "type": "adj.",
              "definition": "Being in a middle place or degree or between extremes."
          },
          {
              "matched": false,
              "word": "interminable",
              "type": "adj.",
              "definition": "Having no limit or end."
          },
          {
              "matched": false,
              "word": "intermission",
              "type": "n.",
              "definition": "A recess."
          },
          {
              "matched": false,
              "word": "intermit",
              "type": "v.",
              "definition": "To cause to cease temporarily."
          },
          {
              "matched": false,
              "word": "intermittent",
              "type": "adj.",
              "definition": "A temporary discontinuance."
          },
          {
              "matched": false,
              "word": "interpolation",
              "type": "n.",
              "definition": "Verbal interference."
          },
          {
              "matched": false,
              "word": "interpose",
              "type": "v.",
              "definition": "To come between other things or persons."
          },
          {
              "matched": false,
              "word": "interposition",
              "type": "n.",
              "definition": "A coming between."
          },
          {
              "matched": false,
              "word": "interpreter",
              "type": "n.",
              "definition": "A person who makes intelligible the speech of a foreigner by oral          "
          },
          {
              "matched": false,
              "word": "interrogate",
              "type": "v.",
              "definition": "To examine formally by questioning."
          },
          {
              "matched": false,
              "word": "interrogative",
              "type": "adj.",
              "definition": "Having the nature or form of a question."
          },
          {
              "matched": false,
              "word": "interrogatory",
              "type": "n.",
              "definition": "A question or inquiry."
          },
          {
              "matched": false,
              "word": "interrupt",
              "type": "v.",
              "definition": "To stop while in progress."
          },
          {
              "matched": false,
              "word": "intersect",
              "type": "v.",
              "definition": "To cut through or into so as to divide."
          },
          {
              "matched": false,
              "word": "intervale",
              "type": "n.",
              "definition": "A low tract of land between hills, especially along a river."
          },
          {
              "matched": false,
              "word": "intervene",
              "type": "v.",
              "definition": "To interfere for some end."
          },
          {
              "matched": false,
              "word": "intestacy",
              "type": "n.",
              "definition": "The condition resulting from one's dying not having made a valid will."
          },
          {
              "matched": false,
              "word": "intestate",
              "type": "adj.",
              "definition": "Not having made a valid will."
          },
          {
              "matched": false,
              "word": "intestine",
              "type": "n.",
              "definition": "That part of the digestive tube below or behind the stomach, extending to the          "
          },
          {
              "matched": false,
              "word": "intimacy",
              "type": "n.",
              "definition": "Close or confidential friendship."
          },
          {
              "matched": false,
              "word": "intimidate",
              "type": "v.",
              "definition": "To cause to become frightened."
          },
          {
              "matched": false,
              "word": "intolerable",
              "type": "adj.",
              "definition": "Insufferable."
          },
          {
              "matched": false,
              "word": "intolerance",
              "type": "n.",
              "definition": "Inability or unwillingness to bear or endure."
          },
          {
              "matched": false,
              "word": "intolerant",
              "type": "adj.",
              "definition": "Bigoted."
          },
          {
              "matched": false,
              "word": "intoxicant",
              "type": "n.",
              "definition": "Anything that unduly exhilarates or excites."
          },
          {
              "matched": false,
              "word": "intoxicate",
              "type": "v.",
              "definition": "To make drunk."
          },
          {
              "matched": false,
              "word": "intracellular",
              "type": "adj.",
              "definition": "Occurring or situated within a cell."
          },
          {
              "matched": false,
              "word": "intramural",
              "type": "adj.",
              "definition": "Situated within the walls of a city."
          },
          {
              "matched": false,
              "word": "intrepid",
              "type": "adj.",
              "definition": "Fearless and bold."
          },
          {
              "matched": false,
              "word": "intricacy",
              "type": "n.",
              "definition": "Perplexity."
          },
          {
              "matched": false,
              "word": "intricate",
              "type": "adj.",
              "definition": "Difficult to follow or understand."
          },
          {
              "matched": false,
              "word": "intrigue",
              "type": "n.",
              "definition": "A plot or scheme, usually complicated and intended to accomplish something by          "
          },
          {
              "matched": false,
              "word": "intrinsic",
              "type": "adj.",
              "definition": "Inherent."
          },
          {
              "matched": false,
              "word": "introductory",
              "type": "adj.",
              "definition": "Preliminary."
          },
          {
              "matched": false,
              "word": "introgression",
              "type": "n.",
              "definition": "Entrance."
          },
          {
              "matched": false,
              "word": "intromit",
              "type": "v.",
              "definition": "To insert."
          },
          {
              "matched": false,
              "word": "introspect",
              "type": "v.",
              "definition": "To look into."
          },
          {
              "matched": false,
              "word": "introspection",
              "type": "n.",
              "definition": "The act of observing and analyzing one's own thoughts and feelings."
          },
          {
              "matched": false,
              "word": "introversion",
              "type": "n.",
              "definition": "The act of turning or directing inward, physically or mentally."
          },
          {
              "matched": false,
              "word": "introvert",
              "type": "v.",
              "definition": "To turn within."
          },
          {
              "matched": false,
              "word": "intrude",
              "type": "v.",
              "definition": "To come in without leave or license."
          },
          {
              "matched": false,
              "word": "intrusion",
              "type": "n.",
              "definition": "The act of entering without warrant or invitation; encroachment."
          },
          {
              "matched": false,
              "word": "intuition",
              "type": "n.",
              "definition": "Instinctive knowledge or feeling."
          },
          {
              "matched": false,
              "word": "inundate",
              "type": "v.",
              "definition": "To fill with an overflowing abundance."
          },
          {
              "matched": false,
              "word": "inundation",
              "type": "n.",
              "definition": "Flood."
          },
          {
              "matched": false,
              "word": "inure",
              "type": "v.",
              "definition": "To harden or toughen by use, exercise, or exposure."
          },
          {
              "matched": false,
              "word": "invalid",
              "type": "adj.",
              "definition": "Having no force, weight, or cogency."
          },
          {
              "matched": false,
              "word": "invalid",
              "type": "n.",
              "definition": "One who is disabled by illness or injury."
          },
          {
              "matched": false,
              "word": "invalidate",
              "type": "v.",
              "definition": "To render of no force or effect."
          },
          {
              "matched": false,
              "word": "invaluable",
              "type": "adj.",
              "definition": "Exceedingly precious."
          },
          {
              "matched": false,
              "word": "invariable",
              "type": "adj.",
              "definition": "Unchangeable."
          },
          {
              "matched": false,
              "word": "invasion",
              "type": "n.",
              "definition": "Encroachment, as by an act of intrusion or trespass."
          },
          {
              "matched": false,
              "word": "invective",
              "type": "n.",
              "definition": "An utterance intended to cast censure, or reproach."
          },
          {
              "matched": false,
              "word": "inveigh",
              "type": "v.",
              "definition": "To utter vehement censure or invective."
          },
          {
              "matched": false,
              "word": "inventive",
              "type": "adj.",
              "definition": "Quick at contrivance."
          },
          {
              "matched": false,
              "word": "inverse",
              "type": "adj.",
              "definition": "Contrary in tendency or direction."
          },
          {
              "matched": false,
              "word": "inversion",
              "type": "n.",
              "definition": "Change of order so that the first shall become last and the last first."
          },
          {
              "matched": false,
              "word": "invert",
              "type": "v.",
              "definition": "To turn inside out, upside down, or in opposite direction."
          },
          {
              "matched": false,
              "word": "investigator",
              "type": "n.",
              "definition": "One who investigates."
          },
          {
              "matched": false,
              "word": "investor",
              "type": "n.",
              "definition": "One who invests money."
          },
          {
              "matched": false,
              "word": "inveterate",
              "type": "adj.",
              "definition": "Habitual."
          },
          {
              "matched": false,
              "word": "invidious",
              "type": "adj.",
              "definition": "Showing or feeling envy."
          },
          {
              "matched": false,
              "word": "invigorate",
              "type": "v.",
              "definition": "To animate."
          },
          {
              "matched": false,
              "word": "invincible",
              "type": "adj.",
              "definition": "Not to be conquered, subdued, or overcome."
          },
          {
              "matched": false,
              "word": "inviolable",
              "type": "adj.",
              "definition": "Incapable of being injured or disturbed."
          },
          {
              "matched": false,
              "word": "invoke",
              "type": "v.",
              "definition": "To call on for assistance or protection."
          },
          {
              "matched": false,
              "word": "involuntary",
              "type": "adj.",
              "definition": "Unwilling."
          },
          {
              "matched": false,
              "word": "involution",
              "type": "n.",
              "definition": "Complication."
          },
          {
              "matched": false,
              "word": "involve",
              "type": "v.",
              "definition": "To draw into entanglement, literally or figuratively."
          },
          {
              "matched": false,
              "word": "invulnerable",
              "type": "adj.",
              "definition": "That can not be wounded or hurt."
          },
          {
              "matched": false,
              "word": "inwardly",
              "type": "adv.",
              "definition": "With no outward manifestation."
          },
          {
              "matched": false,
              "word": "iota",
              "type": "n.",
              "definition": "A small or insignificant mark or part."
          },
          {
              "matched": false,
              "word": "irascible",
              "type": "adj.",
              "definition": "Prone to anger."
          },
          {
              "matched": false,
              "word": "irate",
              "type": "adj.",
              "definition": "Moved to anger."
          },
          {
              "matched": false,
              "word": "ire",
              "type": "n.",
              "definition": "Wrath."
          },
          {
              "matched": false,
              "word": "iridescence",
              "type": "n.",
              "definition": "A many-colored appearance."
          },
          {
              "matched": false,
              "word": "iridescent",
              "type": "adj.",
              "definition": "Exhibiting changing rainbow-colors due to the interference of the light."
          },
          {
              "matched": false,
              "word": "irk",
              "type": "v.",
              "definition": "To afflict with pain, vexation, or fatigue."
          },
          {
              "matched": false,
              "word": "irksome",
              "type": "adj.",
              "definition": "Wearisome."
          },
          {
              "matched": false,
              "word": "irony",
              "type": "n.",
              "definition": "Censure or ridicule under cover of praise or compliment."
          },
          {
              "matched": false,
              "word": "irradiance",
              "type": "n.",
              "definition": "Luster."
          },
          {
              "matched": false,
              "word": "irradiate",
              "type": "v.",
              "definition": "To render clear and intelligible."
          },
          {
              "matched": false,
              "word": "irrational",
              "type": "adj.",
              "definition": "Not possessed of reasoning powers or understanding."
          },
          {
              "matched": false,
              "word": "irreducible",
              "type": "adj.",
              "definition": "That can not be lessened."
          },
          {
              "matched": false,
              "word": "irrefragable",
              "type": "adj.",
              "definition": "That can not be refuted or disproved."
          },
          {
              "matched": false,
              "word": "irrefrangible",
              "type": "adj.",
              "definition": "That can not be broken or violated."
          },
          {
              "matched": false,
              "word": "irrelevant",
              "type": "adj.",
              "definition": "Inapplicable."
          },
          {
              "matched": false,
              "word": "irreligious",
              "type": "adj.",
              "definition": "Indifferent or opposed to religion."
          },
          {
              "matched": false,
              "word": "irreparable",
              "type": "adj.",
              "definition": "That can not be rectified or made amends for."
          },
          {
              "matched": false,
              "word": "irrepressible",
              "type": "adj.",
              "definition": "That can not be restrained or kept down."
          },
          {
              "matched": false,
              "word": "irresistible",
              "type": "adj.",
              "definition": "That can not be successfully withstood or opposed."
          },
          {
              "matched": false,
              "word": "irresponsible",
              "type": "adj.",
              "definition": "Careless of or unable to meet responsibilities."
          },
          {
              "matched": false,
              "word": "irreverence",
              "type": "n.",
              "definition": "The quality showing or expressing a deficiency of veneration, especially          "
          },
          {
              "matched": false,
              "word": "irreverent",
              "type": "adj.",
              "definition": "Showing or expressing a deficiency of veneration, especially for sacred          "
          },
          {
              "matched": false,
              "word": "irreverential",
              "type": "adj.",
              "definition": "Showing or expressing a deficiency of veneration, especially for sacred          "
          },
          {
              "matched": false,
              "word": "irreversible",
              "type": "adj.",
              "definition": "Irrevocable."
          },
          {
              "matched": false,
              "word": "irrigant",
              "type": "adj.",
              "definition": "Serving to water lands by artificial means."
          },
          {
              "matched": false,
              "word": "irrigate",
              "type": "v.",
              "definition": "To water, as land, by ditches or other artificial means."
          },
          {
              "matched": false,
              "word": "irritable",
              "type": "adj.",
              "definition": "Showing impatience or ill temper on little provocation."
          },
          {
              "matched": false,
              "word": "irritancy",
              "type": "n.",
              "definition": "The quality of producing vexation."
          },
          {
              "matched": false,
              "word": "irritant",
              "type": "n.",
              "definition": "A mechanical, chemical, or pathological agent of inflammation, pain, or          "
          },
          {
              "matched": false,
              "word": "irritate",
              "type": "v.",
              "definition": "To excite ill temper or impatience in."
          },
          {
              "matched": false,
              "word": "irruption",
              "type": "n.",
              "definition": "Sudden invasion."
          },
          {
              "matched": false,
              "word": "isle",
              "type": "n.",
              "definition": "An island."
          },
          {
              "matched": false,
              "word": "islet",
              "type": "n.",
              "definition": "A little island."
          },
          {
              "matched": false,
              "word": "isobar",
              "type": "n.",
              "definition": "A line joining points at which the barometric pressure is the same at a          "
          },
          {
              "matched": false,
              "word": "isochronous",
              "type": "adj.",
              "definition": "Relating to or denoting equal intervals of time."
          },
          {
              "matched": false,
              "word": "isolate",
              "type": "v.",
              "definition": "To separate from others of its kind."
          },
          {
              "matched": false,
              "word": "isothermal",
              "type": "adj.",
              "definition": "Having or marking equality of temperature."
          },
          {
              "matched": false,
              "word": "itinerant",
              "type": "adj.",
              "definition": "Wandering."
          },
          {
              "matched": false,
              "word": "itinerary",
              "type": "n.",
              "definition": "A detailed account or diary of a journey."
          },
          {
              "matched": false,
              "word": "itinerate",
              "type": "v.",
              "definition": "To wander from place to place."
          },
          {
              "matched": false,
              "word": "jargon",
              "type": "n.",
              "definition": "Confused, unintelligible speech or highly technical speech."
          },
          {
              "matched": false,
              "word": "jaundice",
              "type": "n.",
              "definition": "A morbid condition, due to obstructed excretion of bile or characterized by          "
          },
          {
              "matched": false,
              "word": "jeopardize",
              "type": "v.",
              "definition": "To imperil."
          },
          {
              "matched": false,
              "word": "Jingo",
              "type": "n.",
              "definition": "One of a party in Great Britain in favor of spirited and demonstrative foreign          "
          },
          {
              "matched": false,
              "word": "jocose",
              "type": "adj.",
              "definition": "Done or made in jest."
          },
          {
              "matched": false,
              "word": "jocular",
              "type": "adj.",
              "definition": "Inclined to joke."
          },
          {
              "matched": false,
              "word": "joggle",
              "type": "n.",
              "definition": "A sudden irregular shake or a push causing such a shake."
          },
          {
              "matched": false,
              "word": "journalize",
              "type": "v.",
              "definition": "To keep a diary."
          },
          {
              "matched": false,
              "word": "jovial",
              "type": "adj.",
              "definition": "Merry."
          },
          {
              "matched": false,
              "word": "jubilation",
              "type": "n.",
              "definition": "Exultation."
          },
          {
              "matched": false,
              "word": "judgment",
              "type": "n.",
              "definition": "The faculty by the exercise of which a deliberate conclusion is reached."
          },
          {
              "matched": false,
              "word": "judicature",
              "type": "n.",
              "definition": "Distribution and administration of justice by trial and judgment."
          },
          {
              "matched": false,
              "word": "judicial",
              "type": "adj.",
              "definition": "Pertaining to the administration of justice."
          },
          {
              "matched": false,
              "word": "judiciary",
              "type": "n.",
              "definition": "That department of government which administers the law relating to civil and          "
          },
          {
              "matched": false,
              "word": "judicious",
              "type": "adj.",
              "definition": "Prudent."
          },
          {
              "matched": false,
              "word": "juggle",
              "type": "v.",
              "definition": "To play tricks of sleight of hand."
          },
          {
              "matched": false,
              "word": "jugglery",
              "type": "n.",
              "definition": "The art or practice of sleight of hand."
          },
          {
              "matched": false,
              "word": "jugular",
              "type": "adj.",
              "definition": "Pertaining to the throat."
          },
          {
              "matched": false,
              "word": "juicy",
              "type": "adj.",
              "definition": "Succulent."
          },
          {
              "matched": false,
              "word": "junction",
              "type": "n.",
              "definition": "The condition of being joined."
          },
          {
              "matched": false,
              "word": "juncture",
              "type": "n.",
              "definition": "An articulation, joint, or seam."
          },
          {
              "matched": false,
              "word": "junta",
              "type": "n.",
              "definition": "A council or assembly that deliberates in secret upon the affairs of government."
          },
          {
              "matched": false,
              "word": "juridical",
              "type": "adj.",
              "definition": "Assumed by law to exist."
          },
          {
              "matched": false,
              "word": "jurisdiction",
              "type": "n.",
              "definition": "Lawful power or right to exercise official authority."
          },
          {
              "matched": false,
              "word": "jurisprudence",
              "type": "n.",
              "definition": "The science of rights in accordance with positive law."
          },
          {
              "matched": false,
              "word": "juror",
              "type": "n.",
              "definition": "One who serves on a jury or is sworn in for jury duty in a court of justice."
          },
          {
              "matched": false,
              "word": "joust",
              "type": "v.",
              "definition": "To engage in a tilt with lances on horseback."
          },
          {
              "matched": false,
              "word": "justification",
              "type": "n.",
              "definition": "Vindication."
          },
          {
              "matched": false,
              "word": "juvenile",
              "type": "adj.",
              "definition": "Characteristic of youth."
          },
          {
              "matched": false,
              "word": "juxtapose",
              "type": "v.",
              "definition": "To place close together."
          },
          {
              "matched": false,
              "word": "keepsake",
              "type": "n.",
              "definition": "Anything kept or given to be kept for the sake of the giver."
          },
          {
              "matched": false,
              "word": "kerchief",
              "type": "n.",
              "definition": "A square of linen, silk, or other material, used as a covering for the head or          "
          },
          {
              "matched": false,
              "word": "kernel",
              "type": "n.",
              "definition": "A grain or seed."
          },
          {
              "matched": false,
              "word": "kiln",
              "type": "n.",
              "definition": "An oven or furnace for baking, burning, or drying industrial products."
          },
          {
              "matched": false,
              "word": "kiloliter",
              "type": "n.",
              "definition": "One thousand liters."
          },
          {
              "matched": false,
              "word": "kilometer",
              "type": "n.",
              "definition": "A length of 1,000 meters."
          },
          {
              "matched": false,
              "word": "kilowatt",
              "type": "n.",
              "definition": "One thousand watts."
          },
          {
              "matched": false,
              "word": "kimono",
              "type": "n.",
              "definition": "A loose robe, fastening with a sash, the principal outer garment in Japan."
          },
          {
              "matched": false,
              "word": "kind-hearted",
              "type": "adj.",
              "definition": "Having a kind and sympathetic nature."
          },
          {
              "matched": false,
              "word": "kingling",
              "type": "n.",
              "definition": "A petty king."
          },
          {
              "matched": false,
              "word": "kingship",
              "type": "n.",
              "definition": "Royal state."
          },
          {
              "matched": false,
              "word": "kinsfolk",
              "type": "n.",
              "definition": "pl. Relatives."
          },
          {
              "matched": false,
              "word": "knavery",
              "type": "n.",
              "definition": "Deceitfulness in dealing."
          },
          {
              "matched": false,
              "word": "knead",
              "type": "v.",
              "definition": "To mix and work into a homogeneous mass, especially with the hands."
          },
          {
              "matched": false,
              "word": "knickknack",
              "type": "n.",
              "definition": "A small article, more for ornament that use."
          },
          {
              "matched": false,
              "word": "knight errant",
              "type": "n.",
              "definition": "One of the wandering knights who in the middle ages went forth in search          "
          },
          {
              "matched": false,
              "word": "knighthood",
              "type": "n.",
              "definition": "Chivalry."
          },
          {
              "matched": false,
              "word": "laborious",
              "type": "adj.",
              "definition": "Toilsome."
          },
          {
              "matched": false,
              "word": "labyrinth",
              "type": "n.",
              "definition": "A maze."
          },
          {
              "matched": false,
              "word": "lacerate",
              "type": "v.",
              "definition": "To tear rudely or raggedly."
          },
          {
              "matched": false,
              "word": "lackadaisical",
              "type": "adj.",
              "definition": "Listless."
          },
          {
              "matched": false,
              "word": "lactation",
              "type": "n.",
              "definition": "The secretion of milk."
          },
          {
              "matched": false,
              "word": "lacteal",
              "type": "adj.",
              "definition": "Milky."
          },
          {
              "matched": false,
              "word": "lactic",
              "type": "adj.",
              "definition": "Pertaining to milk."
          },
          {
              "matched": false,
              "word": "laddie",
              "type": "n.",
              "definition": "A lad."
          },
          {
              "matched": false,
              "word": "ladle",
              "type": "n.",
              "definition": "A cup-shaped vessel with a long handle, intended for dipping up and pouring          "
          },
          {
              "matched": false,
              "word": "laggard",
              "type": "adj.",
              "definition": "Falling behind."
          },
          {
              "matched": false,
              "word": "landholder",
              "type": "n.",
              "definition": "Landowner."
          },
          {
              "matched": false,
              "word": "landlord",
              "type": "n.",
              "definition": "A man who owns and lets a tenement or tenements."
          },
          {
              "matched": false,
              "word": "landmark",
              "type": "n.",
              "definition": "A familiar object in the landscape serving as a guide to an area otherwise          "
          },
          {
              "matched": false,
              "word": "landscape",
              "type": "n.",
              "definition": "A rural view, especially one of picturesque effect, as seen from a distance          "
          },
          {
              "matched": false,
              "word": "languid",
              "type": "adj.",
              "definition": "Relaxed."
          },
          {
              "matched": false,
              "word": "languor",
              "type": "n.",
              "definition": "Lassitude of body or depression."
          },
          {
              "matched": false,
              "word": "lapse",
              "type": "n.",
              "definition": "A slight deviation from what is right, proper, or just."
          },
          {
              "matched": false,
              "word": "lascivious",
              "type": "adj.",
              "definition": "Lustful."
          },
          {
              "matched": false,
              "word": "lassie",
              "type": "n.",
              "definition": "A little lass."
          },
          {
              "matched": false,
              "word": "latent",
              "type": "adj.",
              "definition": "Dormant."
          },
          {
              "matched": false,
              "word": "latency",
              "type": "n.",
              "definition": "The state of being dormant."
          },
          {
              "matched": false,
              "word": "later",
              "type": "adv.",
              "definition": "At a subsequent time."
          },
          {
              "matched": false,
              "word": "lateral",
              "type": "adj.",
              "definition": "Directed toward the side."
          },
          {
              "matched": false,
              "word": "latish",
              "type": "adj.",
              "definition": "Rather late."
          },
          {
              "matched": false,
              "word": "lattice",
              "type": "n.",
              "definition": "Openwork of metal or wood, formed by crossing or interlacing strips or bars."
          },
          {
              "matched": false,
              "word": "laud",
              "type": "v.",
              "definition": "To praise in words or song."
          },
          {
              "matched": false,
              "word": "laudable",
              "type": "adj.",
              "definition": "Praiseworthy."
          },
          {
              "matched": false,
              "word": "laudation",
              "type": "n.",
              "definition": "High praise."
          },
          {
              "matched": false,
              "word": "laudatory",
              "type": "adj.",
              "definition": "Pertaining to, expressing, or containing praise."
          },
          {
              "matched": false,
              "word": "laundress",
              "type": "n.",
              "definition": "Washerwoman."
          },
          {
              "matched": false,
              "word": "laureate",
              "type": "adj.",
              "definition": "Crowned with laurel, as a mark of distinction."
          },
          {
              "matched": false,
              "word": "lave",
              "type": "v.",
              "definition": "To wash or bathe."
          },
          {
              "matched": false,
              "word": "lawgiver",
              "type": "n.",
              "definition": "A legislator."
          },
          {
              "matched": false,
              "word": "lawmaker",
              "type": "n.",
              "definition": "A legislator."
          },
          {
              "matched": false,
              "word": "lax",
              "type": "adj.",
              "definition": "Not stringent or energetic."
          },
          {
              "matched": false,
              "word": "laxative",
              "type": "adj.",
              "definition": "Having power to open or loosen the bowels."
          },
          {
              "matched": false,
              "word": "lea",
              "type": "n.",
              "definition": "A field."
          },
          {
              "matched": false,
              "word": "leaflet",
              "type": "n.",
              "definition": "A little leaf or a booklet."
          },
          {
              "matched": false,
              "word": "leaven",
              "type": "v.",
              "definition": "To make light by fermentation, as dough."
          },
          {
              "matched": false,
              "word": "leeward",
              "type": "n.",
              "definition": "That side or direction toward which the wind blows."
          },
          {
              "matched": false,
              "word": "left-handed",
              "type": "adj.",
              "definition": "Using the left hand or arm more dexterously than the right."
          },
          {
              "matched": false,
              "word": "legacy",
              "type": "n.",
              "definition": "A bequest."
          },
          {
              "matched": false,
              "word": "legalize",
              "type": "v.",
              "definition": "To give the authority of law to."
          },
          {
              "matched": false,
              "word": "legging",
              "type": "n.",
              "definition": "A covering for the leg."
          },
          {
              "matched": false,
              "word": "legible",
              "type": "adj.",
              "definition": "That may be read with ease."
          },
          {
              "matched": false,
              "word": "legionary",
              "type": "n.",
              "definition": "A member of an ancient Roman legion or of the modern French Legion of Honor."
          },
          {
              "matched": false,
              "word": "legislate",
              "type": "v.",
              "definition": "To make or enact a law or laws."
          },
          {
              "matched": false,
              "word": "legislative",
              "type": "adj.",
              "definition": "That makes or enacts laws."
          },
          {
              "matched": false,
              "word": "legislator",
              "type": "n.",
              "definition": "A lawgiver."
          },
          {
              "matched": false,
              "word": "legitimacy",
              "type": "n.",
              "definition": "Accordance with law."
          },
          {
              "matched": false,
              "word": "legitimate",
              "type": "adj.",
              "definition": "Having the sanction of law or established custom."
          },
          {
              "matched": false,
              "word": "leisure",
              "type": "n.",
              "definition": "Spare time."
          },
          {
              "matched": false,
              "word": "leniency",
              "type": "n.",
              "definition": "Forbearance."
          },
          {
              "matched": false,
              "word": "lenient",
              "type": "adj.",
              "definition": "Not harsh."
          },
          {
              "matched": false,
              "word": "leonine",
              "type": "adj.",
              "definition": "Like a lion."
          },
          {
              "matched": false,
              "word": "lethargy",
              "type": "n.",
              "definition": "Prolonged sluggishness of body or mind."
          },
          {
              "matched": false,
              "word": "levee",
              "type": "n.",
              "definition": "An embankment beside a river or stream or an arm of the sea, to prevent overflow."
          },
          {
              "matched": false,
              "word": "lever",
              "type": "n.",
              "definition": "That which exerts, or through which one may exert great power."
          },
          {
              "matched": false,
              "word": "leviathan",
              "type": "n.",
              "definition": "Any large animal, as a whale."
          },
          {
              "matched": false,
              "word": "levity",
              "type": "n.",
              "definition": "Frivolity."
          },
          {
              "matched": false,
              "word": "levy",
              "type": "v.",
              "definition": "To impose and collect by force or threat of force."
          },
          {
              "matched": false,
              "word": "lewd",
              "type": "adj.",
              "definition": "Characterized by lust or lasciviousness."
          },
          {
              "matched": false,
              "word": "lexicographer",
              "type": "n.",
              "definition": "One who makes dictionaries."
          },
          {
              "matched": false,
              "word": "lexicography",
              "type": "n.",
              "definition": "The making of dictionaries."
          },
          {
              "matched": false,
              "word": "lexicon",
              "type": "n.",
              "definition": "A dictionary."
          },
          {
              "matched": false,
              "word": "liable",
              "type": "adj.",
              "definition": "Justly or legally responsible."
          },
          {
              "matched": false,
              "word": "libel",
              "type": "n.",
              "definition": "Defamation."
          },
          {
              "matched": false,
              "word": "liberalism",
              "type": "n.",
              "definition": "Opposition to conservatism."
          },
          {
              "matched": false,
              "word": "liberate",
              "type": "v.",
              "definition": "To set free or release from bondage."
          },
          {
              "matched": false,
              "word": "licentious",
              "type": "adj.",
              "definition": "Wanton."
          },
          {
              "matched": false,
              "word": "licit",
              "type": "adj.",
              "definition": "Lawful."
          },
          {
              "matched": false,
              "word": "liege",
              "type": "adj.",
              "definition": "Sovereign."
          },
          {
              "matched": false,
              "word": "lien",
              "type": "n.",
              "definition": "A legal claim or hold on property, as security for a debt or charge."
          },
          {
              "matched": false,
              "word": "lieu",
              "type": "n.",
              "definition": "Stead."
          },
          {
              "matched": false,
              "word": "lifelike",
              "type": "adj.",
              "definition": "Realistic."
          },
          {
              "matched": false,
              "word": "lifelong",
              "type": "adj.",
              "definition": "Lasting or continuous through life."
          },
          {
              "matched": false,
              "word": "lifetime",
              "type": "n.",
              "definition": "The time that life continues."
          },
          {
              "matched": false,
              "word": "ligament",
              "type": "n.",
              "definition": "That which binds objects together."
          },
          {
              "matched": false,
              "word": "ligature",
              "type": "n.",
              "definition": "Anything that constricts, or serves for binding or tying."
          },
          {
              "matched": false,
              "word": "light-hearted",
              "type": "adj.",
              "definition": "Free from care."
          },
          {
              "matched": false,
              "word": "ligneous",
              "type": "adj.",
              "definition": "Having the texture of appearance of wood."
          },
          {
              "matched": false,
              "word": "likelihood",
              "type": "n.",
              "definition": "A probability."
          },
          {
              "matched": false,
              "word": "likely",
              "type": "adj.",
              "definition": "Plausible."
          },
          {
              "matched": false,
              "word": "liking",
              "type": "n.",
              "definition": "Fondness."
          },
          {
              "matched": false,
              "word": "limitation",
              "type": "n.",
              "definition": "A restriction."
          },
          {
              "matched": false,
              "word": "linear",
              "type": "adj.",
              "definition": "Of the nature of a line."
          },
          {
              "matched": false,
              "word": "liner",
              "type": "n.",
              "definition": "A vessel belonging to a steamship-line."
          },
          {
              "matched": false,
              "word": "lingo",
              "type": "n.",
              "definition": "Language."
          },
          {
              "matched": false,
              "word": "lingua",
              "type": "n.",
              "definition": "The tongue."
          },
          {
              "matched": false,
              "word": "lingual",
              "type": "adj.",
              "definition": "Pertaining to the use of the tongue in utterance."
          },
          {
              "matched": false,
              "word": "linguist",
              "type": "n.",
              "definition": "One who is acquainted with several languages."
          },
          {
              "matched": false,
              "word": "linguistics",
              "type": "n.",
              "definition": "The science of languages, or of the origin, history, and significance of          "
          },
          {
              "matched": false,
              "word": "liniment",
              "type": "n.",
              "definition": "A liquid preparation for rubbing on the skin in cases of bruises,          "
          },
          {
              "matched": false,
              "word": "liquefacient",
              "type": "adj.",
              "definition": "Possessing a liquefying nature or power."
          },
          {
              "matched": false,
              "word": "liquefy",
              "type": "v.",
              "definition": "To convert into a liquid or into liquid form."
          },
          {
              "matched": false,
              "word": "liqueur",
              "type": "n.",
              "definition": "An alcoholic cordial sweetened and flavored with aromatic substances."
          },
          {
              "matched": false,
              "word": "liquidate",
              "type": "v.",
              "definition": "To deliver the amount or value of."
          },
          {
              "matched": false,
              "word": "liquor",
              "type": "n.",
              "definition": "Any alcoholic or intoxicating liquid."
          },
          {
              "matched": false,
              "word": "listless",
              "type": "adj.",
              "definition": "Inattentive."
          },
          {
              "matched": false,
              "word": "literacy",
              "type": "n.",
              "definition": "The state or condition of knowing how to read and write."
          },
          {
              "matched": false,
              "word": "literal",
              "type": "adj.",
              "definition": "Following the exact words."
          },
          {
              "matched": false,
              "word": "literature",
              "type": "n.",
              "definition": "The written or printed productions of the human mind collectively."
          },
          {
              "matched": false,
              "word": "lithe",
              "type": "adj.",
              "definition": "Supple."
          },
          {
              "matched": false,
              "word": "lithesome",
              "type": "adj.",
              "definition": "Nimble."
          },
          {
              "matched": false,
              "word": "lithograph",
              "type": "n.",
              "definition": "A print made by printing from stone."
          },
          {
              "matched": false,
              "word": "lithotype",
              "type": "n.",
              "definition": "In engraving, an etched stone surface for printing."
          },
          {
              "matched": false,
              "word": "litigant",
              "type": "n.",
              "definition": "A party to a lawsuit."
          },
          {
              "matched": false,
              "word": "litigate",
              "type": "v.",
              "definition": "To cause to become the subject-matter of a suit at law."
          },
          {
              "matched": false,
              "word": "litigious",
              "type": "adj.",
              "definition": "Quarrelsome."
          },
          {
              "matched": false,
              "word": "littoral",
              "type": "adj.",
              "definition": "Of, pertaining to, or living on a shore."
          },
          {
              "matched": false,
              "word": "liturgy",
              "type": "n.",
              "definition": "A ritual."
          },
          {
              "matched": false,
              "word": "livelihood",
              "type": "n.",
              "definition": "Means of subsistence."
          },
          {
              "matched": false,
              "word": "livid",
              "type": "adj.",
              "definition": "Black-and-blue, as contused flesh."
          },
          {
              "matched": false,
              "word": "loam",
              "type": "n.",
              "definition": "A non-coherent mixture of sand and clay."
          },
          {
              "matched": false,
              "word": "loath",
              "type": "adj.",
              "definition": "Averse."
          },
          {
              "matched": false,
              "word": "loathe",
              "type": "v.",
              "definition": "To abominate."
          },
          {
              "matched": false,
              "word": "locative",
              "type": "adj.",
              "definition": "Indicating place, or the place where or wherein an action occurs."
          },
          {
              "matched": false,
              "word": "loch",
              "type": "n.",
              "definition": "A lake."
          },
          {
              "matched": false,
              "word": "locomotion",
              "type": "n.",
              "definition": "The act or power of moving from one place to another."
          },
          {
              "matched": false,
              "word": "lode",
              "type": "n.",
              "definition": "A somewhat continuous unstratified metal- bearing vein."
          },
          {
              "matched": false,
              "word": "lodgment",
              "type": "n.",
              "definition": "The act of furnishing with temporary quarters."
          },
          {
              "matched": false,
              "word": "logic",
              "type": "n.",
              "definition": "The science of correct thinking."
          },
          {
              "matched": false,
              "word": "logical",
              "type": "adj.",
              "definition": "Capable of or characterized by clear reasoning."
          },
          {
              "matched": false,
              "word": "logician",
              "type": "n.",
              "definition": "An expert reasoner."
          },
          {
              "matched": false,
              "word": "loiterer",
              "type": "n.",
              "definition": "One who consumes time idly."
          },
          {
              "matched": false,
              "word": "loneliness",
              "type": "n.",
              "definition": "Solitude."
          },
          {
              "matched": false,
              "word": "longevity",
              "type": "n.",
              "definition": "Unusually prolonged life."
          },
          {
              "matched": false,
              "word": "loot",
              "type": "v.",
              "definition": "To plunder."
          },
          {
              "matched": false,
              "word": "loquacious",
              "type": "adj.",
              "definition": "Talkative."
          },
          {
              "matched": false,
              "word": "lordling",
              "type": "n.",
              "definition": "A little lord."
          },
          {
              "matched": false,
              "word": "lough",
              "type": "n.",
              "definition": "A lake or loch."
          },
          {
              "matched": false,
              "word": "louse",
              "type": "n.",
              "definition": "A small insect parasitic on and sucking the blood of mammals."
          },
          {
              "matched": false,
              "word": "lovable",
              "type": "adj.",
              "definition": "Amiable."
          },
          {
              "matched": false,
              "word": "low-spirited",
              "type": "adj.",
              "definition": "Despondent."
          },
          {
              "matched": false,
              "word": "lowly",
              "type": "adv.",
              "definition": "Rudely."
          },
          {
              "matched": false,
              "word": "lucid",
              "type": "adj.",
              "definition": "Mentally sound."
          },
          {
              "matched": false,
              "word": "lucrative",
              "type": "adj.",
              "definition": "Highly profitable."
          },
          {
              "matched": false,
              "word": "ludicrous",
              "type": "adj.",
              "definition": "Laughable."
          },
          {
              "matched": false,
              "word": "luminary",
              "type": "n.",
              "definition": "One of the heavenly bodies as a source of light."
          },
          {
              "matched": false,
              "word": "luminescent",
              "type": "adj.",
              "definition": "Showing increase of light."
          },
          {
              "matched": false,
              "word": "luminescence",
              "type": "n.",
              "definition": "Showing increase."
          },
          {
              "matched": false,
              "word": "luminosity",
              "type": "n.",
              "definition": "The quality of giving or radiating light."
          },
          {
              "matched": false,
              "word": "luminous",
              "type": "adj.",
              "definition": "Giving or radiating light."
          },
          {
              "matched": false,
              "word": "lunacy",
              "type": "n.",
              "definition": "Mental unsoundness."
          },
          {
              "matched": false,
              "word": "lunar",
              "type": "adj.",
              "definition": "Pertaining to the moon."
          },
          {
              "matched": false,
              "word": "lunatic",
              "type": "n.",
              "definition": "An insane person."
          },
          {
              "matched": false,
              "word": "lune",
              "type": "n.",
              "definition": "The moon."
          },
          {
              "matched": false,
              "word": "lurid",
              "type": "adj.",
              "definition": "Ghastly and sensational."
          },
          {
              "matched": false,
              "word": "luscious",
              "type": "adj.",
              "definition": "Rich, sweet, and delicious."
          },
          {
              "matched": false,
              "word": "lustrous",
              "type": "adj.",
              "definition": "Shining."
          },
          {
              "matched": false,
              "word": "luxuriance",
              "type": "n.",
              "definition": "Excessive or superfluous growth or quantity."
          },
          {
              "matched": false,
              "word": "luxuriant",
              "type": "adj.",
              "definition": "Abundant or superabundant in growth."
          },
          {
              "matched": false,
              "word": "luxuriate",
              "type": "v.",
              "definition": "To live sumptuously."
          },
          {
              "matched": false,
              "word": "lying",
              "type": "n.",
              "definition": "Untruthfulness."
          },
          {
              "matched": false,
              "word": "lyre",
              "type": "n.",
              "definition": "One of the most ancient of stringed instruments of the harp class."
          },
          {
              "matched": false,
              "word": "lyric",
              "type": "adj.",
              "definition": "Fitted for expression in song."
          },
          {
              "matched": false,
              "word": "macadamize",
              "type": "v.",
              "definition": "To cover or pave, as a path or roadway, with small broken stone."
          },
          {
              "matched": false,
              "word": "machinery",
              "type": "n.",
              "definition": "The parts of a machine or engine, taken collectively."
          },
          {
              "matched": false,
              "word": "machinist",
              "type": "n.",
              "definition": "One who makes or repairs machines, or uses metal-working tools."
          },
          {
              "matched": false,
              "word": "macrocosm",
              "type": "n.",
              "definition": "The whole of any sphere or department of nature or knowledge to which man is          "
          },
          {
              "matched": false,
              "word": "madden",
              "type": "v.",
              "definition": "To inflame with passion."
          },
          {
              "matched": false,
              "word": "Madonna",
              "type": "n.",
              "definition": "A painted or sculptured representation of the Virgin, usually with the infant          "
          },
          {
              "matched": false,
              "word": "magician",
              "type": "n.",
              "definition": "A sorcerer."
          },
          {
              "matched": false,
              "word": "magisterial",
              "type": "adj.",
              "definition": "Having an air of authority."
          },
          {
              "matched": false,
              "word": "magistracy",
              "type": "n.",
              "definition": "The office or dignity of a magistrate."
          },
          {
              "matched": false,
              "word": "magnanimous",
              "type": "adj.",
              "definition": "Generous in treating or judging others."
          },
          {
              "matched": false,
              "word": "magnate",
              "type": "n.",
              "definition": "A person of rank or importance."
          },
          {
              "matched": false,
              "word": "magnet",
              "type": "n.",
              "definition": "A body possessing that peculiar form of polarity found in nature in the          "
          },
          {
              "matched": false,
              "word": "magnetize",
              "type": "v.",
              "definition": "To make a magnet of, permanently, or temporarily."
          },
          {
              "matched": false,
              "word": "magnificence",
              "type": "n.",
              "definition": "The exhibition of greatness of action, character, intellect, wealth, or          "
          },
          {
              "matched": false,
              "word": "magnificent",
              "type": "adj.",
              "definition": "Grand or majestic in appearance, quality, or action."
          },
          {
              "matched": false,
              "word": "magnitude",
              "type": "n.",
              "definition": "Importance."
          },
          {
              "matched": false,
              "word": "maharaja",
              "type": "n.",
              "definition": "A great Hindu prince."
          },
          {
              "matched": false,
              "word": "maidenhood",
              "type": "n.",
              "definition": "Virginity."
          },
          {
              "matched": false,
              "word": "maintain",
              "type": "v.",
              "definition": "To hold or preserve in any particular state or condition."
          },
          {
              "matched": false,
              "word": "maintenance",
              "type": "n.",
              "definition": "That which supports or sustains."
          },
          {
              "matched": false,
              "word": "maize",
              "type": "n.",
              "definition": "Indian corn: usually in the United States called simply corn."
          },
          {
              "matched": false,
              "word": "makeup",
              "type": "n.",
              "definition": "The arrangements or combination of the parts of which anything is composed."
          },
          {
              "matched": false,
              "word": "malady",
              "type": "n.",
              "definition": "Any physical disease or disorder, especially a chronic or deep-seated one."
          },
          {
              "matched": false,
              "word": "malaria",
              "type": "n.",
              "definition": "A fever characterized by alternating chills, fever, and sweating."
          },
          {
              "matched": false,
              "word": "malcontent",
              "type": "n.",
              "definition": "One who is dissatisfied with the existing state of affairs."
          },
          {
              "matched": false,
              "word": "malediction",
              "type": "n.",
              "definition": "The calling down of a curse or curses."
          },
          {
              "matched": false,
              "word": "malefactor",
              "type": "n.",
              "definition": "One who injures another."
          },
          {
              "matched": false,
              "word": "maleficent",
              "type": "adj.",
              "definition": "Mischievous."
          },
          {
              "matched": false,
              "word": "malevolence",
              "type": "n.",
              "definition": "Ill will."
          },
          {
              "matched": false,
              "word": "malevolent",
              "type": "adj.",
              "definition": "Wishing evil to others."
          },
          {
              "matched": false,
              "word": "malign",
              "type": "v.",
              "definition": "To speak evil of, especially to do so falsely and severely."
          },
          {
              "matched": false,
              "word": "malignant",
              "type": "adj.",
              "definition": "Evil in nature or tending to do great harm or mischief."
          },
          {
              "matched": false,
              "word": "malleable",
              "type": "adj.",
              "definition": "Pliant."
          },
          {
              "matched": false,
              "word": "mallet",
              "type": "n.",
              "definition": "A wooden hammer."
          },
          {
              "matched": false,
              "word": "maltreat",
              "type": "v.",
              "definition": "To treat ill, unkindly, roughly, or abusively."
          },
          {
              "matched": false,
              "word": "man-trap",
              "type": "n.",
              "definition": "A place or structure dangerous to human life."
          },
          {
              "matched": false,
              "word": "mandate",
              "type": "n.",
              "definition": "A command."
          },
          {
              "matched": false,
              "word": "mandatory",
              "type": "adj.",
              "definition": "Expressive of positive command, as distinguished from merely directory."
          },
          {
              "matched": false,
              "word": "mane",
              "type": "n.",
              "definition": "The long hair growing upon and about the neck of certain animals, as the horse and          "
          },
          {
              "matched": false,
              "word": "man-eater",
              "type": "n.",
              "definition": "An animal that devours human beings."
          },
          {
              "matched": false,
              "word": "maneuver",
              "type": "v.",
              "definition": "To make adroit or artful moves: manage affairs by strategy."
          },
          {
              "matched": false,
              "word": "mania",
              "type": "n.",
              "definition": "Insanity."
          },
          {
              "matched": false,
              "word": "maniac",
              "type": "n.",
              "definition": "a person raving with madness."
          },
          {
              "matched": false,
              "word": "manifesto",
              "type": "n.",
              "definition": "A public declaration, making announcement, explanation or defense of          "
          },
          {
              "matched": false,
              "word": "manlike",
              "type": "adj.",
              "definition": "Like a man."
          },
          {
              "matched": false,
              "word": "manliness",
              "type": "n.",
              "definition": "The qualities characteristic of a true man, as bravery, resolution, etc."
          },
          {
              "matched": false,
              "word": "mannerism",
              "type": "n.",
              "definition": "Constant or excessive adherence to one manner, style, or peculiarity, as of          "
          },
          {
              "matched": false,
              "word": "manor",
              "type": "n.",
              "definition": "The landed estate of a lord or nobleman."
          },
          {
              "matched": false,
              "word": "mantel",
              "type": "n.",
              "definition": "The facing, sometimes richly ornamented, about a fireplace, including the usual          "
          },
          {
              "matched": false,
              "word": "mantle",
              "type": "n.",
              "definition": "A cloak."
          },
          {
              "matched": false,
              "word": "manufacturer",
              "type": "n.",
              "definition": "A person engaged in manufacturing as a business."
          },
          {
              "matched": false,
              "word": "manumission",
              "type": "n.",
              "definition": "Emancipation."
          },
          {
              "matched": false,
              "word": "manumit",
              "type": "v.",
              "definition": "To set free from bondage."
          },
          {
              "matched": false,
              "word": "marine",
              "type": "adj.",
              "definition": "Of or pertaining to the sea or matters connected with the sea."
          },
          {
              "matched": false,
              "word": "maritime",
              "type": "adj.",
              "definition": "Situated on or near the sea."
          },
          {
              "matched": false,
              "word": "maroon",
              "type": "v.",
              "definition": "To put ashore and abandon (a person) on a desolate coast or island."
          },
          {
              "matched": false,
              "word": "martial",
              "type": "adj.",
              "definition": "Pertaining to war or military operations."
          },
          {
              "matched": false,
              "word": "Martian",
              "type": "adj.",
              "definition": "Pertaining to Mars, either the Roman god of war or the planet."
          },
          {
              "matched": false,
              "word": "martyrdom",
              "type": "n.",
              "definition": "Submission to death or persecution for the sake of faith or principle."
          },
          {
              "matched": false,
              "word": "marvel",
              "type": "v.",
              "definition": "To be astonished and perplexed because of (something)."
          },
          {
              "matched": false,
              "word": "masonry",
              "type": "n.",
              "definition": "The art or work of constructing, as buildings, walls, etc., with regularly          "
          },
          {
              "matched": false,
              "word": "masquerade",
              "type": "n.",
              "definition": "A social party composed of persons masked and costumed so as to be          "
          },
          {
              "matched": false,
              "word": "massacre",
              "type": "n.",
              "definition": "The unnecessary and indiscriminate killing of human beings."
          },
          {
              "matched": false,
              "word": "massive",
              "type": "adj.",
              "definition": "Of considerable bulk and weight."
          },
          {
              "matched": false,
              "word": "masterpiece",
              "type": "n.",
              "definition": "A superior production."
          },
          {
              "matched": false,
              "word": "mastery",
              "type": "n.",
              "definition": "The attainment of superior skill."
          },
          {
              "matched": false,
              "word": "material",
              "type": "n.",
              "definition": "That of which anything is composed or may be constructed."
          },
          {
              "matched": false,
              "word": "materialize",
              "type": "v.",
              "definition": "To take perceptible or substantial form."
          },
          {
              "matched": false,
              "word": "maternal",
              "type": "adj.",
              "definition": "Pertaining or peculiar to a mother or to motherhood."
          },
          {
              "matched": false,
              "word": "matinee",
              "type": "n.",
              "definition": "An entertainment (especially theatrical) held in the daytime."
          },
          {
              "matched": false,
              "word": "matricide",
              "type": "n.",
              "definition": "The killing, especially the murdering, of one's mother."
          },
          {
              "matched": false,
              "word": "matrimony",
              "type": "n.",
              "definition": "The union of a man and a woman in marriage."
          },
          {
              "matched": false,
              "word": "matrix",
              "type": "n.",
              "definition": "That which contains and gives shape or form to anything."
          },
          {
              "matched": false,
              "word": "matter of fact",
              "type": "n.",
              "definition": "Something that has actual and undeniable existence or reality."
          },
          {
              "matched": false,
              "word": "maudlin",
              "type": "adj.",
              "definition": "Foolishly and tearfully affectionate."
          },
          {
              "matched": false,
              "word": "mausoleum",
              "type": "n.",
              "definition": "A tomb of more than ordinary size or architectural pretensions."
          },
          {
              "matched": false,
              "word": "mawkish",
              "type": "adj.",
              "definition": "Sickening or insipid."
          },
          {
              "matched": false,
              "word": "maxim",
              "type": "n.",
              "definition": "A principle accepted as true and acted on as a rule or guide."
          },
          {
              "matched": false,
              "word": "maze",
              "type": "n.",
              "definition": "A labyrinth."
          },
          {
              "matched": false,
              "word": "mead",
              "type": "n.",
              "definition": "A meadow."
          },
          {
              "matched": false,
              "word": "meager",
              "type": "adj.",
              "definition": "scanty."
          },
          {
              "matched": false,
              "word": "mealy-mouthed",
              "type": "adj.",
              "definition": "Afraid to express facts or opinions plainly."
          },
          {
              "matched": false,
              "word": "meander",
              "type": "v.",
              "definition": "To wind and turn while proceeding in a course."
          },
          {
              "matched": false,
              "word": "mechanics",
              "type": "n.",
              "definition": "The branch of physics that treats the phenomena caused by the action of          "
          },
          {
              "matched": false,
              "word": "medallion",
              "type": "n.",
              "definition": "A large medal."
          },
          {
              "matched": false,
              "word": "meddlesome",
              "type": "adj.",
              "definition": "Interfering."
          },
          {
              "matched": false,
              "word": "medial",
              "type": "adj.",
              "definition": "Of or pertaining to the middle."
          },
          {
              "matched": false,
              "word": "mediate",
              "type": "v.",
              "definition": "To effect by negotiating as an agent between parties."
          },
          {
              "matched": false,
              "word": "medicine",
              "type": "n.",
              "definition": "A substance possessing or reputed to possess curative or remedial properties."
          },
          {
              "matched": false,
              "word": "medieval",
              "type": "adj.",
              "definition": "Belonging or relating to or descriptive of the middle ages."
          },
          {
              "matched": false,
              "word": "mediocre",
              "type": "adj.",
              "definition": "Ordinary."
          },
          {
              "matched": false,
              "word": "meditation",
              "type": "n.",
              "definition": "The turning or revolving of a subject in the mind."
          },
          {
              "matched": false,
              "word": "medley",
              "type": "n.",
              "definition": "A composition of different songs or parts of songs arranged to run as a          "
          },
          {
              "matched": false,
              "word": "meliorate",
              "type": "v.",
              "definition": "To make better or improve, as in quality or social or physical condition."
          },
          {
              "matched": false,
              "word": "mellifluous",
              "type": "adj.",
              "definition": "Sweetly or smoothly flowing."
          },
          {
              "matched": false,
              "word": "melodious",
              "type": "adj.",
              "definition": "Characterized by a sweet succession of sounds."
          },
          {
              "matched": false,
              "word": "melodrama",
              "type": "n.",
              "definition": "A drama with a romantic story or plot and sensational situation and          "
          },
          {
              "matched": false,
              "word": "memento",
              "type": "n.",
              "definition": "A souvenir."
          },
          {
              "matched": false,
              "word": "memorable",
              "type": "adj.",
              "definition": "Noteworthy."
          },
          {
              "matched": false,
              "word": "menace",
              "type": "n.",
              "definition": "A threat."
          },
          {
              "matched": false,
              "word": "menagerie",
              "type": "n.",
              "definition": "A collection of wild animals, especially when kept for exhibition."
          },
          {
              "matched": false,
              "word": "mendacious",
              "type": "adj.",
              "definition": "Untrue."
          },
          {
              "matched": false,
              "word": "mendicant",
              "type": "n.",
              "definition": "A beggar."
          },
          {
              "matched": false,
              "word": "mentality",
              "type": "n.",
              "definition": "Intellectuality."
          },
          {
              "matched": false,
              "word": "mentor",
              "type": "n.",
              "definition": "A wise and faithful teacher, guide, and friend."
          },
          {
              "matched": false,
              "word": "mercantile",
              "type": "adj.",
              "definition": "Conducted or acting on business principles; commercial."
          },
          {
              "matched": false,
              "word": "mercenary",
              "type": "adj.",
              "definition": "Greedy"
          },
          {
              "matched": false,
              "word": "merciful",
              "type": "adj.",
              "definition": "Disposed to pity and forgive."
          },
          {
              "matched": false,
              "word": "merciless",
              "type": "adj.",
              "definition": "Cruel."
          },
          {
              "matched": false,
              "word": "meretricious",
              "type": "adj.",
              "definition": "Alluring by false or gaudy show."
          },
          {
              "matched": false,
              "word": "mesmerize",
              "type": "v.",
              "definition": "To hypnotize."
          },
          {
              "matched": false,
              "word": "messieurs",
              "type": "n.",
              "definition": "pl. Gentlemen."
          },
          {
              "matched": false,
              "word": "metal",
              "type": "n.",
              "definition": "An element that forms a base by combining with oxygen, is usually hard, heavy,          "
          },
          {
              "matched": false,
              "word": "metallurgy",
              "type": "n.",
              "definition": "The art or science of extracting a metal from ores, as by smelting."
          },
          {
              "matched": false,
              "word": "metamorphosis",
              "type": "n.",
              "definition": "A passing from one form or shape into another."
          },
          {
              "matched": false,
              "word": "metaphor",
              "type": "n.",
              "definition": "A figure of speech in which one object is likened to another, by speaking as          "
          },
          {
              "matched": false,
              "word": "metaphysical",
              "type": "adj.",
              "definition": "Philosophical."
          },
          {
              "matched": false,
              "word": "metaphysician",
              "type": "n.",
              "definition": "One skilled in metaphysics."
          },
          {
              "matched": false,
              "word": "metaphysics",
              "type": "n.",
              "definition": "The principles of philosophy as applied to explain the methods of any          "
          },
          {
              "matched": false,
              "word": "mete",
              "type": "v.",
              "definition": "To apportion."
          },
          {
              "matched": false,
              "word": "metempsychosis",
              "type": "n.",
              "definition": "Transition of the soul of a human being at death into another body,          "
          },
          {
              "matched": false,
              "word": "meticulous",
              "type": "adj.",
              "definition": "Over-cautious."
          },
          {
              "matched": false,
              "word": "metonymy",
              "type": "n.",
              "definition": "A figure of speech that consists in the naming of a thing by one of its          "
          },
          {
              "matched": false,
              "word": "metric",
              "type": "adj.",
              "definition": "Relating to measurement."
          },
          {
              "matched": false,
              "word": "metronome",
              "type": "n.",
              "definition": "An instrument for indicating and marking exact time in music."
          },
          {
              "matched": false,
              "word": "metropolis",
              "type": "n.",
              "definition": "A chief city, either the capital or the largest or most important city of a          "
          },
          {
              "matched": false,
              "word": "metropolitan",
              "type": "adj.",
              "definition": "Pertaining to a chief city."
          },
          {
              "matched": false,
              "word": "mettle",
              "type": "n.",
              "definition": "Courage."
          },
          {
              "matched": false,
              "word": "mettlesome",
              "type": "adj.",
              "definition": "Having courage or spirit."
          },
          {
              "matched": false,
              "word": "microcosm",
              "type": "n.",
              "definition": "The world or universe on a small scale."
          },
          {
              "matched": false,
              "word": "micrometer",
              "type": "n.",
              "definition": "An instrument for measuring very small angles or dimensions."
          },
          {
              "matched": false,
              "word": "microphone",
              "type": "n.",
              "definition": "An apparatus for magnifying faint sounds."
          },
          {
              "matched": false,
              "word": "microscope",
              "type": "n.",
              "definition": "An instrument for assisting the eye in the vision of minute objects or          "
          },
          {
              "matched": false,
              "word": "microscopic",
              "type": "adj.",
              "definition": "Adapted to or characterized by minute observation."
          },
          {
              "matched": false,
              "word": "microscopy",
              "type": "n.",
              "definition": "The art of examing objects with the microscope."
          },
          {
              "matched": false,
              "word": "midsummer",
              "type": "n.",
              "definition": "The middle of the summer."
          },
          {
              "matched": false,
              "word": "midwife",
              "type": "n.",
              "definition": "A woman who makes a business of assisting at childbirth."
          },
          {
              "matched": false,
              "word": "mien",
              "type": "n.",
              "definition": "The external appearance or manner of a person."
          },
          {
              "matched": false,
              "word": "migrant",
              "type": "adj.",
              "definition": "Wandering."
          },
          {
              "matched": false,
              "word": "migrate",
              "type": "v.",
              "definition": "To remove or pass from one country, region, or habitat to another."
          },
          {
              "matched": false,
              "word": "migratory",
              "type": "adj.",
              "definition": "Wandering."
          },
          {
              "matched": false,
              "word": "mileage",
              "type": "n.",
              "definition": "A distance in miles."
          },
          {
              "matched": false,
              "word": "militant",
              "type": "adj.",
              "definition": "Of a warlike or combative disposition or tendency."
          },
          {
              "matched": false,
              "word": "militarism",
              "type": "n.",
              "definition": "A policy of maintaining great standing armies."
          },
          {
              "matched": false,
              "word": "militate",
              "type": "v.",
              "definition": "To have weight or influence (in determining a question)."
          },
          {
              "matched": false,
              "word": "militia",
              "type": "n.",
              "definition": "Those citizens, collectively, who are enrolled and drilled in temporary          "
          },
          {
              "matched": false,
              "word": "Milky Way",
              "type": "n.",
              "definition": "The galaxy."
          },
          {
              "matched": false,
              "word": "millet",
              "type": "n.",
              "definition": "A grass cultivated for forage and cereal."
          },
          {
              "matched": false,
              "word": "mimic",
              "type": "v.",
              "definition": "To imitate the speech or actions of."
          },
          {
              "matched": false,
              "word": "miniature",
              "type": "adj.",
              "definition": "Much smaller than reality or that the normal size."
          },
          {
              "matched": false,
              "word": "minimize",
              "type": "v.",
              "definition": "To reduce to the smallest possible amount or degree."
          },
          {
              "matched": false,
              "word": "minion",
              "type": "n.",
              "definition": "A servile favorite."
          },
          {
              "matched": false,
              "word": "ministration",
              "type": "n.",
              "definition": "Any religious ceremonial."
          },
          {
              "matched": false,
              "word": "ministry",
              "type": "n.",
              "definition": "A service."
          },
          {
              "matched": false,
              "word": "minority",
              "type": "n.",
              "definition": "The smaller in number of two portions into which a number or a group is          "
          },
          {
              "matched": false,
              "word": "minute",
              "type": "adj.",
              "definition": "Exceedingly small in extent or quantity."
          },
          {
              "matched": false,
              "word": "minutia",
              "type": "n.",
              "definition": "A small or unimportant particular or detail."
          },
          {
              "matched": false,
              "word": "mirage",
              "type": "n.",
              "definition": "An optical effect looking like a sheet of water in the desert."
          },
          {
              "matched": false,
              "word": "misadventure",
              "type": "n.",
              "definition": "An unlucky accident."
          },
          {
              "matched": false,
              "word": "misanthropic",
              "type": "adj.",
              "definition": "Hating mankind."
          },
          {
              "matched": false,
              "word": "misanthropy",
              "type": "n.",
              "definition": "Hatred of mankind."
          },
          {
              "matched": false,
              "word": "misapprehend",
              "type": "v.",
              "definition": "To misunderstand."
          },
          {
              "matched": false,
              "word": "misbehave",
              "type": "v.",
              "definition": "To behave ill."
          },
          {
              "matched": false,
              "word": "misbehavior",
              "type": "n.",
              "definition": "Ill or improper behavior."
          },
          {
              "matched": false,
              "word": "mischievous",
              "type": "adj.",
              "definition": "Fond of tricks."
          },
          {
              "matched": false,
              "word": "miscount",
              "type": "v.",
              "definition": "To make a mistake in counting."
          },
          {
              "matched": false,
              "word": "miscreant",
              "type": "n.",
              "definition": "A villain."
          },
          {
              "matched": false,
              "word": "misdeed",
              "type": "n.",
              "definition": "A wrong or improper act."
          },
          {
              "matched": false,
              "word": "misdemeanor",
              "type": "n.",
              "definition": "Evil conduct, small crime."
          },
          {
              "matched": false,
              "word": "miser",
              "type": "n.",
              "definition": "A person given to saving and hoarding unduly."
          },
          {
              "matched": false,
              "word": "mishap",
              "type": "n.",
              "definition": "Misfortune."
          },
          {
              "matched": false,
              "word": "misinterpret",
              "type": "v.",
              "definition": "To misunderstand."
          },
          {
              "matched": false,
              "word": "mislay",
              "type": "v.",
              "definition": "To misplace."
          },
          {
              "matched": false,
              "word": "mismanage",
              "type": "v.",
              "definition": "To manage badly, improperly, or unskillfully."
          },
          {
              "matched": false,
              "word": "misnomer",
              "type": "n.",
              "definition": "A name wrongly or mistakenly applied."
          },
          {
              "matched": false,
              "word": "misogamy",
              "type": "n.",
              "definition": "Hatred of marriage."
          },
          {
              "matched": false,
              "word": "misogyny",
              "type": "n.",
              "definition": "Hatred of women."
          },
          {
              "matched": false,
              "word": "misplace",
              "type": "v.",
              "definition": "To put into a wrong place."
          },
          {
              "matched": false,
              "word": "misrepresent",
              "type": "v.",
              "definition": "To give a wrong impression."
          },
          {
              "matched": false,
              "word": "misrule",
              "type": "v.",
              "definition": "To misgovern."
          },
          {
              "matched": false,
              "word": "missal",
              "type": "n.",
              "definition": "The book containing the service for the celebration of mass."
          },
          {
              "matched": false,
              "word": "missile",
              "type": "n.",
              "definition": "Any object, especially a weapon, thrown or intended to be thrown."
          },
          {
              "matched": false,
              "word": "missive",
              "type": "n.",
              "definition": "A message in writing."
          },
          {
              "matched": false,
              "word": "mistrust",
              "type": "v.",
              "definition": "To regard with suspicion or jealousy."
          },
          {
              "matched": false,
              "word": "misty",
              "type": "adj.",
              "definition": "Lacking clearness"
          },
          {
              "matched": false,
              "word": "misunderstand",
              "type": "v.",
              "definition": "To Take in a wrong sense."
          },
          {
              "matched": false,
              "word": "misuse",
              "type": "v.",
              "definition": "To maltreat."
          },
          {
              "matched": false,
              "word": "mite",
              "type": "n.",
              "definition": "A very small amount, portion, or particle."
          },
          {
              "matched": false,
              "word": "miter",
              "type": "n.",
              "definition": "The junction of two bodies at an equally divided angle."
          },
          {
              "matched": false,
              "word": "mitigate",
              "type": "v.",
              "definition": "To make milder or more endurable."
          },
          {
              "matched": false,
              "word": "mnemonics",
              "type": "n.",
              "definition": "A system of principles and formulas designed to assist the recollection in          "
          },
          {
              "matched": false,
              "word": "moat",
              "type": "n.",
              "definition": "A ditch on the outside of a fortress wall."
          },
          {
              "matched": false,
              "word": "mobocracy",
              "type": "n.",
              "definition": "Lawless control of public affairs by the mob or populace."
          },
          {
              "matched": false,
              "word": "moccasin",
              "type": "n.",
              "definition": "A foot-covering made of soft leather or buckskin."
          },
          {
              "matched": false,
              "word": "mockery",
              "type": "n.",
              "definition": "Ridicule."
          },
          {
              "matched": false,
              "word": "moderation",
              "type": "n.",
              "definition": "Temperance."
          },
          {
              "matched": false,
              "word": "moderator",
              "type": "n.",
              "definition": "The presiding officer of a meeting."
          },
          {
              "matched": false,
              "word": "modernity",
              "type": "n.",
              "definition": "The state or character of being modern."
          },
          {
              "matched": false,
              "word": "modernize",
              "type": "v.",
              "definition": "To make characteristic of the present or of recent times."
          },
          {
              "matched": false,
              "word": "modification",
              "type": "n.",
              "definition": "A change."
          },
          {
              "matched": false,
              "word": "modify",
              "type": "v.",
              "definition": "To make somewhat different."
          },
          {
              "matched": false,
              "word": "modish",
              "type": "adj.",
              "definition": "Fashionable."
          },
          {
              "matched": false,
              "word": "modulate",
              "type": "v.",
              "definition": "To vary in tone, inflection, pitch or other quality of sound."
          },
          {
              "matched": false,
              "word": "mollify",
              "type": "v.",
              "definition": "To soothe."
          },
          {
              "matched": false,
              "word": "molt",
              "type": "v.",
              "definition": "To cast off, as hair, feathers, etc."
          },
          {
              "matched": false,
              "word": "momentary",
              "type": "adj.",
              "definition": "Lasting but a short time."
          },
          {
              "matched": false,
              "word": "momentous",
              "type": "adj.",
              "definition": "Very significant."
          },
          {
              "matched": false,
              "word": "momentum",
              "type": "n.",
              "definition": "An impetus."
          },
          {
              "matched": false,
              "word": "monarchy",
              "type": "n.",
              "definition": "Government by a single, sovereign ruler."
          },
          {
              "matched": false,
              "word": "monastery",
              "type": "n.",
              "definition": "A dwelling-place occupied in common by persons under religious vows of          "
          },
          {
              "matched": false,
              "word": "monetary",
              "type": "adj.",
              "definition": "Financial."
          },
          {
              "matched": false,
              "word": "mongrel",
              "type": "n.",
              "definition": "The progeny resulting from the crossing of different breeds or varieties."
          },
          {
              "matched": false,
              "word": "monition",
              "type": "n.",
              "definition": "Friendly counsel given by way of warning and implying caution or reproof."
          },
          {
              "matched": false,
              "word": "monitory",
              "type": "n.",
              "definition": "Admonition or warning."
          },
          {
              "matched": false,
              "word": "monocracy",
              "type": "n.",
              "definition": "Government by a single person."
          },
          {
              "matched": false,
              "word": "monogamy",
              "type": "n.",
              "definition": "The habit of pairing, or having but one mate."
          },
          {
              "matched": false,
              "word": "monogram",
              "type": "n.",
              "definition": "A character consisting of two or more letters interwoven into one, usually          "
          },
          {
              "matched": false,
              "word": "monograph",
              "type": "n.",
              "definition": "A treatise discussing a single subject or branch of a subject."
          },
          {
              "matched": false,
              "word": "monolith",
              "type": "n.",
              "definition": "Any structure or sculpture in stone formed of a single piece."
          },
          {
              "matched": false,
              "word": "monologue",
              "type": "n.",
              "definition": "A story or drama told or performed by one person."
          },
          {
              "matched": false,
              "word": "monomania",
              "type": "n.",
              "definition": "The unreasonable pursuit of one idea."
          },
          {
              "matched": false,
              "word": "monopoly",
              "type": "n.",
              "definition": "The control of a thing, as a commodity, to enable a person to raise its price."
          },
          {
              "matched": false,
              "word": "monosyllable",
              "type": "n.",
              "definition": "A word of one syllable."
          },
          {
              "matched": false,
              "word": "monotone",
              "type": "n.",
              "definition": "The sameness or monotony of utterance."
          },
          {
              "matched": false,
              "word": "monotonous",
              "type": "adj.",
              "definition": "Unchanging and tedious."
          },
          {
              "matched": false,
              "word": "monotony",
              "type": "n.",
              "definition": "A lack of variety."
          },
          {
              "matched": false,
              "word": "monsieur",
              "type": "n.",
              "definition": "A French title of respect, equivalent to Mr. and sir."
          },
          {
              "matched": false,
              "word": "monstrosity",
              "type": "n.",
              "definition": "Anything unnaturally huge or distorted."
          },
          {
              "matched": false,
              "word": "moonbeam",
              "type": "n.",
              "definition": "A ray of moonlight."
          },
          {
              "matched": false,
              "word": "morale",
              "type": "n.",
              "definition": "A state of mind with reference to confidence, courage, zeal, and the like."
          },
          {
              "matched": false,
              "word": "moralist",
              "type": "n.",
              "definition": "A writer on ethics."
          },
          {
              "matched": false,
              "word": "morality",
              "type": "n.",
              "definition": "Virtue."
          },
          {
              "matched": false,
              "word": "moralize",
              "type": "v.",
              "definition": "To render virtuous."
          },
          {
              "matched": false,
              "word": "moratorium",
              "type": "n.",
              "definition": "An emergency legislation authorizing a government suspend some action          "
          },
          {
              "matched": false,
              "word": "morbid",
              "type": "adj.",
              "definition": "Caused by or denoting a diseased or unsound condition of body or mind."
          },
          {
              "matched": false,
              "word": "mordacious",
              "type": "adj.",
              "definition": "Biting or giving to biting."
          },
          {
              "matched": false,
              "word": "mordant",
              "type": "adj.",
              "definition": "Biting."
          },
          {
              "matched": false,
              "word": "moribund",
              "type": "adj.",
              "definition": "On the point of dying."
          },
          {
              "matched": false,
              "word": "morose",
              "type": "adj.",
              "definition": "Gloomy."
          },
          {
              "matched": false,
              "word": "morphology",
              "type": "n.",
              "definition": "the science of organic forms."
          },
          {
              "matched": false,
              "word": "motley",
              "type": "adj.",
              "definition": "Composed of heterogeneous or inharmonious elements."
          },
          {
              "matched": false,
              "word": "motto",
              "type": "n.",
              "definition": "An expressive word or pithy sentence enunciating some guiding rule of life, or          "
          },
          {
              "matched": false,
              "word": "mountaineer",
              "type": "n.",
              "definition": "One who travels among or climbs mountains for pleasure or exercise."
          },
          {
              "matched": false,
              "word": "mountainous",
              "type": "adj.",
              "definition": "Full of or abounding in mountains."
          },
          {
              "matched": false,
              "word": "mouthful",
              "type": "n.",
              "definition": "As much as can be or is usually put into the or exercise."
          },
          {
              "matched": false,
              "word": "muddle",
              "type": "v.",
              "definition": "To confuse or becloud, especially with or as with drink."
          },
          {
              "matched": false,
              "word": "muffle",
              "type": "v.",
              "definition": "To deaden the sound of, as by wraps."
          },
          {
              "matched": false,
              "word": "mulatto",
              "type": "n.",
              "definition": "The offspring of a white person and a black person."
          },
          {
              "matched": false,
              "word": "muleteer",
              "type": "n.",
              "definition": "A mule-driver."
          },
          {
              "matched": false,
              "word": "multiform",
              "type": "adj.",
              "definition": "Having many shapes, or appearances."
          },
          {
              "matched": false,
              "word": "multiplicity",
              "type": "n.",
              "definition": "the condition of being manifold or very various."
          },
          {
              "matched": false,
              "word": "mundane",
              "type": "adj.",
              "definition": "Worldly, as opposed to spiritual or celestial."
          },
          {
              "matched": false,
              "word": "municipal",
              "type": "adj.",
              "definition": "Of or pertaining to a town or city, or to its corporate or local          "
          },
          {
              "matched": false,
              "word": "municipality",
              "type": "n.",
              "definition": "A district enjoying municipal government."
          },
          {
              "matched": false,
              "word": "munificence",
              "type": "n.",
              "definition": "A giving characterized by generous motives and extraordinary liberality."
          },
          {
              "matched": false,
              "word": "munificent",
              "type": "adj.",
              "definition": "Extraordinarily generous."
          },
          {
              "matched": false,
              "word": "muster",
              "type": "n.",
              "definition": "An assemblage or review of troops for parade or inspection, or for numbering          "
          },
          {
              "matched": false,
              "word": "mutation",
              "type": "n.",
              "definition": "The act or process of change."
          },
          {
              "matched": false,
              "word": "mutilate",
              "type": "v.",
              "definition": "To disfigure."
          },
          {
              "matched": false,
              "word": "mutiny",
              "type": "n.",
              "definition": "Rebellion against lawful or constituted authority."
          },
          {
              "matched": false,
              "word": "myriad",
              "type": "n.",
              "definition": "A vast indefinite number."
          },
          {
              "matched": false,
              "word": "mystic",
              "type": "n.",
              "definition": "One who professes direct divine illumination, or relies upon meditation to          "
          },
          {
              "matched": false,
              "word": "mystification",
              "type": "n.",
              "definition": "The act of artfully perplexing."
          },
          {
              "matched": false,
              "word": "myth",
              "type": "n.",
              "definition": "A fictitious narrative presented as historical, but without any basis of fact."
          },
          {
              "matched": false,
              "word": "mythology",
              "type": "n.",
              "definition": "The whole body of legends cherished by a race concerning gods and heroes."
          },
          {
              "matched": false,
              "word": "nameless",
              "type": "adj.",
              "definition": "Having no fame or reputation."
          },
          {
              "matched": false,
              "word": "naphtha",
              "type": "n.",
              "definition": "A light, colorless, volatile, inflammable oil used as a solvent, as in          "
          },
          {
              "matched": false,
              "word": "Narcissus",
              "type": "n.",
              "definition": "The son of the Athenian river-god Cephisus, fabled to have fallen in love          "
          },
          {
              "matched": false,
              "word": "narrate",
              "type": "v.",
              "definition": "To tell a story."
          },
          {
              "matched": false,
              "word": "narration",
              "type": "n.",
              "definition": "The act of recounting the particulars of an event in the order of time or          "
          },
          {
              "matched": false,
              "word": "narrative",
              "type": "n.",
              "definition": "An orderly continuous account of the successive particulars of an event."
          },
          {
              "matched": false,
              "word": "narrator",
              "type": "n.",
              "definition": "One who narrates anything."
          },
          {
              "matched": false,
              "word": "narrow-minded",
              "type": "adj.",
              "definition": "Characterized by illiberal views or sentiments."
          },
          {
              "matched": false,
              "word": "nasal",
              "type": "adj.",
              "definition": "Pertaining to the nose."
          },
          {
              "matched": false,
              "word": "natal",
              "type": "adj.",
              "definition": "Pertaining to one's birth."
          },
          {
              "matched": false,
              "word": "nationality",
              "type": "n.",
              "definition": "A connection with a particular nation."
          },
          {
              "matched": false,
              "word": "naturally",
              "type": "adv.",
              "definition": "According to the usual order of things."
          },
          {
              "matched": false,
              "word": "nausea",
              "type": "n.",
              "definition": "An affection of the stomach producing dizziness and usually an impulse to vomit"
          },
          {
              "matched": false,
              "word": "nauseate",
              "type": "v.",
              "definition": "To cause to loathe."
          },
          {
              "matched": false,
              "word": "nauseous",
              "type": "adj.",
              "definition": "Loathsome."
          },
          {
              "matched": false,
              "word": "nautical",
              "type": "adj.",
              "definition": "Pertaining to ships, seamen, or navigation."
          },
          {
              "matched": false,
              "word": "naval",
              "type": "adj.",
              "definition": "Pertaining to ships."
          },
          {
              "matched": false,
              "word": "navel",
              "type": "n.",
              "definition": "The depression on the abdomen where the umbilical cord of the fetus was attached."
          },
          {
              "matched": false,
              "word": "navigable",
              "type": "adj.",
              "definition": "Capable of commercial navigation."
          },
          {
              "matched": false,
              "word": "navigate",
              "type": "v.",
              "definition": "To traverse by ship."
          },
          {
              "matched": false,
              "word": "nebula",
              "type": "n.",
              "definition": "A gaseous body of unorganized stellar substance."
          },
          {
              "matched": false,
              "word": "necessary",
              "type": "adj.",
              "definition": "Indispensably requisite or absolutely needed to accomplish a desired          "
          },
          {
              "matched": false,
              "word": "necessitate",
              "type": "v.",
              "definition": "To render indispensable."
          },
          {
              "matched": false,
              "word": "necessity",
              "type": "n.",
              "definition": "That which is indispensably requisite to an end desired."
          },
          {
              "matched": false,
              "word": "necrology",
              "type": "n.",
              "definition": "A list of persons who have died in a certain place or time."
          },
          {
              "matched": false,
              "word": "necromancer",
              "type": "n.",
              "definition": "One who practices the art of foretelling the future by means of          "
          },
          {
              "matched": false,
              "word": "necropolis",
              "type": "n.",
              "definition": "A city of the dead."
          },
          {
              "matched": false,
              "word": "necrosis",
              "type": "n.",
              "definition": "the death of part of the body."
          },
          {
              "matched": false,
              "word": "nectar",
              "type": "n.",
              "definition": "Any especially sweet and delicious drink."
          },
          {
              "matched": false,
              "word": "nectarine",
              "type": "n.",
              "definition": "A variety of the peach."
          },
          {
              "matched": false,
              "word": "needlework",
              "type": "n.",
              "definition": "Embroidery."
          },
          {
              "matched": false,
              "word": "needy",
              "type": "adj.",
              "definition": "Being in need, want, or poverty."
          },
          {
              "matched": false,
              "word": "nefarious",
              "type": "adj.",
              "definition": "Wicked in the extreme."
          },
          {
              "matched": false,
              "word": "negate",
              "type": "v.",
              "definition": "To deny."
          },
          {
              "matched": false,
              "word": "negation",
              "type": "n.",
              "definition": "The act of denying or of asserting the falsity of a proposition."
          },
          {
              "matched": false,
              "word": "neglectful",
              "type": "adj.",
              "definition": "Exhibiting or indicating omission."
          },
          {
              "matched": false,
              "word": "negligee",
              "type": "n.",
              "definition": "A loose gown worn by women."
          },
          {
              "matched": false,
              "word": "negligence",
              "type": "n.",
              "definition": "Omission of that which ought to be done."
          },
          {
              "matched": false,
              "word": "negligent",
              "type": "adj.",
              "definition": "Apt to omit what ought to be done."
          },
          {
              "matched": false,
              "word": "negligible",
              "type": "adj.",
              "definition": "Transferable by assignment, endorsement, or delivery."
          },
          {
              "matched": false,
              "word": "negotiable",
              "type": "v.",
              "definition": "To bargain with others for an agreement, as for a treaty or transfer of          "
          },
          {
              "matched": false,
              "word": "Nemesis",
              "type": "n.",
              "definition": "A goddess; divinity of chastisement and vengeance."
          },
          {
              "matched": false,
              "word": "neocracy",
              "type": "n.",
              "definition": "Government administered by new or untried persons."
          },
          {
              "matched": false,
              "word": "neo-Darwinsim",
              "type": "n.",
              "definition": "Darwinism as modified and extended by more recent students."
          },
          {
              "matched": false,
              "word": "neo-Latin",
              "type": "n.",
              "definition": "Modernized Latin."
          },
          {
              "matched": false,
              "word": "neopaganism",
              "type": "n.",
              "definition": "A new or revived paganism."
          },
          {
              "matched": false,
              "word": "Neolithic",
              "type": "adj.",
              "definition": "Pertaining to the later stone age."
          },
          {
              "matched": false,
              "word": "neology",
              "type": "n.",
              "definition": "The coining or using of new words or new meanings of words."
          },
          {
              "matched": false,
              "word": "neophyte",
              "type": "adj.",
              "definition": "Having the character of a beginner."
          },
          {
              "matched": false,
              "word": "nestle",
              "type": "v.",
              "definition": "To adjust cozily in snug quarters."
          },
          {
              "matched": false,
              "word": "nestling",
              "type": "adj.",
              "definition": "Recently hatched."
          },
          {
              "matched": false,
              "word": "nettle",
              "type": "v.",
              "definition": "To excite sensations of uneasiness or displeasure in."
          },
          {
              "matched": false,
              "word": "network",
              "type": "n.",
              "definition": "Anything that presents a system of cross- lines."
          },
          {
              "matched": false,
              "word": "neural",
              "type": "adj.",
              "definition": "Pertaining to the nerves or nervous system."
          },
          {
              "matched": false,
              "word": "neurology",
              "type": "n.",
              "definition": "The science of the nervous system."
          },
          {
              "matched": false,
              "word": "neuter",
              "type": "adj.",
              "definition": "Neither masculine nor feminine."
          },
          {
              "matched": false,
              "word": "neutral",
              "type": "adj.",
              "definition": "Belonging to or under control of neither of two contestants."
          },
          {
              "matched": false,
              "word": "nevertheless",
              "type": "conj.",
              "definition": "Notwithstanding."
          },
          {
              "matched": false,
              "word": "Newtonian",
              "type": "adj.",
              "definition": "Of or pertaining to Sir Isaac Newton, the English philosopher."
          },
          {
              "matched": false,
              "word": "niggardly",
              "type": "adj.",
              "definition": "Stingy. (no longer acceptable to use)"
          },
          {
              "matched": false,
              "word": "nihilist",
              "type": "n.",
              "definition": "An advocate of the doctrine that nothing either exists or can be known."
          },
          {
              "matched": false,
              "word": "nil",
              "type": "n.",
              "definition": "Nothing"
          },
          {
              "matched": false,
              "word": "nimble",
              "type": "adj.",
              "definition": "Light and quick in motion or action."
          },
          {
              "matched": false,
              "word": "nit",
              "type": "n.",
              "definition": "The egg of a louse or some other insect."
          },
          {
              "matched": false,
              "word": "nocturnal",
              "type": "adj.",
              "definition": "Of or pertaining to the night."
          },
          {
              "matched": false,
              "word": "noiseless",
              "type": "adj.",
              "definition": "Silent."
          },
          {
              "matched": false,
              "word": "noisome",
              "type": "adj.",
              "definition": "Very offensive, particularly to the sense of smell."
          },
          {
              "matched": false,
              "word": "noisy",
              "type": "adj.",
              "definition": "Clamorous."
          },
          {
              "matched": false,
              "word": "nomad",
              "type": "adj.",
              "definition": "Having no fixed abode."
          },
          {
              "matched": false,
              "word": "nomic",
              "type": "adj.",
              "definition": "Usual or customary."
          },
          {
              "matched": false,
              "word": "nominal",
              "type": "adj.",
              "definition": "Trivial."
          },
          {
              "matched": false,
              "word": "nominate",
              "type": "v.",
              "definition": "To designate as a candidate for any office."
          },
          {
              "matched": false,
              "word": "nomination",
              "type": "n.",
              "definition": "The act or ceremony of naming a man or woman for office."
          },
          {
              "matched": false,
              "word": "nominee",
              "type": "n.",
              "definition": "One who receives a nomination."
          },
          {
              "matched": false,
              "word": "non-existent",
              "type": "n.",
              "definition": "That which does not exist."
          },
          {
              "matched": false,
              "word": "non-resident",
              "type": "adj.",
              "definition": "Not residing within a given jurisdiction."
          },
          {
              "matched": false,
              "word": "nonchalance",
              "type": "n.",
              "definition": "A state of mind indicating lack of interest."
          },
          {
              "matched": false,
              "word": "non-combatant",
              "type": "n.",
              "definition": "One attached to the army or navy, but having duties other than that of          "
          },
          {
              "matched": false,
              "word": "nondescript",
              "type": "adj.",
              "definition": "Indescribable."
          },
          {
              "matched": false,
              "word": "nonentity",
              "type": "n.",
              "definition": "A person or thing of little or no account."
          },
          {
              "matched": false,
              "word": "nonpareil",
              "type": "n.",
              "definition": "One who or that which is of unequaled excellence."
          },
          {
              "matched": false,
              "word": "norm",
              "type": "n.",
              "definition": "A model."
          },
          {
              "matched": false,
              "word": "normalcy",
              "type": "n.",
              "definition": "The state of being normal."
          },
          {
              "matched": false,
              "word": "Norman",
              "type": "adj.",
              "definition": "Of or peculiar to Normandy, in northern France."
          },
          {
              "matched": false,
              "word": "nostrum",
              "type": "n.",
              "definition": "Any scheme or recipe of a charlatan character."
          },
          {
              "matched": false,
              "word": "noticeable",
              "type": "adj.",
              "definition": "Perceptible."
          },
          {
              "matched": false,
              "word": "notorious",
              "type": "adj.",
              "definition": "Unfavorably known to the general public."
          },
          {
              "matched": false,
              "word": "novellette",
              "type": "n.",
              "definition": "A short novel."
          },
          {
              "matched": false,
              "word": "novice",
              "type": "n.",
              "definition": "A beginner in any business or occupation."
          },
          {
              "matched": false,
              "word": "nowadays",
              "type": "adv.",
              "definition": "In the present time or age."
          },
          {
              "matched": false,
              "word": "nowhere",
              "type": "adv.",
              "definition": "In no place or state."
          },
          {
              "matched": false,
              "word": "noxious",
              "type": "adj.",
              "definition": "Hurtful."
          },
          {
              "matched": false,
              "word": "nuance",
              "type": "n.",
              "definition": "A slight degree of difference in anything perceptible to the sense of the mind."
          },
          {
              "matched": false,
              "word": "nucleus",
              "type": "n.",
              "definition": "A central point or part about which matter is aggregated."
          },
          {
              "matched": false,
              "word": "nude",
              "type": "adj.",
              "definition": "Naked."
          },
          {
              "matched": false,
              "word": "nugatory",
              "type": "adj.",
              "definition": "Having no power or force."
          },
          {
              "matched": false,
              "word": "nuisance",
              "type": "n.",
              "definition": "That which annoys, vexes, or irritates."
          },
          {
              "matched": false,
              "word": "numeration",
              "type": "n.",
              "definition": "The act or art of reading or naming numbers."
          },
          {
              "matched": false,
              "word": "numerical",
              "type": "adj.",
              "definition": "Of or pertaining to number."
          },
          {
              "matched": false,
              "word": "nunnery",
              "type": "n.",
              "definition": "A convent for nuns."
          },
          {
              "matched": false,
              "word": "nuptial",
              "type": "adj.",
              "definition": "Of or pertaining to marriage, especially to the marriage ceremony."
          },
          {
              "matched": false,
              "word": "nurture",
              "type": "n.",
              "definition": "The process of fostering or promoting growth."
          },
          {
              "matched": false,
              "word": "nutriment",
              "type": "n.",
              "definition": "That which nourishes."
          },
          {
              "matched": false,
              "word": "nutritive",
              "type": "adj.",
              "definition": "Having nutritious properties."
          },
          {
              "matched": false,
              "word": "oaken",
              "type": "adj.",
              "definition": "Made of or from oak."
          },
          {
              "matched": false,
              "word": "oakum",
              "type": "n.",
              "definition": "Hemp-fiber obtained by untwisting and picking out loosely the yarns of old hemp          "
          },
          {
              "matched": false,
              "word": "obdurate",
              "type": "adj.",
              "definition": "Impassive to feelings of humanity or pity."
          },
          {
              "matched": false,
              "word": "obelisk",
              "type": "n.",
              "definition": "A square shaft with pyramidal top, usually monumental or commemorative."
          },
          {
              "matched": false,
              "word": "obese",
              "type": "adj.",
              "definition": "Exceedingly fat."
          },
          {
              "matched": false,
              "word": "obesity",
              "type": "n.",
              "definition": "Excessive fatness."
          },
          {
              "matched": false,
              "word": "obituary",
              "type": "adj.",
              "definition": "A published notice of a death."
          },
          {
              "matched": false,
              "word": "objective",
              "type": "adj.",
              "definition": "Grasping and representing facts as they are."
          },
          {
              "matched": false,
              "word": "objector",
              "type": "n.",
              "definition": "One who objects, as to a proposition, measure, or ruling."
          },
          {
              "matched": false,
              "word": "obligate",
              "type": "v.",
              "definition": "To hold to the fulfillment of duty."
          },
          {
              "matched": false,
              "word": "obligatory",
              "type": "adj.",
              "definition": "Binding in law or conscience."
          },
          {
              "matched": false,
              "word": "oblique",
              "type": "adj.",
              "definition": "Slanting; said of lines."
          },
          {
              "matched": false,
              "word": "obliterate",
              "type": "v.",
              "definition": "To cause to disappear."
          },
          {
              "matched": false,
              "word": "oblivion",
              "type": "n.",
              "definition": "The state of having passed out of the memory or of being utterly forgotten."
          },
          {
              "matched": false,
              "word": "oblong",
              "type": "adj.",
              "definition": "Longer than broad: applied most commonly to rectangular objects considerably          "
          },
          {
              "matched": false,
              "word": "obnoxious",
              "type": "adj.",
              "definition": "Detestable."
          },
          {
              "matched": false,
              "word": "obsequies",
              "type": "n.",
              "definition": "Funeral rites."
          },
          {
              "matched": false,
              "word": "obsequious",
              "type": "adj.",
              "definition": "Showing a servile readiness to fall in with the wishes or will of another."
          },
          {
              "matched": false,
              "word": "observance",
              "type": "n.",
              "definition": "A traditional form or customary act."
          },
          {
              "matched": false,
              "word": "observant",
              "type": "adj.",
              "definition": "Quick to notice."
          },
          {
              "matched": false,
              "word": "observatory",
              "type": "n.",
              "definition": "A building designed for systematic astronomical observations."
          },
          {
              "matched": false,
              "word": "obsolescence",
              "type": "n.",
              "definition": "The condition or process of gradually falling into disuse."
          },
          {
              "matched": false,
              "word": "obsolescent",
              "type": "adj.",
              "definition": "Passing out of use, as a word."
          },
          {
              "matched": false,
              "word": "obsolete",
              "type": "adj.",
              "definition": "No longer practiced or accepted."
          },
          {
              "matched": false,
              "word": "obstetrician",
              "type": "n.",
              "definition": "A practitioner of midwifery."
          },
          {
              "matched": false,
              "word": "obstetrics",
              "type": "n.",
              "definition": "The branch of medical science concerned with the treatment and care of women          "
          },
          {
              "matched": false,
              "word": "obstinacy",
              "type": "n.",
              "definition": "Stubborn adherence to opinion, arising from conceit or the desire to have          "
          },
          {
              "matched": false,
              "word": "obstreperous",
              "type": "adj.",
              "definition": "Boisterous."
          },
          {
              "matched": false,
              "word": "obstruct",
              "type": "v.",
              "definition": "To fill with impediments so as to prevent passage, either wholly or in part."
          },
          {
              "matched": false,
              "word": "obstruction",
              "type": "n.",
              "definition": "Hindrance."
          },
          {
              "matched": false,
              "word": "obtrude",
              "type": "v.",
              "definition": "To be pushed or to push oneself into undue prominence."
          },
          {
              "matched": false,
              "word": "obtrusive",
              "type": "adj.",
              "definition": "Tending to be pushed or to push oneself into undue prominence."
          },
          {
              "matched": false,
              "word": "obvert",
              "type": "v.",
              "definition": "To turn the front or principal side of (a thing) toward any person or object."
          },
          {
              "matched": false,
              "word": "obviate",
              "type": "v.",
              "definition": "To clear away or provide for, as an objection or difficulty."
          },
          {
              "matched": false,
              "word": "occasion",
              "type": "n.",
              "definition": "An important event or celebration."
          },
          {
              "matched": false,
              "word": "Occident",
              "type": "n.",
              "definition": "The countries lying west of Asia and the Turkish dominions."
          },
          {
              "matched": false,
              "word": "occlude",
              "type": "v.",
              "definition": "To absorb, as a gas by a metal."
          },
          {
              "matched": false,
              "word": "occult",
              "type": "adj.",
              "definition": "Existing but not immediately perceptible."
          },
          {
              "matched": false,
              "word": "occupant",
              "type": "n.",
              "definition": "A tenant in possession of property, as distinguished from the actual owner."
          },
          {
              "matched": false,
              "word": "occurrence",
              "type": "n.",
              "definition": "A happening."
          },
          {
              "matched": false,
              "word": "octagon",
              "type": "n.",
              "definition": "A figure with eight sides and eight angles."
          },
          {
              "matched": false,
              "word": "octave",
              "type": "n.",
              "definition": "A note at this interval above or below any other, considered in relation to that          "
          },
          {
              "matched": false,
              "word": "octavo",
              "type": "n.",
              "definition": "A book, or collection of paper in which the sheets are so folded as to make          "
          },
          {
              "matched": false,
              "word": "octogenarian",
              "type": "adj.",
              "definition": "A person of between eighty and ninety years."
          },
          {
              "matched": false,
              "word": "ocular",
              "type": "adj.",
              "definition": "Of or pertaining to the eye."
          },
          {
              "matched": false,
              "word": "oculist",
              "type": "n.",
              "definition": "One versed or skilled in treating diseases of the eye."
          },
          {
              "matched": false,
              "word": "oddity",
              "type": "n.",
              "definition": "An eccentricity."
          },
          {
              "matched": false,
              "word": "ode",
              "type": "n.",
              "definition": "The form of lyric poetry anciently intended to be sung."
          },
          {
              "matched": false,
              "word": "odious",
              "type": "adj.",
              "definition": "Hateful."
          },
          {
              "matched": false,
              "word": "odium",
              "type": "n.",
              "definition": "A feeling of extreme repugnance, or of dislike and disgust."
          },
          {
              "matched": false,
              "word": "odoriferous",
              "type": "adj.",
              "definition": "Having or diffusing an odor or scent, especially an agreeable one."
          },
          {
              "matched": false,
              "word": "odorous",
              "type": "adj.",
              "definition": "Having an odor, especially a fragrant one."
          },
          {
              "matched": false,
              "word": "off",
              "type": "adj.",
              "definition": "Farther or more distant."
          },
          {
              "matched": false,
              "word": "offhand",
              "type": "adv.",
              "definition": "Without preparation."
          },
          {
              "matched": false,
              "word": "officiate",
              "type": "v.",
              "definition": "To act as an officer or leader."
          },
          {
              "matched": false,
              "word": "officious",
              "type": "adj.",
              "definition": "Intermeddling with what is not one's concern."
          },
          {
              "matched": false,
              "word": "offshoot",
              "type": "n.",
              "definition": "Something that branches off from the parent stock."
          },
          {
              "matched": false,
              "word": "ogre",
              "type": "n.",
              "definition": "A demon or monster that was supposed to devour human beings."
          },
          {
              "matched": false,
              "word": "ointment",
              "type": "n.",
              "definition": "A fatty preparation with a butter-like consistency in which a medicinal          "
          },
          {
              "matched": false,
              "word": "olfactory",
              "type": "adj.",
              "definition": "of or pertaining to the sense of smell."
          },
          {
              "matched": false,
              "word": "olive-branch",
              "type": "n.",
              "definition": "A branch of the olive-tree, as an emblem of peace."
          },
          {
              "matched": false,
              "word": "ominous",
              "type": "adj.",
              "definition": "Portentous."
          },
          {
              "matched": false,
              "word": "omission",
              "type": "n.",
              "definition": "Exclusion."
          },
          {
              "matched": false,
              "word": "omnipotence",
              "type": "n.",
              "definition": "Unlimited and universal power."
          },
          {
              "matched": false,
              "word": "Omnipotent",
              "type": "adj.",
              "definition": "Possessed of unlimited and universal power."
          },
          {
              "matched": false,
              "word": "omniscience",
              "type": "n.",
              "definition": "Unlimited or infinite knowledge."
          },
          {
              "matched": false,
              "word": "omniscient",
              "type": "adj.",
              "definition": "Characterized by unlimited or infinite knowledge."
          },
          {
              "matched": false,
              "word": "omnivorous",
              "type": "adj.",
              "definition": "Eating or living upon food of all kinds indiscriminately."
          },
          {
              "matched": false,
              "word": "onerous",
              "type": "adj.",
              "definition": "Burdensome or oppressive."
          },
          {
              "matched": false,
              "word": "onrush",
              "type": "n.",
              "definition": "Onset."
          },
          {
              "matched": false,
              "word": "onset",
              "type": "n.",
              "definition": "An assault, especially of troops, upon an enemy or fortification."
          },
          {
              "matched": false,
              "word": "onslaught",
              "type": "n.",
              "definition": "A violent onset."
          },
          {
              "matched": false,
              "word": "onus",
              "type": "n.",
              "definition": "A burden or responsibility."
          },
          {
              "matched": false,
              "word": "opalescence",
              "type": "n.",
              "definition": "The property of combined refraction and reflection of light, resulting in          "
          },
          {
              "matched": false,
              "word": "opaque",
              "type": "adj.",
              "definition": "Impervious to light."
          },
          {
              "matched": false,
              "word": "operate",
              "type": "v.",
              "definition": "To put in action and supervise the working of."
          },
          {
              "matched": false,
              "word": "operative",
              "type": "adj.",
              "definition": "Active."
          },
          {
              "matched": false,
              "word": "operator",
              "type": "n.",
              "definition": "One who works with or controls some machine or scientific apparatus."
          },
          {
              "matched": false,
              "word": "operetta",
              "type": "n.",
              "definition": "A humorous play in dialogue and music, of more than one act."
          },
          {
              "matched": false,
              "word": "opinion",
              "type": "n.",
              "definition": "A conclusion or judgment held with confidence, but falling short of positive          "
          },
          {
              "matched": false,
              "word": "opponent",
              "type": "n.",
              "definition": "One who supports the opposite side in a debate, discussion, struggle, or          "
          },
          {
              "matched": false,
              "word": "opportune",
              "type": "adj.",
              "definition": "Especially fit as occurring, said, or done at the right moment."
          },
          {
              "matched": false,
              "word": "opportunist",
              "type": "n.",
              "definition": "One who takes advantage of circumstances to gain his ends."
          },
          {
              "matched": false,
              "word": "opportunity",
              "type": "n.",
              "definition": "Favorable or advantageous chance or opening."
          },
          {
              "matched": false,
              "word": "opposite",
              "type": "adj.",
              "definition": "Radically different or contrary in action or movement."
          },
          {
              "matched": false,
              "word": "opprobrium",
              "type": "n.",
              "definition": "The state of being scornfully reproached or accused of evil."
          },
          {
              "matched": false,
              "word": "optic",
              "type": "n.",
              "definition": "Pertaining to the eye or vision."
          },
          {
              "matched": false,
              "word": "optician",
              "type": "n.",
              "definition": "One who makes or deals in optical instruments or eye-glasses."
          },
          {
              "matched": false,
              "word": "optics",
              "type": "n.",
              "definition": "The science that treats of light and vision, and all that is connected with          "
          },
          {
              "matched": false,
              "word": "optimism",
              "type": "n.",
              "definition": "The view that everything in nature and the history of mankind is ordered for          "
          },
          {
              "matched": false,
              "word": "option",
              "type": "n.",
              "definition": "The right, power, or liberty of choosing."
          },
          {
              "matched": false,
              "word": "optometry",
              "type": "n.",
              "definition": "Measurement of the powers of vision."
          },
          {
              "matched": false,
              "word": "opulence",
              "type": "n.",
              "definition": "Affluence."
          },
          {
              "matched": false,
              "word": "opulent",
              "type": "adj.",
              "definition": "Wealthy."
          },
          {
              "matched": false,
              "word": "oral",
              "type": "adj.",
              "definition": "Uttered through the mouth."
          },
          {
              "matched": false,
              "word": "orate",
              "type": "v.",
              "definition": "To deliver an elaborate or formal public speech."
          },
          {
              "matched": false,
              "word": "oration",
              "type": "n.",
              "definition": "An elaborate or formal public speech."
          },
          {
              "matched": false,
              "word": "orator",
              "type": "n.",
              "definition": "One who delivers an elaborate or formal speech."
          },
          {
              "matched": false,
              "word": "oratorio",
              "type": "n.",
              "definition": "A composition for solo voices, chorus, and orchestra, generally taken from the          "
          },
          {
              "matched": false,
              "word": "oratory",
              "type": "n.",
              "definition": "The art of public speaking."
          },
          {
              "matched": false,
              "word": "ordeal",
              "type": "n.",
              "definition": "Anything that severely tests courage, strength, patience, conscience, etc."
          },
          {
              "matched": false,
              "word": "ordinal",
              "type": "n.",
              "definition": "That form of the numeral that shows the order of anything in a series, as          "
          },
          {
              "matched": false,
              "word": "ordination",
              "type": "n.",
              "definition": "A consecration to the ministry."
          },
          {
              "matched": false,
              "word": "ordnance",
              "type": "n.",
              "definition": "A general name for all kinds of weapons and their appliances used in war."
          },
          {
              "matched": false,
              "word": "orgies",
              "type": "n.",
              "definition": "Wild or wanton revelry."
          },
          {
              "matched": false,
              "word": "origin",
              "type": "n.",
              "definition": "The beginning of that which becomes or is made to be."
          },
          {
              "matched": false,
              "word": "original",
              "type": "adj.",
              "definition": "Not copied nor produced by imitation."
          },
          {
              "matched": false,
              "word": "originate",
              "type": "v.",
              "definition": "To cause or constitute the beginning or first stage of the existence of."
          },
          {
              "matched": false,
              "word": "ornate",
              "type": "adj.",
              "definition": "Ornamented to a marked degree."
          },
          {
              "matched": false,
              "word": "orthodox",
              "type": "adj.",
              "definition": "Holding the commonly accepted faith."
          },
          {
              "matched": false,
              "word": "orthodoxy",
              "type": "n.",
              "definition": "Acceptance of the common faith."
          },
          {
              "matched": false,
              "word": "orthogonal",
              "type": "adj.",
              "definition": "Having or determined by right angles."
          },
          {
              "matched": false,
              "word": "orthopedic",
              "type": "adj.",
              "definition": "Relating to the correcting or preventing of deformity"
          },
          {
              "matched": false,
              "word": "orthopedist",
              "type": "n.",
              "definition": "One who practices the correcting or preventing of deformity"
          },
          {
              "matched": false,
              "word": "oscillate",
              "type": "v.",
              "definition": "To swing back and forth."
          },
          {
              "matched": false,
              "word": "osculate",
              "type": "v.",
              "definition": "To kiss."
          },
          {
              "matched": false,
              "word": "ossify",
              "type": "v.",
              "definition": "to convert into bone."
          },
          {
              "matched": false,
              "word": "ostentation",
              "type": "n.",
              "definition": "A display dictated by vanity and intended to invite applause or flattery."
          },
          {
              "matched": false,
              "word": "ostracism",
              "type": "n.",
              "definition": "Exclusion from intercourse or favor, as in society or politics."
          },
          {
              "matched": false,
              "word": "ostracize",
              "type": "v.",
              "definition": "To exclude from public or private favor."
          },
          {
              "matched": false,
              "word": "ought",
              "type": "v.",
              "definition": "To be under moral obligation to be or do."
          },
          {
              "matched": false,
              "word": "oust",
              "type": "v.",
              "definition": "To eject."
          },
          {
              "matched": false,
              "word": "out-and-out",
              "type": "adv.",
              "definition": "Genuinely."
          },
          {
              "matched": false,
              "word": "outbreak",
              "type": "n.",
              "definition": "A sudden and violent breaking forth, as of something that has been pent up or          "
          },
          {
              "matched": false,
              "word": "outburst",
              "type": "n.",
              "definition": "A violent issue, especially of passion in an individual."
          },
          {
              "matched": false,
              "word": "outcast",
              "type": "n.",
              "definition": "One rejected and despised, especially socially."
          },
          {
              "matched": false,
              "word": "outcry",
              "type": "n.",
              "definition": "A vehement or loud cry or clamor."
          },
          {
              "matched": false,
              "word": "outdo",
              "type": "v.",
              "definition": "To surpass."
          },
          {
              "matched": false,
              "word": "outlandish",
              "type": "adj.",
              "definition": "Of barbarous, uncouth, and unfamiliar aspect or action."
          },
          {
              "matched": false,
              "word": "outlast",
              "type": "v.",
              "definition": "To last longer than."
          },
          {
              "matched": false,
              "word": "outlaw",
              "type": "n.",
              "definition": "A habitual lawbreaker."
          },
          {
              "matched": false,
              "word": "outlive",
              "type": "v.",
              "definition": "To continue to exist after."
          },
          {
              "matched": false,
              "word": "out-of-the-way",
              "type": "adj.",
              "definition": "Remotely situated."
          },
          {
              "matched": false,
              "word": "outpost",
              "type": "n.",
              "definition": "A detachment of troops stationed at a distance from the main body to guard          "
          },
          {
              "matched": false,
              "word": "outrage",
              "type": "n.",
              "definition": "A gross infringement of morality or decency."
          },
          {
              "matched": false,
              "word": "outrageous",
              "type": "adj.",
              "definition": "Shocking in conduct."
          },
          {
              "matched": false,
              "word": "outreach",
              "type": "v.",
              "definition": "To reach or go beyond."
          },
          {
              "matched": false,
              "word": "outride",
              "type": "v.",
              "definition": "To ride faster than."
          },
          {
              "matched": false,
              "word": "outrigger",
              "type": "n.",
              "definition": "A part built or arranged to project beyond a natural outline for support."
          },
          {
              "matched": false,
              "word": "outright",
              "type": "adv.",
              "definition": "Entirely."
          },
          {
              "matched": false,
              "word": "outskirt",
              "type": "n.",
              "definition": "A border region."
          },
          {
              "matched": false,
              "word": "outstretch",
              "type": "v.",
              "definition": "To extend."
          },
          {
              "matched": false,
              "word": "outstrip",
              "type": "v.",
              "definition": "To go beyond."
          },
          {
              "matched": false,
              "word": "outweigh",
              "type": "v.",
              "definition": "To surpass in importance or excellence."
          },
          {
              "matched": false,
              "word": "overdo",
              "type": "v.",
              "definition": "To overtax the strength of."
          },
          {
              "matched": false,
              "word": "overdose",
              "type": "n.",
              "definition": "An excessive dose, usually so large a dose of a medicine that its effect is          "
          },
          {
              "matched": false,
              "word": "overeat",
              "type": "v.",
              "definition": "To eat to excess."
          },
          {
              "matched": false,
              "word": "overhang",
              "type": "n.",
              "definition": "A portion of a structure which projects or hangs over."
          },
          {
              "matched": false,
              "word": "overleap",
              "type": "v.",
              "definition": "To leap beyond."
          },
          {
              "matched": false,
              "word": "overlord",
              "type": "n.",
              "definition": "One who holds supremacy over another."
          },
          {
              "matched": false,
              "word": "overpass",
              "type": "v.",
              "definition": "To pass across or over, as a river."
          },
          {
              "matched": false,
              "word": "overpay",
              "type": "v.",
              "definition": "To pay or reward in excess."
          },
          {
              "matched": false,
              "word": "overpower",
              "type": "v.",
              "definition": "To gain supremacy or victory over by superior power."
          },
          {
              "matched": false,
              "word": "overproduction",
              "type": "n.",
              "definition": "Excessive production."
          },
          {
              "matched": false,
              "word": "overreach",
              "type": "v.",
              "definition": "To stretch out too far."
          },
          {
              "matched": false,
              "word": "overrun",
              "type": "v.",
              "definition": "To infest or ravage."
          },
          {
              "matched": false,
              "word": "oversee",
              "type": "v.",
              "definition": "To superintend."
          },
          {
              "matched": false,
              "word": "overseer",
              "type": "n.",
              "definition": "A supervisor."
          },
          {
              "matched": false,
              "word": "overshadow",
              "type": "v.",
              "definition": "To cast into the shade or render insignificant by comparison."
          },
          {
              "matched": false,
              "word": "overstride",
              "type": "v.",
              "definition": "To step beyond."
          },
          {
              "matched": false,
              "word": "overthrow",
              "type": "v.",
              "definition": "To vanquish an established ruler or government."
          },
          {
              "matched": false,
              "word": "overtone",
              "type": "n.",
              "definition": "A harmonic."
          },
          {
              "matched": false,
              "word": "overture",
              "type": "n.",
              "definition": "An instrumental prelude to an opera, oratorio, or ballet."
          },
          {
              "matched": false,
              "word": "overweight",
              "type": "n.",
              "definition": "Preponderance."
          },
          {
              "matched": false,
              "word": "pacify",
              "type": "v.",
              "definition": "To bring into a peaceful state."
          },
          {
              "matched": false,
              "word": "packet",
              "type": "n.",
              "definition": "A bundle, as of letters."
          },
          {
              "matched": false,
              "word": "pact",
              "type": "n.",
              "definition": "A covenant."
          },
          {
              "matched": false,
              "word": "pagan",
              "type": "n.",
              "definition": "A worshiper of false gods."
          },
          {
              "matched": false,
              "word": "pageant",
              "type": "n.",
              "definition": "A dramatic representation, especially a spectacular one."
          },
          {
              "matched": false,
              "word": "palate",
              "type": "n.",
              "definition": "The roof of the mouth."
          },
          {
              "matched": false,
              "word": "palatial",
              "type": "adj.",
              "definition": "Magnificent."
          },
          {
              "matched": false,
              "word": "paleontology",
              "type": "n.",
              "definition": "The branch of biology that treats of ancient life and fossil organisms."
          },
          {
              "matched": false,
              "word": "palette",
              "type": "n.",
              "definition": "A thin tablet, with a hole for the thumb, upon which artists lay their colors          "
          },
          {
              "matched": false,
              "word": "palinode",
              "type": "n.",
              "definition": "A retraction."
          },
          {
              "matched": false,
              "word": "pall",
              "type": "v.",
              "definition": "To make dull by satiety."
          },
          {
              "matched": false,
              "word": "palliate",
              "type": "v.",
              "definition": "To cause to appear less guilty."
          },
          {
              "matched": false,
              "word": "pallid",
              "type": "adj.",
              "definition": "Of a pale or wan appearance."
          },
          {
              "matched": false,
              "word": "palpable",
              "type": "n.",
              "definition": "perceptible by feeling or touch."
          },
          {
              "matched": false,
              "word": "palsy",
              "type": "n.",
              "definition": "Paralysis."
          },
          {
              "matched": false,
              "word": "paly",
              "type": "adj.",
              "definition": "Lacking color or brilliancy."
          },
          {
              "matched": false,
              "word": "pamphlet",
              "type": "n.",
              "definition": "A brief treatise or essay, usually on a subject of current interest."
          },
          {
              "matched": false,
              "word": "pamphleteer",
              "type": "v.",
              "definition": "To compose or issue pamphlets, especially controversial ones."
          },
          {
              "matched": false,
              "word": "panacea",
              "type": "n.",
              "definition": "A remedy or medicine proposed for or professing to cure all diseases."
          },
          {
              "matched": false,
              "word": "Pan-American",
              "type": "adj.",
              "definition": "Including or pertaining to the whole of America, both North and South."
          },
          {
              "matched": false,
              "word": "pandemic",
              "type": "adj.",
              "definition": "Affecting a whole people or all classes, as a disease."
          },
          {
              "matched": false,
              "word": "pandemonium",
              "type": "n.",
              "definition": "A fiendish or riotous uproar."
          },
          {
              "matched": false,
              "word": "panegyric",
              "type": "n.",
              "definition": "A formal and elaborate eulogy, written or spoken, of a person or of an act."
          },
          {
              "matched": false,
              "word": "panel",
              "type": "n.",
              "definition": "A rectangular piece set in or as in a frame."
          },
          {
              "matched": false,
              "word": "panic",
              "type": "n.",
              "definition": "A sudden, unreasonable, overpowering fear."
          },
          {
              "matched": false,
              "word": "panoply",
              "type": "n.",
              "definition": "A full set of armor."
          },
          {
              "matched": false,
              "word": "panorama",
              "type": "n.",
              "definition": "A series of large pictures representing a continuous scene."
          },
          {
              "matched": false,
              "word": "pantheism",
              "type": "n.",
              "definition": "The worship of nature for itself or its beauty."
          },
          {
              "matched": false,
              "word": "Pantheon",
              "type": "n.",
              "definition": "A circular temple at Rome with a fine Corinthian portico and a great domed          "
          },
          {
              "matched": false,
              "word": "pantomime",
              "type": "n.",
              "definition": "Sign-language."
          },
          {
              "matched": false,
              "word": "pantoscope",
              "type": "n.",
              "definition": "A very wide-angled photographic lens."
          },
          {
              "matched": false,
              "word": "papacy",
              "type": "n.",
              "definition": "The official head of the Roman Catholic Church."
          },
          {
              "matched": false,
              "word": "papyrus",
              "type": "n.",
              "definition": "The writing-paper of the ancient Egyptians, and later of the Romans."
          },
          {
              "matched": false,
              "word": "parable",
              "type": "n.",
              "definition": "A brief narrative founded on real scenes or events usually with a moral."
          },
          {
              "matched": false,
              "word": "paradox",
              "type": "n.",
              "definition": "A statement or doctrine seemingly in contradiction to the received belief."
          },
          {
              "matched": false,
              "word": "paragon",
              "type": "n.",
              "definition": "A model of excellence."
          },
          {
              "matched": false,
              "word": "parallel",
              "type": "v.",
              "definition": "To cause to correspond or lie in the same direction and equidistant in all          "
          },
          {
              "matched": false,
              "word": "parallelism",
              "type": "n.",
              "definition": "Essential likeness."
          },
          {
              "matched": false,
              "word": "paralysis",
              "type": "n.",
              "definition": "Loss of the power of contractility in the voluntary or involuntary muscles."
          },
          {
              "matched": false,
              "word": "paralyze",
              "type": "v.",
              "definition": "To deprive of the power to act."
          },
          {
              "matched": false,
              "word": "paramount",
              "type": "adj.",
              "definition": "Supreme in authority."
          },
          {
              "matched": false,
              "word": "paramour",
              "type": "n.",
              "definition": "One who is unlawfully and immorally a lover or a mistress."
          },
          {
              "matched": false,
              "word": "paraphernalia",
              "type": "n.",
              "definition": "Miscellaneous articles of equipment or adornment."
          },
          {
              "matched": false,
              "word": "paraphrase",
              "type": "v.",
              "definition": "Translate freely."
          },
          {
              "matched": false,
              "word": "pare",
              "type": "v.",
              "definition": "To cut, shave, or remove (the outside) from anything."
          },
          {
              "matched": false,
              "word": "parentage",
              "type": "n.",
              "definition": "The relation of parent to child, of the producer to the produced, or of cause          "
          },
          {
              "matched": false,
              "word": "Pariah",
              "type": "n.",
              "definition": "A member of a degraded class; a social outcast."
          },
          {
              "matched": false,
              "word": "parish",
              "type": "n.",
              "definition": "The ecclesiastical district in charge of a pastor."
          },
          {
              "matched": false,
              "word": "Parisian",
              "type": "adj.",
              "definition": "Of or pertaining to the city of Paris."
          },
          {
              "matched": false,
              "word": "parity",
              "type": "n.",
              "definition": "Equality, as of condition or rank."
          },
          {
              "matched": false,
              "word": "parlance",
              "type": "n.",
              "definition": "Mode of speech."
          },
          {
              "matched": false,
              "word": "parley",
              "type": "v.",
              "definition": "To converse in."
          },
          {
              "matched": false,
              "word": "parliament",
              "type": "n.",
              "definition": "A legislative body."
          },
          {
              "matched": false,
              "word": "parlor",
              "type": "n.",
              "definition": "A room for reception of callers or entertainment of guests."
          },
          {
              "matched": false,
              "word": "parody",
              "type": "v.",
              "definition": "To render ludicrous by imitating the language of."
          },
          {
              "matched": false,
              "word": "paronymous",
              "type": "adj.",
              "definition": "Derived from the same root or primitive word."
          },
          {
              "matched": false,
              "word": "paroxysm",
              "type": "n.",
              "definition": "A sudden outburst of any kind of activity."
          },
          {
              "matched": false,
              "word": "parricide",
              "type": "n.",
              "definition": "The murder of a parent."
          },
          {
              "matched": false,
              "word": "parse",
              "type": "v.",
              "definition": "To describe, as a sentence, by separating it into its elements and describing          "
          },
          {
              "matched": false,
              "word": "parsimonious",
              "type": "adj.",
              "definition": "Unduly sparing in the use or expenditure of money."
          },
          {
              "matched": false,
              "word": "partible",
              "type": "adj.",
              "definition": "Separable."
          },
          {
              "matched": false,
              "word": "participant",
              "type": "n.",
              "definition": "One having a share or part."
          },
          {
              "matched": false,
              "word": "participate",
              "type": "v.",
              "definition": "To receive or have a part or share of."
          },
          {
              "matched": false,
              "word": "partition",
              "type": "n.",
              "definition": "That which separates anything into distinct parts."
          },
          {
              "matched": false,
              "word": "partisan",
              "type": "adj.",
              "definition": "Characterized by or exhibiting undue or unreasoning devotion to a party."
          },
          {
              "matched": false,
              "word": "passible",
              "type": "adj.",
              "definition": "Capable of feeling of suffering."
          },
          {
              "matched": false,
              "word": "passive",
              "type": "adj.",
              "definition": "Unresponsive."
          },
          {
              "matched": false,
              "word": "pastoral",
              "type": "adj.",
              "definition": "Having the spirit or sentiment of rural life."
          },
          {
              "matched": false,
              "word": "paternal",
              "type": "adj.",
              "definition": "Fatherly."
          },
          {
              "matched": false,
              "word": "paternity",
              "type": "n.",
              "definition": "Fatherhood."
          },
          {
              "matched": false,
              "word": "pathos",
              "type": "n.",
              "definition": "The quality in any form of representation that rouses emotion or sympathy."
          },
          {
              "matched": false,
              "word": "patriarch",
              "type": "n.",
              "definition": "The chief of a tribe or race who rules by paternal right."
          },
          {
              "matched": false,
              "word": "patrician",
              "type": "adj.",
              "definition": "Of senatorial or noble rank."
          },
          {
              "matched": false,
              "word": "patrimony",
              "type": "n.",
              "definition": "An inheritance from an ancestor, especially from one's father."
          },
          {
              "matched": false,
              "word": "patriotism",
              "type": "n.",
              "definition": "Love and devotion to one's country."
          },
          {
              "matched": false,
              "word": "patronize",
              "type": "v.",
              "definition": "To exercise an arrogant condescension toward."
          },
          {
              "matched": false,
              "word": "patronymic",
              "type": "adj.",
              "definition": "Formed after one's father's name."
          },
          {
              "matched": false,
              "word": "patter",
              "type": "v.",
              "definition": "To mumble something over and over."
          },
          {
              "matched": false,
              "word": "paucity",
              "type": "n.",
              "definition": "Fewness."
          },
          {
              "matched": false,
              "word": "pauper",
              "type": "n.",
              "definition": "One without means of support."
          },
          {
              "matched": false,
              "word": "pauperism",
              "type": "n.",
              "definition": "Dependence on charity."
          },
          {
              "matched": false,
              "word": "pavilion",
              "type": "n.",
              "definition": "An open structure for temporary shelter."
          },
          {
              "matched": false,
              "word": "payee",
              "type": "n.",
              "definition": "A person to whom money has been or is to be paid."
          },
          {
              "matched": false,
              "word": "peaceable",
              "type": "adj.",
              "definition": "Tranquil."
          },
          {
              "matched": false,
              "word": "peaceful",
              "type": "adj.",
              "definition": "Tranquil."
          },
          {
              "matched": false,
              "word": "peccable",
              "type": "adj.",
              "definition": "Capable of sinning."
          },
          {
              "matched": false,
              "word": "peccadillo",
              "type": "n.",
              "definition": "A small breach of propriety or principle."
          },
          {
              "matched": false,
              "word": "peccant",
              "type": "adj.",
              "definition": "Guilty."
          },
          {
              "matched": false,
              "word": "pectoral",
              "type": "adj.",
              "definition": "Pertaining to the breast or thorax."
          },
          {
              "matched": false,
              "word": "pecuniary",
              "type": "adj.",
              "definition": "Consisting of money."
          },
          {
              "matched": false,
              "word": "pedagogics",
              "type": "n.",
              "definition": "The science and art of teaching."
          },
          {
              "matched": false,
              "word": "pedagogue",
              "type": "n.",
              "definition": "A schoolmaster."
          },
          {
              "matched": false,
              "word": "pedagogy",
              "type": "n.",
              "definition": "The science and art of teaching"
          },
          {
              "matched": false,
              "word": "pedal",
              "type": "n.",
              "definition": "A lever for the foot usually applied only to musical instruments, cycles, and          "
          },
          {
              "matched": false,
              "word": "pedant",
              "type": "n.",
              "definition": "A scholar who makes needless and inopportune display of his learning."
          },
          {
              "matched": false,
              "word": "peddle",
              "type": "v.",
              "definition": "To go about with a small stock of goods to sell."
          },
          {
              "matched": false,
              "word": "pedestal",
              "type": "n.",
              "definition": "A base or support as for a column, statue, or vase."
          },
          {
              "matched": false,
              "word": "pedestrian",
              "type": "n.",
              "definition": "One who journeys on foot."
          },
          {
              "matched": false,
              "word": "pediatrics",
              "type": "n.",
              "definition": "The department of medical science that relates to the treatment of diseases          "
          },
          {
              "matched": false,
              "word": "pedigree",
              "type": "n.",
              "definition": "One's line of ancestors."
          },
          {
              "matched": false,
              "word": "peddler",
              "type": "n.",
              "definition": "One who travels from house to house with an assortment of goods for retail."
          },
          {
              "matched": false,
              "word": "peerage",
              "type": "n.",
              "definition": "The nobility."
          },
          {
              "matched": false,
              "word": "peerless",
              "type": "adj.",
              "definition": "Of unequaled excellence or worth."
          },
          {
              "matched": false,
              "word": "peevish",
              "type": "adj.",
              "definition": "Petulant. (irritable)"
          },
          {
              "matched": false,
              "word": "pellucid",
              "type": "adj.",
              "definition": "Translucent."
          },
          {
              "matched": false,
              "word": "penalty",
              "type": "n.",
              "definition": "The consequences that follow the transgression of natural or divine law."
          },
          {
              "matched": false,
              "word": "penance",
              "type": "n.",
              "definition": "Punishment to which one voluntarily submits or subjects himself as an          "
          },
          {
              "matched": false,
              "word": "penchant",
              "type": "n.",
              "definition": "A bias in favor of something."
          },
          {
              "matched": false,
              "word": "pendant",
              "type": "n.",
              "definition": "Anything that hangs from something else, either for ornament or for use."
          },
          {
              "matched": false,
              "word": "pendulous",
              "type": "adj.",
              "definition": "Hanging, especially so as to swing by an attached end or part."
          },
          {
              "matched": false,
              "word": "pendulum",
              "type": "n.",
              "definition": "A weight hung on a rod, serving by its oscillation to regulate the rate of a          "
          },
          {
              "matched": false,
              "word": "penetrable",
              "type": "adj.",
              "definition": "That may be pierced by physical, moral, or intellectual force."
          },
          {
              "matched": false,
              "word": "penetrate",
              "type": "v.",
              "definition": "To enter or force a way into the interior parts of."
          },
          {
              "matched": false,
              "word": "penetration",
              "type": "n.",
              "definition": "Discernment."
          },
          {
              "matched": false,
              "word": "peninsular",
              "type": "adj.",
              "definition": "Pertaining to a piece of land almost surrounded by water."
          },
          {
              "matched": false,
              "word": "penitence",
              "type": "n.",
              "definition": "Sorrow for sin with desire to amend and to atone."
          },
          {
              "matched": false,
              "word": "penitential",
              "type": "adj.",
              "definition": "Pertaining to sorrow for sin with desire to amend and to atone."
          },
          {
              "matched": false,
              "word": "pennant",
              "type": "n.",
              "definition": "A small flag."
          },
          {
              "matched": false,
              "word": "pension",
              "type": "n.",
              "definition": "A periodical allowance to an individual on account of past service done by          "
          },
          {
              "matched": false,
              "word": "pentagram",
              "type": "n.",
              "definition": "A figure having five points or lobes."
          },
          {
              "matched": false,
              "word": "pentavalent",
              "type": "adj.",
              "definition": "Quinqeuvalent."
          },
          {
              "matched": false,
              "word": "pentad",
              "type": "n.",
              "definition": "The number five."
          },
          {
              "matched": false,
              "word": "pentagon",
              "type": "n.",
              "definition": "A figure, especially, with five angles and five sides."
          },
          {
              "matched": false,
              "word": "pentahedron",
              "type": "n.",
              "definition": "A solid bounded by five plane faces."
          },
          {
              "matched": false,
              "word": "pentameter",
              "type": "n.",
              "definition": "In prosody, a line of verse containing five units or feet."
          },
          {
              "matched": false,
              "word": "pentathlon",
              "type": "n.",
              "definition": "The contest of five associated exercises in the great games and the same          "
          },
          {
              "matched": false,
              "word": "penultimate",
              "type": "adj.",
              "definition": "A syllable or member of a series that is last but one."
          },
          {
              "matched": false,
              "word": "penurious",
              "type": "adj.",
              "definition": "Excessively sparing in the use of money."
          },
          {
              "matched": false,
              "word": "penury",
              "type": "n.",
              "definition": "Indigence."
          },
          {
              "matched": false,
              "word": "perambulate",
              "type": "v.",
              "definition": "To walk about."
          },
          {
              "matched": false,
              "word": "perceive",
              "type": "v.",
              "definition": "To have knowledge of, or receive impressions concerning, through the medium of          "
          },
          {
              "matched": false,
              "word": "perceptible",
              "type": "adj.",
              "definition": "Cognizable."
          },
          {
              "matched": false,
              "word": "perception",
              "type": "n.",
              "definition": "Knowledge through the senses of the existence and properties of matter or          "
          },
          {
              "matched": false,
              "word": "percipience",
              "type": "n.",
              "definition": "The act of perceiving."
          },
          {
              "matched": false,
              "word": "percipient",
              "type": "n.",
              "definition": "One who or that which perceives."
          },
          {
              "matched": false,
              "word": "percolate",
              "type": "v.",
              "definition": "To filter."
          },
          {
              "matched": false,
              "word": "percolator",
              "type": "n.",
              "definition": "A filter."
          },
          {
              "matched": false,
              "word": "percussion",
              "type": "n.",
              "definition": "The sharp striking of one body against another."
          },
          {
              "matched": false,
              "word": "peremptory",
              "type": "adj.",
              "definition": "Precluding question or appeal."
          },
          {
              "matched": false,
              "word": "perennial",
              "type": "adj.",
              "definition": "Continuing though the year or through many years."
          },
          {
              "matched": false,
              "word": "perfectible",
              "type": "adj.",
              "definition": "Capable of being made perfect."
          },
          {
              "matched": false,
              "word": "perfidy",
              "type": "n.",
              "definition": "Treachery."
          },
          {
              "matched": false,
              "word": "perforate",
              "type": "v.",
              "definition": "To make a hole or holes through."
          },
          {
              "matched": false,
              "word": "perform",
              "type": "v.",
              "definition": "To accomplish."
          },
          {
              "matched": false,
              "word": "perfumery",
              "type": "n.",
              "definition": "The preparation of perfumes."
          },
          {
              "matched": false,
              "word": "perfunctory",
              "type": "adj.",
              "definition": "Half-hearted."
          },
          {
              "matched": false,
              "word": "perhaps",
              "type": "adv.",
              "definition": "Possibly."
          },
          {
              "matched": false,
              "word": "perigee",
              "type": "n.",
              "definition": "The point in the orbit of the moon when it is nearest the earth."
          },
          {
              "matched": false,
              "word": "periodicity",
              "type": "n.",
              "definition": "The habit or characteristic of recurrence at regular intervals."
          },
          {
              "matched": false,
              "word": "peripatetic",
              "type": "adj.",
              "definition": "Walking about."
          },
          {
              "matched": false,
              "word": "perjure",
              "type": "v.",
              "definition": "To swear falsely to."
          },
          {
              "matched": false,
              "word": "perjury",
              "type": "n.",
              "definition": "A solemn assertion of a falsity."
          },
          {
              "matched": false,
              "word": "permanence",
              "type": "n.",
              "definition": "A continuance in the same state, or without any change that destroys the          "
          },
          {
              "matched": false,
              "word": "permanent",
              "type": "adj.",
              "definition": "Durable."
          },
          {
              "matched": false,
              "word": "permeate",
              "type": "v.",
              "definition": "To pervade."
          },
          {
              "matched": false,
              "word": "permissible",
              "type": "adj.",
              "definition": "That may be allowed."
          },
          {
              "matched": false,
              "word": "permutation",
              "type": "n.",
              "definition": "Reciprocal change, different ordering of same items."
          },
          {
              "matched": false,
              "word": "pernicious",
              "type": "adj.",
              "definition": "Tending to kill or hurt."
          },
          {
              "matched": false,
              "word": "perpendicular",
              "type": "adj.",
              "definition": "Straight up and down."
          },
          {
              "matched": false,
              "word": "perpetrator",
              "type": "n.",
              "definition": "The doer of a wrong or a criminal act."
          },
          {
              "matched": false,
              "word": "perpetuate",
              "type": "v.",
              "definition": "To preserve from extinction or oblivion."
          },
          {
              "matched": false,
              "word": "perquisite",
              "type": "n.",
              "definition": "Any profit from service beyond the amount fixed as salary or wages."
          },
          {
              "matched": false,
              "word": "persecution",
              "type": "n.",
              "definition": "Harsh or malignant oppression."
          },
          {
              "matched": false,
              "word": "perseverance",
              "type": "n.",
              "definition": "A persistence in purpose and effort."
          },
          {
              "matched": false,
              "word": "persevere",
              "type": "v.",
              "definition": "To continue striving in spite of discouragements."
          },
          {
              "matched": false,
              "word": "persiflage",
              "type": "n.",
              "definition": "Banter."
          },
          {
              "matched": false,
              "word": "persist",
              "type": "v.",
              "definition": "To continue steadfast against opposition."
          },
          {
              "matched": false,
              "word": "persistence",
              "type": "n.",
              "definition": "A fixed adherence to a resolve, course of conduct, or the like."
          },
          {
              "matched": false,
              "word": "personage",
              "type": "n.",
              "definition": "A man or woman as an individual, especially one of rank or high station."
          },
          {
              "matched": false,
              "word": "personal",
              "type": "adj.",
              "definition": "Not general or public."
          },
          {
              "matched": false,
              "word": "personality",
              "type": "n.",
              "definition": "The attributes, taken collectively, that make up the character and nature          "
          },
          {
              "matched": false,
              "word": "personnel",
              "type": "n.",
              "definition": "The force of persons collectively employed in some service."
          },
          {
              "matched": false,
              "word": "perspective",
              "type": "n.",
              "definition": "The relative importance of facts or matters from any special point of view."
          },
          {
              "matched": false,
              "word": "perspicacious",
              "type": "adj.",
              "definition": "Astute."
          },
          {
              "matched": false,
              "word": "perspicacity",
              "type": "n.",
              "definition": "Acuteness or discernment."
          },
          {
              "matched": false,
              "word": "perspicuous",
              "type": "adj.",
              "definition": "Lucid."
          },
          {
              "matched": false,
              "word": "perspiration",
              "type": "n.",
              "definition": "Sweat."
          },
          {
              "matched": false,
              "word": "perspire",
              "type": "v.",
              "definition": "To excrete through the pores of the skin."
          },
          {
              "matched": false,
              "word": "persuade",
              "type": "v.",
              "definition": "To win the mind of by argument, eloquence, evidence, or reflection."
          },
          {
              "matched": false,
              "word": "persuadable",
              "type": "adj.",
              "definition": "capable of influencing to action by entreaty, statement, or anything that          "
          },
          {
              "matched": false,
              "word": "pertinacious",
              "type": "adj.",
              "definition": "Persistent or unyielding."
          },
          {
              "matched": false,
              "word": "pertinacity",
              "type": "n.",
              "definition": "Unyielding adherence."
          },
          {
              "matched": false,
              "word": "pertinent",
              "type": "adj.",
              "definition": "Relevant."
          },
          {
              "matched": false,
              "word": "perturb",
              "type": "v.",
              "definition": "To disturb greatly."
          },
          {
              "matched": false,
              "word": "perturbation",
              "type": "n.",
              "definition": "Mental excitement or confusion."
          },
          {
              "matched": false,
              "word": "perusal",
              "type": "n.",
              "definition": "The act of reading carefully or thoughtfully."
          },
          {
              "matched": false,
              "word": "pervade",
              "type": "v.",
              "definition": "To pass or spread through every part."
          },
          {
              "matched": false,
              "word": "pervasion",
              "type": "n.",
              "definition": "The state of spreading through every part."
          },
          {
              "matched": false,
              "word": "pervasive",
              "type": "adj.",
              "definition": "Thoroughly penetrating or permeating."
          },
          {
              "matched": false,
              "word": "perverse",
              "type": "adj.",
              "definition": "Unreasonable."
          },
          {
              "matched": false,
              "word": "perversion",
              "type": "n.",
              "definition": "Diversion from the true meaning or proper purpose."
          },
          {
              "matched": false,
              "word": "perversity",
              "type": "n.",
              "definition": "Wickedness."
          },
          {
              "matched": false,
              "word": "pervert",
              "type": "n.",
              "definition": "One who has forsaken a doctrine regarded as true for one esteemed false."
          },
          {
              "matched": false,
              "word": "pervious",
              "type": "adj.",
              "definition": "Admitting the entrance or passage of another substance."
          },
          {
              "matched": false,
              "word": "pestilence",
              "type": "n.",
              "definition": "A raging epidemic."
          },
          {
              "matched": false,
              "word": "pestilent",
              "type": "adj.",
              "definition": "Having a malign influence or effect."
          },
          {
              "matched": false,
              "word": "pestilential",
              "type": "adj.",
              "definition": "having the nature of or breeding pestilence."
          },
          {
              "matched": false,
              "word": "peter",
              "type": "v.",
              "definition": "To fail or lose power, efficiency, or value."
          },
          {
              "matched": false,
              "word": "petrify",
              "type": "v.",
              "definition": "To convert into a substance of stony hardness and character."
          },
          {
              "matched": false,
              "word": "petulance",
              "type": "n.",
              "definition": "The character or condition of being impatient, capricious or petulant."
          },
          {
              "matched": false,
              "word": "petulant",
              "type": "adj.",
              "definition": "Displaying impatience."
          },
          {
              "matched": false,
              "word": "pharmacopoeia",
              "type": "n.",
              "definition": "A book containing the formulas and methods of preparation of medicines          "
          },
          {
              "matched": false,
              "word": "pharmacy",
              "type": "n.",
              "definition": "The art or business of compounding and dispensing medicines."
          },
          {
              "matched": false,
              "word": "phenomenal",
              "type": "adj.",
              "definition": "Extraordinary or marvelous."
          },
          {
              "matched": false,
              "word": "phenomenon",
              "type": "n.",
              "definition": "Any unusual occurrence."
          },
          {
              "matched": false,
              "word": "philander",
              "type": "v.",
              "definition": "To play at courtship with a woman."
          },
          {
              "matched": false,
              "word": "philanthropic",
              "type": "adj.",
              "definition": "Benevolent."
          },
          {
              "matched": false,
              "word": "philanthropist",
              "type": "n.",
              "definition": "One who endeavors to help his fellow men."
          },
          {
              "matched": false,
              "word": "philanthropy",
              "type": "n.",
              "definition": "Active humanitarianism."
          },
          {
              "matched": false,
              "word": "philately",
              "type": "n.",
              "definition": "The study and collection of stamps."
          },
          {
              "matched": false,
              "word": "philharmonic",
              "type": "adj.",
              "definition": "Fond of music."
          },
          {
              "matched": false,
              "word": "philogynist",
              "type": "n.",
              "definition": "One who is fond of women."
          },
          {
              "matched": false,
              "word": "philologist",
              "type": "n.",
              "definition": "An expert in linguistics."
          },
          {
              "matched": false,
              "word": "philology",
              "type": "n.",
              "definition": "The study of language in connection with history and literature."
          },
          {
              "matched": false,
              "word": "philosophize",
              "type": "v.",
              "definition": "To seek ultimate causes and principles."
          },
          {
              "matched": false,
              "word": "philosophy",
              "type": "n.",
              "definition": "The general principles, laws, or causes that furnish the rational          "
          },
          {
              "matched": false,
              "word": "phlegmatic",
              "type": "adj.",
              "definition": "Not easily roused to feeling or action."
          },
          {
              "matched": false,
              "word": "phonetic",
              "type": "adj.",
              "definition": "Representing articulate sounds or speech."
          },
          {
              "matched": false,
              "word": "phonic",
              "type": "adj.",
              "definition": "Pertaining to the nature of sound."
          },
          {
              "matched": false,
              "word": "phonogram",
              "type": "n.",
              "definition": "A graphic character symbolizing an articulate sound."
          },
          {
              "matched": false,
              "word": "phonology",
              "type": "n.",
              "definition": "The science of human vocal sounds."
          },
          {
              "matched": false,
              "word": "phosphorescence",
              "type": "n.",
              "definition": "The property of emitting light."
          },
          {
              "matched": false,
              "word": "photoelectric",
              "type": "adj.",
              "definition": "Pertaining to the combined action of light and electricity."
          },
          {
              "matched": false,
              "word": "photometer",
              "type": "n.",
              "definition": "Any instrument for measuring the intensity of light or comparing the          "
          },
          {
              "matched": false,
              "word": "photometry",
              "type": "n.",
              "definition": "The art of measuring the intensity of light."
          },
          {
              "matched": false,
              "word": "physicist",
              "type": "n.",
              "definition": "A specialist in the science that treats of the phenomena associated with          "
          },
          {
              "matched": false,
              "word": "physics",
              "type": "n.",
              "definition": "The science that treats of the phenomena associated with matter and energy."
          },
          {
              "matched": false,
              "word": "physiocracy",
              "type": "n.",
              "definition": "The doctrine that land and its products are the only true wealth."
          },
          {
              "matched": false,
              "word": "physiognomy",
              "type": "n.",
              "definition": "The external appearance merely."
          },
          {
              "matched": false,
              "word": "physiography",
              "type": "n.",
              "definition": "Description of nature."
          },
          {
              "matched": false,
              "word": "physiology",
              "type": "n.",
              "definition": "The science of organic functions."
          },
          {
              "matched": false,
              "word": "physique",
              "type": "n.",
              "definition": "The physical structure or organization of a person."
          },
          {
              "matched": false,
              "word": "picayune",
              "type": "adj.",
              "definition": "Of small value."
          },
          {
              "matched": false,
              "word": "piccolo",
              "type": "n.",
              "definition": "A small flute."
          },
          {
              "matched": false,
              "word": "piece",
              "type": "n.",
              "definition": "A loose or separated part, as distinguished from the whole or the mass."
          },
          {
              "matched": false,
              "word": "piecemeal",
              "type": "adv.",
              "definition": "Gradually."
          },
          {
              "matched": false,
              "word": "pillage",
              "type": "n.",
              "definition": "Open robbery, as in war."
          },
          {
              "matched": false,
              "word": "pillory",
              "type": "n.",
              "definition": "A wooden framework in which an offender is fastened to boards and is exposed to          "
          },
          {
              "matched": false,
              "word": "pincers",
              "type": "n.",
              "definition": "An instrument having two lever-handles and two jaws working on a pivot."
          },
          {
              "matched": false,
              "word": "pinchers",
              "type": "n.",
              "definition": "An instrument having two jaws working on a pivot."
          },
          {
              "matched": false,
              "word": "pinnacle",
              "type": "n.",
              "definition": "A high or topmost point, as a mountain-peak."
          },
          {
              "matched": false,
              "word": "pioneer",
              "type": "n.",
              "definition": "One among the first to explore a country."
          },
          {
              "matched": false,
              "word": "pious",
              "type": "adj.",
              "definition": "Religious."
          },
          {
              "matched": false,
              "word": "pique",
              "type": "v.",
              "definition": "To excite a slight degree of anger in."
          },
          {
              "matched": false,
              "word": "piteous",
              "type": "adj.",
              "definition": "Compassionate."
          },
          {
              "matched": false,
              "word": "pitiable",
              "type": "adj.",
              "definition": "Contemptible."
          },
          {
              "matched": false,
              "word": "pitiful",
              "type": "adj.",
              "definition": "Wretched."
          },
          {
              "matched": false,
              "word": "pitiless",
              "type": "adj.",
              "definition": "Hard-hearted."
          },
          {
              "matched": false,
              "word": "pittance",
              "type": "n.",
              "definition": "Any small portion or meager allowance."
          },
          {
              "matched": false,
              "word": "placate",
              "type": "v.",
              "definition": "To bring from a state of angry or hostile feeling to one of patience or          "
          },
          {
              "matched": false,
              "word": "placid",
              "type": "adj.",
              "definition": "Serene."
          },
          {
              "matched": false,
              "word": "plagiarism",
              "type": "n.",
              "definition": "The stealing of passages from the writings of another and publishing them as          "
          },
          {
              "matched": false,
              "word": "planisphere",
              "type": "n.",
              "definition": "A polar projection of the heavens on a chart."
          },
          {
              "matched": false,
              "word": "plasticity",
              "type": "n.",
              "definition": "The property of some substances through which the form of the mass can          "
          },
          {
              "matched": false,
              "word": "platitude",
              "type": "n.",
              "definition": "A written or spoken statement that is flat, dull, or commonplace."
          },
          {
              "matched": false,
              "word": "plaudit",
              "type": "n.",
              "definition": "An expression of applause."
          },
          {
              "matched": false,
              "word": "plausible",
              "type": "adj.",
              "definition": "Seeming likely to be true, though open to doubt."
          },
          {
              "matched": false,
              "word": "playful",
              "type": "adj.",
              "definition": "Frolicsome."
          },
          {
              "matched": false,
              "word": "playwright",
              "type": "n.",
              "definition": "A maker of plays for the stage."
          },
          {
              "matched": false,
              "word": "plea",
              "type": "n.",
              "definition": "An argument to obtain some desired action."
          },
          {
              "matched": false,
              "word": "pleasant",
              "type": "adj.",
              "definition": "Agreeable."
          },
          {
              "matched": false,
              "word": "pleasurable",
              "type": "adj.",
              "definition": "Affording gratification."
          },
          {
              "matched": false,
              "word": "plebeian",
              "type": "adj.",
              "definition": "Common."
          },
          {
              "matched": false,
              "word": "pledgee",
              "type": "n.",
              "definition": "The person to whom anything is pledged."
          },
          {
              "matched": false,
              "word": "pledgeor",
              "type": "n.",
              "definition": "One who gives a pledge."
          },
          {
              "matched": false,
              "word": "plenary",
              "type": "adj.",
              "definition": "Entire."
          },
          {
              "matched": false,
              "word": "plenipotentiary",
              "type": "n.",
              "definition": "A person fully empowered to transact any business."
          },
          {
              "matched": false,
              "word": "plenitude",
              "type": "n.",
              "definition": "Abundance."
          },
          {
              "matched": false,
              "word": "plenteous",
              "type": "adj.",
              "definition": "Abundant."
          },
          {
              "matched": false,
              "word": "plumb",
              "type": "n.",
              "definition": "A weight suspended by a line to test the verticality of something."
          },
          {
              "matched": false,
              "word": "plummet",
              "type": "n.",
              "definition": "A piece of lead for making soundings, adjusting walls to the vertical."
          },
          {
              "matched": false,
              "word": "pluperfect",
              "type": "adj.",
              "definition": "Expressing past time or action prior to some other past time or action."
          },
          {
              "matched": false,
              "word": "plural",
              "type": "adj.",
              "definition": "Containing or consisting of more than one."
          },
          {
              "matched": false,
              "word": "plurality",
              "type": "n.",
              "definition": "A majority."
          },
          {
              "matched": false,
              "word": "plutocracy",
              "type": "n.",
              "definition": "A wealthy class in a political community who control the government by means          "
          },
          {
              "matched": false,
              "word": "pneumatic",
              "type": "adj.",
              "definition": "Pertaining to or consisting of air or gas."
          },
          {
              "matched": false,
              "word": "poesy",
              "type": "n.",
              "definition": "Poetry."
          },
          {
              "matched": false,
              "word": "poetaster",
              "type": "n.",
              "definition": "An inferior poet."
          },
          {
              "matched": false,
              "word": "poetic",
              "type": "adj.",
              "definition": "Pertaining to poetry."
          },
          {
              "matched": false,
              "word": "poetics",
              "type": "n.",
              "definition": "The rules and principles of poetry."
          },
          {
              "matched": false,
              "word": "poignancy",
              "type": "n.",
              "definition": "Severity or acuteness, especially of pain or grief."
          },
          {
              "matched": false,
              "word": "poignant",
              "type": "adj.",
              "definition": "Severely painful or acute to the spirit."
          },
          {
              "matched": false,
              "word": "poise",
              "type": "n.",
              "definition": "Equilibrium."
          },
          {
              "matched": false,
              "word": "polar",
              "type": "adj.",
              "definition": "Pertaining to the poles of a sphere, especially of the earth."
          },
          {
              "matched": false,
              "word": "polemics",
              "type": "n.",
              "definition": "The art of controversy or disputation."
          },
          {
              "matched": false,
              "word": "pollen",
              "type": "n.",
              "definition": "The fine dust-like grains or powder formed within the anther of a flowering          "
          },
          {
              "matched": false,
              "word": "pollute",
              "type": "v.",
              "definition": "To contaminate."
          },
          {
              "matched": false,
              "word": "polyarchy",
              "type": "n.",
              "definition": "Government by several or many persons of what- ever class."
          },
          {
              "matched": false,
              "word": "polycracy",
              "type": "n.",
              "definition": "The rule of many."
          },
          {
              "matched": false,
              "word": "polygamy",
              "type": "n.",
              "definition": "the fact or condition of having more than one wife or husband at once."
          },
          {
              "matched": false,
              "word": "polyglot",
              "type": "adj.",
              "definition": "Speaking several tongues."
          },
          {
              "matched": false,
              "word": "polygon",
              "type": "n.",
              "definition": "A figure having many angles."
          },
          {
              "matched": false,
              "word": "polyhedron",
              "type": "n.",
              "definition": "A solid bounded by plane faces, especially by more than four."
          },
          {
              "matched": false,
              "word": "polysyllable",
              "type": "adj.",
              "definition": "Having several syllables, especially more than three syllables."
          },
          {
              "matched": false,
              "word": "polytechnic",
              "type": "adj.",
              "definition": "Pertaining to, embracing, or practicing many arts."
          },
          {
              "matched": false,
              "word": "polytheism",
              "type": "n.",
              "definition": "The doctrine or belief that there are more gods than one."
          },
          {
              "matched": false,
              "word": "pommel",
              "type": "v.",
              "definition": "To beat with something thick or bulky."
          },
          {
              "matched": false,
              "word": "pomposity",
              "type": "n.",
              "definition": "The quality of being marked by an assumed stateliness and impressiveness of          "
          },
          {
              "matched": false,
              "word": "pompous",
              "type": "adj.",
              "definition": "Marked by an assumed stateliness and impressiveness of manner."
          },
          {
              "matched": false,
              "word": "ponder",
              "type": "v.",
              "definition": "To meditate or reflect upon."
          },
          {
              "matched": false,
              "word": "ponderous",
              "type": "adj.",
              "definition": "Unusually weighty or forcible."
          },
          {
              "matched": false,
              "word": "pontiff",
              "type": "n.",
              "definition": "The Pope."
          },
          {
              "matched": false,
              "word": "populace",
              "type": "n.",
              "definition": "The common people."
          },
          {
              "matched": false,
              "word": "populous",
              "type": "adj.",
              "definition": "Containing many inhabitants, especially in proportion to the territory."
          },
          {
              "matched": false,
              "word": "portend",
              "type": "v.",
              "definition": "To indicate as being about to happen, especially by previous signs."
          },
          {
              "matched": false,
              "word": "portent",
              "type": "n.",
              "definition": "Anything that indicates what is to happen."
          },
          {
              "matched": false,
              "word": "portfolio",
              "type": "n.",
              "definition": "A portable case for holding writing-materials, drawings, etc."
          },
          {
              "matched": false,
              "word": "posit",
              "type": "v.",
              "definition": "To present in an orderly manner."
          },
          {
              "matched": false,
              "word": "position",
              "type": "n.",
              "definition": "The manner in which a thing is placed."
          },
          {
              "matched": false,
              "word": "positive",
              "type": "adj.",
              "definition": "Free from doubt or hesitation."
          },
          {
              "matched": false,
              "word": "posse",
              "type": "n.",
              "definition": "A force of men."
          },
          {
              "matched": false,
              "word": "possess",
              "type": "v.",
              "definition": "To own."
          },
          {
              "matched": false,
              "word": "possession",
              "type": "n.",
              "definition": "The having, holding, or detention of property in one's power or command."
          },
          {
              "matched": false,
              "word": "possessive",
              "type": "adj.",
              "definition": "Pertaining to the having, holding, or detention of property in one's power          "
          },
          {
              "matched": false,
              "word": "possessor",
              "type": "n.",
              "definition": "One who owns, enjoys, or controls anything, as property."
          },
          {
              "matched": false,
              "word": "possible",
              "type": "adj.",
              "definition": "Being not beyond the reach of power natural, moral, or supernatural."
          },
          {
              "matched": false,
              "word": "postdate",
              "type": "v.",
              "definition": "To make the date of any writing later than the real date."
          },
          {
              "matched": false,
              "word": "posterior",
              "type": "n.",
              "definition": "The hinder part."
          },
          {
              "matched": false,
              "word": "postgraduate",
              "type": "adj.",
              "definition": "Pertaining to studies that are pursued after receiving a degree."
          },
          {
              "matched": false,
              "word": "postscript",
              "type": "n.",
              "definition": "Something added to a letter after the writer's signature."
          },
          {
              "matched": false,
              "word": "potency",
              "type": "n.",
              "definition": "Power."
          },
          {
              "matched": false,
              "word": "potent",
              "type": "adj.",
              "definition": "Physically powerful."
          },
          {
              "matched": false,
              "word": "potentate",
              "type": "n.",
              "definition": "One possessed of great power or sway."
          },
          {
              "matched": false,
              "word": "potential",
              "type": "n.",
              "definition": "Anything that may be possible."
          },
          {
              "matched": false,
              "word": "potion",
              "type": "n.",
              "definition": "A dose of liquid medicine."
          },
          {
              "matched": false,
              "word": "powerless",
              "type": "adj.",
              "definition": "Impotent."
          },
          {
              "matched": false,
              "word": "practicable",
              "type": "adj.",
              "definition": "Feasible."
          },
          {
              "matched": false,
              "word": "prate",
              "type": "v.",
              "definition": "To talk about vainly or foolishly."
          },
          {
              "matched": false,
              "word": "prattle",
              "type": "v.",
              "definition": "To utter in simple or childish talk."
          },
          {
              "matched": false,
              "word": "preamble",
              "type": "n.",
              "definition": "A statement introductory to and explanatory of what follows."
          },
          {
              "matched": false,
              "word": "precarious",
              "type": "adj.",
              "definition": "Perilous."
          },
          {
              "matched": false,
              "word": "precaution",
              "type": "n.",
              "definition": "A provision made in advance for some possible emergency or danger."
          },
          {
              "matched": false,
              "word": "precede",
              "type": "v.",
              "definition": "To happen first."
          },
          {
              "matched": false,
              "word": "precedence",
              "type": "n.",
              "definition": "Priority in place, time, or rank."
          },
          {
              "matched": false,
              "word": "precedent",
              "type": "n.",
              "definition": "An instance that may serve as a guide or basis for a rule."
          },
          {
              "matched": false,
              "word": "precedential",
              "type": "adj.",
              "definition": "Of the nature of an instance that may serve as a guide or basis for a          "
          },
          {
              "matched": false,
              "word": "precession",
              "type": "n.",
              "definition": "The act of going forward."
          },
          {
              "matched": false,
              "word": "precipice",
              "type": "n.",
              "definition": "A high and very steep or approximately vertical cliff."
          },
          {
              "matched": false,
              "word": "precipitant",
              "type": "adj.",
              "definition": "Moving onward quickly and heedlessly."
          },
          {
              "matched": false,
              "word": "precipitate",
              "type": "v.",
              "definition": "To force forward prematurely."
          },
          {
              "matched": false,
              "word": "precise",
              "type": "adj.",
              "definition": "Exact."
          },
          {
              "matched": false,
              "word": "precision",
              "type": "n.",
              "definition": "Accuracy of limitation, definition, or adjustment."
          },
          {
              "matched": false,
              "word": "preclude",
              "type": "v.",
              "definition": "To prevent."
          },
          {
              "matched": false,
              "word": "precocious",
              "type": "adj.",
              "definition": "Having the mental faculties prematurely developed."
          },
          {
              "matched": false,
              "word": "precursor",
              "type": "n.",
              "definition": "A forerunner or herald."
          },
          {
              "matched": false,
              "word": "predatory",
              "type": "adj.",
              "definition": "Prone to pillaging."
          },
          {
              "matched": false,
              "word": "predecessor",
              "type": "n.",
              "definition": "An incumbent of a given office previous to another."
          },
          {
              "matched": false,
              "word": "predicament",
              "type": "n.",
              "definition": "A difficult, trying situation or plight."
          },
          {
              "matched": false,
              "word": "predicate",
              "type": "v.",
              "definition": "To state as belonging to something."
          },
          {
              "matched": false,
              "word": "predict",
              "type": "v.",
              "definition": "To foretell."
          },
          {
              "matched": false,
              "word": "prediction",
              "type": "n.",
              "definition": "A prophecy."
          },
          {
              "matched": false,
              "word": "predominance",
              "type": "n.",
              "definition": "Ascendancy or preponderance."
          },
          {
              "matched": false,
              "word": "predominant",
              "type": "adj.",
              "definition": "Superior in power, influence, effectiveness, number, or degree."
          },
          {
              "matched": false,
              "word": "predominate",
              "type": "v.",
              "definition": "To be chief in importance, quantity, or degree."
          },
          {
              "matched": false,
              "word": "preeminence",
              "type": "n.",
              "definition": "Special eminence."
          },
          {
              "matched": false,
              "word": "preempt",
              "type": "v.",
              "definition": "To secure the right of preference in the purchase of public land."
          },
          {
              "matched": false,
              "word": "preemption",
              "type": "n.",
              "definition": "The right or act of purchasing before others."
          },
          {
              "matched": false,
              "word": "preengage",
              "type": "v.",
              "definition": "To preoccupy."
          },
          {
              "matched": false,
              "word": "preestablish",
              "type": "v.",
              "definition": "To settle or arrange beforehand."
          },
          {
              "matched": false,
              "word": "preexist",
              "type": "v.",
              "definition": "To exist at a period or in a state earlier than something else."
          },
          {
              "matched": false,
              "word": "preexistence",
              "type": "n.",
              "definition": "Existence antecedent to something."
          },
          {
              "matched": false,
              "word": "preface",
              "type": "n.",
              "definition": "A brief explanation or address to the reader, at the beginning of a book."
          },
          {
              "matched": false,
              "word": "prefatory",
              "type": "adj.",
              "definition": "Pertaining to a brief explanation to the reader at the beginning of a book."
          },
          {
              "matched": false,
              "word": "prefer",
              "type": "v.",
              "definition": "To hold in higher estimation."
          },
          {
              "matched": false,
              "word": "preferable",
              "type": "adj.",
              "definition": "More desirable than others."
          },
          {
              "matched": false,
              "word": "preference",
              "type": "n.",
              "definition": "An object of favor or choice."
          },
          {
              "matched": false,
              "word": "preferential",
              "type": "adj.",
              "definition": "Possessing, giving, or constituting preference or priority."
          },
          {
              "matched": false,
              "word": "preferment",
              "type": "n.",
              "definition": "Preference."
          },
          {
              "matched": false,
              "word": "prefix",
              "type": "v.",
              "definition": "To attach at the beginning."
          },
          {
              "matched": false,
              "word": "prehensible",
              "type": "adj.",
              "definition": "Capable of being grasped."
          },
          {
              "matched": false,
              "word": "prehensile",
              "type": "adj.",
              "definition": "Adapted for grasping or holding."
          },
          {
              "matched": false,
              "word": "prehension",
              "type": "n.",
              "definition": "The act of laying hold of or grasping."
          },
          {
              "matched": false,
              "word": "prejudice",
              "type": "n.",
              "definition": "A judgment or opinion formed without due examination of the facts."
          },
          {
              "matched": false,
              "word": "prelacy",
              "type": "n.",
              "definition": "A system of church government."
          },
          {
              "matched": false,
              "word": "prelate",
              "type": "n.",
              "definition": "One of a higher order of clergy having direct authority over other clergy."
          },
          {
              "matched": false,
              "word": "prelude",
              "type": "n.",
              "definition": "An introductory or opening performance."
          },
          {
              "matched": false,
              "word": "premature",
              "type": "adj.",
              "definition": "Coming too soon."
          },
          {
              "matched": false,
              "word": "premier",
              "type": "adj.",
              "definition": "First in rank or position."
          },
          {
              "matched": false,
              "word": "premise",
              "type": "n.",
              "definition": "A judgment as a conclusion."
          },
          {
              "matched": false,
              "word": "premonition",
              "type": "n.",
              "definition": "Foreboding."
          },
          {
              "matched": false,
              "word": "preoccupation",
              "type": "n.",
              "definition": "The state of having the mind, attention, or inclination preoccupied."
          },
          {
              "matched": false,
              "word": "preoccupy",
              "type": "v.",
              "definition": "To fill the mind of a person to the exclusion of other subjects."
          },
          {
              "matched": false,
              "word": "preordain",
              "type": "v.",
              "definition": "To foreordain."
          },
          {
              "matched": false,
              "word": "preparation",
              "type": "n.",
              "definition": "An act or proceeding designed to bring about some event."
          },
          {
              "matched": false,
              "word": "preparatory",
              "type": "adj.",
              "definition": "Having to do with what is preliminary."
          },
          {
              "matched": false,
              "word": "preponderant",
              "type": "adj.",
              "definition": "Prevalent."
          },
          {
              "matched": false,
              "word": "preponderate",
              "type": "v.",
              "definition": "To exceed in influence or power."
          },
          {
              "matched": false,
              "word": "prepossession",
              "type": "n.",
              "definition": "A preconceived liking."
          },
          {
              "matched": false,
              "word": "preposterous",
              "type": "adj.",
              "definition": "Utterly ridiculous or absurd."
          },
          {
              "matched": false,
              "word": "prerogative",
              "type": "adj.",
              "definition": "Having superior rank or precedence."
          },
          {
              "matched": false,
              "word": "presage",
              "type": "v.",
              "definition": "To foretell."
          },
          {
              "matched": false,
              "word": "prescience",
              "type": "n.",
              "definition": "Knowledge of events before they take place."
          },
          {
              "matched": false,
              "word": "prescient",
              "type": "adj.",
              "definition": "Foreknowing."
          },
          {
              "matched": false,
              "word": "prescript",
              "type": "adj.",
              "definition": "Prescribed as a rule or model."
          },
          {
              "matched": false,
              "word": "prescriptible",
              "type": "adj.",
              "definition": "Derived from authoritative direction."
          },
          {
              "matched": false,
              "word": "prescription",
              "type": "n.",
              "definition": "An authoritative direction."
          },
          {
              "matched": false,
              "word": "presentient",
              "type": "adj.",
              "definition": "Perceiving or feeling beforehand."
          },
          {
              "matched": false,
              "word": "presentiment",
              "type": "n.",
              "definition": "Foreboding."
          },
          {
              "matched": false,
              "word": "presentment",
              "type": "n.",
              "definition": "Semblance."
          },
          {
              "matched": false,
              "word": "preservation",
              "type": "n.",
              "definition": "Conservation."
          },
          {
              "matched": false,
              "word": "presumption",
              "type": "n.",
              "definition": "That which may be logically assumed to be true until disproved."
          },
          {
              "matched": false,
              "word": "presumptuous",
              "type": "adj.",
              "definition": "Assuming too much."
          },
          {
              "matched": false,
              "word": "pretension",
              "type": "n.",
              "definition": "A bold or presumptuous assertion."
          },
          {
              "matched": false,
              "word": "pretentious",
              "type": "adj.",
              "definition": "Marked by pretense, conceit, or display."
          },
          {
              "matched": false,
              "word": "preternatural",
              "type": "adj.",
              "definition": "Extraordinary."
          },
          {
              "matched": false,
              "word": "pretext",
              "type": "n.",
              "definition": "A fictitious reason or motive."
          },
          {
              "matched": false,
              "word": "prevalence",
              "type": "n.",
              "definition": "Frequency."
          },
          {
              "matched": false,
              "word": "prevalent",
              "type": "adj.",
              "definition": "Of wide extent or frequent occurrence."
          },
          {
              "matched": false,
              "word": "prevaricate",
              "type": "v.",
              "definition": "To use ambiguous or evasive language for the purpose of deceiving or          "
          },
          {
              "matched": false,
              "word": "prevention",
              "type": "n.",
              "definition": "Thwarting."
          },
          {
              "matched": false,
              "word": "prickle",
              "type": "v.",
              "definition": "To puncture slightly with fine, sharp points."
          },
          {
              "matched": false,
              "word": "priggish",
              "type": "adj.",
              "definition": "Conceited."
          },
          {
              "matched": false,
              "word": "prim",
              "type": "adj.",
              "definition": "Stiffly proper."
          },
          {
              "matched": false,
              "word": "prima",
              "type": "adj.",
              "definition": "First."
          },
          {
              "matched": false,
              "word": "primer",
              "type": "n.",
              "definition": "An elementary reading-book for children."
          },
          {
              "matched": false,
              "word": "primeval",
              "type": "adj.",
              "definition": "Belonging to the first ages."
          },
          {
              "matched": false,
              "word": "primitive",
              "type": "adj.",
              "definition": "Pertaining to the beginning or early times."
          },
          {
              "matched": false,
              "word": "principal",
              "type": "adj.",
              "definition": "Most important."
          },
          {
              "matched": false,
              "word": "principality",
              "type": "n.",
              "definition": "The territory of a reigning prince."
          },
          {
              "matched": false,
              "word": "principle",
              "type": "n.",
              "definition": "A general truth or proposition."
          },
          {
              "matched": false,
              "word": "priory",
              "type": "n.",
              "definition": "A monastic house."
          },
          {
              "matched": false,
              "word": "pristine",
              "type": "adj.",
              "definition": "Primitive."
          },
          {
              "matched": false,
              "word": "privateer",
              "type": "n.",
              "definition": "A vessel owned and officered by private persons, but carrying on maritime          "
          },
          {
              "matched": false,
              "word": "privilege",
              "type": "n.",
              "definition": "A right or immunity not enjoyed by all, or that may be enjoyed only under          "
          },
          {
              "matched": false,
              "word": "privity",
              "type": "n.",
              "definition": "Knowledge shared with another or others regarding a private matter."
          },
          {
              "matched": false,
              "word": "privy",
              "type": "adj.",
              "definition": "Participating with another or others in the knowledge of a secret transaction."
          },
          {
              "matched": false,
              "word": "probate",
              "type": "adj.",
              "definition": "Relating to making proof, as of a will."
          },
          {
              "matched": false,
              "word": "probation",
              "type": "n.",
              "definition": "Any proceeding designed to ascertain or test character, qualification, or the          "
          },
          {
              "matched": false,
              "word": "probe",
              "type": "v.",
              "definition": "To search through and through."
          },
          {
              "matched": false,
              "word": "probity",
              "type": "n.",
              "definition": "Virtue or integrity tested and confirmed."
          },
          {
              "matched": false,
              "word": "procedure",
              "type": "n.",
              "definition": "A manner or method of acting."
          },
          {
              "matched": false,
              "word": "proceed",
              "type": "v.",
              "definition": "To renew motion or action, as after rest or interruption."
          },
          {
              "matched": false,
              "word": "proclamation",
              "type": "n.",
              "definition": "Any announcement made in a public manner."
          },
          {
              "matched": false,
              "word": "procrastinate",
              "type": "v.",
              "definition": "To put off till tomorrow or till a future time."
          },
          {
              "matched": false,
              "word": "procrastination",
              "type": "n.",
              "definition": "Delay."
          },
          {
              "matched": false,
              "word": "proctor",
              "type": "n.",
              "definition": "An agent acting for another."
          },
          {
              "matched": false,
              "word": "prodigal",
              "type": "n.",
              "definition": "One wasteful or extravagant, especially in the use of money or property."
          },
          {
              "matched": false,
              "word": "prodigious",
              "type": "adj.",
              "definition": "Immense."
          },
          {
              "matched": false,
              "word": "prodigy",
              "type": "n.",
              "definition": "A person or thing of very remarkable gifts or qualities."
          },
          {
              "matched": false,
              "word": "productive",
              "type": "adj.",
              "definition": "Yielding in abundance."
          },
          {
              "matched": false,
              "word": "profession",
              "type": "n.",
              "definition": "Any calling or occupation involving special mental or other special          "
          },
          {
              "matched": false,
              "word": "professor",
              "type": "n.",
              "definition": "A public teacher of the highest grade in a university or college."
          },
          {
              "matched": false,
              "word": "proffer",
              "type": "v.",
              "definition": "To offer to another for acceptance."
          },
          {
              "matched": false,
              "word": "proficiency",
              "type": "n.",
              "definition": "An advanced state of acquirement, as in some knowledge, art, or science."
          },
          {
              "matched": false,
              "word": "proficient",
              "type": "adj.",
              "definition": "Possessing ample and ready knowledge or of skill in any art, science, or          "
          },
          {
              "matched": false,
              "word": "profile",
              "type": "n.",
              "definition": "An outline or contour."
          },
          {
              "matched": false,
              "word": "profiteer",
              "type": "n.",
              "definition": "One who profits."
          },
          {
              "matched": false,
              "word": "profligacy",
              "type": "n.",
              "definition": "Shameless viciousness."
          },
          {
              "matched": false,
              "word": "profligate",
              "type": "adj.",
              "definition": "Abandoned to vice."
          },
          {
              "matched": false,
              "word": "profuse",
              "type": "adj.",
              "definition": "Produced or displayed in overabundance."
          },
          {
              "matched": false,
              "word": "progeny",
              "type": "n.",
              "definition": "Offspring."
          },
          {
              "matched": false,
              "word": "progression",
              "type": "n.",
              "definition": "A moving forward or proceeding in course."
          },
          {
              "matched": false,
              "word": "prohibition",
              "type": "n.",
              "definition": "A decree or an order forbidding something."
          },
          {
              "matched": false,
              "word": "prohibitionist",
              "type": "n.",
              "definition": "One who favors the prohibition by law of the manufacture and sale of          "
          },
          {
              "matched": false,
              "word": "prohibitory",
              "type": "adj.",
              "definition": "Involving or equivalent to prohibition, especially of the sale of          "
          },
          {
              "matched": false,
              "word": "projection",
              "type": "n.",
              "definition": "A prominence."
          },
          {
              "matched": false,
              "word": "proletarian",
              "type": "n.",
              "definition": "A person of the lowest or poorest class."
          },
          {
              "matched": false,
              "word": "prolific",
              "type": "adj.",
              "definition": "Producing offspring or fruit."
          },
          {
              "matched": false,
              "word": "prolix",
              "type": "adj.",
              "definition": "Verbose."
          },
          {
              "matched": false,
              "word": "prologue",
              "type": "n.",
              "definition": "A prefatory statement or explanation to a poem, discourse, or performance."
          },
          {
              "matched": false,
              "word": "prolong",
              "type": "v.",
              "definition": "To extend in time or duration."
          },
          {
              "matched": false,
              "word": "promenade",
              "type": "v.",
              "definition": "To walk for amusement or exercise."
          },
          {
              "matched": false,
              "word": "prominence",
              "type": "n.",
              "definition": "The quality of being noticeable or distinguished."
          },
          {
              "matched": false,
              "word": "prominent",
              "type": "adj.",
              "definition": "Conspicuous in position, character, or importance."
          },
          {
              "matched": false,
              "word": "promiscuous",
              "type": "adj.",
              "definition": "Brought together without order, distinction, or design (for sex)."
          },
          {
              "matched": false,
              "word": "promissory",
              "type": "adj.",
              "definition": "Expressing an engagement to pay."
          },
          {
              "matched": false,
              "word": "promontory",
              "type": "n.",
              "definition": "A high point of land extending outward from the coastline into the sea."
          },
          {
              "matched": false,
              "word": "promoter",
              "type": "n.",
              "definition": "A furtherer, forwarder, or encourager."
          },
          {
              "matched": false,
              "word": "promulgate",
              "type": "v.",
              "definition": "To proclaim."
          },
          {
              "matched": false,
              "word": "propaganda",
              "type": "n.",
              "definition": "Any institution or systematic scheme for propagating a doctrine or system."
          },
          {
              "matched": false,
              "word": "propagate",
              "type": "v.",
              "definition": "To spread abroad or from person to person."
          },
          {
              "matched": false,
              "word": "propel",
              "type": "v.",
              "definition": "To drive or urge forward."
          },
          {
              "matched": false,
              "word": "propellant",
              "type": "adj.",
              "definition": "Propelling."
          },
          {
              "matched": false,
              "word": "propeller",
              "type": "n.",
              "definition": "One who or that which propels."
          },
          {
              "matched": false,
              "word": "prophecy",
              "type": "n.",
              "definition": "Any prediction or foretelling."
          },
          {
              "matched": false,
              "word": "prophesy",
              "type": "v.",
              "definition": "To predict or foretell, especially under divine inspiration and guidance."
          },
          {
              "matched": false,
              "word": "propitious",
              "type": "adj.",
              "definition": "Kindly disposed."
          },
          {
              "matched": false,
              "word": "proportionate",
              "type": "adj.",
              "definition": "Being in proportion."
          },
          {
              "matched": false,
              "word": "propriety",
              "type": "n.",
              "definition": "Accordance with recognized usage, custom, or principles."
          },
          {
              "matched": false,
              "word": "propulsion",
              "type": "n.",
              "definition": "A driving onward or forward."
          },
          {
              "matched": false,
              "word": "prosaic",
              "type": "adj.",
              "definition": "Unimaginative."
          },
          {
              "matched": false,
              "word": "proscenium",
              "type": "n.",
              "definition": "That part of the stage between the curtain and the orchestra."
          },
          {
              "matched": false,
              "word": "proscribe",
              "type": "v.",
              "definition": "To reject, as a teaching or a practice, with condemnation or denunciation."
          },
          {
              "matched": false,
              "word": "proscription",
              "type": "n.",
              "definition": "Any act of condemnation and rejection from favor and privilege."
          },
          {
              "matched": false,
              "word": "proselyte",
              "type": "n.",
              "definition": "One who has been won over from one religious belief to another."
          },
          {
              "matched": false,
              "word": "prosody",
              "type": "n.",
              "definition": "The science of poetical forms."
          },
          {
              "matched": false,
              "word": "prospector",
              "type": "n.",
              "definition": "One who makes exploration, search, or examination, especially for minerals."
          },
          {
              "matched": false,
              "word": "prospectus",
              "type": "n.",
              "definition": "A paper or pamphlet containing information of a proposed undertaking."
          },
          {
              "matched": false,
              "word": "prostrate",
              "type": "adj.",
              "definition": "Lying prone, or with the head to the ground."
          },
          {
              "matched": false,
              "word": "protagonist",
              "type": "n.",
              "definition": "A leader in any enterprise or contest."
          },
          {
              "matched": false,
              "word": "protection",
              "type": "n.",
              "definition": "Preservation from harm, danger, annoyance, or any other evil."
          },
          {
              "matched": false,
              "word": "protective",
              "type": "adj.",
              "definition": "Sheltering."
          },
          {
              "matched": false,
              "word": "protector",
              "type": "n.",
              "definition": "A defender."
          },
          {
              "matched": false,
              "word": "protege",
              "type": "n.",
              "definition": "One specially cared for and favored by another usually older person."
          },
          {
              "matched": false,
              "word": "Protestant",
              "type": "n.",
              "definition": "A Christian who denies the authority of the Pope and holds the right of          "
          },
          {
              "matched": false,
              "word": "protomartyr",
              "type": "n.",
              "definition": "The earliest victim in any cause."
          },
          {
              "matched": false,
              "word": "protocol",
              "type": "n.",
              "definition": "A declaration or memorandum of agreement less solemn and formal than a treaty."
          },
          {
              "matched": false,
              "word": "protoplasm",
              "type": "n.",
              "definition": "The substance that forms the principal portion of an animal or vegetable          "
          },
          {
              "matched": false,
              "word": "prototype",
              "type": "n.",
              "definition": "A work, original in character, afterward imitated in form or spirit."
          },
          {
              "matched": false,
              "word": "protract",
              "type": "v.",
              "definition": "To prolong."
          },
          {
              "matched": false,
              "word": "protrude",
              "type": "v.",
              "definition": "To push out or thrust forth."
          },
          {
              "matched": false,
              "word": "protrusion",
              "type": "n.",
              "definition": "The act of protruding."
          },
          {
              "matched": false,
              "word": "protuberance",
              "type": "n.",
              "definition": "Something that swells out from a surrounding surface."
          },
          {
              "matched": false,
              "word": "protuberant",
              "type": "adj.",
              "definition": "Bulging."
          },
          {
              "matched": false,
              "word": "protuberate",
              "type": "v.",
              "definition": "To swell or bulge beyond the surrounding surface."
          },
          {
              "matched": false,
              "word": "proverb",
              "type": "n.",
              "definition": "A brief, pithy saying, condensing in witty or striking form the wisdom of          "
          },
          {
              "matched": false,
              "word": "provident",
              "type": "adj.",
              "definition": "Anticipating and making ready for future wants or emergencies."
          },
          {
              "matched": false,
              "word": "providential",
              "type": "adj.",
              "definition": "Effected by divine guidance."
          },
          {
              "matched": false,
              "word": "provincial",
              "type": "adj.",
              "definition": "Uncultured in thought and manner."
          },
          {
              "matched": false,
              "word": "proviso",
              "type": "n.",
              "definition": "A clause in a contract, will, etc., by which its operation is rendered          "
          },
          {
              "matched": false,
              "word": "provocation",
              "type": "n.",
              "definition": "An action or mode of conduct that excites resentment."
          },
          {
              "matched": false,
              "word": "prowess",
              "type": "n.",
              "definition": "Strength, skill, and intrepidity in battle."
          },
          {
              "matched": false,
              "word": "proximately",
              "type": "adv.",
              "definition": "Immediately."
          },
          {
              "matched": false,
              "word": "proxy",
              "type": "n.",
              "definition": "A person who is empowered by another to represent him or her in a given matter."
          },
          {
              "matched": false,
              "word": "prudence",
              "type": "n.",
              "definition": "Caution."
          },
          {
              "matched": false,
              "word": "prudential",
              "type": "adj.",
              "definition": "Proceeding or marked by caution."
          },
          {
              "matched": false,
              "word": "prudery",
              "type": "n.",
              "definition": "An undue display of modesty or delicacy."
          },
          {
              "matched": false,
              "word": "prurient",
              "type": "adj.",
              "definition": "Inclined to lascivious thoughts and desires."
          },
          {
              "matched": false,
              "word": "pseudapostle",
              "type": "n.",
              "definition": "A pretended or false apostle."
          },
          {
              "matched": false,
              "word": "pseudonym",
              "type": "n.",
              "definition": "A fictitious name, especially when assumed by a writer."
          },
          {
              "matched": false,
              "word": "pseudonymity",
              "type": "n.",
              "definition": "The state or character of using a fictitious name."
          },
          {
              "matched": false,
              "word": "psychiatry",
              "type": "n.",
              "definition": "The branch of medicine that relates to mental disease."
          },
          {
              "matched": false,
              "word": "psychic",
              "type": "adj.",
              "definition": "Pertaining to the mind or soul."
          },
          {
              "matched": false,
              "word": "psychopathic",
              "type": "adj.",
              "definition": "Morally irresponsible."
          },
          {
              "matched": false,
              "word": "psychotherapy",
              "type": "n.",
              "definition": "The treatment of mental disease."
          },
          {
              "matched": false,
              "word": "pudgy",
              "type": "adj.",
              "definition": "Small and fat."
          },
          {
              "matched": false,
              "word": "puerile",
              "type": "adj.",
              "definition": "Childish."
          },
          {
              "matched": false,
              "word": "pugnacious",
              "type": "adj.",
              "definition": "Quarrelsome."
          },
          {
              "matched": false,
              "word": "puissant",
              "type": "adj.",
              "definition": "Possessing strength."
          },
          {
              "matched": false,
              "word": "pulmonary",
              "type": "adj.",
              "definition": "Pertaining to the lungs."
          },
          {
              "matched": false,
              "word": "punctilious",
              "type": "adj.",
              "definition": "Strictly observant of the rules or forms prescribed by law or custom."
          },
          {
              "matched": false,
              "word": "punctual",
              "type": "adj.",
              "definition": "Observant and exact in points of time."
          },
          {
              "matched": false,
              "word": "pungent",
              "type": "adj.",
              "definition": "Affecting the sense of smell."
          },
          {
              "matched": false,
              "word": "pungency",
              "type": "n.",
              "definition": "The quality of affecting the sense of smell."
          },
          {
              "matched": false,
              "word": "punitive",
              "type": "adj.",
              "definition": "Pertaining to punishment."
          },
          {
              "matched": false,
              "word": "pupilage",
              "type": "n.",
              "definition": "The state or period of being a student."
          },
          {
              "matched": false,
              "word": "purgatory",
              "type": "n.",
              "definition": "An intermediate state where souls are made fit for paradise or heaven by          "
          },
          {
              "matched": false,
              "word": "purl",
              "type": "v.",
              "definition": "To cause to whirl, as in an eddy."
          },
          {
              "matched": false,
              "word": "purloin",
              "type": "v.",
              "definition": "To steal."
          },
          {
              "matched": false,
              "word": "purport",
              "type": "n.",
              "definition": "Intent."
          },
          {
              "matched": false,
              "word": "purveyor",
              "type": "n.",
              "definition": "one who supplies"
          },
          {
              "matched": false,
              "word": "pusillanimous",
              "type": "adj.",
              "definition": "Without spirit or bravery."
          },
          {
              "matched": false,
              "word": "putrescent",
              "type": "adj.",
              "definition": "Undergoing decomposition of animal or vegetable matter accompanied by          "
          },
          {
              "matched": false,
              "word": "pyre",
              "type": "n.",
              "definition": "A heap of combustibles arranged for burning a dead body."
          },
          {
              "matched": false,
              "word": "pyromania",
              "type": "n.",
              "definition": "An insane propensity to set things on fire."
          },
          {
              "matched": false,
              "word": "pyrotechnic",
              "type": "adj.",
              "definition": "Pertaining to fireworks or their manufacture."
          },
          {
              "matched": false,
              "word": "pyx",
              "type": "n.",
              "definition": "A vessel or casket, usually of precious metal, in which the host is preserved."
          },
          {
              "matched": false,
              "word": "quackery",
              "type": "n.",
              "definition": "Charlatanry"
          },
          {
              "matched": false,
              "word": "quadrate",
              "type": "v.",
              "definition": "To divide into quarters."
          },
          {
              "matched": false,
              "word": "quadruple",
              "type": "v.",
              "definition": "To multiply by four."
          },
          {
              "matched": false,
              "word": "qualification",
              "type": "n.",
              "definition": "A requisite for an employment, position, right, or privilege."
          },
          {
              "matched": false,
              "word": "qualify",
              "type": "v.",
              "definition": "To endow or furnish with requisite ability, character, knowledge, skill, or          "
          },
          {
              "matched": false,
              "word": "qualm",
              "type": "n.",
              "definition": "A fit of nausea."
          },
          {
              "matched": false,
              "word": "quandary",
              "type": "n.",
              "definition": "A puzzling predicament."
          },
          {
              "matched": false,
              "word": "quantity",
              "type": "n.",
              "definition": "Magnitude."
          },
          {
              "matched": false,
              "word": "quarantine",
              "type": "n.",
              "definition": "The enforced isolation of any person or place infected with contagious          "
          },
          {
              "matched": false,
              "word": "quarrelsome",
              "type": "adj.",
              "definition": "Irascible."
          },
          {
              "matched": false,
              "word": "quarter",
              "type": "n.",
              "definition": "One of four equal parts into which anything is or may be divided."
          },
          {
              "matched": false,
              "word": "quarterly",
              "type": "adj.",
              "definition": "Occurring or made at intervals of three months."
          },
          {
              "matched": false,
              "word": "quartet",
              "type": "n.",
              "definition": "A composition for four voices or four instruments."
          },
          {
              "matched": false,
              "word": "quarto",
              "type": "n.",
              "definition": "An eight-page newspaper of any size."
          },
          {
              "matched": false,
              "word": "quay",
              "type": "n.",
              "definition": "A wharf or artificial landing-place on the shore of a harbor or projecting into          "
          },
          {
              "matched": false,
              "word": "querulous",
              "type": "adj.",
              "definition": "Habitually complaining."
          },
          {
              "matched": false,
              "word": "query",
              "type": "v.",
              "definition": "To make inquiry."
          },
          {
              "matched": false,
              "word": "queue",
              "type": "n.",
              "definition": "A file of persons waiting in order of their arrival, as for admittance."
          },
          {
              "matched": false,
              "word": "quibble",
              "type": "n.",
              "definition": "An utterly trivial distinction or objection."
          },
          {
              "matched": false,
              "word": "quiescence",
              "type": "n.",
              "definition": "Quiet."
          },
          {
              "matched": false,
              "word": "quiescent",
              "type": "adj.",
              "definition": "Being in a state of repose or inaction."
          },
          {
              "matched": false,
              "word": "quiet",
              "type": "adj.",
              "definition": "Making no noise."
          },
          {
              "matched": false,
              "word": "quietus",
              "type": "n.",
              "definition": "A silencing, suppressing, or ending."
          },
          {
              "matched": false,
              "word": "quintessence",
              "type": "n.",
              "definition": "The most essential part of anything."
          },
          {
              "matched": false,
              "word": "quintet",
              "type": "n.",
              "definition": "Musical composition arranged for five voices or instruments."
          },
          {
              "matched": false,
              "word": "quite",
              "type": "adv.",
              "definition": "Fully."
          },
          {
              "matched": false,
              "word": "Quixotic",
              "type": "adj.",
              "definition": "Chivalrous or romantic to a ridiculous or extravagant degree."
          },
          {
              "matched": false,
              "word": "rabid",
              "type": "adj.",
              "definition": "Affected with rabies or hydrophobia."
          },
          {
              "matched": false,
              "word": "racy",
              "type": "adj.",
              "definition": "Exciting or exhilarating to the mind."
          },
          {
              "matched": false,
              "word": "radiance",
              "type": "n.",
              "definition": "Brilliant or sparkling luster."
          },
          {
              "matched": false,
              "word": "radiate",
              "type": "v.",
              "definition": "To extend in all directions, as from a source or focus."
          },
          {
              "matched": false,
              "word": "radical",
              "type": "n.",
              "definition": "One who holds extreme views or advocates extreme measures."
          },
          {
              "matched": false,
              "word": "radix",
              "type": "n.",
              "definition": "That from or on which something is developed."
          },
          {
              "matched": false,
              "word": "raillery",
              "type": "n.",
              "definition": "Good-humored satire."
          },
          {
              "matched": false,
              "word": "ramify",
              "type": "v.",
              "definition": "To divide or subdivide into branches or subdivisions."
          },
          {
              "matched": false,
              "word": "ramose",
              "type": "adj.",
              "definition": "Branch-like."
          },
          {
              "matched": false,
              "word": "rampant",
              "type": "adj.",
              "definition": "Growing, climbing, or running without check or restraint."
          },
          {
              "matched": false,
              "word": "rampart",
              "type": "n.",
              "definition": "A bulwark or construction to oppose assault or hostile entry."
          },
          {
              "matched": false,
              "word": "rancor",
              "type": "n.",
              "definition": "Malice."
          },
          {
              "matched": false,
              "word": "rankle",
              "type": "v.",
              "definition": "To produce irritation or festering."
          },
          {
              "matched": false,
              "word": "rapacious",
              "type": "adj.",
              "definition": "Disposed to seize by violence or by unlawful or greedy methods."
          },
          {
              "matched": false,
              "word": "rapid",
              "type": "adj.",
              "definition": "Having great speed."
          },
          {
              "matched": false,
              "word": "rapine",
              "type": "n.",
              "definition": "The act of seizing and carrying off property by superior force, as in war."
          },
          {
              "matched": false,
              "word": "rapt",
              "type": "adj.",
              "definition": "Enraptured."
          },
          {
              "matched": false,
              "word": "raptorial",
              "type": "adj.",
              "definition": "Seizing and devouring living prey."
          },
          {
              "matched": false,
              "word": "ration",
              "type": "v.",
              "definition": "To provide with a fixed allowance or portion, especially of food."
          },
          {
              "matched": false,
              "word": "rationalism",
              "type": "n.",
              "definition": "The formation of opinions by relying upon reason alone, independently of          "
          },
          {
              "matched": false,
              "word": "raucous",
              "type": "adj.",
              "definition": "Harsh."
          },
          {
              "matched": false,
              "word": "ravage",
              "type": "v.",
              "definition": "To lay waste by pillage, rapine, devouring, or other destructive methods."
          },
          {
              "matched": false,
              "word": "ravenous",
              "type": "adj.",
              "definition": "Furiously voracious or hungry."
          },
          {
              "matched": false,
              "word": "ravine",
              "type": "n.",
              "definition": "A deep gorge or hollow, especially one worn by a stream or flow of water."
          },
          {
              "matched": false,
              "word": "reaction",
              "type": "n.",
              "definition": "Tendency towards a former, or opposite state of things, as after reform,          "
          },
          {
              "matched": false,
              "word": "reactionary",
              "type": "adj.",
              "definition": "Pertaining to, of the nature of, causing, or favoring reaction."
          },
          {
              "matched": false,
              "word": "readily",
              "type": "adv.",
              "definition": "Without objection or reluctance."
          },
          {
              "matched": false,
              "word": "readjust",
              "type": "v.",
              "definition": "To put in order after disarrangement."
          },
          {
              "matched": false,
              "word": "ready",
              "type": "adj.",
              "definition": "In a state of preparedness for any given purpose or occasion."
          },
          {
              "matched": false,
              "word": "realism",
              "type": "n.",
              "definition": "The principle and practice of depicting persons and scenes as they are believed          "
          },
          {
              "matched": false,
              "word": "rearrange",
              "type": "v.",
              "definition": "To arrange again or in a different order."
          },
          {
              "matched": false,
              "word": "reassure",
              "type": "v.",
              "definition": "To give new confidence."
          },
          {
              "matched": false,
              "word": "rebellious",
              "type": "adj.",
              "definition": "Insubordinate."
          },
          {
              "matched": false,
              "word": "rebuff",
              "type": "n.",
              "definition": "A peremptory or unexpected rejection of advances or approaches."
          },
          {
              "matched": false,
              "word": "rebuild",
              "type": "v.",
              "definition": "To build again or anew."
          },
          {
              "matched": false,
              "word": "rebut",
              "type": "v.",
              "definition": "To oppose by argument or a sufficient answer."
          },
          {
              "matched": false,
              "word": "recant",
              "type": "v.",
              "definition": "To withdraw formally one's belief (in something previously believed or          "
          },
          {
              "matched": false,
              "word": "recapitulate",
              "type": "v.",
              "definition": "To repeat again the principal points of."
          },
          {
              "matched": false,
              "word": "recapture",
              "type": "v.",
              "definition": "To capture again."
          },
          {
              "matched": false,
              "word": "recede",
              "type": "v.",
              "definition": "To move back or away."
          },
          {
              "matched": false,
              "word": "receivable",
              "type": "adj.",
              "definition": "Capable of being or fit to be received - often money."
          },
          {
              "matched": false,
              "word": "receptive",
              "type": "adj.",
              "definition": "Having the capacity, quality, or ability of receiving, as truths or          "
          },
          {
              "matched": false,
              "word": "recessive",
              "type": "adj.",
              "definition": "Having a tendency to go back."
          },
          {
              "matched": false,
              "word": "recidivist",
              "type": "n.",
              "definition": "A confirmed criminal."
          },
          {
              "matched": false,
              "word": "reciprocal",
              "type": "adj.",
              "definition": "Mutually interchangeable or convertible."
          },
          {
              "matched": false,
              "word": "reciprocate",
              "type": "v.",
              "definition": "To give and take mutually."
          },
          {
              "matched": false,
              "word": "reciprocity",
              "type": "n.",
              "definition": "Equal mutual rights and benefits granted and enjoyed."
          },
          {
              "matched": false,
              "word": "recitation",
              "type": "n.",
              "definition": "The act of reciting or repeating, especially in public and from memory."
          },
          {
              "matched": false,
              "word": "reck",
              "type": "v.",
              "definition": "To have a care or thought for."
          },
          {
              "matched": false,
              "word": "reckless",
              "type": "adj.",
              "definition": "Foolishly headless of danger."
          },
          {
              "matched": false,
              "word": "reclaim",
              "type": "v.",
              "definition": "To demand or to obtain the return or restoration of."
          },
          {
              "matched": false,
              "word": "recline",
              "type": "v.",
              "definition": "To cause to assume a leaning or recumbent attitude or position."
          },
          {
              "matched": false,
              "word": "recluse",
              "type": "n.",
              "definition": "One who lives in retirement or seclusion."
          },
          {
              "matched": false,
              "word": "reclusory",
              "type": "n.",
              "definition": "A hermitage."
          },
          {
              "matched": false,
              "word": "recognizance",
              "type": "n.",
              "definition": "An acknowledgment entered into before a court with condition to do some          "
          },
          {
              "matched": false,
              "word": "recognize",
              "type": "v.",
              "definition": "To recall the identity of (a person or thing)."
          },
          {
              "matched": false,
              "word": "recoil",
              "type": "v.",
              "definition": "To start back as in dismay, loathing, or dread."
          },
          {
              "matched": false,
              "word": "recollect",
              "type": "v.",
              "definition": "To recall the knowledge of."
          },
          {
              "matched": false,
              "word": "reconcilable",
              "type": "adj.",
              "definition": "Capable of being adjusted or harmonized."
          },
          {
              "matched": false,
              "word": "reconnoiter",
              "type": "v.",
              "definition": "To make a preliminary examination of for military, surveying, or geological          "
          },
          {
              "matched": false,
              "word": "reconsider",
              "type": "v.",
              "definition": "To review with care, especially with a view to a reversal of previous          "
          },
          {
              "matched": false,
              "word": "reconstruct",
              "type": "v.",
              "definition": "To rebuild."
          },
          {
              "matched": false,
              "word": "recourse",
              "type": "n.",
              "definition": "Resort to or application for help in exigency or trouble."
          },
          {
              "matched": false,
              "word": "recover",
              "type": "v.",
              "definition": "To regain."
          },
          {
              "matched": false,
              "word": "recreant",
              "type": "n.",
              "definition": "A cowardly or faithless person."
          },
          {
              "matched": false,
              "word": "recreate",
              "type": "v.",
              "definition": "To refresh after labor."
          },
          {
              "matched": false,
              "word": "recrudescence",
              "type": "n.",
              "definition": "The state of becoming raw or sore again."
          },
          {
              "matched": false,
              "word": "recrudescent",
              "type": "adj.",
              "definition": "Becoming raw or sore again."
          },
          {
              "matched": false,
              "word": "recruit",
              "type": "v.",
              "definition": "To enlist men for military or naval service."
          },
          {
              "matched": false,
              "word": "rectify",
              "type": "v.",
              "definition": "To correct."
          },
          {
              "matched": false,
              "word": "rectitude",
              "type": "n.",
              "definition": "The quality of being upright in principles and conduct."
          },
          {
              "matched": false,
              "word": "recuperate",
              "type": "v.",
              "definition": "To recover."
          },
          {
              "matched": false,
              "word": "recur",
              "type": "v.",
              "definition": "To happen again or repeatedly, especially at regular intervals."
          },
          {
              "matched": false,
              "word": "recure",
              "type": "v.",
              "definition": "To cure again."
          },
          {
              "matched": false,
              "word": "recurrent",
              "type": "adj.",
              "definition": "Returning from time to time, especially at regular or stated intervals."
          },
          {
              "matched": false,
              "word": "redemption",
              "type": "n.",
              "definition": "The recovery of what is mortgaged or pledged, by paying the debt."
          },
          {
              "matched": false,
              "word": "redolent",
              "type": "adj.",
              "definition": "Smelling sweet and agreeable."
          },
          {
              "matched": false,
              "word": "redolence",
              "type": "n.",
              "definition": "Smelling sweet and agreeable."
          },
          {
              "matched": false,
              "word": "redoubtable",
              "type": "adj.",
              "definition": "Formidable."
          },
          {
              "matched": false,
              "word": "redound",
              "type": "n.",
              "definition": "Rebound."
          },
          {
              "matched": false,
              "word": "redress",
              "type": "v.",
              "definition": "To set right, as a wrong by compensation or the punishment of the wrong-doer."
          },
          {
              "matched": false,
              "word": "reducible",
              "type": "adj.",
              "definition": "That may be reduced."
          },
          {
              "matched": false,
              "word": "redundance",
              "type": "n.",
              "definition": "Excess."
          },
          {
              "matched": false,
              "word": "redundant",
              "type": "adj.",
              "definition": "Constituting an excess."
          },
          {
              "matched": false,
              "word": "reestablish",
              "type": "v.",
              "definition": "To restore."
          },
          {
              "matched": false,
              "word": "refer",
              "type": "v.",
              "definition": "To direct or send for information or other purpose."
          },
          {
              "matched": false,
              "word": "referrer",
              "type": "n.",
              "definition": "One who refers."
          },
          {
              "matched": false,
              "word": "referable",
              "type": "adj.",
              "definition": "Ascribable."
          },
          {
              "matched": false,
              "word": "referee",
              "type": "n.",
              "definition": "An umpire."
          },
          {
              "matched": false,
              "word": "refinery",
              "type": "n.",
              "definition": "A place where some crude material, as sugar or petroleum, is purified."
          },
          {
              "matched": false,
              "word": "reflectible",
              "type": "adj.",
              "definition": "Capable of being turned back."
          },
          {
              "matched": false,
              "word": "reflection",
              "type": "n.",
              "definition": "The throwing off or back of light, heat, sound, or any form of energy that          "
          },
          {
              "matched": false,
              "word": "reflector",
              "type": "n.",
              "definition": "A mirror, as of metal, for reflecting light, heat, or sound in a particular          "
          },
          {
              "matched": false,
              "word": "reflexible",
              "type": "adj.",
              "definition": "Capable of being reflected."
          },
          {
              "matched": false,
              "word": "reform",
              "type": "n.",
              "definition": "Change for the better."
          },
          {
              "matched": false,
              "word": "reformer",
              "type": "n.",
              "definition": "One who carries out a reform."
          },
          {
              "matched": false,
              "word": "refract",
              "type": "v.",
              "definition": "To bend or turn from a direct course."
          },
          {
              "matched": false,
              "word": "refractory",
              "type": "adj.",
              "definition": "Not amenable to control."
          },
          {
              "matched": false,
              "word": "refragable",
              "type": "adj.",
              "definition": "Capable of being refuted."
          },
          {
              "matched": false,
              "word": "refringency",
              "type": "n.",
              "definition": "Power to refract."
          },
          {
              "matched": false,
              "word": "refringent",
              "type": "adj.",
              "definition": "Having the power to refract."
          },
          {
              "matched": false,
              "word": "refusal",
              "type": "n.",
              "definition": "Denial of what is asked."
          },
          {
              "matched": false,
              "word": "refute",
              "type": "v.",
              "definition": "To prove to be wrong."
          },
          {
              "matched": false,
              "word": "regale",
              "type": "v.",
              "definition": "To give unusual pleasure."
          },
          {
              "matched": false,
              "word": "regalia",
              "type": "n.",
              "definition": "pl. The emblems of royalty."
          },
          {
              "matched": false,
              "word": "regality",
              "type": "n.",
              "definition": "Royalty."
          },
          {
              "matched": false,
              "word": "regenerate",
              "type": "v.",
              "definition": "To reproduce."
          },
          {
              "matched": false,
              "word": "regent",
              "type": "n.",
              "definition": "One who is lawfully deputized to administer the government for the time being in          "
          },
          {
              "matched": false,
              "word": "regicide",
              "type": "n.",
              "definition": "The killing of a king or sovereign."
          },
          {
              "matched": false,
              "word": "regime",
              "type": "n.",
              "definition": "Particular conduct or administration of affairs."
          },
          {
              "matched": false,
              "word": "regimen",
              "type": "n.",
              "definition": "A systematized order or course of living with reference to food, clothing and          "
          },
          {
              "matched": false,
              "word": "regiment",
              "type": "n.",
              "definition": "A body of soldiers."
          },
          {
              "matched": false,
              "word": "regnant",
              "type": "adj.",
              "definition": "Exercising royal authority in one's own right."
          },
          {
              "matched": false,
              "word": "regress",
              "type": "v.",
              "definition": "To return to a former place or condition."
          },
          {
              "matched": false,
              "word": "regretful",
              "type": "adj.",
              "definition": "Feeling, expressive of, or full of regret."
          },
          {
              "matched": false,
              "word": "rehabilitate",
              "type": "v.",
              "definition": "To restore to a former status, capacity, right rank, or privilege."
          },
          {
              "matched": false,
              "word": "reign",
              "type": "v.",
              "definition": "To hold and exercise sovereign power."
          },
          {
              "matched": false,
              "word": "reimburse",
              "type": "v.",
              "definition": "To pay back as an equivalent of what has been expended."
          },
          {
              "matched": false,
              "word": "rein",
              "type": "n.",
              "definition": "A step attached to the bit for controlling a horse or other draft-animal."
          },
          {
              "matched": false,
              "word": "reinstate",
              "type": "v.",
              "definition": "To restore to a former state, station, or authority."
          },
          {
              "matched": false,
              "word": "reiterate",
              "type": "v.",
              "definition": "To say or do again and again."
          },
          {
              "matched": false,
              "word": "rejoin",
              "type": "v.",
              "definition": "To reunite after separation."
          },
          {
              "matched": false,
              "word": "rejuvenate",
              "type": "v.",
              "definition": "To restore to youth."
          },
          {
              "matched": false,
              "word": "rejuvenescence",
              "type": "n.",
              "definition": "A renewal of youth."
          },
          {
              "matched": false,
              "word": "relapse",
              "type": "v.",
              "definition": "To suffer a return of a disease after partial recovery."
          },
          {
              "matched": false,
              "word": "relegate",
              "type": "v.",
              "definition": "To send off or consign, as to an obscure position or remote destination."
          },
          {
              "matched": false,
              "word": "relent",
              "type": "v.",
              "definition": "To yield."
          },
          {
              "matched": false,
              "word": "relevant",
              "type": "adj.",
              "definition": "Bearing upon the matter in hand."
          },
          {
              "matched": false,
              "word": "reliance",
              "type": "n.",
              "definition": "Dependence."
          },
          {
              "matched": false,
              "word": "reliant",
              "type": "adj.",
              "definition": "Having confidence."
          },
          {
              "matched": false,
              "word": "relinquish",
              "type": "v.",
              "definition": "To give up using or having."
          },
          {
              "matched": false,
              "word": "reliquary",
              "type": "n.",
              "definition": "A casket, coffer, or repository in which relics are kept."
          },
          {
              "matched": false,
              "word": "relish",
              "type": "v.",
              "definition": "To like the taste or savor of."
          },
          {
              "matched": false,
              "word": "reluctance",
              "type": "n.",
              "definition": "Unwillingness."
          },
          {
              "matched": false,
              "word": "reluctant",
              "type": "adj.",
              "definition": "Unwilling."
          },
          {
              "matched": false,
              "word": "remembrance",
              "type": "n.",
              "definition": "Recollection."
          },
          {
              "matched": false,
              "word": "reminiscence",
              "type": "n.",
              "definition": "The calling to mind of incidents within the range of personal knowledge or          "
          },
          {
              "matched": false,
              "word": "reminiscent",
              "type": "adj.",
              "definition": "Pertaining to the recollection of matters of personal interest."
          },
          {
              "matched": false,
              "word": "remiss",
              "type": "adj.",
              "definition": "Negligent."
          },
          {
              "matched": false,
              "word": "remission",
              "type": "n.",
              "definition": "Temporary diminution of a disease."
          },
          {
              "matched": false,
              "word": "remodel",
              "type": "v.",
              "definition": "Reconstruct."
          },
          {
              "matched": false,
              "word": "remonstrance",
              "type": "n.",
              "definition": "Reproof."
          },
          {
              "matched": false,
              "word": "remonstrant",
              "type": "adj.",
              "definition": "Having the character of a reproof."
          },
          {
              "matched": false,
              "word": "remonstrate",
              "type": "v.",
              "definition": "To present a verbal or written protest to those who have power to right or          "
          },
          {
              "matched": false,
              "word": "remunerate",
              "type": "v.",
              "definition": "To pay or pay for."
          },
          {
              "matched": false,
              "word": "remuneration",
              "type": "n.",
              "definition": "Compensation."
          },
          {
              "matched": false,
              "word": "Renaissance",
              "type": "n.",
              "definition": "The revival of letters, and then of art, which marks the transition from          "
          },
          {
              "matched": false,
              "word": "rendezvous",
              "type": "n.",
              "definition": "A prearranged place of meeting."
          },
          {
              "matched": false,
              "word": "rendition",
              "type": "n.",
              "definition": "Interpretation."
          },
          {
              "matched": false,
              "word": "renovate",
              "type": "v.",
              "definition": "To restore after deterioration, as a building."
          },
          {
              "matched": false,
              "word": "renunciation",
              "type": "n.",
              "definition": "An explicit disclaimer of a right or privilege."
          },
          {
              "matched": false,
              "word": "reorganize",
              "type": "v.",
              "definition": "To change to a more satisfactory form of organization."
          },
          {
              "matched": false,
              "word": "reparable",
              "type": "adj.",
              "definition": "Capable of repair."
          },
          {
              "matched": false,
              "word": "reparation",
              "type": "n.",
              "definition": "The act of making amends, as for an injury, loss, or wrong."
          },
          {
              "matched": false,
              "word": "repartee",
              "type": "n.",
              "definition": "A ready, witty, or apt reply."
          },
          {
              "matched": false,
              "word": "repeal",
              "type": "v.",
              "definition": "To render of no further effect."
          },
          {
              "matched": false,
              "word": "repel",
              "type": "v.",
              "definition": "To force or keep back in a manner, physically or mentally."
          },
          {
              "matched": false,
              "word": "repellent",
              "type": "adj.",
              "definition": "Having power to force back in a manner, physically or mentally."
          },
          {
              "matched": false,
              "word": "repentance",
              "type": "n.",
              "definition": "Sorrow for something done or left undone, with desire to make things right          "
          },
          {
              "matched": false,
              "word": "repertory",
              "type": "n.",
              "definition": "A place where things are stored or gathered together."
          },
          {
              "matched": false,
              "word": "repetition",
              "type": "n.",
              "definition": "The act of repeating."
          },
          {
              "matched": false,
              "word": "repine",
              "type": "v.",
              "definition": "To indulge in fretfulness and faultfinding."
          },
          {
              "matched": false,
              "word": "replenish",
              "type": "v.",
              "definition": "To fill again, as something that has been emptied."
          },
          {
              "matched": false,
              "word": "replete",
              "type": "adj.",
              "definition": "Full to the uttermost."
          },
          {
              "matched": false,
              "word": "replica",
              "type": "n.",
              "definition": "A duplicate executed by the artist himself, and regarded, equally with the          "
          },
          {
              "matched": false,
              "word": "repository",
              "type": "n.",
              "definition": "A place in which goods are stored."
          },
          {
              "matched": false,
              "word": "reprehend",
              "type": "v.",
              "definition": "To find fault with."
          },
          {
              "matched": false,
              "word": "reprehensible",
              "type": "adj.",
              "definition": "Censurable."
          },
          {
              "matched": false,
              "word": "reprehension",
              "type": "n.",
              "definition": "Expression of blame."
          },
          {
              "matched": false,
              "word": "repress",
              "type": "v.",
              "definition": "To keep under restraint or control."
          },
          {
              "matched": false,
              "word": "repressible",
              "type": "adj.",
              "definition": "Able to be kept under restraint or control."
          },
          {
              "matched": false,
              "word": "reprieve",
              "type": "v.",
              "definition": "To grant a respite from punishment to."
          },
          {
              "matched": false,
              "word": "reprimand",
              "type": "v.",
              "definition": "To chide or rebuke for a fault."
          },
          {
              "matched": false,
              "word": "reprisal",
              "type": "n.",
              "definition": "Any infliction or act by way of retaliation on an enemy."
          },
          {
              "matched": false,
              "word": "reprobate",
              "type": "n.",
              "definition": "One abandoned to depravity and sin."
          },
          {
              "matched": false,
              "word": "reproduce",
              "type": "v.",
              "definition": "To make a copy of."
          },
          {
              "matched": false,
              "word": "reproduction",
              "type": "n.",
              "definition": "The process by which an animal or plant gives rise to another of its kind."
          },
          {
              "matched": false,
              "word": "reproof",
              "type": "n.",
              "definition": "An expression of disapproval or blame personally addressed to one censured."
          },
          {
              "matched": false,
              "word": "repudiate",
              "type": "v.",
              "definition": "To refuse to have anything to do with."
          },
          {
              "matched": false,
              "word": "repugnance",
              "type": "n.",
              "definition": "Thorough dislike."
          },
          {
              "matched": false,
              "word": "repugnant",
              "type": "adj.",
              "definition": "Offensive to taste and feeling."
          },
          {
              "matched": false,
              "word": "repulse",
              "type": "n.",
              "definition": "The act of beating or driving back, as an attacking or advancing enemy."
          },
          {
              "matched": false,
              "word": "repulsive",
              "type": "adj.",
              "definition": "Grossly offensive."
          },
          {
              "matched": false,
              "word": "repute",
              "type": "v.",
              "definition": "To hold in general opinion."
          },
          {
              "matched": false,
              "word": "requiem",
              "type": "n.",
              "definition": "A solemn mass sung for the repose of the souls of the dead."
          },
          {
              "matched": false,
              "word": "requisite",
              "type": "adj.",
              "definition": "Necessary."
          },
          {
              "matched": false,
              "word": "requital",
              "type": "n.",
              "definition": "Adequate return for good or ill."
          },
          {
              "matched": false,
              "word": "requite",
              "type": "v.",
              "definition": "To repay either good or evil to, as to a person."
          },
          {
              "matched": false,
              "word": "rescind",
              "type": "v.",
              "definition": "To make void, as an act, by the enacting authority or a superior authority."
          },
          {
              "matched": false,
              "word": "reseat",
              "type": "v.",
              "definition": "To place in position of office again."
          },
          {
              "matched": false,
              "word": "resemblance",
              "type": "n.",
              "definition": "Similarity in quality or form."
          },
          {
              "matched": false,
              "word": "resent",
              "type": "v.",
              "definition": "To be indignant at, as an injury or insult."
          },
          {
              "matched": false,
              "word": "reservoir",
              "type": "n.",
              "definition": "A receptacle where a quantity of some material, especially of a liquid or          "
          },
          {
              "matched": false,
              "word": "residue",
              "type": "n.",
              "definition": "A remainder or surplus after a part has been separated or otherwise treated."
          },
          {
              "matched": false,
              "word": "resilience",
              "type": "n.",
              "definition": "The power of springing back to a former position"
          },
          {
              "matched": false,
              "word": "resilient",
              "type": "adj.",
              "definition": "Having the quality of springing back to a former position."
          },
          {
              "matched": false,
              "word": "resistance",
              "type": "n.",
              "definition": "The exertion of opposite effort or effect."
          },
          {
              "matched": false,
              "word": "resistant",
              "type": "adj.",
              "definition": "Offering or tending to produce resistance."
          },
          {
              "matched": false,
              "word": "resistive",
              "type": "adj.",
              "definition": "Having or exercising the power of resistance."
          },
          {
              "matched": false,
              "word": "resistless",
              "type": "adj.",
              "definition": "Powerless."
          },
          {
              "matched": false,
              "word": "resonance",
              "type": "n.",
              "definition": "The quality of being able to reinforce sound by sympathetic vibrations."
          },
          {
              "matched": false,
              "word": "resonance",
              "type": "adj.",
              "definition": "Able to reinforce sound by sympathetic vibrations."
          },
          {
              "matched": false,
              "word": "resonate",
              "type": "v.",
              "definition": "To have or produce resonance."
          },
          {
              "matched": false,
              "word": "resource",
              "type": "n.",
              "definition": "That which is restored to, relied upon, or made available for aid or support."
          },
          {
              "matched": false,
              "word": "respite",
              "type": "n.",
              "definition": "Interval of rest."
          },
          {
              "matched": false,
              "word": "resplendent",
              "type": "adj.",
              "definition": "Very bright."
          },
          {
              "matched": false,
              "word": "respondent",
              "type": "adj.",
              "definition": "Answering."
          },
          {
              "matched": false,
              "word": "restitution",
              "type": "n.",
              "definition": "Restoration of anything to the one to whom it properly belongs."
          },
          {
              "matched": false,
              "word": "resumption",
              "type": "n.",
              "definition": "The act of taking back, or taking again."
          },
          {
              "matched": false,
              "word": "resurgent",
              "type": "adj.",
              "definition": "Surging back or again."
          },
          {
              "matched": false,
              "word": "resurrection",
              "type": "n.",
              "definition": "A return from death to life"
          },
          {
              "matched": false,
              "word": "resuscitate",
              "type": "v.",
              "definition": "To restore from apparent death."
          },
          {
              "matched": false,
              "word": "retaliate",
              "type": "v.",
              "definition": "To repay evil with a similar evil."
          },
          {
              "matched": false,
              "word": "retch",
              "type": "v.",
              "definition": "To make an effort to vomit."
          },
          {
              "matched": false,
              "word": "retention",
              "type": "n.",
              "definition": "The keeping of a thing within one's power or possession."
          },
          {
              "matched": false,
              "word": "reticence",
              "type": "n.",
              "definition": "The quality of habitually keeping silent or being reserved in utterance."
          },
          {
              "matched": false,
              "word": "reticent",
              "type": "adj.",
              "definition": "Habitually keeping silent or being reserved in utterance."
          },
          {
              "matched": false,
              "word": "retinue",
              "type": "n.",
              "definition": "The body of persons who attend a person of importance in travel or public          "
          },
          {
              "matched": false,
              "word": "retort",
              "type": "n.",
              "definition": "A retaliatory speech."
          },
          {
              "matched": false,
              "word": "retouch",
              "type": "v.",
              "definition": "To modify the details of."
          },
          {
              "matched": false,
              "word": "retrace",
              "type": "v.",
              "definition": "To follow backward or toward the place of beginning, as a track or marking."
          },
          {
              "matched": false,
              "word": "retract",
              "type": "v.",
              "definition": "To recall or take back (something that one has said)."
          },
          {
              "matched": false,
              "word": "retrench",
              "type": "v.",
              "definition": "To cut down or reduce in extent or quantity."
          },
          {
              "matched": false,
              "word": "retrieve",
              "type": "v.",
              "definition": "To recover something by searching."
          },
          {
              "matched": false,
              "word": "retroactive",
              "type": "adj.",
              "definition": "Operative on, affecting, or having reference to past events,          "
          },
          {
              "matched": false,
              "word": "retrograde",
              "type": "v.",
              "definition": "To cause to deteriorate or to move backward."
          },
          {
              "matched": false,
              "word": "retrogression",
              "type": "n.",
              "definition": "A going or moving backward or in a reverse direction."
          },
          {
              "matched": false,
              "word": "retrospect",
              "type": "n.",
              "definition": "A view or contemplation of something past."
          },
          {
              "matched": false,
              "word": "retrospective",
              "type": "adj.",
              "definition": "Looking back on the past."
          },
          {
              "matched": false,
              "word": "reunite",
              "type": "v.",
              "definition": "To unite or join again, as after separation."
          },
          {
              "matched": false,
              "word": "revelation",
              "type": "n.",
              "definition": "A disclosing, discovering, or making known of what was before secret,          "
          },
          {
              "matched": false,
              "word": "revere",
              "type": "v.",
              "definition": "To regard with worshipful veneration."
          },
          {
              "matched": false,
              "word": "reverent",
              "type": "adj.",
              "definition": "Humble."
          },
          {
              "matched": false,
              "word": "reversion",
              "type": "n.",
              "definition": "A return to or toward some former state or condition."
          },
          {
              "matched": false,
              "word": "revert",
              "type": "v.",
              "definition": "To return, or turn or look back, as toward a former position or the like."
          },
          {
              "matched": false,
              "word": "revile",
              "type": "v.",
              "definition": "To heap approach or abuse upon."
          },
          {
              "matched": false,
              "word": "revisal",
              "type": "n.",
              "definition": "Revision."
          },
          {
              "matched": false,
              "word": "revise",
              "type": "v.",
              "definition": "To examine for the correction of errors, or for the purpose of making changes."
          },
          {
              "matched": false,
              "word": "revocation",
              "type": "n.",
              "definition": "Repeal."
          },
          {
              "matched": false,
              "word": "revoke",
              "type": "v.",
              "definition": "To rescind."
          },
          {
              "matched": false,
              "word": "rhapsody",
              "type": "n.",
              "definition": "Rapt or rapturous utterance."
          },
          {
              "matched": false,
              "word": "rhetoric",
              "type": "n.",
              "definition": "The art of discourse."
          },
          {
              "matched": false,
              "word": "rhetorician",
              "type": "n.",
              "definition": "A showy writer or speaker."
          },
          {
              "matched": false,
              "word": "ribald",
              "type": "adj.",
              "definition": "Indulging in or manifesting coarse indecency or obscenity."
          },
          {
              "matched": false,
              "word": "riddance",
              "type": "n.",
              "definition": "The act or ridding or delivering from something undesirable."
          },
          {
              "matched": false,
              "word": "ridicule",
              "type": "n.",
              "definition": "Looks or acts expressing amused contempt."
          },
          {
              "matched": false,
              "word": "ridiculous",
              "type": "adj.",
              "definition": "Laughable and contemptible."
          },
          {
              "matched": false,
              "word": "rife",
              "type": "adj.",
              "definition": "Abundant."
          },
          {
              "matched": false,
              "word": "righteousness",
              "type": "n.",
              "definition": "Rectitude."
          },
          {
              "matched": false,
              "word": "rightful",
              "type": "adj.",
              "definition": "Conformed to a just claim according to established laws or usage."
          },
          {
              "matched": false,
              "word": "rigmarole",
              "type": "n.",
              "definition": "Nonsense."
          },
          {
              "matched": false,
              "word": "rigor",
              "type": "n.",
              "definition": "Inflexibility."
          },
          {
              "matched": false,
              "word": "rigorous",
              "type": "adj.",
              "definition": "Uncompromising."
          },
          {
              "matched": false,
              "word": "ripplet",
              "type": "n.",
              "definition": "A small ripple, as of water."
          },
          {
              "matched": false,
              "word": "risible",
              "type": "adj.",
              "definition": "capable of exciting laughter."
          },
          {
              "matched": false,
              "word": "rivulet",
              "type": "n.",
              "definition": "A small stream or brook."
          },
          {
              "matched": false,
              "word": "robust",
              "type": "adj.",
              "definition": "Characterized by great strength or power of endurance."
          },
          {
              "matched": false,
              "word": "rondo",
              "type": "n.",
              "definition": "A musical composition during which the first part or subject is repeated several          "
          },
          {
              "matched": false,
              "word": "rookery",
              "type": "n.",
              "definition": "A place where crows congregate to breed."
          },
          {
              "matched": false,
              "word": "rotary",
              "type": "adj.",
              "definition": "Turning around its axis, like a wheel, or so constructed as to turn thus."
          },
          {
              "matched": false,
              "word": "rotate",
              "type": "v.",
              "definition": "To cause to turn on or as on its axis, as a wheel."
          },
          {
              "matched": false,
              "word": "rote",
              "type": "n.",
              "definition": "Repetition of words or sounds as a means of learning them, with slight attention."
          },
          {
              "matched": false,
              "word": "rotund",
              "type": "adj.",
              "definition": "Round from fullness or plumpness."
          },
          {
              "matched": false,
              "word": "rudimentary",
              "type": "adj.",
              "definition": "Being in an initial, early, or incomplete stage of development."
          },
          {
              "matched": false,
              "word": "rue",
              "type": "v.",
              "definition": "To regret extremely."
          },
          {
              "matched": false,
              "word": "ruffian",
              "type": "adj.",
              "definition": "A lawless or recklessly brutal fellow."
          },
          {
              "matched": false,
              "word": "ruminant",
              "type": "adj.",
              "definition": "Chewing the cud."
          },
          {
              "matched": false,
              "word": "ruminate",
              "type": "v.",
              "definition": "To chew over again, as food previously swallowed and regurgitated."
          },
          {
              "matched": false,
              "word": "rupture",
              "type": "v.",
              "definition": "To separate the parts of by violence."
          },
          {
              "matched": false,
              "word": "rustic",
              "type": "adj.",
              "definition": "Characteristic of dwelling in the country."
          },
          {
              "matched": false,
              "word": "ruth",
              "type": "n.",
              "definition": "Sorrow for another's misery."
          },
          {
              "matched": false,
              "word": "sacrifice",
              "type": "v.",
              "definition": "To make an offering of to deity, especially by presenting on an altar."
          },
          {
              "matched": false,
              "word": "sacrificial",
              "type": "adj.",
              "definition": "Offering or offered as an atonement for sin."
          },
          {
              "matched": false,
              "word": "sacrilege",
              "type": "n.",
              "definition": "The act of violating or profaning anything sacred."
          },
          {
              "matched": false,
              "word": "sacrilegious",
              "type": "adj.",
              "definition": "Impious."
          },
          {
              "matched": false,
              "word": "safeguard",
              "type": "v.",
              "definition": "To protect."
          },
          {
              "matched": false,
              "word": "sagacious",
              "type": "adj.",
              "definition": "Able to discern and distinguish with wise perception."
          },
          {
              "matched": false,
              "word": "salacious",
              "type": "adj.",
              "definition": "Having strong sexual desires."
          },
          {
              "matched": false,
              "word": "salience",
              "type": "n.",
              "definition": "The condition of standing out distinctly."
          },
          {
              "matched": false,
              "word": "salient",
              "type": "adj.",
              "definition": "Standing out prominently."
          },
          {
              "matched": false,
              "word": "saline",
              "type": "adj.",
              "definition": "Constituting or consisting of salt."
          },
          {
              "matched": false,
              "word": "salutary",
              "type": "adj.",
              "definition": "Beneficial."
          },
          {
              "matched": false,
              "word": "salutation",
              "type": "n.",
              "definition": "Any form of greeting, hailing, or welcome, whether by word or act."
          },
          {
              "matched": false,
              "word": "salutatory",
              "type": "n.",
              "definition": "The opening oration at the commencement in American colleges."
          },
          {
              "matched": false,
              "word": "salvage",
              "type": "n.",
              "definition": "Any act of saving property."
          },
          {
              "matched": false,
              "word": "salvo",
              "type": "n.",
              "definition": "A salute given by firing all the guns, as at the funeral of an officer."
          },
          {
              "matched": false,
              "word": "sanctimonious",
              "type": "adj.",
              "definition": "Making an ostentatious display or hypocritical pretense of holiness or          "
          },
          {
              "matched": false,
              "word": "sanction",
              "type": "v.",
              "definition": "To approve authoritatively."
          },
          {
              "matched": false,
              "word": "sanctity",
              "type": "n.",
              "definition": "Holiness."
          },
          {
              "matched": false,
              "word": "sanguinary",
              "type": "adj.",
              "definition": "Bloody."
          },
          {
              "matched": false,
              "word": "sanguine",
              "type": "adj.",
              "definition": "Having the color of blood."
          },
          {
              "matched": false,
              "word": "sanguineous",
              "type": "adj.",
              "definition": "Consisting of blood."
          },
          {
              "matched": false,
              "word": "sapid",
              "type": "adj.",
              "definition": "Affecting the sense of taste."
          },
          {
              "matched": false,
              "word": "sapience",
              "type": "n.",
              "definition": "Deep wisdom or knowledge."
          },
          {
              "matched": false,
              "word": "sapient",
              "type": "adj.",
              "definition": "Possessing wisdom."
          },
          {
              "matched": false,
              "word": "sapiential",
              "type": "adj.",
              "definition": "Possessing wisdom."
          },
          {
              "matched": false,
              "word": "saponaceous",
              "type": "adj.",
              "definition": "Having the nature or quality of soap."
          },
          {
              "matched": false,
              "word": "sarcasm",
              "type": "n.",
              "definition": "Cutting and reproachful language."
          },
          {
              "matched": false,
              "word": "sarcophagus",
              "type": "n.",
              "definition": "A stone coffin or a chest-like tomb."
          },
          {
              "matched": false,
              "word": "sardonic",
              "type": "adj.",
              "definition": "Scornfully or bitterly sarcastic."
          },
          {
              "matched": false,
              "word": "satiate",
              "type": "v.",
              "definition": "To satisfy fully the appetite or desire of."
          },
          {
              "matched": false,
              "word": "satire",
              "type": "n.",
              "definition": "The employment of sarcasm, irony, or keenness of wit in ridiculing vices."
          },
          {
              "matched": false,
              "word": "satiric",
              "type": "adj.",
              "definition": "Resembling poetry, in which vice, incapacity ,or corruption is held up to          "
          },
          {
              "matched": false,
              "word": "satirize",
              "type": "v.",
              "definition": "To treat with sarcasm or derisive wit."
          },
          {
              "matched": false,
              "word": "satyr",
              "type": "n.",
              "definition": "A very lascivious person."
          },
          {
              "matched": false,
              "word": "savage",
              "type": "n.",
              "definition": "A wild and uncivilized human being."
          },
          {
              "matched": false,
              "word": "savor",
              "type": "v.",
              "definition": "To perceive by taste or smell."
          },
          {
              "matched": false,
              "word": "scabbard",
              "type": "n.",
              "definition": "The sheath of a sword or similar bladed weapon."
          },
          {
              "matched": false,
              "word": "scarcity",
              "type": "n.",
              "definition": "Insufficiency of supply for needs or ordinary demands."
          },
          {
              "matched": false,
              "word": "scholarly",
              "type": "adj.",
              "definition": "Characteristic of an erudite person."
          },
          {
              "matched": false,
              "word": "scholastic",
              "type": "adj.",
              "definition": "Pertaining to education or schools."
          },
          {
              "matched": false,
              "word": "scintilla",
              "type": "n.",
              "definition": "The faintest ray."
          },
          {
              "matched": false,
              "word": "scintillate",
              "type": "v.",
              "definition": "To emit or send forth sparks or little flashes of light."
          },
          {
              "matched": false,
              "word": "scope",
              "type": "n.",
              "definition": "A range of action or view."
          },
          {
              "matched": false,
              "word": "scoundrel",
              "type": "n.",
              "definition": "A man without principle."
          },
          {
              "matched": false,
              "word": "scribble",
              "type": "n.",
              "definition": "Hasty, careless writing."
          },
          {
              "matched": false,
              "word": "scribe",
              "type": "n.",
              "definition": "One who writes or is skilled in writing."
          },
          {
              "matched": false,
              "word": "script",
              "type": "n.",
              "definition": "Writing or handwriting of the ordinary cursive form."
          },
          {
              "matched": false,
              "word": "Scriptural",
              "type": "adj.",
              "definition": "Pertaining to, contained in, or warranted by the Holy Scriptures."
          },
          {
              "matched": false,
              "word": "scruple",
              "type": "n.",
              "definition": "Doubt or uncertainty regarding a question of moral right or duty."
          },
          {
              "matched": false,
              "word": "scrupulous",
              "type": "adj.",
              "definition": "Cautious in action for fear of doing wrong."
          },
          {
              "matched": false,
              "word": "scurrilous",
              "type": "adj.",
              "definition": "Grossly indecent or vulgar."
          },
          {
              "matched": false,
              "word": "scuttle",
              "type": "v.",
              "definition": "To sink (a ship) by making holes in the bottom."
          },
          {
              "matched": false,
              "word": "scythe",
              "type": "n.",
              "definition": "A long curved blade for mowing, reaping, etc."
          },
          {
              "matched": false,
              "word": "seance",
              "type": "n.",
              "definition": "A meeting of spirituals for consulting spirits."
          },
          {
              "matched": false,
              "word": "sear",
              "type": "v.",
              "definition": "To burn on the surface."
          },
          {
              "matched": false,
              "word": "sebaceous",
              "type": "adj.",
              "definition": "Pertaining to or appearing like fat."
          },
          {
              "matched": false,
              "word": "secant",
              "type": "adj.",
              "definition": "Cutting, especially into two parts."
          },
          {
              "matched": false,
              "word": "secede",
              "type": "v.",
              "definition": "To withdraw from union or association, especially from a political or religious          "
          },
          {
              "matched": false,
              "word": "secession",
              "type": "n.",
              "definition": "Voluntary withdrawal from fellowship, especially from political or religious          "
          },
          {
              "matched": false,
              "word": "seclude",
              "type": "v.",
              "definition": "To place, keep, or withdraw from the companionship of others."
          },
          {
              "matched": false,
              "word": "seclusion",
              "type": "n.",
              "definition": "Solitude."
          },
          {
              "matched": false,
              "word": "secondary",
              "type": "adj.",
              "definition": "Less important or effective than that which is primary."
          },
          {
              "matched": false,
              "word": "secondly",
              "type": "adv.",
              "definition": "In the second place in order or succession."
          },
          {
              "matched": false,
              "word": "second-rate",
              "type": "adj.",
              "definition": "Second in quality, size, rank, importance, etc."
          },
          {
              "matched": false,
              "word": "secrecy",
              "type": "n.",
              "definition": "Concealment."
          },
          {
              "matched": false,
              "word": "secretary",
              "type": "n.",
              "definition": "One who attends to correspondence, keeps records. or does other writing for          "
          },
          {
              "matched": false,
              "word": "secretive",
              "type": "adj.",
              "definition": "Having a tendency to conceal."
          },
          {
              "matched": false,
              "word": "sedate",
              "type": "adj.",
              "definition": "Even-tempered."
          },
          {
              "matched": false,
              "word": "sedentary",
              "type": "adj.",
              "definition": "Involving or requiring much sitting."
          },
          {
              "matched": false,
              "word": "sediment",
              "type": "n.",
              "definition": "Matter that settles to the bottom of a liquid."
          },
          {
              "matched": false,
              "word": "sedition",
              "type": "n.",
              "definition": "Conduct directed against public order and the tranquillity of the state."
          },
          {
              "matched": false,
              "word": "seditious",
              "type": "adj.",
              "definition": "Promotive of conduct directed against public order and the tranquillity of          "
          },
          {
              "matched": false,
              "word": "seduce",
              "type": "v.",
              "definition": "To entice to surrender chastity."
          },
          {
              "matched": false,
              "word": "sedulous",
              "type": "adj.",
              "definition": "Persevering in effort or endeavor."
          },
          {
              "matched": false,
              "word": "seer",
              "type": "n.",
              "definition": "A prophet."
          },
          {
              "matched": false,
              "word": "seethe",
              "type": "v.",
              "definition": "To be violently excited or agitated."
          },
          {
              "matched": false,
              "word": "seignior",
              "type": "n.",
              "definition": "A title of honor or respectful address, equivalent to sir."
          },
          {
              "matched": false,
              "word": "seismograph",
              "type": "n.",
              "definition": "An instrument for recording the phenomena of earthquakes."
          },
          {
              "matched": false,
              "word": "seize",
              "type": "v.",
              "definition": "To catch or take hold of suddenly and forcibly."
          },
          {
              "matched": false,
              "word": "selective",
              "type": "adj.",
              "definition": "Having the power of choice."
          },
          {
              "matched": false,
              "word": "self-respect",
              "type": "n.",
              "definition": "Rational self-esteem."
          },
          {
              "matched": false,
              "word": "semblance",
              "type": "n.",
              "definition": "Outward appearance."
          },
          {
              "matched": false,
              "word": "semicivilized",
              "type": "adj.",
              "definition": "Half-civilized."
          },
          {
              "matched": false,
              "word": "semiconscious",
              "type": "adj.",
              "definition": "Partially conscious."
          },
          {
              "matched": false,
              "word": "semiannual",
              "type": "adj.",
              "definition": "Recurring at intervals of six months."
          },
          {
              "matched": false,
              "word": "semicircle",
              "type": "n.",
              "definition": "A half-circle."
          },
          {
              "matched": false,
              "word": "seminar",
              "type": "n.",
              "definition": "Any assemblage of pupils for real research in some specific study under a          "
          },
          {
              "matched": false,
              "word": "seminary",
              "type": "n.",
              "definition": "A special school, as of theology or pedagogics."
          },
          {
              "matched": false,
              "word": "senile",
              "type": "adj.",
              "definition": "Peculiar to or proceeding from the weakness or infirmity of old age."
          },
          {
              "matched": false,
              "word": "sensation",
              "type": "n.",
              "definition": "A condition of mind resulting from spiritual or inherent feeling."
          },
          {
              "matched": false,
              "word": "sense",
              "type": "n.",
              "definition": "The signification conveyed by some word, phrase, or action."
          },
          {
              "matched": false,
              "word": "sensibility",
              "type": "n.",
              "definition": "Power to perceive or feel."
          },
          {
              "matched": false,
              "word": "sensitive",
              "type": "adj.",
              "definition": "Easily affected by outside operations or influences."
          },
          {
              "matched": false,
              "word": "sensorium",
              "type": "n.",
              "definition": "The sensory apparatus."
          },
          {
              "matched": false,
              "word": "sensual",
              "type": "adj.",
              "definition": "Pertaining to the body or the physical senses."
          },
          {
              "matched": false,
              "word": "sensuous",
              "type": "adj.",
              "definition": "Having a warm appreciation of the beautiful or of the refinements of luxury."
          },
          {
              "matched": false,
              "word": "sentence",
              "type": "n.",
              "definition": "A related group of words containing a subject and a predicate and expressing a          "
          },
          {
              "matched": false,
              "word": "sentience",
              "type": "n.",
              "definition": "Capacity for sensation or sense-perception."
          },
          {
              "matched": false,
              "word": "sentient",
              "type": "adj.",
              "definition": "Possessing the power of sense or sense-perception."
          },
          {
              "matched": false,
              "word": "sentinel",
              "type": "n.",
              "definition": "Any guard or watch stationed for protection."
          },
          {
              "matched": false,
              "word": "separable",
              "type": "adj.",
              "definition": "Capable of being disjoined or divided."
          },
          {
              "matched": false,
              "word": "separate",
              "type": "v.",
              "definition": "To take apart."
          },
          {
              "matched": false,
              "word": "separatist",
              "type": "n.",
              "definition": "A seceder."
          },
          {
              "matched": false,
              "word": "septennial",
              "type": "adj.",
              "definition": "Recurring every seven years."
          },
          {
              "matched": false,
              "word": "sepulcher",
              "type": "n.",
              "definition": "A burial-place."
          },
          {
              "matched": false,
              "word": "sequacious",
              "type": "adj.",
              "definition": "Ready to be led."
          },
          {
              "matched": false,
              "word": "sequel",
              "type": "n.",
              "definition": "That which follows in consequence of what has previously happened."
          },
          {
              "matched": false,
              "word": "sequence",
              "type": "n.",
              "definition": "The order in which a number or persons, things, or events follow one another          "
          },
          {
              "matched": false,
              "word": "sequent",
              "type": "adj.",
              "definition": "Following in the order of time."
          },
          {
              "matched": false,
              "word": "sequester",
              "type": "v.",
              "definition": "To cause to withdraw or retire, as from society or public life."
          },
          {
              "matched": false,
              "word": "sequestrate",
              "type": "v.",
              "definition": "To confiscate."
          },
          {
              "matched": false,
              "word": "sergeant",
              "type": "n.",
              "definition": "A non-commissioned military officer ranking next above a corporal."
          },
          {
              "matched": false,
              "word": "sergeant-at-arms",
              "type": "n.",
              "definition": "An executive officer in legislative bodies who enforces the orders of          "
          },
          {
              "matched": false,
              "word": "sergeant-major",
              "type": "n.",
              "definition": "The highest non-commissioned officer in a regiment."
          },
          {
              "matched": false,
              "word": "service",
              "type": "n.",
              "definition": "Any work done for the benefit of another."
          },
          {
              "matched": false,
              "word": "serviceable",
              "type": "adj.",
              "definition": "Durable."
          },
          {
              "matched": false,
              "word": "servitude",
              "type": "n.",
              "definition": "Slavery."
          },
          {
              "matched": false,
              "word": "severance",
              "type": "n.",
              "definition": "Separation."
          },
          {
              "matched": false,
              "word": "severely",
              "type": "adv.",
              "definition": "Extremely."
          },
          {
              "matched": false,
              "word": "sextet",
              "type": "n.",
              "definition": "A band of six singers or players."
          },
          {
              "matched": false,
              "word": "sextuple",
              "type": "adj.",
              "definition": "Multiplied by six."
          },
          {
              "matched": false,
              "word": "sheer",
              "type": "adj.",
              "definition": "Absolute."
          },
          {
              "matched": false,
              "word": "shiftless",
              "type": "adj.",
              "definition": "Wanting in resource, energy, or executive ability."
          },
          {
              "matched": false,
              "word": "shrewd",
              "type": "adj.",
              "definition": "Characterized by skill at understanding and profiting by circumstances."
          },
          {
              "matched": false,
              "word": "shriek",
              "type": "n.",
              "definition": "A sharp, shrill outcry or scream, caused by agony or terror."
          },
          {
              "matched": false,
              "word": "shrinkage",
              "type": "n.",
              "definition": "A contraction of any material into less bulk or dimension."
          },
          {
              "matched": false,
              "word": "shrivel",
              "type": "v.",
              "definition": "To draw or be drawn into wrinkles."
          },
          {
              "matched": false,
              "word": "shuffle",
              "type": "n.",
              "definition": "A mixing or changing the order of things."
          },
          {
              "matched": false,
              "word": "sibilance",
              "type": "n.",
              "definition": "A hissing sound."
          },
          {
              "matched": false,
              "word": "sibilant",
              "type": "adj.",
              "definition": "Made with a hissing sound."
          },
          {
              "matched": false,
              "word": "sibilate",
              "type": "v.",
              "definition": "To give a hissing sound to, as in pronouncing the letter s."
          },
          {
              "matched": false,
              "word": "sidelong",
              "type": "adj.",
              "definition": "Inclining or tending to one side."
          },
          {
              "matched": false,
              "word": "sidereal",
              "type": "adj.",
              "definition": "Pertaining to stars or constellations."
          },
          {
              "matched": false,
              "word": "siege",
              "type": "n.",
              "definition": "A beleaguerment."
          },
          {
              "matched": false,
              "word": "significance",
              "type": "n.",
              "definition": "Importance."
          },
          {
              "matched": false,
              "word": "significant",
              "type": "adj.",
              "definition": "Important, especially as pointing something out."
          },
          {
              "matched": false,
              "word": "signification",
              "type": "n.",
              "definition": "The meaning conveyed by language, actions, or signs."
          },
          {
              "matched": false,
              "word": "similar",
              "type": "adj.",
              "definition": "Bearing resemblance to one another or to something else."
          },
          {
              "matched": false,
              "word": "simile",
              "type": "n.",
              "definition": "A comparison which directs the mind to the representative object itself."
          },
          {
              "matched": false,
              "word": "similitude",
              "type": "n.",
              "definition": "Similarity."
          },
          {
              "matched": false,
              "word": "simplify",
              "type": "v.",
              "definition": "To make less complex or difficult."
          },
          {
              "matched": false,
              "word": "simulate",
              "type": "v.",
              "definition": "Imitate."
          },
          {
              "matched": false,
              "word": "simultaneous",
              "type": "adj.",
              "definition": "Occurring, done, or existing at the same time."
          },
          {
              "matched": false,
              "word": "sinecure",
              "type": "n.",
              "definition": "Any position having emoluments with few or no duties."
          },
          {
              "matched": false,
              "word": "singe",
              "type": "v.",
              "definition": "To burn slightly or superficially."
          },
          {
              "matched": false,
              "word": "sinister",
              "type": "adj.",
              "definition": "Evil."
          },
          {
              "matched": false,
              "word": "sinuosity",
              "type": "n.",
              "definition": "The quality of curving in and out."
          },
          {
              "matched": false,
              "word": "sinuous",
              "type": "adj.",
              "definition": "Curving in and out."
          },
          {
              "matched": false,
              "word": "sinus",
              "type": "n.",
              "definition": "An opening or cavity."
          },
          {
              "matched": false,
              "word": "siren",
              "type": "n.",
              "definition": "A sea-nymph, described by Homer as dwelling between the island of Circe and          "
          },
          {
              "matched": false,
              "word": "sirocco",
              "type": "n.",
              "definition": "hot winds from Africa."
          },
          {
              "matched": false,
              "word": "sisterhood",
              "type": "n.",
              "definition": "A body of sisters united by some bond of sympathy or by a religious vow."
          },
          {
              "matched": false,
              "word": "skeptic",
              "type": "n.",
              "definition": "One who doubts any statements."
          },
          {
              "matched": false,
              "word": "skepticism",
              "type": "n.",
              "definition": "The entertainment of doubt concerning something."
          },
          {
              "matched": false,
              "word": "skiff",
              "type": "n.",
              "definition": "Usually, a small light boat propelled by oars."
          },
          {
              "matched": false,
              "word": "skirmish",
              "type": "n.",
              "definition": "Desultory fighting between advanced detachments of two armies."
          },
          {
              "matched": false,
              "word": "sleight",
              "type": "n.",
              "definition": "A trick or feat so deftly done that the manner of performance escapes          "
          },
          {
              "matched": false,
              "word": "slight",
              "type": "adj.",
              "definition": "Of a small importance or significance."
          },
          {
              "matched": false,
              "word": "slothful",
              "type": "adj.",
              "definition": "Lazy."
          },
          {
              "matched": false,
              "word": "sluggard",
              "type": "n.",
              "definition": "A person habitually lazy or idle."
          },
          {
              "matched": false,
              "word": "sociable",
              "type": "adj.",
              "definition": "Inclined to seek company."
          },
          {
              "matched": false,
              "word": "socialism",
              "type": "n.",
              "definition": "A theory of civil polity that aims to secure the reconstruction of society."
          },
          {
              "matched": false,
              "word": "socialist",
              "type": "adj.",
              "definition": "One who advocates reconstruction of society by collective ownership of land          "
          },
          {
              "matched": false,
              "word": "sociology",
              "type": "n.",
              "definition": "The philosophical study of society."
          },
          {
              "matched": false,
              "word": "Sol",
              "type": "n.",
              "definition": "The sun."
          },
          {
              "matched": false,
              "word": "solace",
              "type": "n.",
              "definition": "Comfort in grief, trouble, or calamity."
          },
          {
              "matched": false,
              "word": "solar",
              "type": "adj.",
              "definition": "Pertaining to the sun."
          },
          {
              "matched": false,
              "word": "solder",
              "type": "n.",
              "definition": "A fusible alloy used for joining metallic surfaces or margins."
          },
          {
              "matched": false,
              "word": "soldier",
              "type": "n.",
              "definition": "A person engaged in military service."
          },
          {
              "matched": false,
              "word": "solecism",
              "type": "n.",
              "definition": "Any violation of established rules or customs."
          },
          {
              "matched": false,
              "word": "solicitor",
              "type": "n.",
              "definition": "One who represents a client in court of justice; an attorney."
          },
          {
              "matched": false,
              "word": "solicitude",
              "type": "n.",
              "definition": "Uneasiness of mind occasioned by desire, anxiety, or fear."
          },
          {
              "matched": false,
              "word": "soliloquy",
              "type": "n.",
              "definition": "A monologue."
          },
          {
              "matched": false,
              "word": "solstice",
              "type": "n.",
              "definition": "The time of year when the sun is at its greatest declination."
          },
          {
              "matched": false,
              "word": "soluble",
              "type": "adj.",
              "definition": "Capable of being dissolved, as in a fluid."
          },
          {
              "matched": false,
              "word": "solvent",
              "type": "adj.",
              "definition": "Having sufficient funds to pay all debts."
          },
          {
              "matched": false,
              "word": "somber",
              "type": "adj.",
              "definition": "Gloomy."
          },
          {
              "matched": false,
              "word": "somniferous",
              "type": "adj.",
              "definition": "Tending to produce sleep."
          },
          {
              "matched": false,
              "word": "somnolence",
              "type": "n.",
              "definition": "Oppressive drowsiness."
          },
          {
              "matched": false,
              "word": "somnolent",
              "type": "adj.",
              "definition": "Sleepy."
          },
          {
              "matched": false,
              "word": "sonata",
              "type": "n.",
              "definition": "An instrumental composition."
          },
          {
              "matched": false,
              "word": "sonnet",
              "type": "n.",
              "definition": "A poem of fourteen decasyllabic or octosyllabiclines expressing two successive          "
          },
          {
              "matched": false,
              "word": "sonorous",
              "type": "adj.",
              "definition": "Resonant."
          },
          {
              "matched": false,
              "word": "soothsayer",
              "type": "n.",
              "definition": "One who claims to have supernatural insight or foresight."
          },
          {
              "matched": false,
              "word": "sophism",
              "type": "n.",
              "definition": "A false argument understood to be such by the reasoner himself and          "
          },
          {
              "matched": false,
              "word": "sophistical",
              "type": "adj.",
              "definition": "Fallacious."
          },
          {
              "matched": false,
              "word": "sophisticate",
              "type": "v.",
              "definition": "To deprive of simplicity of mind or manner."
          },
          {
              "matched": false,
              "word": "sophistry",
              "type": "n.",
              "definition": "Reasoning sound in appearance only, especially when designedly deceptive."
          },
          {
              "matched": false,
              "word": "soprano",
              "type": "n.",
              "definition": "A woman's or boy's voice of high range."
          },
          {
              "matched": false,
              "word": "sorcery",
              "type": "n.",
              "definition": "Witchcraft."
          },
          {
              "matched": false,
              "word": "sordid",
              "type": "adj.",
              "definition": "Of degraded character or nature."
          },
          {
              "matched": false,
              "word": "souvenir",
              "type": "n.",
              "definition": "A token of remembrance."
          },
          {
              "matched": false,
              "word": "sparse",
              "type": "adj.",
              "definition": "Thinly diffused."
          },
          {
              "matched": false,
              "word": "Spartan",
              "type": "adj.",
              "definition": "Exceptionally brave; rigorously severe."
          },
          {
              "matched": false,
              "word": "spasmodic",
              "type": "adj.",
              "definition": "Convulsive."
          },
          {
              "matched": false,
              "word": "specialize",
              "type": "v.",
              "definition": "To assume an individual or specific character, or adopt a singular or          "
          },
          {
              "matched": false,
              "word": "specialty",
              "type": "n.",
              "definition": "An employment limited to one particular line of work."
          },
          {
              "matched": false,
              "word": "specie",
              "type": "n.",
              "definition": "A coin or coins of gold, silver, copper, or other metal."
          },
          {
              "matched": false,
              "word": "species",
              "type": "n.",
              "definition": "A classificatory group of animals or plants subordinate to a genus."
          },
          {
              "matched": false,
              "word": "specimen",
              "type": "n.",
              "definition": "One of a class of persons or things regarded as representative of the class."
          },
          {
              "matched": false,
              "word": "specious",
              "type": "adj.",
              "definition": "Plausible."
          },
          {
              "matched": false,
              "word": "spectator",
              "type": "n.",
              "definition": "One who beholds or looks on."
          },
          {
              "matched": false,
              "word": "specter",
              "type": "n.",
              "definition": "Apparition."
          },
          {
              "matched": false,
              "word": "spectrum",
              "type": "n.",
              "definition": "An image formed by rays of light or other radiant energy."
          },
          {
              "matched": false,
              "word": "speculate",
              "type": "v.",
              "definition": "To pursue inquiries and form conjectures."
          },
          {
              "matched": false,
              "word": "speculator",
              "type": "n.",
              "definition": "One who makes an investment that involves a risk of loss, but also a chance          "
          },
          {
              "matched": false,
              "word": "sphericity",
              "type": "n.",
              "definition": "The state or condition of being a sphere."
          },
          {
              "matched": false,
              "word": "spheroid",
              "type": "n.",
              "definition": "A body having nearly the form of a sphere."
          },
          {
              "matched": false,
              "word": "spherometer",
              "type": "n.",
              "definition": "An instrument for measuring curvature or radii of spherical surfaces."
          },
          {
              "matched": false,
              "word": "spinous",
              "type": "adj.",
              "definition": "Having spines."
          },
          {
              "matched": false,
              "word": "spinster",
              "type": "n.",
              "definition": "A woman who has never been married."
          },
          {
              "matched": false,
              "word": "spontaneous",
              "type": "adj.",
              "definition": "Arising from inherent qualities or tendencies without external efficient          "
          },
          {
              "matched": false,
              "word": "sprightly",
              "type": "adj.",
              "definition": "Vivacious."
          },
          {
              "matched": false,
              "word": "spurious",
              "type": "adj.",
              "definition": "Not genuine."
          },
          {
              "matched": false,
              "word": "squabble",
              "type": "v.",
              "definition": "To quarrel."
          },
          {
              "matched": false,
              "word": "squalid",
              "type": "adj.",
              "definition": "Having a dirty, mean, poverty-stricken appearance."
          },
          {
              "matched": false,
              "word": "squatter",
              "type": "n.",
              "definition": "One who settles on land without permission or right."
          },
          {
              "matched": false,
              "word": "stagnant",
              "type": "adj.",
              "definition": "Not flowing: said of water, as in a pool."
          },
          {
              "matched": false,
              "word": "stagnate",
              "type": "v.",
              "definition": "To become dull or inert."
          },
          {
              "matched": false,
              "word": "stagnation",
              "type": "n.",
              "definition": "The condition of not flowing or not changing."
          },
          {
              "matched": false,
              "word": "stagy",
              "type": "adj.",
              "definition": "Having a theatrical manner."
          },
          {
              "matched": false,
              "word": "staid",
              "type": "adj.",
              "definition": "Of a steady and sober character."
          },
          {
              "matched": false,
              "word": "stallion",
              "type": "n.",
              "definition": "An uncastrated male horse, commonly one kept for breeding."
          },
          {
              "matched": false,
              "word": "stanchion",
              "type": "n.",
              "definition": "A vertical bar, or a pair of bars, used to confine cattle in a stall."
          },
          {
              "matched": false,
              "word": "stanza",
              "type": "n.",
              "definition": "A group of rimed lines, usually forming one of a series of similar divisions in          "
          },
          {
              "matched": false,
              "word": "statecraft",
              "type": "n.",
              "definition": "The art of conducting state affairs."
          },
          {
              "matched": false,
              "word": "static",
              "type": "adj.",
              "definition": "Pertaining to or designating bodies at rest or forces in equilibrium."
          },
          {
              "matched": false,
              "word": "statics",
              "type": "n.",
              "definition": "The branch of mechanics that treats of the relations that subsist among forces          "
          },
          {
              "matched": false,
              "word": "stationary",
              "type": "adj.",
              "definition": "Not moving."
          },
          {
              "matched": false,
              "word": "statistician",
              "type": "n.",
              "definition": "One who is skilled in collecting and tabulating numerical facts."
          },
          {
              "matched": false,
              "word": "statuesque",
              "type": "adj.",
              "definition": "Having the grace, pose, or quietude of a statue."
          },
          {
              "matched": false,
              "word": "statuette",
              "type": "n.",
              "definition": "A figurine."
          },
          {
              "matched": false,
              "word": "stature",
              "type": "n.",
              "definition": "The natural height of an animal body."
          },
          {
              "matched": false,
              "word": "statute",
              "type": "n.",
              "definition": "Any authoritatively declared rule, ordinance, decree, or law."
          },
          {
              "matched": false,
              "word": "stealth",
              "type": "n.",
              "definition": "A concealed manner of acting."
          },
          {
              "matched": false,
              "word": "stellar",
              "type": "adj.",
              "definition": "Pertaining to the stars."
          },
          {
              "matched": false,
              "word": "steppe",
              "type": "n.",
              "definition": "One of the extensive plains in Russia and Siberia."
          },
          {
              "matched": false,
              "word": "sterling",
              "type": "adj.",
              "definition": "Genuine."
          },
          {
              "matched": false,
              "word": "stifle",
              "type": "v.",
              "definition": "To smother."
          },
          {
              "matched": false,
              "word": "stigma",
              "type": "n.",
              "definition": "A mark of infamy or token of disgrace attaching to a person as the result of          "
          },
          {
              "matched": false,
              "word": "stiletto",
              "type": "n.",
              "definition": "A small dagger."
          },
          {
              "matched": false,
              "word": "stimulant",
              "type": "n.",
              "definition": "Anything that rouses to activity or to quickened action."
          },
          {
              "matched": false,
              "word": "stimulate",
              "type": "v.",
              "definition": "To rouse to activity or to quickened action."
          },
          {
              "matched": false,
              "word": "stimulus",
              "type": "n.",
              "definition": "Incentive."
          },
          {
              "matched": false,
              "word": "stingy",
              "type": "adj.",
              "definition": "Cheap, unwilling to spend money."
          },
          {
              "matched": false,
              "word": "stipend",
              "type": "n.",
              "definition": "A definite amount paid at stated periods in compensation for services or as an          "
          },
          {
              "matched": false,
              "word": "Stoicism",
              "type": "n.",
              "definition": "The principles or the practice of the Stoics-being very even tempered in          "
          },
          {
              "matched": false,
              "word": "stolid",
              "type": "adj.",
              "definition": "Expressing no power of feeling or perceiving."
          },
          {
              "matched": false,
              "word": "strait",
              "type": "n.",
              "definition": "A narrow passage of water connecting two larger bodies of water."
          },
          {
              "matched": false,
              "word": "stratagem",
              "type": "n.",
              "definition": "Any clever trick or device for obtaining an advantage."
          },
          {
              "matched": false,
              "word": "stratum",
              "type": "n.",
              "definition": "A natural or artificial layer, bed, or thickness of any substance or material."
          },
          {
              "matched": false,
              "word": "streamlet",
              "type": "n.",
              "definition": "Rivulet."
          },
          {
              "matched": false,
              "word": "stringency",
              "type": "n.",
              "definition": "Strictness."
          },
          {
              "matched": false,
              "word": "stringent",
              "type": "adj.",
              "definition": "Rigid."
          },
          {
              "matched": false,
              "word": "stripling",
              "type": "n.",
              "definition": "A mere youth."
          },
          {
              "matched": false,
              "word": "studious",
              "type": "adj.",
              "definition": "Having or showing devotion to the acquisition of knowledge."
          },
          {
              "matched": false,
              "word": "stultify",
              "type": "v.",
              "definition": "To give an appearance of foolishness to."
          },
          {
              "matched": false,
              "word": "stupendous",
              "type": "adj.",
              "definition": "Of prodigious size, bulk, or degree."
          },
          {
              "matched": false,
              "word": "stupor",
              "type": "n.",
              "definition": "Profound lethargy."
          },
          {
              "matched": false,
              "word": "suasion",
              "type": "n.",
              "definition": "The act of persuading."
          },
          {
              "matched": false,
              "word": "suave",
              "type": "adj.",
              "definition": "Smooth and pleasant in manner."
          },
          {
              "matched": false,
              "word": "subacid",
              "type": "adj.",
              "definition": "Somewhat sharp or biting."
          },
          {
              "matched": false,
              "word": "subaquatic",
              "type": "adj.",
              "definition": "Being, formed, or operating under water."
          },
          {
              "matched": false,
              "word": "subconscious",
              "type": "adj.",
              "definition": "Being or occurring in the mind, but without attendant consciousness or          "
          },
          {
              "matched": false,
              "word": "subjacent",
              "type": "adj.",
              "definition": "Situated directly underneath."
          },
          {
              "matched": false,
              "word": "subjection",
              "type": "n.",
              "definition": "The act of bringing into a state of submission."
          },
          {
              "matched": false,
              "word": "subjugate",
              "type": "v.",
              "definition": "To conquer."
          },
          {
              "matched": false,
              "word": "subliminal",
              "type": "adj.",
              "definition": "Being beneath the threshold of consciousness."
          },
          {
              "matched": false,
              "word": "sublingual",
              "type": "adj.",
              "definition": "Situated beneath the tongue."
          },
          {
              "matched": false,
              "word": "submarine",
              "type": "adj.",
              "definition": "Existing, done, or operating beneath the surface of the sea."
          },
          {
              "matched": false,
              "word": "submerge",
              "type": "v.",
              "definition": "To place or plunge under water."
          },
          {
              "matched": false,
              "word": "submergence",
              "type": "n.",
              "definition": "The act of submerging."
          },
          {
              "matched": false,
              "word": "submersible",
              "type": "adj.",
              "definition": "Capable of being put underwater."
          },
          {
              "matched": false,
              "word": "submersion",
              "type": "n.",
              "definition": "The act of submerging."
          },
          {
              "matched": false,
              "word": "submission",
              "type": "n.",
              "definition": "A yielding to the power or authority of another."
          },
          {
              "matched": false,
              "word": "submittal",
              "type": "n.",
              "definition": "The act of submitting."
          },
          {
              "matched": false,
              "word": "subordinate",
              "type": "adj.",
              "definition": "Belonging to an inferior order in a classification."
          },
          {
              "matched": false,
              "word": "subsequent",
              "type": "adj.",
              "definition": "Following in time."
          },
          {
              "matched": false,
              "word": "subservience",
              "type": "n.",
              "definition": "The quality, character, or condition of being servilely following          "
          },
          {
              "matched": false,
              "word": "subservient",
              "type": "adj.",
              "definition": "Servilely following another's behests."
          },
          {
              "matched": false,
              "word": "subside",
              "type": "v.",
              "definition": "To relapse into a state of repose and tranquillity."
          },
          {
              "matched": false,
              "word": "subsist",
              "type": "v.",
              "definition": "To be maintained or sustained."
          },
          {
              "matched": false,
              "word": "subsistence",
              "type": "n.",
              "definition": "Sustenance."
          },
          {
              "matched": false,
              "word": "substantive",
              "type": "adj.",
              "definition": "Solid."
          },
          {
              "matched": false,
              "word": "subtend",
              "type": "v.",
              "definition": "To extend opposite to."
          },
          {
              "matched": false,
              "word": "subterfuge",
              "type": "n.",
              "definition": "Evasion."
          },
          {
              "matched": false,
              "word": "subterranean",
              "type": "adj.",
              "definition": "Situated or occurring below the surface of the earth."
          },
          {
              "matched": false,
              "word": "subtle",
              "type": "adj.",
              "definition": "Discriminating."
          },
          {
              "matched": false,
              "word": "subtrahend",
              "type": "n.",
              "definition": "That which is to be subtracted."
          },
          {
              "matched": false,
              "word": "subversion",
              "type": "n.",
              "definition": "An overthrow, as from the foundation."
          },
          {
              "matched": false,
              "word": "subvert",
              "type": "v.",
              "definition": "To bring to ruin."
          },
          {
              "matched": false,
              "word": "succeed",
              "type": "v.",
              "definition": "To accomplish what is attempted or intended."
          },
          {
              "matched": false,
              "word": "success",
              "type": "n.",
              "definition": "A favorable or prosperous course or termination of anything attempted."
          },
          {
              "matched": false,
              "word": "successful",
              "type": "adj.",
              "definition": "Having reached a high degree of worldly prosperity."
          },
          {
              "matched": false,
              "word": "successor",
              "type": "n.",
              "definition": "One who or that which takes the place of a predecessor or preceding thing."
          },
          {
              "matched": false,
              "word": "succinct",
              "type": "adj.",
              "definition": "Concise."
          },
          {
              "matched": false,
              "word": "succulent",
              "type": "adj.",
              "definition": "Juicy."
          },
          {
              "matched": false,
              "word": "succumb",
              "type": "v.",
              "definition": "To cease to resist."
          },
          {
              "matched": false,
              "word": "sufferance",
              "type": "n.",
              "definition": "Toleration."
          },
          {
              "matched": false,
              "word": "sufficiency",
              "type": "n.",
              "definition": "An ample or adequate supply."
          },
          {
              "matched": false,
              "word": "suffrage",
              "type": "n.",
              "definition": "The right or privilege of voting."
          },
          {
              "matched": false,
              "word": "suffuse",
              "type": "v.",
              "definition": "To cover or fill the surface of."
          },
          {
              "matched": false,
              "word": "suggestible",
              "type": "adj.",
              "definition": "That can be suggested."
          },
          {
              "matched": false,
              "word": "suggestive",
              "type": "adj.",
              "definition": "Stimulating to thought or reflection."
          },
          {
              "matched": false,
              "word": "summary",
              "type": "n.",
              "definition": "An abstract."
          },
          {
              "matched": false,
              "word": "sumptuous",
              "type": "adj.",
              "definition": "Rich and costly."
          },
          {
              "matched": false,
              "word": "superabundance",
              "type": "n.",
              "definition": "An excessive amount."
          },
          {
              "matched": false,
              "word": "superadd",
              "type": "v.",
              "definition": "To add in addition to what has been added."
          },
          {
              "matched": false,
              "word": "superannuate",
              "type": "v.",
              "definition": "To become deteriorated or incapacitated by long service."
          },
          {
              "matched": false,
              "word": "superb",
              "type": "adj.",
              "definition": "Sumptuously elegant."
          },
          {
              "matched": false,
              "word": "supercilious",
              "type": "adj.",
              "definition": "Exhibiting haughty and careless contempt."
          },
          {
              "matched": false,
              "word": "superficial",
              "type": "adj.",
              "definition": "Knowing and understanding only the ordinary and the obvious."
          },
          {
              "matched": false,
              "word": "superfluity",
              "type": "n.",
              "definition": "That part of anything that is in excess of what is needed."
          },
          {
              "matched": false,
              "word": "superfluous",
              "type": "adj.",
              "definition": "Being more than is needed."
          },
          {
              "matched": false,
              "word": "superheat",
              "type": "v.",
              "definition": "To heat to excess."
          },
          {
              "matched": false,
              "word": "superintend",
              "type": "v.",
              "definition": "To have the charge and direction of, especially of some work or movement."
          },
          {
              "matched": false,
              "word": "superintendence",
              "type": "n.",
              "definition": "Direction and management."
          },
          {
              "matched": false,
              "word": "superintendent",
              "type": "n.",
              "definition": "One who has the charge and direction of, especially of some work or          "
          },
          {
              "matched": false,
              "word": "superlative",
              "type": "n.",
              "definition": "That which is of the highest possible excellence or eminence."
          },
          {
              "matched": false,
              "word": "supernatural",
              "type": "adj.",
              "definition": "Caused miraculously or by the immediate exercise of divine power."
          },
          {
              "matched": false,
              "word": "supernumerary",
              "type": "adj.",
              "definition": "Superfluous."
          },
          {
              "matched": false,
              "word": "supersede",
              "type": "v.",
              "definition": "To displace."
          },
          {
              "matched": false,
              "word": "supine",
              "type": "adj.",
              "definition": "Lying on the back."
          },
          {
              "matched": false,
              "word": "supplant",
              "type": "v.",
              "definition": "To take the place of."
          },
          {
              "matched": false,
              "word": "supple",
              "type": "adj.",
              "definition": "Easily bent."
          },
          {
              "matched": false,
              "word": "supplementary",
              "type": "adj.",
              "definition": "Being an addition to."
          },
          {
              "matched": false,
              "word": "supplicant",
              "type": "n.",
              "definition": "One who asks humbly and earnestly."
          },
          {
              "matched": false,
              "word": "supplicate",
              "type": "v.",
              "definition": "To beg."
          },
          {
              "matched": false,
              "word": "supposition",
              "type": "n.",
              "definition": "Conjecture."
          },
          {
              "matched": false,
              "word": "suppress",
              "type": "v.",
              "definition": "To prevent from being disclosed or punished."
          },
          {
              "matched": false,
              "word": "suppressible",
              "type": "adj.",
              "definition": "Capable of being suppressed."
          },
          {
              "matched": false,
              "word": "suppression",
              "type": "n.",
              "definition": "A forcible putting or keeping down."
          },
          {
              "matched": false,
              "word": "supramundane",
              "type": "adj.",
              "definition": "Supernatural."
          },
          {
              "matched": false,
              "word": "surcharge",
              "type": "n.",
              "definition": "An additional amount charged."
          },
          {
              "matched": false,
              "word": "surety",
              "type": "n.",
              "definition": "Security for payment or performance."
          },
          {
              "matched": false,
              "word": "surfeit",
              "type": "v.",
              "definition": "To feed to fullness or to satiety."
          },
          {
              "matched": false,
              "word": "surmise",
              "type": "v.",
              "definition": "To conjecture."
          },
          {
              "matched": false,
              "word": "surmount",
              "type": "v.",
              "definition": "To overcome by force of will."
          },
          {
              "matched": false,
              "word": "surreptitious",
              "type": "adj.",
              "definition": "Clandestine."
          },
          {
              "matched": false,
              "word": "surrogate",
              "type": "n.",
              "definition": "One who or that which is substituted for or appointed to act in place of          "
          },
          {
              "matched": false,
              "word": "surround",
              "type": "v.",
              "definition": "To encircle."
          },
          {
              "matched": false,
              "word": "surveyor",
              "type": "n.",
              "definition": "A land-measurer."
          },
          {
              "matched": false,
              "word": "susceptibility",
              "type": "n.",
              "definition": "A specific capability of feeling or emotion."
          },
          {
              "matched": false,
              "word": "susceptible",
              "type": "adj.",
              "definition": "Easily under a specified power or influence."
          },
          {
              "matched": false,
              "word": "suspense",
              "type": "n.",
              "definition": "Uncertainty."
          },
          {
              "matched": false,
              "word": "suspension",
              "type": "n.",
              "definition": "A hanging from a support."
          },
          {
              "matched": false,
              "word": "suspicious",
              "type": "adj.",
              "definition": "Inclined to doubt or mistrust."
          },
          {
              "matched": false,
              "word": "sustenance",
              "type": "n.",
              "definition": "Food."
          },
          {
              "matched": false,
              "word": "swarthy",
              "type": "adj.",
              "definition": "Having a dark hue, especially a dark or sunburned complexion."
          },
          {
              "matched": false,
              "word": "Sybarite",
              "type": "n.",
              "definition": "A luxurious person."
          },
          {
              "matched": false,
              "word": "sycophant",
              "type": "n.",
              "definition": "A servile flatterer, especially of those in authority or influence."
          },
          {
              "matched": false,
              "word": "syllabic",
              "type": "adj.",
              "definition": "Consisting of that which is uttered in a single vocal impulse."
          },
          {
              "matched": false,
              "word": "syllabication",
              "type": "n.",
              "definition": "Division of words into that which is uttered in a single vocal impulse."
          },
          {
              "matched": false,
              "word": "syllable",
              "type": "n.",
              "definition": "That which is uttered in a single vocal impulse."
          },
          {
              "matched": false,
              "word": "syllabus",
              "type": "n.",
              "definition": "Outline of a subject, course, lecture, or treatise."
          },
          {
              "matched": false,
              "word": "sylph",
              "type": "n.",
              "definition": "A slender, graceful young woman or girl."
          },
          {
              "matched": false,
              "word": "symmetrical",
              "type": "adj.",
              "definition": "Well-balanced."
          },
          {
              "matched": false,
              "word": "symmetry",
              "type": "n.",
              "definition": "Relative proportion and harmony."
          },
          {
              "matched": false,
              "word": "sympathetic",
              "type": "adj.",
              "definition": "Having a fellow-feeling for or like feelings with another or others."
          },
          {
              "matched": false,
              "word": "sympathize",
              "type": "v.",
              "definition": "To share the sentiments or mental states of another."
          },
          {
              "matched": false,
              "word": "symphonic",
              "type": "adj.",
              "definition": "Characterized by a harmonious or agreeable mingling of sounds."
          },
          {
              "matched": false,
              "word": "symphonious",
              "type": "adj.",
              "definition": "Marked by a harmonious or agreeable mingling of sounds."
          },
          {
              "matched": false,
              "word": "symphony",
              "type": "n.",
              "definition": "A harmonious or agreeable mingling of sounds."
          },
          {
              "matched": false,
              "word": "synchronism",
              "type": "n.",
              "definition": "Simultaneousness."
          },
          {
              "matched": false,
              "word": "syndicate",
              "type": "n.",
              "definition": "An association of individuals united for the prosecution of some enterprise."
          },
          {
              "matched": false,
              "word": "syneresis",
              "type": "n.",
              "definition": "The coalescence of two vowels or syllables, as e'er for ever."
          },
          {
              "matched": false,
              "word": "synod",
              "type": "n.",
              "definition": "An ecclesiastical council."
          },
          {
              "matched": false,
              "word": "synonym",
              "type": "n.",
              "definition": "A word having the same or almost the same meaning as some other."
          },
          {
              "matched": false,
              "word": "synopsis",
              "type": "n.",
              "definition": "A syllabus or summary."
          },
          {
              "matched": false,
              "word": "systematic",
              "type": "adj.",
              "definition": "Methodical."
          },
          {
              "matched": false,
              "word": "tableau",
              "type": "n.",
              "definition": "An arrangement of inanimate figures representing a scene from real life."
          },
          {
              "matched": false,
              "word": "tacit",
              "type": "adj.",
              "definition": "Understood."
          },
          {
              "matched": false,
              "word": "taciturn",
              "type": "adj.",
              "definition": "Disinclined to conversation."
          },
          {
              "matched": false,
              "word": "tack",
              "type": "n.",
              "definition": "A small sharp-pointed nail."
          },
          {
              "matched": false,
              "word": "tact",
              "type": "n.",
              "definition": "Fine or ready mental discernment shown in saying or doing the proper thing."
          },
          {
              "matched": false,
              "word": "tactician",
              "type": "n.",
              "definition": "One who directs affairs with skill and shrewdness."
          },
          {
              "matched": false,
              "word": "tactics",
              "type": "n.",
              "definition": "Any maneuvering or adroit management for effecting an object."
          },
          {
              "matched": false,
              "word": "tangency",
              "type": "n.",
              "definition": "The state of touching."
          },
          {
              "matched": false,
              "word": "tangent",
              "type": "adj.",
              "definition": "Touching."
          },
          {
              "matched": false,
              "word": "tangible",
              "type": "adj.",
              "definition": "Perceptible by touch."
          },
          {
              "matched": false,
              "word": "tannery",
              "type": "n.",
              "definition": "A place where leather is tanned."
          },
          {
              "matched": false,
              "word": "tantalize",
              "type": "v.",
              "definition": "To tease."
          },
          {
              "matched": false,
              "word": "tantamount",
              "type": "adj.",
              "definition": "Having equal or equivalent value, effect, or import."
          },
          {
              "matched": false,
              "word": "tapestry",
              "type": "n.",
              "definition": "A fabric to which a pattern is applied with a needle, designed for ornamental          "
          },
          {
              "matched": false,
              "word": "tarnish",
              "type": "v.",
              "definition": "To lessen or destroy the luster of in any way."
          },
          {
              "matched": false,
              "word": "taut",
              "type": "adj.",
              "definition": "Stretched tight."
          },
          {
              "matched": false,
              "word": "taxation",
              "type": "n.",
              "definition": "A levy, by government, of a fixed contribution."
          },
          {
              "matched": false,
              "word": "taxidermy",
              "type": "n.",
              "definition": "The art or process of preserving dead animals or parts of them."
          },
          {
              "matched": false,
              "word": "technic",
              "type": "adj.",
              "definition": "Technical."
          },
          {
              "matched": false,
              "word": "technicality",
              "type": "n.",
              "definition": "Something peculiar to a particular art, trade, or the like."
          },
          {
              "matched": false,
              "word": "technique",
              "type": "n.",
              "definition": "Manner of performance."
          },
          {
              "matched": false,
              "word": "technography",
              "type": "n.",
              "definition": "The scientific description or study of human arts and industries in their          "
          },
          {
              "matched": false,
              "word": "technology",
              "type": "n.",
              "definition": "The knowledge relating to industries and manufactures."
          },
          {
              "matched": false,
              "word": "teem",
              "type": "v.",
              "definition": "To be full to overflowing."
          },
          {
              "matched": false,
              "word": "telepathy",
              "type": "n.",
              "definition": "Thought-transference."
          },
          {
              "matched": false,
              "word": "telephony",
              "type": "n.",
              "definition": "The art or process of communicating by telephone."
          },
          {
              "matched": false,
              "word": "telescope",
              "type": "v.",
              "definition": "To drive together so that one slides into the another like the sections of a          "
          },
          {
              "matched": false,
              "word": "telltale",
              "type": "adj.",
              "definition": "That gives warning or information."
          },
          {
              "matched": false,
              "word": "temerity",
              "type": "n.",
              "definition": "Recklessness."
          },
          {
              "matched": false,
              "word": "temporal",
              "type": "adj.",
              "definition": "Pertaining to or concerned with the affairs of the present life."
          },
          {
              "matched": false,
              "word": "temporary",
              "type": "adj.",
              "definition": "Lasting for a short time only."
          },
          {
              "matched": false,
              "word": "temporize",
              "type": "v.",
              "definition": "To pursue a policy of delay."
          },
          {
              "matched": false,
              "word": "tempt",
              "type": "v.",
              "definition": "To offer to (somebody) an inducement to do wrong."
          },
          {
              "matched": false,
              "word": "tempter",
              "type": "n.",
              "definition": "An allurer or enticer to evil."
          },
          {
              "matched": false,
              "word": "tenacious",
              "type": "adj.",
              "definition": "Unyielding."
          },
          {
              "matched": false,
              "word": "tenant",
              "type": "n.",
              "definition": "An occupant."
          },
          {
              "matched": false,
              "word": "tendency",
              "type": "n.",
              "definition": "Direction or inclination, as toward some objector end."
          },
          {
              "matched": false,
              "word": "tenet",
              "type": "n.",
              "definition": "Any opinion, principle, dogma, or doctrine that a person believes or maintains as          "
          },
          {
              "matched": false,
              "word": "tenor",
              "type": "n.",
              "definition": "A settled course or manner of progress."
          },
          {
              "matched": false,
              "word": "tense",
              "type": "adj.",
              "definition": "Strained to stiffness."
          },
          {
              "matched": false,
              "word": "tentative",
              "type": "adj.",
              "definition": "Done as an experiment."
          },
          {
              "matched": false,
              "word": "tenure",
              "type": "n.",
              "definition": "The term during which a thing is held."
          },
          {
              "matched": false,
              "word": "tercentenary",
              "type": "adj.",
              "definition": "Pertaining to a period of 300 years."
          },
          {
              "matched": false,
              "word": "termagant",
              "type": "adj.",
              "definition": "Violently abusive and quarrelsome."
          },
          {
              "matched": false,
              "word": "terminal",
              "type": "adj.",
              "definition": "Pertaining to or creative of a boundary, limit."
          },
          {
              "matched": false,
              "word": "terminate",
              "type": "v.",
              "definition": "To put an end or stop to."
          },
          {
              "matched": false,
              "word": "termination",
              "type": "n.",
              "definition": "The act of ending or concluding."
          },
          {
              "matched": false,
              "word": "terminus",
              "type": "n.",
              "definition": "The final point or goal."
          },
          {
              "matched": false,
              "word": "terrify",
              "type": "v.",
              "definition": "To fill with extreme fear."
          },
          {
              "matched": false,
              "word": "territorial",
              "type": "adj.",
              "definition": "Pertaining to the domain over which a sovereign state exercises          "
          },
          {
              "matched": false,
              "word": "terse",
              "type": "adj.",
              "definition": "Pithy."
          },
          {
              "matched": false,
              "word": "testament",
              "type": "n.",
              "definition": "A will."
          },
          {
              "matched": false,
              "word": "testator",
              "type": "n.",
              "definition": "The maker of a will."
          },
          {
              "matched": false,
              "word": "testimonial",
              "type": "n.",
              "definition": "A formal token of regard, often presented in public."
          },
          {
              "matched": false,
              "word": "thearchy",
              "type": "n.",
              "definition": "Government by a supreme deity."
          },
          {
              "matched": false,
              "word": "theism",
              "type": "n.",
              "definition": "Belief in God."
          },
          {
              "matched": false,
              "word": "theocracy",
              "type": "n.",
              "definition": "A government administered by ecclesiastics."
          },
          {
              "matched": false,
              "word": "theocrasy",
              "type": "n.",
              "definition": "The mixed worship of polytheism."
          },
          {
              "matched": false,
              "word": "theologian",
              "type": "n.",
              "definition": "A professor of divinity."
          },
          {
              "matched": false,
              "word": "theological",
              "type": "adj.",
              "definition": "Based on or growing out of divine revelation."
          },
          {
              "matched": false,
              "word": "theology",
              "type": "n.",
              "definition": "The branch of theological science that treats of God."
          },
          {
              "matched": false,
              "word": "theoretical",
              "type": "adj.",
              "definition": "Directed toward knowledge for its own sake without respect to          "
          },
          {
              "matched": false,
              "word": "theorist",
              "type": "n.",
              "definition": "One given to speculating."
          },
          {
              "matched": false,
              "word": "theorize",
              "type": "v.",
              "definition": "To speculate."
          },
          {
              "matched": false,
              "word": "thereabout",
              "type": "adv.",
              "definition": "Near that number, quantity, degree, place, or time, approximately."
          },
          {
              "matched": false,
              "word": "therefor",
              "type": "adv.",
              "definition": "For that or this."
          },
          {
              "matched": false,
              "word": "thermal",
              "type": "adj.",
              "definition": "Of or pertaining to heat."
          },
          {
              "matched": false,
              "word": "thermoelectric",
              "type": "adj.",
              "definition": "Denoting electricity produced by heat."
          },
          {
              "matched": false,
              "word": "thermoelectricity",
              "type": "n.",
              "definition": "Electricity generated by differences of temperature,"
          },
          {
              "matched": false,
              "word": "thesis",
              "type": "n.",
              "definition": "An essay or treatise on a particular subject."
          },
          {
              "matched": false,
              "word": "thoroughbred",
              "type": "adj.",
              "definition": "Bred from the best or purest blood or stock."
          },
          {
              "matched": false,
              "word": "thoroughfare",
              "type": "n.",
              "definition": "A public street or road."
          },
          {
              "matched": false,
              "word": "thrall",
              "type": "n.",
              "definition": "One controlled by an appetite or a passion."
          },
          {
              "matched": false,
              "word": "tilth",
              "type": "n.",
              "definition": "Cultivation."
          },
          {
              "matched": false,
              "word": "timbre",
              "type": "n.",
              "definition": "The quality of a tone, as distinguished from intensity and pitch."
          },
          {
              "matched": false,
              "word": "timorous",
              "type": "adj.",
              "definition": "Lacking courage."
          },
          {
              "matched": false,
              "word": "tincture",
              "type": "n.",
              "definition": "A solution, usually alcoholic, of some principle used in medicine."
          },
          {
              "matched": false,
              "word": "tinge",
              "type": "n.",
              "definition": "A faint trace of color."
          },
          {
              "matched": false,
              "word": "tipsy",
              "type": "adj.",
              "definition": "Befuddled with drinks."
          },
          {
              "matched": false,
              "word": "tirade",
              "type": "n.",
              "definition": "Harangue."
          },
          {
              "matched": false,
              "word": "tireless",
              "type": "adj.",
              "definition": "Untiring."
          },
          {
              "matched": false,
              "word": "tiresome",
              "type": "adj.",
              "definition": "Wearisome."
          },
          {
              "matched": false,
              "word": "Titanic",
              "type": "adj.",
              "definition": "Of vast size or strength."
          },
          {
              "matched": false,
              "word": "toilsome",
              "type": "adj.",
              "definition": "Laborious."
          },
          {
              "matched": false,
              "word": "tolerable",
              "type": "adj.",
              "definition": "Moderately good."
          },
          {
              "matched": false,
              "word": "tolerance",
              "type": "n.",
              "definition": "Forbearance in judging of the acts or opinions of others."
          },
          {
              "matched": false,
              "word": "tolerant",
              "type": "adj.",
              "definition": "Indulgent."
          },
          {
              "matched": false,
              "word": "tolerate",
              "type": "v.",
              "definition": "To passively permit or put up with."
          },
          {
              "matched": false,
              "word": "toleration",
              "type": "n.",
              "definition": "A spirit of charitable leniency."
          },
          {
              "matched": false,
              "word": "topography",
              "type": "n.",
              "definition": "The art of representing on a map the physical features of any locality or          "
          },
          {
              "matched": false,
              "word": "torpor",
              "type": "n.",
              "definition": "Apathy."
          },
          {
              "matched": false,
              "word": "torrid",
              "type": "adj.",
              "definition": "Excessively hot."
          },
          {
              "matched": false,
              "word": "tortious",
              "type": "adj.",
              "definition": "Wrongful."
          },
          {
              "matched": false,
              "word": "tortuous",
              "type": "adj.",
              "definition": "Abounding in irregular bends or turns."
          },
          {
              "matched": false,
              "word": "torturous",
              "type": "adj.",
              "definition": "Marked by extreme suffering."
          },
          {
              "matched": false,
              "word": "tractable",
              "type": "adj.",
              "definition": "Easily led or controlled."
          },
          {
              "matched": false,
              "word": "trait",
              "type": "n.",
              "definition": "A distinguishing feature or quality."
          },
          {
              "matched": false,
              "word": "trajectory",
              "type": "n.",
              "definition": "The path described by a projectile moving under given forces."
          },
          {
              "matched": false,
              "word": "trammel",
              "type": "n.",
              "definition": "An impediment."
          },
          {
              "matched": false,
              "word": "tranquil",
              "type": "adj.",
              "definition": "Calm."
          },
          {
              "matched": false,
              "word": "tranquilize",
              "type": "v.",
              "definition": "To soothe."
          },
          {
              "matched": false,
              "word": "tranquility",
              "type": "n.",
              "definition": "Calmness."
          },
          {
              "matched": false,
              "word": "transalpine",
              "type": "adj.",
              "definition": "Situated on the other side of the Alps."
          },
          {
              "matched": false,
              "word": "transact",
              "type": "v.",
              "definition": "To do business."
          },
          {
              "matched": false,
              "word": "transatlantic",
              "type": "adj.",
              "definition": "Situated beyond or on the other side of the Atlantic."
          },
          {
              "matched": false,
              "word": "transcend",
              "type": "v.",
              "definition": "To surpass."
          },
          {
              "matched": false,
              "word": "transcendent",
              "type": "adj.",
              "definition": "Surpassing."
          },
          {
              "matched": false,
              "word": "transcontinental",
              "type": "adj.",
              "definition": "Extending or passing across a continent."
          },
          {
              "matched": false,
              "word": "transcribe",
              "type": "v.",
              "definition": "To write over again (something already written)"
          },
          {
              "matched": false,
              "word": "transcript",
              "type": "n.",
              "definition": "A copy made directly from an original."
          },
          {
              "matched": false,
              "word": "transfer",
              "type": "v.",
              "definition": "To convey, remove, or cause to pass from one person or place to another."
          },
          {
              "matched": false,
              "word": "transferable",
              "type": "adj.",
              "definition": "Capable of being conveyed from one person or place to another."
          },
          {
              "matched": false,
              "word": "transferee",
              "type": "n.",
              "definition": "The person to whom a transfer is made."
          },
          {
              "matched": false,
              "word": "transference",
              "type": "n.",
              "definition": "The act of conveying from one person or place to another."
          },
          {
              "matched": false,
              "word": "transferrer",
              "type": "n.",
              "definition": "One who or that which conveys from one person or place to another."
          },
          {
              "matched": false,
              "word": "transfigure",
              "type": "v.",
              "definition": "To give an exalted meaning or glorified appearance to."
          },
          {
              "matched": false,
              "word": "transfuse",
              "type": "v.",
              "definition": "To pour or cause to pass, as a fluid, from one vessel to another."
          },
          {
              "matched": false,
              "word": "transfusible",
              "type": "adj.",
              "definition": "Capable of being poured from one vessel to another."
          },
          {
              "matched": false,
              "word": "transfusion",
              "type": "n.",
              "definition": "The act of pouring from one vessel to another."
          },
          {
              "matched": false,
              "word": "transgress",
              "type": "v.",
              "definition": "To break a law."
          },
          {
              "matched": false,
              "word": "transience",
              "type": "n.",
              "definition": "Something that is of short duration."
          },
          {
              "matched": false,
              "word": "transient",
              "type": "n.",
              "definition": "One who or that which is only of temporary existence."
          },
          {
              "matched": false,
              "word": "transition",
              "type": "n.",
              "definition": "Passage from one place, condition, or action to another."
          },
          {
              "matched": false,
              "word": "transitory",
              "type": "adj.",
              "definition": "Existing for a short time only."
          },
          {
              "matched": false,
              "word": "translate",
              "type": "v.",
              "definition": "To give the sense or equivalent of in another language or dialect."
          },
          {
              "matched": false,
              "word": "translator",
              "type": "n.",
              "definition": "An interpreter."
          },
          {
              "matched": false,
              "word": "translucence",
              "type": "n.",
              "definition": "The property or state of allowing the passage of light."
          },
          {
              "matched": false,
              "word": "translucent",
              "type": "adj.",
              "definition": "Allowing the passage of light."
          },
          {
              "matched": false,
              "word": "transmissible",
              "type": "adj.",
              "definition": "That may e sent through or across."
          },
          {
              "matched": false,
              "word": "transmission",
              "type": "n.",
              "definition": "The act of sending through or across."
          },
          {
              "matched": false,
              "word": "transmit",
              "type": "v.",
              "definition": "To send trough or across."
          },
          {
              "matched": false,
              "word": "transmute",
              "type": "v.",
              "definition": "To change in nature, substance, or form."
          },
          {
              "matched": false,
              "word": "transparent",
              "type": "adj.",
              "definition": "Easy to see through or understand."
          },
          {
              "matched": false,
              "word": "transpire",
              "type": "v.",
              "definition": "To come to pass."
          },
          {
              "matched": false,
              "word": "transplant",
              "type": "v.",
              "definition": "To remove and plant in another place."
          },
          {
              "matched": false,
              "word": "transposition",
              "type": "n.",
              "definition": "The act of reversing the order or changing the place of."
          },
          {
              "matched": false,
              "word": "transverse",
              "type": "adj.",
              "definition": "Lying or being across or in a crosswise direction."
          },
          {
              "matched": false,
              "word": "travail",
              "type": "n.",
              "definition": "Hard or agonizing labor."
          },
          {
              "matched": false,
              "word": "travesty",
              "type": "n.",
              "definition": "A grotesque imitation."
          },
          {
              "matched": false,
              "word": "treacherous",
              "type": "adj.",
              "definition": "Perfidious."
          },
          {
              "matched": false,
              "word": "treachery",
              "type": "n.",
              "definition": "Violation of allegiance, confidence, or plighted faith."
          },
          {
              "matched": false,
              "word": "treasonable",
              "type": "adj.",
              "definition": "Of the nature of betrayal, treachery, or breech of allegiance."
          },
          {
              "matched": false,
              "word": "treatise",
              "type": "n.",
              "definition": "An elaborate literary composition presenting a subject in all its parts."
          },
          {
              "matched": false,
              "word": "treble",
              "type": "adj.",
              "definition": "Multiplied by three."
          },
          {
              "matched": false,
              "word": "trebly",
              "type": "adv.",
              "definition": "Triply."
          },
          {
              "matched": false,
              "word": "tremendous",
              "type": "adj.",
              "definition": "Awe-inspiring."
          },
          {
              "matched": false,
              "word": "tremor",
              "type": "n.",
              "definition": "An involuntary trembling or shivering."
          },
          {
              "matched": false,
              "word": "tremulous",
              "type": "adj.",
              "definition": "Characterized by quivering or unsteadiness."
          },
          {
              "matched": false,
              "word": "trenchant",
              "type": "adj.",
              "definition": "Cutting deeply and quickly."
          },
          {
              "matched": false,
              "word": "trepidation",
              "type": "n.",
              "definition": "Nervous uncertainty of feeling."
          },
          {
              "matched": false,
              "word": "trestle",
              "type": "n.",
              "definition": "An open braced framework for supporting the horizontal stringers of a          "
          },
          {
              "matched": false,
              "word": "triad",
              "type": "n.",
              "definition": "A group of three persons of things."
          },
          {
              "matched": false,
              "word": "tribune",
              "type": "n.",
              "definition": "Any champion of the rights and liberties of the people: often used as the name          "
          },
          {
              "matched": false,
              "word": "trickery",
              "type": "n.",
              "definition": "Artifice."
          },
          {
              "matched": false,
              "word": "tricolor",
              "type": "adj.",
              "definition": "Of three colors."
          },
          {
              "matched": false,
              "word": "tricycle",
              "type": "n.",
              "definition": "A three-wheeled vehicle."
          },
          {
              "matched": false,
              "word": "trident",
              "type": "n.",
              "definition": "The three-pronged fork that was the emblem of Neptune."
          },
          {
              "matched": false,
              "word": "triennial",
              "type": "adj.",
              "definition": "Taking place every third year."
          },
          {
              "matched": false,
              "word": "trimness",
              "type": "n.",
              "definition": "Neatness."
          },
          {
              "matched": false,
              "word": "trinity",
              "type": "n.",
              "definition": "A threefold personality existing in the one divine being or substance."
          },
          {
              "matched": false,
              "word": "trio",
              "type": "n.",
              "definition": "Three things grouped or associated together."
          },
          {
              "matched": false,
              "word": "triple",
              "type": "adj.",
              "definition": "Threefold."
          },
          {
              "matched": false,
              "word": "triplicate",
              "type": "adj.",
              "definition": "Composed of or pertaining to three related things or parts."
          },
          {
              "matched": false,
              "word": "triplicity",
              "type": "n.",
              "definition": "The state of being triple or threefold."
          },
          {
              "matched": false,
              "word": "tripod",
              "type": "n.",
              "definition": "A three-legged stand, usually hinged near the top, for supporting some          "
          },
          {
              "matched": false,
              "word": "trisect",
              "type": "v.",
              "definition": "To divide into three parts, especially into three equal parts."
          },
          {
              "matched": false,
              "word": "trite",
              "type": "adj.",
              "definition": "Made commonplace by frequent repetition."
          },
          {
              "matched": false,
              "word": "triumvir",
              "type": "n.",
              "definition": "One of three men united coordinately in public office or authority."
          },
          {
              "matched": false,
              "word": "trivial",
              "type": "adj.",
              "definition": "Of little importance or value."
          },
          {
              "matched": false,
              "word": "troublesome",
              "type": "adj.",
              "definition": "Burdensome."
          },
          {
              "matched": false,
              "word": "truculence",
              "type": "n.",
              "definition": "Ferocity."
          },
          {
              "matched": false,
              "word": "truculent",
              "type": "adj.",
              "definition": "Having the character or the spirit of a savage."
          },
          {
              "matched": false,
              "word": "truism",
              "type": "n.",
              "definition": "A statement so plainly true as hardly to require statement or proof."
          },
          {
              "matched": false,
              "word": "truthful",
              "type": "adj.",
              "definition": "Veracious."
          },
          {
              "matched": false,
              "word": "turgid",
              "type": "adj.",
              "definition": "Swollen."
          },
          {
              "matched": false,
              "word": "turpitude",
              "type": "n.",
              "definition": "Depravity."
          },
          {
              "matched": false,
              "word": "tutelage",
              "type": "n.",
              "definition": "The act of training or the state of being under instruction."
          },
          {
              "matched": false,
              "word": "tutelar",
              "type": "adj.",
              "definition": "Protective."
          },
          {
              "matched": false,
              "word": "tutorship",
              "type": "n.",
              "definition": "The office of a guardian."
          },
          {
              "matched": false,
              "word": "twinge",
              "type": "n.",
              "definition": "A darting momentary local pain."
          },
          {
              "matched": false,
              "word": "typical",
              "type": "adj.",
              "definition": "Characteristic."
          },
          {
              "matched": false,
              "word": "typify",
              "type": "v.",
              "definition": "To serve as a characteristic example of."
          },
          {
              "matched": false,
              "word": "typographical",
              "type": "adj.",
              "definition": "Pertaining to typography or printing."
          },
          {
              "matched": false,
              "word": "typography",
              "type": "n.",
              "definition": "The arrangement of composed type, or the appearance of printed matter."
          },
          {
              "matched": false,
              "word": "tyrannical",
              "type": "adj.",
              "definition": "Despotic."
          },
          {
              "matched": false,
              "word": "tyranny",
              "type": "n.",
              "definition": "Absolute power arbitrarily or unjustly administrated."
          },
          {
              "matched": false,
              "word": "tyro",
              "type": "n.",
              "definition": "One slightly skilled in or acquainted with any trade or profession."
          },
          {
              "matched": false,
              "word": "ubiquitous",
              "type": "adj.",
              "definition": "Being present everywhere."
          },
          {
              "matched": false,
              "word": "ulterior",
              "type": "adj.",
              "definition": "Not so pertinent as something else to the matter spoken of."
          },
          {
              "matched": false,
              "word": "ultimate",
              "type": "adj.",
              "definition": "Beyond which there is nothing else."
          },
          {
              "matched": false,
              "word": "ultimatum",
              "type": "n.",
              "definition": "A final statement or proposal, as concerning terms or conditions."
          },
          {
              "matched": false,
              "word": "ultramundane",
              "type": "adj.",
              "definition": "Pertaining to supernatural things or to another life."
          },
          {
              "matched": false,
              "word": "ultramontane",
              "type": "adj.",
              "definition": "Beyond the mountains, especially beyond the Alps (that is, on their          "
          },
          {
              "matched": false,
              "word": "umbrage",
              "type": "n.",
              "definition": "A sense of injury."
          },
          {
              "matched": false,
              "word": "unaccountable",
              "type": "adj.",
              "definition": "Inexplicable."
          },
          {
              "matched": false,
              "word": "unaffected",
              "type": "adj.",
              "definition": "Sincere."
          },
          {
              "matched": false,
              "word": "unanimous",
              "type": "adj.",
              "definition": "Sharing the same views or sentiments."
          },
          {
              "matched": false,
              "word": "unanimity",
              "type": "n.",
              "definition": "The state or quality of being of one mind."
          },
          {
              "matched": false,
              "word": "unavoidable",
              "type": "adj.",
              "definition": "Inevitable."
          },
          {
              "matched": false,
              "word": "unbearable",
              "type": "adj.",
              "definition": "Unendurable."
          },
          {
              "matched": false,
              "word": "unbecoming",
              "type": "adj.",
              "definition": "Unsuited to the wearer, place, or surroundings."
          },
          {
              "matched": false,
              "word": "unbelief",
              "type": "n.",
              "definition": "Doubt."
          },
          {
              "matched": false,
              "word": "unbiased",
              "type": "adj.",
              "definition": "Impartial, as judgment."
          },
          {
              "matched": false,
              "word": "unbridled",
              "type": "adj.",
              "definition": "Being without restraint."
          },
          {
              "matched": false,
              "word": "uncommon",
              "type": "adj.",
              "definition": "Rare."
          },
          {
              "matched": false,
              "word": "unconscionable",
              "type": "adj.",
              "definition": "Ridiculously or unjustly excessive."
          },
          {
              "matched": false,
              "word": "unconscious",
              "type": "adj.",
              "definition": "Not cognizant of objects, actions, etc."
          },
          {
              "matched": false,
              "word": "unction",
              "type": "n.",
              "definition": "The art of anointing as with oil."
          },
          {
              "matched": false,
              "word": "unctuous",
              "type": "adj.",
              "definition": "Oily."
          },
          {
              "matched": false,
              "word": "undeceive",
              "type": "v.",
              "definition": "To free from deception, as by apprising of the real state of affairs."
          },
          {
              "matched": false,
              "word": "undercharge",
              "type": "v.",
              "definition": "To make an inadequate charge for."
          },
          {
              "matched": false,
              "word": "underexposed",
              "type": "adj.",
              "definition": "Insufficiently exposed for proper or full development, as negatives in          "
          },
          {
              "matched": false,
              "word": "undergarment",
              "type": "n.",
              "definition": "A garment to be worn under the ordinary outer garments."
          },
          {
              "matched": false,
              "word": "underman",
              "type": "v.",
              "definition": "To equip with less than the full complement of men."
          },
          {
              "matched": false,
              "word": "undersell",
              "type": "v.",
              "definition": "To sell at a lower price than."
          },
          {
              "matched": false,
              "word": "undersized",
              "type": "adj.",
              "definition": "Of less than the customary size."
          },
          {
              "matched": false,
              "word": "underhanded",
              "type": "adj.",
              "definition": "Clandestinely carried on."
          },
          {
              "matched": false,
              "word": "underlie",
              "type": "v.",
              "definition": "To be the ground or support of."
          },
          {
              "matched": false,
              "word": "underling",
              "type": "n.",
              "definition": "A subordinate."
          },
          {
              "matched": false,
              "word": "undermine",
              "type": "v.",
              "definition": "To subvert in an underhand way."
          },
          {
              "matched": false,
              "word": "underrate",
              "type": "v.",
              "definition": "To undervalue."
          },
          {
              "matched": false,
              "word": "understate",
              "type": "v.",
              "definition": "To fail to put strongly enough, as a case."
          },
          {
              "matched": false,
              "word": "undervalue",
              "type": "v.",
              "definition": "To underestimate."
          },
          {
              "matched": false,
              "word": "underworld",
              "type": "n.",
              "definition": "Hades."
          },
          {
              "matched": false,
              "word": "underwrite",
              "type": "v.",
              "definition": "To issue or be party to the issue of a          "
          },
          {
              "matched": false,
              "word": "undue",
              "type": "adj.",
              "definition": "More than sufficient."
          },
          {
              "matched": false,
              "word": "undulate",
              "type": "v.",
              "definition": "To move like a wave or in waves."
          },
          {
              "matched": false,
              "word": "undulous",
              "type": "adj.",
              "definition": "Resembling waves."
          },
          {
              "matched": false,
              "word": "unfavorable",
              "type": "adj.",
              "definition": "Adverse."
          },
          {
              "matched": false,
              "word": "ungainly",
              "type": "adj.",
              "definition": "Clumsy."
          },
          {
              "matched": false,
              "word": "unguent",
              "type": "n.",
              "definition": "Any ointment or lubricant for local application."
          },
          {
              "matched": false,
              "word": "unicellular",
              "type": "adj.",
              "definition": "Consisting of a single cell."
          },
          {
              "matched": false,
              "word": "univalence",
              "type": "n.",
              "definition": "Monovalency."
          },
          {
              "matched": false,
              "word": "unify",
              "type": "v.",
              "definition": "To cause to be one."
          },
          {
              "matched": false,
              "word": "unique",
              "type": "adj.",
              "definition": "Being the only one of its kind."
          },
          {
              "matched": false,
              "word": "unison",
              "type": "n.",
              "definition": "A condition of perfect agreement and accord."
          },
          {
              "matched": false,
              "word": "unisonant",
              "type": "adj.",
              "definition": "Being in a condition of perfect agreement and accord."
          },
          {
              "matched": false,
              "word": "Unitarian",
              "type": "adj.",
              "definition": "Pertaining to a religious body that rejects the doctrine of the Trinity."
          },
          {
              "matched": false,
              "word": "unlawful",
              "type": "adj.",
              "definition": "Illegal."
          },
          {
              "matched": false,
              "word": "unlimited",
              "type": "adj.",
              "definition": "Unconstrained."
          },
          {
              "matched": false,
              "word": "unnatural",
              "type": "adj.",
              "definition": "Artificial."
          },
          {
              "matched": false,
              "word": "unnecessary",
              "type": "adj.",
              "definition": "Not essential under the circumstances."
          },
          {
              "matched": false,
              "word": "unsettle",
              "type": "v.",
              "definition": "To put into confusion."
          },
          {
              "matched": false,
              "word": "unsophisticated",
              "type": "adj.",
              "definition": "Showing inexperience."
          },
          {
              "matched": false,
              "word": "unspeakable",
              "type": "adj.",
              "definition": "Abominable."
          },
          {
              "matched": false,
              "word": "untimely",
              "type": "adj.",
              "definition": "Unseasonable."
          },
          {
              "matched": false,
              "word": "untoward",
              "type": "adj.",
              "definition": "Causing annoyance or hindrance."
          },
          {
              "matched": false,
              "word": "unutterable",
              "type": "adj.",
              "definition": "Inexpressible."
          },
          {
              "matched": false,
              "word": "unwieldy",
              "type": "adj.",
              "definition": "Moved or managed with difficulty, as from great size or awkward shape."
          },
          {
              "matched": false,
              "word": "unwise",
              "type": "adj.",
              "definition": "Foolish."
          },
          {
              "matched": false,
              "word": "unyoke",
              "type": "v.",
              "definition": "To separate."
          },
          {
              "matched": false,
              "word": "up-keep",
              "type": "n.",
              "definition": "Maintenance."
          },
          {
              "matched": false,
              "word": "upbraid",
              "type": "v.",
              "definition": "To reproach as deserving blame."
          },
          {
              "matched": false,
              "word": "upcast",
              "type": "n.",
              "definition": "A throwing upward."
          },
          {
              "matched": false,
              "word": "upheaval",
              "type": "n.",
              "definition": "Overthrow or violent disturbance of established order or condition."
          },
          {
              "matched": false,
              "word": "upheave",
              "type": "v.",
              "definition": "To raise or lift with effort."
          },
          {
              "matched": false,
              "word": "uppermost",
              "type": "adj.",
              "definition": "First in order of precedence."
          },
          {
              "matched": false,
              "word": "uproarious",
              "type": "adj.",
              "definition": "Noisy."
          },
          {
              "matched": false,
              "word": "uproot",
              "type": "v.",
              "definition": "To eradicate."
          },
          {
              "matched": false,
              "word": "upturn",
              "type": "v.",
              "definition": "To throw into confusion."
          },
          {
              "matched": false,
              "word": "urban",
              "type": "adj.",
              "definition": "Of, or pertaining to, or like a city."
          },
          {
              "matched": false,
              "word": "urbanity",
              "type": "n.",
              "definition": "Refined or elegant courtesy."
          },
          {
              "matched": false,
              "word": "urchin",
              "type": "n.",
              "definition": "A roguish, mischievous boy."
          },
          {
              "matched": false,
              "word": "urgency",
              "type": "n.",
              "definition": "The pressure of necessity."
          },
          {
              "matched": false,
              "word": "usage",
              "type": "n.",
              "definition": "Treatment."
          },
          {
              "matched": false,
              "word": "usurious",
              "type": "adj.",
              "definition": "Taking unlawful or exorbitant interest on money loaned."
          },
          {
              "matched": false,
              "word": "usurp",
              "type": "v.",
              "definition": "To take possession of by force."
          },
          {
              "matched": false,
              "word": "usury",
              "type": "n.",
              "definition": "The demanding for the use of money as a loan, a rate of interest beyond what is          "
          },
          {
              "matched": false,
              "word": "utilitarianism",
              "type": "n.",
              "definition": "The ethical doctrine that actions are right because they are useful or          "
          },
          {
              "matched": false,
              "word": "utility",
              "type": "n.",
              "definition": "Fitness for some desirable practical purpose."
          },
          {
              "matched": false,
              "word": "utmost",
              "type": "n.",
              "definition": "The greatest possible extent."
          },
          {
              "matched": false,
              "word": "vacate",
              "type": "v.",
              "definition": "To leave."
          },
          {
              "matched": false,
              "word": "vaccinate",
              "type": "v.",
              "definition": "To inoculate with vaccine virus or virus of cowpox."
          },
          {
              "matched": false,
              "word": "vacillate",
              "type": "v.",
              "definition": "To waver."
          },
          {
              "matched": false,
              "word": "vacuous",
              "type": "adj.",
              "definition": "Empty."
          },
          {
              "matched": false,
              "word": "vacuum",
              "type": "n.",
              "definition": "A space entirely devoid of matter."
          },
          {
              "matched": false,
              "word": "vagabond",
              "type": "n.",
              "definition": "A wanderer."
          },
          {
              "matched": false,
              "word": "vagrant",
              "type": "n.",
              "definition": "An idle wanderer."
          },
          {
              "matched": false,
              "word": "vainglory",
              "type": "n.",
              "definition": "Excessive, pretentious, and demonstrative vanity."
          },
          {
              "matched": false,
              "word": "vale",
              "type": "n.",
              "definition": "Level or low land between hills."
          },
          {
              "matched": false,
              "word": "valediction",
              "type": "n.",
              "definition": "A bidding farewell."
          },
          {
              "matched": false,
              "word": "valedictorian",
              "type": "n.",
              "definition": "Student who delivers an address at graduating exercises of an educational          "
          },
          {
              "matched": false,
              "word": "valedictory",
              "type": "n.",
              "definition": "A parting address."
          },
          {
              "matched": false,
              "word": "valid",
              "type": "adj.",
              "definition": "Founded on truth."
          },
          {
              "matched": false,
              "word": "valorous",
              "type": "adj.",
              "definition": "Courageous."
          },
          {
              "matched": false,
              "word": "vapid",
              "type": "adj.",
              "definition": "Having lost sparkling quality and flavor."
          },
          {
              "matched": false,
              "word": "vaporizer",
              "type": "n.",
              "definition": "An atomizer."
          },
          {
              "matched": false,
              "word": "variable",
              "type": "adj.",
              "definition": "Having a tendency to change."
          },
          {
              "matched": false,
              "word": "variance",
              "type": "n.",
              "definition": "Change."
          },
          {
              "matched": false,
              "word": "variant",
              "type": "n.",
              "definition": "A thing that differs from another in form only, being the same in essence or          "
          },
          {
              "matched": false,
              "word": "variation",
              "type": "n.",
              "definition": "Modification."
          },
          {
              "matched": false,
              "word": "variegate",
              "type": "v.",
              "definition": "To mark with different shades or colors."
          },
          {
              "matched": false,
              "word": "vassal",
              "type": "n.",
              "definition": "A slave or bondman."
          },
          {
              "matched": false,
              "word": "vaudeville",
              "type": "n.",
              "definition": "A variety show."
          },
          {
              "matched": false,
              "word": "vegetal",
              "type": "adj.",
              "definition": "Of or pertaining to plants."
          },
          {
              "matched": false,
              "word": "vegetarian",
              "type": "n.",
              "definition": "One who believes in the theory that man's food should be exclusively          "
          },
          {
              "matched": false,
              "word": "vegetate",
              "type": "v.",
              "definition": "To live in a monotonous, passive way without exercise of the mental faculties."
          },
          {
              "matched": false,
              "word": "vegetation",
              "type": "n.",
              "definition": "Plant-life in the aggregate."
          },
          {
              "matched": false,
              "word": "vegetative",
              "type": "adj.",
              "definition": "Pertaining to the process of plant-life."
          },
          {
              "matched": false,
              "word": "vehement",
              "type": "adj.",
              "definition": "Very eager or urgent."
          },
          {
              "matched": false,
              "word": "velocity",
              "type": "n.",
              "definition": "Rapid motion."
          },
          {
              "matched": false,
              "word": "velvety",
              "type": "adj.",
              "definition": "Marked by lightness and softness."
          },
          {
              "matched": false,
              "word": "venal",
              "type": "adj.",
              "definition": "Mercenary, corrupt."
          },
          {
              "matched": false,
              "word": "vendible",
              "type": "adj.",
              "definition": "Marketable."
          },
          {
              "matched": false,
              "word": "vendition",
              "type": "n.",
              "definition": "The act of selling."
          },
          {
              "matched": false,
              "word": "vendor",
              "type": "n.",
              "definition": "A seller."
          },
          {
              "matched": false,
              "word": "veneer",
              "type": "n.",
              "definition": "Outside show or elegance."
          },
          {
              "matched": false,
              "word": "venerable",
              "type": "adj.",
              "definition": "Meriting or commanding high esteem."
          },
          {
              "matched": false,
              "word": "venerate",
              "type": "v.",
              "definition": "To cherish reverentially."
          },
          {
              "matched": false,
              "word": "venereal",
              "type": "adj.",
              "definition": "Pertaining to or proceeding from sexual intercourse."
          },
          {
              "matched": false,
              "word": "venial",
              "type": "adj.",
              "definition": "That may be pardoned or forgiven, a forgivable sin."
          },
          {
              "matched": false,
              "word": "venison",
              "type": "n.",
              "definition": "The flesh of deer."
          },
          {
              "matched": false,
              "word": "venom",
              "type": "n.",
              "definition": "The poisonous fluid that certain animals secrete."
          },
          {
              "matched": false,
              "word": "venous",
              "type": "adj.",
              "definition": "Of, pertaining to, or contained or carried in a vein or veins."
          },
          {
              "matched": false,
              "word": "veracious",
              "type": "adj.",
              "definition": "Habitually disposed to speak the truth."
          },
          {
              "matched": false,
              "word": "veracity",
              "type": "n.",
              "definition": "Truthfulness."
          },
          {
              "matched": false,
              "word": "verbatim",
              "type": "adv.",
              "definition": "Word for word."
          },
          {
              "matched": false,
              "word": "verbiage",
              "type": "n.",
              "definition": "Use of many words without necessity."
          },
          {
              "matched": false,
              "word": "verbose",
              "type": "adj.",
              "definition": "Wordy."
          },
          {
              "matched": false,
              "word": "verdant",
              "type": "adj.",
              "definition": "Green with vegetation."
          },
          {
              "matched": false,
              "word": "verification",
              "type": "n.",
              "definition": "The act of proving to be true, exact, or accurate."
          },
          {
              "matched": false,
              "word": "verify",
              "type": "v.",
              "definition": "To prove to be true, exact, or accurate."
          },
          {
              "matched": false,
              "word": "verily",
              "type": "adv.",
              "definition": "In truth."
          },
          {
              "matched": false,
              "word": "verity",
              "type": "n.",
              "definition": "Truth."
          },
          {
              "matched": false,
              "word": "vermin",
              "type": "n.",
              "definition": "A noxious or troublesome animal."
          },
          {
              "matched": false,
              "word": "vernacular",
              "type": "n.",
              "definition": "The language of one's country."
          },
          {
              "matched": false,
              "word": "vernal",
              "type": "adj.",
              "definition": "Belonging to or suggestive of the spring."
          },
          {
              "matched": false,
              "word": "versatile",
              "type": "adj.",
              "definition": "Having an aptitude for applying oneself to new and varied tasks or to          "
          },
          {
              "matched": false,
              "word": "version",
              "type": "n.",
              "definition": "A description or report of something as modified by one's character or opinion."
          },
          {
              "matched": false,
              "word": "vertex",
              "type": "n.",
              "definition": "Apex."
          },
          {
              "matched": false,
              "word": "vertical",
              "type": "adj.",
              "definition": "Lying or directed perpendicularly to the horizon."
          },
          {
              "matched": false,
              "word": "vertigo",
              "type": "n.",
              "definition": "Dizziness."
          },
          {
              "matched": false,
              "word": "vestige",
              "type": "n.",
              "definition": "A visible trace, mark, or impression, of something absent, lost, or gone."
          },
          {
              "matched": false,
              "word": "vestment",
              "type": "n.",
              "definition": "Clothing or covering."
          },
          {
              "matched": false,
              "word": "veto",
              "type": "n.",
              "definition": "The constitutional right in a chief executive of refusing to approve an enactment."
          },
          {
              "matched": false,
              "word": "vicarious",
              "type": "adj.",
              "definition": "Suffered or done in place of or for the sake of another."
          },
          {
              "matched": false,
              "word": "viceroy",
              "type": "n.",
              "definition": "A ruler acting with royal authority in place of the sovereign in a colony or          "
          },
          {
              "matched": false,
              "word": "vicissitude",
              "type": "n.",
              "definition": "A change, especially a complete change, of condition or circumstances, as          "
          },
          {
              "matched": false,
              "word": "vie",
              "type": "v.",
              "definition": "To contend."
          },
          {
              "matched": false,
              "word": "vigilance",
              "type": "n.",
              "definition": "Alert and intent mental watchfulness in guarding against danger."
          },
          {
              "matched": false,
              "word": "vigilant",
              "type": "adj.",
              "definition": "Being on the alert to discover and ward off danger or insure safety."
          },
          {
              "matched": false,
              "word": "vignette",
              "type": "n.",
              "definition": "A picture having a background or that is shaded off gradually."
          },
          {
              "matched": false,
              "word": "vincible",
              "type": "adj.",
              "definition": "Conquerable."
          },
          {
              "matched": false,
              "word": "vindicate",
              "type": "v.",
              "definition": "To prove true, right, or real."
          },
          {
              "matched": false,
              "word": "vindicatory",
              "type": "adj.",
              "definition": "Punitive."
          },
          {
              "matched": false,
              "word": "vindicative",
              "type": "adj.",
              "definition": "Revengeful."
          },
          {
              "matched": false,
              "word": "vinery",
              "type": "n.",
              "definition": "A greenhouse for grapes."
          },
          {
              "matched": false,
              "word": "viol",
              "type": "n.",
              "definition": "A stringed instrument of the violin class."
          },
          {
              "matched": false,
              "word": "viola",
              "type": "n.",
              "definition": "A musical instrument somewhat larger than a violin."
          },
          {
              "matched": false,
              "word": "violator",
              "type": "n.",
              "definition": "One who transgresses."
          },
          {
              "matched": false,
              "word": "violation",
              "type": "n.",
              "definition": "Infringement."
          },
          {
              "matched": false,
              "word": "violoncello",
              "type": "n.",
              "definition": "A stringed instrument held between the player's knees."
          },
          {
              "matched": false,
              "word": "virago",
              "type": "n.",
              "definition": "A bold, impudent, turbulent woman."
          },
          {
              "matched": false,
              "word": "virile",
              "type": "adj.",
              "definition": "Masculine."
          },
          {
              "matched": false,
              "word": "virtu",
              "type": "n.",
              "definition": "Rare, curious, or beautiful quality."
          },
          {
              "matched": false,
              "word": "virtual",
              "type": "adj.",
              "definition": "Being in essence or effect, but not in form or appearance."
          },
          {
              "matched": false,
              "word": "virtuoso",
              "type": "n.",
              "definition": "A master in the technique of some particular fine art."
          },
          {
              "matched": false,
              "word": "virulence",
              "type": "n.",
              "definition": "Extreme poisonousness."
          },
          {
              "matched": false,
              "word": "virulent",
              "type": "adj.",
              "definition": "Exceedingly noxious or deleterious."
          },
          {
              "matched": false,
              "word": "visage",
              "type": "n.",
              "definition": "The face, countenance, or look of a person."
          },
          {
              "matched": false,
              "word": "viscount",
              "type": "n.",
              "definition": "In England, a title of nobility, ranking fourth in the order of British          "
          },
          {
              "matched": false,
              "word": "vista",
              "type": "n.",
              "definition": "A view or prospect."
          },
          {
              "matched": false,
              "word": "visual",
              "type": "adj.",
              "definition": "Perceptible by sight."
          },
          {
              "matched": false,
              "word": "visualize",
              "type": "v.",
              "definition": "To give pictorial vividness to a mental representation."
          },
          {
              "matched": false,
              "word": "vitality",
              "type": "n.",
              "definition": "The state or quality of being necessary to existence or continuance."
          },
          {
              "matched": false,
              "word": "vitalize",
              "type": "v.",
              "definition": "To endow with life or energy."
          },
          {
              "matched": false,
              "word": "vitiate",
              "type": "v.",
              "definition": "To contaminate."
          },
          {
              "matched": false,
              "word": "vituperable",
              "type": "adj.",
              "definition": "Deserving of censure."
          },
          {
              "matched": false,
              "word": "vivacity",
              "type": "n.",
              "definition": "Liveliness."
          },
          {
              "matched": false,
              "word": "vivify",
              "type": "v.",
              "definition": "To endue with life."
          },
          {
              "matched": false,
              "word": "vivisection",
              "type": "n.",
              "definition": "The dissection of a living animal."
          },
          {
              "matched": false,
              "word": "vocable",
              "type": "n.",
              "definition": "a word, especially one regarded in relation merely to its qualities of sound."
          },
          {
              "matched": false,
              "word": "vocative",
              "type": "adj.",
              "definition": "Of or pertaining to the act of calling."
          },
          {
              "matched": false,
              "word": "vociferance",
              "type": "n.",
              "definition": "The quality of making a clamor."
          },
          {
              "matched": false,
              "word": "vociferate",
              "type": "v.",
              "definition": "To utter with a loud and vehement voice."
          },
          {
              "matched": false,
              "word": "vociferous",
              "type": "adj.",
              "definition": "Making a loud outcry."
          },
          {
              "matched": false,
              "word": "vogue",
              "type": "n.",
              "definition": "The prevalent way or fashion."
          },
          {
              "matched": false,
              "word": "volant",
              "type": "adj.",
              "definition": "Flying or able to fly."
          },
          {
              "matched": false,
              "word": "volatile",
              "type": "adj.",
              "definition": "Changeable."
          },
          {
              "matched": false,
              "word": "volition",
              "type": "n.",
              "definition": "An act or exercise of will."
          },
          {
              "matched": false,
              "word": "volitive",
              "type": "adj.",
              "definition": "Exercising the will."
          },
          {
              "matched": false,
              "word": "voluble",
              "type": "adj.",
              "definition": "Having great fluency in speaking."
          },
          {
              "matched": false,
              "word": "voluptuous",
              "type": "adj.",
              "definition": "having fullness of beautiful form, as a woman, with or without sensuous or          "
          },
          {
              "matched": false,
              "word": "voracious",
              "type": "adj.",
              "definition": "Eating with greediness or in very large quantities."
          },
          {
              "matched": false,
              "word": "vortex",
              "type": "n.",
              "definition": "A mass of rotating or whirling fluid, especially when sucked spirally toward the          "
          },
          {
              "matched": false,
              "word": "votary",
              "type": "adj.",
              "definition": "Consecrated by a vow or promise."
          },
          {
              "matched": false,
              "word": "votive",
              "type": "adj.",
              "definition": "Dedicated by a vow."
          },
          {
              "matched": false,
              "word": "vulgarity",
              "type": "n.",
              "definition": "Lack of refinement in conduct or speech."
          },
          {
              "matched": false,
              "word": "vulnerable",
              "type": "adj.",
              "definition": "Capable of receiving injuries."
          },
          {
              "matched": false,
              "word": "waif",
              "type": "n.",
              "definition": "A homeless, neglected wanderer."
          },
          {
              "matched": false,
              "word": "waistcoat",
              "type": "n.",
              "definition": "A vest."
          },
          {
              "matched": false,
              "word": "waive",
              "type": "v.",
              "definition": "To relinquish, especially temporarily, as a right or claim."
          },
          {
              "matched": false,
              "word": "wampum",
              "type": "n.",
              "definition": "Beads strung on threads, formerly used among the American Indians as currency."
          },
          {
              "matched": false,
              "word": "wane",
              "type": "v.",
              "definition": "To diminish in size and brilliancy."
          },
          {
              "matched": false,
              "word": "wantonness",
              "type": "n.",
              "definition": "Recklessness."
          },
          {
              "matched": false,
              "word": "warlike",
              "type": "adj.",
              "definition": "Belligerent."
          },
          {
              "matched": false,
              "word": "wavelet",
              "type": "n.",
              "definition": "A ripple."
          },
          {
              "matched": false,
              "word": "weak-kneed",
              "type": "adj.",
              "definition": "Without resolute purpose or energy."
          },
          {
              "matched": false,
              "word": "weal",
              "type": "n.",
              "definition": "Well-being."
          },
          {
              "matched": false,
              "word": "wean",
              "type": "v.",
              "definition": "To transfer (the young) from dependence on mother's milk to another form of          "
          },
          {
              "matched": false,
              "word": "wearisome",
              "type": "adj.",
              "definition": "Fatiguing."
          },
          {
              "matched": false,
              "word": "wee",
              "type": "adj.",
              "definition": "Very small."
          },
          {
              "matched": false,
              "word": "well-bred",
              "type": "adj.",
              "definition": "Of good ancestry."
          },
          {
              "matched": false,
              "word": "well-doer",
              "type": "n.",
              "definition": "A performer of moral and social duties."
          },
          {
              "matched": false,
              "word": "well-to-do",
              "type": "adj.",
              "definition": "In prosperous circumstances."
          },
          {
              "matched": false,
              "word": "whereabouts",
              "type": "n.",
              "definition": "The place in or near which a person or thing is."
          },
          {
              "matched": false,
              "word": "whereupon",
              "type": "adv.",
              "definition": "After which."
          },
          {
              "matched": false,
              "word": "wherever",
              "type": "adv.",
              "definition": "In or at whatever place."
          },
          {
              "matched": false,
              "word": "wherewith",
              "type": "n.",
              "definition": "The necessary means or resources."
          },
          {
              "matched": false,
              "word": "whet",
              "type": "v.",
              "definition": "To make more keen or eager."
          },
          {
              "matched": false,
              "word": "whimsical",
              "type": "adj.",
              "definition": "Capricious."
          },
          {
              "matched": false,
              "word": "whine",
              "type": "v.",
              "definition": "To utter with complaining tone."
          },
          {
              "matched": false,
              "word": "wholly",
              "type": "adv.",
              "definition": "Completely."
          },
          {
              "matched": false,
              "word": "wield",
              "type": "v.",
              "definition": "To use, control, or manage, as a weapon, or instrument, especially with full          "
          },
          {
              "matched": false,
              "word": "wile",
              "type": "n.",
              "definition": "An act or a means of cunning deception."
          },
          {
              "matched": false,
              "word": "winsome",
              "type": "adj.",
              "definition": "Attractive."
          },
          {
              "matched": false,
              "word": "wintry",
              "type": "adj.",
              "definition": "Lacking warmth of manner."
          },
          {
              "matched": false,
              "word": "wiry",
              "type": "adj.",
              "definition": "Thin, but tough and sinewy."
          },
          {
              "matched": false,
              "word": "witchcraft",
              "type": "n.",
              "definition": "Sorcery."
          },
          {
              "matched": false,
              "word": "witless",
              "type": "adj.",
              "definition": "Foolish, indiscreet, or silly."
          },
          {
              "matched": false,
              "word": "witling",
              "type": "n.",
              "definition": "A person who has little understanding."
          },
          {
              "matched": false,
              "word": "witticism",
              "type": "n.",
              "definition": "A witty, brilliant, or original saying or sentiment."
          },
          {
              "matched": false,
              "word": "wittingly",
              "type": "adv.",
              "definition": "With knowledge and by design."
          },
          {
              "matched": false,
              "word": "wizen",
              "type": "v.",
              "definition": "To become or cause to become withered or dry."
          },
          {
              "matched": false,
              "word": "wizen-faced",
              "type": "adj.",
              "definition": "Having a shriveled face."
          },
          {
              "matched": false,
              "word": "working-man",
              "type": "n.",
              "definition": "One who earns his bread by manual labor."
          },
          {
              "matched": false,
              "word": "workmanlike",
              "type": "adj.",
              "definition": "Like or befitting a skilled workman."
          },
          {
              "matched": false,
              "word": "workmanship",
              "type": "n.",
              "definition": "The art or skill of a workman."
          },
          {
              "matched": false,
              "word": "wrangle",
              "type": "v.",
              "definition": "To maintain by noisy argument or dispute."
          },
          {
              "matched": false,
              "word": "wreak",
              "type": "v.",
              "definition": "To inflict, as a revenge or punishment."
          },
          {
              "matched": false,
              "word": "wrest",
              "type": "v.",
              "definition": "To pull or force away by or as by violent twisting or wringing."
          },
          {
              "matched": false,
              "word": "wretchedness",
              "type": "n.",
              "definition": "Extreme misery or unhappiness."
          },
          {
              "matched": false,
              "word": "writhe",
              "type": "v.",
              "definition": "To twist the body, face, or limbs or as in pain or distress."
          },
          {
              "matched": false,
              "word": "writing",
              "type": "n.",
              "definition": "The act or art of tracing or inscribing on a surface letters or ideographs."
          },
          {
              "matched": false,
              "word": "wry",
              "type": "adj.",
              "definition": "Deviating from that which is proper or right."
          },
          {
              "matched": false,
              "word": "yearling",
              "type": "n.",
              "definition": "A young animal past its first year and not yet two years old."
          },
          {
              "matched": false,
              "word": "zealot",
              "type": "n.",
              "definition": "One who espouses a cause or pursues an object in an immoderately partisan          "
          },
          {
              "matched": false,
              "word": "zeitgeist",
              "type": "n.",
              "definition": "The intellectual and moral tendencies that characterize any age or epoch."
          },
          {
              "matched": false,
              "word": "zenith",
              "type": "n.",
              "definition": "The culminating-point of prosperity, influence, or greatness."
          },
          {
              "matched": false,
              "word": "zephyr",
              "type": "n.",
              "definition": "Any soft, gentle wind."
          },
          {
              "matched": false,
              "word": "zodiac",
              "type": "n.",
              "definition": "An imaginary belt encircling the heavens within which are the larger planets."
          }
      ]
];

function getRandomSubset(arr, n) {
     const subset = [...arr].sort(() => Math.random() - 0.5);
     return subset.slice(0, n);
}

export default function FlipCard() {
     const [cards, setCards] = useState([]);
     const [turns, setTurns] = useState(0);
     const [choiceOne, setChoiceOne] = useState(null);
     const [choiceTwo, setChoiceTwo] = useState(null);
     const [disabled, setDisabled] = useState(false);

     const shuffleCards = () => {
          const selected = getRandomSubset(cardImages, 6);
          const shuffledCards = [...selected, ...selected]
               .sort(() => Math.random() - 0.5)
               .map((card) => ({ ...card, id: Math.random() }));

          setChoiceOne(null);
          setChoiceTwo(null);
          setCards(shuffledCards);
          setTurns(0);
     };

     const handleChoice = (card) => {
          choiceOne ? setChoiceTwo(card) : setChoiceOne(card);
     };

     useEffect(() => {
          if (choiceOne && choiceTwo) {
               setDisabled(true);
               if (choiceOne.word === choiceTwo.word) {
                    setCards(prevCards => {
                         return prevCards.map(card => {
                              if (card.word === choiceOne.word) {
                                   return { ...card, matched: true };
                              } else {
                                   return card;
                              }
                         });
                    });
                    setTimeout(() => {
                         triggerConfetti(); // Trigger confetti on match
                         resetTurn(true)
                    }, 1000)

               } else {
                    setTimeout(() => resetTurn(), 1000);
               }
          }
     }, [choiceOne, choiceTwo]);

     const triggerConfetti = () => {
          confetti({
               particleCount: 1000,
               spread: 170,
               origin: { y: 0.6 }
          });
     };

     const resetTurn = (matched) => {
          setChoiceOne(null);
          setChoiceTwo(null);
          setTurns(prev => prev +  (matched ? 0 : 1 ));
          setDisabled(false);
     };

     useEffect(() => {
          shuffleCards();
     }, []);

     return (
          <div className="flipcard">
               <h1>Matching</h1>
               <button onClick={shuffleCards}>NewGame</button>
               <div className='card-grid'>
                    {cards.map(card => (
                         <Card key={card.word}
                              card={card}
                              handleChoice={handleChoice}
                              flipped={card === choiceOne || card === choiceTwo || card.matched}
                              disabled={disabled}
                         />
                    ))}
                    <p style={{ fontSize: '27px', color:'brown' }}>Misses: {turns}</p>
               </div>
          </div>
     );
}
