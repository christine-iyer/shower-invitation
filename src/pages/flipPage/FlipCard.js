import { useState, useEffect } from 'react';
import Card from './Card';
import Random from './Random';
import MatchWord from './MatchWord';

import confetti from 'canvas-confetti';
import styles from './Card.module.scss';

const cardImages =[
    {
        "matched": false,
        "definition": "abase",
        "type": "v.",
        "word": "To lower in position, estimation, or the like; degrade."
    },
    {
        "matched": false,
        "definition": "abbess",
        "type": "n.",
        "word": "The lady superior of a nunnery."
    },
    {
        "matched": false,
        "definition": "abbey",
        "type": "n.",
        "word": "The group of buildings which collectively form the dwelling-place of a society of        "
    },
    {
        "matched": false,
        "definition": "abbot",
        "type": "n.",
        "word": "The superior of a community of monks."
    },
    {
        "matched": false,
        "definition": "abdicate",
        "type": "v.",
        "word": "To give up (royal power or the like)."
    },
    {
        "matched": false,
        "definition": "abdomen",
        "type": "n.",
        "word": "In mammals, the visceral cavity between the diaphragm and the pelvic floor; the         "
    },
    {
        "matched": false,
        "definition": "abdominal",
        "type": "n.",
        "word": "Of, pertaining to, or situated on the abdomen."
    },
    {
        "matched": false,
        "definition": "abduction",
        "type": "n.",
        "word": "A carrying away of a person against his will, or illegally."
    },
    {
        "matched": false,
        "definition": "abed",
        "type": "adv.",
        "word": "In bed; on a bed."
    },
    {
        "matched": false,
        "definition": "aberration",
        "type": "n.",
        "word": "Deviation from a right, customary, or prescribed course."
    },
    {
        "matched": false,
        "definition": "abet",
        "type": "v.",
        "word": "To aid, promote, or encourage the commission of (an offense)."
    },
    {
        "matched": false,
        "definition": "abeyance",
        "type": "n.",
        "word": "A state of suspension or temporary inaction."
    },
    {
        "matched": false,
        "definition": "abhorrence",
        "type": "n.",
        "word": "The act of detesting extremely."
    },
    {
        "matched": false,
        "definition": "abhorrent",
        "type": "adj.",
        "word": "Very repugnant; hateful."
    },
    {
        "matched": false,
        "definition": "abidance",
        "type": "n.",
        "word": "An abiding."
    },
    {
        "matched": false,
        "definition": "abject",
        "type": "adj.",
        "word": "Sunk to a low condition."
    },
    {
        "matched": false,
        "definition": "abjure",
        "type": "v.",
        "word": "To recant, renounce, repudiate under oath."
    },
    {
        "matched": false,
        "definition": "able-bodied",
        "type": "adj.",
        "word": "Competent for physical service."
    },
    {
        "matched": false,
        "definition": "ablution",
        "type": "n.",
        "word": "A washing or cleansing, especially of the body."
    },
    {
        "matched": false,
        "definition": "abnegate",
        "type": "v.",
        "word": "To renounce (a right or privilege)."
    },
    {
        "matched": false,
        "definition": "abnormal",
        "type": "adj.",
        "word": "Not conformed to the ordinary rule or standard."
    },
    {
        "matched": false,
        "definition": "abominable",
        "type": "adj.",
        "word": "Very hateful."
    },
    {
        "matched": false,
        "definition": "abominate",
        "type": "v.",
        "word": "To hate violently."
    },
    {
        "matched": false,
        "definition": "abomination",
        "type": "n.",
        "word": "A very detestable act or practice."
    },
    {
        "matched": false,
        "definition": "aboriginal",
        "type": "adj.",
        "word": "Primitive; unsophisticated."
    },
    {
        "matched": false,
        "definition": "aborigines",
        "type": "n.",
        "word": "The original of earliest known inhabitants of a country."
    },
    {
        "matched": false,
        "definition": "aboveboard",
        "type": "adv.",
        "word": "& adj. Without concealment, fraud, or trickery."
    },
    {
        "matched": false,
        "definition": "abrade",
        "type": "v.",
        "word": "To wear away the surface or some part of by friction."
    },
    {
        "matched": false,
        "definition": "abrasion",
        "type": "n.",
        "word": "That which is rubbed off."
    },
    {
        "matched": false,
        "definition": "abridge",
        "type": "v.",
        "word": "To make shorter in words, keeping the essential features, leaning out minor          "
    },
    {
        "matched": false,
        "definition": "abridgment",
        "type": "n.",
        "word": "A condensed form as of a book or play."
    },
    {
        "matched": false,
        "definition": "abrogate",
        "type": "v.",
        "word": "To abolish, repeal."
    },
    {
        "matched": false,
        "definition": "abrupt",
        "type": "adj.",
        "word": "Beginning, ending, or changing suddenly or with a break."
    },
    {
        "matched": false,
        "definition": "abscess",
        "type": "n.",
        "word": "A Collection of pus in a cavity formed within some tissue of the body."
    },
    {
        "matched": false,
        "definition": "abscission",
        "type": "n.",
        "word": "The act of cutting off, as in a surgical operation."
    },
    {
        "matched": false,
        "definition": "abscond",
        "type": "v.",
        "word": "To depart suddenly and secretly, as for the purpose of escaping arrest."
    },
    {
        "matched": false,
        "definition": "absence",
        "type": "n.",
        "word": "The fact of not being present or available."
    },
    {
        "matched": false,
        "definition": "absent-minded",
        "type": "adj.",
        "word": "Lacking in attention to immediate surroundings or business."
    },
    {
        "matched": false,
        "definition": "absolution",
        "type": "n.",
        "word": "Forgiveness, or passing over of offenses."
    },
    {
        "matched": false,
        "definition": "absolve",
        "type": "v.",
        "word": "To free from sin or its penalties."
    },
    {
        "matched": false,
        "definition": "absorb",
        "type": "v.",
        "word": "To drink in or suck up, as a sponge absorbs water."
    },
    {
        "matched": false,
        "definition": "absorption",
        "type": "n.",
        "word": "The act or process of absorbing."
    },
    {
        "matched": false,
        "definition": "abstain",
        "type": "v.",
        "word": "To keep oneself back (from doing or using something)."
    },
    {
        "matched": false,
        "definition": "abstemious",
        "type": "adj.",
        "word": "Characterized by self denial or abstinence, as in the use of drink, food."
    },
    {
        "matched": false,
        "definition": "abstinence",
        "type": "n.",
        "word": "Self denial."
    },
    {
        "matched": false,
        "definition": "abstruse",
        "type": "adj.",
        "word": "Dealing with matters difficult to be understood."
    },
    {
        "matched": false,
        "definition": "absurd",
        "type": "adj.",
        "word": "Inconsistent with reason or common sense."
    },
    {
        "matched": false,
        "definition": "abundant",
        "type": "adj.",
        "word": "Plentiful."
    },
    {
        "matched": false,
        "definition": "abusive",
        "type": "adj.",
        "word": "Employing harsh words or ill treatment."
    },
    {
        "matched": false,
        "definition": "abut",
        "type": "v.",
        "word": "To touch at the end or boundary line."
    },
    {
        "matched": false,
        "definition": "abyss",
        "type": "n.",
        "word": "Bottomless gulf."
    },
    {
        "matched": false,
        "definition": "academic",
        "type": "adj.",
        "word": "Of or pertaining to an academy, college, or university."
    },
    {
        "matched": false,
        "definition": "academician",
        "type": "n.",
        "word": "A member of an academy of literature, art, or science."
    },
    {
        "matched": false,
        "definition": "academy",
        "type": "n.",
        "word": "Any institution where the higher branches of learning are taught."
    },
    {
        "matched": false,
        "definition": "accede",
        "type": "v.",
        "word": "To agree."
    },
    {
        "matched": false,
        "definition": "accelerate",
        "type": "v.",
        "word": "To move faster."
    },
    {
        "matched": false,
        "definition": "accept",
        "type": "v.",
        "word": "To take when offered."
    },
    {
        "matched": false,
        "definition": "access",
        "type": "n.",
        "word": "A way of approach or entrance; passage."
    },
    {
        "matched": false,
        "definition": "accessible",
        "type": "adj.",
        "word": "Approachable."
    },
    {
        "matched": false,
        "definition": "accession",
        "type": "n.",
        "word": "Induction or elevation, as to dignity, office, or government."
    },
    {
        "matched": false,
        "definition": "accessory",
        "type": "n.",
        "word": "A person or thing that aids the principal agent."
    },
    {
        "matched": false,
        "definition": "acclaim",
        "type": "v.",
        "word": "To utter with a shout."
    },
    {
        "matched": false,
        "definition": "accommodate",
        "type": "v.",
        "word": "To furnish something as a kindness or favor."
    },
    {
        "matched": false,
        "definition": "accompaniment",
        "type": "n.",
        "word": "A subordinate part or parts, enriching or supporting the leading part."
    },
    {
        "matched": false,
        "definition": "accompanist",
        "type": "n.",
        "word": "One who or that which accompanies."
    },
    {
        "matched": false,
        "definition": "accompany",
        "type": "v.",
        "word": "To go with, or be associated with, as a companion."
    },
    {
        "matched": false,
        "definition": "accomplice",
        "type": "n.",
        "word": "An associate in wrong-doing."
    },
    {
        "matched": false,
        "definition": "accomplish",
        "type": "v.",
        "word": "To bring to pass."
    },
    {
        "matched": false,
        "definition": "accordion",
        "type": "n.",
        "word": "A portable free-reed musical instrument."
    },
    {
        "matched": false,
        "definition": "accost",
        "type": "v.",
        "word": "To speak to."
    },
    {
        "matched": false,
        "definition": "account",
        "type": "n.",
        "word": "A record or statement of receipts and expenditures, or of business          "
    },
    {
        "matched": false,
        "definition": "accouter",
        "type": "v.",
        "word": "To dress."
    },
    {
        "matched": false,
        "definition": "accredit",
        "type": "v.",
        "word": "To give credit or authority to."
    },
    {
        "matched": false,
        "definition": "accumulate",
        "type": "v.",
        "word": "To become greater in quantity or number."
    },
    {
        "matched": false,
        "definition": "accuracy",
        "type": "n.",
        "word": "Exactness."
    },
    {
        "matched": false,
        "definition": "accurate",
        "type": "adj.",
        "word": "Conforming exactly to truth or to a standard."
    },
    {
        "matched": false,
        "definition": "accursed",
        "type": "adj.",
        "word": "Doomed to evil, misery, or misfortune."
    },
    {
        "matched": false,
        "definition": "accusation",
        "type": "n.",
        "word": "A charge of crime, misdemeanor, or error."
    },
    {
        "matched": false,
        "definition": "accusatory",
        "type": "adj.",
        "word": "Of, pertaining to, or involving an accusation."
    },
    {
        "matched": false,
        "definition": "accuse",
        "type": "v.",
        "word": "To charge with wrong doing, misconduct, or error."
    },
    {
        "matched": false,
        "definition": "accustom",
        "type": "v.",
        "word": "To make familiar by use."
    },
    {
        "matched": false,
        "definition": "acerbity",
        "type": "n.",
        "word": "Sourness, with bitterness and astringency."
    },
    {
        "matched": false,
        "definition": "acetate",
        "type": "n.",
        "word": "A salt of acetic acid."
    },
    {
        "matched": false,
        "definition": "acetic",
        "type": "adj.",
        "word": "Of, pertaining to, or of the nature of vinegar."
    },
    {
        "matched": false,
        "definition": "ache",
        "type": "v.",
        "word": "To be in pain or distress."
    },
    {
        "matched": false,
        "definition": "Achillean",
        "type": "adj.",
        "word": "Invulnerable."
    },
    {
        "matched": false,
        "definition": "achromatic",
        "type": "adj.",
        "word": "Colorless,"
    },
    {
        "matched": false,
        "definition": "acid",
        "type": "n.",
        "word": "A sour substance."
    },
    {
        "matched": false,
        "definition": "acidify",
        "type": "v.",
        "word": "To change into acid."
    },
    {
        "matched": false,
        "definition": "acknowledge",
        "type": "v.",
        "word": "To recognize; to admit the genuineness or validity of."
    },
    {
        "matched": false,
        "definition": "acknowledgment",
        "type": "n.",
        "word": "Recognition."
    },
    {
        "matched": false,
        "definition": "acme",
        "type": "n.",
        "word": "The highest point, or summit."
    },
    {
        "matched": false,
        "definition": "acoustic",
        "type": "adj.",
        "word": "Pertaining to the act or sense of hearing."
    },
    {
        "matched": false,
        "definition": "acquaint",
        "type": "v.",
        "word": "To make familiar or conversant."
    },
    {
        "matched": false,
        "definition": "acquiesce",
        "type": "v.",
        "word": "To comply; submit."
    },
    {
        "matched": false,
        "definition": "acquiescence",
        "type": "n.",
        "word": "Passive consent."
    },
    {
        "matched": false,
        "definition": "acquire",
        "type": "v.",
        "word": "To get as one's own."
    },
    {
        "matched": false,
        "definition": "acquisition",
        "type": "n.",
        "word": "Anything gained, or made one's own, usually by effort or labor."
    },
    {
        "matched": false,
        "definition": "acquit",
        "type": "v.",
        "word": "To free or clear, as from accusation."
    },
    {
        "matched": false,
        "definition": "acquittal",
        "type": "n.",
        "word": "A discharge from accusation by judicial action."
    },
    {
        "matched": false,
        "definition": "acquittance",
        "type": "n.",
        "word": "Release or discharge from indebtedness, obligation, or responsibility."
    },
    {
        "matched": false,
        "definition": "acreage",
        "type": "n.",
        "word": "Quantity or extent of land, especially of cultivated land."
    },
    {
        "matched": false,
        "definition": "acrid",
        "type": "adj.",
        "word": "Harshly pungent or bitter."
    },
    {
        "matched": false,
        "definition": "acrimonious",
        "type": "adj.",
        "word": "Full of bitterness."
    },
    {
        "matched": false,
        "definition": "acrimony",
        "type": "n.",
        "word": "Sharpness or bitterness of speech or temper."
    },
    {
        "matched": false,
        "definition": "actionable",
        "type": "adj.",
        "word": "Affording cause for instituting an action, as trespass, slanderous words."
    },
    {
        "matched": false,
        "definition": "actuality",
        "type": "n.",
        "word": "Any reality."
    },
    {
        "matched": false,
        "definition": "actuary",
        "type": "n.",
        "word": "An officer, as of an insurance company, who calculates and states the risks and          "
    },
    {
        "matched": false,
        "definition": "actuate",
        "type": "v.",
        "word": "To move or incite to action."
    },
    {
        "matched": false,
        "definition": "acumen",
        "type": "n.",
        "word": "Quickness of intellectual insight, or discernment; keenness of discrimination."
    },
    {
        "matched": false,
        "definition": "acute",
        "type": "adj.",
        "word": "Having fine and penetrating discernment."
    },
    {
        "matched": false,
        "definition": "adamant",
        "type": "n.",
        "word": "Any substance of exceeding hardness or impenetrability."
    },
    {
        "matched": false,
        "definition": "addendum",
        "type": "n.",
        "word": "Something added, or to be added."
    },
    {
        "matched": false,
        "definition": "addle",
        "type": "v.",
        "word": "To make inefficient or worthless; muddle."
    },
    {
        "matched": false,
        "definition": "adduce",
        "type": "v.",
        "word": "To bring forward or name for consideration."
    },
    {
        "matched": false,
        "definition": "adhere",
        "type": "v.",
        "word": "To stick fast or together."
    },
    {
        "matched": false,
        "definition": "adherence",
        "type": "n.",
        "word": "Attachment."
    },
    {
        "matched": false,
        "definition": "adherent",
        "type": "adj.",
        "word": "Clinging or sticking fast."
    },
    {
        "matched": false,
        "definition": "adhesion",
        "type": "n.",
        "word": "The state of being attached or joined."
    },
    {
        "matched": false,
        "definition": "adieu",
        "type": "inter.",
        "word": "Good-by; farewell."
    },
    {
        "matched": false,
        "definition": "adjacency",
        "type": "n.",
        "word": "The state of being adjacent."
    },
    {
        "matched": false,
        "definition": "adjacent",
        "type": "n.",
        "word": "That which is near or bordering upon."
    },
    {
        "matched": false,
        "definition": "adjudge",
        "type": "v.",
        "word": "To award or bestow by formal decision."
    },
    {
        "matched": false,
        "definition": "adjunct",
        "type": "n.",
        "word": "Something joined to or connected with another thing, but holding a subordinate          "
    },
    {
        "matched": false,
        "definition": "adjuration",
        "type": "n.",
        "word": "A vehement appeal."
    },
    {
        "matched": false,
        "definition": "adjutant",
        "type": "adj.",
        "word": "Auxiliary."
    },
    {
        "matched": false,
        "definition": "administrator",
        "type": "n.",
        "word": "One who manages affairs of any kind."
    },
    {
        "matched": false,
        "definition": "admissible",
        "type": "adj.",
        "word": "Having the right or privilege of entry."
    },
    {
        "matched": false,
        "definition": "admittance",
        "type": "n.",
        "word": "Entrance, or the right or permission to enter."
    },
    {
        "matched": false,
        "definition": "admonish",
        "type": "v.",
        "word": "To warn of a fault."
    },
    {
        "matched": false,
        "definition": "admonition",
        "type": "n.",
        "word": "Gentle reproof."
    },
    {
        "matched": false,
        "definition": "ado",
        "type": "n.",
        "word": "unnecessary activity or ceremony."
    },
    {
        "matched": false,
        "definition": "adoration",
        "type": "n.",
        "word": "Profound devotion."
    },
    {
        "matched": false,
        "definition": "adroit",
        "type": "adj.",
        "word": "Having skill in the use of the bodily or mental powers."
    },
    {
        "matched": false,
        "definition": "adulterant",
        "type": "n.",
        "word": "An adulterating substance."
    },
    {
        "matched": false,
        "definition": "adulterate",
        "type": "v.",
        "word": "To make impure by the admixture of other or baser ingredients."
    },
    {
        "matched": false,
        "definition": "adumbrate",
        "type": "v.",
        "word": "To represent beforehand in outline or by emblem."
    },
    {
        "matched": false,
        "definition": "advent",
        "type": "n.",
        "word": "The coming or arrival, as of any important change, event, state, or personage."
    },
    {
        "matched": false,
        "definition": "adverse",
        "type": "adj.",
        "word": "Opposing or opposed."
    },
    {
        "matched": false,
        "definition": "adversity",
        "type": "n.",
        "word": "Misfortune."
    },
    {
        "matched": false,
        "definition": "advert",
        "type": "v.",
        "word": "To refer incidentally."
    },
    {
        "matched": false,
        "definition": "advertiser",
        "type": "n.",
        "word": "One who advertises, especially in newspapers."
    },
    {
        "matched": false,
        "definition": "advisory",
        "type": "adj.",
        "word": "Not mandatory."
    },
    {
        "matched": false,
        "definition": "advocacy",
        "type": "n.",
        "word": "The act of pleading a cause."
    },
    {
        "matched": false,
        "definition": "advocate",
        "type": "n.",
        "word": "One who pleads the cause of another, as in a legal or ecclesiastical court."
    },
    {
        "matched": false,
        "definition": "aerial",
        "type": "adj.",
        "word": "Of, pertaining to, or like the air."
    },
    {
        "matched": false,
        "definition": "aeronaut",
        "type": "n.",
        "word": "One who navigates the air, a balloonist."
    },
    {
        "matched": false,
        "definition": "aeronautics",
        "type": "n.",
        "word": "the art or practice of flying aircraft"
    },
    {
        "matched": false,
        "definition": "aerostat",
        "type": "n.",
        "word": "A balloon or other apparatus floating in or sustained by the air."
    },
    {
        "matched": false,
        "definition": "aerostatics",
        "type": "n.",
        "word": "The branch of pneumatics that treats of the equilibrium, pressure, and          "
    },
    {
        "matched": false,
        "definition": "affable",
        "type": "adj.",
        "word": "Easy to approach."
    },
    {
        "matched": false,
        "definition": "affect",
        "type": "v.",
        "word": "To act upon"
    },
    {
        "matched": false,
        "definition": "affectation",
        "type": "n.",
        "word": "A studied or ostentatious pretense or attempt."
    },
    {
        "matched": false,
        "definition": "affiliate",
        "type": "n.",
        "word": "Some auxiliary person or thing."
    },
    {
        "matched": false,
        "definition": "affirmative",
        "type": "adj.",
        "word": "Answering yes; to a question at issue."
    },
    {
        "matched": false,
        "definition": "affix",
        "type": "v.",
        "word": "To fasten."
    },
    {
        "matched": false,
        "definition": "affluence",
        "type": "n.",
        "word": "A profuse or abundant supply of riches."
    },
    {
        "matched": false,
        "definition": "affront",
        "type": "n.",
        "word": "An open insult or indignity."
    },
    {
        "matched": false,
        "definition": "afire",
        "type": "adv.",
        "word": "& adj. On fire, literally or figuratively."
    },
    {
        "matched": false,
        "definition": "afoot",
        "type": "adv.",
        "word": "In progress."
    },
    {
        "matched": false,
        "definition": "aforesaid",
        "type": "adj.",
        "word": "Said in a preceding part or before."
    },
    {
        "matched": false,
        "definition": "afresh",
        "type": "adv.",
        "word": "Once more, after rest or interval."
    },
    {
        "matched": false,
        "definition": "afterthought",
        "type": "n.",
        "word": "A thought that comes later than its appropriate or expected time."
    },
    {
        "matched": false,
        "definition": "agglomerate",
        "type": "v.",
        "word": "To pile or heap together."
    },
    {
        "matched": false,
        "definition": "aggrandize",
        "type": "v.",
        "word": "To cause to appear greatly."
    },
    {
        "matched": false,
        "definition": "aggravate",
        "type": "v.",
        "word": "To make heavier, worse, or more burdensome."
    },
    {
        "matched": false,
        "definition": "aggravation",
        "type": "n.",
        "word": "The fact of being made heavier or more heinous, as a crime , offense,          "
    },
    {
        "matched": false,
        "definition": "aggregate",
        "type": "n.",
        "word": "The entire number, sum, mass, or quantity of something."
    },
    {
        "matched": false,
        "definition": "aggress",
        "type": "v.",
        "word": "To make the first attack."
    },
    {
        "matched": false,
        "definition": "aggression",
        "type": "n.",
        "word": "An unprovoked attack."
    },
    {
        "matched": false,
        "definition": "aggrieve",
        "type": "v.",
        "word": "To give grief or sorrow to."
    },
    {
        "matched": false,
        "definition": "aghast",
        "type": "adj.",
        "word": "Struck with terror and amazement."
    },
    {
        "matched": false,
        "definition": "agile",
        "type": "adj.",
        "word": "Able to move or act quickly, physically, or mentally."
    },
    {
        "matched": false,
        "definition": "agitate",
        "type": "v.",
        "word": "To move or excite (the feelings or thoughts)."
    },
    {
        "matched": false,
        "definition": "agrarian",
        "type": "adj.",
        "word": "Pertaining to land, especially agricultural land."
    },
    {
        "matched": false,
        "definition": "aide-de-camp",
        "type": "n.",
        "word": "An officer who receives and transmits the orders of the general."
    },
    {
        "matched": false,
        "definition": "ailment",
        "type": "n.",
        "word": "Slight sickness."
    },
    {
        "matched": false,
        "definition": "airy",
        "type": "adj.",
        "word": "Delicate, ethereal."
    },
    {
        "matched": false,
        "definition": "akin",
        "type": "adj.",
        "word": "Of similar nature or qualities."
    },
    {
        "matched": false,
        "definition": "alabaster",
        "type": "n.",
        "word": "A white or delicately tinted fine-grained gypsum."
    },
    {
        "matched": false,
        "definition": "alacrity",
        "type": "n.",
        "word": "Cheerful willingness."
    },
    {
        "matched": false,
        "definition": "albeit",
        "type": "conj.",
        "word": "Even though."
    },
    {
        "matched": false,
        "definition": "albino",
        "type": "n.",
        "word": "A person with milky white skin and hair, and eyes with bright red pupil and          "
    },
    {
        "matched": false,
        "definition": "album",
        "type": "n.",
        "word": "A book whose leaves are so made to form paper frames for holding photographs or          "
    },
    {
        "matched": false,
        "definition": "alchemy",
        "type": "n.",
        "word": "Chemistry of the middle ages, characterized by the pursuit of changing base          "
    },
    {
        "matched": false,
        "definition": "alcohol",
        "type": "n.",
        "word": "A volatile, inflammable, colorless liquid of a penetrating odor and burning          "
    },
    {
        "matched": false,
        "definition": "alcoholism",
        "type": "n.",
        "word": "A condition resulting from the inordinate or persistent use of alcoholic          "
    },
    {
        "matched": false,
        "definition": "alcove",
        "type": "n.",
        "word": "A covered recess connected with or at the side of a larger room."
    },
    {
        "matched": false,
        "definition": "alder",
        "type": "n.",
        "word": "Any shrub or small tree of the genus Alumnus, of the oak family."
    },
    {
        "matched": false,
        "definition": "alderman",
        "type": "n.",
        "word": "A member of a municipal legislative body, who usually exercises also certain          "
    },
    {
        "matched": false,
        "definition": "aldermanship",
        "type": "n.",
        "word": "The dignity, condition, office, or term of office of an alderman."
    },
    {
        "matched": false,
        "definition": "alias",
        "type": "n.",
        "word": "An assumed name."
    },
    {
        "matched": false,
        "definition": "alien",
        "type": "n.",
        "word": "One who owes allegiance to a foreign government."
    },
    {
        "matched": false,
        "definition": "alienable",
        "type": "adj.",
        "word": "Capable of being aliened or alienated, as lands."
    },
    {
        "matched": false,
        "definition": "alienate",
        "type": "v.",
        "word": "To cause to turn away."
    },
    {
        "matched": false,
        "definition": "alienation",
        "type": "n.",
        "word": "Estrangement."
    },
    {
        "matched": false,
        "definition": "aliment",
        "type": "n.",
        "word": "That which nourishes."
    },
    {
        "matched": false,
        "definition": "alkali",
        "type": "n.",
        "word": "Anything that will neutralize an acid, as lime, magnesia, etc."
    },
    {
        "matched": false,
        "definition": "allay",
        "type": "v.",
        "word": "To calm the violence or reduce the intensity of; mitigate."
    },
    {
        "matched": false,
        "definition": "allege",
        "type": "v.",
        "word": "To assert to be true, especially in a formal manner, as in court."
    },
    {
        "matched": false,
        "definition": "allegory",
        "type": "n.",
        "word": "The setting forth of a subject under the guise of another subject of aptly          "
    },
    {
        "matched": false,
        "definition": "alleviate",
        "type": "v.",
        "word": "To make less burdensome or less hard to bear."
    },
    {
        "matched": false,
        "definition": "alley",
        "type": "n.",
        "word": "A narrow street, garden path, walk, or the like."
    },
    {
        "matched": false,
        "definition": "alliance",
        "type": "n.",
        "word": "Any combination or union for some common purpose."
    },
    {
        "matched": false,
        "definition": "allot",
        "type": "v.",
        "word": "To assign a definite thing or part to a certain person."
    },
    {
        "matched": false,
        "definition": "allotment",
        "type": "n.",
        "word": "Portion."
    },
    {
        "matched": false,
        "definition": "allude",
        "type": "v.",
        "word": "To refer incidentally, or by suggestion."
    },
    {
        "matched": false,
        "definition": "allusion",
        "type": "n.",
        "word": "An indirect and incidental reference to something without definite mention of          "
    },
    {
        "matched": false,
        "definition": "alluvion",
        "type": "n.",
        "word": "Flood."
    },
    {
        "matched": false,
        "definition": "ally",
        "type": "n.",
        "word": "A person or thing connected with another, usually in some relation of helpfulness."
    },
    {
        "matched": false,
        "definition": "almanac",
        "type": "n.",
        "word": "A series of tables giving the days of the week together with certain          "
    },
    {
        "matched": false,
        "definition": "aloof",
        "type": "adv.",
        "word": "Not in sympathy with or desiring to associate with others."
    },
    {
        "matched": false,
        "definition": "altar",
        "type": "n.",
        "word": "Any raised place or structure on which sacrifices may be offered or incense          "
    },
    {
        "matched": false,
        "definition": "alter",
        "type": "v.",
        "word": "To make change in."
    },
    {
        "matched": false,
        "definition": "alteration",
        "type": "n.",
        "word": "Change or modification."
    },
    {
        "matched": false,
        "definition": "altercate",
        "type": "v.",
        "word": "To contend angrily or zealously in words."
    },
    {
        "matched": false,
        "definition": "alternate",
        "type": "n.",
        "word": "One chosen to act in place of another, in case of the absence or incapacity          "
    },
    {
        "matched": false,
        "definition": "alternative",
        "type": "n.",
        "word": "Something that may or must exist, be taken or chosen, or done instead of          "
    },
    {
        "matched": false,
        "definition": "altitude",
        "type": "n.",
        "word": "Vertical distance or elevation above any point or base-level, as the sea."
    },
    {
        "matched": false,
        "definition": "alto",
        "type": "n.",
        "word": "The lowest or deepest female voice or part."
    },
    {
        "matched": false,
        "definition": "altruism",
        "type": "n.",
        "word": "Benevolence to others on subordination to self-interest."
    },
    {
        "matched": false,
        "definition": "altruist",
        "type": "n.",
        "word": "One who advocates or practices altruism."
    },
    {
        "matched": false,
        "definition": "amalgam",
        "type": "n.",
        "word": "An alloy or union of mercury with another metal."
    },
    {
        "matched": false,
        "definition": "amalgamate",
        "type": "v.",
        "word": "To mix or blend together in a homogeneous body."
    },
    {
        "matched": false,
        "definition": "amateur",
        "type": "adj.",
        "word": "Practicing an art or occupation for the love of it, but not as a profession."
    },
    {
        "matched": false,
        "definition": "amatory",
        "type": "adj.",
        "word": "Designed to excite love."
    },
    {
        "matched": false,
        "definition": "ambidextrous",
        "type": "adj.",
        "word": "Having the ability of using both hands with equal skill or ease."
    },
    {
        "matched": false,
        "definition": "ambiguous",
        "type": "adj.",
        "word": "Having a double meaning."
    },
    {
        "matched": false,
        "definition": "ambitious",
        "type": "adj.",
        "word": "Eagerly desirous and aspiring."
    },
    {
        "matched": false,
        "definition": "ambrosial",
        "type": "adj.",
        "word": "Divinely sweet, fragrant, or delicious."
    },
    {
        "matched": false,
        "definition": "ambulance",
        "type": "n.",
        "word": "A vehicle fitted for conveying the sick and wounded."
    },
    {
        "matched": false,
        "definition": "ambulate",
        "type": "v.",
        "word": "To walk about"
    },
    {
        "matched": false,
        "definition": "ambush",
        "type": "n.",
        "word": "The act or state of lying concealed for the purpose of surprising or attacking          "
    },
    {
        "matched": false,
        "definition": "ameliorate",
        "type": "v.",
        "word": "To relieve, as from pain or hardship"
    },
    {
        "matched": false,
        "definition": "amenable",
        "type": "adj.",
        "word": "Willing and ready to submit."
    },
    {
        "matched": false,
        "definition": "Americanism",
        "type": "n.",
        "word": "A peculiar sense in which an English word or phrase is used in the United          "
    },
    {
        "matched": false,
        "definition": "amicable",
        "type": "adj.",
        "word": "Done in a friendly spirit."
    },
    {
        "matched": false,
        "definition": "amity",
        "type": "n.",
        "word": "Friendship."
    },
    {
        "matched": false,
        "definition": "amorous",
        "type": "adj.",
        "word": "Having a propensity for falling in love."
    },
    {
        "matched": false,
        "definition": "amorphous",
        "type": "adj.",
        "word": "Without determinate shape."
    },
    {
        "matched": false,
        "definition": "amour",
        "type": "n.",
        "word": "A love-affair, especially one of an illicit nature."
    },
    {
        "matched": false,
        "definition": "ampere",
        "type": "n.",
        "word": "The practical unit of electric-current strength."
    },
    {
        "matched": false,
        "definition": "ampersand",
        "type": "n.",
        "word": "The character &; and."
    },
    {
        "matched": false,
        "definition": "amphibious",
        "type": "adj.",
        "word": "Living both on land and in water."
    },
    {
        "matched": false,
        "definition": "amphitheater",
        "type": "n.",
        "word": "An edifice of elliptical shape, constructed about a central open space or          "
    },
    {
        "matched": false,
        "definition": "amplitude",
        "type": "n.",
        "word": "Largeness."
    },
    {
        "matched": false,
        "definition": "amply",
        "type": "adv.",
        "word": "Sufficiently."
    },
    {
        "matched": false,
        "definition": "amputate",
        "type": "v.",
        "word": "To remove by cutting, as a limb or some portion of the body."
    },
    {
        "matched": false,
        "definition": "amusement",
        "type": "n.",
        "word": "Diversion."
    },
    {
        "matched": false,
        "definition": "anachronism",
        "type": "n.",
        "word": "Anything occurring or existing out of its proper time."
    },
    {
        "matched": false,
        "definition": "anagram",
        "type": "n.",
        "word": "The letters of a word or phrase so transposed as to make a different word or          "
    },
    {
        "matched": false,
        "definition": "analogous",
        "type": "adj.",
        "word": "Corresponding (to some other) in certain respects, as in form, proportion,          "
    },
    {
        "matched": false,
        "definition": "analogy",
        "type": "n.",
        "word": "Reasoning in which from certain and known relations or resemblance others are          "
    },
    {
        "matched": false,
        "definition": "analyst",
        "type": "n.",
        "word": "One who analyzes or makes use of the analytical method."
    },
    {
        "matched": false,
        "definition": "analyze",
        "type": "v.",
        "word": "To examine minutely or critically."
    },
    {
        "matched": false,
        "definition": "anarchy",
        "type": "n.",
        "word": "Absence or utter disregard of government."
    },
    {
        "matched": false,
        "definition": "anathema",
        "type": "n.",
        "word": "Anything forbidden, as by social usage."
    },
    {
        "matched": false,
        "definition": "anatomy",
        "type": "n.",
        "word": "That branch of morphology which treats of the structure of organisms."
    },
    {
        "matched": false,
        "definition": "ancestry",
        "type": "n.",
        "word": "One's ancestors collectively."
    },
    {
        "matched": false,
        "definition": "anecdote",
        "type": "n.",
        "word": "A brief account of some interesting event or incident."
    },
    {
        "matched": false,
        "definition": "anemia",
        "type": "n.",
        "word": "Deficiency of blood or red corpuscles."
    },
    {
        "matched": false,
        "definition": "anemic",
        "type": "adj.",
        "word": "Affected with anemia."
    },
    {
        "matched": false,
        "definition": "anemometer",
        "type": "n.",
        "word": "An instrument for measuring the force or velocity of wind."
    },
    {
        "matched": false,
        "definition": "anesthetic",
        "type": "adj.",
        "word": "Pertaining to or producing loss of sensation."
    },
    {
        "matched": false,
        "definition": "anew",
        "type": "adv.",
        "word": "Once more."
    },
    {
        "matched": false,
        "definition": "angelic",
        "type": "adj.",
        "word": "Saintly."
    },
    {
        "matched": false,
        "definition": "Anglophobia",
        "type": "n.",
        "word": "Hatred or dread of England or of what is English."
    },
    {
        "matched": false,
        "definition": "Anglo-Saxon",
        "type": "n.",
        "word": "The entire English race wherever found, as in Europe, the United States, or          "
    },
    {
        "matched": false,
        "definition": "angular",
        "type": "adj.",
        "word": "Sharp-cornered."
    },
    {
        "matched": false,
        "definition": "anhydrous",
        "type": "adj.",
        "word": "Withered."
    },
    {
        "matched": false,
        "definition": "animadversion",
        "type": "n.",
        "word": "The utterance of criticism or censure."
    },
    {
        "matched": false,
        "definition": "animadvert",
        "type": "v.",
        "word": "To pass criticism or censure."
    },
    {
        "matched": false,
        "definition": "animalcule",
        "type": "n.",
        "word": "An animal of microscopic smallness."
    },
    {
        "matched": false,
        "definition": "animate",
        "type": "v.",
        "word": "To make alive."
    },
    {
        "matched": false,
        "definition": "animosity",
        "type": "n.",
        "word": "Hatred."
    },
    {
        "matched": false,
        "definition": "annalist",
        "type": "n.",
        "word": "Historian."
    },
    {
        "matched": false,
        "definition": "annals",
        "type": "n.",
        "word": "A record of events in their chronological order, year by year."
    },
    {
        "matched": false,
        "definition": "annex",
        "type": "v.",
        "word": "To add or affix at the end."
    },
    {
        "matched": false,
        "definition": "annihilate",
        "type": "v.",
        "word": "To destroy absolutely."
    },
    {
        "matched": false,
        "definition": "annotate",
        "type": "v.",
        "word": "To make explanatory or critical notes on or upon."
    },
    {
        "matched": false,
        "definition": "annual",
        "type": "adj.",
        "word": "Occurring every year."
    },
    {
        "matched": false,
        "definition": "annuity",
        "type": "n.",
        "word": "An annual allowance, payment, or income."
    },
    {
        "matched": false,
        "definition": "annunciation",
        "type": "n.",
        "word": "Proclamation."
    },
    {
        "matched": false,
        "definition": "anode",
        "type": "n.",
        "word": "The point where or path by which a voltaic current enters an electrolyte or the          "
    },
    {
        "matched": false,
        "definition": "anonymous",
        "type": "adj.",
        "word": "Of unknown authorship."
    },
    {
        "matched": false,
        "definition": "antagonism",
        "type": "n.",
        "word": "Mutual opposition or resistance of counteracting forces, principles, or          "
    },
    {
        "matched": false,
        "definition": "Antarctic",
        "type": "adj.",
        "word": "Pertaining to the south pole or the regions near it."
    },
    {
        "matched": false,
        "definition": "ante",
        "type": "v.",
        "word": "In the game of poker, to put up a stake before the cards are dealt."
    },
    {
        "matched": false,
        "definition": "antecede",
        "type": "v.",
        "word": "To precede."
    },
    {
        "matched": false,
        "definition": "antecedent",
        "type": "n.",
        "word": "One who or that which precedes or goes before, as in time, place, rank,          "
    },
    {
        "matched": false,
        "definition": "antechamber",
        "type": "n.",
        "word": "A waiting room for those who seek audience."
    },
    {
        "matched": false,
        "definition": "antedate",
        "type": "v.",
        "word": "To assign or affix a date to earlier than the actual one."
    },
    {
        "matched": false,
        "definition": "antediluvian",
        "type": "adj.",
        "word": "Of or pertaining to the times, things, events before the great flood in          "
    },
    {
        "matched": false,
        "definition": "antemeridian",
        "type": "adj.",
        "word": "Before noon."
    },
    {
        "matched": false,
        "definition": "antemundane",
        "type": "adj.",
        "word": "Pertaining to time before the world's creation."
    },
    {
        "matched": false,
        "definition": "antenatal",
        "type": "adj.",
        "word": "Occurring or existing before birth."
    },
    {
        "matched": false,
        "definition": "anterior",
        "type": "adj.",
        "word": "Prior."
    },
    {
        "matched": false,
        "definition": "anteroom",
        "type": "n.",
        "word": "A room situated before and opening into another, usually larger."
    },
    {
        "matched": false,
        "definition": "anthology",
        "type": "n.",
        "word": "A collection of extracts from the writings of various authors."
    },
    {
        "matched": false,
        "definition": "anthracite",
        "type": "n.",
        "word": "Hard coal."
    },
    {
        "matched": false,
        "definition": "anthropology",
        "type": "n.",
        "word": "The science of man in general."
    },
    {
        "matched": false,
        "definition": "anthropomorphous",
        "type": "adj.",
        "word": "Having or resembling human form."
    },
    {
        "matched": false,
        "definition": "antic",
        "type": "n.",
        "word": "A grotesque, ludicrous, or fantastic action."
    },
    {
        "matched": false,
        "definition": "Antichrist",
        "type": "n.",
        "word": "Any opponent or enemy of Christ, whether a person or a power."
    },
    {
        "matched": false,
        "definition": "anticlimax",
        "type": "n.",
        "word": "A gradual or sudden decrease in the importance or impressiveness of what is          "
    },
    {
        "matched": false,
        "definition": "anticyclone",
        "type": "n.",
        "word": "An atmospheric condition of high central pressure, with currents flowing          "
    },
    {
        "matched": false,
        "definition": "antidote",
        "type": "n.",
        "word": "Anything that will counteract or remove the effects of poison, disease, or the          "
    },
    {
        "matched": false,
        "definition": "antilogy",
        "type": "n.",
        "word": "Inconsistency or contradiction in terms or ideas."
    },
    {
        "matched": false,
        "definition": "antipathize",
        "type": "v.",
        "word": "To show or feel a feeling of antagonism, aversion, or dislike."
    },
    {
        "matched": false,
        "definition": "antiphon",
        "type": "n.",
        "word": "A response or alteration of responses, generally musical."
    },
    {
        "matched": false,
        "definition": "antiphony",
        "type": "n.",
        "word": "An anthem or other composition sung responsively."
    },
    {
        "matched": false,
        "definition": "antipodes",
        "type": "n.",
        "word": "A place or region on the opposite side of the earth."
    },
    {
        "matched": false,
        "definition": "antiquary",
        "type": "n.",
        "word": "One who collects and examines old things, as coins, books, medals, weapons,          "
    },
    {
        "matched": false,
        "definition": "antiquate",
        "type": "v.",
        "word": "To make old or out of date."
    },
    {
        "matched": false,
        "definition": "antique",
        "type": "adj.",
        "word": "Pertaining to ancient times."
    },
    {
        "matched": false,
        "definition": "antiseptic",
        "type": "n.",
        "word": "Anything that destroys or restrains the growth of putrefactive          "
    },
    {
        "matched": false,
        "definition": "antislavery",
        "type": "adj.",
        "word": "Opposed to human slavery."
    },
    {
        "matched": false,
        "definition": "antispasmodic",
        "type": "adj.",
        "word": "Tending to prevent or relieve non-inflammatory spasmodic affections."
    },
    {
        "matched": false,
        "definition": "antistrophe",
        "type": "n.",
        "word": "The inversion of terms in successive classes, as in \"the home of joy          "
    },
    {
        "matched": false,
        "definition": "antitoxin",
        "type": "n.",
        "word": "A substance which neutralizes the poisonous products of micro-organisms."
    },
    {
        "matched": false,
        "definition": "antonym",
        "type": "n.",
        "word": "A word directly opposed to another in meaning."
    },
    {
        "matched": false,
        "definition": "anxious",
        "type": "adj.",
        "word": "Distressed in mind respecting some uncertain matter."
    },
    {
        "matched": false,
        "definition": "apathy",
        "type": "n.",
        "word": "Insensibility to emotion or passionate feeling."
    },
    {
        "matched": false,
        "definition": "aperture",
        "type": "n.",
        "word": "Hole."
    },
    {
        "matched": false,
        "definition": "apex",
        "type": "n.",
        "word": "The highest point, as of a mountain."
    },
    {
        "matched": false,
        "definition": "aphorism",
        "type": "n.",
        "word": "Proverb."
    },
    {
        "matched": false,
        "definition": "apiary",
        "type": "n.",
        "word": "A place where bees are kept."
    },
    {
        "matched": false,
        "definition": "apogee",
        "type": "n.",
        "word": "The climax."
    },
    {
        "matched": false,
        "definition": "apology",
        "type": "n.",
        "word": "A disclaimer of intentional error or offense."
    },
    {
        "matched": false,
        "definition": "apostasy",
        "type": "n.",
        "word": "A total departure from one's faith or religion."
    },
    {
        "matched": false,
        "definition": "apostate",
        "type": "adj.",
        "word": "False."
    },
    {
        "matched": false,
        "definition": "apostle",
        "type": "n.",
        "word": "Any messenger commissioned by or as by divine authority."
    },
    {
        "matched": false,
        "definition": "apothecary",
        "type": "n.",
        "word": "One who keeps drugs for sale and puts up prescriptions."
    },
    {
        "matched": false,
        "definition": "apotheosis",
        "type": "n.",
        "word": "Deification."
    },
    {
        "matched": false,
        "definition": "appall",
        "type": "v.",
        "word": "To fill with dismay or horror."
    },
    {
        "matched": false,
        "definition": "apparent",
        "type": "adj.",
        "word": "Easily understood."
    },
    {
        "matched": false,
        "definition": "apparition",
        "type": "n.",
        "word": "Ghost."
    },
    {
        "matched": false,
        "definition": "appease",
        "type": "v.",
        "word": "To soothe by quieting anger or indignation."
    },
    {
        "matched": false,
        "definition": "appellate",
        "type": "adj.",
        "word": "Capable of being appealed to."
    },
    {
        "matched": false,
        "definition": "appellation",
        "type": "n.",
        "word": "The name or title by which a particular person, class, or thing is called."
    },
    {
        "matched": false,
        "definition": "append",
        "type": "v.",
        "word": "To add or attach, as something accessory, subordinate, or supplementary."
    },
    {
        "matched": false,
        "definition": "appertain",
        "type": "v.",
        "word": "To belong, as by right, fitness, association, classification, possession, or          "
    },
    {
        "matched": false,
        "definition": "apposite",
        "type": "adj.",
        "word": "Appropriate."
    },
    {
        "matched": false,
        "definition": "apposition",
        "type": "n.",
        "word": "The act of placing side by side, together, or in contact."
    },
    {
        "matched": false,
        "definition": "appraise",
        "type": "v.",
        "word": "To estimate the money value of."
    },
    {
        "matched": false,
        "definition": "appreciable",
        "type": "adj.",
        "word": "Capable of being discerned by the senses or intellect."
    },
    {
        "matched": false,
        "definition": "apprehend",
        "type": "v.",
        "word": "To make a prisoner of (a person) in the name of the law."
    },
    {
        "matched": false,
        "definition": "apprehensible",
        "type": "adj.",
        "word": "Capable of being conceived."
    },
    {
        "matched": false,
        "definition": "approbation",
        "type": "n.",
        "word": "Sanction."
    },
    {
        "matched": false,
        "definition": "appropriate",
        "type": "adj.",
        "word": "Suitable for the purpose and circumstances."
    },
    {
        "matched": false,
        "definition": "aqueduct",
        "type": "n.",
        "word": "A water-conduit, particularly one for supplying a community from a distance."
    },
    {
        "matched": false,
        "definition": "aqueous",
        "type": "adj.",
        "word": "Of, pertaining to, or containing water."
    },
    {
        "matched": false,
        "definition": "arbiter",
        "type": "n.",
        "word": "One chosen or appointed, by mutual consent of parties in dispute, to decide          "
    },
    {
        "matched": false,
        "definition": "arbitrary",
        "type": "adj.",
        "word": "Fixed or done capriciously."
    },
    {
        "matched": false,
        "definition": "arbitrate",
        "type": "v.",
        "word": "To act or give judgment as umpire."
    },
    {
        "matched": false,
        "definition": "arbor",
        "type": "n.",
        "word": "A tree."
    },
    {
        "matched": false,
        "definition": "arboreal",
        "type": "adj.",
        "word": "Of or pertaining to a tree or trees."
    },
    {
        "matched": false,
        "definition": "arborescent",
        "type": "adj.",
        "word": "Having the nature of a tree."
    },
    {
        "matched": false,
        "definition": "arboretum",
        "type": "n.",
        "word": "A botanical garden or place devoted to the cultivation of trees or shrubs."
    },
    {
        "matched": false,
        "definition": "arboriculture",
        "type": "n.",
        "word": "The cultivation of trees or shrubs."
    },
    {
        "matched": false,
        "definition": "arcade",
        "type": "n.",
        "word": "A vaulted passageway or street; a roofed passageway having shops, etc., opening          "
    },
    {
        "matched": false,
        "definition": "archaic",
        "type": "adj.",
        "word": "Antiquated"
    },
    {
        "matched": false,
        "definition": "archaism",
        "type": "n.",
        "word": "Obsolescence."
    },
    {
        "matched": false,
        "definition": "archangel",
        "type": "n.",
        "word": "An angel of high rank."
    },
    {
        "matched": false,
        "definition": "archbishop",
        "type": "n.",
        "word": "The chief of the bishops of an ecclesiastical province in the Greek, Roman,          "
    },
    {
        "matched": false,
        "definition": "archdeacon",
        "type": "n.",
        "word": "A high official administrator of the affairs of a diocese."
    },
    {
        "matched": false,
        "definition": "archaeology",
        "type": "n.",
        "word": "The branch of anthropology concerned with the systematic investigation of          "
    },
    {
        "matched": false,
        "definition": "archetype",
        "type": "n.",
        "word": "A prototype."
    },
    {
        "matched": false,
        "definition": "archipelago",
        "type": "n.",
        "word": "Any large body of water studded with islands, or the islands collectively          "
    },
    {
        "matched": false,
        "definition": "ardent",
        "type": "adj.",
        "word": "Burning with passion."
    },
    {
        "matched": false,
        "definition": "ardor",
        "type": "n.",
        "word": "Intensity of passion or affection."
    },
    {
        "matched": false,
        "definition": "arid",
        "type": "adj.",
        "word": "Very dry."
    },
    {
        "matched": false,
        "definition": "aristocracy",
        "type": "n.",
        "word": "A hereditary nobility"
    },
    {
        "matched": false,
        "definition": "aristocrat",
        "type": "n.",
        "word": "A hereditary noble or one nearly connected with nobility."
    },
    {
        "matched": false,
        "definition": "armada",
        "type": "n.",
        "word": "A fleet of war-vessels."
    },
    {
        "matched": false,
        "definition": "armful",
        "type": "n.",
        "word": "As much as can be held in the arm or arms."
    },
    {
        "matched": false,
        "definition": "armory",
        "type": "n.",
        "word": "An arsenal."
    },
    {
        "matched": false,
        "definition": "aroma",
        "type": "n.",
        "word": "An agreeable odor."
    },
    {
        "matched": false,
        "definition": "arraign",
        "type": "v.",
        "word": "To call into court, as a person indicted for crime, and demand whether he          "
    },
    {
        "matched": false,
        "definition": "arrange",
        "type": "v.",
        "word": "To put in definite or proper order."
    },
    {
        "matched": false,
        "definition": "arrangement",
        "type": "n.",
        "word": "The act of putting in proper order, or the state of being put in order."
    },
    {
        "matched": false,
        "definition": "arrant",
        "type": "adj.",
        "word": "Notoriously bad."
    },
    {
        "matched": false,
        "definition": "arrear",
        "type": "n.",
        "word": "Something overdue and unpaid."
    },
    {
        "matched": false,
        "definition": "arrival",
        "type": "n.",
        "word": "A coming to stopping-place or destination."
    },
    {
        "matched": false,
        "definition": "arrogant",
        "type": "adj.",
        "word": "Unduly or excessively proud, as of wealth, station, learning, etc."
    },
    {
        "matched": false,
        "definition": "arrogate",
        "type": "v.",
        "word": "To take, demand, or claim, especially presumptuously or without reasons or          "
    },
    {
        "matched": false,
        "definition": "Artesian well",
        "type": "n.",
        "word": "A very deep bored well. water rises due to underground pressure"
    },
    {
        "matched": false,
        "definition": "artful",
        "type": "adj.",
        "word": "Characterized by craft or cunning."
    },
    {
        "matched": false,
        "definition": "Arthurian",
        "type": "adj.",
        "word": "Pertaining to King Arthur, the real or legendary hero of British poetic          "
    },
    {
        "matched": false,
        "definition": "artifice",
        "type": "n.",
        "word": "Trickery."
    },
    {
        "matched": false,
        "definition": "artless",
        "type": "adj.",
        "word": "Ingenuous."
    },
    {
        "matched": false,
        "definition": "ascendant",
        "type": "adj.",
        "word": "Dominant."
    },
    {
        "matched": false,
        "definition": "ascension",
        "type": "n.",
        "word": "The act of rising."
    },
    {
        "matched": false,
        "definition": "ascent",
        "type": "n.",
        "word": "A rising, soaring, or climbing."
    },
    {
        "matched": false,
        "definition": "ascetic",
        "type": "adj.",
        "word": "Given to severe self-denial and practicing excessive abstinence and devotion."
    },
    {
        "matched": false,
        "definition": "ascribe",
        "type": "v.",
        "word": "To assign as a quality or attribute."
    },
    {
        "matched": false,
        "definition": "asexual",
        "type": "adj.",
        "word": "Having no distinct sexual organs."
    },
    {
        "matched": false,
        "definition": "ashen",
        "type": "adj.",
        "word": "Pale."
    },
    {
        "matched": false,
        "definition": "askance",
        "type": "adv.",
        "word": "With a side or indirect glance or meaning."
    },
    {
        "matched": false,
        "definition": "asperity",
        "type": "n.",
        "word": "Harshness or roughness of temper."
    },
    {
        "matched": false,
        "definition": "aspirant",
        "type": "n.",
        "word": "One who seeks earnestly, as for advancement, honors, place."
    },
    {
        "matched": false,
        "definition": "aspiration",
        "type": "n.",
        "word": "An earnest wish for that which is above one's present reach."
    },
    {
        "matched": false,
        "definition": "aspire",
        "type": "v.",
        "word": "To have an earnest desire, wish, or longing, as for something high and good, not          "
    },
    {
        "matched": false,
        "definition": "assailant",
        "type": "n.",
        "word": "One who attacks."
    },
    {
        "matched": false,
        "definition": "assassin",
        "type": "n.",
        "word": "One who kills, or tries to kill, treacherously or secretly."
    },
    {
        "matched": false,
        "definition": "assassinate",
        "type": "v.",
        "word": "To kill, as by surprise or secret assault, especially the killing of some          "
    },
    {
        "matched": false,
        "definition": "assassination",
        "type": "n.",
        "word": "Murderer, as by secret assault or treachery."
    },
    {
        "matched": false,
        "definition": "assay",
        "type": "n.",
        "word": "The chemical analysis or testing of an alloy ore."
    },
    {
        "matched": false,
        "definition": "assent",
        "type": "v.",
        "word": "To express agreement with a statement or matter of opinion."
    },
    {
        "matched": false,
        "definition": "assess",
        "type": "v.",
        "word": "To determine the amount of (a tax or other sum to be paid)."
    },
    {
        "matched": false,
        "definition": "assessor",
        "type": "n.",
        "word": "An officer whose duty it is to assess taxes."
    },
    {
        "matched": false,
        "definition": "assets",
        "type": "n.",
        "word": "pl. Property in general, regarded as applicable to the payment of debts."
    },
    {
        "matched": false,
        "definition": "assiduous",
        "type": "adj.",
        "word": "Diligent."
    },
    {
        "matched": false,
        "definition": "assignee",
        "type": "n.",
        "word": "One who is appointed to act for another in the management of certain property          "
    },
    {
        "matched": false,
        "definition": "assimilate",
        "type": "v.",
        "word": "To adapt."
    },
    {
        "matched": false,
        "definition": "assonance",
        "type": "n.",
        "word": "Resemblance or correspondence in sound."
    },
    {
        "matched": false,
        "definition": "assonant",
        "type": "adj.",
        "word": "Having resemblance of sound."
    },
    {
        "matched": false,
        "definition": "assonate",
        "type": "v.",
        "word": "To accord in sound, especially vowel sound."
    },
    {
        "matched": false,
        "definition": "assuage",
        "type": "v.",
        "word": "To cause to be less harsh, violent, or severe, as excitement, appetite, pain,          "
    },
    {
        "matched": false,
        "definition": "astringent",
        "type": "adj.",
        "word": "Harsh in disposition or character."
    },
    {
        "matched": false,
        "definition": "astute",
        "type": "adj.",
        "word": "Keen in discernment."
    },
    {
        "matched": false,
        "definition": "atheism",
        "type": "n.",
        "word": "The denial of the existence of God."
    },
    {
        "matched": false,
        "definition": "athirst",
        "type": "adj.",
        "word": "Wanting water."
    },
    {
        "matched": false,
        "definition": "athwart",
        "type": "adv.",
        "word": "From side to side."
    },
    {
        "matched": false,
        "definition": "atomizer",
        "type": "n.",
        "word": "An apparatus for reducing a liquid to a fine spray, as for disinfection,          "
    },
    {
        "matched": false,
        "definition": "atone",
        "type": "v.",
        "word": "To make amends for."
    },
    {
        "matched": false,
        "definition": "atonement",
        "type": "n.",
        "word": "Amends, reparation, or expiation made from wrong or injury."
    },
    {
        "matched": false,
        "definition": "atrocious",
        "type": "adj.",
        "word": "Outrageously or wantonly wicked, criminal, vile, or cruel."
    },
    {
        "matched": false,
        "definition": "atrocity",
        "type": "n.",
        "word": "Great cruelty or reckless wickedness."
    },
    {
        "matched": false,
        "definition": "attache",
        "type": "n.",
        "word": "A subordinate member of a diplomatic embassy."
    },
    {
        "matched": false,
        "definition": "attest",
        "type": "v.",
        "word": "To certify as accurate, genuine, or true."
    },
    {
        "matched": false,
        "definition": "attorney-general",
        "type": "n.",
        "word": "The chief law-officer of a government."
    },
    {
        "matched": false,
        "definition": "auburn",
        "type": "adj.",
        "word": "Reddish-brown, said usually of the hair."
    },
    {
        "matched": false,
        "definition": "audacious",
        "type": "adj.",
        "word": "Fearless."
    },
    {
        "matched": false,
        "definition": "audible",
        "type": "adj.",
        "word": "Loud enough to be heard."
    },
    {
        "matched": false,
        "definition": "audition",
        "type": "n.",
        "word": "The act or sensation of hearing."
    },
    {
        "matched": false,
        "definition": "auditory",
        "type": "adj.",
        "word": "Of or pertaining to hearing or the organs or sense of hearing."
    },
    {
        "matched": false,
        "definition": "augment",
        "type": "v.",
        "word": "To make bigger."
    },
    {
        "matched": false,
        "definition": "augur",
        "type": "v.",
        "word": "To predict."
    },
    {
        "matched": false,
        "definition": "Augustinian",
        "type": "adj.",
        "word": "Pertaining to St. Augustine, his doctrines, or the religious orders          "
    },
    {
        "matched": false,
        "definition": "aura",
        "type": "n.",
        "word": "Pervasive psychic influence supposed to emanate from persons"
    },
    {
        "matched": false,
        "definition": "aural",
        "type": "adj.",
        "word": "Of or pertaining to the ear."
    },
    {
        "matched": false,
        "definition": "auricle",
        "type": "n.",
        "word": "One of the two chambers of the heart which receives the blood from the veins."
    },
    {
        "matched": false,
        "definition": "auricular",
        "type": "adj.",
        "word": "Of or pertaining to the ear, its auricle, or the sense of hearing."
    },
    {
        "matched": false,
        "definition": "auriferous",
        "type": "adj.",
        "word": "Containing gold."
    },
    {
        "matched": false,
        "definition": "aurora",
        "type": "n.",
        "word": "A luminous phenomenon in the upper regions of the atmosphere."
    },
    {
        "matched": false,
        "definition": "auspice",
        "type": "n.",
        "word": "favoring, protecting, or propitious influence or guidance."
    },
    {
        "matched": false,
        "definition": "austere",
        "type": "adj.",
        "word": "Severely simple; unadorned."
    },
    {
        "matched": false,
        "definition": "autarchy",
        "type": "n.",
        "word": "Unrestricted power."
    },
    {
        "matched": false,
        "definition": "authentic",
        "type": "adj.",
        "word": "Of undisputed origin."
    },
    {
        "matched": false,
        "definition": "authenticity",
        "type": "n.",
        "word": "The state or quality of being genuine, or of the origin and authorship          "
    },
    {
        "matched": false,
        "definition": "autobiography",
        "type": "n.",
        "word": "The story of one's life written by himself."
    },
    {
        "matched": false,
        "definition": "autocracy",
        "type": "n.",
        "word": "Absolute government."
    },
    {
        "matched": false,
        "definition": "autocrat",
        "type": "n.",
        "word": "Any one who claims or wields unrestricted or undisputed authority or          "
    },
    {
        "matched": false,
        "definition": "automaton",
        "type": "n.",
        "word": "Any living being whose actions are or appear to be involuntary or mechanical."
    },
    {
        "matched": false,
        "definition": "autonomous",
        "type": "adj.",
        "word": "Self-governing."
    },
    {
        "matched": false,
        "definition": "autonomy",
        "type": "n.",
        "word": "Self-government."
    },
    {
        "matched": false,
        "definition": "autopsy",
        "type": "n.",
        "word": "The examination of a dead body by dissection to ascertain the cause of death."
    },
    {
        "matched": false,
        "definition": "autumnal",
        "type": "adj.",
        "word": "Of or pertaining to autumn."
    },
    {
        "matched": false,
        "definition": "auxiliary",
        "type": "n.",
        "word": "One who or that which aids or helps, especially when regarded as subsidiary          "
    },
    {
        "matched": false,
        "definition": "avalanche",
        "type": "n.",
        "word": "The fall or sliding of a mass of snow or ice down a mountain-slope, often          "
    },
    {
        "matched": false,
        "definition": "avarice",
        "type": "n.",
        "word": "Passion for getting and keeping riches."
    },
    {
        "matched": false,
        "definition": "aver",
        "type": "v.",
        "word": "To assert as a fact."
    },
    {
        "matched": false,
        "definition": "averse",
        "type": "adj.",
        "word": "Reluctant."
    },
    {
        "matched": false,
        "definition": "aversion",
        "type": "n.",
        "word": "A mental condition of fixed opposition to or dislike of some particular thing."
    },
    {
        "matched": false,
        "definition": "avert",
        "type": "v.",
        "word": "To turn away or aside."
    },
    {
        "matched": false,
        "definition": "aviary",
        "type": "n.",
        "word": "A spacious cage or enclosure in which live birds are kept."
    },
    {
        "matched": false,
        "definition": "avidity",
        "type": "n.",
        "word": "Greediness."
    },
    {
        "matched": false,
        "definition": "avocation",
        "type": "n.",
        "word": "Diversion."
    },
    {
        "matched": false,
        "definition": "avow",
        "type": "v.",
        "word": "To declare openly."
    },
    {
        "matched": false,
        "definition": "awaken",
        "type": "v.",
        "word": "To arouse, as emotion, interest, or the like."
    },
    {
        "matched": false,
        "definition": "awry",
        "type": "adv.",
        "word": "& adj. Out of the proper form, direction, or position."
    },
    {
        "matched": false,
        "definition": "aye",
        "type": "adv.",
        "word": "An expression of assent."
    },
    {
        "matched": false,
        "definition": "azalea",
        "type": "n.",
        "word": "A flowering shrub."
    },
    {
        "matched": false,
        "definition": "azure",
        "type": "n.",
        "word": "The color of the sky."
    },
    {
        "matched": false,
        "definition": "Baconian",
        "type": "adj.",
        "word": "Of or pertaining to Lord Bacon or his system of philosophy."
    },
    {
        "matched": false,
        "definition": "bacterium",
        "type": "n.",
        "word": "A microbe."
    },
    {
        "matched": false,
        "definition": "badger",
        "type": "v.",
        "word": "To pester."
    },
    {
        "matched": false,
        "definition": "baffle",
        "type": "v.",
        "word": "To foil or frustrate."
    },
    {
        "matched": false,
        "definition": "bailiff",
        "type": "n.",
        "word": "An officer of court having custody of prisoners under arraignment."
    },
    {
        "matched": false,
        "definition": "baize",
        "type": "n.",
        "word": "A single-colored napped woolen fabric used for table-covers, curtains, etc."
    },
    {
        "matched": false,
        "definition": "bale",
        "type": "n.",
        "word": "A large package prepared for transportation or storage."
    },
    {
        "matched": false,
        "definition": "baleful",
        "type": "adj.",
        "word": "Malignant."
    },
    {
        "matched": false,
        "definition": "ballad",
        "type": "n.",
        "word": "Any popular narrative poem, often with epic subject and usually in lyric form."
    },
    {
        "matched": false,
        "definition": "balsam",
        "type": "n.",
        "word": "A medical preparation, aromatic and oily, used for healing."
    },
    {
        "matched": false,
        "definition": "banal",
        "type": "adj.",
        "word": "Commonplace."
    },
    {
        "matched": false,
        "definition": "barcarole",
        "type": "n.",
        "word": "A boat-song of Venetian gondoliers."
    },
    {
        "matched": false,
        "definition": "barograph",
        "type": "n.",
        "word": "An instrument that registers graphically and continuously the atmospheric          "
    },
    {
        "matched": false,
        "definition": "barometer",
        "type": "n.",
        "word": "An instrument for indicating the atmospheric pressure per unit of surface."
    },
    {
        "matched": false,
        "definition": "barring",
        "type": "prep.",
        "word": "Apart from."
    },
    {
        "matched": false,
        "definition": "baritone",
        "type": "adj.",
        "word": "Having a register higher than bass and lower than tenor."
    },
    {
        "matched": false,
        "definition": "bask",
        "type": "v.",
        "word": "To make warm by genial heat."
    },
    {
        "matched": false,
        "definition": "bass",
        "type": "adj.",
        "word": "Low in tone or compass."
    },
    {
        "matched": false,
        "definition": "baste",
        "type": "v.",
        "word": "To cover with melted fat, gravy, while cooking."
    },
    {
        "matched": false,
        "definition": "baton",
        "type": "n.",
        "word": "An official staff borne either as a weapon or as an emblem of authority or          "
    },
    {
        "matched": false,
        "definition": "battalion",
        "type": "n.",
        "word": "A body of infantry composed of two or more companies, forming a part of a          "
    },
    {
        "matched": false,
        "definition": "batten",
        "type": "n.",
        "word": "A narrow strip of wood."
    },
    {
        "matched": false,
        "definition": "batter",
        "type": "n.",
        "word": "A thick liquid mixture of two or more materials beaten together, to be used in          "
    },
    {
        "matched": false,
        "definition": "bauble",
        "type": "n.",
        "word": "A trinket."
    },
    {
        "matched": false,
        "definition": "bawl",
        "type": "v.",
        "word": "To proclaim by outcry."
    },
    {
        "matched": false,
        "definition": "beatify",
        "type": "v.",
        "word": "To make supremely happy."
    },
    {
        "matched": false,
        "definition": "beatitude",
        "type": "n.",
        "word": "Any state of great happiness."
    },
    {
        "matched": false,
        "definition": "beau",
        "type": "n.",
        "word": "An escort or lover."
    },
    {
        "matched": false,
        "definition": "becalm",
        "type": "v.",
        "word": "To make quiet."
    },
    {
        "matched": false,
        "definition": "beck",
        "type": "v.",
        "word": "To give a signal to, by nod or gesture."
    },
    {
        "matched": false,
        "definition": "bedaub",
        "type": "v.",
        "word": "To smear over, as with something oily or sticky."
    },
    {
        "matched": false,
        "definition": "bedeck",
        "type": "v.",
        "word": "To cover with ornament."
    },
    {
        "matched": false,
        "definition": "bedlam",
        "type": "n.",
        "word": "Madhouse."
    },
    {
        "matched": false,
        "definition": "befog",
        "type": "v.",
        "word": "To confuse."
    },
    {
        "matched": false,
        "definition": "befriend",
        "type": "v.",
        "word": "To be a friend to, especially when in need."
    },
    {
        "matched": false,
        "definition": "beget",
        "type": "v.",
        "word": "To produce by sexual generation."
    },
    {
        "matched": false,
        "definition": "begrudge",
        "type": "v.",
        "word": "To envy one of the possession of."
    },
    {
        "matched": false,
        "definition": "belate",
        "type": "v.",
        "word": "To delay past the proper hour."
    },
    {
        "matched": false,
        "definition": "belay",
        "type": "v.",
        "word": "To make fast, as a rope, by winding round a cleat."
    },
    {
        "matched": false,
        "definition": "belie",
        "type": "v.",
        "word": "To misrepresent."
    },
    {
        "matched": false,
        "definition": "believe",
        "type": "v.",
        "word": "To accept as true on the testimony or authority of others."
    },
    {
        "matched": false,
        "definition": "belittle",
        "type": "v.",
        "word": "To disparage."
    },
    {
        "matched": false,
        "definition": "belle",
        "type": "n.",
        "word": "A woman who is a center of attraction because of her beauty, accomplishments,          "
    },
    {
        "matched": false,
        "definition": "bellicose",
        "type": "adj.",
        "word": "Warlike."
    },
    {
        "matched": false,
        "definition": "belligerent",
        "type": "adj.",
        "word": "Manifesting a warlike spirit."
    },
    {
        "matched": false,
        "definition": "bemoan",
        "type": "v.",
        "word": "To lament"
    },
    {
        "matched": false,
        "definition": "benediction",
        "type": "n.",
        "word": "a solemn invocation of the divine blessing."
    },
    {
        "matched": false,
        "definition": "benefactor",
        "type": "n.",
        "word": "A doer of kindly and charitable acts."
    },
    {
        "matched": false,
        "definition": "benefice",
        "type": "n.",
        "word": "A church office endowed with funds or property for the maintenance of divine          "
    },
    {
        "matched": false,
        "definition": "beneficent",
        "type": "adj.",
        "word": "Characterized by charity and kindness."
    },
    {
        "matched": false,
        "definition": "beneficial",
        "type": "adj.",
        "word": "Helpful."
    },
    {
        "matched": false,
        "definition": "beneficiary",
        "type": "n.",
        "word": "One who is lawfully entitled to the profits and proceeds of an estate or          "
    },
    {
        "matched": false,
        "definition": "benefit",
        "type": "n.",
        "word": "Helpful result."
    },
    {
        "matched": false,
        "definition": "benevolence",
        "type": "n.",
        "word": "Any act of kindness or well-doing."
    },
    {
        "matched": false,
        "definition": "benevolent",
        "type": "adj.",
        "word": "Loving others and actively desirous of their well-being."
    },
    {
        "matched": false,
        "definition": "benign",
        "type": "adj.",
        "word": "Good and kind of heart."
    },
    {
        "matched": false,
        "definition": "benignant",
        "type": "adj.",
        "word": "Benevolent in feeling, character, or aspect."
    },
    {
        "matched": false,
        "definition": "benignity",
        "type": "n.",
        "word": "Kindness of feeling, disposition, or manner."
    },
    {
        "matched": false,
        "definition": "benison",
        "type": "n.",
        "word": "Blessing."
    },
    {
        "matched": false,
        "definition": "bequeath",
        "type": "v.",
        "word": "To give by will."
    },
    {
        "matched": false,
        "definition": "bereave",
        "type": "v.",
        "word": "To make desolate with loneliness and grief."
    },
    {
        "matched": false,
        "definition": "berth",
        "type": "n.",
        "word": "A bunk or bed in a vessel, sleeping-car, etc."
    },
    {
        "matched": false,
        "definition": "beseech",
        "type": "v.",
        "word": "To implore."
    },
    {
        "matched": false,
        "definition": "beset",
        "type": "v.",
        "word": "To attack on all sides."
    },
    {
        "matched": false,
        "definition": "besmear",
        "type": "v.",
        "word": "To smear over, as with any oily or sticky substance."
    },
    {
        "matched": false,
        "definition": "bestial",
        "type": "adj.",
        "word": "Animal."
    },
    {
        "matched": false,
        "definition": "bestrew",
        "type": "v.",
        "word": "To sprinkle or cover with things strewn."
    },
    {
        "matched": false,
        "definition": "bestride",
        "type": "v.",
        "word": "To get or sit upon astride, as a horse."
    },
    {
        "matched": false,
        "definition": "bethink",
        "type": "v.",
        "word": "To remind oneself."
    },
    {
        "matched": false,
        "definition": "betide",
        "type": "v.",
        "word": "To happen to or befall."
    },
    {
        "matched": false,
        "definition": "betimes",
        "type": "adv.",
        "word": "In good season or time."
    },
    {
        "matched": false,
        "definition": "betroth",
        "type": "v.",
        "word": "To engage to marry."
    },
    {
        "matched": false,
        "definition": "betrothal",
        "type": "n.",
        "word": "Engagement to marry."
    },
    {
        "matched": false,
        "definition": "bevel",
        "type": "n.",
        "word": "Any inclination of two surfaces other than 90 degrees."
    },
    {
        "matched": false,
        "definition": "bewilder",
        "type": "v.",
        "word": "To confuse the perceptions or judgment of."
    },
    {
        "matched": false,
        "definition": "bibliomania",
        "type": "n.",
        "word": "The passion for collecting books."
    },
    {
        "matched": false,
        "definition": "bibliography",
        "type": "n.",
        "word": "A list of the words of an author, or the literature bearing on a          "
    },
    {
        "matched": false,
        "definition": "bibliophile",
        "type": "n.",
        "word": "One who loves books."
    },
    {
        "matched": false,
        "definition": "bibulous",
        "type": "adj.",
        "word": "Fond of drinking."
    },
    {
        "matched": false,
        "definition": "bide",
        "type": "v.",
        "word": "To await."
    },
    {
        "matched": false,
        "definition": "biennial",
        "type": "n.",
        "word": "A plant that produces leaves and roots the first year and flowers and fruit          "
    },
    {
        "matched": false,
        "definition": "bier",
        "type": "n.",
        "word": "A horizontal framework with two handles at each end for carrying a corpse to the          "
    },
    {
        "matched": false,
        "definition": "bigamist",
        "type": "n.",
        "word": "One who has two spouses at the same time."
    },
    {
        "matched": false,
        "definition": "bigamy",
        "type": "n.",
        "word": "The crime of marrying any other person while having a legal spouse living."
    },
    {
        "matched": false,
        "definition": "bight",
        "type": "n.",
        "word": "A slightly receding bay between headlands, formed by a long curve of a          "
    },
    {
        "matched": false,
        "definition": "bilateral",
        "type": "adj.",
        "word": "Two-sided."
    },
    {
        "matched": false,
        "definition": "bilingual",
        "type": "adj.",
        "word": "Speaking two languages."
    },
    {
        "matched": false,
        "definition": "biograph",
        "type": "n.",
        "word": "A bibliographical sketch or notice."
    },
    {
        "matched": false,
        "definition": "biography",
        "type": "n.",
        "word": "A written account of one's life, actions, and character."
    },
    {
        "matched": false,
        "definition": "biology",
        "type": "n.",
        "word": "The science of life or living organisms."
    },
    {
        "matched": false,
        "definition": "biped",
        "type": "n.",
        "word": "An animal having two feet."
    },
    {
        "matched": false,
        "definition": "birthright",
        "type": "n.",
        "word": "A privilege or possession into which one is born."
    },
    {
        "matched": false,
        "definition": "bitterness",
        "type": "n.",
        "word": "Acridity, as to the taste."
    },
    {
        "matched": false,
        "definition": "blase",
        "type": "adj.",
        "word": "Sated with pleasure."
    },
    {
        "matched": false,
        "definition": "blaspheme",
        "type": "v.",
        "word": "To indulge in profane oaths."
    },
    {
        "matched": false,
        "definition": "blatant",
        "type": "adj.",
        "word": "Noisily or offensively loud or clamorous."
    },
    {
        "matched": false,
        "definition": "blaze",
        "type": "n.",
        "word": "A vivid glowing flame."
    },
    {
        "matched": false,
        "definition": "blazon",
        "type": "v.",
        "word": "To make widely or generally known."
    },
    {
        "matched": false,
        "definition": "bleak",
        "type": "adj.",
        "word": "Desolate."
    },
    {
        "matched": false,
        "definition": "blemish",
        "type": "n.",
        "word": "A mark that mars beauty."
    },
    {
        "matched": false,
        "definition": "blithe",
        "type": "adj.",
        "word": "Joyous."
    },
    {
        "matched": false,
        "definition": "blithesome",
        "type": "adj.",
        "word": "Cheerful."
    },
    {
        "matched": false,
        "definition": "blockade",
        "type": "n.",
        "word": "The shutting up of a town, a frontier, or a line of coast by hostile forces."
    },
    {
        "matched": false,
        "definition": "boatswain",
        "type": "n.",
        "word": "A subordinate officer of a vessel, who has general charge of the rigging,          "
    },
    {
        "matched": false,
        "definition": "bodice",
        "type": "n.",
        "word": "A women's ornamental corset-shaped laced waist."
    },
    {
        "matched": false,
        "definition": "bodily",
        "type": "adj.",
        "word": "Corporeal."
    },
    {
        "matched": false,
        "definition": "boisterous",
        "type": "adj.",
        "word": "Unchecked merriment or animal spirits."
    },
    {
        "matched": false,
        "definition": "bole",
        "type": "n.",
        "word": "The trunk or body of a tree."
    },
    {
        "matched": false,
        "definition": "bolero",
        "type": "n.",
        "word": "A Spanish dance, illustrative of the passion of love, accompanied by caste nets          "
    },
    {
        "matched": false,
        "definition": "boll",
        "type": "n.",
        "word": "A round pod or seed-capsule, as a flax or cotton."
    },
    {
        "matched": false,
        "definition": "bolster",
        "type": "v.",
        "word": "To support, as something wrong."
    },
    {
        "matched": false,
        "definition": "bomb",
        "type": "n.",
        "word": "A hollow projectile containing an explosive material."
    },
    {
        "matched": false,
        "definition": "bombard",
        "type": "v.",
        "word": "To assail with any missile or with abusive speech."
    },
    {
        "matched": false,
        "definition": "bombardier",
        "type": "n.",
        "word": "A person who has charge of mortars, bombs, and shells."
    },
    {
        "matched": false,
        "definition": "bombast",
        "type": "n.",
        "word": "Inflated or extravagant language, especially on unimportant subjects."
    },
    {
        "matched": false,
        "definition": "boorish",
        "type": "adj.",
        "word": "Rude."
    },
    {
        "matched": false,
        "definition": "bore",
        "type": "v.",
        "word": "To weary by tediousness or dullness."
    },
    {
        "matched": false,
        "definition": "borough",
        "type": "n.",
        "word": "An incorporated village or town."
    },
    {
        "matched": false,
        "definition": "bosom",
        "type": "n.",
        "word": "The breast or the upper front of the thorax of a human being, especially of a          "
    },
    {
        "matched": false,
        "definition": "botanical",
        "type": "adj.",
        "word": "Connected with the study or cultivation of plants."
    },
    {
        "matched": false,
        "definition": "botanize",
        "type": "v.",
        "word": "To study plant-life."
    },
    {
        "matched": false,
        "definition": "botany",
        "type": "n.",
        "word": "The science that treats of plants."
    },
    {
        "matched": false,
        "definition": "bountiful",
        "type": "adj.",
        "word": "Showing abundance."
    },
    {
        "matched": false,
        "definition": "Bowdlerize",
        "type": "v.",
        "word": "To expurgate in editing (a literary composition) by omitting words or          "
    },
    {
        "matched": false,
        "definition": "bowler",
        "type": "n.",
        "word": "In cricket, the player who delivers the ball."
    },
    {
        "matched": false,
        "definition": "boycott",
        "type": "v.",
        "word": "To place the products or merchandise of under a ban."
    },
    {
        "matched": false,
        "definition": "brae",
        "type": "n.",
        "word": "Hillside."
    },
    {
        "matched": false,
        "definition": "braggart",
        "type": "n.",
        "word": "A vain boaster."
    },
    {
        "matched": false,
        "definition": "brandish",
        "type": "v.",
        "word": "To wave, shake, or flourish triumphantly or defiantly, as a sword or spear."
    },
    {
        "matched": false,
        "definition": "bravado",
        "type": "n.",
        "word": "An aggressive display of boldness."
    },
    {
        "matched": false,
        "definition": "bravo",
        "type": "interj.",
        "word": "Well done."
    },
    {
        "matched": false,
        "definition": "bray",
        "type": "n.",
        "word": "A loud harsh sound, as the cry of an ass or the blast of a horn."
    },
    {
        "matched": false,
        "definition": "braze",
        "type": "v.",
        "word": "To make of or ornament with brass."
    },
    {
        "matched": false,
        "definition": "brazier",
        "type": "n.",
        "word": "An open pan or basin for holding live coals."
    },
    {
        "matched": false,
        "definition": "breach",
        "type": "n.",
        "word": "The violation of official duty, lawful right, or a legal obligation."
    },
    {
        "matched": false,
        "definition": "breaker",
        "type": "n.",
        "word": "One who trains horses, dogs, etc."
    },
    {
        "matched": false,
        "definition": "breech",
        "type": "n.",
        "word": "The buttocks."
    },
    {
        "matched": false,
        "definition": "brethren",
        "type": "n.",
        "word": "pl. Members of a brotherhood, gild, profession, association, or the like."
    },
    {
        "matched": false,
        "definition": "brevity",
        "type": "n.",
        "word": "Shortness of duration."
    },
    {
        "matched": false,
        "definition": "bric-a-brac",
        "type": "n.",
        "word": "Objects of curiosity or for decoration."
    },
    {
        "matched": false,
        "definition": "bridle",
        "type": "n.",
        "word": "The head-harness of a horse consisting of a head-stall, a bit, and the reins."
    },
    {
        "matched": false,
        "definition": "brigade",
        "type": "n.",
        "word": "A body of troops consisting of two or more regiments."
    },
    {
        "matched": false,
        "definition": "brigadier",
        "type": "n.",
        "word": "General officer who commands a brigade, ranking between a colonel and a          "
    },
    {
        "matched": false,
        "definition": "brigand",
        "type": "n.",
        "word": "One who lives by robbery and plunder."
    },
    {
        "matched": false,
        "definition": "brimstone",
        "type": "n.",
        "word": "Sulfur."
    },
    {
        "matched": false,
        "definition": "brine",
        "type": "n.",
        "word": "Water saturated with salt."
    },
    {
        "matched": false,
        "definition": "bristle",
        "type": "n.",
        "word": "One of the coarse, stiff hairs of swine: used in brush-making, etc."
    },
    {
        "matched": false,
        "definition": "Britannia",
        "type": "n.",
        "word": "The United Kingdom of Great Britain."
    },
    {
        "matched": false,
        "definition": "Briticism",
        "type": "n.",
        "word": "A word, idiom, or phrase characteristic of Great Britain or the British."
    },
    {
        "matched": false,
        "definition": "brittle",
        "type": "adj.",
        "word": "Fragile."
    },
    {
        "matched": false,
        "definition": "broach",
        "type": "v.",
        "word": "To mention, for the first time."
    },
    {
        "matched": false,
        "definition": "broadcast",
        "type": "adj.",
        "word": "Disseminated far and wide."
    },
    {
        "matched": false,
        "definition": "brogan",
        "type": "n.",
        "word": "A coarse, heavy shoe."
    },
    {
        "matched": false,
        "definition": "brogue",
        "type": "n.",
        "word": "Any dialectic pronunciation of English, especially that of the Irish people."
    },
    {
        "matched": false,
        "definition": "brokerage",
        "type": "n.",
        "word": "The business of making sales and purchases for a commission; a broker."
    },
    {
        "matched": false,
        "definition": "bromine",
        "type": "n.",
        "word": "A dark reddish-brown, non-metallic liquid element with a suffocating odor."
    },
    {
        "matched": false,
        "definition": "bronchitis",
        "type": "n.",
        "word": "Inflammation of the bronchial tubes."
    },
    {
        "matched": false,
        "definition": "bronchus",
        "type": "n.",
        "word": "Either of the two subdivisions of the trachea conveying air into the lungs."
    },
    {
        "matched": false,
        "definition": "brooch",
        "type": "n.",
        "word": "An article of jewelry fastened by a hinged pin and hook on the underside."
    },
    {
        "matched": false,
        "definition": "brotherhood",
        "type": "n.",
        "word": "Spiritual or social fellowship or solidarity."
    },
    {
        "matched": false,
        "definition": "browbeat",
        "type": "v.",
        "word": "To overwhelm, or attempt to do so, by stern, haughty, or rude address or          "
    },
    {
        "matched": false,
        "definition": "brusque",
        "type": "adj.",
        "word": "Somewhat rough or rude in manner or speech."
    },
    {
        "matched": false,
        "definition": "buffoon",
        "type": "n.",
        "word": "A clown."
    },
    {
        "matched": false,
        "definition": "buffoonery",
        "type": "n.",
        "word": "Low drollery, coarse jokes, etc."
    },
    {
        "matched": false,
        "definition": "bulbous",
        "type": "adj.",
        "word": "Of, or pertaining to, or like a bulb."
    },
    {
        "matched": false,
        "definition": "bullock",
        "type": "n.",
        "word": "An ox."
    },
    {
        "matched": false,
        "definition": "bulrush",
        "type": "n.",
        "word": "Any one of various tall rush-like plants growing in damp ground or water."
    },
    {
        "matched": false,
        "definition": "bulwark",
        "type": "n.",
        "word": "Anything that gives security or defense."
    },
    {
        "matched": false,
        "definition": "bumper",
        "type": "n.",
        "word": "A cup or glass filled to the brim, especially one to be drunk as a toast or          "
    },
    {
        "matched": false,
        "definition": "bumptious",
        "type": "adj.",
        "word": "Full of offensive and aggressive self-conceit."
    },
    {
        "matched": false,
        "definition": "bungle",
        "type": "v.",
        "word": "To execute clumsily."
    },
    {
        "matched": false,
        "definition": "buoyancy",
        "type": "n.",
        "word": "Power or tendency to float on or in a liquid or gas."
    },
    {
        "matched": false,
        "definition": "buoyant",
        "type": "adj.",
        "word": "Having the power or tendency to float or keep afloat."
    },
    {
        "matched": false,
        "definition": "bureau",
        "type": "n.",
        "word": "A chest of drawers for clothing, etc."
    },
    {
        "matched": false,
        "definition": "bureaucracy",
        "type": "n.",
        "word": "Government by departments of men transacting particular branches of public          "
    },
    {
        "matched": false,
        "definition": "burgess",
        "type": "n.",
        "word": "In colonial times, a member of the lower house of the legislature of Maryland          "
    },
    {
        "matched": false,
        "definition": "burgher",
        "type": "n.",
        "word": "An inhabitant, citizen or freeman of a borough burgh, or corporate town."
    },
    {
        "matched": false,
        "definition": "burnish",
        "type": "v.",
        "word": "To make brilliant or shining."
    },
    {
        "matched": false,
        "definition": "bursar",
        "type": "n.",
        "word": "A treasurer."
    },
    {
        "matched": false,
        "definition": "bustle",
        "type": "v.",
        "word": "To hurry."
    },
    {
        "matched": false,
        "definition": "butt",
        "type": "v.",
        "word": "To strike with or as with the head, or horns."
    },
    {
        "matched": false,
        "definition": "butte",
        "type": "n.",
        "word": "A conspicuous hill, low mountain, or natural turret, generally isolated."
    },
    {
        "matched": false,
        "definition": "buttress",
        "type": "n.",
        "word": "Any support or prop."
    },
    {
        "matched": false,
        "definition": "by-law",
        "type": "n.",
        "word": "A rule or law adopted by an association, a corporation, or the like."
    },
    {
        "matched": false,
        "definition": "cabal",
        "type": "n.",
        "word": "A number of persons secretly united for effecting by intrigue some private          "
    },
    {
        "matched": false,
        "definition": "cabalism",
        "type": "n.",
        "word": "Superstitious devotion to one's religion."
    },
    {
        "matched": false,
        "definition": "cabinet",
        "type": "n.",
        "word": "The body of men constituting the official advisors of the executive head of a          "
    },
    {
        "matched": false,
        "definition": "cacophony",
        "type": "n.",
        "word": "A disagreeable, harsh, or discordant sound or combination of sounds or tones."
    },
    {
        "matched": false,
        "definition": "cadaverous",
        "type": "adj.",
        "word": "Resembling a corpse."
    },
    {
        "matched": false,
        "definition": "cadence",
        "type": "n.",
        "word": "Rhythmical or measured flow or movement, as in poetry or the time and pace of          "
    },
    {
        "matched": false,
        "definition": "cadenza",
        "type": "n.",
        "word": "An embellishment or flourish, prepared or improvised, for a solo voice or          "
    },
    {
        "matched": false,
        "definition": "caitiff",
        "type": "adj.",
        "word": "Cowardly."
    },
    {
        "matched": false,
        "definition": "cajole",
        "type": "v.",
        "word": "To impose on or dupe by flattering speech."
    },
    {
        "matched": false,
        "definition": "cajolery",
        "type": "n.",
        "word": "Delusive speech."
    },
    {
        "matched": false,
        "definition": "calculable",
        "type": "adj.",
        "word": "That may be estimated by reckoning."
    },
    {
        "matched": false,
        "definition": "calculus",
        "type": "n.",
        "word": "A concretion formed in various parts of the body resembling a pebble in          "
    },
    {
        "matched": false,
        "definition": "callosity",
        "type": "n.",
        "word": "The state of being hard and insensible."
    },
    {
        "matched": false,
        "definition": "callow",
        "type": "adj.",
        "word": "Without experience of the world."
    },
    {
        "matched": false,
        "definition": "calorie",
        "type": "n.",
        "word": "Amount of heat needed to raise the temperature of 1 kilogram of water 1 degree          "
    },
    {
        "matched": false,
        "definition": "calumny",
        "type": "n.",
        "word": "Slander."
    },
    {
        "matched": false,
        "definition": "Calvary",
        "type": "n.",
        "word": "The place where Christ was crucified."
    },
    {
        "matched": false,
        "definition": "Calvinism",
        "type": "n.",
        "word": "The system of doctrine taught by John Calvin."
    },
    {
        "matched": false,
        "definition": "Calvinize",
        "type": "v.",
        "word": "To teach or imbue with the doctrines of Calvinism."
    },
    {
        "matched": false,
        "definition": "came",
        "type": "n.",
        "word": "A leaden sash-bar or grooved strip for fastening panes in stained-glass windows."
    },
    {
        "matched": false,
        "definition": "cameo",
        "type": "n.",
        "word": "Any small engraved or carved work in relief."
    },
    {
        "matched": false,
        "definition": "campaign",
        "type": "n.",
        "word": "A complete series of connected military operations."
    },
    {
        "matched": false,
        "definition": "Canaanite",
        "type": "n.",
        "word": "A member of one of the three tribes that dwelt in the land of Canaan, or          "
    },
    {
        "matched": false,
        "definition": "canary",
        "type": "adj.",
        "word": "Of a bright but delicate yellow."
    },
    {
        "matched": false,
        "definition": "candid",
        "type": "adj.",
        "word": "Straightforward."
    },
    {
        "matched": false,
        "definition": "candor",
        "type": "n.",
        "word": "The quality of frankness or outspokenness."
    },
    {
        "matched": false,
        "definition": "canine",
        "type": "adj.",
        "word": "Characteristic of a dog."
    },
    {
        "matched": false,
        "definition": "canon",
        "type": "n.",
        "word": "Any rule or law."
    },
    {
        "matched": false,
        "definition": "cant",
        "type": "v.",
        "word": "To talk in a singsong, preaching tone with affected solemnity."
    },
    {
        "matched": false,
        "definition": "cantata",
        "type": "n.",
        "word": "A choral composition."
    },
    {
        "matched": false,
        "definition": "canto",
        "type": "n.",
        "word": "One of the divisions of an extended poem."
    },
    {
        "matched": false,
        "definition": "cantonment",
        "type": "n.",
        "word": "The part of the town or district in which the troops are quartered."
    },
    {
        "matched": false,
        "definition": "capacious",
        "type": "adj.",
        "word": "Roomy."
    },
    {
        "matched": false,
        "definition": "capillary",
        "type": "n.",
        "word": "A minute vessel having walls composed of a single layer of cells."
    },
    {
        "matched": false,
        "definition": "capitulate",
        "type": "v.",
        "word": "To surrender or stipulate terms."
    },
    {
        "matched": false,
        "definition": "caprice",
        "type": "n.",
        "word": "A whim."
    },
    {
        "matched": false,
        "definition": "caption",
        "type": "n.",
        "word": "A heading, as of a chapter, section, document, etc."
    },
    {
        "matched": false,
        "definition": "captious",
        "type": "adj.",
        "word": "Hypercritical."
    },
    {
        "matched": false,
        "definition": "captivate",
        "type": "v.",
        "word": "To fascinate, as by excellence. eloquence, or beauty."
    },
    {
        "matched": false,
        "definition": "carcass",
        "type": "n.",
        "word": "The dead body of an animal."
    },
    {
        "matched": false,
        "definition": "cardiac",
        "type": "adj.",
        "word": "Pertaining to the heart."
    },
    {
        "matched": false,
        "definition": "cardinal",
        "type": "adj.",
        "word": "Of prime or special importance."
    },
    {
        "matched": false,
        "definition": "caret",
        "type": "n.",
        "word": "A sign (^) placed below a line, indicating where omitted words, etc., should be          "
    },
    {
        "matched": false,
        "definition": "caricature",
        "type": "n.",
        "word": "a picture or description in which natural characteristics are exaggerated or          "
    },
    {
        "matched": false,
        "definition": "carnage",
        "type": "n.",
        "word": "Massacre."
    },
    {
        "matched": false,
        "definition": "carnal",
        "type": "adj.",
        "word": "Sensual."
    },
    {
        "matched": false,
        "definition": "carnivorous",
        "type": "adj.",
        "word": "Eating or living on flesh."
    },
    {
        "matched": false,
        "definition": "carouse",
        "type": "v.",
        "word": "To drink deeply and in boisterous or jovial manner."
    },
    {
        "matched": false,
        "definition": "carrion",
        "type": "n.",
        "word": "Dead and putrefying flesh."
    },
    {
        "matched": false,
        "definition": "cartilage",
        "type": "n.",
        "word": "An elastic animal tissue of firm consistence."
    },
    {
        "matched": false,
        "definition": "cartridge",
        "type": "n.",
        "word": "A charge for a firearm, or for blasting."
    },
    {
        "matched": false,
        "definition": "caste",
        "type": "n.",
        "word": "The division of society on artificial grounds."
    },
    {
        "matched": false,
        "definition": "castigate",
        "type": "v.",
        "word": "To punish."
    },
    {
        "matched": false,
        "definition": "casual",
        "type": "adj.",
        "word": "Accidental, by chance."
    },
    {
        "matched": false,
        "definition": "casualty",
        "type": "n.",
        "word": "A fatal or serious accident or disaster."
    },
    {
        "matched": false,
        "definition": "cataclysm",
        "type": "n.",
        "word": "Any overwhelming flood of water."
    },
    {
        "matched": false,
        "definition": "cataract",
        "type": "n.",
        "word": "Opacity of the lens of the eye resulting in complete or partial blindness."
    },
    {
        "matched": false,
        "definition": "catastrophe",
        "type": "n.",
        "word": "Any great and sudden misfortune or calamity."
    },
    {
        "matched": false,
        "definition": "cathode",
        "type": "n.",
        "word": "The negative pole or electrode of a galvanic battery."
    },
    {
        "matched": false,
        "definition": "Catholicism",
        "type": "n.",
        "word": "The system, doctrine, and practice of the Roman Catholic Church."
    },
    {
        "matched": false,
        "definition": "catholicity",
        "type": "n.",
        "word": "Universal prevalence or acceptance."
    },
    {
        "matched": false,
        "definition": "cat-o-nine-tails",
        "type": "n.",
        "word": "An instrument consisting of nine pieces of cord, formerly used for          "
    },
    {
        "matched": false,
        "definition": "caucus",
        "type": "n.",
        "word": "A private meeting of members of a political party to select candidates."
    },
    {
        "matched": false,
        "definition": "causal",
        "type": "adj.",
        "word": "Indicating or expressing a cause."
    },
    {
        "matched": false,
        "definition": "caustic",
        "type": "adj.",
        "word": "Sarcastic and severe."
    },
    {
        "matched": false,
        "definition": "cauterize",
        "type": "v.",
        "word": "To burn or sear as with a heated iron."
    },
    {
        "matched": false,
        "definition": "cede",
        "type": "v.",
        "word": "To pass title to."
    },
    {
        "matched": false,
        "definition": "censor",
        "type": "n.",
        "word": "An official examiner of manuscripts empowered to prohibit their publication."
    },
    {
        "matched": false,
        "definition": "censorious",
        "type": "adj.",
        "word": "Judging severely or harshly."
    },
    {
        "matched": false,
        "definition": "census",
        "type": "n.",
        "word": "An official numbering of the people of a country or district."
    },
    {
        "matched": false,
        "definition": "centenary",
        "type": "adj.",
        "word": "Pertaining to a hundred years or a period of a hundred years."
    },
    {
        "matched": false,
        "definition": "centiliter",
        "type": "n.",
        "word": "A hundredth of a liter."
    },
    {
        "matched": false,
        "definition": "centimeter",
        "type": "n.",
        "word": "A length of one hundredth of a meter."
    },
    {
        "matched": false,
        "definition": "centurion",
        "type": "n.",
        "word": "A captain of a company of one hundred infantry in the ancient Roman army."
    },
    {
        "matched": false,
        "definition": "cereal",
        "type": "adj.",
        "word": "Pertaining to edible grain or farinaceous seeds."
    },
    {
        "matched": false,
        "definition": "ceremonial",
        "type": "adj.",
        "word": "Characterized by outward form or ceremony."
    },
    {
        "matched": false,
        "definition": "ceremonious",
        "type": "adj.",
        "word": "Observant of ritual."
    },
    {
        "matched": false,
        "definition": "cessation",
        "type": "n.",
        "word": "Discontinuance, as of action or motion."
    },
    {
        "matched": false,
        "definition": "cession",
        "type": "n.",
        "word": "Surrender, as of possessions or rights."
    },
    {
        "matched": false,
        "definition": "chagrin",
        "type": "n.",
        "word": "Keen vexation, annoyance, or mortification, as at one's failures or errors."
    },
    {
        "matched": false,
        "definition": "chameleon",
        "type": "adj.",
        "word": "Changeable in appearance."
    },
    {
        "matched": false,
        "definition": "chancery",
        "type": "n.",
        "word": "A court of equity, as distinguished from a common-law court."
    },
    {
        "matched": false,
        "definition": "chaos",
        "type": "n.",
        "word": "Any condition of which the elements or parts are in utter disorder and confusion."
    },
    {
        "matched": false,
        "definition": "characteristic",
        "type": "n.",
        "word": "A distinctive feature."
    },
    {
        "matched": false,
        "definition": "characterize",
        "type": "v.",
        "word": "To describe by distinctive marks or peculiarities."
    },
    {
        "matched": false,
        "definition": "charlatan",
        "type": "n.",
        "word": "A quack."
    },
    {
        "matched": false,
        "definition": "chasm",
        "type": "n.",
        "word": "A yawning hollow, as in the earth's surface."
    },
    {
        "matched": false,
        "definition": "chasten",
        "type": "v.",
        "word": "To purify by affliction."
    },
    {
        "matched": false,
        "definition": "chastise",
        "type": "v.",
        "word": "To subject to punitive measures."
    },
    {
        "matched": false,
        "definition": "chastity",
        "type": "n.",
        "word": "Sexual or moral purity."
    },
    {
        "matched": false,
        "definition": "chateau",
        "type": "n.",
        "word": "A castle or manor-house."
    },
    {
        "matched": false,
        "definition": "chattel",
        "type": "n.",
        "word": "Any article of personal property."
    },
    {
        "matched": false,
        "definition": "check",
        "type": "v.",
        "word": "To hold back."
    },
    {
        "matched": false,
        "definition": "chiffon",
        "type": "n.",
        "word": "A very thin gauze used for trimmings, evening dress, etc."
    },
    {
        "matched": false,
        "definition": "chivalry",
        "type": "n.",
        "word": "The knightly system of feudal times with its code, usages and practices."
    },
    {
        "matched": false,
        "definition": "cholera",
        "type": "n.",
        "word": "An acute epidemic disease."
    },
    {
        "matched": false,
        "definition": "choleric",
        "type": "adj.",
        "word": "Easily provoked to anger."
    },
    {
        "matched": false,
        "definition": "choral",
        "type": "adj.",
        "word": "Pertaining to, intended for, or performed by a chorus or choir."
    },
    {
        "matched": false,
        "definition": "Christ",
        "type": "n.",
        "word": "A title of Jesus"
    },
    {
        "matched": false,
        "definition": "christen",
        "type": "v.",
        "word": "To name in baptism."
    },
    {
        "matched": false,
        "definition": "Christendom",
        "type": "n.",
        "word": "That part of the world where Christianity is generally professed."
    },
    {
        "matched": false,
        "definition": "chromatic",
        "type": "adj.",
        "word": "Belonging, relating to, or abounding in color."
    },
    {
        "matched": false,
        "definition": "chronology",
        "type": "n.",
        "word": "The science that treats of computation of time or of investigation and          "
    },
    {
        "matched": false,
        "definition": "chronometer",
        "type": "n.",
        "word": "A portable timekeeper of the highest attainable precision."
    },
    {
        "matched": false,
        "definition": "cipher",
        "type": "v.",
        "word": "To calculate arithmetically. (also a noun meaning zero or nothing)"
    },
    {
        "matched": false,
        "definition": "circulate",
        "type": "v.",
        "word": "To disseminate."
    },
    {
        "matched": false,
        "definition": "circumference",
        "type": "n.",
        "word": "The boundary-line of a circle."
    },
    {
        "matched": false,
        "definition": "circumlocution",
        "type": "n.",
        "word": "Indirect or roundabout expression."
    },
    {
        "matched": false,
        "definition": "circumnavigate",
        "type": "v.",
        "word": "To sail quite around."
    },
    {
        "matched": false,
        "definition": "circumscribe",
        "type": "v.",
        "word": "To confine within bounds."
    },
    {
        "matched": false,
        "definition": "circumspect",
        "type": "adj.",
        "word": "Showing watchfulness, caution, or careful consideration."
    },
    {
        "matched": false,
        "definition": "citadel",
        "type": "n.",
        "word": "Any strong fortress."
    },
    {
        "matched": false,
        "definition": "cite",
        "type": "v.",
        "word": "To refer to specifically."
    },
    {
        "matched": false,
        "definition": "claimant",
        "type": "n.",
        "word": "One who makes a claim or demand, as of right."
    },
    {
        "matched": false,
        "definition": "clairvoyance",
        "type": "n.",
        "word": "Intuitive sagacity or perception."
    },
    {
        "matched": false,
        "definition": "clamorous",
        "type": "adj.",
        "word": "Urgent in complaint or demand."
    },
    {
        "matched": false,
        "definition": "clan",
        "type": "n.",
        "word": "A tribe."
    },
    {
        "matched": false,
        "definition": "clandestine",
        "type": "adj.",
        "word": "Surreptitious."
    },
    {
        "matched": false,
        "definition": "clangor",
        "type": "n.",
        "word": "Clanking or a ringing, as of arms, chains, or bells; clamor."
    },
    {
        "matched": false,
        "definition": "clarify",
        "type": "v.",
        "word": "To render intelligible."
    },
    {
        "matched": false,
        "definition": "clarion",
        "type": "n.",
        "word": "A small shrill trumpet or bugle."
    },
    {
        "matched": false,
        "definition": "classify",
        "type": "v.",
        "word": "To arrange in a class or classes on the basis of observed resemblance’s          "
    },
    {
        "matched": false,
        "definition": "clearance",
        "type": "n.",
        "word": "A certificate from the proper authorities that a vessel has complied with the          "
    },
    {
        "matched": false,
        "definition": "clemency",
        "type": "n.",
        "word": "Mercy."
    },
    {
        "matched": false,
        "definition": "clement",
        "type": "adj.",
        "word": "Compassionate."
    },
    {
        "matched": false,
        "definition": "close-hauled",
        "type": "adj.",
        "word": "Having the sails set for sailing as close to the wind as possible."
    },
    {
        "matched": false,
        "definition": "clothier",
        "type": "n.",
        "word": "One who makes or sells cloth or clothing."
    },
    {
        "matched": false,
        "definition": "clumsy",
        "type": "adj.",
        "word": "Awkward of movement."
    },
    {
        "matched": false,
        "definition": "coagulate",
        "type": "v.",
        "word": "To change into a clot or a jelly, as by heat, by chemical action, or by a          "
    },
    {
        "matched": false,
        "definition": "coagulant",
        "type": "adj.",
        "word": "Producing coagulation."
    },
    {
        "matched": false,
        "definition": "coalescence",
        "type": "n.",
        "word": "The act or process of coming together so as to form one body, combination,          "
    },
    {
        "matched": false,
        "definition": "coalition",
        "type": "n.",
        "word": "Combination in a body or mass."
    },
    {
        "matched": false,
        "definition": "coddle",
        "type": "v.",
        "word": "To treat as a baby or an invalid."
    },
    {
        "matched": false,
        "definition": "codicil",
        "type": "n.",
        "word": "A supplement adding to, revoking, or explaining in the body of a will."
    },
    {
        "matched": false,
        "definition": "coerce",
        "type": "v.",
        "word": "To force."
    },
    {
        "matched": false,
        "definition": "coercion",
        "type": "n.",
        "word": "Forcible constraint or restraint, moral or physical."
    },
    {
        "matched": false,
        "definition": "coercive",
        "type": "adj.",
        "word": "Serving or tending to force."
    },
    {
        "matched": false,
        "definition": "cogent",
        "type": "adj.",
        "word": "Appealing strongly to the reason or conscience."
    },
    {
        "matched": false,
        "definition": "cognate",
        "type": "adj.",
        "word": "Akin."
    },
    {
        "matched": false,
        "definition": "cognizant",
        "type": "adj.",
        "word": "Taking notice."
    },
    {
        "matched": false,
        "definition": "cohere",
        "type": "v.",
        "word": "To stick together."
    },
    {
        "matched": false,
        "definition": "cohesion",
        "type": "n.",
        "word": "Consistency."
    },
    {
        "matched": false,
        "definition": "cohesive",
        "type": "adj.",
        "word": "Having the property of consistency."
    },
    {
        "matched": false,
        "definition": "coincide",
        "type": "v.",
        "word": "To correspond."
    },
    {
        "matched": false,
        "definition": "coincidence",
        "type": "n.",
        "word": "A circumstance so agreeing with another: often implying accident."
    },
    {
        "matched": false,
        "definition": "coincident",
        "type": "adj.",
        "word": "Taking place at the same time."
    },
    {
        "matched": false,
        "definition": "collaborate",
        "type": "v.",
        "word": "To labor or cooperate with another or others, especially in literary or          "
    },
    {
        "matched": false,
        "definition": "collapse",
        "type": "v.",
        "word": "To cause to shrink, fall in, or fail."
    },
    {
        "matched": false,
        "definition": "collapsible",
        "type": "adj.",
        "word": "That may or can collapse."
    },
    {
        "matched": false,
        "definition": "colleague",
        "type": "n.",
        "word": "An associate in professional employment."
    },
    {
        "matched": false,
        "definition": "collective",
        "type": "adj.",
        "word": "Consisting of a number of persons or objects considered as gathered into a          "
    },
    {
        "matched": false,
        "definition": "collector",
        "type": "n.",
        "word": "One who makes a collection, as of objects of art, books, or the like."
    },
    {
        "matched": false,
        "definition": "collegian",
        "type": "n.",
        "word": "A college student."
    },
    {
        "matched": false,
        "definition": "collide",
        "type": "v.",
        "word": "To meet and strike violently."
    },
    {
        "matched": false,
        "definition": "collier",
        "type": "n.",
        "word": "One who works in a coal-mine."
    },
    {
        "matched": false,
        "definition": "collision",
        "type": "n.",
        "word": "Violent contact."
    },
    {
        "matched": false,
        "definition": "colloquial",
        "type": "adj.",
        "word": "Pertaining or peculiar to common speech as distinguished from literary."
    },
    {
        "matched": false,
        "definition": "colloquialism",
        "type": "n.",
        "word": "Form of speech used only or chiefly in conversation."
    },
    {
        "matched": false,
        "definition": "colloquy",
        "type": "n.",
        "word": "Conversation."
    },
    {
        "matched": false,
        "definition": "collusion",
        "type": "n.",
        "word": "A secret agreement for a wrongful purpose."
    },
    {
        "matched": false,
        "definition": "colossus",
        "type": "n.",
        "word": "Any strikingly great person or object."
    },
    {
        "matched": false,
        "definition": "comely",
        "type": "adj.",
        "word": "Handsome."
    },
    {
        "matched": false,
        "definition": "comestible",
        "type": "adj.",
        "word": "Fit to be eaten."
    },
    {
        "matched": false,
        "definition": "comical",
        "type": "adj.",
        "word": "Funny."
    },
    {
        "matched": false,
        "definition": "commemorate",
        "type": "v.",
        "word": "To serve as a remembrance of."
    },
    {
        "matched": false,
        "definition": "commentary",
        "type": "n.",
        "word": "A series of illustrative or explanatory notes on any important work."
    },
    {
        "matched": false,
        "definition": "commingle",
        "type": "v.",
        "word": "To blend."
    },
    {
        "matched": false,
        "definition": "commissariat",
        "type": "n.",
        "word": "The department of an army charged with the provision of its food and water          "
    },
    {
        "matched": false,
        "definition": "commission",
        "type": "v.",
        "word": "To empower."
    },
    {
        "matched": false,
        "definition": "commitment",
        "type": "n.",
        "word": "The act or process of entrusting or consigning for safe-keeping."
    },
    {
        "matched": false,
        "definition": "committal",
        "type": "n.",
        "word": "The act, fact, or result of committing, or the state of being"
    },
    {
        "matched": false,
        "definition": "commodity",
        "type": "n.",
        "word": "Something that is bought and sold."
    },
    {
        "matched": false,
        "definition": "commotion",
        "type": "n.",
        "word": "A disturbance or violent agitation."
    },
    {
        "matched": false,
        "definition": "commute",
        "type": "v.",
        "word": "To put something, especially something less severe, in place of."
    },
    {
        "matched": false,
        "definition": "comparable",
        "type": "adj.",
        "word": "Fit to be compared."
    },
    {
        "matched": false,
        "definition": "comparative",
        "type": "adj.",
        "word": "Relative."
    },
    {
        "matched": false,
        "definition": "comparison",
        "type": "n.",
        "word": "Examination of two or more objects with reference to their likeness or          "
    },
    {
        "matched": false,
        "definition": "compensate",
        "type": "v.",
        "word": "To remunerate."
    },
    {
        "matched": false,
        "definition": "competence",
        "type": "n.",
        "word": "Adequate qualification or capacity."
    },
    {
        "matched": false,
        "definition": "competent",
        "type": "adj.",
        "word": "Qualified."
    },
    {
        "matched": false,
        "definition": "competitive",
        "type": "adj.",
        "word": "characterized by rivalry."
    },
    {
        "matched": false,
        "definition": "competitor",
        "type": "n.",
        "word": "A rival."
    },
    {
        "matched": false,
        "definition": "complacence",
        "type": "n.",
        "word": "Satisfaction with one's acts or surroundings."
    },
    {
        "matched": false,
        "definition": "complacent",
        "type": "adj.",
        "word": "Pleased or satisfied with oneself."
    },
    {
        "matched": false,
        "definition": "complaisance",
        "type": "n.",
        "word": "Politeness."
    },
    {
        "matched": false,
        "definition": "complaisant",
        "type": "adj.",
        "word": "Agreeable."
    },
    {
        "matched": false,
        "definition": "complement",
        "type": "v.",
        "word": "To make complete."
    },
    {
        "matched": false,
        "definition": "complex",
        "type": "adj.",
        "word": "Complicated."
    },
    {
        "matched": false,
        "definition": "compliant",
        "type": "adj.",
        "word": "Yielding."
    },
    {
        "matched": false,
        "definition": "complicate",
        "type": "v.",
        "word": "To make complex, difficult, or hard to deal with."
    },
    {
        "matched": false,
        "definition": "complication",
        "type": "n.",
        "word": "An intermingling or combination of things or parts, especially in a          "
    },
    {
        "matched": false,
        "definition": "complicity",
        "type": "n.",
        "word": "Participation or partnership, as in wrong-doing or with a wrong-doer."
    },
    {
        "matched": false,
        "definition": "compliment",
        "type": "v.",
        "word": "To address or gratify with expressions of delicate praise."
    },
    {
        "matched": false,
        "definition": "component",
        "type": "n.",
        "word": "A constituent element or part."
    },
    {
        "matched": false,
        "definition": "comport",
        "type": "v.",
        "word": "To conduct or behave (oneself)."
    },
    {
        "matched": false,
        "definition": "composure",
        "type": "n.",
        "word": "Calmness."
    },
    {
        "matched": false,
        "definition": "comprehensible",
        "type": "adj.",
        "word": "Intelligible."
    },
    {
        "matched": false,
        "definition": "comprehension",
        "type": "n.",
        "word": "Ability to know."
    },
    {
        "matched": false,
        "definition": "comprehensive",
        "type": "adj.",
        "word": "Large in scope or content."
    },
    {
        "matched": false,
        "definition": "compress",
        "type": "v.",
        "word": "To press together or into smaller space."
    },
    {
        "matched": false,
        "definition": "compressible",
        "type": "adj.",
        "word": "Capable of being pressed into smaller compass."
    },
    {
        "matched": false,
        "definition": "compression",
        "type": "n.",
        "word": "Constraint, as by force or authority."
    },
    {
        "matched": false,
        "definition": "comprise",
        "type": "v.",
        "word": "To consist of."
    },
    {
        "matched": false,
        "definition": "compulsion",
        "type": "n.",
        "word": "Coercion."
    },
    {
        "matched": false,
        "definition": "compulsory",
        "type": "adj.",
        "word": "Forced."
    },
    {
        "matched": false,
        "definition": "compunction",
        "type": "n.",
        "word": "Remorseful feeling."
    },
    {
        "matched": false,
        "definition": "compute",
        "type": "v.",
        "word": "To ascertain by mathematical calculation."
    },
    {
        "matched": false,
        "definition": "concede",
        "type": "v.",
        "word": "To surrender."
    },
    {
        "matched": false,
        "definition": "conceit",
        "type": "n.",
        "word": "Self-flattering opinion."
    },
    {
        "matched": false,
        "definition": "conceive",
        "type": "v.",
        "word": "To form an idea, mental image or thought of."
    },
    {
        "matched": false,
        "definition": "concerto",
        "type": "n.",
        "word": "A musical composition."
    },
    {
        "matched": false,
        "definition": "concession",
        "type": "n.",
        "word": "Anything granted or yielded, or admitted in response to a demand, petition,          "
    },
    {
        "matched": false,
        "definition": "conciliate",
        "type": "v.",
        "word": "To obtain the friendship of."
    },
    {
        "matched": false,
        "definition": "conciliatory",
        "type": "adj.",
        "word": "Tending to reconcile."
    },
    {
        "matched": false,
        "definition": "conclusive",
        "type": "adj.",
        "word": "Sufficient to convince or decide."
    },
    {
        "matched": false,
        "definition": "concord",
        "type": "n.",
        "word": "Harmony."
    },
    {
        "matched": false,
        "definition": "concordance",
        "type": "n.",
        "word": "Harmony."
    },
    {
        "matched": false,
        "definition": "concur",
        "type": "v.",
        "word": "To agree."
    },
    {
        "matched": false,
        "definition": "concurrence",
        "type": "n.",
        "word": "Agreement."
    },
    {
        "matched": false,
        "definition": "concurrent",
        "type": "adj.",
        "word": "Occurring or acting together."
    },
    {
        "matched": false,
        "definition": "concussion",
        "type": "n.",
        "word": "A violent shock to some organ by a fall or a sudden blow."
    },
    {
        "matched": false,
        "definition": "condensation",
        "type": "n.",
        "word": "The act or process of making dense or denser."
    },
    {
        "matched": false,
        "definition": "condense",
        "type": "v.",
        "word": "To abridge."
    },
    {
        "matched": false,
        "definition": "condescend",
        "type": "v.",
        "word": "To come down voluntarily to equal terms with inferiors."
    },
    {
        "matched": false,
        "definition": "condolence",
        "type": "n.",
        "word": "Expression of sympathy with a person in pain, sorrow, or misfortune."
    },
    {
        "matched": false,
        "definition": "conduce",
        "type": "v.",
        "word": "To bring about."
    },
    {
        "matched": false,
        "definition": "conducive",
        "type": "adj.",
        "word": "Contributing to an end."
    },
    {
        "matched": false,
        "definition": "conductible",
        "type": "adj.",
        "word": "Capable of being conducted or transmitted."
    },
    {
        "matched": false,
        "definition": "conduit",
        "type": "n.",
        "word": "A means for conducting something, particularly a tube, pipe, or passageway for          "
    },
    {
        "matched": false,
        "definition": "confectionery",
        "type": "n.",
        "word": "The candy collectively that a confectioner makes or sells, as candy."
    },
    {
        "matched": false,
        "definition": "confederacy",
        "type": "n.",
        "word": "A number of states or persons in compact or league with each other, as for          "
    },
    {
        "matched": false,
        "definition": "confederate",
        "type": "n.",
        "word": "One who is united with others in a league, compact, or agreement."
    },
    {
        "matched": false,
        "definition": "confer",
        "type": "v.",
        "word": "To bestow."
    },
    {
        "matched": false,
        "definition": "conferee",
        "type": "n.",
        "word": "A person with whom another confers."
    },
    {
        "matched": false,
        "definition": "confessor",
        "type": "n.",
        "word": "A spiritual advisor."
    },
    {
        "matched": false,
        "definition": "confidant",
        "type": "n.",
        "word": "One to whom secrets are entrusted."
    },
    {
        "matched": false,
        "definition": "confide",
        "type": "v.",
        "word": "To reveal in trust or confidence."
    },
    {
        "matched": false,
        "definition": "confidence",
        "type": "n.",
        "word": "The state or feeling of trust in or reliance upon another."
    },
    {
        "matched": false,
        "definition": "confident",
        "type": "adj.",
        "word": "Assured."
    },
    {
        "matched": false,
        "definition": "confinement",
        "type": "n.",
        "word": "Restriction within limits or boundaries."
    },
    {
        "matched": false,
        "definition": "confiscate",
        "type": "v.",
        "word": "To appropriate (private property) as forfeited to the public use or          "
    },
    {
        "matched": false,
        "definition": "conflagration",
        "type": "n.",
        "word": "A great fire, as of many buildings, a forest, or the like."
    },
    {
        "matched": false,
        "definition": "confluence",
        "type": "n.",
        "word": "The place where streams meet."
    },
    {
        "matched": false,
        "definition": "confluent",
        "type": "n.",
        "word": "A stream that unites with another."
    },
    {
        "matched": false,
        "definition": "conformance",
        "type": "n.",
        "word": "The act or state or conforming."
    },
    {
        "matched": false,
        "definition": "conformable",
        "type": "adj.",
        "word": "Harmonious."
    },
    {
        "matched": false,
        "definition": "conformation",
        "type": "n.",
        "word": "General structure, form, or outline."
    },
    {
        "matched": false,
        "definition": "conformity",
        "type": "n.",
        "word": "Correspondence in form, manner, or use."
    },
    {
        "matched": false,
        "definition": "confront",
        "type": "v.",
        "word": "To encounter, as difficulties or obstacles."
    },
    {
        "matched": false,
        "definition": "congeal",
        "type": "v.",
        "word": "To coagulate."
    },
    {
        "matched": false,
        "definition": "congenial",
        "type": "adj.",
        "word": "Having kindred character or tastes."
    },
    {
        "matched": false,
        "definition": "congest",
        "type": "v.",
        "word": "To collect into a mass."
    },
    {
        "matched": false,
        "definition": "congregate",
        "type": "v.",
        "word": "To bring together into a crowd."
    },
    {
        "matched": false,
        "definition": "coniferous",
        "type": "adj.",
        "word": "Cone-bearing trees."
    },
    {
        "matched": false,
        "definition": "conjecture",
        "type": "n.",
        "word": "A guess."
    },
    {
        "matched": false,
        "definition": "conjoin",
        "type": "v.",
        "word": "To unite."
    },
    {
        "matched": false,
        "definition": "conjugal",
        "type": "adj.",
        "word": "Pertaining to marriage, marital rights, or married persons."
    },
    {
        "matched": false,
        "definition": "conjugate",
        "type": "adj.",
        "word": "Joined together in pairs."
    },
    {
        "matched": false,
        "definition": "conjugation",
        "type": "n.",
        "word": "The state or condition of being joined together."
    },
    {
        "matched": false,
        "definition": "conjunction",
        "type": "n.",
        "word": "The state of being joined together, or the things so joined."
    },
    {
        "matched": false,
        "definition": "connive",
        "type": "v.",
        "word": "To be in collusion."
    },
    {
        "matched": false,
        "definition": "connoisseur",
        "type": "n.",
        "word": "A critical judge of art, especially one with thorough knowledge and sound          "
    },
    {
        "matched": false,
        "definition": "connote",
        "type": "v.",
        "word": "To mean; signify."
    },
    {
        "matched": false,
        "definition": "connubial",
        "type": "adj.",
        "word": "Pertaining to marriage or matrimony."
    },
    {
        "matched": false,
        "definition": "conquer",
        "type": "v.",
        "word": "To overcome by force."
    },
    {
        "matched": false,
        "definition": "consanguineous",
        "type": "adj.",
        "word": "Descended from the same parent or ancestor."
    },
    {
        "matched": false,
        "definition": "conscience",
        "type": "n.",
        "word": "The faculty in man by which he distinguishes between right and wrong in          "
    },
    {
        "matched": false,
        "definition": "conscientious",
        "type": "adj.",
        "word": "Governed by moral standard."
    },
    {
        "matched": false,
        "definition": "conscious",
        "type": "adj.",
        "word": "Aware that one lives, feels, and thinks."
    },
    {
        "matched": false,
        "definition": "conscript",
        "type": "v.",
        "word": "To force into military service."
    },
    {
        "matched": false,
        "definition": "consecrate",
        "type": "v.",
        "word": "To set apart as sacred."
    },
    {
        "matched": false,
        "definition": "consecutive",
        "type": "adj.",
        "word": "Following in uninterrupted succession."
    },
    {
        "matched": false,
        "definition": "consensus",
        "type": "n.",
        "word": "A collective unanimous opinion of a number of persons."
    },
    {
        "matched": false,
        "definition": "conservatism",
        "type": "n.",
        "word": "Tendency to adhere to the existing order of things."
    },
    {
        "matched": false,
        "definition": "conservative",
        "type": "adj.",
        "word": "Adhering to the existing order of things."
    },
    {
        "matched": false,
        "definition": "conservatory",
        "type": "n.",
        "word": "An institution for instruction and training in music and declamation."
    },
    {
        "matched": false,
        "definition": "consign",
        "type": "v.",
        "word": "To entrust."
    },
    {
        "matched": false,
        "definition": "consignee",
        "type": "n.",
        "word": "A person to whom goods or other property has been entrusted."
    },
    {
        "matched": false,
        "definition": "consignor",
        "type": "n.",
        "word": "One who entrusts."
    },
    {
        "matched": false,
        "definition": "consistency",
        "type": "n.",
        "word": "A state of permanence."
    },
    {
        "matched": false,
        "definition": "console",
        "type": "v.",
        "word": "To comfort."
    },
    {
        "matched": false,
        "definition": "consolidate",
        "type": "v.",
        "word": "To combine into one body or system."
    },
    {
        "matched": false,
        "definition": "consonance",
        "type": "n.",
        "word": "The state or quality of being in accord with."
    },
    {
        "matched": false,
        "definition": "consonant",
        "type": "adj.",
        "word": "Being in agreement or harmony with."
    },
    {
        "matched": false,
        "definition": "consort",
        "type": "n.",
        "word": "A companion or associate."
    },
    {
        "matched": false,
        "definition": "conspicuous",
        "type": "adj.",
        "word": "Clearly visible."
    },
    {
        "matched": false,
        "definition": "conspirator",
        "type": "n.",
        "word": "One who agrees with others to cooperate in accomplishing some unlawful          "
    },
    {
        "matched": false,
        "definition": "conspire",
        "type": "v.",
        "word": "To plot."
    },
    {
        "matched": false,
        "definition": "constable",
        "type": "n.",
        "word": "An officer whose duty is to maintain the peace."
    },
    {
        "matched": false,
        "definition": "constellation",
        "type": "n.",
        "word": "An arbitrary assemblage or group of stars."
    },
    {
        "matched": false,
        "definition": "consternation",
        "type": "n.",
        "word": "Panic."
    },
    {
        "matched": false,
        "definition": "constituency",
        "type": "n.",
        "word": "The inhabitants or voters in a district represented in a legislative body."
    },
    {
        "matched": false,
        "definition": "constituent",
        "type": "n.",
        "word": "One who has the right to vote at an election."
    },
    {
        "matched": false,
        "definition": "constrict",
        "type": "v.",
        "word": "To bind."
    },
    {
        "matched": false,
        "definition": "consul",
        "type": "n.",
        "word": "An officer appointed to reside in a foreign city, chiefly to represent his          "
    },
    {
        "matched": false,
        "definition": "consulate",
        "type": "n.",
        "word": "The place in which a consul transacts official business."
    },
    {
        "matched": false,
        "definition": "consummate",
        "type": "v.",
        "word": "To bring to completion."
    },
    {
        "matched": false,
        "definition": "consumption",
        "type": "n.",
        "word": "Gradual destruction, as by burning, eating, etc., or by using up, wearing          "
    },
    {
        "matched": false,
        "definition": "consumptive",
        "type": "adj.",
        "word": "Designed for gradual destruction."
    },
    {
        "matched": false,
        "definition": "contagion",
        "type": "n.",
        "word": "The communication of disease from person to person."
    },
    {
        "matched": false,
        "definition": "contagious",
        "type": "adj.",
        "word": "Transmitting disease."
    },
    {
        "matched": false,
        "definition": "contaminate",
        "type": "v.",
        "word": "To pollute."
    },
    {
        "matched": false,
        "definition": "contemplate",
        "type": "v.",
        "word": "To consider thoughtfully."
    },
    {
        "matched": false,
        "definition": "contemporaneous",
        "type": "adj.",
        "word": "Living, occurring, or existing at the same time."
    },
    {
        "matched": false,
        "definition": "contemporary",
        "type": "adj.",
        "word": "Living or existing at the same time."
    },
    {
        "matched": false,
        "definition": "contemptible",
        "type": "adj.",
        "word": "Worthy of scorn or disdain."
    },
    {
        "matched": false,
        "definition": "contemptuous",
        "type": "adj.",
        "word": "Disdainful."
    },
    {
        "matched": false,
        "definition": "contender",
        "type": "n.",
        "word": "One who exerts oneself in opposition or rivalry."
    },
    {
        "matched": false,
        "definition": "contiguity",
        "type": "n.",
        "word": "Proximity."
    },
    {
        "matched": false,
        "definition": "contiguous",
        "type": "adj.",
        "word": "Touching or joining at the edge or boundary."
    },
    {
        "matched": false,
        "definition": "continence",
        "type": "n.",
        "word": "Self-restraint with respect to desires, appetites, and passion."
    },
    {
        "matched": false,
        "definition": "contingency",
        "type": "n.",
        "word": "Possibility of happening."
    },
    {
        "matched": false,
        "definition": "contingent",
        "type": "adj.",
        "word": "Not predictable."
    },
    {
        "matched": false,
        "definition": "continuance",
        "type": "n.",
        "word": "Permanence."
    },
    {
        "matched": false,
        "definition": "continuation",
        "type": "n.",
        "word": "Prolongation."
    },
    {
        "matched": false,
        "definition": "continuity",
        "type": "n.",
        "word": "Uninterrupted connection in space, time, operation, or development."
    },
    {
        "matched": false,
        "definition": "continuous",
        "type": "adj.",
        "word": "Connected, extended, or prolonged without separation or interruption of          "
    },
    {
        "matched": false,
        "definition": "contort",
        "type": "v.",
        "word": "To twist into a misshapen form."
    },
    {
        "matched": false,
        "definition": "contraband",
        "type": "n.",
        "word": "Trade forbidden by law or treaty."
    },
    {
        "matched": false,
        "definition": "contradiction",
        "type": "n.",
        "word": "The assertion of the opposite of that which has been said."
    },
    {
        "matched": false,
        "definition": "contradictory",
        "type": "adj.",
        "word": "Inconsistent with itself."
    },
    {
        "matched": false,
        "definition": "contraposition",
        "type": "n.",
        "word": "A placing opposite."
    },
    {
        "matched": false,
        "definition": "contravene",
        "type": "v.",
        "word": "To prevent or obstruct the operation of."
    },
    {
        "matched": false,
        "definition": "contribution",
        "type": "n.",
        "word": "The act of giving for a common purpose."
    },
    {
        "matched": false,
        "definition": "contributor",
        "type": "n.",
        "word": "One who gives or furnishes, in common with others, for a common purpose."
    },
    {
        "matched": false,
        "definition": "contrite",
        "type": "adj.",
        "word": "Broken in spirit because of a sense of sin."
    },
    {
        "matched": false,
        "definition": "contrivance",
        "type": "n.",
        "word": "The act planning, devising, inventing, or adapting something to or for a          "
    },
    {
        "matched": false,
        "definition": "contrive",
        "type": "v.",
        "word": "To manage or carry through by some device or scheme."
    },
    {
        "matched": false,
        "definition": "control",
        "type": "v.",
        "word": "To exercise a directing, restraining, or governing influence over."
    },
    {
        "matched": false,
        "definition": "controller",
        "type": "n.",
        "word": "One who or that which regulates or directs."
    },
    {
        "matched": false,
        "definition": "contumacious",
        "type": "adj.",
        "word": "Rebellious."
    },
    {
        "matched": false,
        "definition": "contumacy",
        "type": "n.",
        "word": "Contemptuous disregard of the requirements of rightful authority."
    },
    {
        "matched": false,
        "definition": "contuse",
        "type": "v.",
        "word": "To bruise by a blow, either with or without the breaking of the skin."
    },
    {
        "matched": false,
        "definition": "contusion",
        "type": "n.",
        "word": "A bruise."
    },
    {
        "matched": false,
        "definition": "convalesce",
        "type": "v.",
        "word": "To recover after a sickness."
    },
    {
        "matched": false,
        "definition": "convalescence",
        "type": "n.",
        "word": "The state of progressive restoration to health and strength after the          "
    },
    {
        "matched": false,
        "definition": "convalescent",
        "type": "adj.",
        "word": "Recovering health after sickness."
    },
    {
        "matched": false,
        "definition": "convene",
        "type": "v.",
        "word": "To summon or cause to assemble."
    },
    {
        "matched": false,
        "definition": "convenience",
        "type": "n.",
        "word": "Fitness, as of time or place."
    },
    {
        "matched": false,
        "definition": "converge",
        "type": "v.",
        "word": "To cause to incline and approach nearer together."
    },
    {
        "matched": false,
        "definition": "convergent",
        "type": "adj.",
        "word": "Tending to one point."
    },
    {
        "matched": false,
        "definition": "conversant",
        "type": "adj.",
        "word": "Thoroughly informed."
    },
    {
        "matched": false,
        "definition": "conversion",
        "type": "n.",
        "word": "Change from one state or position to another, or from one form to another."
    },
    {
        "matched": false,
        "definition": "convertible",
        "type": "adj.",
        "word": "Interchangeable."
    },
    {
        "matched": false,
        "definition": "convex",
        "type": "adj.",
        "word": "Curving like the segment of the globe or of the surface of a circle."
    },
    {
        "matched": false,
        "definition": "conveyance",
        "type": "n.",
        "word": "That by which anything is transported."
    },
    {
        "matched": false,
        "definition": "convivial",
        "type": "adj.",
        "word": "Devoted to feasting, or to good-fellowship in eating or drinking."
    },
    {
        "matched": false,
        "definition": "convolution",
        "type": "n.",
        "word": "A winding motion."
    },
    {
        "matched": false,
        "definition": "convolve",
        "type": "v.",
        "word": "To move with a circling or winding motion."
    },
    {
        "matched": false,
        "definition": "convoy",
        "type": "n.",
        "word": "A protecting force accompanying property in course of transportation."
    },
    {
        "matched": false,
        "definition": "convulse",
        "type": "v.",
        "word": "To cause spasms in."
    },
    {
        "matched": false,
        "definition": "convulsion",
        "type": "n.",
        "word": "A violent and abnormal muscular contraction of the body."
    },
    {
        "matched": false,
        "definition": "copious",
        "type": "adj.",
        "word": "Plenteous."
    },
    {
        "matched": false,
        "definition": "coquette",
        "type": "n.",
        "word": "A flirt."
    },
    {
        "matched": false,
        "definition": "cornice",
        "type": "n.",
        "word": "An ornamental molding running round the walls of a room close to the ceiling."
    },
    {
        "matched": false,
        "definition": "cornucopia",
        "type": "n.",
        "word": "The horn of plenty, symbolizing peace and prosperity."
    },
    {
        "matched": false,
        "definition": "corollary",
        "type": "n.",
        "word": "A proposition following so obviously from another that it requires little          "
    },
    {
        "matched": false,
        "definition": "coronation",
        "type": "n.",
        "word": "The act or ceremony of crowning a monarch."
    },
    {
        "matched": false,
        "definition": "coronet",
        "type": "n.",
        "word": "Inferior crown denoting, according to its form, various degrees of noble rank          "
    },
    {
        "matched": false,
        "definition": "corporal",
        "type": "adj.",
        "word": "Belonging or relating to the body as opposed to the mind."
    },
    {
        "matched": false,
        "definition": "corporate",
        "type": "adj.",
        "word": "Belonging to a corporation."
    },
    {
        "matched": false,
        "definition": "corporeal",
        "type": "adj.",
        "word": "Of a material nature; physical."
    },
    {
        "matched": false,
        "definition": "corps",
        "type": "n.",
        "word": "A number or body of persons in some way associated or acting together."
    },
    {
        "matched": false,
        "definition": "corpse",
        "type": "n.",
        "word": "A dead body."
    },
    {
        "matched": false,
        "definition": "corpulent",
        "type": "adj.",
        "word": "Obese."
    },
    {
        "matched": false,
        "definition": "corpuscle",
        "type": "n.",
        "word": "A minute particle of matter."
    },
    {
        "matched": false,
        "definition": "correlate",
        "type": "v.",
        "word": "To put in some relation of connection or correspondence."
    },
    {
        "matched": false,
        "definition": "correlative",
        "type": "adj.",
        "word": "Mutually involving or implying one another."
    },
    {
        "matched": false,
        "definition": "corrigible",
        "type": "adj.",
        "word": "Capable of reformation."
    },
    {
        "matched": false,
        "definition": "corroborate",
        "type": "v.",
        "word": "To strengthen, as proof or conviction."
    },
    {
        "matched": false,
        "definition": "corroboration",
        "type": "n.",
        "word": "Confirmation."
    },
    {
        "matched": false,
        "definition": "corrode",
        "type": "v.",
        "word": "To ruin or destroy little by little."
    },
    {
        "matched": false,
        "definition": "corrosion",
        "type": "n.",
        "word": "Gradual decay by crumbling or surface disintegration."
    },
    {
        "matched": false,
        "definition": "corrosive",
        "type": "n.",
        "word": "That which causes gradual decay by crumbling or surface disintegration."
    },
    {
        "matched": false,
        "definition": "corruptible",
        "type": "adj.",
        "word": "Open to bribery."
    },
    {
        "matched": false,
        "definition": "corruption",
        "type": "n.",
        "word": "Loss of purity or integrity."
    },
    {
        "matched": false,
        "definition": "cosmetic",
        "type": "adj.",
        "word": "Pertaining to the art of beautifying, especially the complexion."
    },
    {
        "matched": false,
        "definition": "cosmic",
        "type": "adj.",
        "word": "Pertaining to the universe."
    },
    {
        "matched": false,
        "definition": "cosmogony",
        "type": "n.",
        "word": "A doctrine of creation or of the origin of the universe."
    },
    {
        "matched": false,
        "definition": "cosmography",
        "type": "n.",
        "word": "The science that describes the universe, including astronomy, geography,          "
    },
    {
        "matched": false,
        "definition": "cosmology",
        "type": "n.",
        "word": "The general science of the universe."
    },
    {
        "matched": false,
        "definition": "cosmopolitan",
        "type": "adj.",
        "word": "Common to all the world."
    },
    {
        "matched": false,
        "definition": "cosmopolitanism",
        "type": "n.",
        "word": "A cosmopolitan character."
    },
    {
        "matched": false,
        "definition": "cosmos",
        "type": "n.",
        "word": "The world or universe considered as a system, perfect in order and arrangement."
    },
    {
        "matched": false,
        "definition": "counter-claim",
        "type": "n.",
        "word": "A cross-demand alleged by a defendant in his favor against the plaintiff."
    },
    {
        "matched": false,
        "definition": "counteract",
        "type": "v.",
        "word": "To act in opposition to."
    },
    {
        "matched": false,
        "definition": "counterbalance",
        "type": "v.",
        "word": "To oppose with an equal force."
    },
    {
        "matched": false,
        "definition": "countercharge",
        "type": "v.",
        "word": "To accuse in return."
    },
    {
        "matched": false,
        "definition": "counterfeit",
        "type": "adj.",
        "word": "Made to resemble something else."
    },
    {
        "matched": false,
        "definition": "counterpart",
        "type": "n.",
        "word": "Something taken with another for the completion of either."
    },
    {
        "matched": false,
        "definition": "countervail",
        "type": "v.",
        "word": "To offset."
    },
    {
        "matched": false,
        "definition": "counting-house",
        "type": "n.",
        "word": "A house or office used for transacting business, bookkeeping,          "
    },
    {
        "matched": false,
        "definition": "countryman",
        "type": "n.",
        "word": "A rustic."
    },
    {
        "matched": false,
        "definition": "courageous",
        "type": "adj.",
        "word": "Brave."
    },
    {
        "matched": false,
        "definition": "course",
        "type": "n.",
        "word": "Line of motion or direction."
    },
    {
        "matched": false,
        "definition": "courser",
        "type": "n.",
        "word": "A fleet and spirited horse."
    },
    {
        "matched": false,
        "definition": "courtesy",
        "type": "n.",
        "word": "Politeness originating in kindness and exercised habitually."
    },
    {
        "matched": false,
        "definition": "covenant",
        "type": "n.",
        "word": "An agreement entered into by two or more persons or parties."
    },
    {
        "matched": false,
        "definition": "covert",
        "type": "adj.",
        "word": "Concealed, especially for an evil purpose."
    },
    {
        "matched": false,
        "definition": "covey",
        "type": "n.",
        "word": "A flock of quails or partridges."
    },
    {
        "matched": false,
        "definition": "cower",
        "type": "v.",
        "word": "To crouch down tremblingly, as through fear or shame."
    },
    {
        "matched": false,
        "definition": "coxswain",
        "type": "n.",
        "word": "One who steers a rowboat, or one who has charge of a ship's boat and its crew          "
    },
    {
        "matched": false,
        "definition": "crag",
        "type": "n.",
        "word": "A rugged, rocky projection on a cliff or ledge."
    },
    {
        "matched": false,
        "definition": "cranium",
        "type": "n.",
        "word": "The skull of an animal, especially that part enclosing the brain."
    },
    {
        "matched": false,
        "definition": "crass",
        "type": "adj.",
        "word": "Coarse or thick in nature or structure, as opposed to thin or fine."
    },
    {
        "matched": false,
        "definition": "craving",
        "type": "n.",
        "word": "A vehement desire."
    },
    {
        "matched": false,
        "definition": "creak",
        "type": "n.",
        "word": "A sharp, harsh, squeaking sound."
    },
    {
        "matched": false,
        "definition": "creamery",
        "type": "n.",
        "word": "A butter-making establishment."
    },
    {
        "matched": false,
        "definition": "creamy",
        "type": "adj.",
        "word": "Resembling or containing cream."
    },
    {
        "matched": false,
        "definition": "credence",
        "type": "n.",
        "word": "Belief."
    },
    {
        "matched": false,
        "definition": "credible",
        "type": "adj.",
        "word": "Believable."
    },
    {
        "matched": false,
        "definition": "credulous",
        "type": "adj.",
        "word": "Easily deceived."
    },
    {
        "matched": false,
        "definition": "creed",
        "type": "n.",
        "word": "A formal summary of fundamental points of religious belief."
    },
    {
        "matched": false,
        "definition": "crematory",
        "type": "adj.",
        "word": "A place for cremating dead bodies."
    },
    {
        "matched": false,
        "definition": "crevasse",
        "type": "n.",
        "word": "A deep crack or fissure in the ice of a glacier."
    },
    {
        "matched": false,
        "definition": "crevice",
        "type": "n.",
        "word": "A small fissure, as between two contiguous surfaces."
    },
    {
        "matched": false,
        "definition": "criterion",
        "type": "n.",
        "word": "A standard by which to determine the correctness of a judgment or conclusion."
    },
    {
        "matched": false,
        "definition": "critique",
        "type": "n.",
        "word": "A criticism or critical review."
    },
    {
        "matched": false,
        "definition": "crockery",
        "type": "n.",
        "word": "Earthenware made from baked clay."
    },
    {
        "matched": false,
        "definition": "crucible",
        "type": "n.",
        "word": "A trying and purifying test or agency."
    },
    {
        "matched": false,
        "definition": "crusade",
        "type": "n.",
        "word": "Any concerted movement, vigorously prosecuted, in behalf of an idea or          "
    },
    {
        "matched": false,
        "definition": "crustacean",
        "type": "adj.",
        "word": "Pertaining to a division of arthropods, containing lobsters, crabs,          "
    },
    {
        "matched": false,
        "definition": "crustaceous",
        "type": "adj.",
        "word": "Having a crust-like shell."
    },
    {
        "matched": false,
        "definition": "cryptogram",
        "type": "n.",
        "word": "Anything written in characters that are secret or so arranged as to have          "
    },
    {
        "matched": false,
        "definition": "crystallize",
        "type": "v.",
        "word": "To bring together or give fixed shape to."
    },
    {
        "matched": false,
        "definition": "cudgel",
        "type": "n.",
        "word": "A short thick stick used as a club."
    },
    {
        "matched": false,
        "definition": "culinary",
        "type": "adj.",
        "word": "Of or pertaining to cooking or the kitchen."
    },
    {
        "matched": false,
        "definition": "cull",
        "type": "v.",
        "word": "To pick or sort out from the rest."
    },
    {
        "matched": false,
        "definition": "culpable",
        "type": "adj.",
        "word": "Guilty."
    },
    {
        "matched": false,
        "definition": "culprit",
        "type": "n.",
        "word": "A guilty person."
    },
    {
        "matched": false,
        "definition": "culvert",
        "type": "n.",
        "word": "Any artificial covered channel for the passage of water through a bank or under          "
    },
    {
        "matched": false,
        "definition": "cupidity",
        "type": "n.",
        "word": "Avarice."
    },
    {
        "matched": false,
        "definition": "curable",
        "type": "adj.",
        "word": "Capable of being remedied or corrected."
    },
    {
        "matched": false,
        "definition": "curator",
        "type": "n.",
        "word": "A person having charge as of a library or museum."
    },
    {
        "matched": false,
        "definition": "curio",
        "type": "n.",
        "word": "A piece of bric-a-brac."
    },
    {
        "matched": false,
        "definition": "cursive",
        "type": "adj.",
        "word": "Writing in which the letters are joined together."
    },
    {
        "matched": false,
        "definition": "cursory",
        "type": "adj.",
        "word": "Rapid and superficial."
    },
    {
        "matched": false,
        "definition": "curt",
        "type": "adj.",
        "word": "Concise, compressed, and abrupt in act or expression."
    },
    {
        "matched": false,
        "definition": "curtail",
        "type": "v.",
        "word": "To cut off or cut short."
    },
    {
        "matched": false,
        "definition": "curtsy",
        "type": "n.",
        "word": "A downward movement of the body by bending the knees."
    },
    {
        "matched": false,
        "definition": "cycloid",
        "type": "adj.",
        "word": "Like a circle."
    },
    {
        "matched": false,
        "definition": "cygnet",
        "type": "n.",
        "word": "A young swan."
    },
    {
        "matched": false,
        "definition": "cynical",
        "type": "adj.",
        "word": "Exhibiting moral skepticism."
    },
    {
        "matched": false,
        "definition": "cynicism",
        "type": "n.",
        "word": "Contempt for the opinions of others and of what others value."
    },
    {
        "matched": false,
        "definition": "cynosure",
        "type": "n.",
        "word": "That to which general interest or attention is directed."
    },
    {
        "matched": false,
        "definition": "daring",
        "type": "adj.",
        "word": "Brave."
    },
    {
        "matched": false,
        "definition": "darkling",
        "type": "adv.",
        "word": "Blindly."
    },
    {
        "matched": false,
        "definition": "Darwinism",
        "type": "n.",
        "word": "The doctrine that natural selection has been the prime cause of evolution of          "
    },
    {
        "matched": false,
        "definition": "dastard",
        "type": "n.",
        "word": "A base coward."
    },
    {
        "matched": false,
        "definition": "datum",
        "type": "n.",
        "word": "A premise, starting-point, or given fact."
    },
    {
        "matched": false,
        "definition": "dauntless",
        "type": "adj.",
        "word": "Fearless."
    },
    {
        "matched": false,
        "definition": "day-man",
        "type": "n.",
        "word": "A day-laborer."
    },
    {
        "matched": false,
        "definition": "dead-heat",
        "type": "n.",
        "word": "A race in which two or more competitors come out even, and there is no          "
    },
    {
        "matched": false,
        "definition": "dearth",
        "type": "n.",
        "word": "Scarcity, as of something customary, essential ,or desirable."
    },
    {
        "matched": false,
        "definition": "s-head",
        "type": "n.",
        "word": "A human skull as a symbol of death."
    },
    {
        "matched": false,
        "definition": "debase",
        "type": "v.",
        "word": "To lower in character or virtue."
    },
    {
        "matched": false,
        "definition": "debatable",
        "type": "adj.",
        "word": "Subject to contention or dispute."
    },
    {
        "matched": false,
        "definition": "debonair",
        "type": "adj.",
        "word": "Having gentle or courteous bearing or manner."
    },
    {
        "matched": false,
        "definition": "debut",
        "type": "n.",
        "word": "A first appearance in society or on the stage."
    },
    {
        "matched": false,
        "definition": "decagon",
        "type": "n.",
        "word": "A figure with ten sides and ten angles."
    },
    {
        "matched": false,
        "definition": "decagram",
        "type": "n.",
        "word": "A weight of 10 grams."
    },
    {
        "matched": false,
        "definition": "decaliter",
        "type": "n.",
        "word": "A liquid and dry measure of 10 liters."
    },
    {
        "matched": false,
        "definition": "decalogue",
        "type": "n.",
        "word": "The ten commandments."
    },
    {
        "matched": false,
        "definition": "Decameron",
        "type": "n.",
        "word": "A volume consisting of ten parts or books."
    },
    {
        "matched": false,
        "definition": "decameter",
        "type": "n.",
        "word": "A length of ten meters."
    },
    {
        "matched": false,
        "definition": "decamp",
        "type": "v.",
        "word": "To leave suddenly or unexpectedly."
    },
    {
        "matched": false,
        "definition": "decapitate",
        "type": "v.",
        "word": "To behead."
    },
    {
        "matched": false,
        "definition": "decapod",
        "type": "adj.",
        "word": "Ten-footed or ten-armed."
    },
    {
        "matched": false,
        "definition": "decasyllable",
        "type": "n.",
        "word": "A line of ten syllables."
    },
    {
        "matched": false,
        "definition": "deceit",
        "type": "n.",
        "word": "Falsehood."
    },
    {
        "matched": false,
        "definition": "deceitful",
        "type": "adj.",
        "word": "Fraudulent."
    },
    {
        "matched": false,
        "definition": "deceive",
        "type": "v.",
        "word": "To mislead by or as by falsehood."
    },
    {
        "matched": false,
        "definition": "decency",
        "type": "n.",
        "word": "Moral fitness."
    },
    {
        "matched": false,
        "definition": "decent",
        "type": "adj.",
        "word": "Characterized by propriety of conduct, speech, manners, or dress."
    },
    {
        "matched": false,
        "definition": "deciduous",
        "type": "adj.",
        "word": "Falling off at maturity as petals after flowering, fruit when ripe, etc."
    },
    {
        "matched": false,
        "definition": "decimal",
        "type": "adj.",
        "word": "Founded on the number 10."
    },
    {
        "matched": false,
        "definition": "decimate",
        "type": "v.",
        "word": "To destroy a measurable or large proportion of."
    },
    {
        "matched": false,
        "definition": "decipher",
        "type": "v.",
        "word": "To find out the true words or meaning of, as something hardly legible."
    },
    {
        "matched": false,
        "definition": "decisive",
        "type": "ad.",
        "word": "Conclusive."
    },
    {
        "matched": false,
        "definition": "declamation",
        "type": "n.",
        "word": "A speech recited or intended for recitation from memory in public."
    },
    {
        "matched": false,
        "definition": "declamatory",
        "type": "adj.",
        "word": "A full and formal style of utterance."
    },
    {
        "matched": false,
        "definition": "declarative",
        "type": "adj.",
        "word": "Containing a formal, positive, or explicit statement or affirmation."
    },
    {
        "matched": false,
        "definition": "declension",
        "type": "n.",
        "word": "The change of endings in nouns and adj. to express their different relations          "
    },
    {
        "matched": false,
        "definition": "decorate",
        "type": "v.",
        "word": "To embellish."
    },
    {
        "matched": false,
        "definition": "decorous",
        "type": "adj.",
        "word": "Suitable for the occasion or circumstances."
    },
    {
        "matched": false,
        "definition": "decoy",
        "type": "n.",
        "word": "Anything that allures, or is intended to allures into danger or temptation."
    },
    {
        "matched": false,
        "definition": "decrepit",
        "type": "adj.",
        "word": "Enfeebled, as by old age or some chronic infirmity."
    },
    {
        "matched": false,
        "definition": "dedication",
        "type": "n.",
        "word": "The voluntary consecration or relinquishment of something to an end or          "
    },
    {
        "matched": false,
        "definition": "deduce",
        "type": "v.",
        "word": "To derive or draw as a conclusion by reasoning from given premises or          "
    },
    {
        "matched": false,
        "definition": "deface",
        "type": "v.",
        "word": "To mar or disfigure the face or external surface of."
    },
    {
        "matched": false,
        "definition": "defalcate",
        "type": "v.",
        "word": "To cut off or take away, as a part of something."
    },
    {
        "matched": false,
        "definition": "defamation",
        "type": "n.",
        "word": "Malicious and groundless injury done to the reputation or good name of          "
    },
    {
        "matched": false,
        "definition": "defame",
        "type": "v.",
        "word": "To slander."
    },
    {
        "matched": false,
        "definition": "default",
        "type": "n.",
        "word": "The neglect or omission of a legal requirement."
    },
    {
        "matched": false,
        "definition": "defendant",
        "type": "n.",
        "word": "A person against whom a suit is brought."
    },
    {
        "matched": false,
        "definition": "defensible",
        "type": "adj.",
        "word": "Capable of being maintained or justified."
    },
    {
        "matched": false,
        "definition": "defensive",
        "type": "adj.",
        "word": "Carried on in resistance to aggression."
    },
    {
        "matched": false,
        "definition": "defer",
        "type": "v.",
        "word": "To delay or put off to some other time."
    },
    {
        "matched": false,
        "definition": "deference",
        "type": "n.",
        "word": "Respectful submission or yielding, as to another's opinion, wishes, or          "
    },
    {
        "matched": false,
        "definition": "defiant",
        "type": "adj.",
        "word": "Characterized by bold or insolent opposition."
    },
    {
        "matched": false,
        "definition": "deficiency",
        "type": "n.",
        "word": "Lack or insufficiency."
    },
    {
        "matched": false,
        "definition": "deficient",
        "type": "adj.",
        "word": "Not having an adequate or proper supply or amount."
    },
    {
        "matched": false,
        "definition": "definite",
        "type": "adj.",
        "word": "Having an exact signification or positive meaning."
    },
    {
        "matched": false,
        "definition": "deflect",
        "type": "v.",
        "word": "To cause to turn aside or downward."
    },
    {
        "matched": false,
        "definition": "deforest",
        "type": "v.",
        "word": "To clear of forests."
    },
    {
        "matched": false,
        "definition": "deform",
        "type": "v.",
        "word": "To disfigure."
    },
    {
        "matched": false,
        "definition": "deformity",
        "type": "n.",
        "word": "A disfigurement."
    },
    {
        "matched": false,
        "definition": "defraud",
        "type": "v.",
        "word": "To deprive of something dishonestly."
    },
    {
        "matched": false,
        "definition": "defray",
        "type": "v.",
        "word": "To make payment for."
    },
    {
        "matched": false,
        "definition": "degeneracy",
        "type": "n.",
        "word": "A becoming worse."
    },
    {
        "matched": false,
        "definition": "degenerate",
        "type": "v.",
        "word": "To become worse or inferior."
    },
    {
        "matched": false,
        "definition": "degradation",
        "type": "n.",
        "word": "Diminution, as of strength or magnitude."
    },
    {
        "matched": false,
        "definition": "degrade",
        "type": "v.",
        "word": "To take away honors or position from."
    },
    {
        "matched": false,
        "definition": "dehydrate",
        "type": "v.",
        "word": "To deprive of water."
    },
    {
        "matched": false,
        "definition": "deify",
        "type": "v.",
        "word": "To regard or worship as a god."
    },
    {
        "matched": false,
        "definition": "deign",
        "type": "v.",
        "word": "To deem worthy of notice or account."
    },
    {
        "matched": false,
        "definition": "deist",
        "type": "n.",
        "word": "One who believes in God, but denies supernatural revelation."
    },
    {
        "matched": false,
        "definition": "deity",
        "type": "n.",
        "word": "A god, goddess, or divine person."
    },
    {
        "matched": false,
        "definition": "deject",
        "type": "v.",
        "word": "To dishearten."
    },
    {
        "matched": false,
        "definition": "dejection",
        "type": "n.",
        "word": "Melancholy."
    },
    {
        "matched": false,
        "definition": "delectable",
        "type": "adj.",
        "word": "Delightful to the taste or to the senses."
    },
    {
        "matched": false,
        "definition": "delectation",
        "type": "n.",
        "word": "Delight."
    },
    {
        "matched": false,
        "definition": "deleterious",
        "type": "adj.",
        "word": "Hurtful, morally or physically."
    },
    {
        "matched": false,
        "definition": "delicacy",
        "type": "n.",
        "word": "That which is agreeable to a fine taste."
    },
    {
        "matched": false,
        "definition": "delineate",
        "type": "v.",
        "word": "To represent by sketch or diagram."
    },
    {
        "matched": false,
        "definition": "deliquesce",
        "type": "v.",
        "word": "To dissolve gradually and become liquid by absorption of moisture from the          "
    },
    {
        "matched": false,
        "definition": "delirious",
        "type": "adj.",
        "word": "Raving."
    },
    {
        "matched": false,
        "definition": "delude",
        "type": "v.",
        "word": "To mislead the mind or judgment of."
    },
    {
        "matched": false,
        "definition": "deluge",
        "type": "v.",
        "word": "To overwhelm with a flood of water."
    },
    {
        "matched": false,
        "definition": "delusion",
        "type": "n.",
        "word": "Mistaken conviction, especially when more or less enduring."
    },
    {
        "matched": false,
        "definition": "demagnetize",
        "type": "v.",
        "word": "To deprive (a magnet) of magnetism."
    },
    {
        "matched": false,
        "definition": "demagogue",
        "type": "n.",
        "word": "An unprincipled politician."
    },
    {
        "matched": false,
        "definition": "demeanor",
        "type": "n.",
        "word": "Deportment."
    },
    {
        "matched": false,
        "definition": "demented",
        "type": "adj.",
        "word": "Insane."
    },
    {
        "matched": false,
        "definition": "demerit",
        "type": "n.",
        "word": "A mark for failure or bad conduct."
    },
    {
        "matched": false,
        "definition": "demise",
        "type": "n.",
        "word": "Death."
    },
    {
        "matched": false,
        "definition": "demobilize",
        "type": "v.",
        "word": "To disband, as troops."
    },
    {
        "matched": false,
        "definition": "demolish",
        "type": "v.",
        "word": "To annihilate."
    },
    {
        "matched": false,
        "definition": "demonstrable",
        "type": "adj.",
        "word": "Capable of positive proof."
    },
    {
        "matched": false,
        "definition": "demonstrate",
        "type": "v.",
        "word": "To prove indubitably."
    },
    {
        "matched": false,
        "definition": "demonstrative",
        "type": "adj.",
        "word": "Inclined to strong exhibition or expression of feeling or thoughts."
    },
    {
        "matched": false,
        "definition": "demonstrator",
        "type": "n.",
        "word": "One who proves in a convincing and conclusive manner."
    },
    {
        "matched": false,
        "definition": "demulcent",
        "type": "n.",
        "word": "Any application soothing to an irritable surface"
    },
    {
        "matched": false,
        "definition": "demurrage",
        "type": "n.",
        "word": "the detention of a vessel beyond the specified time of sailing."
    },
    {
        "matched": false,
        "definition": "dendroid",
        "type": "adj.",
        "word": "Like a tree."
    },
    {
        "matched": false,
        "definition": "dendrology",
        "type": "n.",
        "word": "The natural history of trees."
    },
    {
        "matched": false,
        "definition": "denizen",
        "type": "n.",
        "word": "Inhabitant."
    },
    {
        "matched": false,
        "definition": "denominate",
        "type": "v.",
        "word": "To give a name or epithet to."
    },
    {
        "matched": false,
        "definition": "denomination",
        "type": "n.",
        "word": "A body of Christians united by a common faith and form of worship and          "
    },
    {
        "matched": false,
        "definition": "denominator",
        "type": "n.",
        "word": "Part of a fraction which expresses the number of equal parts into which the          "
    },
    {
        "matched": false,
        "definition": "denote",
        "type": "v.",
        "word": "To designate by word or mark."
    },
    {
        "matched": false,
        "definition": "denouement",
        "type": "n.",
        "word": "That part of a play or story in which the mystery is cleared up."
    },
    {
        "matched": false,
        "definition": "denounce",
        "type": "v.",
        "word": "To point out or publicly accuse as deserving of punishment, censure, or odium."
    },
    {
        "matched": false,
        "definition": "dentifrice",
        "type": "n.",
        "word": "Any preparation used for cleaning the teeth."
    },
    {
        "matched": false,
        "definition": "denude",
        "type": "v.",
        "word": "To strip the covering from."
    },
    {
        "matched": false,
        "definition": "denunciation",
        "type": "n.",
        "word": "The act of declaring an action or person worthy of reprobation or          "
    },
    {
        "matched": false,
        "definition": "deplete",
        "type": "v.",
        "word": "To reduce or lessen, as by use, exhaustion, or waste."
    },
    {
        "matched": false,
        "definition": "deplorable",
        "type": "adj.",
        "word": "Contemptible."
    },
    {
        "matched": false,
        "definition": "deplore",
        "type": "v.",
        "word": "To regard with grief or sorrow."
    },
    {
        "matched": false,
        "definition": "deponent",
        "type": "adj.",
        "word": "Laying down."
    },
    {
        "matched": false,
        "definition": "depopulate",
        "type": "v.",
        "word": "To remove the inhabitants from."
    },
    {
        "matched": false,
        "definition": "deport",
        "type": "v.",
        "word": "To take or send away forcibly, as to a penal colony."
    },
    {
        "matched": false,
        "definition": "deportment",
        "type": "n.",
        "word": "Demeanor."
    },
    {
        "matched": false,
        "definition": "deposition",
        "type": "n.",
        "word": "Testimony legally taken on interrogatories and reduced to writing, for use          "
    },
    {
        "matched": false,
        "definition": "depositor",
        "type": "n.",
        "word": "One who makes a deposit, or has an amount deposited."
    },
    {
        "matched": false,
        "definition": "depository",
        "type": "n.",
        "word": "A place where anything is kept in safety."
    },
    {
        "matched": false,
        "definition": "deprave",
        "type": "v.",
        "word": "To render bad, especially morally bad."
    },
    {
        "matched": false,
        "definition": "deprecate",
        "type": "v.",
        "word": "To express disapproval or regret for, with hope for the opposite."
    },
    {
        "matched": false,
        "definition": "depreciate",
        "type": "v.",
        "word": "To lessen the worth of."
    },
    {
        "matched": false,
        "definition": "depreciation",
        "type": "n.",
        "word": "A lowering in value or an underrating in worth."
    },
    {
        "matched": false,
        "definition": "depress",
        "type": "v.",
        "word": "To press down."
    },
    {
        "matched": false,
        "definition": "depression",
        "type": "n.",
        "word": "A falling of the spirits."
    },
    {
        "matched": false,
        "definition": "depth",
        "type": "n.",
        "word": "Deepness."
    },
    {
        "matched": false,
        "definition": "derelict",
        "type": "adj.",
        "word": "Neglectful of obligation."
    },
    {
        "matched": false,
        "definition": "deride",
        "type": "v.",
        "word": "To ridicule."
    },
    {
        "matched": false,
        "definition": "derisible",
        "type": "adj.",
        "word": "Open to ridicule."
    },
    {
        "matched": false,
        "definition": "derision",
        "type": "n.",
        "word": "Ridicule."
    },
    {
        "matched": false,
        "definition": "derivation",
        "type": "n.",
        "word": "That process by which a word is traced from its original root or primitive          "
    },
    {
        "matched": false,
        "definition": "derivative",
        "type": "adj.",
        "word": "Coming or acquired from some origin."
    },
    {
        "matched": false,
        "definition": "derive",
        "type": "v.",
        "word": "To deduce, as from a premise."
    },
    {
        "matched": false,
        "definition": "dermatology",
        "type": "n.",
        "word": "The branch of medical science which relates to the skin and its diseases."
    },
    {
        "matched": false,
        "definition": "derrick",
        "type": "n.",
        "word": "An apparatus for hoisting and swinging great weights."
    },
    {
        "matched": false,
        "definition": "descendant",
        "type": "n.",
        "word": "One who is descended lineally from another, as a child, grandchild, etc."
    },
    {
        "matched": false,
        "definition": "descendent",
        "type": "adj.",
        "word": "Proceeding downward."
    },
    {
        "matched": false,
        "definition": "descent",
        "type": "n.",
        "word": "The act of moving or going downward."
    },
    {
        "matched": false,
        "definition": "descry",
        "type": "v.",
        "word": "To discern."
    },
    {
        "matched": false,
        "definition": "desert",
        "type": "v.",
        "word": "To abandon without regard to the welfare of the abandoned"
    },
    {
        "matched": false,
        "definition": "desiccant",
        "type": "n.",
        "word": "Any remedy which, when applied externally, dries up or absorbs moisture, as          "
    },
    {
        "matched": false,
        "definition": "designate",
        "type": "v.",
        "word": "To select or appoint, as by authority."
    },
    {
        "matched": false,
        "definition": "desist",
        "type": "v.",
        "word": "To cease from action."
    },
    {
        "matched": false,
        "definition": "desistance",
        "type": "n.",
        "word": "Cessation."
    },
    {
        "matched": false,
        "definition": "despair",
        "type": "n.",
        "word": "Utter hopelessness and despondency."
    },
    {
        "matched": false,
        "definition": "desperado",
        "type": "n.",
        "word": "One without regard for law or life."
    },
    {
        "matched": false,
        "definition": "desperate",
        "type": "adj.",
        "word": "Resorted to in a last extremity, or as if prompted by utter despair."
    },
    {
        "matched": false,
        "definition": "despicable",
        "type": "adj.",
        "word": "Contemptible."
    },
    {
        "matched": false,
        "definition": "despite",
        "type": "prep.",
        "word": "In spite of."
    },
    {
        "matched": false,
        "definition": "despond",
        "type": "v.",
        "word": "To lose spirit, courage, or hope."
    },
    {
        "matched": false,
        "definition": "despondent",
        "type": "adj.",
        "word": "Disheartened."
    },
    {
        "matched": false,
        "definition": "despot",
        "type": "n.",
        "word": "An absolute and irresponsible monarch."
    },
    {
        "matched": false,
        "definition": "despotism",
        "type": "n.",
        "word": "Any severe and strict rule in which the judgment of the governed has little          "
    },
    {
        "matched": false,
        "definition": "destitute",
        "type": "adj.",
        "word": "Poverty-stricken."
    },
    {
        "matched": false,
        "definition": "desultory",
        "type": "adj.",
        "word": "Not connected with what precedes."
    },
    {
        "matched": false,
        "definition": "deter",
        "type": "v.",
        "word": "To frighten away."
    },
    {
        "matched": false,
        "definition": "deteriorate",
        "type": "v.",
        "word": "To grow worse."
    },
    {
        "matched": false,
        "definition": "determinate",
        "type": "adj.",
        "word": "Definitely limited or fixed."
    },
    {
        "matched": false,
        "definition": "determination",
        "type": "n.",
        "word": "The act of deciding."
    },
    {
        "matched": false,
        "definition": "deterrent",
        "type": "adj.",
        "word": "Hindering from action through fear."
    },
    {
        "matched": false,
        "definition": "detest",
        "type": "v.",
        "word": "To dislike or hate with intensity."
    },
    {
        "matched": false,
        "definition": "detract",
        "type": "v.",
        "word": "To take away in such manner as to lessen value or estimation."
    },
    {
        "matched": false,
        "definition": "detriment",
        "type": "n.",
        "word": "Something that causes damage, depreciation, or loss."
    },
    {
        "matched": false,
        "definition": "detrude",
        "type": "v.",
        "word": "To push down forcibly."
    },
    {
        "matched": false,
        "definition": "deviate",
        "type": "v.",
        "word": "To take a different course."
    },
    {
        "matched": false,
        "definition": "devilry",
        "type": "n.",
        "word": "Malicious mischief."
    },
    {
        "matched": false,
        "definition": "deviltry",
        "type": "n.",
        "word": "Wanton and malicious mischief."
    },
    {
        "matched": false,
        "definition": "devious",
        "type": "adj.",
        "word": "Out of the common or regular track."
    },
    {
        "matched": false,
        "definition": "devise",
        "type": "v.",
        "word": "To invent."
    },
    {
        "matched": false,
        "definition": "devout",
        "type": "adj.",
        "word": "Religious."
    },
    {
        "matched": false,
        "definition": "dexterity",
        "type": "n.",
        "word": "Readiness, precision, efficiency, and ease in any physical activity or in any          "
    },
    {
        "matched": false,
        "definition": "diabolic",
        "type": "adj.",
        "word": "Characteristic of the devil."
    },
    {
        "matched": false,
        "definition": "diacritical",
        "type": "adj.",
        "word": "Marking a difference."
    },
    {
        "matched": false,
        "definition": "diagnose",
        "type": "v.",
        "word": "To distinguish, as a disease, by its characteristic phenomena."
    },
    {
        "matched": false,
        "definition": "diagnosis",
        "type": "n.",
        "word": "Determination of the distinctive nature of a disease."
    },
    {
        "matched": false,
        "definition": "dialect",
        "type": "n.",
        "word": "Forms of speech collectively that are peculiar to the people of a particular          "
    },
    {
        "matched": false,
        "definition": "dialectician",
        "type": "n.",
        "word": "A logician."
    },
    {
        "matched": false,
        "definition": "dialogue",
        "type": "n.",
        "word": "A formal conversation in which two or more take part."
    },
    {
        "matched": false,
        "definition": "diaphanous",
        "type": "adj.",
        "word": "Transparent."
    },
    {
        "matched": false,
        "definition": "diatomic",
        "type": "adj.",
        "word": "Containing only two atoms."
    },
    {
        "matched": false,
        "definition": "diatribe",
        "type": "n.",
        "word": "A bitter or malicious criticism."
    },
    {
        "matched": false,
        "definition": "dictum",
        "type": "n.",
        "word": "A positive utterance."
    },
    {
        "matched": false,
        "definition": "didactic",
        "type": "adj.",
        "word": "Pertaining to teaching."
    },
    {
        "matched": false,
        "definition": "difference",
        "type": "n.",
        "word": "Dissimilarity in any respect."
    },
    {
        "matched": false,
        "definition": "differentia",
        "type": "n.",
        "word": "Any essential characteristic of a species by reason of which it differs          "
    },
    {
        "matched": false,
        "definition": "differential",
        "type": "adj.",
        "word": "Distinctive."
    },
    {
        "matched": false,
        "definition": "differentiate",
        "type": "v.",
        "word": "To acquire a distinct and separate character."
    },
    {
        "matched": false,
        "definition": "diffidence",
        "type": "n.",
        "word": "Self-distrust."
    },
    {
        "matched": false,
        "definition": "diffident",
        "type": "adj.",
        "word": "Affected or possessed with self-distrust."
    },
    {
        "matched": false,
        "definition": "diffusible",
        "type": "adj.",
        "word": "Spreading rapidly through the system and acting quickly."
    },
    {
        "matched": false,
        "definition": "diffusion",
        "type": "n.",
        "word": "Dispersion."
    },
    {
        "matched": false,
        "definition": "dignitary",
        "type": "n.",
        "word": "One who holds high rank."
    },
    {
        "matched": false,
        "definition": "digraph",
        "type": "n.",
        "word": "A union of two characters representing a single sound."
    },
    {
        "matched": false,
        "definition": "digress",
        "type": "v.",
        "word": "To turn aside from the main subject and for a time dwell on some incidental          "
    },
    {
        "matched": false,
        "definition": "dilapidated",
        "type": "pa.",
        "word": "Fallen into decay or partial ruin."
    },
    {
        "matched": false,
        "definition": "dilate",
        "type": "v.",
        "word": "To enlarge in all directions."
    },
    {
        "matched": false,
        "definition": "dilatory",
        "type": "adj.",
        "word": "Tending to cause delay."
    },
    {
        "matched": false,
        "definition": "dilemma",
        "type": "n.",
        "word": "A situation in which a choice between opposing modes of conduct is necessary."
    },
    {
        "matched": false,
        "definition": "dilettante",
        "type": "n.",
        "word": "A superficial amateur."
    },
    {
        "matched": false,
        "definition": "diligence",
        "type": "n.",
        "word": "Careful and persevering effort to accomplish what is undertaken."
    },
    {
        "matched": false,
        "definition": "dilute",
        "type": "v.",
        "word": "To make more fluid or less concentrated by admixture with something."
    },
    {
        "matched": false,
        "definition": "diminution",
        "type": "n.",
        "word": "Reduction."
    },
    {
        "matched": false,
        "definition": "dimly",
        "type": "adv.",
        "word": "Obscurely."
    },
    {
        "matched": false,
        "definition": "diphthong",
        "type": "n.",
        "word": "The sound produced by combining two vowels in to a single syllable or running          "
    },
    {
        "matched": false,
        "definition": "diplomacy",
        "type": "n.",
        "word": "Tact, shrewdness, or skill in conducting any kind of negotiations or in          "
    },
    {
        "matched": false,
        "definition": "diplomat",
        "type": "n.",
        "word": "A representative of one sovereign state at the capital or court of another."
    },
    {
        "matched": false,
        "definition": "diplomatic",
        "type": "adj.",
        "word": "Characterized by special tact in negotiations."
    },
    {
        "matched": false,
        "definition": "diplomatist",
        "type": "n.",
        "word": "One remarkable for tact and shrewd management."
    },
    {
        "matched": false,
        "definition": "disagree",
        "type": "v.",
        "word": "To be opposite in opinion."
    },
    {
        "matched": false,
        "definition": "disallow",
        "type": "v.",
        "word": "To withhold permission or sanction."
    },
    {
        "matched": false,
        "definition": "disappear",
        "type": "v.",
        "word": "To cease to exist, either actually or for the time being."
    },
    {
        "matched": false,
        "definition": "disappoint",
        "type": "v.",
        "word": "To fail to fulfill the expectation, hope, wish, or desire of."
    },
    {
        "matched": false,
        "definition": "disapprove",
        "type": "v.",
        "word": "To regard with blame."
    },
    {
        "matched": false,
        "definition": "disarm",
        "type": "v.",
        "word": "To deprive of weapons."
    },
    {
        "matched": false,
        "definition": "disarrange",
        "type": "v.",
        "word": "To throw out of order."
    },
    {
        "matched": false,
        "definition": "disavow",
        "type": "v.",
        "word": "To disclaim responsibility for."
    },
    {
        "matched": false,
        "definition": "disavowal",
        "type": "n.",
        "word": "Denial."
    },
    {
        "matched": false,
        "definition": "disbeliever",
        "type": "n.",
        "word": "One who refuses to believe."
    },
    {
        "matched": false,
        "definition": "disburden",
        "type": "v.",
        "word": "To disencumber."
    },
    {
        "matched": false,
        "definition": "disburse",
        "type": "v.",
        "word": "To pay out or expend, as money from a fund."
    },
    {
        "matched": false,
        "definition": "discard",
        "type": "v.",
        "word": "To reject."
    },
    {
        "matched": false,
        "definition": "discernible",
        "type": "adj.",
        "word": "Perceivable."
    },
    {
        "matched": false,
        "definition": "disciple",
        "type": "n.",
        "word": "One who believes the teaching of another, or who adopts and follows some          "
    },
    {
        "matched": false,
        "definition": "disciplinary",
        "type": "adj.",
        "word": "Having the nature of systematic training or subjection to authority."
    },
    {
        "matched": false,
        "definition": "discipline",
        "type": "v.",
        "word": "To train to obedience."
    },
    {
        "matched": false,
        "definition": "disclaim",
        "type": "v.",
        "word": "To disavow any claim to, connection with, or responsibility to."
    },
    {
        "matched": false,
        "definition": "discolor",
        "type": "v.",
        "word": "To stain."
    },
    {
        "matched": false,
        "definition": "discomfit",
        "type": "v.",
        "word": "To put to confusion."
    },
    {
        "matched": false,
        "definition": "discomfort",
        "type": "n.",
        "word": "The state of being positively uncomfortable."
    },
    {
        "matched": false,
        "definition": "disconnect",
        "type": "v.",
        "word": "To undo or dissolve the connection or association of."
    },
    {
        "matched": false,
        "definition": "disconsolate",
        "type": "adj.",
        "word": "Grief-stricken."
    },
    {
        "matched": false,
        "definition": "discontinuance",
        "type": "n.",
        "word": "Interruption or intermission."
    },
    {
        "matched": false,
        "definition": "discord",
        "type": "n.",
        "word": "Absence of harmoniousness."
    },
    {
        "matched": false,
        "definition": "discountenance",
        "type": "v.",
        "word": "To look upon with disfavor."
    },
    {
        "matched": false,
        "definition": "discover",
        "type": "v.",
        "word": "To get first sight or knowledge of, as something previously unknown or          "
    },
    {
        "matched": false,
        "definition": "discredit",
        "type": "v.",
        "word": "To injure the reputation of."
    },
    {
        "matched": false,
        "definition": "discreet",
        "type": "adj.",
        "word": "Judicious."
    },
    {
        "matched": false,
        "definition": "discrepant",
        "type": "adj.",
        "word": "Opposite."
    },
    {
        "matched": false,
        "definition": "discriminate",
        "type": "v.",
        "word": "To draw a distinction."
    },
    {
        "matched": false,
        "definition": "discursive",
        "type": "adj.",
        "word": "Passing from one subject to another."
    },
    {
        "matched": false,
        "definition": "discussion",
        "type": "n.",
        "word": "Debate."
    },
    {
        "matched": false,
        "definition": "disenfranchise",
        "type": "v.",
        "word": "To deprive of any right privilege or power"
    },
    {
        "matched": false,
        "definition": "disengage",
        "type": "v.",
        "word": "To become detached."
    },
    {
        "matched": false,
        "definition": "disfavor",
        "type": "n.",
        "word": "Disregard."
    },
    {
        "matched": false,
        "definition": "disfigure",
        "type": "v.",
        "word": "To impair or injure the beauty, symmetry, or appearance of."
    },
    {
        "matched": false,
        "definition": "dishabille",
        "type": "n.",
        "word": "Undress or negligent attire."
    },
    {
        "matched": false,
        "definition": "dishonest",
        "type": "adj.",
        "word": "Untrustworthy."
    },
    {
        "matched": false,
        "definition": "disillusion",
        "type": "v.",
        "word": "To disenchant."
    },
    {
        "matched": false,
        "definition": "disinfect",
        "type": "v.",
        "word": "To remove or destroy the poison of infectious or contagious diseases."
    },
    {
        "matched": false,
        "definition": "disinfectant",
        "type": "n.",
        "word": "A substance used to destroy the germs of infectious diseases."
    },
    {
        "matched": false,
        "definition": "disinherit",
        "type": "v.",
        "word": "To deprive of an inheritance."
    },
    {
        "matched": false,
        "definition": "disinterested",
        "type": "adj.",
        "word": "Impartial."
    },
    {
        "matched": false,
        "definition": "disjunctive",
        "type": "adj.",
        "word": "Helping or serving to disconnect or separate."
    },
    {
        "matched": false,
        "definition": "dislocate",
        "type": "v.",
        "word": "To put out of proper place or order."
    },
    {
        "matched": false,
        "definition": "dismissal",
        "type": "n.",
        "word": "Displacement by authority from an office or an employment."
    },
    {
        "matched": false,
        "definition": "dismount",
        "type": "v.",
        "word": "To throw down, push off, or otherwise remove from a horse or the like."
    },
    {
        "matched": false,
        "definition": "disobedience",
        "type": "n.",
        "word": "Neglect or refusal to comply with an authoritative injunction."
    },
    {
        "matched": false,
        "definition": "disobedient",
        "type": "adj.",
        "word": "Neglecting or refusing to obey."
    },
    {
        "matched": false,
        "definition": "disown",
        "type": "v.",
        "word": "To refuse to acknowledge as one's own or as connected with oneself."
    },
    {
        "matched": false,
        "definition": "disparage",
        "type": "v.",
        "word": "To regard or speak of slightingly."
    },
    {
        "matched": false,
        "definition": "disparity",
        "type": "n.",
        "word": "Inequality."
    },
    {
        "matched": false,
        "definition": "dispel",
        "type": "v.",
        "word": "To drive away by or as by scattering in different directions."
    },
    {
        "matched": false,
        "definition": "dispensation",
        "type": "n.",
        "word": "That which is bestowed on or appointed to one from a higher power."
    },
    {
        "matched": false,
        "definition": "displace",
        "type": "v.",
        "word": "To put out of the proper or accustomed place."
    },
    {
        "matched": false,
        "definition": "dispossess",
        "type": "v.",
        "word": "To deprive of actual occupancy, especially of real estate."
    },
    {
        "matched": false,
        "definition": "disputation",
        "type": "n.",
        "word": "Verbal controversy."
    },
    {
        "matched": false,
        "definition": "disqualify",
        "type": "v.",
        "word": "To debar."
    },
    {
        "matched": false,
        "definition": "disquiet",
        "type": "v.",
        "word": "To deprive of peace or tranquillity."
    },
    {
        "matched": false,
        "definition": "disregard",
        "type": "v.",
        "word": "To take no notice of."
    },
    {
        "matched": false,
        "definition": "disreputable",
        "type": "adj.",
        "word": "Dishonorable or disgraceful."
    },
    {
        "matched": false,
        "definition": "disrepute",
        "type": "n.",
        "word": "A bad name or character."
    },
    {
        "matched": false,
        "definition": "disrobe",
        "type": "v.",
        "word": "To unclothe."
    },
    {
        "matched": false,
        "definition": "disrupt",
        "type": "v.",
        "word": "To burst or break asunder."
    },
    {
        "matched": false,
        "definition": "dissatisfy",
        "type": "v.",
        "word": "To displease."
    },
    {
        "matched": false,
        "definition": "dissect",
        "type": "v.",
        "word": "To cut apart or to pieces."
    },
    {
        "matched": false,
        "definition": "dissection",
        "type": "n.",
        "word": "The act or operation of cutting in pieces, specifically of a plant or an          "
    },
    {
        "matched": false,
        "definition": "dissemble",
        "type": "v.",
        "word": "To hide by pretending something different."
    },
    {
        "matched": false,
        "definition": "disseminate",
        "type": "v.",
        "word": "To sow or scatter abroad, as seed is sown."
    },
    {
        "matched": false,
        "definition": "dissension",
        "type": "n.",
        "word": "Angry or violent difference of opinion."
    },
    {
        "matched": false,
        "definition": "dissent",
        "type": "n.",
        "word": "Disagreement."
    },
    {
        "matched": false,
        "definition": "dissentient",
        "type": "n.",
        "word": "One who disagrees."
    },
    {
        "matched": false,
        "definition": "dissentious",
        "type": "adj.",
        "word": "Contentious."
    },
    {
        "matched": false,
        "definition": "dissertation",
        "type": "n.",
        "word": "Thesis."
    },
    {
        "matched": false,
        "definition": "disservice",
        "type": "n.",
        "word": "An ill turn."
    },
    {
        "matched": false,
        "definition": "dissever",
        "type": "v.",
        "word": "To divide."
    },
    {
        "matched": false,
        "definition": "dissimilar",
        "type": "adj.",
        "word": "Different."
    },
    {
        "matched": false,
        "definition": "dissipate",
        "type": "v.",
        "word": "To disperse or disappear."
    },
    {
        "matched": false,
        "definition": "dissipation",
        "type": "n.",
        "word": "The state of being dispersed or scattered."
    },
    {
        "matched": false,
        "definition": "dissolute",
        "type": "adj.",
        "word": "Lewd."
    },
    {
        "matched": false,
        "definition": "dissolution",
        "type": "n.",
        "word": "A breaking up of a union of persons."
    },
    {
        "matched": false,
        "definition": "dissolve",
        "type": "v.",
        "word": "To liquefy or soften, as by heat or moisture."
    },
    {
        "matched": false,
        "definition": "dissonance",
        "type": "n.",
        "word": "Discord."
    },
    {
        "matched": false,
        "definition": "dissonant",
        "type": "adj.",
        "word": "Harsh or disagreeable in sound."
    },
    {
        "matched": false,
        "definition": "dissuade",
        "type": "v.",
        "word": "To change the purpose or alter the plans of by persuasion, counsel, or          "
    },
    {
        "matched": false,
        "definition": "dissuasion",
        "type": "n.",
        "word": "The act of changing the purpose of or altering the plans of through          "
    },
    {
        "matched": false,
        "definition": "disyllable",
        "type": "n.",
        "word": "A word of two syllables."
    },
    {
        "matched": false,
        "definition": "distemper",
        "type": "n.",
        "word": "A disease or malady."
    },
    {
        "matched": false,
        "definition": "distend",
        "type": "v.",
        "word": "To stretch out or expand in every direction."
    },
    {
        "matched": false,
        "definition": "distensible",
        "type": "adj.",
        "word": "Capable of being stretched out or expanded in every direction."
    },
    {
        "matched": false,
        "definition": "distention",
        "type": "n.",
        "word": "Expansion."
    },
    {
        "matched": false,
        "definition": "distill",
        "type": "v.",
        "word": "To extract or produce by vaporization and condensation."
    },
    {
        "matched": false,
        "definition": "distillation",
        "type": "n.",
        "word": "Separation of the more volatile parts of a substance from those less          "
    },
    {
        "matched": false,
        "definition": "distiller",
        "type": "n.",
        "word": "One occupied in the business of distilling alcoholic liquors."
    },
    {
        "matched": false,
        "definition": "distinction",
        "type": "n.",
        "word": "A note or designation of honor, officially recognizing superiority or          "
    },
    {
        "matched": false,
        "definition": "distort",
        "type": "v.",
        "word": "To twist into an unnatural or irregular form."
    },
    {
        "matched": false,
        "definition": "distrain",
        "type": "v.",
        "word": "To subject a person to distress."
    },
    {
        "matched": false,
        "definition": "distrainor",
        "type": "n.",
        "word": "One who subjects a person to distress."
    },
    {
        "matched": false,
        "definition": "distraught",
        "type": "adj.",
        "word": "Bewildered."
    },
    {
        "matched": false,
        "definition": "distrust",
        "type": "n.",
        "word": "Lack of confidence in the power, wisdom, or good intent of any person."
    },
    {
        "matched": false,
        "definition": "disunion",
        "type": "n.",
        "word": "Separation of relations or interests."
    },
    {
        "matched": false,
        "definition": "diurnal",
        "type": "adj.",
        "word": "Daily."
    },
    {
        "matched": false,
        "definition": "divagation",
        "type": "n.",
        "word": "Digression."
    },
    {
        "matched": false,
        "definition": "divergent",
        "type": "adj.",
        "word": "Tending in different directions."
    },
    {
        "matched": false,
        "definition": "diverse",
        "type": "adj.",
        "word": "Capable of various forms."
    },
    {
        "matched": false,
        "definition": "diversion",
        "type": "n.",
        "word": "Pastime."
    },
    {
        "matched": false,
        "definition": "diversity",
        "type": "n.",
        "word": "Dissimilitude."
    },
    {
        "matched": false,
        "definition": "divert",
        "type": "v.",
        "word": "To turn from the accustomed course or a line of action already established."
    },
    {
        "matched": false,
        "definition": "divertible",
        "type": "adj.",
        "word": "Able to be turned from the accustomed course or a line of action already          "
    },
    {
        "matched": false,
        "definition": "divest",
        "type": "v.",
        "word": "To strip, specifically of clothes, ornaments, or accouterments or disinvestment."
    },
    {
        "matched": false,
        "definition": "divination",
        "type": "n.",
        "word": "The pretended forecast of future events or discovery of what is lost or          "
    },
    {
        "matched": false,
        "definition": "divinity",
        "type": "n.",
        "word": "The quality or character of being godlike."
    },
    {
        "matched": false,
        "definition": "divisible",
        "type": "adj.",
        "word": "Capable of being separated into parts."
    },
    {
        "matched": false,
        "definition": "divisor",
        "type": "n.",
        "word": "That by which a number or quantity is divided."
    },
    {
        "matched": false,
        "definition": "divulge",
        "type": "v.",
        "word": "To tell or make known, as something previously private or secret."
    },
    {
        "matched": false,
        "definition": "divulgence",
        "type": "n.",
        "word": "A divulging."
    },
    {
        "matched": false,
        "definition": "docile",
        "type": "adj.",
        "word": "Easy to manage."
    },
    {
        "matched": false,
        "definition": "docket",
        "type": "n.",
        "word": "The registry of judgments of a court."
    },
    {
        "matched": false,
        "definition": "doe",
        "type": "n.",
        "word": "The female of the deer."
    },
    {
        "matched": false,
        "definition": "dogma",
        "type": "n.",
        "word": "A statement of religious faith or duty formulated by a body claiming authority."
    },
    {
        "matched": false,
        "definition": "dogmatic",
        "type": "adj.",
        "word": "Making statements without argument or evidence."
    },
    {
        "matched": false,
        "definition": "dogmatize",
        "type": "v.",
        "word": "To make positive assertions without supporting them by argument or evidence."
    },
    {
        "matched": false,
        "definition": "doleful",
        "type": "adj.",
        "word": "Melancholy."
    },
    {
        "matched": false,
        "definition": "dolesome",
        "type": "adj.",
        "word": "Melancholy."
    },
    {
        "matched": false,
        "definition": "dolor",
        "type": "n.",
        "word": "Lamentation."
    },
    {
        "matched": false,
        "definition": "dolorous",
        "type": "adj.",
        "word": "Expressing or causing sorrow or pain."
    },
    {
        "matched": false,
        "definition": "domain",
        "type": "n.",
        "word": "A sphere or field of action or interest."
    },
    {
        "matched": false,
        "definition": "domesticity",
        "type": "n.",
        "word": "Life in or fondness for one's home and family."
    },
    {
        "matched": false,
        "definition": "domicile",
        "type": "n.",
        "word": "The place where one lives."
    },
    {
        "matched": false,
        "definition": "dominance",
        "type": "n.",
        "word": "Ascendancy."
    },
    {
        "matched": false,
        "definition": "dominant",
        "type": "adj.",
        "word": "Conspicuously prominent."
    },
    {
        "matched": false,
        "definition": "dominate",
        "type": "v.",
        "word": "To influence controllingly."
    },
    {
        "matched": false,
        "definition": "domination",
        "type": "n.",
        "word": "Control by the exercise of power or constituted authority."
    },
    {
        "matched": false,
        "definition": "domineer",
        "type": "v.",
        "word": "To rule with insolence or unnecessary annoyance."
    },
    {
        "matched": false,
        "definition": "donate",
        "type": "v.",
        "word": "To bestow as a gift, especially for a worthy cause."
    },
    {
        "matched": false,
        "definition": "donator",
        "type": "n.",
        "word": "One who makes a donation or present."
    },
    {
        "matched": false,
        "definition": "donee",
        "type": "n.",
        "word": "A person to whom a donation is made."
    },
    {
        "matched": false,
        "definition": "donor",
        "type": "n.",
        "word": "One who makes a donation or present."
    },
    {
        "matched": false,
        "definition": "dormant",
        "type": "adj.",
        "word": "Being in a state of or resembling sleep."
    },
    {
        "matched": false,
        "definition": "doublet",
        "type": "n.",
        "word": "One of a pair of like things."
    },
    {
        "matched": false,
        "definition": "doubly",
        "type": "adv.",
        "word": "In twofold degree or extent."
    },
    {
        "matched": false,
        "definition": "dowry",
        "type": "n.",
        "word": "The property which a wife brings to her husband in marriage."
    },
    {
        "matched": false,
        "definition": "drachma",
        "type": "n.",
        "word": "A modern and an ancient Greek coin."
    },
    {
        "matched": false,
        "definition": "dragnet",
        "type": "n.",
        "word": "A net to be drawn along the bottom of the water."
    },
    {
        "matched": false,
        "definition": "dragoon",
        "type": "n.",
        "word": "In the British army, a cavalryman."
    },
    {
        "matched": false,
        "definition": "drainage",
        "type": "n.",
        "word": "The means of draining collectively, as a system of conduits, trenches, pipes,          "
    },
    {
        "matched": false,
        "definition": "dramatist",
        "type": "n.",
        "word": "One who writes plays."
    },
    {
        "matched": false,
        "definition": "dramatize",
        "type": "v.",
        "word": "To relate or represent in a dramatic or theatrical manner."
    },
    {
        "matched": false,
        "definition": "drastic",
        "type": "adj.",
        "word": "Acting vigorously."
    },
    {
        "matched": false,
        "definition": "drought",
        "type": "n.",
        "word": "Dry weather, especially when so long continued as to cause vegetation to          "
    },
    {
        "matched": false,
        "definition": "drowsy",
        "type": "adj.",
        "word": "Heavy with sleepiness."
    },
    {
        "matched": false,
        "definition": "drudgery",
        "type": "n.",
        "word": "Hard and constant work in any menial or dull occupation."
    },
    {
        "matched": false,
        "definition": "dubious",
        "type": "adj.",
        "word": "Doubtful."
    },
    {
        "matched": false,
        "definition": "duckling",
        "type": "n.",
        "word": "A young duck."
    },
    {
        "matched": false,
        "definition": "ductile",
        "type": "adj.",
        "word": "Capable of being drawn out, as into wire or a thread."
    },
    {
        "matched": false,
        "definition": "duet",
        "type": "n.",
        "word": "A composition for two voices or instruments."
    },
    {
        "matched": false,
        "definition": "dun",
        "type": "v.",
        "word": "To make a demand or repeated demands on for payment."
    },
    {
        "matched": false,
        "definition": "duplex",
        "type": "adj.",
        "word": "Having two parts."
    },
    {
        "matched": false,
        "definition": "duplicity",
        "type": "n.",
        "word": "Double-dealing."
    },
    {
        "matched": false,
        "definition": "durance",
        "type": "n.",
        "word": "Confinement."
    },
    {
        "matched": false,
        "definition": "duration",
        "type": "n.",
        "word": "The period of time during which anything lasts."
    },
    {
        "matched": false,
        "definition": "duteous",
        "type": "adj.",
        "word": "Showing submission to natural superiors."
    },
    {
        "matched": false,
        "definition": "dutiable",
        "type": "adj.",
        "word": "Subject to a duty, especially a customs duty."
    },
    {
        "matched": false,
        "definition": "dutiful",
        "type": "adj.",
        "word": "Obedient."
    },
    {
        "matched": false,
        "definition": "dwindle",
        "type": "v.",
        "word": "To diminish or become less."
    },
    {
        "matched": false,
        "definition": "dyne",
        "type": "n.",
        "word": "The force which, applied to a mass of one gram for 1 second, would give it a          "
    },
    {
        "matched": false,
        "definition": "earnest",
        "type": "adj.",
        "word": "Ardent in spirit and speech."
    },
    {
        "matched": false,
        "definition": "earthenware",
        "type": "n.",
        "word": "Anything made of clay and baked in a kiln or dried in the sun."
    },
    {
        "matched": false,
        "definition": "eatable",
        "type": "adj.",
        "word": "Edible."
    },
    {
        "matched": false,
        "definition": "ebullient",
        "type": "adj.",
        "word": "Showing enthusiasm or exhilaration of feeling."
    },
    {
        "matched": false,
        "definition": "eccentric",
        "type": "adj.",
        "word": "Peculiar."
    },
    {
        "matched": false,
        "definition": "eccentricity",
        "type": "n.",
        "word": "Idiosyncrasy."
    },
    {
        "matched": false,
        "definition": "eclipse",
        "type": "n.",
        "word": "The obstruction of a heavenly body by its entering into the shadow of another          "
    },
    {
        "matched": false,
        "definition": "economize",
        "type": "v.",
        "word": "To spend sparingly."
    },
    {
        "matched": false,
        "definition": "ecstasy",
        "type": "n.",
        "word": "Rapturous excitement or exaltation."
    },
    {
        "matched": false,
        "definition": "ecstatic",
        "type": "adj.",
        "word": "Enraptured."
    },
    {
        "matched": false,
        "definition": "edible",
        "type": "adj.",
        "word": "Suitable to be eaten."
    },
    {
        "matched": false,
        "definition": "edict",
        "type": "n.",
        "word": "That which is uttered or proclaimed by authority as a rule of action."
    },
    {
        "matched": false,
        "definition": "edify",
        "type": "v.",
        "word": "To build up, or strengthen, especially in morals or religion."
    },
    {
        "matched": false,
        "definition": "editorial",
        "type": "n.",
        "word": "An article in a periodical written by the editor and published as an official          "
    },
    {
        "matched": false,
        "definition": "educe",
        "type": "v.",
        "word": "To draw out."
    },
    {
        "matched": false,
        "definition": "efface",
        "type": "v.",
        "word": "To obliterate."
    },
    {
        "matched": false,
        "definition": "effect",
        "type": "n.",
        "word": "A consequence."
    },
    {
        "matched": false,
        "definition": "effective",
        "type": "adj.",
        "word": "Fit for a destined purpose."
    },
    {
        "matched": false,
        "definition": "effectual",
        "type": "adj.",
        "word": "Efficient."
    },
    {
        "matched": false,
        "definition": "effeminacy",
        "type": "n.",
        "word": "Womanishness."
    },
    {
        "matched": false,
        "definition": "effeminate",
        "type": "adj.",
        "word": "Having womanish traits or qualities."
    },
    {
        "matched": false,
        "definition": "effervesce",
        "type": "v.",
        "word": "To bubble up."
    },
    {
        "matched": false,
        "definition": "effervescent",
        "type": "adj.",
        "word": "Giving off bubbles of gas."
    },
    {
        "matched": false,
        "definition": "effete",
        "type": "adj.",
        "word": "Exhausted, as having performed its functions."
    },
    {
        "matched": false,
        "definition": "efficacious",
        "type": "adj.",
        "word": "Effective."
    },
    {
        "matched": false,
        "definition": "efficacy",
        "type": "n.",
        "word": "The power to produce an intended effect as shown in the production of it."
    },
    {
        "matched": false,
        "definition": "efficiency",
        "type": "n.",
        "word": "The state of possessing adequate skill or knowledge for the performance of a          "
    },
    {
        "matched": false,
        "definition": "efficient",
        "type": "adj.",
        "word": "Having and exercising the power to produce effects or results."
    },
    {
        "matched": false,
        "definition": "efflorescence",
        "type": "n.",
        "word": "The state of being flowery, or a flowery appearance."
    },
    {
        "matched": false,
        "definition": "efflorescent",
        "type": "adj.",
        "word": "Opening in flower."
    },
    {
        "matched": false,
        "definition": "effluvium",
        "type": "n.",
        "word": "A noxious or ill-smelling exhalation from decaying or putrefying matter."
    },
    {
        "matched": false,
        "definition": "effrontery",
        "type": "n.",
        "word": "Unblushing impudence."
    },
    {
        "matched": false,
        "definition": "effulgence",
        "type": "n.",
        "word": "Splendor."
    },
    {
        "matched": false,
        "definition": "effuse",
        "type": "v.",
        "word": "To pour forth."
    },
    {
        "matched": false,
        "definition": "effusion",
        "type": "n.",
        "word": "an outpouring."
    },
    {
        "matched": false,
        "definition": "egoism",
        "type": "n.",
        "word": "The theory that places man's chief good in the completeness of self."
    },
    {
        "matched": false,
        "definition": "egoist",
        "type": "n.",
        "word": "One who advocates or practices egoism."
    },
    {
        "matched": false,
        "definition": "egotism",
        "type": "n.",
        "word": "Self-conceit."
    },
    {
        "matched": false,
        "definition": "egotist",
        "type": "n.",
        "word": "One given to self-mention or who is constantly telling of his own views and          "
    },
    {
        "matched": false,
        "definition": "egregious",
        "type": "adj.",
        "word": "Extreme."
    },
    {
        "matched": false,
        "definition": "egress",
        "type": "n.",
        "word": "Any place of exit."
    },
    {
        "matched": false,
        "definition": "eject",
        "type": "v.",
        "word": "To expel."
    },
    {
        "matched": false,
        "definition": "elapse",
        "type": "v.",
        "word": "To quietly terminate: said of time."
    },
    {
        "matched": false,
        "definition": "elasticity",
        "type": "n.",
        "word": "That property of matter by which a body tends to return to a former shape          "
    },
    {
        "matched": false,
        "definition": "electrolysis",
        "type": "n.",
        "word": "The process of decomposing a chemical compound by the passage of an          "
    },
    {
        "matched": false,
        "definition": "electrotype",
        "type": "n.",
        "word": "A metallic copy of any surface, as a coin."
    },
    {
        "matched": false,
        "definition": "elegy",
        "type": "n.",
        "word": "A lyric poem lamenting the dead."
    },
    {
        "matched": false,
        "definition": "element",
        "type": "n.",
        "word": "A component or essential part."
    },
    {
        "matched": false,
        "definition": "elicit",
        "type": "v.",
        "word": "To educe or extract gradually or without violence."
    },
    {
        "matched": false,
        "definition": "eligible",
        "type": "adj.",
        "word": "Qualified for selection."
    },
    {
        "matched": false,
        "definition": "eliminate",
        "type": "v.",
        "word": "To separate and cast aside."
    },
    {
        "matched": false,
        "definition": "Elizabethan",
        "type": "adj.",
        "word": "Relating to Elizabeth, queen of England, or to her era."
    },
    {
        "matched": false,
        "definition": "elocution",
        "type": "n.",
        "word": "The art of correct intonation, inflection, and gesture in public speaking or          "
    },
    {
        "matched": false,
        "definition": "eloquent",
        "type": "adj.",
        "word": "Having the ability to express emotion or feeling in lofty and impassioned          "
    },
    {
        "matched": false,
        "definition": "elucidate",
        "type": "v.",
        "word": "To bring out more clearly the facts concerning."
    },
    {
        "matched": false,
        "definition": "elude",
        "type": "v.",
        "word": "To evade the search or pursuit of by dexterity or artifice."
    },
    {
        "matched": false,
        "definition": "elusion",
        "type": "n.",
        "word": "Evasion."
    },
    {
        "matched": false,
        "definition": "emaciate",
        "type": "v.",
        "word": "To waste away in flesh."
    },
    {
        "matched": false,
        "definition": "emanate",
        "type": "v.",
        "word": "To flow forth or proceed, as from some source."
    },
    {
        "matched": false,
        "definition": "emancipate",
        "type": "v.",
        "word": "To release from bondage."
    },
    {
        "matched": false,
        "definition": "embargo",
        "type": "n.",
        "word": "Authoritative stoppage of foreign commerce or of any special trade."
    },
    {
        "matched": false,
        "definition": "embark",
        "type": "v.",
        "word": "To make a beginning in some occupation or scheme."
    },
    {
        "matched": false,
        "definition": "embarrass",
        "type": "v.",
        "word": "To render flustered or agitated."
    },
    {
        "matched": false,
        "definition": "embellish",
        "type": "v.",
        "word": "To make beautiful or elegant by adding attractive or ornamental features."
    },
    {
        "matched": false,
        "definition": "embezzle",
        "type": "v.",
        "word": "To misappropriate secretly."
    },
    {
        "matched": false,
        "definition": "emblazon",
        "type": "v.",
        "word": "To set forth publicly or in glowing terms."
    },
    {
        "matched": false,
        "definition": "emblem",
        "type": "n.",
        "word": "A symbol."
    },
    {
        "matched": false,
        "definition": "embody",
        "type": "v.",
        "word": "To express, formulate, or exemplify in a concrete, compact or visible form."
    },
    {
        "matched": false,
        "definition": "embolden",
        "type": "v.",
        "word": "To give courage to."
    },
    {
        "matched": false,
        "definition": "embolism",
        "type": "n.",
        "word": "An obstruction or plugging up of an artery or other blood-vessel."
    },
    {
        "matched": false,
        "definition": "embroil",
        "type": "v.",
        "word": "To involve in dissension or strife."
    },
    {
        "matched": false,
        "definition": "emerge",
        "type": "v.",
        "word": "To come into view or into existence."
    },
    {
        "matched": false,
        "definition": "emergence",
        "type": "n.",
        "word": "A coming into view."
    },
    {
        "matched": false,
        "definition": "emergent",
        "type": "adj.",
        "word": "Coming into view."
    },
    {
        "matched": false,
        "definition": "emeritus",
        "type": "adj.",
        "word": "Retired from active service but retained to an honorary position."
    },
    {
        "matched": false,
        "definition": "emigrant",
        "type": "n.",
        "word": "One who moves from one place to settle in another."
    },
    {
        "matched": false,
        "definition": "emigrate",
        "type": "v.",
        "word": "To go from one country, state, or region for the purpose of settling or          "
    },
    {
        "matched": false,
        "definition": "eminence",
        "type": "n.",
        "word": "An elevated position with respect to rank, place, character, condition, etc."
    },
    {
        "matched": false,
        "definition": "eminent",
        "type": "adj.",
        "word": "High in station, merit, or esteem."
    },
    {
        "matched": false,
        "definition": "emit",
        "type": "v.",
        "word": "To send or give out."
    },
    {
        "matched": false,
        "definition": "emphasis",
        "type": "n.",
        "word": "Any special impressiveness added to an utterance or act, or stress laid upon          "
    },
    {
        "matched": false,
        "definition": "emphasize",
        "type": "v.",
        "word": "To articulate or enunciate with special impressiveness upon a word, or a          "
    },
    {
        "matched": false,
        "definition": "emphatic",
        "type": "adj.",
        "word": "Spoken with any special impressiveness laid upon an act, word, or set of          "
    },
    {
        "matched": false,
        "definition": "employee",
        "type": "n.",
        "word": "One who works for wages or a salary."
    },
    {
        "matched": false,
        "definition": "employer",
        "type": "n.",
        "word": "One who uses or engages the services of other persons for pay."
    },
    {
        "matched": false,
        "definition": "emporium",
        "type": "n.",
        "word": "A bazaar or shop."
    },
    {
        "matched": false,
        "definition": "empower",
        "type": "v.",
        "word": "To delegate authority to."
    },
    {
        "matched": false,
        "definition": "emulate",
        "type": "v.",
        "word": "To imitate with intent to equal or surpass."
    },
    {
        "matched": false,
        "definition": "enact",
        "type": "v.",
        "word": "To make into law, as by legislative act."
    },
    {
        "matched": false,
        "definition": "enamor",
        "type": "v.",
        "word": "To inspire with ardent love."
    },
    {
        "matched": false,
        "definition": "encamp",
        "type": "v.",
        "word": "To pitch tents for a resting-place."
    },
    {
        "matched": false,
        "definition": "encomium",
        "type": "n.",
        "word": "A formal or discriminating expression of praise."
    },
    {
        "matched": false,
        "definition": "encompass",
        "type": "v.",
        "word": "To encircle."
    },
    {
        "matched": false,
        "definition": "encore",
        "type": "n.",
        "word": "The call for a repetition, as of some part of a play or performance."
    },
    {
        "matched": false,
        "definition": "encourage",
        "type": "v.",
        "word": "To inspire with courage, hope, or strength of mind."
    },
    {
        "matched": false,
        "definition": "encroach",
        "type": "v.",
        "word": "To invade partially or insidiously and appropriate the possessions of another."
    },
    {
        "matched": false,
        "definition": "encumber",
        "type": "v.",
        "word": "To impede with obstacles."
    },
    {
        "matched": false,
        "definition": "encyclical",
        "type": "adj.",
        "word": "Intended for general circulation."
    },
    {
        "matched": false,
        "definition": "encyclopedia",
        "type": "n.",
        "word": "A work containing information on subjects, or exhaustive of one subject."
    },
    {
        "matched": false,
        "definition": "endanger",
        "type": "v.",
        "word": "To expose to peril."
    },
    {
        "matched": false,
        "definition": "endear",
        "type": "v.",
        "word": "To cause to be loved."
    },
    {
        "matched": false,
        "definition": "endemic",
        "type": "adj.",
        "word": "Peculiar to some specified country or people."
    },
    {
        "matched": false,
        "definition": "endue",
        "type": "v.",
        "word": "To endow with some quality, gift, or grace, usually spiritual."
    },
    {
        "matched": false,
        "definition": "endurable",
        "type": "adj.",
        "word": "Tolerable."
    },
    {
        "matched": false,
        "definition": "endurance",
        "type": "n.",
        "word": "The ability to suffer pain, distress, hardship, or stress of any kind without          "
    },
    {
        "matched": false,
        "definition": "energetic",
        "type": "adj.",
        "word": "Working vigorously."
    },
    {
        "matched": false,
        "definition": "enervate",
        "type": "v.",
        "word": "To render ineffective or inoperative."
    },
    {
        "matched": false,
        "definition": "enfeeble",
        "type": "v.",
        "word": "To debilitate."
    },
    {
        "matched": false,
        "definition": "enfranchise",
        "type": "v.",
        "word": "To endow with a privilege, especially with the right to vote."
    },
    {
        "matched": false,
        "definition": "engender",
        "type": "v.",
        "word": "To produce."
    },
    {
        "matched": false,
        "definition": "engrave",
        "type": "v.",
        "word": "To cut or carve in or upon some surface."
    },
    {
        "matched": false,
        "definition": "engross",
        "type": "v.",
        "word": "To occupy completely."
    },
    {
        "matched": false,
        "definition": "enhance",
        "type": "v.",
        "word": "To intensify."
    },
    {
        "matched": false,
        "definition": "enigma",
        "type": "n.",
        "word": "A riddle."
    },
    {
        "matched": false,
        "definition": "enjoin",
        "type": "v.",
        "word": "To command."
    },
    {
        "matched": false,
        "definition": "enkindle",
        "type": "v.",
        "word": "To set on fire."
    },
    {
        "matched": false,
        "definition": "enlighten",
        "type": "v.",
        "word": "To cause to see clearly."
    },
    {
        "matched": false,
        "definition": "enlist",
        "type": "v.",
        "word": "To enter voluntarily the military service by formal enrollment."
    },
    {
        "matched": false,
        "definition": "enmity",
        "type": "n.",
        "word": "Hatred."
    },
    {
        "matched": false,
        "definition": "ennoble",
        "type": "v.",
        "word": "To dignify."
    },
    {
        "matched": false,
        "definition": "enormity",
        "type": "n.",
        "word": "Immensity."
    },
    {
        "matched": false,
        "definition": "enormous",
        "type": "adj.",
        "word": "Gigantic."
    },
    {
        "matched": false,
        "definition": "enrage",
        "type": "v.",
        "word": "To infuriate."
    },
    {
        "matched": false,
        "definition": "enrapture",
        "type": "v.",
        "word": "To delight extravagantly or intensely."
    },
    {
        "matched": false,
        "definition": "enshrine",
        "type": "v.",
        "word": "To keep sacred."
    },
    {
        "matched": false,
        "definition": "ensnare",
        "type": "v.",
        "word": "To entrap."
    },
    {
        "matched": false,
        "definition": "entail",
        "type": "v.",
        "word": "To involve; necessitate."
    },
    {
        "matched": false,
        "definition": "entangle",
        "type": "v.",
        "word": "To involve in difficulties, confusion, or complications."
    },
    {
        "matched": false,
        "definition": "enthrall",
        "type": "v.",
        "word": "To bring or hold under any overmastering influence."
    },
    {
        "matched": false,
        "definition": "enthrone",
        "type": "v.",
        "word": "To invest with sovereign power."
    },
    {
        "matched": false,
        "definition": "enthuse",
        "type": "v.",
        "word": "To yield to or display intense and rapturous feeling."
    },
    {
        "matched": false,
        "definition": "enthusiastic",
        "type": "adj.",
        "word": "Full of zeal and fervor."
    },
    {
        "matched": false,
        "definition": "entirety",
        "type": "n.",
        "word": "A complete thing."
    },
    {
        "matched": false,
        "definition": "entomology",
        "type": "n.",
        "word": "The branch of zoology that treats of insects."
    },
    {
        "matched": false,
        "definition": "entrails",
        "type": "n.",
        "word": "pl. The internal parts of an animal."
    },
    {
        "matched": false,
        "definition": "entreaty",
        "type": "n.",
        "word": "An earnest request."
    },
    {
        "matched": false,
        "definition": "entree",
        "type": "n.",
        "word": "The act of entering."
    },
    {
        "matched": false,
        "definition": "entrench",
        "type": "v.",
        "word": "To fortify or protect, as with a trench or ditch and wall."
    },
    {
        "matched": false,
        "definition": "entwine",
        "type": "v.",
        "word": "To interweave."
    },
    {
        "matched": false,
        "definition": "enumerate",
        "type": "v.",
        "word": "To name one by one."
    },
    {
        "matched": false,
        "definition": "epic",
        "type": "n.",
        "word": "A poem celebrating in formal verse the mythical achievements of great personages,          "
    },
    {
        "matched": false,
        "definition": "epicure",
        "type": "n.",
        "word": "One who cultivates a delicate taste for eating and drinking."
    },
    {
        "matched": false,
        "definition": "Epicurean",
        "type": "adj.",
        "word": "Indulging, ministering, or pertaining to daintiness of appetite."
    },
    {
        "matched": false,
        "definition": "epicycle",
        "type": "n.",
        "word": "A circle that rolls upon the external or internal circumference of another          "
    },
    {
        "matched": false,
        "definition": "epicycloid",
        "type": "n.",
        "word": "A curve traced by a point on the circumference of a circle which rolls upon          "
    },
    {
        "matched": false,
        "definition": "epidemic",
        "type": "n.",
        "word": "Wide-spread occurrence of a disease in a certain region."
    },
    {
        "matched": false,
        "definition": "epidermis",
        "type": "n.",
        "word": "The outer skin."
    },
    {
        "matched": false,
        "definition": "epigram",
        "type": "n.",
        "word": "A pithy phrasing of a shrewd observation."
    },
    {
        "matched": false,
        "definition": "epilogue",
        "type": "n.",
        "word": "The close of a narrative or dramatic poem."
    },
    {
        "matched": false,
        "definition": "epiphany",
        "type": "n.",
        "word": "Any appearance or bodily manifestation of a deity."
    },
    {
        "matched": false,
        "definition": "episode",
        "type": "n.",
        "word": "An incident or story in a literary work, separable from yet growing out of it."
    },
    {
        "matched": false,
        "definition": "epitaph",
        "type": "n.",
        "word": "An inscription on a tomb or monument in honor or in memory of the dead."
    },
    {
        "matched": false,
        "definition": "epithet",
        "type": "n.",
        "word": "Word used adjectivally to describe some quality or attribute of is objects, as          "
    },
    {
        "matched": false,
        "definition": "epitome",
        "type": "n.",
        "word": "A simplified representation."
    },
    {
        "matched": false,
        "definition": "epizootic",
        "type": "adj.",
        "word": "Prevailing among animals."
    },
    {
        "matched": false,
        "definition": "epoch",
        "type": "n.",
        "word": "A interval of time, memorable for extraordinary events."
    },
    {
        "matched": false,
        "definition": "epode",
        "type": "n.",
        "word": "A species of lyric poems."
    },
    {
        "matched": false,
        "definition": "equalize",
        "type": "v.",
        "word": "To render uniform."
    },
    {
        "matched": false,
        "definition": "equanimity",
        "type": "n.",
        "word": "Evenness of mind or temper."
    },
    {
        "matched": false,
        "definition": "equestrian",
        "type": "adj.",
        "word": "Pertaining to horses or horsemanship."
    },
    {
        "matched": false,
        "definition": "equilibrium",
        "type": "n.",
        "word": "A state of balance."
    },
    {
        "matched": false,
        "definition": "equitable",
        "type": "adj.",
        "word": "Characterized by fairness."
    },
    {
        "matched": false,
        "definition": "equity",
        "type": "n.",
        "word": "Fairness or impartiality."
    },
    {
        "matched": false,
        "definition": "equivalent",
        "type": "adj.",
        "word": "Equal in value, force, meaning, or the like."
    },
    {
        "matched": false,
        "definition": "equivocal",
        "type": "adj.",
        "word": "Ambiguous."
    },
    {
        "matched": false,
        "definition": "equivocate",
        "type": "v.",
        "word": "To use words of double meaning."
    },
    {
        "matched": false,
        "definition": "eradicate",
        "type": "v.",
        "word": "To destroy thoroughly."
    },
    {
        "matched": false,
        "definition": "errant",
        "type": "adj.",
        "word": "Roving or wandering, as in search of adventure or opportunity for gallant          "
    },
    {
        "matched": false,
        "definition": "erratic",
        "type": "adj.",
        "word": "Irregular."
    },
    {
        "matched": false,
        "definition": "erroneous",
        "type": "adj.",
        "word": "Incorrect."
    },
    {
        "matched": false,
        "definition": "erudite",
        "type": "adj.",
        "word": "Very-learned."
    },
    {
        "matched": false,
        "definition": "erudition",
        "type": "n.",
        "word": "Extensive knowledge of literature, history, language, etc."
    },
    {
        "matched": false,
        "definition": "eschew",
        "type": "v.",
        "word": "To keep clear of."
    },
    {
        "matched": false,
        "definition": "espy",
        "type": "v.",
        "word": "To keep close watch."
    },
    {
        "matched": false,
        "definition": "esquire",
        "type": "n.",
        "word": "A title of dignity, office, or courtesy."
    },
    {
        "matched": false,
        "definition": "essence",
        "type": "n.",
        "word": "That which makes a thing to be what it is."
    },
    {
        "matched": false,
        "definition": "esthetic",
        "type": "adj.",
        "word": "Pertaining to beauty, taste, or the fine arts."
    },
    {
        "matched": false,
        "definition": "estimable",
        "type": "adj.",
        "word": "Worthy of respect."
    },
    {
        "matched": false,
        "definition": "estrange",
        "type": "v.",
        "word": "To alienate."
    },
    {
        "matched": false,
        "definition": "estuary",
        "type": "n.",
        "word": "A wide lower part of a tidal river."
    },
    {
        "matched": false,
        "definition": "et cetera",
        "type": "Latin.",
        "word": "And so forth."
    },
    {
        "matched": false,
        "definition": "eugenic",
        "type": "adj.",
        "word": "Relating to the development and improvement of race."
    },
    {
        "matched": false,
        "definition": "eulogize",
        "type": "v.",
        "word": "To speak or write a laudation of a person's life or character."
    },
    {
        "matched": false,
        "definition": "eulogy",
        "type": "n.",
        "word": "A spoken or written laudation of a person's life or character."
    },
    {
        "matched": false,
        "definition": "euphemism",
        "type": "n.",
        "word": "A figure of speech by which a phrase less offensive is substituted."
    },
    {
        "matched": false,
        "definition": "euphonious",
        "type": "adj.",
        "word": "Characterized by agreeableness of sound."
    },
    {
        "matched": false,
        "definition": "euphony",
        "type": "n.",
        "word": "Agreeableness of sound."
    },
    {
        "matched": false,
        "definition": "eureka",
        "type": "Greek.",
        "word": "I have found it."
    },
    {
        "matched": false,
        "definition": "evade",
        "type": "v.",
        "word": "To avoid by artifice."
    },
    {
        "matched": false,
        "definition": "evanesce",
        "type": "v.",
        "word": "To vanish gradually."
    },
    {
        "matched": false,
        "definition": "evanescent",
        "type": "adj.",
        "word": "Fleeting."
    },
    {
        "matched": false,
        "definition": "evangelical",
        "type": "adj.",
        "word": "Seeking the conversion of sinners."
    },
    {
        "matched": false,
        "definition": "evangelist",
        "type": "n.",
        "word": "A preacher who goes from place to place holding services."
    },
    {
        "matched": false,
        "definition": "evasion",
        "type": "n.",
        "word": "Escape."
    },
    {
        "matched": false,
        "definition": "eventual",
        "type": "adj.",
        "word": "Ultimate."
    },
    {
        "matched": false,
        "definition": "evert",
        "type": "v.",
        "word": "To turn inside out."
    },
    {
        "matched": false,
        "definition": "evict",
        "type": "v.",
        "word": "To dispossess pursuant to judicial decree."
    },
    {
        "matched": false,
        "definition": "evidential",
        "type": "adj.",
        "word": "Indicative."
    },
    {
        "matched": false,
        "definition": "evince",
        "type": "v.",
        "word": "To make manifest or evident."
    },
    {
        "matched": false,
        "definition": "evoke",
        "type": "v.",
        "word": "To call or summon forth."
    },
    {
        "matched": false,
        "definition": "evolution",
        "type": "n.",
        "word": "Development or growth."
    },
    {
        "matched": false,
        "definition": "evolve",
        "type": "v.",
        "word": "To unfold or expand."
    },
    {
        "matched": false,
        "definition": "exacerbate",
        "type": "v.",
        "word": "To make more sharp, severe, or virulent."
    },
    {
        "matched": false,
        "definition": "exaggerate",
        "type": "v.",
        "word": "To overstate."
    },
    {
        "matched": false,
        "definition": "exasperate",
        "type": "v.",
        "word": "To excite great anger in."
    },
    {
        "matched": false,
        "definition": "excavate",
        "type": "v.",
        "word": "To remove by digging or scooping out."
    },
    {
        "matched": false,
        "definition": "exceed",
        "type": "v.",
        "word": "To go beyond, as in measure, quality, value, action, power, skill, etc."
    },
    {
        "matched": false,
        "definition": "excel",
        "type": "v.",
        "word": "To be superior or distinguished."
    },
    {
        "matched": false,
        "definition": "excellence",
        "type": "n.",
        "word": "Possession of eminently or unusually good qualities."
    },
    {
        "matched": false,
        "definition": "excellency",
        "type": "n.",
        "word": "A title of honor bestowed upon various high officials."
    },
    {
        "matched": false,
        "definition": "excellent",
        "type": "adj.",
        "word": "Possessing distinguished merit."
    },
    {
        "matched": false,
        "definition": "excerpt",
        "type": "n.",
        "word": "An extract or selection from written or printed matter."
    },
    {
        "matched": false,
        "definition": "excess",
        "type": "n.",
        "word": "That which passes the ordinary, proper, or required limit, measure, or          "
    },
    {
        "matched": false,
        "definition": "excitable",
        "type": "adj.",
        "word": "Nervously high-strung."
    },
    {
        "matched": false,
        "definition": "excitation",
        "type": "n.",
        "word": "Intensified emotion or action."
    },
    {
        "matched": false,
        "definition": "exclamation",
        "type": "n.",
        "word": "An abrupt or emphatic expression of thought or of feeling."
    },
    {
        "matched": false,
        "definition": "exclude",
        "type": "v.",
        "word": "To shut out purposely or forcibly."
    },
    {
        "matched": false,
        "definition": "exclusion",
        "type": "n.",
        "word": "Non-admission."
    },
    {
        "matched": false,
        "definition": "excrescence",
        "type": "n.",
        "word": "Any unnatural addition, outgrowth, or development."
    },
    {
        "matched": false,
        "definition": "excretion",
        "type": "n.",
        "word": "The getting rid of waste matter."
    },
    {
        "matched": false,
        "definition": "excruciate",
        "type": "v.",
        "word": "To inflict severe pain or agony upon."
    },
    {
        "matched": false,
        "definition": "excursion",
        "type": "n.",
        "word": "A journey."
    },
    {
        "matched": false,
        "definition": "excusable",
        "type": "adj.",
        "word": "Justifiable."
    },
    {
        "matched": false,
        "definition": "execrable",
        "type": "adj.",
        "word": "Abominable."
    },
    {
        "matched": false,
        "definition": "execration",
        "type": "n.",
        "word": "An accursed thing."
    },
    {
        "matched": false,
        "definition": "executor",
        "type": "n.",
        "word": "A person nominated by the will of another to execute the will."
    },
    {
        "matched": false,
        "definition": "exegesis",
        "type": "n.",
        "word": "Biblical exposition or interpretation."
    },
    {
        "matched": false,
        "definition": "exemplar",
        "type": "n.",
        "word": "A model, pattern, or original to be copied or imitated."
    },
    {
        "matched": false,
        "definition": "exemplary",
        "type": "adj.",
        "word": "Fitted to serve as a model or example worthy of imitation."
    },
    {
        "matched": false,
        "definition": "exemplify",
        "type": "v.",
        "word": "To show by example."
    },
    {
        "matched": false,
        "definition": "exempt",
        "type": "adj.",
        "word": "Free, clear, or released, as from some liability, or restriction affecting          "
    },
    {
        "matched": false,
        "definition": "exert",
        "type": "v.",
        "word": "To make an effort."
    },
    {
        "matched": false,
        "definition": "exhale",
        "type": "v.",
        "word": "To breathe forth."
    },
    {
        "matched": false,
        "definition": "exhaust",
        "type": "v.",
        "word": "To empty by draining off the contents."
    },
    {
        "matched": false,
        "definition": "exhaustible",
        "type": "adj.",
        "word": "Causing or tending to cause exhaustion."
    },
    {
        "matched": false,
        "definition": "exhaustion",
        "type": "n.",
        "word": "Deprivation of strength or energy."
    },
    {
        "matched": false,
        "definition": "exhaustive",
        "type": "adj.",
        "word": "Thorough and complete in execution."
    },
    {
        "matched": false,
        "definition": "exhilarate",
        "type": "v.",
        "word": "To fill with high or cheerful spirits."
    },
    {
        "matched": false,
        "definition": "exhume",
        "type": "v.",
        "word": "To dig out of the earth (what has been buried)."
    },
    {
        "matched": false,
        "definition": "exigency",
        "type": "n.",
        "word": "A critical period or condition."
    },
    {
        "matched": false,
        "definition": "exigent",
        "type": "adj.",
        "word": "Urgent."
    },
    {
        "matched": false,
        "definition": "existence",
        "type": "n.",
        "word": "Possession or continuance of being."
    },
    {
        "matched": false,
        "definition": "exit",
        "type": "n.",
        "word": "A way or passage out."
    },
    {
        "matched": false,
        "definition": "exodus",
        "type": "n.",
        "word": "A going forth or departure from a place or country, especially of many people."
    },
    {
        "matched": false,
        "definition": "exonerate",
        "type": "v.",
        "word": "To relieve or vindicate from accusation, imputation, or blame."
    },
    {
        "matched": false,
        "definition": "exorbitance",
        "type": "n.",
        "word": "Extravagance or enormity."
    },
    {
        "matched": false,
        "definition": "exorbitant",
        "type": "adj.",
        "word": "Going beyond usual and proper limits."
    },
    {
        "matched": false,
        "definition": "exorcise",
        "type": "v.",
        "word": "To cast or drive out by religious or magical means."
    },
    {
        "matched": false,
        "definition": "exotic",
        "type": "adj.",
        "word": "Foreign."
    },
    {
        "matched": false,
        "definition": "expand",
        "type": "v.",
        "word": "To increase in range or scope."
    },
    {
        "matched": false,
        "definition": "expanse",
        "type": "n.",
        "word": "A continuous area or stretch."
    },
    {
        "matched": false,
        "definition": "expansion",
        "type": "n.",
        "word": "Increase of amount, size, scope, or the like."
    },
    {
        "matched": false,
        "definition": "expatriate",
        "type": "v.",
        "word": "To drive from one's own country."
    },
    {
        "matched": false,
        "definition": "expect",
        "type": "v.",
        "word": "To look forward to as certain or probable."
    },
    {
        "matched": false,
        "definition": "expectancy",
        "type": "n.",
        "word": "The act or state of looking forward to as certain or probable."
    },
    {
        "matched": false,
        "definition": "expectorate",
        "type": "v.",
        "word": "To cough up and spit forth."
    },
    {
        "matched": false,
        "definition": "expediency",
        "type": "n.",
        "word": "Fitness to meet the requirements of a particular case."
    },
    {
        "matched": false,
        "definition": "expedient",
        "type": "adj.",
        "word": "Contributing to personal advantage."
    },
    {
        "matched": false,
        "definition": "expedite",
        "type": "v.",
        "word": "To hasten the movement or progress of."
    },
    {
        "matched": false,
        "definition": "expeditious",
        "type": "adj.",
        "word": "Speedy."
    },
    {
        "matched": false,
        "definition": "expend",
        "type": "v.",
        "word": "To spend."
    },
    {
        "matched": false,
        "definition": "expense",
        "type": "n.",
        "word": "The laying out or expending or money or other resources, as time or strength."
    },
    {
        "matched": false,
        "definition": "expiate",
        "type": "v.",
        "word": "To make satisfaction or amends for."
    },
    {
        "matched": false,
        "definition": "explicate",
        "type": "v.",
        "word": "To clear from involvement."
    },
    {
        "matched": false,
        "definition": "explicit",
        "type": "adj.",
        "word": "Definite."
    },
    {
        "matched": false,
        "definition": "explode",
        "type": "v.",
        "word": "To cause to burst in pieces by force from within."
    },
    {
        "matched": false,
        "definition": "explosion",
        "type": "n.",
        "word": "A sudden and violent outbreak."
    },
    {
        "matched": false,
        "definition": "explosive",
        "type": "adj.",
        "word": "Pertaining to a sudden and violent outbreak."
    },
    {
        "matched": false,
        "definition": "exposition",
        "type": "n.",
        "word": "Formal presentation."
    },
    {
        "matched": false,
        "definition": "expository",
        "type": "adj.",
        "word": "Pertaining to a formal presentation."
    },
    {
        "matched": false,
        "definition": "expostulate",
        "type": "v.",
        "word": "To discuss."
    },
    {
        "matched": false,
        "definition": "exposure",
        "type": "n.",
        "word": "An open situation or position in relation to the sun, elements, or points of          "
    },
    {
        "matched": false,
        "definition": "expressive",
        "type": "adj.",
        "word": "Full of meaning."
    },
    {
        "matched": false,
        "definition": "expulsion",
        "type": "n.",
        "word": "Forcible ejection."
    },
    {
        "matched": false,
        "definition": "extant",
        "type": "adj.",
        "word": "Still existing and known."
    },
    {
        "matched": false,
        "definition": "extemporaneous",
        "type": "adj.",
        "word": "Done or made without much or any preparation."
    },
    {
        "matched": false,
        "definition": "extempore",
        "type": "adv.",
        "word": "Without studied or special preparation."
    },
    {
        "matched": false,
        "definition": "extensible",
        "type": "adj.",
        "word": "Capable of being thrust out."
    },
    {
        "matched": false,
        "definition": "extension",
        "type": "n.",
        "word": "A reaching or stretching out, as in space, time or scope."
    },
    {
        "matched": false,
        "definition": "extensive",
        "type": "adj.",
        "word": "Extended widely in space, time, or scope."
    },
    {
        "matched": false,
        "definition": "extensor",
        "type": "n.",
        "word": "A muscle that causes extension."
    },
    {
        "matched": false,
        "definition": "extenuate",
        "type": "v.",
        "word": "To diminish the gravity or importance of."
    },
    {
        "matched": false,
        "definition": "exterior",
        "type": "n.",
        "word": "That which is outside."
    },
    {
        "matched": false,
        "definition": "external",
        "type": "n.",
        "word": "Anything relating or belonging to the outside."
    },
    {
        "matched": false,
        "definition": "extinct",
        "type": "adj.",
        "word": "Being no longer in existence."
    },
    {
        "matched": false,
        "definition": "extinguish",
        "type": "v.",
        "word": "To render extinct."
    },
    {
        "matched": false,
        "definition": "extol",
        "type": "v.",
        "word": "To praise in the highest terms."
    },
    {
        "matched": false,
        "definition": "extort",
        "type": "v.",
        "word": "To obtain by violence, threats, compulsion, or the subjection of another to some          "
    },
    {
        "matched": false,
        "definition": "extortion",
        "type": "n.",
        "word": "The practice of obtaining by violence or compulsion."
    },
    {
        "matched": false,
        "definition": "extradite",
        "type": "v.",
        "word": "To surrender the custody of."
    },
    {
        "matched": false,
        "definition": "extradition",
        "type": "n.",
        "word": "The surrender by a government of a person accused of crime to the justice          "
    },
    {
        "matched": false,
        "definition": "extrajudicial",
        "type": "adj.",
        "word": "Happening out of court."
    },
    {
        "matched": false,
        "definition": "extraneous",
        "type": "adj.",
        "word": "Having no essential relation to a subject."
    },
    {
        "matched": false,
        "definition": "extraordinary",
        "type": "adj.",
        "word": "Unusual."
    },
    {
        "matched": false,
        "definition": "extravagance",
        "type": "n.",
        "word": "Undue expenditure of money."
    },
    {
        "matched": false,
        "definition": "extravagant",
        "type": "adj.",
        "word": "Needlessly free or lavish in expenditure."
    },
    {
        "matched": false,
        "definition": "extremist",
        "type": "n.",
        "word": "One who supports extreme measures or holds extreme views."
    },
    {
        "matched": false,
        "definition": "extremity",
        "type": "n.",
        "word": "The utmost point, side, or border, or that farthest removed from a mean          "
    },
    {
        "matched": false,
        "definition": "extricate",
        "type": "v.",
        "word": "Disentangle."
    },
    {
        "matched": false,
        "definition": "extrude",
        "type": "v.",
        "word": "To drive out or away."
    },
    {
        "matched": false,
        "definition": "exuberance",
        "type": "n.",
        "word": "Rich supply."
    },
    {
        "matched": false,
        "definition": "exuberant",
        "type": "adj.",
        "word": "Marked by great plentifulness."
    },
    {
        "matched": false,
        "definition": "fabricate",
        "type": "v.",
        "word": "To invent fancifully or falsely."
    },
    {
        "matched": false,
        "definition": "fabulous",
        "type": "adj.",
        "word": "Incredible."
    },
    {
        "matched": false,
        "definition": "facet",
        "type": "n.",
        "word": "One of the small triangular plane surfaces of a diamond or other gem."
    },
    {
        "matched": false,
        "definition": "facetious",
        "type": "adj.",
        "word": "Amusing."
    },
    {
        "matched": false,
        "definition": "facial",
        "type": "adj.",
        "word": "Pertaining to the face."
    },
    {
        "matched": false,
        "definition": "facile",
        "type": "adj.",
        "word": "Not difficult to do."
    },
    {
        "matched": false,
        "definition": "facilitate",
        "type": "v.",
        "word": "To make more easy."
    },
    {
        "matched": false,
        "definition": "facility",
        "type": "n.",
        "word": "Ease."
    },
    {
        "matched": false,
        "definition": "facsimile",
        "type": "n.",
        "word": "An exact copy or reproduction."
    },
    {
        "matched": false,
        "definition": "faction",
        "type": "n.",
        "word": "A number of persons combined for a common purpose."
    },
    {
        "matched": false,
        "definition": "factious",
        "type": "adj.",
        "word": "Turbulent."
    },
    {
        "matched": false,
        "definition": "fallacious",
        "type": "adj.",
        "word": "Illogical."
    },
    {
        "matched": false,
        "definition": "fallacy",
        "type": "n.",
        "word": "Any unsound or delusive mode of reasoning, or anything based on such reasoning."
    },
    {
        "matched": false,
        "definition": "fallible",
        "type": "adj.",
        "word": "Capable of erring."
    },
    {
        "matched": false,
        "definition": "fallow",
        "type": "n.",
        "word": "Land broken up and left to become mellow or to rest."
    },
    {
        "matched": false,
        "definition": "famish",
        "type": "v.",
        "word": "To suffer extremity of hunger or thirst."
    },
    {
        "matched": false,
        "definition": "fanatic",
        "type": "n.",
        "word": "A religious zealot."
    },
    {
        "matched": false,
        "definition": "fancier",
        "type": "n.",
        "word": "One having a taste for or interest in special objects."
    },
    {
        "matched": false,
        "definition": "fanciless",
        "type": "adj.",
        "word": "Unimaginative."
    },
    {
        "matched": false,
        "definition": "fastidious",
        "type": "adj.",
        "word": "Hard to please."
    },
    {
        "matched": false,
        "definition": "fathom",
        "type": "n.",
        "word": "A measure of length, 6 feet."
    },
    {
        "matched": false,
        "definition": "fatuous",
        "type": "adj.",
        "word": "Idiotic"
    },
    {
        "matched": false,
        "definition": "faulty",
        "type": "adj.",
        "word": "Imperfect."
    },
    {
        "matched": false,
        "definition": "faun",
        "type": "n.",
        "word": "One of a class of deities of the woods and herds represented as half human, with          "
    },
    {
        "matched": false,
        "definition": "fawn",
        "type": "n.",
        "word": "A young deer."
    },
    {
        "matched": false,
        "definition": "fealty",
        "type": "n.",
        "word": "Loyalty."
    },
    {
        "matched": false,
        "definition": "feasible",
        "type": "adj.",
        "word": "That may be done, performed, or effected; practicable."
    },
    {
        "matched": false,
        "definition": "federate",
        "type": "v.",
        "word": "To league together."
    },
    {
        "matched": false,
        "definition": "feint",
        "type": "n.",
        "word": "Any sham, pretense, or deceptive movement."
    },
    {
        "matched": false,
        "definition": "felicitate",
        "type": "v.",
        "word": "To wish joy or happiness to, especially in view of a coming event."
    },
    {
        "matched": false,
        "definition": "felicity",
        "type": "n.",
        "word": "A state of well-founded happiness."
    },
    {
        "matched": false,
        "definition": "felon",
        "type": "n.",
        "word": "A criminal or depraved person."
    },
    {
        "matched": false,
        "definition": "felonious",
        "type": "adj.",
        "word": "Showing criminal or evil purpose."
    },
    {
        "matched": false,
        "definition": "felony",
        "type": "n.",
        "word": "One of the highest class of offenses, and punishable with death or imprisonment."
    },
    {
        "matched": false,
        "definition": "feminine",
        "type": "adj.",
        "word": "Characteristic of woman or womankind."
    },
    {
        "matched": false,
        "definition": "fernery",
        "type": "n.",
        "word": "A place in which ferns are grown."
    },
    {
        "matched": false,
        "definition": "ferocious",
        "type": "adj.",
        "word": "Of a wild, fierce, and savage nature."
    },
    {
        "matched": false,
        "definition": "ferocity",
        "type": "n.",
        "word": "Savageness."
    },
    {
        "matched": false,
        "definition": "fervent",
        "type": "adj.",
        "word": "Ardent in feeling."
    },
    {
        "matched": false,
        "definition": "fervid",
        "type": "adj.",
        "word": "Intense."
    },
    {
        "matched": false,
        "definition": "fervor",
        "type": "n.",
        "word": "Ardor or intensity of feeling."
    },
    {
        "matched": false,
        "definition": "festal",
        "type": "adj.",
        "word": "Joyous."
    },
    {
        "matched": false,
        "definition": "festive",
        "type": "adj.",
        "word": "Merry."
    },
    {
        "matched": false,
        "definition": "fete",
        "type": "n.",
        "word": "A festival or feast."
    },
    {
        "matched": false,
        "definition": "fetus",
        "type": "n.",
        "word": "The young in the womb or in the egg."
    },
    {
        "matched": false,
        "definition": "feudal",
        "type": "adj.",
        "word": "Pertaining to the relation of lord and vassal."
    },
    {
        "matched": false,
        "definition": "feudalism",
        "type": "n.",
        "word": "The feudal system."
    },
    {
        "matched": false,
        "definition": "fez",
        "type": "n.",
        "word": "A brimless felt cap in the shape of a truncated cone, usually red with a black          "
    },
    {
        "matched": false,
        "definition": "fiasco",
        "type": "n.",
        "word": "A complete or humiliating failure."
    },
    {
        "matched": false,
        "definition": "fickle",
        "type": "adj.",
        "word": "Unduly changeable in feeling, judgment, or purpose."
    },
    {
        "matched": false,
        "definition": "fictitious",
        "type": "adj.",
        "word": "Created or formed by the imagination."
    },
    {
        "matched": false,
        "definition": "fidelity",
        "type": "n.",
        "word": "Loyalty."
    },
    {
        "matched": false,
        "definition": "fiducial",
        "type": "adj.",
        "word": "Indicative of faith or trust."
    },
    {
        "matched": false,
        "definition": "fief",
        "type": "n.",
        "word": "A landed estate held under feudal tenure."
    },
    {
        "matched": false,
        "definition": "filibuster",
        "type": "n.",
        "word": "One who attempts to obstruct legislation."
    },
    {
        "matched": false,
        "definition": "finale",
        "type": "n.",
        "word": "Concluding performance."
    },
    {
        "matched": false,
        "definition": "finality",
        "type": "n.",
        "word": "The state or quality of being final or complete."
    },
    {
        "matched": false,
        "definition": "finally",
        "type": "adv.",
        "word": "At last."
    },
    {
        "matched": false,
        "definition": "financial",
        "type": "adj.",
        "word": "Monetary."
    },
    {
        "matched": false,
        "definition": "financier",
        "type": "n.",
        "word": "One skilled in or occupied with financial affairs or operations."
    },
    {
        "matched": false,
        "definition": "finery",
        "type": "n.",
        "word": "That which is used to decorate the person or dress."
    },
    {
        "matched": false,
        "definition": "finesse",
        "type": "n.",
        "word": "Subtle contrivance used to gain a point."
    },
    {
        "matched": false,
        "definition": "finite",
        "type": "adj.",
        "word": "Limited."
    },
    {
        "matched": false,
        "definition": "fiscal",
        "type": "adj.",
        "word": "Pertaining to the treasury or public finances of a government."
    },
    {
        "matched": false,
        "definition": "fishmonger",
        "type": "n.",
        "word": "One who sells fish."
    },
    {
        "matched": false,
        "definition": "fissure",
        "type": "n.",
        "word": "A crack or crack-like depression."
    },
    {
        "matched": false,
        "definition": "fitful",
        "type": "adj.",
        "word": "Spasmodic."
    },
    {
        "matched": false,
        "definition": "fixture",
        "type": "n.",
        "word": "One who or that which is expected to remain permanently in its position."
    },
    {
        "matched": false,
        "definition": "flag-officer",
        "type": "n.",
        "word": "The captain of a flag-ship."
    },
    {
        "matched": false,
        "definition": "flagrant",
        "type": "adj.",
        "word": "Openly scandalous."
    },
    {
        "matched": false,
        "definition": "flamboyant",
        "type": "adj.",
        "word": "Characterized by extravagance and in general by want of good taste."
    },
    {
        "matched": false,
        "definition": "flatulence",
        "type": "n.",
        "word": "Accumulation of gas in the stomach and bowels."
    },
    {
        "matched": false,
        "definition": "flection",
        "type": "n.",
        "word": "The act of bending."
    },
    {
        "matched": false,
        "definition": "fledgling",
        "type": "n.",
        "word": "A young bird."
    },
    {
        "matched": false,
        "definition": "flexible",
        "type": "adj.",
        "word": "Pliable."
    },
    {
        "matched": false,
        "definition": "flimsy",
        "type": "adj.",
        "word": "Thin and weak."
    },
    {
        "matched": false,
        "definition": "flippant",
        "type": "adj.",
        "word": "Having a light, pert, trifling disposition."
    },
    {
        "matched": false,
        "definition": "floe",
        "type": "n.",
        "word": "A collection of tabular masses of floating polar ice."
    },
    {
        "matched": false,
        "definition": "flora",
        "type": "n.",
        "word": "The aggregate of plants growing without cultivation in a district."
    },
    {
        "matched": false,
        "definition": "floral",
        "type": "adj.",
        "word": "Pertaining to flowers."
    },
    {
        "matched": false,
        "definition": "florid",
        "type": "adj.",
        "word": "Flushed with red."
    },
    {
        "matched": false,
        "definition": "florist",
        "type": "n.",
        "word": "A dealer in flowers."
    },
    {
        "matched": false,
        "definition": "fluctuate",
        "type": "v.",
        "word": "To pass backward and forward irregularly from one state or degree to another."
    },
    {
        "matched": false,
        "definition": "fluctuation",
        "type": "n.",
        "word": "Frequent irregular change back and forth from one state or degree to          "
    },
    {
        "matched": false,
        "definition": "flue",
        "type": "n.",
        "word": "A smoke-duct in a chimney."
    },
    {
        "matched": false,
        "definition": "fluent",
        "type": "adj.",
        "word": "Having a ready or easy flow of words or ideas."
    },
    {
        "matched": false,
        "definition": "fluential",
        "type": "adj.",
        "word": "Pertaining to streams."
    },
    {
        "matched": false,
        "definition": "flux",
        "type": "n.",
        "word": "A state of constant movement, change, or renewal."
    },
    {
        "matched": false,
        "definition": "foggy",
        "type": "adj.",
        "word": "Obscure."
    },
    {
        "matched": false,
        "definition": "foible",
        "type": "n.",
        "word": "A personal weakness or failing."
    },
    {
        "matched": false,
        "definition": "foist",
        "type": "v.",
        "word": "To palm off."
    },
    {
        "matched": false,
        "definition": "foliage",
        "type": "n.",
        "word": "Any growth of leaves."
    },
    {
        "matched": false,
        "definition": "folio",
        "type": "n.",
        "word": "A sheet of paper folded once, or of a size adapted to folding once."
    },
    {
        "matched": false,
        "definition": "folk-lore",
        "type": "n.",
        "word": "The traditions, beliefs, and customs of the common people."
    },
    {
        "matched": false,
        "definition": "fondle",
        "type": "v.",
        "word": "To handle tenderly and lovingly."
    },
    {
        "matched": false,
        "definition": "foolery",
        "type": "n.",
        "word": "Folly."
    },
    {
        "matched": false,
        "definition": "foot-note",
        "type": "n.",
        "word": "A note of explanation or comment at the foot of a page or column."
    },
    {
        "matched": false,
        "definition": "foppery",
        "type": "n.",
        "word": "Dandyism."
    },
    {
        "matched": false,
        "definition": "foppish",
        "type": "adj.",
        "word": "Characteristic of one who is unduly devoted to dress and the niceties of          "
    },
    {
        "matched": false,
        "definition": "forbearance",
        "type": "n.",
        "word": "Patient endurance or toleration of offenses."
    },
    {
        "matched": false,
        "definition": "forby",
        "type": "adv.",
        "word": "Besides."
    },
    {
        "matched": false,
        "definition": "forcible",
        "type": "adj.",
        "word": "Violent."
    },
    {
        "matched": false,
        "definition": "forecourt",
        "type": "n.",
        "word": "A court opening directly from the street."
    },
    {
        "matched": false,
        "definition": "forejudge",
        "type": "v.",
        "word": "To judge of before hearing evidence."
    },
    {
        "matched": false,
        "definition": "forepeak",
        "type": "n.",
        "word": "The extreme forward part of a ship's hold, under the lowest deck."
    },
    {
        "matched": false,
        "definition": "foreshore",
        "type": "n.",
        "word": "That part of a shore uncovered at low tide."
    },
    {
        "matched": false,
        "definition": "forebode",
        "type": "v.",
        "word": "To be an omen or warning sign of, especially of evil."
    },
    {
        "matched": false,
        "definition": "forecast",
        "type": "v.",
        "word": "To predict."
    },
    {
        "matched": false,
        "definition": "forecastle",
        "type": "n.",
        "word": "That part of the upper deck of a ship forward of the after fore-shrouds."
    },
    {
        "matched": false,
        "definition": "foreclose",
        "type": "v.",
        "word": "To bar by judicial proceedings the equitable right of a mortgagor to redeem          "
    },
    {
        "matched": false,
        "definition": "forefather",
        "type": "n.",
        "word": "An ancestor."
    },
    {
        "matched": false,
        "definition": "forego",
        "type": "v.",
        "word": "To deny oneself the pleasure or profit of."
    },
    {
        "matched": false,
        "definition": "foreground",
        "type": "n.",
        "word": "That part of a landscape or picture situated or represented as nearest the          "
    },
    {
        "matched": false,
        "definition": "forehead",
        "type": "n.",
        "word": "The upper part of the face, between the eyes and the hair."
    },
    {
        "matched": false,
        "definition": "foreign",
        "type": "adj.",
        "word": "Belonging to, situated in, or derived from another country."
    },
    {
        "matched": false,
        "definition": "foreigner",
        "type": "n.",
        "word": "A citizen of a foreign country."
    },
    {
        "matched": false,
        "definition": "foreknowledge",
        "type": "n.",
        "word": "Prescience."
    },
    {
        "matched": false,
        "definition": "foreman",
        "type": "n.",
        "word": "The head man."
    },
    {
        "matched": false,
        "definition": "foreordain",
        "type": "v.",
        "word": "To predetermine."
    },
    {
        "matched": false,
        "definition": "foreordination",
        "type": "n.",
        "word": "Predestination."
    },
    {
        "matched": false,
        "definition": "forerun",
        "type": "v.",
        "word": "To go before as introducing or ushering in."
    },
    {
        "matched": false,
        "definition": "foresail",
        "type": "n.",
        "word": "A square sail."
    },
    {
        "matched": false,
        "definition": "foresee",
        "type": "v.",
        "word": "To discern beforehand."
    },
    {
        "matched": false,
        "definition": "foresight",
        "type": "n.",
        "word": "Provision against harm or need."
    },
    {
        "matched": false,
        "definition": "foretell",
        "type": "v.",
        "word": "To predict."
    },
    {
        "matched": false,
        "definition": "forethought",
        "type": "n.",
        "word": "Premeditation."
    },
    {
        "matched": false,
        "definition": "forfeit",
        "type": "v.",
        "word": "To lose possession of through failure to fulfill some obligation."
    },
    {
        "matched": false,
        "definition": "forfend",
        "type": "v.",
        "word": "To ward off."
    },
    {
        "matched": false,
        "definition": "forgery",
        "type": "n.",
        "word": "Counterfeiting."
    },
    {
        "matched": false,
        "definition": "forgo",
        "type": "v.",
        "word": "To deny oneself."
    },
    {
        "matched": false,
        "definition": "formation",
        "type": "n.",
        "word": "Relative disposition of parts."
    },
    {
        "matched": false,
        "definition": "formidable",
        "type": "adj.",
        "word": "Difficult to accomplish."
    },
    {
        "matched": false,
        "definition": "formula",
        "type": "n.",
        "word": "Fixed rule or set form."
    },
    {
        "matched": false,
        "definition": "forswear",
        "type": "v.",
        "word": "To renounce upon oath."
    },
    {
        "matched": false,
        "definition": "forte",
        "type": "n.",
        "word": "A strong point."
    },
    {
        "matched": false,
        "definition": "forth",
        "type": "adv.",
        "word": "Into notice or view."
    },
    {
        "matched": false,
        "definition": "forthright",
        "type": "adv.",
        "word": "With directness."
    },
    {
        "matched": false,
        "definition": "fortify",
        "type": "v.",
        "word": "To provide with defensive works."
    },
    {
        "matched": false,
        "definition": "fortitude",
        "type": "n.",
        "word": "Patient courage."
    },
    {
        "matched": false,
        "definition": "foursome",
        "type": "adj.",
        "word": "Consisting of four."
    },
    {
        "matched": false,
        "definition": "fracture",
        "type": "n.",
        "word": "A break."
    },
    {
        "matched": false,
        "definition": "fragile",
        "type": "adj.",
        "word": "Easily broken."
    },
    {
        "matched": false,
        "definition": "frailty",
        "type": "n.",
        "word": "Liability to be broken or destroyed."
    },
    {
        "matched": false,
        "definition": "fragile",
        "type": "adj.",
        "word": "Capable of being broken."
    },
    {
        "matched": false,
        "definition": "frankincense",
        "type": "n.",
        "word": "A gum or resin which on burning yields aromatic fumes."
    },
    {
        "matched": false,
        "definition": "frantic",
        "type": "adj.",
        "word": "Frenzied."
    },
    {
        "matched": false,
        "definition": "fraternal",
        "type": "adj.",
        "word": "Brotherly."
    },
    {
        "matched": false,
        "definition": "fraudulence",
        "type": "n.",
        "word": "Deceitfulness."
    },
    {
        "matched": false,
        "definition": "fraudulent",
        "type": "adj.",
        "word": "Counterfeit."
    },
    {
        "matched": false,
        "definition": "fray",
        "type": "v.",
        "word": "To fret at the edge so as to loosen or break the threads."
    },
    {
        "matched": false,
        "definition": "freemason",
        "type": "n.",
        "word": "A member of an ancient secret fraternity originally confined to skilled          "
    },
    {
        "matched": false,
        "definition": "freethinker",
        "type": "n.",
        "word": "One who rejects authority or inspiration in religion."
    },
    {
        "matched": false,
        "definition": "free trade",
        "type": "n.",
        "word": "Commerce unrestricted by tariff or customs."
    },
    {
        "matched": false,
        "definition": "frequency",
        "type": "n.",
        "word": "The comparative number of any kind of occurrences within a given time or          "
    },
    {
        "matched": false,
        "definition": "fresco",
        "type": "n.",
        "word": "The art of painting on a surface of plaster, particularly on walls and ceilings."
    },
    {
        "matched": false,
        "definition": "freshness",
        "type": "n.",
        "word": "The state, quality, or degree of being fresh."
    },
    {
        "matched": false,
        "definition": "fretful",
        "type": "adj.",
        "word": "Disposed to peevishness."
    },
    {
        "matched": false,
        "definition": "frightful",
        "type": "adj.",
        "word": "Apt to induce terror or alarm."
    },
    {
        "matched": false,
        "definition": "frigid",
        "type": "adj.",
        "word": "Lacking warmth."
    },
    {
        "matched": false,
        "definition": "frigidarium",
        "type": "n.",
        "word": "A room kept at a low temperature for preserving fruits, meat, etc."
    },
    {
        "matched": false,
        "definition": "frivolity",
        "type": "n.",
        "word": "A trifling act, thought, saying, or practice."
    },
    {
        "matched": false,
        "definition": "frivolous",
        "type": "adj.",
        "word": "Trivial."
    },
    {
        "matched": false,
        "definition": "frizz",
        "type": "v.",
        "word": "To give a crinkled, fluffy appearance to."
    },
    {
        "matched": false,
        "definition": "frizzle",
        "type": "v.",
        "word": "To cause to crinkle or curl, as the hair."
    },
    {
        "matched": false,
        "definition": "frolicsome",
        "type": "adj.",
        "word": "Prankish."
    },
    {
        "matched": false,
        "definition": "frontier",
        "type": "n.",
        "word": "The part of a nation's territory that abuts upon another country."
    },
    {
        "matched": false,
        "definition": "frowzy",
        "type": "adj.",
        "word": "Slovenly in appearance."
    },
    {
        "matched": false,
        "definition": "frugal",
        "type": "adj.",
        "word": "Economical."
    },
    {
        "matched": false,
        "definition": "fruition",
        "type": "n.",
        "word": "Fulfillment."
    },
    {
        "matched": false,
        "definition": "fugacious",
        "type": "adj.",
        "word": "Fleeting."
    },
    {
        "matched": false,
        "definition": "fulcrum",
        "type": "n.",
        "word": "The support on or against which a lever rests, or the point about which it          "
    },
    {
        "matched": false,
        "definition": "fulminate",
        "type": "v.",
        "word": "To cause to explode."
    },
    {
        "matched": false,
        "definition": "fulsome",
        "type": "adj.",
        "word": "Offensive from excess of praise or commendation."
    },
    {
        "matched": false,
        "definition": "fumigate",
        "type": "v.",
        "word": "To subject to the action of smoke or fumes, especially for disinfection."
    },
    {
        "matched": false,
        "definition": "functionary",
        "type": "n.",
        "word": "An official."
    },
    {
        "matched": false,
        "definition": "fundamental",
        "type": "adj.",
        "word": "Basal."
    },
    {
        "matched": false,
        "definition": "fungible",
        "type": "adj.",
        "word": "That may be measured, counted, or weighed."
    },
    {
        "matched": false,
        "definition": "fungous",
        "type": "adj.",
        "word": "Spongy."
    },
    {
        "matched": false,
        "definition": "fungus",
        "type": "n.",
        "word": "A plant destitute of chlorophyll, as a mushroom."
    },
    {
        "matched": false,
        "definition": "furbish",
        "type": "v.",
        "word": "To restore brightness or beauty to."
    },
    {
        "matched": false,
        "definition": "furlong",
        "type": "n.",
        "word": "A measure, one-eighth of a mile."
    },
    {
        "matched": false,
        "definition": "furlough",
        "type": "n.",
        "word": "A temporary absence of a soldier or sailor by permission of the commanding          "
    },
    {
        "matched": false,
        "definition": "furrier",
        "type": "n.",
        "word": "A dealer in or maker of fur goods."
    },
    {
        "matched": false,
        "definition": "further",
        "type": "adj.",
        "word": "More distant or advanced."
    },
    {
        "matched": false,
        "definition": "furtherance",
        "type": "n.",
        "word": "Advancement."
    },
    {
        "matched": false,
        "definition": "furtive",
        "type": "adj.",
        "word": "Stealthy or sly, like the actions of a thief."
    },
    {
        "matched": false,
        "definition": "fuse",
        "type": "v.",
        "word": "To unite or blend as by melting together."
    },
    {
        "matched": false,
        "definition": "fusible",
        "type": "adj.",
        "word": "Capable of being melted by heat."
    },
    {
        "matched": false,
        "definition": "futile",
        "type": "adj.",
        "word": "Of no avail or effect."
    },
    {
        "matched": false,
        "definition": "futurist",
        "type": "n.",
        "word": "A person of expectant temperament."
    },
    {
        "matched": false,
        "definition": "gauge",
        "type": "n.",
        "word": "An instrument for measuring."
    },
    {
        "matched": false,
        "definition": "gaiety",
        "type": "n.",
        "word": "Festivity."
    },
    {
        "matched": false,
        "definition": "gaily",
        "type": "adv.",
        "word": "Merrily."
    },
    {
        "matched": false,
        "definition": "gait",
        "type": "n.",
        "word": "Carriage of the body in going."
    },
    {
        "matched": false,
        "definition": "gallant",
        "type": "adj.",
        "word": "Possessing a brave or chivalrous spirit."
    },
    {
        "matched": false,
        "definition": "galore",
        "type": "adj.",
        "word": "Abundant."
    },
    {
        "matched": false,
        "definition": "galvanic",
        "type": "adj.",
        "word": "Pertaining or relating to electricity produced by chemical action."
    },
    {
        "matched": false,
        "definition": "galvanism",
        "type": "n.",
        "word": "Current electricity, especially that arising from chemical action."
    },
    {
        "matched": false,
        "definition": "galvanize",
        "type": "v.",
        "word": "To imbue with life or animation."
    },
    {
        "matched": false,
        "definition": "gamble",
        "type": "v.",
        "word": "To risk money or other possession on an event, chance, or contingency."
    },
    {
        "matched": false,
        "definition": "gambol",
        "type": "n.",
        "word": "Playful leaping or frisking."
    },
    {
        "matched": false,
        "definition": "gamester",
        "type": "n.",
        "word": "A gambler."
    },
    {
        "matched": false,
        "definition": "gamut",
        "type": "n.",
        "word": "The whole range or sequence."
    },
    {
        "matched": false,
        "definition": "garnish",
        "type": "v.",
        "word": "In cookery, to surround with additions for embellishment."
    },
    {
        "matched": false,
        "definition": "garrison",
        "type": "n.",
        "word": "The military force stationed in a fort, town, or other place for its defense."
    },
    {
        "matched": false,
        "definition": "garrote",
        "type": "v.",
        "word": "To execute by strangling."
    },
    {
        "matched": false,
        "definition": "garrulous",
        "type": "adj.",
        "word": "Given to constant trivial talking."
    },
    {
        "matched": false,
        "definition": "gaseous",
        "type": "adj.",
        "word": "Light and unsubstantial."
    },
    {
        "matched": false,
        "definition": "gastric",
        "type": "adj.",
        "word": "Of, pertaining to, or near the stomach."
    },
    {
        "matched": false,
        "definition": "gastritis",
        "type": "n.",
        "word": "Inflammation of the stomach."
    },
    {
        "matched": false,
        "definition": "gastronomy",
        "type": "n.",
        "word": "The art of preparing and serving appetizing food."
    },
    {
        "matched": false,
        "definition": "gendarme",
        "type": "n.",
        "word": "In continental Europe, particularly in France, a uniformed and armed police          "
    },
    {
        "matched": false,
        "definition": "genealogy",
        "type": "n.",
        "word": "A list, in the order of succession, of ancestors and their descendants."
    },
    {
        "matched": false,
        "definition": "genealogist",
        "type": "n.",
        "word": "A tracer of pedigrees."
    },
    {
        "matched": false,
        "definition": "generality",
        "type": "n.",
        "word": "The principal portion."
    },
    {
        "matched": false,
        "definition": "generalize",
        "type": "v.",
        "word": "To draw general inferences."
    },
    {
        "matched": false,
        "definition": "generally",
        "type": "adv.",
        "word": "Ordinarily."
    },
    {
        "matched": false,
        "definition": "generate",
        "type": "v.",
        "word": "To produce or cause to be."
    },
    {
        "matched": false,
        "definition": "generic",
        "type": "adj.",
        "word": "Noting a genus or kind; opposed to specific."
    },
    {
        "matched": false,
        "definition": "generosity",
        "type": "n.",
        "word": "A disposition to give liberally or to bestow favors heartily."
    },
    {
        "matched": false,
        "definition": "genesis",
        "type": "n.",
        "word": "Creation."
    },
    {
        "matched": false,
        "definition": "geniality",
        "type": "n.",
        "word": "Warmth and kindliness of disposition."
    },
    {
        "matched": false,
        "definition": "genital",
        "type": "adj.",
        "word": "Of or pertaining to the animal reproductive organs."
    },
    {
        "matched": false,
        "definition": "genitive",
        "type": "adj.",
        "word": "Indicating source, origin, possession, or the like."
    },
    {
        "matched": false,
        "definition": "genteel",
        "type": "adj.",
        "word": "Well-bred or refined."
    },
    {
        "matched": false,
        "definition": "gentile",
        "type": "adj.",
        "word": "Belonging to a people not Jewish."
    },
    {
        "matched": false,
        "definition": "geology",
        "type": "n.",
        "word": "The department of natural science that treats of the constitution and structure          "
    },
    {
        "matched": false,
        "definition": "germane",
        "type": "adj.",
        "word": "Relevant."
    },
    {
        "matched": false,
        "definition": "germinate",
        "type": "v.",
        "word": "To begin to develop into an embryo or higher form."
    },
    {
        "matched": false,
        "definition": "gestation",
        "type": "n.",
        "word": "Pregnancy."
    },
    {
        "matched": false,
        "definition": "gesticulate",
        "type": "v.",
        "word": "To make gestures or motions, as in speaking, or in place of speech."
    },
    {
        "matched": false,
        "definition": "gesture",
        "type": "n.",
        "word": "A movement or action of the hands or face, expressive of some idea or emotion."
    },
    {
        "matched": false,
        "definition": "ghastly",
        "type": "adj.",
        "word": "Hideous."
    },
    {
        "matched": false,
        "definition": "gibe",
        "type": "v.",
        "word": "To utter taunts or reproaches."
    },
    {
        "matched": false,
        "definition": "giddy",
        "type": "adj.",
        "word": "Affected with a whirling or swimming sensation in the head."
    },
    {
        "matched": false,
        "definition": "gigantic",
        "type": "adj.",
        "word": "Tremendous."
    },
    {
        "matched": false,
        "definition": "giver",
        "type": "n.",
        "word": "One who gives, in any sense."
    },
    {
        "matched": false,
        "definition": "glacial",
        "type": "adj.",
        "word": "Icy, or icily cold."
    },
    {
        "matched": false,
        "definition": "glacier",
        "type": "n.",
        "word": "A field or stream of ice."
    },
    {
        "matched": false,
        "definition": "gladden",
        "type": "v.",
        "word": "To make joyous."
    },
    {
        "matched": false,
        "definition": "glazier",
        "type": "n.",
        "word": "One who cuts and fits panes of glass, as for windows."
    },
    {
        "matched": false,
        "definition": "glimmer",
        "type": "n.",
        "word": "A faint, wavering, unsteady light."
    },
    {
        "matched": false,
        "definition": "glimpse",
        "type": "n.",
        "word": "A momentary look."
    },
    {
        "matched": false,
        "definition": "globose",
        "type": "adj.",
        "word": "Spherical."
    },
    {
        "matched": false,
        "definition": "globular",
        "type": "adj.",
        "word": "Spherical."
    },
    {
        "matched": false,
        "definition": "glorious",
        "type": "adj.",
        "word": "Of excellence and splendor."
    },
    {
        "matched": false,
        "definition": "glutinous",
        "type": "adj.",
        "word": "Sticky."
    },
    {
        "matched": false,
        "definition": "gluttonous",
        "type": "adj.",
        "word": "Given to excess in eating."
    },
    {
        "matched": false,
        "definition": "gnash",
        "type": "v.",
        "word": "To grind or strike the teeth together, as from rage."
    },
    {
        "matched": false,
        "definition": "Gordian knot",
        "type": "n.",
        "word": "Any difficulty the only issue out of which is by bold or unusual manners."
    },
    {
        "matched": false,
        "definition": "gourmand",
        "type": "n.",
        "word": "A connoisseur in the delicacies of the table."
    },
    {
        "matched": false,
        "definition": "gosling",
        "type": "n.",
        "word": "A young goose."
    },
    {
        "matched": false,
        "definition": "gossamer",
        "type": "adj.",
        "word": "Flimsy."
    },
    {
        "matched": false,
        "definition": "gourd",
        "type": "n.",
        "word": "A melon, pumpkin, squash, or some similar fruit having a hard rind."
    },
    {
        "matched": false,
        "definition": "graceless",
        "type": "adj.",
        "word": "Ungracious."
    },
    {
        "matched": false,
        "definition": "gradation",
        "type": "n.",
        "word": "A step, degree, rank, or relative position in an order or series."
    },
    {
        "matched": false,
        "definition": "gradient",
        "type": "adj.",
        "word": "Moving or advancing by steps."
    },
    {
        "matched": false,
        "definition": "granary",
        "type": "n.",
        "word": "A storehouse for grain after it is thrashed or husked."
    },
    {
        "matched": false,
        "definition": "grandeur",
        "type": "n.",
        "word": "The quality of being grand or admirably great."
    },
    {
        "matched": false,
        "definition": "grandiloquent",
        "type": "adj.",
        "word": "Speaking in or characterized by a pompous or bombastic style."
    },
    {
        "matched": false,
        "definition": "grandiose",
        "type": "adj.",
        "word": "Having an imposing style or effect."
    },
    {
        "matched": false,
        "definition": "grantee",
        "type": "n.",
        "word": "The person to whom property is transferred by deed."
    },
    {
        "matched": false,
        "definition": "grantor",
        "type": "n.",
        "word": "The maker of a deed."
    },
    {
        "matched": false,
        "definition": "granular",
        "type": "adj.",
        "word": "Composed of small grains or particles."
    },
    {
        "matched": false,
        "definition": "granulate",
        "type": "v.",
        "word": "To form into grains or small particles."
    },
    {
        "matched": false,
        "definition": "granule",
        "type": "n.",
        "word": "A small grain or particle."
    },
    {
        "matched": false,
        "definition": "grapple",
        "type": "v.",
        "word": "To take hold of."
    },
    {
        "matched": false,
        "definition": "gratification",
        "type": "n.",
        "word": "Satisfaction."
    },
    {
        "matched": false,
        "definition": "gratify",
        "type": "v.",
        "word": "To please, as by satisfying a physical or mental desire or need."
    },
    {
        "matched": false,
        "definition": "gratuitous",
        "type": "adj.",
        "word": "Voluntarily."
    },
    {
        "matched": false,
        "definition": "gratuity",
        "type": "n.",
        "word": "That which is given without demand or claim. Tip."
    },
    {
        "matched": false,
        "definition": "gravity",
        "type": "n.",
        "word": "Seriousness."
    },
    {
        "matched": false,
        "definition": "gregarious",
        "type": "adj.",
        "word": "Not habitually solitary or living alone."
    },
    {
        "matched": false,
        "definition": "grenadier",
        "type": "n.",
        "word": "A member of a regiment composed of men of great stature."
    },
    {
        "matched": false,
        "definition": "grief",
        "type": "n.",
        "word": "Sorrow."
    },
    {
        "matched": false,
        "definition": "grievance",
        "type": "n.",
        "word": "That which oppresses, injures, or causes grief and at the same time a sense          "
    },
    {
        "matched": false,
        "definition": "grievous",
        "type": "adj.",
        "word": "Creating affliction."
    },
    {
        "matched": false,
        "definition": "grimace",
        "type": "n.",
        "word": "A distortion of the features, occasioned by some feeling of pain, disgust, etc."
    },
    {
        "matched": false,
        "definition": "grindstone",
        "type": "n.",
        "word": "A flat circular stone, used for sharpening tools."
    },
    {
        "matched": false,
        "definition": "grisly",
        "type": "adj.",
        "word": "Fear-inspiring."
    },
    {
        "matched": false,
        "definition": "grotesque",
        "type": "adj.",
        "word": "Incongruously composed or ill-proportioned."
    },
    {
        "matched": false,
        "definition": "grotto",
        "type": "n.",
        "word": "A small cavern."
    },
    {
        "matched": false,
        "definition": "ground",
        "type": "n.",
        "word": "A pavement or floor or any supporting surface on which one may walk."
    },
    {
        "matched": false,
        "definition": "guess",
        "type": "n.",
        "word": "Surmise."
    },
    {
        "matched": false,
        "definition": "guile",
        "type": "n.",
        "word": "Duplicity."
    },
    {
        "matched": false,
        "definition": "guileless",
        "type": "adj.",
        "word": "Frank."
    },
    {
        "matched": false,
        "definition": "guinea",
        "type": "n.",
        "word": "An English monetary unit."
    },
    {
        "matched": false,
        "definition": "guise",
        "type": "n.",
        "word": "The external appearance as produced by garb or costume."
    },
    {
        "matched": false,
        "definition": "gullible",
        "type": "adj.",
        "word": "Credulous."
    },
    {
        "matched": false,
        "definition": "gumption",
        "type": "n.",
        "word": "Common sense."
    },
    {
        "matched": false,
        "definition": "gusto",
        "type": "n.",
        "word": "Keen enjoyment."
    },
    {
        "matched": false,
        "definition": "guy",
        "type": "n.",
        "word": "Stay-rope."
    },
    {
        "matched": false,
        "definition": "guzzle",
        "type": "v.",
        "word": "To swallow greedily or hastily; gulp."
    },
    {
        "matched": false,
        "definition": "gynecocracy",
        "type": "n.",
        "word": "Female supremacy."
    },
    {
        "matched": false,
        "definition": "gynecology",
        "type": "n.",
        "word": "The science that treats of the functions and diseases peculiar to women."
    },
    {
        "matched": false,
        "definition": "gyrate",
        "type": "v.",
        "word": "To revolve."
    },
    {
        "matched": false,
        "definition": "gyroscope",
        "type": "n.",
        "word": "An instrument for illustrating the laws of rotation."
    },
    {
        "matched": false,
        "definition": "habitable",
        "type": "adj.",
        "word": "Fit to be dwelt in."
    },
    {
        "matched": false,
        "definition": "habitant",
        "type": "n.",
        "word": "Dweller."
    },
    {
        "matched": false,
        "definition": "habitual",
        "type": "adj.",
        "word": "According to usual practice."
    },
    {
        "matched": false,
        "definition": "habitude",
        "type": "n.",
        "word": "Customary relation or association."
    },
    {
        "matched": false,
        "definition": "hackney",
        "type": "v.",
        "word": "To make stale or trite by repetition."
    },
    {
        "matched": false,
        "definition": "haggard",
        "type": "adj.",
        "word": "Worn and gaunt in appearance."
    },
    {
        "matched": false,
        "definition": "halcyon",
        "type": "adj.",
        "word": "Calm."
    },
    {
        "matched": false,
        "definition": "hale",
        "type": "adj.",
        "word": "Of sound and vigorous health."
    },
    {
        "matched": false,
        "definition": "handwriting",
        "type": "n.",
        "word": "Penmanship."
    },
    {
        "matched": false,
        "definition": "hanger-on",
        "type": "n.",
        "word": "A parasite."
    },
    {
        "matched": false,
        "definition": "happy-go-lucky",
        "type": "adj.",
        "word": "Improvident."
    },
    {
        "matched": false,
        "definition": "harangue",
        "type": "n.",
        "word": "A tirade."
    },
    {
        "matched": false,
        "definition": "harass",
        "type": "v.",
        "word": "To trouble with importunities, cares, or annoyances."
    },
    {
        "matched": false,
        "definition": "harbinger",
        "type": "n.",
        "word": "One who or that which foreruns and announces the coming of any person or          "
    },
    {
        "matched": false,
        "definition": "hard-hearted",
        "type": "adj.",
        "word": "Lacking pity or sympathy."
    },
    {
        "matched": false,
        "definition": "hardihood",
        "type": "n.",
        "word": "Foolish daring."
    },
    {
        "matched": false,
        "definition": "harmonious",
        "type": "adj.",
        "word": "Concordant in sound."
    },
    {
        "matched": false,
        "definition": "havoc",
        "type": "n.",
        "word": "Devastation."
    },
    {
        "matched": false,
        "definition": "hawthorn",
        "type": "n.",
        "word": "A thorny shrub much used in England for hedges."
    },
    {
        "matched": false,
        "definition": "hazard",
        "type": "n.",
        "word": "Risk."
    },
    {
        "matched": false,
        "definition": "head first",
        "type": "adv.",
        "word": "Precipitately, as in diving."
    },
    {
        "matched": false,
        "definition": "head foremost",
        "type": "adv.",
        "word": "Precipitately, as in diving."
    },
    {
        "matched": false,
        "definition": "heartrending",
        "type": "adj.",
        "word": "Very depressing."
    },
    {
        "matched": false,
        "definition": "heathenish",
        "type": "adj.",
        "word": "Irreligious."
    },
    {
        "matched": false,
        "definition": "heedless",
        "type": "adj.",
        "word": "Thoughtless."
    },
    {
        "matched": false,
        "definition": "heifer",
        "type": "n.",
        "word": "A young cow."
    },
    {
        "matched": false,
        "definition": "heinous",
        "type": "adj.",
        "word": "Odiously sinful."
    },
    {
        "matched": false,
        "definition": "hemorrhage",
        "type": "n.",
        "word": "Discharge of blood from a ruptured or wounded blood-vessel."
    },
    {
        "matched": false,
        "definition": "hemorrhoids",
        "type": "n.",
        "word": "pl. Tumors composed of enlarged and thickened blood-vessels, at the lower          "
    },
    {
        "matched": false,
        "definition": "henchman",
        "type": "n.",
        "word": "A servile assistant and subordinate."
    },
    {
        "matched": false,
        "definition": "henpeck",
        "type": "v.",
        "word": "To worry or harass by ill temper and petty annoyances."
    },
    {
        "matched": false,
        "definition": "heptagon",
        "type": "n.",
        "word": "A figure having seven sides and seven angles."
    },
    {
        "matched": false,
        "definition": "heptarchy",
        "type": "n.",
        "word": "A group of seven governments."
    },
    {
        "matched": false,
        "definition": "herbaceous",
        "type": "adj.",
        "word": "Having the character of a herb."
    },
    {
        "matched": false,
        "definition": "herbarium",
        "type": "n.",
        "word": "A collection of dried plants scientifically arranged for study."
    },
    {
        "matched": false,
        "definition": "herbivorous",
        "type": "adj.",
        "word": "Feeding on herbs or other vegetable matter, as animals."
    },
    {
        "matched": false,
        "definition": "hereditary",
        "type": "adj.",
        "word": "Passing naturally from parent to child."
    },
    {
        "matched": false,
        "definition": "heredity",
        "type": "n.",
        "word": "Transmission of physical or mental qualities, diseases, etc., from parent to          "
    },
    {
        "matched": false,
        "definition": "heresy",
        "type": "n.",
        "word": "An opinion or doctrine subversive of settled beliefs or accepted principles."
    },
    {
        "matched": false,
        "definition": "heretic",
        "type": "n.",
        "word": "One who holds opinions contrary to the recognized standards or tenets of any          "
    },
    {
        "matched": false,
        "definition": "heritage",
        "type": "n.",
        "word": "Birthright."
    },
    {
        "matched": false,
        "definition": "hernia",
        "type": "n.",
        "word": "Protrusion of any internal organ in whole or in part from its normal position."
    },
    {
        "matched": false,
        "definition": "hesitancy",
        "type": "n.",
        "word": "A pausing to consider."
    },
    {
        "matched": false,
        "definition": "hesitant",
        "type": "adj.",
        "word": "Vacillating."
    },
    {
        "matched": false,
        "definition": "hesitation",
        "type": "n.",
        "word": "Vacillation."
    },
    {
        "matched": false,
        "definition": "heterodox",
        "type": "adj.",
        "word": "At variance with any commonly accepted doctrine or opinion."
    },
    {
        "matched": false,
        "definition": "heterogeneity",
        "type": "n.",
        "word": "Unlikeness of constituent parts."
    },
    {
        "matched": false,
        "definition": "heterogeneous",
        "type": "adj.",
        "word": "Consisting of dissimilar elements or ingredients of different kinds."
    },
    {
        "matched": false,
        "definition": "heteromorphic",
        "type": "adj.",
        "word": "Deviating from the normal form or standard type."
    },
    {
        "matched": false,
        "definition": "hexangular",
        "type": "adj.",
        "word": "Having six angles."
    },
    {
        "matched": false,
        "definition": "hexapod",
        "type": "adj.",
        "word": "Having six feet."
    },
    {
        "matched": false,
        "definition": "hexagon",
        "type": "n.",
        "word": "A figure with six angles."
    },
    {
        "matched": false,
        "definition": "hiatus",
        "type": "n.",
        "word": "A break or vacancy where something necessary to supply the connection is          "
    },
    {
        "matched": false,
        "definition": "hibernal",
        "type": "adj.",
        "word": "Pertaining to winter."
    },
    {
        "matched": false,
        "definition": "Hibernian",
        "type": "adj.",
        "word": "Pertaining to Ireland, or its people."
    },
    {
        "matched": false,
        "definition": "hideous",
        "type": "adj.",
        "word": "Appalling."
    },
    {
        "matched": false,
        "definition": "hilarious",
        "type": "adj.",
        "word": "Boisterously merry."
    },
    {
        "matched": false,
        "definition": "hillock",
        "type": "n.",
        "word": "A small hill or mound."
    },
    {
        "matched": false,
        "definition": "hinder",
        "type": "v.",
        "word": "To obstruct."
    },
    {
        "matched": false,
        "definition": "hindmost",
        "type": "adj.",
        "word": "Farthest from the front."
    },
    {
        "matched": false,
        "definition": "hindrance",
        "type": "n.",
        "word": "An obstacle."
    },
    {
        "matched": false,
        "definition": "hirsute",
        "type": "adj.",
        "word": "Having a hairy covering."
    },
    {
        "matched": false,
        "definition": "hoard",
        "type": "v.",
        "word": "To gather and store away for the sake of accumulation."
    },
    {
        "matched": false,
        "definition": "hoarse",
        "type": "adj.",
        "word": "Having the voice harsh or rough, as from a cold or fatigue."
    },
    {
        "matched": false,
        "definition": "homage",
        "type": "n.",
        "word": "Reverential regard or worship."
    },
    {
        "matched": false,
        "definition": "homogeneity",
        "type": "n.",
        "word": "Congruity of the members or elements or parts."
    },
    {
        "matched": false,
        "definition": "homogeneous",
        "type": "adj.",
        "word": "Made up of similar parts or elements."
    },
    {
        "matched": false,
        "definition": "homologous",
        "type": "adj.",
        "word": "Identical in nature, make-up, or relation."
    },
    {
        "matched": false,
        "definition": "homonym",
        "type": "n.",
        "word": "A word agreeing in sound with but different in meaning from another."
    },
    {
        "matched": false,
        "definition": "homophone",
        "type": "n.",
        "word": "A word agreeing in sound with but different in meaning from another."
    },
    {
        "matched": false,
        "definition": "honorarium",
        "type": "n.",
        "word": "A token fee or payment to a professional man for services."
    },
    {
        "matched": false,
        "definition": "hoodwink",
        "type": "v.",
        "word": "To deceive."
    },
    {
        "matched": false,
        "definition": "horde",
        "type": "n.",
        "word": "A gathered multitude of human beings."
    },
    {
        "matched": false,
        "definition": "hosiery",
        "type": "n.",
        "word": "A stocking."
    },
    {
        "matched": false,
        "definition": "hospitable",
        "type": "adj.",
        "word": "Disposed to treat strangers or guests with generous kindness."
    },
    {
        "matched": false,
        "definition": "hospitality",
        "type": "n.",
        "word": "The practice of receiving and entertaining strangers and guests with          "
    },
    {
        "matched": false,
        "definition": "hostility",
        "type": "n.",
        "word": "Enmity."
    },
    {
        "matched": false,
        "definition": "huckster",
        "type": "n.",
        "word": "One who retails small wares."
    },
    {
        "matched": false,
        "definition": "humane",
        "type": "adj.",
        "word": "Compassionate."
    },
    {
        "matched": false,
        "definition": "humanitarian",
        "type": "n.",
        "word": "A philanthropist."
    },
    {
        "matched": false,
        "definition": "humanize",
        "type": "v.",
        "word": "To make gentle or refined."
    },
    {
        "matched": false,
        "definition": "humbug",
        "type": "n.",
        "word": "Anything intended or calculated to deceive or mislead."
    },
    {
        "matched": false,
        "definition": "humiliate",
        "type": "v.",
        "word": "To put to shame."
    },
    {
        "matched": false,
        "definition": "hussar",
        "type": "n.",
        "word": "A light-horse trooper armed with saber and carbine."
    },
    {
        "matched": false,
        "definition": "hustle",
        "type": "v.",
        "word": "To move with haste and promptness."
    },
    {
        "matched": false,
        "definition": "hybrid",
        "type": "adj.",
        "word": "Cross-bred."
    },
    {
        "matched": false,
        "definition": "hydra",
        "type": "n.",
        "word": "The seven- or nine-headed water-serpent slain by Hercules."
    },
    {
        "matched": false,
        "definition": "hydraulic",
        "type": "adj.",
        "word": "Involving the moving of water, of the force exerted by water in motion."
    },
    {
        "matched": false,
        "definition": "hydrodynamics",
        "type": "n.",
        "word": "The branch of mechanics that treats of the dynamics of fluids."
    },
    {
        "matched": false,
        "definition": "hydroelectric",
        "type": "adj.",
        "word": "Pertaining to electricity developed water or steam."
    },
    {
        "matched": false,
        "definition": "hydromechanics",
        "type": "n.",
        "word": "The mechanics of fluids."
    },
    {
        "matched": false,
        "definition": "hydrometer",
        "type": "n.",
        "word": "An instrument for determining the density of solids and liquids by          "
    },
    {
        "matched": false,
        "definition": "hydrostatics",
        "type": "n.",
        "word": "The branch of science that treats of the pressure and equilibrium of          "
    },
    {
        "matched": false,
        "definition": "hydrous",
        "type": "adj.",
        "word": "Watery."
    },
    {
        "matched": false,
        "definition": "hygiene",
        "type": "n.",
        "word": "The branch of medical science that relates to improving health."
    },
    {
        "matched": false,
        "definition": "hypercritical",
        "type": "adj.",
        "word": "Faultfinding."
    },
    {
        "matched": false,
        "definition": "hypnosis",
        "type": "n.",
        "word": "An artificial trance-sleep."
    },
    {
        "matched": false,
        "definition": "hypnotic",
        "type": "adj.",
        "word": "Tending to produce sleep."
    },
    {
        "matched": false,
        "definition": "hypnotism",
        "type": "n.",
        "word": "An artificially induced somnambulistic state in which the mind readily acts          "
    },
    {
        "matched": false,
        "definition": "hypnotize",
        "type": "v.",
        "word": "To produce a somnambulistic state in which the mind readily acts on          "
    },
    {
        "matched": false,
        "definition": "hypocrisy",
        "type": "n.",
        "word": "Extreme insincerity."
    },
    {
        "matched": false,
        "definition": "hypocrite",
        "type": "n.",
        "word": "One who makes false professions of his views or beliefs."
    },
    {
        "matched": false,
        "definition": "hypodermic",
        "type": "adj.",
        "word": "Pertaining to the area under the skin."
    },
    {
        "matched": false,
        "definition": "hypotenuse",
        "type": "n.",
        "word": "The side of a right-angled triangle opposite the right angle."
    },
    {
        "matched": false,
        "definition": "hypothesis",
        "type": "n.",
        "word": "A proposition taken for granted as a premise from which to reach a          "
    },
    {
        "matched": false,
        "definition": "hysteria",
        "type": "n.",
        "word": "A nervous affection occurring typically in paroxysms of laughing and crying."
    },
    {
        "matched": false,
        "definition": "ichthyic",
        "type": "adj.",
        "word": "Fish-like."
    },
    {
        "matched": false,
        "definition": "ichthyology",
        "type": "n.",
        "word": "The branch of zoology that treats of fishes."
    },
    {
        "matched": false,
        "definition": "ichthyosaurs",
        "type": "n.",
        "word": "A fossil reptile."
    },
    {
        "matched": false,
        "definition": "icily",
        "type": "adv.",
        "word": "Frigidly."
    },
    {
        "matched": false,
        "definition": "iciness",
        "type": "n.",
        "word": "The state of being icy."
    },
    {
        "matched": false,
        "definition": "icon",
        "type": "n.",
        "word": "An image or likeness."
    },
    {
        "matched": false,
        "definition": "iconoclast",
        "type": "n.",
        "word": "An image-breaker."
    },
    {
        "matched": false,
        "definition": "idealize",
        "type": "v.",
        "word": "To make to conform to some mental or imaginary standard."
    },
    {
        "matched": false,
        "definition": "idiom",
        "type": "n.",
        "word": "A use of words peculiar to a particular language."
    },
    {
        "matched": false,
        "definition": "idiosyncrasy",
        "type": "n.",
        "word": "A mental quality or habit peculiar to an individual."
    },
    {
        "matched": false,
        "definition": "idolize",
        "type": "v.",
        "word": "To regard with inordinate love or admiration."
    },
    {
        "matched": false,
        "definition": "ignoble",
        "type": "adj.",
        "word": "Low in character or purpose."
    },
    {
        "matched": false,
        "definition": "ignominious",
        "type": "adj.",
        "word": "Shameful."
    },
    {
        "matched": false,
        "definition": "Iliad",
        "type": "n.",
        "word": "A Greek epic poem describing scenes from the siege of Troy."
    },
    {
        "matched": false,
        "definition": "illegal",
        "type": "adj.",
        "word": "Not according to law."
    },
    {
        "matched": false,
        "definition": "illegible",
        "type": "adj.",
        "word": "Undecipherable."
    },
    {
        "matched": false,
        "definition": "illegitimate",
        "type": "adj.",
        "word": "Unlawfully begotten."
    },
    {
        "matched": false,
        "definition": "illiberal",
        "type": "adj.",
        "word": "Stingy."
    },
    {
        "matched": false,
        "definition": "illicit",
        "type": "adj.",
        "word": "Unlawful."
    },
    {
        "matched": false,
        "definition": "illimitable",
        "type": "adj.",
        "word": "Boundless."
    },
    {
        "matched": false,
        "definition": "illiterate",
        "type": "adj.",
        "word": "Having little or no book-learning."
    },
    {
        "matched": false,
        "definition": "ill-natured",
        "type": "adj.",
        "word": "Surly."
    },
    {
        "matched": false,
        "definition": "illogical",
        "type": "adj.",
        "word": "Contrary to the rules of sound thought."
    },
    {
        "matched": false,
        "definition": "illuminant",
        "type": "n.",
        "word": "That which may be used to produce light."
    },
    {
        "matched": false,
        "definition": "illuminate",
        "type": "v.",
        "word": "To supply with light."
    },
    {
        "matched": false,
        "definition": "illumine",
        "type": "v.",
        "word": "To make bright or clear."
    },
    {
        "matched": false,
        "definition": "illusion",
        "type": "n.",
        "word": "An unreal image presented to the senses."
    },
    {
        "matched": false,
        "definition": "illusive",
        "type": "adj.",
        "word": "Deceptive."
    },
    {
        "matched": false,
        "definition": "illusory",
        "type": "adj.",
        "word": "Deceiving or tending to deceive, as by false appearance."
    },
    {
        "matched": false,
        "definition": "imaginable",
        "type": "adj.",
        "word": "That can be imagined or conceived in the mind."
    },
    {
        "matched": false,
        "definition": "imaginary",
        "type": "adj.",
        "word": "Fancied."
    },
    {
        "matched": false,
        "definition": "imbibe",
        "type": "v.",
        "word": "To drink or take in."
    },
    {
        "matched": false,
        "definition": "imbroglio",
        "type": "n.",
        "word": "A misunderstanding attended by ill feeling, perplexity, or strife."
    },
    {
        "matched": false,
        "definition": "imbrue",
        "type": "v.",
        "word": "To wet or moisten."
    },
    {
        "matched": false,
        "definition": "imitation",
        "type": "n.",
        "word": "That which is made as a likeness or copy."
    },
    {
        "matched": false,
        "definition": "imitator",
        "type": "n.",
        "word": "One who makes in imitation."
    },
    {
        "matched": false,
        "definition": "immaculate",
        "type": "adj.",
        "word": "Without spot or blemish."
    },
    {
        "matched": false,
        "definition": "immaterial",
        "type": "adj.",
        "word": "Of no essential consequence."
    },
    {
        "matched": false,
        "definition": "immature",
        "type": "adj.",
        "word": "Not full-grown."
    },
    {
        "matched": false,
        "definition": "immeasurable",
        "type": "adj.",
        "word": "Indefinitely extensive."
    },
    {
        "matched": false,
        "definition": "immense",
        "type": "adj.",
        "word": "Very great in degree, extent, size, or quantity."
    },
    {
        "matched": false,
        "definition": "immerse",
        "type": "v.",
        "word": "To plunge or dip entirely under water or other fluid."
    },
    {
        "matched": false,
        "definition": "immersion",
        "type": "n.",
        "word": "The act of plunging or dipping entirely under water or another fluid."
    },
    {
        "matched": false,
        "definition": "immigrant",
        "type": "n.",
        "word": "A foreigner who enters a country to settle there."
    },
    {
        "matched": false,
        "definition": "immigrate",
        "type": "v.",
        "word": "To come into a country or region from a former habitat."
    },
    {
        "matched": false,
        "definition": "imminence",
        "type": "n.",
        "word": "Impending evil or danger."
    },
    {
        "matched": false,
        "definition": "imminent",
        "type": "adj.",
        "word": "Dangerous and close at hand."
    },
    {
        "matched": false,
        "definition": "immiscible",
        "type": "adj.",
        "word": "Separating, as oil and water."
    },
    {
        "matched": false,
        "definition": "immoral",
        "type": "adj.",
        "word": "Habitually engaged in licentious or lewd practices."
    },
    {
        "matched": false,
        "definition": "immortalize",
        "type": "v.",
        "word": "To cause to last or to be known or remembered throughout a great or          "
    },
    {
        "matched": false,
        "definition": "immovable",
        "type": "adj.",
        "word": "Steadfast."
    },
    {
        "matched": false,
        "definition": "immune",
        "type": "adj.",
        "word": "Exempt, as from disease."
    },
    {
        "matched": false,
        "definition": "immutable",
        "type": "adj.",
        "word": "Unchangeable."
    },
    {
        "matched": false,
        "definition": "impair",
        "type": "v.",
        "word": "To cause to become less or worse."
    },
    {
        "matched": false,
        "definition": "impalpable",
        "type": "adj.",
        "word": "Imperceptible to the touch."
    },
    {
        "matched": false,
        "definition": "impartial",
        "type": "adj.",
        "word": "Unbiased."
    },
    {
        "matched": false,
        "definition": "impassable",
        "type": "adj.",
        "word": "That can not be passed through or over."
    },
    {
        "matched": false,
        "definition": "impassible",
        "type": "adj.",
        "word": "Not moved or affected by feeling."
    },
    {
        "matched": false,
        "definition": "impassive",
        "type": "adj.",
        "word": "Unmoved by or not exhibiting feeling."
    },
    {
        "matched": false,
        "definition": "impatience",
        "type": "n.",
        "word": "Unwillingness to brook delays or wait the natural course of things."
    },
    {
        "matched": false,
        "definition": "impeccable",
        "type": "adj.",
        "word": "Blameless."
    },
    {
        "matched": false,
        "definition": "impecunious",
        "type": "adj.",
        "word": "Having no money."
    },
    {
        "matched": false,
        "definition": "impede",
        "type": "v.",
        "word": "To be an obstacle or to place obstacles in the way of."
    },
    {
        "matched": false,
        "definition": "impel",
        "type": "v.",
        "word": "To drive or urge forward."
    },
    {
        "matched": false,
        "definition": "impend",
        "type": "v.",
        "word": "To be imminent."
    },
    {
        "matched": false,
        "definition": "imperative",
        "type": "adj.",
        "word": "Obligatory."
    },
    {
        "matched": false,
        "definition": "imperceptible",
        "type": "adj.",
        "word": "Indiscernible."
    },
    {
        "matched": false,
        "definition": "imperfectible",
        "type": "adj.",
        "word": "That can not be perfected."
    },
    {
        "matched": false,
        "definition": "imperil",
        "type": "v.",
        "word": "To endanger."
    },
    {
        "matched": false,
        "definition": "imperious",
        "type": "adj.",
        "word": "Insisting on obedience."
    },
    {
        "matched": false,
        "definition": "impermissible",
        "type": "adj.",
        "word": "Not permissible."
    },
    {
        "matched": false,
        "definition": "impersonal",
        "type": "adj.",
        "word": "Not relating to a particular person or thing."
    },
    {
        "matched": false,
        "definition": "impersonate",
        "type": "v.",
        "word": "To appear or act in the character of."
    },
    {
        "matched": false,
        "definition": "impersuadable",
        "type": "adj.",
        "word": "Unyielding."
    },
    {
        "matched": false,
        "definition": "impertinence",
        "type": "n.",
        "word": "Rudeness."
    },
    {
        "matched": false,
        "definition": "imperturbable",
        "type": "adj.",
        "word": "Calm."
    },
    {
        "matched": false,
        "definition": "impervious",
        "type": "adj.",
        "word": "Impenetrable."
    },
    {
        "matched": false,
        "definition": "impetuosity",
        "type": "n.",
        "word": "Rashness."
    },
    {
        "matched": false,
        "definition": "impetuous",
        "type": "adj.",
        "word": "Impulsive."
    },
    {
        "matched": false,
        "definition": "impetus",
        "type": "n.",
        "word": "Any impulse or incentive."
    },
    {
        "matched": false,
        "definition": "impiety",
        "type": "n.",
        "word": "Irreverence toward God."
    },
    {
        "matched": false,
        "definition": "impious",
        "type": "adj.",
        "word": "Characterized by irreverence or irreligion."
    },
    {
        "matched": false,
        "definition": "implausible",
        "type": "adj.",
        "word": "Not plausible."
    },
    {
        "matched": false,
        "definition": "impliable",
        "type": "adj.",
        "word": "Capable of being inferred."
    },
    {
        "matched": false,
        "definition": "implicate",
        "type": "v.",
        "word": "To show or prove to be involved in or concerned"
    },
    {
        "matched": false,
        "definition": "implicit",
        "type": "adj.",
        "word": "Implied."
    },
    {
        "matched": false,
        "definition": "imply",
        "type": "v.",
        "word": "To signify."
    },
    {
        "matched": false,
        "definition": "impolitic",
        "type": "adj.",
        "word": "Inexpedient."
    },
    {
        "matched": false,
        "definition": "importation",
        "type": "n.",
        "word": "The act or practice of bringing from one country into another."
    },
    {
        "matched": false,
        "definition": "importunate",
        "type": "adj.",
        "word": "Urgent in character, request, or demand."
    },
    {
        "matched": false,
        "definition": "importune",
        "type": "v.",
        "word": "To harass with persistent demands or entreaties."
    },
    {
        "matched": false,
        "definition": "impotent",
        "type": "adj.",
        "word": "Destitute of or lacking in power, physical, moral, or intellectual."
    },
    {
        "matched": false,
        "definition": "impoverish",
        "type": "v.",
        "word": "To make indigent or poor."
    },
    {
        "matched": false,
        "definition": "impracticable",
        "type": "adj.",
        "word": "Not feasible."
    },
    {
        "matched": false,
        "definition": "impregnable",
        "type": "adj.",
        "word": "That can not be taken by assault."
    },
    {
        "matched": false,
        "definition": "impregnate",
        "type": "v.",
        "word": "To make pregnant."
    },
    {
        "matched": false,
        "definition": "impromptu",
        "type": "n.",
        "word": "Anything done or said on the impulse of the moment."
    },
    {
        "matched": false,
        "definition": "improper",
        "type": "adj.",
        "word": "Not appropriate, suitable, or becoming."
    },
    {
        "matched": false,
        "definition": "impropriety",
        "type": "n.",
        "word": "The state or quality of being unfit, unseemly, or inappropriate."
    },
    {
        "matched": false,
        "definition": "improvident",
        "type": "adj.",
        "word": "Lacking foresight or thrift."
    },
    {
        "matched": false,
        "definition": "improvise",
        "type": "v.",
        "word": "To do anything extemporaneously or offhand."
    },
    {
        "matched": false,
        "definition": "imprudent",
        "type": "adj.",
        "word": "Heedless."
    },
    {
        "matched": false,
        "definition": "impudence",
        "type": "n.",
        "word": "Insolent disrespect."
    },
    {
        "matched": false,
        "definition": "impugn",
        "type": "v.",
        "word": "To assail with arguments, insinuations, or accusations."
    },
    {
        "matched": false,
        "definition": "impulsion",
        "type": "n.",
        "word": "Impetus."
    },
    {
        "matched": false,
        "definition": "impulsive",
        "type": "adj.",
        "word": "Unpremeditated."
    },
    {
        "matched": false,
        "definition": "impunity",
        "type": "n.",
        "word": "Freedom from punishment."
    },
    {
        "matched": false,
        "definition": "impure",
        "type": "adj.",
        "word": "Tainted."
    },
    {
        "matched": false,
        "definition": "impute",
        "type": "v.",
        "word": "To attribute."
    },
    {
        "matched": false,
        "definition": "inaccessible",
        "type": "adj.",
        "word": "Difficult of approach."
    },
    {
        "matched": false,
        "definition": "inaccurate",
        "type": "adj.",
        "word": "Not exactly according to the facts."
    },
    {
        "matched": false,
        "definition": "inactive",
        "type": "adj.",
        "word": "Inert."
    },
    {
        "matched": false,
        "definition": "inadequate",
        "type": "adj.",
        "word": "Insufficient."
    },
    {
        "matched": false,
        "definition": "inadmissible",
        "type": "adj.",
        "word": "Not to be approved, considered, or allowed, as testimony."
    },
    {
        "matched": false,
        "definition": "inadvertent",
        "type": "adj.",
        "word": "Accidental."
    },
    {
        "matched": false,
        "definition": "inadvisable",
        "type": "adj.",
        "word": "Unadvisable."
    },
    {
        "matched": false,
        "definition": "inane",
        "type": "adj.",
        "word": "Silly."
    },
    {
        "matched": false,
        "definition": "inanimate",
        "type": "adj.",
        "word": "Destitute of animal life."
    },
    {
        "matched": false,
        "definition": "inapprehensible",
        "type": "adj.",
        "word": "Not to be understood."
    },
    {
        "matched": false,
        "definition": "inapt",
        "type": "adj.",
        "word": "Awkward or slow."
    },
    {
        "matched": false,
        "definition": "inarticulate",
        "type": "adj.",
        "word": "Speechless."
    },
    {
        "matched": false,
        "definition": "inaudible",
        "type": "adj.",
        "word": "That can not be heard."
    },
    {
        "matched": false,
        "definition": "inborn",
        "type": "adj.",
        "word": "Implanted by nature."
    },
    {
        "matched": false,
        "definition": "inbred",
        "type": "adj.",
        "word": "Innate."
    },
    {
        "matched": false,
        "definition": "incandescence",
        "type": "n.",
        "word": "The state of being white or glowing with heat."
    },
    {
        "matched": false,
        "definition": "incandescent",
        "type": "adj.",
        "word": "White or glowing with heat."
    },
    {
        "matched": false,
        "definition": "incapacitate",
        "type": "v.",
        "word": "To deprive of power, capacity, competency, or qualification."
    },
    {
        "matched": false,
        "definition": "incapacity",
        "type": "n.",
        "word": "Want of power to apprehend, understand, and manage."
    },
    {
        "matched": false,
        "definition": "incarcerate",
        "type": "v.",
        "word": "To imprison."
    },
    {
        "matched": false,
        "definition": "incendiary",
        "type": "n.",
        "word": "Chemical or person who starts a fire-literally or figuratively."
    },
    {
        "matched": false,
        "definition": "incentive",
        "type": "n.",
        "word": "That which moves the mind or inflames the passions."
    },
    {
        "matched": false,
        "definition": "inception",
        "type": "n.",
        "word": "The beginning."
    },
    {
        "matched": false,
        "definition": "inceptive",
        "type": "adj.",
        "word": "Beginning."
    },
    {
        "matched": false,
        "definition": "incessant",
        "type": "adj.",
        "word": "Unceasing."
    },
    {
        "matched": false,
        "definition": "inchmeal",
        "type": "adv.",
        "word": "Piecemeal."
    },
    {
        "matched": false,
        "definition": "inchoate",
        "type": "adj.",
        "word": "Incipient."
    },
    {
        "matched": false,
        "definition": "inchoative",
        "type": "n.",
        "word": "That which begins, or expresses beginning."
    },
    {
        "matched": false,
        "definition": "incidence",
        "type": "n.",
        "word": "Casual occurrence."
    },
    {
        "matched": false,
        "definition": "incident",
        "type": "n.",
        "word": "A happening in general, especially one of little importance."
    },
    {
        "matched": false,
        "definition": "incidentally",
        "type": "adv.",
        "word": "Without intention."
    },
    {
        "matched": false,
        "definition": "incinerate",
        "type": "v.",
        "word": "To reduce to ashes."
    },
    {
        "matched": false,
        "definition": "incipience",
        "type": "n.",
        "word": "Beginning."
    },
    {
        "matched": false,
        "definition": "incipient",
        "type": "adj.",
        "word": "Initial."
    },
    {
        "matched": false,
        "definition": "incisor",
        "type": "n.",
        "word": "A front or cutting tooth."
    },
    {
        "matched": false,
        "definition": "incite",
        "type": "v.",
        "word": "To rouse to a particular action."
    },
    {
        "matched": false,
        "definition": "incitement",
        "type": "n.",
        "word": "That which moves to action, or serves as an incentive or stimulus."
    },
    {
        "matched": false,
        "definition": "incoercible",
        "type": "adj.",
        "word": "Incapable of being forced, constrained, or compelled."
    },
    {
        "matched": false,
        "definition": "incoherence",
        "type": "n.",
        "word": "Want of connection, or agreement, as of parts or ideas in thought, speech,          "
    },
    {
        "matched": false,
        "definition": "incoherent",
        "type": "adj.",
        "word": "Not logically coordinated, as to parts, elements, or details."
    },
    {
        "matched": false,
        "definition": "incombustible",
        "type": "adj.",
        "word": "That can not be burned."
    },
    {
        "matched": false,
        "definition": "incomparable",
        "type": "adj.",
        "word": "Matchless."
    },
    {
        "matched": false,
        "definition": "incompatible",
        "type": "adj.",
        "word": "Discordant."
    },
    {
        "matched": false,
        "definition": "incompetence",
        "type": "n.",
        "word": "General lack of capacity or fitness."
    },
    {
        "matched": false,
        "definition": "incompetent",
        "type": "adj.",
        "word": "Not having the abilities desired or necessary for any purpose."
    },
    {
        "matched": false,
        "definition": "incomplete",
        "type": "adj.",
        "word": "Lacking some element, part, or adjunct necessary or required."
    },
    {
        "matched": false,
        "definition": "incomprehensible",
        "type": "adj.",
        "word": "Not understandable."
    },
    {
        "matched": false,
        "definition": "incompressible",
        "type": "adj.",
        "word": "Resisting all attempts to reduce volume by pressure."
    },
    {
        "matched": false,
        "definition": "inconceivable",
        "type": "adj.",
        "word": "Incomprehensible."
    },
    {
        "matched": false,
        "definition": "incongruous",
        "type": "adj.",
        "word": "Unsuitable for the time, place, or occasion."
    },
    {
        "matched": false,
        "definition": "inconsequential",
        "type": "adj.",
        "word": "Valueless."
    },
    {
        "matched": false,
        "definition": "inconsiderable",
        "type": "adj.",
        "word": "Small in quantity or importance."
    },
    {
        "matched": false,
        "definition": "inconsistent",
        "type": "adj.",
        "word": "Contradictory."
    },
    {
        "matched": false,
        "definition": "inconstant",
        "type": "adj.",
        "word": "Changeable."
    },
    {
        "matched": false,
        "definition": "incontrovertible",
        "type": "adj.",
        "word": "Indisputable."
    },
    {
        "matched": false,
        "definition": "inconvenient",
        "type": "adj.",
        "word": "Interfering with comfort or progress."
    },
    {
        "matched": false,
        "definition": "indefensible",
        "type": "adj.",
        "word": "Untenable."
    },
    {
        "matched": false,
        "definition": "indefinitely",
        "type": "adv.",
        "word": "In a vague or uncertain way."
    },
    {
        "matched": false,
        "definition": "indelible",
        "type": "adj.",
        "word": "That can not be blotted out, effaced, destroyed, or removed."
    },
    {
        "matched": false,
        "definition": "indescribable",
        "type": "adj.",
        "word": "That can not be described."
    },
    {
        "matched": false,
        "definition": "indestructible",
        "type": "adj.",
        "word": "That can not be destroyed."
    },
    {
        "matched": false,
        "definition": "indicant",
        "type": "adj.",
        "word": "That which points out."
    },
    {
        "matched": false,
        "definition": "indicator",
        "type": "n.",
        "word": "One who or that which points out."
    },
    {
        "matched": false,
        "definition": "indict",
        "type": "v.",
        "word": "To find and declare chargeable with crime."
    },
    {
        "matched": false,
        "definition": "indigence",
        "type": "n.",
        "word": "Poverty."
    },
    {
        "matched": false,
        "definition": "indigenous",
        "type": "adj.",
        "word": "Native."
    },
    {
        "matched": false,
        "definition": "indigent",
        "type": "adj.",
        "word": "Poor."
    },
    {
        "matched": false,
        "definition": "indigestible",
        "type": "adj.",
        "word": "Not digestible, or difficult to digest."
    },
    {
        "matched": false,
        "definition": "indigestion",
        "type": "n.",
        "word": "Difficulty or failure in the alimentary canal in changing food into          "
    },
    {
        "matched": false,
        "definition": "indignant",
        "type": "adj.",
        "word": "Having such anger and scorn as is aroused by meanness or wickedness."
    },
    {
        "matched": false,
        "definition": "indignity",
        "type": "n.",
        "word": "Unmerited contemptuous conduct or treatment."
    },
    {
        "matched": false,
        "definition": "indiscernible",
        "type": "adj.",
        "word": "Not perceptible."
    },
    {
        "matched": false,
        "definition": "indiscreet",
        "type": "adj.",
        "word": "Lacking wise judgment."
    },
    {
        "matched": false,
        "definition": "indiscriminate",
        "type": "adj.",
        "word": "Promiscuous."
    },
    {
        "matched": false,
        "definition": "indispensable",
        "type": "adj.",
        "word": "Necessary or requisite for the purpose."
    },
    {
        "matched": false,
        "definition": "indistinct",
        "type": "adj.",
        "word": "Vague."
    },
    {
        "matched": false,
        "definition": "indivertible",
        "type": "adj.",
        "word": "That can not be turned aside."
    },
    {
        "matched": false,
        "definition": "indivisible",
        "type": "adj.",
        "word": "Not separable into parts."
    },
    {
        "matched": false,
        "definition": "indolence",
        "type": "n.",
        "word": "Laziness."
    },
    {
        "matched": false,
        "definition": "indolent",
        "type": "adj.",
        "word": "Habitually inactive or idle."
    },
    {
        "matched": false,
        "definition": "indomitable",
        "type": "adj.",
        "word": "Unconquerable."
    },
    {
        "matched": false,
        "definition": "induct",
        "type": "v.",
        "word": "To bring in."
    },
    {
        "matched": false,
        "definition": "indulgence",
        "type": "n.",
        "word": "The yielding to inclination, passion, desire, or propensity in oneself or          "
    },
    {
        "matched": false,
        "definition": "indulgent",
        "type": "adj.",
        "word": "Yielding to the desires or humor of oneself or those under one's care."
    },
    {
        "matched": false,
        "definition": "inebriate",
        "type": "v.",
        "word": "To intoxicate."
    },
    {
        "matched": false,
        "definition": "inedible",
        "type": "adj.",
        "word": "Not good for food."
    },
    {
        "matched": false,
        "definition": "ineffable",
        "type": "adj.",
        "word": "Unutterable."
    },
    {
        "matched": false,
        "definition": "inefficient",
        "type": "adj.",
        "word": "Not accomplishing an intended purpose."
    },
    {
        "matched": false,
        "definition": "inefficiency",
        "type": "n.",
        "word": "That which does not accomplish an intended purpose."
    },
    {
        "matched": false,
        "definition": "ineligible",
        "type": "adj.",
        "word": "Not suitable to be selected or chosen."
    },
    {
        "matched": false,
        "definition": "inept",
        "type": "adj.",
        "word": "Not fit or suitable."
    },
    {
        "matched": false,
        "definition": "inert",
        "type": "adj.",
        "word": "Inanimate."
    },
    {
        "matched": false,
        "definition": "inestimable",
        "type": "adj.",
        "word": "Above price."
    },
    {
        "matched": false,
        "definition": "inevitable",
        "type": "adj.",
        "word": "Unavoidable."
    },
    {
        "matched": false,
        "definition": "inexcusable",
        "type": "adj.",
        "word": "Not to be justified."
    },
    {
        "matched": false,
        "definition": "inexhaustible",
        "type": "adj.",
        "word": "So large or furnishing so great a supply as not to be emptied, wasted,          "
    },
    {
        "matched": false,
        "definition": "inexorable",
        "type": "adj.",
        "word": "Unrelenting."
    },
    {
        "matched": false,
        "definition": "inexpedient",
        "type": "adj.",
        "word": "Unadvisable."
    },
    {
        "matched": false,
        "definition": "inexpensive",
        "type": "adj.",
        "word": "Low-priced."
    },
    {
        "matched": false,
        "definition": "inexperience",
        "type": "n.",
        "word": "Lack of or deficiency in experience."
    },
    {
        "matched": false,
        "definition": "inexplicable",
        "type": "adj.",
        "word": "Such as can not be made plain."
    },
    {
        "matched": false,
        "definition": "inexpressible",
        "type": "adj.",
        "word": "Unutterable."
    },
    {
        "matched": false,
        "definition": "inextensible",
        "type": "adj.",
        "word": "Of unchangeable length or area."
    },
    {
        "matched": false,
        "definition": "infallible",
        "type": "adj.",
        "word": "Exempt from error of judgment, as in opinion or statement."
    },
    {
        "matched": false,
        "definition": "infamous",
        "type": "adj.",
        "word": "Publicly branded or notorious, as for vice, or crime."
    },
    {
        "matched": false,
        "definition": "infamy",
        "type": "n.",
        "word": "Total loss or destitution of honor or reputation."
    },
    {
        "matched": false,
        "definition": "inference",
        "type": "n.",
        "word": "The derivation of a judgment from any given material of knowledge on the          "
    },
    {
        "matched": false,
        "definition": "infernal",
        "type": "adj.",
        "word": "Akin to or befitting hell or its occupants."
    },
    {
        "matched": false,
        "definition": "infest",
        "type": "v.",
        "word": "To be present in such numbers as to be a source of annoyance, trouble, or          "
    },
    {
        "matched": false,
        "definition": "infidel",
        "type": "n.",
        "word": "One who denies the existence of God."
    },
    {
        "matched": false,
        "definition": "infidelity",
        "type": "n.",
        "word": "Disloyalty."
    },
    {
        "matched": false,
        "definition": "infinite",
        "type": "adj.",
        "word": "Measureless."
    },
    {
        "matched": false,
        "definition": "infinity",
        "type": "n.",
        "word": "Boundless or immeasurable extension or duration."
    },
    {
        "matched": false,
        "definition": "infirm",
        "type": "adj.",
        "word": "Lacking in bodily or mental strength."
    },
    {
        "matched": false,
        "definition": "infirmary",
        "type": "n.",
        "word": "A place for the reception or treatment of the sick."
    },
    {
        "matched": false,
        "definition": "infirmity",
        "type": "n.",
        "word": "A physical, mental, or moral weakness or flaw."
    },
    {
        "matched": false,
        "definition": "inflammable",
        "type": "adj.",
        "word": "Easily set on fire or excited."
    },
    {
        "matched": false,
        "definition": "inflammation",
        "type": "n.",
        "word": "A morbid process in some part of the body characterized by heat, swelling,          "
    },
    {
        "matched": false,
        "definition": "inflexible",
        "type": "adj.",
        "word": "That can not be altered or varied."
    },
    {
        "matched": false,
        "definition": "influence",
        "type": "n.",
        "word": "Ability to sway the will of another."
    },
    {
        "matched": false,
        "definition": "influential",
        "type": "adj.",
        "word": "Having the power to sway the will of another."
    },
    {
        "matched": false,
        "definition": "influx",
        "type": "n.",
        "word": "Infusion."
    },
    {
        "matched": false,
        "definition": "infrequence",
        "type": "n.",
        "word": "Rareness."
    },
    {
        "matched": false,
        "definition": "infrequent",
        "type": "adj.",
        "word": "Uncommon."
    },
    {
        "matched": false,
        "definition": "infringe",
        "type": "v.",
        "word": "To trespass upon."
    },
    {
        "matched": false,
        "definition": "infuse",
        "type": "v.",
        "word": "To instill, introduce, or inculcate, as principles or qualities."
    },
    {
        "matched": false,
        "definition": "infusion",
        "type": "n.",
        "word": "The act of imbuing, or pouring in."
    },
    {
        "matched": false,
        "definition": "ingenious",
        "type": "adj.",
        "word": "Evincing skill, originality, or cleverness, as in contrivance or          "
    },
    {
        "matched": false,
        "definition": "ingenuity",
        "type": "n.",
        "word": "Cleverness in contriving, combining, or originating."
    },
    {
        "matched": false,
        "definition": "ingenuous",
        "type": "adj.",
        "word": "Candid, frank, or open in character or quality."
    },
    {
        "matched": false,
        "definition": "inglorious",
        "type": "adj.",
        "word": "Shameful."
    },
    {
        "matched": false,
        "definition": "ingraft",
        "type": "v.",
        "word": "To set or implant deeply and firmly."
    },
    {
        "matched": false,
        "definition": "ingratiate",
        "type": "v.",
        "word": "To win confidence or good graces for oneself."
    },
    {
        "matched": false,
        "definition": "ingratitude",
        "type": "n.",
        "word": "Insensibility to kindness."
    },
    {
        "matched": false,
        "definition": "ingredient",
        "type": "n.",
        "word": "Component."
    },
    {
        "matched": false,
        "definition": "inherence",
        "type": "n.",
        "word": "The state of being permanently existing in something."
    },
    {
        "matched": false,
        "definition": "inherent",
        "type": "adj.",
        "word": "Intrinsic."
    },
    {
        "matched": false,
        "definition": "inhibit",
        "type": "v.",
        "word": "To hold back or in."
    },
    {
        "matched": false,
        "definition": "inhospitable",
        "type": "adj.",
        "word": "Not disposed to entertain strangers gratuitously."
    },
    {
        "matched": false,
        "definition": "inhuman",
        "type": "adj.",
        "word": "Savage."
    },
    {
        "matched": false,
        "definition": "inhume",
        "type": "v.",
        "word": "To place in the earth, as a dead body."
    },
    {
        "matched": false,
        "definition": "inimical",
        "type": "adj.",
        "word": "Adverse."
    },
    {
        "matched": false,
        "definition": "iniquity",
        "type": "n.",
        "word": "Gross wrong or injustice."
    },
    {
        "matched": false,
        "definition": "initiate",
        "type": "v.",
        "word": "To perform the first act or rite."
    },
    {
        "matched": false,
        "definition": "inject",
        "type": "v.",
        "word": "To introduce, as a fluid, by injection."
    },
    {
        "matched": false,
        "definition": "injunction",
        "type": "n.",
        "word": "Mandate."
    },
    {
        "matched": false,
        "definition": "inkling",
        "type": "n.",
        "word": "A hint."
    },
    {
        "matched": false,
        "definition": "inland",
        "type": "adj.",
        "word": "Remote from the sea."
    },
    {
        "matched": false,
        "definition": "inlet",
        "type": "n.",
        "word": "A small body of water leading into a larger."
    },
    {
        "matched": false,
        "definition": "inmost",
        "type": "adj.",
        "word": "Deepest within."
    },
    {
        "matched": false,
        "definition": "innocuous",
        "type": "adj.",
        "word": "Harmless."
    },
    {
        "matched": false,
        "definition": "innovate",
        "type": "v.",
        "word": "To introduce or strive to introduce new things."
    },
    {
        "matched": false,
        "definition": "innuendo",
        "type": "n.",
        "word": "Insinuation."
    },
    {
        "matched": false,
        "definition": "innumerable",
        "type": "adj.",
        "word": "Countless."
    },
    {
        "matched": false,
        "definition": "inoffensive",
        "type": "adj.",
        "word": "Causing nothing displeasing or disturbing."
    },
    {
        "matched": false,
        "definition": "inopportune",
        "type": "adj.",
        "word": "Unsuitable or inconvenient, especially as to time."
    },
    {
        "matched": false,
        "definition": "inquire",
        "type": "v.",
        "word": "To ask information about."
    },
    {
        "matched": false,
        "definition": "inquisition",
        "type": "n.",
        "word": "A court or tribunal for examination and punishment of heretics."
    },
    {
        "matched": false,
        "definition": "inquisitive",
        "type": "adj.",
        "word": "Given to questioning, especially out of curiosity."
    },
    {
        "matched": false,
        "definition": "inquisitor",
        "type": "n.",
        "word": "One who makes an investigation."
    },
    {
        "matched": false,
        "definition": "inroad",
        "type": "n.",
        "word": "Forcible encroachment or trespass."
    },
    {
        "matched": false,
        "definition": "insatiable",
        "type": "adj.",
        "word": "That desires or craves immoderately or unappeasably."
    },
    {
        "matched": false,
        "definition": "inscribe",
        "type": "v.",
        "word": "To enter in a book, or on a list, roll, or document, by writing."
    },
    {
        "matched": false,
        "definition": "inscrutable",
        "type": "adj.",
        "word": "Impenetrably mysterious or profound."
    },
    {
        "matched": false,
        "definition": "insecure",
        "type": "adj.",
        "word": "Not assured of safety."
    },
    {
        "matched": false,
        "definition": "insensible",
        "type": "adj.",
        "word": "Imperceptible."
    },
    {
        "matched": false,
        "definition": "insentient",
        "type": "adj.",
        "word": "Lacking the power of feeling or perceiving."
    },
    {
        "matched": false,
        "definition": "inseparable",
        "type": "adj.",
        "word": "That can not be separated."
    },
    {
        "matched": false,
        "definition": "insidious",
        "type": "adj.",
        "word": "Working ill by slow and stealthy means."
    },
    {
        "matched": false,
        "definition": "insight",
        "type": "n.",
        "word": "Intellectual discernment."
    },
    {
        "matched": false,
        "definition": "insignificance",
        "type": "n.",
        "word": "Lack of import or of importance."
    },
    {
        "matched": false,
        "definition": "insignificant",
        "type": "adj.",
        "word": "Without importance, force, or influence."
    },
    {
        "matched": false,
        "definition": "insinuate",
        "type": "v.",
        "word": "To imply."
    },
    {
        "matched": false,
        "definition": "insipid",
        "type": "adj.",
        "word": "Tasteless."
    },
    {
        "matched": false,
        "definition": "insistence",
        "type": "n.",
        "word": "Urgency."
    },
    {
        "matched": false,
        "definition": "insistent",
        "type": "adj.",
        "word": "Urgent."
    },
    {
        "matched": false,
        "definition": "insolence",
        "type": "n.",
        "word": "Pride or haughtiness exhibited in contemptuous and overbearing treatment of          "
    },
    {
        "matched": false,
        "definition": "insolent",
        "type": "adj.",
        "word": "Impudent."
    },
    {
        "matched": false,
        "definition": "insomnia",
        "type": "n.",
        "word": "Sleeplessness."
    },
    {
        "matched": false,
        "definition": "inspector",
        "type": "n.",
        "word": "An official appointed to examine or oversee any matter of public interest or          "
    },
    {
        "matched": false,
        "definition": "instance",
        "type": "n.",
        "word": "A single occurrence or happening of a given kind."
    },
    {
        "matched": false,
        "definition": "instant",
        "type": "n.",
        "word": "A very brief portion of time."
    },
    {
        "matched": false,
        "definition": "instantaneous",
        "type": "adj.",
        "word": "Done without perceptible lapse of time."
    },
    {
        "matched": false,
        "definition": "instigate",
        "type": "v.",
        "word": "To provoke."
    },
    {
        "matched": false,
        "definition": "instigator",
        "type": "n.",
        "word": "One who incites to evil."
    },
    {
        "matched": false,
        "definition": "instill",
        "type": "v.",
        "word": "To infuse."
    },
    {
        "matched": false,
        "definition": "instructive",
        "type": "adj.",
        "word": "Conveying knowledge."
    },
    {
        "matched": false,
        "definition": "insufficiency",
        "type": "n.",
        "word": "Inadequacy."
    },
    {
        "matched": false,
        "definition": "insufficient",
        "type": "adj.",
        "word": "Inadequate for some need, purpose, or use."
    },
    {
        "matched": false,
        "definition": "insular",
        "type": "adj.",
        "word": "Pertaining to an island."
    },
    {
        "matched": false,
        "definition": "insulate",
        "type": "v.",
        "word": "To place in a detached state or situation."
    },
    {
        "matched": false,
        "definition": "insuperable",
        "type": "adj.",
        "word": "Invincible."
    },
    {
        "matched": false,
        "definition": "insuppressible",
        "type": "adj.",
        "word": "Incapable of being concealed."
    },
    {
        "matched": false,
        "definition": "insurgence",
        "type": "n.",
        "word": "Uprising."
    },
    {
        "matched": false,
        "definition": "insurgent",
        "type": "n.",
        "word": "One who takes part in forcible opposition to the constituted authorities of a          "
    },
    {
        "matched": false,
        "definition": "insurrection",
        "type": "n.",
        "word": "The state of being in active resistance to authority."
    },
    {
        "matched": false,
        "definition": "intangible",
        "type": "adj.",
        "word": "Not perceptible to the touch."
    },
    {
        "matched": false,
        "definition": "integrity",
        "type": "n.",
        "word": "Uprightness of character and soundness of moral principle."
    },
    {
        "matched": false,
        "definition": "intellect",
        "type": "n.",
        "word": "The faculty of perception or thought."
    },
    {
        "matched": false,
        "definition": "intellectual",
        "type": "adj.",
        "word": "Characterized by intelligence."
    },
    {
        "matched": false,
        "definition": "intelligence",
        "type": "n.",
        "word": "Capacity to know or understand."
    },
    {
        "matched": false,
        "definition": "intelligible",
        "type": "adj.",
        "word": "Comprehensible."
    },
    {
        "matched": false,
        "definition": "intemperance",
        "type": "n.",
        "word": "Immoderate action or indulgence, as of the appetites."
    },
    {
        "matched": false,
        "definition": "intension",
        "type": "n.",
        "word": "The act of stringing or stretching, or state of being strained."
    },
    {
        "matched": false,
        "definition": "intensive",
        "type": "adj.",
        "word": "Adding emphasis or force."
    },
    {
        "matched": false,
        "definition": "intention",
        "type": "n.",
        "word": "That upon which the mind is set."
    },
    {
        "matched": false,
        "definition": "interact",
        "type": "v.",
        "word": "To act reciprocally."
    },
    {
        "matched": false,
        "definition": "intercede",
        "type": "v.",
        "word": "To mediate between persons."
    },
    {
        "matched": false,
        "definition": "intercept",
        "type": "v.",
        "word": "To interrupt the course of."
    },
    {
        "matched": false,
        "definition": "intercession",
        "type": "n.",
        "word": "Entreaty in behalf of others."
    },
    {
        "matched": false,
        "definition": "intercessor",
        "type": "n.",
        "word": "A mediator."
    },
    {
        "matched": false,
        "definition": "interdict",
        "type": "n.",
        "word": "Authoritative act of prohibition."
    },
    {
        "matched": false,
        "definition": "interim",
        "type": "n.",
        "word": "Time between acts or periods."
    },
    {
        "matched": false,
        "definition": "interlocutor",
        "type": "n.",
        "word": "One who takes part in a conversation or oral discussion."
    },
    {
        "matched": false,
        "definition": "interlude",
        "type": "n.",
        "word": "An action or event considered as coming between others of greater length."
    },
    {
        "matched": false,
        "definition": "intermediate",
        "type": "adj.",
        "word": "Being in a middle place or degree or between extremes."
    },
    {
        "matched": false,
        "definition": "interminable",
        "type": "adj.",
        "word": "Having no limit or end."
    },
    {
        "matched": false,
        "definition": "intermission",
        "type": "n.",
        "word": "A recess."
    },
    {
        "matched": false,
        "definition": "intermit",
        "type": "v.",
        "word": "To cause to cease temporarily."
    },
    {
        "matched": false,
        "definition": "intermittent",
        "type": "adj.",
        "word": "A temporary discontinuance."
    },
    {
        "matched": false,
        "definition": "interpolation",
        "type": "n.",
        "word": "Verbal interference."
    },
    {
        "matched": false,
        "definition": "interpose",
        "type": "v.",
        "word": "To come between other things or persons."
    },
    {
        "matched": false,
        "definition": "interposition",
        "type": "n.",
        "word": "A coming between."
    },
    {
        "matched": false,
        "definition": "interpreter",
        "type": "n.",
        "word": "A person who makes intelligible the speech of a foreigner by oral          "
    },
    {
        "matched": false,
        "definition": "interrogate",
        "type": "v.",
        "word": "To examine formally by questioning."
    },
    {
        "matched": false,
        "definition": "interrogative",
        "type": "adj.",
        "word": "Having the nature or form of a question."
    },
    {
        "matched": false,
        "definition": "interrogatory",
        "type": "n.",
        "word": "A question or inquiry."
    },
    {
        "matched": false,
        "definition": "interrupt",
        "type": "v.",
        "word": "To stop while in progress."
    },
    {
        "matched": false,
        "definition": "intersect",
        "type": "v.",
        "word": "To cut through or into so as to divide."
    },
    {
        "matched": false,
        "definition": "intervale",
        "type": "n.",
        "word": "A low tract of land between hills, especially along a river."
    },
    {
        "matched": false,
        "definition": "intervene",
        "type": "v.",
        "word": "To interfere for some end."
    },
    {
        "matched": false,
        "definition": "intestacy",
        "type": "n.",
        "word": "The condition resulting from one's dying not having made a valid will."
    },
    {
        "matched": false,
        "definition": "intestate",
        "type": "adj.",
        "word": "Not having made a valid will."
    },
    {
        "matched": false,
        "definition": "intestine",
        "type": "n.",
        "word": "That part of the digestive tube below or behind the stomach, extending to the          "
    },
    {
        "matched": false,
        "definition": "intimacy",
        "type": "n.",
        "word": "Close or confidential friendship."
    },
    {
        "matched": false,
        "definition": "intimidate",
        "type": "v.",
        "word": "To cause to become frightened."
    },
    {
        "matched": false,
        "definition": "intolerable",
        "type": "adj.",
        "word": "Insufferable."
    },
    {
        "matched": false,
        "definition": "intolerance",
        "type": "n.",
        "word": "Inability or unwillingness to bear or endure."
    },
    {
        "matched": false,
        "definition": "intolerant",
        "type": "adj.",
        "word": "Bigoted."
    },
    {
        "matched": false,
        "definition": "intoxicant",
        "type": "n.",
        "word": "Anything that unduly exhilarates or excites."
    },
    {
        "matched": false,
        "definition": "intoxicate",
        "type": "v.",
        "word": "To make drunk."
    },
    {
        "matched": false,
        "definition": "intracellular",
        "type": "adj.",
        "word": "Occurring or situated within a cell."
    },
    {
        "matched": false,
        "definition": "intramural",
        "type": "adj.",
        "word": "Situated within the walls of a city."
    },
    {
        "matched": false,
        "definition": "intrepid",
        "type": "adj.",
        "word": "Fearless and bold."
    },
    {
        "matched": false,
        "definition": "intricacy",
        "type": "n.",
        "word": "Perplexity."
    },
    {
        "matched": false,
        "definition": "intricate",
        "type": "adj.",
        "word": "Difficult to follow or understand."
    },
    {
        "matched": false,
        "definition": "intrigue",
        "type": "n.",
        "word": "A plot or scheme, usually complicated and intended to accomplish something by          "
    },
    {
        "matched": false,
        "definition": "intrinsic",
        "type": "adj.",
        "word": "Inherent."
    },
    {
        "matched": false,
        "definition": "introductory",
        "type": "adj.",
        "word": "Preliminary."
    },
    {
        "matched": false,
        "definition": "introgression",
        "type": "n.",
        "word": "Entrance."
    },
    {
        "matched": false,
        "definition": "intromit",
        "type": "v.",
        "word": "To insert."
    },
    {
        "matched": false,
        "definition": "introspect",
        "type": "v.",
        "word": "To look into."
    },
    {
        "matched": false,
        "definition": "introspection",
        "type": "n.",
        "word": "The act of observing and analyzing one's own thoughts and feelings."
    },
    {
        "matched": false,
        "definition": "introversion",
        "type": "n.",
        "word": "The act of turning or directing inward, physically or mentally."
    },
    {
        "matched": false,
        "definition": "introvert",
        "type": "v.",
        "word": "To turn within."
    },
    {
        "matched": false,
        "definition": "intrude",
        "type": "v.",
        "word": "To come in without leave or license."
    },
    {
        "matched": false,
        "definition": "intrusion",
        "type": "n.",
        "word": "The act of entering without warrant or invitation; encroachment."
    },
    {
        "matched": false,
        "definition": "intuition",
        "type": "n.",
        "word": "Instinctive knowledge or feeling."
    },
    {
        "matched": false,
        "definition": "inundate",
        "type": "v.",
        "word": "To fill with an overflowing abundance."
    },
    {
        "matched": false,
        "definition": "inundation",
        "type": "n.",
        "word": "Flood."
    },
    {
        "matched": false,
        "definition": "inure",
        "type": "v.",
        "word": "To harden or toughen by use, exercise, or exposure."
    },
    {
        "matched": false,
        "definition": "invalid",
        "type": "adj.",
        "word": "Having no force, weight, or cogency."
    },
    {
        "matched": false,
        "definition": "invalid",
        "type": "n.",
        "word": "One who is disabled by illness or injury."
    },
    {
        "matched": false,
        "definition": "invalidate",
        "type": "v.",
        "word": "To render of no force or effect."
    },
    {
        "matched": false,
        "definition": "invaluable",
        "type": "adj.",
        "word": "Exceedingly precious."
    },
    {
        "matched": false,
        "definition": "invariable",
        "type": "adj.",
        "word": "Unchangeable."
    },
    {
        "matched": false,
        "definition": "invasion",
        "type": "n.",
        "word": "Encroachment, as by an act of intrusion or trespass."
    },
    {
        "matched": false,
        "definition": "invective",
        "type": "n.",
        "word": "An utterance intended to cast censure, or reproach."
    },
    {
        "matched": false,
        "definition": "inveigh",
        "type": "v.",
        "word": "To utter vehement censure or invective."
    },
    {
        "matched": false,
        "definition": "inventive",
        "type": "adj.",
        "word": "Quick at contrivance."
    },
    {
        "matched": false,
        "definition": "inverse",
        "type": "adj.",
        "word": "Contrary in tendency or direction."
    },
    {
        "matched": false,
        "definition": "inversion",
        "type": "n.",
        "word": "Change of order so that the first shall become last and the last first."
    },
    {
        "matched": false,
        "definition": "invert",
        "type": "v.",
        "word": "To turn inside out, upside down, or in opposite direction."
    },
    {
        "matched": false,
        "definition": "investigator",
        "type": "n.",
        "word": "One who investigates."
    },
    {
        "matched": false,
        "definition": "investor",
        "type": "n.",
        "word": "One who invests money."
    },
    {
        "matched": false,
        "definition": "inveterate",
        "type": "adj.",
        "word": "Habitual."
    },
    {
        "matched": false,
        "definition": "invidious",
        "type": "adj.",
        "word": "Showing or feeling envy."
    },
    {
        "matched": false,
        "definition": "invigorate",
        "type": "v.",
        "word": "To animate."
    },
    {
        "matched": false,
        "definition": "invincible",
        "type": "adj.",
        "word": "Not to be conquered, subdued, or overcome."
    },
    {
        "matched": false,
        "definition": "inviolable",
        "type": "adj.",
        "word": "Incapable of being injured or disturbed."
    },
    {
        "matched": false,
        "definition": "invoke",
        "type": "v.",
        "word": "To call on for assistance or protection."
    },
    {
        "matched": false,
        "definition": "involuntary",
        "type": "adj.",
        "word": "Unwilling."
    },
    {
        "matched": false,
        "definition": "involution",
        "type": "n.",
        "word": "Complication."
    },
    {
        "matched": false,
        "definition": "involve",
        "type": "v.",
        "word": "To draw into entanglement, literally or figuratively."
    },
    {
        "matched": false,
        "definition": "invulnerable",
        "type": "adj.",
        "word": "That can not be wounded or hurt."
    },
    {
        "matched": false,
        "definition": "inwardly",
        "type": "adv.",
        "word": "With no outward manifestation."
    },
    {
        "matched": false,
        "definition": "iota",
        "type": "n.",
        "word": "A small or insignificant mark or part."
    },
    {
        "matched": false,
        "definition": "irascible",
        "type": "adj.",
        "word": "Prone to anger."
    },
    {
        "matched": false,
        "definition": "irate",
        "type": "adj.",
        "word": "Moved to anger."
    },
    {
        "matched": false,
        "definition": "ire",
        "type": "n.",
        "word": "Wrath."
    },
    {
        "matched": false,
        "definition": "iridescence",
        "type": "n.",
        "word": "A many-colored appearance."
    },
    {
        "matched": false,
        "definition": "iridescent",
        "type": "adj.",
        "word": "Exhibiting changing rainbow-colors due to the interference of the light."
    },
    {
        "matched": false,
        "definition": "irk",
        "type": "v.",
        "word": "To afflict with pain, vexation, or fatigue."
    },
    {
        "matched": false,
        "definition": "irksome",
        "type": "adj.",
        "word": "Wearisome."
    },
    {
        "matched": false,
        "definition": "irony",
        "type": "n.",
        "word": "Censure or ridicule under cover of praise or compliment."
    },
    {
        "matched": false,
        "definition": "irradiance",
        "type": "n.",
        "word": "Luster."
    },
    {
        "matched": false,
        "definition": "irradiate",
        "type": "v.",
        "word": "To render clear and intelligible."
    },
    {
        "matched": false,
        "definition": "irrational",
        "type": "adj.",
        "word": "Not possessed of reasoning powers or understanding."
    },
    {
        "matched": false,
        "definition": "irreducible",
        "type": "adj.",
        "word": "That can not be lessened."
    },
    {
        "matched": false,
        "definition": "irrefragable",
        "type": "adj.",
        "word": "That can not be refuted or disproved."
    },
    {
        "matched": false,
        "definition": "irrefrangible",
        "type": "adj.",
        "word": "That can not be broken or violated."
    },
    {
        "matched": false,
        "definition": "irrelevant",
        "type": "adj.",
        "word": "Inapplicable."
    },
    {
        "matched": false,
        "definition": "irreligious",
        "type": "adj.",
        "word": "Indifferent or opposed to religion."
    },
    {
        "matched": false,
        "definition": "irreparable",
        "type": "adj.",
        "word": "That can not be rectified or made amends for."
    },
    {
        "matched": false,
        "definition": "irrepressible",
        "type": "adj.",
        "word": "That can not be restrained or kept down."
    },
    {
        "matched": false,
        "definition": "irresistible",
        "type": "adj.",
        "word": "That can not be successfully withstood or opposed."
    },
    {
        "matched": false,
        "definition": "irresponsible",
        "type": "adj.",
        "word": "Careless of or unable to meet responsibilities."
    },
    {
        "matched": false,
        "definition": "irreverence",
        "type": "n.",
        "word": "The quality showing or expressing a deficiency of veneration, especially          "
    },
    {
        "matched": false,
        "definition": "irreverent",
        "type": "adj.",
        "word": "Showing or expressing a deficiency of veneration, especially for sacred          "
    },
    {
        "matched": false,
        "definition": "irreverential",
        "type": "adj.",
        "word": "Showing or expressing a deficiency of veneration, especially for sacred          "
    },
    {
        "matched": false,
        "definition": "irreversible",
        "type": "adj.",
        "word": "Irrevocable."
    },
    {
        "matched": false,
        "definition": "irrigant",
        "type": "adj.",
        "word": "Serving to water lands by artificial means."
    },
    {
        "matched": false,
        "definition": "irrigate",
        "type": "v.",
        "word": "To water, as land, by ditches or other artificial means."
    },
    {
        "matched": false,
        "definition": "irritable",
        "type": "adj.",
        "word": "Showing impatience or ill temper on little provocation."
    },
    {
        "matched": false,
        "definition": "irritancy",
        "type": "n.",
        "word": "The quality of producing vexation."
    },
    {
        "matched": false,
        "definition": "irritant",
        "type": "n.",
        "word": "A mechanical, chemical, or pathological agent of inflammation, pain, or          "
    },
    {
        "matched": false,
        "definition": "irritate",
        "type": "v.",
        "word": "To excite ill temper or impatience in."
    },
    {
        "matched": false,
        "definition": "irruption",
        "type": "n.",
        "word": "Sudden invasion."
    },
    {
        "matched": false,
        "definition": "isle",
        "type": "n.",
        "word": "An island."
    },
    {
        "matched": false,
        "definition": "islet",
        "type": "n.",
        "word": "A little island."
    },
    {
        "matched": false,
        "definition": "isobar",
        "type": "n.",
        "word": "A line joining points at which the barometric pressure is the same at a          "
    },
    {
        "matched": false,
        "definition": "isochronous",
        "type": "adj.",
        "word": "Relating to or denoting equal intervals of time."
    },
    {
        "matched": false,
        "definition": "isolate",
        "type": "v.",
        "word": "To separate from others of its kind."
    },
    {
        "matched": false,
        "definition": "isothermal",
        "type": "adj.",
        "word": "Having or marking equality of temperature."
    },
    {
        "matched": false,
        "definition": "itinerant",
        "type": "adj.",
        "word": "Wandering."
    },
    {
        "matched": false,
        "definition": "itinerary",
        "type": "n.",
        "word": "A detailed account or diary of a journey."
    },
    {
        "matched": false,
        "definition": "itinerate",
        "type": "v.",
        "word": "To wander from place to place."
    },
    {
        "matched": false,
        "definition": "jargon",
        "type": "n.",
        "word": "Confused, unintelligible speech or highly technical speech."
    },
    {
        "matched": false,
        "definition": "jaundice",
        "type": "n.",
        "word": "A morbid condition, due to obstructed excretion of bile or characterized by          "
    },
    {
        "matched": false,
        "definition": "jeopardize",
        "type": "v.",
        "word": "To imperil."
    },
    {
        "matched": false,
        "definition": "Jingo",
        "type": "n.",
        "word": "One of a party in Great Britain in favor of spirited and demonstrative foreign          "
    },
    {
        "matched": false,
        "definition": "jocose",
        "type": "adj.",
        "word": "Done or made in jest."
    },
    {
        "matched": false,
        "definition": "jocular",
        "type": "adj.",
        "word": "Inclined to joke."
    },
    {
        "matched": false,
        "definition": "joggle",
        "type": "n.",
        "word": "A sudden irregular shake or a push causing such a shake."
    },
    {
        "matched": false,
        "definition": "journalize",
        "type": "v.",
        "word": "To keep a diary."
    },
    {
        "matched": false,
        "definition": "jovial",
        "type": "adj.",
        "word": "Merry."
    },
    {
        "matched": false,
        "definition": "jubilation",
        "type": "n.",
        "word": "Exultation."
    },
    {
        "matched": false,
        "definition": "judgment",
        "type": "n.",
        "word": "The faculty by the exercise of which a deliberate conclusion is reached."
    },
    {
        "matched": false,
        "definition": "judicature",
        "type": "n.",
        "word": "Distribution and administration of justice by trial and judgment."
    },
    {
        "matched": false,
        "definition": "judicial",
        "type": "adj.",
        "word": "Pertaining to the administration of justice."
    },
    {
        "matched": false,
        "definition": "judiciary",
        "type": "n.",
        "word": "That department of government which administers the law relating to civil and          "
    },
    {
        "matched": false,
        "definition": "judicious",
        "type": "adj.",
        "word": "Prudent."
    },
    {
        "matched": false,
        "definition": "juggle",
        "type": "v.",
        "word": "To play tricks of sleight of hand."
    },
    {
        "matched": false,
        "definition": "jugglery",
        "type": "n.",
        "word": "The art or practice of sleight of hand."
    },
    {
        "matched": false,
        "definition": "jugular",
        "type": "adj.",
        "word": "Pertaining to the throat."
    },
    {
        "matched": false,
        "definition": "juicy",
        "type": "adj.",
        "word": "Succulent."
    },
    {
        "matched": false,
        "definition": "junction",
        "type": "n.",
        "word": "The condition of being joined."
    },
    {
        "matched": false,
        "definition": "juncture",
        "type": "n.",
        "word": "An articulation, joint, or seam."
    },
    {
        "matched": false,
        "definition": "junta",
        "type": "n.",
        "word": "A council or assembly that deliberates in secret upon the affairs of government."
    },
    {
        "matched": false,
        "definition": "juridical",
        "type": "adj.",
        "word": "Assumed by law to exist."
    },
    {
        "matched": false,
        "definition": "jurisdiction",
        "type": "n.",
        "word": "Lawful power or right to exercise official authority."
    },
    {
        "matched": false,
        "definition": "jurisprudence",
        "type": "n.",
        "word": "The science of rights in accordance with positive law."
    },
    {
        "matched": false,
        "definition": "juror",
        "type": "n.",
        "word": "One who serves on a jury or is sworn in for jury duty in a court of justice."
    },
    {
        "matched": false,
        "definition": "joust",
        "type": "v.",
        "word": "To engage in a tilt with lances on horseback."
    },
    {
        "matched": false,
        "definition": "justification",
        "type": "n.",
        "word": "Vindication."
    },
    {
        "matched": false,
        "definition": "juvenile",
        "type": "adj.",
        "word": "Characteristic of youth."
    },
    {
        "matched": false,
        "definition": "juxtapose",
        "type": "v.",
        "word": "To place close together."
    },
    {
        "matched": false,
        "definition": "keepsake",
        "type": "n.",
        "word": "Anything kept or given to be kept for the sake of the giver."
    },
    {
        "matched": false,
        "definition": "kerchief",
        "type": "n.",
        "word": "A square of linen, silk, or other material, used as a covering for the head or          "
    },
    {
        "matched": false,
        "definition": "kernel",
        "type": "n.",
        "word": "A grain or seed."
    },
    {
        "matched": false,
        "definition": "kiln",
        "type": "n.",
        "word": "An oven or furnace for baking, burning, or drying industrial products."
    },
    {
        "matched": false,
        "definition": "kiloliter",
        "type": "n.",
        "word": "One thousand liters."
    },
    {
        "matched": false,
        "definition": "kilometer",
        "type": "n.",
        "word": "A length of 1,000 meters."
    },
    {
        "matched": false,
        "definition": "kilowatt",
        "type": "n.",
        "word": "One thousand watts."
    },
    {
        "matched": false,
        "definition": "kimono",
        "type": "n.",
        "word": "A loose robe, fastening with a sash, the principal outer garment in Japan."
    },
    {
        "matched": false,
        "definition": "kind-hearted",
        "type": "adj.",
        "word": "Having a kind and sympathetic nature."
    },
    {
        "matched": false,
        "definition": "kingling",
        "type": "n.",
        "word": "A petty king."
    },
    {
        "matched": false,
        "definition": "kingship",
        "type": "n.",
        "word": "Royal state."
    },
    {
        "matched": false,
        "definition": "kinsfolk",
        "type": "n.",
        "word": "pl. Relatives."
    },
    {
        "matched": false,
        "definition": "knavery",
        "type": "n.",
        "word": "Deceitfulness in dealing."
    },
    {
        "matched": false,
        "definition": "knead",
        "type": "v.",
        "word": "To mix and work into a homogeneous mass, especially with the hands."
    },
    {
        "matched": false,
        "definition": "knickknack",
        "type": "n.",
        "word": "A small article, more for ornament that use."
    },
    {
        "matched": false,
        "definition": "knight errant",
        "type": "n.",
        "word": "One of the wandering knights who in the middle ages went forth in search          "
    },
    {
        "matched": false,
        "definition": "knighthood",
        "type": "n.",
        "word": "Chivalry."
    },
    {
        "matched": false,
        "definition": "laborious",
        "type": "adj.",
        "word": "Toilsome."
    },
    {
        "matched": false,
        "definition": "labyrinth",
        "type": "n.",
        "word": "A maze."
    },
    {
        "matched": false,
        "definition": "lacerate",
        "type": "v.",
        "word": "To tear rudely or raggedly."
    },
    {
        "matched": false,
        "definition": "lackadaisical",
        "type": "adj.",
        "word": "Listless."
    },
    {
        "matched": false,
        "definition": "lactation",
        "type": "n.",
        "word": "The secretion of milk."
    },
    {
        "matched": false,
        "definition": "lacteal",
        "type": "adj.",
        "word": "Milky."
    },
    {
        "matched": false,
        "definition": "lactic",
        "type": "adj.",
        "word": "Pertaining to milk."
    },
    {
        "matched": false,
        "definition": "laddie",
        "type": "n.",
        "word": "A lad."
    },
    {
        "matched": false,
        "definition": "ladle",
        "type": "n.",
        "word": "A cup-shaped vessel with a long handle, intended for dipping up and pouring          "
    },
    {
        "matched": false,
        "definition": "laggard",
        "type": "adj.",
        "word": "Falling behind."
    },
    {
        "matched": false,
        "definition": "landholder",
        "type": "n.",
        "word": "Landowner."
    },
    {
        "matched": false,
        "definition": "landlord",
        "type": "n.",
        "word": "A man who owns and lets a tenement or tenements."
    },
    {
        "matched": false,
        "definition": "landmark",
        "type": "n.",
        "word": "A familiar object in the landscape serving as a guide to an area otherwise          "
    },
    {
        "matched": false,
        "definition": "landscape",
        "type": "n.",
        "word": "A rural view, especially one of picturesque effect, as seen from a distance          "
    },
    {
        "matched": false,
        "definition": "languid",
        "type": "adj.",
        "word": "Relaxed."
    },
    {
        "matched": false,
        "definition": "languor",
        "type": "n.",
        "word": "Lassitude of body or depression."
    },
    {
        "matched": false,
        "definition": "lapse",
        "type": "n.",
        "word": "A slight deviation from what is right, proper, or just."
    },
    {
        "matched": false,
        "definition": "lascivious",
        "type": "adj.",
        "word": "Lustful."
    },
    {
        "matched": false,
        "definition": "lassie",
        "type": "n.",
        "word": "A little lass."
    },
    {
        "matched": false,
        "definition": "latent",
        "type": "adj.",
        "word": "Dormant."
    },
    {
        "matched": false,
        "definition": "latency",
        "type": "n.",
        "word": "The state of being dormant."
    },
    {
        "matched": false,
        "definition": "later",
        "type": "adv.",
        "word": "At a subsequent time."
    },
    {
        "matched": false,
        "definition": "lateral",
        "type": "adj.",
        "word": "Directed toward the side."
    },
    {
        "matched": false,
        "definition": "latish",
        "type": "adj.",
        "word": "Rather late."
    },
    {
        "matched": false,
        "definition": "lattice",
        "type": "n.",
        "word": "Openwork of metal or wood, formed by crossing or interlacing strips or bars."
    },
    {
        "matched": false,
        "definition": "laud",
        "type": "v.",
        "word": "To praise in words or song."
    },
    {
        "matched": false,
        "definition": "laudable",
        "type": "adj.",
        "word": "Praiseworthy."
    },
    {
        "matched": false,
        "definition": "laudation",
        "type": "n.",
        "word": "High praise."
    },
    {
        "matched": false,
        "definition": "laudatory",
        "type": "adj.",
        "word": "Pertaining to, expressing, or containing praise."
    },
    {
        "matched": false,
        "definition": "laundress",
        "type": "n.",
        "word": "Washerwoman."
    },
    {
        "matched": false,
        "definition": "laureate",
        "type": "adj.",
        "word": "Crowned with laurel, as a mark of distinction."
    },
    {
        "matched": false,
        "definition": "lave",
        "type": "v.",
        "word": "To wash or bathe."
    },
    {
        "matched": false,
        "definition": "lawgiver",
        "type": "n.",
        "word": "A legislator."
    },
    {
        "matched": false,
        "definition": "lawmaker",
        "type": "n.",
        "word": "A legislator."
    },
    {
        "matched": false,
        "definition": "lax",
        "type": "adj.",
        "word": "Not stringent or energetic."
    },
    {
        "matched": false,
        "definition": "laxative",
        "type": "adj.",
        "word": "Having power to open or loosen the bowels."
    },
    {
        "matched": false,
        "definition": "lea",
        "type": "n.",
        "word": "A field."
    },
    {
        "matched": false,
        "definition": "leaflet",
        "type": "n.",
        "word": "A little leaf or a booklet."
    },
    {
        "matched": false,
        "definition": "leaven",
        "type": "v.",
        "word": "To make light by fermentation, as dough."
    },
    {
        "matched": false,
        "definition": "leeward",
        "type": "n.",
        "word": "That side or direction toward which the wind blows."
    },
    {
        "matched": false,
        "definition": "left-handed",
        "type": "adj.",
        "word": "Using the left hand or arm more dexterously than the right."
    },
    {
        "matched": false,
        "definition": "legacy",
        "type": "n.",
        "word": "A bequest."
    },
    {
        "matched": false,
        "definition": "legalize",
        "type": "v.",
        "word": "To give the authority of law to."
    },
    {
        "matched": false,
        "definition": "legging",
        "type": "n.",
        "word": "A covering for the leg."
    },
    {
        "matched": false,
        "definition": "legible",
        "type": "adj.",
        "word": "That may be read with ease."
    },
    {
        "matched": false,
        "definition": "legionary",
        "type": "n.",
        "word": "A member of an ancient Roman legion or of the modern French Legion of Honor."
    },
    {
        "matched": false,
        "definition": "legislate",
        "type": "v.",
        "word": "To make or enact a law or laws."
    },
    {
        "matched": false,
        "definition": "legislative",
        "type": "adj.",
        "word": "That makes or enacts laws."
    },
    {
        "matched": false,
        "definition": "legislator",
        "type": "n.",
        "word": "A lawgiver."
    },
    {
        "matched": false,
        "definition": "legitimacy",
        "type": "n.",
        "word": "Accordance with law."
    },
    {
        "matched": false,
        "definition": "legitimate",
        "type": "adj.",
        "word": "Having the sanction of law or established custom."
    },
    {
        "matched": false,
        "definition": "leisure",
        "type": "n.",
        "word": "Spare time."
    },
    {
        "matched": false,
        "definition": "leniency",
        "type": "n.",
        "word": "Forbearance."
    },
    {
        "matched": false,
        "definition": "lenient",
        "type": "adj.",
        "word": "Not harsh."
    },
    {
        "matched": false,
        "definition": "leonine",
        "type": "adj.",
        "word": "Like a lion."
    },
    {
        "matched": false,
        "definition": "lethargy",
        "type": "n.",
        "word": "Prolonged sluggishness of body or mind."
    },
    {
        "matched": false,
        "definition": "levee",
        "type": "n.",
        "word": "An embankment beside a river or stream or an arm of the sea, to prevent overflow."
    },
    {
        "matched": false,
        "definition": "lever",
        "type": "n.",
        "word": "That which exerts, or through which one may exert great power."
    },
    {
        "matched": false,
        "definition": "leviathan",
        "type": "n.",
        "word": "Any large animal, as a whale."
    },
    {
        "matched": false,
        "definition": "levity",
        "type": "n.",
        "word": "Frivolity."
    },
    {
        "matched": false,
        "definition": "levy",
        "type": "v.",
        "word": "To impose and collect by force or threat of force."
    },
    {
        "matched": false,
        "definition": "lewd",
        "type": "adj.",
        "word": "Characterized by lust or lasciviousness."
    },
    {
        "matched": false,
        "definition": "lexicographer",
        "type": "n.",
        "word": "One who makes dictionaries."
    },
    {
        "matched": false,
        "definition": "lexicography",
        "type": "n.",
        "word": "The making of dictionaries."
    },
    {
        "matched": false,
        "definition": "lexicon",
        "type": "n.",
        "word": "A dictionary."
    },
    {
        "matched": false,
        "definition": "liable",
        "type": "adj.",
        "word": "Justly or legally responsible."
    },
    {
        "matched": false,
        "definition": "libel",
        "type": "n.",
        "word": "Defamation."
    },
    {
        "matched": false,
        "definition": "liberalism",
        "type": "n.",
        "word": "Opposition to conservatism."
    },
    {
        "matched": false,
        "definition": "liberate",
        "type": "v.",
        "word": "To set free or release from bondage."
    },
    {
        "matched": false,
        "definition": "licentious",
        "type": "adj.",
        "word": "Wanton."
    },
    {
        "matched": false,
        "definition": "licit",
        "type": "adj.",
        "word": "Lawful."
    },
    {
        "matched": false,
        "definition": "liege",
        "type": "adj.",
        "word": "Sovereign."
    },
    {
        "matched": false,
        "definition": "lien",
        "type": "n.",
        "word": "A legal claim or hold on property, as security for a debt or charge."
    },
    {
        "matched": false,
        "definition": "lieu",
        "type": "n.",
        "word": "Stead."
    },
    {
        "matched": false,
        "definition": "lifelike",
        "type": "adj.",
        "word": "Realistic."
    },
    {
        "matched": false,
        "definition": "lifelong",
        "type": "adj.",
        "word": "Lasting or continuous through life."
    },
    {
        "matched": false,
        "definition": "lifetime",
        "type": "n.",
        "word": "The time that life continues."
    },
    {
        "matched": false,
        "definition": "ligament",
        "type": "n.",
        "word": "That which binds objects together."
    },
    {
        "matched": false,
        "definition": "ligature",
        "type": "n.",
        "word": "Anything that constricts, or serves for binding or tying."
    },
    {
        "matched": false,
        "definition": "light-hearted",
        "type": "adj.",
        "word": "Free from care."
    },
    {
        "matched": false,
        "definition": "ligneous",
        "type": "adj.",
        "word": "Having the texture of appearance of wood."
    },
    {
        "matched": false,
        "definition": "likelihood",
        "type": "n.",
        "word": "A probability."
    },
    {
        "matched": false,
        "definition": "likely",
        "type": "adj.",
        "word": "Plausible."
    },
    {
        "matched": false,
        "definition": "liking",
        "type": "n.",
        "word": "Fondness."
    },
    {
        "matched": false,
        "definition": "limitation",
        "type": "n.",
        "word": "A restriction."
    },
    {
        "matched": false,
        "definition": "linear",
        "type": "adj.",
        "word": "Of the nature of a line."
    },
    {
        "matched": false,
        "definition": "liner",
        "type": "n.",
        "word": "A vessel belonging to a steamship-line."
    },
    {
        "matched": false,
        "definition": "lingo",
        "type": "n.",
        "word": "Language."
    },
    {
        "matched": false,
        "definition": "lingua",
        "type": "n.",
        "word": "The tongue."
    },
    {
        "matched": false,
        "definition": "lingual",
        "type": "adj.",
        "word": "Pertaining to the use of the tongue in utterance."
    },
    {
        "matched": false,
        "definition": "linguist",
        "type": "n.",
        "word": "One who is acquainted with several languages."
    },
    {
        "matched": false,
        "definition": "linguistics",
        "type": "n.",
        "word": "The science of languages, or of the origin, history, and significance of          "
    },
    {
        "matched": false,
        "definition": "liniment",
        "type": "n.",
        "word": "A liquid preparation for rubbing on the skin in cases of bruises,          "
    },
    {
        "matched": false,
        "definition": "liquefacient",
        "type": "adj.",
        "word": "Possessing a liquefying nature or power."
    },
    {
        "matched": false,
        "definition": "liquefy",
        "type": "v.",
        "word": "To convert into a liquid or into liquid form."
    },
    {
        "matched": false,
        "definition": "liqueur",
        "type": "n.",
        "word": "An alcoholic cordial sweetened and flavored with aromatic substances."
    },
    {
        "matched": false,
        "definition": "liquidate",
        "type": "v.",
        "word": "To deliver the amount or value of."
    },
    {
        "matched": false,
        "definition": "liquor",
        "type": "n.",
        "word": "Any alcoholic or intoxicating liquid."
    },
    {
        "matched": false,
        "definition": "listless",
        "type": "adj.",
        "word": "Inattentive."
    },
    {
        "matched": false,
        "definition": "literacy",
        "type": "n.",
        "word": "The state or condition of knowing how to read and write."
    },
    {
        "matched": false,
        "definition": "literal",
        "type": "adj.",
        "word": "Following the exact words."
    },
    {
        "matched": false,
        "definition": "literature",
        "type": "n.",
        "word": "The written or printed productions of the human mind collectively."
    },
    {
        "matched": false,
        "definition": "lithe",
        "type": "adj.",
        "word": "Supple."
    },
    {
        "matched": false,
        "definition": "lithesome",
        "type": "adj.",
        "word": "Nimble."
    },
    {
        "matched": false,
        "definition": "lithograph",
        "type": "n.",
        "word": "A print made by printing from stone."
    },
    {
        "matched": false,
        "definition": "lithotype",
        "type": "n.",
        "word": "In engraving, an etched stone surface for printing."
    },
    {
        "matched": false,
        "definition": "litigant",
        "type": "n.",
        "word": "A party to a lawsuit."
    },
    {
        "matched": false,
        "definition": "litigate",
        "type": "v.",
        "word": "To cause to become the subject-matter of a suit at law."
    },
    {
        "matched": false,
        "definition": "litigious",
        "type": "adj.",
        "word": "Quarrelsome."
    },
    {
        "matched": false,
        "definition": "littoral",
        "type": "adj.",
        "word": "Of, pertaining to, or living on a shore."
    },
    {
        "matched": false,
        "definition": "liturgy",
        "type": "n.",
        "word": "A ritual."
    },
    {
        "matched": false,
        "definition": "livelihood",
        "type": "n.",
        "word": "Means of subsistence."
    },
    {
        "matched": false,
        "definition": "livid",
        "type": "adj.",
        "word": "Black-and-blue, as contused flesh."
    },
    {
        "matched": false,
        "definition": "loam",
        "type": "n.",
        "word": "A non-coherent mixture of sand and clay."
    },
    {
        "matched": false,
        "definition": "loath",
        "type": "adj.",
        "word": "Averse."
    },
    {
        "matched": false,
        "definition": "loathe",
        "type": "v.",
        "word": "To abominate."
    },
    {
        "matched": false,
        "definition": "locative",
        "type": "adj.",
        "word": "Indicating place, or the place where or wherein an action occurs."
    },
    {
        "matched": false,
        "definition": "loch",
        "type": "n.",
        "word": "A lake."
    },
    {
        "matched": false,
        "definition": "locomotion",
        "type": "n.",
        "word": "The act or power of moving from one place to another."
    },
    {
        "matched": false,
        "definition": "lode",
        "type": "n.",
        "word": "A somewhat continuous unstratified metal- bearing vein."
    },
    {
        "matched": false,
        "definition": "lodgment",
        "type": "n.",
        "word": "The act of furnishing with temporary quarters."
    },
    {
        "matched": false,
        "definition": "logic",
        "type": "n.",
        "word": "The science of correct thinking."
    },
    {
        "matched": false,
        "definition": "logical",
        "type": "adj.",
        "word": "Capable of or characterized by clear reasoning."
    },
    {
        "matched": false,
        "definition": "logician",
        "type": "n.",
        "word": "An expert reasoner."
    },
    {
        "matched": false,
        "definition": "loiterer",
        "type": "n.",
        "word": "One who consumes time idly."
    },
    {
        "matched": false,
        "definition": "loneliness",
        "type": "n.",
        "word": "Solitude."
    },
    {
        "matched": false,
        "definition": "longevity",
        "type": "n.",
        "word": "Unusually prolonged life."
    },
    {
        "matched": false,
        "definition": "loot",
        "type": "v.",
        "word": "To plunder."
    },
    {
        "matched": false,
        "definition": "loquacious",
        "type": "adj.",
        "word": "Talkative."
    },
    {
        "matched": false,
        "definition": "lordling",
        "type": "n.",
        "word": "A little lord."
    },
    {
        "matched": false,
        "definition": "lough",
        "type": "n.",
        "word": "A lake or loch."
    },
    {
        "matched": false,
        "definition": "louse",
        "type": "n.",
        "word": "A small insect parasitic on and sucking the blood of mammals."
    },
    {
        "matched": false,
        "definition": "lovable",
        "type": "adj.",
        "word": "Amiable."
    },
    {
        "matched": false,
        "definition": "low-spirited",
        "type": "adj.",
        "word": "Despondent."
    },
    {
        "matched": false,
        "definition": "lowly",
        "type": "adv.",
        "word": "Rudely."
    },
    {
        "matched": false,
        "definition": "lucid",
        "type": "adj.",
        "word": "Mentally sound."
    },
    {
        "matched": false,
        "definition": "lucrative",
        "type": "adj.",
        "word": "Highly profitable."
    },
    {
        "matched": false,
        "definition": "ludicrous",
        "type": "adj.",
        "word": "Laughable."
    },
    {
        "matched": false,
        "definition": "luminary",
        "type": "n.",
        "word": "One of the heavenly bodies as a source of light."
    },
    {
        "matched": false,
        "definition": "luminescent",
        "type": "adj.",
        "word": "Showing increase of light."
    },
    {
        "matched": false,
        "definition": "luminescence",
        "type": "n.",
        "word": "Showing increase."
    },
    {
        "matched": false,
        "definition": "luminosity",
        "type": "n.",
        "word": "The quality of giving or radiating light."
    },
    {
        "matched": false,
        "definition": "luminous",
        "type": "adj.",
        "word": "Giving or radiating light."
    },
    {
        "matched": false,
        "definition": "lunacy",
        "type": "n.",
        "word": "Mental unsoundness."
    },
    {
        "matched": false,
        "definition": "lunar",
        "type": "adj.",
        "word": "Pertaining to the moon."
    },
    {
        "matched": false,
        "definition": "lunatic",
        "type": "n.",
        "word": "An insane person."
    },
    {
        "matched": false,
        "definition": "lune",
        "type": "n.",
        "word": "The moon."
    },
    {
        "matched": false,
        "definition": "lurid",
        "type": "adj.",
        "word": "Ghastly and sensational."
    },
    {
        "matched": false,
        "definition": "luscious",
        "type": "adj.",
        "word": "Rich, sweet, and delicious."
    },
    {
        "matched": false,
        "definition": "lustrous",
        "type": "adj.",
        "word": "Shining."
    },
    {
        "matched": false,
        "definition": "luxuriance",
        "type": "n.",
        "word": "Excessive or superfluous growth or quantity."
    },
    {
        "matched": false,
        "definition": "luxuriant",
        "type": "adj.",
        "word": "Abundant or superabundant in growth."
    },
    {
        "matched": false,
        "definition": "luxuriate",
        "type": "v.",
        "word": "To live sumptuously."
    },
    {
        "matched": false,
        "definition": "lying",
        "type": "n.",
        "word": "Untruthfulness."
    },
    {
        "matched": false,
        "definition": "lyre",
        "type": "n.",
        "word": "One of the most ancient of stringed instruments of the harp class."
    },
    {
        "matched": false,
        "definition": "lyric",
        "type": "adj.",
        "word": "Fitted for expression in song."
    },
    {
        "matched": false,
        "definition": "macadamize",
        "type": "v.",
        "word": "To cover or pave, as a path or roadway, with small broken stone."
    },
    {
        "matched": false,
        "definition": "machinery",
        "type": "n.",
        "word": "The parts of a machine or engine, taken collectively."
    },
    {
        "matched": false,
        "definition": "machinist",
        "type": "n.",
        "word": "One who makes or repairs machines, or uses metal-working tools."
    },
    {
        "matched": false,
        "definition": "macrocosm",
        "type": "n.",
        "word": "The whole of any sphere or department of nature or knowledge to which man is          "
    },
    {
        "matched": false,
        "definition": "madden",
        "type": "v.",
        "word": "To inflame with passion."
    },
    {
        "matched": false,
        "definition": "Madonna",
        "type": "n.",
        "word": "A painted or sculptured representation of the Virgin, usually with the infant          "
    },
    {
        "matched": false,
        "definition": "magician",
        "type": "n.",
        "word": "A sorcerer."
    },
    {
        "matched": false,
        "definition": "magisterial",
        "type": "adj.",
        "word": "Having an air of authority."
    },
    {
        "matched": false,
        "definition": "magistracy",
        "type": "n.",
        "word": "The office or dignity of a magistrate."
    },
    {
        "matched": false,
        "definition": "magnanimous",
        "type": "adj.",
        "word": "Generous in treating or judging others."
    },
    {
        "matched": false,
        "definition": "magnate",
        "type": "n.",
        "word": "A person of rank or importance."
    },
    {
        "matched": false,
        "definition": "magnet",
        "type": "n.",
        "word": "A body possessing that peculiar form of polarity found in nature in the          "
    },
    {
        "matched": false,
        "definition": "magnetize",
        "type": "v.",
        "word": "To make a magnet of, permanently, or temporarily."
    },
    {
        "matched": false,
        "definition": "magnificence",
        "type": "n.",
        "word": "The exhibition of greatness of action, character, intellect, wealth, or          "
    },
    {
        "matched": false,
        "definition": "magnificent",
        "type": "adj.",
        "word": "Grand or majestic in appearance, quality, or action."
    },
    {
        "matched": false,
        "definition": "magnitude",
        "type": "n.",
        "word": "Importance."
    },
    {
        "matched": false,
        "definition": "maharaja",
        "type": "n.",
        "word": "A great Hindu prince."
    },
    {
        "matched": false,
        "definition": "maidenhood",
        "type": "n.",
        "word": "Virginity."
    },
    {
        "matched": false,
        "definition": "maintain",
        "type": "v.",
        "word": "To hold or preserve in any particular state or condition."
    },
    {
        "matched": false,
        "definition": "maintenance",
        "type": "n.",
        "word": "That which supports or sustains."
    },
    {
        "matched": false,
        "definition": "maize",
        "type": "n.",
        "word": "Indian corn: usually in the United States called simply corn."
    },
    {
        "matched": false,
        "definition": "makeup",
        "type": "n.",
        "word": "The arrangements or combination of the parts of which anything is composed."
    },
    {
        "matched": false,
        "definition": "malady",
        "type": "n.",
        "word": "Any physical disease or disorder, especially a chronic or deep-seated one."
    },
    {
        "matched": false,
        "definition": "malaria",
        "type": "n.",
        "word": "A fever characterized by alternating chills, fever, and sweating."
    },
    {
        "matched": false,
        "definition": "malcontent",
        "type": "n.",
        "word": "One who is dissatisfied with the existing state of affairs."
    },
    {
        "matched": false,
        "definition": "malediction",
        "type": "n.",
        "word": "The calling down of a curse or curses."
    },
    {
        "matched": false,
        "definition": "malefactor",
        "type": "n.",
        "word": "One who injures another."
    },
    {
        "matched": false,
        "definition": "maleficent",
        "type": "adj.",
        "word": "Mischievous."
    },
    {
        "matched": false,
        "definition": "malevolence",
        "type": "n.",
        "word": "Ill will."
    },
    {
        "matched": false,
        "definition": "malevolent",
        "type": "adj.",
        "word": "Wishing evil to others."
    },
    {
        "matched": false,
        "definition": "malign",
        "type": "v.",
        "word": "To speak evil of, especially to do so falsely and severely."
    },
    {
        "matched": false,
        "definition": "malignant",
        "type": "adj.",
        "word": "Evil in nature or tending to do great harm or mischief."
    },
    {
        "matched": false,
        "definition": "malleable",
        "type": "adj.",
        "word": "Pliant."
    },
    {
        "matched": false,
        "definition": "mallet",
        "type": "n.",
        "word": "A wooden hammer."
    },
    {
        "matched": false,
        "definition": "maltreat",
        "type": "v.",
        "word": "To treat ill, unkindly, roughly, or abusively."
    },
    {
        "matched": false,
        "definition": "man-trap",
        "type": "n.",
        "word": "A place or structure dangerous to human life."
    },
    {
        "matched": false,
        "definition": "mandate",
        "type": "n.",
        "word": "A command."
    },
    {
        "matched": false,
        "definition": "mandatory",
        "type": "adj.",
        "word": "Expressive of positive command, as distinguished from merely directory."
    },
    {
        "matched": false,
        "definition": "mane",
        "type": "n.",
        "word": "The long hair growing upon and about the neck of certain animals, as the horse and          "
    },
    {
        "matched": false,
        "definition": "man-eater",
        "type": "n.",
        "word": "An animal that devours human beings."
    },
    {
        "matched": false,
        "definition": "maneuver",
        "type": "v.",
        "word": "To make adroit or artful moves: manage affairs by strategy."
    },
    {
        "matched": false,
        "definition": "mania",
        "type": "n.",
        "word": "Insanity."
    },
    {
        "matched": false,
        "definition": "maniac",
        "type": "n.",
        "word": "a person raving with madness."
    },
    {
        "matched": false,
        "definition": "manifesto",
        "type": "n.",
        "word": "A public declaration, making announcement, explanation or defense of          "
    },
    {
        "matched": false,
        "definition": "manlike",
        "type": "adj.",
        "word": "Like a man."
    },
    {
        "matched": false,
        "definition": "manliness",
        "type": "n.",
        "word": "The qualities characteristic of a true man, as bravery, resolution, etc."
    },
    {
        "matched": false,
        "definition": "mannerism",
        "type": "n.",
        "word": "Constant or excessive adherence to one manner, style, or peculiarity, as of          "
    },
    {
        "matched": false,
        "definition": "manor",
        "type": "n.",
        "word": "The landed estate of a lord or nobleman."
    },
    {
        "matched": false,
        "definition": "mantel",
        "type": "n.",
        "word": "The facing, sometimes richly ornamented, about a fireplace, including the usual          "
    },
    {
        "matched": false,
        "definition": "mantle",
        "type": "n.",
        "word": "A cloak."
    },
    {
        "matched": false,
        "definition": "manufacturer",
        "type": "n.",
        "word": "A person engaged in manufacturing as a business."
    },
    {
        "matched": false,
        "definition": "manumission",
        "type": "n.",
        "word": "Emancipation."
    },
    {
        "matched": false,
        "definition": "manumit",
        "type": "v.",
        "word": "To set free from bondage."
    },
    {
        "matched": false,
        "definition": "marine",
        "type": "adj.",
        "word": "Of or pertaining to the sea or matters connected with the sea."
    },
    {
        "matched": false,
        "definition": "maritime",
        "type": "adj.",
        "word": "Situated on or near the sea."
    },
    {
        "matched": false,
        "definition": "maroon",
        "type": "v.",
        "word": "To put ashore and abandon (a person) on a desolate coast or island."
    },
    {
        "matched": false,
        "definition": "martial",
        "type": "adj.",
        "word": "Pertaining to war or military operations."
    },
    {
        "matched": false,
        "definition": "Martian",
        "type": "adj.",
        "word": "Pertaining to Mars, either the Roman god of war or the planet."
    },
    {
        "matched": false,
        "definition": "martyrdom",
        "type": "n.",
        "word": "Submission to death or persecution for the sake of faith or principle."
    },
    {
        "matched": false,
        "definition": "marvel",
        "type": "v.",
        "word": "To be astonished and perplexed because of (something)."
    },
    {
        "matched": false,
        "definition": "masonry",
        "type": "n.",
        "word": "The art or work of constructing, as buildings, walls, etc., with regularly          "
    },
    {
        "matched": false,
        "definition": "masquerade",
        "type": "n.",
        "word": "A social party composed of persons masked and costumed so as to be          "
    },
    {
        "matched": false,
        "definition": "massacre",
        "type": "n.",
        "word": "The unnecessary and indiscriminate killing of human beings."
    },
    {
        "matched": false,
        "definition": "massive",
        "type": "adj.",
        "word": "Of considerable bulk and weight."
    },
    {
        "matched": false,
        "definition": "masterpiece",
        "type": "n.",
        "word": "A superior production."
    },
    {
        "matched": false,
        "definition": "mastery",
        "type": "n.",
        "word": "The attainment of superior skill."
    },
    {
        "matched": false,
        "definition": "material",
        "type": "n.",
        "word": "That of which anything is composed or may be constructed."
    },
    {
        "matched": false,
        "definition": "materialize",
        "type": "v.",
        "word": "To take perceptible or substantial form."
    },
    {
        "matched": false,
        "definition": "maternal",
        "type": "adj.",
        "word": "Pertaining or peculiar to a mother or to motherhood."
    },
    {
        "matched": false,
        "definition": "matinee",
        "type": "n.",
        "word": "An entertainment (especially theatrical) held in the daytime."
    },
    {
        "matched": false,
        "definition": "matricide",
        "type": "n.",
        "word": "The killing, especially the murdering, of one's mother."
    },
    {
        "matched": false,
        "definition": "matrimony",
        "type": "n.",
        "word": "The union of a man and a woman in marriage."
    },
    {
        "matched": false,
        "definition": "matrix",
        "type": "n.",
        "word": "That which contains and gives shape or form to anything."
    },
    {
        "matched": false,
        "definition": "matter of fact",
        "type": "n.",
        "word": "Something that has actual and undeniable existence or reality."
    },
    {
        "matched": false,
        "definition": "maudlin",
        "type": "adj.",
        "word": "Foolishly and tearfully affectionate."
    },
    {
        "matched": false,
        "definition": "mausoleum",
        "type": "n.",
        "word": "A tomb of more than ordinary size or architectural pretensions."
    },
    {
        "matched": false,
        "definition": "mawkish",
        "type": "adj.",
        "word": "Sickening or insipid."
    },
    {
        "matched": false,
        "definition": "maxim",
        "type": "n.",
        "word": "A principle accepted as true and acted on as a rule or guide."
    },
    {
        "matched": false,
        "definition": "maze",
        "type": "n.",
        "word": "A labyrinth."
    },
    {
        "matched": false,
        "definition": "mead",
        "type": "n.",
        "word": "A meadow."
    },
    {
        "matched": false,
        "definition": "meager",
        "type": "adj.",
        "word": "scanty."
    },
    {
        "matched": false,
        "definition": "mealy-mouthed",
        "type": "adj.",
        "word": "Afraid to express facts or opinions plainly."
    },
    {
        "matched": false,
        "definition": "meander",
        "type": "v.",
        "word": "To wind and turn while proceeding in a course."
    },
    {
        "matched": false,
        "definition": "mechanics",
        "type": "n.",
        "word": "The branch of physics that treats the phenomena caused by the action of          "
    },
    {
        "matched": false,
        "definition": "medallion",
        "type": "n.",
        "word": "A large medal."
    },
    {
        "matched": false,
        "definition": "meddlesome",
        "type": "adj.",
        "word": "Interfering."
    },
    {
        "matched": false,
        "definition": "medial",
        "type": "adj.",
        "word": "Of or pertaining to the middle."
    },
    {
        "matched": false,
        "definition": "mediate",
        "type": "v.",
        "word": "To effect by negotiating as an agent between parties."
    },
    {
        "matched": false,
        "definition": "medicine",
        "type": "n.",
        "word": "A substance possessing or reputed to possess curative or remedial properties."
    },
    {
        "matched": false,
        "definition": "medieval",
        "type": "adj.",
        "word": "Belonging or relating to or descriptive of the middle ages."
    },
    {
        "matched": false,
        "definition": "mediocre",
        "type": "adj.",
        "word": "Ordinary."
    },
    {
        "matched": false,
        "definition": "meditation",
        "type": "n.",
        "word": "The turning or revolving of a subject in the mind."
    },
    {
        "matched": false,
        "definition": "medley",
        "type": "n.",
        "word": "A composition of different songs or parts of songs arranged to run as a          "
    },
    {
        "matched": false,
        "definition": "meliorate",
        "type": "v.",
        "word": "To make better or improve, as in quality or social or physical condition."
    },
    {
        "matched": false,
        "definition": "mellifluous",
        "type": "adj.",
        "word": "Sweetly or smoothly flowing."
    },
    {
        "matched": false,
        "definition": "melodious",
        "type": "adj.",
        "word": "Characterized by a sweet succession of sounds."
    },
    {
        "matched": false,
        "definition": "melodrama",
        "type": "n.",
        "word": "A drama with a romantic story or plot and sensational situation and          "
    },
    {
        "matched": false,
        "definition": "memento",
        "type": "n.",
        "word": "A souvenir."
    },
    {
        "matched": false,
        "definition": "memorable",
        "type": "adj.",
        "word": "Noteworthy."
    },
    {
        "matched": false,
        "definition": "menace",
        "type": "n.",
        "word": "A threat."
    },
    {
        "matched": false,
        "definition": "menagerie",
        "type": "n.",
        "word": "A collection of wild animals, especially when kept for exhibition."
    },
    {
        "matched": false,
        "definition": "mendacious",
        "type": "adj.",
        "word": "Untrue."
    },
    {
        "matched": false,
        "definition": "mendicant",
        "type": "n.",
        "word": "A beggar."
    },
    {
        "matched": false,
        "definition": "mentality",
        "type": "n.",
        "word": "Intellectuality."
    },
    {
        "matched": false,
        "definition": "mentor",
        "type": "n.",
        "word": "A wise and faithful teacher, guide, and friend."
    },
    {
        "matched": false,
        "definition": "mercantile",
        "type": "adj.",
        "word": "Conducted or acting on business principles; commercial."
    },
    {
        "matched": false,
        "definition": "mercenary",
        "type": "adj.",
        "word": "Greedy"
    },
    {
        "matched": false,
        "definition": "merciful",
        "type": "adj.",
        "word": "Disposed to pity and forgive."
    },
    {
        "matched": false,
        "definition": "merciless",
        "type": "adj.",
        "word": "Cruel."
    },
    {
        "matched": false,
        "definition": "meretricious",
        "type": "adj.",
        "word": "Alluring by false or gaudy show."
    },
    {
        "matched": false,
        "definition": "mesmerize",
        "type": "v.",
        "word": "To hypnotize."
    },
    {
        "matched": false,
        "definition": "messieurs",
        "type": "n.",
        "word": "pl. Gentlemen."
    },
    {
        "matched": false,
        "definition": "metal",
        "type": "n.",
        "word": "An element that forms a base by combining with oxygen, is usually hard, heavy,          "
    },
    {
        "matched": false,
        "definition": "metallurgy",
        "type": "n.",
        "word": "The art or science of extracting a metal from ores, as by smelting."
    },
    {
        "matched": false,
        "definition": "metamorphosis",
        "type": "n.",
        "word": "A passing from one form or shape into another."
    },
    {
        "matched": false,
        "definition": "metaphor",
        "type": "n.",
        "word": "A figure of speech in which one object is likened to another, by speaking as          "
    },
    {
        "matched": false,
        "definition": "metaphysical",
        "type": "adj.",
        "word": "Philosophical."
    },
    {
        "matched": false,
        "definition": "metaphysician",
        "type": "n.",
        "word": "One skilled in metaphysics."
    },
    {
        "matched": false,
        "definition": "metaphysics",
        "type": "n.",
        "word": "The principles of philosophy as applied to explain the methods of any          "
    },
    {
        "matched": false,
        "definition": "mete",
        "type": "v.",
        "word": "To apportion."
    },
    {
        "matched": false,
        "definition": "metempsychosis",
        "type": "n.",
        "word": "Transition of the soul of a human being at death into another body,          "
    },
    {
        "matched": false,
        "definition": "meticulous",
        "type": "adj.",
        "word": "Over-cautious."
    },
    {
        "matched": false,
        "definition": "metonymy",
        "type": "n.",
        "word": "A figure of speech that consists in the naming of a thing by one of its          "
    },
    {
        "matched": false,
        "definition": "metric",
        "type": "adj.",
        "word": "Relating to measurement."
    },
    {
        "matched": false,
        "definition": "metronome",
        "type": "n.",
        "word": "An instrument for indicating and marking exact time in music."
    },
    {
        "matched": false,
        "definition": "metropolis",
        "type": "n.",
        "word": "A chief city, either the capital or the largest or most important city of a          "
    },
    {
        "matched": false,
        "definition": "metropolitan",
        "type": "adj.",
        "word": "Pertaining to a chief city."
    },
    {
        "matched": false,
        "definition": "mettle",
        "type": "n.",
        "word": "Courage."
    },
    {
        "matched": false,
        "definition": "mettlesome",
        "type": "adj.",
        "word": "Having courage or spirit."
    },
    {
        "matched": false,
        "definition": "microcosm",
        "type": "n.",
        "word": "The world or universe on a small scale."
    },
    {
        "matched": false,
        "definition": "micrometer",
        "type": "n.",
        "word": "An instrument for measuring very small angles or dimensions."
    },
    {
        "matched": false,
        "definition": "microphone",
        "type": "n.",
        "word": "An apparatus for magnifying faint sounds."
    },
    {
        "matched": false,
        "definition": "microscope",
        "type": "n.",
        "word": "An instrument for assisting the eye in the vision of minute objects or          "
    },
    {
        "matched": false,
        "definition": "microscopic",
        "type": "adj.",
        "word": "Adapted to or characterized by minute observation."
    },
    {
        "matched": false,
        "definition": "microscopy",
        "type": "n.",
        "word": "The art of examing objects with the microscope."
    },
    {
        "matched": false,
        "definition": "midsummer",
        "type": "n.",
        "word": "The middle of the summer."
    },
    {
        "matched": false,
        "definition": "midwife",
        "type": "n.",
        "word": "A woman who makes a business of assisting at childbirth."
    },
    {
        "matched": false,
        "definition": "mien",
        "type": "n.",
        "word": "The external appearance or manner of a person."
    },
    {
        "matched": false,
        "definition": "migrant",
        "type": "adj.",
        "word": "Wandering."
    },
    {
        "matched": false,
        "definition": "migrate",
        "type": "v.",
        "word": "To remove or pass from one country, region, or habitat to another."
    },
    {
        "matched": false,
        "definition": "migratory",
        "type": "adj.",
        "word": "Wandering."
    },
    {
        "matched": false,
        "definition": "mileage",
        "type": "n.",
        "word": "A distance in miles."
    },
    {
        "matched": false,
        "definition": "militant",
        "type": "adj.",
        "word": "Of a warlike or combative disposition or tendency."
    },
    {
        "matched": false,
        "definition": "militarism",
        "type": "n.",
        "word": "A policy of maintaining great standing armies."
    },
    {
        "matched": false,
        "definition": "militate",
        "type": "v.",
        "word": "To have weight or influence (in determining a question)."
    },
    {
        "matched": false,
        "definition": "militia",
        "type": "n.",
        "word": "Those citizens, collectively, who are enrolled and drilled in temporary          "
    },
    {
        "matched": false,
        "definition": "Milky Way",
        "type": "n.",
        "word": "The galaxy."
    },
    {
        "matched": false,
        "definition": "millet",
        "type": "n.",
        "word": "A grass cultivated for forage and cereal."
    },
    {
        "matched": false,
        "definition": "mimic",
        "type": "v.",
        "word": "To imitate the speech or actions of."
    },
    {
        "matched": false,
        "definition": "miniature",
        "type": "adj.",
        "word": "Much smaller than reality or that the normal size."
    },
    {
        "matched": false,
        "definition": "minimize",
        "type": "v.",
        "word": "To reduce to the smallest possible amount or degree."
    },
    {
        "matched": false,
        "definition": "minion",
        "type": "n.",
        "word": "A servile favorite."
    },
    {
        "matched": false,
        "definition": "ministration",
        "type": "n.",
        "word": "Any religious ceremonial."
    },
    {
        "matched": false,
        "definition": "ministry",
        "type": "n.",
        "word": "A service."
    },
    {
        "matched": false,
        "definition": "minority",
        "type": "n.",
        "word": "The smaller in number of two portions into which a number or a group is          "
    },
    {
        "matched": false,
        "definition": "minute",
        "type": "adj.",
        "word": "Exceedingly small in extent or quantity."
    },
    {
        "matched": false,
        "definition": "minutia",
        "type": "n.",
        "word": "A small or unimportant particular or detail."
    },
    {
        "matched": false,
        "definition": "mirage",
        "type": "n.",
        "word": "An optical effect looking like a sheet of water in the desert."
    },
    {
        "matched": false,
        "definition": "misadventure",
        "type": "n.",
        "word": "An unlucky accident."
    },
    {
        "matched": false,
        "definition": "misanthropic",
        "type": "adj.",
        "word": "Hating mankind."
    },
    {
        "matched": false,
        "definition": "misanthropy",
        "type": "n.",
        "word": "Hatred of mankind."
    },
    {
        "matched": false,
        "definition": "misapprehend",
        "type": "v.",
        "word": "To misunderstand."
    },
    {
        "matched": false,
        "definition": "misbehave",
        "type": "v.",
        "word": "To behave ill."
    },
    {
        "matched": false,
        "definition": "misbehavior",
        "type": "n.",
        "word": "Ill or improper behavior."
    },
    {
        "matched": false,
        "definition": "mischievous",
        "type": "adj.",
        "word": "Fond of tricks."
    },
    {
        "matched": false,
        "definition": "miscount",
        "type": "v.",
        "word": "To make a mistake in counting."
    },
    {
        "matched": false,
        "definition": "miscreant",
        "type": "n.",
        "word": "A villain."
    },
    {
        "matched": false,
        "definition": "misdeed",
        "type": "n.",
        "word": "A wrong or improper act."
    },
    {
        "matched": false,
        "definition": "misdemeanor",
        "type": "n.",
        "word": "Evil conduct, small crime."
    },
    {
        "matched": false,
        "definition": "miser",
        "type": "n.",
        "word": "A person given to saving and hoarding unduly."
    },
    {
        "matched": false,
        "definition": "mishap",
        "type": "n.",
        "word": "Misfortune."
    },
    {
        "matched": false,
        "definition": "misinterpret",
        "type": "v.",
        "word": "To misunderstand."
    },
    {
        "matched": false,
        "definition": "mislay",
        "type": "v.",
        "word": "To misplace."
    },
    {
        "matched": false,
        "definition": "mismanage",
        "type": "v.",
        "word": "To manage badly, improperly, or unskillfully."
    },
    {
        "matched": false,
        "definition": "misnomer",
        "type": "n.",
        "word": "A name wrongly or mistakenly applied."
    },
    {
        "matched": false,
        "definition": "misogamy",
        "type": "n.",
        "word": "Hatred of marriage."
    },
    {
        "matched": false,
        "definition": "misogyny",
        "type": "n.",
        "word": "Hatred of women."
    },
    {
        "matched": false,
        "definition": "misplace",
        "type": "v.",
        "word": "To put into a wrong place."
    },
    {
        "matched": false,
        "definition": "misrepresent",
        "type": "v.",
        "word": "To give a wrong impression."
    },
    {
        "matched": false,
        "definition": "misrule",
        "type": "v.",
        "word": "To misgovern."
    },
    {
        "matched": false,
        "definition": "missal",
        "type": "n.",
        "word": "The book containing the service for the celebration of mass."
    },
    {
        "matched": false,
        "definition": "missile",
        "type": "n.",
        "word": "Any object, especially a weapon, thrown or intended to be thrown."
    },
    {
        "matched": false,
        "definition": "missive",
        "type": "n.",
        "word": "A message in writing."
    },
    {
        "matched": false,
        "definition": "mistrust",
        "type": "v.",
        "word": "To regard with suspicion or jealousy."
    },
    {
        "matched": false,
        "definition": "misty",
        "type": "adj.",
        "word": "Lacking clearness"
    },
    {
        "matched": false,
        "definition": "misunderstand",
        "type": "v.",
        "word": "To Take in a wrong sense."
    },
    {
        "matched": false,
        "definition": "misuse",
        "type": "v.",
        "word": "To maltreat."
    },
    {
        "matched": false,
        "definition": "mite",
        "type": "n.",
        "word": "A very small amount, portion, or particle."
    },
    {
        "matched": false,
        "definition": "miter",
        "type": "n.",
        "word": "The junction of two bodies at an equally divided angle."
    },
    {
        "matched": false,
        "definition": "mitigate",
        "type": "v.",
        "word": "To make milder or more endurable."
    },
    {
        "matched": false,
        "definition": "mnemonics",
        "type": "n.",
        "word": "A system of principles and formulas designed to assist the recollection in          "
    },
    {
        "matched": false,
        "definition": "moat",
        "type": "n.",
        "word": "A ditch on the outside of a fortress wall."
    },
    {
        "matched": false,
        "definition": "mobocracy",
        "type": "n.",
        "word": "Lawless control of public affairs by the mob or populace."
    },
    {
        "matched": false,
        "definition": "moccasin",
        "type": "n.",
        "word": "A foot-covering made of soft leather or buckskin."
    },
    {
        "matched": false,
        "definition": "mockery",
        "type": "n.",
        "word": "Ridicule."
    },
    {
        "matched": false,
        "definition": "moderation",
        "type": "n.",
        "word": "Temperance."
    },
    {
        "matched": false,
        "definition": "moderator",
        "type": "n.",
        "word": "The presiding officer of a meeting."
    },
    {
        "matched": false,
        "definition": "modernity",
        "type": "n.",
        "word": "The state or character of being modern."
    },
    {
        "matched": false,
        "definition": "modernize",
        "type": "v.",
        "word": "To make characteristic of the present or of recent times."
    },
    {
        "matched": false,
        "definition": "modification",
        "type": "n.",
        "word": "A change."
    },
    {
        "matched": false,
        "definition": "modify",
        "type": "v.",
        "word": "To make somewhat different."
    },
    {
        "matched": false,
        "definition": "modish",
        "type": "adj.",
        "word": "Fashionable."
    },
    {
        "matched": false,
        "definition": "modulate",
        "type": "v.",
        "word": "To vary in tone, inflection, pitch or other quality of sound."
    },
    {
        "matched": false,
        "definition": "mollify",
        "type": "v.",
        "word": "To soothe."
    },
    {
        "matched": false,
        "definition": "molt",
        "type": "v.",
        "word": "To cast off, as hair, feathers, etc."
    },
    {
        "matched": false,
        "definition": "momentary",
        "type": "adj.",
        "word": "Lasting but a short time."
    },
    {
        "matched": false,
        "definition": "momentous",
        "type": "adj.",
        "word": "Very significant."
    },
    {
        "matched": false,
        "definition": "momentum",
        "type": "n.",
        "word": "An impetus."
    },
    {
        "matched": false,
        "definition": "monarchy",
        "type": "n.",
        "word": "Government by a single, sovereign ruler."
    },
    {
        "matched": false,
        "definition": "monastery",
        "type": "n.",
        "word": "A dwelling-place occupied in common by persons under religious vows of          "
    },
    {
        "matched": false,
        "definition": "monetary",
        "type": "adj.",
        "word": "Financial."
    },
    {
        "matched": false,
        "definition": "mongrel",
        "type": "n.",
        "word": "The progeny resulting from the crossing of different breeds or varieties."
    },
    {
        "matched": false,
        "definition": "monition",
        "type": "n.",
        "word": "Friendly counsel given by way of warning and implying caution or reproof."
    },
    {
        "matched": false,
        "definition": "monitory",
        "type": "n.",
        "word": "Admonition or warning."
    },
    {
        "matched": false,
        "definition": "monocracy",
        "type": "n.",
        "word": "Government by a single person."
    },
    {
        "matched": false,
        "definition": "monogamy",
        "type": "n.",
        "word": "The habit of pairing, or having but one mate."
    },
    {
        "matched": false,
        "definition": "monogram",
        "type": "n.",
        "word": "A character consisting of two or more letters interwoven into one, usually          "
    },
    {
        "matched": false,
        "definition": "monograph",
        "type": "n.",
        "word": "A treatise discussing a single subject or branch of a subject."
    },
    {
        "matched": false,
        "definition": "monolith",
        "type": "n.",
        "word": "Any structure or sculpture in stone formed of a single piece."
    },
    {
        "matched": false,
        "definition": "monologue",
        "type": "n.",
        "word": "A story or drama told or performed by one person."
    },
    {
        "matched": false,
        "definition": "monomania",
        "type": "n.",
        "word": "The unreasonable pursuit of one idea."
    },
    {
        "matched": false,
        "definition": "monopoly",
        "type": "n.",
        "word": "The control of a thing, as a commodity, to enable a person to raise its price."
    },
    {
        "matched": false,
        "definition": "monosyllable",
        "type": "n.",
        "word": "A word of one syllable."
    },
    {
        "matched": false,
        "definition": "monotone",
        "type": "n.",
        "word": "The sameness or monotony of utterance."
    },
    {
        "matched": false,
        "definition": "monotonous",
        "type": "adj.",
        "word": "Unchanging and tedious."
    },
    {
        "matched": false,
        "definition": "monotony",
        "type": "n.",
        "word": "A lack of variety."
    },
    {
        "matched": false,
        "definition": "monsieur",
        "type": "n.",
        "word": "A French title of respect, equivalent to Mr. and sir."
    },
    {
        "matched": false,
        "definition": "monstrosity",
        "type": "n.",
        "word": "Anything unnaturally huge or distorted."
    },
    {
        "matched": false,
        "definition": "moonbeam",
        "type": "n.",
        "word": "A ray of moonlight."
    },
    {
        "matched": false,
        "definition": "morale",
        "type": "n.",
        "word": "A state of mind with reference to confidence, courage, zeal, and the like."
    },
    {
        "matched": false,
        "definition": "moralist",
        "type": "n.",
        "word": "A writer on ethics."
    },
    {
        "matched": false,
        "definition": "morality",
        "type": "n.",
        "word": "Virtue."
    },
    {
        "matched": false,
        "definition": "moralize",
        "type": "v.",
        "word": "To render virtuous."
    },
    {
        "matched": false,
        "definition": "moratorium",
        "type": "n.",
        "word": "An emergency legislation authorizing a government suspend some action          "
    },
    {
        "matched": false,
        "definition": "morbid",
        "type": "adj.",
        "word": "Caused by or denoting a diseased or unsound condition of body or mind."
    },
    {
        "matched": false,
        "definition": "mordacious",
        "type": "adj.",
        "word": "Biting or giving to biting."
    },
    {
        "matched": false,
        "definition": "mordant",
        "type": "adj.",
        "word": "Biting."
    },
    {
        "matched": false,
        "definition": "moribund",
        "type": "adj.",
        "word": "On the point of dying."
    },
    {
        "matched": false,
        "definition": "morose",
        "type": "adj.",
        "word": "Gloomy."
    },
    {
        "matched": false,
        "definition": "morphology",
        "type": "n.",
        "word": "the science of organic forms."
    },
    {
        "matched": false,
        "definition": "motley",
        "type": "adj.",
        "word": "Composed of heterogeneous or inharmonious elements."
    },
    {
        "matched": false,
        "definition": "motto",
        "type": "n.",
        "word": "An expressive word or pithy sentence enunciating some guiding rule of life, or          "
    },
    {
        "matched": false,
        "definition": "mountaineer",
        "type": "n.",
        "word": "One who travels among or climbs mountains for pleasure or exercise."
    },
    {
        "matched": false,
        "definition": "mountainous",
        "type": "adj.",
        "word": "Full of or abounding in mountains."
    },
    {
        "matched": false,
        "definition": "mouthful",
        "type": "n.",
        "word": "As much as can be or is usually put into the or exercise."
    },
    {
        "matched": false,
        "definition": "muddle",
        "type": "v.",
        "word": "To confuse or becloud, especially with or as with drink."
    },
    {
        "matched": false,
        "definition": "muffle",
        "type": "v.",
        "word": "To deaden the sound of, as by wraps."
    },
    {
        "matched": false,
        "definition": "mulatto",
        "type": "n.",
        "word": "The offspring of a white person and a black person."
    },
    {
        "matched": false,
        "definition": "muleteer",
        "type": "n.",
        "word": "A mule-driver."
    },
    {
        "matched": false,
        "definition": "multiform",
        "type": "adj.",
        "word": "Having many shapes, or appearances."
    },
    {
        "matched": false,
        "definition": "multiplicity",
        "type": "n.",
        "word": "the condition of being manifold or very various."
    },
    {
        "matched": false,
        "definition": "mundane",
        "type": "adj.",
        "word": "Worldly, as opposed to spiritual or celestial."
    },
    {
        "matched": false,
        "definition": "municipal",
        "type": "adj.",
        "word": "Of or pertaining to a town or city, or to its corporate or local          "
    },
    {
        "matched": false,
        "definition": "municipality",
        "type": "n.",
        "word": "A district enjoying municipal government."
    },
    {
        "matched": false,
        "definition": "munificence",
        "type": "n.",
        "word": "A giving characterized by generous motives and extraordinary liberality."
    },
    {
        "matched": false,
        "definition": "munificent",
        "type": "adj.",
        "word": "Extraordinarily generous."
    },
    {
        "matched": false,
        "definition": "muster",
        "type": "n.",
        "word": "An assemblage or review of troops for parade or inspection, or for numbering          "
    },
    {
        "matched": false,
        "definition": "mutation",
        "type": "n.",
        "word": "The act or process of change."
    },
    {
        "matched": false,
        "definition": "mutilate",
        "type": "v.",
        "word": "To disfigure."
    },
    {
        "matched": false,
        "definition": "mutiny",
        "type": "n.",
        "word": "Rebellion against lawful or constituted authority."
    },
    {
        "matched": false,
        "definition": "myriad",
        "type": "n.",
        "word": "A vast indefinite number."
    },
    {
        "matched": false,
        "definition": "mystic",
        "type": "n.",
        "word": "One who professes direct divine illumination, or relies upon meditation to          "
    },
    {
        "matched": false,
        "definition": "mystification",
        "type": "n.",
        "word": "The act of artfully perplexing."
    },
    {
        "matched": false,
        "definition": "myth",
        "type": "n.",
        "word": "A fictitious narrative presented as historical, but without any basis of fact."
    },
    {
        "matched": false,
        "definition": "mythology",
        "type": "n.",
        "word": "The whole body of legends cherished by a race concerning gods and heroes."
    },
    {
        "matched": false,
        "definition": "nameless",
        "type": "adj.",
        "word": "Having no fame or reputation."
    },
    {
        "matched": false,
        "definition": "naphtha",
        "type": "n.",
        "word": "A light, colorless, volatile, inflammable oil used as a solvent, as in          "
    },
    {
        "matched": false,
        "definition": "Narcissus",
        "type": "n.",
        "word": "The son of the Athenian river-god Cephisus, fabled to have fallen in love          "
    },
    {
        "matched": false,
        "definition": "narrate",
        "type": "v.",
        "word": "To tell a story."
    },
    {
        "matched": false,
        "definition": "narration",
        "type": "n.",
        "word": "The act of recounting the particulars of an event in the order of time or          "
    },
    {
        "matched": false,
        "definition": "narrative",
        "type": "n.",
        "word": "An orderly continuous account of the successive particulars of an event."
    },
    {
        "matched": false,
        "definition": "narrator",
        "type": "n.",
        "word": "One who narrates anything."
    },
    {
        "matched": false,
        "definition": "narrow-minded",
        "type": "adj.",
        "word": "Characterized by illiberal views or sentiments."
    },
    {
        "matched": false,
        "definition": "nasal",
        "type": "adj.",
        "word": "Pertaining to the nose."
    },
    {
        "matched": false,
        "definition": "natal",
        "type": "adj.",
        "word": "Pertaining to one's birth."
    },
    {
        "matched": false,
        "definition": "nationality",
        "type": "n.",
        "word": "A connection with a particular nation."
    },
    {
        "matched": false,
        "definition": "naturally",
        "type": "adv.",
        "word": "According to the usual order of things."
    },
    {
        "matched": false,
        "definition": "nausea",
        "type": "n.",
        "word": "An affection of the stomach producing dizziness and usually an impulse to vomit"
    },
    {
        "matched": false,
        "definition": "nauseate",
        "type": "v.",
        "word": "To cause to loathe."
    },
    {
        "matched": false,
        "definition": "nauseous",
        "type": "adj.",
        "word": "Loathsome."
    },
    {
        "matched": false,
        "definition": "nautical",
        "type": "adj.",
        "word": "Pertaining to ships, seamen, or navigation."
    },
    {
        "matched": false,
        "definition": "naval",
        "type": "adj.",
        "word": "Pertaining to ships."
    },
    {
        "matched": false,
        "definition": "navel",
        "type": "n.",
        "word": "The depression on the abdomen where the umbilical cord of the fetus was attached."
    },
    {
        "matched": false,
        "definition": "navigable",
        "type": "adj.",
        "word": "Capable of commercial navigation."
    },
    {
        "matched": false,
        "definition": "navigate",
        "type": "v.",
        "word": "To traverse by ship."
    },
    {
        "matched": false,
        "definition": "nebula",
        "type": "n.",
        "word": "A gaseous body of unorganized stellar substance."
    },
    {
        "matched": false,
        "definition": "necessary",
        "type": "adj.",
        "word": "Indispensably requisite or absolutely needed to accomplish a desired          "
    },
    {
        "matched": false,
        "definition": "necessitate",
        "type": "v.",
        "word": "To render indispensable."
    },
    {
        "matched": false,
        "definition": "necessity",
        "type": "n.",
        "word": "That which is indispensably requisite to an end desired."
    },
    {
        "matched": false,
        "definition": "necrology",
        "type": "n.",
        "word": "A list of persons who have died in a certain place or time."
    },
    {
        "matched": false,
        "definition": "necromancer",
        "type": "n.",
        "word": "One who practices the art of foretelling the future by means of          "
    },
    {
        "matched": false,
        "definition": "necropolis",
        "type": "n.",
        "word": "A city of the dead."
    },
    {
        "matched": false,
        "definition": "necrosis",
        "type": "n.",
        "word": "the death of part of the body."
    },
    {
        "matched": false,
        "definition": "nectar",
        "type": "n.",
        "word": "Any especially sweet and delicious drink."
    },
    {
        "matched": false,
        "definition": "nectarine",
        "type": "n.",
        "word": "A variety of the peach."
    },
    {
        "matched": false,
        "definition": "needlework",
        "type": "n.",
        "word": "Embroidery."
    },
    {
        "matched": false,
        "definition": "needy",
        "type": "adj.",
        "word": "Being in need, want, or poverty."
    },
    {
        "matched": false,
        "definition": "nefarious",
        "type": "adj.",
        "word": "Wicked in the extreme."
    },
    {
        "matched": false,
        "definition": "negate",
        "type": "v.",
        "word": "To deny."
    },
    {
        "matched": false,
        "definition": "negation",
        "type": "n.",
        "word": "The act of denying or of asserting the falsity of a proposition."
    },
    {
        "matched": false,
        "definition": "neglectful",
        "type": "adj.",
        "word": "Exhibiting or indicating omission."
    },
    {
        "matched": false,
        "definition": "negligee",
        "type": "n.",
        "word": "A loose gown worn by women."
    },
    {
        "matched": false,
        "definition": "negligence",
        "type": "n.",
        "word": "Omission of that which ought to be done."
    },
    {
        "matched": false,
        "definition": "negligent",
        "type": "adj.",
        "word": "Apt to omit what ought to be done."
    },
    {
        "matched": false,
        "definition": "negligible",
        "type": "adj.",
        "word": "Transferable by assignment, endorsement, or delivery."
    },
    {
        "matched": false,
        "definition": "negotiable",
        "type": "v.",
        "word": "To bargain with others for an agreement, as for a treaty or transfer of          "
    },
    {
        "matched": false,
        "definition": "Nemesis",
        "type": "n.",
        "word": "A goddess; divinity of chastisement and vengeance."
    },
    {
        "matched": false,
        "definition": "neocracy",
        "type": "n.",
        "word": "Government administered by new or untried persons."
    },
    {
        "matched": false,
        "definition": "neo-Darwinsim",
        "type": "n.",
        "word": "Darwinism as modified and extended by more recent students."
    },
    {
        "matched": false,
        "definition": "neo-Latin",
        "type": "n.",
        "word": "Modernized Latin."
    },
    {
        "matched": false,
        "definition": "neopaganism",
        "type": "n.",
        "word": "A new or revived paganism."
    },
    {
        "matched": false,
        "definition": "Neolithic",
        "type": "adj.",
        "word": "Pertaining to the later stone age."
    },
    {
        "matched": false,
        "definition": "neology",
        "type": "n.",
        "word": "The coining or using of new words or new meanings of words."
    },
    {
        "matched": false,
        "definition": "neophyte",
        "type": "adj.",
        "word": "Having the character of a beginner."
    },
    {
        "matched": false,
        "definition": "nestle",
        "type": "v.",
        "word": "To adjust cozily in snug quarters."
    },
    {
        "matched": false,
        "definition": "nestling",
        "type": "adj.",
        "word": "Recently hatched."
    },
    {
        "matched": false,
        "definition": "nettle",
        "type": "v.",
        "word": "To excite sensations of uneasiness or displeasure in."
    },
    {
        "matched": false,
        "definition": "network",
        "type": "n.",
        "word": "Anything that presents a system of cross- lines."
    },
    {
        "matched": false,
        "definition": "neural",
        "type": "adj.",
        "word": "Pertaining to the nerves or nervous system."
    },
    {
        "matched": false,
        "definition": "neurology",
        "type": "n.",
        "word": "The science of the nervous system."
    },
    {
        "matched": false,
        "definition": "neuter",
        "type": "adj.",
        "word": "Neither masculine nor feminine."
    },
    {
        "matched": false,
        "definition": "neutral",
        "type": "adj.",
        "word": "Belonging to or under control of neither of two contestants."
    },
    {
        "matched": false,
        "definition": "nevertheless",
        "type": "conj.",
        "word": "Notwithstanding."
    },
    {
        "matched": false,
        "definition": "Newtonian",
        "type": "adj.",
        "word": "Of or pertaining to Sir Isaac Newton, the English philosopher."
    },
    {
        "matched": false,
        "definition": "niggardly",
        "type": "adj.",
        "word": "Stingy. (no longer acceptable to use)"
    },
    {
        "matched": false,
        "definition": "nihilist",
        "type": "n.",
        "word": "An advocate of the doctrine that nothing either exists or can be known."
    },
    {
        "matched": false,
        "definition": "nil",
        "type": "n.",
        "word": "Nothing"
    },
    {
        "matched": false,
        "definition": "nimble",
        "type": "adj.",
        "word": "Light and quick in motion or action."
    },
    {
        "matched": false,
        "definition": "nit",
        "type": "n.",
        "word": "The egg of a louse or some other insect."
    },
    {
        "matched": false,
        "definition": "nocturnal",
        "type": "adj.",
        "word": "Of or pertaining to the night."
    },
    {
        "matched": false,
        "definition": "noiseless",
        "type": "adj.",
        "word": "Silent."
    },
    {
        "matched": false,
        "definition": "noisome",
        "type": "adj.",
        "word": "Very offensive, particularly to the sense of smell."
    },
    {
        "matched": false,
        "definition": "noisy",
        "type": "adj.",
        "word": "Clamorous."
    },
    {
        "matched": false,
        "definition": "nomad",
        "type": "adj.",
        "word": "Having no fixed abode."
    },
    {
        "matched": false,
        "definition": "nomic",
        "type": "adj.",
        "word": "Usual or customary."
    },
    {
        "matched": false,
        "definition": "nominal",
        "type": "adj.",
        "word": "Trivial."
    },
    {
        "matched": false,
        "definition": "nominate",
        "type": "v.",
        "word": "To designate as a candidate for any office."
    },
    {
        "matched": false,
        "definition": "nomination",
        "type": "n.",
        "word": "The act or ceremony of naming a man or woman for office."
    },
    {
        "matched": false,
        "definition": "nominee",
        "type": "n.",
        "word": "One who receives a nomination."
    },
    {
        "matched": false,
        "definition": "non-existent",
        "type": "n.",
        "word": "That which does not exist."
    },
    {
        "matched": false,
        "definition": "non-resident",
        "type": "adj.",
        "word": "Not residing within a given jurisdiction."
    },
    {
        "matched": false,
        "definition": "nonchalance",
        "type": "n.",
        "word": "A state of mind indicating lack of interest."
    },
    {
        "matched": false,
        "definition": "non-combatant",
        "type": "n.",
        "word": "One attached to the army or navy, but having duties other than that of          "
    },
    {
        "matched": false,
        "definition": "nondescript",
        "type": "adj.",
        "word": "Indescribable."
    },
    {
        "matched": false,
        "definition": "nonentity",
        "type": "n.",
        "word": "A person or thing of little or no account."
    },
    {
        "matched": false,
        "definition": "nonpareil",
        "type": "n.",
        "word": "One who or that which is of unequaled excellence."
    },
    {
        "matched": false,
        "definition": "norm",
        "type": "n.",
        "word": "A model."
    },
    {
        "matched": false,
        "definition": "normalcy",
        "type": "n.",
        "word": "The state of being normal."
    },
    {
        "matched": false,
        "definition": "Norman",
        "type": "adj.",
        "word": "Of or peculiar to Normandy, in northern France."
    },
    {
        "matched": false,
        "definition": "nostrum",
        "type": "n.",
        "word": "Any scheme or recipe of a charlatan character."
    },
    {
        "matched": false,
        "definition": "noticeable",
        "type": "adj.",
        "word": "Perceptible."
    },
    {
        "matched": false,
        "definition": "notorious",
        "type": "adj.",
        "word": "Unfavorably known to the general public."
    },
    {
        "matched": false,
        "definition": "novellette",
        "type": "n.",
        "word": "A short novel."
    },
    {
        "matched": false,
        "definition": "novice",
        "type": "n.",
        "word": "A beginner in any business or occupation."
    },
    {
        "matched": false,
        "definition": "nowadays",
        "type": "adv.",
        "word": "In the present time or age."
    },
    {
        "matched": false,
        "definition": "nowhere",
        "type": "adv.",
        "word": "In no place or state."
    },
    {
        "matched": false,
        "definition": "noxious",
        "type": "adj.",
        "word": "Hurtful."
    },
    {
        "matched": false,
        "definition": "nuance",
        "type": "n.",
        "word": "A slight degree of difference in anything perceptible to the sense of the mind."
    },
    {
        "matched": false,
        "definition": "nucleus",
        "type": "n.",
        "word": "A central point or part about which matter is aggregated."
    },
    {
        "matched": false,
        "definition": "nude",
        "type": "adj.",
        "word": "Naked."
    },
    {
        "matched": false,
        "definition": "nugatory",
        "type": "adj.",
        "word": "Having no power or force."
    },
    {
        "matched": false,
        "definition": "nuisance",
        "type": "n.",
        "word": "That which annoys, vexes, or irritates."
    },
    {
        "matched": false,
        "definition": "numeration",
        "type": "n.",
        "word": "The act or art of reading or naming numbers."
    },
    {
        "matched": false,
        "definition": "numerical",
        "type": "adj.",
        "word": "Of or pertaining to number."
    },
    {
        "matched": false,
        "definition": "nunnery",
        "type": "n.",
        "word": "A convent for nuns."
    },
    {
        "matched": false,
        "definition": "nuptial",
        "type": "adj.",
        "word": "Of or pertaining to marriage, especially to the marriage ceremony."
    },
    {
        "matched": false,
        "definition": "nurture",
        "type": "n.",
        "word": "The process of fostering or promoting growth."
    },
    {
        "matched": false,
        "definition": "nutriment",
        "type": "n.",
        "word": "That which nourishes."
    },
    {
        "matched": false,
        "definition": "nutritive",
        "type": "adj.",
        "word": "Having nutritious properties."
    },
    {
        "matched": false,
        "definition": "oaken",
        "type": "adj.",
        "word": "Made of or from oak."
    },
    {
        "matched": false,
        "definition": "oakum",
        "type": "n.",
        "word": "Hemp-fiber obtained by untwisting and picking out loosely the yarns of old hemp          "
    },
    {
        "matched": false,
        "definition": "obdurate",
        "type": "adj.",
        "word": "Impassive to feelings of humanity or pity."
    },
    {
        "matched": false,
        "definition": "obelisk",
        "type": "n.",
        "word": "A square shaft with pyramidal top, usually monumental or commemorative."
    },
    {
        "matched": false,
        "definition": "obese",
        "type": "adj.",
        "word": "Exceedingly fat."
    },
    {
        "matched": false,
        "definition": "obesity",
        "type": "n.",
        "word": "Excessive fatness."
    },
    {
        "matched": false,
        "definition": "obituary",
        "type": "adj.",
        "word": "A published notice of a death."
    },
    {
        "matched": false,
        "definition": "objective",
        "type": "adj.",
        "word": "Grasping and representing facts as they are."
    },
    {
        "matched": false,
        "definition": "objector",
        "type": "n.",
        "word": "One who objects, as to a proposition, measure, or ruling."
    },
    {
        "matched": false,
        "definition": "obligate",
        "type": "v.",
        "word": "To hold to the fulfillment of duty."
    },
    {
        "matched": false,
        "definition": "obligatory",
        "type": "adj.",
        "word": "Binding in law or conscience."
    },
    {
        "matched": false,
        "definition": "oblique",
        "type": "adj.",
        "word": "Slanting; said of lines."
    },
    {
        "matched": false,
        "definition": "obliterate",
        "type": "v.",
        "word": "To cause to disappear."
    },
    {
        "matched": false,
        "definition": "oblivion",
        "type": "n.",
        "word": "The state of having passed out of the memory or of being utterly forgotten."
    },
    {
        "matched": false,
        "definition": "oblong",
        "type": "adj.",
        "word": "Longer than broad: applied most commonly to rectangular objects considerably          "
    },
    {
        "matched": false,
        "definition": "obnoxious",
        "type": "adj.",
        "word": "Detestable."
    },
    {
        "matched": false,
        "definition": "obsequies",
        "type": "n.",
        "word": "Funeral rites."
    },
    {
        "matched": false,
        "definition": "obsequious",
        "type": "adj.",
        "word": "Showing a servile readiness to fall in with the wishes or will of another."
    },
    {
        "matched": false,
        "definition": "observance",
        "type": "n.",
        "word": "A traditional form or customary act."
    },
    {
        "matched": false,
        "definition": "observant",
        "type": "adj.",
        "word": "Quick to notice."
    },
    {
        "matched": false,
        "definition": "observatory",
        "type": "n.",
        "word": "A building designed for systematic astronomical observations."
    },
    {
        "matched": false,
        "definition": "obsolescence",
        "type": "n.",
        "word": "The condition or process of gradually falling into disuse."
    },
    {
        "matched": false,
        "definition": "obsolescent",
        "type": "adj.",
        "word": "Passing out of use, as a word."
    },
    {
        "matched": false,
        "definition": "obsolete",
        "type": "adj.",
        "word": "No longer practiced or accepted."
    },
    {
        "matched": false,
        "definition": "obstetrician",
        "type": "n.",
        "word": "A practitioner of midwifery."
    },
    {
        "matched": false,
        "definition": "obstetrics",
        "type": "n.",
        "word": "The branch of medical science concerned with the treatment and care of women          "
    },
    {
        "matched": false,
        "definition": "obstinacy",
        "type": "n.",
        "word": "Stubborn adherence to opinion, arising from conceit or the desire to have          "
    },
    {
        "matched": false,
        "definition": "obstreperous",
        "type": "adj.",
        "word": "Boisterous."
    },
    {
        "matched": false,
        "definition": "obstruct",
        "type": "v.",
        "word": "To fill with impediments so as to prevent passage, either wholly or in part."
    },
    {
        "matched": false,
        "definition": "obstruction",
        "type": "n.",
        "word": "Hindrance."
    },
    {
        "matched": false,
        "definition": "obtrude",
        "type": "v.",
        "word": "To be pushed or to push oneself into undue prominence."
    },
    {
        "matched": false,
        "definition": "obtrusive",
        "type": "adj.",
        "word": "Tending to be pushed or to push oneself into undue prominence."
    },
    {
        "matched": false,
        "definition": "obvert",
        "type": "v.",
        "word": "To turn the front or principal side of (a thing) toward any person or object."
    },
    {
        "matched": false,
        "definition": "obviate",
        "type": "v.",
        "word": "To clear away or provide for, as an objection or difficulty."
    },
    {
        "matched": false,
        "definition": "occasion",
        "type": "n.",
        "word": "An important event or celebration."
    },
    {
        "matched": false,
        "definition": "Occident",
        "type": "n.",
        "word": "The countries lying west of Asia and the Turkish dominions."
    },
    {
        "matched": false,
        "definition": "occlude",
        "type": "v.",
        "word": "To absorb, as a gas by a metal."
    },
    {
        "matched": false,
        "definition": "occult",
        "type": "adj.",
        "word": "Existing but not immediately perceptible."
    },
    {
        "matched": false,
        "definition": "occupant",
        "type": "n.",
        "word": "A tenant in possession of property, as distinguished from the actual owner."
    },
    {
        "matched": false,
        "definition": "occurrence",
        "type": "n.",
        "word": "A happening."
    },
    {
        "matched": false,
        "definition": "octagon",
        "type": "n.",
        "word": "A figure with eight sides and eight angles."
    },
    {
        "matched": false,
        "definition": "octave",
        "type": "n.",
        "word": "A note at this interval above or below any other, considered in relation to that          "
    },
    {
        "matched": false,
        "definition": "octavo",
        "type": "n.",
        "word": "A book, or collection of paper in which the sheets are so folded as to make          "
    },
    {
        "matched": false,
        "definition": "octogenarian",
        "type": "adj.",
        "word": "A person of between eighty and ninety years."
    },
    {
        "matched": false,
        "definition": "ocular",
        "type": "adj.",
        "word": "Of or pertaining to the eye."
    },
    {
        "matched": false,
        "definition": "oculist",
        "type": "n.",
        "word": "One versed or skilled in treating diseases of the eye."
    },
    {
        "matched": false,
        "definition": "oddity",
        "type": "n.",
        "word": "An eccentricity."
    },
    {
        "matched": false,
        "definition": "ode",
        "type": "n.",
        "word": "The form of lyric poetry anciently intended to be sung."
    },
    {
        "matched": false,
        "definition": "odious",
        "type": "adj.",
        "word": "Hateful."
    },
    {
        "matched": false,
        "definition": "odium",
        "type": "n.",
        "word": "A feeling of extreme repugnance, or of dislike and disgust."
    },
    {
        "matched": false,
        "definition": "odoriferous",
        "type": "adj.",
        "word": "Having or diffusing an odor or scent, especially an agreeable one."
    },
    {
        "matched": false,
        "definition": "odorous",
        "type": "adj.",
        "word": "Having an odor, especially a fragrant one."
    },
    {
        "matched": false,
        "definition": "off",
        "type": "adj.",
        "word": "Farther or more distant."
    },
    {
        "matched": false,
        "definition": "offhand",
        "type": "adv.",
        "word": "Without preparation."
    },
    {
        "matched": false,
        "definition": "officiate",
        "type": "v.",
        "word": "To act as an officer or leader."
    },
    {
        "matched": false,
        "definition": "officious",
        "type": "adj.",
        "word": "Intermeddling with what is not one's concern."
    },
    {
        "matched": false,
        "definition": "offshoot",
        "type": "n.",
        "word": "Something that branches off from the parent stock."
    },
    {
        "matched": false,
        "definition": "ogre",
        "type": "n.",
        "word": "A demon or monster that was supposed to devour human beings."
    },
    {
        "matched": false,
        "definition": "ointment",
        "type": "n.",
        "word": "A fatty preparation with a butter-like consistency in which a medicinal          "
    },
    {
        "matched": false,
        "definition": "olfactory",
        "type": "adj.",
        "word": "of or pertaining to the sense of smell."
    },
    {
        "matched": false,
        "definition": "olive-branch",
        "type": "n.",
        "word": "A branch of the olive-tree, as an emblem of peace."
    },
    {
        "matched": false,
        "definition": "ominous",
        "type": "adj.",
        "word": "Portentous."
    },
    {
        "matched": false,
        "definition": "omission",
        "type": "n.",
        "word": "Exclusion."
    },
    {
        "matched": false,
        "definition": "omnipotence",
        "type": "n.",
        "word": "Unlimited and universal power."
    },
    {
        "matched": false,
        "definition": "Omnipotent",
        "type": "adj.",
        "word": "Possessed of unlimited and universal power."
    },
    {
        "matched": false,
        "definition": "omniscience",
        "type": "n.",
        "word": "Unlimited or infinite knowledge."
    },
    {
        "matched": false,
        "definition": "omniscient",
        "type": "adj.",
        "word": "Characterized by unlimited or infinite knowledge."
    },
    {
        "matched": false,
        "definition": "omnivorous",
        "type": "adj.",
        "word": "Eating or living upon food of all kinds indiscriminately."
    },
    {
        "matched": false,
        "definition": "onerous",
        "type": "adj.",
        "word": "Burdensome or oppressive."
    },
    {
        "matched": false,
        "definition": "onrush",
        "type": "n.",
        "word": "Onset."
    },
    {
        "matched": false,
        "definition": "onset",
        "type": "n.",
        "word": "An assault, especially of troops, upon an enemy or fortification."
    },
    {
        "matched": false,
        "definition": "onslaught",
        "type": "n.",
        "word": "A violent onset."
    },
    {
        "matched": false,
        "definition": "onus",
        "type": "n.",
        "word": "A burden or responsibility."
    },
    {
        "matched": false,
        "definition": "opalescence",
        "type": "n.",
        "word": "The property of combined refraction and reflection of light, resulting in          "
    },
    {
        "matched": false,
        "definition": "opaque",
        "type": "adj.",
        "word": "Impervious to light."
    },
    {
        "matched": false,
        "definition": "operate",
        "type": "v.",
        "word": "To put in action and supervise the working of."
    },
    {
        "matched": false,
        "definition": "operative",
        "type": "adj.",
        "word": "Active."
    },
    {
        "matched": false,
        "definition": "operator",
        "type": "n.",
        "word": "One who works with or controls some machine or scientific apparatus."
    },
    {
        "matched": false,
        "definition": "operetta",
        "type": "n.",
        "word": "A humorous play in dialogue and music, of more than one act."
    },
    {
        "matched": false,
        "definition": "opinion",
        "type": "n.",
        "word": "A conclusion or judgment held with confidence, but falling short of positive          "
    },
    {
        "matched": false,
        "definition": "opponent",
        "type": "n.",
        "word": "One who supports the opposite side in a debate, discussion, struggle, or          "
    },
    {
        "matched": false,
        "definition": "opportune",
        "type": "adj.",
        "word": "Especially fit as occurring, said, or done at the right moment."
    },
    {
        "matched": false,
        "definition": "opportunist",
        "type": "n.",
        "word": "One who takes advantage of circumstances to gain his ends."
    },
    {
        "matched": false,
        "definition": "opportunity",
        "type": "n.",
        "word": "Favorable or advantageous chance or opening."
    },
    {
        "matched": false,
        "definition": "opposite",
        "type": "adj.",
        "word": "Radically different or contrary in action or movement."
    },
    {
        "matched": false,
        "definition": "opprobrium",
        "type": "n.",
        "word": "The state of being scornfully reproached or accused of evil."
    },
    {
        "matched": false,
        "definition": "optic",
        "type": "n.",
        "word": "Pertaining to the eye or vision."
    },
    {
        "matched": false,
        "definition": "optician",
        "type": "n.",
        "word": "One who makes or deals in optical instruments or eye-glasses."
    },
    {
        "matched": false,
        "definition": "optics",
        "type": "n.",
        "word": "The science that treats of light and vision, and all that is connected with          "
    },
    {
        "matched": false,
        "definition": "optimism",
        "type": "n.",
        "word": "The view that everything in nature and the history of mankind is ordered for          "
    },
    {
        "matched": false,
        "definition": "option",
        "type": "n.",
        "word": "The right, power, or liberty of choosing."
    },
    {
        "matched": false,
        "definition": "optometry",
        "type": "n.",
        "word": "Measurement of the powers of vision."
    },
    {
        "matched": false,
        "definition": "opulence",
        "type": "n.",
        "word": "Affluence."
    },
    {
        "matched": false,
        "definition": "opulent",
        "type": "adj.",
        "word": "Wealthy."
    },
    {
        "matched": false,
        "definition": "oral",
        "type": "adj.",
        "word": "Uttered through the mouth."
    },
    {
        "matched": false,
        "definition": "orate",
        "type": "v.",
        "word": "To deliver an elaborate or formal public speech."
    },
    {
        "matched": false,
        "definition": "oration",
        "type": "n.",
        "word": "An elaborate or formal public speech."
    },
    {
        "matched": false,
        "definition": "orator",
        "type": "n.",
        "word": "One who delivers an elaborate or formal speech."
    },
    {
        "matched": false,
        "definition": "oratorio",
        "type": "n.",
        "word": "A composition for solo voices, chorus, and orchestra, generally taken from the          "
    },
    {
        "matched": false,
        "definition": "oratory",
        "type": "n.",
        "word": "The art of public speaking."
    },
    {
        "matched": false,
        "definition": "ordeal",
        "type": "n.",
        "word": "Anything that severely tests courage, strength, patience, conscience, etc."
    },
    {
        "matched": false,
        "definition": "ordinal",
        "type": "n.",
        "word": "That form of the numeral that shows the order of anything in a series, as          "
    },
    {
        "matched": false,
        "definition": "ordination",
        "type": "n.",
        "word": "A consecration to the ministry."
    },
    {
        "matched": false,
        "definition": "ordnance",
        "type": "n.",
        "word": "A general name for all kinds of weapons and their appliances used in war."
    },
    {
        "matched": false,
        "definition": "orgies",
        "type": "n.",
        "word": "Wild or wanton revelry."
    },
    {
        "matched": false,
        "definition": "origin",
        "type": "n.",
        "word": "The beginning of that which becomes or is made to be."
    },
    {
        "matched": false,
        "definition": "original",
        "type": "adj.",
        "word": "Not copied nor produced by imitation."
    },
    {
        "matched": false,
        "definition": "originate",
        "type": "v.",
        "word": "To cause or constitute the beginning or first stage of the existence of."
    },
    {
        "matched": false,
        "definition": "ornate",
        "type": "adj.",
        "word": "Ornamented to a marked degree."
    },
    {
        "matched": false,
        "definition": "orthodox",
        "type": "adj.",
        "word": "Holding the commonly accepted faith."
    },
    {
        "matched": false,
        "definition": "orthodoxy",
        "type": "n.",
        "word": "Acceptance of the common faith."
    },
    {
        "matched": false,
        "definition": "orthogonal",
        "type": "adj.",
        "word": "Having or determined by right angles."
    },
    {
        "matched": false,
        "definition": "orthopedic",
        "type": "adj.",
        "word": "Relating to the correcting or preventing of deformity"
    },
    {
        "matched": false,
        "definition": "orthopedist",
        "type": "n.",
        "word": "One who practices the correcting or preventing of deformity"
    },
    {
        "matched": false,
        "definition": "oscillate",
        "type": "v.",
        "word": "To swing back and forth."
    },
    {
        "matched": false,
        "definition": "osculate",
        "type": "v.",
        "word": "To kiss."
    },
    {
        "matched": false,
        "definition": "ossify",
        "type": "v.",
        "word": "to convert into bone."
    },
    {
        "matched": false,
        "definition": "ostentation",
        "type": "n.",
        "word": "A display dictated by vanity and intended to invite applause or flattery."
    },
    {
        "matched": false,
        "definition": "ostracism",
        "type": "n.",
        "word": "Exclusion from intercourse or favor, as in society or politics."
    },
    {
        "matched": false,
        "definition": "ostracize",
        "type": "v.",
        "word": "To exclude from public or private favor."
    },
    {
        "matched": false,
        "definition": "ought",
        "type": "v.",
        "word": "To be under moral obligation to be or do."
    },
    {
        "matched": false,
        "definition": "oust",
        "type": "v.",
        "word": "To eject."
    },
    {
        "matched": false,
        "definition": "out-and-out",
        "type": "adv.",
        "word": "Genuinely."
    },
    {
        "matched": false,
        "definition": "outbreak",
        "type": "n.",
        "word": "A sudden and violent breaking forth, as of something that has been pent up or          "
    },
    {
        "matched": false,
        "definition": "outburst",
        "type": "n.",
        "word": "A violent issue, especially of passion in an individual."
    },
    {
        "matched": false,
        "definition": "outcast",
        "type": "n.",
        "word": "One rejected and despised, especially socially."
    },
    {
        "matched": false,
        "definition": "outcry",
        "type": "n.",
        "word": "A vehement or loud cry or clamor."
    },
    {
        "matched": false,
        "definition": "outdo",
        "type": "v.",
        "word": "To surpass."
    },
    {
        "matched": false,
        "definition": "outlandish",
        "type": "adj.",
        "word": "Of barbarous, uncouth, and unfamiliar aspect or action."
    },
    {
        "matched": false,
        "definition": "outlast",
        "type": "v.",
        "word": "To last longer than."
    },
    {
        "matched": false,
        "definition": "outlaw",
        "type": "n.",
        "word": "A habitual lawbreaker."
    },
    {
        "matched": false,
        "definition": "outlive",
        "type": "v.",
        "word": "To continue to exist after."
    },
    {
        "matched": false,
        "definition": "out-of-the-way",
        "type": "adj.",
        "word": "Remotely situated."
    },
    {
        "matched": false,
        "definition": "outpost",
        "type": "n.",
        "word": "A detachment of troops stationed at a distance from the main body to guard          "
    },
    {
        "matched": false,
        "definition": "outrage",
        "type": "n.",
        "word": "A gross infringement of morality or decency."
    },
    {
        "matched": false,
        "definition": "outrageous",
        "type": "adj.",
        "word": "Shocking in conduct."
    },
    {
        "matched": false,
        "definition": "outreach",
        "type": "v.",
        "word": "To reach or go beyond."
    },
    {
        "matched": false,
        "definition": "outride",
        "type": "v.",
        "word": "To ride faster than."
    },
    {
        "matched": false,
        "definition": "outrigger",
        "type": "n.",
        "word": "A part built or arranged to project beyond a natural outline for support."
    },
    {
        "matched": false,
        "definition": "outright",
        "type": "adv.",
        "word": "Entirely."
    },
    {
        "matched": false,
        "definition": "outskirt",
        "type": "n.",
        "word": "A border region."
    },
    {
        "matched": false,
        "definition": "outstretch",
        "type": "v.",
        "word": "To extend."
    },
    {
        "matched": false,
        "definition": "outstrip",
        "type": "v.",
        "word": "To go beyond."
    },
    {
        "matched": false,
        "definition": "outweigh",
        "type": "v.",
        "word": "To surpass in importance or excellence."
    },
    {
        "matched": false,
        "definition": "overdo",
        "type": "v.",
        "word": "To overtax the strength of."
    },
    {
        "matched": false,
        "definition": "overdose",
        "type": "n.",
        "word": "An excessive dose, usually so large a dose of a medicine that its effect is          "
    },
    {
        "matched": false,
        "definition": "overeat",
        "type": "v.",
        "word": "To eat to excess."
    },
    {
        "matched": false,
        "definition": "overhang",
        "type": "n.",
        "word": "A portion of a structure which projects or hangs over."
    },
    {
        "matched": false,
        "definition": "overleap",
        "type": "v.",
        "word": "To leap beyond."
    },
    {
        "matched": false,
        "definition": "overlord",
        "type": "n.",
        "word": "One who holds supremacy over another."
    },
    {
        "matched": false,
        "definition": "overpass",
        "type": "v.",
        "word": "To pass across or over, as a river."
    },
    {
        "matched": false,
        "definition": "overpay",
        "type": "v.",
        "word": "To pay or reward in excess."
    },
    {
        "matched": false,
        "definition": "overpower",
        "type": "v.",
        "word": "To gain supremacy or victory over by superior power."
    },
    {
        "matched": false,
        "definition": "overproduction",
        "type": "n.",
        "word": "Excessive production."
    },
    {
        "matched": false,
        "definition": "overreach",
        "type": "v.",
        "word": "To stretch out too far."
    },
    {
        "matched": false,
        "definition": "overrun",
        "type": "v.",
        "word": "To infest or ravage."
    },
    {
        "matched": false,
        "definition": "oversee",
        "type": "v.",
        "word": "To superintend."
    },
    {
        "matched": false,
        "definition": "overseer",
        "type": "n.",
        "word": "A supervisor."
    },
    {
        "matched": false,
        "definition": "overshadow",
        "type": "v.",
        "word": "To cast into the shade or render insignificant by comparison."
    },
    {
        "matched": false,
        "definition": "overstride",
        "type": "v.",
        "word": "To step beyond."
    },
    {
        "matched": false,
        "definition": "overthrow",
        "type": "v.",
        "word": "To vanquish an established ruler or government."
    },
    {
        "matched": false,
        "definition": "overtone",
        "type": "n.",
        "word": "A harmonic."
    },
    {
        "matched": false,
        "definition": "overture",
        "type": "n.",
        "word": "An instrumental prelude to an opera, oratorio, or ballet."
    },
    {
        "matched": false,
        "definition": "overweight",
        "type": "n.",
        "word": "Preponderance."
    },
    {
        "matched": false,
        "definition": "pacify",
        "type": "v.",
        "word": "To bring into a peaceful state."
    },
    {
        "matched": false,
        "definition": "packet",
        "type": "n.",
        "word": "A bundle, as of letters."
    },
    {
        "matched": false,
        "definition": "pact",
        "type": "n.",
        "word": "A covenant."
    },
    {
        "matched": false,
        "definition": "pagan",
        "type": "n.",
        "word": "A worshiper of false gods."
    },
    {
        "matched": false,
        "definition": "pageant",
        "type": "n.",
        "word": "A dramatic representation, especially a spectacular one."
    },
    {
        "matched": false,
        "definition": "palate",
        "type": "n.",
        "word": "The roof of the mouth."
    },
    {
        "matched": false,
        "definition": "palatial",
        "type": "adj.",
        "word": "Magnificent."
    },
    {
        "matched": false,
        "definition": "paleontology",
        "type": "n.",
        "word": "The branch of biology that treats of ancient life and fossil organisms."
    },
    {
        "matched": false,
        "definition": "palette",
        "type": "n.",
        "word": "A thin tablet, with a hole for the thumb, upon which artists lay their colors          "
    },
    {
        "matched": false,
        "definition": "palinode",
        "type": "n.",
        "word": "A retraction."
    },
    {
        "matched": false,
        "definition": "pall",
        "type": "v.",
        "word": "To make dull by satiety."
    },
    {
        "matched": false,
        "definition": "palliate",
        "type": "v.",
        "word": "To cause to appear less guilty."
    },
    {
        "matched": false,
        "definition": "pallid",
        "type": "adj.",
        "word": "Of a pale or wan appearance."
    },
    {
        "matched": false,
        "definition": "palpable",
        "type": "n.",
        "word": "perceptible by feeling or touch."
    },
    {
        "matched": false,
        "definition": "palsy",
        "type": "n.",
        "word": "Paralysis."
    },
    {
        "matched": false,
        "definition": "paly",
        "type": "adj.",
        "word": "Lacking color or brilliancy."
    },
    {
        "matched": false,
        "definition": "pamphlet",
        "type": "n.",
        "word": "A brief treatise or essay, usually on a subject of current interest."
    },
    {
        "matched": false,
        "definition": "pamphleteer",
        "type": "v.",
        "word": "To compose or issue pamphlets, especially controversial ones."
    },
    {
        "matched": false,
        "definition": "panacea",
        "type": "n.",
        "word": "A remedy or medicine proposed for or professing to cure all diseases."
    },
    {
        "matched": false,
        "definition": "Pan-American",
        "type": "adj.",
        "word": "Including or pertaining to the whole of America, both North and South."
    },
    {
        "matched": false,
        "definition": "pandemic",
        "type": "adj.",
        "word": "Affecting a whole people or all classes, as a disease."
    },
    {
        "matched": false,
        "definition": "pandemonium",
        "type": "n.",
        "word": "A fiendish or riotous uproar."
    },
    {
        "matched": false,
        "definition": "panegyric",
        "type": "n.",
        "word": "A formal and elaborate eulogy, written or spoken, of a person or of an act."
    },
    {
        "matched": false,
        "definition": "panel",
        "type": "n.",
        "word": "A rectangular piece set in or as in a frame."
    },
    {
        "matched": false,
        "definition": "panic",
        "type": "n.",
        "word": "A sudden, unreasonable, overpowering fear."
    },
    {
        "matched": false,
        "definition": "panoply",
        "type": "n.",
        "word": "A full set of armor."
    },
    {
        "matched": false,
        "definition": "panorama",
        "type": "n.",
        "word": "A series of large pictures representing a continuous scene."
    },
    {
        "matched": false,
        "definition": "pantheism",
        "type": "n.",
        "word": "The worship of nature for itself or its beauty."
    },
    {
        "matched": false,
        "definition": "Pantheon",
        "type": "n.",
        "word": "A circular temple at Rome with a fine Corinthian portico and a great domed          "
    },
    {
        "matched": false,
        "definition": "pantomime",
        "type": "n.",
        "word": "Sign-language."
    },
    {
        "matched": false,
        "definition": "pantoscope",
        "type": "n.",
        "word": "A very wide-angled photographic lens."
    },
    {
        "matched": false,
        "definition": "papacy",
        "type": "n.",
        "word": "The official head of the Roman Catholic Church."
    },
    {
        "matched": false,
        "definition": "papyrus",
        "type": "n.",
        "word": "The writing-paper of the ancient Egyptians, and later of the Romans."
    },
    {
        "matched": false,
        "definition": "parable",
        "type": "n.",
        "word": "A brief narrative founded on real scenes or events usually with a moral."
    },
    {
        "matched": false,
        "definition": "paradox",
        "type": "n.",
        "word": "A statement or doctrine seemingly in contradiction to the received belief."
    },
    {
        "matched": false,
        "definition": "paragon",
        "type": "n.",
        "word": "A model of excellence."
    },
    {
        "matched": false,
        "definition": "parallel",
        "type": "v.",
        "word": "To cause to correspond or lie in the same direction and equidistant in all          "
    },
    {
        "matched": false,
        "definition": "parallelism",
        "type": "n.",
        "word": "Essential likeness."
    },
    {
        "matched": false,
        "definition": "paralysis",
        "type": "n.",
        "word": "Loss of the power of contractility in the voluntary or involuntary muscles."
    },
    {
        "matched": false,
        "definition": "paralyze",
        "type": "v.",
        "word": "To deprive of the power to act."
    },
    {
        "matched": false,
        "definition": "paramount",
        "type": "adj.",
        "word": "Supreme in authority."
    },
    {
        "matched": false,
        "definition": "paramour",
        "type": "n.",
        "word": "One who is unlawfully and immorally a lover or a mistress."
    },
    {
        "matched": false,
        "definition": "paraphernalia",
        "type": "n.",
        "word": "Miscellaneous articles of equipment or adornment."
    },
    {
        "matched": false,
        "definition": "paraphrase",
        "type": "v.",
        "word": "Translate freely."
    },
    {
        "matched": false,
        "definition": "pare",
        "type": "v.",
        "word": "To cut, shave, or remove (the outside) from anything."
    },
    {
        "matched": false,
        "definition": "parentage",
        "type": "n.",
        "word": "The relation of parent to child, of the producer to the produced, or of cause          "
    },
    {
        "matched": false,
        "definition": "Pariah",
        "type": "n.",
        "word": "A member of a degraded class; a social outcast."
    },
    {
        "matched": false,
        "definition": "parish",
        "type": "n.",
        "word": "The ecclesiastical district in charge of a pastor."
    },
    {
        "matched": false,
        "definition": "Parisian",
        "type": "adj.",
        "word": "Of or pertaining to the city of Paris."
    },
    {
        "matched": false,
        "definition": "parity",
        "type": "n.",
        "word": "Equality, as of condition or rank."
    },
    {
        "matched": false,
        "definition": "parlance",
        "type": "n.",
        "word": "Mode of speech."
    },
    {
        "matched": false,
        "definition": "parley",
        "type": "v.",
        "word": "To converse in."
    },
    {
        "matched": false,
        "definition": "parliament",
        "type": "n.",
        "word": "A legislative body."
    },
    {
        "matched": false,
        "definition": "parlor",
        "type": "n.",
        "word": "A room for reception of callers or entertainment of guests."
    },
    {
        "matched": false,
        "definition": "parody",
        "type": "v.",
        "word": "To render ludicrous by imitating the language of."
    },
    {
        "matched": false,
        "definition": "paronymous",
        "type": "adj.",
        "word": "Derived from the same root or primitive word."
    },
    {
        "matched": false,
        "definition": "paroxysm",
        "type": "n.",
        "word": "A sudden outburst of any kind of activity."
    },
    {
        "matched": false,
        "definition": "parricide",
        "type": "n.",
        "word": "The murder of a parent."
    },
    {
        "matched": false,
        "definition": "parse",
        "type": "v.",
        "word": "To describe, as a sentence, by separating it into its elements and describing          "
    },
    {
        "matched": false,
        "definition": "parsimonious",
        "type": "adj.",
        "word": "Unduly sparing in the use or expenditure of money."
    },
    {
        "matched": false,
        "definition": "partible",
        "type": "adj.",
        "word": "Separable."
    },
    {
        "matched": false,
        "definition": "participant",
        "type": "n.",
        "word": "One having a share or part."
    },
    {
        "matched": false,
        "definition": "participate",
        "type": "v.",
        "word": "To receive or have a part or share of."
    },
    {
        "matched": false,
        "definition": "partition",
        "type": "n.",
        "word": "That which separates anything into distinct parts."
    },
    {
        "matched": false,
        "definition": "partisan",
        "type": "adj.",
        "word": "Characterized by or exhibiting undue or unreasoning devotion to a party."
    },
    {
        "matched": false,
        "definition": "passible",
        "type": "adj.",
        "word": "Capable of feeling of suffering."
    },
    {
        "matched": false,
        "definition": "passive",
        "type": "adj.",
        "word": "Unresponsive."
    },
    {
        "matched": false,
        "definition": "pastoral",
        "type": "adj.",
        "word": "Having the spirit or sentiment of rural life."
    },
    {
        "matched": false,
        "definition": "paternal",
        "type": "adj.",
        "word": "Fatherly."
    },
    {
        "matched": false,
        "definition": "paternity",
        "type": "n.",
        "word": "Fatherhood."
    },
    {
        "matched": false,
        "definition": "pathos",
        "type": "n.",
        "word": "The quality in any form of representation that rouses emotion or sympathy."
    },
    {
        "matched": false,
        "definition": "patriarch",
        "type": "n.",
        "word": "The chief of a tribe or race who rules by paternal right."
    },
    {
        "matched": false,
        "definition": "patrician",
        "type": "adj.",
        "word": "Of senatorial or noble rank."
    },
    {
        "matched": false,
        "definition": "patrimony",
        "type": "n.",
        "word": "An inheritance from an ancestor, especially from one's father."
    },
    {
        "matched": false,
        "definition": "patriotism",
        "type": "n.",
        "word": "Love and devotion to one's country."
    },
    {
        "matched": false,
        "definition": "patronize",
        "type": "v.",
        "word": "To exercise an arrogant condescension toward."
    },
    {
        "matched": false,
        "definition": "patronymic",
        "type": "adj.",
        "word": "Formed after one's father's name."
    },
    {
        "matched": false,
        "definition": "patter",
        "type": "v.",
        "word": "To mumble something over and over."
    },
    {
        "matched": false,
        "definition": "paucity",
        "type": "n.",
        "word": "Fewness."
    },
    {
        "matched": false,
        "definition": "pauper",
        "type": "n.",
        "word": "One without means of support."
    },
    {
        "matched": false,
        "definition": "pauperism",
        "type": "n.",
        "word": "Dependence on charity."
    },
    {
        "matched": false,
        "definition": "pavilion",
        "type": "n.",
        "word": "An open structure for temporary shelter."
    },
    {
        "matched": false,
        "definition": "payee",
        "type": "n.",
        "word": "A person to whom money has been or is to be paid."
    },
    {
        "matched": false,
        "definition": "peaceable",
        "type": "adj.",
        "word": "Tranquil."
    },
    {
        "matched": false,
        "definition": "peaceful",
        "type": "adj.",
        "word": "Tranquil."
    },
    {
        "matched": false,
        "definition": "peccable",
        "type": "adj.",
        "word": "Capable of sinning."
    },
    {
        "matched": false,
        "definition": "peccadillo",
        "type": "n.",
        "word": "A small breach of propriety or principle."
    },
    {
        "matched": false,
        "definition": "peccant",
        "type": "adj.",
        "word": "Guilty."
    },
    {
        "matched": false,
        "definition": "pectoral",
        "type": "adj.",
        "word": "Pertaining to the breast or thorax."
    },
    {
        "matched": false,
        "definition": "pecuniary",
        "type": "adj.",
        "word": "Consisting of money."
    },
    {
        "matched": false,
        "definition": "pedagogics",
        "type": "n.",
        "word": "The science and art of teaching."
    },
    {
        "matched": false,
        "definition": "pedagogue",
        "type": "n.",
        "word": "A schoolmaster."
    },
    {
        "matched": false,
        "definition": "pedagogy",
        "type": "n.",
        "word": "The science and art of teaching"
    },
    {
        "matched": false,
        "definition": "pedal",
        "type": "n.",
        "word": "A lever for the foot usually applied only to musical instruments, cycles, and          "
    },
    {
        "matched": false,
        "definition": "pedant",
        "type": "n.",
        "word": "A scholar who makes needless and inopportune display of his learning."
    },
    {
        "matched": false,
        "definition": "peddle",
        "type": "v.",
        "word": "To go about with a small stock of goods to sell."
    },
    {
        "matched": false,
        "definition": "pedestal",
        "type": "n.",
        "word": "A base or support as for a column, statue, or vase."
    },
    {
        "matched": false,
        "definition": "pedestrian",
        "type": "n.",
        "word": "One who journeys on foot."
    },
    {
        "matched": false,
        "definition": "pediatrics",
        "type": "n.",
        "word": "The department of medical science that relates to the treatment of diseases          "
    },
    {
        "matched": false,
        "definition": "pedigree",
        "type": "n.",
        "word": "One's line of ancestors."
    },
    {
        "matched": false,
        "definition": "peddler",
        "type": "n.",
        "word": "One who travels from house to house with an assortment of goods for retail."
    },
    {
        "matched": false,
        "definition": "peerage",
        "type": "n.",
        "word": "The nobility."
    },
    {
        "matched": false,
        "definition": "peerless",
        "type": "adj.",
        "word": "Of unequaled excellence or worth."
    },
    {
        "matched": false,
        "definition": "peevish",
        "type": "adj.",
        "word": "Petulant. (irritable)"
    },
    {
        "matched": false,
        "definition": "pellucid",
        "type": "adj.",
        "word": "Translucent."
    },
    {
        "matched": false,
        "definition": "penalty",
        "type": "n.",
        "word": "The consequences that follow the transgression of natural or divine law."
    },
    {
        "matched": false,
        "definition": "penance",
        "type": "n.",
        "word": "Punishment to which one voluntarily submits or subjects himself as an          "
    },
    {
        "matched": false,
        "definition": "penchant",
        "type": "n.",
        "word": "A bias in favor of something."
    },
    {
        "matched": false,
        "definition": "pendant",
        "type": "n.",
        "word": "Anything that hangs from something else, either for ornament or for use."
    },
    {
        "matched": false,
        "definition": "pendulous",
        "type": "adj.",
        "word": "Hanging, especially so as to swing by an attached end or part."
    },
    {
        "matched": false,
        "definition": "pendulum",
        "type": "n.",
        "word": "A weight hung on a rod, serving by its oscillation to regulate the rate of a          "
    },
    {
        "matched": false,
        "definition": "penetrable",
        "type": "adj.",
        "word": "That may be pierced by physical, moral, or intellectual force."
    },
    {
        "matched": false,
        "definition": "penetrate",
        "type": "v.",
        "word": "To enter or force a way into the interior parts of."
    },
    {
        "matched": false,
        "definition": "penetration",
        "type": "n.",
        "word": "Discernment."
    },
    {
        "matched": false,
        "definition": "peninsular",
        "type": "adj.",
        "word": "Pertaining to a piece of land almost surrounded by water."
    },
    {
        "matched": false,
        "definition": "penitence",
        "type": "n.",
        "word": "Sorrow for sin with desire to amend and to atone."
    },
    {
        "matched": false,
        "definition": "penitential",
        "type": "adj.",
        "word": "Pertaining to sorrow for sin with desire to amend and to atone."
    },
    {
        "matched": false,
        "definition": "pennant",
        "type": "n.",
        "word": "A small flag."
    },
    {
        "matched": false,
        "definition": "pension",
        "type": "n.",
        "word": "A periodical allowance to an individual on account of past service done by          "
    },
    {
        "matched": false,
        "definition": "pentagram",
        "type": "n.",
        "word": "A figure having five points or lobes."
    },
    {
        "matched": false,
        "definition": "pentavalent",
        "type": "adj.",
        "word": "Quinqeuvalent."
    },
    {
        "matched": false,
        "definition": "pentad",
        "type": "n.",
        "word": "The number five."
    },
    {
        "matched": false,
        "definition": "pentagon",
        "type": "n.",
        "word": "A figure, especially, with five angles and five sides."
    },
    {
        "matched": false,
        "definition": "pentahedron",
        "type": "n.",
        "word": "A solid bounded by five plane faces."
    },
    {
        "matched": false,
        "definition": "pentameter",
        "type": "n.",
        "word": "In prosody, a line of verse containing five units or feet."
    },
    {
        "matched": false,
        "definition": "pentathlon",
        "type": "n.",
        "word": "The contest of five associated exercises in the great games and the same          "
    },
    {
        "matched": false,
        "definition": "penultimate",
        "type": "adj.",
        "word": "A syllable or member of a series that is last but one."
    },
    {
        "matched": false,
        "definition": "penurious",
        "type": "adj.",
        "word": "Excessively sparing in the use of money."
    },
    {
        "matched": false,
        "definition": "penury",
        "type": "n.",
        "word": "Indigence."
    },
    {
        "matched": false,
        "definition": "perambulate",
        "type": "v.",
        "word": "To walk about."
    },
    {
        "matched": false,
        "definition": "perceive",
        "type": "v.",
        "word": "To have knowledge of, or receive impressions concerning, through the medium of          "
    },
    {
        "matched": false,
        "definition": "perceptible",
        "type": "adj.",
        "word": "Cognizable."
    },
    {
        "matched": false,
        "definition": "perception",
        "type": "n.",
        "word": "Knowledge through the senses of the existence and properties of matter or          "
    },
    {
        "matched": false,
        "definition": "percipience",
        "type": "n.",
        "word": "The act of perceiving."
    },
    {
        "matched": false,
        "definition": "percipient",
        "type": "n.",
        "word": "One who or that which perceives."
    },
    {
        "matched": false,
        "definition": "percolate",
        "type": "v.",
        "word": "To filter."
    },
    {
        "matched": false,
        "definition": "percolator",
        "type": "n.",
        "word": "A filter."
    },
    {
        "matched": false,
        "definition": "percussion",
        "type": "n.",
        "word": "The sharp striking of one body against another."
    },
    {
        "matched": false,
        "definition": "peremptory",
        "type": "adj.",
        "word": "Precluding question or appeal."
    },
    {
        "matched": false,
        "definition": "perennial",
        "type": "adj.",
        "word": "Continuing though the year or through many years."
    },
    {
        "matched": false,
        "definition": "perfectible",
        "type": "adj.",
        "word": "Capable of being made perfect."
    },
    {
        "matched": false,
        "definition": "perfidy",
        "type": "n.",
        "word": "Treachery."
    },
    {
        "matched": false,
        "definition": "perforate",
        "type": "v.",
        "word": "To make a hole or holes through."
    },
    {
        "matched": false,
        "definition": "perform",
        "type": "v.",
        "word": "To accomplish."
    },
    {
        "matched": false,
        "definition": "perfumery",
        "type": "n.",
        "word": "The preparation of perfumes."
    },
    {
        "matched": false,
        "definition": "perfunctory",
        "type": "adj.",
        "word": "Half-hearted."
    },
    {
        "matched": false,
        "definition": "perhaps",
        "type": "adv.",
        "word": "Possibly."
    },
    {
        "matched": false,
        "definition": "perigee",
        "type": "n.",
        "word": "The point in the orbit of the moon when it is nearest the earth."
    },
    {
        "matched": false,
        "definition": "periodicity",
        "type": "n.",
        "word": "The habit or characteristic of recurrence at regular intervals."
    },
    {
        "matched": false,
        "definition": "peripatetic",
        "type": "adj.",
        "word": "Walking about."
    },
    {
        "matched": false,
        "definition": "perjure",
        "type": "v.",
        "word": "To swear falsely to."
    },
    {
        "matched": false,
        "definition": "perjury",
        "type": "n.",
        "word": "A solemn assertion of a falsity."
    },
    {
        "matched": false,
        "definition": "permanence",
        "type": "n.",
        "word": "A continuance in the same state, or without any change that destroys the          "
    },
    {
        "matched": false,
        "definition": "permanent",
        "type": "adj.",
        "word": "Durable."
    },
    {
        "matched": false,
        "definition": "permeate",
        "type": "v.",
        "word": "To pervade."
    },
    {
        "matched": false,
        "definition": "permissible",
        "type": "adj.",
        "word": "That may be allowed."
    },
    {
        "matched": false,
        "definition": "permutation",
        "type": "n.",
        "word": "Reciprocal change, different ordering of same items."
    },
    {
        "matched": false,
        "definition": "pernicious",
        "type": "adj.",
        "word": "Tending to kill or hurt."
    },
    {
        "matched": false,
        "definition": "perpendicular",
        "type": "adj.",
        "word": "Straight up and down."
    },
    {
        "matched": false,
        "definition": "perpetrator",
        "type": "n.",
        "word": "The doer of a wrong or a criminal act."
    },
    {
        "matched": false,
        "definition": "perpetuate",
        "type": "v.",
        "word": "To preserve from extinction or oblivion."
    },
    {
        "matched": false,
        "definition": "perquisite",
        "type": "n.",
        "word": "Any profit from service beyond the amount fixed as salary or wages."
    },
    {
        "matched": false,
        "definition": "persecution",
        "type": "n.",
        "word": "Harsh or malignant oppression."
    },
    {
        "matched": false,
        "definition": "perseverance",
        "type": "n.",
        "word": "A persistence in purpose and effort."
    },
    {
        "matched": false,
        "definition": "persevere",
        "type": "v.",
        "word": "To continue striving in spite of discouragements."
    },
    {
        "matched": false,
        "definition": "persiflage",
        "type": "n.",
        "word": "Banter."
    },
    {
        "matched": false,
        "definition": "persist",
        "type": "v.",
        "word": "To continue steadfast against opposition."
    },
    {
        "matched": false,
        "definition": "persistence",
        "type": "n.",
        "word": "A fixed adherence to a resolve, course of conduct, or the like."
    },
    {
        "matched": false,
        "definition": "personage",
        "type": "n.",
        "word": "A man or woman as an individual, especially one of rank or high station."
    },
    {
        "matched": false,
        "definition": "personal",
        "type": "adj.",
        "word": "Not general or public."
    },
    {
        "matched": false,
        "definition": "personality",
        "type": "n.",
        "word": "The attributes, taken collectively, that make up the character and nature          "
    },
    {
        "matched": false,
        "definition": "personnel",
        "type": "n.",
        "word": "The force of persons collectively employed in some service."
    },
    {
        "matched": false,
        "definition": "perspective",
        "type": "n.",
        "word": "The relative importance of facts or matters from any special point of view."
    },
    {
        "matched": false,
        "definition": "perspicacious",
        "type": "adj.",
        "word": "Astute."
    },
    {
        "matched": false,
        "definition": "perspicacity",
        "type": "n.",
        "word": "Acuteness or discernment."
    },
    {
        "matched": false,
        "definition": "perspicuous",
        "type": "adj.",
        "word": "Lucid."
    },
    {
        "matched": false,
        "definition": "perspiration",
        "type": "n.",
        "word": "Sweat."
    },
    {
        "matched": false,
        "definition": "perspire",
        "type": "v.",
        "word": "To excrete through the pores of the skin."
    },
    {
        "matched": false,
        "definition": "persuade",
        "type": "v.",
        "word": "To win the mind of by argument, eloquence, evidence, or reflection."
    },
    {
        "matched": false,
        "definition": "persuadable",
        "type": "adj.",
        "word": "capable of influencing to action by entreaty, statement, or anything that          "
    },
    {
        "matched": false,
        "definition": "pertinacious",
        "type": "adj.",
        "word": "Persistent or unyielding."
    },
    {
        "matched": false,
        "definition": "pertinacity",
        "type": "n.",
        "word": "Unyielding adherence."
    },
    {
        "matched": false,
        "definition": "pertinent",
        "type": "adj.",
        "word": "Relevant."
    },
    {
        "matched": false,
        "definition": "perturb",
        "type": "v.",
        "word": "To disturb greatly."
    },
    {
        "matched": false,
        "definition": "perturbation",
        "type": "n.",
        "word": "Mental excitement or confusion."
    },
    {
        "matched": false,
        "definition": "perusal",
        "type": "n.",
        "word": "The act of reading carefully or thoughtfully."
    },
    {
        "matched": false,
        "definition": "pervade",
        "type": "v.",
        "word": "To pass or spread through every part."
    },
    {
        "matched": false,
        "definition": "pervasion",
        "type": "n.",
        "word": "The state of spreading through every part."
    },
    {
        "matched": false,
        "definition": "pervasive",
        "type": "adj.",
        "word": "Thoroughly penetrating or permeating."
    },
    {
        "matched": false,
        "definition": "perverse",
        "type": "adj.",
        "word": "Unreasonable."
    },
    {
        "matched": false,
        "definition": "perversion",
        "type": "n.",
        "word": "Diversion from the true meaning or proper purpose."
    },
    {
        "matched": false,
        "definition": "perversity",
        "type": "n.",
        "word": "Wickedness."
    },
    {
        "matched": false,
        "definition": "pervert",
        "type": "n.",
        "word": "One who has forsaken a doctrine regarded as true for one esteemed false."
    },
    {
        "matched": false,
        "definition": "pervious",
        "type": "adj.",
        "word": "Admitting the entrance or passage of another substance."
    },
    {
        "matched": false,
        "definition": "pestilence",
        "type": "n.",
        "word": "A raging epidemic."
    },
    {
        "matched": false,
        "definition": "pestilent",
        "type": "adj.",
        "word": "Having a malign influence or effect."
    },
    {
        "matched": false,
        "definition": "pestilential",
        "type": "adj.",
        "word": "having the nature of or breeding pestilence."
    },
    {
        "matched": false,
        "definition": "peter",
        "type": "v.",
        "word": "To fail or lose power, efficiency, or value."
    },
    {
        "matched": false,
        "definition": "petrify",
        "type": "v.",
        "word": "To convert into a substance of stony hardness and character."
    },
    {
        "matched": false,
        "definition": "petulance",
        "type": "n.",
        "word": "The character or condition of being impatient, capricious or petulant."
    },
    {
        "matched": false,
        "definition": "petulant",
        "type": "adj.",
        "word": "Displaying impatience."
    },
    {
        "matched": false,
        "definition": "pharmacopoeia",
        "type": "n.",
        "word": "A book containing the formulas and methods of preparation of medicines          "
    },
    {
        "matched": false,
        "definition": "pharmacy",
        "type": "n.",
        "word": "The art or business of compounding and dispensing medicines."
    },
    {
        "matched": false,
        "definition": "phenomenal",
        "type": "adj.",
        "word": "Extraordinary or marvelous."
    },
    {
        "matched": false,
        "definition": "phenomenon",
        "type": "n.",
        "word": "Any unusual occurrence."
    },
    {
        "matched": false,
        "definition": "philander",
        "type": "v.",
        "word": "To play at courtship with a woman."
    },
    {
        "matched": false,
        "definition": "philanthropic",
        "type": "adj.",
        "word": "Benevolent."
    },
    {
        "matched": false,
        "definition": "philanthropist",
        "type": "n.",
        "word": "One who endeavors to help his fellow men."
    },
    {
        "matched": false,
        "definition": "philanthropy",
        "type": "n.",
        "word": "Active humanitarianism."
    },
    {
        "matched": false,
        "definition": "philately",
        "type": "n.",
        "word": "The study and collection of stamps."
    },
    {
        "matched": false,
        "definition": "philharmonic",
        "type": "adj.",
        "word": "Fond of music."
    },
    {
        "matched": false,
        "definition": "philogynist",
        "type": "n.",
        "word": "One who is fond of women."
    },
    {
        "matched": false,
        "definition": "philologist",
        "type": "n.",
        "word": "An expert in linguistics."
    },
    {
        "matched": false,
        "definition": "philology",
        "type": "n.",
        "word": "The study of language in connection with history and literature."
    },
    {
        "matched": false,
        "definition": "philosophize",
        "type": "v.",
        "word": "To seek ultimate causes and principles."
    },
    {
        "matched": false,
        "definition": "philosophy",
        "type": "n.",
        "word": "The general principles, laws, or causes that furnish the rational          "
    },
    {
        "matched": false,
        "definition": "phlegmatic",
        "type": "adj.",
        "word": "Not easily roused to feeling or action."
    },
    {
        "matched": false,
        "definition": "phonetic",
        "type": "adj.",
        "word": "Representing articulate sounds or speech."
    },
    {
        "matched": false,
        "definition": "phonic",
        "type": "adj.",
        "word": "Pertaining to the nature of sound."
    },
    {
        "matched": false,
        "definition": "phonogram",
        "type": "n.",
        "word": "A graphic character symbolizing an articulate sound."
    },
    {
        "matched": false,
        "definition": "phonology",
        "type": "n.",
        "word": "The science of human vocal sounds."
    },
    {
        "matched": false,
        "definition": "phosphorescence",
        "type": "n.",
        "word": "The property of emitting light."
    },
    {
        "matched": false,
        "definition": "photoelectric",
        "type": "adj.",
        "word": "Pertaining to the combined action of light and electricity."
    },
    {
        "matched": false,
        "definition": "photometer",
        "type": "n.",
        "word": "Any instrument for measuring the intensity of light or comparing the          "
    },
    {
        "matched": false,
        "definition": "photometry",
        "type": "n.",
        "word": "The art of measuring the intensity of light."
    },
    {
        "matched": false,
        "definition": "physicist",
        "type": "n.",
        "word": "A specialist in the science that treats of the phenomena associated with          "
    },
    {
        "matched": false,
        "definition": "physics",
        "type": "n.",
        "word": "The science that treats of the phenomena associated with matter and energy."
    },
    {
        "matched": false,
        "definition": "physiocracy",
        "type": "n.",
        "word": "The doctrine that land and its products are the only true wealth."
    },
    {
        "matched": false,
        "definition": "physiognomy",
        "type": "n.",
        "word": "The external appearance merely."
    },
    {
        "matched": false,
        "definition": "physiography",
        "type": "n.",
        "word": "Description of nature."
    },
    {
        "matched": false,
        "definition": "physiology",
        "type": "n.",
        "word": "The science of organic functions."
    },
    {
        "matched": false,
        "definition": "physique",
        "type": "n.",
        "word": "The physical structure or organization of a person."
    },
    {
        "matched": false,
        "definition": "picayune",
        "type": "adj.",
        "word": "Of small value."
    },
    {
        "matched": false,
        "definition": "piccolo",
        "type": "n.",
        "word": "A small flute."
    },
    {
        "matched": false,
        "definition": "piece",
        "type": "n.",
        "word": "A loose or separated part, as distinguished from the whole or the mass."
    },
    {
        "matched": false,
        "definition": "piecemeal",
        "type": "adv.",
        "word": "Gradually."
    },
    {
        "matched": false,
        "definition": "pillage",
        "type": "n.",
        "word": "Open robbery, as in war."
    },
    {
        "matched": false,
        "definition": "pillory",
        "type": "n.",
        "word": "A wooden framework in which an offender is fastened to boards and is exposed to          "
    },
    {
        "matched": false,
        "definition": "pincers",
        "type": "n.",
        "word": "An instrument having two lever-handles and two jaws working on a pivot."
    },
    {
        "matched": false,
        "definition": "pinchers",
        "type": "n.",
        "word": "An instrument having two jaws working on a pivot."
    },
    {
        "matched": false,
        "definition": "pinnacle",
        "type": "n.",
        "word": "A high or topmost point, as a mountain-peak."
    },
    {
        "matched": false,
        "definition": "pioneer",
        "type": "n.",
        "word": "One among the first to explore a country."
    },
    {
        "matched": false,
        "definition": "pious",
        "type": "adj.",
        "word": "Religious."
    },
    {
        "matched": false,
        "definition": "pique",
        "type": "v.",
        "word": "To excite a slight degree of anger in."
    },
    {
        "matched": false,
        "definition": "piteous",
        "type": "adj.",
        "word": "Compassionate."
    },
    {
        "matched": false,
        "definition": "pitiable",
        "type": "adj.",
        "word": "Contemptible."
    },
    {
        "matched": false,
        "definition": "pitiful",
        "type": "adj.",
        "word": "Wretched."
    },
    {
        "matched": false,
        "definition": "pitiless",
        "type": "adj.",
        "word": "Hard-hearted."
    },
    {
        "matched": false,
        "definition": "pittance",
        "type": "n.",
        "word": "Any small portion or meager allowance."
    },
    {
        "matched": false,
        "definition": "placate",
        "type": "v.",
        "word": "To bring from a state of angry or hostile feeling to one of patience or          "
    },
    {
        "matched": false,
        "definition": "placid",
        "type": "adj.",
        "word": "Serene."
    },
    {
        "matched": false,
        "definition": "plagiarism",
        "type": "n.",
        "word": "The stealing of passages from the writings of another and publishing them as          "
    },
    {
        "matched": false,
        "definition": "planisphere",
        "type": "n.",
        "word": "A polar projection of the heavens on a chart."
    },
    {
        "matched": false,
        "definition": "plasticity",
        "type": "n.",
        "word": "The property of some substances through which the form of the mass can          "
    },
    {
        "matched": false,
        "definition": "platitude",
        "type": "n.",
        "word": "A written or spoken statement that is flat, dull, or commonplace."
    },
    {
        "matched": false,
        "definition": "plaudit",
        "type": "n.",
        "word": "An expression of applause."
    },
    {
        "matched": false,
        "definition": "plausible",
        "type": "adj.",
        "word": "Seeming likely to be true, though open to doubt."
    },
    {
        "matched": false,
        "definition": "playful",
        "type": "adj.",
        "word": "Frolicsome."
    },
    {
        "matched": false,
        "definition": "playwright",
        "type": "n.",
        "word": "A maker of plays for the stage."
    },
    {
        "matched": false,
        "definition": "plea",
        "type": "n.",
        "word": "An argument to obtain some desired action."
    },
    {
        "matched": false,
        "definition": "pleasant",
        "type": "adj.",
        "word": "Agreeable."
    },
    {
        "matched": false,
        "definition": "pleasurable",
        "type": "adj.",
        "word": "Affording gratification."
    },
    {
        "matched": false,
        "definition": "plebeian",
        "type": "adj.",
        "word": "Common."
    },
    {
        "matched": false,
        "definition": "pledgee",
        "type": "n.",
        "word": "The person to whom anything is pledged."
    },
    {
        "matched": false,
        "definition": "pledgeor",
        "type": "n.",
        "word": "One who gives a pledge."
    },
    {
        "matched": false,
        "definition": "plenary",
        "type": "adj.",
        "word": "Entire."
    },
    {
        "matched": false,
        "definition": "plenipotentiary",
        "type": "n.",
        "word": "A person fully empowered to transact any business."
    },
    {
        "matched": false,
        "definition": "plenitude",
        "type": "n.",
        "word": "Abundance."
    },
    {
        "matched": false,
        "definition": "plenteous",
        "type": "adj.",
        "word": "Abundant."
    },
    {
        "matched": false,
        "definition": "plumb",
        "type": "n.",
        "word": "A weight suspended by a line to test the verticality of something."
    },
    {
        "matched": false,
        "definition": "plummet",
        "type": "n.",
        "word": "A piece of lead for making soundings, adjusting walls to the vertical."
    },
    {
        "matched": false,
        "definition": "pluperfect",
        "type": "adj.",
        "word": "Expressing past time or action prior to some other past time or action."
    },
    {
        "matched": false,
        "definition": "plural",
        "type": "adj.",
        "word": "Containing or consisting of more than one."
    },
    {
        "matched": false,
        "definition": "plurality",
        "type": "n.",
        "word": "A majority."
    },
    {
        "matched": false,
        "definition": "plutocracy",
        "type": "n.",
        "word": "A wealthy class in a political community who control the government by means          "
    },
    {
        "matched": false,
        "definition": "pneumatic",
        "type": "adj.",
        "word": "Pertaining to or consisting of air or gas."
    },
    {
        "matched": false,
        "definition": "poesy",
        "type": "n.",
        "word": "Poetry."
    },
    {
        "matched": false,
        "definition": "poetaster",
        "type": "n.",
        "word": "An inferior poet."
    },
    {
        "matched": false,
        "definition": "poetic",
        "type": "adj.",
        "word": "Pertaining to poetry."
    },
    {
        "matched": false,
        "definition": "poetics",
        "type": "n.",
        "word": "The rules and principles of poetry."
    },
    {
        "matched": false,
        "definition": "poignancy",
        "type": "n.",
        "word": "Severity or acuteness, especially of pain or grief."
    },
    {
        "matched": false,
        "definition": "poignant",
        "type": "adj.",
        "word": "Severely painful or acute to the spirit."
    },
    {
        "matched": false,
        "definition": "poise",
        "type": "n.",
        "word": "Equilibrium."
    },
    {
        "matched": false,
        "definition": "polar",
        "type": "adj.",
        "word": "Pertaining to the poles of a sphere, especially of the earth."
    },
    {
        "matched": false,
        "definition": "polemics",
        "type": "n.",
        "word": "The art of controversy or disputation."
    },
    {
        "matched": false,
        "definition": "pollen",
        "type": "n.",
        "word": "The fine dust-like grains or powder formed within the anther of a flowering          "
    },
    {
        "matched": false,
        "definition": "pollute",
        "type": "v.",
        "word": "To contaminate."
    },
    {
        "matched": false,
        "definition": "polyarchy",
        "type": "n.",
        "word": "Government by several or many persons of what- ever class."
    },
    {
        "matched": false,
        "definition": "polycracy",
        "type": "n.",
        "word": "The rule of many."
    },
    {
        "matched": false,
        "definition": "polygamy",
        "type": "n.",
        "word": "the fact or condition of having more than one wife or husband at once."
    },
    {
        "matched": false,
        "definition": "polyglot",
        "type": "adj.",
        "word": "Speaking several tongues."
    },
    {
        "matched": false,
        "definition": "polygon",
        "type": "n.",
        "word": "A figure having many angles."
    },
    {
        "matched": false,
        "definition": "polyhedron",
        "type": "n.",
        "word": "A solid bounded by plane faces, especially by more than four."
    },
    {
        "matched": false,
        "definition": "polysyllable",
        "type": "adj.",
        "word": "Having several syllables, especially more than three syllables."
    },
    {
        "matched": false,
        "definition": "polytechnic",
        "type": "adj.",
        "word": "Pertaining to, embracing, or practicing many arts."
    },
    {
        "matched": false,
        "definition": "polytheism",
        "type": "n.",
        "word": "The doctrine or belief that there are more gods than one."
    },
    {
        "matched": false,
        "definition": "pommel",
        "type": "v.",
        "word": "To beat with something thick or bulky."
    },
    {
        "matched": false,
        "definition": "pomposity",
        "type": "n.",
        "word": "The quality of being marked by an assumed stateliness and impressiveness of          "
    },
    {
        "matched": false,
        "definition": "pompous",
        "type": "adj.",
        "word": "Marked by an assumed stateliness and impressiveness of manner."
    },
    {
        "matched": false,
        "definition": "ponder",
        "type": "v.",
        "word": "To meditate or reflect upon."
    },
    {
        "matched": false,
        "definition": "ponderous",
        "type": "adj.",
        "word": "Unusually weighty or forcible."
    },
    {
        "matched": false,
        "definition": "pontiff",
        "type": "n.",
        "word": "The Pope."
    },
    {
        "matched": false,
        "definition": "populace",
        "type": "n.",
        "word": "The common people."
    },
    {
        "matched": false,
        "definition": "populous",
        "type": "adj.",
        "word": "Containing many inhabitants, especially in proportion to the territory."
    },
    {
        "matched": false,
        "definition": "portend",
        "type": "v.",
        "word": "To indicate as being about to happen, especially by previous signs."
    },
    {
        "matched": false,
        "definition": "portent",
        "type": "n.",
        "word": "Anything that indicates what is to happen."
    },
    {
        "matched": false,
        "definition": "portfolio",
        "type": "n.",
        "word": "A portable case for holding writing-materials, drawings, etc."
    },
    {
        "matched": false,
        "definition": "posit",
        "type": "v.",
        "word": "To present in an orderly manner."
    },
    {
        "matched": false,
        "definition": "position",
        "type": "n.",
        "word": "The manner in which a thing is placed."
    },
    {
        "matched": false,
        "definition": "positive",
        "type": "adj.",
        "word": "Free from doubt or hesitation."
    },
    {
        "matched": false,
        "definition": "posse",
        "type": "n.",
        "word": "A force of men."
    },
    {
        "matched": false,
        "definition": "possess",
        "type": "v.",
        "word": "To own."
    },
    {
        "matched": false,
        "definition": "possession",
        "type": "n.",
        "word": "The having, holding, or detention of property in one's power or command."
    },
    {
        "matched": false,
        "definition": "possessive",
        "type": "adj.",
        "word": "Pertaining to the having, holding, or detention of property in one's power          "
    },
    {
        "matched": false,
        "definition": "possessor",
        "type": "n.",
        "word": "One who owns, enjoys, or controls anything, as property."
    },
    {
        "matched": false,
        "definition": "possible",
        "type": "adj.",
        "word": "Being not beyond the reach of power natural, moral, or supernatural."
    },
    {
        "matched": false,
        "definition": "postdate",
        "type": "v.",
        "word": "To make the date of any writing later than the real date."
    },
    {
        "matched": false,
        "definition": "posterior",
        "type": "n.",
        "word": "The hinder part."
    },
    {
        "matched": false,
        "definition": "postgraduate",
        "type": "adj.",
        "word": "Pertaining to studies that are pursued after receiving a degree."
    },
    {
        "matched": false,
        "definition": "postscript",
        "type": "n.",
        "word": "Something added to a letter after the writer's signature."
    },
    {
        "matched": false,
        "definition": "potency",
        "type": "n.",
        "word": "Power."
    },
    {
        "matched": false,
        "definition": "potent",
        "type": "adj.",
        "word": "Physically powerful."
    },
    {
        "matched": false,
        "definition": "potentate",
        "type": "n.",
        "word": "One possessed of great power or sway."
    },
    {
        "matched": false,
        "definition": "potential",
        "type": "n.",
        "word": "Anything that may be possible."
    },
    {
        "matched": false,
        "definition": "potion",
        "type": "n.",
        "word": "A dose of liquid medicine."
    },
    {
        "matched": false,
        "definition": "powerless",
        "type": "adj.",
        "word": "Impotent."
    },
    {
        "matched": false,
        "definition": "practicable",
        "type": "adj.",
        "word": "Feasible."
    },
    {
        "matched": false,
        "definition": "prate",
        "type": "v.",
        "word": "To talk about vainly or foolishly."
    },
    {
        "matched": false,
        "definition": "prattle",
        "type": "v.",
        "word": "To utter in simple or childish talk."
    },
    {
        "matched": false,
        "definition": "preamble",
        "type": "n.",
        "word": "A statement introductory to and explanatory of what follows."
    },
    {
        "matched": false,
        "definition": "precarious",
        "type": "adj.",
        "word": "Perilous."
    },
    {
        "matched": false,
        "definition": "precaution",
        "type": "n.",
        "word": "A provision made in advance for some possible emergency or danger."
    },
    {
        "matched": false,
        "definition": "precede",
        "type": "v.",
        "word": "To happen first."
    },
    {
        "matched": false,
        "definition": "precedence",
        "type": "n.",
        "word": "Priority in place, time, or rank."
    },
    {
        "matched": false,
        "definition": "precedent",
        "type": "n.",
        "word": "An instance that may serve as a guide or basis for a rule."
    },
    {
        "matched": false,
        "definition": "precedential",
        "type": "adj.",
        "word": "Of the nature of an instance that may serve as a guide or basis for a          "
    },
    {
        "matched": false,
        "definition": "precession",
        "type": "n.",
        "word": "The act of going forward."
    },
    {
        "matched": false,
        "definition": "precipice",
        "type": "n.",
        "word": "A high and very steep or approximately vertical cliff."
    },
    {
        "matched": false,
        "definition": "precipitant",
        "type": "adj.",
        "word": "Moving onward quickly and heedlessly."
    },
    {
        "matched": false,
        "definition": "precipitate",
        "type": "v.",
        "word": "To force forward prematurely."
    },
    {
        "matched": false,
        "definition": "precise",
        "type": "adj.",
        "word": "Exact."
    },
    {
        "matched": false,
        "definition": "precision",
        "type": "n.",
        "word": "Accuracy of limitation, definition, or adjustment."
    },
    {
        "matched": false,
        "definition": "preclude",
        "type": "v.",
        "word": "To prevent."
    },
    {
        "matched": false,
        "definition": "precocious",
        "type": "adj.",
        "word": "Having the mental faculties prematurely developed."
    },
    {
        "matched": false,
        "definition": "precursor",
        "type": "n.",
        "word": "A forerunner or herald."
    },
    {
        "matched": false,
        "definition": "predatory",
        "type": "adj.",
        "word": "Prone to pillaging."
    },
    {
        "matched": false,
        "definition": "predecessor",
        "type": "n.",
        "word": "An incumbent of a given office previous to another."
    },
    {
        "matched": false,
        "definition": "predicament",
        "type": "n.",
        "word": "A difficult, trying situation or plight."
    },
    {
        "matched": false,
        "definition": "predicate",
        "type": "v.",
        "word": "To state as belonging to something."
    },
    {
        "matched": false,
        "definition": "predict",
        "type": "v.",
        "word": "To foretell."
    },
    {
        "matched": false,
        "definition": "prediction",
        "type": "n.",
        "word": "A prophecy."
    },
    {
        "matched": false,
        "definition": "predominance",
        "type": "n.",
        "word": "Ascendancy or preponderance."
    },
    {
        "matched": false,
        "definition": "predominant",
        "type": "adj.",
        "word": "Superior in power, influence, effectiveness, number, or degree."
    },
    {
        "matched": false,
        "definition": "predominate",
        "type": "v.",
        "word": "To be chief in importance, quantity, or degree."
    },
    {
        "matched": false,
        "definition": "preeminence",
        "type": "n.",
        "word": "Special eminence."
    },
    {
        "matched": false,
        "definition": "preempt",
        "type": "v.",
        "word": "To secure the right of preference in the purchase of public land."
    },
    {
        "matched": false,
        "definition": "preemption",
        "type": "n.",
        "word": "The right or act of purchasing before others."
    },
    {
        "matched": false,
        "definition": "preengage",
        "type": "v.",
        "word": "To preoccupy."
    },
    {
        "matched": false,
        "definition": "preestablish",
        "type": "v.",
        "word": "To settle or arrange beforehand."
    },
    {
        "matched": false,
        "definition": "preexist",
        "type": "v.",
        "word": "To exist at a period or in a state earlier than something else."
    },
    {
        "matched": false,
        "definition": "preexistence",
        "type": "n.",
        "word": "Existence antecedent to something."
    },
    {
        "matched": false,
        "definition": "preface",
        "type": "n.",
        "word": "A brief explanation or address to the reader, at the beginning of a book."
    },
    {
        "matched": false,
        "definition": "prefatory",
        "type": "adj.",
        "word": "Pertaining to a brief explanation to the reader at the beginning of a book."
    },
    {
        "matched": false,
        "definition": "prefer",
        "type": "v.",
        "word": "To hold in higher estimation."
    },
    {
        "matched": false,
        "definition": "preferable",
        "type": "adj.",
        "word": "More desirable than others."
    },
    {
        "matched": false,
        "definition": "preference",
        "type": "n.",
        "word": "An object of favor or choice."
    },
    {
        "matched": false,
        "definition": "preferential",
        "type": "adj.",
        "word": "Possessing, giving, or constituting preference or priority."
    },
    {
        "matched": false,
        "definition": "preferment",
        "type": "n.",
        "word": "Preference."
    },
    {
        "matched": false,
        "definition": "prefix",
        "type": "v.",
        "word": "To attach at the beginning."
    },
    {
        "matched": false,
        "definition": "prehensible",
        "type": "adj.",
        "word": "Capable of being grasped."
    },
    {
        "matched": false,
        "definition": "prehensile",
        "type": "adj.",
        "word": "Adapted for grasping or holding."
    },
    {
        "matched": false,
        "definition": "prehension",
        "type": "n.",
        "word": "The act of laying hold of or grasping."
    },
    {
        "matched": false,
        "definition": "prejudice",
        "type": "n.",
        "word": "A judgment or opinion formed without due examination of the facts."
    },
    {
        "matched": false,
        "definition": "prelacy",
        "type": "n.",
        "word": "A system of church government."
    },
    {
        "matched": false,
        "definition": "prelate",
        "type": "n.",
        "word": "One of a higher order of clergy having direct authority over other clergy."
    },
    {
        "matched": false,
        "definition": "prelude",
        "type": "n.",
        "word": "An introductory or opening performance."
    },
    {
        "matched": false,
        "definition": "premature",
        "type": "adj.",
        "word": "Coming too soon."
    },
    {
        "matched": false,
        "definition": "premier",
        "type": "adj.",
        "word": "First in rank or position."
    },
    {
        "matched": false,
        "definition": "premise",
        "type": "n.",
        "word": "A judgment as a conclusion."
    },
    {
        "matched": false,
        "definition": "premonition",
        "type": "n.",
        "word": "Foreboding."
    },
    {
        "matched": false,
        "definition": "preoccupation",
        "type": "n.",
        "word": "The state of having the mind, attention, or inclination preoccupied."
    },
    {
        "matched": false,
        "definition": "preoccupy",
        "type": "v.",
        "word": "To fill the mind of a person to the exclusion of other subjects."
    },
    {
        "matched": false,
        "definition": "preordain",
        "type": "v.",
        "word": "To foreordain."
    },
    {
        "matched": false,
        "definition": "preparation",
        "type": "n.",
        "word": "An act or proceeding designed to bring about some event."
    },
    {
        "matched": false,
        "definition": "preparatory",
        "type": "adj.",
        "word": "Having to do with what is preliminary."
    },
    {
        "matched": false,
        "definition": "preponderant",
        "type": "adj.",
        "word": "Prevalent."
    },
    {
        "matched": false,
        "definition": "preponderate",
        "type": "v.",
        "word": "To exceed in influence or power."
    },
    {
        "matched": false,
        "definition": "prepossession",
        "type": "n.",
        "word": "A preconceived liking."
    },
    {
        "matched": false,
        "definition": "preposterous",
        "type": "adj.",
        "word": "Utterly ridiculous or absurd."
    },
    {
        "matched": false,
        "definition": "prerogative",
        "type": "adj.",
        "word": "Having superior rank or precedence."
    },
    {
        "matched": false,
        "definition": "presage",
        "type": "v.",
        "word": "To foretell."
    },
    {
        "matched": false,
        "definition": "prescience",
        "type": "n.",
        "word": "Knowledge of events before they take place."
    },
    {
        "matched": false,
        "definition": "prescient",
        "type": "adj.",
        "word": "Foreknowing."
    },
    {
        "matched": false,
        "definition": "prescript",
        "type": "adj.",
        "word": "Prescribed as a rule or model."
    },
    {
        "matched": false,
        "definition": "prescriptible",
        "type": "adj.",
        "word": "Derived from authoritative direction."
    },
    {
        "matched": false,
        "definition": "prescription",
        "type": "n.",
        "word": "An authoritative direction."
    },
    {
        "matched": false,
        "definition": "presentient",
        "type": "adj.",
        "word": "Perceiving or feeling beforehand."
    },
    {
        "matched": false,
        "definition": "presentiment",
        "type": "n.",
        "word": "Foreboding."
    },
    {
        "matched": false,
        "definition": "presentment",
        "type": "n.",
        "word": "Semblance."
    },
    {
        "matched": false,
        "definition": "preservation",
        "type": "n.",
        "word": "Conservation."
    },
    {
        "matched": false,
        "definition": "presumption",
        "type": "n.",
        "word": "That which may be logically assumed to be true until disproved."
    },
    {
        "matched": false,
        "definition": "presumptuous",
        "type": "adj.",
        "word": "Assuming too much."
    },
    {
        "matched": false,
        "definition": "pretension",
        "type": "n.",
        "word": "A bold or presumptuous assertion."
    },
    {
        "matched": false,
        "definition": "pretentious",
        "type": "adj.",
        "word": "Marked by pretense, conceit, or display."
    },
    {
        "matched": false,
        "definition": "preternatural",
        "type": "adj.",
        "word": "Extraordinary."
    },
    {
        "matched": false,
        "definition": "pretext",
        "type": "n.",
        "word": "A fictitious reason or motive."
    },
    {
        "matched": false,
        "definition": "prevalence",
        "type": "n.",
        "word": "Frequency."
    },
    {
        "matched": false,
        "definition": "prevalent",
        "type": "adj.",
        "word": "Of wide extent or frequent occurrence."
    },
    {
        "matched": false,
        "definition": "prevaricate",
        "type": "v.",
        "word": "To use ambiguous or evasive language for the purpose of deceiving or          "
    },
    {
        "matched": false,
        "definition": "prevention",
        "type": "n.",
        "word": "Thwarting."
    },
    {
        "matched": false,
        "definition": "prickle",
        "type": "v.",
        "word": "To puncture slightly with fine, sharp points."
    },
    {
        "matched": false,
        "definition": "priggish",
        "type": "adj.",
        "word": "Conceited."
    },
    {
        "matched": false,
        "definition": "prim",
        "type": "adj.",
        "word": "Stiffly proper."
    },
    {
        "matched": false,
        "definition": "prima",
        "type": "adj.",
        "word": "First."
    },
    {
        "matched": false,
        "definition": "primer",
        "type": "n.",
        "word": "An elementary reading-book for children."
    },
    {
        "matched": false,
        "definition": "primeval",
        "type": "adj.",
        "word": "Belonging to the first ages."
    },
    {
        "matched": false,
        "definition": "primitive",
        "type": "adj.",
        "word": "Pertaining to the beginning or early times."
    },
    {
        "matched": false,
        "definition": "principal",
        "type": "adj.",
        "word": "Most important."
    },
    {
        "matched": false,
        "definition": "principality",
        "type": "n.",
        "word": "The territory of a reigning prince."
    },
    {
        "matched": false,
        "definition": "principle",
        "type": "n.",
        "word": "A general truth or proposition."
    },
    {
        "matched": false,
        "definition": "priory",
        "type": "n.",
        "word": "A monastic house."
    },
    {
        "matched": false,
        "definition": "pristine",
        "type": "adj.",
        "word": "Primitive."
    },
    {
        "matched": false,
        "definition": "privateer",
        "type": "n.",
        "word": "A vessel owned and officered by private persons, but carrying on maritime          "
    },
    {
        "matched": false,
        "definition": "privilege",
        "type": "n.",
        "word": "A right or immunity not enjoyed by all, or that may be enjoyed only under          "
    },
    {
        "matched": false,
        "definition": "privity",
        "type": "n.",
        "word": "Knowledge shared with another or others regarding a private matter."
    },
    {
        "matched": false,
        "definition": "privy",
        "type": "adj.",
        "word": "Participating with another or others in the knowledge of a secret transaction."
    },
    {
        "matched": false,
        "definition": "probate",
        "type": "adj.",
        "word": "Relating to making proof, as of a will."
    },
    {
        "matched": false,
        "definition": "probation",
        "type": "n.",
        "word": "Any proceeding designed to ascertain or test character, qualification, or the          "
    },
    {
        "matched": false,
        "definition": "probe",
        "type": "v.",
        "word": "To search through and through."
    },
    {
        "matched": false,
        "definition": "probity",
        "type": "n.",
        "word": "Virtue or integrity tested and confirmed."
    },
    {
        "matched": false,
        "definition": "procedure",
        "type": "n.",
        "word": "A manner or method of acting."
    },
    {
        "matched": false,
        "definition": "proceed",
        "type": "v.",
        "word": "To renew motion or action, as after rest or interruption."
    },
    {
        "matched": false,
        "definition": "proclamation",
        "type": "n.",
        "word": "Any announcement made in a public manner."
    },
    {
        "matched": false,
        "definition": "procrastinate",
        "type": "v.",
        "word": "To put off till tomorrow or till a future time."
    },
    {
        "matched": false,
        "definition": "procrastination",
        "type": "n.",
        "word": "Delay."
    },
    {
        "matched": false,
        "definition": "proctor",
        "type": "n.",
        "word": "An agent acting for another."
    },
    {
        "matched": false,
        "definition": "prodigal",
        "type": "n.",
        "word": "One wasteful or extravagant, especially in the use of money or property."
    },
    {
        "matched": false,
        "definition": "prodigious",
        "type": "adj.",
        "word": "Immense."
    },
    {
        "matched": false,
        "definition": "prodigy",
        "type": "n.",
        "word": "A person or thing of very remarkable gifts or qualities."
    },
    {
        "matched": false,
        "definition": "productive",
        "type": "adj.",
        "word": "Yielding in abundance."
    },
    {
        "matched": false,
        "definition": "profession",
        "type": "n.",
        "word": "Any calling or occupation involving special mental or other special          "
    },
    {
        "matched": false,
        "definition": "professor",
        "type": "n.",
        "word": "A public teacher of the highest grade in a university or college."
    },
    {
        "matched": false,
        "definition": "proffer",
        "type": "v.",
        "word": "To offer to another for acceptance."
    },
    {
        "matched": false,
        "definition": "proficiency",
        "type": "n.",
        "word": "An advanced state of acquirement, as in some knowledge, art, or science."
    },
    {
        "matched": false,
        "definition": "proficient",
        "type": "adj.",
        "word": "Possessing ample and ready knowledge or of skill in any art, science, or          "
    },
    {
        "matched": false,
        "definition": "profile",
        "type": "n.",
        "word": "An outline or contour."
    },
    {
        "matched": false,
        "definition": "profiteer",
        "type": "n.",
        "word": "One who profits."
    },
    {
        "matched": false,
        "definition": "profligacy",
        "type": "n.",
        "word": "Shameless viciousness."
    },
    {
        "matched": false,
        "definition": "profligate",
        "type": "adj.",
        "word": "Abandoned to vice."
    },
    {
        "matched": false,
        "definition": "profuse",
        "type": "adj.",
        "word": "Produced or displayed in overabundance."
    },
    {
        "matched": false,
        "definition": "progeny",
        "type": "n.",
        "word": "Offspring."
    },
    {
        "matched": false,
        "definition": "progression",
        "type": "n.",
        "word": "A moving forward or proceeding in course."
    },
    {
        "matched": false,
        "definition": "prohibition",
        "type": "n.",
        "word": "A decree or an order forbidding something."
    },
    {
        "matched": false,
        "definition": "prohibitionist",
        "type": "n.",
        "word": "One who favors the prohibition by law of the manufacture and sale of          "
    },
    {
        "matched": false,
        "definition": "prohibitory",
        "type": "adj.",
        "word": "Involving or equivalent to prohibition, especially of the sale of          "
    },
    {
        "matched": false,
        "definition": "projection",
        "type": "n.",
        "word": "A prominence."
    },
    {
        "matched": false,
        "definition": "proletarian",
        "type": "n.",
        "word": "A person of the lowest or poorest class."
    },
    {
        "matched": false,
        "definition": "prolific",
        "type": "adj.",
        "word": "Producing offspring or fruit."
    },
    {
        "matched": false,
        "definition": "prolix",
        "type": "adj.",
        "word": "Verbose."
    },
    {
        "matched": false,
        "definition": "prologue",
        "type": "n.",
        "word": "A prefatory statement or explanation to a poem, discourse, or performance."
    },
    {
        "matched": false,
        "definition": "prolong",
        "type": "v.",
        "word": "To extend in time or duration."
    },
    {
        "matched": false,
        "definition": "promenade",
        "type": "v.",
        "word": "To walk for amusement or exercise."
    },
    {
        "matched": false,
        "definition": "prominence",
        "type": "n.",
        "word": "The quality of being noticeable or distinguished."
    },
    {
        "matched": false,
        "definition": "prominent",
        "type": "adj.",
        "word": "Conspicuous in position, character, or importance."
    },
    {
        "matched": false,
        "definition": "promiscuous",
        "type": "adj.",
        "word": "Brought together without order, distinction, or design (for sex)."
    },
    {
        "matched": false,
        "definition": "promissory",
        "type": "adj.",
        "word": "Expressing an engagement to pay."
    },
    {
        "matched": false,
        "definition": "promontory",
        "type": "n.",
        "word": "A high point of land extending outward from the coastline into the sea."
    },
    {
        "matched": false,
        "definition": "promoter",
        "type": "n.",
        "word": "A furtherer, forwarder, or encourager."
    },
    {
        "matched": false,
        "definition": "promulgate",
        "type": "v.",
        "word": "To proclaim."
    },
    {
        "matched": false,
        "definition": "propaganda",
        "type": "n.",
        "word": "Any institution or systematic scheme for propagating a doctrine or system."
    },
    {
        "matched": false,
        "definition": "propagate",
        "type": "v.",
        "word": "To spread abroad or from person to person."
    },
    {
        "matched": false,
        "definition": "propel",
        "type": "v.",
        "word": "To drive or urge forward."
    },
    {
        "matched": false,
        "definition": "propellant",
        "type": "adj.",
        "word": "Propelling."
    },
    {
        "matched": false,
        "definition": "propeller",
        "type": "n.",
        "word": "One who or that which propels."
    },
    {
        "matched": false,
        "definition": "prophecy",
        "type": "n.",
        "word": "Any prediction or foretelling."
    },
    {
        "matched": false,
        "definition": "prophesy",
        "type": "v.",
        "word": "To predict or foretell, especially under divine inspiration and guidance."
    },
    {
        "matched": false,
        "definition": "propitious",
        "type": "adj.",
        "word": "Kindly disposed."
    },
    {
        "matched": false,
        "definition": "proportionate",
        "type": "adj.",
        "word": "Being in proportion."
    },
    {
        "matched": false,
        "definition": "propriety",
        "type": "n.",
        "word": "Accordance with recognized usage, custom, or principles."
    },
    {
        "matched": false,
        "definition": "propulsion",
        "type": "n.",
        "word": "A driving onward or forward."
    },
    {
        "matched": false,
        "definition": "prosaic",
        "type": "adj.",
        "word": "Unimaginative."
    },
    {
        "matched": false,
        "definition": "proscenium",
        "type": "n.",
        "word": "That part of the stage between the curtain and the orchestra."
    },
    {
        "matched": false,
        "definition": "proscribe",
        "type": "v.",
        "word": "To reject, as a teaching or a practice, with condemnation or denunciation."
    },
    {
        "matched": false,
        "definition": "proscription",
        "type": "n.",
        "word": "Any act of condemnation and rejection from favor and privilege."
    },
    {
        "matched": false,
        "definition": "proselyte",
        "type": "n.",
        "word": "One who has been won over from one religious belief to another."
    },
    {
        "matched": false,
        "definition": "prosody",
        "type": "n.",
        "word": "The science of poetical forms."
    },
    {
        "matched": false,
        "definition": "prospector",
        "type": "n.",
        "word": "One who makes exploration, search, or examination, especially for minerals."
    },
    {
        "matched": false,
        "definition": "prospectus",
        "type": "n.",
        "word": "A paper or pamphlet containing information of a proposed undertaking."
    },
    {
        "matched": false,
        "definition": "prostrate",
        "type": "adj.",
        "word": "Lying prone, or with the head to the ground."
    },
    {
        "matched": false,
        "definition": "protagonist",
        "type": "n.",
        "word": "A leader in any enterprise or contest."
    },
    {
        "matched": false,
        "definition": "protection",
        "type": "n.",
        "word": "Preservation from harm, danger, annoyance, or any other evil."
    },
    {
        "matched": false,
        "definition": "protective",
        "type": "adj.",
        "word": "Sheltering."
    },
    {
        "matched": false,
        "definition": "protector",
        "type": "n.",
        "word": "A defender."
    },
    {
        "matched": false,
        "definition": "protege",
        "type": "n.",
        "word": "One specially cared for and favored by another usually older person."
    },
    {
        "matched": false,
        "definition": "Protestant",
        "type": "n.",
        "word": "A Christian who denies the authority of the Pope and holds the right of          "
    },
    {
        "matched": false,
        "definition": "protomartyr",
        "type": "n.",
        "word": "The earliest victim in any cause."
    },
    {
        "matched": false,
        "definition": "protocol",
        "type": "n.",
        "word": "A declaration or memorandum of agreement less solemn and formal than a treaty."
    },
    {
        "matched": false,
        "definition": "protoplasm",
        "type": "n.",
        "word": "The substance that forms the principal portion of an animal or vegetable          "
    },
    {
        "matched": false,
        "definition": "prototype",
        "type": "n.",
        "word": "A work, original in character, afterward imitated in form or spirit."
    },
    {
        "matched": false,
        "definition": "protract",
        "type": "v.",
        "word": "To prolong."
    },
    {
        "matched": false,
        "definition": "protrude",
        "type": "v.",
        "word": "To push out or thrust forth."
    },
    {
        "matched": false,
        "definition": "protrusion",
        "type": "n.",
        "word": "The act of protruding."
    },
    {
        "matched": false,
        "definition": "protuberance",
        "type": "n.",
        "word": "Something that swells out from a surrounding surface."
    },
    {
        "matched": false,
        "definition": "protuberant",
        "type": "adj.",
        "word": "Bulging."
    },
    {
        "matched": false,
        "definition": "protuberate",
        "type": "v.",
        "word": "To swell or bulge beyond the surrounding surface."
    },
    {
        "matched": false,
        "definition": "proverb",
        "type": "n.",
        "word": "A brief, pithy saying, condensing in witty or striking form the wisdom of          "
    },
    {
        "matched": false,
        "definition": "provident",
        "type": "adj.",
        "word": "Anticipating and making ready for future wants or emergencies."
    },
    {
        "matched": false,
        "definition": "providential",
        "type": "adj.",
        "word": "Effected by divine guidance."
    },
    {
        "matched": false,
        "definition": "provincial",
        "type": "adj.",
        "word": "Uncultured in thought and manner."
    },
    {
        "matched": false,
        "definition": "proviso",
        "type": "n.",
        "word": "A clause in a contract, will, etc., by which its operation is rendered          "
    },
    {
        "matched": false,
        "definition": "provocation",
        "type": "n.",
        "word": "An action or mode of conduct that excites resentment."
    },
    {
        "matched": false,
        "definition": "prowess",
        "type": "n.",
        "word": "Strength, skill, and intrepidity in battle."
    },
    {
        "matched": false,
        "definition": "proximately",
        "type": "adv.",
        "word": "Immediately."
    },
    {
        "matched": false,
        "definition": "proxy",
        "type": "n.",
        "word": "A person who is empowered by another to represent him or her in a given matter."
    },
    {
        "matched": false,
        "definition": "prudence",
        "type": "n.",
        "word": "Caution."
    },
    {
        "matched": false,
        "definition": "prudential",
        "type": "adj.",
        "word": "Proceeding or marked by caution."
    },
    {
        "matched": false,
        "definition": "prudery",
        "type": "n.",
        "word": "An undue display of modesty or delicacy."
    },
    {
        "matched": false,
        "definition": "prurient",
        "type": "adj.",
        "word": "Inclined to lascivious thoughts and desires."
    },
    {
        "matched": false,
        "definition": "pseudapostle",
        "type": "n.",
        "word": "A pretended or false apostle."
    },
    {
        "matched": false,
        "definition": "pseudonym",
        "type": "n.",
        "word": "A fictitious name, especially when assumed by a writer."
    },
    {
        "matched": false,
        "definition": "pseudonymity",
        "type": "n.",
        "word": "The state or character of using a fictitious name."
    },
    {
        "matched": false,
        "definition": "psychiatry",
        "type": "n.",
        "word": "The branch of medicine that relates to mental disease."
    },
    {
        "matched": false,
        "definition": "psychic",
        "type": "adj.",
        "word": "Pertaining to the mind or soul."
    },
    {
        "matched": false,
        "definition": "psychopathic",
        "type": "adj.",
        "word": "Morally irresponsible."
    },
    {
        "matched": false,
        "definition": "psychotherapy",
        "type": "n.",
        "word": "The treatment of mental disease."
    },
    {
        "matched": false,
        "definition": "pudgy",
        "type": "adj.",
        "word": "Small and fat."
    },
    {
        "matched": false,
        "definition": "puerile",
        "type": "adj.",
        "word": "Childish."
    },
    {
        "matched": false,
        "definition": "pugnacious",
        "type": "adj.",
        "word": "Quarrelsome."
    },
    {
        "matched": false,
        "definition": "puissant",
        "type": "adj.",
        "word": "Possessing strength."
    },
    {
        "matched": false,
        "definition": "pulmonary",
        "type": "adj.",
        "word": "Pertaining to the lungs."
    },
    {
        "matched": false,
        "definition": "punctilious",
        "type": "adj.",
        "word": "Strictly observant of the rules or forms prescribed by law or custom."
    },
    {
        "matched": false,
        "definition": "punctual",
        "type": "adj.",
        "word": "Observant and exact in points of time."
    },
    {
        "matched": false,
        "definition": "pungent",
        "type": "adj.",
        "word": "Affecting the sense of smell."
    },
    {
        "matched": false,
        "definition": "pungency",
        "type": "n.",
        "word": "The quality of affecting the sense of smell."
    },
    {
        "matched": false,
        "definition": "punitive",
        "type": "adj.",
        "word": "Pertaining to punishment."
    },
    {
        "matched": false,
        "definition": "pupilage",
        "type": "n.",
        "word": "The state or period of being a student."
    },
    {
        "matched": false,
        "definition": "purgatory",
        "type": "n.",
        "word": "An intermediate state where souls are made fit for paradise or heaven by          "
    },
    {
        "matched": false,
        "definition": "purl",
        "type": "v.",
        "word": "To cause to whirl, as in an eddy."
    },
    {
        "matched": false,
        "definition": "purloin",
        "type": "v.",
        "word": "To steal."
    },
    {
        "matched": false,
        "definition": "purport",
        "type": "n.",
        "word": "Intent."
    },
    {
        "matched": false,
        "definition": "purveyor",
        "type": "n.",
        "word": "one who supplies"
    },
    {
        "matched": false,
        "definition": "pusillanimous",
        "type": "adj.",
        "word": "Without spirit or bravery."
    },
    {
        "matched": false,
        "definition": "putrescent",
        "type": "adj.",
        "word": "Undergoing decomposition of animal or vegetable matter accompanied by          "
    },
    {
        "matched": false,
        "definition": "pyre",
        "type": "n.",
        "word": "A heap of combustibles arranged for burning a dead body."
    },
    {
        "matched": false,
        "definition": "pyromania",
        "type": "n.",
        "word": "An insane propensity to set things on fire."
    },
    {
        "matched": false,
        "definition": "pyrotechnic",
        "type": "adj.",
        "word": "Pertaining to fireworks or their manufacture."
    },
    {
        "matched": false,
        "definition": "pyx",
        "type": "n.",
        "word": "A vessel or casket, usually of precious metal, in which the host is preserved."
    },
    {
        "matched": false,
        "definition": "quackery",
        "type": "n.",
        "word": "Charlatanry"
    },
    {
        "matched": false,
        "definition": "quadrate",
        "type": "v.",
        "word": "To divide into quarters."
    },
    {
        "matched": false,
        "definition": "quadruple",
        "type": "v.",
        "word": "To multiply by four."
    },
    {
        "matched": false,
        "definition": "qualification",
        "type": "n.",
        "word": "A requisite for an employment, position, right, or privilege."
    },
    {
        "matched": false,
        "definition": "qualify",
        "type": "v.",
        "word": "To endow or furnish with requisite ability, character, knowledge, skill, or          "
    },
    {
        "matched": false,
        "definition": "qualm",
        "type": "n.",
        "word": "A fit of nausea."
    },
    {
        "matched": false,
        "definition": "quandary",
        "type": "n.",
        "word": "A puzzling predicament."
    },
    {
        "matched": false,
        "definition": "quantity",
        "type": "n.",
        "word": "Magnitude."
    },
    {
        "matched": false,
        "definition": "quarantine",
        "type": "n.",
        "word": "The enforced isolation of any person or place infected with contagious          "
    },
    {
        "matched": false,
        "definition": "quarrelsome",
        "type": "adj.",
        "word": "Irascible."
    },
    {
        "matched": false,
        "definition": "quarter",
        "type": "n.",
        "word": "One of four equal parts into which anything is or may be divided."
    },
    {
        "matched": false,
        "definition": "quarterly",
        "type": "adj.",
        "word": "Occurring or made at intervals of three months."
    },
    {
        "matched": false,
        "definition": "quartet",
        "type": "n.",
        "word": "A composition for four voices or four instruments."
    },
    {
        "matched": false,
        "definition": "quarto",
        "type": "n.",
        "word": "An eight-page newspaper of any size."
    },
    {
        "matched": false,
        "definition": "quay",
        "type": "n.",
        "word": "A wharf or artificial landing-place on the shore of a harbor or projecting into          "
    },
    {
        "matched": false,
        "definition": "querulous",
        "type": "adj.",
        "word": "Habitually complaining."
    },
    {
        "matched": false,
        "definition": "query",
        "type": "v.",
        "word": "To make inquiry."
    },
    {
        "matched": false,
        "definition": "queue",
        "type": "n.",
        "word": "A file of persons waiting in order of their arrival, as for admittance."
    },
    {
        "matched": false,
        "definition": "quibble",
        "type": "n.",
        "word": "An utterly trivial distinction or objection."
    },
    {
        "matched": false,
        "definition": "quiescence",
        "type": "n.",
        "word": "Quiet."
    },
    {
        "matched": false,
        "definition": "quiescent",
        "type": "adj.",
        "word": "Being in a state of repose or inaction."
    },
    {
        "matched": false,
        "definition": "quiet",
        "type": "adj.",
        "word": "Making no noise."
    },
    {
        "matched": false,
        "definition": "quietus",
        "type": "n.",
        "word": "A silencing, suppressing, or ending."
    },
    {
        "matched": false,
        "definition": "quintessence",
        "type": "n.",
        "word": "The most essential part of anything."
    },
    {
        "matched": false,
        "definition": "quintet",
        "type": "n.",
        "word": "Musical composition arranged for five voices or instruments."
    },
    {
        "matched": false,
        "definition": "quite",
        "type": "adv.",
        "word": "Fully."
    },
    {
        "matched": false,
        "definition": "Quixotic",
        "type": "adj.",
        "word": "Chivalrous or romantic to a ridiculous or extravagant degree."
    },
    {
        "matched": false,
        "definition": "rabid",
        "type": "adj.",
        "word": "Affected with rabies or hydrophobia."
    },
    {
        "matched": false,
        "definition": "racy",
        "type": "adj.",
        "word": "Exciting or exhilarating to the mind."
    },
    {
        "matched": false,
        "definition": "radiance",
        "type": "n.",
        "word": "Brilliant or sparkling luster."
    },
    {
        "matched": false,
        "definition": "radiate",
        "type": "v.",
        "word": "To extend in all directions, as from a source or focus."
    },
    {
        "matched": false,
        "definition": "radical",
        "type": "n.",
        "word": "One who holds extreme views or advocates extreme measures."
    },
    {
        "matched": false,
        "definition": "radix",
        "type": "n.",
        "word": "That from or on which something is developed."
    },
    {
        "matched": false,
        "definition": "raillery",
        "type": "n.",
        "word": "Good-humored satire."
    },
    {
        "matched": false,
        "definition": "ramify",
        "type": "v.",
        "word": "To divide or subdivide into branches or subdivisions."
    },
    {
        "matched": false,
        "definition": "ramose",
        "type": "adj.",
        "word": "Branch-like."
    },
    {
        "matched": false,
        "definition": "rampant",
        "type": "adj.",
        "word": "Growing, climbing, or running without check or restraint."
    },
    {
        "matched": false,
        "definition": "rampart",
        "type": "n.",
        "word": "A bulwark or construction to oppose assault or hostile entry."
    },
    {
        "matched": false,
        "definition": "rancor",
        "type": "n.",
        "word": "Malice."
    },
    {
        "matched": false,
        "definition": "rankle",
        "type": "v.",
        "word": "To produce irritation or festering."
    },
    {
        "matched": false,
        "definition": "rapacious",
        "type": "adj.",
        "word": "Disposed to seize by violence or by unlawful or greedy methods."
    },
    {
        "matched": false,
        "definition": "rapid",
        "type": "adj.",
        "word": "Having great speed."
    },
    {
        "matched": false,
        "definition": "rapine",
        "type": "n.",
        "word": "The act of seizing and carrying off property by superior force, as in war."
    },
    {
        "matched": false,
        "definition": "rapt",
        "type": "adj.",
        "word": "Enraptured."
    },
    {
        "matched": false,
        "definition": "raptorial",
        "type": "adj.",
        "word": "Seizing and devouring living prey."
    },
    {
        "matched": false,
        "definition": "ration",
        "type": "v.",
        "word": "To provide with a fixed allowance or portion, especially of food."
    },
    {
        "matched": false,
        "definition": "rationalism",
        "type": "n.",
        "word": "The formation of opinions by relying upon reason alone, independently of          "
    },
    {
        "matched": false,
        "definition": "raucous",
        "type": "adj.",
        "word": "Harsh."
    },
    {
        "matched": false,
        "definition": "ravage",
        "type": "v.",
        "word": "To lay waste by pillage, rapine, devouring, or other destructive methods."
    },
    {
        "matched": false,
        "definition": "ravenous",
        "type": "adj.",
        "word": "Furiously voracious or hungry."
    },
    {
        "matched": false,
        "definition": "ravine",
        "type": "n.",
        "word": "A deep gorge or hollow, especially one worn by a stream or flow of water."
    },
    {
        "matched": false,
        "definition": "reaction",
        "type": "n.",
        "word": "Tendency towards a former, or opposite state of things, as after reform,          "
    },
    {
        "matched": false,
        "definition": "reactionary",
        "type": "adj.",
        "word": "Pertaining to, of the nature of, causing, or favoring reaction."
    },
    {
        "matched": false,
        "definition": "readily",
        "type": "adv.",
        "word": "Without objection or reluctance."
    },
    {
        "matched": false,
        "definition": "readjust",
        "type": "v.",
        "word": "To put in order after disarrangement."
    },
    {
        "matched": false,
        "definition": "ready",
        "type": "adj.",
        "word": "In a state of preparedness for any given purpose or occasion."
    },
    {
        "matched": false,
        "definition": "realism",
        "type": "n.",
        "word": "The principle and practice of depicting persons and scenes as they are believed          "
    },
    {
        "matched": false,
        "definition": "rearrange",
        "type": "v.",
        "word": "To arrange again or in a different order."
    },
    {
        "matched": false,
        "definition": "reassure",
        "type": "v.",
        "word": "To give new confidence."
    },
    {
        "matched": false,
        "definition": "rebellious",
        "type": "adj.",
        "word": "Insubordinate."
    },
    {
        "matched": false,
        "definition": "rebuff",
        "type": "n.",
        "word": "A peremptory or unexpected rejection of advances or approaches."
    },
    {
        "matched": false,
        "definition": "rebuild",
        "type": "v.",
        "word": "To build again or anew."
    },
    {
        "matched": false,
        "definition": "rebut",
        "type": "v.",
        "word": "To oppose by argument or a sufficient answer."
    },
    {
        "matched": false,
        "definition": "recant",
        "type": "v.",
        "word": "To withdraw formally one's belief (in something previously believed or          "
    },
    {
        "matched": false,
        "definition": "recapitulate",
        "type": "v.",
        "word": "To repeat again the principal points of."
    },
    {
        "matched": false,
        "definition": "recapture",
        "type": "v.",
        "word": "To capture again."
    },
    {
        "matched": false,
        "definition": "recede",
        "type": "v.",
        "word": "To move back or away."
    },
    {
        "matched": false,
        "definition": "receivable",
        "type": "adj.",
        "word": "Capable of being or fit to be received - often money."
    },
    {
        "matched": false,
        "definition": "receptive",
        "type": "adj.",
        "word": "Having the capacity, quality, or ability of receiving, as truths or          "
    },
    {
        "matched": false,
        "definition": "recessive",
        "type": "adj.",
        "word": "Having a tendency to go back."
    },
    {
        "matched": false,
        "definition": "recidivist",
        "type": "n.",
        "word": "A confirmed criminal."
    },
    {
        "matched": false,
        "definition": "reciprocal",
        "type": "adj.",
        "word": "Mutually interchangeable or convertible."
    },
    {
        "matched": false,
        "definition": "reciprocate",
        "type": "v.",
        "word": "To give and take mutually."
    },
    {
        "matched": false,
        "definition": "reciprocity",
        "type": "n.",
        "word": "Equal mutual rights and benefits granted and enjoyed."
    },
    {
        "matched": false,
        "definition": "recitation",
        "type": "n.",
        "word": "The act of reciting or repeating, especially in public and from memory."
    },
    {
        "matched": false,
        "definition": "reck",
        "type": "v.",
        "word": "To have a care or thought for."
    },
    {
        "matched": false,
        "definition": "reckless",
        "type": "adj.",
        "word": "Foolishly headless of danger."
    },
    {
        "matched": false,
        "definition": "reclaim",
        "type": "v.",
        "word": "To demand or to obtain the return or restoration of."
    },
    {
        "matched": false,
        "definition": "recline",
        "type": "v.",
        "word": "To cause to assume a leaning or recumbent attitude or position."
    },
    {
        "matched": false,
        "definition": "recluse",
        "type": "n.",
        "word": "One who lives in retirement or seclusion."
    },
    {
        "matched": false,
        "definition": "reclusory",
        "type": "n.",
        "word": "A hermitage."
    },
    {
        "matched": false,
        "definition": "recognizance",
        "type": "n.",
        "word": "An acknowledgment entered into before a court with condition to do some          "
    },
    {
        "matched": false,
        "definition": "recognize",
        "type": "v.",
        "word": "To recall the identity of (a person or thing)."
    },
    {
        "matched": false,
        "definition": "recoil",
        "type": "v.",
        "word": "To start back as in dismay, loathing, or dread."
    },
    {
        "matched": false,
        "definition": "recollect",
        "type": "v.",
        "word": "To recall the knowledge of."
    },
    {
        "matched": false,
        "definition": "reconcilable",
        "type": "adj.",
        "word": "Capable of being adjusted or harmonized."
    },
    {
        "matched": false,
        "definition": "reconnoiter",
        "type": "v.",
        "word": "To make a preliminary examination of for military, surveying, or geological          "
    },
    {
        "matched": false,
        "definition": "reconsider",
        "type": "v.",
        "word": "To review with care, especially with a view to a reversal of previous          "
    },
    {
        "matched": false,
        "definition": "reconstruct",
        "type": "v.",
        "word": "To rebuild."
    },
    {
        "matched": false,
        "definition": "recourse",
        "type": "n.",
        "word": "Resort to or application for help in exigency or trouble."
    },
    {
        "matched": false,
        "definition": "recover",
        "type": "v.",
        "word": "To regain."
    },
    {
        "matched": false,
        "definition": "recreant",
        "type": "n.",
        "word": "A cowardly or faithless person."
    },
    {
        "matched": false,
        "definition": "recreate",
        "type": "v.",
        "word": "To refresh after labor."
    },
    {
        "matched": false,
        "definition": "recrudescence",
        "type": "n.",
        "word": "The state of becoming raw or sore again."
    },
    {
        "matched": false,
        "definition": "recrudescent",
        "type": "adj.",
        "word": "Becoming raw or sore again."
    },
    {
        "matched": false,
        "definition": "recruit",
        "type": "v.",
        "word": "To enlist men for military or naval service."
    },
    {
        "matched": false,
        "definition": "rectify",
        "type": "v.",
        "word": "To correct."
    },
    {
        "matched": false,
        "definition": "rectitude",
        "type": "n.",
        "word": "The quality of being upright in principles and conduct."
    },
    {
        "matched": false,
        "definition": "recuperate",
        "type": "v.",
        "word": "To recover."
    },
    {
        "matched": false,
        "definition": "recur",
        "type": "v.",
        "word": "To happen again or repeatedly, especially at regular intervals."
    },
    {
        "matched": false,
        "definition": "recure",
        "type": "v.",
        "word": "To cure again."
    },
    {
        "matched": false,
        "definition": "recurrent",
        "type": "adj.",
        "word": "Returning from time to time, especially at regular or stated intervals."
    },
    {
        "matched": false,
        "definition": "redemption",
        "type": "n.",
        "word": "The recovery of what is mortgaged or pledged, by paying the debt."
    },
    {
        "matched": false,
        "definition": "redolent",
        "type": "adj.",
        "word": "Smelling sweet and agreeable."
    },
    {
        "matched": false,
        "definition": "redolence",
        "type": "n.",
        "word": "Smelling sweet and agreeable."
    },
    {
        "matched": false,
        "definition": "redoubtable",
        "type": "adj.",
        "word": "Formidable."
    },
    {
        "matched": false,
        "definition": "redound",
        "type": "n.",
        "word": "Rebound."
    },
    {
        "matched": false,
        "definition": "redress",
        "type": "v.",
        "word": "To set right, as a wrong by compensation or the punishment of the wrong-doer."
    },
    {
        "matched": false,
        "definition": "reducible",
        "type": "adj.",
        "word": "That may be reduced."
    },
    {
        "matched": false,
        "definition": "redundance",
        "type": "n.",
        "word": "Excess."
    },
    {
        "matched": false,
        "definition": "redundant",
        "type": "adj.",
        "word": "Constituting an excess."
    },
    {
        "matched": false,
        "definition": "reestablish",
        "type": "v.",
        "word": "To restore."
    },
    {
        "matched": false,
        "definition": "refer",
        "type": "v.",
        "word": "To direct or send for information or other purpose."
    },
    {
        "matched": false,
        "definition": "referrer",
        "type": "n.",
        "word": "One who refers."
    },
    {
        "matched": false,
        "definition": "referable",
        "type": "adj.",
        "word": "Ascribable."
    },
    {
        "matched": false,
        "definition": "referee",
        "type": "n.",
        "word": "An umpire."
    },
    {
        "matched": false,
        "definition": "refinery",
        "type": "n.",
        "word": "A place where some crude material, as sugar or petroleum, is purified."
    },
    {
        "matched": false,
        "definition": "reflectible",
        "type": "adj.",
        "word": "Capable of being turned back."
    },
    {
        "matched": false,
        "definition": "reflection",
        "type": "n.",
        "word": "The throwing off or back of light, heat, sound, or any form of energy that          "
    },
    {
        "matched": false,
        "definition": "reflector",
        "type": "n.",
        "word": "A mirror, as of metal, for reflecting light, heat, or sound in a particular          "
    },
    {
        "matched": false,
        "definition": "reflexible",
        "type": "adj.",
        "word": "Capable of being reflected."
    },
    {
        "matched": false,
        "definition": "reform",
        "type": "n.",
        "word": "Change for the better."
    },
    {
        "matched": false,
        "definition": "reformer",
        "type": "n.",
        "word": "One who carries out a reform."
    },
    {
        "matched": false,
        "definition": "refract",
        "type": "v.",
        "word": "To bend or turn from a direct course."
    },
    {
        "matched": false,
        "definition": "refractory",
        "type": "adj.",
        "word": "Not amenable to control."
    },
    {
        "matched": false,
        "definition": "refragable",
        "type": "adj.",
        "word": "Capable of being refuted."
    },
    {
        "matched": false,
        "definition": "refringency",
        "type": "n.",
        "word": "Power to refract."
    },
    {
        "matched": false,
        "definition": "refringent",
        "type": "adj.",
        "word": "Having the power to refract."
    },
    {
        "matched": false,
        "definition": "refusal",
        "type": "n.",
        "word": "Denial of what is asked."
    },
    {
        "matched": false,
        "definition": "refute",
        "type": "v.",
        "word": "To prove to be wrong."
    },
    {
        "matched": false,
        "definition": "regale",
        "type": "v.",
        "word": "To give unusual pleasure."
    },
    {
        "matched": false,
        "definition": "regalia",
        "type": "n.",
        "word": "pl. The emblems of royalty."
    },
    {
        "matched": false,
        "definition": "regality",
        "type": "n.",
        "word": "Royalty."
    },
    {
        "matched": false,
        "definition": "regenerate",
        "type": "v.",
        "word": "To reproduce."
    },
    {
        "matched": false,
        "definition": "regent",
        "type": "n.",
        "word": "One who is lawfully deputized to administer the government for the time being in          "
    },
    {
        "matched": false,
        "definition": "regicide",
        "type": "n.",
        "word": "The killing of a king or sovereign."
    },
    {
        "matched": false,
        "definition": "regime",
        "type": "n.",
        "word": "Particular conduct or administration of affairs."
    },
    {
        "matched": false,
        "definition": "regimen",
        "type": "n.",
        "word": "A systematized order or course of living with reference to food, clothing and          "
    },
    {
        "matched": false,
        "definition": "regiment",
        "type": "n.",
        "word": "A body of soldiers."
    },
    {
        "matched": false,
        "definition": "regnant",
        "type": "adj.",
        "word": "Exercising royal authority in one's own right."
    },
    {
        "matched": false,
        "definition": "regress",
        "type": "v.",
        "word": "To return to a former place or condition."
    },
    {
        "matched": false,
        "definition": "regretful",
        "type": "adj.",
        "word": "Feeling, expressive of, or full of regret."
    },
    {
        "matched": false,
        "definition": "rehabilitate",
        "type": "v.",
        "word": "To restore to a former status, capacity, right rank, or privilege."
    },
    {
        "matched": false,
        "definition": "reign",
        "type": "v.",
        "word": "To hold and exercise sovereign power."
    },
    {
        "matched": false,
        "definition": "reimburse",
        "type": "v.",
        "word": "To pay back as an equivalent of what has been expended."
    },
    {
        "matched": false,
        "definition": "rein",
        "type": "n.",
        "word": "A step attached to the bit for controlling a horse or other draft-animal."
    },
    {
        "matched": false,
        "definition": "reinstate",
        "type": "v.",
        "word": "To restore to a former state, station, or authority."
    },
    {
        "matched": false,
        "definition": "reiterate",
        "type": "v.",
        "word": "To say or do again and again."
    },
    {
        "matched": false,
        "definition": "rejoin",
        "type": "v.",
        "word": "To reunite after separation."
    },
    {
        "matched": false,
        "definition": "rejuvenate",
        "type": "v.",
        "word": "To restore to youth."
    },
    {
        "matched": false,
        "definition": "rejuvenescence",
        "type": "n.",
        "word": "A renewal of youth."
    },
    {
        "matched": false,
        "definition": "relapse",
        "type": "v.",
        "word": "To suffer a return of a disease after partial recovery."
    },
    {
        "matched": false,
        "definition": "relegate",
        "type": "v.",
        "word": "To send off or consign, as to an obscure position or remote destination."
    },
    {
        "matched": false,
        "definition": "relent",
        "type": "v.",
        "word": "To yield."
    },
    {
        "matched": false,
        "definition": "relevant",
        "type": "adj.",
        "word": "Bearing upon the matter in hand."
    },
    {
        "matched": false,
        "definition": "reliance",
        "type": "n.",
        "word": "Dependence."
    },
    {
        "matched": false,
        "definition": "reliant",
        "type": "adj.",
        "word": "Having confidence."
    },
    {
        "matched": false,
        "definition": "relinquish",
        "type": "v.",
        "word": "To give up using or having."
    },
    {
        "matched": false,
        "definition": "reliquary",
        "type": "n.",
        "word": "A casket, coffer, or repository in which relics are kept."
    },
    {
        "matched": false,
        "definition": "relish",
        "type": "v.",
        "word": "To like the taste or savor of."
    },
    {
        "matched": false,
        "definition": "reluctance",
        "type": "n.",
        "word": "Unwillingness."
    },
    {
        "matched": false,
        "definition": "reluctant",
        "type": "adj.",
        "word": "Unwilling."
    },
    {
        "matched": false,
        "definition": "remembrance",
        "type": "n.",
        "word": "Recollection."
    },
    {
        "matched": false,
        "definition": "reminiscence",
        "type": "n.",
        "word": "The calling to mind of incidents within the range of personal knowledge or          "
    },
    {
        "matched": false,
        "definition": "reminiscent",
        "type": "adj.",
        "word": "Pertaining to the recollection of matters of personal interest."
    },
    {
        "matched": false,
        "definition": "remiss",
        "type": "adj.",
        "word": "Negligent."
    },
    {
        "matched": false,
        "definition": "remission",
        "type": "n.",
        "word": "Temporary diminution of a disease."
    },
    {
        "matched": false,
        "definition": "remodel",
        "type": "v.",
        "word": "Reconstruct."
    },
    {
        "matched": false,
        "definition": "remonstrance",
        "type": "n.",
        "word": "Reproof."
    },
    {
        "matched": false,
        "definition": "remonstrant",
        "type": "adj.",
        "word": "Having the character of a reproof."
    },
    {
        "matched": false,
        "definition": "remonstrate",
        "type": "v.",
        "word": "To present a verbal or written protest to those who have power to right or          "
    },
    {
        "matched": false,
        "definition": "remunerate",
        "type": "v.",
        "word": "To pay or pay for."
    },
    {
        "matched": false,
        "definition": "remuneration",
        "type": "n.",
        "word": "Compensation."
    },
    {
        "matched": false,
        "definition": "Renaissance",
        "type": "n.",
        "word": "The revival of letters, and then of art, which marks the transition from          "
    },
    {
        "matched": false,
        "definition": "rendezvous",
        "type": "n.",
        "word": "A prearranged place of meeting."
    },
    {
        "matched": false,
        "definition": "rendition",
        "type": "n.",
        "word": "Interpretation."
    },
    {
        "matched": false,
        "definition": "renovate",
        "type": "v.",
        "word": "To restore after deterioration, as a building."
    },
    {
        "matched": false,
        "definition": "renunciation",
        "type": "n.",
        "word": "An explicit disclaimer of a right or privilege."
    },
    {
        "matched": false,
        "definition": "reorganize",
        "type": "v.",
        "word": "To change to a more satisfactory form of organization."
    },
    {
        "matched": false,
        "definition": "reparable",
        "type": "adj.",
        "word": "Capable of repair."
    },
    {
        "matched": false,
        "definition": "reparation",
        "type": "n.",
        "word": "The act of making amends, as for an injury, loss, or wrong."
    },
    {
        "matched": false,
        "definition": "repartee",
        "type": "n.",
        "word": "A ready, witty, or apt reply."
    },
    {
        "matched": false,
        "definition": "repeal",
        "type": "v.",
        "word": "To render of no further effect."
    },
    {
        "matched": false,
        "definition": "repel",
        "type": "v.",
        "word": "To force or keep back in a manner, physically or mentally."
    },
    {
        "matched": false,
        "definition": "repellent",
        "type": "adj.",
        "word": "Having power to force back in a manner, physically or mentally."
    },
    {
        "matched": false,
        "definition": "repentance",
        "type": "n.",
        "word": "Sorrow for something done or left undone, with desire to make things right          "
    },
    {
        "matched": false,
        "definition": "repertory",
        "type": "n.",
        "word": "A place where things are stored or gathered together."
    },
    {
        "matched": false,
        "definition": "repetition",
        "type": "n.",
        "word": "The act of repeating."
    },
    {
        "matched": false,
        "definition": "repine",
        "type": "v.",
        "word": "To indulge in fretfulness and faultfinding."
    },
    {
        "matched": false,
        "definition": "replenish",
        "type": "v.",
        "word": "To fill again, as something that has been emptied."
    },
    {
        "matched": false,
        "definition": "replete",
        "type": "adj.",
        "word": "Full to the uttermost."
    },
    {
        "matched": false,
        "definition": "replica",
        "type": "n.",
        "word": "A duplicate executed by the artist himself, and regarded, equally with the          "
    },
    {
        "matched": false,
        "definition": "repository",
        "type": "n.",
        "word": "A place in which goods are stored."
    },
    {
        "matched": false,
        "definition": "reprehend",
        "type": "v.",
        "word": "To find fault with."
    },
    {
        "matched": false,
        "definition": "reprehensible",
        "type": "adj.",
        "word": "Censurable."
    },
    {
        "matched": false,
        "definition": "reprehension",
        "type": "n.",
        "word": "Expression of blame."
    },
    {
        "matched": false,
        "definition": "repress",
        "type": "v.",
        "word": "To keep under restraint or control."
    },
    {
        "matched": false,
        "definition": "repressible",
        "type": "adj.",
        "word": "Able to be kept under restraint or control."
    },
    {
        "matched": false,
        "definition": "reprieve",
        "type": "v.",
        "word": "To grant a respite from punishment to."
    },
    {
        "matched": false,
        "definition": "reprimand",
        "type": "v.",
        "word": "To chide or rebuke for a fault."
    },
    {
        "matched": false,
        "definition": "reprisal",
        "type": "n.",
        "word": "Any infliction or act by way of retaliation on an enemy."
    },
    {
        "matched": false,
        "definition": "reprobate",
        "type": "n.",
        "word": "One abandoned to depravity and sin."
    },
    {
        "matched": false,
        "definition": "reproduce",
        "type": "v.",
        "word": "To make a copy of."
    },
    {
        "matched": false,
        "definition": "reproduction",
        "type": "n.",
        "word": "The process by which an animal or plant gives rise to another of its kind."
    },
    {
        "matched": false,
        "definition": "reproof",
        "type": "n.",
        "word": "An expression of disapproval or blame personally addressed to one censured."
    },
    {
        "matched": false,
        "definition": "repudiate",
        "type": "v.",
        "word": "To refuse to have anything to do with."
    },
    {
        "matched": false,
        "definition": "repugnance",
        "type": "n.",
        "word": "Thorough dislike."
    },
    {
        "matched": false,
        "definition": "repugnant",
        "type": "adj.",
        "word": "Offensive to taste and feeling."
    },
    {
        "matched": false,
        "definition": "repulse",
        "type": "n.",
        "word": "The act of beating or driving back, as an attacking or advancing enemy."
    },
    {
        "matched": false,
        "definition": "repulsive",
        "type": "adj.",
        "word": "Grossly offensive."
    },
    {
        "matched": false,
        "definition": "repute",
        "type": "v.",
        "word": "To hold in general opinion."
    },
    {
        "matched": false,
        "definition": "requiem",
        "type": "n.",
        "word": "A solemn mass sung for the repose of the souls of the dead."
    },
    {
        "matched": false,
        "definition": "requisite",
        "type": "adj.",
        "word": "Necessary."
    },
    {
        "matched": false,
        "definition": "requital",
        "type": "n.",
        "word": "Adequate return for good or ill."
    },
    {
        "matched": false,
        "definition": "requite",
        "type": "v.",
        "word": "To repay either good or evil to, as to a person."
    },
    {
        "matched": false,
        "definition": "rescind",
        "type": "v.",
        "word": "To make void, as an act, by the enacting authority or a superior authority."
    },
    {
        "matched": false,
        "definition": "reseat",
        "type": "v.",
        "word": "To place in position of office again."
    },
    {
        "matched": false,
        "definition": "resemblance",
        "type": "n.",
        "word": "Similarity in quality or form."
    },
    {
        "matched": false,
        "definition": "resent",
        "type": "v.",
        "word": "To be indignant at, as an injury or insult."
    },
    {
        "matched": false,
        "definition": "reservoir",
        "type": "n.",
        "word": "A receptacle where a quantity of some material, especially of a liquid or          "
    },
    {
        "matched": false,
        "definition": "residue",
        "type": "n.",
        "word": "A remainder or surplus after a part has been separated or otherwise treated."
    },
    {
        "matched": false,
        "definition": "resilience",
        "type": "n.",
        "word": "The power of springing back to a former position"
    },
    {
        "matched": false,
        "definition": "resilient",
        "type": "adj.",
        "word": "Having the quality of springing back to a former position."
    },
    {
        "matched": false,
        "definition": "resistance",
        "type": "n.",
        "word": "The exertion of opposite effort or effect."
    },
    {
        "matched": false,
        "definition": "resistant",
        "type": "adj.",
        "word": "Offering or tending to produce resistance."
    },
    {
        "matched": false,
        "definition": "resistive",
        "type": "adj.",
        "word": "Having or exercising the power of resistance."
    },
    {
        "matched": false,
        "definition": "resistless",
        "type": "adj.",
        "word": "Powerless."
    },
    {
        "matched": false,
        "definition": "resonance",
        "type": "n.",
        "word": "The quality of being able to reinforce sound by sympathetic vibrations."
    },
    {
        "matched": false,
        "definition": "resonance",
        "type": "adj.",
        "word": "Able to reinforce sound by sympathetic vibrations."
    },
    {
        "matched": false,
        "definition": "resonate",
        "type": "v.",
        "word": "To have or produce resonance."
    },
    {
        "matched": false,
        "definition": "resource",
        "type": "n.",
        "word": "That which is restored to, relied upon, or made available for aid or support."
    },
    {
        "matched": false,
        "definition": "respite",
        "type": "n.",
        "word": "Interval of rest."
    },
    {
        "matched": false,
        "definition": "resplendent",
        "type": "adj.",
        "word": "Very bright."
    },
    {
        "matched": false,
        "definition": "respondent",
        "type": "adj.",
        "word": "Answering."
    },
    {
        "matched": false,
        "definition": "restitution",
        "type": "n.",
        "word": "Restoration of anything to the one to whom it properly belongs."
    },
    {
        "matched": false,
        "definition": "resumption",
        "type": "n.",
        "word": "The act of taking back, or taking again."
    },
    {
        "matched": false,
        "definition": "resurgent",
        "type": "adj.",
        "word": "Surging back or again."
    },
    {
        "matched": false,
        "definition": "resurrection",
        "type": "n.",
        "word": "A return from death to life"
    },
    {
        "matched": false,
        "definition": "resuscitate",
        "type": "v.",
        "word": "To restore from apparent death."
    },
    {
        "matched": false,
        "definition": "retaliate",
        "type": "v.",
        "word": "To repay evil with a similar evil."
    },
    {
        "matched": false,
        "definition": "retch",
        "type": "v.",
        "word": "To make an effort to vomit."
    },
    {
        "matched": false,
        "definition": "retention",
        "type": "n.",
        "word": "The keeping of a thing within one's power or possession."
    },
    {
        "matched": false,
        "definition": "reticence",
        "type": "n.",
        "word": "The quality of habitually keeping silent or being reserved in utterance."
    },
    {
        "matched": false,
        "definition": "reticent",
        "type": "adj.",
        "word": "Habitually keeping silent or being reserved in utterance."
    },
    {
        "matched": false,
        "definition": "retinue",
        "type": "n.",
        "word": "The body of persons who attend a person of importance in travel or public          "
    },
    {
        "matched": false,
        "definition": "retort",
        "type": "n.",
        "word": "A retaliatory speech."
    },
    {
        "matched": false,
        "definition": "retouch",
        "type": "v.",
        "word": "To modify the details of."
    },
    {
        "matched": false,
        "definition": "retrace",
        "type": "v.",
        "word": "To follow backward or toward the place of beginning, as a track or marking."
    },
    {
        "matched": false,
        "definition": "retract",
        "type": "v.",
        "word": "To recall or take back (something that one has said)."
    },
    {
        "matched": false,
        "definition": "retrench",
        "type": "v.",
        "word": "To cut down or reduce in extent or quantity."
    },
    {
        "matched": false,
        "definition": "retrieve",
        "type": "v.",
        "word": "To recover something by searching."
    },
    {
        "matched": false,
        "definition": "retroactive",
        "type": "adj.",
        "word": "Operative on, affecting, or having reference to past events,          "
    },
    {
        "matched": false,
        "definition": "retrograde",
        "type": "v.",
        "word": "To cause to deteriorate or to move backward."
    },
    {
        "matched": false,
        "definition": "retrogression",
        "type": "n.",
        "word": "A going or moving backward or in a reverse direction."
    },
    {
        "matched": false,
        "definition": "retrospect",
        "type": "n.",
        "word": "A view or contemplation of something past."
    },
    {
        "matched": false,
        "definition": "retrospective",
        "type": "adj.",
        "word": "Looking back on the past."
    },
    {
        "matched": false,
        "definition": "reunite",
        "type": "v.",
        "word": "To unite or join again, as after separation."
    },
    {
        "matched": false,
        "definition": "revelation",
        "type": "n.",
        "word": "A disclosing, discovering, or making known of what was before secret,          "
    },
    {
        "matched": false,
        "definition": "revere",
        "type": "v.",
        "word": "To regard with worshipful veneration."
    },
    {
        "matched": false,
        "definition": "reverent",
        "type": "adj.",
        "word": "Humble."
    },
    {
        "matched": false,
        "definition": "reversion",
        "type": "n.",
        "word": "A return to or toward some former state or condition."
    },
    {
        "matched": false,
        "definition": "revert",
        "type": "v.",
        "word": "To return, or turn or look back, as toward a former position or the like."
    },
    {
        "matched": false,
        "definition": "revile",
        "type": "v.",
        "word": "To heap approach or abuse upon."
    },
    {
        "matched": false,
        "definition": "revisal",
        "type": "n.",
        "word": "Revision."
    },
    {
        "matched": false,
        "definition": "revise",
        "type": "v.",
        "word": "To examine for the correction of errors, or for the purpose of making changes."
    },
    {
        "matched": false,
        "definition": "revocation",
        "type": "n.",
        "word": "Repeal."
    },
    {
        "matched": false,
        "definition": "revoke",
        "type": "v.",
        "word": "To rescind."
    },
    {
        "matched": false,
        "definition": "rhapsody",
        "type": "n.",
        "word": "Rapt or rapturous utterance."
    },
    {
        "matched": false,
        "definition": "rhetoric",
        "type": "n.",
        "word": "The art of discourse."
    },
    {
        "matched": false,
        "definition": "rhetorician",
        "type": "n.",
        "word": "A showy writer or speaker."
    },
    {
        "matched": false,
        "definition": "ribald",
        "type": "adj.",
        "word": "Indulging in or manifesting coarse indecency or obscenity."
    },
    {
        "matched": false,
        "definition": "riddance",
        "type": "n.",
        "word": "The act or ridding or delivering from something undesirable."
    },
    {
        "matched": false,
        "definition": "ridicule",
        "type": "n.",
        "word": "Looks or acts expressing amused contempt."
    },
    {
        "matched": false,
        "definition": "ridiculous",
        "type": "adj.",
        "word": "Laughable and contemptible."
    },
    {
        "matched": false,
        "definition": "rife",
        "type": "adj.",
        "word": "Abundant."
    },
    {
        "matched": false,
        "definition": "righteousness",
        "type": "n.",
        "word": "Rectitude."
    },
    {
        "matched": false,
        "definition": "rightful",
        "type": "adj.",
        "word": "Conformed to a just claim according to established laws or usage."
    },
    {
        "matched": false,
        "definition": "rigmarole",
        "type": "n.",
        "word": "Nonsense."
    },
    {
        "matched": false,
        "definition": "rigor",
        "type": "n.",
        "word": "Inflexibility."
    },
    {
        "matched": false,
        "definition": "rigorous",
        "type": "adj.",
        "word": "Uncompromising."
    },
    {
        "matched": false,
        "definition": "ripplet",
        "type": "n.",
        "word": "A small ripple, as of water."
    },
    {
        "matched": false,
        "definition": "risible",
        "type": "adj.",
        "word": "capable of exciting laughter."
    },
    {
        "matched": false,
        "definition": "rivulet",
        "type": "n.",
        "word": "A small stream or brook."
    },
    {
        "matched": false,
        "definition": "robust",
        "type": "adj.",
        "word": "Characterized by great strength or power of endurance."
    },
    {
        "matched": false,
        "definition": "rondo",
        "type": "n.",
        "word": "A musical composition during which the first part or subject is repeated several          "
    },
    {
        "matched": false,
        "definition": "rookery",
        "type": "n.",
        "word": "A place where crows congregate to breed."
    },
    {
        "matched": false,
        "definition": "rotary",
        "type": "adj.",
        "word": "Turning around its axis, like a wheel, or so constructed as to turn thus."
    },
    {
        "matched": false,
        "definition": "rotate",
        "type": "v.",
        "word": "To cause to turn on or as on its axis, as a wheel."
    },
    {
        "matched": false,
        "definition": "rote",
        "type": "n.",
        "word": "Repetition of words or sounds as a means of learning them, with slight attention."
    },
    {
        "matched": false,
        "definition": "rotund",
        "type": "adj.",
        "word": "Round from fullness or plumpness."
    },
    {
        "matched": false,
        "definition": "rudimentary",
        "type": "adj.",
        "word": "Being in an initial, early, or incomplete stage of development."
    },
    {
        "matched": false,
        "definition": "rue",
        "type": "v.",
        "word": "To regret extremely."
    },
    {
        "matched": false,
        "definition": "ruffian",
        "type": "adj.",
        "word": "A lawless or recklessly brutal fellow."
    },
    {
        "matched": false,
        "definition": "ruminant",
        "type": "adj.",
        "word": "Chewing the cud."
    },
    {
        "matched": false,
        "definition": "ruminate",
        "type": "v.",
        "word": "To chew over again, as food previously swallowed and regurgitated."
    },
    {
        "matched": false,
        "definition": "rupture",
        "type": "v.",
        "word": "To separate the parts of by violence."
    },
    {
        "matched": false,
        "definition": "rustic",
        "type": "adj.",
        "word": "Characteristic of dwelling in the country."
    },
    {
        "matched": false,
        "definition": "ruth",
        "type": "n.",
        "word": "Sorrow for another's misery."
    },
    {
        "matched": false,
        "definition": "sacrifice",
        "type": "v.",
        "word": "To make an offering of to deity, especially by presenting on an altar."
    },
    {
        "matched": false,
        "definition": "sacrificial",
        "type": "adj.",
        "word": "Offering or offered as an atonement for sin."
    },
    {
        "matched": false,
        "definition": "sacrilege",
        "type": "n.",
        "word": "The act of violating or profaning anything sacred."
    },
    {
        "matched": false,
        "definition": "sacrilegious",
        "type": "adj.",
        "word": "Impious."
    },
    {
        "matched": false,
        "definition": "safeguard",
        "type": "v.",
        "word": "To protect."
    },
    {
        "matched": false,
        "definition": "sagacious",
        "type": "adj.",
        "word": "Able to discern and distinguish with wise perception."
    },
    {
        "matched": false,
        "definition": "salacious",
        "type": "adj.",
        "word": "Having strong sexual desires."
    },
    {
        "matched": false,
        "definition": "salience",
        "type": "n.",
        "word": "The condition of standing out distinctly."
    },
    {
        "matched": false,
        "definition": "salient",
        "type": "adj.",
        "word": "Standing out prominently."
    },
    {
        "matched": false,
        "definition": "saline",
        "type": "adj.",
        "word": "Constituting or consisting of salt."
    },
    {
        "matched": false,
        "definition": "salutary",
        "type": "adj.",
        "word": "Beneficial."
    },
    {
        "matched": false,
        "definition": "salutation",
        "type": "n.",
        "word": "Any form of greeting, hailing, or welcome, whether by word or act."
    },
    {
        "matched": false,
        "definition": "salutatory",
        "type": "n.",
        "word": "The opening oration at the commencement in American colleges."
    },
    {
        "matched": false,
        "definition": "salvage",
        "type": "n.",
        "word": "Any act of saving property."
    },
    {
        "matched": false,
        "definition": "salvo",
        "type": "n.",
        "word": "A salute given by firing all the guns, as at the funeral of an officer."
    },
    {
        "matched": false,
        "definition": "sanctimonious",
        "type": "adj.",
        "word": "Making an ostentatious display or hypocritical pretense of holiness or          "
    },
    {
        "matched": false,
        "definition": "sanction",
        "type": "v.",
        "word": "To approve authoritatively."
    },
    {
        "matched": false,
        "definition": "sanctity",
        "type": "n.",
        "word": "Holiness."
    },
    {
        "matched": false,
        "definition": "sanguinary",
        "type": "adj.",
        "word": "Bloody."
    },
    {
        "matched": false,
        "definition": "sanguine",
        "type": "adj.",
        "word": "Having the color of blood."
    },
    {
        "matched": false,
        "definition": "sanguineous",
        "type": "adj.",
        "word": "Consisting of blood."
    },
    {
        "matched": false,
        "definition": "sapid",
        "type": "adj.",
        "word": "Affecting the sense of taste."
    },
    {
        "matched": false,
        "definition": "sapience",
        "type": "n.",
        "word": "Deep wisdom or knowledge."
    },
    {
        "matched": false,
        "definition": "sapient",
        "type": "adj.",
        "word": "Possessing wisdom."
    },
    {
        "matched": false,
        "definition": "sapiential",
        "type": "adj.",
        "word": "Possessing wisdom."
    },
    {
        "matched": false,
        "definition": "saponaceous",
        "type": "adj.",
        "word": "Having the nature or quality of soap."
    },
    {
        "matched": false,
        "definition": "sarcasm",
        "type": "n.",
        "word": "Cutting and reproachful language."
    },
    {
        "matched": false,
        "definition": "sarcophagus",
        "type": "n.",
        "word": "A stone coffin or a chest-like tomb."
    },
    {
        "matched": false,
        "definition": "sardonic",
        "type": "adj.",
        "word": "Scornfully or bitterly sarcastic."
    },
    {
        "matched": false,
        "definition": "satiate",
        "type": "v.",
        "word": "To satisfy fully the appetite or desire of."
    },
    {
        "matched": false,
        "definition": "satire",
        "type": "n.",
        "word": "The employment of sarcasm, irony, or keenness of wit in ridiculing vices."
    },
    {
        "matched": false,
        "definition": "satiric",
        "type": "adj.",
        "word": "Resembling poetry, in which vice, incapacity ,or corruption is held up to          "
    },
    {
        "matched": false,
        "definition": "satirize",
        "type": "v.",
        "word": "To treat with sarcasm or derisive wit."
    },
    {
        "matched": false,
        "definition": "satyr",
        "type": "n.",
        "word": "A very lascivious person."
    },
    {
        "matched": false,
        "definition": "savage",
        "type": "n.",
        "word": "A wild and uncivilized human being."
    },
    {
        "matched": false,
        "definition": "savor",
        "type": "v.",
        "word": "To perceive by taste or smell."
    },
    {
        "matched": false,
        "definition": "scabbard",
        "type": "n.",
        "word": "The sheath of a sword or similar bladed weapon."
    },
    {
        "matched": false,
        "definition": "scarcity",
        "type": "n.",
        "word": "Insufficiency of supply for needs or ordinary demands."
    },
    {
        "matched": false,
        "definition": "scholarly",
        "type": "adj.",
        "word": "Characteristic of an erudite person."
    },
    {
        "matched": false,
        "definition": "scholastic",
        "type": "adj.",
        "word": "Pertaining to education or schools."
    },
    {
        "matched": false,
        "definition": "scintilla",
        "type": "n.",
        "word": "The faintest ray."
    },
    {
        "matched": false,
        "definition": "scintillate",
        "type": "v.",
        "word": "To emit or send forth sparks or little flashes of light."
    },
    {
        "matched": false,
        "definition": "scope",
        "type": "n.",
        "word": "A range of action or view."
    },
    {
        "matched": false,
        "definition": "scoundrel",
        "type": "n.",
        "word": "A man without principle."
    },
    {
        "matched": false,
        "definition": "scribble",
        "type": "n.",
        "word": "Hasty, careless writing."
    },
    {
        "matched": false,
        "definition": "scribe",
        "type": "n.",
        "word": "One who writes or is skilled in writing."
    },
    {
        "matched": false,
        "definition": "script",
        "type": "n.",
        "word": "Writing or handwriting of the ordinary cursive form."
    },
    {
        "matched": false,
        "definition": "Scriptural",
        "type": "adj.",
        "word": "Pertaining to, contained in, or warranted by the Holy Scriptures."
    },
    {
        "matched": false,
        "definition": "scruple",
        "type": "n.",
        "word": "Doubt or uncertainty regarding a question of moral right or duty."
    },
    {
        "matched": false,
        "definition": "scrupulous",
        "type": "adj.",
        "word": "Cautious in action for fear of doing wrong."
    },
    {
        "matched": false,
        "definition": "scurrilous",
        "type": "adj.",
        "word": "Grossly indecent or vulgar."
    },
    {
        "matched": false,
        "definition": "scuttle",
        "type": "v.",
        "word": "To sink (a ship) by making holes in the bottom."
    },
    {
        "matched": false,
        "definition": "scythe",
        "type": "n.",
        "word": "A long curved blade for mowing, reaping, etc."
    },
    {
        "matched": false,
        "definition": "seance",
        "type": "n.",
        "word": "A meeting of spirituals for consulting spirits."
    },
    {
        "matched": false,
        "definition": "sear",
        "type": "v.",
        "word": "To burn on the surface."
    },
    {
        "matched": false,
        "definition": "sebaceous",
        "type": "adj.",
        "word": "Pertaining to or appearing like fat."
    },
    {
        "matched": false,
        "definition": "secant",
        "type": "adj.",
        "word": "Cutting, especially into two parts."
    },
    {
        "matched": false,
        "definition": "secede",
        "type": "v.",
        "word": "To withdraw from union or association, especially from a political or religious          "
    },
    {
        "matched": false,
        "definition": "secession",
        "type": "n.",
        "word": "Voluntary withdrawal from fellowship, especially from political or religious          "
    },
    {
        "matched": false,
        "definition": "seclude",
        "type": "v.",
        "word": "To place, keep, or withdraw from the companionship of others."
    },
    {
        "matched": false,
        "definition": "seclusion",
        "type": "n.",
        "word": "Solitude."
    },
    {
        "matched": false,
        "definition": "secondary",
        "type": "adj.",
        "word": "Less important or effective than that which is primary."
    },
    {
        "matched": false,
        "definition": "secondly",
        "type": "adv.",
        "word": "In the second place in order or succession."
    },
    {
        "matched": false,
        "definition": "second-rate",
        "type": "adj.",
        "word": "Second in quality, size, rank, importance, etc."
    },
    {
        "matched": false,
        "definition": "secrecy",
        "type": "n.",
        "word": "Concealment."
    },
    {
        "matched": false,
        "definition": "secretary",
        "type": "n.",
        "word": "One who attends to correspondence, keeps records. or does other writing for          "
    },
    {
        "matched": false,
        "definition": "secretive",
        "type": "adj.",
        "word": "Having a tendency to conceal."
    },
    {
        "matched": false,
        "definition": "sedate",
        "type": "adj.",
        "word": "Even-tempered."
    },
    {
        "matched": false,
        "definition": "sedentary",
        "type": "adj.",
        "word": "Involving or requiring much sitting."
    },
    {
        "matched": false,
        "definition": "sediment",
        "type": "n.",
        "word": "Matter that settles to the bottom of a liquid."
    },
    {
        "matched": false,
        "definition": "sedition",
        "type": "n.",
        "word": "Conduct directed against public order and the tranquillity of the state."
    },
    {
        "matched": false,
        "definition": "seditious",
        "type": "adj.",
        "word": "Promotive of conduct directed against public order and the tranquillity of          "
    },
    {
        "matched": false,
        "definition": "seduce",
        "type": "v.",
        "word": "To entice to surrender chastity."
    },
    {
        "matched": false,
        "definition": "sedulous",
        "type": "adj.",
        "word": "Persevering in effort or endeavor."
    },
    {
        "matched": false,
        "definition": "seer",
        "type": "n.",
        "word": "A prophet."
    },
    {
        "matched": false,
        "definition": "seethe",
        "type": "v.",
        "word": "To be violently excited or agitated."
    },
    {
        "matched": false,
        "definition": "seignior",
        "type": "n.",
        "word": "A title of honor or respectful address, equivalent to sir."
    },
    {
        "matched": false,
        "definition": "seismograph",
        "type": "n.",
        "word": "An instrument for recording the phenomena of earthquakes."
    },
    {
        "matched": false,
        "definition": "seize",
        "type": "v.",
        "word": "To catch or take hold of suddenly and forcibly."
    },
    {
        "matched": false,
        "definition": "selective",
        "type": "adj.",
        "word": "Having the power of choice."
    },
    {
        "matched": false,
        "definition": "self-respect",
        "type": "n.",
        "word": "Rational self-esteem."
    },
    {
        "matched": false,
        "definition": "semblance",
        "type": "n.",
        "word": "Outward appearance."
    },
    {
        "matched": false,
        "definition": "semicivilized",
        "type": "adj.",
        "word": "Half-civilized."
    },
    {
        "matched": false,
        "definition": "semiconscious",
        "type": "adj.",
        "word": "Partially conscious."
    },
    {
        "matched": false,
        "definition": "semiannual",
        "type": "adj.",
        "word": "Recurring at intervals of six months."
    },
    {
        "matched": false,
        "definition": "semicircle",
        "type": "n.",
        "word": "A half-circle."
    },
    {
        "matched": false,
        "definition": "seminar",
        "type": "n.",
        "word": "Any assemblage of pupils for real research in some specific study under a          "
    },
    {
        "matched": false,
        "definition": "seminary",
        "type": "n.",
        "word": "A special school, as of theology or pedagogics."
    },
    {
        "matched": false,
        "definition": "senile",
        "type": "adj.",
        "word": "Peculiar to or proceeding from the weakness or infirmity of old age."
    },
    {
        "matched": false,
        "definition": "sensation",
        "type": "n.",
        "word": "A condition of mind resulting from spiritual or inherent feeling."
    },
    {
        "matched": false,
        "definition": "sense",
        "type": "n.",
        "word": "The signification conveyed by some word, phrase, or action."
    },
    {
        "matched": false,
        "definition": "sensibility",
        "type": "n.",
        "word": "Power to perceive or feel."
    },
    {
        "matched": false,
        "definition": "sensitive",
        "type": "adj.",
        "word": "Easily affected by outside operations or influences."
    },
    {
        "matched": false,
        "definition": "sensorium",
        "type": "n.",
        "word": "The sensory apparatus."
    },
    {
        "matched": false,
        "definition": "sensual",
        "type": "adj.",
        "word": "Pertaining to the body or the physical senses."
    },
    {
        "matched": false,
        "definition": "sensuous",
        "type": "adj.",
        "word": "Having a warm appreciation of the beautiful or of the refinements of luxury."
    },
    {
        "matched": false,
        "definition": "sentence",
        "type": "n.",
        "word": "A related group of words containing a subject and a predicate and expressing a          "
    },
    {
        "matched": false,
        "definition": "sentience",
        "type": "n.",
        "word": "Capacity for sensation or sense-perception."
    },
    {
        "matched": false,
        "definition": "sentient",
        "type": "adj.",
        "word": "Possessing the power of sense or sense-perception."
    },
    {
        "matched": false,
        "definition": "sentinel",
        "type": "n.",
        "word": "Any guard or watch stationed for protection."
    },
    {
        "matched": false,
        "definition": "separable",
        "type": "adj.",
        "word": "Capable of being disjoined or divided."
    },
    {
        "matched": false,
        "definition": "separate",
        "type": "v.",
        "word": "To take apart."
    },
    {
        "matched": false,
        "definition": "separatist",
        "type": "n.",
        "word": "A seceder."
    },
    {
        "matched": false,
        "definition": "septennial",
        "type": "adj.",
        "word": "Recurring every seven years."
    },
    {
        "matched": false,
        "definition": "sepulcher",
        "type": "n.",
        "word": "A burial-place."
    },
    {
        "matched": false,
        "definition": "sequacious",
        "type": "adj.",
        "word": "Ready to be led."
    },
    {
        "matched": false,
        "definition": "sequel",
        "type": "n.",
        "word": "That which follows in consequence of what has previously happened."
    },
    {
        "matched": false,
        "definition": "sequence",
        "type": "n.",
        "word": "The order in which a number or persons, things, or events follow one another          "
    },
    {
        "matched": false,
        "definition": "sequent",
        "type": "adj.",
        "word": "Following in the order of time."
    },
    {
        "matched": false,
        "definition": "sequester",
        "type": "v.",
        "word": "To cause to withdraw or retire, as from society or public life."
    },
    {
        "matched": false,
        "definition": "sequestrate",
        "type": "v.",
        "word": "To confiscate."
    },
    {
        "matched": false,
        "definition": "sergeant",
        "type": "n.",
        "word": "A non-commissioned military officer ranking next above a corporal."
    },
    {
        "matched": false,
        "definition": "sergeant-at-arms",
        "type": "n.",
        "word": "An executive officer in legislative bodies who enforces the orders of          "
    },
    {
        "matched": false,
        "definition": "sergeant-major",
        "type": "n.",
        "word": "The highest non-commissioned officer in a regiment."
    },
    {
        "matched": false,
        "definition": "service",
        "type": "n.",
        "word": "Any work done for the benefit of another."
    },
    {
        "matched": false,
        "definition": "serviceable",
        "type": "adj.",
        "word": "Durable."
    },
    {
        "matched": false,
        "definition": "servitude",
        "type": "n.",
        "word": "Slavery."
    },
    {
        "matched": false,
        "definition": "severance",
        "type": "n.",
        "word": "Separation."
    },
    {
        "matched": false,
        "definition": "severely",
        "type": "adv.",
        "word": "Extremely."
    },
    {
        "matched": false,
        "definition": "sextet",
        "type": "n.",
        "word": "A band of six singers or players."
    },
    {
        "matched": false,
        "definition": "sextuple",
        "type": "adj.",
        "word": "Multiplied by six."
    },
    {
        "matched": false,
        "definition": "sheer",
        "type": "adj.",
        "word": "Absolute."
    },
    {
        "matched": false,
        "definition": "shiftless",
        "type": "adj.",
        "word": "Wanting in resource, energy, or executive ability."
    },
    {
        "matched": false,
        "definition": "shrewd",
        "type": "adj.",
        "word": "Characterized by skill at understanding and profiting by circumstances."
    },
    {
        "matched": false,
        "definition": "shriek",
        "type": "n.",
        "word": "A sharp, shrill outcry or scream, caused by agony or terror."
    },
    {
        "matched": false,
        "definition": "shrinkage",
        "type": "n.",
        "word": "A contraction of any material into less bulk or dimension."
    },
    {
        "matched": false,
        "definition": "shrivel",
        "type": "v.",
        "word": "To draw or be drawn into wrinkles."
    },
    {
        "matched": false,
        "definition": "shuffle",
        "type": "n.",
        "word": "A mixing or changing the order of things."
    },
    {
        "matched": false,
        "definition": "sibilance",
        "type": "n.",
        "word": "A hissing sound."
    },
    {
        "matched": false,
        "definition": "sibilant",
        "type": "adj.",
        "word": "Made with a hissing sound."
    },
    {
        "matched": false,
        "definition": "sibilate",
        "type": "v.",
        "word": "To give a hissing sound to, as in pronouncing the letter s."
    },
    {
        "matched": false,
        "definition": "sidelong",
        "type": "adj.",
        "word": "Inclining or tending to one side."
    },
    {
        "matched": false,
        "definition": "sidereal",
        "type": "adj.",
        "word": "Pertaining to stars or constellations."
    },
    {
        "matched": false,
        "definition": "siege",
        "type": "n.",
        "word": "A beleaguerment."
    },
    {
        "matched": false,
        "definition": "significance",
        "type": "n.",
        "word": "Importance."
    },
    {
        "matched": false,
        "definition": "significant",
        "type": "adj.",
        "word": "Important, especially as pointing something out."
    },
    {
        "matched": false,
        "definition": "signification",
        "type": "n.",
        "word": "The meaning conveyed by language, actions, or signs."
    },
    {
        "matched": false,
        "definition": "similar",
        "type": "adj.",
        "word": "Bearing resemblance to one another or to something else."
    },
    {
        "matched": false,
        "definition": "simile",
        "type": "n.",
        "word": "A comparison which directs the mind to the representative object itself."
    },
    {
        "matched": false,
        "definition": "similitude",
        "type": "n.",
        "word": "Similarity."
    },
    {
        "matched": false,
        "definition": "simplify",
        "type": "v.",
        "word": "To make less complex or difficult."
    },
    {
        "matched": false,
        "definition": "simulate",
        "type": "v.",
        "word": "Imitate."
    },
    {
        "matched": false,
        "definition": "simultaneous",
        "type": "adj.",
        "word": "Occurring, done, or existing at the same time."
    },
    {
        "matched": false,
        "definition": "sinecure",
        "type": "n.",
        "word": "Any position having emoluments with few or no duties."
    },
    {
        "matched": false,
        "definition": "singe",
        "type": "v.",
        "word": "To burn slightly or superficially."
    },
    {
        "matched": false,
        "definition": "sinister",
        "type": "adj.",
        "word": "Evil."
    },
    {
        "matched": false,
        "definition": "sinuosity",
        "type": "n.",
        "word": "The quality of curving in and out."
    },
    {
        "matched": false,
        "definition": "sinuous",
        "type": "adj.",
        "word": "Curving in and out."
    },
    {
        "matched": false,
        "definition": "sinus",
        "type": "n.",
        "word": "An opening or cavity."
    },
    {
        "matched": false,
        "definition": "siren",
        "type": "n.",
        "word": "A sea-nymph, described by Homer as dwelling between the island of Circe and          "
    },
    {
        "matched": false,
        "definition": "sirocco",
        "type": "n.",
        "word": "hot winds from Africa."
    },
    {
        "matched": false,
        "definition": "sisterhood",
        "type": "n.",
        "word": "A body of sisters united by some bond of sympathy or by a religious vow."
    },
    {
        "matched": false,
        "definition": "skeptic",
        "type": "n.",
        "word": "One who doubts any statements."
    },
    {
        "matched": false,
        "definition": "skepticism",
        "type": "n.",
        "word": "The entertainment of doubt concerning something."
    },
    {
        "matched": false,
        "definition": "skiff",
        "type": "n.",
        "word": "Usually, a small light boat propelled by oars."
    },
    {
        "matched": false,
        "definition": "skirmish",
        "type": "n.",
        "word": "Desultory fighting between advanced detachments of two armies."
    },
    {
        "matched": false,
        "definition": "sleight",
        "type": "n.",
        "word": "A trick or feat so deftly done that the manner of performance escapes          "
    },
    {
        "matched": false,
        "definition": "slight",
        "type": "adj.",
        "word": "Of a small importance or significance."
    },
    {
        "matched": false,
        "definition": "slothful",
        "type": "adj.",
        "word": "Lazy."
    },
    {
        "matched": false,
        "definition": "sluggard",
        "type": "n.",
        "word": "A person habitually lazy or idle."
    },
    {
        "matched": false,
        "definition": "sociable",
        "type": "adj.",
        "word": "Inclined to seek company."
    },
    {
        "matched": false,
        "definition": "socialism",
        "type": "n.",
        "word": "A theory of civil polity that aims to secure the reconstruction of society."
    },
    {
        "matched": false,
        "definition": "socialist",
        "type": "adj.",
        "word": "One who advocates reconstruction of society by collective ownership of land          "
    },
    {
        "matched": false,
        "definition": "sociology",
        "type": "n.",
        "word": "The philosophical study of society."
    },
    {
        "matched": false,
        "definition": "Sol",
        "type": "n.",
        "word": "The sun."
    },
    {
        "matched": false,
        "definition": "solace",
        "type": "n.",
        "word": "Comfort in grief, trouble, or calamity."
    },
    {
        "matched": false,
        "definition": "solar",
        "type": "adj.",
        "word": "Pertaining to the sun."
    },
    {
        "matched": false,
        "definition": "solder",
        "type": "n.",
        "word": "A fusible alloy used for joining metallic surfaces or margins."
    },
    {
        "matched": false,
        "definition": "soldier",
        "type": "n.",
        "word": "A person engaged in military service."
    },
    {
        "matched": false,
        "definition": "solecism",
        "type": "n.",
        "word": "Any violation of established rules or customs."
    },
    {
        "matched": false,
        "definition": "solicitor",
        "type": "n.",
        "word": "One who represents a client in court of justice; an attorney."
    },
    {
        "matched": false,
        "definition": "solicitude",
        "type": "n.",
        "word": "Uneasiness of mind occasioned by desire, anxiety, or fear."
    },
    {
        "matched": false,
        "definition": "soliloquy",
        "type": "n.",
        "word": "A monologue."
    },
    {
        "matched": false,
        "definition": "solstice",
        "type": "n.",
        "word": "The time of year when the sun is at its greatest declination."
    },
    {
        "matched": false,
        "definition": "soluble",
        "type": "adj.",
        "word": "Capable of being dissolved, as in a fluid."
    },
    {
        "matched": false,
        "definition": "solvent",
        "type": "adj.",
        "word": "Having sufficient funds to pay all debts."
    },
    {
        "matched": false,
        "definition": "somber",
        "type": "adj.",
        "word": "Gloomy."
    },
    {
        "matched": false,
        "definition": "somniferous",
        "type": "adj.",
        "word": "Tending to produce sleep."
    },
    {
        "matched": false,
        "definition": "somnolence",
        "type": "n.",
        "word": "Oppressive drowsiness."
    },
    {
        "matched": false,
        "definition": "somnolent",
        "type": "adj.",
        "word": "Sleepy."
    },
    {
        "matched": false,
        "definition": "sonata",
        "type": "n.",
        "word": "An instrumental composition."
    },
    {
        "matched": false,
        "definition": "sonnet",
        "type": "n.",
        "word": "A poem of fourteen decasyllabic or octosyllabiclines expressing two successive          "
    },
    {
        "matched": false,
        "definition": "sonorous",
        "type": "adj.",
        "word": "Resonant."
    },
    {
        "matched": false,
        "definition": "soothsayer",
        "type": "n.",
        "word": "One who claims to have supernatural insight or foresight."
    },
    {
        "matched": false,
        "definition": "sophism",
        "type": "n.",
        "word": "A false argument understood to be such by the reasoner himself and          "
    },
    {
        "matched": false,
        "definition": "sophistical",
        "type": "adj.",
        "word": "Fallacious."
    },
    {
        "matched": false,
        "definition": "sophisticate",
        "type": "v.",
        "word": "To deprive of simplicity of mind or manner."
    },
    {
        "matched": false,
        "definition": "sophistry",
        "type": "n.",
        "word": "Reasoning sound in appearance only, especially when designedly deceptive."
    },
    {
        "matched": false,
        "definition": "soprano",
        "type": "n.",
        "word": "A woman's or boy's voice of high range."
    },
    {
        "matched": false,
        "definition": "sorcery",
        "type": "n.",
        "word": "Witchcraft."
    },
    {
        "matched": false,
        "definition": "sordid",
        "type": "adj.",
        "word": "Of degraded character or nature."
    },
    {
        "matched": false,
        "definition": "souvenir",
        "type": "n.",
        "word": "A token of remembrance."
    },
    {
        "matched": false,
        "definition": "sparse",
        "type": "adj.",
        "word": "Thinly diffused."
    },
    {
        "matched": false,
        "definition": "Spartan",
        "type": "adj.",
        "word": "Exceptionally brave; rigorously severe."
    },
    {
        "matched": false,
        "definition": "spasmodic",
        "type": "adj.",
        "word": "Convulsive."
    },
    {
        "matched": false,
        "definition": "specialize",
        "type": "v.",
        "word": "To assume an individual or specific character, or adopt a singular or          "
    },
    {
        "matched": false,
        "definition": "specialty",
        "type": "n.",
        "word": "An employment limited to one particular line of work."
    },
    {
        "matched": false,
        "definition": "specie",
        "type": "n.",
        "word": "A coin or coins of gold, silver, copper, or other metal."
    },
    {
        "matched": false,
        "definition": "species",
        "type": "n.",
        "word": "A classificatory group of animals or plants subordinate to a genus."
    },
    {
        "matched": false,
        "definition": "specimen",
        "type": "n.",
        "word": "One of a class of persons or things regarded as representative of the class."
    },
    {
        "matched": false,
        "definition": "specious",
        "type": "adj.",
        "word": "Plausible."
    },
    {
        "matched": false,
        "definition": "spectator",
        "type": "n.",
        "word": "One who beholds or looks on."
    },
    {
        "matched": false,
        "definition": "specter",
        "type": "n.",
        "word": "Apparition."
    },
    {
        "matched": false,
        "definition": "spectrum",
        "type": "n.",
        "word": "An image formed by rays of light or other radiant energy."
    },
    {
        "matched": false,
        "definition": "speculate",
        "type": "v.",
        "word": "To pursue inquiries and form conjectures."
    },
    {
        "matched": false,
        "definition": "speculator",
        "type": "n.",
        "word": "One who makes an investment that involves a risk of loss, but also a chance          "
    },
    {
        "matched": false,
        "definition": "sphericity",
        "type": "n.",
        "word": "The state or condition of being a sphere."
    },
    {
        "matched": false,
        "definition": "spheroid",
        "type": "n.",
        "word": "A body having nearly the form of a sphere."
    },
    {
        "matched": false,
        "definition": "spherometer",
        "type": "n.",
        "word": "An instrument for measuring curvature or radii of spherical surfaces."
    },
    {
        "matched": false,
        "definition": "spinous",
        "type": "adj.",
        "word": "Having spines."
    },
    {
        "matched": false,
        "definition": "spinster",
        "type": "n.",
        "word": "A woman who has never been married."
    },
    {
        "matched": false,
        "definition": "spontaneous",
        "type": "adj.",
        "word": "Arising from inherent qualities or tendencies without external efficient          "
    },
    {
        "matched": false,
        "definition": "sprightly",
        "type": "adj.",
        "word": "Vivacious."
    },
    {
        "matched": false,
        "definition": "spurious",
        "type": "adj.",
        "word": "Not genuine."
    },
    {
        "matched": false,
        "definition": "squabble",
        "type": "v.",
        "word": "To quarrel."
    },
    {
        "matched": false,
        "definition": "squalid",
        "type": "adj.",
        "word": "Having a dirty, mean, poverty-stricken appearance."
    },
    {
        "matched": false,
        "definition": "squatter",
        "type": "n.",
        "word": "One who settles on land without permission or right."
    },
    {
        "matched": false,
        "definition": "stagnant",
        "type": "adj.",
        "word": "Not flowing: said of water, as in a pool."
    },
    {
        "matched": false,
        "definition": "stagnate",
        "type": "v.",
        "word": "To become dull or inert."
    },
    {
        "matched": false,
        "definition": "stagnation",
        "type": "n.",
        "word": "The condition of not flowing or not changing."
    },
    {
        "matched": false,
        "definition": "stagy",
        "type": "adj.",
        "word": "Having a theatrical manner."
    },
    {
        "matched": false,
        "definition": "staid",
        "type": "adj.",
        "word": "Of a steady and sober character."
    },
    {
        "matched": false,
        "definition": "stallion",
        "type": "n.",
        "word": "An uncastrated male horse, commonly one kept for breeding."
    },
    {
        "matched": false,
        "definition": "stanchion",
        "type": "n.",
        "word": "A vertical bar, or a pair of bars, used to confine cattle in a stall."
    },
    {
        "matched": false,
        "definition": "stanza",
        "type": "n.",
        "word": "A group of rimed lines, usually forming one of a series of similar divisions in          "
    },
    {
        "matched": false,
        "definition": "statecraft",
        "type": "n.",
        "word": "The art of conducting state affairs."
    },
    {
        "matched": false,
        "definition": "static",
        "type": "adj.",
        "word": "Pertaining to or designating bodies at rest or forces in equilibrium."
    },
    {
        "matched": false,
        "definition": "statics",
        "type": "n.",
        "word": "The branch of mechanics that treats of the relations that subsist among forces          "
    },
    {
        "matched": false,
        "definition": "stationary",
        "type": "adj.",
        "word": "Not moving."
    },
    {
        "matched": false,
        "definition": "statistician",
        "type": "n.",
        "word": "One who is skilled in collecting and tabulating numerical facts."
    },
    {
        "matched": false,
        "definition": "statuesque",
        "type": "adj.",
        "word": "Having the grace, pose, or quietude of a statue."
    },
    {
        "matched": false,
        "definition": "statuette",
        "type": "n.",
        "word": "A figurine."
    },
    {
        "matched": false,
        "definition": "stature",
        "type": "n.",
        "word": "The natural height of an animal body."
    },
    {
        "matched": false,
        "definition": "statute",
        "type": "n.",
        "word": "Any authoritatively declared rule, ordinance, decree, or law."
    },
    {
        "matched": false,
        "definition": "stealth",
        "type": "n.",
        "word": "A concealed manner of acting."
    },
    {
        "matched": false,
        "definition": "stellar",
        "type": "adj.",
        "word": "Pertaining to the stars."
    },
    {
        "matched": false,
        "definition": "steppe",
        "type": "n.",
        "word": "One of the extensive plains in Russia and Siberia."
    },
    {
        "matched": false,
        "definition": "sterling",
        "type": "adj.",
        "word": "Genuine."
    },
    {
        "matched": false,
        "definition": "stifle",
        "type": "v.",
        "word": "To smother."
    },
    {
        "matched": false,
        "definition": "stigma",
        "type": "n.",
        "word": "A mark of infamy or token of disgrace attaching to a person as the result of          "
    },
    {
        "matched": false,
        "definition": "stiletto",
        "type": "n.",
        "word": "A small dagger."
    },
    {
        "matched": false,
        "definition": "stimulant",
        "type": "n.",
        "word": "Anything that rouses to activity or to quickened action."
    },
    {
        "matched": false,
        "definition": "stimulate",
        "type": "v.",
        "word": "To rouse to activity or to quickened action."
    },
    {
        "matched": false,
        "definition": "stimulus",
        "type": "n.",
        "word": "Incentive."
    },
    {
        "matched": false,
        "definition": "stingy",
        "type": "adj.",
        "word": "Cheap, unwilling to spend money."
    },
    {
        "matched": false,
        "definition": "stipend",
        "type": "n.",
        "word": "A definite amount paid at stated periods in compensation for services or as an          "
    },
    {
        "matched": false,
        "definition": "Stoicism",
        "type": "n.",
        "word": "The principles or the practice of the Stoics-being very even tempered in          "
    },
    {
        "matched": false,
        "definition": "stolid",
        "type": "adj.",
        "word": "Expressing no power of feeling or perceiving."
    },
    {
        "matched": false,
        "definition": "strait",
        "type": "n.",
        "word": "A narrow passage of water connecting two larger bodies of water."
    },
    {
        "matched": false,
        "definition": "stratagem",
        "type": "n.",
        "word": "Any clever trick or device for obtaining an advantage."
    },
    {
        "matched": false,
        "definition": "stratum",
        "type": "n.",
        "word": "A natural or artificial layer, bed, or thickness of any substance or material."
    },
    {
        "matched": false,
        "definition": "streamlet",
        "type": "n.",
        "word": "Rivulet."
    },
    {
        "matched": false,
        "definition": "stringency",
        "type": "n.",
        "word": "Strictness."
    },
    {
        "matched": false,
        "definition": "stringent",
        "type": "adj.",
        "word": "Rigid."
    },
    {
        "matched": false,
        "definition": "stripling",
        "type": "n.",
        "word": "A mere youth."
    },
    {
        "matched": false,
        "definition": "studious",
        "type": "adj.",
        "word": "Having or showing devotion to the acquisition of knowledge."
    },
    {
        "matched": false,
        "definition": "stultify",
        "type": "v.",
        "word": "To give an appearance of foolishness to."
    },
    {
        "matched": false,
        "definition": "stupendous",
        "type": "adj.",
        "word": "Of prodigious size, bulk, or degree."
    },
    {
        "matched": false,
        "definition": "stupor",
        "type": "n.",
        "word": "Profound lethargy."
    },
    {
        "matched": false,
        "definition": "suasion",
        "type": "n.",
        "word": "The act of persuading."
    },
    {
        "matched": false,
        "definition": "suave",
        "type": "adj.",
        "word": "Smooth and pleasant in manner."
    },
    {
        "matched": false,
        "definition": "subacid",
        "type": "adj.",
        "word": "Somewhat sharp or biting."
    },
    {
        "matched": false,
        "definition": "subaquatic",
        "type": "adj.",
        "word": "Being, formed, or operating under water."
    },
    {
        "matched": false,
        "definition": "subconscious",
        "type": "adj.",
        "word": "Being or occurring in the mind, but without attendant consciousness or          "
    },
    {
        "matched": false,
        "definition": "subjacent",
        "type": "adj.",
        "word": "Situated directly underneath."
    },
    {
        "matched": false,
        "definition": "subjection",
        "type": "n.",
        "word": "The act of bringing into a state of submission."
    },
    {
        "matched": false,
        "definition": "subjugate",
        "type": "v.",
        "word": "To conquer."
    },
    {
        "matched": false,
        "definition": "subliminal",
        "type": "adj.",
        "word": "Being beneath the threshold of consciousness."
    },
    {
        "matched": false,
        "definition": "sublingual",
        "type": "adj.",
        "word": "Situated beneath the tongue."
    },
    {
        "matched": false,
        "definition": "submarine",
        "type": "adj.",
        "word": "Existing, done, or operating beneath the surface of the sea."
    },
    {
        "matched": false,
        "definition": "submerge",
        "type": "v.",
        "word": "To place or plunge under water."
    },
    {
        "matched": false,
        "definition": "submergence",
        "type": "n.",
        "word": "The act of submerging."
    },
    {
        "matched": false,
        "definition": "submersible",
        "type": "adj.",
        "word": "Capable of being put underwater."
    },
    {
        "matched": false,
        "definition": "submersion",
        "type": "n.",
        "word": "The act of submerging."
    },
    {
        "matched": false,
        "definition": "submission",
        "type": "n.",
        "word": "A yielding to the power or authority of another."
    },
    {
        "matched": false,
        "definition": "submittal",
        "type": "n.",
        "word": "The act of submitting."
    },
    {
        "matched": false,
        "definition": "subordinate",
        "type": "adj.",
        "word": "Belonging to an inferior order in a classification."
    },
    {
        "matched": false,
        "definition": "subsequent",
        "type": "adj.",
        "word": "Following in time."
    },
    {
        "matched": false,
        "definition": "subservience",
        "type": "n.",
        "word": "The quality, character, or condition of being servilely following          "
    },
    {
        "matched": false,
        "definition": "subservient",
        "type": "adj.",
        "word": "Servilely following another's behests."
    },
    {
        "matched": false,
        "definition": "subside",
        "type": "v.",
        "word": "To relapse into a state of repose and tranquillity."
    },
    {
        "matched": false,
        "definition": "subsist",
        "type": "v.",
        "word": "To be maintained or sustained."
    },
    {
        "matched": false,
        "definition": "subsistence",
        "type": "n.",
        "word": "Sustenance."
    },
    {
        "matched": false,
        "definition": "substantive",
        "type": "adj.",
        "word": "Solid."
    },
    {
        "matched": false,
        "definition": "subtend",
        "type": "v.",
        "word": "To extend opposite to."
    },
    {
        "matched": false,
        "definition": "subterfuge",
        "type": "n.",
        "word": "Evasion."
    },
    {
        "matched": false,
        "definition": "subterranean",
        "type": "adj.",
        "word": "Situated or occurring below the surface of the earth."
    },
    {
        "matched": false,
        "definition": "subtle",
        "type": "adj.",
        "word": "Discriminating."
    },
    {
        "matched": false,
        "definition": "subtrahend",
        "type": "n.",
        "word": "That which is to be subtracted."
    },
    {
        "matched": false,
        "definition": "subversion",
        "type": "n.",
        "word": "An overthrow, as from the foundation."
    },
    {
        "matched": false,
        "definition": "subvert",
        "type": "v.",
        "word": "To bring to ruin."
    },
    {
        "matched": false,
        "definition": "succeed",
        "type": "v.",
        "word": "To accomplish what is attempted or intended."
    },
    {
        "matched": false,
        "definition": "success",
        "type": "n.",
        "word": "A favorable or prosperous course or termination of anything attempted."
    },
    {
        "matched": false,
        "definition": "successful",
        "type": "adj.",
        "word": "Having reached a high degree of worldly prosperity."
    },
    {
        "matched": false,
        "definition": "successor",
        "type": "n.",
        "word": "One who or that which takes the place of a predecessor or preceding thing."
    },
    {
        "matched": false,
        "definition": "succinct",
        "type": "adj.",
        "word": "Concise."
    },
    {
        "matched": false,
        "definition": "succulent",
        "type": "adj.",
        "word": "Juicy."
    },
    {
        "matched": false,
        "definition": "succumb",
        "type": "v.",
        "word": "To cease to resist."
    },
    {
        "matched": false,
        "definition": "sufferance",
        "type": "n.",
        "word": "Toleration."
    },
    {
        "matched": false,
        "definition": "sufficiency",
        "type": "n.",
        "word": "An ample or adequate supply."
    },
    {
        "matched": false,
        "definition": "suffrage",
        "type": "n.",
        "word": "The right or privilege of voting."
    },
    {
        "matched": false,
        "definition": "suffuse",
        "type": "v.",
        "word": "To cover or fill the surface of."
    },
    {
        "matched": false,
        "definition": "suggestible",
        "type": "adj.",
        "word": "That can be suggested."
    },
    {
        "matched": false,
        "definition": "suggestive",
        "type": "adj.",
        "word": "Stimulating to thought or reflection."
    },
    {
        "matched": false,
        "definition": "summary",
        "type": "n.",
        "word": "An abstract."
    },
    {
        "matched": false,
        "definition": "sumptuous",
        "type": "adj.",
        "word": "Rich and costly."
    },
    {
        "matched": false,
        "definition": "superabundance",
        "type": "n.",
        "word": "An excessive amount."
    },
    {
        "matched": false,
        "definition": "superadd",
        "type": "v.",
        "word": "To add in addition to what has been added."
    },
    {
        "matched": false,
        "definition": "superannuate",
        "type": "v.",
        "word": "To become deteriorated or incapacitated by long service."
    },
    {
        "matched": false,
        "definition": "superb",
        "type": "adj.",
        "word": "Sumptuously elegant."
    },
    {
        "matched": false,
        "definition": "supercilious",
        "type": "adj.",
        "word": "Exhibiting haughty and careless contempt."
    },
    {
        "matched": false,
        "definition": "superficial",
        "type": "adj.",
        "word": "Knowing and understanding only the ordinary and the obvious."
    },
    {
        "matched": false,
        "definition": "superfluity",
        "type": "n.",
        "word": "That part of anything that is in excess of what is needed."
    },
    {
        "matched": false,
        "definition": "superfluous",
        "type": "adj.",
        "word": "Being more than is needed."
    },
    {
        "matched": false,
        "definition": "superheat",
        "type": "v.",
        "word": "To heat to excess."
    },
    {
        "matched": false,
        "definition": "superintend",
        "type": "v.",
        "word": "To have the charge and direction of, especially of some work or movement."
    },
    {
        "matched": false,
        "definition": "superintendence",
        "type": "n.",
        "word": "Direction and management."
    },
    {
        "matched": false,
        "definition": "superintendent",
        "type": "n.",
        "word": "One who has the charge and direction of, especially of some work or          "
    },
    {
        "matched": false,
        "definition": "superlative",
        "type": "n.",
        "word": "That which is of the highest possible excellence or eminence."
    },
    {
        "matched": false,
        "definition": "supernatural",
        "type": "adj.",
        "word": "Caused miraculously or by the immediate exercise of divine power."
    },
    {
        "matched": false,
        "definition": "supernumerary",
        "type": "adj.",
        "word": "Superfluous."
    },
    {
        "matched": false,
        "definition": "supersede",
        "type": "v.",
        "word": "To displace."
    },
    {
        "matched": false,
        "definition": "supine",
        "type": "adj.",
        "word": "Lying on the back."
    },
    {
        "matched": false,
        "definition": "supplant",
        "type": "v.",
        "word": "To take the place of."
    },
    {
        "matched": false,
        "definition": "supple",
        "type": "adj.",
        "word": "Easily bent."
    },
    {
        "matched": false,
        "definition": "supplementary",
        "type": "adj.",
        "word": "Being an addition to."
    },
    {
        "matched": false,
        "definition": "supplicant",
        "type": "n.",
        "word": "One who asks humbly and earnestly."
    },
    {
        "matched": false,
        "definition": "supplicate",
        "type": "v.",
        "word": "To beg."
    },
    {
        "matched": false,
        "definition": "supposition",
        "type": "n.",
        "word": "Conjecture."
    },
    {
        "matched": false,
        "definition": "suppress",
        "type": "v.",
        "word": "To prevent from being disclosed or punished."
    },
    {
        "matched": false,
        "definition": "suppressible",
        "type": "adj.",
        "word": "Capable of being suppressed."
    },
    {
        "matched": false,
        "definition": "suppression",
        "type": "n.",
        "word": "A forcible putting or keeping down."
    },
    {
        "matched": false,
        "definition": "supramundane",
        "type": "adj.",
        "word": "Supernatural."
    },
    {
        "matched": false,
        "definition": "surcharge",
        "type": "n.",
        "word": "An additional amount charged."
    },
    {
        "matched": false,
        "definition": "surety",
        "type": "n.",
        "word": "Security for payment or performance."
    },
    {
        "matched": false,
        "definition": "surfeit",
        "type": "v.",
        "word": "To feed to fullness or to satiety."
    },
    {
        "matched": false,
        "definition": "surmise",
        "type": "v.",
        "word": "To conjecture."
    },
    {
        "matched": false,
        "definition": "surmount",
        "type": "v.",
        "word": "To overcome by force of will."
    },
    {
        "matched": false,
        "definition": "surreptitious",
        "type": "adj.",
        "word": "Clandestine."
    },
    {
        "matched": false,
        "definition": "surrogate",
        "type": "n.",
        "word": "One who or that which is substituted for or appointed to act in place of          "
    },
    {
        "matched": false,
        "definition": "surround",
        "type": "v.",
        "word": "To encircle."
    },
    {
        "matched": false,
        "definition": "surveyor",
        "type": "n.",
        "word": "A land-measurer."
    },
    {
        "matched": false,
        "definition": "susceptibility",
        "type": "n.",
        "word": "A specific capability of feeling or emotion."
    },
    {
        "matched": false,
        "definition": "susceptible",
        "type": "adj.",
        "word": "Easily under a specified power or influence."
    },
    {
        "matched": false,
        "definition": "suspense",
        "type": "n.",
        "word": "Uncertainty."
    },
    {
        "matched": false,
        "definition": "suspension",
        "type": "n.",
        "word": "A hanging from a support."
    },
    {
        "matched": false,
        "definition": "suspicious",
        "type": "adj.",
        "word": "Inclined to doubt or mistrust."
    },
    {
        "matched": false,
        "definition": "sustenance",
        "type": "n.",
        "word": "Food."
    },
    {
        "matched": false,
        "definition": "swarthy",
        "type": "adj.",
        "word": "Having a dark hue, especially a dark or sunburned complexion."
    },
    {
        "matched": false,
        "definition": "Sybarite",
        "type": "n.",
        "word": "A luxurious person."
    },
    {
        "matched": false,
        "definition": "sycophant",
        "type": "n.",
        "word": "A servile flatterer, especially of those in authority or influence."
    },
    {
        "matched": false,
        "definition": "syllabic",
        "type": "adj.",
        "word": "Consisting of that which is uttered in a single vocal impulse."
    },
    {
        "matched": false,
        "definition": "syllabication",
        "type": "n.",
        "word": "Division of words into that which is uttered in a single vocal impulse."
    },
    {
        "matched": false,
        "definition": "syllable",
        "type": "n.",
        "word": "That which is uttered in a single vocal impulse."
    },
    {
        "matched": false,
        "definition": "syllabus",
        "type": "n.",
        "word": "Outline of a subject, course, lecture, or treatise."
    },
    {
        "matched": false,
        "definition": "sylph",
        "type": "n.",
        "word": "A slender, graceful young woman or girl."
    },
    {
        "matched": false,
        "definition": "symmetrical",
        "type": "adj.",
        "word": "Well-balanced."
    },
    {
        "matched": false,
        "definition": "symmetry",
        "type": "n.",
        "word": "Relative proportion and harmony."
    },
    {
        "matched": false,
        "definition": "sympathetic",
        "type": "adj.",
        "word": "Having a fellow-feeling for or like feelings with another or others."
    },
    {
        "matched": false,
        "definition": "sympathize",
        "type": "v.",
        "word": "To share the sentiments or mental states of another."
    },
    {
        "matched": false,
        "definition": "symphonic",
        "type": "adj.",
        "word": "Characterized by a harmonious or agreeable mingling of sounds."
    },
    {
        "matched": false,
        "definition": "symphonious",
        "type": "adj.",
        "word": "Marked by a harmonious or agreeable mingling of sounds."
    },
    {
        "matched": false,
        "definition": "symphony",
        "type": "n.",
        "word": "A harmonious or agreeable mingling of sounds."
    },
    {
        "matched": false,
        "definition": "synchronism",
        "type": "n.",
        "word": "Simultaneousness."
    },
    {
        "matched": false,
        "definition": "syndicate",
        "type": "n.",
        "word": "An association of individuals united for the prosecution of some enterprise."
    },
    {
        "matched": false,
        "definition": "syneresis",
        "type": "n.",
        "word": "The coalescence of two vowels or syllables, as e'er for ever."
    },
    {
        "matched": false,
        "definition": "synod",
        "type": "n.",
        "word": "An ecclesiastical council."
    },
    {
        "matched": false,
        "definition": "synonym",
        "type": "n.",
        "word": "A word having the same or almost the same meaning as some other."
    },
    {
        "matched": false,
        "definition": "synopsis",
        "type": "n.",
        "word": "A syllabus or summary."
    },
    {
        "matched": false,
        "definition": "systematic",
        "type": "adj.",
        "word": "Methodical."
    },
    {
        "matched": false,
        "definition": "tableau",
        "type": "n.",
        "word": "An arrangement of inanimate figures representing a scene from real life."
    },
    {
        "matched": false,
        "definition": "tacit",
        "type": "adj.",
        "word": "Understood."
    },
    {
        "matched": false,
        "definition": "taciturn",
        "type": "adj.",
        "word": "Disinclined to conversation."
    },
    {
        "matched": false,
        "definition": "tack",
        "type": "n.",
        "word": "A small sharp-pointed nail."
    },
    {
        "matched": false,
        "definition": "tact",
        "type": "n.",
        "word": "Fine or ready mental discernment shown in saying or doing the proper thing."
    },
    {
        "matched": false,
        "definition": "tactician",
        "type": "n.",
        "word": "One who directs affairs with skill and shrewdness."
    },
    {
        "matched": false,
        "definition": "tactics",
        "type": "n.",
        "word": "Any maneuvering or adroit management for effecting an object."
    },
    {
        "matched": false,
        "definition": "tangency",
        "type": "n.",
        "word": "The state of touching."
    },
    {
        "matched": false,
        "definition": "tangent",
        "type": "adj.",
        "word": "Touching."
    },
    {
        "matched": false,
        "definition": "tangible",
        "type": "adj.",
        "word": "Perceptible by touch."
    },
    {
        "matched": false,
        "definition": "tannery",
        "type": "n.",
        "word": "A place where leather is tanned."
    },
    {
        "matched": false,
        "definition": "tantalize",
        "type": "v.",
        "word": "To tease."
    },
    {
        "matched": false,
        "definition": "tantamount",
        "type": "adj.",
        "word": "Having equal or equivalent value, effect, or import."
    },
    {
        "matched": false,
        "definition": "tapestry",
        "type": "n.",
        "word": "A fabric to which a pattern is applied with a needle, designed for ornamental          "
    },
    {
        "matched": false,
        "definition": "tarnish",
        "type": "v.",
        "word": "To lessen or destroy the luster of in any way."
    },
    {
        "matched": false,
        "definition": "taut",
        "type": "adj.",
        "word": "Stretched tight."
    },
    {
        "matched": false,
        "definition": "taxation",
        "type": "n.",
        "word": "A levy, by government, of a fixed contribution."
    },
    {
        "matched": false,
        "definition": "taxidermy",
        "type": "n.",
        "word": "The art or process of preserving dead animals or parts of them."
    },
    {
        "matched": false,
        "definition": "technic",
        "type": "adj.",
        "word": "Technical."
    },
    {
        "matched": false,
        "definition": "technicality",
        "type": "n.",
        "word": "Something peculiar to a particular art, trade, or the like."
    },
    {
        "matched": false,
        "definition": "technique",
        "type": "n.",
        "word": "Manner of performance."
    },
    {
        "matched": false,
        "definition": "technography",
        "type": "n.",
        "word": "The scientific description or study of human arts and industries in their          "
    },
    {
        "matched": false,
        "definition": "technology",
        "type": "n.",
        "word": "The knowledge relating to industries and manufactures."
    },
    {
        "matched": false,
        "definition": "teem",
        "type": "v.",
        "word": "To be full to overflowing."
    },
    {
        "matched": false,
        "definition": "telepathy",
        "type": "n.",
        "word": "Thought-transference."
    },
    {
        "matched": false,
        "definition": "telephony",
        "type": "n.",
        "word": "The art or process of communicating by telephone."
    },
    {
        "matched": false,
        "definition": "telescope",
        "type": "v.",
        "word": "To drive together so that one slides into the another like the sections of a          "
    },
    {
        "matched": false,
        "definition": "telltale",
        "type": "adj.",
        "word": "That gives warning or information."
    },
    {
        "matched": false,
        "definition": "temerity",
        "type": "n.",
        "word": "Recklessness."
    },
    {
        "matched": false,
        "definition": "temporal",
        "type": "adj.",
        "word": "Pertaining to or concerned with the affairs of the present life."
    },
    {
        "matched": false,
        "definition": "temporary",
        "type": "adj.",
        "word": "Lasting for a short time only."
    },
    {
        "matched": false,
        "definition": "temporize",
        "type": "v.",
        "word": "To pursue a policy of delay."
    },
    {
        "matched": false,
        "definition": "tempt",
        "type": "v.",
        "word": "To offer to (somebody) an inducement to do wrong."
    },
    {
        "matched": false,
        "definition": "tempter",
        "type": "n.",
        "word": "An allurer or enticer to evil."
    },
    {
        "matched": false,
        "definition": "tenacious",
        "type": "adj.",
        "word": "Unyielding."
    },
    {
        "matched": false,
        "definition": "tenant",
        "type": "n.",
        "word": "An occupant."
    },
    {
        "matched": false,
        "definition": "tendency",
        "type": "n.",
        "word": "Direction or inclination, as toward some objector end."
    },
    {
        "matched": false,
        "definition": "tenet",
        "type": "n.",
        "word": "Any opinion, principle, dogma, or doctrine that a person believes or maintains as          "
    },
    {
        "matched": false,
        "definition": "tenor",
        "type": "n.",
        "word": "A settled course or manner of progress."
    },
    {
        "matched": false,
        "definition": "tense",
        "type": "adj.",
        "word": "Strained to stiffness."
    },
    {
        "matched": false,
        "definition": "tentative",
        "type": "adj.",
        "word": "Done as an experiment."
    },
    {
        "matched": false,
        "definition": "tenure",
        "type": "n.",
        "word": "The term during which a thing is held."
    },
    {
        "matched": false,
        "definition": "tercentenary",
        "type": "adj.",
        "word": "Pertaining to a period of 300 years."
    },
    {
        "matched": false,
        "definition": "termagant",
        "type": "adj.",
        "word": "Violently abusive and quarrelsome."
    },
    {
        "matched": false,
        "definition": "terminal",
        "type": "adj.",
        "word": "Pertaining to or creative of a boundary, limit."
    },
    {
        "matched": false,
        "definition": "terminate",
        "type": "v.",
        "word": "To put an end or stop to."
    },
    {
        "matched": false,
        "definition": "termination",
        "type": "n.",
        "word": "The act of ending or concluding."
    },
    {
        "matched": false,
        "definition": "terminus",
        "type": "n.",
        "word": "The final point or goal."
    },
    {
        "matched": false,
        "definition": "terrify",
        "type": "v.",
        "word": "To fill with extreme fear."
    },
    {
        "matched": false,
        "definition": "territorial",
        "type": "adj.",
        "word": "Pertaining to the domain over which a sovereign state exercises          "
    },
    {
        "matched": false,
        "definition": "terse",
        "type": "adj.",
        "word": "Pithy."
    },
    {
        "matched": false,
        "definition": "testament",
        "type": "n.",
        "word": "A will."
    },
    {
        "matched": false,
        "definition": "testator",
        "type": "n.",
        "word": "The maker of a will."
    },
    {
        "matched": false,
        "definition": "testimonial",
        "type": "n.",
        "word": "A formal token of regard, often presented in public."
    },
    {
        "matched": false,
        "definition": "thearchy",
        "type": "n.",
        "word": "Government by a supreme deity."
    },
    {
        "matched": false,
        "definition": "theism",
        "type": "n.",
        "word": "Belief in God."
    },
    {
        "matched": false,
        "definition": "theocracy",
        "type": "n.",
        "word": "A government administered by ecclesiastics."
    },
    {
        "matched": false,
        "definition": "theocrasy",
        "type": "n.",
        "word": "The mixed worship of polytheism."
    },
    {
        "matched": false,
        "definition": "theologian",
        "type": "n.",
        "word": "A professor of divinity."
    },
    {
        "matched": false,
        "definition": "theological",
        "type": "adj.",
        "word": "Based on or growing out of divine revelation."
    },
    {
        "matched": false,
        "definition": "theology",
        "type": "n.",
        "word": "The branch of theological science that treats of God."
    },
    {
        "matched": false,
        "definition": "theoretical",
        "type": "adj.",
        "word": "Directed toward knowledge for its own sake without respect to          "
    },
    {
        "matched": false,
        "definition": "theorist",
        "type": "n.",
        "word": "One given to speculating."
    },
    {
        "matched": false,
        "definition": "theorize",
        "type": "v.",
        "word": "To speculate."
    },
    {
        "matched": false,
        "definition": "thereabout",
        "type": "adv.",
        "word": "Near that number, quantity, degree, place, or time, approximately."
    },
    {
        "matched": false,
        "definition": "therefor",
        "type": "adv.",
        "word": "For that or this."
    },
    {
        "matched": false,
        "definition": "thermal",
        "type": "adj.",
        "word": "Of or pertaining to heat."
    },
    {
        "matched": false,
        "definition": "thermoelectric",
        "type": "adj.",
        "word": "Denoting electricity produced by heat."
    },
    {
        "matched": false,
        "definition": "thermoelectricity",
        "type": "n.",
        "word": "Electricity generated by differences of temperature,"
    },
    {
        "matched": false,
        "definition": "thesis",
        "type": "n.",
        "word": "An essay or treatise on a particular subject."
    },
    {
        "matched": false,
        "definition": "thoroughbred",
        "type": "adj.",
        "word": "Bred from the best or purest blood or stock."
    },
    {
        "matched": false,
        "definition": "thoroughfare",
        "type": "n.",
        "word": "A public street or road."
    },
    {
        "matched": false,
        "definition": "thrall",
        "type": "n.",
        "word": "One controlled by an appetite or a passion."
    },
    {
        "matched": false,
        "definition": "tilth",
        "type": "n.",
        "word": "Cultivation."
    },
    {
        "matched": false,
        "definition": "timbre",
        "type": "n.",
        "word": "The quality of a tone, as distinguished from intensity and pitch."
    },
    {
        "matched": false,
        "definition": "timorous",
        "type": "adj.",
        "word": "Lacking courage."
    },
    {
        "matched": false,
        "definition": "tincture",
        "type": "n.",
        "word": "A solution, usually alcoholic, of some principle used in medicine."
    },
    {
        "matched": false,
        "definition": "tinge",
        "type": "n.",
        "word": "A faint trace of color."
    },
    {
        "matched": false,
        "definition": "tipsy",
        "type": "adj.",
        "word": "Befuddled with drinks."
    },
    {
        "matched": false,
        "definition": "tirade",
        "type": "n.",
        "word": "Harangue."
    },
    {
        "matched": false,
        "definition": "tireless",
        "type": "adj.",
        "word": "Untiring."
    },
    {
        "matched": false,
        "definition": "tiresome",
        "type": "adj.",
        "word": "Wearisome."
    },
    {
        "matched": false,
        "definition": "Titanic",
        "type": "adj.",
        "word": "Of vast size or strength."
    },
    {
        "matched": false,
        "definition": "toilsome",
        "type": "adj.",
        "word": "Laborious."
    },
    {
        "matched": false,
        "definition": "tolerable",
        "type": "adj.",
        "word": "Moderately good."
    },
    {
        "matched": false,
        "definition": "tolerance",
        "type": "n.",
        "word": "Forbearance in judging of the acts or opinions of others."
    },
    {
        "matched": false,
        "definition": "tolerant",
        "type": "adj.",
        "word": "Indulgent."
    },
    {
        "matched": false,
        "definition": "tolerate",
        "type": "v.",
        "word": "To passively permit or put up with."
    },
    {
        "matched": false,
        "definition": "toleration",
        "type": "n.",
        "word": "A spirit of charitable leniency."
    },
    {
        "matched": false,
        "definition": "topography",
        "type": "n.",
        "word": "The art of representing on a map the physical features of any locality or          "
    },
    {
        "matched": false,
        "definition": "torpor",
        "type": "n.",
        "word": "Apathy."
    },
    {
        "matched": false,
        "definition": "torrid",
        "type": "adj.",
        "word": "Excessively hot."
    },
    {
        "matched": false,
        "definition": "tortious",
        "type": "adj.",
        "word": "Wrongful."
    },
    {
        "matched": false,
        "definition": "tortuous",
        "type": "adj.",
        "word": "Abounding in irregular bends or turns."
    },
    {
        "matched": false,
        "definition": "torturous",
        "type": "adj.",
        "word": "Marked by extreme suffering."
    },
    {
        "matched": false,
        "definition": "tractable",
        "type": "adj.",
        "word": "Easily led or controlled."
    },
    {
        "matched": false,
        "definition": "trait",
        "type": "n.",
        "word": "A distinguishing feature or quality."
    },
    {
        "matched": false,
        "definition": "trajectory",
        "type": "n.",
        "word": "The path described by a projectile moving under given forces."
    },
    {
        "matched": false,
        "definition": "trammel",
        "type": "n.",
        "word": "An impediment."
    },
    {
        "matched": false,
        "definition": "tranquil",
        "type": "adj.",
        "word": "Calm."
    },
    {
        "matched": false,
        "definition": "tranquilize",
        "type": "v.",
        "word": "To soothe."
    },
    {
        "matched": false,
        "definition": "tranquility",
        "type": "n.",
        "word": "Calmness."
    },
    {
        "matched": false,
        "definition": "transalpine",
        "type": "adj.",
        "word": "Situated on the other side of the Alps."
    },
    {
        "matched": false,
        "definition": "transact",
        "type": "v.",
        "word": "To do business."
    },
    {
        "matched": false,
        "definition": "transatlantic",
        "type": "adj.",
        "word": "Situated beyond or on the other side of the Atlantic."
    },
    {
        "matched": false,
        "definition": "transcend",
        "type": "v.",
        "word": "To surpass."
    },
    {
        "matched": false,
        "definition": "transcendent",
        "type": "adj.",
        "word": "Surpassing."
    },
    {
        "matched": false,
        "definition": "transcontinental",
        "type": "adj.",
        "word": "Extending or passing across a continent."
    },
    {
        "matched": false,
        "definition": "transcribe",
        "type": "v.",
        "word": "To write over again (something already written)"
    },
    {
        "matched": false,
        "definition": "transcript",
        "type": "n.",
        "word": "A copy made directly from an original."
    },
    {
        "matched": false,
        "definition": "transfer",
        "type": "v.",
        "word": "To convey, remove, or cause to pass from one person or place to another."
    },
    {
        "matched": false,
        "definition": "transferable",
        "type": "adj.",
        "word": "Capable of being conveyed from one person or place to another."
    },
    {
        "matched": false,
        "definition": "transferee",
        "type": "n.",
        "word": "The person to whom a transfer is made."
    },
    {
        "matched": false,
        "definition": "transference",
        "type": "n.",
        "word": "The act of conveying from one person or place to another."
    },
    {
        "matched": false,
        "definition": "transferrer",
        "type": "n.",
        "word": "One who or that which conveys from one person or place to another."
    },
    {
        "matched": false,
        "definition": "transfigure",
        "type": "v.",
        "word": "To give an exalted meaning or glorified appearance to."
    },
    {
        "matched": false,
        "definition": "transfuse",
        "type": "v.",
        "word": "To pour or cause to pass, as a fluid, from one vessel to another."
    },
    {
        "matched": false,
        "definition": "transfusible",
        "type": "adj.",
        "word": "Capable of being poured from one vessel to another."
    },
    {
        "matched": false,
        "definition": "transfusion",
        "type": "n.",
        "word": "The act of pouring from one vessel to another."
    },
    {
        "matched": false,
        "definition": "transgress",
        "type": "v.",
        "word": "To break a law."
    },
    {
        "matched": false,
        "definition": "transience",
        "type": "n.",
        "word": "Something that is of short duration."
    },
    {
        "matched": false,
        "definition": "transient",
        "type": "n.",
        "word": "One who or that which is only of temporary existence."
    },
    {
        "matched": false,
        "definition": "transition",
        "type": "n.",
        "word": "Passage from one place, condition, or action to another."
    },
    {
        "matched": false,
        "definition": "transitory",
        "type": "adj.",
        "word": "Existing for a short time only."
    },
    {
        "matched": false,
        "definition": "translate",
        "type": "v.",
        "word": "To give the sense or equivalent of in another language or dialect."
    },
    {
        "matched": false,
        "definition": "translator",
        "type": "n.",
        "word": "An interpreter."
    },
    {
        "matched": false,
        "definition": "translucence",
        "type": "n.",
        "word": "The property or state of allowing the passage of light."
    },
    {
        "matched": false,
        "definition": "translucent",
        "type": "adj.",
        "word": "Allowing the passage of light."
    },
    {
        "matched": false,
        "definition": "transmissible",
        "type": "adj.",
        "word": "That may e sent through or across."
    },
    {
        "matched": false,
        "definition": "transmission",
        "type": "n.",
        "word": "The act of sending through or across."
    },
    {
        "matched": false,
        "definition": "transmit",
        "type": "v.",
        "word": "To send trough or across."
    },
    {
        "matched": false,
        "definition": "transmute",
        "type": "v.",
        "word": "To change in nature, substance, or form."
    },
    {
        "matched": false,
        "definition": "transparent",
        "type": "adj.",
        "word": "Easy to see through or understand."
    },
    {
        "matched": false,
        "definition": "transpire",
        "type": "v.",
        "word": "To come to pass."
    },
    {
        "matched": false,
        "definition": "transplant",
        "type": "v.",
        "word": "To remove and plant in another place."
    },
    {
        "matched": false,
        "definition": "transposition",
        "type": "n.",
        "word": "The act of reversing the order or changing the place of."
    },
    {
        "matched": false,
        "definition": "transverse",
        "type": "adj.",
        "word": "Lying or being across or in a crosswise direction."
    },
    {
        "matched": false,
        "definition": "travail",
        "type": "n.",
        "word": "Hard or agonizing labor."
    },
    {
        "matched": false,
        "definition": "travesty",
        "type": "n.",
        "word": "A grotesque imitation."
    },
    {
        "matched": false,
        "definition": "treacherous",
        "type": "adj.",
        "word": "Perfidious."
    },
    {
        "matched": false,
        "definition": "treachery",
        "type": "n.",
        "word": "Violation of allegiance, confidence, or plighted faith."
    },
    {
        "matched": false,
        "definition": "treasonable",
        "type": "adj.",
        "word": "Of the nature of betrayal, treachery, or breech of allegiance."
    },
    {
        "matched": false,
        "definition": "treatise",
        "type": "n.",
        "word": "An elaborate literary composition presenting a subject in all its parts."
    },
    {
        "matched": false,
        "definition": "treble",
        "type": "adj.",
        "word": "Multiplied by three."
    },
    {
        "matched": false,
        "definition": "trebly",
        "type": "adv.",
        "word": "Triply."
    },
    {
        "matched": false,
        "definition": "tremendous",
        "type": "adj.",
        "word": "Awe-inspiring."
    },
    {
        "matched": false,
        "definition": "tremor",
        "type": "n.",
        "word": "An involuntary trembling or shivering."
    },
    {
        "matched": false,
        "definition": "tremulous",
        "type": "adj.",
        "word": "Characterized by quivering or unsteadiness."
    },
    {
        "matched": false,
        "definition": "trenchant",
        "type": "adj.",
        "word": "Cutting deeply and quickly."
    },
    {
        "matched": false,
        "definition": "trepidation",
        "type": "n.",
        "word": "Nervous uncertainty of feeling."
    },
    {
        "matched": false,
        "definition": "trestle",
        "type": "n.",
        "word": "An open braced framework for supporting the horizontal stringers of a          "
    },
    {
        "matched": false,
        "definition": "triad",
        "type": "n.",
        "word": "A group of three persons of things."
    },
    {
        "matched": false,
        "definition": "tribune",
        "type": "n.",
        "word": "Any champion of the rights and liberties of the people: often used as the name          "
    },
    {
        "matched": false,
        "definition": "trickery",
        "type": "n.",
        "word": "Artifice."
    },
    {
        "matched": false,
        "definition": "tricolor",
        "type": "adj.",
        "word": "Of three colors."
    },
    {
        "matched": false,
        "definition": "tricycle",
        "type": "n.",
        "word": "A three-wheeled vehicle."
    },
    {
        "matched": false,
        "definition": "trident",
        "type": "n.",
        "word": "The three-pronged fork that was the emblem of Neptune."
    },
    {
        "matched": false,
        "definition": "triennial",
        "type": "adj.",
        "word": "Taking place every third year."
    },
    {
        "matched": false,
        "definition": "trimness",
        "type": "n.",
        "word": "Neatness."
    },
    {
        "matched": false,
        "definition": "trinity",
        "type": "n.",
        "word": "A threefold personality existing in the one divine being or substance."
    },
    {
        "matched": false,
        "definition": "trio",
        "type": "n.",
        "word": "Three things grouped or associated together."
    },
    {
        "matched": false,
        "definition": "triple",
        "type": "adj.",
        "word": "Threefold."
    },
    {
        "matched": false,
        "definition": "triplicate",
        "type": "adj.",
        "word": "Composed of or pertaining to three related things or parts."
    },
    {
        "matched": false,
        "definition": "triplicity",
        "type": "n.",
        "word": "The state of being triple or threefold."
    },
    {
        "matched": false,
        "definition": "tripod",
        "type": "n.",
        "word": "A three-legged stand, usually hinged near the top, for supporting some          "
    },
    {
        "matched": false,
        "definition": "trisect",
        "type": "v.",
        "word": "To divide into three parts, especially into three equal parts."
    },
    {
        "matched": false,
        "definition": "trite",
        "type": "adj.",
        "word": "Made commonplace by frequent repetition."
    },
    {
        "matched": false,
        "definition": "triumvir",
        "type": "n.",
        "word": "One of three men united coordinately in public office or authority."
    },
    {
        "matched": false,
        "definition": "trivial",
        "type": "adj.",
        "word": "Of little importance or value."
    },
    {
        "matched": false,
        "definition": "troublesome",
        "type": "adj.",
        "word": "Burdensome."
    },
    {
        "matched": false,
        "definition": "truculence",
        "type": "n.",
        "word": "Ferocity."
    },
    {
        "matched": false,
        "definition": "truculent",
        "type": "adj.",
        "word": "Having the character or the spirit of a savage."
    },
    {
        "matched": false,
        "definition": "truism",
        "type": "n.",
        "word": "A statement so plainly true as hardly to require statement or proof."
    },
    {
        "matched": false,
        "definition": "truthful",
        "type": "adj.",
        "word": "Veracious."
    },
    {
        "matched": false,
        "definition": "turgid",
        "type": "adj.",
        "word": "Swollen."
    },
    {
        "matched": false,
        "definition": "turpitude",
        "type": "n.",
        "word": "Depravity."
    },
    {
        "matched": false,
        "definition": "tutelage",
        "type": "n.",
        "word": "The act of training or the state of being under instruction."
    },
    {
        "matched": false,
        "definition": "tutelar",
        "type": "adj.",
        "word": "Protective."
    },
    {
        "matched": false,
        "definition": "tutorship",
        "type": "n.",
        "word": "The office of a guardian."
    },
    {
        "matched": false,
        "definition": "twinge",
        "type": "n.",
        "word": "A darting momentary local pain."
    },
    {
        "matched": false,
        "definition": "typical",
        "type": "adj.",
        "word": "Characteristic."
    },
    {
        "matched": false,
        "definition": "typify",
        "type": "v.",
        "word": "To serve as a characteristic example of."
    },
    {
        "matched": false,
        "definition": "typographical",
        "type": "adj.",
        "word": "Pertaining to typography or printing."
    },
    {
        "matched": false,
        "definition": "typography",
        "type": "n.",
        "word": "The arrangement of composed type, or the appearance of printed matter."
    },
    {
        "matched": false,
        "definition": "tyrannical",
        "type": "adj.",
        "word": "Despotic."
    },
    {
        "matched": false,
        "definition": "tyranny",
        "type": "n.",
        "word": "Absolute power arbitrarily or unjustly administrated."
    },
    {
        "matched": false,
        "definition": "tyro",
        "type": "n.",
        "word": "One slightly skilled in or acquainted with any trade or profession."
    },
    {
        "matched": false,
        "definition": "ubiquitous",
        "type": "adj.",
        "word": "Being present everywhere."
    },
    {
        "matched": false,
        "definition": "ulterior",
        "type": "adj.",
        "word": "Not so pertinent as something else to the matter spoken of."
    },
    {
        "matched": false,
        "definition": "ultimate",
        "type": "adj.",
        "word": "Beyond which there is nothing else."
    },
    {
        "matched": false,
        "definition": "ultimatum",
        "type": "n.",
        "word": "A final statement or proposal, as concerning terms or conditions."
    },
    {
        "matched": false,
        "definition": "ultramundane",
        "type": "adj.",
        "word": "Pertaining to supernatural things or to another life."
    },
    {
        "matched": false,
        "definition": "ultramontane",
        "type": "adj.",
        "word": "Beyond the mountains, especially beyond the Alps (that is, on their          "
    },
    {
        "matched": false,
        "definition": "umbrage",
        "type": "n.",
        "word": "A sense of injury."
    },
    {
        "matched": false,
        "definition": "unaccountable",
        "type": "adj.",
        "word": "Inexplicable."
    },
    {
        "matched": false,
        "definition": "unaffected",
        "type": "adj.",
        "word": "Sincere."
    },
    {
        "matched": false,
        "definition": "unanimous",
        "type": "adj.",
        "word": "Sharing the same views or sentiments."
    },
    {
        "matched": false,
        "definition": "unanimity",
        "type": "n.",
        "word": "The state or quality of being of one mind."
    },
    {
        "matched": false,
        "definition": "unavoidable",
        "type": "adj.",
        "word": "Inevitable."
    },
    {
        "matched": false,
        "definition": "unbearable",
        "type": "adj.",
        "word": "Unendurable."
    },
    {
        "matched": false,
        "definition": "unbecoming",
        "type": "adj.",
        "word": "Unsuited to the wearer, place, or surroundings."
    },
    {
        "matched": false,
        "definition": "unbelief",
        "type": "n.",
        "word": "Doubt."
    },
    {
        "matched": false,
        "definition": "unbiased",
        "type": "adj.",
        "word": "Impartial, as judgment."
    },
    {
        "matched": false,
        "definition": "unbridled",
        "type": "adj.",
        "word": "Being without restraint."
    },
    {
        "matched": false,
        "definition": "uncommon",
        "type": "adj.",
        "word": "Rare."
    },
    {
        "matched": false,
        "definition": "unconscionable",
        "type": "adj.",
        "word": "Ridiculously or unjustly excessive."
    },
    {
        "matched": false,
        "definition": "unconscious",
        "type": "adj.",
        "word": "Not cognizant of objects, actions, etc."
    },
    {
        "matched": false,
        "definition": "unction",
        "type": "n.",
        "word": "The art of anointing as with oil."
    },
    {
        "matched": false,
        "definition": "unctuous",
        "type": "adj.",
        "word": "Oily."
    },
    {
        "matched": false,
        "definition": "undeceive",
        "type": "v.",
        "word": "To free from deception, as by apprising of the real state of affairs."
    },
    {
        "matched": false,
        "definition": "undercharge",
        "type": "v.",
        "word": "To make an inadequate charge for."
    },
    {
        "matched": false,
        "definition": "underexposed",
        "type": "adj.",
        "word": "Insufficiently exposed for proper or full development, as negatives in          "
    },
    {
        "matched": false,
        "definition": "undergarment",
        "type": "n.",
        "word": "A garment to be worn under the ordinary outer garments."
    },
    {
        "matched": false,
        "definition": "underman",
        "type": "v.",
        "word": "To equip with less than the full complement of men."
    },
    {
        "matched": false,
        "definition": "undersell",
        "type": "v.",
        "word": "To sell at a lower price than."
    },
    {
        "matched": false,
        "definition": "undersized",
        "type": "adj.",
        "word": "Of less than the customary size."
    },
    {
        "matched": false,
        "definition": "underhanded",
        "type": "adj.",
        "word": "Clandestinely carried on."
    },
    {
        "matched": false,
        "definition": "underlie",
        "type": "v.",
        "word": "To be the ground or support of."
    },
    {
        "matched": false,
        "definition": "underling",
        "type": "n.",
        "word": "A subordinate."
    },
    {
        "matched": false,
        "definition": "undermine",
        "type": "v.",
        "word": "To subvert in an underhand way."
    },
    {
        "matched": false,
        "definition": "underrate",
        "type": "v.",
        "word": "To undervalue."
    },
    {
        "matched": false,
        "definition": "understate",
        "type": "v.",
        "word": "To fail to put strongly enough, as a case."
    },
    {
        "matched": false,
        "definition": "undervalue",
        "type": "v.",
        "word": "To underestimate."
    },
    {
        "matched": false,
        "definition": "underworld",
        "type": "n.",
        "word": "Hades."
    },
    {
        "matched": false,
        "definition": "underwrite",
        "type": "v.",
        "word": "To issue or be party to the issue of a          "
    },
    {
        "matched": false,
        "definition": "undue",
        "type": "adj.",
        "word": "More than sufficient."
    },
    {
        "matched": false,
        "definition": "undulate",
        "type": "v.",
        "word": "To move like a wave or in waves."
    },
    {
        "matched": false,
        "definition": "undulous",
        "type": "adj.",
        "word": "Resembling waves."
    },
    {
        "matched": false,
        "definition": "unfavorable",
        "type": "adj.",
        "word": "Adverse."
    },
    {
        "matched": false,
        "definition": "ungainly",
        "type": "adj.",
        "word": "Clumsy."
    },
    {
        "matched": false,
        "definition": "unguent",
        "type": "n.",
        "word": "Any ointment or lubricant for local application."
    },
    {
        "matched": false,
        "definition": "unicellular",
        "type": "adj.",
        "word": "Consisting of a single cell."
    },
    {
        "matched": false,
        "definition": "univalence",
        "type": "n.",
        "word": "Monovalency."
    },
    {
        "matched": false,
        "definition": "unify",
        "type": "v.",
        "word": "To cause to be one."
    },
    {
        "matched": false,
        "definition": "unique",
        "type": "adj.",
        "word": "Being the only one of its kind."
    },
    {
        "matched": false,
        "definition": "unison",
        "type": "n.",
        "word": "A condition of perfect agreement and accord."
    },
    {
        "matched": false,
        "definition": "unisonant",
        "type": "adj.",
        "word": "Being in a condition of perfect agreement and accord."
    },
    {
        "matched": false,
        "definition": "Unitarian",
        "type": "adj.",
        "word": "Pertaining to a religious body that rejects the doctrine of the Trinity."
    },
    {
        "matched": false,
        "definition": "unlawful",
        "type": "adj.",
        "word": "Illegal."
    },
    {
        "matched": false,
        "definition": "unlimited",
        "type": "adj.",
        "word": "Unconstrained."
    },
    {
        "matched": false,
        "definition": "unnatural",
        "type": "adj.",
        "word": "Artificial."
    },
    {
        "matched": false,
        "definition": "unnecessary",
        "type": "adj.",
        "word": "Not essential under the circumstances."
    },
    {
        "matched": false,
        "definition": "unsettle",
        "type": "v.",
        "word": "To put into confusion."
    },
    {
        "matched": false,
        "definition": "unsophisticated",
        "type": "adj.",
        "word": "Showing inexperience."
    },
    {
        "matched": false,
        "definition": "unspeakable",
        "type": "adj.",
        "word": "Abominable."
    },
    {
        "matched": false,
        "definition": "untimely",
        "type": "adj.",
        "word": "Unseasonable."
    },
    {
        "matched": false,
        "definition": "untoward",
        "type": "adj.",
        "word": "Causing annoyance or hindrance."
    },
    {
        "matched": false,
        "definition": "unutterable",
        "type": "adj.",
        "word": "Inexpressible."
    },
    {
        "matched": false,
        "definition": "unwieldy",
        "type": "adj.",
        "word": "Moved or managed with difficulty, as from great size or awkward shape."
    },
    {
        "matched": false,
        "definition": "unwise",
        "type": "adj.",
        "word": "Foolish."
    },
    {
        "matched": false,
        "definition": "unyoke",
        "type": "v.",
        "word": "To separate."
    },
    {
        "matched": false,
        "definition": "up-keep",
        "type": "n.",
        "word": "Maintenance."
    },
    {
        "matched": false,
        "definition": "upbraid",
        "type": "v.",
        "word": "To reproach as deserving blame."
    },
    {
        "matched": false,
        "definition": "upcast",
        "type": "n.",
        "word": "A throwing upward."
    },
    {
        "matched": false,
        "definition": "upheaval",
        "type": "n.",
        "word": "Overthrow or violent disturbance of established order or condition."
    },
    {
        "matched": false,
        "definition": "upheave",
        "type": "v.",
        "word": "To raise or lift with effort."
    },
    {
        "matched": false,
        "definition": "uppermost",
        "type": "adj.",
        "word": "First in order of precedence."
    },
    {
        "matched": false,
        "definition": "uproarious",
        "type": "adj.",
        "word": "Noisy."
    },
    {
        "matched": false,
        "definition": "uproot",
        "type": "v.",
        "word": "To eradicate."
    },
    {
        "matched": false,
        "definition": "upturn",
        "type": "v.",
        "word": "To throw into confusion."
    },
    {
        "matched": false,
        "definition": "urban",
        "type": "adj.",
        "word": "Of, or pertaining to, or like a city."
    },
    {
        "matched": false,
        "definition": "urbanity",
        "type": "n.",
        "word": "Refined or elegant courtesy."
    },
    {
        "matched": false,
        "definition": "urchin",
        "type": "n.",
        "word": "A roguish, mischievous boy."
    },
    {
        "matched": false,
        "definition": "urgency",
        "type": "n.",
        "word": "The pressure of necessity."
    },
    {
        "matched": false,
        "definition": "usage",
        "type": "n.",
        "word": "Treatment."
    },
    {
        "matched": false,
        "definition": "usurious",
        "type": "adj.",
        "word": "Taking unlawful or exorbitant interest on money loaned."
    },
    {
        "matched": false,
        "definition": "usurp",
        "type": "v.",
        "word": "To take possession of by force."
    },
    {
        "matched": false,
        "definition": "usury",
        "type": "n.",
        "word": "The demanding for the use of money as a loan, a rate of interest beyond what is          "
    },
    {
        "matched": false,
        "definition": "utilitarianism",
        "type": "n.",
        "word": "The ethical doctrine that actions are right because they are useful or          "
    },
    {
        "matched": false,
        "definition": "utility",
        "type": "n.",
        "word": "Fitness for some desirable practical purpose."
    },
    {
        "matched": false,
        "definition": "utmost",
        "type": "n.",
        "word": "The greatest possible extent."
    },
    {
        "matched": false,
        "definition": "vacate",
        "type": "v.",
        "word": "To leave."
    },
    {
        "matched": false,
        "definition": "vaccinate",
        "type": "v.",
        "word": "To inoculate with vaccine virus or virus of cowpox."
    },
    {
        "matched": false,
        "definition": "vacillate",
        "type": "v.",
        "word": "To waver."
    },
    {
        "matched": false,
        "definition": "vacuous",
        "type": "adj.",
        "word": "Empty."
    },
    {
        "matched": false,
        "definition": "vacuum",
        "type": "n.",
        "word": "A space entirely devoid of matter."
    },
    {
        "matched": false,
        "definition": "vagabond",
        "type": "n.",
        "word": "A wanderer."
    },
    {
        "matched": false,
        "definition": "vagrant",
        "type": "n.",
        "word": "An idle wanderer."
    },
    {
        "matched": false,
        "definition": "vainglory",
        "type": "n.",
        "word": "Excessive, pretentious, and demonstrative vanity."
    },
    {
        "matched": false,
        "definition": "vale",
        "type": "n.",
        "word": "Level or low land between hills."
    },
    {
        "matched": false,
        "definition": "valediction",
        "type": "n.",
        "word": "A bidding farewell."
    },
    {
        "matched": false,
        "definition": "valedictorian",
        "type": "n.",
        "word": "Student who delivers an address at graduating exercises of an educational          "
    },
    {
        "matched": false,
        "definition": "valedictory",
        "type": "n.",
        "word": "A parting address."
    },
    {
        "matched": false,
        "definition": "valid",
        "type": "adj.",
        "word": "Founded on truth."
    },
    {
        "matched": false,
        "definition": "valorous",
        "type": "adj.",
        "word": "Courageous."
    },
    {
        "matched": false,
        "definition": "vapid",
        "type": "adj.",
        "word": "Having lost sparkling quality and flavor."
    },
    {
        "matched": false,
        "definition": "vaporizer",
        "type": "n.",
        "word": "An atomizer."
    },
    {
        "matched": false,
        "definition": "variable",
        "type": "adj.",
        "word": "Having a tendency to change."
    },
    {
        "matched": false,
        "definition": "variance",
        "type": "n.",
        "word": "Change."
    },
    {
        "matched": false,
        "definition": "variant",
        "type": "n.",
        "word": "A thing that differs from another in form only, being the same in essence or          "
    },
    {
        "matched": false,
        "definition": "variation",
        "type": "n.",
        "word": "Modification."
    },
    {
        "matched": false,
        "definition": "variegate",
        "type": "v.",
        "word": "To mark with different shades or colors."
    },
    {
        "matched": false,
        "definition": "vassal",
        "type": "n.",
        "word": "A slave or bondman."
    },
    {
        "matched": false,
        "definition": "vaudeville",
        "type": "n.",
        "word": "A variety show."
    },
    {
        "matched": false,
        "definition": "vegetal",
        "type": "adj.",
        "word": "Of or pertaining to plants."
    },
    {
        "matched": false,
        "definition": "vegetarian",
        "type": "n.",
        "word": "One who believes in the theory that man's food should be exclusively          "
    },
    {
        "matched": false,
        "definition": "vegetate",
        "type": "v.",
        "word": "To live in a monotonous, passive way without exercise of the mental faculties."
    },
    {
        "matched": false,
        "definition": "vegetation",
        "type": "n.",
        "word": "Plant-life in the aggregate."
    },
    {
        "matched": false,
        "definition": "vegetative",
        "type": "adj.",
        "word": "Pertaining to the process of plant-life."
    },
    {
        "matched": false,
        "definition": "vehement",
        "type": "adj.",
        "word": "Very eager or urgent."
    },
    {
        "matched": false,
        "definition": "velocity",
        "type": "n.",
        "word": "Rapid motion."
    },
    {
        "matched": false,
        "definition": "velvety",
        "type": "adj.",
        "word": "Marked by lightness and softness."
    },
    {
        "matched": false,
        "definition": "venal",
        "type": "adj.",
        "word": "Mercenary, corrupt."
    },
    {
        "matched": false,
        "definition": "vendible",
        "type": "adj.",
        "word": "Marketable."
    },
    {
        "matched": false,
        "definition": "vendition",
        "type": "n.",
        "word": "The act of selling."
    },
    {
        "matched": false,
        "definition": "vendor",
        "type": "n.",
        "word": "A seller."
    },
    {
        "matched": false,
        "definition": "veneer",
        "type": "n.",
        "word": "Outside show or elegance."
    },
    {
        "matched": false,
        "definition": "venerable",
        "type": "adj.",
        "word": "Meriting or commanding high esteem."
    },
    {
        "matched": false,
        "definition": "venerate",
        "type": "v.",
        "word": "To cherish reverentially."
    },
    {
        "matched": false,
        "definition": "venereal",
        "type": "adj.",
        "word": "Pertaining to or proceeding from sexual intercourse."
    },
    {
        "matched": false,
        "definition": "venial",
        "type": "adj.",
        "word": "That may be pardoned or forgiven, a forgivable sin."
    },
    {
        "matched": false,
        "definition": "venison",
        "type": "n.",
        "word": "The flesh of deer."
    },
    {
        "matched": false,
        "definition": "venom",
        "type": "n.",
        "word": "The poisonous fluid that certain animals secrete."
    },
    {
        "matched": false,
        "definition": "venous",
        "type": "adj.",
        "word": "Of, pertaining to, or contained or carried in a vein or veins."
    },
    {
        "matched": false,
        "definition": "veracious",
        "type": "adj.",
        "word": "Habitually disposed to speak the truth."
    },
    {
        "matched": false,
        "definition": "veracity",
        "type": "n.",
        "word": "Truthfulness."
    },
    {
        "matched": false,
        "definition": "verbatim",
        "type": "adv.",
        "word": "Word for word."
    },
    {
        "matched": false,
        "definition": "verbiage",
        "type": "n.",
        "word": "Use of many words without necessity."
    },
    {
        "matched": false,
        "definition": "verbose",
        "type": "adj.",
        "word": "Wordy."
    },
    {
        "matched": false,
        "definition": "verdant",
        "type": "adj.",
        "word": "Green with vegetation."
    },
    {
        "matched": false,
        "definition": "verification",
        "type": "n.",
        "word": "The act of proving to be true, exact, or accurate."
    },
    {
        "matched": false,
        "definition": "verify",
        "type": "v.",
        "word": "To prove to be true, exact, or accurate."
    },
    {
        "matched": false,
        "definition": "verily",
        "type": "adv.",
        "word": "In truth."
    },
    {
        "matched": false,
        "definition": "verity",
        "type": "n.",
        "word": "Truth."
    },
    {
        "matched": false,
        "definition": "vermin",
        "type": "n.",
        "word": "A noxious or troublesome animal."
    },
    {
        "matched": false,
        "definition": "vernacular",
        "type": "n.",
        "word": "The language of one's country."
    },
    {
        "matched": false,
        "definition": "vernal",
        "type": "adj.",
        "word": "Belonging to or suggestive of the spring."
    },
    {
        "matched": false,
        "definition": "versatile",
        "type": "adj.",
        "word": "Having an aptitude for applying oneself to new and varied tasks or to          "
    },
    {
        "matched": false,
        "definition": "version",
        "type": "n.",
        "word": "A description or report of something as modified by one's character or opinion."
    },
    {
        "matched": false,
        "definition": "vertex",
        "type": "n.",
        "word": "Apex."
    },
    {
        "matched": false,
        "definition": "vertical",
        "type": "adj.",
        "word": "Lying or directed perpendicularly to the horizon."
    },
    {
        "matched": false,
        "definition": "vertigo",
        "type": "n.",
        "word": "Dizziness."
    },
    {
        "matched": false,
        "definition": "vestige",
        "type": "n.",
        "word": "A visible trace, mark, or impression, of something absent, lost, or gone."
    },
    {
        "matched": false,
        "definition": "vestment",
        "type": "n.",
        "word": "Clothing or covering."
    },
    {
        "matched": false,
        "definition": "veto",
        "type": "n.",
        "word": "The constitutional right in a chief executive of refusing to approve an enactment."
    },
    {
        "matched": false,
        "definition": "vicarious",
        "type": "adj.",
        "word": "Suffered or done in place of or for the sake of another."
    },
    {
        "matched": false,
        "definition": "viceroy",
        "type": "n.",
        "word": "A ruler acting with royal authority in place of the sovereign in a colony or          "
    },
    {
        "matched": false,
        "definition": "vicissitude",
        "type": "n.",
        "word": "A change, especially a complete change, of condition or circumstances, as          "
    },
    {
        "matched": false,
        "definition": "vie",
        "type": "v.",
        "word": "To contend."
    },
    {
        "matched": false,
        "definition": "vigilance",
        "type": "n.",
        "word": "Alert and intent mental watchfulness in guarding against danger."
    },
    {
        "matched": false,
        "definition": "vigilant",
        "type": "adj.",
        "word": "Being on the alert to discover and ward off danger or insure safety."
    },
    {
        "matched": false,
        "definition": "vignette",
        "type": "n.",
        "word": "A picture having a background or that is shaded off gradually."
    },
    {
        "matched": false,
        "definition": "vincible",
        "type": "adj.",
        "word": "Conquerable."
    },
    {
        "matched": false,
        "definition": "vindicate",
        "type": "v.",
        "word": "To prove true, right, or real."
    },
    {
        "matched": false,
        "definition": "vindicatory",
        "type": "adj.",
        "word": "Punitive."
    },
    {
        "matched": false,
        "definition": "vindicative",
        "type": "adj.",
        "word": "Revengeful."
    },
    {
        "matched": false,
        "definition": "vinery",
        "type": "n.",
        "word": "A greenhouse for grapes."
    },
    {
        "matched": false,
        "definition": "viol",
        "type": "n.",
        "word": "A stringed instrument of the violin class."
    },
    {
        "matched": false,
        "definition": "viola",
        "type": "n.",
        "word": "A musical instrument somewhat larger than a violin."
    },
    {
        "matched": false,
        "definition": "violator",
        "type": "n.",
        "word": "One who transgresses."
    },
    {
        "matched": false,
        "definition": "violation",
        "type": "n.",
        "word": "Infringement."
    },
    {
        "matched": false,
        "definition": "violoncello",
        "type": "n.",
        "word": "A stringed instrument held between the player's knees."
    },
    {
        "matched": false,
        "definition": "virago",
        "type": "n.",
        "word": "A bold, impudent, turbulent woman."
    },
    {
        "matched": false,
        "definition": "virile",
        "type": "adj.",
        "word": "Masculine."
    },
    {
        "matched": false,
        "definition": "virtu",
        "type": "n.",
        "word": "Rare, curious, or beautiful quality."
    },
    {
        "matched": false,
        "definition": "virtual",
        "type": "adj.",
        "word": "Being in essence or effect, but not in form or appearance."
    },
    {
        "matched": false,
        "definition": "virtuoso",
        "type": "n.",
        "word": "A master in the technique of some particular fine art."
    },
    {
        "matched": false,
        "definition": "virulence",
        "type": "n.",
        "word": "Extreme poisonousness."
    },
    {
        "matched": false,
        "definition": "virulent",
        "type": "adj.",
        "word": "Exceedingly noxious or deleterious."
    },
    {
        "matched": false,
        "definition": "visage",
        "type": "n.",
        "word": "The face, countenance, or look of a person."
    },
    {
        "matched": false,
        "definition": "viscount",
        "type": "n.",
        "word": "In England, a title of nobility, ranking fourth in the order of British          "
    },
    {
        "matched": false,
        "definition": "vista",
        "type": "n.",
        "word": "A view or prospect."
    },
    {
        "matched": false,
        "definition": "visual",
        "type": "adj.",
        "word": "Perceptible by sight."
    },
    {
        "matched": false,
        "definition": "visualize",
        "type": "v.",
        "word": "To give pictorial vividness to a mental representation."
    },
    {
        "matched": false,
        "definition": "vitality",
        "type": "n.",
        "word": "The state or quality of being necessary to existence or continuance."
    },
    {
        "matched": false,
        "definition": "vitalize",
        "type": "v.",
        "word": "To endow with life or energy."
    },
    {
        "matched": false,
        "definition": "vitiate",
        "type": "v.",
        "word": "To contaminate."
    },
    {
        "matched": false,
        "definition": "vituperable",
        "type": "adj.",
        "word": "Deserving of censure."
    },
    {
        "matched": false,
        "definition": "vivacity",
        "type": "n.",
        "word": "Liveliness."
    },
    {
        "matched": false,
        "definition": "vivify",
        "type": "v.",
        "word": "To endue with life."
    },
    {
        "matched": false,
        "definition": "vivisection",
        "type": "n.",
        "word": "The dissection of a living animal."
    },
    {
        "matched": false,
        "definition": "vocable",
        "type": "n.",
        "word": "a word, especially one regarded in relation merely to its qualities of sound."
    },
    {
        "matched": false,
        "definition": "vocative",
        "type": "adj.",
        "word": "Of or pertaining to the act of calling."
    },
    {
        "matched": false,
        "definition": "vociferance",
        "type": "n.",
        "word": "The quality of making a clamor."
    },
    {
        "matched": false,
        "definition": "vociferate",
        "type": "v.",
        "word": "To utter with a loud and vehement voice."
    },
    {
        "matched": false,
        "definition": "vociferous",
        "type": "adj.",
        "word": "Making a loud outcry."
    },
    {
        "matched": false,
        "definition": "vogue",
        "type": "n.",
        "word": "The prevalent way or fashion."
    },
    {
        "matched": false,
        "definition": "volant",
        "type": "adj.",
        "word": "Flying or able to fly."
    },
    {
        "matched": false,
        "definition": "volatile",
        "type": "adj.",
        "word": "Changeable."
    },
    {
        "matched": false,
        "definition": "volition",
        "type": "n.",
        "word": "An act or exercise of will."
    },
    {
        "matched": false,
        "definition": "volitive",
        "type": "adj.",
        "word": "Exercising the will."
    },
    {
        "matched": false,
        "definition": "voluble",
        "type": "adj.",
        "word": "Having great fluency in speaking."
    },
    {
        "matched": false,
        "definition": "voluptuous",
        "type": "adj.",
        "word": "having fullness of beautiful form, as a woman, with or without sensuous or          "
    },
    {
        "matched": false,
        "definition": "voracious",
        "type": "adj.",
        "word": "Eating with greediness or in very large quantities."
    },
    {
        "matched": false,
        "definition": "vortex",
        "type": "n.",
        "word": "A mass of rotating or whirling fluid, especially when sucked spirally toward the          "
    },
    {
        "matched": false,
        "definition": "votary",
        "type": "adj.",
        "word": "Consecrated by a vow or promise."
    },
    {
        "matched": false,
        "definition": "votive",
        "type": "adj.",
        "word": "Dedicated by a vow."
    },
    {
        "matched": false,
        "definition": "vulgarity",
        "type": "n.",
        "word": "Lack of refinement in conduct or speech."
    },
    {
        "matched": false,
        "definition": "vulnerable",
        "type": "adj.",
        "word": "Capable of receiving injuries."
    },
    {
        "matched": false,
        "definition": "waif",
        "type": "n.",
        "word": "A homeless, neglected wanderer."
    },
    {
        "matched": false,
        "definition": "waistcoat",
        "type": "n.",
        "word": "A vest."
    },
    {
        "matched": false,
        "definition": "waive",
        "type": "v.",
        "word": "To relinquish, especially temporarily, as a right or claim."
    },
    {
        "matched": false,
        "definition": "wampum",
        "type": "n.",
        "word": "Beads strung on threads, formerly used among the American Indians as currency."
    },
    {
        "matched": false,
        "definition": "wane",
        "type": "v.",
        "word": "To diminish in size and brilliancy."
    },
    {
        "matched": false,
        "definition": "wantonness",
        "type": "n.",
        "word": "Recklessness."
    },
    {
        "matched": false,
        "definition": "warlike",
        "type": "adj.",
        "word": "Belligerent."
    },
    {
        "matched": false,
        "definition": "wavelet",
        "type": "n.",
        "word": "A ripple."
    },
    {
        "matched": false,
        "definition": "weak-kneed",
        "type": "adj.",
        "word": "Without resolute purpose or energy."
    },
    {
        "matched": false,
        "definition": "weal",
        "type": "n.",
        "word": "Well-being."
    },
    {
        "matched": false,
        "definition": "wean",
        "type": "v.",
        "word": "To transfer (the young) from dependence on mother's milk to another form of          "
    },
    {
        "matched": false,
        "definition": "wearisome",
        "type": "adj.",
        "word": "Fatiguing."
    },
    {
        "matched": false,
        "definition": "wee",
        "type": "adj.",
        "word": "Very small."
    },
    {
        "matched": false,
        "definition": "well-bred",
        "type": "adj.",
        "word": "Of good ancestry."
    },
    {
        "matched": false,
        "definition": "well-doer",
        "type": "n.",
        "word": "A performer of moral and social duties."
    },
    {
        "matched": false,
        "definition": "well-to-do",
        "type": "adj.",
        "word": "In prosperous circumstances."
    },
    {
        "matched": false,
        "definition": "whereabouts",
        "type": "n.",
        "word": "The place in or near which a person or thing is."
    },
    {
        "matched": false,
        "definition": "whereupon",
        "type": "adv.",
        "word": "After which."
    },
    {
        "matched": false,
        "definition": "wherever",
        "type": "adv.",
        "word": "In or at whatever place."
    },
    {
        "matched": false,
        "definition": "wherewith",
        "type": "n.",
        "word": "The necessary means or resources."
    },
    {
        "matched": false,
        "definition": "whet",
        "type": "v.",
        "word": "To make more keen or eager."
    },
    {
        "matched": false,
        "definition": "whimsical",
        "type": "adj.",
        "word": "Capricious."
    },
    {
        "matched": false,
        "definition": "whine",
        "type": "v.",
        "word": "To utter with complaining tone."
    },
    {
        "matched": false,
        "definition": "wholly",
        "type": "adv.",
        "word": "Completely."
    },
    {
        "matched": false,
        "definition": "wield",
        "type": "v.",
        "word": "To use, control, or manage, as a weapon, or instrument, especially with full          "
    },
    {
        "matched": false,
        "definition": "wile",
        "type": "n.",
        "word": "An act or a means of cunning deception."
    },
    {
        "matched": false,
        "definition": "winsome",
        "type": "adj.",
        "word": "Attractive."
    },
    {
        "matched": false,
        "definition": "wintry",
        "type": "adj.",
        "word": "Lacking warmth of manner."
    },
    {
        "matched": false,
        "definition": "wiry",
        "type": "adj.",
        "word": "Thin, but tough and sinewy."
    },
    {
        "matched": false,
        "definition": "witchcraft",
        "type": "n.",
        "word": "Sorcery."
    },
    {
        "matched": false,
        "definition": "witless",
        "type": "adj.",
        "word": "Foolish, indiscreet, or silly."
    },
    {
        "matched": false,
        "definition": "witling",
        "type": "n.",
        "word": "A person who has little understanding."
    },
    {
        "matched": false,
        "definition": "witticism",
        "type": "n.",
        "word": "A witty, brilliant, or original saying or sentiment."
    },
    {
        "matched": false,
        "definition": "wittingly",
        "type": "adv.",
        "word": "With knowledge and by design."
    },
    {
        "matched": false,
        "definition": "wizen",
        "type": "v.",
        "word": "To become or cause to become withered or dry."
    },
    {
        "matched": false,
        "definition": "wizen-faced",
        "type": "adj.",
        "word": "Having a shriveled face."
    },
    {
        "matched": false,
        "definition": "working-man",
        "type": "n.",
        "word": "One who earns his bread by manual labor."
    },
    {
        "matched": false,
        "definition": "workmanlike",
        "type": "adj.",
        "word": "Like or befitting a skilled workman."
    },
    {
        "matched": false,
        "definition": "workmanship",
        "type": "n.",
        "word": "The art or skill of a workman."
    },
    {
        "matched": false,
        "definition": "wrangle",
        "type": "v.",
        "word": "To maintain by noisy argument or dispute."
    },
    {
        "matched": false,
        "definition": "wreak",
        "type": "v.",
        "word": "To inflict, as a revenge or punishment."
    },
    {
        "matched": false,
        "definition": "wrest",
        "type": "v.",
        "word": "To pull or force away by or as by violent twisting or wringing."
    },
    {
        "matched": false,
        "definition": "wretchedness",
        "type": "n.",
        "word": "Extreme misery or unhappiness."
    },
    {
        "matched": false,
        "definition": "writhe",
        "type": "v.",
        "word": "To twist the body, face, or limbs or as in pain or distress."
    },
    {
        "matched": false,
        "definition": "writing",
        "type": "n.",
        "word": "The act or art of tracing or inscribing on a surface letters or ideographs."
    },
    {
        "matched": false,
        "definition": "wry",
        "type": "adj.",
        "word": "Deviating from that which is proper or right."
    },
    {
        "matched": false,
        "definition": "yearling",
        "type": "n.",
        "word": "A young animal past its first year and not yet two years old."
    },
    {
        "matched": false,
        "definition": "zealot",
        "type": "n.",
        "word": "One who espouses a cause or pursues an object in an immoderately partisan          "
    },
    {
        "matched": false,
        "definition": "zeitgeist",
        "type": "n.",
        "word": "The intellectual and moral tendencies that characterize any age or epoch."
    },
    {
        "matched": false,
        "definition": "zenith",
        "type": "n.",
        "word": "The culminating-point of prosperity, influence, or greatness."
    },
    {
        "matched": false,
        "definition": "zephyr",
        "type": "n.",
        "word": "Any soft, gentle wind."
    },
    {
        "matched": false,
        "definition": "zodiac",
        "type": "n.",
        "word": "An imaginary belt encircling the heavens within which are the larger planets."
    }

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
                setTimeout(() => {
                    setCards(prevCards => {
                        return prevCards.map(card => {
                            if (card.word === choiceOne.word) {
                                return { ...card, matched: true };
                            } else {
                                return card;
                            }
                        });
                    });
                    triggerConfetti(); // Trigger confetti on match
                    resetTurn(true);
                }, 2000);

            } else {
                setTimeout(() => resetTurn(), 2500);
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
        setTurns(prev => prev + (matched ? 0 : 1));
        setDisabled(false);
    };

    useEffect(() => {
        shuffleCards();
    }, []);

    return (
        <div className={styles.app}>
        <div className={styles.header}>
            <MatchWord/>
            <hr></hr>
        </div>
        <div className={styles.flipCard}>
            <h2>Vocab Practice</h2>
            <button onClick={shuffleCards}>New Game</button>
            <div className={styles.cardGrid}>
                {cards.map(card => (
                    <Card key={card.id}
                        card={card}
                        handleChoice={handleChoice}
                        flipped={card === choiceOne || card === choiceTwo || card.matched}
                        disabled={disabled}
                        showDefinition={card === choiceTwo}
                    />
                ))}
                <p style={{ fontSize: '27px', color: 'brown' }}>Misses: {turns}</p>
            </div>
            <hr></hr>
            <Random />
            {/* <RothPage /> */}


        </div>
        </div>
    );
}
